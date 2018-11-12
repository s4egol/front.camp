const apiKey = "ff4e5fedad734d3ca5503f69725ea2ca";

function sendRequest(method, urlRequest){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();

        xhr.open(method, urlRequest);
        xhr.onload = function(){
            resolve(xhr.responseText);
        }
        xhr.onerror = function(){
            reject(new Error('Request failed'));
        }
        xhr.send(null);
    });
}

function getAllSources(){
    let promiseRequest = sendRequest("GET", "https://newsapi.org/v1/sources");
    
    let sources = [];
    promiseRequest.then(function(response){
        response = JSON.parse(response);
        response.sources.forEach(source => {
            sources.push({id: source.id, name: source.name, url: source.url});
        });

        let soursesMarkup = sources.reduce((markup, current) => {
            return markup.concat(`<div id="${current.id}" class="news-container"><img class="preview" src="https://besticon-demo.herokuapp.com/icon?url=${current.url}&amp;size=70..120..200">
                <div class="title"><a href="#" onclick='getContentSource("${current.id}");'><strong>"${current.name}"</strong></a></div></div>`);
        }, '');

        document.getElementById("source-container").innerHTML = soursesMarkup;
    }).catch(function(error){
        console.log(error);
    });
}

function getContentSource(source){
    let urlRequest = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;
    let promiseRequest = sendRequest("GET", urlRequest);
    
    promiseRequest.then(function(response){
        response = JSON.parse(response);
        let articles = response.articles.map(article => {
            return {image: article.urlToImage, title: article.title, description: article.description, url: article.url};
        });

        let articlesHTML = getContentSourceHTML(articles);
        document.getElementById("source-container").innerHTML = articlesHTML;
    });
}

function getContentSourceHTML(articles){                          
    let articlesHTML = [];
    if (articles != null){
        articlesHTML = articles.reduce((markup, current) => {
            return markup.concat(`<div class="article"><div class="article-image-div"><img src="${current.image}" class="article-image"></div><div class="article-content"><div class="article-title">
                <h2 class="title-style">${current.title}</h2></div><div class="article-description description-style">${current.description}</div>
                <div class="article-reference"><a href="${current.url}" class="reference-style">Redirect to article >></a></div></div></div>`);
        }, '');
    }
    else{
        articlesHTML = "<div>Articles didn't found<div>";
    }

    return articlesHTML;
}

window.onload = getAllSources;
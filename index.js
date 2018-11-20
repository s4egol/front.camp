import {fetchPolyfill} from 'whatwg-fetch';

const apiKey = "ff4e5fedad734d3ca5503f69725ea2ca";

function getContentSource(articleId){
    if (!articleId) {
        getSources();
    } 
    else 
    {
        getArticle(articleId);
    }
}

function getSources(){
    fetchPolyfill("https://newsapi.org/v1/sources", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            let sources = [];
            data.sources.forEach(source => {
                sources.push({id: source.id, name: source.name, url: source.url});
            });

            let soursesMarkup = sources.reduce((markup, current) => {
                return markup.concat(`<div id="${current.id}" class="news-container"><img class="preview" src="https://besticon-demo.herokuapp.com/icon?url=${current.url}&amp;size=70..120..200">
                    <div class="title"><a class="cursor" id="сontentSource"><strong>"${current.name}"</strong></a></div></div>`);
            }, '');

            document.getElementById("source-container").innerHTML = soursesMarkup;
            sources.forEach(source => {
                document.getElementById(source.id).addEventListener('click', () => getContentSource(source.id));
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function getArticle(articleId){
        history.pushState({articleId}, `Selected: ${articleId}`, `#selected=${articleId}`);    

        let urlRequest = `https://newsapi.org/v1/articles?source=${articleId}&apiKey=${apiKey}`;
        fetchPolyfill(urlRequest, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                let articles = data.articles.map(article => {
                    return {image: article.urlToImage, title: article.title, description: article.description, url: article.url};
                });
        
                let articlesHTML = getContentSourceHTML(articles);
                document.getElementById("source-container").innerHTML = articlesHTML;
            })
            .catch(error => {
                console.log(error);
            });
}

function getContentSourceHTML(articles){                          
    if (articles != null){
        return articles.reduce((markup, current) => {
            return markup.concat(`<div class="article"><div class="article-image-div"><img src="${current.image}" class="article-image"></div><div class="article-content"><div class="article-title">
                <h2 class="title-style">${current.title}</h2></div><div class="article-description description-style">${current.description}</div>
                <div class="article-reference"><a href="${current.url}" class="reference-style">Redirect to article >></a></div></div></div>`);
        }, '');
    }
    else {
        return "<div>Articles didn't found</div>";
    }
}

function сontentSource_onclick(contentId) {
    document.getElementById("сontentSource").addEventListener("click", function() {
        getContentSource(contentId);
    }, false) 
}

window.addEventListener('popstate', e => {
    getContentSource(e.state.articleId)
});

window.onload = getContentSource(null);

history.replaceState({articleId: null}, 'Default state', '');
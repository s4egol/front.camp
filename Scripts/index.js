const apiKey = "ff4e5fedad734d3ca5503f69725ea2ca";

function getAllSources(){
    fetch("https://newsapi.org/v1/sources", { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            let sources = [];
            data.sources.forEach(source => {
                sources.push({id: source.id, name: source.name, url: source.url});
            });

            let soursesMarkup = sources.reduce((markup, current) => {
                return markup.concat(`<div id="${current.id}" class="news-container"><img class="preview" src="https://besticon-demo.herokuapp.com/icon?url=${current.url}&amp;size=70..120..200">
                    <div class="title"><a href="#" onclick='location.href = "./article.html?articleId=${current.id}&apiKey=${apiKey}"'><strong>"${current.name}"</strong></a></div></div>`);
            }, '');
    
            document.getElementById("source-container").innerHTML = soursesMarkup;
        })
        .catch(error => {
            console.log(error);
        });
}

window.onload = getAllSources;
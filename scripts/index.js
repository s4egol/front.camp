import '../styles/core.css';
import '../styles/article.css';
import {API_KEY, API_URL} from './constants'; 
import {DataLoader} from './dataLoader';

class ContentManagment{

    async getSources() {
        var data = await new DataLoader(`${API_URL}/sources`).fetchAsync();
    
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
            document.getElementById(source.id).addEventListener('click', () => this.getContentSource(source.id));
        });
    }

    async getArticle(articleId) {

        history.pushState({articleId}, `Selected: ${articleId}`, `#selected=${articleId}`);    

        let urlRequest = `${API_URL}/articles?source=${articleId}&apiKey=${API_KEY}`;
        let data = await new DataLoader(urlRequest).fetchAsync();

        let articles = data.articles.map(article => {
            return {image: article.urlToImage, title: article.title, description: article.description, url: article.url};
        });

        let articlesHTML = this.getContentSourceHTML(articles);
        document.getElementById("source-container").innerHTML = articlesHTML;
    }

    getContentSourceHTML(articles){                          
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

    сontentSource_onclick(contentId) {
        document.getElementById("сontentSource").addEventListener("click", function() {
            this.getContentSource(contentId);
        }, false); 
    }

    async getContentSource(articleId){
        if (!articleId) {
            await this.getSources();
        } 
        else 
        {
            await this.getArticle(articleId);
        }
    }
}

window.addEventListener('popstate', e => {
    new ContentManagment().getContentSource(e.state.articleId)
});

window.onload = new ContentManagment().getContentSource(null);

history.replaceState({articleId: null}, 'Default state', '');


import '../styles/core.css';
import '../styles/article.css';
import DataManager from './actions/dataManager.js';
import ProxyMarkupFactory from './api/proxyMarkupFactory.js';

class ContentManagment{

    async getSources() {      
        let data = await DataManager.getSources();

        let sources = [];
        data.sources.forEach(source => {
            sources.push({id: source.id, name: source.name, url: source.url});
        });
    
        let soursesMarkup = new ProxyMarkupFactory({typeEntity: "SOURCE", data: sources}).createMarkup();
    
        document.getElementById("source-container").innerHTML = soursesMarkup;
        document.getElementById("article-container").innerHTML = "";

        sources.forEach(source => {
            document.getElementById(source.id).addEventListener('click', () => this.getContentSource(source.id));
        });
    }

    async getArticle(articleId) {

        history.pushState({articleId}, `Selected: ${articleId}`, `#selected=${articleId}`);    

        let data = await DataManager.getArticles(articleId);

        let articles = data.articles.map(article => {
            return {image: article.urlToImage, title: article.title, description: article.description, url: article.url};
        });

        let articlesHTML = new ProxyMarkupFactory({typeEntity: "ARTICLE", data: articles}).createMarkup();
        
        document.getElementById("article-container").innerHTML = articlesHTML;
        document.getElementById("source-container").innerHTML = "";
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


import NewsDispatcher from './Dispatcher.js';
import ActionTypes from './ActionTypes.js';
import Store from './Store.js';
import NewsService from '../api/newsService.js';

class DataManager {
    
    constructor() { }

    async getSources() {
        return await new NewsService().getAllNews()
            .then(data => {
                NewsDispatcher.dispatch({
                    type: ActionTypes.GET_SOURCES,
                    count: data.sources.length
                });

                return data;
            });
    }

    async getArticles(sourceId) {
        return await new NewsService().getAllArticles(sourceId)
            .then(data => {
                NewsDispatcher.dispatch({
                    type: ActionTypes.GET_ARTICLES,
                    articleId: sourceId
                });

                return data;
            });
    }
}

export default new DataManager();
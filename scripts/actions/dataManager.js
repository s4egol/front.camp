import NewsDispatcher from './Dispatcher.js';
import ActionTypes from './ActionTypes.js';
import store from './Store.js';
import ProxyRequestFactory from '../api/proxyFactory.js';
import {API_URL, API_KEY} from '../constants.js';

class DataManager {
    
    constructor() { }

    async getSources() {
        return await new ProxyRequestFactory({method: 'GET', url: `${API_URL}/sources`})
            .send()
            .then(data => {
                NewsDispatcher.dispatch({
                    type: ActionTypes.GET_SOURCES,
                    count: data.sources.length
                });

                return data;
            });
    }

    async getArticles(articleId) {
        return await new ProxyRequestFactory({method: 'GET', url: `${API_URL}/articles?source=${articleId}&apiKey=${API_KEY}`})
            .send()
            .then(data => {
                NewsDispatcher.dispatch({
                    type: ActionTypes.GET_ARTICLES,
                    articleId: articleId
                });

                return data;
            });
    }
}

export default new DataManager();
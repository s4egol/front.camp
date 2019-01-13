import ActionTypes from './ActionTypes.js';
import NewsDispatcher from './Dispatcher.js';

class DataStore {

    constructor() { }

    getSourcesInfo(count){
        console.log(`${count} sources were requested`);
    }

    getArticleInfo(sourceId){
        console.log(`User requested articles by '${sourceId}' sourceId`);
    }
}

const dataStore = new DataStore();

NewsDispatcher.register((action) => {
    switch(action.type){
        case ActionTypes.GET_ARTICLES:
            dataStore.getArticleInfo(action.articleId);
            break;
        case ActionTypes.GET_SOURCES:
            dataStore.getSourcesInfo(action.count);
        default:
    }
})

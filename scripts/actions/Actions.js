import ActioTypes from './ActionTypes.js';
import NewsDispatcher from './Dispatcher.js';

const NewsActions = {

  getSources: function() {
    NewsDispatcher.dispatch({
        type: ActioTypes.GET_SOURCES,
        count: number
    });
  },
  getArticles: function(articleId) {
    NewsDispatcher.dispatch({
        type: ActioTypes.GET_ARTICLES,
        articleId: any
    });
  }
}

export default NewsActions;
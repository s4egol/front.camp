import HttpService from './httpService.js';
import {API_KEY, API_URL} from '../constants.js';

class NewsService extends HttpService {

    constructor() {
        super(API_KEY);
    }

    async getAllNews() {
        return await super.get(`${API_URL}/sources`);
    }

    async getAllArticles(sourceId) {
        return await super.get(`${API_URL}/articles?source=${sourceId}&apiKey=${API_KEY}`);
    }
}

export default NewsService;
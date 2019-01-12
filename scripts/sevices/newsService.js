import http from './http.js';
import {API_URL} from '../constants.js';

class NewsService {

    constructor(url){
        this.url = url;
    }
    
    setSource(resource){
        this.url = `${this.url}/${resource}`;
        return this;
    }

    async create(model) {
        return http.post(this.url, model);
    }
    
    async read(filter = {}) {
        return http.get(this.urlBuilder(filter));
    }
    
    async update(id, model) {
        return http.put(`${this.url}/${id}`, model);
    }
    
    async delete(id) {
        return http.delete(`${this.url}/${id}`);
    }

    urlBuilder = (params = {}) => {
        Object.entries(params).map( item => {
            const [key, value] = item;
            return { key, value };
        }).reduce((accumulator, { key, value }) => { 
            `${accumulator}${key}=${value}`, `${this.url}?` 
        }, this.url);
    }
}

export default new NewsService(API_URL);
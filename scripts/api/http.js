import {API_KEY} from '../constants.js';
import errorHandler from '../errorHandler/lazyErrorHandler.js'

class Http {

    constructor(apiKey) {
        this.key = apiKey;
    }

    async post(url, data) {
        return this.sendRequest(url, {
          headers: {
            Accept: 'application/json', 'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(data),
        });
    }

    async get(url) {
        return this.sendRequest(url);
    }

    async put(url, data) {
        return this.sendRequest(url, {
          headers: {
            Accept: 'application/json', 'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify(data),
        });
    }

    async delete(url) {
        return this.sendRequest(url, { method: 'DELETE' });
    }

    checkStatus(response) {
        if (response.ok) {
            return response;
        } 
        else 
        {
            return errorHandler(responce);
        }
    }

    sendRequest = async (url, options = {}) => {
        const request = new Request(url, options);
        request.headers.append('authorization', `bearer ${this.key}`);

        let response;
        try {
            response = await fetch(request);
            this.checkStatus(response);
        }
        catch(e){
            return errorHandler(e);
        }

        return await response.json();
    }
}

export default new Http(API_KEY);
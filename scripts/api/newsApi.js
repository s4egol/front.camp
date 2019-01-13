import http from './http.js';

export class GetMethodRequest {

    constructor(url){
        this.url = url;
    }

    async send() {
        return http.get(this.url);
    }
}

export class PostMethodRequest {

    constructor(url, model){
        this.url = url;
        this.data = model; 
    }

    async send() {
        return http.post(this.url, this.data);
    }
}

export class PutMethodRequest {

    constructor(url, model){
        this.url = url;
        this.data = model; 
    }

    async send() {
        return http.put(this.url, this.data);
    }
}

export class DeleteMethodRequest {

    constructor(url){
        this.url = url;
    }

    async send() {
        return http.delete(this.url);
    }
}
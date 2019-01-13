import {GetMethodRequest, PostMethodRequest, PutMethodRequest, DeleteMethodRequest} from './newsApi';

class RequestFactory {
    
    constructor({method, url, body}) {
        this.method = method;
        this.url = url;
        this.body = body;

        return this.createRequest();
    }

    createRequest() {
        switch(this.method){
            case 'GET':
                return new GetMethodRequest(this.url);
            case 'POST':
                return new PostMethodRequest(this.url, this.body);
            case 'PUT':
                return new PutMethodRequest(this.url, this.url);
            case 'DELETE':
                return new DeleteMethodRequest(this.url);
            default:
                throw new Error("Invalid request method");
        }
    }
}

export default RequestFactory;
export class DataLoader {

    constructor(url){
        this.url = url;
    }

    async fetchAsync(){
        var response = await fetch(this.url);
        this.checkStatus(response);
        return await response.json();
    }

    checkStatus(response){
        if (response.ok) {
            return response;
        } 
        else 
        {
            var error = new Error(response.statusText)
            error.response = response;
            throw error;
        }
    }
}
import {ArticleMarkup, SourceMarkup} from './markup.js';

class MarkupFactory {
    
    constructor({typeEntity, data}) {
        this.typeEntity = typeEntity;
        this.data = data;

        return this.createMarkup();
    }

    createMarkup() {
        switch(this.typeEntity){
            case 'SOURCE':
                return new SourceMarkup(this.data);
            case 'ARTICLE':
                return new ArticleMarkup(this.data);
            default:
                throw new Error("Invalid request method");
        }
    }
}

export default MarkupFactory;
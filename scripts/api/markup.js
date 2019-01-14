
export class SourceMarkup {

    constructor(data) {
        this.data = data;
    }

    createMarkup() {
        return this.data.reduce((markup, current) => {
            return markup.concat(`<div id="${current.id}" class="news-container"><img class="preview" src="https://besticon-demo.herokuapp.com/icon?url=${current.url}&amp;size=70..120..200">
                <div class="title"><a class="cursor" id="сontentSource"><strong>"${current.name}"</strong></a></div></div>`);
        }, '');
    }
}

export class ArticleMarkup {

    constructor(data) {
        this.data = data;
    }

    createMarkup() {
        if (this.data != null){
            return this.data.reduce((markup, current) => {
                return markup.concat(`<div class="article"><div class="article-image-div"><img src="${current.image}" class="article-image"></div><div class="article-content"><div class="article-title">
                    <h2 class="title-style">${current.title}</h2></div><div class="article-description description-style">${current.description}</div>
                    <div class="article-reference"><a href="${current.url}" class="reference-style">Redirect to article >></a></div></div></div>`);
            }, '');
        }
        else {
            return "<div>Articles didn't found</div>";
        }
    }
}


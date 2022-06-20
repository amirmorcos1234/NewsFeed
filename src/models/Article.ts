class Article{
    author:string;
    description:string
    publishedAt:Date
    urlToImage:string
    title:string
    url:string

    constructor(author:string,description:string,
        publishedAt:Date,
        url:string,
        urlToImage:string,
        title:string){
        this.author=author
        this.description=description
        this.publishedAt=publishedAt
        this.url=url
        this.urlToImage=urlToImage
        this.title=title
    }
}

export default Article
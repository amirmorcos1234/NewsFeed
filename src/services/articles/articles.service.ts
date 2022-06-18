import axios from '../../network/api'

class ArticleService{
    getArticles(search=''){
        return axios.get(endpoints.ARTICLES(search))
    }
}

export default new ArticleService()
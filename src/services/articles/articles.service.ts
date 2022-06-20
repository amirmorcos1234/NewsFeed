import axios from '../../network/api'

import endpoints from '../../network/endpoints'

export const getArticles=(search='')=>{
        return axios.get(endpoints.ARTICLES(search))   
}

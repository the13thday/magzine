import {Request} from '../utils/util';

class SearchModule extends Request {
    getRecommend (keyword) {
       return this.fetchData({
            url: `/searchArticleRecommend/${keyword}`
        });
    }
    getArticleList (keyword, start = 0) {
        return this.fetchData({
             url: `/searchArticleList/${keyword}/${start}`
         });
     }
}

export {SearchModule};
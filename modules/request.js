import { Request } from '../utils/util';



class RequestModule extends Request {
    getRecommendInfo (magzineId=0) {
        return this.fetchData({
            url: `/getRecommendInfo/${magzineId}`
        });
    }
    getMarkTypeList (magzineId=0) {
        return this.fetchData({
            url: `/getMarkTypeList/${magzineId}`
        })
    }      
    getArcileList (magzineId=0, start=0) {
        return this.fetchData({
            url: `/getIndexArticleList/${magzineId}/${start}`
        })
    }          
}

export { RequestModule };
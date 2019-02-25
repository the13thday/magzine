// pages/search/search.js
import {SearchModule} from '../../modules/searchModule';
import {randomStr} from '../../utils/util';
const request = new SearchModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    recommend: [],
    value: '',
    more: '',
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {keyword} = options;
    this.setValue(keyword);
    this.getData(keyword);
  },
  onReachBottom () {
    this.loadMoreArticle();
  },
  getData(keyword) {
    Promise.all([
      request.getRecommend(keyword),
      request.getArticleList(keyword)
    ])
    .then(res => {
      this.setData({
        recommend: res[0],
        articleList: res[1],
        loading: false
      })
    });
  },
  setValue (value) {
    this.setData({
      value
    })
  },
  loadMoreArticle () {
    this.setData({
      more: randomStr(20)
    })
  }

})
//index.js
//获取应用实例
import {RequestModule as Request} from '../../modules/request';
import {randomStr} from '../../utils/util';

Page({
  data: {
    markList: [],
    articleList: [],
    recommend: {},
    loadMore: '',
    magzineId: 0,
    loading: true
  },
  onLoad: function () {
    this.getData(this.data.magzineId);
  },
  onNav (e) {
    var index = e.detail.index;
    this._toPageTop();
    this._setMagzineId(index);
    this._resetData();
    this.getData(index);
  },
  onCatalog () {
    wx.navigateTo({
      url: "/pages/catalog/catalog"
    })
  },
  onReachBottom () {
    this.loadMoreArticle();
  },
  getData(magzineId) {
    const request = new Request();
    Promise.all([
      request.getRecommendInfo(magzineId),
      request.getArcileList(magzineId),
      request.getMarkTypeList(magzineId)
    ]).then(res=>{
      this.setData({
        recommend: res[0],
        articleList: res[1],
        markList: res[2]
      });
      this.hideLoading();
    })
  },
  loadMoreArticle () {
    this.setData({
      loadMore: randomStr(20)
    })
  },
  hideLoading () {
    this.setData({
      loading: false
    })
  },
  _setMagzineId(index) {
    this.setData({
      magzineId: index,
    });
  },
  _resetData () {
    this.setData({
      markList: [],
      articleList: [],
      recommend: {}
    });
  },
  _toPageTop () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  }
})

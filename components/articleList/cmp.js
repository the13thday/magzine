// components/articleList/cmp.js
import {RequestModule as Request} from '../../modules/request';
import {SearchModule} from '../../modules/searchModule';
const request = new Request();
const searchRequest = new SearchModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: Array,
    more: {
      type: String,
      value: '',
      observer: 'loadMore'
    },
    magzineId: {
      type: Number,
      observer: 'resetNoMoreParam'
    },
    keyWord: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    noMoreText: '没有更多数据了',
    pageType: ''
  },
  attached () {
    this.setPageType();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    resetNoMoreParam () {
      this.setData({
        noMoreData: false
      })
    },
    loadMore (newVal) {
      if (this._isLocked() || this.data.noMoreData) return;
      this._fastenLock();
      const start = this.data.articleList.length;
      let promise;
      if (this.data.pageType === "search") {
        const keyWord = this.data.keyWord;
        promise = searchRequest.getArticleList(keyWord, start);
      } else {
        const magzineId = this.data.magzineId;
        promise = request.getArcileList(magzineId, start);
      }
      promise.then(res => {
        this._setMoreData(res);
        this._unLock();
      })
    },

    _isLocked () {
      return this.data.loading;
    },
    _fastenLock () {
      this.setData({
        loading: true
      })
    },
    _unLock () {
      this.setData({
        loading: false
      })
    },
    _setMoreData (list) {
      var lastArr = this.data.articleList;
      var newArr = lastArr.concat(list)
      if (lastArr.length === newArr.length) {
        this.setData({
          noMoreData: true
        });
        wx.showToast({
          title: '没有更多数据了',
          icon: 'none'
        });
        return;
      }
      this.setData({
        articleList: newArr
      })
    },
    setPageType () {
      const curPages = getCurrentPages();
      const route = curPages[curPages.length - 1].route;
      let pageType;
      if (route === "pages/search/search") {
        pageType = "search"
      } else {
        pageType = "index"
      }
      this.setData({
        pageType
      });
    }
  }
})

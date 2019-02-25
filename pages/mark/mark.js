// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    articleList: [],
    authorized: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserAuth();
  },
  onShow() {
    if (this.data.authorized) {
      this.getLikeList();
    }
  },
  getLikeList () {
    const likeList = wx.getStorageSync('like');
    this.setData({
      articleList: likeList
    })
  },

  getUserAuth () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          this._setAuthorize();
          this.getLikeList();
          wx.getUserInfo({
            success: result => {
             this._setUserInfo(result.userInfo);
            }
          })
        }
      }
    })
  },

  _setUserInfo (userInfo) {
    this.setData({
      userInfo
    })
  },

  _setAuthorize () {
    this.setData({
      authorized: true
    })
  },

  onGetUserInfo (e) {
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this._setAuthorize();
      this.getLikeList();
      this._setUserInfo(userInfo);
    }
  }

})
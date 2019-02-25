// pages/catalog/catalog.js
import {tagInfoList} from '../../utils/tagList';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagList: [],
    subscribedTagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setTagList();
    this.getSubscribedTagList();
  },
  onShow () {
    this.setData({
      searchWord: ''
    })
  },
  onSubscribe (e) {
    this.refreshSubscribedTagList(e.detail);
  },
  setTagList () {
    this.setData({
      tagList: tagInfoList
    })
  },
  getSubscribedTagList () {
    const subscribedTagList = wx.getStorageSync('tagList');
    this.setData({subscribedTagList})
  },
  refreshSubscribedTagList (tag) {
    let subscribedTagList = this.data.subscribedTagList;
    if (tag.subscribed) {
      subscribedTagList.unshift(tag);
    } else {
      subscribedTagList = subscribedTagList.filter(item => {
        return item.typeId != tag.typeId
      })
    }
    this.setData({
      subscribedTagList
    })
  }
})
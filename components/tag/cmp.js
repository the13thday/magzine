// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagId: Number,
    tagName: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTagTap () {
      // var id = this.properties.tagId;
      // wx.navigateTo({
      //   url: `/pages/type/type?typeId=${id}`
      // })
      this._showError();
    },
    _showError () {
      wx.showToast({
        title: '对不起当前为测试版本，无法实现跳转功能',
        icon: 'none',
        duration: 1000,
        mask: true
      }) 
    }
  }
})

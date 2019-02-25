// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String
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
    onConfirm (e) {
      let value = e.detail.value || this.data.value;
      value = value.trim();
      if (value === '') {
        return;
      }
      if (value !== "读书") {
        wx.showToast({
          title: "目前只支持搜索 读书 关键字"
        })
        return;
      }
      wx.navigateTo({
        url: `/pages/search/search?keyword=${value}`
      })
    },
    onBlur (e) {
      this.setData({
        value: e.detail.value
      })
    }
  } 
})

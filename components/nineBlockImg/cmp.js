// components/nineBlockImg/cmp.js
import titleBeh from '../behaviors/behavior_title';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [titleBeh],
  properties: {
    imgArr: Array
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
    previewImage (e) {
      const index = e.currentTarget.dataset.index;
      let arr = this.properties.imgArr;
      wx.previewImage({
        urls: arr,
        current: arr[index]
      })
    }
  }
})

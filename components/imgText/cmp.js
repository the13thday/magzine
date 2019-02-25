// components/imgText/cmp.js
import titleBeh from '../behaviors/behavior_title';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [titleBeh],
  properties: {
    imgSrc: {
      type: String,
      value: '/images/bg1.jpg'
    }
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

  }
})

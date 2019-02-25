// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navList: {
      type: Array,
      value: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    navId: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onScrollTap (e) {
      let index = e.currentTarget.dataset.index;
      if (index === this.data.active) {
        return;
      }
      this.setData({
        active: index,
        navId: `navItem${index === 0 ? 0 : index - 1}`
      });
      this.triggerEvent('switchnav', {index});
    }
  }
})

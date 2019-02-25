// components/recommend/cmp.js
import { getDateInChinese as getDate} from '../../utils/util';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: Object,
    magzineId: {
      type: Number,
      value: 0,
      observer (newVal) {
        console.log(newVal);
      }
    }
  },
  attached () {
    this.setData({
      time: getDate()
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    time: '',
    magzineType: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂']
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

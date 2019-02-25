// components/article/cmp.js
import {wxStorageManager} from '../../modules/wxStorage';
const likeManager = new wxStorageManager('like');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article: Object
  },

  /**
   * 组件的初始数据
   */
  attached () {
    this.setLikeStatus();
  },
  onShow () {
  
  },
  data: {
    liked: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeTogggle (e) {
      const article = this.data.article;
      const artId = article.artId;
      let flag = e.detail.like;

      if (flag) {
        likeManager.unshiftData(article);
      } else {
        likeManager.removeData('artId', artId);
      }
    },
    setLikeStatus () {
      const artId = this.data.article.artId;
      if (likeManager.hasData('artId', artId)) {
        this.setData({
          liked: true
        })
      }
    }
  }
})

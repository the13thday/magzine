// components/subscribe/cmp.js
import { wxStorageManager } from '../../modules/wxStorage';
const tagListManager = new wxStorageManager('tagList');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    subscribed: false
  },
  attached () {
    const tagId = this.data.tagId;
    if (tagListManager.hasData('typeId', tagId)) {
      this.setData({
        subscribed: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap () {
      const type = this.data.tag;
      const typeId = this.data.tagId;
      if (this.data.subscribed) {
        tagListManager.removeData('typeId', this.data.tagId);
      } else {
        tagListManager.unshiftData({
          type,
          typeId
        });
      }
      this._toggleSubscribe();
      this.triggerEvent('toggleSubscribe', {type, typeId, subscribed: this.data.subscribed});
    },
    _toggleSubscribe () {
      let subscribed = this.data.subscribed;
      this.setData({
        subscribed: !subscribed
      });
    }
  }
  
})

// components/video/cmp.js
import titleBeh from '../behaviors/behavior_title';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [titleBeh],
  properties: {
    videoId: String,
    src: String,
    poster: String,
    duration: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },
  attached () {
    this._setVideo();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onControllerTap () {
      this.video.seek(0);
      this.video.play();
      this._togglePoster();
    },
    onMaskTap () {
      this._togglePoster();
      this.video.stop();
    },
    _setVideo () {
      this.video = wx.createVideoContext(this.properties.videoId, this);
      
    },
    _togglePoster () {
      this.setData({
        showPoster: !this.data.showPoster
      })
    }
  }
})

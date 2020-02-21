import wepy from 'wepy'
import appConfig from '../common/app_config'
import Api from '../services/api/index'

export default class globalMixin extends wepy.mixin {
  onShow() {
    // console.log('mixin onShow')
  }

  onLoad(options) {
    appConfig.scene = options['scene']?decodeURIComponent(options.scene):'';
    if( appConfig.scene ) Api.scan({scene:appConfig.scene})

    wx.getClipboardData({
      success: (res)=>{
        if( res.data=="开启调试" ){
          wx.setEnableDebug({
            enableDebug: true
          })
        }else if( res.data=="关闭调试" ){
          wx.setEnableDebug({
            enableDebug: false
          })
        }
      }
    })
  }
  methods = {    
    
  }
}

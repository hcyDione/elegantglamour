//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    imgsrc:['../../images/flower.jpg','../../images/flower.jpg','../../images/flower.jpg'],
    slidedata: ['图片','裁剪','无像','素比'],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onMyEvent:function(e){
    wx.navigateTo({
      url: '../image/image'
    })
  },
  doclup:function (e) {
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    /*canvas绘制截屏入口*/
    const ctx = wx.createCanvasContext('clip')
    const grd = ctx.createCircularGradient(160, 60, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 300, 200)
    ctx.draw()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

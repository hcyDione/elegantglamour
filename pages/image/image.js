//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageSrc:[ 
        {
            src: '../../images/2.jpg',
            id: 'watermark1',
            height: 225
        },
        {
            src: '../../images/3.jpg',
            id: 'watermark2',
            height: 225
        },
        {
            src: '../../images/5.jpg',
            id: 'watermark3',
            height: 225
        },
        {
            src: '../../images/6.jpg',
            id: 'watermark4',
            height: 225
        },
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ww: '',
    wh: '',
    rate: '',
  },
  openImg: function (){
      wx.previewImage({
        urls:['https://images.yitushijie.com/14884583027432837516',
              "https://images.yitushijie.com/7788740822400064400",
              "https://images.yitushijie.com/5802485626031398318",
              "https://images.yitushijie.com/17651004434542059395"
              ]
      })
  },
  addwatermark: function (e) {
      var id = e.target.dataset.id
      var src = e.target.dataset.src 
      var index = e.target.dataset.index 
      var sw = e.detail.width
      var sh = e.detail.height
      var ssw = this.ww
      var ssh = (this.ww/sw)*this.wh
      const ctx = wx.createCanvasContext(id)
      ctx.drawImage(src, 0, 0, sw, sh, 0, 0, ssw, ssh)
      ctx.setFillStyle('rgba(252,255,255,0.8)');
      ctx.setFontSize(20)
      ctx.fillText('Dione watermark',80,80);
      ctx.draw()
  },
  onShareAppMessage: function () {
    if (res.from === "button"){

    }
    return {
        title: 'test watermark',
        path: 'pages/image/image'
    }
  },
  onLoad: function (options) {
      let self = this
      wx.getSystemInfo({
          success: function (res) {
              self.ww = res.windowWidth
              self.wh = res.windowHeight
              self.rate = res.windowWidth / res.windowHeight
              self.setData({
                 ww: self.ww,
                 wh: self.wh,
                 rate: self.rate
              })
          }
      })
  },
})

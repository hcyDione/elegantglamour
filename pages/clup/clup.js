const app = getApp()

/*拖动时候的位移*/
var pageX = 0
var pageY = 0

Page({
  data: {
      blackH: 0, //黑色背景的高度
      imageH: 0, //所选的图片的高度
      imgsrc: '',//所上传的图片临时路径
      cutW: 0, //剪贴框的宽
      cutH: 0, //剪贴框的高
      cutL: 0, //剪贴框的左
      cutT: 0, //剪贴框的高
      genimgsrc: ''//生成的图片的地址
  },
  chooseImg: function () {
      let self = this
      wx.chooseImage({
          count: 1, 
          sizeType: ['original', 'compressed'], 
          sourceType: ['album', 'camera'],
          success: function (res) {
              var tempFilePaths =  res.tempFilePaths[0]
              wx.getImageInfo({
                  src: tempFilePaths,
                  success: function (res) {
                      self.imgsrc = tempFilePaths
                      var width = res.width 
                      var height = res.height/(width/app.globalData.screenwidth)
                      var imageH = Math.floor(height)
                      var blackH = Math.floor(height + 80) //距离图片上下留出40像素
                      var cutW = app.globalData.screenwidth - 80
                      var cutH = Math.floor(height - 80) //距离剪贴框上下留出40像素
                      var cutL = 40 
                      var cutT = 80
                      self.setData({
                          imgsrc :  tempFilePaths,
                          blackH :  blackH,
                          imageH :  imageH,
                          cutW 　:　cutW,
                          cutH 　:  cutH,
                          cutL　 :  cutL,
                          cutT　 :  cutT
                      })
                  }
              })
          }
      })
  },
  startMove: function (e) {
      pageX = e.touches[0].pageX
      pageY = e.touches[0].pageY
  },
  isMoveing: function (e) {
      let self = this
      var scrollX = (pageX - e.touches[0].pageX)
      var scrollY = (pageY - e.touches[0].pageY)
      var minX = Math.max((self.data.cutL - scrollX), 0)
      var minY = Math.max((self.data.cutT - scrollY), 40)
      var maxX = app.globalData.screenwidth - self.data.cutW
      var maxY = self.data.blackH - self.data.cutH - 40
      this.setData({
          cutL: Math.min(maxX, minX),
          cutT: Math.min(maxY, minY),
      })
      pageX = e.touches[0].pageX
      pageY = e.touches[0].pageY
      //console.log(`${maxX} ----- ${maxY}`)
  },
  genImg () {
      let self =  this
      const ctx = wx.createCanvasContext('gencanvas')
      ctx.drawImage(self.data.imgsrc,self.data.cutL, self.data.cutT, self.data.cutW, self.data.cutH, 0, 0, self.data.cutW, self.data.cutH);
      ctx.draw(true, () => {
          wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width: self.data.cutW,
              height: self.data.cutH,
              destWidth: self.data.cutW,
              destHeight: self.data.cutH,
              quality:0.5,
              canvasId: 'gencanvas',
              success: function (res) {
                  console.log(res.tempFilePath)
                  self.genimgsrc = res.tempFilePath
                  self.setData({
                      genimgsrc: res.tempFilePath
                  })
              }
          })
      })

  },
  onLoad: function () {
      var pixelRatio = app.globalData.pixelRatio
      var screenwidth = app.globalData.screenwidth
  }
})
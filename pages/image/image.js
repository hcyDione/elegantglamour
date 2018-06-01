//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageSrc:['../../images/2.jpg','../../images/3.jpg','../../images/5.jpg','../../images/6.jpg'],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    var url = e.target.dataset.src
    var img = new Image();
    img.src = url;
    console.log(img+'aaa')
    var canvas = document.getElementById("watermark");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img,0,0);
    ctx.font = "14px 微软雅黑";
    ctx.fillStyle = "rgba(252,255,255,0.8)";
    ctx.fillText('Dione',10,50); 
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
    
  },
})

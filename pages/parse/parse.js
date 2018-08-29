//index.js
//获取应用实例
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    imgsrc:['../../images/flower.jpg','../../images/flower.jpg','../../images/flower.jpg'],
    slidedata: ['图片','裁剪','无像','素比'],
    essay: '',
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
     var that = this
     var essay = '<div><p style="text-indent: 2em;">&nbsp;</p><p style="text-indent: 2em;">荷花盛开、万物葱绿，由西安交通大学附属儿童医院（西安市儿童医院）主办的“2018长安国际儿童医学发展论坛”在陕西大会堂召开。7月8日，在主论坛开幕的第2天，新生儿热点论坛也在这里如火如荼的举行。</p><p><br/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/01eb9f940df542989a49fc30b0ba7643.jpg" title="01eb9f940df542989a49fc30b0ba7643.jpg" alt="01eb9f940df542989a49fc30b0ba7643.jpg"/></p><p><br/></p><p style="text-indent: 2em;">自从国家二胎政策的开放，新的生育高峰随之而来，新生儿疾病发病率也呈逐渐上升趋势。同时对于新生儿、早产儿、低出生体重儿安全保障的要求也越来越高。基于以上原因，本次会议为加快新生儿学科发展提供了良好的机遇，为新生儿学科建设创造了难得的交流平台。</p><p style="text-indent: 2em;">&nbsp;</p><p style="text-indent: 2em;">&nbsp;</p><p style="text-indent: 2em;">会议由西安交通大学医学院第一附属医院李晖教授主持。在此次会议中，国内外的新生儿专家、教授齐聚一堂，共同分享及交流新生儿科医学临床研究的热点问题，新生儿重症护理，诊断、治疗和最新进展等第一手学术知识。论坛邀请北京大学第一医院冯琪教授、复旦大学附属儿科医院周文浩教授和马端教授，宁夏医科大学总医院邱银萍主任、北京师范大学牛海晶教授、美国加州大学高伟教授，及我院刘建平主任、赵玉娟主任、于淑群主任、马英主任、王文静主任、潘永康主任、曹如梅护士长等人，他们分别就早产儿院外随访、新生儿惊厥诊疗进展、新生儿疾病基因检测、新生儿早期保健、近红外光谱成像技术的婴幼儿脑发育研究、新生儿大脑功能网络发育的影像学研究、新生儿病案分析、临床问题处理策略、阵痛管理及新生儿个性化护理等方面的内容进行了精彩的讲述。会场学习气氛浓厚，参会学员纷纷表示收获良多，受益匪浅。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p><br/></p><p style="text-indent: 2em;">&nbsp;</p><p style="text-indent: 2em;">这些高水平的讲座让大家充分了解了新生儿学科在国际前沿学术的发展动态，以及临床业已成熟的新技术、新项目。答辩环节中，与会代表频频举手、踊跃提问，气氛十分热烈。每一位专家也都进行了热情、专业的解答。</p><p><br/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/266589093fe84599b92528ee5159970a.jpg" style="" title="266589093fe84599b92528ee5159970a.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/4e1661ba6a424acb988c2785c0e3f8aa.jpg" style="" title="4e1661ba6a424acb988c2785c0e3f8aa.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/53c09f721005490da290bf190aa708a3.jpg" style="" title="53c09f721005490da290bf190aa708a3.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/7a676594d7ac44c283ad252ad8aa04af.jpg" style="" title="7a676594d7ac44c283ad252ad8aa04af.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/de647c952c70451e91590935091af4a5.jpg" style="" title="de647c952c70451e91590935091af4a5.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/c81cbb1e03f54f55828fb2305950dd26.jpg" style="" title="c81cbb1e03f54f55828fb2305950dd26.jpg"/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/d73e205a0a694c85aeedf593019e7c4c.jpg" style="" title="d73e205a0a694c85aeedf593019e7c4c.jpg"/></p><p style="text-indent: 2em;">本次热点论坛为进一步推动新生儿专业诊疗理念的更新和医疗服务水平的提高起到了积极的推动作用，为广大参会学者提供了一个了解前沿动态、拓展临床视野、夯实理论基础，加强沟通合作的学习交流平台。</p><p style="text-indent: 2em;"><br/></p><p style="text-indent: 2em;">了解更多医生信息扫描下方二维码</p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/634e029174b6402a823acf5668a18b65.jpg" title="634e029174b6402a823acf5668a18b65.jpg" alt="634e029174b6402a823acf5668a18b65.jpg"/></p><p style="text-indent: 2em;">了解更多医学美图扫描下方二维码<br/></p><p style="text-align: center"><img src="http://sxbjxh.oss-cn-shanghai.aliyuncs.com/editor/FileUpload/UpLoadPicFile/d4d5a7c5f4aa4a8c8b59071c242deddd.jpg" title="d4d5a7c5f4aa4a8c8b59071c242deddd.jpg" alt="d4d5a7c5f4aa4a8c8b59071c242deddd.jpg"/></p><p style="text-indent: 2em;"><br/></p></div>'
     WxParse.wxParse('essay', 'html', essay, that, 5);
    /*if (app.globalData.userInfo) {
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
    }*/
    /*canvas绘制截屏入口*/
    /*const ctx = wx.createCanvasContext('clip')
    const grd = ctx.createCircularGradient(160, 60, 50)
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')
    ctx.setFillStyle(grd)
    ctx.fillRect(10, 10, 300, 200)
    ctx.draw()*/
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

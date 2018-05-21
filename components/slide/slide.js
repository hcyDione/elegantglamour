Component({
	properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    slideList: {
      type: Array,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    hidden: false,
    show:false,
    showslide:true,
    opac: 1,
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    ontap:function(){
       var myEventdetail = {}
       var myEventOption = {}
       this.triggerEvent('myevent',myEventdetail,myEventOption)
    },
    doslide:function() {
        this.hidden = false
        this.show = true
        this.setData({
            hidden:false,
            show: true,
        })
    },
    doshowslide:function() {
        this.hidden = true
        this.show = false
        this.setData({
            show:false,
            hidden:true,
        })
    }
  }
})
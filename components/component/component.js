var beHavior = require('../../utils/behaviors') 

Component({
  //externalClasses: ['mychild'],
  //behaviors:[beHavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    imageSrc: {
      type: Array,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    ontap:function(){
       var myEventdetail = {}
       var myEventOption = {}
       this.triggerEvent('myevent',myEventdetail,myEventOption)
    }
  }
})
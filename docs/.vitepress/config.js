export default {
    title:'新中地教育',
    head:[
      ['link',{rel:'icon',href:'/favicon.ico'}],
    ],
    themeConfig: {
    lastUpdated: 'last updated',
    siteTitle: "前端实训课",
    logo: "/logo.png",
    nav: [
      { text: "HTML", link: "/html/intro", activeMatch: "/html/" },
      { text: "CSS", link: "/css/intro", activeMatch: "/css/" },
      {
        text: "JavaScript",
        link: "/javascript/js-intro",
        activeMatch: "/javascript/",
      },
      {
        text: "Vue",
        link: "/vue/vue-intro",
        activeMatch: "/vue/",
      },
      { text: "新中地官网", link: "http://www.x-zd.com/" },
    ],
    sidebar: {
      "/html/": [
        {
          text: "Html基础教程",
          collapsed: false,
          items: [
            { text: "Html简介", link: "/html/intro" },
            { text: "Html标签和Html元素", link: "/html/tag-element" },
            { text: "Html属性", link: "/html/attrs" },
            { text: "列表和表格", link: "/html/list-table" },
            { text: "表单", link: "/html/form" },
            { text: "块级元素 内联元素", link: "/html/block-inline" },
          ],
        },
        {
          text:"Html5教程",
          collapsed:false,
          items:[
            {text:'Html5新特性',link:'/html/html5'},
            {text:'本地存储',link:'/html/local-storage'},
          ]
        }
      ],
      "/css/": [
        {
          text: "CSS基础",
          collapsed: false,
          items: [
            { text: "CSS简介和语法", link: "/css/intro" },
            { text: "CSS颜色", link: "/css/color" },
            { text: "CSS背景", link: "/css/background" },
            { text: "CSS文本", link: "/css/text" },
            { text: "CSS字体", link: "/css/font" },
            { text: "CSS边框", link: "/css/border" },
          ],
        },
        {
          text:"CSS中级",
          collapsed:false,
          items:[
            {text:'CSS盒模型',link:'/css/box'},
            {text:'CSS外边距',link:'/css/margin'},
            {text:'CSS内边距',link:'/css/padding'},
            {text:'CSS布局',link:'/css/display'},
            {text:'CSS定位',link:'/css/position'},
            {text:'CSS浮动',link:'/css/float'},
          ]
        },
        {
          text:"CSS3",
          collapsed:false,
          items:[
            {text:'CSS3转换',link:'/css/transform'},
            {text:'CSS3过渡',link:'/css/transition'},
            {text:'CSS3动画',link:'/css/animation'},
            {text:'CSS3弹性盒子',link:'/css/flexbox'},
          ]
        }
      ],
      "/javascript/": [
        {
          text: "JS基础",
          collapsed: false,
          items: [
            { text: "JS简介", link: "/javascript/js-intro" },
            { text: "JS基本语法", link: "/javascript/js-basic" },
            { text: "JS运算符", link: "/javascript/operator" },
            { text: "JS流程语句", link: "/javascript/flow" },
            { text: "JS函数", link: "/javascript/function" },
            { text: "JS数组", link: "/javascript/array" },
            { text: "JS数组方法", link: "/javascript/array-methods" },
            { text: "JS数组遍历", link: "/javascript/iterator" },
            { text: "JS对象", link: "/javascript/object" },
          ],
        },
        {
          text:"DOM",
          collapsed:false,
          items:[
            {text:"DOM简介",link:"/javascript/dom-intro"},
            {text:"DOM操作",link:"/javascript/dom-operate"},
            {text:"DOM事件",link:"/javascript/dom-event"},
          ]
        },
        {
          text:'BOM',
          collapsed:false,
          items:[
            {text:"BOM对象",link:"/javascript/bom"}
          ]
        }
      ],
      "/vue/":[
        {
            text: "Vue基础",
            collapsed: false,
            items: [
              { text: "Vue简介", link: "/vue/vue-intro" },
              { text: "Vue模板语法", link: "/vue/vue-template" },
              { text: "Vue指令", link: "/vue/vue-directives" },
              { text: "Vue配置选项", link: "/vue/vue-options" },
              { text: "Vue方法和生命周期", link: "/vue/vue-lifecycle" },
              { text: "Vue组件", link: "/vue/vue-component" },
            ],
          },
        {
          text:"Vue-CLI",
          collapsed:false,
          items:[
            {text:'CLI简介',link:"/vue/vue-cli"},
            {text:'组件通信',link:"/vue/vue-communication"},
          ]
        } ,
        {
          text:"Vue路由",
          collapsed:false,
          items:[
            {text:'路由基础',link:"/vue/vue-basic-router"}
          ]
        }
      ]
    },
    footer:{
        message:'版权声明 鄂ICP备2022000216号-2',
        copyright:'本文档内容版权为新中地教育所有，保留所有权利。'
    }
  },
}

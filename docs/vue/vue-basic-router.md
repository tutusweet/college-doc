# Vue路由基础

在单页应用中，如果我们希望实现局部视图的切换，我们可以通过路由来实现，Vue生态中也提供了专门的路由解决方案，我们目前使用的是Vue2版本，配合Vue-router的V3版本来使用。

在使用CLI创建项目的时候可以直接添加vue-router，如果没有通过CLI添加，也可以通过命令`npm i vue-router@3`来安装到项目中。

接下来我们来学习Vue-router的简单使用，Vue-router的具体功能非常强大，我们这里仅仅学习如果通过路由实现页面的切换即可。

## 配置路由

 我们需要配置路由文件 routes是核心配置选项，表示路由的映射关系。

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '...'
import Self from '...'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/self',
            name:'self',
            component:Self
        }
    ]
})
export default router
```

## 挂载路由

 在入口文件的根实例中挂载router。

```js
main.js
...
new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')
```

## 使用路由

 Vue-router内置了2个组件`<router-link>`和`<router-view>。`

在触发视图切换的按钮处使用`<router-link>`，该组件的to属性对应的就是路由映射关系中的path地址。

在视图切换的区域使用`<router-view>`。


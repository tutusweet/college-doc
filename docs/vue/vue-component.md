# Vue组件

现代前端开发都遵从组件化的开发规范，希望将独立的视图区域拆分为单独的组件来维护，Vue中同样提供了强大的组件系统，一起来学习一下Vue中如何来使用组件。

回忆一下之前的课程知识，我们在每个页面中都通过`new Vue(options)`的形式创造了一个vm实例，然后通过`el`配置项和视图容器关联起来，这个vm就可以理解为整个app的根实例，现在我们希望将整个app实例分为3个单独的组件(header content side) 我们通过代码来完成这个布局：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .header{
            background-color: skyblue;
            height: 20vh;
        }
        .content{
            float: left;
            width: 60%;
            height: 80vh;
            background-color: gold;
        }
        .side{
            float: right;
            width: 40%;
            height: 80vh;
            background-color: aqua;
        }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="header"><h1>HEADER</h1></div>
      <div class="content"><h1>CONTENT</h1></div>
      <div class="side"><h1>SIDE</h1></div>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
      })
    </script>
  </body>
</html>

```

现在希望将3个独立的视图区域拆分为3个单独的组件，然后组合到一起，以Header为例，我们一起来完成这个过程。

## 定义组件

我们都知道，根实例vm是通过Vue这个全局的构造函数生成，那么现在有一个疑问，组件(之后用vc来统称)是如何生成的呢？通过调用一个全局方法`Vue.extend`，我们可以得到一个组件实例，这个方法传入的参数也是配置选项，用来存放对应组件的各个配置选项，这里要特别引入一个全新的配置选项template，这个配置选项用来存放对应的视图模板，所以这个Header我们可以这样定义：

```js
 const MyHeader = Vue.extend({
    name: 'MyHeader',
    template: `<div class="header"><h1>HEADER</h1></div>`,
  })
```

在实际开发中，我们会定义大量的组件，为了进一步简化代码，上面的组件定义可以进一步简写，可以省略掉`Vue.extend`，直接将组件描述为一个配置对象即可，所以可以写成这样：

```js
 const MyHeader ={
    name: 'MyHeader',
    template: `<div class="header"><h1>HEADER</h1></div>`,
  }
```

## 注册组件

定义好了组件之后，我们需要在根组件中使用Header，Vue规定必须注册这个组件，Vue提供了2种方法来注册组件。

第一种是全局注册，调用一个全局方法`Vue.component()`来实现

```js
 Vue.component('my-header', MyHeader)//第一个参数是任意指定的组件名称 第二个参数即是刚刚定义好的组件
```

第二种是局部注册，可以在当前组件中新增一个配置选项components来实现

```js
const vm = new Vue({
    el: '#app',
    components: {
      'my-header': MyHeader,
    },
})
```

## 使用组件

最后我们便可以使用刚才注册好的组件，我们把之前视图的区域替换成组件。

```html
<div id="app">
      <my-header></my-header> //这里即是组件
      <div class="content"><h1>CONTENT</h1></div>
      <div class="side"><h1>SIDE</h1></div>
    </div>
```

最后我们可以打开浏览器，可以看到实现了同样的布局效果，其他2个区域我们也可以采取同样的操作抽离成组件。

## 注意事项

我们现在已经了解到，一个大型的应用应该是由一个根实例(vm)和多个组件实例(vc)共同组成，无论是根实例还是组件实例都可以理解为一个配置对象，但是组件实例的配置对象和根实例之间存在一些使用上的细小差别。

* 组件实例上的data必须是一个函数
* 组件结构必须有一个根元素
* 组件实例上没有el属性
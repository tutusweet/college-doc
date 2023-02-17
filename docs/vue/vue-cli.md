# Vue-CLI

虽然我们刚才确实将视图内容拆分了独立组件，但有一个问题想必大家应该感受得到：视图结构必须以字符串的形式写在template选项中，当这个结构很复杂的时候，大量的字符串拼接操作会让开发者非常困扰，Vue也考虑到了这个问题，它给我们提供了一个以`.vue`为后缀名的文件格式来解决这个问题，我们一般称之为单文件组件，在深入了解它之前，我们先来介绍一下`Vue-CLI`。

`Vue-CLI`是官方提供的开发工具，可以利用它快速创建大型的web项目，它通过webpack集中了大量功能，免去了开发者手动搭建开发环境时的各种问题，我们一起来看看如何利用它来一步步完成项目的开发。

## 安装 

通过NPM命令来安装依赖：

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

然后创建一个项目

```
vue create app //app是可以任意指定的项目名称
```

## 项目结构分析

安装完成后，我们会看到一个生成的项目结构，我们一起来分析一下这里面的目录文件都是用来做什么的。

* node_modules 用来存放第三方依赖的目录

* public 公共页面目录 一般不会改动

  * favicon.ico 网站的偏爱图标
  * index.html 根实例挂载的视图容器

* src 项目的代码开发目录

  * assets 存放静态资源目录 比如图片 字体文件等等 可以任意指定目录名称
  * components 组件目录 
  * App.vue 根组件
  * main.js 项目的入口文件
  * .gitignore git的忽略文件
  * babel.config.js babel配置文件
  * jsconfig.json js编译时的配置文件
  * package.json 项目的说明书
  * README.md 项目的说明文档
  * vue.config.js 脚手架的配置文件

  大部分配置文件目前都不用更改配置，在后续课程中如果需要会做进一步说明。

## 单文件组件

Vue给我们提供了一个专门以`.vue`为后缀名的文件形式来书写组件，以刚才项目中App.vue为例，来具体分析一下这个文件的结构。

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```

* template 可以理解为为视图区域 在里面书写各种html结构
* script 可以理解为逻辑部分 在里面书写配置选项
* style 可以理解为样式部分 在里面书写样式

这种结构形式非常清晰地表达出了一个web组件的组成部分，所以绝大多数Vue应用的组件都会以这个单文件组件的形式来书写。

## 项目启动

在脚手架创建的项目中必须通过命令来启动：

```
npm run serve
```

启动成功后，我们在控制台可以看到提供的端口号信息：

打开8080端口后，我们看到一个默认的vue启动页：

在src对应的位置，我们可以任意来修改它，比如就更换成我们刚才写过的那个布局结构，我们可以这样做：

* 清空components目录之前的预设组件，新建3个组件分别是`MyHeader` `MyContent` `MySide`(组件命令我们采用的规范是大驼峰或者短横线连接)

* 然后在根组件App.vue中按照引入 注册 使用的步骤完成操作。

  ```vue
  <template>
    <div id="app">
      <my-header class="mh" />
      <my-content class="mc" />
      <my-side class="ms" />
    </div>
  </template>
  
  <script>
    import MyContent from './components/MyContent.vue'
    import MyHeader from './components/MyHeader.vue'
    import MySide from './components/MySide.vue'
    export default {
      name: 'App',
      components: {
        MyContent,
        MySide,
        MyHeader,
      },
    }
  </script>
  
  <style>
    * {
      padding: 0;
      margin: 0;
    }
    .mh {
      background-color: aqua;
      height: 20vh;
    }
    .mc {
      background-color: pink;
      height: 80vh;
      float: left;
      width: 60%;
    }
    .ms {
      background-color: gold;
      float: right;
      width: 40%;
      height: 80vh;
    }
  </style>
  
  ```


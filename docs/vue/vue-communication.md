# 组件通信

如何在组件之间进行数据传递是组件化开发中必须掌握的知识点，本节中我们一起学习最常见的父子组件间的通信。

## props配置选项

接下来一起来学习一个组件实例中非常重要的配置选项props。

现在希望在3个布局组件中展示动态展示一句文本`hello vue`，很多同学会认为在3个组件的data中定义一个数据然后渲染到视图中即可，很简单呀，这么做确实没问题，如果现在有10个组件，或者更多呢，这样做显然效率不佳，如果希望同步修改这个文本，那需要去到每个组件中修改data数据，那会非常麻烦。

vue中提供了一种父组件向子组件传递数据的方式，比如根实例APP希望向3个子组件传递数据，可以这么来做：

```vue
<template>
  <div id="app">
    <my-header class="mh" :msg='msg'/> //需要传递给子组件的属性直接写在标签上
    <my-content class="mc" :msg='msg'/>
    <my-side class="ms" :msg='msg'/>
  </div>
</template>

<script>
  import MyContent from './components/MyContent.vue'
  import MyHeader from './components/MyHeader.vue'
  import MySide from './components/MySide.vue'
  export default {
    name: 'App',
    data() {
      return {
        msg:'hello vue'
      }
    },
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

在子组件中，需要配置props这个配置选项在接受父组件传过来的数据，然后便可以在视图中直接使用了。

以MyHeader组件为例：

```vue
<template>
  <div>
      <h1>HEADER</h1>
      <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    props:['msg'] //props中以数组的形式接受父组件传过来的数据
}
</script>

<style>

</style>
```

在视图中，我们也可以看到根组件中的msg内容渲染到了各个子组件中，如果希望修改这个数据，直接操作根组件中的数据即可。

## 父子间的自定义事件

我们刚才成功地将父组件中的数据传递给了子组件，并且说明了如果希望修改数据可以在父组件中直接修改即可，但现在希望在`MyHeader`组件中通过点击一个button按钮来将文本改为`hi vue`。

如何在子组件中修改父组件的数据呢？Vue规定不能直接在子组件中修改props，可以通过自定义事件的形式来实现。

* 在父组件中，给`MyHeader`绑定一个自定义事件，事件名称可以任意指定，这里指定为`changeMsg`

  ```html
  <my-header class="mh" :msg='msg' @changeMsg='changeMsg'/>
  ```

  这个自定义事件需要指定一个事件回调，那么便可以在methods中来实现。在Vue中需要明确一点，数据在哪修改数据的方法就应该在那里。

  ```vue
  methods:{
        changeMsg(){
          this.msg='hi vue'
        }
  }
  ```

* 在子组件中，通过实例方法`this.$emit()`来触发绑定的自定义事件，从而执行上面实现的回调函数，完成数据的修改。

  ```vue
  <template>
    <div>
        <h1>HEADER</h1>
        <p>{{msg}}</p>
        <button @click='changeMsg'>点击修改msg</button>
    </div>
  </template>
  
  <script>
  export default {
      props:['msg'],
      methods: {
          changeMsg(){
              this.$emit('changeMsg') //注意区分 每个changeMsg代表的具体含义
          }
      },
  }
  </script>
  <style>
  </style>
  ```

  在`MyHeader`中点击button,发现msg的内容已经被正确修改，并且作于用视图了。

* `this.$emit()`这个实例方法第一个参数表示触发的自定义事件名称，后续还可以传入参数，父组件的自定义事件中会接收到这个传入的参数。

  ```vue
  //子组件中
   methods: {
      changeMsg(){
          this.$emit('changeMsg','hi vue')
      }
  }
  //父组件中
  methods: {
    changeMsg(val) {
      this.msg = val
    },
  }
  ```

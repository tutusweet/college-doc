# Vue常见方法和生命周期

之前我们学习过Vue的常见指令，还有一些指令用的不多，但仍然推荐了解一下。

## v-pre

Vue在编译视图模板中的插值和指令都需要耗费一定的性能，如果视图中部分区域中没有使用Vue的模板语法，可以通过使用`v-pre`指令来跳过编译。

## v-once

如果我们希望视图中的某个数据只在初次渲染时生效，可以使用`v-once`命令，它会让随后的重新渲染中，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

## v-slot

后面讲解插槽的时候会使用到这个指令。

## 自定义指令

我们学习了Vue中提供了大量指令，但针对具体的业务场景，可能内置的这些指令还不够丰富，Vue同样提供了自定义指令，它是一个配置选项，开发者可以手动来实现具体指令。

例如我们希望编写一条指令，可以让加上指令的元素字体颜色变为红色。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
        <!-- 使用指令的时候必须以v-开头 -->
      <h1 v-red>这是一个标题</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        directives: {
          red(el) {
            //el表示指令绑定的DOM元素
            el.style.color = 'red'
          },
        },
      })
    </script>
  </body>
</html>
```

我们还可以进一步优化这个需求，希望让字体颜色变为data数据中指定的颜色。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
        <!-- 使用指令的时候必须以v-开头 -->
      <h1 v-red="color">这是一个标题</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
            return {
                color:'blue'
            }
        },
        directives: {
          red(el,binding) {
            //el表示指令绑定的DOM元素
            //binding.value表示指令后指定的值
            el.style.color = binding.value
          },
        },
      })
    </script>
  </body>
</html>
```

## 过滤器

在Vue2版本中，还有一个配置选项`filters`,可以实现对于数据的加工，不过在Vue3的最新版本中，这个语法已经被弃用被计算属性代替，不过考虑到Vue2版本仍然具有很大的市场份额，我们仍旧在此来讨论它。·

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <!-- 通过|toLower的形式实现对原始msg的"过滤作用" 支持链接写法 -->
        {{msg|toLower}}
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    msg:'HELLO WOLRD'
                }
            },
            filters:{
                toLower(val){ 
                    //val 即为过滤前的原始数据 通过返回值的形式 返回过滤后的结果 和计算属性语法类似
                    return val.toLowerCase()
                }
            }
        })
    </script>
</body>
</html>
```

关于更多的配置选项，我们后面在接触到了组件学习后仍然会继续讨论。

## Vue中的常见全局方法

现在我们来介绍一下Vue中的一批全局API的使用，通过之前的学习，我们应该了解到data中的数据是具有响应性的，只要数据一旦更改，模板中视图会立刻更新，我们现在的需求是这样的，示例中的data数据存放了一个person对象，里面包含了很多个人信息，现在希望在这个peoson对象做一些信息的修改，我们一起观测下是否能够实现响应性。

## Vue.set

实现上面的需求，很多同学可能会这样书写代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h1>{{person.name}}</h1>
      <h1>{{person.name}}</h1>
      <h1>{{person.age}}</h1>
      <button @click="addHeight">点我增加身高信息</button>
      <h1 v-if="person.height">{{person.height}}</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            person: {
              name: '张三',
              sex: '男',
              age: 30,
            },
          }
        },
        methods: {
           //按照之前的逻辑 很多同学可能会这么做 通过点击事件的回调 给person对象增加一个属性
          addHeight() {
            this.person.height = 180
          },
        },
      })
    </script>
  </body>
</html>

```

但是在页面中大家会发现身高信息并没有被添加上去，似乎是哪里出了点问题，在Vue中如果希望能够给data中的数据实现响应式的**增加**不能直接操作，可以通过调用一个全局方法`vue.set`的形式来实现，所以上面的代码应该这样改写：

```js
 methods: {
      addHeight() {
        // this.person.height = 180//不能直接通过对象操作来增加属性
        Vue.set(this.person, 'height', 180)//三个参数分别为 数据对象 新增属性名 新增属性值
      },
    },
```

## Vue.delete

在上面的示例中，如果希望删除person对象里的信息，也不能直接调用原始的操作方法，必须调用`Vue.delete`这个全局方法来实现，比如给一个按钮绑定点击实现删除年龄信息，可以这样做：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h1>{{person.name}}</h1>
      <h1>{{person.sex}}</h1>
      <h1>{{person.age}}</h1>
      <button @click="deleteAge">点我删除年龄信息</button>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            person: {
              name: '张三',
              sex: '男',
              age: 30,
            },
          }
        },
        methods: {
            deleteAge(){
                Vue.delete(this.person,'age')
            }
          },
        },
      )
    </script>
  </body>
</html>

```

## Vue.directive

自定义指令的配置选项写法同样可以通过全局方法来试下，我们之前写过的那个自定义指令还可以用`Vue.directive`来实现：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <!-- 使用指令的时候必须以v-开头 -->
      <h1 v-color="color">这是一个标题</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      Vue.directive('color', function (el, binding) {
        //el表示指令绑定的DOM元素
        //binding.value表示指令后指定的值
        el.style.color = binding.value
      })
      new Vue({
        el: '#app',
        data() {
          return {
            color: 'blue',
          }
        },
      })
    </script>
  </body>
</html>

```

## 生命周期的概念

每个 Vue 实例(包括vm根示例和组件实例)在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会。

我们书写一个示例来感受一下生命周期：

就以刚才写过的示例为例(h1标题字体变大)，通过点击按钮能够实现字体变大，现在希望是页面加载后字体自动变大，不需要手动点击。

那应该如何实现呢，现在的问题就在于之前控制fz递增的逻辑应该放到什么地方中去，可以放到`mounted`这个生命周期函数中。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h1 :style="{fontSize:fz+'px'}">这是一个标题</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            fz: 30,
          }
        },
        //mounted是生命周期函数的名称，它会在Vue示例挂载完成后自动调用
        mounted() {
          setInterval(() => {
            if (this.fz >= 50) {
              return
            }
            this.fz++
          }, 200)
        },
      })
    </script>
  </body>
</html>

```

## 常见生命周期

在Vue实例从创建到销毁的过程中，常见的生命周期可以参考官网的图示(你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。)：

常见的生命周期一共有8个，对应的Vue实例的不同阶段。

* beforeCreate 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
* created 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，无法进行DOM操作。
* beforeMount 在挂载开始之前被调用：相关的 `render` 函数首次被调用。
* mounted 实例被挂载后调用，这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。
* beforeUpdate 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。
* updated 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。
* beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
* destroyed 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

在实际工作开发中，我们常用的生命周期函数一般就只有2-3个：

* created  在这个钩子中我们可以进行数据请求
* mounted 在这个钩子中我们也可以进行数据请求(和created效果一致)和DOM操作
* beforeDestroy 在这个钩子中我们可以销毁定时器和一些全局事件的绑定。

其他生命周期钩子几乎不会被实际应用到，当然还有几个生命周期钩子会在一些特定场景触发，后续再介绍。
# Vue配置选项

我们再来回顾一下之前学习过的配置选项。

`el`是用来匹配作用的视图容器。

`data`是用来存放视图模板中需要使用的数据，在之前的案例中，data是一个对象的形式，但在之后的案例中，我们统一把data写成一个函数的形式，这更符合Vue的设计规范(Vue3版本和组件中强制要求写成函数式)。

`methods`是用来存放视图模板中需要使用的方法。

接着来介绍更多的配置选项

## 计算属性

我们来完成这么一个需求，希望将msg这个字符串翻转一下输出为olleh，按照我们之前所说的，可以在模板内部书写表达式，所以可以这么来做：

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
        <!-- 希望将msg这个字符串翻转一下输出为olleh 我们可以直接使用表达式来完成 -->
        {{msg.split('').reverse().join('')}}
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    msg:'hello'
                }
            },
        })
    </script>
</body>
</html>
```

但这么做并不是vue推荐的，我们尽量需要简写插值模板里的内容，我们可以把它提取出来，放到**计算属性**这个配置选项中，所以我们可以这么来做：

```html
<div id="app">
        {{reverse}}
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    msg:'hello'
                }
            },
            computed:{
                 //计算属性中 必须以返回值来表达最终的结果 访问data中的数据必须通过this来完成 配置选项之间的数据访问都必须通过this
                reverse(){
                    return this.msg.split('').reverse().join('')
                }
            }
        })
    </script>
```

总结一下，如果一些数据需要通过data选项中的原始数据经过复杂计算而来，那么我们便可以使用计算属性来配置这些数据，计算属性中的数据也可以直接在模板中使用。

## 计算属性和方法的比较

上面的例子，其实我们使用methods配置项也能同样完成。

```html
<div id="app">
        <!-- 使用方法记得加上()来调用结果 -->
        {{reverse()}}
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    msg:'hello'
                }
            },
            methods: {
                reverse(){
                    return this.msg.split('').reverse().join('')
                }
            },
        })
    </script>
```

那么为什么我们还需要计算属性这个配置选项？因为计算属性中存在缓存机制，只有当计算属性依赖的原始数据发生改变时，计算属性才会重新计算，所以计算属性的性能是更高的，而普通的方法做不到这一点。

示例中count数据变更后，每一次视图模板都会重新更新，方法会多次调用，但是计算属性却只执行了一次，显然性能更好。

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
        <!-- 使用方法记得加上()来调用结果 -->
        {{reverse1()}}
        {{reverse2}}
        <button @click="count++">{{count}}</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    msg:'hello',
                    count:0
                }
            },
            methods: {
                reverse1(){
                    console.log("方法执行了")
                    return this.msg.split('').reverse().join('')
                }
            },
            computed:{
                reverse2(){
                    console.log("计算属性执行了")
                    return this.msg.split('').reverse().join('')
                }
            }
        })
    </script>
</body>
</html>
```

## 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当data中的某一项数据发生变化希望视图也做出对面响应的时候，推荐使用侦听属性。

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
      <h1>{{msg}}</h1>
      <button @click="count++">{{count}}</button>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            msg: '偶数',
            count: 0,
          }
        },
        watch: {
            //watch配置选项中书写需要监听的data数据源 函数体中书写数据源发生变化时执行的逻辑
          count() {
            if (this.count % 2 === 0) {
              this.msg = '偶数'
            } else {
              this.msg = '奇数'
            }
          },
        },
      })
    </script>
  </body>
</html>

```

## 什么是双向绑定？

我们现在应该了解，在Vue框架中data的数据会被绑定到视图模板中，一旦data数据改变，视图也会随之更新，在HTML中一类特殊的元素叫做表单元素，例如`<input>`、`<textarea>` 及 `<select>`，它们不仅可以展示数据，还可以输入数据，如果能够将输入的数据保存下来，那便实现了所谓的双向绑定。

## v-model(用于双向绑定)

一起来学习这个指令如何应用在表单元素身上。

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
      <!-- 通过v-model指令将msg实现了input的双向绑定 -->
      <input type="text" v-model="msg" />
      <p>{{msg}}</p>
      <!-- 通过v-model指令将home实现了select的双向绑定 -->
      你的家乡是
      <select v-model="home">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="武汉">武汉</option>
      </select>
      <p>{{home}}</p>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            msg: '这是输入框的初始内容',
            home: '武汉',
          }
        },
      })
    </script>
  </body>
</html>

```

## 计算属性和侦听属性的深入

学习完了`v-model`指令，我们对昨天学习过的2个重要配置选项来做进一步学习。

我们要完成一个姓名案例，在2个input框中分别输入姓和名，然后在第三个input中展示整体的姓名。利用计算属性能够很方便地实现：

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
      姓<input type="text" v-model="firstName" />
      <br />
      名<input type="text" v-model="lastName" />
      <br />
      姓名 <input type="text" v-model="fullName" />
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            firstName: '张',
            lastName: '三',
          }
        },
        computed: {
          fullName() {
            return this.firstName + this.lastName
          },
        },
      })
    </script>
  </body>
</html>
```

同样地，利用侦听属性，我们也能实现它。

```js
new Vue({
  el: '#app',
  data: {
    firstName: '张',
    lastName: '三',
    fullName: '张三'
  },
  watch: {
    firstName(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

通过简单地比较，大家应该能够发现绝大多数情况下，计算属性的实现都比侦听属性实现起来更加简洁一些。

那是不是可以认为在这种场景下侦听属性就没存在的必要呢？并不是，现在把刚才的案例需求改变一下，要求在1S之后第三个input框中输出姓名，你会发现使用计算属性无法实现，因为计算属性必须依赖返回值来展示数据，在处理异步任务的情况下，只能使用侦听属性。

```js
new Vue({
    el: '#app',
    data: {
      firstName: '张',
      lastName: '三',
      fullName: '张三',
    },
    watch: {
      firstName(val) { 
        setTimeout(() => { //这里的回调必须写成箭头函数的形式
            this.fullName = val + ' ' + this.lastName
        }, 1000);
      },
      lastName(val) {
        setTimeout(() => {
            this.fullName = this.firstName + ' ' + val
        }, 1000);
      },
    },
})
```

这2个配置选项实在太重要了，我们还需要进一步补充，先来说侦听属性，继续来看上面的姓名案例，我们在设置fullName初始值的时候，手动地设置了'张三'，如果设置默认值为空字符串地话，会怎么样呢？可能很多同学会认为侦听属性会计算出来的，大家可以尝试一下，你会发现视图上没有显示任何内容，这说明模板第一次加载的时候侦听属性是没有执行的，那有没有办法让侦听属性一开始加载的时候就执行一次呢？我们可以将侦听属性写成一个对象(完整写法)，其中`immediate`属性可以让`handler`中的函数立即执行一次。默认情况下，`immediate`会被设置为false,这也解释了为什么我们使用简写方式(即直接写成函数 其实就是指向了`handler`)的时候姓名没有显示。

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
      姓<input type="text" v-model="firstName" />
      <br />
      名<input type="text" v-model="lastName" />
      <br />
      姓名 <input type="text" v-model="fullName" />
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          firstName: '张',
          lastName: '三',
          fullName: '', //初始值为空的话 视图上不会显示姓名
        },
        watch: { 
          firstName: {
            immediate: true,//侦听属性的完整写法是一个对象 其中immediate表示可以立即执行侦听的函数(hanlder)
            handler(val) {
              console.log(val)
              this.fullName = val + ' ' + this.lastName
            },
          },
          firstName: {
            immediate: true,
            handler(val) {
              console.log(val)
              this.fullName = this.firstName + ' ' + val
            },
          },
        },
      })
    </script>
  </body>
</html>
```

侦听属性中除开`handler`和`immediate`2个属性外，还有一个`deep`属性，现在来介绍它：

来看下面这个示例，希望通过监听number这个数据源的变化来动态显示段落中的文字，此时number是一个有更深层级的对象，你会发现这时候的侦听似乎不起作用了，即是number.a发生变化，侦听函数并没有执行，有的同学可能会想那直接侦听number.a不就好了吗，但是如果number中有非常多的属性都需要侦听，那岂不是要写非常多的侦听函数吗？有没有一种办法仍然是侦听number这个对象，当它内部变化的时候仍然能够执行`handler`呢？那就需要配置刚才介绍的`deep`属性，默认情况下它的值为`false`，需要手动地设置为`true`

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
        <p>{{msg}}</p>
        <button @click="number.a++">{{number.a}}</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data() {
                return {
                    number:{
                        a:1,
                    },
                    msg:"偶数"
                }
            },
            watch:{
                number(){
                    if(this.number.a%2===0){
                        this.msg='偶数'
                    }else{
                        this.msg='奇数'
                    }
                }
            }
        })
    </script>
</body>
</html>
```

做出一些改进就能实现我们想要的效果了：

```js
watch: {
  number: {
    immediate: true,
    deep:true,
    handler() {
      if (this.number.a % 2 === 0) {
        this.msg = '偶数'
      } else {
        this.msg = '奇数'
      }
    },
  },
},
```

关于watch侦听属性这个配置选项就讲解完毕了，我们应该了解到大多数情况下，我们可以简写为一个函数，但如果我们希望`handler`立刻执行，或者监听的数据是一个深层级的对象时，就需要写成对象形式了，然后正确地设置`immediate`和`deep`属性了。

再来深入探讨一下计算属性，沿用之前的姓名案例，现在希望在第三个input框的输入也能同步更改前2个input框的值，换个说法，计算属性是否可以手动更改呢？

其实也是可以的，之前我们的计算属性都是采用了简写方式，即只写了`getter`,大部分情况下计算属性都是用来做展示，只需`getter`即可，我们还可以手动添加`setter`来完成刚刚的需求：

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
      姓<input type="text" v-model="firstName" />
      <br />
      名<input type="text" v-model="lastName" />
      <br />
      姓名 <input type="text" v-model="fullName" />
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            firstName: '张',
            lastName: '三',
          }
        },
        computed: {
          fullName: {
            get() {
              return this.firstName + this.lastName
            },
            set(val) {//val即是设置的值
              this.firstName = val.slice(0, 1)
              this.lastName = val.slice(1)
            },
          },
        },
      })
    </script>
  </body>
</html>

```


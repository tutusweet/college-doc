# Vue指令

我们刚才已经学习了一个指令`v-on`，它可以用来绑定DOM事件，并且可以被简写为`@`,接着再来看一些常见指令。

## v-bind(用于属性绑定)

v-bind指令可以将data中的数据绑定到HTML模板中来。

一起来看这个例子，页面上有一个`<a>`标签用作跳转，现在我不希望将它的href属性固定，我将他存放到data的数据中用作动态展示，这时便需要使用v-bind指令了。

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
        <a v-bind:href="url">跳转到百度</a>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                url:'http://www.baidu.com'
            }
        })
    </script>
</body>
</html>
```

例子中的`v-bind:href="url"`可以进一步简写为`:href="url"`

## v-if（用于条件渲染）

`v-if`指令可以条件性地渲染一块内容，这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

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
      <button @click="isshow=!isshow">点击切换标题展示</button>
      <h1 v-if="isshow">这是一个动态展示的标题</h1>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          isshow: true,//isshow用来控制h1标题的渲染
        },
      })
    </script>
  </body>
</html>
```

和分支语句类似的，`v-else`指令也可以起到else的作用，但是`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。仍然是上面的示例：

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
      <button @click="isshow=!isshow">点击切换标题展示</button>
      <h1 v-if="isshow">标题1</h1>
      <h1 v-else>标题2</h1>
      <!-- 标题1和标题2只会展示1个 -->
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          isshow: true,//isshow用来控制标题的切换
        },
      })
    </script>
  </body>
</html>
```

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

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
      <button @click="isshow=!isshow">点击切换整个区域展示</button>
      <template v-if="isshow">
        <h1>标题1</h1>
        <p>这是段落1</p>
        <p>这是段落2</p>
      </template>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          isshow: true, //isshow用来控制标题和段落的切换
        },
      })
    </script>
  </body>
</html>

```

## v-show(用于条件展示)

另一个用于根据条件展示元素的选项是 `v-show` 指令。它的用法跟`v-if`基本一样，上面的标题切换的案例同样可以用`v-show`指令来替换。

```html
<h1 v-show="isshow">标题1</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 一个CSS属性`display`。

## v-if 和 v-show的区别

再来总结一下上面2个指令的区别：

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

## v-for(用于循环渲染)

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。循环渲染的时候必须给每个元素加上唯一的key值。

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
      <ul>
        <!-- items是需要循环展示的数组 item表示每个具体数组元素的别名  -->
        <li v-for="item in items" :key="item.message">{{ item.message }}</li>
      </ul>
    </div>
    <script src="/vue.js"></script>
    <script>
      new Vue({
        el: '#app',
        data: {
          items: [{ message: 'Foo' }, { message: 'Bar' }], //循环展示的数据都是数组
        },
      })
    </script>
  </body>
</html>
```

当然，你也可以用 `of` 替代 `in` 作为分隔符。

```html
<li v-for="item of items" :key="item.message">{{ item.message }}</li>
```

绝大多数情况下，`v-for`指令都被用来渲染数组，也可以用来渲染对象和数字。

渲染对象的写法：

```html
<ul id="app" class="demo">
  <li v-for="(value,key,index) in object">
    {{ value }}
    {{ key }}
    {{ index }}
  </li>
</ul>
new Vue({
  el: '#app',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```

渲染数字的写法：

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

## v-for 和 v-if使用的问题

在vue中，如果`v-for`和`v-if`2个指令放在一个元素上，`v-for`的优先级会更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中，大多数情况下，请不要这么做，你可以将`v-if`放到`v-for`的外层元素上，这样会根据`v-if`后的条件选择性的执行循环，性能更好。

```html
<ul v-if="todos.length"> //如果todos数组没有内容 就不会渲染其中的结构 
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

## v-html 和 v-text(用于插值)

我们之前学过利用插值表达式来渲染标签内部的内容，还可以是用`v-text`指令来代替。但如果要更新标签内部的部分内容，仍然需要使用插值表达式来完成。

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
        <!-- 使用插值表达式和使用v-text指令的效果是一致的 -->
        <div>{{msg}}</div>
        <div v-text="msg"></div>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                msg:"hello world"
            }
        })
    </script>
</body>

</html>
```

`v-text`指令是用来更新元素内部的`textContext`内容，`v-html`指令可以更新元素内部的`innerHTML`

```html
<div id="app">
    <div v-html="msg"></div>
</div>
<script src="/vue.js"></script>
<script>
    new Vue({
        el:"#app",
        data:{
            msg:"<em>hello world </em>"
        }
    })
</script>
```

在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。只在可信内容上使用 `v-html`，**永不**用在用户提交的内容上。

```html
 <div id="app">
        <div v-html="msg"></div>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                msg:'<a href="javascript:alert(1)">来点我呀</a>'//msg的标签内容会被执行 跳转到存在安全隐患的位置
            }
        })
    </script>
```

指令部分先学习这么多，之后会接着学习。
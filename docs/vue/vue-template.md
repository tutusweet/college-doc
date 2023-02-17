# Vue模板语法

## Vue初体验

我们先来感受一下Vue和传统DOM的区别，相信体验完后你便会爱上使用这个框架，在Vscode编辑器中新建一个html文件，通过`<script>`标签引入vue的在线文件。

```js
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

我们要完成这样一个案例：

> 页面上有一个计数器，初始值为0，放置一个按钮button，点击按钮，页面上的计算器自增1

使用传统的DOM操作，代码应该是这样的：

```html	
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>0</div>
    <button>按钮</button>
    <!-- <script src="/vue.js"></script> -->
    <script>
        document.querySelector('button').onclick=function(){
            document.querySelector('div').innerText = Number(document.querySelector('div').innerText)+1
        }
    </script>
</body>
</html>
```

使用Vue来操作,代码是这样的(大家现在不用纠结其中的一些代码书写方式)：

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
        <div>{{count}}</div>
        <button @click='count++'>按钮</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                count:0
            }
        })
    </script>
</body>
</html>
```

大家体会一下，你会发现Vue在实现这个功能的时候把传统的DOM操作都"去掉了"，确实如此，我们不用自己来完成复杂的DOM操作，我们只关注数据本身的变化，这是Vue的核心理念，开发者只需要遵照Vue的语法操作数据控制视图即可，DOM操作由框架本身帮我们完成了，是不是非常强大！

## Vue和视图的关联

> 我们当前课程阶段的Vue统一指代V2.6版本，此后不再赘述。

1.我们要使用Vue，第一步需要实例化Vue这个构造函数，引入vue.js文件为我们当前作用域提供了这个构造函数。

2.注意在上面的例子中我们使用了2个很奇怪的语法`{{count}}`和`@click='count++'`这显然不是HTML的标准语法，这是Vue独有的，最终这个语法肯定需要被编译，所以出现了这些特殊的区域就是Vue的实例需要管理的区域，所以我们在刚才的结构外部套上了一个id为app的容器，那如何让Vue实例和这个容器关联起来呢，我们在实例化Vue时传入了一个配置选项，其中有一个el属性，就是依赖它我们将Vue实例和要操作的视图区域关联起来了！

## Vue中的插值语法

仍然是刚才的例子，我们需要用一个数据来控制计数器的变化，这样的数据我们需要放到一个名为data的配置项中，如果你的视图中需要使用指定数据，记得把它放到data中，那么如何在html中使用它呢，你需要把对应的数据用双大括号`{{}}`包裹起来，我们把这个叫做插值表达式(mustaches)

插值中除了直接放置data中的数据外，还可以放置表达式，刚才的count可以写成一个三元表达式。

```html
<div>{{count%2===0?'偶数':'奇数'}}</div>
```

## vue中的事件绑定

继续回顾刚才的例子，我们通过`@click='count++'`语法实现了对于点击事件的绑定。

在Vue中，可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。`v-on`可以简写为`@`。所以上面的语法应该不难理解，通过绑定点击事件，实现count的自增，然后视图随之更新。

我们再来实现一个简单的事件绑定，点击按钮后弹出一个弹窗，显示`hello world`

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
        <button v-on:click='alert("hello wolrd")'>弹窗按钮</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
        })
    </script>
</body>
</html>
```

按照第一个例子的思路，你应该会这么来书写代码，但是你会发现浏览器报错了！提示我们`Property or method "alert" is not defined on the instance but referenced during render`，问题在哪？

如果事件执行的代码变得复杂的时候，就不能直接接在指令后面，可以在指令后定义一个调用方法的名称，然后在配置选项methods中实现这个方法，应该这样做：

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
        <button v-on:click='alert'>弹窗按钮</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods: {
                alert(){//这里的alert是任意定义的方法名称
                    alert('hello world')
                }
            },
        })
    </script>
</body>
</html>
```

我们之后都会这么做，把所有事件的回调方法都定义在methods这个配置选项中。

我们继续讨论事件绑定中的一些细节，现在的案例是这样的，页面上有2个按钮(say hi 和 say hello)，我希望用一个方法来完成这2个弹窗，相信很多同学想到了传递参数，那么应该如何做呢？请看以下代码：

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
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
    </div>
    <script src="/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods: {
                say(msg){
                    alert('say'+msg)
                }
            },
        })
    </script>
</body>

</html>
```

这时可能有的同学又有一个问题，DOM事件中的那个事件对象(event)去哪儿呢，如果需要用到，那应该怎么办呢？在Vue中，你需要手动地传入一个特殊变量`$event`来指代原始的事件对象。

##  为什么在HTML监听事件？

大家可能注意到这种事件监听的方式违背了关注点分离 (separation of concern) 这个长期以来的优良传统。但不必担心，因为所有的 Vue.js 事件处理方法和表达式都严格绑定在当前视图模板 上，它不会导致任何维护上的困难。实际上，使用 `v-on` 有几个好处：

1. 扫一眼 HTML 模板便能轻松定位在 JavaScript 代码里对应的方法。
2. 因为你无须在 JavaScript 里手动绑定事件，你的配置项代码可以是非常纯粹的逻辑，和 DOM 完全解耦，更易于测试。
3. 当一个 Vue实例被销毁时，所有的事件处理器都会自动被删除。你无须担心如何清理它们。
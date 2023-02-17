# BOM对象

前面学习的DOM叫做文档对象模型，而我们使用的浏览器还存在文档之外的区域，我们将整个浏览器可以视作浏览器对象模型(Browser Object Model (BOM))。

BOM对象可以由以下部分组成

* Window(表示BOM)
* Document (表示DOM)
* Screen
* Location
* History
* Navigator

## Window 对象

所有浏览器都支持 *window* 对象。它代表浏览器的窗口。

所有全局 JavaScript 对象，函数和变量自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至（HTML DOM 的）document 对象也是 window 对象属性：

```js
window.document.getElementById("header");
```

等同于：

```js
document.getElementById("header");
```

两个属性可用用于确定浏览器窗口的尺寸。

这两个属性都以像素返回尺寸：

- window.innerHeight - 浏览器窗口的内高度（以像素计）
- window.innerWidth - 浏览器窗口的内宽度（以像素计）

浏览器窗口（浏览器视口）不包括工具栏和滚动条。

## Screen对象

Screen对象包含用户的屏幕信息。

常见属性

- screen.width
- screen.height
- screen.availWidth
- screen.availHeight

## Location对象

Location对象包括当前页面的URL信息。

常见属性

* location.href 返回当前页面的 href (URL)
* location.hostname 返回 web 主机的域名
* location.pathname 返回当前页面的路径或文件名
* location.protocol 返回使用的 web 协议（http: 或 https:）

## History对象

History对象包含浏览器的历史信息。

常见方法

* history.back() 等同于在浏览器点击后退按钮
* history.forward() - 等同于在浏览器中点击前进按钮

## Navigator

Navigator对象包含浏览器自身的相关信息。

## 定时器

JS代码可以在时间间隔内执行，这是BOM对象最常用的方法：

* setTimeout(*function*, *milliseconds*)

  在等待指定的毫秒数后执行函数。

* setInterval(*function*, *milliseconds*)

  等同于 setTimeout()，但持续重复执行该函数。

## setTimeout() 方法

```js
window.setTimeout(function, milliseconds);
```

`window.setTimeout()` 方法可以不带 `window` 前缀来编写。

第一个参数是要执行的函数。

第二个参数指示执行之前的毫秒数。

单击按钮。等待 3 秒，然后页面会提示 "Hello"：

```html
<button onclick="setTimeout(myFunction, 3000)">试一试</button>

<script>
function myFunction() {
    alert('Hello');
 }
</script>
```

`clearTimeout()` 方法停止执行 `setTimeout()` 中规定的函数。

```js
window.clearTimeout(timeoutVariable)
```

`window.clearTimeout()` 方法可以不带 `window` 前缀来写。

`clearTimeout()` 使用从 `setTimeout()` 返回的变量：

```js
myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
```

类似上例，但是添加了“停止”按钮：

```html
<button onclick="myVar = setTimeout(myFunction, 3000)">试一试</button>

<button onclick="clearTimeout(myVar)">停止执行</button>
```

## setInterval() 方法

`setInterval()` 方法在每个给定的时间间隔重复给定的函数。

```html
window.setInterval(function, milliseconds);
```

`window.setInterval()` 方法可以不带 `window` 前缀来写。

第一个参数是要执行的函数。

第二个参数每个执行之间的时间间隔的长度。

本例每秒执行一次函数 "myTimer"（就像数字手表）。

显示当前时间：

```js
var myVar = setInterval(myTimer, 1000);
 
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
```

`clearInterval()` 方法停止 `setInterval()` 方法中指定的函数的执行。

```
window.clearInterval(timerVariable)
```

`window.clearInterval()` 方法可以不带 window 前缀来写。

`clearInterval()` 方法使用从 `setInterval()` 返回的变量：

```js
myVar = setInterval(function, milliseconds);
clearInterval(myVar);
```

类似上例，但是我们添加了一个“停止时间”按钮：

```html
<p id="demo"></p>

<button onclick="clearInterval(myVar)">停止时间</button>

<script>
var myVar = setInterval(myTimer, 1000);
 function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>
```
# DOM事件

用户通过鼠标、键盘等设备和浏览器的一切交互行为都可以视作DOM事件。

## 事件要素

一个标准的DOM事件包括以下几个要素：

* 事件源
* 事件类型
* 事件处理函数
* 事件对象

本节重点学习的是事件类型。

## 常见的事件类型

JavaScript 能够在事件发生时执行，比如当用户点击某个 HTML 元素时。

为了在用户点击元素时执行代码，请向 HTML 事件属性添加 JavaScript 代码：

```js
onclick=JavaScript
```

HTML 事件的例子：

- 当用户点击鼠标时
- 当网页加载后
- 当鼠标移至元素上时
- 当输入字段被改变时
- 当用户敲击按键时

DOM事件是以`onxxx`的形式添加到DOM元素的属性上，所以也称作事件属性。

## onclick事件

鼠标单击一个DOM元素时触发的事件。

## onload 事件

当用户进入页面后会触发`onload`事件。

## onmouseover 和 onmouseout 事件

`onmouseover` 和 `onmouseout` 事件可用于当用户将鼠标移至 HTML 元素上或移出时触发某个函数。

## onchange 事件

当表单元素的内容改变的时候会触发`onchange`事件。

## onpressup事件

当用户敲击键盘的时候会触发`onpressup`事件。

## 事件监听程序 addEventListener() 

除了利用事件属性来监听DOM事件之外，ES2015中还增加了一种方式 addEventListener()方法：

添加当用户点击按钮时触发的事件监听器：

```js
document.getElementById("myBtn").addEventListener("click", displayDate);
```

`addEventListener()` 方法为指定元素指定事件处理程序。

`addEventListener()` 方法为元素附加事件处理程序而不会覆盖已有的事件处理程序。

您能够向一个元素添加多个事件处理程序。

您能够向一个元素添加多个相同类型的事件处理程序，例如两个 "click" 事件。

当使用 `addEventListener()` 方法时，JavaScript 与 HTML 标记是分隔的，已达到更佳的可读性；即使在不控制 HTML 标记时也允许您添加事件监听器。

您能够通过使用 `removeEventListener()` 方法轻松地删除事件监听器。

```
element.addEventListener(event, function);
```

第一个参数是事件的类型（比如 "click" 或 "mousedown"）。

第二个参数是当事件发生时我们需要调用的函数。

**注意**：请勿对事件使用 "on" 前缀；请使用 "click" 代替 "onclick"。
# DOM

JavaScript语言的设计是为了控制浏览器的行为，之前JS基础部分似乎与浏览器操作毫无关联，从本节开始我们将学习JS中操作浏览器的API。

## HTML DOM（文档对象模型）

当网页被加载时，浏览器会创建页面的文档对象模型（*D*ocument *O*bject *M*odel）。

*HTML DOM* 模型被结构化为*对象树*：

![DOM HTML 树](https://www.w3school.com.cn/i/ct_htmltree.gif)

通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

- JavaScript 能改变页面中的所有 HTML 元素
- JavaScript 能改变页面中的所有 HTML 属性
- JavaScript 能改变页面中的所有 CSS 样式
- JavaScript 能删除已有的 HTML 元素和属性
- JavaScript 能添加新的 HTML 元素和属性
- JavaScript 能对页面中所有已有的 HTML 事件作出反应
- JavaScript 能在页面中创建新的 HTML 事件

HTML DOM 是 HTML 的标准*对象*模型和*编程接口*。它定义了：

- 作为*对象*的 HTML 元素
- 所有 HTML 元素的*属性*
- 访问所有 HTML 元素的*方法*
- 所有 HTML 元素的*事件*

**换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准**。

## 查找 HTML 元素

通常，通过 JavaScript，您需要操作 HTML 元素。

为了达成此目的，您需要首先找到这些元素。有好几种完成此任务的方法：

- 通过 id 查找 HTML 元素
- 通过标签名查找 HTML 元素
- 通过类名查找 HTML 元素
- 通过 CSS 选择器查找 HTML 元素

## 通过 id 查找 HTML 元素

DOM 中查找 HTML 元素最简单的方法是，使用元素的 id。

本例查找 id="intro" 的元素：

```js
var myElement = document.getElementById("intro");
```

如果元素被找到，此方法会以对象返回该元素（在 myElement 中）。

如果未找到元素，myElement 将包含 `null`。

## 通过标签名查找 HTML 元素

本例查找所有 `<p>` 元素：

```js
var x = document.getElementsByTagName("p");
```

本例查找 id="main" 的元素，然后查找 "main" 中所有 `<p>` 元素：

```js
var x = document.getElementById("main");
var y = x.getElementsByTagName("p"); 
```

## 通过类名查找 HTML 元素

如果您需要找到拥有相同类名的所有 HTML 元素，请使用 `getElementsByClassName()`。

本例返回包含 class="intro" 的所有元素的列表：

```js
var x = document.getElementsByClassName("intro");
```

## 通过 CSS 选择器查找 HTML 元素

如果您需要查找匹配指定 CSS 选择器（id、类名、类型、属性、属性值等等）的所有 HTML 元素，请使用`querySelect()` 或者 `querySelectorAll()` 方法。

本例返回 class="intro" 的所有 `<p>` 元素列表：

```js
var x = document.querySelectorAll("p.intro");
```
# 块级元素和内联元素

## 块级元素

大多数 HTML 元素被定义为块级元素或内联元素。

编者注：“块级元素”译为 block level element，“内联元素”译为 inline element。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

例子：`<h1>`, `<p>`,` <ul>`, `<table>`

## 内联元素

内联元素在显示时通常不会以新行开始。

例子：`<b>`,`<a>`,`<em>`

## div元素

`<div>` 元素是块级元素，它是可用于组合其他 HTML 元素的容器。

`<div>` 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

div元素的常见用途是用作文档布局，它替代了很早之前使用table元素进行文档布局的错误做法。

## span元素

`<span>`元素是内联元素，可用作文本的容器。

`<span> `元素也没有特定的含义。

当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

## 行内块级元素

内联元素有一个特点，就是元素的宽高由内容本身决定，无法手动的设置宽高，但有一些内联元素确可以手动设置宽高，我们将这类内联元素叫做行内块级元素。例如：`<img>` `<input>` `<td>`
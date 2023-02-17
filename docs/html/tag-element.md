# HTML标签和HTML元素

通过上节的学习，我们应该明确学习HTML的核心在于学习其中的标签用法，本节开始我们将一起开始学习HTML标签：

## HTML标题

HTML 标题（Heading）是通过h1-h6等标签进行定义的。

```html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
```

## HTML 段落

HTML 段落是通过p标签进行定义的。

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## HTML 链接

HTML 链接是通过a标签进行定义的。

```html
<a href="http://www.x-zd.com/">This is a link</a>
```

注释：在 href 属性中指定链接的地址。

## HTML 图像

HTML 图像是通过img标签进行定义的。

```html
<img src="http://www.x-zd.com/themes/simpleboot3_web/public/web/images/image/logo_03.png" width="104" height="142" />
```

注释：图像的名称和尺寸是以属性的形式提供的。

HTML中的标签当然不止于此，不过学到这里我们要适当停一下，来总结一下HTML元素的相关知识。

HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。

## HTML 元素语法

- HTML 元素以开始标签起始
- HTML 元素以结束标签终止
- 元素的内容是开始标签与结束标签之间的内容
- 某些 HTML 元素具有空内容（empty content）
- 空元素在开始标签中进行关闭（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有属性

提示：您将在本教程的下一章中学习更多有关属性的内容。

## 嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（可以包含其他 HTML 元素）。

HTML 文档由嵌套的 HTML 元素构成。

```html
<html>

<body>
<p>This is my first paragraph.</p>
</body>

</html>
```

上面的例子包含三个 HTML 元素。

## HTML 实例解释

### p元素：

```
<p>This is my first paragraph.</p>
```

这个 p 元素定义了 HTML 文档中的一个段落。

这个元素拥有一个开始标签 `<p>`，以及一个结束标签 `</p>`。

元素内容是：This is my first paragraph。

### body 元素：

```
<body>
<p>This is my first paragraph.</p>
</body>
```

body 元素定义了 HTML 文档的主体。

这个元素拥有一个开始标签 `<body>`，以及一个结束标签 `</body>`。

元素内容是另一个 HTML 元素（p 元素）。

### html 元素：

```
<html>

<body>
<p>This is my first paragraph.</p>
</body>

</html>
```
html 元素定义了整个 HTML 文档。

这个元素拥有一个开始标签 `<html>`，以及一个结束标签 `</html>`。

元素内容是另一个 HTML 元素（body 元素）。

## 不要忘记结束标签

即使您忘记了使用结束标签，大多数浏览器也会正确地显示 HTML：

```
<p>This is a paragraph
<p>This is a paragraph
```
上面的例子在大多数浏览器中都没问题，但不要依赖这种做法。忘记使用结束标签会产生不可预料的结果或错误。

**注释**:未来的 HTML 版本不允许省略结束标签。
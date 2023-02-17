# JS简介

JavaScript是真正的编程语言，可以真正地来”操作“页面。

* JS可以改变HTML的内容
* JS可以改变HTML的属性
* JS可以改变HTML样式

在 HTML 中，JavaScript 代码必须位于 `<script>` 与 `</script>` 标签之间。

`<script>`标签的位置可以放在`<head>`或者`<body>`之间。

## head中的JavaScript

在本例中，JavaScript 函数被放置于 HTML 页面的 `<head>` 部分。

该函数会在按钮被点击时调用：

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "段落被更改。";
}
</script>
</head>

<body>

<h1>一张网页</h1>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">试一试</button>

</body>
</html>
```

## body中的JavaScript

在本例中，JavaScript 函数被放置于 HTML 页面的 `<body>` 部分。

该函数会在按钮被点击时调用：

```html
<!DOCTYPE html>
<html>
<body> 

<h1>A Web Page</h1>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">试一试</button>

<script>
function myFunction() {
   document.getElementById("demo").innerHTML = "段落被更改。";
}
</script>

</body>
</html>
```

**提示**：把脚本置于 `<body>` 元素的底部，可改善显示速度，因为脚本编译会拖慢显示，所以建议放在body底部。

## 外部脚本

脚本可放置与外部文件中：

```js
function myFunction() {
   document.getElementById("demo").innerHTML = "段落被更改。";
}
```

外部脚本很实用，如果相同的脚本被用于许多不同的网页。

JavaScript 文件的文件扩展名是 *.js*。

如需使用外部脚本，请在 `<script>` 标签的 `src` (source) 属性中设置脚本的名称：

```js
<script src="myScript.js"></script>
```

您可以在 `<head>` 或 `<body>` 中放置外部脚本引用。

该脚本的表现与它被置于 `<script>` 标签中是一样的，如果引入了外部脚本，这个`<script>`标签中不要再写入其他内容。

## 外部脚本的优势

在外部文件中放置脚本有如下优势：

- 分离了 HTML 和代码
- 使 HTML 和 JavaScript 更易于阅读和维护
- 已缓存的 JavaScript 文件可加速页面加载

如需向一张页面添加多个脚本文件 - 请使用多个 script 标签：

```html
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```
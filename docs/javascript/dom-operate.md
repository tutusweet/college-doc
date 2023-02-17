# DOM操作

本节我们一起学习如何来操作DOM元素的内容，属性，样式。

## 改变 HTML 内容

修改 HTML 文档内容最简单的方法是，使用 `innerHTML` 属性。

如需修改 HTML 元素的内容，请使用此语法：

```js
document.getElementById(id).innerHTML = new text
```

本例修改了 `<p>` 元素的内容：

```html
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "hello kitty!";
</script>

</body>
</html>
```

- 上面的 HTML 文档包含 id="p1" 的 `<p>` 元素
- 我们使用 HTML DOM 来获取 id="p1" 的这个元素
- JavaScript 把该元素的内容（innerHTML）更改为 "Hello Kitty!"

如果希望仅修改文本内容，可以使`innerText`。

## 改变属性的值

如需修改 HTML 属性的值，请使用如下语法：

```js
document.getElementById(id).attribute = new value
```

本例修改了 `<img>` 元素的 `src` 属性的值：

```html
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html> 
```

- 上面的 HTML 文档含有一个 id="myImage" 的 `<img>` 元素
- 我们使用 HTML DOM 来获取 id="myImage" 的元素
- JavaScript 把此元素的 src 属性从 "smiley.gif" 更改为 "landscape.jpg"

## 改变 HTML 样式

如需更改 HTML 元素的样式，请使用此语法：

```js
document.getElementById(id).style.property = new style
```

下面的例子更改了 `<p>` 元素的样式：

```html
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

<p>上面的段落已被脚本改变。</p>

</body>
</html>
```
# CSS颜色

从本节开始我们学习CSS的常见样式声明，从颜色开始。

## CSS 文本颜色

您可以设置文本的颜色：

```html
<h1 style="color:Tomato;">China</h1>
<p style="color:DodgerBlue;">China is a great country!</p>
<p style="color:MediumSeaGreen;">China, officially the People's Republic of China...</p>
```

## CSS 边框颜色

您可以设置边框的颜色：

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

## CSS 背景颜色

您可以为 HTML 元素设置背景色：

```html
<h1 style="background-color:DodgerBlue;">China</h1>
<p style="background-color:Tomato;">China is a great country!</p>
```

## CSS颜色名

在上面的示例中，我们使用的标准颜色名，CSS还支持使用RGB、RGBA、HEX等格式的颜色名。

### RGB

在 CSS 中，可以使用下面的公式将颜色指定为 RGB 值：

### rgb(*red*, *green*, *blue*)

每个参数 (*red*、*green* 以及 *blue*) 定义了 0 到 255 之间的颜色强度。

例如，rgb(255, 0, 0) 显示为红色，因为红色设置为最大值（255），其他设置为 0。

要显示黑色，请将所有颜色参数设置为 0，如下所示：rgb(0, 0, 0)。

要显示白色，请将所有颜色参数设置为 255，如下所示：rgb(255, 255, 255)。

### HEX

在 CSS 中，可以使用以下格式的十六进制值指定颜色：

### #*rrggbb*

其中 rr（红色）、gg（绿色）和 bb（蓝色）是介于 00 和 ff 之间的十六进制值（与十进制 0-255 相同）。

例如，#ff0000 显示为红色，因为红色设置为最大值（ff），其他设置为最小值（00）。
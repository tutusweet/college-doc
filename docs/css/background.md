# CSS背景

常见背景样式包括以下具体6种：

- background-color
- background-image
- background-size
- background-repeat
- background-attachment
- background-position

背景颜色在上一节中已经说明，本节我们学习后面5种：

## 背景图像

`background-image` 属性指定用作元素背景的图像。

默认情况下，图像会重复，以覆盖整个元素。

### 实例

页面的背景图像可以像这样设置：

```css
body {
  background-image: url("img.jpg");
}
```

## 背景重复

默认情况下，`background-image` 属性在水平和垂直方向上都重复图像。

某些图像应只适合水平或垂直方向上重复，否则它们看起来会很奇怪：

### 实例

```css
body {
  background-image: url("gradient_bg.png");
}
```

如果上面的图像仅在水平方向重复 (`background-repeat: repeat-x;`)，则背景看起来会更好：

### 实例

```css
body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;
}
```

**提示：**如需垂直重复图像，请设置 `background-repeat: repeat-y;`。

`background-repeat` 属性还可指定只显示一次背景图像：

### 实例

背景图像仅显示一次：

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
}
```

在上例中，背景图像与文本放置在同一位置。我们想要更改图像的位置，以免图像过多干扰文本。

## 背景位置

`background-position` 属性用于指定背景图像的位置。

### 实例

把背景图片放在右上角：

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

## 背景附着

`background-attachment` 属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分一起滚动）：

### 实例

指定应该固定背景图像：

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

指定背景图像应随页面的其余部分一起滚动：

```css
body {
  background-image: url("tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;
}
```

## 背景大小

`background-size`属性指定背景图像的大小，可以是具体的值，也可以是预设的属性。

```css
background-size: length|percentage|cover|contain;
```

## CSS背景简写

如需缩短代码，也可以在一个属性中指定所有背景属性。它被称为简写属性。

而不是这样写：

```css
body {
  background-color: #ffffff;
  background-image: url("tree.png");
  bacKground-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
}
```

您能够使用简写属性 `background`：

### 实例

使用简写属性在一条声明中设置背景属性：

```css
body {
  background: #ffffff url("tree.png") cover no-repeat right top;
}
```

在使用简写属性时，属性值的顺序为：

- background-color
- background-image
- background-size
- background-repeat
- background-position

属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。请注意，在上面的例子中，我们没有使用 background-attachment 属性，因为它没有值。
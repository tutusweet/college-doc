# CSS文本

本节学习有关文本的常见样式：

## 文本颜色

前面章节中已经说明过`color`属性，我们需要明确的是颜色值的类型：

- 颜色名 - 比如 "red"
- 十六进制值 - 比如 "#ff0000"
- RGB 值 - 比如 "rgb(255,0,0)"

## 文本对齐

`text-align` 属性用于设置文本的水平对齐方式。

文本可以左对齐或右对齐，或居中对齐。

下例展示了居中对齐以及左右对齐的文本：

### 实例

```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

`vertical-align` 属性设置元素的垂直对齐方式。

本例演示如何设置文本中图像的垂直对齐方式：

### 实例

```css
img.top {
  vertical-align: top;
}

img.middle {
  vertical-align: middle;
}

img.bottom {
  vertical-align: bottom;
}
```

## 文本装饰

`text-decoration` 属性用于设置或删除文本装饰。

`text-decoration: none;` 通常用于从链接上删除下划线：

### 实例

```css
a {
  text-decoration: none;
}
```

其他 `text-decoration` 值用于装饰文本：

### 实例

```css
h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}
```

**注释**:建议不要在非链接文本加下划线，因为这经常会使读者感到困惑。

## 文字缩进

`text-indent` 属性用于指定文本第一行的缩进：

### 实例

```css
p {
  text-indent: 50px;
}
```

## 字母间距

`letter-spacing` 属性用于指定文本中字符之间的间距。

下例演示如何增加或减少字符之间的间距：

### 实例

```css
h1 {
  letter-spacing: 3px;
}

h2 {
  letter-spacing: -3px;
}
```

## 行高

`line-height` 属性用于指定行之间的间距：

### 实例

```css
p.small {
  line-height: 0.8;
}

p.big {
  line-height: 1.8;
}
```
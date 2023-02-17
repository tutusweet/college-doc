# 弹性盒子

## CSS Flexbox 布局

在 Flexbox 布局出现之前，常用的布局模式有以下四种：

- 块（Block），用于网页中的部分（节）
- 行内（Inline），用于文本
- 表（table)，用于二维表数据
- 定位和浮动，用于元素的明确位置

弹性布局，可以更轻松地设计灵活的响应式布局结构，而无需使用浮动或定位。

## Flex容器

如需开始使用 Flexbox 模型，您需要首先定义 Flex 容器。

通过将 `display` 属性设置为 `flex`，flex 容器将可伸缩：

```CSS
.flex-container {
  display: flex;
}
```

以下是 flex 容器属性：

- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-items`

## flex-direction 属性

`flex-direction` 属性定义容器要在哪个方向上堆叠 flex 项目。

常用的属性值：

* row
* column

`column` 值设置垂直堆叠 flex 项目（从上到下）：

```  css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

## flex-wrap 属性

弹性盒子的特点决定容器中的项目默认是不换行的，通过`flex-wrap`属性可以设置是否换行。

常用属性值：

* no-wrap(默认值)
* wrap

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

## justify-content 属性

`justify-content` 属性用于对齐 flex 项目：

常用属性值：

* center
* flex-start(默认)
* flex-end
* space-aroud
* space-between

`center` 值将 flex 项目在容器的中心对齐：

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

## align-items 属性

`align-items` 属性用于垂直对齐 flex 项目。

常用属性值：

* center
* flex-start
* flex-end
* stretch(默认值 拉伸 flex 项目以填充容器）

`center` 值将 flex 项目在容器中间对齐：

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

## 完美居中

在下面的例子中，我们会解决一个非常常见的样式问题：完美居中。

解决方案：将 `justify-content` 和 `align-items` 属性设置为居中，然后 flex 项目将完美居中：

```css
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

## Flex项目

flex 容器的直接子元素会自动成为弹性（flex）项目。

用于弹性项目的属性有：

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`（简写形式）
- `align-self`

## order 属性

`order` 属性规定 flex 项目的顺序。

`order` 值必须是数字，默认值是 0。

`order` 属性可以改变 flex 项目的顺序：

```html
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div> 
  <div style="order: 1">4</div>
</div>
```

## flex-grow 属性

`flex-grow` 属性规定某个 flex 项目相对于其余 flex 项目将增长多少。

该值必须是数字，默认值是 0。

使第三个弹性项目的增长速度比其他弹性项目快八倍：

```html
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div> 
</div>
```

## flex-shrink 属性

`flex-shrink` 属性规定某个 flex 项目相对于其余 flex 项目将收缩多少。

该值必须是数字，默认值是 0。

第三个项目不收缩：

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

## flex-basis 属性

`flex-basis` 属性规定 flex 项目的初始长度。

将第三个弹性项目的初始长度设置为 200 像素：

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div>
  <div>4</div>
</div>
```

## flex 属性

`flex` 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。

使第三个弹性项目不可增长（0），不可收缩（0），且初始长度为 200 像素：

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>
```

## align-self 属性

`align-self` 属性规定弹性容器内所选项目的对齐方式。

`align-self` 属性将覆盖容器的 align-items 属性所设置的默认对齐方式。
# CSS动画

CSS3实现了HTML元素的动画效果，它比过渡效果更加强大！

在本节中，您将学习如下属性：

- `@keyframes`
- `animation-name`
- `animation-duration`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-timing-function`
- `animation-fill-mode`
- `animation`（简写形式）

## 什么是 CSS 动画？

动画使元素逐渐从一种样式变为另一种样式。

您可以随意更改任意数量的 CSS 属性。

如需使用 CSS 动画，您必须首先为动画指定一些关键帧。

关键帧包含元素在特定时间所拥有的样式。

## @keyframes 规则

如果您在 `@keyframes` 规则中指定了 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。

要使动画生效，必须将动画绑定到某个元素。

下面的例子将 "example" 动画绑定到 `<div>` 元素。动画将持续 4 秒钟，同时将 `<div> `元素的背景颜色从 "red" 逐渐改为 "yellow"：

```css
/* 动画代码 */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* 向此元素应用动画效果 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

**注意**：`animation-duration` 属性定义需要多长时间才能完成动画。如果未指定 `animation-duration` 属性，则动画不会发生，因为默认值是 0s（0秒）。

在上面的例子中，通过使用关键字 "from" 和 "to"（代表 0％（开始）和 100％（完成）），我们设置了样式何时改变。

您也可以使用百分比值。通过使用百分比，您可以根据需要添加任意多个样式更改。

下面的例子将在动画完成 25％，完成 50％ 以及动画完成 100％ 时更改 `<div>` 元素的背景颜色：

```css
/* 动画代码 */
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

## 延迟动画

`animation-delay` 属性规定动画开始的延迟时间。

## 运行次数

`animation-iteration-count` 属性指定动画应运行的次数。

使用值 "infinite" 可以使动画永远持续下去。

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
```

## 反向或交替运行动画

`animation-direction` 属性指定是向前播放、向后播放还是交替播放动画。

`animation-direction` 属性可接受以下值：

- `normal` - 动画正常播放（向前）。默认值
- `reverse` - 动画以反方向播放（向后）
- `alternate` - 动画先向前播放，然后向后
- `alternate-reverse` - 动画先向后播放，然后向前

下面的例子使用值 "alternate" 使动画先向前运行，然后向后运行：

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: alternate;
}
```

## 指定动画的速度曲线

`animation-timing-function` 属性规定动画的速度曲线。

`animation-timing-function` 属性可接受以下值：

- `ease` - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
- `linear` - 规定从开始到结束的速度相同的动画
- `ease-in` - 规定慢速开始的动画
- `ease-out` - 规定慢速结束的动画
- `ease-in-out` - 指定开始和结束较慢的动画

## 动画简写属性

下例使用六种动画属性：

```css
div {
  animation-name: example;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

使用简写的 `animation` 属性也可以实现与上例相同的动画效果：

```css
div {
  animation: example 5s linear 2s infinite alternate;
}
```
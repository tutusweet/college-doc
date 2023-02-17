# CSS过渡

CSS 过渡允许您在给定的时间内平滑地改变属性值。

在本章中，您将学习如下属性：

- `transition` （简写形式）
- `transition-delay`
- `transition-duration`
- `transition-property`
- `transition-timing-function`

## 如何使用 CSS 过渡？

如需创建过渡效果，必须明确：

* 2个不同的CSS状态

- 您要添加效果的 CSS 属性
- 效果的持续时间

**注意**：如果未规定持续时间部分，则过渡不会有效果，因为默认值为 0。

下面的例子展示了 100px * 100px 的红色 `<div>` 元素。 `<div>` 元素还为 width 属性指定了过渡效果，持续时间为 2 秒：

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
```

当指定的 CSS 属性（width）值发生变化时，将开始过渡效果。

现在，让我们为 width 属性指定一个鼠标悬停在 `<div>` 元素上时的新值：

```css
div:hover {
  width: 300px
}
```

请注意，当光标从元素上移开时，它将逐渐变回其原始样式。

## 指定过渡的速度曲线

`transition-timing-function` 属性规定过渡效果的速度曲线。

transition-timing-function 属性可接受以下值：

- `ease` - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）
- `linear` - 规定从开始到结束具有相同速度的过渡效果
- `ease-in` -规定缓慢开始的过渡效果
- `ease-out` - 规定缓慢结束的过渡效果
- `ease-in-out` - 规定开始和结束较慢的过渡效果

## 延迟过渡效果

`transition-delay` 属性规定过渡效果的延迟（以秒计）。

下例在启动之前有 1 秒的延迟：

```css
div {
  transition-delay: 1s;
}
```
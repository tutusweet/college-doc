# CSS转换

在CSS3中，新增了大量的样式，同时还添加转换和动画效果，在本套课程中我们着重来学习动画这部分，本节先来学习转换，转换又分为2D转换和3D转换，2D转换的使用会更多一些，我们本节学习也以2D转换为主：

## CSS 2D 转换

CSS 转换（transforms）允许您移动、旋转、缩放元素。

要实现这些效果都需要通过CSS属性`transform`来实现，不同的效果用对应的函数来实现。

## 移动

![Translate](https://www.w3school.com.cn/i/css/transform_translate.gif)

`translate()` 方法从其当前位置移动元素（根据为 X 轴和 Y 轴指定的参数）。

下面的例子把 `<div>` 元素从其当前位置向右移动 50 个像素，并向下移动 100 个像素：

```css
div {
  transform: translate(50px, 100px);
}
```

## 旋转

![Rotate](https://www.w3school.com.cn/i/css/transform_rotate.gif)

`rotate()` 方法根据给定的角度顺时针或逆时针旋转元素。

下面的例子把 `<div>` 元素顺时针旋转 20 度：

```css
div {
  transform: rotate(20deg);
}
```

使用负值将逆时针旋转元素。

## 缩放

![Scale](https://www.w3school.com.cn/i/css/transform_scale.gif)

`scale()` 方法增加或减少元素的大小（根据给定的宽度和高度参数）。

下面的例子把 `<div>` 元素增大为其原始宽度的两倍和其原始高度的三倍：

```css
div {
  transform: scale(2, 3);
}
```
# 盒模型-外边距

上节我们介绍了CSS布局中的一个重要概念盒模型，其中介绍了一些相关的属性，本节开始我们对其中的新属性(内边距 外边距)来进行说明。

## CSS 外边距

CSS `margin` 属性用于在任何定义的边框之外，为元素周围创建空间。

通过 CSS，您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距。

## Margin - 单独的边

CSS 拥有用于为元素的每一侧指定外边距的属性：

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

所有外边距属性都可以设置以下值：

- auto - 浏览器来计算外边距
- *length* - 以 px、pt、cm 等单位指定外边距
- % - 指定以包含元素宽度的百分比计的外边距
- inherit - 指定应从父元素继承外边距

**提示**：允许负值。

为`<p>` 元素的所有四个边设置不同的外边距：

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

## Margin - 简写属性

为了缩减代码，可以在一个属性中指定所有外边距属性。

`margin` 属性是以下各外边距属性的简写属性：

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

### 工作原理是这样的：

如果 `margin` 属性有四个值：

- margin: 25px 50px 75px 100px;

  * 上外边距是 25px

  - 右外边距是 50px
  - 下外边距是 75px
  - 左外边距是 100px


margin 简写属性设置四个值：

```css
p {
  margin: 25px 50px 75px 100px;
}
```

如果 `margin` 属性设置三个值：

- margin: 25px 50px 75px;

  * 上外边距是 25px

  - 右和左外边距是 50px
  - 下外边距是 75px


使用已设置三个值的 margin 简写属性：

```css
p {
  margin: 25px 50px 75px;
}
```

如果 `margin` 属性设置两个值：

- margin: 25px 50px;

  * 上和下外边距是 25px

  - 右和左外边距是 50px


使用设置了两个值的 margin 简写属性：

```css
p {
  margin: 25px 50px;
}
```

如果 `margin` 属性设置了一个值：

- margin: 25px;
  * 所有四个外边距都是 25px


使用设置一个值的 margin 简写属性：

```css
p {
  margin: 25px;
}
```

## auto 值

您可以将 margin 属性设置为 `auto`，以使元素在其容器中水平居中。

然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。

使用 `margin: auto`：

```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```
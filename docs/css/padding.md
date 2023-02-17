# 内边距

## CSS 内边距

CSS `padding` 属性用于在任何定义的边界内的元素内容周围生成空间。

通过 CSS，您可以完全控制内边距（填充）。有一些属性可以为元素的每一侧（上、右、下和左侧）设置内边距。

## Padding - 单独的边

CSS 拥有用于为元素的每一侧指定内边距的属性：

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

所有内边距属性都可以设置以下值：

- *length* - 以 px、pt、cm 等单位指定内边距
- % - 指定以包含元素宽度的百分比计的内边距
- inherit - 指定应从父元素继承内边距

**提示**：不允许负值。

为 `<div>` 元素的所有四个边设置不同的内边距：

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

## Padding - 简写属性

为了缩减代码，可以在一个属性中指定所有内边距属性。

`padding` 属性是以下各内边距属性的简写属性：

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

### 工作原理是这样的：

如果 `padding` 属性有四个值：

- padding: 25px 50px 75px 100px;

  * 上内边距是 25px

  - 右内边距是 50px
  - 下内边距是 75px
  - 左内边距是 100px


使用设置了四个值的 padding 简写属性：

```css
div {
  padding: 25px 50px 75px 100px;
}
```

如果 `padding` 属性设置了三个值：

- padding: 25px 50px 75px;

  * 上内边距是 25px

  - 右和左内边距是 50px
  - 下内边距是 75px


使用设置了三个值的 padding 简写属性：

```
div {
  padding: 25px 50px 75px;
}
```

如果 `padding` 属性设置了两个值：

- padding: 25px 50px;

  * 上和下内边距是 25px

  - 右和左内边距是 50px


使用设置了两个值的 padding 简写属性：

```css
div {
  padding: 25px 50px;
}
```

如果 `padding` 属性设置了一个值：

- padding: 25px;
  * 所有四个内边距都是 25px


使用设置了一个值的 padding 简写属性：

```css
div {
  padding: 25px;
}
```

## 标准盒模型和怪异盒模型

在我们之前学习的盒模型标准（我们称之为标准盒模型）中，盒子的内容区域是元素（盒模型）的内边距、边框和外边距内的部分。在实际的CSS布局中，这通常不是我们希望的模式。

因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。

在这里，`<div>` 元素的宽度为 300px。但是，`<div>` 元素的实际宽度将是 350px（300px + 左内边距 25px + 右内边距 25px）：

```css
div {
  width: 300px;
  padding: 25px;
}
```

若要将宽度保持为 300px，无论填充量如何，那么您可以使用 `box-sizing` 属性。这将导致元素保持其宽度。如果增加内边距，则可用的内容空间会减少。设置了`border-box`的盒模型我们称之为怪异盒模型。

使用 box-sizing 属性将宽度保持为 300px，无论填充量如何：

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```
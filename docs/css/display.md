# 布局属性-Display

`display` 属性是用于控制布局的最重要的 CSS 属性。

## Display 属性

`display` 属性规定是否/如何显示元素。

每个 HTML 元素都有一个默认的 display 值，具体取决于它的元素类型。大多数元素的默认 display 值为 `block` 或 `inline`。

## Display: none

`display: none;` 通常与 JavaScript 一起使用，以隐藏和显示元素，而无需删除和重新创建它们。如果您想知道如何实现此目标，请查看本页面上的最后一个实例。

默认情况下，`<script>` 元素使用 `display: none;`。

## 覆盖默认的 Display 值

如前所述，每个元素都有一个默认 display 值。但是，您可以覆盖它。

将行内元素更改为块元素，反之亦然，对于使页面以特定方式显示同时仍遵循 Web 标准很有用。

一个常见的例子是为实现水平菜单而生成行内的 `<li>` 元素：

```css
li {
  display: inline;
}
```

**注意**：设置元素的 display 属性仅会更改*元素的显示方式*，而不会更改元素的种类。因此，带有 `display: block;` 的行内元素不允许在其中包含其他块元素。

下例将 `<span>` 元素显示为块元素：

```css
span {
  display: block;
}
```

下例将 `<a>` 元素显示为块元素：

```css
a {
  display: block;
}
```

## 隐藏元素

通过将 `display` 属性设置为 `none` 可以隐藏元素。该元素将被隐藏，并且页面将显示为好像该元素不在其中：

```css
h1.hidden {
  display: none;
}
```

`visibility:hidden;` 也可以隐藏元素。

但是，该元素仍将占用与之前相同的空间。元素将被隐藏，但仍会影响布局：
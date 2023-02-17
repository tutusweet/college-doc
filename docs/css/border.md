# CSS边框

## CSS 边框属性

CSS `border` 属性允许您指定元素边框的样式、宽度和颜色。通常我们都会将这3个具体样式写在一起，比如：

### 实例

```css
p {
  border: 5px solid red;
}
```

`border` 属性是以下各个边框属性的简写属性：

- `border-width`
- `border-style`（必需）
- `border-color`

您还可以只为一个边指定所有单个边框属性：

```css
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

## CSS 圆角边框

`border-radius` 属性用于向元素添加圆角边框：

### 实例

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```
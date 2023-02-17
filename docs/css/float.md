# CSS浮动

浮动也是CSS布局的常见方式，CSS `float` 属性规定元素如何浮动。

## float 属性

`float` 属性用于定位和格式化内容，例如让图像向左浮动到容器中的文本那里。

`float` 属性可以设置以下值之一：

- left - 元素浮动到其容器的左侧
- right - 元素浮动在其容器的右侧
- none - 元素不会浮动（将显示在文本中刚出现的位置）。默认值。
- inherit - 元素继承其父级的 float 值

最简单的用法是，`float` 属性可实现（报纸上）文字包围图片的效果。

## 实例 - float: right;

下例指定图像应在文本中向右浮动：

<div>
<img src='https://www.w3school.com.cn/i/logo/w3logo-3.png' style='float:right;margin-left:20px;' width='100px'/>

本套课程涵盖了web基础开发的核心技术知识，还加入了主流前端框架Vue的学习，熟练掌握后能具备初级开发工程师的技术能力。理论知识+项目实战能让学生快速掌握web技术的实际应用。
</div>

```css
img {
  float: right;
}
```


## 清除浮动

使用浮动常常会带来一些意外的布局问题，例如未设置高度的父元素会“坍塌”，此时我们便需要清除浮动，我们这里介绍3种清除浮动的方式：

* 可以显式地给父元素设置一个固定高度

* 给父元素添加`overflow:auto`属性

* 通过给伪元素添加`clear:both`属性，例如可以这样做：

  ```css
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
  ```

  
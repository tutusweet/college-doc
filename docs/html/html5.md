# Html5新特性

## 什么是 HTML5？

HTML5 是最新的 HTML 标准。

HTML5 是专门为承载丰富的 web 内容而设计的，并且无需额外插件。

HTML5 拥有新的语义、图形以及多媒体元素。

HTML5 提供的新元素和新的 API 简化了 web 应用程序的搭建。

HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。

## HTML5 - 新特性

HTML5 的一些最有趣的新特性：

- 新的语义元素，比如` <header>`, `<footer>`, `<article>`, and `<section>`。
- 新的表单控件，比如数字、日期、时间、日历和滑块。
- 强大的图像支持（借由 `<canvas>` 和 `<svg>`）
- 强大的多媒体支持（借由 `<video>` 和 `<audio>`）
- 强大的新 API，比如用本地存储取代 cookie。

## 什么是语义元素？

语义元素清楚地向浏览器和开发者描述其意义。

*非语义*元素的例子：`<div>` 和 `<span>` - 无法提供关于其内容的信息。

*语义*元素的例子：`<form>`、`<table>` 以及 `<img>` - 清晰地定义其内容。

## 浏览器支持

| Chrome |  IE  | FireFox | Safiry | Opera |
| :----: | :--: | :-----: | :----: | :---: |
|  Yes   | Yes  |   Yes   |  Yes   |  Yes  |

所有现代浏览器均支持 HTML5 语义元素。

## HTML5 中新的语义元素

许多网站包含了指示导航、页眉以及页脚的 HTML 代码，例如这些：`<div id="nav"> <div class="header"> <div id="footer">`。

HTML5 提供了定义页面不同部分的新语义元素：

- `<article>`
- `<aside>`
- `<footer>`
- `<header>`
- `<main>`
- `<nav>`
- `<section>`
- ...

### HTML5 语义元素

![HTML5 语义元素](https://www.w3school.com.cn/i/ct_sem_elements.png)

## HTML5多媒体标签

如果希望在页面中插入音频内容，可以使用HTML5中提供的`<audio>`标签。

```html
<audio controls src='song.mp3'></audio>
```

如果希望在页面中插入视频内容，可以使用HTML5中提供的`<video>`标签

```html
<video controls src='video.mp4'></video>
```

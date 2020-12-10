HTML
===

> Create by **jsliang** on **2020-09-03 15:43:40**  
> Recently revised in **2020-12-11 07:52:33**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 HTML5 标签](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 结构语义化](#chapter-three) |
| &emsp;[3.1 为什么需要语义化](#chapter-three-one) |
| &emsp;[3.2 结构语义化](#chapter-three-two) |
| &emsp;[3.3 头部](#chapter-three-three) |
| &emsp;[3.4 主要内容](#chapter-three-four) |
| &emsp;[3.5 页脚](#chapter-three-five) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 层级关系](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 替换元素和不可替换元素](#chapter-five) |
| &emsp;[5.1 替换元素](#chapter-five-one) |
| &emsp;[5.2 不可替换元素](#chapter-five-two) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 行内元素和块级元素](#chapter-six) |
| &emsp;[6.1 常见块级元素](#chapter-six-one) |
| &emsp;[6.2 常见行内元素](#chapter-six-two) |
| &emsp;[6.3 行内元素和块级元素转换](#chapter-six-three) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 参考文献](#chapter-seven) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 HTML5 标签

> [返回目录](#chapter-one)

常见的 HTML5 标签有：

* `<section>` - 章节
* `<nav>` - 导航
* `<article>` - 完整独立内容块
* `<aside>` - 和页面内容关联度较低的内容：例如广告（剩余的）
* `<header>` - 页面或者文章头部
* `<footer>` - 页面或者文字尾部
* `<main>` - 文档主要内容
* `<figure>` - 一个和文档有关的图例
* `<figcaption>` - 图例说明
* `<mark>` - 需要被高亮的引用文字
* `<video>` - 视频
* `<audio>` - 音频
* `<source>` - 为 `video` 和 `audio` 指定 **媒体源**
* `<track>` - 为 `video` 和 `audio` 指定 **文本轨道**（字幕）
* `<canvas>` - 位图区域
* `<svg>` - 矢量图
* `<progress>` - 进度条
* `<meter>` - 滑动条

## <a name="chapter-three" id="chapter-three"></a>三 结构语义化

> [返回目录](#chapter-one)
  
HTML 有个光荣的任务：

* 在没有 CSS 的情况下，能够清晰的、有结构地表述这个页面的内容。

所以，构建一个页面结构，需要充分考虑到语义化。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 为什么需要语义化

> [返回目录](#chapter-one)
  
* 易修改、易维护
* 无障碍阅读支持
* 搜索引擎良好，利于 SEO
* 面向未来的 HTML，浏览器在未来可能提供更丰富的支持

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 结构语义化

> [返回目录](#chapter-one)
  
```html
<!-- 头部 -->
<header>
  <nav></nav>
</header>

<!-- 内容区 -->
<main>
  <!-- 左侧 -->
  <article>
    <!-- 左侧标题 -->
    <header></header>
    <!-- 图片区块 -->
    <figure>
      <img>
      <figcaption></figcaption>
    </figure>
  </article>

  <!-- 右侧 -->
  <aside>
    <!-- 友情链接 -->
    <nav></nav>
    <section></section>
  </aside>
</main>

<!-- 底部 -->
<footer></footer>
```

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 头部

> [返回目录](#chapter-one)
  
`<header>` 用来表示网页的头部。

头部信息区可以包含 `<nav>` 导航栏等内容信息。

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 主要内容

> [返回目录](#chapter-one)
  
`<main>` 用来规定出 `<header>`、`<footer>` 外的所有内容：

* `<aside>`：可以存放广告、搜索内容、分享链接等
* `<section>`：表单、清单、文章分块等内容
* `<article>`：表示一个完整的、自成一体的内容块。如文章或者新闻报道。
* `<figure>`：文章插图块
* `<figcaption>`：文章插图注释

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 页脚

> [返回目录](#chapter-one)
  
`<footer>` 标签内部可以包含版权、来源信息、法律限制等文本或者链接信息。

## <a name="chapter-four" id="chapter-four"></a>四 层级关系

> [返回目录](#chapter-one)

`docoment`、`window`、`html`、`body` 的层级关系：

```
window > document > html > body
```

* `window` 是 `BOM` 的核心对象，它一方面用来获取和设置浏览器的属性和行为，另一方面作为一个全局对象。
* `document` 对象是一个跟文档相关的对象，拥有一些操作文档内容的功能，但是地位没有 `window` 高。
* `html` 元素对象跟 `document` 元素对象是属于 `html` 文档的 `DOM` 对象，可以认为就是 `html` 源代码中那些标签化成的对象，它们跟 `div`、`select` 这些对象没有什么根本区别。

## <a name="chapter-five" id="chapter-five"></a>五 替换元素和不可替换元素

> [返回目录](#chapter-one)
  
`<input>` 和 `<img>` 虽然是行内元素，但是它们是可以设置宽和高的，因为它们涉及到可替换元素和不可替换元素。

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 替换元素

> [返回目录](#chapter-one)
  
**替换元素** 就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

例如：

* `<img>` 根据 `src` 属性来读取图片信息并显示出来
* `<input>` 根据标签的 `type` 属性来决定是显示输入框，还是单选按钮。

替换元素有：`<img>`、`<input>`、`<textarea>`、`<select>`、`<object>`。

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 不可替换元素

> [返回目录](#chapter-one)
  
HTML 大多数元素都是不可替换的，即其内容直接展现给浏览器。

例如：

* `<p>` 直接全部展示

## <a name="chapter-six" id="chapter-six"></a>六 行内元素和块级元素

> [返回目录](#chapter-one)
  
整体比较：

| 块级元素 | 行内元素 |
| --- | --- |
| 独占一行。默认情况下宽度自动填充父元素宽度 | 宽度随元素内容变化。相邻的行内元素会排列在同一行内，直到一行排不下，才会换行。 |
| 可以设置 `width`、`height` | 设置 `width`、`height` 无效 |
| 可以设置 `margin` 和 `padding` | 可以设置 `margin-left`、`margin-right`、`padding-left`、`padding-right` |
| 对应：`display: block` | 对应 `display: inline` |

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 常见块级元素

> [返回目录](#chapter-one)
  
* `<div>` - 标签块
* `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>` - 标题 1 - 标题 6
* `<form>` - 表单
* `<hr>` - 水平线
* `<ul>` - 无序列表
* `<ol>` - 有序列表
* `<li>` - 定义列表项目，用于 `ul` 和 `li` 中
* `<p>` - 段落
* `<table>`、`<thead>`、`<tbody>`、`<thead>`、`<th>`、`<tr>`、`<td>` - 表格元素

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 常见行内元素

> [返回目录](#chapter-one)
  
* `<a>` - 超链接或者锚点
* `<b>` - 字体加粗
* `<br>` - 换行
* `<code>` - 定义计算机代码文本
* `<i>` - 斜体
* `<img>` - 图片
* `<input>` - 输入框
* `<label>` - 为 `input` 进行标记/标注
* `<button>` - 按钮
* `<textarea>` - 多行文本框

### <a name="chapter-six-three" id="chapter-six-three"></a>6.3 行内元素和块级元素转换

> [返回目录](#chapter-one)
  
`display` 属性可以使行内元素和块级元素之间转换。

* `display: inline` - 转换为行内元素
* `display: block` - 转换为块级元素
* `display: inline-block` - 转换为行内块元素

## <a name="chapter-seven" id="chapter-seven"></a>七 参考文献

> [返回目录](#chapter-one)


本系列参考 8 篇文章。

* [x] [MDN - HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)【阅读建议：5min】
* [x] [html5语义化标签](https://rainylog.com/post/ife-note-1)【阅读建议：5min】
* [x] [块级元素与内联元素总结](https://blog.csdn.net/caoPengFlying/article/details/75334264)【阅读建议：5min】
* [x] [html中内联元素和块级元素的区别](https://www.cnblogs.com/dxzg/p/6423922.html)【阅读建议：5min】
* [x] [MDN - HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)【阅读建议：5min】
* [x] [html5语义化标签](https://rainylog.com/post/ife-note-1)【阅读建议：5min】
* [x] [块级元素与内联元素总结](https://blog.csdn.net/caoPengFlying/article/details/75334264)【阅读建议：5min】
* [x] [html中内联元素和块级元素的区别](https://www.cnblogs.com/dxzg/p/6423922.html)【阅读建议：5min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

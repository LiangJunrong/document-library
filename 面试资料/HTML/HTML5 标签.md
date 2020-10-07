HTML5 标签
===

> Create by **jsliang** on **2020-09-28 14:22:36**  
> Recently revised in **2020-09-28 14:42:56**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;[2.1 常见 H5 标签](#chapter-two-one) |
| &emsp;[2.2 参考文献](#chapter-two-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 结构语义化](#chapter-three) |
| &emsp;[3.1 为什么需要语义化](#chapter-three-one) |
| &emsp;[3.2 结构语义化](#chapter-three-two) |
| &emsp;[3.3 头部](#chapter-three-three) |
| &emsp;[3.4 主要内容](#chapter-three-four) |
| &emsp;[3.5 页脚](#chapter-three-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)
  
### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 常见 H5 标签

> [返回目录](#chapter-one)
  
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

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 参考文献

> [返回目录](#chapter-one)
  
* [x] [MDN - HTML5 标签列表](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)【阅读建议：5min】
* [x] [html5语义化标签](https://rainylog.com/post/ife-note-1)【阅读建议：5min】

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

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
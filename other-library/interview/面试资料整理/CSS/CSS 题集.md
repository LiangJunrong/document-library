CSS 题集
===

> Create by **jsliang** on **2020-09-16 13:58:16**  
> Recently revised in **2020-09-28 23:43:08**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 题目](#chapter-three) |
| &emsp;[3.1 CSS 单位：px、em、rem、vw、vh 的区别](#chapter-three-one) |
| &emsp;[3.2 CSS 盒模型](#chapter-three-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [x] [Css单位px，rem，em，vw，vh的区别](https://www.cnblogs.com/theblogs/p/10516098.html)【阅读建议：10min】
* [x] [谈谈 rem 与 vw -- rem](https://www.jianshu.com/p/1a9b5d48afa2)【阅读建议：5min】

## <a name="chapter-three" id="chapter-three"></a>三 题目

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 CSS 单位：px、em、rem、vw、vh 的区别

> [返回目录](#chapter-one)

* **px**

`px` 是像素（`pixel`）的缩写，相对长度单位，是网页设计常用的基本基本单位，它是相对于显示器屏幕分辨率而言的。

* **em**

`em` 是相对长度单位，相对于对象内文本的字体尺寸（参考物是父元素的 `font-size`。

如果当前父元素的字体元素未设置，则相对于浏览器的默认字体尺寸设置。

* **rem**

`rem` 是相对于 HTML 根元素的字体大小（`font-size`）来计算的长度单位。

如果你没有设置 HTML 字体大小，那么以浏览器默认为主，一般为 `16px`。

* **vw/vh**

`vw` 和 `vh` 是相对于 `viewport` - 相对视口的宽度或者高度而定的。

一般来说：`1vw = npx / 100`，即浏览器宽度为 `200px` 的时候，`1vw = 200px / 100`，即 `1vw = 2px`。

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 CSS 盒模型

> [返回目录](#chapter-one)

根据以下代码，两个 div 元素垂直间距为()

```html
<div style="width:100px; height:100px; margin-bottom:100px;"></div>
<div style="width:100px; height:100px; margin-top:200px;"></div>
```

* A：100px
* B：200px
* C：300px
* D：400px

---

答案：B

原因：CSS 盒模型，块之间共享垂直外边距 `margin`，`margin` 取其最大值。（`margin` 塌陷问题）

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
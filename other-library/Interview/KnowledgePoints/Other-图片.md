2019 面试准备 - 图片
===

> Create by **jsliang** on **2019-3-1 13:27:47**  
> Recently revised in **2019-3-5 21:35:45**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/Other-%E5%9B%BE%E7%89%87.md)**

在我们日常工作中，我们会经常使用 JPG、PNG、GIF、SVG 等格式图片。

但是，你真的懂图片吗？不同格式图片的区分，它们的优劣势以及使用场景等……

下面，**jsliang** 将根据搜集的资料，进行关于图片的科普。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| &emsp;[3.1 BMP](#chapter-three-one) |
| &emsp;[3.2 JPEG](#chapter-three-two) |
| &emsp;[3.3 PNG](#chapter-three-three) |
| &emsp;[3.4 GIF](#chapter-three-four) |
| &emsp;[3.5 SVG](#chapter-three-five) |
| &emsp;[3.6 Base64](#chapter-three-six) |
| &emsp;[3.7 WebP](#chapter-three-seven) |
| &emsp;[3.8 雪碧图](#chapter-three-eight) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 总结](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

在 **jsliang** 2 月 27 日进行面试的时候，突然被一个系列的问题问倒了：你熟悉图片吗？能讲讲 JPG、PNG、GIF 的适用场景吗？然后 PNG 为什么会有 PNG-8 和 PNG-24？知道 SVG 吗？能讲讲它们与 JPG、PNG、GIF 的差别吗？……

刚开始 **jsliang** 还能回答下，后来就感觉招架不住了！

于是，**爱折腾** 的我回头就是一个查资料，写下了这篇文章。

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

**首先**，我们要清楚的是，图片从类型上分，可以分为 **位图** 和 **矢量图**。

* **位图**：位图又叫点阵图或像素图，计算机屏幕上的图是由屏幕上的发光点（即像素）构成的，每个点用二进制数据来描述其颜色与亮度等信息。因为这些点是离散的，类似于点阵，同时因为多个像素的色彩组合就形成了图片，所以叫这种图为点阵图或者位图。常见位图有 JPG、PNG、GIF 等格式。
* **矢量图**：矢量图又叫向量图，它是由一系列计算机指令来描述和记录一幅图，一幅图可以解为点、线、面等组成的子图。生成的矢量图文件存储量很小，特别适用于文字设计、图案设计等，而在前端中比较常用的矢量图有 SVG 等格式……

**然后**，我们按压缩划分，可以将图片分为 **无损压缩** 和 **有损压缩**。

* **无损压缩**：无损压缩是对文件本身的压缩，使图片占用的存储空间变小，并且不会损害图片的质量。常见无损压缩有 PNG 等。
* **有损压缩**：有损压缩是对图像本身的改变，会对图片质量造成损害，随着压缩次数越来越多，那么图片质量会越来越差。常见有损压缩有 JPG 等。

**最后**，究根结底，我们需要知道在计算机中，像素是用二进制来表示的。不同图片格式中像素与二进制位数之间的对应关系是不同的。一个像素对应的二进制位数越多，那么它可以表示的颜色种类就越多，成像效果也就越细腻，文件体积相应也会越大。

一个二进制位表示两种颜色 **【 0|1 <——对应——> 黑|白 】**，如果一种图片格式对应的二进制位数有 n 个，那么它就可以呈现 2^n 中颜色。例如：

* PNG-8：它有 2^8 种颜色，即 256 种颜色。
* PNG-24：它有 2^24 种颜色，即 1677216 种颜色（1600 万种颜色）。

OK，知道了这些基础知识，我们就按图片出现的顺序，一一讲解下常用的图片知识吧！

### <a name="chapter-three-one" id="chapter-three-one">3.1 BMP</a>

> [返回目录](#chapter-one)

早期使用的图片格式，叫 **BMP**，取自英文单词 BitMap，Windows 中文版译作 **位图**，它的文件结构很简单，没有压缩，一个一个像素地记录下来。

如果你的系统是 Windows，你可以打开 **画图** 工具，然后点击另存为，你可以看到保存的选项中有个 **24位位图** 的格式，即 1600 万色的图片。

当然，历史总在前进，BMP 这种没有压缩的图片格式，逐渐被后起之秀代替了。

> 不知道为什么，查不到 JPG、PNG、GIF 的出现顺序，下面只好按我个人记忆方式来编文章段落。

### <a name="chapter-three-two" id="chapter-three-two">3.2 JPEG</a>

> [返回目录](#chapter-one)

**关键字**：有损压缩、体积小、加载快、不支持透明

**简要介绍**：

JPEG/JPG 格式，是应用最广泛的图片格式之一，特点如下：

1. JPEG/JPG 采用特殊的有损压缩算法，将不易被人眼察觉的图像颜色删除，从而达到较大的压缩比，因此它的压缩文件尺寸较小，下载速度快，成为互联网最广泛使用的格式。
2. JPEG/JPG 因为属于有损压缩，所以当压缩级别逐渐增大的时候，图片质量会逐渐损耗，所以压缩要适当。

> 在合适的场景下，即便我们将图片体积压缩至原有体积的 50% 以下，JPG 仍能保持住 60% 的品质，且因为 JPG 格式以 24 位图存储单个图，可以呈现多达 1600 万种颜色，足以满足大多数场景，

**适用场景**：

1. 大的背景图
2. 轮播图
3. Banner 图

### <a name="chapter-three-three" id="chapter-three-three">3.3 PNG</a>

> [返回目录](#chapter-one)

**关键字**：无损压缩、质量高、体积大、支持透明

**简要介绍**：

PNG（可移植网络图形格式）是一种无损压缩的高保真的图片格式，它的压缩比高于 GIF，支持图像透明，可以利用 Alpha 通道调节图像透的明度。

PNG 分 PNG-8 和 PNG-24。

* **PNG-8**：PNG-8 是无损压缩的索引色彩模式。PNG-8 是 GIF 格式很好的替代，虽然不能像 GIF 一样有动画，也不兼容 IE6 等老旧浏览器。PNG-8 最多支持 256 中颜色。
* **PNG-24**：PNG-24 是无损压缩的直接色彩模式。PNG-24 会比 JPEG、GIF、PNG-8 占用更大的存储空间。PNG-24 可以呈现 1600 万种颜色。

> 2^8 = 256，2^24 = 1677216

**适用场景**：

* 普遍场景

1. 小的 Logo，颜色简单且对比强烈的图片或者背景。
2. 颜色简单、对比度强的透明小图。

* 什么时候使用 PNG-8，什么时候使用 PNG-24 呢？

1. 理论上，位数最大的就是最好的，直接上 PNG-24；但是实际上，为了避免体积过大的问题，一般在适合使用 PNG 的场景中，优先选择比较小巧的 PNG-8。
2. 如何确定是使用 PNG-8 还是 PNG-24，这就看你的 UI 设计师或者负责人能接受那个了，除非你设计功底非常好，要不然不要做这个选择！

### <a name="chapter-three-four" id="chapter-three-four">3.4 GIF</a>

> [返回目录](#chapter-one)

**关键字**：支持动画

**简要介绍**：

GIF 格式，不仅仅支持静止图片，也可以支持动画，并且支持透明背景图像，适用于多种操作系统，体积很小，网上小动画很多是 GIF 格式。但是色域不太广，只支持 256 种颜色，这意味着颜色种类少。

> GIF 格式的压缩率一般在 50% 左右。

**适用场景**：

1. 动图

### <a name="chapter-three-five" id="chapter-three-five">3.5 SVG</a>

> [返回目录](#chapter-one)

**关键字**：文本文件、体积小、不失真、兼容性好

**简要介绍**：

SVG（可缩放矢量图形）是一种基于 XML 语法的图像格式，是可缩放的矢量图形。与 JPG、PNG、GIF 等位图不同，SVG 可以直接用代码来描绘图像，并通过任意文字处理工具打开 SVG 图像，通过改变部分代码来使图像具有交互功能，并可以随时插入到 HTML 中通过浏览器来观看。

SVG 格式的图片可以任意放大图形显示，并且不会损失图片质量；SVG 格式可编辑和可搜寻；SVG 格式平均来讲，比 JPG 和 GIF 格式文件要小，并且下载也比较快。

SVG 文件通常是极小的，但是当图形的复杂度变高的时候，SVG 文件大小会随之上升，因为 SVG 在渲染的时候需要比像素图更多的计算能力，这也意味着性能的损耗。所以在 Logo 等图上，应尽可能简洁。

**适用场景**：

1. SVG loading 效果图：[SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders)
2. 转换工具：[在线 JPG、PNG 转 SVG 工具](http://www.bejson.com/convert/image_to_svg/)
3. 矢量图标库：[阿里巴巴矢量图标](https://www.iconfont.cn/)

### <a name="chapter-three-six" id="chapter-three-six">3.6 Base64</a>

> [返回目录](#chapter-one)

**关键字**：文本文件、依赖编码、小图标解决方案

**简要介绍**：

Base64 并非一种图片格式，而是一种编码方式，它类似于雪碧图，是作为小图标解决方案而存在的。和雪碧图一样，Base64 图片的出现，也是为了减少加载网页图片时对服务器的请求次数，从而提升网页性能。Base64 是作为雪碧图的补充而存在的。

Base64 是一种用于传输 8 Bit 字节码的编码方式，通过对图片进行 Base64 编码，我们可以直接将编码结果写入 HTML 或者写入 CSS，从而减少 HTTP 请求的次数。

**适用场景**：

1. 图片的实际尺寸很小。尽可能在图片不超过 2KB 的情况下（可查看掘金的 Base64 图）。
2. 图片无法以雪碧图的形式与其他小图结合（合成雪碧图仍是主要的减少 HTTP 请求的途径，Base64 是雪碧图的补充）。
3. 图片的更新频率非常低（不需要我们重复编码和修改文件内容，维护成本较低）

> 为什么大图不使用 Base64？  
> 因为 Base64 编码后，图片大小会膨胀为源文件的 4/3，如果将大图编码到 HTML 或者 CSS 中，这样后者的体积增加，即便减少了 HTTP 请求，也无法弥补庞大的体积带来的性能开销。

**如何获取**：

1. Webpack 的 loader：[url-loader](https://www.npmjs.com/package/url-loader)
2. 在线编码工具：[图片转换Base64](http://imgbase64.duoshitong.com/)

### <a name="chapter-three-seven" id="chapter-three-seven">3.7 WebP</a>

> [返回目录](#chapter-one)

**关键字**：年轻的全能型选手

**简要介绍**：

2010 年由 Google 提出，转为 Web 开发的一种旨在加快图片加载速度的图片格式，支持有损压缩和无损压缩。

WebP 像 JPEG 一样对图片细节丰富，像 PNG 一样支持透明，像 GIF 一样可以显示动态图片。

> 官方介绍：与 PNG 相比，WebP 无损图像的尺寸缩小了 26％。在等效的 SSIM 质量指数下，WebP 有损图像比同类 JPEG 图像小 25-34％。 无损 WebP 支持透明度（也称为 alpha 通道），仅需 22％ 的额外字节。对于有损 RGB 压缩可接受的情况，有损 WebP 也支持透明度，与 PNG 相比，通常提供 3 倍的文件大小。

**适用场景**：

由于 WebP 支持情况仅 Chrome、UC 等几家浏览器支持，所以局限性较大，目前暂不考虑使用。

> 参考自 Can I Use 网站中的浏览器支持程度：[webp](https://caniuse.com/#search=webp)

### <a name="chapter-three-eight" id="chapter-three-eight">3.8 雪碧图</a>

> [返回目录](#chapter-one)

雪碧图，CSS Sprites，听起来就很清爽的一种图片，刚开始的时候 **jsliang** 以为是大街小巷上卖的 3 块钱瓶装雪碧饮料上的图片，后来知道压根不是同一码事。

> 雪碧图不属于图片格式，而是一种图片应用形式。但是因为它在前端赫赫有名，经常使用，故此将其记载下来。

雪碧图又叫精灵图，因为 Sprites 的原因叫 “雪碧”，出现的原因是随着网速的提升，同时因为请求次数过多的时候会卡网页，所以我们就将 N 张小图集成到一张大图上，从而提升页面打开的速度。这种多张小图放在一张大图上的操作，就叫做精灵图（雪碧图 - CSS Sprites）

那么，平时如何使用雪碧图呢？

```css
.img{background:url(../images/img.png)  no-repeat;}
.my-head{height:160px;width:120px;background-position:0 0;}
.my-picture{height:292px;width:1253px;background-position:0 -160px;}
```

```sass
@mixin img{background:url(../images/img.png) no-repeat; }
@mixin my-head{height:160px;width:120px;background-position: 0 0;}
@mixin my-picture{height:292px;width:1253px;background-position: 0 -160px;}
```

如上面代码所示，现在网上有非常多的雪碧图制作工具，我们只需要将小图发到工具上去，就可以生成大图，同时获得它的 css/sass 代码，而不需要自己一个一个定位。

> 这是 Windows 版本的工具，网上有很多雪碧图/精灵图制作工具，这里就不推荐本人使用的了。

> MDN 定义：图像精灵（sprite，意为精灵），被运用于众多使用大量小图标的网页应用之上。它可取图像的一部分来使用，使得使用一个图像文件替代多个小文件成为可能。相较于一个小图标一个图像文件，单独一张图片所需的 HTTP 请求更少，对内存和带宽更加友好。

## <a name="chapter-four" id="chapter-four">四 总结</a>

> [返回目录](#chapter-one)

至此，我们对图片的介绍就结束了，在这里我们列个表进行汇总：

| 格式 | 使用场景 |
| --- | --- |
| JPG/JPEG | 1. 大的背景图； 2. 轮播图； 3. Banner 图 |
| PNG | 1. 小 Logo； 2. 透明背景 |
| GIF | 动态图片 |
| SVG | 能适应不同设备且画质不能损坏的图片 |
| Base64 | 大小不超过 2KB，且更新率低的图片 |
| 雪碧图 | 小图太多的时候，集中成一张图片减少 HTTP 请求 |

> 雪碧图不属于格式，但属于一种应用形式

最后，在开发中会常用到一些资料，下面是 **jsliang** 在图片方面的个人资源，如果小伙伴有其他的好用资源推荐，可以 QQ 或者评论留言：

* **常用优秀资源**：

1. SVG loading 效果：[SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders)
2. 矢量图标库：[Iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)
3. 在线制作 Logo：[U 钙网](http://www.uugai.com/logoa/yulan.php)
4. 压缩 PNG 或者 JPG：[TinyPNG](https://tinypng.com/)

* **获取图片素材**：

1. 千库网：[地址](http://588ku.com/)
2. 包图网：[地址](https://ibaotu.com/)

* **在线转换工具**：

1. [JPG、PNG 转 SVG](http://www.bejson.com/convert/image_to_svg/)
2. [JPG、PNG、GIF 转 Base64](http://imgbase64.duoshitong.com/)
3. [JPG、PNG、GIF 转 ICO](http://www.bitbug.net/)

* **其他资料支持**：

5. Can I Use —— 查看各种浏览器支持程度：[caniuse.com](https://caniuse.com)

## <a name="chapter-five" id="chapter-five">五 参考文献</a>

> [返回目录](#chapter-one)

1. [《jpg、png、svg、gif等图片格式的区别》](https://www.jianshu.com/p/6e1941de7952)
2. [《PNG、JPEG、GIF、SVG应该用哪个？》](https://www.jianshu.com/p/c66f52d875d9)
3. [《图片优化——质量与性能的博弈》](https://note.youdao.com/ynoteshare1/index.html?id=e10c4db3f3570478ad6534903b8ec79b&type=note#/)
4. [《横向对比 gif、jpeg、png、svg，教你如何合理选择图像格式》](https://www.qifeiye.com/%E6%A8%AA%E5%90%91%E5%AF%B9%E6%AF%94gifjpegpngsvg%EF%BC%8C%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E5%90%88%E7%90%86%E9%80%89%E6%8B%A9%E5%9B%BE%E5%83%8F%E6%A0%BC%E5%BC%8F/)
5. [《JPG？GIF？PNG？前端如何选择图片格式？》](https://www.jianshu.com/p/ab96bf20f90e)
6. [《矢量图与位图的区别》](https://zhidao.baidu.com/question/109059224.html)
7. [《无损压缩和有损压缩是数码图像文件压缩的两种类型。》](https://baike.baidu.com/item/%E6%97%A0%E6%8D%9F%E3%80%81%E6%9C%89%E6%8D%9F%E5%8E%8B%E7%BC%A9/9695933?fr=aladdin)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
CSS
===

> Create by **jsliang** on **2020-09-01 20:50:57**  
> Recently revised in **2020-12-12 15:44:23**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 复习知识点](#chapter-two) |
| &emsp;[2.1 基础](#chapter-two-one) |
| &emsp;[2.2 盒子模型](#chapter-two-two) |
| &emsp;[2.3 移动端](#chapter-two-three) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 面试](#chapter-three-one) |
| &emsp;[3.2 布局](#chapter-three-two) |
| &emsp;[3.3 Flex](#chapter-three-three) |
| &emsp;[3.4 移动端](#chapter-three-four) |
| &emsp;[3.5 CSS](#chapter-three-five) |
| &emsp;[3.6 CSS3](#chapter-three-six) |
| &emsp;[3.7 层叠上下文](#chapter-three-seven) |
| &emsp;[3.8 BFC 块格式化上下文](#chapter-three-eight) |
| &emsp;[3.9 其他](#chapter-three-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 复习知识点

> [返回目录](#chapter-one)

复习知识点有 3 个部分。

### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 基础

> [返回目录](#chapter-one)

文章地址：[基础](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/CSS/%E5%9F%BA%E7%A1%80.md)

* [x] DIV + CSS 布局优缺点
* [x] **LoVe HAte 原则**：`a` 标签 `hover` 事件失效问题，`link -> visited -> hover -> active`
* [x] **响应式**：一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本，通过 `@media` 检测不同设备屏幕尺寸做处理
* [x] **垂直居中**
  * [x] `Flex` 布局：`align-items` 和 `justify-content`
  * [x] 绝对定位布局：`absolute` + `left/right/bottom/top: 0` + `margin: auto`
  * [x] `transform` 布局：`absolute` + `transform: translate(-50%, -50%)`
* [x] **文档流**：将窗体自上而下分成一行一行，并在每行中按从左至右一次排放元素，成为文档流，也就普通流
* [x] **脱离文档流**：脱离文档流的元素，将不再在文档流占据空间，而是漂浮在文档流上方。`float: left/right` 以及 `position: absolute/fixed`
* [x] **块级作用域上下文（BFC）**
  * [x] 阐释：指页面上一个隔离的独立容器，容器内部的子元素不会影响到外面的元素，反之外面的元素也不会影响容器里面的元素
  * [x] 解决问题：清除元素内部浮动、解决外边距合并问题
  * [x] 产生条件：根元素 `html`、`float: left/right`、`position: absolute/fixed`、`display: inline-block/flex/grid`、`overflow: hidden`
* [x] **`px`、`em`、`rem` 和 `vw/vh` 区别**
* [x] **`link` 和 `@import` 区别**
* [x] **渐进增减和优雅降级**
* [x] **设置隐藏元素**：`display: none`、`visibility: hidden`、`opacity: 0`
* [x] **CSS 选择器**
  * [x] 在属性后面使用 `!important` 会覆盖页面任意位置定义的元素样式
  * [x] 作为 `style` 属性写在元素内的样式（行内样式）
  * [x] `id` 选择器
  * [x] 类选择器 | 伪类选择器 | 属性选择器（后面样式覆盖前面样式）
  * [x] 标签选择器
  * [x] 通配符选择
  * [x] 浏览器自定义样式
* [x] **层叠上下文**：`background/border`、`z-index` 为负值、块级元素、浮动元素、行内元素、`z-index: 0 / auto`、`z-index` 为正值
* [x] **display**：`inline`、`block`、`inline-block`、`table`、`none`
* [x] **position**：`static`、`relative`、`position`、`fixed`、`sticky`
* [x] **CSS 3 新特性**
* [x] **CSS 优化**
  * [x] 避免链式选择符（从右往左匹配规则）
  * [x] 避免不必要重复
  * [x] 避免 `*` 通配符
  * [x] 规定引入位置：在 `head` 定义 `link`

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 盒子模型

> [返回目录](#chapter-one)

文章地址：[盒子模型](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/CSS/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.md)

* [x] **标准盒子**：标准盒子的 `contentWidth` 等于设置的 `width`，它的`实际总宽度 = width + padding + border + margin`。（高度也一样）
* [x] **怪异盒子**：怪异盒子的 `contentWidth` 等于设置的 `width + padding + border`，它的`实际总宽度 = contentWidth + margin`。（高度也一样）
* [x] **设置盒子模式**：`inherit` 继承、`content-box` 标准盒子、`border-box` 怪异盒子

### <a name="chapter-two-three" id="chapter-two-three"></a>2.3 移动端

> [返回目录](#chapter-one)

文章地址：[移动端](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/CSS/%E7%A7%BB%E5%8A%A8%E7%AB%AF.md)

* [x] **使用单位**：`em`、`rem`、`%` 以及 `vw/vh`
* [x] **布局**：使用 `rem` 单位、通过 `position: relative/absolute` 布局、`Flex` 布局
* [x] **1px 实现**：利用 `::after` 伪类 + `transform: scaleY(0.5)`、利用 `box-shadow: 0 0.5 0 0 #ccc`
* [x] **300ms 点击延迟**
  * [x] 为什么出现：需要通过延迟判断用户是需要单击还是双击
  * [x] 如何解决：设置 `<meta>`、通过 `FastClick` 库

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

本系列参考文献有 46 篇。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 面试

> [返回目录](#chapter-one)

* [x] [50道CSS经典面试题](https://segmentfault.com/a/1190000013325778)【阅读建议：30min】
* [x] [12个HTML和CSS必须知道的重点难点问题](https://juejin.im/post/6844903567707357197)【阅读建议：30min】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 布局

> [返回目录](#chapter-one)

* [x] [干货!各种常见布局实现+知名网站实例分析](https://juejin.im/post/6844903574929932301)【阅读建议：1h】
* [x] [CSS 常见布局方式](https://juejin.im/post/599970f4518825243a78b9d5)【阅读建议：1h】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 Flex

> [返回目录](#chapter-one)

* [x] [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)【阅读建议：1h】
* [x] [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)【阅读建议：1h】
* [x] [30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)【阅读建议：30min】
* [x] [写给自己看的display: flex布局教程](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)【阅读建议：30min】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 移动端

> [返回目录](#chapter-one)

* [x] [Mars - mobile needs a hero](https://github.com/AlloyTeam/Mars)【阅读建议：无】
* [x] [腾讯移动Web前端知识库](https://github.com/hoosin/mobile-web-favorites)【阅读建议：无】
* [x] [关于移动端适配，你必须要知道的](https://juejin.im/post/6844903845617729549)【阅读建议：30min】
* [x] [如何解决移动端Click事件300ms延迟的问题？](https://zhuanlan.zhihu.com/p/69522350)【阅读建议：20min】
* [x] [设计方案--移动端延迟300ms的原因以及解决方案](https://www.cnblogs.com/chengxs/p/11064469.html)【阅读建议：20min】
* [x] [细说移动端 经典的REM布局 与 新秀VW布局](https://cloud.tencent.com/developer/article/1352187)【阅读建议：30min】
* [x] [移动端1px解决方案](https://juejin.im/post/5d19b729f265da1bb2774865)【阅读建议：30min】
* [x] [Retina屏的移动设备如何实现真正1px的线？](https://jinlong.github.io/2015/05/24/css-retina-hairlines/)【阅读建议：20min】
* [x] [rem布局解析](https://juejin.im/post/6844903671143088136)【阅读建议：5min】

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 CSS

> [返回目录](#chapter-one)

* [x] [CSS 常用技巧](https://juejin.im/post/6844903619909648398)【阅读建议：30min】
* [x] [CSS设置居中的方案总结-超全](https://juejin.im/post/6844903560879013901)【阅读建议：30min】
* [x] [CSS性能优化的8个技巧](https://juejin.im/post/6844903649605320711?utm_source=gold_browser_extension)【阅读建议：20min】
* [x] [css加载会造成阻塞吗？](https://juejin.im/post/6844903667733118983?utm_source=gold_browser_extension)【阅读建议：30min】
* [x] [css加载会造成阻塞吗](https://segmentfault.com/a/1190000018130499)【阅读建议：30min】
* [x] [不可思议的纯 CSS 滚动进度条效果](https://juejin.im/post/6844903758074216462)【阅读建议：30min]
* [x] [CSS 定位详解](http://www.ruanyifeng.com/blog/2019/11/css-position.html)【阅读建议：20min】
* [x] [Css单位px，rem，em，vw，vh的区别](https://www.cnblogs.com/theblogs/p/10516098.html)【阅读建议：10min】
* [x] [谈谈 rem 与 vw -- rem](https://www.jianshu.com/p/1a9b5d48afa2)【阅读建议：5min】
* [x] [杀了个回马枪，还是说说position:sticky吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)【阅读建议：20min】
* [x] [css行高line-height的一些深入理解及应用](https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)【阅读建议：10min】
* [x] [浏览器将rem转成px时有精度误差怎么办？](https://www.zhihu.com/question/264372456)【阅读建议：20min】
* [x] [彻底搞懂word-break、word-wrap、white-space](https://juejin.im/post/6844903667863126030)【阅读建议：20min】

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 CSS3

> [返回目录](#chapter-one)

* [x] [个人总结（css3新特性）](https://juejin.im/post/6844903518520901639)【阅读建议：1h】
* [x] [高性能 CSS3 动画](https://github.com/AlloyTeam/Mars/blob/master/performance/high-performance-css3-animation.md)【阅读建议：20min】
* [x] [趣味CSS3效果挑战小汇总](https://juejin.im/post/6844903896473665550)【阅读建议：20min】
* [x] [从青铜到王者10个css3伪类使用技巧和运用，了解一哈](https://juejin.im/post/6844903654756089864)【阅读建议：20min】

### <a name="chapter-three-seven" id="chapter-three-seven"></a>3.7 层叠上下文

> [返回目录](#chapter-one)

* [x] [彻底搞懂CSS层叠上下文、层叠等级、层叠顺序、z-index](https://juejin.im/post/5b876f86518825431079ddd6)【阅读建议：30min】
* [x] [深入理解CSS中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)【阅读建议：40min】

### <a name="chapter-three-eight" id="chapter-three-eight"></a>3.8 BFC 块格式化上下文

> [返回目录](#chapter-one)

* [x] [什么是BFC？什么条件下会触发？应用场景有哪些？](http://47.98.159.95/my_blog/css/008.html)【阅读建议：20min】
* [x] [学习 BFC (Block Formatting Context)](https://juejin.im/post/6844903495108132877)【阅读建议：20min】
* [x] [MDN - 块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)【阅读建议：20min】
* [x] [BFC(块级格式化上下文)](https://www.jianshu.com/p/498145565e4f)【阅读建议：5min】

### <a name="chapter-three-night" id="chapter-three-night"></a>3.9 其他

> [返回目录](#chapter-one)

* [x] [Web开发者需要知道的CSS Tricks](https://juejin.im/post/6844903576561516558)【阅读建议：无】
* [x] [CSS世界中那些说起来很冷的知识](https://juejin.im/post/6844903635248218126)【阅读建议：30min】
* [x] [从网易与淘宝的font-size思考前端设计稿与工作流](https://www.cnblogs.com/lyzg/p/4877277.html)【阅读建议：20min】
* [x] [2019年，你是否可以抛弃 CSS 预处理器？](https://aotu.io/notes/2019/10/29/css-preprocessor/index.html)【阅读建议：10min】
* [x] [浅谈 CSS 预处理器（一）：为什么要使用预处理器？](https://github.com/cssmagic/blog/issues/73)【阅读建议：20min】
* [x] [布局的下一次革新](https://juejin.im/post/6844903666374148103)【阅读建议：20min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

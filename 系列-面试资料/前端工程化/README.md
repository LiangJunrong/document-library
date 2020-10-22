前端工程化
===

> Create by **jsliang** on **2020-09-01 20:53:19**  
> Recently revised in **2020-10-21 23:56:36**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;[2.1 杂](#chapter-two-one) |
| &emsp;[2.2 Babel](#chapter-two-two) |
| &emsp;[2.3 模板引擎](#chapter-two-three) |
| &emsp;[2.4 前端发布](#chapter-two-four) |
| &emsp;[2.5 weex](#chapter-two-five) |
| &emsp;[2.6 前端监控](#chapter-two-six) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Webpack 参考文献](#chapter-three) |
| &emsp;[3.1 Webpack 系列文章](#chapter-three-one) |
| &emsp;[3.2 Webpack 性能优化](#chapter-three-two) |
| &emsp;[3.3 Scope Hoisting](#chapter-three-three) |
| &emsp;[3.4 Tree Shaking](#chapter-three-four) |
| &emsp;[3.5 懒加载](#chapter-three-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

复习知识点：

* [ ] webpack
* [ ] babel
* [ ] 模板引擎
* [ ] 前端发布
* [ ] weex
* [ ] ...

### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 杂

> [返回目录](#chapter-one)

**2019**：

* [x] [前端同构渲染的思考与实践](https://juejin.im/post/6844903792836608008)【阅读建议：20min】

**2018**：

* [x] [前端工程师为什么要学习编译原理？](https://zhuanlan.zhihu.com/p/31096468)【阅读建议：30min】
* [x] [50行代码的MVVM，感受闭包的艺术](https://juejin.im/post/6844903619808985095)【阅读建议：10min】
* [x] [不好意思！耽误你的十分钟，让MVVM原理还给你](https://juejin.im/post/6844903586103558158)【阅读建议：20min】
* [x] [2018 前端性能优化清单](https://juejin.im/post/6844903568130965517)【阅读建议：30min】
* [x] [网页图片加载优化方案](https://zhuanlan.zhihu.com/p/33370207)【阅读建议：20min】
* [x] [如何优雅处理前端异常](https://zhuanlan.zhihu.com/p/51800345)【阅读建议：30min】

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 Babel

> [返回目录](#chapter-one)

* [ ] [一篇文章了解前端开发必须懂的 Babel](https://mp.weixin.qq.com/s/C-WmM5tjfc3r4sB52C4R0Q)
* [ ] [不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)
* [ ] [前端工程师需要了解的 Babel 知识](https://www.zoo.team/article/babel)
* [ ] [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be)
* [ ] [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa)
* [ ] [前端工程师的自我修养-关于 Babel 那些事儿](https://juejin.im/post/5e5b488af265da574112089f)
* [ ] [前端与编译原理——用JS写一个JS解释器](https://segmentfault.com/a/1190000017241258)
* [ ] [面试官: 你了解过Babel吗？写过Babel插件吗? 答: 没有。卒](https://juejin.im/post/6844903566809759758)
* [ ] [入门babel--实现一个es6的class转换器](https://juejin.im/post/6844903586950807560)

### <a name="chapter-two-three" id="chapter-two-three"></a>2.3 模板引擎

> [返回目录](#chapter-one)

* [ ] [编写一个简单的JavaScript模板引擎](https://www.liaoxuefeng.com/article/1006272230979008)
* [ ] [JavaScript模板引擎原理，几行代码的事儿](https://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html)
* [ ] [Vue 模板编译原理](https://github.com/berwin/Blog/issues/18)
* [ ] [JavaScript template engine in just 20 lines](https://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line)
* [ ] [Understanding JavaScript Micro-Templating](https://medium.com/wdstack/understanding-javascript-micro-templating-f37a37b3b40e)

### <a name="chapter-two-four" id="chapter-two-four"></a>2.4 前端发布

> [返回目录](#chapter-one)

* [ ] [大公司里怎样开发和部署前端代码？](https://www.zhihu.com/question/20790576)
* [ ] [前端高级进阶：前端部署的发展历程](https://juejin.im/post/5e6836cc51882549052f56f5)

### <a name="chapter-two-five" id="chapter-two-five"></a>2.5 weex

> [返回目录](#chapter-one)

* [ ] [深入了解 Weex](https://juejin.im/post/5b18a03ce51d45069d2263e3)
* [ ] [Weex原理概述](https://github.com/weexteam/article/issues/32)
* [ ] [Weex 是如何在 iOS 客户端上跑起来的](https://halfrost.com/weex_ios/)
* [ ] [详解 Weex 页面的渲染过程](https://segmentfault.com/a/1190000010415641)
* [ ] [JSBridge 介绍及实现原理](http://coolnuanfeng.github.io/jsbridge)
* [ ] [移动混合开发中的 JSBridge](https://mp.weixin.qq.com/s/I812Cr1_tLGrvIRb9jsg-A)

### <a name="chapter-two-six" id="chapter-two-six"></a>2.6 前端监控

> [返回目录](#chapter-one)

* [ ] [5 分钟撸一个前端性能监控工具](https://juejin.im/post/5b7a50c0e51d4538af60d995)
* [ ] [把前端监控做到极致](https://zhuanlan.zhihu.com/p/32262716)
* [ ] [GMTC 大前端时代前端监控的最佳实践](https://juejin.im/post/5b35921af265da598f1563cf)
* [ ] [前端监控和前端埋点方案设计](https://juejin.im/post/5b62d68df265da0f9d1a1cd6)
* [ ] [腾讯CDC团队：前端异常监控解决方案](https://mp.weixin.qq.com/s/W0i-Iu6nqkWttsGZ-RmOqw)
* [x] [把前端监控做到极致](https://zhuanlan.zhihu.com/p/32262716)【阅读建议：10min】

## <a name="chapter-three" id="chapter-three"></a>三 Webpack 参考文献

> [返回目录](#chapter-one)

Webpack 系列参考文献有 52 篇文章。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 Webpack 系列文章

> [返回目录](#chapter-one)

**其他**：

* [x] [Webpack 中文文档](https://webpack.docschina.org/concepts/)【阅读建议：无】
* [x] [Webpack小书](https://www.timsrc.com/article/2/webpack-book)【阅读建议：无】

**2020 年文章**：

* [x] [「吐血整理」再来一打Webpack面试题](https://juejin.im/post/6844904094281236487)【阅读建议：1h】
* [x] [带你深度解锁Webpack系列(基础篇)](https://juejin.im/post/6844904079219490830)【阅读建议：1h】
* [x] [带你深度解锁Webpack系列(进阶篇)](https://juejin.im/post/6844904084927938567)【阅读建议：30min】
* [x] [带你深度解锁Webpack系列(优化篇)](https://juejin.im/post/6844904093463347208)【阅读建议：20min】
* [x] [webpack loader 从上手到理解系列：vue-loader](https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw)【阅读建议：20min】
* [x] [webpack loader 从上手到理解系列：style-loader](https://mp.weixin.qq.com/s/alIKsKkGRU_yyjpeV8i0og)【阅读建议：20min】
* [x] [霖呆呆的webpack之路-loader篇](https://github.com/LinDaiDai/niubility-coding-js/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/%E9%9C%96%E5%91%86%E5%91%86%E7%9A%84webpack%E4%B9%8B%E8%B7%AF-loader%E7%AF%87.md)【阅读建议：20min】
* [x] [揭秘webpack plugin](https://champyin.com/2020/01/12/%E6%8F%AD%E7%A7%98webpack-plugin/)【阅读建议：30min】

**2019 年文章**：

* [x] [关于webpack4的14个知识点,童叟无欺](https://juejin.im/post/5cea1e1ae51d4510664d1652)【阅读建议：30min】
* [x] [实现一个简单的webpack](https://juejin.im/post/6844903858179670030)【阅读建议：1h】
* [x] [一文掌握Webpack编译流程](https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb)【阅读建议：1h】
* [x] [前端工程师都得掌握的 webpack Loader](https://github.com/axuebin/articles/issues/38)【阅读建议：30min】
* [x] [轻松理解webpack热更新原理](https://juejin.im/post/5de0cfe46fb9a071665d3df0)【阅读建议：1h】
* [x] [webpack 中那些最易混淆的 5 个知识点](https://juejin.im/post/6844904007362674701)【阅读建议：30min】
* [x] [前端构建秘籍](https://juejin.im/post/6844903799736254477)【阅读建议：30min】

**2018 年文章**：

* [x] [手把手教你撸一个 Webpack Loader](https://juejin.im/post/5a698a316fb9a01c9f5b9ca0)【阅读建议：1h】
* [x] [手把手教你撸一个简易的 webpack](https://juejin.im/post/5b192afde51d45069c2efe5a)【阅读建议：30min】
* [x] [Webpack揭秘——走向高阶前端的必经之路](https://juejin.im/post/6844903685407916039)【阅读建议：30min】
* [x] [webpack详解](https://juejin.im/post/6844903573675835400)【阅读建议：1h】
* [x] [webpack4-用之初体验，一起敲它十一遍](https://juejin.im/post/6844903599080734728)【阅读建议：30min】
* [x] [带你走进webpack世界，成为webpack头号玩家。](https://juejin.im/post/5ac9dc9af265da23884d5543)【阅读建议：20min】
* [x] [【webpack进阶】你真的掌握了loader么？- loader十问](https://juejin.im/post/5bc1a73df265da0a8d36b74f)【阅读建议：20min】
* [x] [webpack打包之后的文件过大的解决方法](https://juejin.im/post/6844903569917739021)【阅读建议：10min】
* [x] [基于Webpack搭建React开发环境](https://juejin.im/post/6844903606743744526)【阅读建议：10min】

**2017 文章**：

* [x] [Webpack 源码（一）—— Tapable 和 事件流](https://segmentfault.com/a/1190000008060440)【阅读建议：10min】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 Webpack 性能优化

> [返回目录](#chapter-one)

**2019 年文章**：

* [x] [Webpack优化——将你的构建效率提速翻倍](https://juejin.im/post/5d614dc96fb9a06ae3726b3e)【阅读建议：10min】
* [x] [性能优化篇---Webpack构建速度优化](https://segmentfault.com/a/1190000018493260)【阅读建议：10min】
* [x] [使用webpack4提升180%编译速度](http://louiszhai.github.io/2019/01/04/webpack4/)【阅读建议：10min】
* [x] [多进程并行压缩代码](https://jkfhto.github.io/2019-10-17/webpack/%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%B9%B6%E8%A1%8C%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81/)【阅读建议：5min】
* [x] [webpack 4: Code Splitting和chunks切分优化](https://juejin.im/post/5d53f49bf265da03dc0766e2)【阅读建议：5min】

**2018 年文章**：

* [x] [Tree-Shaking性能优化实践 - 原理篇](https://juejin.im/post/5a4dc842518825698e7279a9)【阅读建议：10min】
* [x] [体积减少80%！释放webpack tree-shaking的真正潜力](https://juejin.im/post/5b8ce49df265da438151b468)【阅读建议：10min】
* [x] [你的Tree-Shaking并没什么卵用](https://zhuanlan.zhihu.com/p/32831172)【阅读建议：5min】
* [x] [webpack 如何通过作用域分析消除无用代码](https://diverse.space/2018/05/better-tree-shaking-with-scope-analysis)【阅读建议：5min】
* [x] [让你的Webpack起飞—考拉会员后台Webpack优化实战](https://zhuanlan.zhihu.com/p/42465502)【阅读建议：5min】
* [x] [webpack dllPlugin打包体积和速度优化](https://zhuanlan.zhihu.com/p/39727247)【阅读建议：5min】
* [x] [webpack优化之code splitting](https://segmentfault.com/a/1190000013000463)【阅读建议：5min】

**2017 年文章**：

* [x] [Webpack 打包优化之速度篇](https://www.jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)【阅读建议：5min】
* [x] [加速Webpack-缩小文件搜索范围](https://imweb.io/topic/5a40551ea192c3b460fce335)【阅读建议：5min】
* [x] [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)【阅读建议：5min】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 Scope Hoisting

> [返回目录](#chapter-one)

* [x] [webpack 的 scope hoisting 是什么？](https://ssshooter.com/2019-02-20-webpack-scope-hoisting/)【阅读建议：5min】
* [x] [通过Scope Hoisting优化Webpack输出](https://imweb.io/topic/5a43064fa192c3b460fce360)【阅读建议：5min】
* [x] [【Webpack】654- 了不起的 Webpack Scope Hoisting 学习指南](https://cloud.tencent.com/developer/article/1663231)【阅读建议：5min】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 Tree Shaking

> [返回目录](#chapter-one)

* [x] [Tree Shaking - Webpack 5.0.0-rc.0](https://webpack.docschina.org/guides/tree-shaking/)【阅读建议：仅供参考】
* [x] [Webpack 4 Tree Shaking 终极优化指南](https://www.cnblogs.com/lzkwin/p/11878509.html)【阅读建议：30min】
* [x] [Tree-Shaking性能优化实践 - 原理篇 - 2018](https://juejin.im/post/6844903544756109319)【阅读建议：仅供参考】
* [x] [Webpack4: Tree-shaking 深度解析 - 2019](https://juejin.im/post/6844903777229635598)【阅读建议：仅供参考】

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 懒加载

> [返回目录](#chapter-one)

* [x] [Vue Webpack 打包优化——路由懒加载（按需加载）原理讲解及使用方法说明](https://blog.csdn.net/weixin_44869002/article/details/106288371)【阅读建议：20min】
* [x] [懒加载 - Webpack v5.0.0-rc.0](https://webpack.docschina.org/guides/lazy-loading/)【阅读建议：5min】
* [x] [webpack的代码分割（路由懒加载同理）](https://juejin.im/post/5e796ec1e51d45271e2a9af9)【阅读建议：10min】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
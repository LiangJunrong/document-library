浏览器
===

> Create by **jsliang** on **2020-09-02 14:48:58**  
> Recently revised in **2020-10-05 15:48:04**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 付费网络书籍](#chapter-three-one) |
| &emsp;[3.2 浏览器](#chapter-three-two) |
| &emsp;[3.3 浏览器缓存](#chapter-three-three) |
| &emsp;[3.4 浏览器垃圾回收](#chapter-three-four) |
| &emsp;[3.5 回流与重绘](#chapter-three-five) |
| &emsp;[3.6 跨域](#chapter-three-six) |
| &emsp;[3.7 性能优化](#chapter-three-seven) |
| &emsp;&emsp;[3.7.1 Webpack 优化](#chapter-three-seven-one) |
| &emsp;&emsp;[3.7.2 其他优化](#chapter-three-seven-two) |
| &emsp;[3.8 其他](#chapter-three-eight) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在整理 **浏览器** 相关题型的面试点中，产出了下面的几篇文章：

* [从输入 URL 到页面呈现](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5%20URL%20%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%91%88%E7%8E%B0.md)
* [本地存储](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.md)
* [浏览器缓存](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.md)
* [回流和重绘](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E9%87%8D%E6%8E%92%E5%92%8C%E9%87%8D%E7%BB%98.md)
* [跨域](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%B7%A8%E5%9F%9F.md)
* [垃圾回收](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md)
* [LRU 缓存淘汰策略](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/LRU%20%E7%BC%93%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.md)
* [性能优化](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md)

当然，还延伸到了 **计算机网络** 部分，例如：

* [计算机网络 - DNS](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)
* [计算机网络 - TCP](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP.md)

后面如果还有那就持续更新吧！加油！

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

参考文献共 57 篇文章，感谢前辈们的贡献。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 付费网络书籍

> [返回目录](#chapter-one)

* [ ] [极客时间 - 浏览器工作原理与实践](https://time.geekbang.org/column/intro/100033601)
* [x] [掘金小册 - 前端性能优化原理与实践](https://juejin.im/book/6844733750048210957/section/6844733750031417352)【阅读建议：4h】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 浏览器

> [返回目录](#chapter-one)

* [x] [(1.6w字)浏览器灵魂之问，请问你能接得住几个？](https://juejin.im/post/6844904021308735502)【阅读建议：4h】
* [x] [前端经典面试题: 从输入URL到页面加载发生了什么？](https://segmentfault.com/a/1190000006879700)【阅读建议：50min】
* [x] [浏览器层合成与页面渲染优化](https://juejin.im/post/6844903966573068301)【阅读建议：20min】
* [x] [浏览器页面资源加载过程与优化](https://juejin.im/post/6844903545016156174)【阅读建议：无】
* [x] [深入浅出浏览器渲染原理](https://zhuanlan.zhihu.com/p/53913989)【阅读建议：30min】
* [x] [浏览器的渲染原理简介](https://coolshell.cn/articles/9666.html)【阅读建议：10min】
* [x] [浏览器的渲染：过程与原理](https://juejin.im/entry/6844903503609987080)【阅读建议：10min】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 浏览器缓存

> [返回目录](#chapter-one)

* [x] [深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)【阅读建议：1h】
* [x] [浏览器缓存](https://github.com/xiangxingchen/blog/issues/9)【阅读建议：30min】
* [x] [前端必须要懂的浏览器缓存机制](https://juejin.im/entry/6844903599537930253)【阅读建议：10min】
* [x] [关于浏览器缓存你知道多少](https://mp.weixin.qq.com/s/Wvc0lkLpgyEW_u7bbMdvpQ)【阅读建议：10min】
* [x] [设计一个无懈可击的浏览器缓存方案：关于思路，细节，ServiceWorker，以及HTTP/2](https://zhuanlan.zhihu.com/p/28113197)【阅读建议：20min】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 浏览器垃圾回收

> [返回目录](#chapter-one)

* [x] [JavaScript进阶-内存机制(表情包初探)](https://juejin.im/post/6844904033317027854)【阅读建议：20min】

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 回流与重绘

> [返回目录](#chapter-one)

* [x] [浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.im/post/6844903569087266823)【阅读建议：10min】
* [x] [你真的了解回流和重绘吗](https://segmentfault.com/a/1190000017329980)【阅读建议：10min】
* [x] [页面重绘和回流以及优化](https://www.html.cn/archives/4996)【阅读建议：5min】
* [x] [浏览器重绘(repaint)重排(reflow)与优化[浏览器机制]](https://juejin.im/post/6844903745914929165)【阅读建议：10min】
* [x] [回流与重绘：CSS性能让JavaScript变慢？](https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/)【阅读建议：10min】

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 跨域

> [返回目录](#chapter-one)

* [x] [浏览器同源策略与ajax跨域方法汇总](https://www.jianshu.com/p/438183ddcea8)【阅读建议：15min】
* [x] [九种跨域方式实现原理（完整版）](https://juejin.im/post/5c23993de51d457b8c1f4ee1)【阅读建议：15min】
* [x] [前端开发如何独立解决跨域问题](https://segmentfault.com/a/1190000010719058)【阅读建议：5min】
* [x] [CORS 原理及实现](https://www.jianshu.com/p/b2bdf55e1bf5)【阅读建议：30min】
* [x] [JSONP 原理及实现](https://www.jianshu.com/p/88bb82718517)【阅读建议：30min】
* [x] [面试题：nginx 有配置过吗?反向代理知道吗?](https://juejin.im/post/6844904148022870023)【阅读建议：10min】
* [x] [10 种跨域解决方案（附终极大招）](https://juejin.im/post/6844904126246027278)【阅读建议：1h】
* [x] [CORS跨域请求[简单请求与复杂请求]](https://www.cnblogs.com/qunxiadexiaoxiangjiao/p/9446956.html)【阅读建议：20min】

### <a name="chapter-three-seven" id="chapter-three-seven"></a>3.7 性能优化

> [返回目录](#chapter-one)

#### <a name="chapter-three-seven-one" id="chapter-three-seven-one"></a>3.7.1 Webpack 优化

> [返回目录](#chapter-one)

**2019 年文章**：

* [x] [Webpack优化——将你的构建效率提速翻倍](https://juejin.im/post/5d614dc96fb9a06ae3726b3e)【阅读建议：10min】
* [x] [性能优化篇---Webpack构建速度优化](https://segmentfault.com/a/1190000018493260)【阅读建议：10min】
* [x] [使用webpack4提升180%编译速度](http://louiszhai.github.io/2019/01/04/webpack4/)【阅读建议：10min】
* [x] [多进程并行压缩代码](https://jkfhto.github.io/2019-10-17/webpack/%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%B9%B6%E8%A1%8C%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81/)【阅读建议：5min】
* [x] [webpack 的 scope hoisting 是什么？](https://ssshooter.com/2019-02-20-webpack-scope-hoisting/)【阅读建议：5min】
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
* [x] [通过Scope Hoisting优化Webpack输出](https://imweb.io/topic/5a43064fa192c3b460fce360)【阅读建议：5min】
* [x] [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)【阅读建议：5min】

#### <a name="chapter-three-seven-two" id="chapter-three-seven-two"></a>3.7.2 其他优化

> [返回目录](#chapter-one)

* [x] [网站性能优化实战——从12.67s到1.06s的故事](https://juejin.im/post/5b6fa8c86fb9a0099910ac91)【阅读建议：30min】
* [x] [聊聊前端开发中的长列表](https://zhuanlan.zhihu.com/p/26022258)【阅读建议：30min】
* [x] [再谈前端虚拟列表的实现](https://zhuanlan.zhihu.com/p/34585166)【阅读建议：30min】
* [x] [浅说虚拟列表的实现原理](https://github.com/dwqs/blog/issues/70)【阅读建议：30min】
* [x] [用 preload 预加载页面资源](https://juejin.im/post/5a7fb09bf265da4e8e785c38)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 上篇](https://juejin.im/post/5c46cbaee51d453f45612a2c)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 中篇](https://juejin.im/post/6844903765741404168)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 下篇](https://juejin.im/post/6844903765749792782)【阅读建议：20min】
* [x] [App内网页启动加速实践：静态资源预加载视角](https://mp.weixin.qq.com/s/tXABGOV4Lp2YiGnzq3gxbA)【阅读建议：20min】
* [x] [腾讯HTTPS性能优化实践](https://mp.weixin.qq.com/s/V62VYS8KFNKxJxfzMYefrw)【阅读建议：30min】

### <a name="chapter-three-eight" id="chapter-three-eight"></a>3.8 其他

> [返回目录](#chapter-one)

* [x] [抛弃console.log()，拥抱浏览器Debugger](https://zhuanlan.zhihu.com/p/52077620)【阅读建议：10min】
* [x] [浏览器IMG图片原生懒加载loading=”lazy”实践指南](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)【阅读建议：10min】
* [x] [浏览器页面资源加载过程与优化](https://juejin.im/post/5a4ed917f265da3e317df515)【阅读建议：无】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
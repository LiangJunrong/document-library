JavaScript 资料整理
===

> Create by **jsliang** on **2020-09-01 20:50:29**  
> Recently revised in **2020-09-08 14:11:02**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

复习知识点：

* [ ] 执行上下文/作用域链/闭包
* [ ] this/call/apply/bind
* [ ] 原型/继承
* [ ] Promise
* [ ] 深浅拷贝
* [ ] 事件机制/Event Loop
* [ ] 函数式编程
* [ ] service worker/web worker
* [ ] 常用方法
* [ ] ...

### 精选

* [ ] [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/6844903809206976520)
* [ ] [JavaScript 工具函数大全（新）](https://juejin.im/post/6844903966526930951)
* [ ] [22 道高频 JavaScript 手写面试题及答案](https://juejin.im/post/6844903911686406158)

### 系统

* [ ] [[译] 送你 43 道 JavaScript 面试题](https://juejin.im/post/6844903869378461710)
* [ ] [20道JS原理题助你面试一臂之力！](https://juejin.im/post/6844903891591495693)
* [ ] [总结了17年初到18年初百场前端面试的面试经验(含答案)](https://juejin.im/post/6844903636271644680)
* [ ] [(建议收藏)原生JS灵魂之问, 请问你能接得住几个？(上)](https://juejin.im/post/6844903974378668039)
* [ ] [(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/6844903986479251464)
* [ ] [(2.4w字)原生JS灵魂之问(下), 冲刺🚀进阶最后一公里(附个人成长经验分享)](https://juejin.im/post/6844904004007247880)

### 基础

* [ ] [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

### 执行上下文/作用域链/闭包

* [ ] [理解 JavaScript 中的执行上下文和执行栈](https://juejin.im/post/5ba32171f265da0ab719a6d7)
* [ ] [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
* [ ] [一道js面试题引发的思考](https://github.com/kuitos/kuitos.github.io/issues/18)
* [ ] [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
* [ ] [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
* [ ] [发现 JavaScript 中闭包的强大威力](https://juejin.im/post/5c4e6a90e51d4552266576d2)
* [ ] [JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)
* [ ] [我从来不理解JavaScript闭包，直到有人这样向我解释它...](https://zhuanlan.zhihu.com/p/56490498)
* [ ] [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.im/post/58f1fa6a44d904006cf25d22#heading-0)
* [ ] [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.im/post/6844903474212143117)

### this/call/apply/bind

已抽取分离

### 原型/继承

* [ ] [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
* [ ] [【THE LAST TIME】一文吃透所有JS原型相关知识点](https://juejin.im/post/5dba456d518825721048bce9)
* [ ] [重新认识构造函数、原型和原型链](https://juejin.im/post/5c6a9c10f265da2db87b98f3)
* [ ] [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://www.jianshu.com/p/dee9f8b14771)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（二）](https://www.jianshu.com/p/652991a67186)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（三）](https://www.jianshu.com/p/a4e1e7b6f4f8)
* [ ] [JavaScript 引擎基础：原型优化](https://hijiangtao.github.io/2018/08/21/Prototypes/)
* [ ] [Prototypes in JavaScript](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)
* [ ] [JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)
* [ ] [详解JS原型链与继承](http://louiszhai.github.io/2015/12/15/prototypeChain/)
* [ ] [从proto和prototype来深入理解JS对象和原型链](https://github.com/creeperyang/blog/issues/9)
* [ ] [代码复用模式](https://github.com/jayli/javascript-patterns/blob/master/chapter6.markdown)
* [ ] [JavaScript 中的继承：ES3、ES5 和 ES6](http://tianfangye.com/2017/12/31/inheritance-in-javascript-es3-es5-and-es6/)
* [ ] [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)
* [ ] [深度解析原型中的各个难点](https://juejin.im/post/6844903575974313992)

### Promise

已抽取分离

### 深浅拷贝

已抽取分离

### 事件机制/Event Loop

已抽取分离出去

### 函数式编程

* [ ] [函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
* [ ] [JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
* [ ] [Understanding Functional Programming in Javascript](https://levelup.gitconnected.com/understanding-functional-programming-in-javascript-a-complete-guide-e85ed13b42c8)
* [ ] [What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
* [ ] [简明 JavaScript 函数式编程——入门篇](https://juejin.im/post/5d70e25de51d453c11684cc4)
* [ ] [You Should Learn Functional Programming](https://dev.to/allanmacgregor/you-should-learn-functional-programming-in-2018-4nff)
* [ ] [JavaScript 函数式编程到底是个啥](https://segmentfault.com/a/1190000009864459)
* [ ] [JavaScript-函数式编程](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/JavaScript/JavaScript%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.md)

### Service Worker / PWA

* [ ] [Service Worker：简介](https://developers.google.com/web/fundamentals/primers/service-workers)
* [ ] [JavaScript 是如何工作的：Service Worker 的生命周期及使用场景](https://github.com/qq449245884/xiaozhi/issues/8)
* [ ] [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
* [ ] [PWA Lavas 文档](https://lavas.baidu.com/pwa/README)
* [ ] [PWA 学习手册](https://pwa.alienzhou.com/)
* [ ] [面试官：请你实现一个PWA](https://juejin.im/post/5e26aa785188254c257c462d#heading-24)

### Web Worker

* [ ] [浅谈HTML5 Web Worker](https://juejin.im/post/59c1b3645188250ea1502e46)
* [ ] [JavaScript 中的多线程 -- Web Worker](https://zhuanlan.zhihu.com/p/25184390)
* [ ] [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634)
* [ ] [A Simple Introduction to Web Workers in JavaScript](https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c)
* [ ] [Speedy Introduction to Web Workers](https://auth0.com/blog/speedy-introduction-to-web-workers/)

### DOM

* [ ] [破解前端面试（80% 应聘者不及格系列）：从 DOM 说起](https://juejin.im/post/6844903474547671047)
* [ ] [原生JS中DOM节点相关API合集](https://microzz.com/2017/04/06/jsdom/)
* [ ] [dom里各种尺寸区别（offsetWidth，scrollWidth，clientWidth，innerWidth....）](https://github.com/pramper/Blog/issues/10)

### 常用方法

* [ ] [近一万字的ES6语法知识点补充](https://juejin.im/post/5c6234f16fb9a049a81fcca5)
* [ ] [ES6、ES7、ES8特性一锅炖(ES6、ES7、ES8学习指南)](https://juejin.im/post/5b9cb3336fb9a05d290ee47e)
* [ ] [解锁多种JavaScript数组去重姿势](https://juejin.im/post/5b0284ac51882542ad774c45)
* [ ] [Here’s how you can make better use of JavaScript arrays](https://www.freecodecamp.org/news/heres-how-you-can-make-better-use-of-javascript-arrays-3efd6395af3c/)
* [ ] [一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧](https://juejin.im/post/5cef46226fb9a07eaf2b7516)
* [ ] [1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.im/post/5d9bf530518825427b27639d)

### 杂

* [ ] [JavaScript深入系列15篇正式完结！](https://juejin.im/post/6844903479429824526)
* [ ] [你真的理解 事件冒泡 和 事件捕获 吗？](https://juejin.im/post/5cc941436fb9a03236394027)
* [ ] [发布订阅模式，在工作中它的能量超乎你的想象](https://juejin.im/post/6844903616172539917)
* [ ] [谁说前端不需要懂-Nginx反向代理与负载均衡](https://juejin.im/post/6844903619465068551)
* [ ] [CSS世界中那些说起来很冷的知识](https://juejin.im/post/6844903635248218126)
* [ ] [WebSocket是时候展现你优秀的一面了](https://juejin.im/post/6844903696560553991)
* [ ] [socket.io让每个人都可以开发属于自己的即时通讯](https://juejin.im/post/6844903700905852936)
* [ ] [WebSocket 是什么原理？为什么可以实现持久连接](https://juejin.im/entry/6844903592525037576)
* [ ] [JavaScript 如何工作：对引擎、运行时、调用堆栈的概述](https://juejin.im/post/6844903510538993671)
* [ ] [理解 JavaScript 中的执行上下文和执行栈](https://juejin.im/post/6844903682283143181)
* [ ] [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/6844903512845860872)
* [ ] [JavaScript开发者应懂的33个概念](https://zhuanlan.zhihu.com/p/48049957)
* [ ] [前端js实现字符串/图片/excel文件下载](https://segmentfault.com/a/1190000018143902)
* [ ] [JavaScript 复杂判断的更优雅写法](https://juejin.im/post/6844903705058213896)
* [ ] [近一万字的ES6语法知识点补充](https://juejin.im/post/6844903775329583112)
* [ ] [前端路由跳转基本原理](https://segmentfault.com/a/1190000018081475)
* [ ] [九种跨域方式实现原理](https://juejin.im/post/6844903767226351623)
* [ ] [发现 JavaScript 中闭包的强大威力](https://juejin.im/post/6844903769646317576)
* [ ] [你可能不熟悉的JS总结](https://segmentfault.com/a/1190000018113011)
* [ ] [JavaScript中高阶函数的魅力](https://juejin.im/post/6844903668651819016)
* [ ] [小邵教你玩转JS面向对象](https://juejin.im/post/6844903668433551368)
* [ ] [AST抽象语法树——最基础的javascript重点知识，99%的人根本不了解](https://juejin.im/entry/6844903668492435470)
* [ ] [ES6、ES7、ES8特性一锅炖](https://juejin.im/post/6844903679976275976)
* [ ] [如何在 JavaScript 中更好地使用数组](https://juejin.im/post/6844903671646715911)
* [ ] [7分钟理解JS的节流、防抖及使用场景](https://juejin.im/post/6844903669389885453)
* [ ] [ECMAScript 6 六级考试](https://zhuanlan.zhihu.com/p/29214240)
* [ ] [javascript: Airbnb JavaScript 代码规范](https://juejin.im/repo/59dcab3651882530e289f8dd)
* [ ] [可能是最好的正则表达式的教程笔记了吧...](https://juejin.im/post/6844903648309297166)
* [ ] [一些 JavaScript 中的代码小技巧](https://juejin.im/entry/6844903663492661262)
* [ ] [急速JavaScript全栈教程](https://juejin.im/entry/6844903663035482125)
* [ ] [ES9已经来了 Are you ready?](https://juejin.im/post/6844903652348395533)
* [ ] [使用原生 JavaScript构建状态管理系统](https://juejin.im/post/6844903660804112391)
* [ ] [JS正则表达式完整教程（略长）](https://juejin.im/post/6844903487155732494)
* [ ] [防抖和节流原理分析](https://juejin.im/post/6844903662519599111?utm_medium=fe&utm_source=weixinqun)
* [ ] [JavaScript 实用技巧和写法建议](https://juejin.im/post/6844903526796099591)
* [ ] [编写自己的代码库（javascript常用实例的实现与封装）](https://juejin.im/post/6844903520596918280)
* [ ] [import、require、export、module.exports 混合使用详解](https://juejin.im/post/6844903520865386510)
* [ ] [WebSocket：5分钟从入门到精通](https://juejin.im/post/6844903544978407431)
* [ ] [JavaScript 运行原理解析](https://juejin.im/post/6844903551009816589)
* [ ] [简单了解JavaScript垃圾回收机制](https://juejin.im/post/6844903556265279502)
* [ ] [一次记住js的6个正则方法](http://varnull.cn/yi-ci-ji-zhu-jsde-6ge-zheng-ze-fang-fa/)
* [ ] [几道JS代码手写题以及一些代码实现](https://juejin.im/post/6844903575559077895)
* [ ] [JSBridge的原理](https://juejin.im/post/6844903585268891662)
* [ ] [面试官: 你了解前端路由吗?](https://juejin.im/post/6844903589123457031)
* [ ] [深入剖析 JavaScriptCore](https://ming1016.github.io/2018/04/21/deeply-analyse-javascriptcore/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
* [ ] [JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)
* [ ] [JavaScript 中的多线程 -- Web Worker](https://qiutc.me/post/the-multithread-in-javascript-web-worker.html)
* [ ] [解锁多种JavaScript数组去重姿势](https://juejin.im/post/6844903608467587085)
* [ ] [前端将数据转化为弹幕效果的实现方式](https://juejin.im/post/6844903600636821518)
* [ ] [浅谈 instanceof 和 typeof 的实现原理](https://juejin.im/post/6844903613584654344)
* [ ] [前端性能相关：防抖、节流](https://juejin.im/entry/6844903592898330638)
* [ ] [7种方法实现数组去重](https://juejin.im/post/6844903602197102605)
* [ ] [如何实现一个HTTP请求库——axios源码阅读与分析](https://juejin.im/post/6844903602280988686)
* [ ] [面试官:既然React/Vue可以用Event Bus进行组件通信,你可以实现下吗?](https://juejin.im/post/6844903587043082247)
* [ ] [高阶函数，你怎么那么漂亮呢！](https://juejin.im/post/6844903592822833160)
* [ ] [面试官:请你实现一个深克隆](https://juejin.im/post/6844903584023183368)
* [ ] [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/6844903576309858318)
* [ ] [浅谈 HTTP/2 Server Push](https://zhuanlan.zhihu.com/p/26757514)
* [ ] [开发更好用的 JavaScript 模块](https://zhuanlan.zhihu.com/p/31499310)
* [ ] [JavaScript复杂判断的更优雅写法](https://zhuanlan.zhihu.com/p/48917912)
* [ ] [我从来不理解JavaScript闭包，直到有人这样向我解释它](https://zhuanlan.zhihu.com/p/56490498)
* [ ] [重新认识构造函数、原型和原型链](https://juejin.im/post/6844903779079290887)
* [ ] [如何在 Web 关闭页面时发送 Ajax 请求](https://juejin.im/post/6844903790575878157)
* [ ] [用 Proxy 追踪 JavaScript 类](https://juejin.im/post/6844903793885184013)
* [ ] [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/6844903809206976520)
* [ ] [JavaScript的环境模型](https://mp.weixin.qq.com/s/rOxvYS7MdnPAX7FGjpOXnw)
* [ ] [面试官(6): 写过『通用前端组件』吗?](https://juejin.im/post/6844903847874265101)
* [ ] [抱歉，学会 Proxy 真的可以为所欲为](https://zhuanlan.zhihu.com/p/35080324)
* [ ] [中级前端工程师必须要掌握的 28 个 JavaScript 技巧](https://juejin.im/post/6844903856489365518)
* [ ] [前端路由原理解析和实现](https://juejin.im/post/6844903842643968014)
* [ ] [正则表达式不要背](https://juejin.im/post/6844903845227659271)
* [ ] [前端必知必会--操作URL的黑科技](https://juejin.im/post/6844903865767165959)
* [ ] [送你43道JavaScript面试题](https://juejin.im/post/6844903869378461710)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
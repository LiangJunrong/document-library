JavaScript
===

> Create by **jsliang** on **2020-09-01 20:50:29**  
> Recently revised in **2020-10-14 22:09:40**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 整理内容](#chapter-two) |
| &emsp;[2.1 基础知识点](#chapter-two-one) |
| &emsp;[2.2 变量](#chapter-two-two) |
| &emsp;[2.3 DOM](#chapter-two-three) |
| &emsp;[2.4 原型和原型链](#chapter-two-four) |
| &emsp;[2.5 this](#chapter-two-five) |
| &emsp;[2.6 手写源码系列](#chapter-two-six) |
| &emsp;[2.7 异步系列](#chapter-two-seven) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 系统](#chapter-three-one) |
| &emsp;[3.2 基础](#chapter-three-two) |
| &emsp;[3.3 ECMAScript](#chapter-three-three) |
| &emsp;[3.4 执行上下文/作用域链/闭包](#chapter-three-four) |
| &emsp;[3.5 this](#chapter-three-five) |
| &emsp;[3.6 原型/继承](#chapter-three-six) |
| &emsp;[3.7 函数式编程](#chapter-three-seven) |
| &emsp;[3.8 Service Worker / PWA](#chapter-three-eight) |
| &emsp;[3.9 DOM](#chapter-three-night) |
| &emsp;[3.10 正则表达式](#chapter-three-ten) |
| &emsp;[3.11 WebSocket](#chapter-three-eleven) |
| &emsp;[3.12 路由/URL](#chapter-three-twelve) |
| &emsp;[3.13 模块化](#chapter-three-thirteen) |
| &emsp;[3.14 JS 技巧](#chapter-three-fourteen) |
| &emsp;[3.15 原理/垃圾回收](#chapter-three-fifteen) |
| &emsp;[3.16 其他](#chapter-three-sixteen) |
| &emsp;[3.17 手写系列文章](#chapter-three-seventeen) |
| &emsp;[3.18 手写 call/bind/apply](#chapter-three-eighteen) |
| &emsp;[3.19 手写深拷贝和浅拷贝](#chapter-three-nighteen) |
| &emsp;[3.20 手写 Promise](#chapter-three-twenty) |
| &emsp;[3.21 异步系列](#chapter-three-twenty-one) |
| &emsp;[3.22 异步：Event Loop](#chapter-three-twenty-two) |
| &emsp;[3.23 异步：Promise](#chapter-three-twenty-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 整理内容

> [返回目录](#chapter-one)

这里是 JavaScript 系列文章的大纲（含链接），点击可以查看具体内容。

### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 基础知识点

> [返回目录](#chapter-one)

文章地址：[基础](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%9F%BA%E7%A1%80.md)

知识点：

* [x] 常见数组 API
* [x] 常见 DOM API
* [x] 数组去重的方法
* [x] 数字化金额：`1234567890` -> `1,234,567,890`
* [x] JS 数据类型：`Boolean`/`Null`/`Undefined`/`Number`/`String`/`Symbol`/`BigInt`/`Object`

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 变量

> [返回目录](#chapter-one)

文章地址：[变量](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%8F%98%E9%87%8F.md)

知识点：

* [x] `var`/`let`/`const`
* [x] 变量提升和函数提升
* [x] 暂时性死区
* [x] 函数作用域和全局作用域（ES5）
* [x] 块级作用域（ES6）
* [x] 判断变量类型

### <a name="chapter-two-three" id="chapter-two-three"></a>2.3 DOM

> [返回目录](#chapter-one)

文章地址：[DOM](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/DOM.md)

知识点：

* [x] DOM 常用 API
* [x] 虚拟 DOM：浏览器渲染过程 -> 真实 DOM 和虚拟 DOM -> Diff 算法

### <a name="chapter-two-four" id="chapter-two-four"></a>2.4 原型和原型链

> [返回目录](#chapter-one)

文章地址：[原型和原型链](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)

知识点：

* [x] 构造函数 `funciton Person() {}`
* [x] 实例 `const person = new Person()`
* [x] 原型 `Person.prototype`
* [x] 隐藏属性 `constructor`
  * [x] 等式 1：`person.constructor === Person`
  * [x] 等式 2：`Person.prototype.constructor === Person`
* [x] `new`
  * [x] `new` 的原生例子
  * [x] 手写 `new`：判断首参为函数；通过 `Object.create()` 创建新对象并且绑定原型链；通过 `call` 或者 `apply` 修正 `this` 指向和传参；通过 `typeof` 判断函数对象和普通对象；函数对象和普通对象返回构造函数的 `return` 值，否则返回新对象
  * [x] 通过对手写 `new` 过程的了解来做题
* [x] 查找实例对应的对象的原型 `person.__proto__ === Person.prototype`
* [x] 函数对象指向
  * [x] `person.__proto__ === Person.prototype`
  * [x] `Person.__proto__ === Function.prototype`
* [x] 普通对象指向
  * [x] `obj.__proto__ === Object.prototype`
* [x] 原型链
  * [x] `foo.__proto__ === Object.prototype`
  * [x] `F.__proto__ === Function.prototype`
  * [x] `F.__proto__.__proto__ === Object.prototype`

### <a name="chapter-two-five" id="chapter-two-five"></a>2.5 this

> [返回目录](#chapter-one)

文章地址：[this](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/this.md)

知识点：

* [x] `this` 永远指向最后调用它的那个对象
  * [x] 普通函数中 `this` 的指向，是 `this` 执行时的上下文
  * [x] 箭头函数中 this 的指向，是 this 定义时的上下文
* [x] 全局执行上下文中的 `this`
* [x] 函数执行上下文中的 `this`
  * [x] 通过 `call/bind/apply` 改变 `this` 指向
  * [x] 通过对象调用方法设置
  * [x] 通过构造函数设置
* [x] React 中 `this` 问题
* [x] 题目

### <a name="chapter-two-six" id="chapter-two-six"></a>2.6 手写源码系列

> [返回目录](#chapter-one)

手写系列存放位置：

* [x] [手写系列](https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97)

各个手写具体实现：

* [x] [自定义原生事件](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6.md)
  * [x] 创建自定义事件：`const myEvent = new Event()`、`new CustomEvent()`、`document.createEvent('CustomEvent')`
  * [x] 监听自定义事件：`document.addEventListener('myEvent', callback)`
  * [x] 触发自定义事件：`document.dispatchEvent(myEvent)`
* [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise.md)
  * [x] 简写版 `Promise`（不支持异步）
  * [x] 手写 `Promise`（`resolve`、`reject`、`then`）
  * [x] 实现 `Promise.all()`
  * [x] 实现 `Promise.race()`
  * [x] 实现 `Promise` 异步调度器
* [x] [防抖和节流](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md)
  * [x] 防抖
  * [x] 节流
  * [x] 防抖 + 节流（必定能触发的防抖）
* [x] [浅拷贝和深拷贝](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D.md)
  * [x] 手写浅拷贝
  * [x] `Object.assign`
  * [x] 浅拷贝其他方法：`concat()`、`slice()`、`[...arr]`
  * [x] 手写深拷贝
  * [x] `JSON.parse(JSON.stringify())`
  * [x] Lodash 的 `_.cloneDeep()`
  * [x] JQuery 的 `$.extend()`
* [x] [call+bind+apply](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/call%2Bbind%2Bapply.md)
  * [x] 原生 `call` 和手写 `call`
  * [x] 原生 `bind` 和手写 `bind`
  * [x] 原生 `apply` 和手写 `apply`
* [x] [JSONP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/JSONP.md)
  * [x] 基本原理：利用 `script` 标签的 `src` 没有跨域限制来完成实现
  * [x] 优缺点：只能 `GET`；兼容性好
  * [x] 简单实现：通过 `url, params, callbackKey, callback` 来定义 `JSONP()` 方法的参数
  * [x] 考虑多次调用：基于简单实现，添加数组保存 `callback` 的返回
* [x] [new](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/new.md)
  * [x] 3 行代码手写 `new`
  * [x] 手写 `new` 的 5 个特点
  * [x] 完整版手写 `new`
* [x] [其他](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E5%85%B6%E4%BB%96.md)
  * [x] `Object.create()`
  * [x] ES5 实现类继承
  * [x] `instanceof`
  * [x] 柯里化：求 `add(1)(2)(3)`
  * [x] 迭代器
  * [x] Ajax
  * [x] 数组扁平化：手撕、`flat()`、`reduce()`
  * [x] 数组去重：手撕、`Set`、`filter()`
  * [x] 其他

### <a name="chapter-two-seven" id="chapter-two-seven"></a>2.7 异步系列

> [返回目录](#chapter-one)

异步系列存放地址：

* [x] [JavaScript 异步](https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97)
  * [x] JavaScript 是单线程的
  * [x] 为什么不设计成多线程
  * [x] 为什么需要异步
  * [x] 如何实现异步

各种异步知识点：

* [x] [Event Loop](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Event%20Loop.md)
  * [x] 单线程和多线程
  * [x] 浏览器 Event Loop
  * [x] Node 和浏览器 Event Loop 区别
  * [x] 训练题目
* [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Promise.md)
  * [x] Promise 初探：是什么、为什么、怎么用
  * [x] Promise 基础：`new Promise` 和 `Promise` 状态
  * [x] 题库：基础题
  * [x] 题库：结合 `setTimeout`
  * [x] `.then()` 链式操作：两个参数、链式调用
  * [x] `.catch()` 捕获问题
  * [x] `.finally()` 强制执行
  * [x] 题库：`.then()、.catch()、.finally()`
  * [x] `.all()` 接力赛
  * [x] `.race()` 个人赛
  * [x] 题库：`.all()、.race()`
  * [x] Promise 源码
  * [x] 题库：结合 `async/await`
  * [x] 综合题
  * [x] 大厂题
  * [x] 总结

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

本系列参考文章有 198 篇。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 系统

> [返回目录](#chapter-one)

* [x] [JavaScript深入系列15篇正式完结！](https://juejin.im/post/6844903479429824526)【阅读建议：2h】
* [x] [[译] 送你 43 道 JavaScript 面试题](https://juejin.im/post/6844903869378461710)【阅读建议：1h】
* [x] [总结了17年初到18年初百场前端面试的面试经验(含答案)](https://juejin.im/post/6844903636271644680)【阅读建议：1h】
* [x] [(建议收藏)原生JS灵魂之问, 请问你能接得住几个？(上)](https://juejin.im/post/6844903974378668039)【阅读建议：1h】
* [x] [(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/6844903986479251464)【阅读建议：1h】
* [x] [(2.4w字)原生JS灵魂之问(下), 冲刺🚀进阶最后一公里(附个人成长经验分享)](https://juejin.im/post/6844904004007247880)【阅读建议：被删除了】
* [x] [灵魂之问(下) - 转载地址](https://blog.csdn.net/qq_36696468/article/details/103397167)【阅读建议：2h】
* [x] [编写自己的代码库（javascript常用实例的实现与封装）](https://juejin.im/post/6844903520596918280)【阅读建议：2h】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 基础

> [返回目录](#chapter-one)

* [x] [MDN - Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)【阅读建议：10min】
* [x] [JavaScript 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)【阅读建议：5min】
* [x] [JavaScript: 变量提升和函数提升](https://www.cnblogs.com/liuhe688/p/5891273.html)【阅读建议：10min】
* [x] [变量提升必须注意的问题](https://blog.csdn.net/wu_xianqiang/article/details/78966755)【阅读建议：5min】
* [x] [笔试题-Js前端变量提升的问题](https://blog.csdn.net/silence_xiang/article/details/106784692)【阅读建议：5min】
* [x] [关于JS变量提升的一些坑](https://www.cnblogs.com/luqin/p/5164132.html)【阅读建议：5min】
* [x] [JavaScript数组去重（12种方法，史上最全）](https://segmentfault.com/a/1190000016418021)【阅读建议：10min】
* [x] [JS 中对变量类型的判断](https://www.cnblogs.com/zhangruiqi/p/8027338.html)【阅读建议：10min】
* [x] [js中块级作用域以及函数作用域之间有什么区别？（代码解析）](https://www.php.cn/js-tutorial-408430.html)【阅读建议：5min】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 ECMAScript

> [返回目录](#chapter-one)

* [x] [1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.im/post/5d9bf530518825427b27639d)【阅读建议：1h】
* [x] [ES6、ES7、ES8特性一锅炖(ES6、ES7、ES8学习指南)](https://juejin.im/post/6844903679976275976)【阅读建议：1h】
* [x] [近一万字的ES6语法知识点补充](https://juejin.im/post/6844903775329583112)【阅读建议：1h】
* [x] [ES9已经来了 Are you ready?](https://juejin.im/post/6844903652348395533)【阅读建议：30min】
* [x] [ECMAScript 6 六级考试](https://zhuanlan.zhihu.com/p/29214240)【阅读建议：30min】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 执行上下文/作用域链/闭包

> [返回目录](#chapter-one)

* [x] [理解 JavaScript 中的执行上下文和执行栈](https://juejin.im/post/6844903682283143181)【阅读建议：20min】
* [x] [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)【阅读建议：10min】
* [x] [一道js面试题引发的思考](https://github.com/kuitos/kuitos.github.io/issues/18)【阅读建议：10min】
* [x] [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)【阅读建议：10min】
* [x] [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)【阅读建议：10min】
* [x] [详解JS函数柯里化](https://www.jianshu.com/p/2975c25e4d71)【阅读建议：20min】
* [x] [编写add函数 然后 add(1)(2)(3)(4) 输出10 再考虑拓展性](https://beta.segmentfault.com/q/1010000004342477/a-1020000004344356)【阅读建议：10min】
* [x] [发现 JavaScript 中闭包的强大威力](https://juejin.im/post/6844903769646317576)【阅读建议：20min】
* [x] [JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)【阅读建议：20min】
* [x] [我从来不理解JavaScript闭包，直到有人这样向我解释它](https://zhuanlan.zhihu.com/p/56490498)【阅读建议：10min】
* [x] [发现 JavaScript 中闭包的强大威力](https://juejin.im/post/5c4e6a90e51d4552266576d2)【阅读建议：10min】
* [x] [JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)【阅读建议：20min】
* [x] [我从来不理解JavaScript闭包，直到有人这样向我解释它...](https://zhuanlan.zhihu.com/p/56490498)【阅读建议：10min】
* [x] [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.im/post/6844903474212143117)【阅读建议：10min】

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 this

> [返回目录](#chapter-one)

* [x] [再来40道this面试题酸爽继续](https://juejin.im/post/6844904083707396109)【阅读建议：1h】
* [x] [this,this,再次讨论javascript中的this,超全面](https://www.cnblogs.com/painsOnline/p/5102359.html)【阅读建议：10min】
* [x] [JavaScript中的this](https://juejin.im/post/59748cbb6fb9a06bb21ae36d)【阅读建议：10min】
* [x] [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)【阅读建议：20min】
* [x] [前端基础进阶（七）：全方位解读this](https://www.jianshu.com/p/d647aa6d1ae6)【阅读建议：20min】
* [x] [JavaScript基础心法——this](https://github.com/axuebin/articles/issues/6)【阅读建议：20min】
* [x] [11 | this：从JavaScript执行上下文的视角讲清楚this](https://time.geekbang.org/column/article/128427)【阅读建议：2hour】
* [x] [浅谈react 中的 this 指向](https://www.jianshu.com/p/159eabf152d0)【阅读建议：10min】
* [x] [react的性能优化](https://note.youdao.com/ynoteshare1/index.html?id=3d64b603405bcbb2c3cad3f750e5341d&type=note)【阅读建议：5min】
* [x] [React事件处理函数必须使用bind(this)的原因](https://blog.csdn.net/qq_34829447/article/details/81705977)【阅读建议：10min】
* [x] [由React构造函数中bind引起的this指向理解（React组件的方法为什么要用bind绑定this）](https://blog.csdn.net/AiHuanhuan110/article/details/106424812)【阅读建议：20min】
* [x] [React中this.handleClick = this.handleClick.bind(this)中的this指向问题](https://blog.csdn.net/yiersan__/article/details/108004911)【阅读建议：10min】

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 原型/继承

> [返回目录](#chapter-one)

* [x] [jsliang 2019 面试 - JavaScript-原型与原型链](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E9%9D%A2%E8%AF%95%E7%BB%8F%E9%AA%8C/2019/JavaScript-%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)【阅读建议：1h】
* [x] [【何不三连】比继承家业还要简单的JS继承题-封装篇(牛刀小试)](https://juejin.im/post/6844904094948130824)【阅读建议：2h】
* [x] [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)【阅读建议：1h】
* [x] [【THE LAST TIME】一文吃透所有JS原型相关知识点](https://juejin.im/post/5dba456d518825721048bce9)【阅读建议：30min】
* [x] [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)【阅读建议：30min】
* [x] [JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)【阅读建议：10min】
* [x] [JavaScript 引擎基础：原型优化](https://hijiangtao.github.io/2018/08/21/Prototypes/)【阅读建议：10min】
* [x] [详解JS原型链与继承](http://louiszhai.github.io/2015/12/15/prototypeChain/)【阅读建议：30min】
* [x] [从proto和prototype来深入理解JS对象和原型链](https://github.com/creeperyang/blog/issues/9)【阅读建议：10min】
* [x] [代码复用模式](https://github.com/jayli/javascript-patterns/blob/master/chapter6.markdown)【阅读建议：10min】
* [x] [深度解析原型中的各个难点](https://juejin.im/post/6844903575974313992)【阅读建议：10min】
* [x] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://www.jianshu.com/p/dee9f8b14771)【阅读建议：内容有些误导】
* [x] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（二）](https://www.jianshu.com/p/652991a67186)【阅读建议：高程书摘取，经第一篇后不继续往后看】
* [x] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（三）](https://www.jianshu.com/p/a4e1e7b6f4f8)【阅读建议：高程书摘取，经第一篇后不继续往后看】

### <a name="chapter-three-seven" id="chapter-three-seven"></a>3.7 函数式编程

> [返回目录](#chapter-one)

* [x] [函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)【阅读建议：一本书】
* [x] [JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)【阅读建议：30min】
* [x] [简明 JavaScript 函数式编程——入门篇](https://juejin.im/post/5d70e25de51d453c11684cc4)【阅读建议：30min】
* [x] [JavaScript 函数式编程到底是个啥](https://segmentfault.com/a/1190000009864459)【阅读建议：10min】
* [x] [JavaScript-函数式编程](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/JavaScript/JavaScript%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.md)【阅读建议：10min】

### <a name="chapter-three-eight" id="chapter-three-eight"></a>3.8 Service Worker / PWA

> [返回目录](#chapter-one)

* [x] [JavaScript 是如何工作的：Service Worker 的生命周期及使用场景](https://github.com/qq449245884/xiaozhi/issues/8)【阅读建议：30min】
* [x] [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)【阅读建议：30min】
* [x] [面试官：请你实现一个PWA](https://juejin.im/post/5e26aa785188254c257c462d)【阅读建议：30min】

### <a name="chapter-three-night" id="chapter-three-night"></a>3.9 DOM

> [返回目录](#chapter-one)

* [x] [破解前端面试（80% 应聘者不及格系列）：从 DOM 说起](https://juejin.im/post/6844903474547671047)【阅读建议：10min】
* [x] [原生JS中DOM节点相关API合集](https://microzz.com/2017/04/06/jsdom/)【阅读建议：10min】
* [x] [dom里各种尺寸区别（offsetWidth，scrollWidth，clientWidth，innerWidth....）](https://github.com/pramper/Blog/issues/10)【阅读建议：10min】

### <a name="chapter-three-ten" id="chapter-three-ten"></a>3.10 正则表达式

> [返回目录](#chapter-one)

* [x] [JS正则表达式完整教程（略长）](https://juejin.im/post/6844903487155732494)【阅读建议：2h】
* [x] [可能是最好的正则表达式的教程笔记了吧...](https://juejin.im/post/6844903648309297166)【阅读建议：30min】
* [x] [正则表达式不要背](https://juejin.im/post/6844903845227659271)【阅读建议：10min】

### <a name="chapter-three-eleven" id="chapter-three-eleven"></a>3.11 WebSocket

> [返回目录](#chapter-one)

* [x] [WebSocket是时候展现你优秀的一面了](https://juejin.im/post/6844903696560553991)【阅读建议：10min】
* [x] [socket.io让每个人都可以开发属于自己的即时通讯](https://juejin.im/post/6844903700905852936)【阅读建议：1h】
* [x] [WebSocket 是什么原理？为什么可以实现持久连接](https://juejin.im/entry/6844903592525037576)【阅读建议：10min】

### <a name="chapter-three-twelve" id="chapter-three-twelve"></a>3.12 路由/URL

> [返回目录](#chapter-one)

* [x] [前端路由跳转基本原理](https://segmentfault.com/a/1190000018081475)【阅读建议：20min】
* [x] [面试官: 你了解前端路由吗?](https://juejin.im/post/6844903589123457031)【阅读建议：20min】
* [x] [前端路由原理解析和实现](https://juejin.im/post/6844903842643968014)【阅读建议：30min】
* [x] [前端必知必会--操作URL的黑科技](https://juejin.im/post/6844903865767165959)【阅读建议：10min】

### <a name="chapter-three-thirteen" id="chapter-three-thirteen"></a>3.13 模块化

> [返回目录](#chapter-one)

* [x] [一篇不是标题党的CommonJS和ES6模块规范讲解](https://juejin.im/post/6844904145443356680)【阅读建议：30min】
* [x] [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/6844903576309858318)【阅读建议：30min】
* [x] [import、require、export、module.exports 混合使用详解](https://juejin.im/post/6844903520865386510)【阅读建议：30min】
* [x] [开发更好用的 JavaScript 模块](https://zhuanlan.zhihu.com/p/31499310)【阅读建议：5min】

### <a name="chapter-three-fourteen" id="chapter-three-fourteen"></a>3.14 JS 技巧

> [返回目录](#chapter-one)

* [x] [一些 JavaScript 中的代码小技巧](https://juejin.im/entry/6844903663492661262)【阅读建议：10min】
* [x] [一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧](https://juejin.im/post/6844903856489365518)【阅读建议：30min】
* [x] [JavaScript 实用技巧和写法建议](https://juejin.im/post/6844903526796099591)【阅读建议：20min】

### <a name="chapter-three-fifteen" id="chapter-three-fifteen"></a>3.15 原理/垃圾回收

> [返回目录](#chapter-one)

* [x] [JavaScript 运行原理解析](https://juejin.im/post/6844903551009816589)【阅读建议：10min】
* [x] [简单了解JavaScript垃圾回收机制](https://juejin.im/post/6844903556265279502)【阅读建议：20min】
* [x] [JavaScript 如何工作：对引擎、运行时、调用堆栈的概述](https://juejin.im/post/6844903510538993671)【阅读建议：10min】
* [x] [JavaScript的环境模型](https://mp.weixin.qq.com/s/rOxvYS7MdnPAX7FGjpOXnw)【阅读建议：10min】
* [x] [AST抽象语法树——最基础的javascript重点知识，99%的人根本不了解](https://juejin.im/entry/6844903668492435470)【阅读建议：10min】

### <a name="chapter-three-sixteen" id="chapter-three-sixteen"></a>3.16 其他

> [返回目录](#chapter-one)

* [x] [JavaScript开发者应懂的33个概念](https://zhuanlan.zhihu.com/p/48049957)【阅读建议：1h】
* [x] [如何实现一个HTTP请求库——axios源码阅读与分析](https://juejin.im/post/6844903602280988686)【阅读建议：10min】
* [x] [如何在 Web 关闭页面时发送 Ajax 请求](https://juejin.im/post/6844903790575878157)【阅读建议：10min】
* [x] [JavaScript中高阶函数的魅力](https://juejin.im/post/6844903668651819016)【阅读建议：10min】
* [x] [高阶函数，你怎么那么漂亮呢！](https://juejin.im/post/6844903592822833160)【阅读建议：20min】
* [x] [你可能不熟悉的JS总结](https://segmentfault.com/a/1190000018113011)【阅读建议：15min】
* [x] [你真的理解 事件冒泡 和 事件捕获 吗？](https://juejin.im/post/5cc941436fb9a03236394027)【阅读建议：15min】
* [x] [谁说前端不需要懂-Nginx反向代理与负载均衡](https://juejin.im/post/6844903619465068551)【阅读建议：10min】
* [x] [前端js实现字符串/图片/excel文件下载](https://segmentfault.com/a/1190000018143902)【阅读建议：20min】
* [x] [JavaScript 复杂判断的更优雅写法](https://juejin.im/post/6844903705058213896)【阅读建议：15min】
* [x] [急速JavaScript全栈教程](https://juejin.im/entry/6844903663035482125)【阅读建议：10min】
* [x] [JSBridge的原理](https://juejin.im/post/6844903585268891662)【阅读建议：20min】
* [x] [前端将数据转化为弹幕效果的实现方式](https://juejin.im/post/6844903600636821518)【阅读建议：20min】
* [x] [用 Proxy 追踪 JavaScript 类](https://juejin.im/post/6844903793885184013)【阅读建议：20min】
* [x] [抱歉，学会 Proxy 真的可以为所欲为](https://zhuanlan.zhihu.com/p/35080324)【阅读建议：20min】
* [x] [Javascript 面试中经常被问到的三个问题！](https://segmentfault.com/a/1190000018257074)【阅读建议：10min】

### <a name="chapter-three-seventeen" id="chapter-three-seventeen"></a>3.17 手写系列文章

> [返回目录](#chapter-one)

* [x] [前端面试常见的手写功能](https://juejin.im/post/6873513007037546510)【阅读建议：30min】
* [x] [32个手写JS，巩固你的JS基础（面试高频）](https://juejin.im/post/6875152247714480136)【阅读建议：30min】
* [x] [22 道高频 JavaScript 手写面试题及答案](https://juejin.im/post/6844903911686406158)【阅读建议：30min】
* [x] [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/6844903809206976520)【阅读建议：30min】
* [x] [几道JS代码手写题以及一些代码实现](https://juejin.im/post/6844903575559077895)【阅读建议：30min】
* [x] [三元-手写代码系列](http://47.98.159.95/my_blog/js-api/001.html)【阅读建议：30min】
* [x] [CORS 原理及实现](https://www.jianshu.com/p/b2bdf55e1bf5)【阅读建议：30min】
* [x] [JSONP 原理及实现](https://www.jianshu.com/p/88bb82718517)【阅读建议：30min】
* [x] [20道JS原理题助你面试一臂之力！](https://juejin.im/post/6844903891591495693)【阅读建议：30min】
* [x] [7分钟理解JS的节流、防抖及使用场景](https://juejin.im/post/6844903669389885453)【阅读建议：10min】
* [x] [防抖和节流原理分析](https://juejin.im/post/6844903662519599111?utm_medium=fe&utm_source=weixinqun)【阅读建议：10min】
* [x] [前端性能相关：防抖、节流](https://juejin.im/entry/6844903592898330638)【阅读建议：5min】
* [x] [面试官(6): 写过『通用前端组件』吗?](https://juejin.im/post/6844903847874265101)【阅读建议：20min】
* [x] [面试官:既然React/Vue可以用Event Bus进行组件通信,你可以实现下吗?](https://juejin.im/post/6844903587043082247)【阅读建议：20min】
* [x] [浅谈 instanceof 和 typeof 的实现原理](https://juejin.im/post/6844903613584654344)【阅读建议：10min】
* [x] [解锁多种JavaScript数组去重姿势](https://juejin.im/post/6844903608467587085)【阅读建议：20min】
* [x] [如何在 JavaScript 中更好地使用数组](https://juejin.im/post/6844903671646715911)【阅读建议：10min】
* [x] [7种方法实现数组去重](https://juejin.im/post/6844903602197102605)【阅读建议：20min】

### <a name="chapter-three-eighteen" id="chapter-three-eighteen"></a>3.18 手写 call/bind/apply

> [返回目录](#chapter-one)

* [x] [MDN - Arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)【阅读建议：5min】
* [x] [MDN - call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)【阅读建议：5min】
* [x] [MDN - apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)【阅读建议：5min】
* [x] [MDN - bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)【阅读建议：5min】
* [x] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)【阅读建议：1h】
* [x] [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)【阅读建议：20min】
* [x] [this、apply、call、bind](https://juejin.im/post/6844903496253177863)【阅读建议：30min】
* [x] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)【阅读建议：10min】
* [x] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)【阅读建议：20min】
* [x] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)【阅读建议：10min】

### <a name="chapter-three-nighteen" id="chapter-three-nighteen"></a>3.19 手写深拷贝和浅拷贝

> [返回目录](#chapter-one)

* [x] [如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/6844903929705136141)【阅读建议：2h】
* [x] [深拷贝的终极探索（90%的人都不知道）](https://juejin.im/post/5bc1ae9be51d450e8b140b0c)【阅读建议：1h】
* [x] [JavaScript基础心法——深浅拷贝](https://github.com/axuebin/articles/issues/20)【阅读建议：30min】
* [x] [JavaScript专题之深浅拷贝](https://github.com/mqyqingfeng/Blog/issues/32)【阅读建议：20min】
* [x] [javaScript中浅拷贝和深拷贝的实现](https://github.com/wengjq/Blog/issues/3)【阅读建议：20min】
* [x] [深入剖析 JavaScript 的深复制](https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)【阅读建议：20min】
* [x] [「JavaScript」带你彻底搞清楚深拷贝、浅拷贝和循环引用](https://segmentfault.com/a/1190000015042902)【阅读建议：20min】
* [x] [面试题之如何实现一个深拷贝](https://github.com/yygmind/blog/issues/29)【阅读建议：30min】
* [x] [面试官:请你实现一个深克隆](https://juejin.im/post/6844903584023183368)【阅读建议：10min】

### <a name="chapter-three-twenty" id="chapter-three-twenty"></a>3.20 手写 Promise

> [返回目录](#chapter-one)

* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：写得比较细，没前面剖析的清晰】

### <a name="chapter-three-twenty-one" id="chapter-three-twenty-one"></a>3.21 异步系列

> [返回目录](#chapter-one)

* [x] [Javascript异步编程的 4 种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)【阅读建议：5min】
* [x] [你好，JavaScript异步编程---- 理解JavaScript异步的美妙](https://juejin.im/post/5b56c3586fb9a04faa79a8e0)【阅读建议：5min】
* [x] [理解异步之美：Promise 与 async await（一）](https://juejin.im/post/6844903655565426696)【5min】
* [x] [理解异步之美：Promise 与 async await（二）](https://juejin.im/post/6844903661789773831)【20min】
* [x] [[完结篇] - 理解异步之美 --- promise与async await （三）](https://juejin.im/post/6844903664209887246)【20min】

### <a name="chapter-three-twenty-two" id="chapter-three-twenty-two"></a>3.22 异步：Event Loop

> [返回目录](#chapter-one)

* [x] [浏览器与Node的事件循环(Event Loop)有何区别?](https://zhuanlan.zhihu.com/p/54882306)【阅读建议：20min】
* [x] [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200)【阅读建议：20min】
* [x] [事件循环机制的那些事](https://mp.weixin.qq.com/s/PBX_YHw0-f3bbSDH5ZbbJQ?)【阅读建议：10min】
* [x] [深入理解js事件循环机制（Node.js篇）](http://lynnelv.github.io/js-event-loop-nodejs)【阅读建议：无】
* [x] [详解 JavaScript 中的 Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)【阅读建议：5min】
* [x] [深入理解 JavaScript Event Loop](https://zhuanlan.zhihu.com/p/34229323)【阅读建议：20min】
* [x] [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.im/post/5d901418518825539312f587)【阅读建议：20min】
* [x] [JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)【阅读建议：10min】
* [x] [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)【阅读建议：20min】
* [x] [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)【阅读建议：无】
* [x] [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)【阅读建议：无】
* [x] [再谈谈 Promise, setTimeout, rAF, rIC](https://segmentfault.com/a/1190000019154514)【阅读建议：10min】
* [x] [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)【阅读建议：10min】
* [x] [JavaScript 中的多线程 -- Web Worker](https://zhuanlan.zhihu.com/p/25184390)【阅读建议：30min】
* [x] [浅谈HTML5 Web Worker](https://juejin.im/post/6844903496550989837)【阅读建议：10min】
* [x] [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634)【阅读建议：10min】
* [x] [浏览器进程？线程？傻傻分不清楚！](https://imweb.io/topic/58e3bfa845e5c13468f567d5)【阅读建议：5min】

### <a name="chapter-three-twenty-three" id="chapter-three-twenty-three"></a>3.23 异步：Promise

> [返回目录](#chapter-one)

* [x] [ES6 入门 - Promise 对象](https://es6.ruanyifeng.com/#docs/promise)【阅读建议：2h】
* [x] [要就来 45 道 Promise 面试题一次爽到底](https://juejin.im/post/6844904077537574919)【阅读建议：8h】
* [x] [面试精选之 Promise](https://juejin.im/post/6844903625609707534)【阅读建议：20min】
* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：略读】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：略读】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：略读】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：略读】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：略读】
* [x] [Promises/A+ 规范（中文版](https://segmentfault.com/a/1190000002452115)【阅读建议：无】
* [x] [Promises/A+ 规范（英文版）](https://promisesaplus.com/)【阅读建议：无】
* [x] [Promises/A+ 测试仓库](https://github.com/promises-aplus/promises-tests/tree/master/lib/tests)【阅读建议：无】
* [x] [ES6 之 Promise 常见面试题](https://blog.csdn.net/weixin_37719279/article/details/80950713)【阅读建议：10min】
* [x] [Promise 必知必会（十道题）](https://juejin.im/post/6844903509934997511)【阅读建议：10min】
* [x] [大白话讲解 Promise（一）](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)【阅读建议：30min】
* [x] [再谈谈 Promise, setTimeout, rAF, rIC](https://segmentfault.com/a/1190000019154514)【阅读建议：10min】
* [x] [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)【阅读建议：10min】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
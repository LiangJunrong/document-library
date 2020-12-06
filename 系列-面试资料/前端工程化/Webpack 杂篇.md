Webpack 杂篇
===

> Create by **jsliang** on **2020-12-06 20:29:47**  
> Recently revised in **2020-12-06 20:40:53**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Babel](#chapter-three) |
| &emsp;[3.1 AST](#chapter-three-one) |
| &emsp;[3.2 Babel 原理](#chapter-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Webpack - Scope Hoisiting](#chapter-four) |
| &emsp;[4.1 Scope Hoisting 开启前后对比](#chapter-four-one) |
| &emsp;[4.2 原理](#chapter-four-two) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |
| &emsp;[5.1 Scope Hoisting](#chapter-five-one) |
| &emsp;[5.2 Babel](#chapter-five-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

因为 `Babel` 和 `Webpack` 的 `Scope Hoisting` 篇幅太小啦，感觉没啥内容，发出来像划水，于是抽取出来了。

然后因为是纯理论的知识点，又不记得是不是直接复制某篇文章的，所以如果文章有冒犯，欢迎联系我删除，联系方式在 GitHub 首页：

* https://github.com/LiangJunrong/document-library

当然，文章是没有收益的，纯 `share`，佛系发文，随缘交友，欢迎来聊天吹水。

> 过年回去又要被催找女票了，好扎心……

## <a name="chapter-three" id="chapter-three"></a>三 Babel

> [返回目录](#chapter-one)

* **面试官**：了解过 `Babel` 吗？
* **jsliang**：大概知道将 ES6+ 代码，先通过词法分析和语法分析之后解析为 `AST`，然后将这份 `AST` 转换为我们需要形式的 `AST`，最后将这个 `AST` 再转换成 ES5 或者期望格式的内容。
* **面试官**：写过 `Babel` 插件吗？
* **jsliang**：没有。
* （完结）

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 AST

> [返回目录](#chapter-one)

抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。

它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

之所以说语法是 “抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768d8da46a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

转换成 AST 的目的就是将我们书写的字符串文件转换成计算机更容易识别的数据结构，这样更容易提取其中的关键信息，而这棵树在计算机上的表现形式，其实就是一个单纯的 `Object`。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768da14f58?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

比如 `if(false){}` 编译成 AST 代码，我们是知道这段不执行的，就删除这个语法。

* [AST Explorer](https://astexplorer.net/)

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 Babel 原理

> [返回目录](#chapter-one)

大多数 JavaScript `Parser` 遵循 `estree` 规范，`Babel` 最初基于 `acorn` 项目（轻量级现代 JavaScript 解析器）

`Babel` 大概分为三大部分：

* **解析**：将代码转换成 `AST`
  * **词法分析**：将代码（字符串）分割为 `token` 流，即语法单元成的数组
  * **语法分析**：分析 token 流（上面生成的数组）并生成 `AST`
* **转换**：访问 `AST` 的节点进行变换操作生产新的 `AST`
  * `Taro` 就是利用 `babel` 完成的小程序语法转换
* **生成**：以新的 `AST` 为基础生成代码

想了解如何一步一步实现一个编译器的小伙伴可以移步 `Babel` 官网曾经推荐的开源项目 [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)。

## <a name="chapter-four" id="chapter-four"></a>四 Webpack - Scope Hoisiting

> [返回目录](#chapter-one)

`Scope Hoisting` 是 Webpack3 的新功能，直译为 **「作用域提升」**，它可以让 Webpack 打包出来的 **「代码文件更小」**，**「运行更快」**。

熟悉 JavaScript 都应该知道 **「函数提升」** 和 **「变量提升」** ，JavaScript 会把函数和变量声明提升到当前作用域的顶部。

**「作用域提升」** 也类似于此，Webpack 会把引入的 js 文件 “提升到” 它的引入者顶部。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 Scope Hoisting 开启前后对比

> [返回目录](#chapter-one)

假设我们有两个文件：

> 原始文件

```js
// main.js
export default "hello jsliang~";

// index.js
import str from "./main.js";
```

使用 Webpack 打包后输出文件内容：

```js
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
    console.log(__WEBPACK_IMPORTED_MODULE_0__util_js__["a"]);
  }),
  (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_exports__["a"] = ('hello jsliang~');
  })
]
```

开启 Scope Hoisting 后输出文件内容：

```js
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var util = ('hello jsliang~');
    console.log(util);
  })
]
```

对比两种打包方式输出的代码，我们可以看出，启用 `Scope Hoisting` 后，函数声明变成一个， `main.js` 中定义的内容被直接注入到 `main.js` 对应模块中，这样做的好处：

* 「代码体积更小」，因为函数申明语句会产生大量代码，导致包体积增大（模块越多越明显）；
* 代码在运行时因为创建的函数作用域更少，「内存开销也随之变小」。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 原理

> [返回目录](#chapter-one)

`Scope Hoisting` 的实现原理其实很简单：分析出模块之间的依赖关系，尽可能将打散的模块合并到一个函数中，前提是不能造成代码冗余。因此「只有那些被引用了一次的模块才能被合并」。

由于 `Scope Hoisting` 需要分析出模块之间的依赖关系，因此源码「必须采用 `ES6` 模块化语句」，不然它将无法生效。原因和 `Tree Shaking` 中介绍的类似。

## <a name="chapter-five" id="chapter-five"></a>五 参考文献

> [返回目录](#chapter-one)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 Scope Hoisting

> [返回目录](#chapter-one)

* [x] [webpack 的 scope hoisting 是什么？](https://ssshooter.com/2019-02-20-webpack-scope-hoisting/)【阅读建议：5min】
* [x] [通过Scope Hoisting优化Webpack输出](https://imweb.io/topic/5a43064fa192c3b460fce360)【阅读建议：5min】
* [x] [【Webpack】654- 了不起的 Webpack Scope Hoisting 学习指南](https://cloud.tencent.com/developer/article/1663231)【阅读建议：5min】

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 Babel

> [返回目录](#chapter-one)

* [x] [一篇文章了解前端开发必须懂的 Babel](https://mp.weixin.qq.com/s/C-WmM5tjfc3r4sB52C4R0Q)【阅读建议：10min】
* [x] [不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)【阅读建议：30min】
* [x] [前端工程师需要了解的 Babel 知识](https://www.zoo.team/article/babel)【阅读建议：30min】
* [x] [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be)【阅读建议：30min】
* [x] [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa)【阅读建议：30min】
* [x] [前端工程师的自我修养-关于 Babel 那些事儿](https://juejin.im/post/5e5b488af265da574112089f)【阅读建议：20min】
* [x] [前端与编译原理——用JS写一个JS解释器](https://segmentfault.com/a/1190000017241258)【阅读建议：20min】
* [x] [面试官: 你了解过Babel吗？写过Babel插件吗? 答: 没有。卒](https://juejin.im/post/6844903566809759758)【阅读建议：10min】
* [x] [入门babel--实现一个es6的class转换器](https://juejin.im/post/6844903586950807560)【阅读建议：10min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

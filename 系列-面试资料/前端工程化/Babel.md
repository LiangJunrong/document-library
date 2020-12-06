Babel
===

> Create by **jsliang** on **2020-10-21 22:35:16**  
> Recently revised in **2020-12-06 20:29:31**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 AST](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Babel 原理](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **面试官**：了解过 Babel 吗？
* **jsliang**：大概知道将 ES6+ 代码，先通过词法分析和语法分析之后解析为 `AST`，然后将这份 `AST` 转换为我们需要形式的 `AST`，最后将这个 `AST` 再转换成 ES5 或者期望格式的内容。
* **面试官**：写过 `Babel` 插件吗？
* **jsliang**：没有。
* （完结）

## <a name="chapter-three" id="chapter-three"></a>三 AST

> [返回目录](#chapter-one)

抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。

它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

之所以说语法是 “抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768d8da46a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

转换成 AST 的目的就是将我们书写的字符串文件转换成计算机更容易识别的数据结构，这样更容易提取其中的关键信息，而这棵树在计算机上的表现形式，其实就是一个单纯的 `Object`。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768da14f58?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

比如 `if(false){}` 编译成 AST 代码，我们是知道这段不执行的，就删除这个语法。

* [AST Explorer](https://astexplorer.net/)

## <a name="chapter-four" id="chapter-four"></a>四 Babel 原理

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

## <a name="chapter-five" id="chapter-five"></a>五 参考文献

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

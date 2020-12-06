Webpack 性能优化
===

> Create by **jsliang** on **2020-10-20 15:00:19**  
> Recently revised in **2020-12-07 07:50:10**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 针对 Webpack 本身构建优化](#chapter-three) |
| &emsp;[3.1 优化 resolve.modules 配置](#chapter-three-one) |
| &emsp;[3.2 优化 resolve.extensions 配置](#chapter-three-two) |
| &emsp;[3.3 优化 resolve.include/exclude 配置](#chapter-three-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 通过 Loader 和 Plugin 优化](#chapter-four) |
| &emsp;[4.1 缓存](#chapter-four-one) |
| &emsp;[4.2 多进程](#chapter-four-two) |
| &emsp;[4.3 多进程压缩](#chapter-four-three) |
| &emsp;[4.4 静态资源分离](#chapter-four-four) |
| &emsp;[4.5 代码分离](#chapter-four-five) |
| &emsp;[4.6 打包资源压缩](#chapter-four-six) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 其他优化点](#chapter-five) |
| &emsp;[5.1 Tree Shaking](#chapter-five-one) |
| &emsp;[5.2 Scope Hoisting](#chapter-five-two) |
| &emsp;[5.3 按需加载](#chapter-five-three) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 优化体验](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 参考文献](#chapter-seven) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

Webpack 的优化瓶颈，主要是 2 个方面：

* Webpack 的构建过程太花时间
* Webpack 打包的结果体积太大

本文从这 2 个角度出发，收集一些相关优化资料。

## <a name="chapter-three" id="chapter-three"></a>三 针对 Webpack 本身构建优化

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 优化 resolve.modules 配置

> [返回目录](#chapter-one)

`resolve.modules` 用于配置 `Webpack` 去哪些目录下寻找第三方模块，默认是 `['node_modules']`。

但是，它会先去当前目录的 `./node_modules` 查找，没有的话再去 `../node_modules`，最后到根目录 —— 即 `npm` 查找包的规则。

所以可以直接指定项目根目录，这样代码就不需要一层一层查找。

```js
resolve: {
  modules: [path.resolve(__dirname, 'node_modules')],
}
```

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 优化 resolve.extensions 配置

> [返回目录](#chapter-one)

在导入没带文件后缀的路径时，`Webpack` 会自动带上后缀去尝试询问文件是否存在，而 `resolve.extensions` 用于配置尝试后缀列表；默认为 `extensions:['js', 'json']`。

当遇到 `require('./data')` 时 `Webpack` 会先尝试寻找 `data.js`，没有再去找 `data.json`；如果列表越长，或者正确的后缀越往后，尝试的次数就会越多。

所以在配置时为提升构建优化需遵守：

1. 频率出现高的文件后缀优先放在前面。
2. 列表尽可能的少，例如只有 3 个：`js`、`jsx`、`json`。
3. 书写导入语句时，尽量写上后缀名。

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 优化 resolve.include/exclude 配置

> [返回目录](#chapter-one)

以 `babel-loader` 为例，可以通过 `include` 和 `exclude` 帮助我们避免 `node_modules` 这类庞大文件夹。

即通过 `include` 告诉 `Webpack` 哪些我们是需要检测的，通过 `exclude` 告诉 `Webpack` 哪些我们是不需要检测的（例如已经收拾过的静态资源）

## <a name="chapter-four" id="chapter-four"></a>四 通过 Loader 和 Plugin 优化

> [返回目录](#chapter-one)

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 缓存

> [返回目录](#chapter-one)

* [cache-loader](https://www.npmjs.com/package/cache-loader)

在 `babel-loader` 开启 `cache` 后，将 `loader` 的编译结果写进硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。

* `uglifyjs-webpack-plugin`

通过这个插件也可以解决缓存问题。

> 注：具体的要根据当前的 `Webpack` 版本，`Loader` 和 `Plugin` 表示 `Webpack` 每次更新都会淘汰一批没有跟进维护的 `Loader` 和 `Plugin`。就跟大佬还在持续学习，你几年没学习之后，遇到金融危机被淘汰的风险就高了。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 多进程

> [返回目录](#chapter-one)

由于有大量文件需要解析和处理，构建是文件读写和计算密集型的操作，特别是当文件数量变多后，`Webpack` 构建慢的问题会显得严重。

文件读写和计算操作是无法避免的，那能不能让 `Webpack` 同一时刻处理多个任务，发挥多核 CPU 电脑的威力，以提升构建速度呢？

`Happypack` 可以将任务分解成多个子进程去并发执行，大大提升打包效率。

除此之外 `thread-loader` 和 `Happypack` 一样，但是配置比较简单。

> `Happypack` 已经不维护了。[Github - Happypack](https://github.com/amireh/happypack)

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 多进程压缩

> [返回目录](#chapter-one)

因为自带的 `UglifyjsWebpackPlugin` 压缩插件是单线程运行的，而 `TerserWebpackPlugin` 可以并发运行压缩功能（多进程）。

所以通过 `TerserWebpackPlugin` 代替自带的 `UglifyjsWebpackPlugin` 插件。

### <a name="chapter-four-four" id="chapter-four-four"></a>4.4 静态资源分离

> [返回目录](#chapter-one)

通过 `DllPlugin` 或者 `Externals` 进行静态依赖包的分离。

由于 `CommonsChunkPlugin` 每次构建会重新构建一次 `vendor`，所以出于效率考虑，使用 `DllPlugin` 将第三方库单独打包到一个文件中，只有依赖自身发生版本变化时才会重新打包。

### <a name="chapter-four-five" id="chapter-four-five"></a>4.5 代码分离

> [返回目录](#chapter-one)

在 `Webpack` 中，到底什么是代码分离？代码分离允许你把代码拆分到多个文件中。如果使用得当，你的应用性能会提高很多。因为浏览器能缓存你的代码。

每当你做出一次修改，包含修改的文件需要被所有访问你网站的人重新下载。但你并不会经常修改应用的依赖库。

如果你能把那些依赖库拆分到完全分离的文件中，即使业务逻辑发生了更改，访问者也不需要再次下载依赖库，直接使用之前的缓存就可以了。

由于有了 `SplitChunksPlugin`，你可以把应用中的特定部分移至不同文件。如果一个模块在不止一个 `chunk` 中被使用，那么利用代码分离，该模块就可以在它们之间很好地被共享。

### <a name="chapter-four-six" id="chapter-four-six"></a>4.6 打包资源压缩

> [返回目录](#chapter-one)

* JS 压缩：`UglifyjsWebpackPlugin`
* HTML 压缩：`HtmlWebpackPlugin`
* CSS 压缩：`MiniCssExtractPlugin`
* 图片压缩：`image-webpack-loader`
* Gzip 压缩：不包括图片

## <a name="chapter-five" id="chapter-five"></a>五 其他优化点

> [返回目录](#chapter-one)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 Tree Shaking

> [返回目录](#chapter-one)

通过 ES6 的 `import/export` 来检查未引用代码，以及 `sideEffects` 来标记无副作用代码，最后用 `UglifyJSPlugin` 来做 `Tree Shaking`，从而删除冗余代码。

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 Scope Hoisting

> [返回目录](#chapter-one)

`Scope Hoisting` 是 Webpack3 的新功能，直译为 **「作用域提升」**，它可以让 Webpack 打包出来的 **「代码文件更小」**，**「运行速度更快」**。

熟悉 JavaScript 都应该知道 **「函数提升」** 和 **「变量提升」** ，JavaScript 会把函数和变量声明提升到当前作用域的顶部。

**「作用域提升」** 也类似于此，Webpack 会把引入的 js 文件 “提升到” 它的引入者顶部。

`Scope Hoisting` 的实现原理其实很简单：分析出模块之间的依赖关系，尽可能将打散的模块合并到一个函数中，前提是不能造成代码冗余。因此「只有那些被引用了一次的模块才能被合并」。

由于 `Scope Hoisting` 需要分析出模块之间的依赖关系，因此源码「必须采用 `ES6` 模块化语句」，不然它将无法生效。原因和 `Tree Shaking` 中介绍的类似。

### <a name="chapter-five-three" id="chapter-five-three"></a>5.3 按需加载

> [返回目录](#chapter-one)

* 什么是 **代码分割**（code splitting）？

代码分割是指：将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程。

在 Webpack 构建时，会避免加载已声明要异步加载的代码，异步代码会被单独分离出一个文件，当代码实际调用时被加载至页面。

代码分割技术的核心是 **异步加载资源**。

可喜的是，浏览器允许我们这么做，W3C `stage 3` 规范： [whatwg/loader](https://whatwg.github.io/loader/) 对其进行了定义：你可以通过 `import()` 关键字让浏览器在程序执行时异步加载相关资源。

在 Vue 中，可以直接使用 `import()` 关键字做到这一点，而在 React 中，你需要使用 `react-loadable` 去完成同样的事。

## <a name="chapter-six" id="chapter-six"></a>六 优化体验

> [返回目录](#chapter-one)

* [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin)：在终端底部，将会有一个构建的进度条，可以让你清晰的看见构建的执行进度。
* [webpack-build-notifier](https://www.npmjs.com/package/webpack-build-notifier)：在构建完成时，能够像微信、Lark 这样的 APP 弹出消息的方式，提示构建已经完成。
* [webpack-dashboard](https://juejin.im/post/6844903924806189070)：对 Webpack 原始的构建输出不满意的话，也可以使用这样一款 Plugin 来优化你的输出界面。
* [speed-measure-webpack-plugin](https://www.npmjs.com/package/speed-measure-webpack-plugin)：该插件可以测量各个插件和 `loader` 所花费的时间。
* `webpack-bundle-analyzer`：可视化分析。通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。
* `webpack-chart`
* `webpack-analyse`

## <a name="chapter-seven" id="chapter-seven"></a>七 参考文献

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


---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

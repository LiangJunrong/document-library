Webpack 性能优化
===

> Create by **jsliang** on **2020-10-20 15:00:19**  
> Recently revised in **2020-10-20 15:01:39**

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
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 通过 Loader 和 Plugin 优化](#chapter-four) |
| &emsp;[4.1 babel-loader](#chapter-four-one) |
| &emsp;[4.2 tree shaking](#chapter-four-two) |
| &emsp;[4.3 可视化分析](#chapter-four-three) |
| &emsp;[4.4 缓存](#chapter-four-four) |
| &emsp;[4.5 多进程](#chapter-four-five) |
| &emsp;[4.6 抽离](#chapter-four-six) |
| &emsp;[4.7 多进程代码压缩](#chapter-four-seven) |
| &emsp;[4.8 拆包](#chapter-four-eight) |
| &emsp;[4.9 打包资源压缩](#chapter-four-night) |
| &emsp;[4.10 按需加载](#chapter-four-ten) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 优化体验](#chapter-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

Webpack 的优化瓶颈，主要是 2 个方面：

* Webpack 的构建过程太花时间
* Webpack 打包的结果体积太大

## <a name="chapter-three" id="chapter-three"></a>三 针对 Webpack 本身构建优化

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 优化 resolve.modules 配置

> [返回目录](#chapter-one)

`resolve.modules` 用于配置 `Webpack` 去哪些目录下寻找第三方模块，默认是 `['node_modules']`，但是，它会先去当前目录的 `./node_modules` 查找，没有的话再去 `../node_modules`，最后到根目录。

所以可以直接指定项目根目录，就不需要一层一层查找。

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

## <a name="chapter-four" id="chapter-four"></a>四 通过 Loader 和 Plugin 优化

> [返回目录](#chapter-one)

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 babel-loader

> [返回目录](#chapter-one)

以 `babel-loader` 为例，可以通过 `include` 和 `exclude` 帮助我们避免 `node_modules` 这类庞大文件夹。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 tree shaking

> [返回目录](#chapter-one)

通过 ES6 的 `import/export` 来检查未引用代码，以及 `sideEffects` 来标记无副作用代码，最后用 `UglifyJSPlugin` 来做 `tree shaking`，从而删除冗余代码。

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 可视化分析

> [返回目录](#chapter-one)

* `speed-measure-webpack-plugin`：测量出在构建过程中，每一个 Loader 和 Plugin 的执行时长。
* `webpack-bundle-analyzer`：通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。
* `webpack-chart`
* `webpack-analyse`

### <a name="chapter-four-four" id="chapter-four-four"></a>4.4 缓存

> [返回目录](#chapter-one)

* `cache-loader`

参考链接：[cache-loader](https://www.npmjs.com/package/cache-loader)

在 `babel-loader` 开启 `cache` 后，将 `loader` 的编译结果写进硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。

* `uglifyjs-webpack-plugin`

也可以解决缓存问题。

### <a name="chapter-four-five" id="chapter-four-five"></a>4.5 多进程

> [返回目录](#chapter-one)

`Happypack` 可以将任务分解成多个子进程去并发执行，大大提升打包效率。

### <a name="chapter-four-six" id="chapter-four-six"></a>4.6 抽离

> [返回目录](#chapter-one)

通过 `DllPlugin` 或者 `Externals` 进行静态依赖包的分离。

由于 `CommonsChunkPlugin` 每次构建会重新构建一次 `vendor`，所以出于效率考虑，使用 `DllPlugin` 将第三方库单独打包到一个文件中，只有依赖自身发生版本变化时才会重新打包。

### <a name="chapter-four-seven" id="chapter-four-seven"></a>4.7 多进程代码压缩

> [返回目录](#chapter-one)

因为自带的 `UglifyJsPlugin` 压缩插件是单线程运行的，而 `ParallelUglifyPlugin` 可以并行执行。

所以通过 `ParallelUglifyPlugin` 代替自带的 `UglifyJsPlugin` 插件。

### <a name="chapter-four-eight" id="chapter-four-eight"></a>4.8 拆包

> [返回目录](#chapter-one)

在 `Webpack` 中，到底什么是代码分离？代码分离允许你把代码拆分到多个文件中。如果使用得当，你的应用性能会提高很多。因为浏览器能缓存你的代码。

每当你做出一次修改，包含修改的文件需要被所有访问你网站的人重新下载。但你并不会经常修改应用的依赖库。

如果你能把那些依赖库拆分到完全分离的文件中，即使业务逻辑发生了更改，访问者也不需要再次下载依赖库，直接使用之前的缓存就可以了。

由于有了 `SplitChunksPlugin`，你可以把应用中的特定部分移至不同文件。如果一个模块在不止一个 `chunk` 中被使用，那么利用代码分离，该模块就可以在它们之间很好地被共享。

### <a name="chapter-four-night" id="chapter-four-night"></a>4.9 打包资源压缩

> [返回目录](#chapter-one)

* JS 压缩：`UglifyJSPlugin`
* HTML 压缩：`HtmlWebpackPlugin`
* 提取公共资源：`splitChunks.cacheGroups`
* CSS 压缩：`MiniCssExtractPlugin`
* Gzip 压缩：不包括图片

### <a name="chapter-four-ten" id="chapter-four-ten"></a>4.10 按需加载

> [返回目录](#chapter-one)

通过 Code-Splitting 来做 React 的按需加载.

`Code_Splitting` 核心是 `require-ensure`。

## <a name="chapter-five" id="chapter-five"></a>五 优化体验

> [返回目录](#chapter-one)

* [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin)：在终端底部，将会有一个构建的进度条，可以让你清晰的看见构建的执行进度。
* [webpack-build-notifier](https://www.npmjs.com/package/webpack-build-notifier)：在构建完成时，能够像微信、Lark 这样的 APP 弹出消息的方式，提示构建已经完成。
* [webpack-dashboard](https://juejin.im/post/6844903924806189070)：对 Webpack 原始的构建输出不满意的话，也可以使用这样一款 Plugin 来优化你的输出界面。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
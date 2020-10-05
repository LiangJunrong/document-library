Webpack
===

> Create by **jsliang** on **2020-09-17 15:33:55**  
> Recently revised in **2020-10-05 15:39:35**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Webpack 运行机制](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 AST](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 懒加载](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Webpack 优化](#chapter-six) |
| &emsp;[6.1 针对 Webpack 本身构建优化](#chapter-six-one) |
| &emsp;&emsp;[6.1.1 优化 resolve.modules 配置](#chapter-six-one-one) |
| &emsp;&emsp;[6.1.2 优化 resolve.extensions 配置](#chapter-six-one-two) |
| &emsp;[6.2 通过 Loader 和 Plugin 优化](#chapter-six-two) |
| &emsp;&emsp;[6.2.1 babel-loader](#chapter-six-two-one) |
| &emsp;&emsp;[6.2.2 tree shaking](#chapter-six-two-two) |
| &emsp;&emsp;[6.2.3 可视化分析](#chapter-six-two-three) |
| &emsp;&emsp;[6.2.4 缓存](#chapter-six-two-four) |
| &emsp;&emsp;[6.2.5 多进程](#chapter-six-two-five) |
| &emsp;&emsp;[6.2.6 抽离](#chapter-six-two-six) |
| &emsp;&emsp;[6.2.7 多进程代码压缩](#chapter-six-two-seven) |
| &emsp;&emsp;[6.2.8 拆包](#chapter-six-two-eight) |
| &emsp;&emsp;[6.2.9 打包资源压缩](#chapter-six-two-night) |
| &emsp;&emsp;[6.2.10 按需加载](#chapter-six-two-ten) |
| &emsp;[6.3 优化体验](#chapter-six-three) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 知识点 1：Webpack 几种 hash 的实现原理](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 参考文献](#chapter-eight) |
| &emsp;[8.1 官方文档](#chapter-eight-one) |
| &emsp;[8.2 Webpack 系列文章](#chapter-eight-two) |
| &emsp;[8.3 Webpack 性能优化](#chapter-eight-three) |
| &emsp;[8.4 tree shaking](#chapter-eight-four) |
| &emsp;[8.5 懒加载](#chapter-eight-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* 什么是 Webpack
  * 安装
  * 构建
* Webpack 配置
  * `mode`
  * `entry`
  * `output`
  * `module`（`plugins`）
  * `plugins`
* 常见 `loaders`
  * `style-loader`
  * `css-loader`
  * `babel-loader`
  * `file-loader`
  * `url-loader`
* 常见 `plugins`
  * `html-webpack-plugin`
  * `clean-webpack-plugin`
  * `mini-css-extract-plugin`
* 从 0 开始：技术选型：
  * 移动端 || PC
  * MPA || SPA
  * HTML || 模板引擎
  * CSS || 预处理器
  * JavaScript ES6
  * 本地发布服务（数据模拟）
  * React || Vue
  * 多人项目 || 单人项目
  * 语法规范 Eslint
  * 单元测试
  * 提交规范
* 从 0 开始：`loaders` 配置 - 处理 CSS、Less
  * ues: `['style-loader', 'css-loader', 'postcss-loader', 'less-loader']`
  * `less less-loader`：解析 `.less` 文件
  * `postcss-loader autoprefixer`：对 `flex` 布局等进行前缀补充
* 从 0 开始：`loaders` 配置 - 处理图片
  * `file-loader`：解析 `.txt`、`.png`、`.md` 等格式文件
  * `url-loader`：`limit: 1024`，判断大小是否处理成 `base64` 格式
* 从 0 开始：`loaders` 配置 - 处理字体
  * `url-loader`
* 从 0 开始：`loaders` 配置 - MPA 多页面打包通用方案
  * 安装 `glob`
  * 将 `entry` 和 `htmlwebpackplugin` 动态生成
* 从 0 开始：`SourceMap`
  * 开发环境配置：`devtool: "cheap-module-eval-source-map`
  * 线上生成配置（不推荐）：`devtool: "cheap-module-source-map"`
* 从 0 开始：`WebpackDevServer`
  * 安装
  * 配置：`devServer`
  * `HMR`（热模块替换，Hot Module Replacement）
  * 开启 JS 模块的 `HMR`，需要 `Webpack` 配合
* 从 0 开始：`babel` 解析
  * 安装：`npm i babel-loader @babel/core @babel-preset-env -D`
    * `@babel/core`：`babel` 核心
    * `babel-loader`：`babel` 和 `Webpack` 的连接桥梁
    * `babel-preset-env`：输出什么样的代码，用它来解决
  * `babel-loader`：解析 ES6+
  * `@babel/polyfill`：垫片。包含所有 ES6+ 新特性代码
  * `.babelrc`
* 从 0 开始：`React`
  * 安装：`react react-dom`
  * 使用：`@babel/preset-react`
* 从 0 开始：优化
  * 缩小 `loader` 的文件范围：`loader` 的 `include` 配置，可以指定 `src` 目录，减少检查范围。
  * 优化 `resolve.modules` 配置：配置 `Webpack` 去哪些目录下寻找第三方模块，默认 `node_modules`。
  * 分离 CSS：`MiniCssExtractPlugin`
  * `hash`、`chunkhash`、`contenthash` 区别
    * `hash` 作用域 JS、CSS，图片的 `hash` 有区别，每次打包构建都会变化一次。
    * `chunkhash` 以 `chunk` 为单位，修改了那部分就改动哪部分的 `hash`。（同时依赖的模块也会改变 `hash`）
    * `contenthash` 只有自己内容发生改变，才发生改变（区别于 `chunkhash`。
    * 所以 JS 适用于 `chunkhash`；CSS 适用于 `contenthash`；Image 适用于 `hash`
  * 压缩 CSS：`optimize-css-assets-webpack-plugin` 和 `cssnano`
  * 压缩 HTML：`html-webpack-plugin`
  * 压缩图片：`img-webpack-loader`
  * 分离 `Webpack` 配置：分离 `base.config`、`dev.config`、`mpa.config` 和 `pro.config` 4 个，通过 `merge` 进行 `config` 配置的合并
* 从 0 开始：简单编写一个 `Webpack` 解析器
* 从 0 开始：编写一个 `Webpack loader`
* 从 0 开始：编写一个 `Webpack plugin`

---

**优化 `resolve.modules` 配置**：

> webpack.config.js

```js
resolve: {
  // 定位第三方依赖的位置
  modules: [ path.resolve(__dirname, './node_modules') ],
  alias: {
    // 给图片起个别名，注意 HTML + CSS 的使用
    "@assets": path.resolve(__dirname, "./src/images"),
  },
  // 自动补全后缀列表：【缺点】这个列表越长，匹配越久，查找需要时间，3 个以内最好
  extensions: [".js", ".json", ".jsx"],
}
```

> index.less

```css
body {
  background: url(~@assets/icon.png);
}
```

---

最好自己搭建一个 然后效果是最好的

* tree-shaking
* 热更新
* webpack 工作流
* scope-hoisting

这些原理 都经常问到

## <a name="chapter-three" id="chapter-three"></a>三 Webpack 运行机制

> [返回目录](#chapter-one)

Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。

这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 

Webpack 的运行过程简述如下：

* 初始化配置参数
* 绑定事件钩子回调
* 确定 `entry` 逐一遍历
* 使用 `loader` 编译文件
* 输出文件

## <a name="chapter-four" id="chapter-four"></a>四 AST

> [返回目录](#chapter-one)

抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。

它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

之所以说语法是 “抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768d8da46a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

转换成 AST 的目的就是将我们书写的字符串文件转换成计算机更容易识别的数据结构，这样更容易提取其中的关键信息，而这棵树在计算机上的表现形式，其实就是一个单纯的 `Object`。

![图](https://user-gold-cdn.xitu.io/2018/9/28/1661ef768da14f58?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

比如 `if(false){}` 编译成 AST 代码，我们是知道这段不执行的，就删除这个语法

babel 编译 es6 成 es5 原理就是 a+c=c 编译成 c 我可以删除 +b 这段代码，就是利用AST

* [AST Explorer](https://astexplorer.net/)

## <a name="chapter-five" id="chapter-five"></a>五 懒加载

> [返回目录](#chapter-one)

懒加载或者按需加载，是一种很好的优化网页或应用的方式。

这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。

这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

* **实现原理**：

1. 将需要进行懒加载的子模块单独打包成文件（`children chunk`）
2. 借助函数来实现延迟进行子模块的加载代码（`import`）

> print.js

```js
console.log('输出 1');

export default () => {
  console.log('输出 2');
};
```

> index.js

```js
const btn = document.querySelector('.btn');
btn.onclick = import('./index.js').then((module) => {
  const print = module.default;
  print();
});
```

* **Vue 按需加载**：

Vue 的特点就是 SPA - Single Page Application（单页应用程序）：

只有第一次加载页面，以后的每次页面切换，只需要进行组件替换。

它减少了请求次数，加快页面响应速度，降低对服务器压力等等。

但是，因为 Vue 是 SPA，所以首页第一次加载时会把所有组件以及组件相关资源全部加载，从而导致网站首页打开速度变慢，降低用户体验。

Vue 项目中，可以结合 Webpack，在 `vue-router` 通过 `import` 进行动态加载：

```js
const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue')
}];
```


## <a name="chapter-six" id="chapter-six"></a>六 Webpack 优化

> [返回目录](#chapter-one)

Webpack 的优化瓶颈，主要是 2 个方面：

* Webpack 的构建过程太花时间
* Webpack 打包的结果体积太大

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 针对 Webpack 本身构建优化

> [返回目录](#chapter-one)

#### <a name="chapter-six-one-one" id="chapter-six-one-one"></a>6.1.1 优化 resolve.modules 配置

> [返回目录](#chapter-one)

`resolve.modules` 用于配置 `Webpack` 去哪些目录下寻找第三方模块，默认是 `['node_modules']`，但是，它会先去当前目录的 `./node_modules` 查找，没有的话再去 `../node_modules`，最后到根目录。

所以可以直接指定项目根目录，就不需要一层一层查找。

```js
resolve: {
  modules: [path.resolve(__dirname, 'node_modules')],
}
```

#### <a name="chapter-six-one-two" id="chapter-six-one-two"></a>6.1.2 优化 resolve.extensions 配置

> [返回目录](#chapter-one)

在导入没带文件后缀的路径时，`Webpack` 会自动带上后缀去尝试询问文件是否存在，而 `resolve.extensions` 用于配置尝试后缀列表；默认为 `extensions:['js', 'json']`。

当遇到 `require('./data')` 时 `Webpack` 会先尝试寻找 `data.js`，没有再去找 `data.json`；如果列表越长，或者正确的后缀越往后，尝试的次数就会越多。

所以在配置时为提升构建优化需遵守：

1. 频率出现高的文件后缀优先放在前面。
2. 列表尽可能的少，例如只有 3 个：`js`、`jsx`、`json`。
3. 书写导入语句时，尽量写上后缀名。

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 通过 Loader 和 Plugin 优化

> [返回目录](#chapter-one)

#### <a name="chapter-six-two-one" id="chapter-six-two-one"></a>6.2.1 babel-loader

> [返回目录](#chapter-one)

以 `babel-loader` 为例，可以通过 `include` 和 `exclude` 帮助我们避免 `node_modules` 这类庞大文件夹。

#### <a name="chapter-six-two-two" id="chapter-six-two-two"></a>6.2.2 tree shaking

> [返回目录](#chapter-one)

通过 ES6 的 `import/export` 来检查未引用代码，以及 `sideEffects` 来标记无副作用代码，最后用 `UglifyJSPlugin` 来做 `tree shaking`，从而删除冗余代码。

#### <a name="chapter-six-two-three" id="chapter-six-two-three"></a>6.2.3 可视化分析

> [返回目录](#chapter-one)

* `speed-measure-webpack-plugin`：测量出在构建过程中，每一个 Loader 和 Plugin 的执行时长。
* `webpack-bundle-analyzer`：通过矩阵树图的方式将包内各个模块的大小和依赖关系呈现出来。
* `webpack-chart`
* `webpack-analyse`

#### <a name="chapter-six-two-four" id="chapter-six-two-four"></a>6.2.4 缓存

> [返回目录](#chapter-one)

* `cache-loader`

参考链接：[cache-loader](https://www.npmjs.com/package/cache-loader)

在 `babel-loader` 开启 `cache` 后，将 `loader` 的编译结果写进硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。

* `uglifyjs-webpack-plugin`

也可以解决缓存问题。

#### <a name="chapter-six-two-five" id="chapter-six-two-five"></a>6.2.5 多进程

> [返回目录](#chapter-one)

`Happypack` 可以将任务分解成多个子进程去并发执行，大大提升打包效率。

#### <a name="chapter-six-two-six" id="chapter-six-two-six"></a>6.2.6 抽离

> [返回目录](#chapter-one)

通过 `DllPlugin` 或者 `Externals` 进行静态依赖包的分离。

由于 `CommonsChunkPlugin` 每次构建会重新构建一次 `vendor`，所以出于效率考虑，使用 `DllPlugin` 将第三方库单独打包到一个文件中，只有依赖自身发生版本变化时才会重新打包。

#### <a name="chapter-six-two-seven" id="chapter-six-two-seven"></a>6.2.7 多进程代码压缩

> [返回目录](#chapter-one)

因为自带的 `UglifyJsPlugin` 压缩插件是单线程运行的，而 `ParallelUglifyPlugin` 可以并行执行。

所以通过 `ParallelUglifyPlugin` 代替自带的 `UglifyJsPlugin` 插件。

#### <a name="chapter-six-two-eight" id="chapter-six-two-eight"></a>6.2.8 拆包

> [返回目录](#chapter-one)

在 `Webpack` 中，到底什么是代码分离？代码分离允许你把代码拆分到多个文件中。如果使用得当，你的应用性能会提高很多。因为浏览器能缓存你的代码。

每当你做出一次修改，包含修改的文件需要被所有访问你网站的人重新下载。但你并不会经常修改应用的依赖库。

如果你能把那些依赖库拆分到完全分离的文件中，即使业务逻辑发生了更改，访问者也不需要再次下载依赖库，直接使用之前的缓存就可以了。

由于有了 `SplitChunksPlugin`，你可以把应用中的特定部分移至不同文件。如果一个模块在不止一个 `chunk` 中被使用，那么利用代码分离，该模块就可以在它们之间很好地被共享。

#### <a name="chapter-six-two-night" id="chapter-six-two-night"></a>6.2.9 打包资源压缩

> [返回目录](#chapter-one)

* JS 压缩：`UglifyJSPlugin`
* HTML 压缩：`HtmlWebpackPlugin`
* 提取公共资源：`splitChunks.cacheGroups`
* CSS 压缩：`MiniCssExtractPlugin`
* Gzip 压缩：不包括图片

#### <a name="chapter-six-two-ten" id="chapter-six-two-ten"></a>6.2.10 按需加载

> [返回目录](#chapter-one)

通过 Code-Splitting 来做 React 的按需加载.

`Code_Splitting` 核心是 `require-ensure`。

### <a name="chapter-six-three" id="chapter-six-three"></a>6.3 优化体验

> [返回目录](#chapter-one)

* [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin)：在终端底部，将会有一个构建的进度条，可以让你清晰的看见构建的执行进度。
* [webpack-build-notifier](https://www.npmjs.com/package/webpack-build-notifier)：在构建完成时，能够像微信、Lark 这样的 APP 弹出消息的方式，提示构建已经完成。
* [webpack-dashboard](https://juejin.im/post/6844903924806189070)：对 Webpack 原始的构建输出不满意的话，也可以使用这样一款 Plugin 来优化你的输出界面。

## <a name="chapter-seven" id="chapter-seven"></a>七 知识点 1：Webpack 几种 hash 的实现原理

> [返回目录](#chapter-one)

* `hash` 是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 `hash` 值都会更改，并且全部文件都共用相同的 `hash` 值。（粒度整个项目）
* `chunkhash` 是根据不同的入口进行依赖文件解析，构建对应的 `chunk`（模块），生成对应的 `hash` 值。只有被修改的 `chunk`（模块）在重新构建之后才会生成新的 `hash` 值，不会影响其它的 `chunk`。（粒度 `entry` 的每个入口文件）
* `contenthash` 是跟每个生成的文件有关，每个文件都有一个唯一的 `hash` 值。当要构建的文件内容发生改变时，就会生成新的 `hash` 值，且该文件的改变并不会影响和它同一个模块下的其它文件。（粒度每个文件的内容）

## <a name="chapter-eight" id="chapter-eight"></a>八 参考文献

> [返回目录](#chapter-one)

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 官方文档

> [返回目录](#chapter-one)

* [ ] [Webpack 中文文档](https://webpack.docschina.org/concepts/)

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 Webpack 系列文章

> [返回目录](#chapter-one)

**2019 年文章**：

**2018 年文章**：

* [x] [Webpack揭秘——走向高阶前端的必经之路](https://juejin.im/post/6844903685407916039)【阅读建议：30min】

**未分类文章**：

* [ ] [「吐血整理」再来一打Webpack面试题](https://juejin.im/post/6844904094281236487)
* [ ] [霖呆呆的webpack之路-loader篇](https://github.com/LinDaiDai/niubility-coding-js/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/%E9%9C%96%E5%91%86%E5%91%86%E7%9A%84webpack%E4%B9%8B%E8%B7%AF-loader%E7%AF%87.md#file-loader)
* [ ] [《不用花钱，也能掌握Webpack面试题》](https://mp.weixin.qq.com/s/Udlv1R7-_IAcfaGcds3mew)
* [ ] [掘金刘小夕的webpack系列](https://juejin.im/post/5e5c65fc6fb9a07cd00d8838)
* [ ] [webpack的代码分割（路由懒加载同理）](https://juejin.im/post/5e796ec1e51d45271e2a9af9)
* [ ] [「吐血整理」再来一打Webpack面试题](https://juejin.im/post/6844904094281236487)
* [ ] [前端工程师都得掌握的 webpack Loader](https://github.com/axuebin/articles/issues/38)
* [ ] [webpack loader 从上手到理解系列：vue-loader](https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw)
* [ ] [webpack loader 从上手到理解系列：style-loader](https://mp.weixin.qq.com/s/alIKsKkGRU_yyjpeV8i0og)
* [ ] [一文掌握Webpack编译流程](https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb)
* [ ] [手把手教你撸一个简易的 webpack](https://juejin.im/post/5b192afde51d45069c2efe5a)
* [ ] [带你走进webpack世界，成为webpack头号玩家。](https://juejin.im/post/5ac9dc9af265da23884d5543)
* [ ] [关于webpack4的14个知识点,童叟无欺](https://juejin.im/post/5cea1e1ae51d4510664d1652)
* [ ] [手把手教你撸一个 Webpack Loader](https://juejin.im/post/5a698a316fb9a01c9f5b9ca0)
* [ ] [webpack 如何通过作用域分析消除无用代码](https://diverse.space/2018/05/better-tree-shaking-with-scope-analysis)
* [ ] [【webpack进阶】你真的掌握了loader么？- loader十问](https://juejin.im/post/5bc1a73df265da0a8d36b74f)
* [ ] [Webpack小书](https://www.timsrc.com/article/2/webpack-book)
* [ ] [聊一聊webpack-dev-server和其中socket，HMR的实现](https://github.com/879479119/879479119.github.io/issues/5)
* [ ] [使用webpack4提升180%编译速度](http://louiszhai.github.io/2019/01/04/webpack4)
* [ ] [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)
* [ ] [轻松理解webpack热更新原理](https://mp.weixin.qq.com/s/2L9Y0pdwTTmd8U2kXHFlPA)
* [ ] [轻松理解webpack热更新原理](https://juejin.im/post/5de0cfe46fb9a071665d3df0)
* [ ] [揭秘webpack plugin](https://champyin.com/2020/01/12/%E6%8F%AD%E7%A7%98webpack-plugin/)
* [ ] [Webpack 源码（一）—— Tapable 和 事件流](https://segmentfault.com/a/1190000008060440)
* [ ] [手把手教你撸一个 Webpack Loader](https://juejin.im/post/6844903555673882632)
* [ ] [Write Better JavaScript With Webpack](https://forestry.io/blog/write-better-javascript-with-webpack/)
* [ ] [手把手教你撸一个简易的 webpack](https://juejin.im/post/6844903555673882632)
* [ ] [带你走进webpack世界，成为webpack头号玩家](https://juejin.im/post/6844903588607557639)
* [ ] [webpack打包之后的文件过大的解决方法](https://juejin.im/post/6844903569917739021)
* [ ] [webpack详解](https://juejin.im/post/6844903573675835400)
* [ ] [webpack4-用之初体验，一起敲它十一遍](https://juejin.im/post/6844903599080734728)
* [ ] [基于Webpack搭建React开发环境](https://juejin.im/post/6844903606743744526)
* [ ] [webpack 中那些最易混淆的 5 个知识点](https://juejin.im/post/6844904007362674701)
* [ ] [关于webpack4的14个知识点,童叟无欺](https://juejin.im/post/6844903853905674248)

### <a name="chapter-eight-three" id="chapter-eight-three"></a>8.3 Webpack 性能优化

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

### <a name="chapter-eight-four" id="chapter-eight-four"></a>8.4 tree shaking

> [返回目录](#chapter-one)

* [x] [tree shaking - Webpack 5.0.0-rc.0](https://webpack.docschina.org/guides/tree-shaking/)【阅读建议：仅供参考】
* [x] [Webpack 4 Tree Shaking 终极优化指南](https://www.cnblogs.com/lzkwin/p/11878509.html)【阅读建议：30min】
* [x] [Tree-Shaking性能优化实践 - 原理篇 - 2018](https://juejin.im/post/6844903544756109319)【阅读建议：仅供参考】
* [x] [Webpack4: Tree-shaking 深度解析 - 2019](https://juejin.im/post/6844903777229635598)【阅读建议：仅供参考】

### <a name="chapter-eight-five" id="chapter-eight-five"></a>8.5 懒加载

> [返回目录](#chapter-one)

* [x] [Vue Webpack 打包优化——路由懒加载（按需加载）原理讲解及使用方法说明](https://blog.csdn.net/weixin_44869002/article/details/106288371)【阅读建议：20min】
* [ ] [懒加载 - Webpack v5.0.0-rc.0](https://webpack.docschina.org/guides/lazy-loading/)
* [ ] []()

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
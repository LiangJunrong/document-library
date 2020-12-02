Webpack
===

> Create by **jsliang** on **2020-09-17 15:33:55**  
> Recently revised in **2020-12-03 07:43:59**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Webpack 是什么](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Webpack 核心概念](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 Webpack 构建流程](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 entry](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 output](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 loader](#chapter-eight) |
| &emsp;[8.1 关于文件处理常见的 loader](#chapter-eight-one) |
| &emsp;[8.2 关于语法检查常见 loader](#chapter-eight-two) |
| &emsp;[8.3 关于 HTML 代码处理常见的 loader](#chapter-eight-three) |
| &emsp;[8.4 关于 CSS 代码处理常见的 loader](#chapter-eight-four) |
| &emsp;[8.5 关于 JS 代码处理常见的 loader](#chapter-eight-five) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 plugin](#chapter-night) |
| &emsp;[9.1 常见 plugin](#chapter-night-one) |
| &emsp;[9.2 提高效率的 plugin](#chapter-night-two) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 loader 和 plugin 的区别](#chapter-ten) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 resolve](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 从 0 开始配置 Webpack](#chapter-twelve) |
| &emsp;[12.1 技术选型](#chapter-twelve-one) |
| &emsp;[12.2 Loader 配置 - 处理 CSS、Less](#chapter-twelve-two) |
| &emsp;[12.3 Loader 配置 - 处理图片](#chapter-twelve-three) |
| &emsp;[12.4 Loader 配置 - 处理字体](#chapter-twelve-four) |
| &emsp;[12.5 Loader 配置 - MPA 多页面打包通用方案](#chapter-twelve-five) |
| &emsp;[12.6 SourceMap](#chapter-twelve-six) |
| &emsp;[12.7 WebpackDevServer](#chapter-twelve-seven) |
| &emsp;[12.8 babel 解析](#chapter-twelve-eight) |
| &emsp;[12.9 React](#chapter-twelve-night) |
| &emsp;[12.10 性能优化](#chapter-twelve-ten) |
| &emsp;[12.11 其他](#chapter-twelve-eleven) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 知识补充：懒加载](#chapter-thirteen) |
| &emsp;[13.1 代码分割](#chapter-thirteen-one) |
| &emsp;[13.2 实现原理](#chapter-thirteen-two) |
| &emsp;[13.3 Vue 按需加载](#chapter-thirteen-three) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 知识补充：热更新](#chapter-fourteen) |
| &emsp;[14.1 开启热更新](#chapter-fourteen-one) |
| &emsp;[14.2 热更新原理](#chapter-fourteen-two) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 知识补充：3 种 hash](#chapter-fifteen) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 知识补充：source map](#chapter-sixteen) |
| <a name="catalog-chapter-seventeen" id="catalog-chapter-seventeen"></a>[十七 知识补充：Webpack 打包原理](#chapter-seventeen) |
| <a name="catalog-chapter-eighteen" id="catalog-chapter-eighteen"></a>[十八 参考文献](#chapter-eighteen) |
| &emsp;[18.1 Webpack 系列文章](#chapter-eighteen-one) |
| &emsp;[18.2 Webpack 性能优化](#chapter-eighteen-two) |
| &emsp;[18.3 Scope Hoisting](#chapter-eighteen-three) |
| &emsp;[18.4 Tree Shaking](#chapter-eighteen-four) |
| &emsp;[18.5 懒加载](#chapter-eighteen-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

都 2020 了，不会点 Webpack 好像有点说不过去。

但是事实上如果不是分配到【架构组】之类的团体中，感觉接触 Webpack 的概率会少点吧。

就好比 **jsliang** 在上家公司，就没机会接触 Webpack，都是用这别人已经配置好的方案，纯粹做一个业务仔~

## <a name="chapter-three" id="chapter-three"></a>三 Webpack 是什么

> [返回目录](#chapter-one)

Webpack 是一个现代 JavaScript 应用程序的静态模块打包器（`module bundler`）。

当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图（`dependency graph`），其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 `bundle`。

所以，它的本质是一个模块打包器，其工作是将每个模块打包成相应的 `bundle`。

## <a name="chapter-four" id="chapter-four"></a>四 Webpack 核心概念

> [返回目录](#chapter-one)

* `mode`：模式。对应有开发模式、生产模式等
* `entry`：入口
* `output`：出口
* `loader`：模块转换器，用于把模块原内容按照需求转换成新内容。Webpack 对于 `.jpg`、`.txt` 等内容无法处理，就需要 `file-loader`、`url-loader` 等进行协助处理。
* `plugins`：扩展插件，在 Webpack 构建流程中的特定时机注入拓展逻辑来改变构建结果或者做其他你想做的事情。

## <a name="chapter-five" id="chapter-five"></a>五 Webpack 构建流程

> [返回目录](#chapter-one)

Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。

这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 

`Webpack` 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

* **初始化参数**：从配置文件和 `Shell` 语句中读取与合并参数，得出最终的参数
* **开始编译**：用上一步得到的参数初始化 `Compiler` 对象，加载所有配置的插件，执行对象的 `run` 方法开始执行编译
* **确定入口**：根据配置中的 `entry` 找出所有的入口文件
* **编译模块**：从入口文件出发，调用所有配置的 `Loader` 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
* **完成模块编译**：在经过第 4 步使用 `Loader` 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
* **输出资源**：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 `Chunk`，再把每个 `Chunk` 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
* **输出完成**：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

简单来说：

* **初始化**：启动构建，读取与合并配置参数，加载 `Plugin`，实例化 `Compiler`（钩子）
* **编译**：从 `Entry` 出发，针对每个 `Module`（模块）串行调用对应的 `Loader` 去翻译文件的内容，再找到该 `Module` 依赖的 `Module`，递归地进行编译处理
* **输出**：将编译后的 `Module` 组合成 `Chunk`，将 `Chunk` 转换成文件，输出到文件系统中（`Chunk` 就是打包过程中，入口模块引用其他模块，模块再引用模块，这个关系链连接的 `Module` 就形成了 `Chunk`）

在这个过程中，`Webpack` 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 `Webpack` 提供的 `API` 改变 `Webpack` 的运行结果。

## <a name="chapter-six" id="chapter-six"></a>六 entry

> [返回目录](#chapter-one)

指定打包⼊口文件，有三种不同的形式：`string | object | array`。

一对一：一个入口、一个打包文件

```js
module.exports = {
  entry: './src/index.js'
}
```

多对一：多个入口、一个打包文件

```js
module.exports = {
  entry: [
    './src/index1.js',
    './src/index2.js',
  ]
}
```

多对多：多个入口、多打包文件

```js
module.exports = {
  entry: {
    'index1': "./src/index1.js",
    'index2': "./src/index2.js"
  }
}
```

## <a name="chapter-seven" id="chapter-seven"></a>七 output

> [返回目录](#chapter-one)

打包后的文件位置。

```js
module.exports = {
  ...,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    filename: "[name].js"
  }
}
```

* 可以指定一个固定的文件名称，如果是多入口多出口（`entry` 为对象），则不能使用单文件出口，需要使用下面的方式
* 通过 `Webpack` 内置的变量占位符：`[name]`

## <a name="chapter-eight" id="chapter-eight"></a>八 loader

> [返回目录](#chapter-one)

`loader` 的执行顺序是从右向左执行的，也就是后面的 `loader` 先执行。

假如有配置：

```js
// webpack.config.js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
```

那就是先处理 `less-loader`，再处理 `css-loader`，最后处理 `style-loader`。

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 关于文件处理常见的 loader

> [返回目录](#chapter-one)

* `file-loader`：当引入的文件是 `.png`、`.txt` 等时，可以通过 `file-loader` 解析项目中的 `url` 引入。根据配置将文件拷贝到相应的路径，并修改打包后文件的引入路径，让它指向正确的文件。
* `url-loader`：`url-loader` 封装了 `file-loader` 且可以不依赖于 `file-loader` 单独使用，并且可以配置 `limit`。对小于 `limit` 大小的图片转换成 `Base64`，大于 `limit` 的时候使用 `file-loader` 里的方法。

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 关于语法检查常见 loader

> [返回目录](#chapter-one)

* `tslint-loader`：通过 TSLint 检查 TypeScript 代码
* `eslint-loader`：通过 ESLint 检查 JavaScript 代码

### <a name="chapter-eight-three" id="chapter-eight-three"></a>8.3 关于 HTML 代码处理常见的 loader

> [返回目录](#chapter-one)

* `html-withimg-loader`：处理 HTML 中的图片

### <a name="chapter-eight-four" id="chapter-eight-four"></a>8.4 关于 CSS 代码处理常见的 loader

> [返回目录](#chapter-one)

* `style-loader`：动态创建 `style` 标签，将 CSS 代码插入到 `head` 中。
* `css-loader`：负责处理 `@import`、`url` 等语句。例如 `import css from 'file.css'`、`url(image.png)`。
* `postcss-loader`：负责进一步处理 CSS 文件，比如添加浏览器前缀，压缩 CSS 等。
* `less-loader`：将 `.less` 文件内容转换成 CSS。
* `sass-loader`：将 `.sass` 文件内容转换成 CSS。

### <a name="chapter-eight-five" id="chapter-eight-five"></a>8.5 关于 JS 代码处理常见的 loader

> [返回目录](#chapter-one)

* `babel-loader`：将 JS 代码向低版本转换，我们需要使用 `babel-loader`。
* `ts-loader`：将 TypeScript 转换成 JavaScript

## <a name="chapter-night" id="chapter-night"></a>九 plugin

> [返回目录](#chapter-one)

### <a name="chapter-night-one" id="chapter-night-one"></a>9.1 常见 plugin

> [返回目录](#chapter-one)

* `clean-webpack-plugin`：打包前自动清理 `dist` 目录，防止文件残留。
* `copy-webpack-plugin`：将单个文件或者整个目录复制到构建目录
* `mini-css-extract-plugin`：将 CSS 抽离出来单独打包并且通过配置可以设置是否压缩。
* `html-webpack-plugin`：这个插件可以配置生成一个 HTML5 文件，其中 `script` 标签包含所有 Webpack 包。如果你设置多个入口点，你可以据此实现多页面应用打包。

### <a name="chapter-night-two" id="chapter-night-two"></a>9.2 提高效率的 plugin

> [返回目录](#chapter-one)

* `webpack-dashboard`：可以更友好的展示相关打包信息。
* `webpack-merge`：提取公共配置，减少重复配置代码
* `speed-measure-webpack-plugin`：简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈。
* `size-plugin`：监控资源体积变化，尽早发现问题
* `HotModuleReplacementPlugin`：模块热替换

## <a name="chapter-ten" id="chapter-ten"></a>十 loader 和 plugin 的区别

> [返回目录](#chapter-one)

* `Loader`

`Loader` 本质上就是一个函数，对接收到的内容进行转换，返回转换后的结果。

因为 `Webpack` 只认识 JavaScript，所以 `Loader` 就成了翻译官，对不同类型的资源进行处理。

就好比 `file-loader` 或者 `url-loader`，配置之后就可以正确引用 `png` 等格式的图片、`txt` 等格式文件。

又好比 `style-loader` 以及 `css-loader`，引用后就可以对 CSS 内容进行预编译处理。

* `Plugin`

`Plugin` 就是插件，就好比 **jsliang** 编写的 VS Code 插件一样，`Plugin` 拓展了 `Webpack` 的功能。

`Plugin` 就是在 `Webpack` 的生命周期中进行各种操作，从而达到使用者目的插件。

就好比 `html-webpack-plugin`，配合多入口形式使用之后，就可以实现多页面应用的功能。

又好比 `clean-webpack-plugin` 实现打包之前清空 `dist` 目录，`copy-webpack-plugin` 可以将单个文件或者整个目录复制到构建目录。

## <a name="chapter-eleven" id="chapter-eleven"></a>十一 resolve

> [返回目录](#chapter-one)

`resolve` 配置 Webpack 如何寻找模块所对应的文件。

Webpack 内置 JavaScript 模块化语法解析功能，默认会采用模块化标准里约定好的规则去寻找，但你可以根据自己的需要修改默认的规则。

```js
// webpack.config.js
module.exports = {
  //....
  resolve: {
    modules: ['./src/components', 'node_modules'] // 从左到右依次查找
  }
}
```

* `resolve.modules`：配置 Webpack 去哪些目录下寻找第三方模块，默认情况下，只会去 `node_modules` 下寻找，如果你在项目中某个文件夹下的模块经常被导入，不希望写很长的路径，那么就可以通过配置 `resolve.modules` 来简化。
* `resolve.alias`：配置项通过别名把原导入路径映射成一个新的导入路径。
* `resolve.extensions`：适配多端的项目中，可能会出现 `.web.js`, `.wx.js`，例如在转 Web 的项目中，我们希望首先找 `.web.js`，如果没有，再找 `.js`。`extensions: ['web.js', '.js']`。

## <a name="chapter-twelve" id="chapter-twelve"></a>十二 从 0 开始配置 Webpack

> [返回目录](#chapter-one)

如何从 0 开始配置一个属于自己的 Webpack 脚手架呢？那就涉及到选型问题。

### <a name="chapter-twelve-one" id="chapter-twelve-one"></a>12.1 技术选型

> [返回目录](#chapter-one)

* 移动端 || PC
* MPA || SPA
* HTML || 模板引擎
* CSS || 预处理器
* JavaScript ES5 || ES6
* 本地发布服务（数据模拟）
* React || Vue
* 多人项目 || 单人项目
* 语法规范 Eslint
* 单元测试
* 提交规范

### <a name="chapter-twelve-two" id="chapter-twelve-two"></a>12.2 Loader 配置 - 处理 CSS、Less

> [返回目录](#chapter-one)

* use: `['style-loader', 'css-loader', 'postcss-loader', 'less-loader']`
* `less less-loader`：解析 `.less` 文件
* `postcss-loader autoprefixer`：对 `flex` 布局等进行前缀补充

### <a name="chapter-twelve-three" id="chapter-twelve-three"></a>12.3 Loader 配置 - 处理图片

> [返回目录](#chapter-one)

* `file-loader`：解析 `.txt`、`.png`、`.md` 等格式文件
* `url-loader`：`limit: 1024`，判断大小是否处理成 `base64` 格式

### <a name="chapter-twelve-four" id="chapter-twelve-four"></a>12.4 Loader 配置 - 处理字体

> [返回目录](#chapter-one)

* `url-loader`

### <a name="chapter-twelve-five" id="chapter-twelve-five"></a>12.5 Loader 配置 - MPA 多页面打包通用方案

> [返回目录](#chapter-one)

* 安装 `glob`
* 将 `entry` 和 `htmlwebpackplugin` 动态生成

### <a name="chapter-twelve-six" id="chapter-twelve-six"></a>12.6 SourceMap

> [返回目录](#chapter-one)

* 开发环境配置：`devtool: "cheap-module-eval-source-map`
* 线上生成配置（不推荐）：`devtool: "cheap-module-source-map"`

### <a name="chapter-twelve-seven" id="chapter-twelve-seven"></a>12.7 WebpackDevServer

> [返回目录](#chapter-one)

* 安装
* 配置：`devServer`
* `HMR`（热模块替换，Hot Module Replacement）
* 开启 JS 模块的 `HMR`，需要 `Webpack` 配合

### <a name="chapter-twelve-eight" id="chapter-twelve-eight"></a>12.8 babel 解析

> [返回目录](#chapter-one)

* 安装：`npm i babel-loader @babel/core @babel-preset-env -D`
  * `@babel/core`：`babel` 核心
  * `babel-loader`：`babel` 和 `Webpack` 的连接桥梁
  * `babel-preset-env`：输出什么样的代码，用它来解决
* `babel-loader`：解析 ES6+
* `@babel/polyfill`：垫片。包含所有 ES6+ 新特性代码
* `.babelrc`

### <a name="chapter-twelve-night" id="chapter-twelve-night"></a>12.9 React

> [返回目录](#chapter-one)

* 安装：`react react-dom`
* 使用：`@babel/preset-react`

### <a name="chapter-twelve-ten" id="chapter-twelve-ten"></a>12.10 性能优化

> [返回目录](#chapter-one)

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

更多看这里：

[Webpack 性能优化](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%20%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md)

### <a name="chapter-twelve-eleven" id="chapter-twelve-eleven"></a>12.11 其他

> [返回目录](#chapter-one)

* 如何简单编写一个 `Webpack` 解析器
* 如何编写一个 `Webpack loader`
* 如何编写一个 `Webpack plugin`

## <a name="chapter-thirteen" id="chapter-thirteen"></a>十三 知识补充：懒加载

> [返回目录](#chapter-one)

懒加载或者按需加载，是一种很好的优化网页或应用的方式。

这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。

这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

### <a name="chapter-thirteen-one" id="chapter-thirteen-one"></a>13.1 代码分割

> [返回目录](#chapter-one)

代码分割（`code splitting`）是指：将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程。

在 Webpack 构建时，会避免加载已声明要异步加载的代码，异步代码会被单独分离出一个文件，当代码实际调用时被加载至页面。

代码分割技术的核心是 **异步加载资源**。

可喜的是，浏览器允许我们这么做，W3C `stage 3` 规范： [whatwg/loader](https://whatwg.github.io/loader/) 对其进行了定义：你可以通过 `import()` 关键字让浏览器在程序执行时异步加载相关资源。

在 Vue 中，可以直接使用 `import()` 关键字做到这一点，而在 React 中，你需要使用 `react-loadable` 去完成同样的事。

### <a name="chapter-thirteen-two" id="chapter-thirteen-two"></a>13.2 实现原理

> [返回目录](#chapter-one)

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
btn.onclick = import('./print.js').then((module) => {
  const print = module.default;
  print();
});
```

### <a name="chapter-thirteen-three" id="chapter-thirteen-three"></a>13.3 Vue 按需加载

> [返回目录](#chapter-one)

Vue 的特点就是 SPA - Single Page Application（单页应用程序）。

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

## <a name="chapter-fourteen" id="chapter-fourteen"></a>十四 知识补充：热更新

> [返回目录](#chapter-one)

刷新我们一般分为两种：

* 一种是页面刷新，不保留页面状态，就是简单粗暴，直接 `window.location.reload()`。
* 另一种是基于 `WDS`（`Webpack-dev-server`）的模块热替换，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态，比如复选框的选中状态、输入框的输入等。

`Webpack` 的热更新又称热替换（`Hot Module Replacement`），缩写为 `HMR`。

这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

### <a name="chapter-fourteen-one" id="chapter-fourteen-one"></a>14.1 开启热更新

> [返回目录](#chapter-one)

在 Webpack 的 `webpack.config.js` 中：

1. 配置 `devServer` 的 `hot` 为 `true`
2. 在 `plugins` 中增加 `new webpack.HotModuleReplacementPlugin()`

```js
// webpack.config.js
const webpack = require('webpack');
module.exports = {
  //....
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}
```

并且在入口文件配置：

```js
if(module && module.hot) {
  module.hot.accept()
}
```

此时修改代码的时候，只有对应部分的内容才会相应更新。

### <a name="chapter-fourteen-two" id="chapter-fourteen-two"></a>14.2 热更新原理

> [返回目录](#chapter-one)

`HMR` 的核心就是客户端从服务端拉去更新后的文件，准确的说是 `chunk diff`（`chunk` 需要更新的部分）。

实际上 `webpack-dev-server`（`WDS`）与浏览器之间维护了一个 `Websocket`，当本地资源发生变化时，`WDS` 会向浏览器推送更新，并带上构建时的 `hash`，让客户端与上一次资源进行对比。

客户端对比出差异后会向 `WDS` 发起 `Ajax` 请求来获取更改内容（文件列表、`hash`），这样客户端就可以再借助这些信息继续向 `WDS` 发起 `jsonp` 请求获取该 `chunk` 的增量更新。

后续的部分（拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？）由 `HotModulePlugin` 来完成，提供了相关 `API` 以供开发者针对自身场景进行处理，像 `react-hot-loader` 和 `vue-loader` 都是借助这些 `API` 实现 `HMR`。

## <a name="chapter-fifteen" id="chapter-fifteen"></a>十五 知识补充：3 种 hash

> [返回目录](#chapter-one)

文件指纹是打包后输出的文件名的后缀，对应着 3 种 `hash`。

* `hash` 是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 `hash` 值都会更改，并且全部文件都共用相同的 `hash` 值。（粒度整个项目）
* `chunkhash` 是根据不同的入口进行依赖文件解析，构建对应的 `chunk`（模块），生成对应的 `hash` 值。只有被修改的 `chunk`（模块）在重新构建之后才会生成新的 `hash` 值，不会影响其它的 `chunk`。（粒度 `entry` 的每个入口文件）
* `contenthash` 是跟每个生成的文件有关，每个文件都有一个唯一的 `hash` 值。当要构建的文件内容发生改变时，就会生成新的 `hash` 值，且该文件的改变并不会影响和它同一个模块下的其它文件。（粒度每个文件的内容）

## <a name="chapter-sixteen" id="chapter-sixteen"></a>十六 知识补充：source map

> [返回目录](#chapter-one)

`source map` 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 `soucre map`。

`map` 文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：

* `hidden-source-map`：借助第三方错误监控平台 `Sentry` 使用
* `nosources-source-map`：只会显示具体行数以及查看源代码的错误栈。安全性比 `source map` 高
* `source map`：通过 `nginx` 设置将 `.map` 文件只对白名单开放（公司内网）

注意：避免在生产中使用 `inline-` 和 `eval-`，因为它们会增加 `bundle` 体积大小，并降低整体性能。

## <a name="chapter-seventeen" id="chapter-seventeen"></a>十七 知识补充：Webpack 打包原理

> [返回目录](#chapter-one)

* [Webpack 简单实现](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack%20%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0.md)

在 Webpack 简单实现中，简单的做了下如何将一份代码进行打包：

1. 利用 `babel` 完成代码转换，并生成单个文件的依赖
2. 生成依赖图谱
3. 生成最后打包代码

## <a name="chapter-eighteen" id="chapter-eighteen"></a>十八 参考文献

> [返回目录](#chapter-one)

本系列参考文献有 51 篇文章。

### <a name="chapter-eighteen-one" id="chapter-eighteen-one"></a>18.1 Webpack 系列文章

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

### <a name="chapter-eighteen-two" id="chapter-eighteen-two"></a>18.2 Webpack 性能优化

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

### <a name="chapter-eighteen-three" id="chapter-eighteen-three"></a>18.3 Scope Hoisting

> [返回目录](#chapter-one)

* [x] [webpack 的 scope hoisting 是什么？](https://ssshooter.com/2019-02-20-webpack-scope-hoisting/)【阅读建议：5min】
* [x] [通过Scope Hoisting优化Webpack输出](https://imweb.io/topic/5a43064fa192c3b460fce360)【阅读建议：5min】
* [x] [【Webpack】654- 了不起的 Webpack Scope Hoisting 学习指南](https://cloud.tencent.com/developer/article/1663231)【阅读建议：5min】

### <a name="chapter-eighteen-four" id="chapter-eighteen-four"></a>18.4 Tree Shaking

> [返回目录](#chapter-one)

* [x] [Tree Shaking - Webpack 5.0.0-rc.0](https://webpack.docschina.org/guides/tree-shaking/)【阅读建议：仅供参考】
* [x] [Webpack 4 Tree Shaking 终极优化指南](https://www.cnblogs.com/lzkwin/p/11878509.html)【阅读建议：30min】
* [x] [Tree-Shaking性能优化实践 - 原理篇 - 2018](https://juejin.im/post/6844903544756109319)【阅读建议：仅供参考】
* [x] [Webpack4: Tree-shaking 深度解析 - 2019](https://juejin.im/post/6844903777229635598)【阅读建议：仅供参考】

### <a name="chapter-eighteen-five" id="chapter-eighteen-five"></a>18.5 懒加载

> [返回目录](#chapter-one)

* [x] [Vue Webpack 打包优化——路由懒加载（按需加载）原理讲解及使用方法说明](https://blog.csdn.net/weixin_44869002/article/details/106288371)【阅读建议：20min】
* [x] [懒加载 - Webpack v5.0.0-rc.0](https://webpack.docschina.org/guides/lazy-loading/)【阅读建议：5min】
* [x] [webpack的代码分割（路由懒加载同理）](https://juejin.im/post/5e796ec1e51d45271e2a9af9)【阅读建议：10min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

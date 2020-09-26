Webpack
===

> Create by **jsliang** on **2020-09-17 15:33:55**  
> Recently revised in **2020-09-26 03:16:03**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
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
  * HMR（热模块替换，Hot Module Replacement）

最好自己搭建一个 然后效果是最好的 tree-shaking 热更新 webpack 工作流 scope-hoisting 这些原理 都经常问到

### 官方文档

* [ ] [Webpack 中文文档](https://webpack.docschina.org/concepts/)

### 整理文档

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

**tree shaking**：

* [x] [tree shaking - Webpack 5.0.0-rc.0](https://webpack.docschina.org/guides/tree-shaking/)【阅读建议：仅供参考】
* [x] [Webpack 4 Tree Shaking 终极优化指南](https://www.cnblogs.com/lzkwin/p/11878509.html)【阅读建议：30min】
* [x] [Tree-Shaking性能优化实践 - 原理篇 - 2018](https://juejin.im/post/6844903544756109319)【阅读建议：仅供参考】
* [x] [Webpack4: Tree-shaking 深度解析 - 2019](https://juejin.im/post/6844903777229635598)【阅读建议：仅供参考】

**懒加载**：

* [x] [Vue Webpack 打包优化——路由懒加载（按需加载）原理讲解及使用方法说明](https://blog.csdn.net/weixin_44869002/article/details/106288371)【阅读建议：20min】
* [ ] [懒加载 - Webpack v5.0.0-rc.0](https://webpack.docschina.org/guides/lazy-loading/)
* [ ] []()

## AST

比如 `if(false){}` 编译成 AST 代码 我们是知道这段不执行的 就删除这个语法

babel 编译 es6 成 es5 原理就是 a+c=c 编译成 c 我可以删除 +b 这段代码，就是利用AST

* [AST Explorer](https://astexplorer.net/)

## webpack 优化

* 升级 webpack 啊
* happypack
* 优化一些 chunk 的配置，配置一些插件

## tree shaking

`tree shaking` 是 Webpack 内置的一个优化，主要功能是移除 JavaScript 上下文中的未引用代码（`dead-code`）。

因为 JavaScript 大多数文件是要通过网络引用加载的，加载的文件越小，性能越好，所以 `tree shaking` 对于优化 JavaScript 很有意义。

你可以将引用程序想象成一棵树，然后里面有枯死的树叶和新鲜的树叶，你摇动它，枯死的树叶纷纷落下，你就看到一棵生机盎然的树。

* **什么是 `dead-code`？**

1. 代码不会被执行
2. 代码执行结果不会被用到
3. 代码只会影响死变量

即 JavaScript 上下文中的未引用代码（无用的，死的代码）。

举个例子：

> project category

```
webpack-demo
 |- index.js
 |- main.js
```

> main.js

```js
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```

> index.js

```js
import { cube } from './main.js';

const result = cube(5);
const p = document.querySelector('.p');
p.innerHTML = result;
```

在这里，我们并没有引用方法 `square`，所以整体来说 `square` 是未引用代码（`dead-code`），但是 Webpack 打包的时候会将 `square` 导出到 `bundle` 中。

* **什么是副作用？**

副作用是指：在导入时会执行特殊行为的代码，而不是仅仅暴露一个 `export` 或者多个 `export`。

举个例子：`polyfill` 它影响全局作用域，并且通常不提供 `export`。

* **如何做到 `tree shaking`？**

在 Webpack 中，做到 `tree shaking` 的方法就是将一些文件标明为无副作用，这样就可以告知 Webpack 它可以安全地删除未用到的 `export` 导出。

> package.json

```json
{
  "name": "jsliang-project",
  "sideEffects": false
}
```

像上面，通过在 `package.json` 中定义 `sideEffects` 属性，就可以将文件标记为无副作用。

当然，如果有些文件你怕它有副作用，那就告知 Webpack 其中某些文件不需要标记：

> package.json

```json
{
  "name": "jsliang-project",
  "sideEffects": [
    "./src/math.js",
    "*.css*",
  ]
}
```

这里可以通过一个数组，数组支持 **相关文件的相对路径、绝对路径和 `glob` 模式**。

这样，我们就找出了 未使用代码（`dead-code`），但是正如上面所说，只是告知，并没有删除。

如果我们需要在 `bundle` 中删除它们，就需要使用 `-p`（`production`）这个 Webpack 编译标记，来启用 `uglifyjs` 压缩插件。

> 注意：`--optimize-minimize` 标记也会在 Webpack 内部调用 `UglifyJSPlugin`。

> webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production"
};
```

* **总结**

为了达到 `tree shaking` 的作用，你需要：

1. 使用 ES6 的模板语法 `import` 和 `export`。
2. 在项目 `package.json` 文件中，添加 `sideEffects` 入口。
3. 引入一个能够删除未引用代码（`dead-code`）的压缩工具（例如 `UglifyJSPlugin`）

* **提问 1：为什么可以实现 tree shaking？**

ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 `tree shaking` 的基础。

所谓的 **静态分析**，就是不执行代码，从字面量上对代码进行分析，ES6 之前的模块化，比如我们可以动态 `require` 一个模块，只有执行后才知道引用的什么模块，这个就不能通过静态分析去做优化。

```js
// demo.js
export const a = 'a';
export const b = 'b';

// test.js
import { a } from './demo.js';

// 以上代码不运行，仅仅经过扫描分析，抛弃了 const b，代码缩减了 size
// 这就是 tree shaking 的静态分析基本原理：有引用就保留，没有引用就抛弃
```

所以为啥 CommonJS 不能 `tree shaking` 就是这个缘故。

* **提问 2：下面哪种情况会 `tree shaking`？**

```js
// 全部导入
import _ from 'lodash';

// 具名导入
import { debounce } from 'lodash';

// 直接导入具体模块
import debounce from 'lodash/lib/debounce';
```

上面导入中：**全部导入** 是不支持 `tree shaking` 的，其他都支持。

为什么呢？因为当你将整个库导入到单个 JavaScript 对象中时，就意味着你告诉 Webpack，你需要整个库，这样 Webpack 就不会摇它。

## 懒加载

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

## 知识点 1：Webpack 几种 hash 的实现原理

* `hash` 是跟整个项目的构建相关，只要项目里有文件更改，整个项目构建的 `hash` 值都会更改，并且全部文件都共用相同的 `hash` 值。（粒度整个项目）
* `chunkhash` 是根据不同的入口进行依赖文件解析，构建对应的 `chunk`（模块），生成对应的 `hash` 值。只有被修改的 `chunk`（模块）在重新构建之后才会生成新的 `hash` 值，不会影响其它的 `chunk`。（粒度 `entry` 的每个入口文件）
* `contenthash` 是跟每个生成的文件有关，每个文件都有一个唯一的 `hash` 值。当要构建的文件内容发生改变时，就会生成新的 `hash` 值，且该文件的改变并不会影响和它同一个模块下的其它文件。（粒度每个文件的内容）
---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
Webpack - Tree Shaking
===

> Create by **jsliang** on **2020-09-27 11:20:24**  
> Recently revised in **2020-12-05 14:27:41**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 什么是 `dead-code`？](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 什么是副作用？](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 如何做到 `Tree Shaking`？](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 总结](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 其他问题](#chapter-seven) |
| &emsp;[7.1 提问 1：为什么可以实现 Tree Shaking？](#chapter-seven-one) |
| &emsp;[7.2 提问 2：下面哪种情况会 Tree Shaking？](#chapter-seven-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)
    
`Tree Shaking` 是 `Webpack` 内置的一个优化，主要功能是移除 JavaScript 上下文中的未引用代码（`dead-code`）。

因为 JavaScript 大多数文件是要通过网络引用加载的，加载的文件越小，性能越好，所以 `Tree Shaking` 对于优化 JavaScript 很有意义。

你可以将引用程序想象成一棵树，然后里面有枯死的树叶和新鲜的树叶，你摇动它，枯死的树叶纷纷落下，你就看到一棵生机盎然的树。

## <a name="chapter-three" id="chapter-three"></a>三 什么是 `dead-code`？

> [返回目录](#chapter-one)
    
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

## <a name="chapter-four" id="chapter-four"></a>四 什么是副作用？

> [返回目录](#chapter-one)
    
副作用是指：在导入时会执行特殊行为的代码，而不是仅仅暴露一个 `export` 或者多个 `export`。

举个例子：`polyfill` 它影响全局作用域，并且通常不提供 `export`。

## <a name="chapter-five" id="chapter-five"></a>五 如何做到 `Tree Shaking`？

> [返回目录](#chapter-one)
    
在 Webpack 中，做到 `Tree Shaking` 的方法就是将一些文件标明为无副作用，这样就可以告知 Webpack 它可以安全地删除未用到的 `export` 导出。

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

这样，我们就找出了 **未使用代码**（`dead-code`）。

但是正如上面所说，只是告知，并没有删除。

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

## <a name="chapter-six" id="chapter-six"></a>六 总结

> [返回目录](#chapter-one)
    
为了达到 `Tree Shaking` 的作用，你需要：

1. 使用 ES6 的模板语法 `import` 和 `export`。
2. 在项目 `package.json` 文件中，添加 `sideEffects` 入口。
3. 引入一个能够删除未引用代码（`dead-code`）的压缩工具（例如 `UglifyJSPlugin`）

## <a name="chapter-seven" id="chapter-seven"></a>七 其他问题

> [返回目录](#chapter-one)
    
### <a name="chapter-seven-one" id="chapter-seven-one"></a>7.1 提问 1：为什么可以实现 Tree Shaking？

> [返回目录](#chapter-one)
    
ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 `Tree Shaking` 的基础。

所谓的 **静态分析**，就是不执行代码，从字面量上对代码进行分析，ES6 之前的模块化，比如我们可以动态 `require` 一个模块，只有执行后才知道引用的什么模块，这个就不能通过静态分析去做优化。

```js
// demo.js
export const a = 'a';
export const b = 'b';

// test.js
import { a } from './demo.js';

// 以上代码不运行，仅仅经过扫描分析，抛弃了 const b，代码缩减了 size
// 这就是 Tree Shaking 的静态分析基本原理：有引用就保留，没有引用就抛弃
```

所以为啥 CommonJS 不能 `Tree Shaking` 就是这个缘故。

### <a name="chapter-seven-two" id="chapter-seven-two"></a>7.2 提问 2：下面哪种情况会 Tree Shaking？

> [返回目录](#chapter-one)
    
```js
// 全部导入
import _ from 'lodash';

// 具名导入
import { debounce } from 'lodash';

// 直接导入具体模块
import debounce from 'lodash/lib/debounce';
```

上面导入中：第一种的 **全部导入** 是不支持 `Tree Shaking` 的，其他都支持。

为什么呢？因为当你将整个库导入到单个 JavaScript 对象中时，就意味着你告诉 Webpack，你需要整个库，这样 Webpack 就不会摇它。

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

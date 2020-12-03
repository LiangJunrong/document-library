Webpack 简单实现
===

> Create by **jsliang** on **2020-10-20 15:24:02**  
> Recently revised in **2020-12-04 07:43:26**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 第一步 转换代码、生成依赖](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 第二步 生成依赖图谱](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 第三步 生成代码字符串](#chapter-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

参考文章：[实现一个简单的Webpack](https://juejin.im/post/6844903858179670030)

Webpack 的本质就是一个模块打包器，工作就是将每个模块打包成相应的 `bundle`。

**首先**，我们需要准备目录：

```
+ 项目根路径 || 文件夹
  - index.js      - 主入口
  - message.js    - 主入口依赖文件
  - word.js       - 主入口依赖文件的依赖文件
  - bundler.js    - 打包器
  - bundle.js     - 打包后存放代码的文件
```

最终的项目地址：[all-for-one - 031-手写 Webpack](https://github.com/LiangJunrong/all-for-one)

如果小伙伴懒得敲，那可以看上面仓库的最终代码。

**然后**，我们 `index.js`、`message.js`、`word.js` 内容如下：

> index.js

```js
// index.js
import message from "./message.js";
console.log(message);
```

> message.js

```js
// message.js
import { word } from "./word.js";
const message = `say ${word}`;
export default message;
```

> word.js

```js
// word.js
export const word = "hello";
```

**最后**，我们实现一个 `bundler.js` 文件，将 `index.js` 当成入口，将里面牵扯的文件都转义并执行即可！

实现思路：

1. 利用 `babel` 完成代码转换，并生成单个文件的依赖
2. 生成依赖图谱
3. 生成最后打包代码

下面分 3 章尝试这个内容。

## <a name="chapter-three" id="chapter-three"></a>三 第一步 转换代码、生成依赖

> [返回目录](#chapter-one)

这一步需要利用 `babel` 帮助我们进行转换，所以先装包：

```shell
npm i @babel/parser @babel/traverse @babel/core @babel/preset-env -D
```

转换代码需要：

1. 利用 `@babel/parser` 生成 AST 抽象语法树
2. 利用 `@babel/traverse` 进行 AST 遍历，记录依赖关系
3. 通过 `@babel/core` 和 `@babel/preset-env` 进行代码的转换

然后添加内容：

> bundler.js

```js
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

// 第一步:转换代码、生成依赖
function stepOne(filename) {
  // 读入文件
  const content = fs.readFileSync(filename, "utf-8");
  const ast = parser.parse(content, {
    sourceType: "module", // babel 官方规定必须加这个参数，不然无法识别 ES Module
  });
  const dependencies = {};
  // 遍历 AST 抽象语法树
  traverse(ast, {
    // 获取通过 import 引入的模块
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      const newFile = "./" + path.join(dirname, node.source.value);
      // 保存所依赖的模块
      dependencies[node.source.value] = newFile;
    },
  });
  //通过 @babel/core 和 @babel/preset-env 进行代码的转换
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"],
  });
  return {
    filename, // 该文件名
    dependencies, // 该文件所依赖的模块集合(键值对存储)
    code, // 转换后的代码
  };
}

console.log('--- step one ---');
const one = stepOne('./index.js');
console.log(one);

fs.writeFile('bundle.js', one.code, () => {
  console.log('写入成功');
});
```

通过 Node 的方式运行这段代码：`node bundler.js`：

```
--- step one ---
{
  filename: './index.js',
  dependencies: { './message.js': './message.js' },
  code:`
    "use strict";

    var _message = _interopRequireDefault(require("./message.js"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    // index.js

    console.log(_message["default"]);
`,
}
```

1. 入口 `filename`：`index.js`
2. 依赖 `message.js`
3. 转义代码 `code`

所以 **jsliang** 将 `code` 提取到 `bundle.js` 中进行查看：

> bundler.js

```js
// ...代码省略

fs.writeFile('bundle.js', one.code, () => {
  console.log('写入成功');
});
```

> bundle.js

```js
"use strict";

var _message = _interopRequireDefault(require("./message.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// index.js
console.log(_message["default"]);
```

解读下这个文件内容：

* `use strict`：使用严格模式
* `_interopRequireDefault`：对不符合 `babel` 标准的模块添加 `default` 属性，并指向自身对象以避免 `exports.default` 出错

所以现在这份文件的内容是可以运行的了，但是你运行的时候会报错，报错内容如下：

```
import { word } from "./word.js";
       ^

SyntaxError: Unexpected token {
```

也就是说我们执行到 `message.js`，但是它里面的内容没法运行，因为 `import` 是 `ES6` 内容嘛。

咋整，继续看下面内容。

## <a name="chapter-four" id="chapter-four"></a>四 第二步 生成依赖图谱

> [返回目录](#chapter-one)

既然我们只生成了一份转义后的文件：

```
--- step one ---
{
  filename: './index.js',
  dependencies: { './message.js': './message.js' },
  code:`
    "use strict";

    var _message = _interopRequireDefault(require("./message.js"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    // index.js

    console.log(_message["default"]);
`,
}
```

那么我们可以根据其中的 `dependencies` 进行递归，将整个依赖图谱都找出来：

> bundler.js

```js
// ...省略前面内容

// 第二步：生成依赖图谱
// entry 为入口文件
function stepTwo(entry) {
  const entryModule = stepOne(entry);
  // 这个数组是核心，虽然现在只有一个元素，往后看你就会明白
  const graphArray = [entryModule];
  for (let i = 0; i < graphArray.length; i++) {
    const item = graphArray[i];
    const { dependencies } = item; // 拿到文件所依赖的模块集合(键值对存储)
    for (let j in dependencies) {
      graphArray.push(stepOne(dependencies[j])); // 敲黑板！关键代码，目的是将入口模块及其所有相关的模块放入数组
    }
  }
  // 接下来生成图谱
  const graph = {};
  graphArray.forEach((item) => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code,
    };
  });
  return graph;
}

console.log('--- step two ---');
const two = stepTwo('./index.js');
console.log(two);

let word = '';
for (let i in two) {
  word = word + two[i].code + '\n\n';
}
fs.writeFile('bundle.js', word, () => {
  console.log('写入成功');
});
```

所以当我们 `node bundler.js` 的时候，会打印内容出来：

```
--- step two ---
{
  './index.js': {
    dependencies: { './message.js': './message.js' },
    code: '"use strict";\n\nvar _message = _interopRequireDefault(require("./message.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\n// index.js\nconsole.log(_message["default"]);'
  },
  './message.js': {
    dependencies: { './word.js': './word.js' },
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = void 0;\n\nvar _word = require("./word.js");\n\n// message.js\nvar message = "say ".concat(_word.word);\nvar _default = message;\nexports["default"] = _default;'
  },
  './word.js': {
    dependencies: {},
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.word = void 0;\n// word.js\nvar word = "hello";\nexports.word = word;' 
    }
}
```

可以看到我们将整个依赖关系中的文件都搜索出来，并通过 `babel` 进行了转换，然后 **jsliang** 通过 `Node` 的 `fs` 模块将其写进了 `bundle.js` 中：

> bundler.js

```js
let word = '';
for (let i in two) {
  word = word + two[i].code + '\n\n';
}
fs.writeFile('bundle.js', word, () => {
  console.log('写入成功');
});
```

再来看 `bundle.js` 内容：

> bundle.js

```js
"use strict";

var _message = _interopRequireDefault(require("./message.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// index.js
console.log(_message["default"]);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _word = require("./word.js");

// message.js
var message = "say ".concat(_word.word);
var _default = message;
exports["default"] = _default;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.word = void 0;
// word.js
var word = "hello";
exports.word = word;
```

跟步骤一的解析差不多，不过这样子的内容是没法运行的，毕竟我们塞到同一个文件中了，所以需要步骤三咯。

## <a name="chapter-five" id="chapter-five"></a>五 第三步 生成代码字符串

> [返回目录](#chapter-one)

最后一步我们实现下面代码：

> bundler.js

```js
// 下面是生成代码字符串的操作
function stepThree(entry){
  // 要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的 toString 方法，参数变成 [Object object]，显然不行
  const graph = JSON.stringify(stepTwo(entry))
  return `(function(graph) {
  // require 函数的本质是执行一个模块的代码，然后将相应变量挂载到 exports 对象上
  function require(module) {
    // localRequire 的本质是拿到依赖包的 exports 变量
    function localRequire(relativePath) {
      return require(graph[module].dependencies[relativePath]);
    }
    var exports = {};
    (function(require, exports, code) {
      eval(code);
    })(localRequire, exports, graph[module].code);
    return exports; // 函数返回指向局部变量，形成闭包，exports 变量在函数执行后不会被摧毁
  }
  require('${entry}')
})(${graph})
`;
};

console.log('--- step three ---');
const three = stepThree('./index.js');
console.log(three);

fs.writeFile('bundle.js', three, () => {
  console.log('写入成功');
});
```

可以看到，`stepThree` 返回的是一个立即执行函数，需要传递 `graph`：

```js
(function(graph) {
  // 具体内容
})(graph)
```

那么图谱（`graph`）怎么来？需要通过 `stepTwo(entry)` 拿到了依赖图谱。

但是，因为步骤二返回的是对象啊，如果直接传进去对象，那么就会被转义，所以需要 `JSON.stringify()`：

```js
const graph = JSON.stringify(stepTwo(entry));
(function(graph) {
  // 具体内容
})(graph)
```

那为什么这个函数（`stepThree`）需要传递 `entry`？原因在于我们需要一个主入口，就好比 Webpack 单入口形式：

> 转变前后

```js
// 转变前
const graph = JSON.stringify(stepTwo(entry));
(function(graph) {
  function require(module) {
    // ...具体内容
  }
  require('${entry}')
})(graph)

/* --- 分界线 --- */

// 转变后
const graph = JSON.stringify(stepTwo(entry));
(function(graph) {
  function require(module) {
    // ...具体内容
  }
  require('./index.js')
})(graph)
```

这样我们就清楚了，从 `index.js` 入手，然后再看里面具体内容：

```js
function require(module) {
  // localRequire 的本质是拿到依赖包的 exports 变量
  function localRequire(relativePath) {
    return require(graph[module].dependencies[relativePath]);
  }
  var exports = {};
  (function(require, exports, code) {
    eval(code);
  })(localRequire, exports, graph[module].code);
  return exports; // 函数返回指向局部变量，形成闭包，exports 变量在函数执行后不会被摧毁
}
require('./index.js')
```

`eval` 是指 JavaScript 可以运行里面的字符串代码，`eval('2 + 2')` 会出来结果 `4`，所以 `eval(code)` 就跟我们第一步的时候，`node bundle.js` 一样，执行 `code` 里面的代码。

所以我们执行 `require(module)` 里面的代码，先走：

```js
(function(require, exports, code) {
  eval(code);
})(localRequire, exports, graph[module].code);
```

此刻这个代码中，传递的参数有 3 个：

* `require`：如果在 `eval(code)` 执行代码期间，碰到 `require` 就调用 `localRequire` 方法
* `exports`：如果在 `eval(code)` 执行代码期间，碰到 `exports` 就将里面内容设置到对象 `exports` 中
* `graph[module].code`：一开始 `module` 是 `'./index.js'`，所以查找 `graph` 中 `'./index.js'` 对应的 `code`，将其传递进 `eval(code)` 里面

有的小伙伴会好奇这代码怎么走的，我们可以先看下面一段代码：

```js
const localRequire = (abc) => {
  console.log(abc);
};

const code = `
  console.log(456);
  doRequire(123)
`;

(function(doRequire, code) {
  eval(code);
})(localRequire, code);
```

这段代码中，执行的 `doRequire` 其实就是传入进来的 `localRequire` 方法，最终输出 `456` 和 `123`。

现在，再回头来看：

> 区块一：`bundle.js`

```js
function require(module) {
  // localRequire 的本质是拿到依赖包的 exports 变量
  function localRequire(relativePath) {
    return require(graph[module].dependencies[relativePath]);
  }
  var exports = {};
  (function (require, exports, code) {
    eval(code);
  })(localRequire, exports, graph[module].code);
  return exports; // 函数返回指向局部变量，形成闭包，exports 变量在函数执行后不会被摧毁
}
require("./index.js");
```

它先执行 **立即执行函数** `(function (require, exports, code) {})()`，再到 `eval(code)`，从而执行下面代码：

> 区块二：`graph['./index.js'].code`

```js
"use strict";

var _message = _interopRequireDefault(require("./message.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// index.js
console.log(_message["default"]);
```

在碰到 `require("./message.js")` 的时候，继续进去上面【区块一】的代码，因为此刻的 `require` 是：

```js
function localRequire(relativePath) {
  return require(graph[module].dependencies[relativePath]);
}
```

所以我们再调用自己的 `require()` 方法，将内容传递进去，变成：`require('./message.js')`。

……以此类推，直到 `'./word.js'` 里面没有 `require()` 方法体了，我们再执行下面内容，将 `exports` 导出去。

这就是这段内容的运行流程。

至于其中细节我们就不一一赘述了，小伙伴们如果还没看懂可以自行断点调试，这里面的代码口头描述的话 **jsliang** 讲得不是清楚。

最后我们看看输出整理后的 `bundle.js`：

> bundle.js

```js
(function (graph) {
  // require 函数的本质是执行一个模块的代码，然后将相应变量挂载到 exports 对象上
  function require(module) {
    // localRequire 的本质是拿到依赖包的 exports 变量
    function localRequire(relativePath) {
      return require(graph[module].dependencies[relativePath]);
    }
    var exports = {};
    (function (require, exports, code) {
      eval(code);
    })(localRequire, exports, graph[module].code);
    return exports; // 函数返回指向局部变量，形成闭包，exports 变量在函数执行后不会被摧毁
  }
  require("./index.js");
})({
  "./index.js": {
    dependencies: { "./message.js": "./message.js" },
    code: `
      "use strict";
      
      var _message = _interopRequireDefault(require("./message.js"));
      
      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
      
      // index.js
      
      console.log(_message["default"]);
    `,
  },
  "./message.js": {
    dependencies: { "./word.js": "./word.js" },
    code: `
      "use strict";
      
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      
      exports["default"] = void 0;
      
      var _word = require("./word.js");
      
      // message.js
      
      var message = "say ".concat(_word.word);
      
      var _default = message;
      
      exports["default"] = _default;
    `,
  },
  "./word.js": {
    dependencies: {},
    code: `
      "use strict";
      
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      
      exports.word = void 0;
      
      // word.js
      
      var word = "hello";

      exports.word = word;',
  },
});
```

此时我们 `node bundle.js`，就可以获取到：

```
say hello
```

这样我们就手撸完成了单入口的 Webpack 简单实现。

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

Webpack
===

> Create by **jsliang** on **2020-04-21 16:47:19**  
> Recently revised in **2020-09-25 14:57:43**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Webpack](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 安装](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 使用](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 打包模块](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 打包配置](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 核心配置](#chapter-eight) |
| &emsp;[8.1 mode](#chapter-eight-one) |
| &emsp;[8.2 entry](#chapter-eight-two) |
| &emsp;[8.3 output](#chapter-eight-three) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 深入](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 Loaders](#chapter-ten) |
| &emsp;[10.1 raw-loader](#chapter-ten-one) |
| &emsp;[10.2 file-loader](#chapter-ten-two) |
| &emsp;[10.3 url-loader](#chapter-ten-three) |
| &emsp;[10.4 css-loader](#chapter-ten-four) |
| &emsp;[10.5 style-loader](#chapter-ten-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

```js
const path = require('path');

// 因为 Webpack 是运行在 node 环境下的
// 所以该文件也就是运行在 node 环境下了，那么 node 语法，模块都可以进行调用

// 这个导出去都对象就是 Webpack 打包需要用到都配置对象
module.exports = {

	// 模式 : `"production" | "development" | "none"`
	mode: 'development',

	// entry: './src/index.js',

	// entry: [
	//     './src/index.js',
	//     './src/list.js'
	// ],

	entry: {
		'index': './src/index.js',
		// 'list': './src/list.js'
	},

	output: {
		// path 必须是绝对路径
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js'
	},

	module: {
		// 各种 loader 加载处理规则
		rules: [
			// 每一种规则就是一个对象
			{
				// 被加载都模块规则，支持正则
				test: /\.txt$/i,
				// 满足上面的规则调用的对应loader
				use: 'raw-loader'
			}
		]
	}

}
```

## <a name="chapter-three" id="chapter-three"></a>三 Webpack

> [返回目录](#chapter-one)

* 官⽅方⽹网站：https://Webpack.js.org/
* 中⽂文⽹网站：https://www.webpackjs.com/

本质上，`Webpack` 是一个现代 `JavaScript` 应用程序的静态模块打包器（`module bundler`）。

当 `Webpack` 处理应用程序时，它会递归地构建一个依赖关系图（`dependency graph`），其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 `bundle`。

## <a name="chapter-four" id="chapter-four"></a>四 安装

> [返回目录](#chapter-one)

`Webpack` 是一个使用 `Node.js` 实现的一个模块化代码打包工具。所以，我们需要先安装 Webpack，安装之前需要搭建好 `Node.js` 环境：

```shell
npm install -D Webpack Webpack-cli
```

> 注：不推荐全局安装

`Webpack-cli` : 提供 Webpack 命令、工具，类似 `create-react-app`

`Webpack` : Webpack 代码，类似 `react`

## <a name="chapter-five" id="chapter-five"></a>五 使用

> [返回目录](#chapter-one) 

```bash
./node_modules/.bin/Webpack

// 查看版本
./node_modules/.bin/Webpack -v
```

也可以编辑 `package.json` 的 `scripts` 来简化输入

```json
// package.json
{
	// ...
	"scripts": {
		"start": "Webpack"	// scripts 中可以定位到 ./node_modules/.bin/ 目录下
	}
}
```

> `scripts` 中使用 `test`、`start`、`restart`、`stop` 命名的时候，可以在调用的时候省略 `run`，即直接 `npm start`

当然，还可以使用更加方便的方式：

```bash
npx Webpack
```

通过 `npx` 也可以帮助我们定位命令到 `./node_modules/.bin/` 目录下

> 注：npm5.2+ 增加，如果没有，可以使用 `npm i -g npx` 来安装

## <a name="chapter-six" id="chapter-six"></a>六 打包模块

> [返回目录](#chapter-one) 

打包之前，我们需要了解一个概念，入口文件。

* 入口文件

入口文件就是我们项目中加载的第一个文件，比如上面的 `main.js` 文件，其它文件都是通过 `import` 等方式引入的，`Webpack` 会从我们指定的入口文件开始分析所有需要依赖的文件，然后把打包成一个完整文件。

* 打包命令

```bash
Webpack ./js/index.js
```

上面命令会使用 `Webpack` 默认的一些配置对模块文件进行打包，并把打包后的文件输出到默认创建的 `./dist` 目录下，打包后的文件名称默认为 `main.js`。

模块文件打包以后，就可以在不支持 ES6 模块语法的浏览器环境下引入使用了。

**打包文件分析**

* 把分散的模块文件打包到一个文件中，不需要外部引入了
* 内置了一个小型模块加载器(类似 `requireJS`)，实现了打包后的代码隔离与引用

以上就是 `Webpack` 最基础的使用于基本原理，当然强大的 `Webpack` 远远不止这些功能。

## <a name="chapter-seven" id="chapter-seven"></a>七 打包配置

> [返回目录](#chapter-one) 

虽然，我们可以直接通过命令的来打包，但是推荐创建一个 `Webpack.config.js` 的配置文件来实现更方便和强大的功能。

`Webpack` 命令在运行的时候，默认会读取运行命令所在的目录下的 `Webpack.config.js` 文件，通常我们会在项目的根目录下运行命令和创建配置文件。

我们也可以通过 `—config` 选项来指定配置文件路径：

```shell
Webpack --config ./configs/my_webpack.config.js
```

通常情况下，我们的项目目录大致如下：

```txt
/
-* /dist * 项目打包后存放目录
-* /node_modules * 第三方模块
-* /src
-----* css/
-----* images/
-----* js/
-----* index.js
-* Webpack.config.js
-* package.json
```

配置文件

```javascript
module.exports = {
  ...	//配置项
}
```

## <a name="chapter-eight" id="chapter-eight"></a>八 核心配置

> [返回目录](#chapter-one) 

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 mode

> [返回目录](#chapter-one) 

模式 : `"production" | "development" | "none"`

<!--cli-->

```bash
module.exports = {
  mode: 'production'
}
```

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 entry

> [返回目录](#chapter-one) 

指定打包⼊口⽂文件，有三种不同的形式：`string | object | array`。

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

### <a name="chapter-eight-three" id="chapter-eight-three"></a>8.3 output

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

* 可以指定一个固定的文件名称，如果是多入口多出口(`entry` 为对象)，则不能使用单文件出口，需要使用下面的方式
* 通过 `Webpack` 内置的变量占位符：`[name]`

## <a name="chapter-night" id="chapter-night"></a>九 深入

> [返回目录](#chapter-one) 

在 `Webpack` 中，有一个很重要的特性：模块不仅仅只是 `js` 的文件，`Webpack` 可以把任意文件数据作为模块进行处理，包括：非 `js` 文本、`css`、图片等等。

```javascript
import txt from './a.txt';
console.log(txt);
```

但是 `Webpack` 默认情况下只能处理 `js` 模块，如果需要处理其它类型的模块，则需要使用它提供的一些其它功能。

* 执行简要流程

```mermaid
graph LR
A[entry] --> B[loaders]
B --> C[plugins]
C --> D[output]
```

* `Loaders`：`Webpack` 中非常核心的内容之一，前面我们说的非 `js` 类型的模块处理就靠它了，不同类型的模块的解析就是依赖不同的 `loader` 来实现的。
* `Plugins`：`Webpack` 中另外一个核心的内容，它主要是扩展 `Webpack` 本身的一些功能，它们会运行在各种模块解析完成以后的打包编译阶段，比如对解析后的模块文件进行压缩等。

## <a name="chapter-ten" id="chapter-ten"></a>十 Loaders

> [返回目录](#chapter-one) 

参考地址：https://Webpack.js.org/loaders/

```js
module.exports = {
  ...,
  module: {
  	rules: [
  		{
  			test:/\.xxx$/,
       	use:{
        	loader: 'xxx-load'
      	}
			}
  	]
	}
}
```

当 `Webpack` 碰到不识别的模块的时候，`Webpack` 会在配置的 `module` 中进行该文件解析规则的查找.

* `rules` 就是我们为不同类型的文件定义的解析规则对应的 `loader`，它是一个数组
* 每一种类型规则通过 `test` 选项来定义，通过正则进行匹配，通常我们会通过正则的方式来匹配文件后缀类型
* `use` 针对匹配到文件类型，调用对应的 `loader` 进行处理

**从一个简单的案例来了解 loader**

> src/datas/data.txt

```
我是 txt 的内容
```

> src/datas/data.md

```
# 我是 md 的内容
```

> src/raw-loader.js

```javascript
import txtData from './datas/data.txt';
import mdData from './datas/data.md';

console.log('txtData: ', txtData);
console.log('mdData: ', mdData);
```

默认情况下，`Webpack` 会报错，因为 `Webpack` 处理不了 `txt` 和 `md` 这样的非 `js` 的模块，但是我们可以通过专门来处理纯文本内容(不同的 `loader` 有不同的作用)

### <a name="chapter-ten-one" id="chapter-ten-one"></a>10.1 raw-loader

> [返回目录](#chapter-one) 

在 `Webpack` 中通过 `import` 方式导入文件内容，`loader` 并不是 `Webpack` 内置的，所以首先要安装。

```bash
npm install --save-dev raw-loader
```

然后在 Webpack.config.js 中进行配置

```javascript
module.exports = {
  ...,
  module: {
      rules: [
      {
        test: /\.(txt|md)$/,
        use: 'raw-loader'
    	}
    ]
	}
}
```

### <a name="chapter-ten-two" id="chapter-ten-two"></a>10.2 file-loader

> [返回目录](#chapter-one) 

把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)。

```bash
npm install --save-dev file-loader
```

```javascript
rules: [
  ...,
	{
		test: /\.(png|jpe?g|gif)$/,
    use: {
      loader: "file-loader",
      options: {
        // placeholder 占位符 [name] 源资源模块的名称
        // [ext] 源资源模块的后缀
        name: "[name]_[hash].[ext]",
        //打包后的存放位置
        outputPath: "./images"
        // 打包后文件的 url
        publicPath: './images',
      }
    }
	}
]
```

> 占位符：https://Webpack.js.org/loaders/file-loader#placeholders

### <a name="chapter-ten-three" id="chapter-ten-three"></a>10.3 url-loader

> [返回目录](#chapter-one) 

可以处理 `file-loader` 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 `base64` 格式的字符串，并打包到 `js` 中，对⼩体积的图片⽐较合适，⼤图⽚不合适。

```bash
npm install --save-dev url-loader
```

```javascript
rules: [
  ...,
	{
		test: /\.(png|jpe?g|gif)$/,
    use: {
      loader: "url-loader",
      options: {
        // placeholder 占位符 [name] 源资源模块的名称
        // [ext] 源资源模块的后缀
        name: "[name]_[hash].[ext]",
        //打包后的存放位置
        outputPath: "./images"
        // 打包后文件的 url
        publicPath: './images',
        // 小于 100 字节转成 base64 格式
        limit: 100
      }
    }
	}
]
```

### <a name="chapter-ten-four" id="chapter-ten-four"></a>10.4 css-loader

> [返回目录](#chapter-one) 

分析 `css` 模块之间的关系，并合成⼀个 `css`

```bash
npm install --save-dev css-loader
```

```js
rules: [
  ...,
	{
		test: /\.css$/,
    use: {
      loader: "css-loader",
      options: {
  			// 启用/禁用 url() 处理
  			url: true,
  			// 启用/禁用 @import 处理
  			import: true,
        // 启用/禁用 Sourcemap
        sourceMap: false
      }
    }
	}
]
```

### <a name="chapter-ten-five" id="chapter-ten-five"></a>10.5 style-loader

> [返回目录](#chapter-one) 

把 `css-loader` 生成的内容，用 `style` 标签挂载到⻚面的 `head` 中

```bash
npm install --save-dev style-loader
```

```js
rules: [
  ...,
	{
		test: /\.css$/,
    use: ["style-loader", "css-loader"]
	}
]
```

同一个任务的 `loader` 可以同时挂载多个，处理顺序为：从右到左，也就是先通过 `css-loader` 处理，然后把处理后的 `css` 字符串交给 `style-loader` 进行处理。

```js
rules: [
  ...,
	{
		test: /\.css$/,
    use: [
  		{
  			loader: 'style-loader',
  			options: {}
  		},
      'css-loader'
		]
	}
]
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
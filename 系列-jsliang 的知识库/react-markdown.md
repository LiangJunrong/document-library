React-Makrdown
===

> Create by **jsliang** on **2020-12-28 09:05:23**  
> Recently revised in **2020-12-28 16:09:44**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 Next.js](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 react-markdown](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 表格](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 代码块](#chapter-five) |
| &emsp;[5.1 推荐样式](#chapter-five-one) |
| &emsp;[5.2 魔改](#chapter-five-two) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 HTML](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 总结](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 参考文献](#chapter-eight) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 Next.js

> [返回目录](#chapter-one)

**首先**，初始化项目并安装 `Next.js` 和 `React`：

* 创建项目文件夹：`mkdir jsliang`
* 前往文件夹：`cd jsliang`
* 初始化项目：`npm init -y`
* 安装 React 和 Next：`npm i react react-dom next`
* 新建 `pages` 文件夹：`mkdir pages`

对应文件目录预期如下，其中 `.next`、`node_modules`、`package.json` 和 `package-lock.json` 都是自动生成的：

```diff
jsliang
  .next
  node_modules
+ pages
+   index.js
  package-lock.json
  package.json
```

**然后**，修改下对应文件。

修改 `package.json`：

> package.json

```diff
{
  "name": "jsliang",
  "version": "1.0.0",
  "description": "jsliang",
  "main": "index.js",
+ "scripts": {
+   "dev": "next"
+ },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^10.0.4",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  }
}
```

往 `pages/index.js` 添加内容：

> pages/index.js

```js
const Index = () => (
  <div>
    <h1>Hello jsliang</h1>
  </div>
);

export default Index;
```

**最后**，终端执行 `npm run dev`，就可以在 `http://localhost:3000/` 看到页面显示：**Hello jsliang**。

## <a name="chapter-three" id="chapter-three"></a>三 react-markdown

> [返回目录](#chapter-one)

新增目录：

```diff
jsliang
  .next
  node_modules
  pages
    index.js
+ markdown
+   README.md
  package-lock.json
  package.json
```

* 安装：`npm i raw-loader react-markdown`
* 配置：

> next.config.js

```js
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    );
    return config;
  },
};
```

> 注意配置 `raw-loader`，是希望用 `import` 的方式导入 `react-markdown`，如果不配置下面的引用会失败，需要换成 `require` 形式

* 引用：

> index.js

```js
const React = require('react');
const ReactMarkdown = require('react-markdown');
import README from '../markdown/api.md';

const Index = () => (
  <ReactMarkdown
    source={README}
  />
);

export default Index;
```

> README.md

```markdown
Markdown 演示
===

## 表格

| 姓名 | 喜好 |
| --- | --- |
| 张三 | 吃饭 |
| 李四 | 睡觉 |
| 王五 | 打豆豆 |

## 标题

标题分为 1 - 6 级标题，以 `# 一级标题` 到 `###### 六级标题` 为主。

## 链接

[jsliang 的文档库](https://github.com/LiangJunrong/document-library)

## 列表

**无序列表**：

* 无序列表 1
* 无序列表 2
* 无序列表 3

**有序列表**：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

## 图片

![孙悟空](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F06%2F14%2F20575ff8c6b2914.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611717950&t=6b3f26087f4fbf6960a6db9bf4520ce7)

## 引用

> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了

## 分割线

---

## 代码块

**行内代码块**：`hello jsliang`

**框内代码块**：

> js

\```js
const jsliang = {
  name: 'jsliang',
  age: 25,
};
\```

> html

\```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>HTML</title>
</head>
<body>
  <h1>Hello jsliang</h1>
</body>
</html>
\```

> css

\```css
body {
  color: red,
}
.jsliang {
  color: deepskyblue,
}
\```

> diff

\```diff
+ 新增了内容
- 删除了内容
\```

## 字体

* 倾斜：*倾斜字体*
* 加粗：**加粗字体**
* 删除：~~删除~~

## 任务清单

* [ ] 未完成
* [x] 完成

## HTML

<!-- 注释 -->

<details>
  <summary>基础知识</summary>
  被缩略
  你还需要指定其他的吗？
</details>
```

这样，我们点击保存后，查看 `http://localhost:3000/`，就看到对应的 Markdown 内容了。

但是，你会发现表格、图片等没处理好，这时候就需要其他插件配合。

## <a name="chapter-four" id="chapter-four"></a>四 表格

> [返回目录](#chapter-one)

[react-markdown](https://github.com/remarkjs/react-markdown#use-a-plugin) 在它的 Github 仓库做了对应的解释，需要：[remark-gfm](https://github.com/remarkjs/remark-gfm) 来处理删除线、表格、任务清单和 URL 等内容：

* 安装：`npm i remark-gfm`
* 使用：

> index.js

```diff
const React = require('react');
const ReactMarkdown = require('react-markdown');
import README from '../markdown/README.md';
+ import gfm from 'remark-gfm';

const Index = () => (
  <ReactMarkdown
    source={README}
+   plugins={[gfm]}
  />
);

export default Index;
```

这样表格就处理完了，继续往下处理其他内容

## <a name="chapter-five" id="chapter-five"></a>五 代码块

> [返回目录](#chapter-one)

关于代码块语法高亮，[react-markdown](https://github.com/remarkjs/react-markdown#use-custom-renderers-syntax-highlight) 也标注了对应的处理，需要加入 [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)。

* 安装：`npm i react-syntax-highlighter -S`
* 使用：

```diff
const React = require('react');
const ReactMarkdown = require('react-markdown');
import README from '../markdown/README.md';
import gfm from 'remark-gfm';
+ import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
+ import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

+ const renderers = {
+   code: ({ language, value }) => {
+     return (
+       <SyntaxHighlighter
+         style={dracula}
+         language={language}
+         children={value}
+       />
+     );
+   },
+ };

const Index = () => (
  <ReactMarkdown
-   // source={README}
+   renderers={renderers}
+   children={README}
    plugins={[gfm]}
  />
);

export default Index;
```

> 注意这里的处理和 `react-markdown` 推荐的不同，它那边使用还需要做处理，详细可见：[SyntaxError: Unexpected token export when using NextJS](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 推荐样式

> [返回目录](#chapter-one)

在 `react-syntax-highlighter/dist/cjs/styles/prism` 中导入的 `dracula` 就是展示的样式。

这里顺手推荐 5 种个人觉得还过得去的样式：

* `a11yDark`
* `dracula`
* `materialLight`
* `okaidia`
* `solarizedlight`

看中哪个直接替换即可。

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 魔改

> [返回目录](#chapter-one)

当然，喜欢你就定制它，所以这边将里面内容取出来了。

新目录结构：

```diff
jsliang
  .next
  node_modules
  pages
    index.js
  markdown
    README.md
+ resources
+   index.js
+   react-syntax-highlighter
+     dracula.js
  package-lock.json
  package.json
```

**首先**，修改下 `pages/index.js`：

> pages/index.js

```diff
const React = require('react');
const ReactMarkdown = require('react-markdown');
import README from '../markdown/README.md';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
+ import { dracula } from '../resoruces';
+ // import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
+ // 5 种比较过得去的样式：a11yDark、dracula、materialLight、okaidia、solarizedlight

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        language={language}
        children={value}
      />
    );
  },
};

const Index = () => (
  <ReactMarkdown
    renderers={renderers}
    // source={README}
    children={README}
    plugins={[gfm]}
  />
);

export default Index;
```

**然后**，新增下资源文件夹，并添加内容：

> resources/index.js

```js
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "dracula", {
  enumerable: true,
  get: function get() {
    return _dracula.default;
  }
});

var _dracula = _interopRequireDefault(require("./react-syntax-highlighter/dracula"));
```

> resources/react-syntax-highlighter/dracula.js

```js
// 内容拷贝自 react-syntax-highlighter/dist/cjs/styles/prism
```

**这样**，后续如果你对哪个不满意，那就可以直接修改它！

**最后**，如果你看一些样式，例如 `diff` 对比代码的时候，`- 删除内容` 显示得有点奇怪，那么你就可以直接修改 `deleted`：

```js
"deleted": {
  "color": "#f50000"
},
```

这样删除显示得就是红色了。

## <a name="chapter-six" id="chapter-six"></a>六 HTML

> [返回目录](#chapter-one)

有时候还希望能支持 HTML 代码，例如：

```html
<!-- 注释 -->

<details>
  <summary>基础知识</summary>
  被缩略
  你还需要指定其他的吗？
</details>
```

当然，如果你在 VS Code 这类编辑器预览，也许可以展示，但是 `react-markdown` 不支持，所以在 [react-markdown](https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown) 说明了额外支持：`react-markdown/with-html`。

这次不需要引用其他辅助，用它提供的就可以了：

```diff
const React = require('react');
+ // const ReactMarkdown = require('react-markdown');
+ const ReactMarkdownWithHtml = require('react-markdown/with-html');
import README from '../markdown/README.md';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from '../resoruces'; // 魔改
// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// 5 种比较过得去的样式：a11yDark、dracula、materialLight、okaidia、solarizedlight

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        language={language}
        children={value}
      />
    );
  },
};

const Index = () => (
+ // <ReactMarkdown
+ <ReactMarkdownWithHtml
    allowDangerousHtml
    renderers={renderers}
    children={README}
    plugins={[gfm]}
  />
);

export default Index;
```

真香，能显示 HTML 内容了。

## <a name="chapter-seven" id="chapter-seven"></a>七 总结

> [返回目录](#chapter-one)

到此，我们的 `Next.js` + `react-markdown` 的体验服务就结束了。

当然，还有些问题并没有解决，例如：

* 使用在线图片并没有展示
* 并没有做一个相关的 Demo 案例，一些坑没趟掉
* ……

这些后续再找个时间写吧，一步一个脚印。

## <a name="chapter-eight" id="chapter-eight"></a>八 参考文献

> [返回目录](#chapter-one)

* [react-markdown - Github 仓库](https://github.com/remarkjs/react-markdown)
* [remark-gfm - Github 仓库](https://github.com/remarkjs/remark-gfm)
* [Next.js 配合 react-markdown](http://geekhmer.github.io/blog/2018/03/29/import-markdown-files-and-serve-its-content-in-next-dot-js/)
* [SyntaxError: Unexpected token export when using NextJS](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习斜杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

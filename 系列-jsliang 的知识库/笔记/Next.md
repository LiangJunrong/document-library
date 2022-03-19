Next.js
===

> Create by **jsliang** on **2020-12-28 16:10:48**  
> Recently revised in **2020-12-28 16:10:48**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 设置](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 多页面](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 链接](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 样式](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 共享组件](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 布局组件](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 实战](#chapter-night) |
| &emsp;[9.1 目录结构](#chapter-night-one) |
| &emsp;[9.2 UI 组件](#chapter-night-two) |
| &emsp;[9.3 Markdown 内容](#chapter-night-three) |
| &emsp;[9.4 Pages 入口和 API](#chapter-night-four) |
| &emsp;&emsp;[9.4.1 服务端渲染](#chapter-night-four-one) |
| &emsp;[9.5 Public 静态资源](#chapter-night-five) |
| &emsp;[9.6 resoruces](#chapter-night-six) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 参考文献](#chapter-ten) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

使用 Next.js 好处：

* 服务器端渲染（默认）
* 自动代码切分, 加速页面加载
* 简单的客户端路由（基于页面）
* 基于 Webpack 的开发环境, 支持热模块替换（HMR: Hot Module Replacement）
* 可以使用 Express 或其他 Node.js 服务器实现
* 使用 Babel 和 Webpack 配置定制

## 渲染模式

* 客户端渲染：页面在浏览器获取到 JavaScript 和 CSS 等文件之后开始渲染，完全在客户端工作，路由也是客户端路由
* 服务端渲染：页面由服务端渲染过后直接返回 HTML 页面给前端，URL 的变更会刷新整个页面
* 同构（Universal App）：为改进客户端渲染中首屏加载过大文件或者过多文件变得特别慢，所以将首屏渲染放在服务端来提升首屏速度，首屏过后交由客户端控制

## <a name="chapter-three" id="chapter-three"></a>三 设置

> [返回目录](#chapter-one)

Next.js 可以在 Windows、Mac 和 Linux 运行，只需要在系统中安装 Node.js 即可开始构建 Next.js 应用程序。

那么开始创建项目：

* 创建项目文件夹：`mkdir jsliang`
* 前往文件夹：`cd jsliang`
* 初始化项目：`npm init -y`
* 安装 React 和 Next：`npm i react react-dom next`

此处标记下版本：

```json
"dependencies": {
  "next": "^10.0.4",
  "react": "^17.0.1",
  "react-dom": "^17.0.1"
}
```

* 新建 `pages` 文件夹：`mkdir pages`

此时项目文件夹如下所示：

```
+ .next
+ node_modules
+ pages
  - index.js
- package-lock.json
- package.json
```

**首先**，修改 `package.json`：

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

**然后**，往 `pages/index.js` 添加内容：

> pages/index.js

```js
const Index = () => (
  <div>
    <h1>Hello jsliang</h1>
  </div>
);

export default Index;
```

**最后**，终端执行 `npm run dev`，就可以看到页面显示：**Hello jsliang**。

## <a name="chapter-four" id="chapter-four"></a>四 多页面

> [返回目录](#chapter-one)

当然，一个页面太孤独了，给它添加个小伙伴 `pages/about.js`：

> pages/about.js

```js
const About = () => (
  <div>
    <h1>关于 jsliang</h1>
  </div>
);

export default About;
```

这样访问 `about.js` 就可以看到 **关于 jsliang** 了。

## <a name="chapter-five" id="chapter-five"></a>五 链接

> [返回目录](#chapter-one)

修改下 `pages/index.js`，添加一个站内跳转：

> pages/index.js

```diff
import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Hello jsliang</h1>
+   <Link href='/about'>
+     <a>About Page</a>
+   </Link>
  </div>
);

export default Index;
```

这样在 `http://localhost:3000/` 我们就可以看到 `About Page` 并点击跳转过去了。

> Next.js 处理了 `location.history` 相关的内容，所以不需要再处理路由了

> `<Link>` 组件不仅可以放 `<a>` 标签，你还可以放 `<button>`，能放置的唯一要求是：它能够接受一个 `onClick` 属性

## <a name="chapter-six" id="chapter-six"></a>六 样式

> [返回目录](#chapter-one)

下面再处理下 `pages/index.js`，将链接换成 **jsliang** 喜欢的深空蓝：

> pages/index.js

```js
import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Hello jsliang</h1>
    <Link href='/about'>
      <a style={{ textDecoration: 'none', color: 'deepskyblue' }}>About Page</a>
    </Link>
  </div>
);

export default Index;
```

> 注意：你并不能在 `<Link>` 上添加样式，因为它是一个高阶组件，只能接收 `href` 属性

## <a name="chapter-seven" id="chapter-seven"></a>七 共享组件

> [返回目录](#chapter-one)

新建一个好看的页头组件：

> components/Header.js

```js
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  color: 'deepskyblue'
};

const Header = () => (
  <div>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
```

这个组件将我们 `pages/about.js` 和 `pages/index.js` 关联了起来，要怎么使用呢？

> pages/index.js

```js
import Header from '../components/Header';

const Index = () => (
  <div>
    <Header />
    <h1>Hello jsliang</h1>
  </div>
);

export default Index;
```

> pages/about.js

```js
import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
    <h1>关于 jsliang</h1>
  </div>
);

export default About;
```

so easy~

这样就搞成公共的了。

> 注意：`pages` 目录是特殊的，`Next.js` 会读取 `pages` 作为入口，但是 `components` 不是特殊的，你可以将你的组件文件夹命名成 `comps` 也是可行的

## <a name="chapter-eight" id="chapter-eight"></a>八 布局组件

> [返回目录](#chapter-one)

既然前面已经做到共享了，那么为何不丰富一下，将其作为一个布局组件。

将 `Header` 作为布局组件的一部分，新建 `components/Layout.js`：

> components/Layout.js

```js
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
```

这样就可以在 `index.js` 和 `about.js` 中使用了。

> pages/index.js

```diff
- import Header from '../components/Header';
+ import Layout from '../components/Layout';

const Index = () => (
- <div>
-   <Header />
-   <h1>Hello jsliang</h1>
- </div>
+ <Layout>
+   <h1>Hello jsliang</h1>
+ </Layout>
);

export default Index;
```

> pages/about.js

```diff
- import Header from '../components/Header';
+ import Layout from '../components/Layout';

const About = () => (
- <div>
-   <Header />
-   <h1>关于 jsliang</h1>
- </div>
+ <Layout>
+   <p>关于 jsliang</p>
+ </Layout>
);

export default About;
```

在这里 `{props.children}` 是创建布局组件的一种手段。

创建布局组件还有其他方式：

> 方式一

```js
import withLayout from '../lib/layout';

const Page = () => (
  <p>Hello jsliang</p>
);

export default withLayout(Page);
```

> 方式二

```js
const Page = () => (
  <p>Hello jsliang</p>
)

export default () => (<Layout page={Page}/>)
```

> 方式三

```js
const content = (<p>Hello jsliang</p>);

export default () => (<Layout content={content}/>);
```

## <a name="chapter-night" id="chapter-night"></a>九 实战

> [返回目录](#chapter-one)

### <a name="chapter-night-one" id="chapter-night-one"></a>9.1 目录结构

> [返回目录](#chapter-one)

```
+ components ———————————————————— UI 组件
  - Layout.jsx                 —— 布局
  - Nav.jsx                    —— 导航
  - Page.jsx                   —— 内容
+ markdown   ———————————————————— Markdown 存放位置
  - Next.md
  - react-markdown.md
  - README.md
+ pages      ———————————————————— Next 规定页面目录
  + api      ———————————————————— 本地 API 存放地址
    - getCatelog.js            —— API：获取目录
    - getContent.js            —— API：获取内容
  + pages    ———————————————————— 子页面加载
    - [...args].js             —— [...args].js 是 Next.js 规则，可以解构成 A.js、B.js 等
  - index.js ———————————————————— 入口
+ public     ———————————————————— 静态资源
  + css      ———————————————————— CSS
    - global.css
  + img      ———————————————————— 图片
    - monkey.jpg
+ resoruces  ———————————————————— 工具
  + react-syntax-highlighter   —— 魔改 Code 样式
    - dracula.js               —— 使用这种样式
  - index.js                   —— 工具入口
```

### <a name="chapter-night-two" id="chapter-night-two"></a>9.2 UI 组件

> [返回目录](#chapter-one)

> Layout.jsx

```js
import Head from 'next/head'; // 设置页面头部信息
import Nav from './Nav';
import Content from './Content';

const Layout = (props) => (
  <>
    {/* 设置头部信息 */}
    <Head>
      <link href='./css/global.css' rel='stylesheet'/>
      <title>文档库</title>
    </Head>

    {/* 设置页面导航 */}
    <Nav {...props} />

    {/* 设置页面内容 */}
    <Content {...props} />
  </>
);

export default Layout;
```

这里存放了 UI 组件，然后希望传递的数据是这样的：

```js
props = {
  catelog: [{
    id,
    url,
    title
  }], // 目录信息
  content: '', // 文本信息
}
```

所以 `Nav.jsx` 和 `Content.jsx` 如下：

> Nav.jsx

```js
import Link from 'next/link';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        {
           props.catelog && props.catelog.map((item) => (
            <li key={item.id}><Link href={item.url}>{item.title}</Link></li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Nav;

```

> Content.jsx

```js
import React from 'react'; // 导入 React
import ReactMarkdownWithHtml from 'react-markdown/with-html'; // 支持 HTML 代码
import gfm from 'remark-gfm'; // 处理删除线、表格、任务清单和 URL
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // 设置代码高亮
import { dracula } from '../resoruces'; // 魔改样式

// 设置代码高亮
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

const Page = (props) => (
  <div className="content">
    <ReactMarkdownWithHtml
      allowDangerousHtml
      renderers={renderers}
      children={props.content}
      plugins={[gfm]}
    />
  </div>
);

export default Page;
```

### <a name="chapter-night-three" id="chapter-night-three"></a>9.3 Markdown 内容

> [返回目录](#chapter-one)

`markdown` 这个目录存放了需要展示的 `Markdown` 文件，这里就不贴内容了，随意放点都 OK。

### <a name="chapter-night-four" id="chapter-night-four"></a>9.4 Pages 入口和 API

> [返回目录](#chapter-one)

`pages` 这个目录是 `Next.js` 指定的，用来存放入口和 API 等内容的。

```
+ pages      ———————————————————— Next 规定页面目录
  + api      ———————————————————— 本地 API 存放地址
    - getCatelog.js            —— API：获取目录
    - getContent.js            —— API：获取内容
  + pages    ———————————————————— 子页面加载
    - [...args].js             —— [...args].js 是 Next.js 规则，可以解构成 A.js、B.js 等
  - index.js ———————————————————— 入口
```

**首先**，看主入口 `index.js`：

> pages/index.js

```js
import Layout from '../components/Layout';

// Next 钩子
export async function getStaticProps() {
  // 调用 3000 接口，这个请求会被 pages/api/xxx 获取到
  const [catelogInfo, contentInfo] = await Promise.all([
    fetch(`http://localhost:3000/api/getCatelog`),
    fetch(`http://localhost:3000/api/getContent?args=/`),
  ]);

  // 获取 200 响应
  if (catelogInfo.status === 200 && contentInfo.status === 200) {
    const [catelogData, contentData] = await Promise.all([
      catelogInfo.json(),
      contentInfo.json(),
    ]);
    // 拿到接口数据并返回
    return {
      props: {
        catelog: catelogData.catelog,
        content: contentData.content,
      },
    }
  };
};

const Index = (props) => (
  <Layout {...props} />
);

export default Index;
```

在这里需要注意的是 `getStaticProps`，如果是服务端渲染应该是 `getInitialProps`，但是我这里希望直接将所有 `Markdown` 打包成 `HTML`，所以就不需要 SSR 配置了。

但是为了避免有的小伙伴需要，后面会加个小节来演示。

**然后**，当用户通过 `<Link />` 请求 `pages/A.js` 等页面的时候，就会进入 `pages/[...args].js` 文件：

> pages/[...args].js

```js
import Layout from '../../components/Layout';

const Index = (props) => (
  <Layout {...props} />
);

// Next 钩子：预构建-获取目录
export async function getStaticPaths() {
  // 调用 3000 接口，这个请求会被 pages/api/xxx 获取到
  const [catelogInfo] = await Promise.all([
    fetch(`http://localhost:3000/api/getCatelog`),
  ]);

  // 获取 200 响应
  if (catelogInfo.status === 200) {
    const [catelogData] = await Promise.all([
      catelogInfo.json(),
    ]);
    // 拿到接口数据并返回
    return {
      paths: catelogData.catelog.map((item) => item.url),
      fallback: false, // 如果为 false，其他路由为 404，否则不会 404
    }
  };
};

// Next 钩子
export async function getStaticProps({ params }) {
  // 获取链接路径
  const path = params.args[0];

  // 调用 3000 接口，这个请求会被 pages/api/xxx 获取到
  const [catelogInfo, contentInfo] = await Promise.all([
    fetch(`http://localhost:3000/api/getCatelog`),
    fetch(`http://localhost:3000/api/getContent?args=/${path}`),
  ]);

  // 获取 200 响应
  if (catelogInfo.status === 200 && contentInfo.status === 200) {
    const [catelogData, contentData] = await Promise.all([
      catelogInfo.json(),
      contentInfo.json(),
    ]);
    // 拿到接口数据并返回
    return {
      props: {
        catelog: catelogData.catelog,
        content: contentData.content,
      },
    }
  };
};

export default Index;

```

**最后**，不管是 `pages/index.js` 和 `pages/[...args].js` 都会调用 `api/getCatelog` 和 `api/getContent`，所以这两个直接写读取文件：

> pages/api/getCatelog.js

```js
const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(process.cwd());

// 接口
export default async (req, res) => {
  // GET 操作
  if (req.method === 'GET') {
    // 读取文件夹并返回目录
    const files = fs.readdirSync(`${BASE_PATH}/markdown`);
    return res.json({
      catelog: files.map((item, index) => {
        const title = item.split('.')[0];
        return {
          id: index,
          title,
          url: `/pages/${title}`
        };
      })
    });
  }
}
```

> pages/api/getContent.js

```js
const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(process.cwd());

// 接口
export default async (req, res) => {
  // GET 操作
  if (req.method === 'GET') {

    // 如果是 / 根路径，那么重定向为 /README
    if (req.query.args === '/') {
      req.query.args = '/README';
    }

    // 读取文件并返回数据
    const data = fs.readFileSync(`${BASE_PATH}/markdown${req.query.args}.md`, 'utf-8');
    return res.json({ content: data });
  }
}
```

到此我们页面基本能跑起来了。

#### <a name="chapter-night-four-one" id="chapter-night-four-one"></a>9.4.1 服务端渲染

> [返回目录](#chapter-one)

```
+ pages      ———————————————————— Next 规定页面目录
  + api      ———————————————————— 本地 API 存放地址
    - getCatelog.js            —— API：获取目录
    - getContent.js            —— API：获取内容
  - [...args].js ———————————————— [...args].js 是 Next.js 规则，可以解构成 A.js、B.js 等
  - index.js ———————————————————— 入口
```

这里注意下 `[...args]` 直接放在一级目录即可，当然也可以放到 `pages` 里面。

> index.js

```js
import Index from './[...args]';

export default Index;
```

> [...args].js

```js
import Layout from '../components/Layout';

const Index = (props) => (
  <Layout {...props} />
);

// Next 钩子：调用接口
Index.getInitialProps = async (ctx) => {
  // 获取链接路径
  const path = ctx.asPath;

  // 调用 3000 接口，这个请求会被 pages/api.js 获取到
  const [catelogInfo, contentInfo] = await Promise.all([
    fetch(`http://localhost:3000/api/getCatelog`),
    fetch(`http://localhost:3000/api/getContent?args=${path}`),
  ]);

  // 获取 200 响应
  if (catelogInfo.status === 200 && contentInfo.status === 200) {
    const [catelogData, contentData] = await Promise.all([
      catelogInfo.json(),
      contentInfo.json(),
    ]);
    // 拿到接口数据并返回
    return {
      catelog: catelogData.catelog,
      content: contentData.content,
    }
  };
};

export default Index;
```

### <a name="chapter-night-five" id="chapter-night-five"></a>9.5 Public 静态资源

> [返回目录](#chapter-one)

> public/css/global.css

```css
blockquote {
  padding: 0 15px;
  color: #777;
  border-left: 4px solid #ddd;
}
```

> img/monkey.jpg

随便找个猴子图片

### <a name="chapter-night-six" id="chapter-night-six"></a>9.6 resoruces

> [返回目录](#chapter-one)

> resoruces/index.js

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

> resoruces/react-syntax-highlighter/dracula.js

```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "none",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "#282a36",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#282a36",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "#6272a4"
  },
  "prolog": {
    "color": "#6272a4"
  },
  "doctype": {
    "color": "#6272a4"
  },
  "cdata": {
    "color": "#6272a4"
  },
  "punctuation": {
    "color": "#f8f8f2"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#ff79c6"
  },
  "tag": {
    "color": "#00bfff"
  },
  "constant": {
    "color": "#ff79c6"
  },
  "symbol": {
    "color": "#ff79c6"
  },
  "deleted": {
    "color": "#f50000"
  },
  "boolean": {
    "color": "#bd93f9"
  },
  "number": {
    "color": "#bd93f9"
  },
  "selector": {
    "color": "#50fa7b"
  },
  "attr-name": {
    "color": "#50fa7b"
  },
  "string": {
    "color": "#50fa7b"
  },
  "char": {
    "color": "#50fa7b"
  },
  "builtin": {
    "color": "#50fa7b"
  },
  "inserted": {
    "color": "#50fa7b"
  },
  "operator": {
    "color": "#f8f8f2"
  },
  "entity": {
    "color": "#f8f8f2",
    "cursor": "help"
  },
  "url": {
    "color": "#f8f8f2"
  },
  ".language-css .token.string": {
    "color": "#f8f8f2"
  },
  ".style .token.string": {
    "color": "#f8f8f2"
  },
  "variable": {
    "color": "#f8f8f2"
  },
  "atrule": {
    "color": "#f1fa8c"
  },
  "attr-value": {
    "color": "#f1fa8c"
  },
  "function": {
    "color": "#f1fa8c"
  },
  "class-name": {
    "color": "#f1fa8c"
  },
  "keyword": {
    "color": "#8be9fd"
  },
  "regex": {
    "color": "#ffb86c"
  },
  "important": {
    "color": "#ffb86c",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;
```

## 导出模式

* SSR（Server Side Rendring）
* SSG（Static Site Generation）
* SSR With hydration
* CSR（Client Side Rendering）
* CSR With Pre-Rendring
* Trisomorphic Rendring

### SSR（Server Side Rendring）

SSR 即服务端渲染。

服务器呈现响应于导航为服务器上的页面生成完整的 HTML。

这样可以避免在客户端进行数据获取和模板化的其他往返过程，因为它是在浏览器获得响应之前进行处理的。

在服务器上运行页面逻辑和呈现可以避免向客户端发送大量 JavaScript，这有助于实现快速的交互时间。

### SSG（Static Site Generation）

SSG 即静态网站生成。

静态网站生成类似于服务器端渲染，不同之处在于构建时而不是在请求时渲染页面。

与服务器渲染不同，由于不必动态生成页面的 HTML，因此它还可以实现始终如一的快速到第一字节的时间。

通常，静态呈现意味着提前为每个 URL 生成单独的 HTML 文件。

借助预先生成的 HTML 响应，可以将静态渲染器部署到多个 CDN，以利用边缘缓存的优势。

### SSR With hydration

SSR With hydration 即视图通过同时进行客户端渲染和服务端渲染，从而达成一种平衡。

导航请求（例如整页加载或重新加载）由服务器处理，该服务器将应用程序呈现为 HTML，然后将 JavaScript 和用于呈现的数据嵌入到生成的文档中。

理想状态下，就可以像服务器渲染一样实现快速的 First Contentful Paint，然后通过使用称为 hydration 的技术在客户端上再次渲染来修补。

从真实网站中收集的效果指标表明， 使用 SSR 水合模式效果并不好，强烈建议不要使用它。

原因归结为用户体验：最终很容易使用户陷入怪异的山谷。

### CSR（Client Side Rendering）

CSR 即客户端渲染。

客户端渲染，意味着: 直接使用 JavaScript 在浏览器中渲染页面。

所有逻辑，数据获取，模板和路由均在客户端而不是服务器上处理。

### CSR With Pre-Rendring

CSR With Pre-rendering 即在构建阶段，就将 HTML 页面渲染完毕，不会进行二次渲染。

也就是说，当初打包时页面是怎么样，那么预渲染就是什么样。

等到 JS 下载并完成执行，如果页面上有数据更新，那么页面会再次渲染，这时会造成一种数据延迟的错觉。

Pre-render 利用 Chrome 官方出品的 Puppeteer 工具，对页面进行爬取。

它提供了一系列的 API, 可以在无 UI 的情况下调用 Chrome 的功能, 适用于爬虫、自动化处理等各种场景。

它很强大，所以很简单就能将运行时的 HTML 打包到文件中。

### Trisomorphic Rendring

Trisomorphic Rendring 即三态渲染。

在三态渲染模型中，可以使用服务器流式渲染进行初始导航，然后让 Service Worker 在 HTML 加载完成后，继续进行导航 HTML 的渲染。

这样可以使缓存的组件和模板保持最新状态，并启用 SPA 样式的导航，以在同一会话中呈现新视图。

如果可以在服务器，客户端页面和 Service Worker 之间共享相同的模板和路由代码时，这种方法十分有效。

## <a name="chapter-ten" id="chapter-ten"></a>十 参考文献

> [返回目录](#chapter-one)

* [Next.js - 中文网站](https://nextjs-cn.com/)
* [Next.js - 英文官网](https://nextjs.org/learn/basics/create-nextjs-app)
* [Next.js 中文学习文档 - 2018](https://github.com/developerworks/learnnextjs-cn-docs)
* [Next.js - GitHub](https://github.com/vercel/next.js)
* [十、Next.js：导出静态 HTML 应用程序](https://www.jianshu.com/p/c2e86f3d1d84)
* [Next.js - Github - 静态 HTML 导出](https://github.com/vercel/next.js/tree/canary/examples/with-static-export)
* [https://juejin.cn/post/6844903944343273485](手把手教你用神器nextjs一键导出你的github博客文章生成静态html！)
* [ismomrphic-fetch 和 fetch 区别](https://mlog.club/article/306541)
* [Next.js - GitHub 报错清单](https://github.com/vercel/next.js/tree/master/errors)
* [React SSR 详解【近 1W 字】+ 2个项目实战](https://juejin.cn/post/6844904017487724557)
* [【译】Next.js 9.3 getStaticProps，getStaticPaths和getServerSideProps的新API概述](https://juejin.cn/post/6844904086215589901)
* [魅族官网基于 next.js 重构实践总结与分享](https://zhuanlan.zhihu.com/p/113853235)
* [「干货」你需要了解的六种渲染模式](https://segmentfault.com/a/1190000023469150)
* [Next.js 报错 i18n](https://github.com/vercel/next.js/issues/18318)

### 填坑系列

* [Next.js踩坑入门系列（一）— Hello Next.js!](https://juejin.cn/post/6844903666906824718)
* [Next.js踩坑入门系列（二）— 添加Antd && CSS](https://juejin.cn/post/6844903667418546190)
* [Next.js踩坑入门系列（三）— 目录重构&&再谈路由](https://juejin.cn/post/6844903668563574798)
* [Next.js踩坑入门系列（四）— 中期填坑](https://juejin.cn/post/6844903671403118606)
* [Next.js踩坑入门系列（五）— 引入状态管理redux](https://juejin.cn/post/6844903687538606093)
* [Next.js踩坑入门系列（六） —— 再次重构目录](https://juejin.cn/post/6844903689015001095)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习斜杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

React List - React Router
===

> Create by **jsliang** on **2019-04-26 13:13:18**  
> Recently revised in **2019-04-29 11:54:01**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactList-ReactRouter.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 初试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 简介](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 BrowserRouter](#chapter-five) |
| &emsp;[5.1 BrowserRouter 语法](#chapter-five-one) |
| &emsp;[5.2 BrowserRouter - basename](#chapter-five-two) |
| &emsp;[5.3 BrowserRouter - getUserConfirmation](#chapter-five-three) |
| &emsp;[5.4 BrowserRouter - forceRefresh](#chapter-five-four) |
| &emsp;[5.5 BrowserRouter - keyLength](#chapter-five-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 HashRouter](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 Link](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[二 前言](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

前端路由，是指改变 URL 路径的形式，从而切换到不同的页面，例如：

* `localhost:3000/home`
* `localhost:3000/user`

通过切换不同的 URL，显示不同的页面，从而有了 **路由** 的概念。

这篇文章我们讲解在 React 中如何通过 React Router 这个插件，灵活使用路由。

> **jsliang** 瞎吹的，最好自己百度 **前端路由** 是啥。

* 参考资料：

1. [React Router 官方文档](https://reacttraining.com/react-router/web/guides/quick-start)
2. [React Router 中文文档](https://react-router.docschina.org)
3. [React Router 中文文档（旧）](https://react-guide.github.io/react-router-cn/)
4. [React Router DOM 中文文档（一） - 简书](https://www.jianshu.com/p/97e4af32811a)
5. [React Router DOM 中文文档（二） - 简书](https://www.jianshu.com/p/5796c360e776)

* 篇外

网上有很多 React Router 文章了，例如：

* [React Router 中文文档（一）](https://segmentfault.com/a/1190000014294604)
* [React Router DOM 中文文档（一）](https://www.jianshu.com/p/97e4af32811a)

为何 **jsliang** 要多次一举？

1. 你记录你的，我记录我的，互相不妨碍
2. 看这些跟看官网没啥两样，所以我需要亲自动手过一遍官网
3. 记录我看官网的内容，顺带记录我应用上去的实例

## <a name="chapter-three" id="chapter-three">三 初试</a>

> [返回目录](#chapter-one)

**首先**，在 Create React App 中，我们引用 React Router：

* `npm i react-router-dom -S`

**然后**，在 src 目录下新建 pages 用来存放页面，并修改 App.js：

> 案例：App.js

```js
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import TimeLine from './pages/TimeLine';
import NotFound from './pages/404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Redirect from="/" to="/timeline" exact />
            <Route path="/timeline" component={TimeLine}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
```

**最后**，通过在 App.js 中如此定义，即可定义对应的组件，并渲染对应页面和进行跳转。

## <a name="chapter-four" id="chapter-four">四 简介</a>

> [返回目录](#chapter-one)

下面我们对一些常用/好用的方法进行介绍：

```js
import { 
  BrowserRouter,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
```

* `<BrowserRouter>`：路由组件包裹层。`<Route>` 和 `<Link>` 的包裹层。
* `<Route>`：路由。定义一个路由页面，用来匹配对应的组件（Component）和路由路径。
* `<NavLink>`：活跃链接。当 URL 中的路径等于该路由定义的路径时，该标签可以呈现它定义的 `activeClassName`。
* `<Link>`：链接。用来跳转到 `<Route>` 对应的路由（Component） 中。

## <a name="chapter-five" id="chapter-five">五 BrowserRouter</a>

> [返回目录](#chapter-one)

`<BrowserRouter>` 会为你创建一个专门的 history 对象，用来记录你的路由，从而能够返回上一页或者跳转到指定的路由页面。

> 区别于 `<HashRouter>`，有响应请求的服务器时使用 `<BrowserRouter>`，使用的是静态文件的服务器，则用 `<HashRouter>`。

简单案例：

```js
<BrowserRouter>
  <Header />
  <Route path="/" exact component={TimeLine}></Route>
  <Route path="/timeline" component={TimeLine}></Route>
</BrowserRouter>
```

### <a name="chapter-five-one" id="chapter-five-one">5.1 BrowserRouter 语法</a>

> [返回目录](#chapter-one)

```js
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App/>
</BrowserRouter>
```

### <a name="chapter-five-two" id="chapter-five-two">5.2 BrowserRouter - basename</a>

> [返回目录](#chapter-one)

* 规则：`basename: string`

为里面的子目录提供基础路径名，例如：

```js
<BrowserRouter basename="/calendar">
  <Link to="/today"/> 
  {/* 渲染为 <a href="/calendar/today"> */}
</BrowserRouter>
```

### <a name="chapter-five-three" id="chapter-five-three">5.3 BrowserRouter - getUserConfirmation</a>

> [返回目录](#chapter-one)

* 规则：`getUserConfirmation: function`

用于确认导航的功能。

```js
// 默认使用 window.confirm。
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

<BrowserRouter getUserConfirmation={getConfirmation}/>
```

### <a name="chapter-five-four" id="chapter-five-four">5.4 BrowserRouter - forceRefresh</a>

> [返回目录](#chapter-one)

* 规则：`forceRefresh: bool`

如果为 true，则路由器将在页面导航中使用整页刷新

```js
const supportsHistory = 'pushState' in window.history
<BrowserRouter forceRefresh={!supportsHistory}/>
```

### <a name="chapter-five-five" id="chapter-five-five">5.5 BrowserRouter - keyLength</a>

> [返回目录](#chapter-one)

* 规则：`keyLength: number`

设置它里面路由的 `location.key` 的长度。默认为 6。

> key 的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。

```js
<BrowserRouter keyLength={12}/>
```

## <a name="chapter-six" id="chapter-six">六 HashRouter</a>

> [返回目录](#chapter-one)

使用 `URL` 的 `hash` 部分（即 `window.location.hash` ）的 `<Router>` 使 `UI` 与 `URL` 保持同步。

**重要提示**`：Hash` 历史记录不支持 `location.key` 或 `location.state`。

```js
import { HashRouter } from 'react-router-dom'

<HashRouter>
  <App/>
</HashRouter>
```

### <a name="chapter-six-one" id="chapter-six-one">6.1 HashRouter - basename</a>

> [返回目录](#chapter-one)

* 规则：`basename: string`

所有位置的基本 `URL`，格式正确的基本名应该有一个前导斜线，但结尾不能有斜线。

```js
<HashRouter basename="/calendar"/>
<Link to="/today"/> 
{/* 渲染为 <a href="/calendar/today"> */}
```

### <a name="chapter-six-two" id="chapter-six-two">6.2 HashRouter - getUserConfirmation</a>

> [返回目录](#chapter-one)

* 规则：`getUserConfirmation: func`

用于确认导航的功能。默认使用 window.confirm。

```js
// this is the default behavior
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

<HashRouter getUserConfirmation={getConfirmation}/>
```

### <a name="chapter-six-three" id="chapter-six-three">6.3 HashRouter - hashType</a>

> [返回目录](#chapter-one)

* 规则：`hashType: string`

用于 `window.location.hash` 的编码类型。可用的值是：

* `slash` - 创建 `#/` 和的 `#/sunshine/lollipops`
* `noslash` - 创建 `#` 和的 `#sunshine/lollipops`
* `hashbang` - 创建 `ajax crawlable`，如 `#!/` 和
 `#!/sunshine/lollipops`

默认为 `slash`。

## <a name="chapter-seven" id="chapter-seven">七 Link</a>

> [返回目录](#chapter-one)

在应用程序周围提供声明式的,可访问的导航。

### <a name="chapter-seven-one" id="chapter-seven-one">7.1 Link - to</a>

> [返回目录](#chapter-one)

* 规则 1：`to: string`

链接位置的字符串表示，通过连接位置的路径名，搜索和 `hash` 属性创建。

```js
<Link to='/courses?sort=name'>字符串形式跳转</Link>
```

* 规则 2：`to: object`

一个可以具有以下任何属性的对象：

* `pathname`: 表示要链接到的路径的字符串。
* `search`: 表示查询参数的字符串形式。
* `hash`: 放入网址的 `hash`，例如 `#a-hash`。
* `state`: 状态持续到 `location`。

```js
<Link to={{
  pathname: '/courses',          // 基础路径
  search: '?sort=name',          // 匹配字段
  hash: '#the-hash',             // 对应内链
  state: { fromDashboard: true } // 未知
}}>
  对象形式跳转
</Link>
```

### <a name="chapter-seven-two" id="chapter-seven-two">7.2 Link - replace</a>

> [返回目录](#chapter-one)

* 规则：`replace: bool`

如果为 `true`，则单击链接将替换历史堆栈中的当前入口，而不是添加新入口。

```js
<Link to="/courses" replace>替换当前 hash 路径</Link>
```

### <a name="chapter-seven-three" id="chapter-seven-three">7.3 Link - other</a>

> [返回目录](#chapter-one)

还可以传递想要放在 `<a>` 上的属性，例如标题，`ID`、`className` 等。

```js
<Link to="/test" id="myTest">测试 1</Link>
```

> [返回目录](#chapter-one)

## Switch

可以利用 `<Switch>` 做分组，即当有匹配时，匹配对应 `path` 对应的组件；如果没有匹配，则匹配 `NotFound` 页面。

```js
<BrowserRouter>
  <Header />
  <Switch>
    <Route path="/" exact component={TimeLine}></Route>
    <Route path="/timeline" component={TimeLine}></Route>
    <Route component={NotFound}></Route>
  </Switch>
</BrowserRouter>
```

## Router

* 全匹配和半匹配（exact）：

```js
<BrowserRouter>
  <Route path="/" exact component={TimeLine}></Route>
  <Route path="/timeline" component={TimeLine}></Route>
</BrowserRouter>
```

加了 `exact` 属性后，会完全匹配路径；如果没有加，则二级路径也会匹配当前路径（例如 `/timeline/book`）。

* 路由渲染属性：

```js
const Home = () => <div>Home</div>;

const App = () => {
  const someVariable = true;

  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        render={props => <About {...props} extra={someVariable} />}
      />
      {/* do not do this */}
      <Route
        path="/contact"
        component={props => <Contact {...props} extra={someVariable} />}
      />
    </Switch>
  );
};
```

我们可以动态设置 `extra` 的值，从而判断是否需要加载某个组件。

## Redirect

我们可以设置某个路由重定向到另一个路由，例如下面即对 `/` 完全匹配重定向到 `/timeline` 页面。

```js
<Redirect from="/" to="/timeline" exact />
```

## NavLink

* 高亮显示：`<NavLink to="/timeline" activeClassName="active">首页</NavLink>`

## Code Splitting

随着应用的增长，代码包会随着生长。

到最后你会发现，你打包后的 js 文件大地太多离谱。

所以，我们需要通过代码分割，依据不同的路由，加载不同的 js 文件。

1. 安装 React Loadable：`npm i react-loadable -S`
2. 结合 React Router 和 React Loadable 进行 Code Spliting：

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);
```

3. 打包项目： `npm run build`

## Scroll To Top

### 跳转页面滚动到顶部

1. **首先**，在全局 components 文件中定义 ScrollToTop 文件夹，其中 index.js 内容为：

> src/components/ScrollToTop/index.js

```js
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}
 
export default withRouter(ScrollToTop);
```

2. **然后**，在 App.js 或者其他页面中使用 ScrollToTop 功能：

> src/App.js

```js
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import TimeLine from './pages/TimeLine';
import NotFound from './pages/404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Switch>
            <Redirect from="/" to="/timeline" exact />
            <Route path="/timeline" component={TimeLine}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
```

这样，我们切换路由的时候，页面就会滚动到顶部。

## Redux

在项目中，我们更希望 React Router 和 React Redux 合并起来，这时候可以：

* https://reacttraining.com/react-router/web/guides/redux-integration

```js
// before
export default connect(mapStateToProps)(Something)

// after
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```

## 我看到

* https://react-router.docschina.org/web/api/BrowserRouter

## 参考文献

1. [React Router 4.x 开发，这些雷区我们都帮你踩过了 - 掘金](https://juejin.im/entry/5b50518bf265da0f6436c34a)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
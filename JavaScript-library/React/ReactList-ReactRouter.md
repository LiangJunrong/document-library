React List - React Router
===

> Create by **jsliang** on **2019-04-26 13:13:18**  
> Recently revised in **2019-04-26 16:44:14**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactList-ReactRouter.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

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

## <a name="chapter-three" id="chapter-three">三 初试</a>

> [返回目录](#chapter-one)

在 Create React App 中，我们引用 React Router：`npm i react-router-dom -S`

然后在 src 目录下新建 pages 用来存放页面，并修改 App.js：

> 案例：App.js

<details>

  <summary>案例详情</summary>

```js
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TimeLine from './pages/TimeLine';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <header>
          <Link to="/">首页</Link>
        </header>
        <Route path="/" exact component={TimeLine}></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
```

</details>

通过在 App.js 中如此定义，即可定义对应的组件，并渲染对应页面和进行跳转。

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

## BrowserRouter

`<BrowserRouter>` 会为你创建一个专门的 history 对象，用来记录你的路由，从而能够返回上一页或者跳转到指定的路由页面。

> 区别于 `<HashRouter>`，有响应请求的服务器时使用 `<BrowserRouter>`，使用的是静态文件的服务器，则用 `<HashRouter>`。

```js
<BrowserRouter>
  <Header />
  <Route path="/" exact component={TimeLine}></Route>
  <Route path="/timeline" component={TimeLine}></Route>
</BrowserRouter>
```

### 

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

## Link

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

## 你看到

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
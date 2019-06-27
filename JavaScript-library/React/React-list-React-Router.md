React List - React Router
===

> Create by **jsliang** on **2019-04-26 13:13:18**  
> Recently revised in **2019-05-31 15:03:02**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library)**

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
| &emsp;[6.1 HashRouter - basename](#chapter-six-one) |
| &emsp;[6.2 HashRouter - getUserConfirmation](#chapter-six-two) |
| &emsp;[6.3 HashRouter - hashType](#chapter-six-three) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 Link](#chapter-seven) |
| &emsp;[7.1 Link - to](#chapter-seven-one) |
| &emsp;[7.2 Link - replace](#chapter-seven-two) |
| &emsp;[7.3 Link - other](#chapter-seven-three) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 NavLink](#chapter-eight) |
| &emsp;[8.1 NavLink - activeClassName](#chapter-eight-one) |
| &emsp;[8.2 NavLink - activeStyle](#chapter-eight-two) |
| &emsp;[8.3 NavLink - exact](#chapter-eight-three) |
| &emsp;[8.4 NavLink - isActive](#chapter-eight-four) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 MemoryRouter](#chapter-night) |
| &emsp;[9.1 MemoryRouter - initialEntries](#chapter-night-one) |
| &emsp;[9.2 MemoryRouter - initialIndex](#chapter-night-two) |
| &emsp;[9.3 MemoryRouter - getUserConfirmation](#chapter-night-three) |
| &emsp;[9.4 MemoryRouter - keyLength](#chapter-night-four) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 Redirect](#chapter-ten) |
| &emsp;[10.1 Redirect - from](#chapter-ten-one) |
| &emsp;[10.2 Redirect - to](#chapter-ten-two) |
| &emsp;[10.3 Redirect - push](#chapter-ten-three) |
| &emsp;[10.4 Redirect - exact](#chapter-ten-four) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 Route](#chapter-eleven) |
| &emsp;[11.1 Route - component](#chapter-eleven-one) |
| &emsp;[11.2 Route - render](#chapter-eleven-two) |
| &emsp;[11.3 Route - children](#chapter-eleven-three) |
| &emsp;[11.4 Route - path](#chapter-eleven-four) |
| &emsp;[11.5 Route - exact](#chapter-eleven-five) |
| &emsp;[11.6 Route - location](#chapter-eleven-six) |
| &emsp;[11.7 Route - sensitive](#chapter-eleven-seven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 Switch](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 篇外一：history](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 篇外二：Code Splitting](#chapter-fourteen) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 篇外三：Scroll To Top](#chapter-fifteen) |
| &emsp;[15.1 跳转页面后滚动到顶部](#chapter-fifteen-one) |
| &emsp;[15.2 页面滚动到顶部](#chapter-fifteen-two) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 篇外四：Redux](#chapter-sixteen) |
| <a name="catalog-chapter-seventeen" id="catalog-chapter-seventeen"></a>[十七 总结](#chapter-seventeen) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

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

* 篇外话题：

网上有很多 React Router 文章了，例如：

* [React Router 中文文档（一）](https://segmentfault.com/a/1190000014294604)
* [React Router DOM 中文文档（一）](https://www.jianshu.com/p/97e4af32811a)

为何 **jsliang** 要多次一举？

1. 你记录你的，我记录我的，互相不妨碍。
2. 看这些跟看官网没啥两样，所以我需要亲自动手过一遍官网。
3. 记录我看官网的内容，顺带记录我应用上去的实例，方便我下次回顾。

## <a name="chapter-three" id="chapter-three">三 初试</a>

> [返回目录](#catalog-chapter-three)

**当前版本**：`"react-router-dom": "^5.0.0"`

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

> [返回目录](#catalog-chapter-four)

下面我们拿一些常用的进行介绍：

```js
import { 
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  NavLink,
  Link,
  MemoryRouter,
  Switch,
  withRouter
} from "react-router-dom";
```

1. `<BrowserRouter>`：路由组件包裹层。`<Route>` 和 `<Link>` 的包裹层。
2. `<HashRouter>`：路由组件包裹层。相对于 `<BrowserRouter>` 来说，更适合静态文件的服务器。
3. `<Redirect>`：路由重定向。渲染 `<Redirect>` 将使导航到一个新的地址。
4. `<Route>`：路由。定义一个路由页面，用来匹配对应的组件（Component）和路由路径。
5. `<NavLink>`：活跃链接。当 URL 中的路径等于该路由定义的路径时，该标签可以呈现它定义的 `activeClassName`。
6. `<Link>`：链接。用来跳转到 `<Route>` 对应的路由（Component） 中。
7. `<MemoryRouter>`：暂未使用。`<Router>` 能在内存中保存 `URL` 的历史记录。很适合在测试环境和非浏览器环境中使用，例如 React Native。
8. `<Switch>`：路由分组。渲染与该地址匹配的第一个子节点 `<Route> `或者 `<Redirect>`。可以利用 `<Switch>` 做分组。
9. `<withRouter>`：路由组合。通过 `<withRouter>` 高阶组件访问 `history` 对象的属性和最近的 `<Route>` 的 `match`。或者利用它来结合 Redux。

## <a name="chapter-five" id="chapter-five">五 BrowserRouter</a>

> [返回目录](#catalog-chapter-five)

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

> [返回目录](#catalog-chapter-five)

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

> [返回目录](#catalog-chapter-five)

* 规则：`basename: string`

为里面的子目录提供基础路径名，例如：

```js
<BrowserRouter basename="/calendar">
  <Link to="/today"/> 
  {/* 渲染为 <a href="/calendar/today"> */}
</BrowserRouter>
```

### <a name="chapter-five-three" id="chapter-five-three">5.3 BrowserRouter - getUserConfirmation</a>

> [返回目录](#catalog-chapter-five)

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

> [返回目录](#catalog-chapter-five)

* 规则：`forceRefresh: bool`

如果为 true，则路由器将在页面导航中使用整页刷新

```js
const supportsHistory = 'pushState' in window.history
<BrowserRouter forceRefresh={!supportsHistory}/>
```

### <a name="chapter-five-five" id="chapter-five-five">5.5 BrowserRouter - keyLength</a>

> [返回目录](#catalog-chapter-five)

* 规则：`keyLength: number`

设置它里面路由的 `location.key` 的长度。默认为 6。

> key 的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。

```js
<BrowserRouter keyLength={12}/>
```

## <a name="chapter-six" id="chapter-six">六 HashRouter</a>

> [返回目录](#catalog-chapter-six)

使用 `URL` 的 `hash` 部分（即 `window.location.hash` ）的 `<Router>` 使 `UI` 与 `URL` 保持同步。

**重要提示**`：Hash` 历史记录不支持 `location.key` 或 `location.state`。

```js
import { HashRouter } from 'react-router-dom'

<HashRouter>
  <App/>
</HashRouter>
```

### <a name="chapter-six-one" id="chapter-six-one">6.1 HashRouter - basename</a>

> [返回目录](#catalog-chapter-six)

* 规则：`basename: string`

所有位置的基本 `URL`，格式正确的基本名应该有一个前导斜线，但结尾不能有斜线。

```js
<HashRouter basename="/calendar"/>
<Link to="/today"/> 
{/* 渲染为 <a href="/calendar/today"> */}
```

### <a name="chapter-six-two" id="chapter-six-two">6.2 HashRouter - getUserConfirmation</a>

> [返回目录](#catalog-chapter-six)

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

> [返回目录](#catalog-chapter-six)

* 规则：`hashType: string`

用于 `window.location.hash` 的编码类型。可用的值是：

* `slash` - 创建 `#/` 和的 `#/sunshine/lollipops`
* `noslash` - 创建 `#` 和的 `#sunshine/lollipops`
* `hashbang` - 创建 `ajax crawlable`，如 `#!/` 和
 `#!/sunshine/lollipops`

默认为 `slash`。

## <a name="chapter-seven" id="chapter-seven">七 Link</a>

> [返回目录](#catalog-chapter-seven)

在应用程序周围提供声明式的,可访问的导航。

### <a name="chapter-seven-one" id="chapter-seven-one">7.1 Link - to</a>

> [返回目录](#catalog-chapter-seven)

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

> [返回目录](#catalog-chapter-seven)

* 规则：`replace: bool`

如果为 `true`，则单击链接将替换历史堆栈中的当前入口，而不是添加新入口。

```js
<Link to="/courses" replace>替换当前 hash 路径</Link>
```

### <a name="chapter-seven-three" id="chapter-seven-three">7.3 Link - other</a>

> [返回目录](#catalog-chapter-seven)

还可以传递想要放在 `<a>` 上的属性，例如标题，`ID`、`className` 等。

```js
<Link to="/test" id="myTest">测试 1</Link>
```

> [返回目录](#chapter-one)

## <a name="chapter-eight" id="chapter-eight">八 NavLink</a>

> [返回目录](#catalog-chapter-eight)

一个特殊版本的 Link，当它与当前 URL 匹配时，为其渲染元素添加样式属性。

* 高亮显示首页：`<NavLink to="/timeline" activeClassName="active">首页</NavLink>`

### <a name="chapter-eight-one" id="chapter-eight-one">8.1 NavLink - activeClassName</a>

> [返回目录](#catalog-chapter-eight)

* 规则：`activeClassName: string`

要给出的元素的类处于活动状态时。默认的给定类是 `active`。它将与 `className` 属性一起使用。

```js
<NavLink
  to="/faq"
  activeClassName="selected"
>FAQs</NavLink>
```

### <a name="chapter-eight-two" id="chapter-eight-two">8.2 NavLink - activeStyle</a>

> [返回目录](#catalog-chapter-eight)

* 规则：`activeStyle: object`

当元素处于 active 时应用于元素的样式。

```js
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>
```

### <a name="chapter-eight-three" id="chapter-eight-three">8.3 NavLink - exact</a>

> [返回目录](#catalog-chapter-eight)

* 规则：`exact: bool`

如果为 `true`，则仅在位置完全匹配时才应用 `active` 的类/样式。

```js
<NavLink
  exact
  to="/profile"
>Profile</NavLink>
```

### <a name="chapter-eight-four" id="chapter-eight-four">8.4 NavLink - isActive</a>

> [返回目录](#catalog-chapter-eight)

* 规则：`isActive: function`

一个为了确定链接是否处于活动状态而添加额外逻辑的函数，如果你想做的不仅仅是验证链接的路径名与当前 URL 的 pathname 是否匹配，那么应该使用它

```js
// 如果链接不仅仅匹配 events/123，而是所有奇数链接都匹配
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>
```

## <a name="chapter-night" id="chapter-night">九 MemoryRouter</a>

> [返回目录](#catalog-chapter-night)

`<Router>` 能在内存中保存 `URL` 的历史记录(并不会对地址栏进行读写)。很适合在测试环境和非浏览器环境中使用，例如 React Native。

```js
<MemoryRouter>
  <App/>
</MemoryRouter>
```

### <a name="chapter-night-one" id="chapter-night-one">9.1 MemoryRouter - initialEntries</a>

> [返回目录](#catalog-chapter-night)

* 规则：`initialEntries: array`

`history` 栈中的一个 `location` 数组。这些可能是具有 `{ pathname, search, hash, state }` 或简单的 `URL` 字符串的完整地址对象。

```js
<MemoryRouter
  initialEntries={[ '/one', '/two', { pathname: '/three' } ]}
  initialIndex={1}
>
  <App/>
</MemoryRouter>
```

### <a name="chapter-night-two" id="chapter-night-two">9.2 MemoryRouter - initialIndex</a>

> [返回目录](#catalog-chapter-night)

* 规则：`initialIndex: number`

在 `initialEntries` 数组中的初始化地址索引。

### <a name="chapter-night-three" id="chapter-night-three">9.3 MemoryRouter - getUserConfirmation</a>

> [返回目录](#catalog-chapter-night)

* 规则：`getUserConfirmation: function`

用于确认导航的函数。在使用 `<MemoryRouter>` 时，直接使用 `<Prompt>`，你必须使用这个选项。

### <a name="chapter-night-four" id="chapter-night-four">9.4 MemoryRouter - keyLength</a>

> [返回目录](#catalog-chapter-night)

* 规则：`keyLength: number`

`location.key `的长度。默认为 6。

## <a name="chapter-ten" id="chapter-ten">十 Redirect</a>

> [返回目录](#catalog-chapter-ten)

渲染 `<Redirect>` 将使导航到一个新的地址。这个新的地址会覆盖 `history` 栈中的当前地址，类似服务器端（HTTP 3xx）的重定向。

我们可以设置某个路由重定向到另一个路由，例如下面即对 `/` 完全匹配重定向到 `/timeline` 页面。

```js
<Redirect from="/" to="/timeline" exact />
```

### <a name="chapter-ten-one" id="chapter-ten-one">10.1 Redirect - from</a>

> [返回目录](#catalog-chapter-ten)

* 规则：`from: string`

重定向 `from` 的路径名。可以是任何 `path-to-regexp` 能够识别的有效的 `URL` 路径。

所有匹配的 `URL` 参数都提供给 `to` 中的模式。

必须包含在 `to` 中使用的所有参数。

`to` 未使用的其他参数将被忽略。

```js
<Switch>
  <Redirect from="/old-path" to="/new-path" />
  <Route path="/new-path" component={Place} />
</Switch>
```

### <a name="chapter-ten-two" id="chapter-ten-two">10.2 Redirect - to</a>

> [返回目录](#catalog-chapter-ten)

* 规则：`to: string`

重定向到的 `URL`，可以是任何 `path-to-regexp` 能够理解有效 `URL` 路径。

在 `to` 中使用的 `URL` 参数必须由 `from` 覆盖。

```js
<Redirect to="/somewhere/else" />
```

* 规则：`to: object`

重定向到的 `location`，`pathname` 可以是任何 `path-to-regexp` 能够理解的有效的 `URL` 路径。

```js
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

### <a name="chapter-ten-three" id="chapter-ten-three">10.3 Redirect - push</a>

> [返回目录](#catalog-chapter-ten)

* 规则：`push: bool`

当 `true` 时，重定向会将新地址推入 `history` 中，而不是替换当前地址。

```js
<Redirect push to="/somewhere/else" />
```

### <a name="chapter-ten-four" id="chapter-ten-four">10.4 Redirect - exact</a>

> [返回目录](#catalog-chapter-ten)

* 规则：`exact: bool`

完全匹配 `from`。

## <a name="chapter-eleven" id="chapter-eleven">十一 Route</a>

> [返回目录](#catalog-chapter-eleven)

只要应用程序位置与 Route 的路径匹配，组件就会被渲染。

### <a name="chapter-eleven-one" id="chapter-eleven-one">11.1 Route - component</a>

> [返回目录](#catalog-chapter-eleven)

只有当位置匹配时才会渲染的 React 组件。

```js
<Route path="/user/:username" component={User}/>

const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}
```

### <a name="chapter-eleven-two" id="chapter-eleven-two">11.2 Route - render</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`render: function`

这允许方便的内联渲染和包裹，而不是上面那种不想要的重新安装的解释

可以传递一个在位置匹配时调用的函数，而不是使用属性为您创建新的 `React element component`，该 `render` 属性接收所有相同的 `route props` 的 `component` 渲染属性。

```js
// 行内编写
<Route path="/home" render={() => <div>Home</div>}/>

// 包裹分开写
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)

<FadingRoute path="/cool" component={Something}/>
```

### <a name="chapter-eleven-three" id="chapter-eleven-three">11.3 Route - children</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`children: function`

有时你需要渲染路径是否匹配位置。在这些情况下，您可以使用函数 `children` 属性，它的工作原理与渲染完全一样，不同之处在于它是否存在匹配。

`children` 渲染道具接收所有相同的 `route props` 作为 `component` 和 `render` 方法，如果 `Route` 与 `URL` 不匹配，`match` 则为 `null` ，这允许你动态调整你的 `UI` 界面，基于路线是否匹配，如果路线匹配我们则添加一个 `active` 类。

```js
<ul>
  <ListItemLink to="/somewhere"/>
  <ListItemLink to="/somewhere-else"/>
</ul>

const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)
```

### <a name="chapter-eleven-four" id="chapter-eleven-four">11.4 Route - path</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`path: string`

任何 `path-to-regexp` 可以解析的有效的 `URL` 路径

```js
<Route path="/users/:id" component={User}/>
```

### <a name="chapter-eleven-five" id="chapter-eleven-five">11.5 Route - exact</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`exact: bool`

如果为 `true`，则只有在路径完全匹配 `location.pathname` 时才匹配。

| path | location.pathname | exact | matches? |
| --- | --- | --- | --- |
| /one | /one/two | true | no |
| /one | /one/two | false | yes |

```js
<Route exact path="/one" component={About}/>
```

---

**jsliang** 个人经验：

**知识点 1**. 加了 `exact` 属性后，会完全匹配路径；如果没有加，则二级路径也会匹配当前路径（例如 `/timeline/book`）。

```js
<BrowserRouter>
  <Route path="/" exact component={TimeLine}></Route>
  <Route path="/timeline" component={TimeLine}></Route>
</BrowserRouter>
```

**知识点 2**. 我们可以动态设置 `extra` 的值，从而判断是否需要加载某个组件。

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

### <a name="chapter-eleven-six" id="chapter-eleven-six">11.6 Route - location</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`location: object`

一个 `<Route>` 元素尝试其匹配 `path` 到当前的历史位置（通常是当前浏览器 URL）。但是，也可以通过location 一个不同 `pathname` 的匹配。

### <a name="chapter-eleven-seven" id="chapter-eleven-seven">11.7 Route - sensitive</a>

> [返回目录](#catalog-chapter-eleven)

* 规则：`sensitive: bool`

如果路径区分大小写，则为 `true`，则匹配。

| path | location.pathname | sensitive | matches? |
| --- | --- | --- | --- |
| /one | /one | true | yes |
| /One | /one | true | no |
| /One | /one | false | yes |

```js
<Route sensitive path="/one" component={About}/>
```

## <a name="chapter-twelve" id="chapter-twelve">十二 Switch</a>

> [返回目录](#catalog-chapter-twelve)

渲染与该地址匹配的第一个子节点 `<Route> `或者 `<Redirect>`。

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

## <a name="chapter-thirteen" id="chapter-thirteen">十三 篇外一：history</a>

> [返回目录](#catalog-chapter-thirteen)

`history` 是一个包，在你安装 React Router 的时候，会作为它依赖包安装到项目中，所以你可以直接使用 `history` 中的属性和方法：

* `length` - (`number` 类型) `history` 堆栈的条目数
* `action` - (`string` 类型) 当前的操作(`push`, `replace`, `pop`)
* `location` - (`object` 类型) 当前的位置。`location` 会具有以下属性：
  * `pathname` - (`string` 类型) URL 路径
  * `search` - (`string` 类型) URL 中的查询字符串
  * `hash` - (`string` 类型) URL 的哈希片段
  * `state` - (`object` 类型) 提供给例如使用 `push(path, state)` 操作将
* `location` 放入堆栈时的特定 `location` 状态。只在浏览器和内存历史中可用
* `push(path, [state])` - (`function` 类型) 在 `history` 堆栈添加一个新条目
* `replace(path, [state])` - (`function` 类型) 替换在 `history` 堆栈中的当前条目
* `go(n)` - (`function` 类型) 将 `history` 堆栈中的指针调整 `n`
* `goBack()` - (`function` 类型) 等同于 `go(-1)`
* `goForward()` - (`function` 类型) 等同于 `go(1)`
* `block(prompt)` - (`function` 类型) 阻止跳转

## <a name="chapter-fourteen" id="chapter-fourteen">十四 篇外二：Code Splitting</a>

> [返回目录](#catalog-chapter-fourteen)

随着应用的增长，代码包会随着生长。

到最后你会发现，你打包后的 js 文件大地太多离谱。

所以，我们需要通过代码分割，依据不同的路由，加载不同的 js 文件。

**步骤 1**. 安装 React Loadable：`npm i react-loadable -S`

**步骤 2**. 结合 React Router 和 React Loadable 进行 Code Spliting：

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

**步骤 3**. 打包项目： `npm run build`

## <a name="chapter-fifteen" id="chapter-fifteen">十五 篇外三：Scroll To Top</a>

> [返回目录](#catalog-chapter-fifteen)

### <a name="chapter-fifteen-one" id="chapter-fifteen-one">15.1 跳转页面后滚动到顶部</a>

> [返回目录](#catalog-chapter-fifteen)

**首先**，在全局 components 文件中定义 ScrollToTop 文件夹，其中 index.js 内容为：

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

**然后**，在 App.js 或者其他页面中使用 ScrollToTop 功能：

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

**最后**，我们切换路由的时候，页面就会滚动到顶部。

### <a name="chapter-fifteen-two" id="chapter-fifteen-two">15.2 页面滚动到顶部</a>

> [返回目录](#catalog-chapter-fifteen)

暂未实现

## <a name="chapter-sixteen" id="chapter-sixteen">十六 篇外四：Redux</a>

> [返回目录](#catalog-chapter-sixteen)

在项目中，我们更希望 React Router 和 React Redux 合并起来，这时候可以：

```js
// before
export default connect(mapStateToProps)(Something)

// after
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```
* 参考文献：[Redux Integration](https://reacttraining.com/react-router/web/guides/redux-integration)

## <a name="chapter-seventeen" id="chapter-seventeen">十七 总结</a>

> [返回目录](#catalog-chapter-seventeen)

如果你纯粹过文档（官方文档，**jsliang** 的文档），你会觉得毫无趣味、了无生趣、乏味、沉闷……

所以，**jsliang** 的学法是：开启了一个项目，边翻阅文档，边应用到项目中，并进行 Mark 标记，以便下次使用。

如此，该文档虽然完结了，但是仍未完结！完结的是我过完了官方文档，未完结的是 React Router 在我项目中可能有其他应用，需要我一一添加进来。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
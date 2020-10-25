React 资料整理
===

> Create by **jsliang** on **2020-09-02 15:28:53**  
> Recently revised in **2020-10-19 23:36:29**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 介绍](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 React 相比原生的好处](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 生命周期](#chapter-five) |
| &emsp;[5.1 版本 之前](#chapter-five-one) |
| &emsp;[5.2 版本 之后](#chapter-five-two) |
| &emsp;&emsp;[5.2.1 挂载阶段](#chapter-five-two-one) |
| &emsp;&emsp;[5.2.2 更新阶段](#chapter-five-two-two) |
| &emsp;&emsp;[5.2.3 卸载阶段](#chapter-five-two-three) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 setState](#chapter-six) |
| &emsp;[6.1 调用 setState 之后发生了什么？](#chapter-six-one) |
| &emsp;[6.2 setState 是同步还是异步？](#chapter-six-two) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 组件通讯](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 Redux](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 性能优化](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 Mixin、HOC 和 Hook](#chapter-ten) |
| &emsp;[10.1 Mixin](#chapter-ten-one) |
| &emsp;[10.2 高阶组件（HOC）](#chapter-ten-two) |
| &emsp;[10.3 Hook](#chapter-ten-three) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 参看文献](#chapter-eleven) |
| &emsp;[11.1 面试知识点](#chapter-eleven-one) |
| &emsp;[11.2 系统](#chapter-eleven-two) |
| &emsp;[11.3 生命周期](#chapter-eleven-three) |
| &emsp;[11.4 性能优化](#chapter-eleven-four) |
| &emsp;[11.5 Diff 和 虚拟 DOM](#chapter-eleven-five) |
| &emsp;[11.6 源码](#chapter-eleven-six) |
| &emsp;[11.7 React Mixin](#chapter-eleven-seven) |
| &emsp;[11.8 React Hoc](#chapter-eleven-eight) |
| &emsp;[11.9 React Hooks](#chapter-eleven-night) |
| &emsp;[11.10 React Fiber](#chapter-eleven-ten) |
| &emsp;[11.11 服务端渲染（SSR）](#chapter-eleven-eleven) |
| &emsp;[11.12 组件化](#chapter-eleven-twelve) |
| &emsp;[11.13 其他](#chapter-eleven-thirteen) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

React 也是现如今最流行的前端框架，也是很多大厂面试必备。

React 与 Vue 虽有不同，但同样作为一款 `MV*` 框架，虽然实现可能不一样，但在一些理念上还是有相似的，例如数据驱动、组件化、虚拟 DOM 等。

问题：

* react 有哪些生命周期函数，分别讲下每个生命周期函数会在哪个时候被执行。(大致分为 mount 阶段、state 引起的 render、props 引起的 render 以及 unmount 阶段分别会执行什么生命周期函数)
* react 哪些生命周期可以 setState
* react 中写类组件的时候，如何解决方法 this 丢失问题
   * 在 constructor 里使用 bind
   * 箭头函数
* 使用 bind 和箭头函数的区别
* react 生命周期中，在新版本有些将被废弃，也新增了一些生命周期，讲一下？
* setState 是异步还是同步
* VDOM 渲染原理
* react 和 vue 的区别
* diff 算法

## <a name="chapter-three" id="chapter-three"></a>三 介绍

> [返回目录](#chapter-one)

以前我们没有 jQuery 的时候，我们大概的流程是从后端通过 `ajax` 获取到数据然后使用 jQuery 生成 DOM 结果然后更新到页面当中，但是随着业务发展，我们的项目可能会越来越复杂，我们每次请求到数据，或则数据有更改的时候，我们又需要重新组装一次 DOM 结构，然后更新页面，这样我们手动同步 DOM 和数据的成本就越来越高，而且频繁的操作 DOM，也使我我们页面的性能慢慢的降低。

这个时候 MVVM 出现了，MVVM 的双向数据绑定可以让我们在数据修改的同时同步 DOM 的更新，DOM 的更新也可以直接同步我们数据的更改，这个特定可以大大降低我们手动去维护 DOM 更新的成本，MVVM 为 React 的特性之一，虽然 React 属于单项数据流，需要我们手动实现双向数据绑定。

有了 MVVM 还不够，因为如果每次有数据做了更改，然后我们都全量更新 的更新，DOM 结构的话，也没办法解决我们频繁操作 的更新，DOM 结构(降低了页面性能)的问题，为了解决这个问题，React 内部实现了一套虚拟 的更新，DOM 结构，也就是用 JS 实现的一套 DOM 结构，他的作用是将真实 DOM 在 JS 中做一套缓存，每次有数据更改的时候，React 内部先使用算法，也就是鼎鼎有名的 diff 算法对 DOM 结构进行对比，找到那些我们需要新增、更新、删除的 DOM 节点，然后一次性对真实 DOM 进行更新，这样就大大降低了操作 DOM 的次数。

那么 diff 算法是怎么运作的呢，首先，diff 针对类型不同的节点，会直接判定原来节点需要卸载并且用新的节点来装载卸载的节点的位置；针对于节点类型相同的节点，会对比这个节点的所有属性，如果节点的所有属性相同，那么判定这个节点不需要更新，如果节点属性不相同，那么会判定这个节点需要更新，React 会更新并重渲染这个节点。

React 设计之初是主要负责 UI 层的渲染，虽然每个组件有自己的 `state`，`state` 表示组件的状态，当状态需要变化的时候，需要使用 `setState` 更新我们的组件，但是，我们想通过一个组件重渲染它的兄弟组件，我们就需要将组件的状态提升到父组件当中，让父组件的状态来控制这两个组件的重渲染，当我们组件的层次越来越深的时候，状态需要一直往下传，无疑加大了我们代码的复杂度，我们需要一个状态管理中心，来帮我们管理我们状态 `state`。

这个时候，Redux 出现了，我们可以将所有的 `state` 交给 Redux 去管理，当我们的某一个 `state` 有变化的时候，依赖到这个 `state` 的组件就会进行一次重渲染，这样就解决了我们的我们需要一直把 `state` 往下传的问题。Redux 有 `action`、`reducer` 的概念，`action` 为唯一修改 `state` 的来源，`reducer` 为唯一确定 `state` 如何变化的入口，这使得 Redux 的数据流非常规范，同时也暴露出了 Redux 代码的复杂，本来那么简单的功能，却需要完成那么多的代码。

后来，社区就出现了另外一套解决方案，也就是 MobX，它推崇代码简约易懂，只需要定义一个可观测的对象，然后哪个组价使用到这个可观测的对象，并且这个对象的数据有更改，那么这个组件就会重渲染，而且 MobX 内部也做好了是否重渲染组件的生命周期 `shouldUpdateComponent`，不建议开发者进行更改，这使得我们使用 MobX 开发项目的时候可以简单快速的完成很多功能，连 Redux 的作者也推荐使用 MobX 进行项目开发。但是，随着项目的不断变大，MobX 也不断暴露出了它的缺点，就是数据流太随意，出了 bug 之后不好追溯数据的流向，这个缺点正好体现出了 Redux 的优点所在，所以针对于小项目来说，社区推荐使用 MobX，对大项目推荐使用 Redux。

```
作者：杨溜溜
链接：https://juejin.im/post/6844903715669999629
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## <a name="chapter-four" id="chapter-four"></a>四 React 相比原生的好处

> [返回目录](#chapter-one)

* **组件化**: 其中以 React 的组件化最为彻底，甚至可以到函数级别的原子组件，高度的组件化可以是我们的工程易于维护、易于组合拓展。
* **天然分层**: JQuery 时代的代码大部分情况下是面条代码，耦合严重，现代框架不管是 MVC、MVP 还是 MVVM 模式都能帮助我们进行分层，代码解耦更易于读写。
* **生态**: 现在主流前端框架都自带生态，不管是数据流管理架构还是 UI 库都有成熟的解决方案。
* **开发效率**: 现代前端框架都默认自动更新 DOM，而非我们手动操作，解放了开发者的手动 DOM 成本，提高开发效率，从根本上解决了 UI 与状态同步问题.

## React Fiber

React 的核心流程可以分为两个部分:

* `reconciliation` (调度算法，也可称为 `render`):
  * 更新 `state` 与 `props`
  * 调用生命周期钩子
  * 生成虚拟 DOM
  * 通过新旧 VDOM 进行 `diff` 算法，获取 VDOM `change`
  * 确定是否需要重新渲染
* `commit`
  * 如需要，则操作 DOM 节点更新；

为什么需要 `Fiber`？

随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的情况。

而关键点，便是 **同步阻塞**。

在之前的调度算法中，React 需要实例化每个类组件，生成一颗组件树，使用 **同步递归** 的方式进行遍历渲染，而这个过程最大的问题就是无法 **暂停和恢复**。

所以，为了解决这个问题（同步阻塞），通常有两种方法: **异步** 与 **任务分割**。

而 `React Fiber` 便是为了实现任务分割而诞生的。

`React Fiber` 简述:

* 在 React 16 版本中将调度算法进行了重构， 将之前的 `stack reconciler` 重构成新版的 `fiber reconciler`，变成了具有链表和指针的 **单链表树遍历算法**。通过指针映射，每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启。
* 可以理解为是一种 任务分割调度算法，主要是将原先同步更新渲染的任务分割成一个个独立的 **小任务单位**，根据不同的优先级，将小任务分散到浏览器的空闲时间执行，充分利用主进程的事件循环机制。

`React Fiber` 核心：

* 可以具象为一个数据结构
* 链表树遍历算法
* 任务分割
* 分散执行
* 优先级策略

## <a name="chapter-five" id="chapter-five"></a>五 生命周期

> [返回目录](#chapter-one)

React 逐渐废弃的生命周期方法：

* `componentWillMount`
* `componentWillReceiveProps`
* `componentWillUpdate`

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 版本 之前

> [返回目录](#chapter-one)

![图](./img/react-version-16.3-before.jpg)

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 版本 之后

> [返回目录](#chapter-one)

![图](img/react-version-16.3-after.jpg)

#### <a name="chapter-five-two-one" id="chapter-five-two-one"></a>5.2.1 挂载阶段

> [返回目录](#chapter-one)

* `constructor`：构造函数，最先被执行，通常在构造函数中初始化 `state` 对象或者给自定义方法绑定 `this`
* `getDerivedStateFromProps`：`static getDerivedStateFromProps(nextProps, prevState)`，这是个静态方法，当我们接收到新的属性想去修改我们 `state`，可以使用 `getDerivedStateFromProps`。
* `render`：`render` 函数是个纯函数，只返回需要渲染的东西，不应该包含其他的业务逻辑，可以返回原生 DOM、React 组件、`Fragment`、`Portals`、字符串和数字等内容。
* `componentDidMount`：组件装载之后调用，此时我们可以获取到 DOM 节点并操作，比如对 `Canvas`、`SVG` 等操作。服务器请求、订阅都可以写这个里面，但是记得在 `componentWillUnmount` 中取消订阅。

React 的接口请求是放在 `componentDidMount` 里面比较合适，旧版本有人放在 `componentWillMount` 里面，从而导致多次请求，现在 `componentWillMount` 不推荐使用了，所以转 `componentDidMount` 就非常科学了。

#### <a name="chapter-five-two-two" id="chapter-five-two-two"></a>5.2.2 更新阶段

> [返回目录](#chapter-one)

* `getDerivedStateFromProps`：此方法在更新阶段也会被调用。
* `shouldComponentUpdate`：`shouldComponentUpdate(nextProps, nextState)`，有两个参数，表示新的属性和变化之后的 `state`，返回一个布尔值。如果是 `true` 表示会触发重新渲染，`false` 表示不会触发重新渲染，默认返回 `true`。可以利用这个生命周期来优化 React 程序性能。
* `render`：同挂载阶段 `render`。
* `getSnapshotBeforeUpdate`：`getSnapshotBeforeUpdate(prevProps, prevState)`，这个方法会在 `render` 之后，`componentDidUpdate` 之前调用，有两个参数，表示之前属性和之前的 `state`。这个函数有一个返回值，会作为第三个参数传给 `componentDidUpdate`，如果不需要返回值，可以返回 `null`，这个方法必须和 `componentDidUpdate` 配合使用。
* `componentDidUpdate`：`componentDidUpdate(prevProps, prevState, snapshot)`，在 `getSnapshotBeforeUpdate`
 之后调用，有三个参数，表示之前的 `props`，之前的 `state`，以及 `snapshot`。参数 `snapshot` 是 `getSnapshotBeforeUpdate` 返回的，如果触发某些回调函数时需要用到 `DOM` 元素的状态，则将对比或者计算过程迁移到 `getSnapshotBeforeUpdate`，然后在 `componentDidUpdate` 中统一触发回调或者更新状态。

#### <a name="chapter-five-two-three" id="chapter-five-two-three"></a>5.2.3 卸载阶段

> [返回目录](#chapter-one)

* `componentWillUnmount`：当组件被卸载或者销毁时会被调用，在这里清除定时器，或者取消网络请求，用来清理无效的 DOM 元素等垃圾回收工作。

## <a name="chapter-six" id="chapter-six"></a>六 setState

> [返回目录](#chapter-one)

`setState` 是 React 中用于修改状态，更新视图的方法。

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 调用 setState 之后发生了什么？

> [返回目录](#chapter-one)

在代码中调用 `setState` 之后，React 会将传入的参数对象与组件当前的状态合并，触发所谓的调和过程（`Reconciliation`）。

经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。

在 React 得到元素树之后，React 会自动计算新树和老树之间的节点差异，然后根据差异对界面进行最小化重新渲染。

在差异计算算法（`Diff`）中，React 能够相对精确地知道哪些位置发生了改变以及英国如何改变，保证了按需更新，而不是全部重新渲染。

简单来说：

1. 合并参数对象，触发调和过程
2. 计算新树和老树差异（`Diff`）
3. 根据差异进行最小化重新渲染

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 setState 是同步还是异步？

> [返回目录](#chapter-one)

回答：有时候同步，有时候异步。

1. `setState` 在合成事件和钩子函数中是异步的，在原生事件和 `setTimeout` 是同步的。
2. `setState` 的异步，并不是说内部由异步代码实现，它本身执行的过程和代码是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，从而形成了所谓的异步。
3. `setState` 可以通过第二个参数 `setState(partialState, callback)`，在回调方法中拿到更新后的结果。

## <a name="chapter-seven" id="chapter-seven"></a>七 组件通讯

> [返回目录](#chapter-one)

* **父组件向子组件通讯**：父组件向子组件传 `props` 方式，向子组件进行通讯。
* **子组件向父组件通讯**：父组件在 `props` 中传递方法，然后子组件调用这个方法，将自身需要传递的信息，传递到父组件的作用域中。
* **复杂点的通讯**：借助 React 的 `Context`，或者 `Redux` 进行数据通讯。

## <a name="chapter-eight" id="chapter-eight"></a>八 Redux

> [返回目录](#chapter-one)

网上有挺多关于 `Redux`、`React-Redux`、`Redux-Saga` 的使用，这里就不废话介绍了，还是讲讲 **jsliang** 在工作中的一个使用吧。

> 工作目录

```
- 某个页面文件夹
   - View.jsx     当前页面主入口
   - Child.jsx    子组件
   - Brother.jsx  兄弟组件
   - action.js    动作
   - types.js     类型
   - saga.js      调用接口
   - reducers.js  处理数据
```

正常的一个工作目录如上所示，我们工作中是怎么个使用方式呢？

**首先**，在 `View.jsx` 中通过 `React-Redux` 连接 `React` 和 `Redux`

**然后**，假设现在 `Child.jsx` 需要调用接口（异步处理），那么会：

1. 在 `action.js` 中定义这个方法，会传递什么参数。
2. 其中 `types.js` 是辅助 `action.js` 的一个内容，为了防止方法体的重复，我们会在 `types.js` 中定义大写的 `action` 名字。
3. 这时候就可以在 `View.jsx` 中通过 `dispatch` 触发方法，例如 `dispatch(getPage(page, perPage))`。
4. 这时候，在 `reducers.js` 中和 `sage.js` 中都能监听到这个方法，但是我们是在 `sage.js` 中调用接口并处理数据。
5. 处理完毕之后，再将 `sage.js` 中的传递给 `reducers.js` 中，让它去处理数据。

**接着**，如果 `Brother.jsx` 只是单纯地想处理数据并在 `Child.jsx` 中使用，那么我们处理方式是跟上面一样的，只是直接在 `reducers.js` 中处理，而不需要再在 `sage.js` 中调用接口而已。

**最后**，我们再看看 `redux` 和 `react-reduxt` 的工作流程加深印象：

> Redux

![图](img/redux.jpg)

> React-Redux

![图](img/react-redux.jpg)

## <a name="chapter-night" id="chapter-night"></a>九 性能优化

> [返回目录](#chapter-one)

1. **首屏渲染优化**。`<div id="root"> SVG </div>`，也可以使用插件 `prerender-spa-plugin` 插件进行首屏渲染。
2. **页面切换优化**。使用 `html-webpack-plugin` 插件自动插入 `loading`，这样切换的时候，就不需要在每个页面都写一套 `loading`。
3. **减少业务代码体积**。通过 `Tree Shaking` 来减少一些代码。
4. **提取公共代码**。通过 `SplitChunkPlugin` 自动拆分业务基础库，减少大文件的存在。
5. **切分代码**。通过 `Code Splitting` 来懒加载代码，提高用户的加载体验。例如通过 `React Loadable` 来将组件改写成支持动态 `import` 的形式。
6. **懒加载**。React 可以通过 `react-lazyload` 这种成熟组件来进行懒加载的支持。
7. **页面占位**。有时候加载页面的文本、图片的时候，会出现 “闪屏” 的情况，比如图片或者文字没有加载完毕，对应位置空白，然后加载完毕，会突然撑开页面，导致闪屏。这时候使用第三方组件 `react-placeholder` 可以解决这种情况。

## <a name="chapter-ten" id="chapter-ten"></a>十 Mixin、HOC 和 Hook

> [返回目录](#chapter-one)

前端发展速度非常之快，页面和组件变得越来越复杂，如何更好的实现 **状态逻辑复用** 一直都是应用程序中重要的一部分，这直接关系着应用程序的质量以及维护的难易程度。

`Mixin`、`HOC` 和 `Hook` 是 React 采用的 3 种 **状态逻辑复用** 的技术，`Mixin` 已被抛弃，`HOC` 正当壮年，`Hook` 初露锋芒，掌握它迭代因素和规律非常重要。

### <a name="chapter-ten-one" id="chapter-ten-one"></a>10.1 Mixin

> [返回目录](#chapter-one)

`Mixin`（混入）是一种通过扩展收集功能的方式，它本质上是将一个对象的属性拷贝到另一个对象上面去。

不过你可以拷贝任意多个对象的任意个方法到一个新对象上去，这是继承所不能实现的。

它的出现主要就是为了解决代码复用问题。

![图](img/react-mixin.jpg)

但是，它会带来一些危害：

* `Mixin` 相互依赖、相互耦合，不利于代码维护
* 不同的 `Mixin` 中的方法可能会互相冲突
* `Mixin` 非常多时，组件是可以感知到的，甚至还要为其做相关处理，这样给代码造成滚雪球式的复杂性。

### <a name="chapter-ten-two" id="chapter-ten-two"></a>10.2 高阶组件（HOC）

> [返回目录](#chapter-one)

基于 `Mixin` 的问题，React 推出对装饰模式的一种实现：高阶组件（`HOC`）。

高阶组件接收一个组件作为参数，并返回一个新的组件。

> 高阶组件（`HOC`）是 React 中的高级技术，用来重用组件逻辑。但高阶组件本身并不是 React API。它只是一种模式，这种模式是由 React 自身的组合性质必然产生的。

```js
function visible(WrappedComponent) {
  return class extends Component {
    render() {
      const { visible, ...props } = this.props;
      if (visible === false) return null;
      return <WrappedComponent {...props} />;
    }
  }
}
```

高阶组件可以应用于 日志打点、可用权限控制、双向绑定、表单校验等。

高阶组件解决了 `Mixin` 带来的问题：

* 高阶组件就是一个没有副作用的纯函数，各个高阶组件不会互相依赖耦合
* 高阶组件也有可能造成冲突，但我们可以在遵守约定的情况下避免这些行为
* 高阶组件并不关心数据使用的方式和原因，而被包裹的组件也不关心数据来自何处。高阶组件的增加不会为原组件增加负担

但是，有光的地方总有暗，高阶组件也存在一些缺陷：

* `HOC` 需要在原组件上进行包裹或者嵌套，如果大量使用 `HOC`，将会产生非常多的嵌套，这让调试变得非常困难。
* `HOC` 可以劫持 `props`，在不遵守约定的情况下也可能造成冲突。

### <a name="chapter-ten-three" id="chapter-ten-three"></a>10.3 Hook

> [返回目录](#chapter-one)

`Hook` 是 React `v16.7.0-alpha` 中加入的新特性。它可以让你在 `class` 以外使用 `state` 和其他 React 特性。

使用 `Hook`，你可以在将含有 `state` 的逻辑从组件中抽象出来，这将可以让这些逻辑容易被测试。

同时，`Hook` 可以帮助你在不重写组件结构的情况下复用这些逻辑。

所以，它也可以作为一种实现状态逻辑复用的方案。

`Hook` 使用带来的好处：

* **减少状态逻辑复用的风险**：`Hook` 和 `Mixin` 在用法上有一定的相似之处，但是 `Mixin` 引入的逻辑和状态是可以相互覆盖的，而多个 `Hook` 之间互不影响，这让我们不需要在把一部分精力放在防止避免逻辑复用的冲突上。
* **避免地狱式嵌套**：大量使用 `HOC` 的情况下让我们的代码变得嵌套层级非常深，使用 `Hook`，我们可以实现扁平式的状态逻辑复用，而避免了大量的组件嵌套。
* **让组件更容易理解**：在使用 `class` 组件构建我们的程序时，他们各自拥有自己的状态，业务逻辑的复杂使这些组件变得越来越庞大，各个生命周期中会调用越来越多的逻辑，越来越难以维护。使用 `Hook`，可以让你更大限度的将公用逻辑抽离，将一个组件分割成更小的函数，而不是强制基于生命周期方法进行分割。
* **使用函数代替 class**：相比函数，编写一个 `class` 可能需要掌握更多的知识，需要注意的点也越多，比如 `this` 指向、绑定事件等等。另外，计算机理解一个函数比理解一个 `class` 更快。`Hooks` 让你可以在 `class` 之外使用更多 React 的新特性。

## <a name="chapter-eleven" id="chapter-eleven"></a>十一 参看文献

> [返回目录](#chapter-one)

### <a name="chapter-eleven-one" id="chapter-eleven-one"></a>11.1 面试知识点

> [返回目录](#chapter-one)

**2019**：

* [x] [2019年17道高频React面试题及详解](https://juejin.im/post/5d5f44dae51d4561df7805b4)【阅读建议：1h】

**2018**:

* [x] [关于React面试题汇总](https://juejin.im/post/6844903620664623111)【阅读建议：5min】
* [x] [常见react面试题汇总（适合中级前端）](https://segmentfault.com/a/1190000016885832)【阅读建议：20min】

**2017**：

* [x] [React 常用面试题目与分析](https://zhuanlan.zhihu.com/p/24856035#tipjar)【阅读建议：5min】

### <a name="chapter-eleven-two" id="chapter-eleven-two"></a>11.2 系统

> [返回目录](#chapter-one)

* [x] [React技术揭秘](https://react.iamkasong.com/)【阅读建议：无】
* [ ] [(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂](https://juejin.im/post/6844903801153945608)

**2017**：

* [x] [从零搭建React全家桶框架教程](https://github.com/brickspert/blog/issues/1)【阅读建议：无】

### <a name="chapter-eleven-three" id="chapter-eleven-three"></a>11.3 生命周期

> [返回目录](#chapter-one)

**最新**：

* [x] [React 生命周期查看](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)【阅读建议：10min】

**2019**：

* [x] [React 的生命周期变化](https://juejin.im/post/6844904005152276487)【阅读建议：5min】
* [x] [React生命周期](https://juejin.im/post/6844903842430074893)【阅读建议：5min】

**2018**：

* [x] [React v16.3 版本新生命周期函数浅析及升级方案](https://juejin.im/post/6844903600309665799)【阅读建议：20min】

**2017**：

* [x] [深入React的生命周期(上)：出生阶段(Mount)](https://zhuanlan.zhihu.com/p/30757059)【阅读建议：无】
* [x] [深入React的生命周期(下)：更新(Update)](https://zhuanlan.zhihu.com/p/30971608)【阅读建议：无】

### <a name="chapter-eleven-four" id="chapter-eleven-four"></a>11.4 性能优化

> [返回目录](#chapter-one)

**2019**：

* [x] [React 最佳实践](https://segmentfault.com/a/1190000018107137)【阅读建议：20min】

**2018**：

* [x] [React 16 加载性能优化指南](https://mp.weixin.qq.com/s/XSvhOF_N0VbuOKStwi0IYw)【阅读建议：20min】
* [x] [React中型项目的优化实践](https://juejin.im/post/6844903619913842696)【阅读建议：10min】

**2017**：

* [x] [如何提高你的 React 应用的性能](https://juejin.im/post/6844903518826938382)【阅读建议：10min】
* [x] [将 React 应用优化到 60fps](https://zhuanlan.zhihu.com/p/24959748)【阅读建议：5min】

### <a name="chapter-eleven-five" id="chapter-eleven-five"></a>11.5 Diff 和 虚拟 DOM

> [返回目录](#chapter-one)

**2019**：

* [x] [让虚拟DOM和DOM-diff不再成为你的绊脚石](https://juejin.im/post/6844903806132568072)【阅读建议：20min】

**2018**：

* [x] [深入框架本源系列 —— Virtual Dom](https://juejin.im/post/6844903615652610055)【阅读建议：30min】
* [x] [浅入浅出图解 Dom Diff](https://juejin.im/post/5ad550f06fb9a028b4118d99)【阅读建议：30min】
* [x] [探索Virtual DOM的前世今生](https://zhuanlan.zhihu.com/p/35876032)【阅读建议：30min】
* [x] [你不知道的Virtual DOM系列](https://segmentfault.com/a/1190000016129036)【阅读建议：20min】

**2017**：

* [x] [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)【阅读建议：30min】
* [x] [你真的了解React吗（上）如何设计组件以及重要的生命周期](https://zhuanlan.zhihu.com/p/27828773)【阅读建议：无】

**2015**：

* [x] [深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)【阅读建议：无】

### <a name="chapter-eleven-six" id="chapter-eleven-six"></a>11.6 源码

> [返回目录](#chapter-one)

**2018**：

* [x] [怎样学习React？当然是自己动手实现一个React啦](https://juejin.im/post/6844903593078685709)【阅读建议：无】
* [x] [《React源码解析》系列完结！](https://juejin.im/post/6844903568487497741?utm_medium=fe&utm_source=weixinqun)【阅读建议：无】
* [x] [精读《用160行js代码实现一个React》](https://juejin.im/post/6844903613270065159)【阅读建议：无】

**2017**：

* [x] [React 源码解析](https://zhuanlan.zhihu.com/p/28697362)【阅读建议：无】
* [x] [React源码解析(三):详解事务与更新队列](https://juejin.im/post/6844903511478697998)【阅读建议：无】
* [x] [React-Redux源码分析](https://juejin.im/post/6844903498346135565)【阅读建议：无】
* [x] [源码看React setState漫谈（一）](https://segmentfault.com/a/1190000011170740)【阅读建议：无】
* [x] [源码看React setState漫谈（二）](https://segmentfault.com/a/1190000011184268)【阅读建议：无】
* [x] [Mobx 思想的实现原理，及与 Redux 对比](https://zhuanlan.zhihu.com/p/25585910)【阅读建议：无】

**2015**：

* [x] [React 源码剖析系列 － 生命周期的管理艺术](https://zhuanlan.zhihu.com/p/20312691)【阅读建议：无】
* [x] [React 源码剖析系列 － 玩转 React Transition](https://zhuanlan.zhihu.com/p/20419592)【阅读建议：无】

### <a name="chapter-eleven-seven" id="chapter-eleven-seven"></a>11.7 React Mixin

> [返回目录](#chapter-one)

**2015**：

* [x] [React Mixin 的前世今生](https://zhuanlan.zhihu.com/p/20361937)【阅读建议：无】

### <a name="chapter-eleven-eight" id="chapter-eleven-eight"></a>11.8 React Hoc

> [返回目录](#chapter-one)

**2019**：

* [x] [React 中的高阶组件及其应用场景](https://juejin.im/post/6844903782355042312)【阅读建议：40min】

**2017**：

* [x] [React 高阶组件(HOC)入门指南](https://juejin.im/post/5914fb4a0ce4630069d1f3f6)【阅读建议：10min】
* [x] [深入理解 React 高阶组件](https://zhuanlan.zhihu.com/p/24776678)【阅读建议：10min】

### <a name="chapter-eleven-night" id="chapter-eleven-night"></a>11.9 React Hooks

> [返回目录](#chapter-one)

**2019**：

* [x] [【React深入】从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)【阅读建议：30min】
* [x] [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)【阅读建议：无】
* [x] [React Hooks 原理](https://github.com/brickspert/blog/issues/26)【阅读建议：30min】
* [x] [React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)【阅读建议：3h】

**2018**：

* [x] [30分钟精通React今年最劲爆的新特性——React Hooks](https://segmentfault.com/a/1190000016950339)【阅读建议：30min】

### <a name="chapter-eleven-ten" id="chapter-eleven-ten"></a>11.10 React Fiber

> [返回目录](#chapter-one)

**2018**：

* [x] [完全理解React Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)【阅读建议：20min】
* [x] [React Fiber架构](https://juejin.im/entry/6844903608308236296)【阅读建议：20min】
* [x] [React Fiber 架构介绍资料汇总](https://segmentfault.com/a/1190000012834204)【阅读建议：20min】

### <a name="chapter-eleven-eleven" id="chapter-eleven-eleven"></a>11.11 服务端渲染（SSR）

> [返回目录](#chapter-one)

* [x] [从头开始，彻底理解服务端渲染原理(8千字汇总长文)](https://juejin.im/post/6844903881390964744)【阅读建议：2h】

### <a name="chapter-eleven-twelve" id="chapter-eleven-twelve"></a>11.12 组件化

> [返回目录](#chapter-one)

* [x] [styled-components:前端组件拆分新思路](https://juejin.im/post/6844903878580764686)【阅读建议：5min】

### <a name="chapter-eleven-thirteen" id="chapter-eleven-thirteen"></a>11.13 其他

> [返回目录](#chapter-one)

**2018**：

* [x] [组件库设计实战 - 复杂组件设计](https://zhuanlan.zhihu.com/p/29034015)【阅读建议：无】
* [x] [前端数据校验从建模开始](https://juejin.im/post/6844903667414335501)【阅读建议：20min】
* [x] [React 应用设计之道 - curry 化妙用](https://zhuanlan.zhihu.com/p/35833143)【阅读建议：20min】
* [x] [如何评价React的新功能Time Slice 和Suspense？](https://www.zhihu.com/question/268028123)【阅读建议：20min】
* [x] [如何写出更好的 React 代码？](https://juejin.im/post/6844903600989143054)【阅读建议：20min】
* [x] [React ref 的前世今生](https://zhuanlan.zhihu.com/p/40462264)【阅读建议：20min】
* [x] [你真的理解setState吗？](https://zhuanlan.zhihu.com/p/39512941)【阅读建议：10min】
* [x] [【译】通过Recompose库掌握React函数组件](https://juejin.im/entry/6844903662209204237)【阅读建议：10min】
* [x] [还在用 Redux，要不要试试 GraphQL 和 Apollo](https://juejin.im/post/6844903607523868680)【阅读建议：5min】

**2017**：

* [x] [你真的了解React吗（中）组件间的通信以及React优化](https://zhuanlan.zhihu.com/p/27828866)【阅读建议：10min】

**2015**：

* [x] [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570)【阅读建议：无】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
React 资料整理
===

> Create by **jsliang** on **2020-09-02 15:28:53**  
> Recently revised in **2020-10-19 23:36:29**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

复习知识点：

* [ ] MVVM
* [ ] 生命周期
* [ ] 数据绑定
* [ ] 状态管理
* [ ] 组件通信
* [ ] computed/watch 原理
* [ ] Virtual DOM
* [ ] diff
* [ ] React Hook
* [ ] React Hoc/Vue mixin
* [ ] Vue 和 React 有什么不同
* [ ] ...

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

## 介绍

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

## React 相比原生的好处



## 参看文献

### 面试

* [ ] [2019年17道高频React面试题及详解](https://juejin.im/post/5d5f44dae51d4561df7805b4)
* [ ] [React 常用面试题目与分析](https://zhuanlan.zhihu.com/p/24856035#tipjar)
* [ ] [关于React面试题汇总](https://juejin.im/post/6844903620664623111)
* [ ] [常见react面试题汇总（适合中级前端）](https://segmentfault.com/a/1190000016885832)
* [ ] [(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂](https://juejin.im/post/6844903801153945608)

### 系统

* [ ] [React技术揭秘](https://react.iamkasong.com/)
* [ ] [React 16 加载性能优化指南](https://mp.weixin.qq.com/s/XSvhOF_N0VbuOKStwi0IYw)

### 源码

* [ ] [React 源码剖析系列 － 生命周期的管理艺术](https://zhuanlan.zhihu.com/p/20312691)
* [ ] [Deep In React 之详谈 React 16 Diff 策略(二)](https://juejin.im/post/5d3e3231e51d4510926a7c39)
* [ ] [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
* [ ] [浅入浅出图解 Dom Diff](https://juejin.im/post/5ad550f06fb9a028b4118d99)

### React Hooks

* [ ] [【React深入】从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)
* [ ] [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
* [ ] [React Hooks 原理](https://github.com/brickspert/blog/issues/26)
* [ ] [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)
* [ ] [Deep dive: How do React hooks really work?](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)
* [ ] [【React深入】从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)
* [ ] [React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)
* [ ] [30分钟精通React今年最劲爆的新特性——React Hooks](https://segmentfault.com/a/1190000016950339)
* [ ] [React Hooks 详解（一）](http://huayifeng.top:2368/react-hooks/)

### React Hoc

* [ ] [React 高阶组件(HOC)入门指南](https://juejin.im/post/5914fb4a0ce4630069d1f3f6)
* [ ] [深入理解 React 高阶组件](https://zhuanlan.zhihu.com/p/24776678)

### Vue 和 React 的对比

从思想、生态、语法、数据、通信、diff等角度自己总结一下吧。

### 待整理

* [x] [从头开始，彻底理解服务端渲染原理(8千字汇总长文)](https://juejin.im/post/6844903881390964744)【阅读建议：2h】
* [x] [styled-components:前端组件拆分新思路](https://juejin.im/post/6844903878580764686)【阅读建议：5min】
* [x] [前端数据校验从建模开始](https://juejin.im/post/6844903667414335501)【阅读建议：20min】
* [ ] [React 源码解析](https://zhuanlan.zhihu.com/p/28697362)
* [ ] [从零搭建React全家桶框架教程](https://github.com/brickspert/blog/issues/1)
* [ ] [让虚拟DOM和DOM-diff不再成为你的绊脚石](https://juejin.im/post/6844903806132568072)
* [ ] [《React源码解析》系列完结！](https://juejin.im/post/6844903568487497741?utm_medium=fe&utm_source=weixinqun)
* [ ] [怎样学习React？当然是自己动手实现一个React啦](https://juejin.im/post/6844903593078685709)
* [ ] [React 应用设计之道 - curry 化妙用](https://zhuanlan.zhihu.com/p/35833143)
* [ ] [如何评价React的新功能Time Slice 和Suspense？](https://www.zhihu.com/question/268028123)
* [ ] [React的新引擎—React Fiber是什么](http://www.infoq.com/cn/articles/what-the-new-engine-of-react)
* [ ] [React源码解析(三):详解事务与更新队列](https://juejin.im/post/6844903511478697998)
* [ ] [React中的Transaction](https://oychao.github.io/2017/09/25/react/16_transaction/)
* [ ] [React 源码剖析系列 － 玩转 React Transition](https://zhuanlan.zhihu.com/p/20419592)
* [ ] [如何提高你的 React 应用的性能](https://juejin.im/post/6844903518826938382)
* [ ] [将 React 应用优化到 60fps](https://zhuanlan.zhihu.com/p/24959748)
* [ ] [如何写出更好的 React 代码？](https://juejin.im/post/6844903600989143054)
* [ ] [React中型项目的优化实践](https://juejin.im/post/6844903619913842696)
* [ ] [React 源码剖析系列 － 生命周期的管理艺术](https://zhuanlan.zhihu.com/p/20312691)
* [ ] [深入React的生命周期(上)：出生阶段(Mount)](https://zhuanlan.zhihu.com/p/30757059)
* [ ] [深入React的生命周期(下)：更新(Update)](https://zhuanlan.zhihu.com/p/30971608)
* [ ] [你真的了解React吗（上）如何设计组件以及重要的生命周期](https://zhuanlan.zhihu.com/p/27828773)
* [ ] [React v16.3 版本新生命周期函数浅析及升级方案](https://juejin.im/post/6844903600309665799)
* [ ] [React ref 的前世今生](https://zhuanlan.zhihu.com/p/40462264)
* [ ] [谈谈 react 中的 key](https://juejin.im/post/6844903561197781000)
* [ ] [React Mixin 的前世今生](https://zhuanlan.zhihu.com/p/20361937)
* [ ] [你真的了解React吗（中）组件间的通信以及React优化](https://zhuanlan.zhihu.com/p/27828866)
* [ ] [深入框架本源系列 —— Virtual Dom](https://juejin.im/post/6844903615652610055)
* [ ] [探索Virtual DOM的前世今生](https://zhuanlan.zhihu.com/p/35876032)
* [ ] [深入框架本源系列 —— Virtual Dom](https://juejin.im/post/6844903615652610055#heading-2)
* [ ] [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
* [ ] [浅入浅出图解domDIff](https://juejin.im/post/6844903592520843277)
* [ ] [深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
* [ ] [React 源码剖析系列 － 解密 setState](https://zhuanlan.zhihu.com/p/20328570)
* [ ] [setState的秘密](https://juejin.im/post/6844903492130177037)
* [ ] [setState 之后发生了什么 —— 浅谈 React 中的 Transaction](https://undefinedblog.com/what-happened-after-set-state/)
* [ ] [你真的理解setState吗？](https://zhuanlan.zhihu.com/p/39512941)
* [ ] [React 中的高阶组件及其应用场景](https://juejin.im/post/6844903782355042312)
* [ ] [React 最佳实践](https://segmentfault.com/a/1190000018107137)
* [ ] [完全理解React Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)
* [ ] [React Fiber架构](https://juejin.im/entry/6844903608308236296)
* [ ] [React Fiber 架构介绍资料汇总](https://segmentfault.com/a/1190000012834204)
* [ ] [你不知道的Virtual DOM系列](https://segmentfault.com/a/1190000016129036)
* [ ] [【译】通过Recompose库掌握React函数组件](https://juejin.im/entry/6844903662209204237)
* [ ] [React-Redux源码分析](https://juejin.im/post/6844903498346135565)
* [ ] [源码看React setState漫谈（一）](https://segmentfault.com/a/1190000011170740)
* [ ] [源码看React setState漫谈（二）](https://segmentfault.com/a/1190000011184268)
* [ ] [精读《用160行js代码实现一个React》](https://juejin.im/post/6844903613270065159)
* [ ] [还在用 Redux，要不要试试 GraphQL 和 Apollo](https://juejin.im/post/6844903607523868680)
* [ ] [React 同构实践与思考](https://zhuanlan.zhihu.com/p/20669111)
* [ ] [React 实现 Table 的思考](https://zhuanlan.zhihu.com/p/20848369)
* [ ] [React实践 - Component Generator](https://zhuanlan.zhihu.com/p/21386862)
* [ ] [ReactEurope 2016 小记 - 上](https://zhuanlan.zhihu.com/p/21379350)
* [ ] [ReactEurope 2016 小记 - 下](https://zhuanlan.zhihu.com/p/21616613)
* [ ] [Mobx 思想的实现原理，及与 Redux 对比](https://zhuanlan.zhihu.com/p/25585910)
* [ ] [组件库设计实战 - 复杂组件设计](https://zhuanlan.zhihu.com/p/29034015)
* [ ] [redux middleware 详解](https://zhuanlan.zhihu.com/p/20597452)
* [ ] [深入理解 react-router 路由系统](https://zhuanlan.zhihu.com/p/20381597)
* [ ] [Immutable 详解及 React 中实践](https://zhuanlan.zhihu.com/p/20295971)
* [ ] [React-Redux源码分析](https://zhuanlan.zhihu.com/p/29723405)

## diff 算法

虚拟 DOM 中的 diff 算法

比较原生虚拟 DOM 和新的虚拟 DOM 的区别，使用 Diff（different）算法

![图](../../../../public-repertory/img/js-react-principle-1.png)

如上图，在 React 中，对于 `setState`，它采用异步操作，统一对 `state` 中的数据进行更改。

---

![图](../../../../public-repertory/img/js-react-principle-2.png)

**首先**，比对第一层的 DOM 节点，如果它相同，则往下继续对比；如果它不同，则停止对比，更新第一层及以下的 DOM 节点。

**然后**，比对第二次的 DOM 节点……

**最后**，形成一种比对算法。

![图](../../../../public-repertory/img/js-react-principle-3.png)

---

关于 React 中的 key 值：

1. 如果我们没有在 `for` 遍历中，给节点赋值上相应的 `key` 值，那么，React 的查找就像上图左侧一样，毫无目的，很难进行比较。
2. 当我们使用了相应的 `key` 值时，我们就可以快速找到不同的地方，进行对比，从而方便进行渲染。

现在可以解释，为啥不要使用 `index` 作为 `for` 循环的 `key` 值。

1. 第一次我们添加了：`a - 0、b - 1、 c - 2`
2. 当我们删除了 `a` 之后：`b - 0、c - 1`

这时候，我们对应的 `key` 值就变了，我们就需要重新渲染整个 DOM 节点了。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
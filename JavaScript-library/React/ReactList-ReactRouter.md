React List - React Router
===

> Create by **jsliang** on **2019-04-26 13:13:18**  
> Recently revised in **2019-04-26 13:13:21**

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

> 我瞎吹的，最好自己百度 **前端路由** 是啥。

* 参考资料：

1. [React Router 官方文档](https://reacttraining.com/react-router/web/guides/quick-start)
2. [React Router DOM 中文文档（一） - 简书](https://www.jianshu.com/p/97e4af32811a)
3. [React Router DOM 中文文档（二） - 简书](https://www.jianshu.com/p/5796c360e776)

## <a name="chapter-three" id="chapter-three">三 初试</a>

> [返回目录](#chapter-one)

```js
import { BrowserRouter, Route, Link } from "react-router-dom";
```

* `<BrowserRouter>`：路由组件包裹层。`<Route>` 和 `<Link>` 的包裹层。
* `<Route>`：路由。定义一个路由页面，用来匹配对应的组件（Component）和路由路径。
* `<Link>`：链接。用来跳转到 `<Route>` 对应的路由（Component） 中。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
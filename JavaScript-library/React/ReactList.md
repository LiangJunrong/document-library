React 知识点清单
===

> create by **jsliang** on **2019-04-23 14:10:18**   
> Recently revised in **2019-04-24 11:24:37**

记录 React 学习及工作中，第一次使用某个知识点的使用场景。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 清单](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Create React App](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 DvaJS](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Service Workers](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

**求你别更新了，我学不过来了！**

别笑，这是事实。

现在前端界的玩意真的太多了，有些东西你听都没听过，然后招聘信息居然 *明目张胆* 的贴着招聘须具备 XX 技能，看得你目瞪口呆。

所以，这篇文章仅仅罗列知识点及其简单使用，更深一步的时候还是看我其他的实战文章。

> 由于是罗列，有时候你会发现它毫无逻辑，毕竟 —— 仅仅是罗列。

## <a name="chapter-three" id="chapter-three">三 清单</a>

> [返回目录](#chapter-one)

1. **Create React App**：构建一个 React 的脚手架工具
   1. [【通过本文快速了解】](#chapter-four)
   2. [Create React App 中文文档](https://www.html.cn/create-react-app/)
2. **DvaJS**：类似 Create React App 的优化 React 开发的脚手架工具
   1. [【通过本文快速了解】](#chapter-five)
   2. [DvaJS 官网](https://dvajs.com/)
3. **Service Worker**：具有离线缓存作用，能让浏览器在网速差或者网络不通的情况下，还能访问网站的静态资源。
   1. [【通过本文快速了解】](#chapter-six)
   2. [Service Workers API - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
   3. [制作渐进式 Web 应用程序(PWA)](https://www.html.cn/create-react-app/docs/making-a-progressive-web-app/)

## <a name="chapter-four" id="chapter-four">四 Create React App</a>

> [返回目录](#chapter-one)

通过运行一个命令来建立现代 Web 应用程序，来帮助你快速开发 React 项目。

* 步骤：

1. 下载 Node.js
2. 安装 React 脚手架：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`

* 参考链接：[Create React App 中文文档](https://www.html.cn/create-react-app/)

## <a name="chapter-five" id="chapter-five">五 DvaJS</a>

> [返回目录](#chapter-one)

* 什么是 DvaJS？

dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

说白了，它是类似于 create-react-app 的，帮你配置脚手架的工具，可以让你快速搭建项目。

* 参考链接：[DvaJS 官网](https://dvajs.com/)

## <a name="chapter-six" id="chapter-six">六 Service Workers</a>

> [返回目录](#chapter-one)

在使用 Create React App 创建新项目时，会默认装上未开启的 Service Workers。

* 什么是 Service Workers？

Service Workers 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步 API。

* 为什么加入 Service Workers？

在 Create React App 中，由于离线优先的 Progressive Web Apps（渐进式 Web 应用程序）比传统网页更快，更可靠，并提供了很好的移动体验，所以它将 Service Workers 添加了进来。

* 如何开启 Service Workers？

修改 `src/index.js` 目录中的 `serviceWorker.unregister();` 为 `serviceWorker.register()` 即可开启离线缓存功能。

进一步定制需要自行百度/Chrome。

* 参考链接：

1. [Service Workers API - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
2. [制作渐进式 Web 应用程序(PWA)](https://www.html.cn/create-react-app/docs/making-a-progressive-web-app/)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
Vue SSR 服务端渲染
===

> Create by **jsliang** on **2018-12-29 20:04:33**  
> Recently revised in **2018-12-29 20:04:37**

* `vue-router` 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

* 为什么会有 SPA
  * `localhost:8080/#/xxx` 不会因为用户的字段输入而刷新
  * 可以通过 `location.hash` 控制路由

* history 模式
  * 去除了 # 的方式，每次都向服务器请求 index.html，再由客户端分析当前 url，做不同的变化

* 实现原理
  * 在页面中通过 `location.pathname` 获取当前请求 url
  * 让服务器不论什么请求都返回以上这个 index.html

* SPA 是什么
  * Vue-Router 中是否可以不使用 # 来开发 -> history 模式，默认是 hash 模式
  * 在 history 模式中，可以使用 scroll 导航后滚动（history 模式实现其实基于服务器每次返回 index.html，而客户端根据 `location.pathname` 来做渲染）

* SEO 是什么 - 搜索引擎优化
  * SPA 下 SEO 必然比较差
  * 使用预渲染，固定的页面，作为服务器响应的结果回来 - history 模式


* Vue SPA 实现 SEO 优化
  * [vue项目做seo（prerender-spa-plugin预渲染）](https://blog.csdn.net/yftk765768540/article/details/81047145)

1. 下载 `npm i prerender-spa-plugin -D`
2. 配置 `webpack.prod.js` 文件

> webpack.prod.js

```
const PrerenderSpaPlugin = require('prerender-spa-plugin');
plugins: [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, '..', 'dist'),
    // Required - Routes to render.
    routes: [ '/', '/user' ] // 根据这两个路由规则找到组件渲染 HTML 文件
  })
]
```

3. 配置路由变更对象，传递构造属性
   1. `mode: history`
4. 构建项目代码：`npm run build`
5. 进入 dist 目录，启动生成的代码
   1. `node index.js`
6. 效果

* 骨架屏
  * Skeleton Screen - 骨架屏。骨架屏就是在页面数据尚未加载前先给用户展示出页面的大致结构，直到请求数据返回后再渲染页面，补充进需要显示的数据内容。常用于文章列表、动态列表页。
  * 相当于 loading 图标而言，用户可以预览未来要看的结构，同时避免白屏的尴尬，还能操作。因此用户体验较好。
  * [Vue 页面骨架屏注入实践](https://segmentfault.com/a/1190000014832185)

* [LAVAS - 基于 Vue.js 的 PWA 解决方案](https://lavas.baidu.com/)

1. `npm i lavas -g`
2. `lavas init`
3. 选择包含 app_shell，也包含了骨架屏的功能

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
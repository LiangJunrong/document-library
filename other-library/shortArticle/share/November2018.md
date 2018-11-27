2018 前端开发分享
===

> Create by **jsliang** on **2018-11-26 08:10:27**  
> Recently revised in **2018-11-27 08:57:01**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 历史发展](#chapter-three) |
| &emsp;[3.1 原始社会](#chapter-three-one) |
| &emsp;[3.2 石器时代](#chapter-three-two) |
| &emsp;[3.3 铁器时代](#chapter-three-three) |
| &emsp;[3.4 工业时代](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 技术比较](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 经验分享](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 思考总结](#chapter-six) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;受邀于 **[中国电信](https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8?fromtitle=%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1&fromid=138709)** 旗下 **[天翼爱音乐文化技术有限公司](https://baike.baidu.com/item/%E7%88%B1%E9%9F%B3%E4%B9%90/13684469?fr=aladdin)** 的邀请，于 **2018年11月** 做个小小的技术分享，分享内容有：前端发展史、JQuery 与 Vue/React/Angular 的比较、前端开发经验分享与总结等……

&emsp;参考文献：

* [前端发展史 | 博客园 - kidney](https://www.cnblogs.com/kidney/p/6079530.html)
* [前端发展史 | 简书 - 迷缘火叶](https://www.jianshu.com/p/8dc5c6aa01fc)
* [前端开发的历史和趋势 | CSDN - 红豆灬](https://blog.csdn.net/doulinxu/article/details/64906673?locationNum=2&fps=1)
* [前端基础历史 | 百度前端技术学院 - 刘文超](http://ife.baidu.com/note/detail/id/1266)

&emsp;参与协助：

* **[腾讯科技有限公司 TEG 部](https://hr.qq.com/environment.html)** - **陈建光**
* **[杭州店家科技 智慧财务线](https://www.lagou.com/gongsi/73675.html)** - **靳宗楠**

<br>

# <a name="chapter-three" id="chapter-three">三 历史发展</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;以铜为镜，可以正衣冠；  
&emsp;以古为镜，可以知兴替；  
&emsp;以人为镜，可以明得失。  

&emsp;了解一门技术的历史，可以帮助我们更清晰地了解这个行业的动态。

<br>

# <a name="chapter-three-one" id="chapter-three-one">3.1 原始社会</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;很久很久很久以前，在 **jsliang** 出生的前一年，即 1994 年的时候，网景公司 (Netscape Communications) 推出了第一款浏览器：NCSAMosaic，但是它只有少数的幸运儿才能使用。

![图](../../../public-repertory/img/other-share-1.png)

&emsp;它的初始作用，是为了方便科学家看文档、传论文。所以，到今天为止，学前端的人在接触 HTML 的时候，都会记得它的第一句有个词是 `Document`。  
&emsp;这时候的互联网，无疑是处于**原始社会**。  

![图](../../../public-repertory/img/other-share-5.png)


&emsp;你的标点符号变了？OK，下载过一个新的页面；  
&emsp;你提交了一个表单？OK，白屏等待许久，最后返回给你个 “用户名错误”；  
&emsp;你电商网站有一千种商品？OK，那你写一千个页面吧……  

&emsp;同时，这时候的互联网，前后端开发是一体的，前端代码是后端代码的一部分。  
&emsp;即：后端收到浏览器的请求 ---> 发送静态页面 ---> 发送到浏览器。

<br>

# <a name="chapter-three-two" id="chapter-three-two">3.2 石器时代</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;也在同一年(1994)，PHP 出现了，有了将数据嵌入到 HTML 中的形式，这意味着互联网行业出现了钻木取火。

&emsp;这时候的互联网，兴起了数据嵌入模板，模板直接写样式的开发模式，例如 MVC 模式：

* Model（模型层）：提供/保存数据。
* Controller（控制层）：数据处理，实现业务逻辑。
* View（视图层）：展示数据，提供用户界面。

&emsp;在此时，前端只是后端 MVC 中的 V，所以那时候的所谓 “前端工程师”，就是 “切图仔”，因为后端太忙没空写页面样式让它长得更好看些，前端编写页面模板后，后端代码读取模板，替换变量，渲染出页面。

&emsp;相似的：

&emsp;PHP 直接将数据内嵌到 HTML 中。  
&emsp;ASP.net 的 ASPX，在 HTML 中嵌入 C# 代码。  
&emsp;Java 的 JSP 直接将数据嵌入到网页中。

&emsp;以 PHP 框架的 Laravel 为例：

![图](../../../public-repertory/img/other-share-3.png)

<br>

# <a name="chapter-three-three" id="chapter-three-three">3.3 铁器时代</a>

> [返回目录](#catalog-chapter-three)

<br>

<br>

# <a name="chapter-three-four" id="chapter-three-four">3.4 工业时代</a>

> [返回目录](#catalog-chapter-three)

<br>


&emsp;————————————————————

&emsp;刀耕火种 -> 现代社会  
&emsp;jQuery 梭哈（目前还有） -> 前端工程化：gulp + jquery -> Angular 等出现：MV* 时代 -> Webpack + 数据驱动虚拟 DOM + Vue/React/Angular  
&emsp;现代化社会：Vue、React、Angular 三大框架并驾齐驱。其他框架虽然也有在陆续发布，但是脱离不了这三大框架魔爪。UI 框架来说，桌面端的 ElementUI、NW JS；移动端的RN、Weex  
&emsp;Node 的发展，加速 JS 的进步。

&emsp;————————————————————

&emsp;Model-View-Controller

&emsp;————————————————————

1. 什么是前端？

* 前端：针对浏览器的开发，代码在浏览器运行
* 后端：针对服务器的开发，代码在服务器运行

2. 前后端不分的时代？

&emsp;互联网发展的早期，前后端开发是一体的，前端代码是后端代码的一部分。  
&emsp;后端收到浏览器的请求 -> 发送静态页面 -> 发送到浏览器

3. 后端 MVC 的开发模式？

* Model（模型层）：提供/保存数据
* Controller（控制层）：数据处理，实现业务逻辑
* View（视图层）：展示数据，提供用户界面

> 在此时，前端只是后端 MVC 中的 V，所以那时候的所谓 “前端工程师”，就是 “切图仔”，因为后端太忙没空写页面样式让它长得更好看些，前端编写页面模板后，后端代码读取模板，替换变量，渲染出页面。



&emsp;PHP 代码：

```
<html>
  <head><title>Car {{ $car->id }}</title></head>
  <body>
    <h1>Car {{ $car->id }}</h1>
    <ul>
      <li>Make: {{ $car->make }}</li>
      <li>Model: {{ $car->model }}</li>
      <li>Produced on: {{ $car->produced_on }}</li>
    </ul>
  </body>
</html>
```

4. 前端第一次史诗级进步？

&emsp;Ajax 的诞生，促进了第一次史诗级进步：Web 2.0 的诞生，前端不再是后端的模板，可以独立得到各种数据。

* Web 1.0：静态网页，纯内容展示
* Web 2.0：动态网页，富交互，前端数据处理

* 2004 年：Gmail
* 2005 年：Google 地图

5. MVVM 模式？

* Model
* View
* View-Model：简化的 Controller，唯一的作用就是为 View 提供处理好的数据，不含其它逻辑。

![图](../../../public-repertory/img/other-share-4.png)

6. SPA？

&emsp;SPA = Single-page application  
&emsp;这意味着，网页其实就是一个应用程序，它可以做到：

* 读写数据
* 切换视图
* 用户交互

7. Vue、React、Angular？

&emsp;双向数据绑定介绍

8. 前后端通讯？

&emsp;后端暴露 RESTFul 接口。  
&emsp;前端通过 Ajax，以 HTTP 通信协议与后端通信。

9. Node？

&emsp;2009 年，Node 诞生，它是服务器上的 JavaScript 运行环境。  
&emsp;Node = JavaScript + 操作系统 API。  
&emsp;JavaScript 成为服务端脚本语言，与 Python 和 Ruby 一样。  
&emsp;JavaScript 成为唯一的浏览器和服务器都支持的语言。  
&emsp;前端工程师可以编写后端程序了，大前端往全栈发展。

10. 全栈技能？

* 传统前端技能：HTML、JavaScript、CSS
* 一门后端语言
* 移动端开发：IOS、Android、H5
* 其他技能：数据库、HTTP 协议。

&emsp;————————————————————

1. js 操作 HTML

* 原生 JavaScript 操作 DOM 节点

&emsp;代码演示：

```
………………
```

2. jQuery 阶段

* jQuery 在操作 DOM 节点的基础上，还解决了许多的浏览器兼容问题（IE 系列）

&emsp;代码演示：

```
………………
```

3. MVC 模式阶段

4. MVVM 模式阶段

&emsp;————————————————————

1. jQuery Todolist 及其代码演示
2. Vue Todolist 及其代码演示

<br>

# <a name="chapter-four" id="chapter-four">四 技术比较</a>

> [返回目录](#catalog-chapter-four)

<br>

* 1994 年，网景浏览器。所有网页基于 HTML + CSS。
* 1994 年，PHP 创建，利用模板引擎实现了与数据库交互用于生产动态页面。
* 1995 年，网景推出了 JavaScript。
* 1996 年，微软推出 iframe 标签，实现异步的局部加载。
* 1999 年，Ajax 有了雏形，2006 年，XMLHttpRequest(Ajax) 才被 W3C 正式纳入标准。
* 2006 年，用于操作 DOM 的 jQuery 出现，它快速风靡了全球，大量的基于 jQuery 的插件构成了一个庞大的生态系统，稳固了 jQuery 作为 JS 库一哥的地位。
* 2008 年，谷歌 V8 引擎发布，终结微软 IE 时代。
* 2009 年 AngularJS 诞生。
* 2011 年 React 诞生。
* 2014 年 Vue.js 诞生。
* 如今，后端负责数据，前端负责其余工作越发明显化：

![图](../../../public-repertory/img/other-share-2.png)

* 2009 年，基于 V8 引擎的服务端 JavaScript 运行环境：Node 诞生，类似于一个虚拟机，也就是说 JS 在服务端语言中有了一席之地。
* Ajax 是前端的第一次飞跃；Node 是前端的第二次飞跃。

## 手机端

* 2007 年第一代 iPhone 发布。
* 2008 年第一台安卓手机发布。
* 一开始是 Native App 的天下，现在 Web App 逐渐取代，React Native、微信小程序等不断提升。

<br>

# <a name="chapter-five" id="chapter-five">五 经验分享</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;

<br>

# <a name="chapter-six" id="chapter-six">六 思考总结</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
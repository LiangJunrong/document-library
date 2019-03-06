jsliang 的 2019 面试准备
===

> Create by **jsliang** on **2018-2-11 15:30:34**  
> Recently revised in **2019-3-6 13:49:43**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/InterviewPreparation.md)**

Hello 小伙伴们好，我叫梁峻荣，网名叫 **jsliang**，由于崇拜前端大佬技术胖（*jspang*）的原因，又因为自己学的是 JavaScript，所以给自己取了个 **jsliang**（*JavaScriptLiang*） 的网名，希望自己能在前端路上走得更远，并通过建立自己的前端知识体系分享给小伙伴，携手小伙伴们一起前行。

**首先**，**jsliang** 高考后的暑期就听大学师兄的建议，开始学习编程，那时候学习了 C 语言，觉得世界上最神奇的事情不过如此，敲两下键盘，按下回车，电脑就会一闪一闪地响应我们！于是在大学的时候，陆陆续续学过 C、C#、.Net……等。

> **-_-|| 由于都还给老师了，在这里就不多累述了。**

**然后**，在大二就开始接触 HTML，那时候选修了《网页设计基础》，跟着老师做了个只有几个页面的静态网站。在大三的时候，参加了学校的特训班，分角色按流程从头到尾做了个实现了购物功能的网站。同时，由于在特训班的时候，看到后端使用 ThinkPHP（简称 TP），觉得蛮不错的，于是自己捣鼓，使用 TP 3.2.3 + Bootstrap 3 + MySQL 打造了自己的博客（已下线）。

**接着**，由于选修了门 Node.js 的课，所以也跟着大佬的步伐接触了下 Vue、Koa 这些，那时候对 npm 等诸多不懂，为了折腾这个，我的前端世界自此打开了个大门。

**最后**，我在自己的毕业设计中使用 Node.js + Vue + ElementUI + MongoDB 打造了个校园外卖、快递代拿社区单页应用。

在 2018 年 5 月的时候，直接出来面试。不像其他大佬的毕业等于失业，很幸运地 **jsliang** 面试第一家就给了 offer，于是就进了这家公司，那时候感觉自己只懂 ES5、jQuery、HTML/HTML5、CSS/CSS3 的皮毛。

在熟悉了三个月的业务，公司给的任务能顺利完成后，我觉得自己不够努力，外面的前端翻天覆地，我的技术却只是梭哈 jQuery！

于是 2018 年 8 月，**jsliang** 开始写 Markdown，将 5 月份到 8 月份记录到 Word 文档上的笔记整理成了 [jsliang 的文档库](https://github.com/LiangJunrong/document-library)，并在 [jsliang 的掘金](https://juejin.im/user/584613ba128fe10058b3cf68) 发表了第一篇文章。

8 月至今，**jsliang** 大致经历了以下这些：

1. 学 Webpack，并用 Webpack 构建一个多页面配置。然后幸运的是，刚好碰到公司的一个扒站任务，于是整个前端小组直接用了我的 Webpack + jQuery + VS Code 的 Live Share 套路进行协同开发！
2. 学 微信小程序，并将它应用到电信开发的微信小程序项目翼小微中。
3. 学 ECharts 报表，并用它做了个 Vue + ECharts 的报表，来展示爱音乐公司的运营数据。
4. 学 Node，然后搭了个企业网站（http://company.jsliang.top），并写了篇小文章（目前最高成就，获得了 1100 多赞）。
5. 学 Vue，由于之前的 Vue 工作上有好多没有，逐渐淡忘了，所以从基础开始，准备写一套《Vue 从 0 到 1》。

以上，就是 **jsliang** 的编程生涯。

今儿，在这里写写 **jsliang** 为了跳槽，根据个人想法进行的一些前端面试资料整理，小伙伴们觉得不错的点个赞或者去 GitHub 点个 star，觉得有误请指出，谢谢~

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;[√] [2.1 跳槽原委](#chapter-two-one) |
| &emsp;[√] [2.2 进击目标](#chapter-two-two) |
| &emsp;[√] [2.3 开篇点题](#chapter-two-three) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 HTML](#chapter-three) |
| &emsp;[√] [3.1 HTML 学习推荐](#chapter-three-one) |
| &emsp;[√] [3.2 HTML 语义化](#chapter-three-two) |
| &emsp;[√] [3.3 HTML5 新标签](#chapter-three-three) |
| &emsp;[√] [3.4 常见浏览器及其内核](#chapter-three-four) |
| &emsp;[√] [3.5 cookies、session、sessionStorage、localStorage](#chapter-three-five) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 CSS](#chapter-four) |
| &emsp;[√] [4.1 CSS 学习推荐](#chapter-four-one) |
| &emsp;[√] [4.2 CSS reset](#chapter-four-two) |
| &emsp;[√] [4.3 CSS 盒模型](#chapter-four-three) |
| &emsp;[√] [4.4 CSS 单位](#chapter-four-four) |
| &emsp;[√] [4.5 CSS 选择器](#chapter-four-five) |
| &emsp;[√] [4.6 CSS 常见布局](#chapter-four-six) |
| &emsp;[√] [4.7 CSS3 新特性](#chapter-four-seven) |
| &emsp;[√] [4.8 BFC](#chapter-four-eight) |
| &emsp;[√] [4.9 行内元素和块级元素](#chapter-four-night) |
| &emsp;[√] [4.10 行内样式、内嵌式、链接式以及导入式](#chapter-four-ten) |
| &emsp;[√] [4.11 水平垂直居中](#chapter-four-eleven) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 JavaScript](#chapter-five) |
| &emsp;[√] [5.1 JS 学习推荐](#chapter-five-one) |
| &emsp;[√] [5.2 JS 引用方式](#chapter-five-two) |
| &emsp;[√] [5.3 原型与原型链](#chapter-five-three) |
| &emsp;[√] [5.4 作用域与闭包](#chapter-five-four) |
| &emsp;[√] [5.5 浅拷贝与深拷贝](#chapter-five-five) |
| &emsp;[√] [5.6 模块化与组件化](#chapter-five-six) |
| &emsp;[√] [5.7 面向对象与面向过程](#chapter-five-seven) |
| &emsp;[5.8 JS 继承](#chapter-five-eight) |
| &emsp;[5.9 防抖与节流](#chapter-five-night) |
| &emsp;[5.10 ES6](#chapter-five-ten) |
| &emsp;[5.11 函数柯里化](#chapter-five-eleven) |
| &emsp;[5.12 数组操作](#chapter-five-twelve) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六  Vue](#chapter-six) |
| &emsp;[6.1 MVVM](#chapter-six-one) |
| &emsp;[6.2 生命周期](#chapter-six-two) |
| &emsp;[6.3 双向数据绑定](#chapter-six-three) |
| &emsp;[6.4 Virtual DOM](#chapter-six-four) |
| &emsp;[6.5 template 编译](#chapter-six-five) |
| &emsp;[6.6 key](#chapter-six-six) |
| &emsp;[6.7 nextTick](#chapter-six-seven) |
| &emsp;[6.8 虚拟 DOM](#chapter-six-eight) |
| &emsp;[6.9 父子组件通讯](#chapter-six-night) |
| &emsp;[6.10 Vue-Router](#chapter-six-ten) |
| &emsp;[6.11 Vuex](#chapter-six-eleven) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 微信小程序](#chapter-seven) |
| &emsp;[7.1 文件主要目录及文件作用](#chapter-seven-one) |
| &emsp;[7.2 微信小程序生命周期](#chapter-seven-two) |
| &emsp;[7.3 微信小程序提供的常用 API](#chapter-seven-three) |
| &emsp;[7.4 如何封装数据请求](#chapter-seven-four) |
| &emsp;[7.5 页面数据传递](#chapter-seven-five) |
| &emsp;[7.6 加载性能优化的方法](#chapter-seven-six) |
| &emsp;[7.7 微信小程序与原生 APP、Vue、H5 差异](#chapter-seven-seven) |
| &emsp;[7.8 微信小程序原理](#chapter-seven-eight) |
| &emsp;[7.9 微信小程序异步请求](#chapter-seven-night) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 浏览器](#chapter-eight) |
| &emsp;[8.1 浏览器架构](#chapter-eight-one) |
| &emsp;[8.2 从输入 URL 到展示](#chapter-eight-two) |
| &emsp;[8.3 Event Loop](#chapter-eight-three) |
| &emsp;[8.4 重绘与回流](#chapter-eight-four) |
| &emsp;[8.5 数据存储](#chapter-eight-five) |
| &emsp;[8.6 内存管理与垃圾回收](#chapter-eight-six) |
| &emsp;[8.7 内存泄漏](#chapter-eight-seven) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 网络协议](#chapter-night) |
| &emsp;[9.1 网络分层](#chapter-night-one) |
| &emsp;[9.2 HTTP/HTTPS](#chapter-night-two) |
| &emsp;[9.3 HTTP 状态码](#chapter-night-three) |
| &emsp;[9.4 TCP 三次握手与四次挥手](#chapter-night-four) |
| &emsp;[9.5 跨域](#chapter-night-five) |
| &emsp;[9.6 网络安全](#chapter-night-six) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 性能优化](#chapter-ten) |
| &emsp;[10.1 HTML 优化](#chapter-ten-one) |
| &emsp;[10.2 CSS 优化](#chapter-ten-two) |
| &emsp;[10.3 JavaScript 优化](#chapter-ten-three) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 算法](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 其他](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 总结](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 参考文献](#chapter-fourteen) |
| &emsp;[14.1 关于面试](#chapter-fourteen-one) |
| &emsp;[14.2 关于 HTML](#chapter-fourteen-two) |
| &emsp;[14.3 关于 CSS](#chapter-fourteen-three) |
| &emsp;[14.4 关于 JS](#chapter-fourteen-four) |
| &emsp;[14.5 关于其他](#chapter-fourteen-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

**请时刻准备好自己的简历，不管是互联网经济不佳面临裁员，还是因为公司内部斗争严重心乱如麻，还是因为厌倦了目前的一切……只有随时更新自己，把自己的简历准备好，你才知道哪一刻跑路是最佳选择。**

### <a name="chapter-two-one" id="chapter-two-one">2.1 跳槽原委</a>

> [返回目录](#catalog-chapter-two)

跳槽的两个原因：

1. 钱没给到位。
2. 心被委屈了。

如果非要给 **jsliang** 我自己的跳槽定个位，首先是钱没给到位，劳动与产出不成正比：在我 2018 年 5 月入职前，与人事的交谈是转正 5.5K，一年中 8 月和 2 月可以提薪，当初的技术栈是：HTML、CSS、ES5。

然后，2018 年 6 月到 2019 年 1 月，学习并应用到工作中的技术有：

1. jQuery
2. Webpack
3. JSP
4. 微信小程序
5. Vue
6. ECharts

其中 2018 年 8 月刚转正，也不敢说自己技术进步很大，也不敢说自己项目贡献很大，所以没有提薪想法。2019 年 1 月底感觉自己项目也做了，凌晨 4/5/6 点的体育西路也看过了，技术也提升了，于是跟人事交谈，期望 2 月能加薪，人事表示年终述职演讲得好的给提薪，2 月开工的时候表示提薪名单没我份……

> 你没看错，提薪全靠 PPT。  
> 当初想法很简单，你随便加个 5/600 我也满足了。

最后，**jsliang** 曾跟项目总监私下谈话，建议可以发展一些新产品，这样公司或许能获取一些新收入，我也可以进一步挑战我的技术。但是，由于我司是个老牌子公司，并且大部分依赖于接手电信项目进行扩张……

enm...所以心也委屈了。

> 在 2018 的努力下，GitHub 破 600 近 700 star，掘金破 10 万阅读量，3000 粉丝：  
> GitHub 见证：[点击查看](https://github.com/LiangJunrong)  
> 掘金见证：[点击查看](https://juejin.im/user/584613ba128fe10058b3cf68)

### <a name="chapter-two-two" id="chapter-two-two">2.2 进击目标</a>

> [返回目录](#catalog-chapter-two)

* 目标城市：广州
* 目标薪资：10K - 15K
* 目标技术：

```
1. 熟悉 HTML/HTML5、CSS/CSS3、ES5/ES6。
2. 了解 OOP 概念，并尝试在工作中使用过 OOP 技巧。
3. 对 MVC/MVVM 架构有一定了解，如有 Vue/React/Angular 或者 微信小程序开发经验更佳。
4. 使用过 Bootstrap 或者 ElementUI 等 UI 库，并对前端 UI 库有一定的个人理解。
5. 了解 Git、Webpack 等工具。
6. 对 Java、Node.js 等后端编程有一定了解。
7. 一年及以上工作经验。
```

* 广州前端分析：

1. 广州 13K 薪资要求：
   1. 2/3 年工作经验。
   2. 熟悉 OOP，并能在工作中使用，且能独立开发插件等……
   3. 你可以不懂 Vue，但 React 你必须得会！
2. 广州 15k+ 薪资要求：
   1. 5 年+ 工作经验。
   2. 全能，懂前端，熟悉后端，能写文档……
   3. 带领过小队进行开发。
3. 广州异常偏科公司：
   1. 要求必须懂后端。
   2. 要求必须懂安卓或者 IOS 开发。
   3. 要求必须精通 jQuery 全家桶(jQuery UI、jQuery Mobile 等……)。

### <a name="chapter-two-three" id="chapter-two-three">2.3 开篇点题</a>

> [返回目录](#catalog-chapter-two)

本文的知识点将涉及 HTML、CSS、JS、HTTP、Vue、Webpack、打包工具、性能优化等，没有前置条件，看得懂可以瞅瞅复习下，看不懂可以瞅瞅学习下。

关于面试，在这记下慕课网视频看到的，个人非常认同的三个问答：

* 问：拿到一个面试题，第一时间看到什么？ 答：考点
* 问：如何看待网上搜出来的永远看不完的题海？ 答：不变应万变
* 问：如何对待面试题？ 答：题目到知识再到题目

然后在复习面试题的过程中，个人有些小看法：

* 个人感言一：为什么我总是比不上别人优秀？  

当编写业务代码中，碰到某个业务 bug 时，我会习惯性地百度这个业务 bug，看看网友是怎么解决的。但是，学霸级的程序猿，会多走一步，他们会思考产生这个业务 bug 的底层原因是什么，下次碰到类似的是如何应用该技术解决。所以，日积月累，我的确比不上人家了。

* 个人感言二：辞职并不是件便捷的事。  

way 1：面试成功，跟自己公司递辞呈，走流程，同时跟对面 hr 申请一个月后入职。  

way 2：面试成功，跟自己公司递辞呈，询问能不能快速离职，收到回复跟对面 hr 确认时间。【推荐】  

way 3：先递辞呈，同时面试，面试成功的，一律申请走完原公司一个月的流程之后的日子入职。

> **jsliang** 于 2 月底拿到 offer 并递交辞呈，3 月 - 4 月进入一个月倒计时，4 月第一周才能拿到离职证明。

最后在这里祝各位小伙伴能找到称心如意的工作~

## <a name="chapter-three" id="chapter-three">三 HTML</a>

> [返回目录](#catalog-chapter-three)

HTML 属于结构层，负责描绘出内容的结构。

CSS 属于表示层，负责如何显示有关内容。

JavaScript 属于行为层，负责内容应如何对事件做出反应。

### <a name="chapter-three-one" id="chapter-three-one">3.1 HTML 学习推荐</a>

> [返回目录](#catalog-chapter-three)

* [《前端工程师手册》](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/index.html?tdsourcetag=s_pctim_aiomsg)
* [《HTML 教程- (HTML5 标准) - 菜鸟教程》](http://www.runoob.com/html/html-tutorial.html)

### <a name="chapter-three-two" id="chapter-three-two">3.2 HTML 语义化</a>

> [返回目录](#catalog-chapter-three)

语义化的含义就是用正确的标签做正确的事情，HTML 语义化就是让页面的内容结构化，它有如下优点：

1. 便于对浏览器、搜索引擎解析；
2. 便于盲人浏览网页；
3. 便于阅读源代码的人对网站进行分开，维护和理解；

简单来说，能用 `<header>`、`<footer>` 等 H5 新标签的就不用 `<div class="header">`，不要使用 `<div>` 来存放段落等……

### <a name="chapter-three-three" id="chapter-three-three">3.3 HTML5 新标签</a>

> [返回目录](#catalog-chapter-three)

HTML5 中新增标签大致有：`<header>`、`<footer>`、`<aside>`、`<nav>`、`<video>`、`<audio>`、`<canvas>`等等。

### <a name="chapter-three-four" id="chapter-three-four">3.4 常见浏览器及其内核</a>

> [返回目录](#catalog-chapter-three)

| | Chrome | Firefox | Safari | IE | Opera |
| --- | --- | --- | --- | --- | --- |
| 排版引擎 | Blink | Gecko | Webkit | Trident | Blink |
| JS 引擎 | V8 | SpiderMonkey | Nitro | Chakra | V8 |

> 国内一些浏览器使用较多的是 Webkit 内核。

* 针对不同浏览器内核，HTML 辨别：

1. IE 内核浏览器识别：`<!--[if IE]><![endif]-->`
2. 非 IE 内核浏览器识别：`<!--[if !IE]><![endif]-->`

* 针对不同浏览器内核，CSS 辨别：

```css
/* 设置文字不可选取 */
* {
  -moz-user-select: none; /* 火狐 浏览器 */
  -webkit-user-select: none; /* Webkit 浏览器 */
  -o-user-select: none; /* Opera 浏览器 */
  -ms-user-select: none; /* IE10 浏览器 */
  -khtml-user-select: none; /* 早期浏览器 */
  user-select: none; /* 默认 */
}
```

### <a name="chapter-three-five" id="chapter-three-five">3.5 cookies、session、sessionStorage、localStorage</a>

> [返回目录](#catalog-chapter-three)

* **cookies**：存储于浏览器端的数据。可以设置 cookies 的到期时间，如果不设置时间，则在浏览器关闭窗口的时候会消失。

* **session**：存储于服务器端的数据。session 存储特定用户会话所需的属性和配置信息。

* **cookies** 和 **session** 的区别在于：

1. cookies 数据存放在客户的浏览器上，session 数据存放在服务器上。
2. 前端都是裸君子，没有安全可言，cookies 可能会被黑客利用作数据欺骗。所以重要信息记得存 session。
3. session 如果在生效期内量过大，会占用服务器性能。
4. 单个 cookies 保存的数据不能超过 4 K，很多浏览器限制一个站点保存最多 20 个 cookies。

---

* **sessionStorage**：生命周期存在于标签页或窗口，用于本地存储一个会话（session）中的数据，这些数据会随着窗口或者标签页的关闭而被清空。

* **localStorage**：生命周期是永久的，除非用户主动清除浏览器上存储的 localStorage 信息，否则它将会永久存在。

* **sessionStorage** 和 **localStorage** 操作方法：`setItem`、`getItem` 以及 `removeItem`。

> 以 localStorage 为例：

```js
localStorage.getItem('name'); // 获取 name 的值
localStorage.setItem('name', 'jsliang'); // 设置 name 的值为 jsliang
localStorage.removeItem('name'); // 删除 name 的值
```

> 参考 1：[《前端分享之cookie的使用及单点登录》](https://segmentfault.com/a/1190000011295587)  
> 参考 2：[《Cookie、session和localStorage、以及sessionStorage之间的区别》](https://www.cnblogs.com/zr123/p/8086525.html)

## <a name="chapter-four" id="chapter-four">四 CSS</a>

> [返回目录](#catalog-chapter-four)

HTML 属于结构层，负责描绘出内容的结构。

CSS 属于表示层，负责如何显示有关内容。

JavaScript 属于行为层，负责内容应如何对事件做出反应。

### <a name="chapter-four-one" id="chapter-four-one">4.1 CSS 学习推荐</a>

> [返回目录](#catalog-chapter-four)

* [《前端工程师手册》](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/index.html?tdsourcetag=s_pctim_aiomsg)
* [《CSS 权威指南》](https://baike.baidu.com/item/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/6229475?fr=aladdin)
* [《CSS 揭秘》](https://baike.baidu.com/item/CSS%E6%8F%AD%E7%A7%98)
* [《CSS 世界》](https://baike.baidu.com/item/CSS%E4%B8%96%E7%95%8C)

### <a name="chapter-four-two" id="chapter-four-two">4.2 CSS reset</a>

> [返回目录](#catalog-chapter-four)

在工作的过程中，会发现各式各样的浏览器对某个标签有自己独特的样式。

但是在前端开发中，如果不采用统一标准，那么会产生千奇百怪的 bug。所以为了减少后期 bug 的出现，前端开发人员会重置一遍 CSS 样式，尽可能地使开发的网页在各个浏览器相差不大。

下面是 **jsliang** 在使用的样式重置，当然如果小伙伴有不同的想法，可以去 **百度/必应/google** 搜索并使用其他版本的样式重置：

* [jsliang 的 CSS 样式重置](https://github.com/LiangJunrong/document-library/blob/master/CSS-library/CSSBase/CSSReset.md)

### <a name="chapter-four-three" id="chapter-four-three">4.3 CSS 盒模型</a>

> [返回目录](#catalog-chapter-four)

在工作的过程中，也许小伙伴需要 div 块的总宽度为 100px，然后发现总是被 margin 撑高，这是因为盒模型定义的问题：

CSS 中有个属性叫 `box-sizing`。

```
box-sizing: border-box
box-sizing: content-box
```

1. `border-box` 中，整个 `div` 的宽、高，包括 `margin`、`padding`、`border`。  
2. `content-box` 中，整个 `div` 的宽、高，则不包括上面元素。 

![图](../../public-repertory/img/other-WechatApplet-bug-8.jpg)

如上图，如果一个 `div` ，你的代码如下：
```
div {
  box-sizing: border-box;
  margin: 10px;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```

那么，你的整个宽高还是 `100px`。  

但是，如果你的代码如下：

```
div {
  box-sizing: content-box;
  margin: 10px;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```

那么，你的整个盒子宽高是 `120px`。

如果你在设计页面中，发现内容区被撑爆了，那么，请检查下现在的 `border-box` 是什么，最好在引用 `reset.css` 的时候，就对 `border-box` 进行统一设置，方便管理。

### <a name="chapter-four-four" id="chapter-four-four">4.4 CSS 单位</a>

> [返回目录](#catalog-chapter-four)

在 CSS 中，除了我们常用的 `px`，还有其他单位小伙伴们可以了解一下：

| 单位 | 描述 |
| --- | --- |
| % | 百分比 |
| px | 像素。计算机屏幕上的一个点为 `1px`。 |
| em | 相对单位。相对于父元素计算，假如某个 p 元素为 `font-size: 12px`，在它内部有个 span 标签，设置 `font-size: 2em`，那么，这时候的 span 字体大小为：`12 * 2 = 24px` |
| rem | 相对单位。相对于根元素 html 的 `font-size`，假如 html 为 `font-size: 12px`，那么，在其当中的 div 设置为 `font-size: 2rem`，就是当中的 div 为 `24px`。 |
| rpx | 微信小程序相对单位。1rpx = 屏幕宽度 / 750 px。在 750px 的设计稿上，1rpx = 1px。 |

> 除此之外还有 pt、ex 等单位，但由于不太好换算，故在此不提。

### <a name="chapter-four-five" id="chapter-four-five">4.5 CSS 选择器</a>

> [返回目录](#catalog-chapter-four)

选择器是匹配元素的一种模式。

* 关于 CSS 解析器：

HTML 经过解析生成 DOM Tree；而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。

Render Tree 中的元素与 DOM 元素相对应，但非一一对应：一个 DOM 元素可能会对应多个 renderer，如文本折行后，不同的「行」会成为 render tree 种不同的 renderer。也有的 DOM 元素被 Render Tree 完全无视，比如 display:none 的元素。

在建立 Render Tree 时，浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果来确定生成怎样的 renderer。对于每个 DOM 元素，必须在所有 Style Rules 中找到符合的 selector 并将对应的规则进行合并。选择器的「解析」实际是在这里执行的，在遍历 DOM Tree 时，从 Style Rules 中去寻找对应的 selector。

* CSS 解析顺序

在 CSS 的选择器中，它会按照优先级 **从右向左解析**，因为这样匹配元素的时候，能尽量少地查找，所以选择器最好写地简洁一点。

* CSS 常用选择器

1. 通配符：`*`
2. ID 选择器：`#ID`
3. 类选择器：`.class`
4. 元素选择器：`p`、`a` 等……
5. 后代选择器：`p span`、`div a` 等……
6. 伪类选择器：`a:hover` 等……
7. 属性选择器：`input[type="text"]` 等……
8. 子元素选择器：`li:firth-child`、`p:nth-child(1)` 等……

* CSS 选择器权重

!important -> 行内样式 -> #id -> .class -> 元素和伪元素 -> * -> 继承 -> 默认

### <a name="chapter-four-six" id="chapter-four-six">4.6 CSS 常见布局</a>

> [返回目录](#catalog-chapter-four)

1. 水平垂直居中。这种布局老生常谈，**jsliang** 在本文也有提到，详解请 [点击链接](chapter-four-twelve)
2. 两列布局。一侧固定，另一侧自适应。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Two Column Layout</title>
  <style>
    .container {
      display: flex;
    }
    .child-one {
      width: 300px;
      height: 300px;
      background: red;
    }
    .child-two {
      width: 100%;
      height: 300px;
      background: deepskyblue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="child-one"></div>
    <div class="child-two"></div>
  </div>
</body>
</html>
```

3. 三列布局。类似于两列布局，新增多一个固定宽的 `<div>` 块而已。当然，小伙伴们可能会说：**jsliang** 你要考虑 `flex` 的兼容性啊！enm...**支持所有最新版本的浏览器！请更新你的浏览器哦亲~**

> 避免被寄刀片，附上 `float` 布局：[《css常见布局》](https://blog.csdn.net/liwei26/article/details/78976444)

### <a name="chapter-four-seven" id="chapter-four-seven">4.7 CSS3 新特性</a>

> [返回目录](#catalog-chapter-four)

**经典**：CSS3 相关属性你了解吗，说说都有哪些？能说说你工作中常用的一些 CSS3 属性吗？

那么，CSS3 新特性都有哪些呢？

* transition：过渡
* transform：旋转、缩放、移动或者倾斜
* animation：动画
* gradient：渐变
* shadow：阴影
* border-radius：圆角

为了方便记忆，咱将它们扔到同一个 HTML 文件上，小伙伴拷贝到本地上打开，可以看到一个拥有渐变的小球，做着横向运动，如果你鼠标移动到它上面，它的宽度会放大，并且进行倾斜。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>CSS3 新特性</title>
<style> 
  div {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: linear-gradient(red, orange);
    box-shadow: 10px 10px 5px #888888;
    position: relative;
    transition: width 2s;
    animation: mymove 5s infinite;
  }
  div:hover {
    width:300px;
    transform: rotate(7deg);
  }
  @keyframes mymove {
    from { left: 0px; }
    to { left: 200px; }
  }
</style>
</head>
<body>
  <div></div>
</body>
</html>
```

> 参考 1：[《CSS3 圆角》](http://www.runoob.com/css3/css3-border-radius.html)  
> 参考 2：[《CSS3 渐变（Gradients）》](http://www.runoob.com/css3/css3-gradients.html)  
> 参考 3：[《CSS3 transition 属性》](http://www.runoob.com/cssref/css3-pr-transition.html)  
> 参考 4：[《CSS3 transform 属性》](http://www.runoob.com/cssref/css3-pr-transform.html)  
> 参考 5：[《CSS3 animation（动画） 属性》](http://www.runoob.com/cssref/css3-pr-animation.html)  
> 参考 6：[《CSS3 box-shadow 属性》](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)  
> 参考 7：[《个人总结（css3新特性）》](https://segmentfault.com/a/1190000010780991)  

### <a name="chapter-four-eight" id="chapter-four-eight">4.8 BFC</a>

> [返回目录](#catalog-chapter-four)

* 什么是 BFC？

BFC 就是 块级格式上下文，它是一个独立的渲染区域，让处于 BFC 内部的元素和外部的元素相互隔离，使内外元素的定位不会相互影响。

一定的 CSS 声明可以生成 BFC，浏览器对生成的 BFC 有一系列的渲染规则，利用这些渲染规则可以达到一定的布局效果。

* 为什么需要 BFC 呢？

1. 它可以防止 margin 元素重叠（div 中包含 ul，而 div 与 ul 之间的垂直距离，取决于 div、ul、li 三者之间的最大外边距，这时候给 ul 一个 display:inline-block 即可解决这个问题）
2. 清除内部浮动（div 中包含 ul，而 ul 采用 float:left，那么 div 将变成一长条，这时候给 div 加上规则使其变成 BFC 即可）

* 如何产生 BFC？

1. display: inline-block
2. position: absolute/fixed

* 工作中一般可能不会顾及这个：

1. float 很少使用了，尽可能使用 flex
2. css reset 一般会清除掉一些问题，减少 BFC 的使用。

> 参考文献：[《我对BFC的理解》](https://www.cnblogs.com/dojo-lzz/p/3999013.html)

> [返回目录](#catalog-chapter-four)

### <a name="chapter-four-night" id="chapter-four-night">4.9 行内元素和块级元素</a>

> [返回目录](#catalog-chapter-four)

**行内元素**：宽度和高度由内容决定，与其他元素共占一行的元素，我们将其叫行内元素。例如：`<span>`、`<i>`、`<a>` 等……

**块级元素**：默认宽度由父容器决定，默认高度由内容决定，独占一行并且可以设置宽高的元素，我们将其叫做块级元素。例如：`<p>`、`<div>`、`<ul>` 等……

在日常开发中，我们经常使用 CSS 的 `display` 属性来打破两者的壁垒：`display: inline-block`，使它们拥有更多的状态。

### <a name="chapter-four-ten" id="chapter-four-ten">4.10 行内样式、内嵌式、链接式以及导入式</a>

> [返回目录](#catalog-chapter-four)

在引用 CSS 上，分为四种形式：**行内样式**、**内嵌式**、**链接式**以及**导入式**，下面介绍这四种模式。

* **行内样式**

直接对 HTML 的标记使用 style 属性，然后将 CSS 代码直接写进去：

```html
<p style="color: #fff; backgournd: deepskyblue;"></p>
```

* **内嵌式**

将 CSS 写 `<head>` 与 `</head>` 之间，并且用 `<style>` 和 `</style>` 标记进行声明：

```html
<head>
  <style>
    p {
      color: #fff;
      background: deepskyblue;
    }
  </style>
</head>
```

* **链接式**

通过将 `<style>` 上的 CSS 提起到指定的 CSS 文件上，然后通过 `<link>` 的方式在 HTML 上链接起来。

```html
<head>
  <link href="reset.css" type="text/css" rel="stylesheet">
</head>
```

* **导入样式**

```html
<head>
  <style>
    @import url(reset.css);
  </style>
</head>
```

* **各种方式的优先级**

在优先级上，**行内样式** > **链接式** > **内嵌式** > **@import 导入式**。

### <a name="chapter-four-eleven" id="chapter-four-eleven">4.11 水平垂直居中</a>

> [返回目录](#catalog-chapter-four)


* 什么是 Flex 布局？

Flex 是 Flexible Box 的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。

* Flex 布局有哪些便利

```
/* 设置 Flex 模式 */
display: flex;

/* 决定元素是横排还是竖着排，要不要倒序 */
flex-direction: column;

/* 决定元素换行格式，一行排不下的时候如何排 */
flex-wrap: wrap;

/* flex-flow = flex-direction + flex-wrap */
flex-flow: column wrap;

/* 同一排下对齐方式，空格如何隔开各个元素 */
justify-content: space-between;

/* 同一排下元素如何对齐，顶部对齐、中部对齐还是其他 */
align-items: center;

/* 多行对齐方式 */
align-content: space-between;
```

* 如何通过 Flex 实现元素水平垂直居中？

> HTML

```
<div class="container">
  <div class="child"></div>
</div>
```

> CSS

```
.container {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  background: deepskyblue;
  display: flex;
  /* 实现元素水平居中 */
  justify-content: center;
  /* 实现元素垂直居中 */
  align-items: center;
}
.child {
  width: 100px;
  height: 100px;
  background: #fff;
}
```

* 除了 Flex，还能使用其他形式进行水平垂直居中吗？

> HTML

```
<div class="container">
  <div class="child"></div>
</div>
```

> CSS

```
.container {
  position: relative;
  width: 300px;
  height: 200px;
  background: pink;
  margin: 0 auto;
}
.child {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  /* 下面两种方式均可 */
  /* margin-top: -50px;
  margin-left: -50px; */
  transform: translate(-50%, -50%);
  background: #fff;
}
```

* 除此之外再谈谈 CSS 水平居中或者垂直居中？

水平居中：

1. 行内元素：`display: inline-block; text-align: center;`
2. 块级元素：`margin: 0 auto;`
3. Flex：`display: flex; justify-content: center;`

垂直居中：

1. 行高 = 元素高：`line-height: height`
2. Flex：`display: flex; align-items: center;`

> 参考文献：  
> ① [《CSS实现垂直居中的常用方法》](https://www.cnblogs.com/yugege/p/5246652.html)  
> ② [《CSS 用 position: absolute 与 transform 来居中块级元素的问题》](https://segmentfault.com/q/1010000005151903)

## <a name="chapter-five" id="chapter-five">五 JavaScript</a>

> [返回目录](#catalog-chapter-five)

HTML 属于结构层，负责描绘出内容的结构。

CSS 属于表示层，负责如何显示有关内容。

JavaScript 属于行为层，负责内容应如何对事件做出反应。

### <a name="chapter-five-one" id="chapter-five-one">5.1 JS 学习推荐</a>

> [返回目录](#catalog-chapter-five)

* 《JavaScript 高级程序（第三版）》
* 《你不知道的 JavaScript》
* 《JavaScript 忍者秘籍》
* 《ES6 标准入门》—— 阮一峰
* 《JavaScript 设计模式》—— 张容铭
* 《JavaScript 设计模式与开发实践》—— 曾探

### <a name="chapter-five-two" id="chapter-five-two">5.2 JS 引用方式</a>

> [返回目录](#catalog-chapter-five)

* **行内引入**：

```html
<body>
  <input type="button" onclick="alert('行内引入')" value="按钮"/>
  <button onclick="alert(123)">点击我</button>
</body>
```

* **内部引入**：

```html
<script>
  window.onload = function() {
    alert("js 内部引入！");
  }
</script>
```

* **外部引入**：

```html
<body>
  <div></div>

  <script type="text/javascript" src="./js/index.js"></script>
</body>
```

**注意**：

1. 不推荐写行内或者在 HTML 中插入 `<script>`，因为浏览器解析顺序缘故，如果解析到死循环之类的 JS 代码，会卡住页面。
2. 建议在 onload 事件之后，即等 HTML、CSS 渲染完毕再执行代码。

### <a name="chapter-five-three" id="chapter-five-three">5.3 原型与原型链</a>

> [返回目录](#catalog-chapter-five)

关于 `prototype`、`__proto__`、`new`、`call()`、`apply()`、`bind()`、`this` 这些的知识点，由于篇幅太长，**jsliang** 已经抽离了出来，并做了简洁详细讲解，详见：

* [2019 面试准备 - JS 原型与原型链](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/prototype.md)

下面放出相关知识点：

![图](../../public-repertory/img/other-interview-1-prototype.png)

![图](../../public-repertory/img/other-interview-2-prototype.png)

* 实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。
* Object.__proto__ === Function.prototype
* Function.prototype.__proto__ === Object.prototype
* Object.prototype.__proto__ === null

### <a name="chapter-five-four" id="chapter-five-four">5.4 作用域与闭包</a>

> [返回目录](#catalog-chapter-five)

在 JS 中，最容易混淆的就是作用域的情况。

在传统的后端语言（例如 C 语言）中，一对花括号 `{}` 就是一个块级作用域，作用域内变量不会相互影响，但是在 JS 中，像 if 条件语句的 `{}` 就不算一个独立的作用域：

```js
var x = 1;
console.log(x); // 1
if(true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2
```

所以有时候我们就需要变通，通过自执行函数创建临时作用域：

```js
function foo() {
  var x = 1;
  console.log(x); // 1
  if(x) {
    (function(x) {
      console.log(x); // 1
      var x = 2;
      console.log(x); // 2
    })(x)
  }
  console.log(x); // 1
}
foo();
```

说到创建临时作用域，我们就不得不谈一下闭包。

那么，什么是闭包呢？

**闭包简单定义**：函数 A 里面包含了 函数 B，而 函数 B 里面使用了 函数 A 的变量，那么 函数 B 被称为闭包。

又或者：闭包就是能够读取其他函数内部变量的函数

```js
function A() {
  var a = 1;
  function B() {
    console.log(a);
  }
  return B();
}
```

* 闭包经典问题：现在我们有一段代码：

```js
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

请问这段代码输出什么？ 

> 答案：3 个 3。  
> 解析：首先，`for` 循环是同步代码，先执行三遍 `for`，i 变成了 3；然后，再执行异步代码 `setTimeout`，这时候输出的 i，只能是 3 个 3 了。

* 那么，我们有什么办法依次输出 0 1 2 么？

1. 使用 let：

```js
for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

在这里，每个 let 和代码块结合起来形成块级作用域，当 setTimeout() 打印时，会寻找最近的块级作用域中的 i，所以依次打印出 0 1 2。

如果这样讲不明白，我们可以执行下下面这段代码：

```js
for(let i = 0; i < 3; i++) {
  console.log("定时器外部：" + i);
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

此时浏览器依次输出的是：

```Console
定时器外部：0
定时器外部：1
定时器外部：2
0
1
2
```

即代码还是先执行 `for` 循环，但是当 `for` 结束执行到了 `setTimeout` 的时候，它会做个标记，这样到了 `console.log(i)` 中，i 就能找到这个块中最近的变量定义。

2. 使用立即执行函数解决闭包问题

```js
for(let i = 0; i < 3; i++) {
  (function(i){
    setTimeout(function() {
      console.log(i);
    }, 1000);
  })(i)
}
```

以上，我们就讲解完了闭包及解决闭包的方式。

> **观点 1**：有些资料表示闭包中产生的大量局部变量，会造成内存消耗过大，从而造成网页的性能问题。  
> **观点 2**：有些资料表示目前浏览器引擎都基于 V8，而 V8 引擎有个 gc 回收机制，不用太过担心变量不会被回收。  
> **提示**：所以，如果你觉得不够保险，那就在退出函数之前，将不使用的局部变量全部删除。

### <a name="chapter-five-five" id="chapter-five-five">5.5 浅拷贝与深拷贝</a>

> [返回目录](#catalog-chapter-five)

* 什么是深拷贝？什么是浅拷贝？

简单来说，有两个对象 A 和 B，B = A，当你修改 A 时，B 的值也跟着发生了变化，这时候就叫浅拷贝。如果不发生变化，就叫深拷贝。

* 为什么会出现深拷贝与浅拷贝？

1. 首先我们需要知道**基本数据类型（number、string、boolean、null、undefined）**与**引用数据类型（无序对象，数据以及函数）**。
2. 然后在基本数据类型中，例如：`let a = 1; let b = a; a = 2; console.log(b)`。当我们尝试这样子写时，b 在栈内存中开辟了一个新内存，所以 b 的值不会改变，仍是 1.
3. 接着在引用数据类型中，例如 `let a = [1, 2, 3], b = a; a[0] = 3; console.log(b)`。当我们尝试这样子写时，b 会偷懒，引用跟 a 同一块的内存地址，从而 a 的修改会影响 b，使得 b 变成 [3, 1, 3]。
4. 最后，我们可以知道在引用数据类型中，会产生浅拷贝的问题。

* 如何实现深拷贝？

1. 首先我们尝试使用递归去解决深拷贝：

```js
function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === "object") {
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        // 判断 obj 子元素是否为对象，如果是，递归复制
        if(obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

let a = [1, 2, 3, 4];
let b = deepClone(a);
a[0] = 2;
console.log(a, b);

// Console
// a = [2, 2, 3, 4];
// b = [1, 2, 3, 4];
```

2. 使用 JSON 对象的 parse 和 stringify

> **注意：采用 JSON 进行的深拷贝，无法拷贝到 undefined、function、symbol 这类数据，它是有小 bug 的深拷贝。**

```js
function deepClone(obj) {
 let _obj = JSON.stringify(obj);
 let objClone = JSON.parse(_obj);
 return objClone
}
let a = [0, 1, [2, 3], 4];
let b = deepClone(a);
a[0] = 1;
a[2][0] = 1;
console.log(a, b);

// Console
// a = [1, 1, [1, 3], 4];
// b = [0, 1, [2, 3], 4];
```

### <a name="chapter-five-six" id="chapter-five-six">5.6 模块化与组件化</a>

> [返回目录](#catalog-chapter-five)

在前端发展中，随着前后端分离，前端社区的不断壮大，前端能做的事情越来越多，承受的任务越来越重，代码也就越来越长了。就好比 **jsliang** 个人使用 jQuery 开发的时候，动不动就上千行代码，这在一个编辑器上看起来就有点乱了。如果碰上没有代码折叠的编辑器，你就更加难受了。

> 有的小伙伴的编辑器不是 VS Code，也不能进行代码折叠

所以，面对越来越多的代码，我们就急需将这些代码分门别类，将代码按功能划分，将同一功能的代码整合在一起，于是就有了模块化开发：一个文件就是一个模块，当我们需要某个文件的时候，我们只需要引用这个模块即可……

**首先**，是 CommonJS 的提出，在 Node.js 以及 Webpack 都支持 CommonJS，它规定了一个文件就是一个模块，文件内部定义的变量属于这个模块，不会对外暴露从而污染全局变量的规则。在 CommonJS 中，通过 exports 或者 module.exports 进行导出，通过 require 进行 **同步加载** 所需要依赖的模块。由于它是同步加载模块的形式，所以比较通用于服务器端。

**然后**，根据 CommonJS 只能同步加载的问题，AMD 根据浏览器的特性，进行了非同步加载模块的提出。同时，AMD 有个问题，就是在使用 require.js 的时候，必须提前加载所有模块。

**接着**，根据 AMD 的问题，CMD 提出来了：通过按需加载的形式，哪里需要就调用哪里，而不用等到所有的模块都加载了再解析。

**最后**，ECMA 国际推出了 ES6 的 modules。在 ES6 中，通过 export 关键字导出模块，通过 import 关键字引用代码。当然，由于浏览器厂商诸多，ES6 在浏览器的尚不支持，目前主流做法是先将 ES6 通过 babel 编译成 require。

当然，JS 都进行模块化了，**jsliang** 想起自己项目中的那一坨 CSS，真心没有回顾的想法！所以我们还需要知道为了方便管理 CSS，大佬们还是有做事儿的：Less 以及 Sass，这两者使 CSS 的编写更有组织性和目的性了。

说起模块化，我们又可以顺带提及组件化了，一开始为了区分这两者，**jsliang** 也是百度了大量文章，最后成功把自己整蒙了，还是说说感觉可以的解释：

**组件化更关注的是 UI 部分：弹出框、头部，内容区、按钮等，都可以编写成组件，然后在适用的地方进行引用。而模块化更侧重于功能或者数据的封装，比如全局的 JSON 配置文件，比如通用的验证方法，比如规范时间戳等。**

所以，说到这里，我们就可以提到前端工程化：将整个开发流程就行工程规划，从而提高整个团队的开发效率。

在前端工程化中，最重要的就是提高整个团队在 **编码 -> 测试 -> 维护** 这三个阶段的生产效率。团队的协调至关重要，将每个任务细分给各个成员，从而获取极致的工作效率，是管理者最喜欢看到的。而在上面的模块化和组件化的应用，就属于前端工程化中的一部分，其目的就是在一些复杂的项目中，方便团队进行合作开发，提高生产效率。

> 参考文献：  
> ① [《到底什么是前端工程化、模块化、组件化》](https://www.cnblogs.com/allenlei/p/6195235.html)  
> ② [《【前端工程化系列】简谈前端模块化开发与开发规范》](https://www.cnblogs.com/code-klaus/p/9011911.html)  
> ③ [《个人关于模块化的理解》](https://www.cnblogs.com/doublenet/p/4918306.html)  
> ④ [《组件化开发和模块化开发概念辨析》](https://blog.csdn.net/blog_jihq/article/details/79191008)  
> ⑤ [《JavaScript模块化 --- Commonjs、AMD、CMD、es6 modules》](https://www.cnblogs.com/zhuzhenwei918/p/7426904.html)  
> ⑥ [《浅谈什么是前端工程化》](https://www.cnblogs.com/fsyz/p/8274727.html)  

### <a name="chapter-five-seven" id="chapter-five-seven">5.7 面向对象与面向过程</a>

> [返回目录](#catalog-chapter-five)

1. 什么是面向过程与面向对象？

* 面向过程就是做围墙的时候，由你本身操作，叠第一层的时候：放砖头，糊水泥，放砖头，糊水泥；然后第二层的时候，继续放砖头，糊水泥，放砖头，糊水泥……
* 面向对象就是做围墙的时候，由他人帮你完成，将做第一层的做法抽取出来，就是放砖头是第一个动作，糊水泥是第二个动作，然后给这两个动作加上步数，最后告诉机器人有 n 层，交给机器人帮你工作就行了。

2. 为什么需要面向对象写法？

* 更方便
* 可以复用，减少代码冗余度
* 高内聚低耦合

简单来说，就是增加代码的可复用性，减少咱们的工作，使代码更加流畅。

3. 手写个面向对象代码？

```
function Person(name, phone) {
  this.name = name;
  this.phone = phone;
  this.eat = function() {
    console.log(name + " 吃饭");
  }

  return this;
}

let p1 = new Person("jsliang", "18818881888");
console.log(p1.name); // jsliang
p1.eat(); // jsliang 吃饭
```

### <a name="chapter-five-eight" id="chapter-five-eight">5.8 JS 继承</a>

> [返回目录](#catalog-chapter-five)

暂无内容，有待补充

### <a name="chapter-five-night" id="chapter-five-night">5.9 防抖与节流</a>

> [返回目录](#catalog-chapter-five)

暂无内容，有待补充

### <a name="chapter-five-ten" id="chapter-five-ten">5.10 ES6</a>

> [返回目录](#catalog-chapter-five)

* var、let 以及 const

* 解构赋值

1. 解构数组：

```
let arr = [0, 1, 2];
let [a, b, c] = arr;
// 相当于 let a = arr[0]; b = arr[1]; c = arr[2];
```

2. 数组拼接

```
let a = [0, 1, 2];
let b = [3, 4, 5];
let c = [...a, ...b];
// c = [0, 1, 2, 3, 4, 5]。相当于 c = a.concat(b);
```

3. 数组克隆

```
let a = [0, 1, 2, 3];
let b = [...a];
b.push(4);
// b 输出为 0, 1, 2, 3, 4。a 输出为 0, 1, 2, 3
// 但是如果 b = a，则 b 和 a 会引用同一块内存，从而导致 b 的修改会影响 a 的修改。
```

4. 对象的解构赋值

```
let { name, age } = { name:"jsliang", age: 23 }
// 根据 key 值匹配，相当于 let name = "jsliang", age = 23
```

### <a name="chapter-five-eleven" id="chapter-five-eleven">5.11 函数柯里化</a>

> [返回目录](#catalog-chapter-five)

暂无内容，有待补充

### <a name="chapter-five-twelve" id="chapter-five-twelve">5.12 数组操作</a>

> [返回目录](#catalog-chapter-five)

在 JavaScript 中，用得较多的之一无疑是数组操作，这里过一遍数据的一些用法：

* map: 遍历数组，返回回调返回值组成的新数组
* forEach: 无法break，可以用try/catch中throw new Error来停止
* filter: 过滤
* some: 有一项返回true，则整体为true
* every: 有一项返回false，则整体为false
* join: 通过指定连接符生成字符串
* push / pop: 末尾推入和弹出，改变原数组， 返回推入/弹出项
* unshift / shift: 头部推入和弹出，改变原数组，返回操作项
* sort(fn) / reverse: 排序与反转，改变原数组
* concat: 连接数组，不影响原数组， 浅拷贝
* slice(start, end): 返回截断后的新数组，不改变原数组
* splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
* indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
* reduce / reduceRight(fn(prev, cur)， defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)


## <a name="chapter-six" id="chapter-six">六 Vue</a>

> [返回目录](#catalog-chapter-six)

推荐：

1. [技术胖](https://jspang.com/)
2. [慕课网](https://www.imooc.com/)

### <a name="chapter-six-one" id="chapter-six-one">6.1 MVVM</a>

> [返回目录](#catalog-chapter-six)

* 对 MVVM 的理解

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互时双向的，因此 View 数据会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需要关注业务逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

1. M - Model。Model 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。
2. V - View。View 代表 UI 组件，它负责将数据模型转化为 UI 展现出来。
3. VM - ViewModel。ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步 View 和 Model 的对象，连接 Model 和 View。

### <a name="chapter-six-two" id="chapter-six-two">6.2 生命周期</a>

> [返回目录](#catalog-chapter-six)

* Vue 的生命周期

1. 创建前/后：在 **beforeCreated** 阶段，Vue 实例的挂载元素 `$el` 和数据对象 data 以及事件还未初始化。在 **created** 阶段，Vue 实例的数据对象 data 以及方法的运算有了，`$el` 还没有。
2. 载入前/后：在 **beforeMount** 阶段，`render` 函数首次被调用，Vue 实例的 $el 和 data 都初始化了，但还是挂载在虚拟的 DOM 节点上。在 **mounted** 阶段，Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互。
3. 更新前/后：在数据更新之前调用，即发生在虚拟 DOM 重新渲染和打补丁之前，调用 **beforeUpdate**。在虚拟 DOM 重新渲染和打补丁之后，会触发 **updated** 方法。
4. 销毁前/后：在执行实例销毁之前调用 **beforeDestory**，此时实例仍然可以调用。在执行 **destroy** 方法后，对 data 的改变不会再触发周期函数，说明此时 Vue 实例已经解除了事件监听以及和 DOM 的绑定，但是 DOM 结构依然存在。

* Vue 生命周期问题系列

> 1. 什么是 Vue 生命周期  
> 答：Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载 DOM -> 渲染、更新 -> 渲染、销毁等一系列过程，称之为 Vue 的生命周期。

> 2. Vue 有几个生命周期，它们的作用主要是什么？  
> 答：8 个，创建前/创建后、挂载前/挂载后、更新前/更新后、销毁前/销毁后。Vue 生命周期的作用是方便我们通过它的生命周期，在业务代码中更好地操作数据，实现相关功能。

> 3. 第一次页面加载会触发 Vue 哪几个钩子？  
> 答：会触发 4 个生命钩子：创建前/创建后、挂载前/挂载后

> 4. DOM 渲染在哪个周期就已经完成？  
> 答：在 `beforeMounted` 时它执行了 `render` 函数，对 $el 和 data 进行了初始化，但此时还是挂载到虚拟的 DOM 节点，然后它在 `mounted` 时就完成了 DOM 渲染，这时候我们一般还进行 Ajax 交互。

### <a name="chapter-six-three" id="chapter-six-three">6.3 双向数据绑定</a>

> [返回目录](#catalog-chapter-six)

* 对 Vue 双向数据绑定原理的理解

Vue 采用 **数据劫持** 结合 **发布者-订阅者** 模式的方式，通过 `Object.defineProperty()` 来劫持各个属性的 setter 以及 getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

1. 第一步：需要 Observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
2. 第二步：Compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新数据。
3. 第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情有：
   1. 在自身实例化时往属性订阅器（dep）里面添加自己。
   2. 自身必须有一个 update() 方法
   3. 待属性变动 `dep.notice()` 通知时，能调用自身的 `update()` 方法，并触发 Compile 中绑定的回调，则功成身退。
4. 第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的桥梁，达到数据变化 -> 视图更新；视图交互变化（input） -> 数据 model 变更的双向绑定效果。

> js 实现简单的双向绑定

```
<body>
  <div id="app">
    <input type="text" id="txt">
    <p id="show"></p>
  </div>
  
  <script>
    window.onload = function() {
      let obj = {};
      Object.defineProperty(obj, "txt", {
        get: function() {
          return obj;
        },
        set: function(newValue) {
          document.getElementById("txt").value = newValue;
          document.getElementById("show").innerHTML  = newValue;
        }
      })
      document.addEventListener("keyup", function(e) {
        obj.txt = e.target.value;
      })
    }
  </script>
</body>
```

> Object.defineProperty 接收三个参数：对象，属性名，配置对象  
> 这里使用的是 Object.defineProperty，这是 Vue 2.0 进行双向数据绑定的写法。在 Vue 3.0 中，它使用 Proxy 进行数据劫持。

* 为什么 Vue 3.0 中使用 Proxy 了？

1. Vue 中使用 Object.defineProperty 进行双向数据绑定时，告知使用者是可以监听数组的，但是只是监听了数组的 push()、pop()、shift()、unshift()、splice()、sort()、reverse() 这八种方法，其他数组的属性检测不到。
2. Object.defineProperty 只能劫持对象的属性，因此对每个对象的属性进行遍历时，如果属性值也是对象需要深度遍历，那么就比较麻烦了，所以在比较 Proxy 能完整劫持对象的对比下，选择 Proxy。
3. 为什么 Proxy 在 Vue 2.0 编写的时候出来了，尤大却没有用上去？因为当时 es6 环境不够成熟，兼容性不好，尤其是这个属性无法用 polyfill 来兼容。（polyfill 是一个 js 库，专门用来处理 js 的兼容性问题-js 修补器）

> 参考自[《实现双向绑定Proxy比defineproperty优劣如何》](https://www.jianshu.com/p/2df6dcddb0d7)

### <a name="chapter-six-four" id="chapter-six-four">6.4 Virtual DOM</a>

> [返回目录](#catalog-chapter-six)

暂无内容，有待补充

### <a name="chapter-six-five" id="chapter-six-five">6.5 template 编译</a>

> [返回目录](#catalog-chapter-six)

* Vue template 编译的理解

Vue 中 template 就是先转化成 AST 树，再得到 render 函数返回 VNode（Vue 的虚拟 DOM 节点）。

1. 通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree - 源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。
2. AST 会经过 generate（将 AST 语法树转换成 render function 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有标签名、子节点、文本等待。

### <a name="chapter-six-six" id="chapter-six-six">6.6 key</a>

> [返回目录](#catalog-chapter-six)

key 的作用就是在更新组件时判断两个节点是否相同。相同就复用，不相同就删除旧的创建新的。

> 对于 diff 过程来说 key 是起不到提速作用的，详见：[key 的作用](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1#issuecomment-465894196)

### <a name="chapter-six-seven" id="chapter-six-seven">6.7 nextTick</a>

> [返回目录](#catalog-chapter-six)

> 参考文献：[《Vue.nextTick 的原理和用途》](https://segmentfault.com/a/1190000012861862)

### <a name="chapter-six-eight" id="chapter-six-eight">6.8 虚拟 DOM</a>

> [返回目录](#catalog-chapter-six)

Vue 在 `render` 中 `createElement` 的时候，并不是产生真实的 DOM 元素，实际上 `createElement` 描述为 `createNodeDescription`，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点。因此，我们将这样的节点描述为 “虚拟节点”（Virtual Node），简称 VNode。“虚拟 DOM” 是我们对由 Vue 组件树建立的整个 VNode 树的称呼。

### <a name="chapter-six-night" id="chapter-six-night">6.9 父子组件通讯</a>

> [返回目录](#catalog-chapter-six)

父组件使用 `props` 将数据传给子组件；然后子组件通过 `$emit` 触发父元素的自定义事件。[《Vue 中关于 $emit 的用法》](https://blog.csdn.net/sllailcp/article/details/78595077)

### <a name="chapter-six-ten" id="chapter-six-ten">6.10 Vue-Router</a>

暂无内容，有待补充

> [返回目录](#catalog-chapter-six)

### <a name="chapter-six-eleven" id="chapter-six-eleven">6.11 Vuex</a>

> [返回目录](#catalog-chapter-six)

暂无内容，有待补充

## <a name="chapter-seven" id="chapter-seven">七 微信小程序</a>

> [返回目录](#catalog-chapter-seven)

### <a name="chapter-seven-one" id="chapter-seven-one">7.1 文件主要目录及文件作用</a>

暂无内容，有待补充

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-two" id="chapter-seven-two">7.2 微信小程序生命周期</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-three" id="chapter-seven-three">7.3 微信小程序提供的常用 API</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-four" id="chapter-seven-four">7.4 如何封装数据请求</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-five" id="chapter-seven-five">7.5 页面数据传递</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-six" id="chapter-seven-six">7.6 加载性能优化的方法</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-seven" id="chapter-seven-seven">7.7 微信小程序与原生 APP、Vue、H5 差异</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-eight" id="chapter-seven-eight">7.8 微信小程序原理</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

### <a name="chapter-seven-night" id="chapter-seven-night">7.9 微信小程序异步请求</a>

> [返回目录](#catalog-chapter-seven)

暂无内容，有待补充

## <a name="chapter-eight" id="chapter-eight">八 浏览器</a>

> [返回目录](#catalog-chapter-eight)

### <a name="chapter-eight-one" id="chapter-eight-one">8.1 浏览器架构</a>

> [返回目录](#catalog-chapter-eight)

暂无内容，有待补充

### <a name="chapter-eight-two" id="chapter-eight-two">8.2 从输入 URL 到展示</a>

> [返回目录](#catalog-chapter-eight)

暂无内容，有待补充

### <a name="chapter-eight-three" id="chapter-eight-three">8.3 Event Loop</a>

> [返回目录](#catalog-chapter-eight)

暂无内容，有待补充

### <a name="chapter-eight-four" id="chapter-eight-four">8.4 重绘与回流</a>

> [返回目录](#catalog-chapter-eight)

暂无内容，有待补充

### <a name="chapter-eight-five" id="chapter-eight-five">8.5 数据存储</a>

> [返回目录](#catalog-chapter-eight)

1. 存储于代码中，代码执行完毕释放内存。
2. 存储于浏览器中，cookie 用于短期存储用户身份，登录状态等较小的信息；localStorage/sessionStorage 用于长期存储数据，浏览器关闭不影响它们的内存，相比于 cookie，storage 能存储较多；IndexedDB 是浏览器提供的接近于 NoSQL 的数据库，允许存储大量数据。
3. 存储于数据库中。

### <a name="chapter-eight-six" id="chapter-eight-six">8.6 内存管理与垃圾回收</a>

> [返回目录](#catalog-chapter-eight)

V8 将内存分为两类：新生代内存空间和老生代内存空间。

* 新生代内存空间：主要用来存放存活时间较短的对象。
* 老生代内存空间：主要用来存放存活时间较长的对象。

这两者通过不同的算法，对内存进行管理操作。

### <a name="chapter-eight-seven" id="chapter-eight-seven">8.7 内存泄漏</a>

> [返回目录](#catalog-chapter-eight)

* 意外的全局变量：无法被回收。
* 定时器：未被正确关闭，导致所引用的外部变量无法被释放。
* 事件监听：没有正确销毁（低版本浏览器可能出现）。
* 闭包：会导致父级中的变量无法被释放。
* DOM 引用：DOM 被删除时，内存中的引用未被正确清空。

* 如何查看内存变化情况？

使用 Chrome 的 Timeline（新版本 Performance）进行内存标记，可视化查看内存的变化情况，找出异常点。

## <a name="chapter-night" id="chapter-night">九 网络协议</a>

> [返回目录](#catalog-chapter-night)

### <a name="chapter-night-one" id="chapter-night-one">9.1 网络分层</a>

> [返回目录](#catalog-chapter-night)

* [网络分层TCP/IP 与HTTP](https://juejin.im/post/5a98e1f7f265da237410694e)

### <a name="chapter-night-two" id="chapter-night-two">9.2 HTTP/HTTPS</a>

> [返回目录](#catalog-chapter-night)

暂无内容，有待补充

### <a name="chapter-night-three" id="chapter-night-three">9.3 HTTP 状态码</a>

> [返回目录](#catalog-chapter-night)

首先，我们大致区分下状态码：

1. 1**开头 - 信息提示
2. 2**开头 - 请求成功
3. 3**开头 - 请求被重定向
4. 4**开头 - 请求错误
5. 5**开头 - 服务器错误

然后，常见的状态码：

1. 200 - 请求成功，Ajax 接受到信息了。
2. 400 - 服务器不理解请求，工作中常见于跨域的时候后端给我报 400！
3. 403 - 服务器拒绝请求。
4. 404 - 请求页面错误。
5. 500 - 服务器内部错误，无法完成请求。

### <a name="chapter-night-four" id="chapter-night-four">9.4 TCP 三次握手与四次挥手</a>

> [返回目录](#catalog-chapter-night)

1. 三次握手：① 客户机 -> SYN -> 服务器；② 客户机 <- SYN + ACK <- 服务器；③ 客户机 -> ACK -> 服务器。
2. URL 的组成：协议 + 服务器地址（域名 或 IP + 端口） + 路径 + 文件名。
3. WebSocket 可以实现 Web 浏览器与服务器进行长时间的连接。

### <a name="chapter-night-five" id="chapter-night-five">9.5 跨域</a>

> [返回目录](#catalog-chapter-night)

暂无内容，有待补充

### <a name="chapter-night-six" id="chapter-night-six">9.6 网络安全</a>

> [返回目录](#catalog-chapter-night)

* XSS 攻击：注入恶意代码

1. 在输入框中被使用了 JS 代码进行了 Alert 弹窗！
2. cookie 设置 httpOnly
3. 转义页面上的输入内容和输出内容

* CSRF：跨站请求伪造

1. get 不修改数据
2. 不被第三方网站访问到用户的 cookie
3. 设置白名单，不被第三方网站请求
4. 请求校验

## <a name="chapter-ten" id="chapter-ten">十 性能优化</a>

> [返回目录](#catalog-chapter-ten)

### <a name="chapter-ten-one" id="chapter-ten-one">10.1 HTML 优化</a>

> [返回目录](#catalog-chapter-ten)

1. 避免 HTML 中书写 CSS 代码，因为这样难以维护。
2. 使用 Viewport 加速页面的渲染。
3. 使用语义化标签，减少 CSS 代码，增加可读性和 SEO。
4. 减少标签的使用，DOM 解析是一个大量遍历的过程，减少不必要的标签，能降低遍历的次数。
5. 避免 src、href 等的值为空，因为即时它们为空，浏览器也会发起 HTTP 请求。
6. 减少 DNS 查询的次数。

### <a name="chapter-ten-two" id="chapter-ten-two">10.2 CSS 优化</a>

> [返回目录](#catalog-chapter-ten)

1. 优化选择器路径：使用 `.c {}` 而不是 `.a .b .c {}`。
2. 选择器合并：共同的属性内容提起出来，压缩空间和资源开销。
3. 精准样式：使用 `padding-left: 10px` 而不是 `padding: 0 0 0 10px`。
4. 雪碧图：将小的图标合并到一张图中，这样所有的图片只需要请求一次。
5. 避免通配符：`.a .b * {}` 这样的选择器，根据从右到左的解析顺序在解析过程中遇到通配符 `* {}` 会遍历整个 DOM，性能大大损耗。
6. 少用 float：`float` 在渲染时计算量比较大，可以使用 flex 布局。
7. 为 0 值去单位：增加兼容性。
8. 压缩文件大小，减少资源下载负担。

### <a name="chapter-ten-three" id="chapter-ten-three">10.3 JavaScript 优化</a>

> [返回目录](#catalog-chapter-ten)

1. 尽可能把 `<script>` 标签放在 `body` 之后，避免 JS 的执行卡住 DOM 的渲染，最大程度保证页面尽快地展示出来。
2. 尽可能合并 JS 代码：提取公共方法，进行面向对象设计等……
3. CSS 能做的事情，尽量不用 JS 来做，毕竟 JS 的解析执行比较粗暴，而 CSS 效率更高。
4. 尽可能逐条操作 DOM，并预定好 CSs 样式，从而减少 reflow 或者 repaint 的次数。
5. 尽可能少地创建 DOM，而是在 HTML 和 CSS 中使用 `display: none` 来隐藏，按需显示。
6. 压缩文件大小，减少资源下载负担。

## <a name="chapter-eleven" id="chapter-eleven">十一 算法</a>

> [返回目录](#catalog-chapter-eleven)

暂无内容，有待补充

## <a name="chapter-twelve" id="chapter-twelve">十二 其他</a>

> [返回目录](#catalog-chapter-twelve)

```js
// 题目 1
["1", "2", "3"].map(parseInt); // 1 NaN NaN

// 题目 2
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing'); // Something。是的，没有 Value is

// 题目 3
var name = 'World!';
(function() {
  if(typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Hello, ' + name);
  } else {
    console.log("Goodbye！");
  }
})()
// Console：Hello, Jack
```

### 人事问题

## <a name="chapter-thirteen" id="chapter-thirteen">十三 总结</a>

> [返回目录](#catalog-chapter-thirteen)

在观看这篇文章的过程中，小伙伴可能会有这些疑问：

1. 看完觉得不胜过瘾？

**回答**：系列套餐你值得拥有！

* [2019 面试准备 - Round One](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/%E9%9D%A2%E8%AF%95-RoundOne.md)
* [2019 面试准备 - JS 原型与原型链](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/JS-%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)
* [2019 面试准备 - JS 防抖与节流](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/JS-%E9%98%B2%E6%8A%96%E4%B8%8E%E8%8A%82%E6%B5%81.md)
* [2019 面试准备 - 图片](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/Other-%E5%9B%BE%E7%89%87.md)

2. 你这杂七杂八的都写了什么呀？看完我晕乎了！

**回答**：每个人的学习经历是不同的，所拥有的技术、知识点以及工作经验等都是不同的，所以在这篇文章中，**jsliang** 在充实自己的同时，其实也是在挖掘自己的不足，例如面向对象造轮子，例如算法问题等……**jsliang** 充分意识到了自己的不足，并打算在之后进行补充学习以及应用到工作中。

3. 好像你这里写得也不是很全啊？看完我还是一知半解的！

**回答**：每个人的目的都是不同的，有些知识点可能 **jsliang** 也不感兴趣，并且每个面试官都可能有自己的一套面试题，如果 **jsliang** 能将所有的面试题都写出来，那还需要面试官做啥呢？大家都像考国家证书一样直接电脑考试吧~（我也期待！！！）

> 如果小伙伴对文章存有疑问，想快速得到回复。  
> 或者小伙伴对 jsliang 个人的前端文档库感兴趣，也想将自己的前端知识整理出来。  
> 或者小伙伴对文章后续的更新感兴趣，掌握更多的面试技巧。  
> 欢迎加 QQ 群一起探讨：`798961601`。

## <a name="chapter-fourteen" id="chapter-fourteen">十四 参考文献</a>

> [返回目录](#catalog-chapter-fourteen)

本文中的许多内容，也许小伙伴看了会觉得眼熟，因为它们大部分是 **jsliang** 参考大量文献，再经过刷选整理，最后根据自己理解后的一些阐述，下面是个人觉得非常优秀的文章。

### <a name="chapter-fourteen-one" id="chapter-fourteen-one">14.1 关于面试</a>

> [返回目录](#catalog-chapter-fourteen)

1. [《一位前端 2018 绝地求生记》](https://juejin.im/post/5c36fe50518825253b5e94f4)
2. [《中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)》](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)
3. [《InterviewMap》](https://yuchengkai.cn/docs/frontend/)
4. [《一篇文章搞定前端面试》](https://juejin.im/post/5bbaa549e51d450e827b6b13)

### <a name="chapter-fourteen-two" id="chapter-fourteen-two">14.2 关于 HTML</a>

> [返回目录](#catalog-chapter-fourteen)

* [《前端工程师手册》](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/index.html?tdsourcetag=s_pctim_aiomsg)

### <a name="chapter-fourteen-three" id="chapter-fourteen-three">14.3 关于 CSS</a>

> [返回目录](#catalog-chapter-fourteen)

1. [《我对BFC的理解》](https://www.cnblogs.com/dojo-lzz/p/3999013.html)
2. [《CSS实现垂直居中的常用方法》](https://www.cnblogs.com/yugege/p/5246652.html)
3. [《CSS 用 position: absolute 与 transform 来居中块级元素的问题》](https://segmentfault.com/q/1010000005151903)
4. [《css常见布局》](https://blog.csdn.net/liwei26/article/details/78976444)
5. [《CSS3 圆角》](http://www.runoob.com/css3/css3-border-radius.html)  
6. [《CSS3 渐变（Gradients）》](http://www.runoob.com/css3/css3-gradients.html)
7. [《CSS3 transition 属性》](http://www.runoob.com/cssref/css3-pr-transition.html)
8. [《CSS3 transform 属性》](http://www.runoob.com/cssref/css3-pr-transform.html) 
9. [《CSS3 animation（动画） 属性》](http://www.runoob.com/cssref/css3-pr-animation.html)
10. [《CSS3 box-shadow 属性》](http://www.w3school.com.cn/cssref/pr_box-shadow.asp) 
11. [《个人总结（css3新特性）》](https://segmentfault.com/a/1190000010780991)  

### <a name="chapter-fourteen-four" id="chapter-fourteen-four">14.4 关于 JS</a>

> [返回目录](#catalog-chapter-fourteen)

1. [【推荐】《JavaScript - MDN》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
2. [《小邵教你玩转ES6》](https://juejin.im/post/5b7b95206fb9a019bd2463d8)
3. [《小邵教你玩转JS面向对象》](https://juejin.im/post/5b8a8724f265da435450c591)
4. [《实现双向绑定Proxy比defineproperty优劣如何》](https://www.jianshu.com/p/2df6dcddb0d7)
5. [《Vue 中关于 $emit 的用法》](https://blog.csdn.net/sllailcp/article/details/78595077)
6. [《JavaScript 世界万物诞生记》](https://zhuanlan.zhihu.com/p/22989691)
7. [《js中的new()到底做了些什么？？》](https://www.cnblogs.com/faith3/p/6209741.html)
8. [《MDN Function.prototype.call()》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
9.  [《JavaScript中的call、apply、bind深入理解》](https://www.jianshu.com/p/00dc4ad9b83f)
10. [《箭头函数 - 廖雪峰》](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001438565969057627e5435793645b7acaee3b6869d1374000)

### <a name="chapter-fourteen-five" id="chapter-fourteen-five">14.5 关于其他</a>

> [返回目录](#catalog-chapter-fourteen)

1. [《前端性能优化最佳实践》](https://csspod.com/frontend-performance-best-practices/)
2. [《到底什么是前端工程化、模块化、组件化》](https://www.cnblogs.com/allenlei/p/6195235.html)  
3. [《【前端工程化系列】简谈前端模块化开发与开发规范》](https://www.cnblogs.com/code-klaus/p/9011911.html)  
4. [《个人关于模块化的理解》](https://www.cnblogs.com/doublenet/p/4918306.html)  
5. [《组件化开发和模块化开发概念辨析》](https://blog.csdn.net/blog_jihq/article/details/79191008)  
6. [《JavaScript模块化 --- Commonjs、AMD、CMD、es6 modules》](https://www.cnblogs.com/zhuzhenwei918/p/7426904.html)  
7.  [《浅谈什么是前端工程化》](https://www.cnblogs.com/fsyz/p/8274727.html)
8.  [《前端分享之cookie的使用及单点登录》](https://segmentfault.com/a/1190000011295587) 
9.  [《Cookie、session和localStorage、以及sessionStorage之间的区别》](https://www.cnblogs.com/zr123/p/8086525.html)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
2018 前端开发分享
===

> Create by **jsliang** on **2018-11-26 08:10:27**  
> Recently revised in **2018-11-29 08:23:37**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 发展历史](#chapter-three) |
| &emsp;[3.1 原始社会](#chapter-three-one) |
| &emsp;[3.2 石器时代](#chapter-three-two) |
| &emsp;[3.3 铁器时代](#chapter-three-three) |
| &emsp;[3.4 工业时代](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 技术比较](#chapter-four) |
| &emsp;[4.1 JSP 与 jQuery](#chapter-four-one) |
| &emsp;[4.2 jQuery 与 Vue](#chapter-four-two) |
| &emsp;[4.3 Vue 与 小程序](#chapter-four-three) |
| &emsp;[4.4 Node 与 Java](#chapter-four-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 经验分享](#chapter-five) |
| &emsp;[5.1 ThinkPHP + Bootstrap + MySQL](#chapter-five-one) |
| &emsp;[5.2 Vue + Express + MongoDB](#chapter-five-two) |
| &emsp;[5.3 jQuery + HTML5](#chapter-five-three) |
| &emsp;[5.4 微信小程序](#chapter-five-four) |
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
* [JSP、JavaScript、jQuery、jQuery Easy UI、Ajax、JSON各自是什么、区别、联系 | CSDN - 南下Debugging](https://blog.csdn.net/u012369153/article/details/53465379)
* [jquery 和 jsp常用功能点汇总 | CSDN - toMatser](https://blog.csdn.net/tomcat_2014/article/details/50392422)

&emsp;参与协助：

* **[深圳大学](https://baike.baidu.com/item/%E6%B7%B1%E5%9C%B3%E5%A4%A7%E5%AD%A6/423814?fr=aladdin)** - **[陈建光](https://github.com/jgchenu)**
* **[杭州店家科技 智慧财务线](https://www.lagou.com/gongsi/73675.html)** - **靳宗楠**

<br>

# <a name="chapter-three" id="chapter-three">三 发展历史</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;以铜为镜，可以正衣冠；  
&emsp;以古为镜，可以知兴替；  
&emsp;以人为镜，可以明得失。  

&emsp;了解一门技术的历史，可以帮助我们更清晰地了解这个行业的动态。

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 原始社会</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;很久很久很久以前，在 **jsliang** 出生的前一年，即 1994 年的时候，网景公司 (Netscape Communications) 推出了第一款浏览器：NCSAMosaic，但是它只有少数的幸运儿才能使用。

![图](../../../public-repertory/img/other-share-1.png)

&emsp;它的初始作用，是为了方便科学家看文档、传论文。所以，到今天为止，学习前端的人在接触 HTML 的时候，都会记得它的第一句有个词是 `Document`。  
&emsp;这时候的互联网，无疑是处于原始社会的文明初创时期。  

![图](../../../public-repertory/img/other-share-5.png)


&emsp;你的标点符号变了？OK，浏览器下载过一个新的页面；  
&emsp;你提交了一个表单？OK，浏览器白屏等待许久，最后返回给你个 “用户名错误”；  
&emsp;你电商网站有一千种商品？OK，那你写一千个页面吧……  

&emsp;这时候的互联网，前后端开发是一体的，前端代码是后端代码的一部分：后端收到浏览器的请求 ---> 发送静态页面 ---> 发送到浏览器。

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 石器时代</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;就在同一年(1994 年)，PHP 出现了，有了将数据嵌入到 HTML 中的形式，这意味着互联网行业出现了钻木取火，不断朝石器时代发展。

![图](../../../public-repertory/img/other-share-6.png)

&emsp;这时候的互联网，兴起了数据嵌入模板，模板直接写样式的开发模式，例如 MVC 模式：

* Model（模型层）：提供/保存数据。
* Controller（控制层）：数据处理，实现业务逻辑。
* View（视图层）：展示数据，提供用户界面。

&emsp;在此时，前端只是后端 MVC 中的 V，所以那时候的所谓 “前端工程师” 还没有对应的概念，前端开发人员都喜欢自称 “切图仔”。  
&emsp;因为后端太忙，没空写页面样式让它长得更好看些，于是才有了前端编写页面模板后，让后端代码读取模板，替换变量，渲染出页面。

&emsp;以 PHP 框架的 Laravel 为例：

![图](../../../public-repertory/img/other-share-3.png)

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

&emsp;HTML 与 CSS：

```
<ul>
  <li style="color:red">Make</li>
  <li style="color:blue">Model</li>
  <li style="color:yellow">Produced on</li>
</ul>
```

> 相似的：  
> PHP 直接将数据内嵌到 HTML 中。  
> ASP 的 ASPX，在 HTML 中嵌入 C# 代码。  
> Java 的 JSP 直接将数据嵌入到网页中。



<br>

## <a name="chapter-three-three" id="chapter-three-three">3.3 铁器时代</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;1995 年，网景推出了 JavaScript，形成了前端的雏形：HTML 为骨架，CSS 为外貌，JavaScript 为交互。  
&emsp;而到了 1998 年前后，Ajax（Asynchronous Javascript And XML：异步的 JavaScript 和 XML）得到了相对的应用，并且在之后逐渐被使用到各个页面上，从而促进了 Web 从 1.0 的静态网页，纯内容展示向 Web 2.0 模式迈进：  

&emsp;**Web 2.0 时代：动态网页，富交互，前端数据处理**  

&emsp;在 Ajax 的普及中，有三件事是值得一提的：

* 2004 年：Gmail
* 2005 年：Google 地图
* 2006 年：Ajax 被 W3C 正式纳入标准

&emsp;这时候，前端不再是后端的模板，它可以独立得到各种数据。相对于 Web 1.0 的时代，Web 2.0 由石器时代迈向了铁器时代！

![图](../../../public-repertory/img/other-share-7.gif)

&emsp;在 Web 2.0 的时代中，在 2006 年的时候，用于操作 DOM 的 jQuery 出现了，它快速地风靡了全球。大量的基于 jQuery 的插件构成了一个庞大的生态系统，从而稳固了 jQuery 作为 JS 库一哥的地位。  
&emsp;jQuery 的影响是源远流长的。即时到了今天，还是会有用 jQuery 梭哈、jQuery + gulp 前端工程化的项目等……无它，唯方便而。

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 工业时代</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;伴随着大数据时代的到来，而 jQuery 在大量的数据操作时，会对 DOM 进行大量的操作，从而导致页面的加载缓慢……这时，有些前端开发者逐渐觉得力不从心了。  

* 2008 年，谷歌 V8 引擎发布，终结微软 IE 时代。
* 2009 年 AngularJS 诞生、Node诞生。
* 2011 年 React 诞生。
* 2014 年 Vue.js 诞生。

&emsp;如果说，Angular、React、Vue 等 MVVM 模式的出现，以及 Webpack 的前端工程化构建，加速了数据驱动前端工程化的发展。那么，Node 这个基于 V8 引擎的服务端 JavaScript 运行环境的诞生，可媲美 Ajax 对于前端的贡献。Node 是前端的第二次飞跃，它使 JS 在服务端语言中也有了一席之地。  

> 何为 MVVM 模式？
> * Model：提供/保存数据。
> * View：视图
> * View-Model：简化的 Controller，唯一的作用就是为 View 提供处理好的数据，不含其它逻辑。
> ![图](../../../public-repertory/img/other-share-4.png)

&emsp;如今，后端负责数据，前端负责其余工作越发明显化。它们之间的通讯，只需要后端暴露 RESTFul 接口，前端通过 Ajax，以 HTTP 协议与后端通信即可：

![图](../../../public-repertory/img/other-share-2.png)

&emsp;在这个前端的工业时代中，Vue、React、Angular 三大框架并驾齐驱。其他框架虽然也有在陆续发布，但是脱离不了这三大框架的魔爪。而这三大框架的 UI 框架来说，桌面端的 ElementUI、NW JS；移动端的RN、Weex 等。  

&emsp;以此同时，手机端的发展也是不可小觑的：

* 2007 年第一代 iPhone 发布。
* 2008 年第一台安卓手机发布。

&emsp;虽然，一开始的手机应用，是 Native App 的天下，但是随着 React Native、微信小程序的发布，以及网速的等不断提升，现在手机上 Web App 逐渐取代 Native App。

<br>

# <a name="chapter-four" id="chapter-four">四 技术比较</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;没有最完美的技术，只有更完美的解决方案。

<br>

## <a name="chapter-four-one" id="chapter-four-one">4.1 JSP 与 jQuery</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;关于 JSP 与 jQuery 的学习记录：

* [Java Server Pages](https://github.com/LiangJunrong/document-library/blob/master/other-library/JavaAbout/JSP/README.md)
* [jQuery](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/jQuery/jQueryBase.md)

&emsp;何为 JSP？  
&emsp;JSP 全称 Java Server Page，是 Java 企业应用的一种动态技术，JSP 是服务端运行的 JSP 网页代码文件。Java 和 JSP 是运行在服务器端的，也就是说他两运行的结果生成 HTML，HTML 是静态页面，而 JSP 是动态页面。  

&emsp;何为 jQuery？  
&emsp;jQuery 是一个轻量级的 JavaScript 库。jQuery 能够使用户的 HTML 页面 和 JS 内容分离，也就是说，jQuery 的使用，更有利于 HTML、CSS、JavaScript 三者的分离，使得前端代码得到更好的维护。

&emsp;现在就相同功能进行 JSP 与 jQuery 代码比较：

> JSP 代码片段

```
<ul>  
  <c:forEach items="${list}">  
    <li>${user.userName}</li>
  </c:forEach>
</ul>  
```

<br>

> jQuery 代码片段

```
<!-- HTML 内容填充 -->

<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script>
  var data;
  $.ajax({
    // ...获取数据
    data = res.data;
  });
  $(function() {
    var html = '';
    $.each(data, function(index, item) {
      var html='<li>' + item.userName + '</li>';
      html += html;
    })
    html = '<ul>' + html + '</ul>';
  })
</script>
```

&emsp;咋看之下，你会觉得：“啊，JSP 那么简单，用 JSP 好啊！”  
&emsp;是的，JSP 几行代码就能解决 jQuery 十几行代码才能解决的事，而且运行速度也快过 jQuery，为啥不一直用它呢？  
&emsp;就项目发展而言。公司初创的时候，项目初期结构不繁杂的情况下，使用 JSP 无可厚非，因为它快、省事，而且还能节省个人力（前后端让一个 Java 写就可以搞定了）。  
&emsp;但是，在项目越来越繁杂、庞大的情况下，一个 Java 已经维护不过来了，你必须不停地加 Java 开发人手……然而，就好比喜欢锻炼的不全都喜欢跑步一样，并不是所有操作数据的 Java 都喜欢写页面的，这时候就凸显了几个问题：

1. 项目越来越大，模块越来越多，需要投入的人手也越来越多，这时候需要分模块分人手地去维护。而且这个 Java 程序猿必须喜欢操作数据，也喜欢编写页面，要不然企业将面临员工频繁流动的困扰。  
2. 用户开始对界面操作提更高的要求，需要增加更多的 HTML 互动和特效，无形中增加 Java 程序猿的工作量。
3. 当有员工辞职后，下一名员工接手的时间将逐渐增加，由 1 天增长为 1 周甚至 1 个月。因为他不仅要熟悉数据的操作部分，更需要去数据页面的互动。而这段时间，辞职的员工的工作将施压到其他 Java 程序猿身上。

&emsp;综上，这时候企业不得不考虑了：能不能帮 Java 程序猿减轻负担，更好地维护发展项目。而这时候，JavaScript 经过时间的沉淀，越发凸显了它的强大，所以，在诸多因素之下，就有了前后端的分离：  

&emsp;后端人员提供接口，前端人员使用 jQuery 中封装好的 Ajax 调取接口获取数据，渲染到页面上。

<br>

## <a name="chapter-four-two" id="chapter-four-two">4.2 jQuery 与 Vue</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;

<br>

## <a name="chapter-four-three" id="chapter-four-three">4.3 Vue 与 小程序</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;

<br>

## <a name="chapter-four-four" id="chapter-four-four">4.4 Node 与 Java</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;

<br>

> **以下文字尚未整理完毕，敬请期待**  
> **以下文字尚未整理完毕，敬请期待**  
> **以下文字尚未整理完毕，敬请期待**

1. jQuery 多页面？

2. SPA？

&emsp;SPA = Single-page application  
&emsp;这意味着，网页其实就是一个应用程序，它可以做到：

* 读写数据
* 切换视图
* 用户交互

7. Vue、React、Angular？

&emsp;双向数据绑定介绍

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

# <a name="chapter-five" id="chapter-five">五 经验分享</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;学习扩宽视野，实战提升经验。

<br>

## <a name="chapter-five-one" id="chapter-five-one">5.1 ThinkPHP + Bootstrap + MySQL</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;

<br>

## <a name="chapter-five-two" id="chapter-five-two">5.2 Vue + Express + MongoDB</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;

<br>

## <a name="chapter-five-three" id="chapter-five-three">5.3 jQuery + HTML5</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;

<br>

## <a name="chapter-five-four" id="chapter-five-four">5.4 微信小程序</a>

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
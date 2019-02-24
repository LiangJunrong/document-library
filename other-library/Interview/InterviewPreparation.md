jsliang 的 2019 面试准备
===

> Create by **jsliang** on **2018-2-11 15:30:34**  
> Recently revised in **2019-2-24 14:00:34**

周末工作：

* [x] 整理一下已收集的面试资料
* [x] 梳理一下知识点，将大纲目录列举出来
* [ ] 整理一下自己所做的项目，列出编写流程，其中困点、难点，以及自己的项目开发所用的一套
* [ ] 如果前三点都做好了，那么在细化一两个常用点

面试题大纲：

* HTML
  * HTML 书籍推荐
  * HTML 语义化
  * HTML5 新标签
  * 常见浏览器及其内核
  * cookies、sessionStorage、localStorage
* CSS
  * CSS 书籍推荐
  * CSS reset
  * CSS 盒模型
  * CSS 单位
  * CSS 选择器
  * CSS 常见布局
  * CSS3 新特性
  * BFC
  * box-sizing
  * 行内元素和块级元素
  * 行内样式、内嵌式、链接式以及导入式
  * 水平垂直居中
* JavaScript
  * JS 书籍推荐
  * JS 引用方式
  * 原型与原型链
  * 作用域与闭包
  * 浅拷贝与深拷贝
  * 模块化与组件化
  * 面向对象与面向过程
  * JS 继承
  * 防抖与节流
  * ES6
  * 函数柯里化
  * 数组操作
* Vue
  * MVVM
  * 生命周期
  * 双向数据绑定
  * Virtual DOM
  * template 编译
  * key
  * nextTick
  * 虚拟 DOM
  * 父子组件通讯
  * Vue-Router
  * Vuex
* 微信小程序
  * 文件主要目录及文件作用
  * 微信小程序生命周期
  * 微信小程序提供的常用 API
  * 如何封装数据请求
  * 页面数据传递
  * 加载性能优化的方法
  * 微信小程序与原生 APP、Vue、H5 差异
  * 微信小程序原理
  * 微信小程序异步请求
* 浏览器
  * 浏览器架构
  * 从输入 URL 到展示
  * Event Loop
  * 重绘与回流
  * 数据存储
  * 内存管理与垃圾回收
  * 内存泄漏
* 网络协议
  * 网络分层
  * HTTP/HTTPS
  * HTTP 状态码
  * TCP 三次握手与四次挥手
  * 跨域
  * 安全
* 性能优化
  * HTML 优化
  * CSS 优化
  * JavaScript 优化
* 其他
  * 算法与数据结构

```目标岗位 1
岗位职责：
1、独立完成公司中后台项目的前端开发
2、与后端开发一起，确定接口协议
3、独立完成接口文档的编写并组织评审
4、深入解析代码, 提升代码执行效率, 加强代码兼容性
5、对用户交互有深刻理解，能帮助产品优化交互体验

任职要求：
1、有2年以上前端开发经验
2、对各种Web前端技术（JavaScript，CSS，语义化标签等等）有深刻理解；
3、熟悉服务器端Web应用结构，有服务器端脚本语言经验更佳
4、熟悉WEB应用的MVC，MVVM结构
5、英文4级以上

应具备的知识与技能：
1、精通HTML5、CSS3等网页制作技术，熟悉页面架构和Flex布局；
2、精通JavaScript、Ajax等Web开发技术
3、熟练使用ES6,有Reactjs的使用经验；
4、熟练使用Git,Webpack等工具；
5、熟悉W3C标准，对表现与数据分离、Web语义化等有较为深刻的理解；
6、思路清晰，具备良好的沟通能力和团队协作精神，善于学习、总结，乐于分享。
```

```目标岗位 2
岗位职责：
1. 负责web前端开发框架的搭建；
2. 负责web前端研发（包括PC和Mobile）；

能力要求：
1. 扎实的html,js,css知识；
2. 熟悉vue等前端开发框架；
3. 熟悉bootstrap或elementui等前端UI库；
4. 熟悉响应式网页开发；
5. 能编写可维护性高的前端代码；
7. 2年以上专业岗位工作经验，有相关作品可展示优先。
```

Hello 小伙伴们好，我叫梁峻荣，网名叫 **jsliang**，由于崇拜前端大佬技术胖（*jspang*）的原因，又因为自己学的是 JavaScript，所以给自己取了个 **jsliang**（*JavaScriptLiang*） 的网名，希望自己能在前端路上走得更远，并携手小伙伴一起前行。

**首先**，**jsliang** 高考后的暑期就听大学师兄的建议，开始学习编程，那时候学习了 C 语言，觉得世界上最神奇的事情不过如此，敲两下键盘，按下回车，电脑就会一闪一闪地响应我们！于是在大学的时候，陆陆续续学过 C、C#、.Net……等。

> **-_-|| 由于都还给老师了，在这里就不多累述了。**

**然后**，在大二就开始接触 HTML，那时候选修了《网页设计基础》，跟着老师做了个只有几个页面的静态网站。在大三的时候，参加了学校的特训班，分角色按流程从头到尾做了个实现了购物功能的网站。同时，由于在特训班的时候，看到后端使用 ThinkPHP（TP），觉得蛮不错的，于是自己捣鼓，使用 TP 3.2.3 + Bootstrap 3 + MySQL 打造了自己的博客（已下线）。

**接着**，由于选了门 Node.js 的课，所以也跟着大佬的步伐接触了下 Vue、Koa 这些，那时候对 npm 等诸多不懂，为了折腾这个于是我的世界打开了个大门。

**最后**，我在自己的毕业设计中使用 Node.js + Vue + ElementUI + MongoDB 打造了个校园外卖、快递代拿社区单页应用。

在 2018 年 5 月的时候，直接出来面试，不像其他大佬的毕业等于失业，很幸运地 **jsliang** 面试第一家就给了 offer，于是就进了这家公司，那时候感觉自己只懂 ES5、jQuery、HTML/HTML5、CSS/CSS3 的皮毛。

在熟悉了三个月的业务，公司给的任务能顺利完成后，我觉得自己不够努力，外面的前端翻天覆地，我的技术却只是梭哈 jQuery！

于是 2018 年 8 月，**jsliang** 开始写 Markdown，将 5 月份到 8 月份记录到 Word 文档上的笔记整理成了 [jsliang 的文档库](https://github.com/LiangJunrong/document-library)，并在 [jsliang 的掘金](https://juejin.im/user/584613ba128fe10058b3cf68) 发表了第一篇文章。

8 月至今，**jsliang** 大致经历了以下这些：

1. 学 Webpack，并用 Webpack 构建一个多页面配置。然后幸运的是，刚好碰到公司的一个扒站任务，于是整个前端小组直接用了我的 Webpack + jQuery + VS Code 的 Live Share 套路进行协同开发！
2. 学 微信小程序，并将它应用到电信开发的微信小程序项目翼小微中。
3. 学 ECharts 报表，并用它做了个 Vue + ECharts 的报表，来展示爱音乐公司的运营数据。
4. 学 Node，然后搭了个企业网站（http://company.jsliang.top），并写了篇小文章（目前最高成就，获得了 1100 多赞）。
5. 学 Vue，由于之前的 Vue 工作上有好多没有，逐渐淡忘了，所以从基础开始，准备写一套《Vue 从 0 到 1》。

以上，就是 jsliang 的编程生涯。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;<a name="catalog-chapter-two-one" id="catalog-chapter-two-one"></a>[2.1 跳槽原委](#chapter-two-one) |
| &emsp;<a name="catalog-chapter-two-two" id="catalog-chapter-two-two"></a>[2.2 开篇点题](#chapter-two-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 HTML](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 CSS](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 JavaScript](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六  其他](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 总结](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 参考文献](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

**时刻准备好自己的简历，不管是互联网经济不佳面临裁员，还是因为公司内部斗争严重想换份工作，只有随时更新自己，把自己的简历准备好，你才知道哪一刻跑路是最佳选择。**

## <a name="chapter-two-one" id="chapter-two-one">2.1 跳槽原委</a>

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

其中 2018 年 8 月刚转正，也不敢说自己技术值得提薪，然后 2019 年 1 月底跟人事交谈的时候，说的是年终述职演讲得好的给提薪，2 月表示提薪名单没我份……

最后，**jsliang** 曾跟项目总监私下谈话，建议可以发展一些新产品，这样公司或许能获取一些新收入，我也可以进一步挑战我的技术。但是，由于我司大部分依赖于电信进行市场扩张，所以，enm...所以心也委屈了。

> 在 2018 的努力下，GitHub 破 600 近 700 star，掘金破 10 万阅读量，3000 粉丝：  
> GitHub 见证：[点击查看](https://github.com/LiangJunrong)  
> 掘金见证：[点击查看](https://juejin.im/user/584613ba128fe10058b3cf68)

## <a name="chapter-two-two" id="chapter-two-two">2.2 开篇点题</a>

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

最后在这里祝各位小伙伴能找到称心如意的工作~

## <a name="chapter-three" id="chapter-three">三 HTML</a>

> [返回目录](#catalog-chapter-three)

* input 标签自带的默认监听事件都有哪些？

1. onfocus 获取焦点时触发
2. onblur 失去焦点时触发
3. onchange 失去焦点并且 input 的 value 值改变
4. onkeydown 在输入时按键按下
5. onkeyup 在输入时按键抬起
6. onclick 主要是 button 点击事件
7. onselect 在 input 中的值被选中触发
8. oninput 当 input 的 value 值改变触发，不用等失去焦点（不同于 onchange 事件）

* HTML5 中新增了哪些标签？

新增标签大致有：`<header>`、`<footer>`、`<aside>`、`<nav>`、`<video>`、`<audio>`、`<canvas>`等等

## <a name="chapter-four" id="chapter-four">四 CSS</a>

> [返回目录](#catalog-chapter-four)

### CSS 书籍

* 《CSS 权威指南》
* 《CSS 揭秘》
* 《CSS 世界》

### 盒模型

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

如果你在设计页面中，发现内容区被撑爆了，那么，请检查下现在的 `border-box` 是什么。

### BFC

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

### Flex 及垂直居中问题

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

### 选择器优先级

在 CSS 的选择器中，它会按照优先级**从右向左解析**：!important -> 行内样式 -> #id -> .class -> tag -> * -> 继承 -> 默认

## <a name="chapter-five" id="chapter-five">五 JavaScript</a>

> [返回目录](#catalog-chapter-five)

### JavaScript 书籍

* 《JavaScript 高级程序（第三版）》
* 《你不知道的 JavaScript》
* 《JavaScript 忍者秘籍》
* 《ES6 标准入门》——阮一峰
* 《JavaScript 设计模式》——张容铭
* 《JavaScript 设计模式与开发实践》——曾探

### 面向对象与面向过程

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

### 原型与原型链

关于 `prototype`、`__proto__`、`new`、`call()`、`apply()`、`bind()`、`this` 这些的知识点，由于篇幅太长，**jsliang** 已经抽离了出来，并做了简洁详细讲解，详见：

* [2019 面试准备 - JS 原型与原型链](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/prototype.md)

下面放出知识点：

![图](../../public-repertory/img/other-interview-1-prototype.png)

![图](../../public-repertory/img/other-interview-2-prototype.png)

* 实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。
* Object.__proto__ === Function.prototype
* Function.prototype.__proto__ === Object.prototype
* Object.prototype.__proto__ === null

### 闭包

简单定义：函数 A 里面包含了 函数 B，而 函数 B 里面使用了 函数 A 的变量，那么 函数 B 被称为闭包。

又或者：闭包就是能够读取其他函数内部变量的函数

```
function A() {
  var a = 1;
  function B() {
    console.log(a);
  }
  return B();
}
```

* 闭包经典问题：现在我们有一段代码：

```
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

```
$(function() {
  for(let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
})
```

在这里，每个 let 和代码块结合起来形成块级作用域，当 setTimeout() 打印时，会寻找最近的块级作用域中的 i，所以依次打印出 0 1 2。

如果这样讲不明白，我们可以执行下下面这段代码：

```
$(function() {
  for(let i = 0; i < 3; i++) {
    console.log("定时器外部：" + i);
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
})
```

此时浏览器依次输出的是：

```
定时器外部：0
定时器外部：1
定时器外部：2
0
1
2
```

即代码还是先执行 `for` 循环，但是当 `for` 结束执行到了 `setTimeout` 的时候，它会做个标记，这样到了 `console.log(i)` 中，i 就能找到这个块中最近的变量定义。

2. 使用立即执行函数解决闭包问题

```
$(function() {
  for(let i = 0; i < 3; i++) {
    (function(i){
      setTimeout(function() {
        console.log(i);
      }, 1000);
    })(i)
  }
})
```

### 数组

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

### 深拷贝与浅拷贝

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

### ES6

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

### Vue

* 对 MVVM 的理解

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互时双向的，因此 View 数据会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需要关注业务逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

1. M - Model。Model 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。
2. V - View。View 代表 UI 组件，它负责将数据模型转化为 UI 展现出来。
3. VM - ViewModel。ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步 View 和 Model 的对象，连接 Model 和 View。

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
> 答：在 `beforeMounted` 时它执行了 `render` 函数，对 $el 和 data 进行了初始化，但此时还是挂载到虚拟的 DOM 节点，然后它在 `mounted` 时就完成了 DOM 渲染，这时候我们一般还进行 Ajax 交互，

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

* Vue template 编译的理解

Vue 中 template 就是先转化成 AST 树，再得到 render 函数返回 VNode（Vue 的虚拟 DOM 节点）。

1. 通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree - 源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。
2. AST 会经过 generate（将 AST 语法树转换成 render function 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有标签名、子节点、文本等待。

* Vue 中为何使用 key

key 的作用就是在更新组件时判断两个节点是否相同。相同就复用，不相同就删除旧的创建新的。

> 对于 diff 过程来说 key 是起不到提速作用的，详见：[key 的作用](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1#issuecomment-465894196)

* event & v-model: 事件和v-model的实现原理
* slot & keep-alive: 内置组件的实现原理
* transition: 过渡的实现原理
* vue-router: 官方路由的实现原理
* vuex: 官方状态管理的实现原理

* Vue.nextTick

待补充

> 参考文献：[《Vue.nextTick 的原理和用途》](https://segmentfault.com/a/1190000012861862)

* 虚拟 DOM

Vue 在 `render` 中 `createElement` 的时候，并不是产生真实的 DOM 元素，实际上 `createElement` 描述为 `createNodeDescription`，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点。因此，我们将这样的节点描述为 “虚拟节点”（Virtual Node），简称 VNode。“虚拟 DOM” 是我们对由 Vue 组件树建立的整个 VNode 树的称呼。

* 零碎知识点

1. 父子组件通讯：父组件使用 `props` 将数据传给子组件；然后子组件通过 `$emit` 触发父元素的自定义事件。[《Vue 中关于 $emit 的用法》](https://blog.csdn.net/sllailcp/article/details/78595077)
2. 

## <a name="chapter-six" id="chapter-six">六 其他</a>

> [返回目录](#catalog-chapter-six)

### 推荐

1. [技术胖](https://jspang.com/)
2. [慕课网](https://www.imooc.com/)

### 大纲整理

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

1. 闭包
2. this 指向问题
3. 原型和原型链
4. 面向对象与设计模式
5. Flex 布局
6. macrotask 和 microtask
7. http 协议，例如 keep-alive，例如状态码，例如三次握手四次挥手
8. 字符串操作
9. 从输入 URL 到页面加载发生了什么
10. 网页具体是如何渲染的
11. 前端性能优化（[《前端性能优化最佳实践》](https://csspod.com/frontend-performance-best-practices/)、[《一篇文章搞定前端面试》](https://juejin.im/post/5bbaa549e51d450e827b6b13)）

---

1. Promise 及其源码实现原理
2. 知道 异步 与 同步
3. 微任务与宏任务
4. MVVM 的实现原理
5. 闭包（词法作用域）



7.  CommonJS 在 Webpack 打包出来是怎样的
8.  Vue 生命周期（每当执行到一到函数的时候，执行 callback）
9.  原型链
10. Object.create()
11. 深度拷贝，浅拷贝（JS 关于深度拷贝的，不是偷懒，是相对地址和绝对地址）
12. https 本质上是什么？
13. 从输入 url 到页面出来经过了什么。
14. 项目是什么项目，经历了什么，怎么解决。

### 模块化与组件化以及前端工程化

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

### 网络知识

#### 网络分层协议

* [网络分层TCP/IP 与HTTP](https://juejin.im/post/5a98e1f7f265da237410694e)

#### HTTP 状态码

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

### get 与 post

* get：缓存、请求长度受限、会被历史记录保存。
* post：安全、数据量大、更多编码类型。

### 浏览器存储

1. 存储于代码中，代码执行完毕释放内存。
2. 存储于浏览器中，cookie 用于短期存储用户身份，登录状态等较小的信息；localStorage/sessionStorage 用于长期存储数据，浏览器关闭不影响它们的内存，相比于 cookie，storage 能存储较多；IndexedDB 是浏览器提供的接近于 NoSQL 的数据库，允许存储大量数据。
3. 存储于数据库中。

### V8 内存管理与垃圾回收机制

V8 将内存分为两类：新生代内存空间和老生代内存空间。

* 新生代内存空间：主要用来存放存活时间较短的对象。
* 老生代内存空间：主要用来存放存活时间较长的对象。

这两者通过不同的算法，对内存进行管理操作。

### 内存泄漏

* 意外的全局变量：无法被回收。
* 定时器：未被正确关闭，导致所引用的外部变量无法被释放。
* 事件监听：没有正确销毁（低版本浏览器可能出现）。
* 闭包：会导致父级中的变量无法被释放。
* DOM 引用：DOM 被删除时，内存中的引用未被正确清空。

* 如何查看内存变化情况？

使用 Chrome 的 Timeline（新版本 Performance）进行内存标记，可视化查看内存的变化情况，找出异常点。

### Event loop

待补充

### 跨域

待补充

### 网络安全

* XSS 攻击：注入恶意代码

1. 在输入框中被使用了 JS 代码进行了 Alert 弹窗！
2. cookie 设置 httpOnly
3. 转义页面上的输入内容和输出内容

* CSRF：跨站请求伪造

1. get 不修改数据
2. 不被第三方网站访问到用户的 cookie
3. 设置白名单，不被第三方网站请求
4. 请求校验

### 性能优化

性能优化：

#### CSS 部分

1. 优化选择器路径：使用 `.c {}` 而不是 `.a .b .c {}`。
2. 选择器合并：共同的属性内容提起出来，压缩空间和资源开销。
3. 精准样式：使用 `padding-left: 10px` 而不是 `padding: 0 0 0 10px`。
4. 雪碧图：将小的图标合并到一张图中，这样所有的图片只需要请求一次。
5. 避免通配符：`.a .b * {}` 这样的选择器，根据从右到左的解析顺序在解析过程中遇到通配符 `* {}` 会遍历整个 DOM，性能大大损耗。
6. 少用 float：`float` 在渲染时计算量比较大，可以使用 flex 布局。
7. 为 0 值去单位：增加兼容性。
8. 压缩文件大小，减少资源下载负担。

#### JavaScript 部分

1. 尽可能把 `<script>` 标签放在 `body` 之后，避免 JS 的执行卡住 DOM 的渲染，最大程度保证页面尽快地展示出来。
2. 尽可能合并 JS 代码：提取公共方法，进行面向对象设计等……
3. CSS 能做的事情，尽量不用 JS 来做，毕竟 JS 的解析执行比较粗暴，而 CSS 效率更高。
4. 尽可能逐条操作 DOM，并预定好 CSs 样式，从而减少 reflow 或者 repaint 的次数。
5. 尽可能少地创建 DOM，而是在 HTML 和 CSS 中使用 `display: none` 来隐藏，按需显示。
6. 压缩文件大小，减少资源下载负担。

#### HTML 部分

1. 避免 HTML 中书写 CSS 代码，因为这样难以维护。
2. 使用 Viewport 加速页面的渲染。
3. 使用语义化标签，减少 CSS 代码，增加可读性和 SEO。
4. 减少标签的使用，DOM 解析是一个大量遍历的过程，减少不必要的标签，能降低遍历的次数。
5. 避免 src、href 等的值为空，因为即时它们为空，浏览器也会发起 HTTP 请求。
6. 减少 DNS 查询的次数。

### 快速记忆知识点

1. 三次握手：① 客户机 -> SYN -> 服务器；② 客户机 <- SYN + ACK <- 服务器；③ 客户机 -> ACK -> 服务器。
2. URL 的组成：协议 + 服务器地址（域名 或 IP + 端口） + 路径 + 文件名。
3. WebSocket 可以实现 Web 浏览器与服务器进行长时间的连接。

## <a name="chapter-seven" id="chapter-seven">七 总结</a>

> [返回目录](#catalog-chapter-seven)

在观看这篇文章的过程中，小伙伴可能会有这些疑问：

1. 你这杂七杂八的都写了什么呀？看完我晕乎了！

回答：每个人的学习经历是不同的，所拥有的技术、知识点以及工作经验等都是不同的，所以在这篇文章中，**jsliang** 在充实自己的同时，其实也是在挖掘自己的不足，例如面向对象造轮子，例如算法问题等……**jsliang** 充分意识到自己的不足，并打算在之后进行补充学习以及应用到工作中。

## <a name="chapter-eight" id="chapter-eight">八 参考文献</a>

> [返回目录](#catalog-chapter-eight)

### 面试文章：

1. [《一位前端 2018 绝地求生记》](https://juejin.im/post/5c36fe50518825253b5e94f4)
2. [《中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)》](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)

### CSS 文章

1. [《我对BFC的理解》](https://www.cnblogs.com/dojo-lzz/p/3999013.html)
2. [《CSS实现垂直居中的常用方法》](https://www.cnblogs.com/yugege/p/5246652.html)
3. [《CSS 用 position: absolute 与 transform 来居中块级元素的问题》](https://segmentfault.com/q/1010000005151903)

### JS 文章：

1. [《小邵教你玩转ES6》](https://juejin.im/post/5b7b95206fb9a019bd2463d8)
2. [《小邵教你玩转JS面向对象》](https://juejin.im/post/5b8a8724f265da435450c591)
3. [《实现双向绑定Proxy比defineproperty优劣如何》](https://www.jianshu.com/p/2df6dcddb0d7)
4. [《Vue 中关于 $emit 的用法》](https://blog.csdn.net/sllailcp/article/details/78595077)

### 其他

1. jsliang 的 GitHub：[点击查看](https://github.com/LiangJunrong) 
2. jsliang 的 掘金：[点击查看](https://juejin.im/user/584613ba128fe10058b3cf68)
3. [《前端性能优化最佳实践》](https://csspod.com/frontend-performance-best-practices/)
4. [《一篇文章搞定前端面试》](https://juejin.im/post/5bbaa549e51d450e827b6b13)
5. [《到底什么是前端工程化、模块化、组件化》](https://www.cnblogs.com/allenlei/p/6195235.html)  
6. [《【前端工程化系列】简谈前端模块化开发与开发规范》](https://www.cnblogs.com/code-klaus/p/9011911.html)  
7. [《个人关于模块化的理解》](https://www.cnblogs.com/doublenet/p/4918306.html)  
8. [《组件化开发和模块化开发概念辨析》](https://blog.csdn.net/blog_jihq/article/details/79191008)  
9. [《JavaScript模块化 --- Commonjs、AMD、CMD、es6 modules》](https://www.cnblogs.com/zhuzhenwei918/p/7426904.html)  
10. [《浅谈什么是前端工程化》](https://www.cnblogs.com/fsyz/p/8274727.html)  

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
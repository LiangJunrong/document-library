jsliang 的 2019 面试准备
===

> Create by **jsliang** on **2018-12-23 20:53:34**  
> Recently revised in **2019-2-12 08:31:00**

**时刻准备好自己的简历，因为你不知道前端什么时候会被炒鱿鱼，也不知道你什么时候会萌生辞职想法，只有准备好自己的简历，你才知道哪一刻跑路是最佳选择。**

本文的知识点将涉及 HTML、CSS、JS、HTTP、Vue、Webpack、打包工具、性能优化等，没有前置条件，看得懂可以瞅瞅复习下，看不懂可以瞅瞅学习下。

关于面试，在这列下在慕课网视频看到的，个人非常认同的三个问答：

* 问：拿到一个面试题，第一时间看到什么？ 答：考点
* 问：如何看待网上搜出来的永远看不完的题海？ 答：不变应万变
* 问：如何对待面试题？ 答：题目到知识再到题目

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 HTML](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 CSS](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 JavaScript](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六  其他](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

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

其中磕磕碰碰就不累述了，1 月底跟人事交谈的时候说年终述职演讲得好的给提薪，2 月表示提薪名单没我份……

enm...所以心也委屈了。

> 关于 2018 的努力：  
> GitHub 见证：[点击查看](https://github.com/LiangJunrong)  
> 掘金见证：[点击查看](https://juejin.im/user/584613ba128fe10058b3cf68)

## <a name="chapter-three" id="chapter-three">三 HTML</a>

> [返回目录](#catalog-chapter-three)

HTML 内容

## <a name="chapter-four" id="chapter-four">四 CSS</a>

> [返回目录](#catalog-chapter-four)

CSS 内容

## <a name="chapter-five" id="chapter-five">五 JavaScript</a>

> [返回目录](#catalog-chapter-five)

1. 什么是面向过程与面向对象？

* 面向过程就是做围墙的时候，由你本身操作，叠第一层的时候：放砖头，糊水泥，放砖头，糊水泥；然后第二层的时候，继续放砖头，糊水泥，放砖头，糊水泥……
* 面向对象就是做围墙的时候，由他人帮你完成，将做第一层的做法抽取出来，就是放砖头是第一个动作，糊水泥是第二个动作，然后给这两个动作加上步数，最后告诉机器人有 n 层，交给机器人帮你工作就行了。

2. 为什么需要面向对象写法？

* 更方便
* 可以复用，减少代码冗余度
* 高内聚低耦合

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

* 实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。

```
// 首先记住三条公式
Object.__proto__=== Function.prototype
Function.prototype.__proto__=== Object.prototype
Object.prototype.__proto__ === null



// 然后理解下面的题目
function Person(name) {
    this.name = name
}
let p = new Person('Tom');

// 问：1. p.__proto__等于什么？
// 答：Person.prototype

// 问：2. Person.__proto__等于什么？
// 答：Function.prototype



// 最后思考为什么下面题目是这个答案？
var foo = {},
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); // value a
console.log(foo.b); // undefined
console.log(F.a); // value a
console.log(F.b); // value b
```

## <a name="chapter-six" id="chapter-six">六 其他</a>

> [返回目录](#catalog-chapter-six)

大纲整理：

1. 闭包
2. this 指向问题
3. 原型和原型链
4. 面向对象与设计模式
5. Flex 布局
6. macrotask 和 microtask
7. http 协议，例如 keep-alive，例如状态码
8. 字符串操作
9. 从输入 URL 到页面加载发生了什么
10. 

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
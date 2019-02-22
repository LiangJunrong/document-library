2019 面试准备 - JS 原型与原型链
===

> Create by **jsliang** on **2019-2-21 08:42:02**  
> Recently revised in **2019-2-22 09:06:02**

**起源：**

广州小伙伴在帮我进行摸底面试的时候，提出了问题：能否谈谈 this 的作用？

题目的目的：

1. 了解 this，说一下 this 的作用。
2. Vue 的 this.变量，this 指向 Vue 的哪里。（指 Vue 的实例）
3. Vue 里写个 setTimeout，发现 this 改变（`call()`、`apply()`、`=>`）

然后，我爬上了一座高山……

## 一、题目

* 题目 1

```js
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
}
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);
```

请写出上面编程的输出结果是什么？

* 题目 2

```js
var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
}

var f = new F();

f.a();
f.b();

F.a();
F.b();
```

请写出上面编程的输出结果是什么？

* 题目 3

```js
function Person(name) {
    this.name = name
}
let p = new Person('Tom');
```

问题1：1. p.__proto__等于什么？

问题2：Person.__proto__等于什么？

* 题目 4

```js
var foo = {},
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);
```

请写出上面编程的输出结果是什么？

## 二、解题

* 题目 1 答案：

```js
b.n = 1;
b.m = undefined;

c.n = 2;
c.m = 3;
```

* 题目 2 答案：

```js
f.a(); -> a
f.b(); -> f.b is not a function

F.a() -> a
F.b() -> b
```

* 题目 3 答案

答案1：Person.prototype

答案2：Function.prototype

* 题目 4 答案

```js
foo.a => value a
foo.b => undefined
F.a => value a
F.b => value b
```

## 三、拓展

原型和原型链估计是老生常谈的话题了，但是还是有很多小白（例如 **jsliang** 自己）就时常懵逼在这里。

![图](../../../public-repertory/img/other-interview-1-prototype.png)

> 首图祭祖，让暴风雨来得更猛烈些吧！

### 3.1 问题少年：旅途开始

因为爱（了解来龙去脉），所以 **jsliang** 开始学习（百度）之旅，了解原型和原型链。

**首先**，**jsliang** 去了解查看原型链 `prototype`。

**然后**，在了解途中看到了 `new`，于是百度查看 JS 的 `new` 理念。

**接着**，接触 `new` 会了解还有 `call()`，而 `call()`、`apply()` 以及箭头函数 `=>` 又是相似的东西。

**最后**，当我们查找 `call()` 的时候，它又涉及到了 `this`，所以我们 “顺便” 查阅 `this` 吧。

### 3.2 问题一：原型及原型链

**首先**，为什么需要原型及原型链？

我们查看一个例子：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function() {
    console.log(age + "岁的" + name + "在吃饭。");
  }
}

let p1 = new Person("jsliang", 24);
let p2 = new Person("jsliang", 24);

console.log(p1.eat === p2.eat); // false
```

可以看到，对于同一个函数，我们通过 new 生成出来的实例，都会开出新的一块堆区，所以上面代码中 person 1 和 person 2 的吃饭是不同的。

拥有属于自己的东西（例如房子、汽车），这样很好。但它也有不好，毕竟总共就那么点地儿（内存），你不停地建房子，到最后是不是没有空地了？（内存不足）

所以，咱要想个法子，建个类似于共享库的对象（例如把楼房建高），这样就可以在需要的时候，调用一个类似共享库的对象（社区），让实例能够沿着某个线索去找到自己归处。

而这个线索，在前端中就是原型链 `prototype`。

```js
function Person(name) {
  this.name = name;
}

// 通过构造函数的 Person 的 prototype 属性找到 Person 的原型对象
Person.prototype.eat = function() {
  console.log("吃饭");
}

let p1 = new Person("jsliang", 24);
let p2 = new Person("梁峻荣", 24);

console.log(p1.eat === p2.eat); // true
```

看！这样我们就通过分享的形式，让这两个实例对象指向相同的位置了（社区）。

**然后**，说到这里，我们就兴趣来了，`prototype` 是什么玩意？居然这么神奇！

孩子没娘，说来话长。首先我们要从 JavaScript 这玩意的诞生说起，但是放这里的话，故事主线就太长了，所以这里有个本文的剧场版[《JavaScript 世界万物诞生记》](https://zhuanlan.zhihu.com/p/22989691)，感兴趣的小伙伴可以去了解一下。这里我们还是看图，并回归本话题：

![图](../../../public-repertory/img/other-interview-2-prototype.png)

* JS 说，我好寂寞。因为 JS 的本源是空的，即：null。
* JS 说，要有神。所以它通过万能术 `__proto__` 产生了 No1 这号神，即：`No1.__proto__ == null`。
* JS 说，神你要有自己的想法啊。所以神自己想了个方法，根据自己的原型 `prototype` 创建了对象 `Object`，即：`Object.prototype == No1; No1.__proto__ == null`。于是我们把 `prototype` 叫做原型，就好比 `Object` 的原型是神，男人的原型是人类一样，同时 `__proto__` 叫做原型链，毕竟有了 `__proto__`，对象、神、JS 之间才有联系。这时候 `Object.prototype.__proto__ == null`。
* JS 说，神你要有更多的想法啊，我把万能术 `__proto__` 借你用了。所以神根据 `Object`，使用 `__proto__` 做了个机器 No2，即 `No2.__proto__ == No1`，并规定所有的东西，通过 `__proto__` 可以连接机器，再找到自己，包括 `Object` 也是，于是 **Object 成为所有对象的原型**，`Object.__proto__.__proto__ == No1`，然后 `String`、`Number`、`Boolean`、 `Array` 这些物种也是如此。
* JS 说，神你的机器好厉害喔！你的机器能不能做出更多的机器啊？神咧嘴一笑：你通过万能术创造了我，我通过自己原型创造了对象。如此，那我造个机器 Function，`Function.prototype == No2, Function.__proto__ == No2`，即 `Function.prototype == Function.__proto__` 吧！这样 No2 就成了造机器的机器，它负责管理 Object、Function、String、Number、Boolean、Array 这几个。

**最后**，说到这里，我们应该很了解上面那副图，并有点豁然开朗的感觉，能清楚地了解下面几条公式了：

```
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
```

### 3.3 问题二：new 为何物

这时候，我们知道 `prototype` 以及 `__proto__` 是啥了，让我们回归之前的代码：

```js
function Person(name) {
  this.name = name;
}

// 通过构造函数的 Person 的 prototype 属性找到 Person 的原型对象
Person.prototype.eat = function() {
  console.log("吃饭");
}

let p1 = new Person("jsliang", 24);
let p2 = new Person("梁峻荣", 24);

console.log(p1.eat === p2.eat); // true
```

可以看出，这里有个点，我们还不清楚，就是：**new 为何物？**

**首先**，我们来讲讲函数：**函数分为构造函数和普通函数**。

怎么回事呢？**No2 始机器** 在创造机器 Function 的过程中，创造了过多的机器，为了方便区分这些机器，**No1 神** 将机器分为两类：**创造物种类的 Function 叫做构造函数（通常面向对象），创造动作类的 Function 叫做普通函数（通常面向过程）**。打个比喻：`function Birl() {}` 、`function Person() {}` 这类以首字母大写形式来定义的，用来定义某个类型物种的，就叫做 **构造函数**。而 `function fly() {}`、`function eat() {}` 这类以首字母小写形式来定义的，用来定义某个动作的，就叫做普通函数。

**然后**，我们尝试制作一个会飞的鸟：

```js
// 定义鸟类
function Bird(color) {
  this.color = color;
}

// 定义飞的动作
function fly(bird) {
  console.log(bird + " 飞起来了！");
}
```

**接着**，我们要使用鸟类这个机器创造一只鸟啊，**No1 神** 挠挠头，折腾了下（**注意它折腾了下**），跟我们说使用 `new` 吧，于是：

```js
// 定义鸟类
function Bird(color) {
  this.color = color;
}

// 创造一只鸟
let bird1 = new Bird('蓝色');

// 定义飞的动作
function fly(bird) {
  console.log(bird.color + "的鸟飞起来了！");
}

fly(bird1); // 蓝色的鸟飞起来了！
```

说到这里，我们知道如何使用类型创造机器和动作创造机器了。

**最后**，我们如果有兴趣，还可以观察下 **No1 神** 在 `new` 内部折腾了啥：

假如我们使用的是：`let bird1 = new Bird('蓝色');`

```js
// 1. 首先有个类型机器
function ClassMachine() {
  console.log("类型创造机器");
}
// 2. 然后我们定义一个对象物品
let thingOne = {};
// 3. 对象物品通过万能术 __proto__ 指向了类型机器的原型（即 No 2 始机器）
thingOne.__proto__ = ClassMachine.prototype;
// 4. ？？？
ClassMachine.call(thingOne);
// 5. 定义了类型机器的动作
ClassMachine.prototype.action = function(){
  console.log("动作创造机器");
}
// 6. 这个对象物品执行了动作
thingOne.action();
/*
 * Console：
 * 类型创造机器
 * 动作创造机器
*/
```

OK，`new` 做了啥，**No 1** 神安排地明明白白了。

那么下面这个例子，我们也就清楚了：

```js
function Person(name){
    this.name = name
}

Person.prototype = {
  eat:function(){
    console.log('吃饭')
  },
  sleep:function(){
    console.log('睡觉')
  }
};

let p = new Person('梁峻荣',28);

// 访问原型对象
console.log(Person.prototype);
console.log(p.__proto__); // __proto__仅用于测试，不能写在正式代码中

/* Console
  * {eat: ƒ, sleep: ƒ}
  * {eat: ƒ, sleep: ƒ}
*/
```

所以很多人会给出一条公式：

**实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。**

现在理解地妥妥的了吧！

### 3.4 问题三：call 又是啥

但是，你注意到 new 过程中的点 4 了吗？！！！

JavaScript 中每一个 Function 对象都有一个 `apply()` 方法和一个 `call()` 方法，就是说 **NO1 造物神** 为了完成 `new` 的操作，还做出了这两个小伙伴，它们的使用方法是：

```js
// apply() 方法
function.apply(thisObj, [, argArray]);

// call() 方法
function.call(thisObj, [, arg1[, arg2[, ...argN]]]);
```

### 四 参考资料

* [《JavaScript 世界万物诞生记》](https://zhuanlan.zhihu.com/p/22989691)
* [《小邵教你玩转JS面向对象》](https://juejin.im/post/5b8a8724f265da435450c591)
* [《js中的new()到底做了些什么？？》](https://www.cnblogs.com/faith3/p/6209741.html)
* 

### 五 工具

* [在线作图 Process On](https://www.processon.com)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
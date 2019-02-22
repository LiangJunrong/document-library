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

因此，为了了解原型和原型链，**jsliang** 开始学习（百度）之旅。

首先，查看原型链 `prototype` 的时候，**jsliang** 去理解了 `prototype` 有几种继承方式。

然后，接触到了 `constructor`，于是百度查看 `constructor`。

接着，又看到了 `new`，于是百度查看 JS 的 `new` 理念。

最后，接触 `new` 会了解还有 `this`，所以去查找了 `this`。

最后的最后，查阅 `this` 就又想知道 `apply() `与 `call()` 以及箭头函数 `=>`。

所以，下面我们逐步来谈：

![图](../../../public-repertory/img/other-interview-1-prototype.png)

**据说上面这张图有助于帮助了解 `__proto__`、`prototype` 以及 `constructor`，至于有没有，一千个观众眼里有一千个哈姆勒特。**

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

说到这里，我们就兴趣来了，`prototype` 是什么玩意？居然这么神奇！

孩子没娘，说来话长。首先我们要从 JavaScript 这玩意的诞生说起，但是放这里的话，故事主线就太长了，所以这里有个剧场版[《JavaScript 世界万物诞生记》](https://zhuanlan.zhihu.com/p/22989691)，感兴趣的小伙伴可以去了解一下。这里我们还是回归本话题：

* JS 说，我好寂寞，因为 JS 的本源是空的，即：null。
* JS 说，要有神，所以它通过 `__proto__` 产生了 No1 这号神，即：`No1.__proto__ == null`
* JS 说，神你要有自己的想法啊，所以神自己想了个方法，通过 `prototype` 创建了对象 `Object`，即：`Object.prototype == No1, No1.__proto__ == null`，于是 `Object.prototype.__proto__ == null`。
* JS 说，神你要有更多的想法啊，我把 `__proto__` 借你用了，所以神基于 `Object`，使用 `__proto__` 做了个机器 No2，即 `No2.__proto__ == No1`，并规定所有的东西，通过 `__proto__` 可以连接机器，包括 `Object` 也是，于是 **Object 成为所有对象的原型**，`Object.__proto__.__proto__ == No1`，然后 `String`、`Number`、`Boolean`、 `Array` 这些物种也是如此。
* JS 说，神你的机器好厉害喔！你的机器能不能做出更多的机器啊？神咧嘴一笑：你通过造神术创造了我，我通过造物数创造了对象。如此，那我造个机器 Function，`Function.prototype == No2, Function.__proto__ == No2`，即 `Function.prototype == Function.__proto__` 吧！这样 No2 就能创造更多的机器了。

1. 牢记一条公式：

**实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。**

那么，它是几个意思呢？我们看下面代码：

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

是的，在上面例子中，函数 Person 与变量 p 的联系就是：`Person.prototype === p.__proto__`。

> 一般来说，为了区分于普通函数，我们会将构造函数的首字母大写。  
> 不信你将 Person 改为 person，但我不保证你工作中这么写会被队友群殴。

![图](../../../public-repertory/img/other-interview-2-prototype.png)

这时候上面这张图的前面部分，我们会不会有种豁然开朗的感觉。

2. 这样，我们就方便理解下面的三条公式了：

```js
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
```

### 四 参考资料

* [《JavaScript 世界万物诞生记》](https://zhuanlan.zhihu.com/p/22989691)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
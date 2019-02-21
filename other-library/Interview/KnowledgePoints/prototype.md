2019 面试准备 - JS 原型与原型链
===

> Create by **jsliang** on **2019-2-21 08:42:02**  
> Recently revised in **2019-2-21 09:07:31**

**起源：**

广州小伙伴在帮我进行摸底面试的时候，提出了问题：能否谈谈 this 的作用？

题目的目的：

1. 了解 this，说一下 this 的作用。
2. Vue 的 this.变量，this 指向 Vue 的哪里。（指 Vue 的实例）
3. Vue 里写个 setTimeout，发现 this 改变（`call()`、`apply()`、`=>`）

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

* 题目三

```js
function Person(name) {
    this.name = name
}
let p = new Person('Tom');
```

问题1：1. p.__proto__等于什么？

问题2：Person.__proto__等于什么？

* 题目四

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

接着，又会看到了 `new`，于是百度查看 JS 的 `new` 理念。
最后 `new` 会了解还有 `this`，所以去查找了 `this`。
最后的最后，查阅 `this` 就又想想知道 `apply() `与 `call()` 以及箭头函数 `=>`。

所以，下面我们逐步来谈：

![图](../../../public-repertory/img/other-interview-1-prototype.png)

**首先**，为什么需要原型及原型链？

尚未完成，正在整理。

1. 实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。

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

2. 这样，我们就方便理解下面的三条公式了：

```js
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
```

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
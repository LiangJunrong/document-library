2019 面试准备 - JS 原型与原型链
===

> Create by **jsliang** on **2019-2-21 08:42:02**  
> Recently revised in **2019-2-21 08:42:06**

## 一、题目

this（了解 this，说一下作用，Vue 的 this.变量，this 指 Vue 的实例，Vue 里写个 setTimeout，发现 this 改变，call、apply、=>）

## 二、解题

## 三、拓展

在这里，查看原型链 prototype 的时候，就需要理解 prototype 有几种继承方式，然后会接触到 constructor，接着会看到 new，而 new 会了解还有 this，最后查阅 this 就想知道 apply() 与 call() 以及箭头函数 =>

![图](../../../public-repertory/img/other-interview-1-prototype.png)

**首先**，为什么需要原型及原型链？

咱讲讲原型以及原型链。

1. 实例的 `__proto__` 属性（原型）等于其构造函数的 `prototype` 属性。

```
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

```
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;
```



```
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

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
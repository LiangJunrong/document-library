手写源码系列 - new
===

> Create by **jsliang** on **2020-10-06 17:48:21**  
> Recently revised in **2020-11-12 15:40:10**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 原生 new](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 手写 new](#chapter-four) |
| &emsp;[4.1 简单实现](#chapter-four-one) |
| &emsp;[4.2 完善版本](#chapter-four-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

面试官：来手写一个 `new`。

看到这道题，不要急不要慌，**jsliang** 逐步深入带你搞一个。

我们先看一个案例：

```js
this.name = 'jsliang';
let Foo = function() {
  this.name = 'zhazhaliang';
}
let foo = new Foo();
console.log(foo.name); // 输出啥？
console.log(window.name); // 输出啥？
```

上面代码输出啥？

---

答案是：

* `zhazhaliang`
* `jsliang`

那么，这道题中的 `new` 做了啥呢？我们深入研究研究。

## <a name="chapter-three" id="chapter-three"></a>三 原生 new

> [返回目录](#chapter-one)

先看一下原生 `new` 的一个案例，思考下 `new` 能做啥：

```js
function Person( name, age){
  this.name = name;
  this.age = age;
 
  // return;                              // 返回 this
  // return null;                         // 返回 this
  // return this;                         // 返回 this
  // return false;                        // 返回 this
  // return 'hello world';                // 返回 this
  // return 2;                            // 返回 this
  
  // return [];                           // 返回 新建的 [], person.name = undefined
  // return function(){};                 // 返回 新建的 function，抛弃 this, person.name = undefined
  // return new Boolean(false);           // 返回 新建的 boolean，抛弃 this, person.name = undefined
  // return new String('hello world');    // 返回 新建的 string，抛弃 this, person.name = undefined
  // return new Number(32);               // 返回 新的 number，抛弃 this, person.name = undefined
}

var person = new Person("jsliang", 25);
console.log(person); // Person {name: "jsliang", age: 25}
```

## <a name="chapter-four" id="chapter-four"></a>四 手写 new

> [返回目录](#chapter-one)

那么我们开始理解 `new` 里面的内容，看看怎么手写一个 `new`。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 简单实现

> [返回目录](#chapter-one)

那么我们先简单地用 3 行代码写一个 `new` 试试：

* 首先创建一个空对象 `tempObj = {}`。
* 接着调用 `Foo.apply` 方法，将 `tempObj` 作为 `apply` 方法的参数，这样当 `Foo` 的执行上下文创建时，它的 `this` 就指向 `tempObj` 对象。
* 然后执行 `Foo` 函数，此时的 `Foo` 函数执行上下文中的 `this` 指向了 `tempObj` 对象。
* 最后返回 `tempObj` 对象。

```js
function myNew(func, ...args) {
  const tempObj = {};
  func.apply(tempObj, args);
  return tempObj;
}

this.name = 'jsliang';
let Foo = function(name, age) {
  this.name = name;
  this.age = age;
}
let foo = myNew(Foo, 'zhazhaliang', 25);
console.log(foo.name); // 输出啥？
console.log(foo.age); // 输出啥？
console.log(window.name); // 输出啥？
```

如上，我们可以看到此时 `this` 是属于 `tempObj` 的，绑定到 `foo` 上去了，从而获取到：

* `zhazhaliang`
* `25`
* `jsliang`

wow，是不是豁然开朗，简单 `new` 的实现只需要 3 行代码！

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 完善版本

> [返回目录](#chapter-one)

OK，我们写好了简单版的，让我们看看复杂版需要的条件吧：

1. **第一个参数必须是个函数**。`const person = new Person()`，但是我们搞不了原汁原味的，那就变成 `const person = myNew(Person)`。
2. **原型链继承**。我们新建一个对象 `obj`，这个 `obj` 的 `__proto__` 指向 `func` 的原型 `prototype`，即 `obj.__proto__ === func.prototype`。
3. **修正 `this` 指向**。通过 `apply` 绑定 `obj` 和 `func` 的关系，并且将参数作为一个数组传递进去（方法体定义已经将剩余参数解构为数组）
4. **判断构造函数是否返回 `Object` 或者 `Function`**。`typeof` 判断 `object` 需要排除 `null`，因为 `typeof null === object`。
5. **非函数和对象返回新创建的对象，否则返回构造函数的 `return` 值**。

下面贴一下最终实现：

```js
function myNew(func, ...args) {
  // 1. 判断方法体
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体';
  }

  // 2. 创建新对象
  const obj = {};

  // 3. 这个对象的 __proto__ 指向 func 这个类的原型对象
  // 即实例可以访问构造函数原型（constructor.prototype）所在原型链上的属性
  obj.__proto__ = Object.create(func.prototype);

  // 为了兼容 IE 可以让步骤 2 和 步骤 3 合并
  // const obj = Object.create(func.prototype);

  // 4. 通过 apply 绑定 this 执行并且获取运行后的结果
  let result = func.apply(obj, args);
  
  // 5. 如果构造函数返回的结果是引用数据类型，则返回运行后的结果
  // 否则返回新创建的 obj
  const isObject = typeof result === 'object' && result !== null;
  const isFunction = typeof result === 'function';
  return isObject || isFunction ? result : obj;
}

// 测试
function Person(name) {
  this.name = name;
  return function() { // 用来测试第 5 点
    console.log('返回引用数据类型');
  };
}
// 用来测试第 2 点和第 3 点
Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}
const me = myNew(Person, 'jsliang'); // 用来测试第 4 点
me.sayName(); // My name is jsliang
console.log(me); // Person {name: 'jsliang'}

// 用来测试第 1 点
// const you = myNew({ name: 'jsliang' }, 'jsliang'); // 报错：第一个参数必须是方法体
```

这样，我们就了解 `new` 是啥东东，碰到手写 `new` 的时候就不慌啦！

> 如果你将代码直接复制执行，你会发现报错了，想想为什么？你可以将 `myNew(Person, 'jsliang')` 缓存 `new Person('jsliang')` 先试试，再仔细检查构造函数 `Person` 内部代码

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

面向对象
===

> Create by **jsliang** on **2020-4-26 15:45:42**  
> Recently revised in **2020-4-26 20:41:37**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

## 面向对象编程思想

* 面向过程：注重解决问题的步骤，分析问题需要的每一步，实现函数依次调用；
* 面向对象：是一种程序设计思想。将数据和处理数据的程序封装到对象中。
* 面向对象特性：抽象、封装、继承、多态。

优点：提高代码的复用性及可维护性。

说了那么多，到底啥意思呢？

举个栗子：

* **jsliang** 去附近的砂锅麻辣烫吃饭。

这就是面向对象，即：

```js
const eat = () => {
  return 'jsliang 去砂锅麻辣烫吃饭';
}
eat();
```

但是，吃饭这个动作，是个正常人都可以做的啊，所以：

```js
const eat = (people) => {
  return `${people} 去砂锅麻辣烫吃饭`;
}
eat('jsliang');
```

这时候，就开始面向对象了，即可以任何人到这家餐厅吃饭。

如果你在工作中，你可能觉得这样还不够完美：我们不一定要吃砂锅麻辣烫啊！也不一定天天吃啊！

```js
const eat = (people, address, time) => {
  return `${people} 去 ${address} 吃 ${time}`;
}
eat('jsliang', '煲仔饭', '午饭');
```

很好，这就是面向过程 -> 面向对象。

在工作中，就是当我们一件事，有很多份代码都使用到的时候，就将其抽取出来（封装）。

为什么要用 **面向对象** 呢，从上面我们可以看出了：为了程序员偷懒。

但是面试的时候你不能这么说啊，这样子你就忽悠不了几句话了，所以来个正经点回答：

* 面向过程

1. 优点：简单明了
2. 缺点：系统较大的时候使用不便，CV 工作量大

* 面向对象

* 优点：方便复用、可迭代性强
* 缺点：单个使用不够方便

## 字面量和构造函数

* 对象创建

```js

// 1. 字面量方式
const obj1 = {
  name: '张三',
  age: 20,
  hobby: function() {
    console.log('喜欢玩');
  },
};
console.log(obj1);

// 2. 构造函数
const obj2 = new Object();
obj2.name = '张三';
obj2.age = 20;
obj2.hobby = function() {
  console.log('喜欢玩');
};
console.log(obj2);

// 3. Object.create()
const obj3 = Object.create({
  name: '张三',
  age: 20,
  hobby() {
    console.log('喜欢玩');
  },
});
console.log(obj3);
```

* 对象调用

```js
const obj = {
  name: '张三',
  age: 20,
  hobby: function() {
    console.log('喜欢玩');
  },
};
console.log(obj.name);
console.log(obj['name']);
const str = 'name';
console.log(obj[str]);
```

## 工厂模式

```js
/**
 * @name 01-工厂模式
 * @description 2020-4-26 16:53:40
 */

// const zhangsan = {
//   name: '张三',
//   age: 20,
//   hobby() {
//     console.log('喜欢玩');
//   },
// };
// const lisi = {
//   name: '李四',
//   age: 22,
//   hobby() {
//     console.log('没有爱好');
//   },
// };
// ……王五、赵六……
// 都是同一个模子复制出来的玩意，使用工厂模式

// 工厂模式
function Person(name, age, hobby) {
  const obj = {}; // 添加原料
  obj.name = name;
  obj.age = age;
  obj.hobby = function() {
    console.log(hobby);
  };
  return obj; // 出厂
};

const person1 = new Person('张三', 20, '喜欢玩');
const person2 = new Person('李四', 21, '没有爱好');
console.log(person1);
console.log(person2);
```

## 类的概念

```js
// ES5 类
function Person1() {
  // ...
}
const people1 = new People('123');

// ES6 类
Class Person2() {
  // ...
}
const person2 = new Person('123');
```

## new 运算符

1. 执行函数
2. 自动创建一个空对象
3. 把空对象和 `this` 绑定
4. 如果没有返还，隐式返回 `this`

```js
function Test() {
  // let obj = {}; ——> this

  // ...做一些内容

  // return this
}
new Test();
```

通过这个看工厂模式：

```js
// function Person(name, age, hobby) {
//   const obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.hobby = function() {
//     console.log(hobby);
//   };
//   return obj;
// };

// 改造
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = function() {
    cosnole.log(hobby);
  };
};
const person = new Person('张三', 20, '喜欢玩');
console.log(person); // Person {name: "张三", age: 20, hobby: ƒ}
```

## 构造函数

* 构造函数需要通过 `new` 来调用 `this` 指向实例化对象
* 约定俗成构造函数首字母大写
* 静态属性及方法
  * 静态方法里的 `this`
  * 扩展功能

```js
function Person(name, age, hobby) {
  this.num = 0;
  this.name = name;
  this.age = age;
  this.hobby = function() {
    cosnole.log(hobby);
  };
};

const zhangsan = new Person('张三', 20, '喜欢玩');
zhangsan.num++;
console.log(zhangsan.num); // 1

const lisi = new Person('李四', 20, '喜欢玩');
lisi.num++;
console.log(zhangsan.lisi); // 1
```

每次 `new` 都生成了一个新的对象，那么有没有属于类本身的静态属性和方法呢？

```js
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = function() {
    cosnole.log(hobby);
  };
};
// 静态成员
Person.num = 0;

const zhangsan = new Person('张三', 20, '喜欢玩');
Person.num++;
console.log(Person.num); // 1

const lisi = new Person('李四', 20, '喜欢玩');
Person.num++;
console.log(Person.num); // 2
```

* 构造函数性能

```js
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = function() {
    cosnole.log(hobby);
  };
};
const zhangsan = new Person('张三', 20, '喜欢玩');
const lisi = new Person('李四', 20, '喜欢玩');
console.log(zhangsan.hobby === lisi.hobby); // false
```

当我们有 100，甚至上千个人，就会开辟 1000 个地址，造成地址损耗。

JavaScript 提供了公共空间存放这些应该存放到相同地址的地方。

## 原型

```js
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
};
Person.prototype.hobby = function(hobby) {
  cosnole.log(hobby);
};
const zhangsan = new Person('张三', 20, '喜欢玩');
const lisi = new Person('李四', 20, '喜欢玩');
console.log(zhangsan.hobby === lisi.hobby); // true
```

这就是为啥需要 `prototype` 的原因。

```js
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
};
Person.prototype.hobby = function(hobby) {
  cosnole.log(hobby);
};
const zhangsan = new Person('张三', 20, '喜欢玩');
console.log(zhangsan);
/*
{
  age: 20
  name: "张三"
  __proto__:
    hobby: ƒ ()
    constructor: ƒ Person(name, age, hobby)
    __proto__: Object
}
*/
console.log(zhangsan.__proto__ === Person.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(zhangsan.constructor === Person); // true
```

实例化的对象的 `__proto__` 和原构造函数的 `prototype` 一致：`zhangsan.__proto__ === Person.prototype`。

原型的固有属性：`Person.prototype.constructor === Person`、`zhangsan.constructor === Person`。

可以通过 `constructor` 来判断类型

```js
let str = new String('abc');
console.log(str.constructor === String);
```

## 原型链

对象之间的继承关系，在 JavaScript 中是通过 `prototype` 对象指向父类对象，直到指向 `Object` 对象为止，这样就形成了一个原型指向的链条，称之为原型链。

1. 当访问一个对象的属性和方法时，会先在对象自身上查找属性或方法是否存在，如果存在就使用对象自身的属性和方法。如果不存在就去对象的构造函数中的原型对象中查找。依次类推，直到找到为止。如果在顶层对象中还找不到，则返回 `undefined`。
2. 原型链最顶层为 `Object` 构造函数的 `prototype` 原型对象，给 `Object.prototype` 添加属性或者方法可以被除 `null` 和 `prototype` 之外的所有数据类型对象使用。

```js
// 构造函数
function Foo(name) {
  this.name = name; // 1. 现在构造函数中找
}
// Foo.prototype.name = 'jsliang'; // 2. 在原型对象中找
// Object.prototype.name = 'jsliang'; // 4. 通过原型链查找
const newFoo = new Foo('jsliang');
console.log(newFoo.name);
```

如果没有，则沿着原型链查找；如果有，那就返回最近的。

## call、apply、bind

改变函数内部的 `this` 指向。

* `call(obj, arg1, arg2...)`
  * 参数 1：需要改变的 `this` 指向到 `obj`
  * 参数 2：方法的参数
  * 参数 3：方法的参数
* `apply(obj, [arg1, arg2...])`
  * 参数 1：需要改变的 `this` 指向到 `obj`
  * 参数 2：方法的参数都放到数组中
* `bind(obj)(arg1, arg2...)`
  * 返回的是一个函数，需要执行一遍，即 `bind()()`

> call

```js
function foo(name, age) {
  console.log(this);
  console.log(name);
  console.log(age);
}
const obj = {
  name: '张三',
};
// foo.call(obj, '张三', 20);
// foo.apply(obj, ['张三', 20]);
foo.bind(obj)('张三', 20); // 返回一个函数，需要执行一遍
/*
{
  name: "张三"
  __proto__: Object
}
'张三'
20
*/
```

### 继承

儿子 -> 父亲 -> 爷爷

```js
function Dad(name, age) {
  this.name = name;
  this.age = age;
  this.money = '100000';
}
function Son(son, father) {
  Dad.call(this, father.name, father.age);
  this.name = son.name;
  this.age = son.age;
}
const son = new Son(
  {
    name: '儿子',
    age: 20,
  },
  {
    name: '爸爸',
    age: 99,
  }
);
console.log(son); // Son { name: '儿子', age: 20, money: '100000' }
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
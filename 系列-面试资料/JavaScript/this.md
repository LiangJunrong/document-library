this
===

> Create by **jsliang** on **2020-09-30 21:20:15**  
> Recently revised in **2020-11-06 07:40:23**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 全局执行上下文中的 this](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 函数执行上下文中的 this](#chapter-four) |
| &emsp;[4.1 通过 call/bind/apply 改变 this](#chapter-four-one) |
| &emsp;[4.2 通过对象调用方法设置](#chapter-four-two) |
| &emsp;[4.3 通过构造函数中设置](#chapter-four-three) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 this 设计缺陷和应对方案](#chapter-five) |
| &emsp;[5.1 嵌套函数中的 this 不会从外层函数中继承](#chapter-five-one) |
| &emsp;[5.2 普通函数中 this 指向全局对象 window](#chapter-five-two) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 React 中 this 指向](#chapter-six) |
| &emsp;[6.1 解决方案一：提前 bind 绑定 this](#chapter-six-one) |
| &emsp;[6.2 解决方案二：调用时 bind 绑定 this](#chapter-six-two) |
| &emsp;[6.3 解决方案三：返回一个箭头函数](#chapter-six-three) |
| &emsp;[6.4 ~~解决方案四：将调用方法变成箭头函数（失败）~~](#chapter-six-four) |
| &emsp;[6.5 React 的 this 指向实际内容](#chapter-six-five) |
| &emsp;[6.6 React 的 this 指向解决方案](#chapter-six-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 小结](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 题目](#chapter-eight) |
| &emsp;[8.1 this 题目解析 5 步曲](#chapter-eight-one) |
| &emsp;[8.2 let/const 的 this](#chapter-eight-two) |
| &emsp;[8.3 箭头函数的 this](#chapter-eight-three) |
| &emsp;[8.4 求输出结果](#chapter-eight-four) |
| &emsp;[8.5 隐式绑定丢失问题](#chapter-eight-five) |
| &emsp;&emsp;[8.5.1 求输出结果](#chapter-eight-five-one) |
| &emsp;&emsp;[8.5.2 求输出结果](#chapter-eight-five-two) |
| &emsp;[8.6 显示绑定问题](#chapter-eight-six) |
| &emsp;&emsp;[8.6.1 求输出结果](#chapter-eight-six-one) |
| &emsp;&emsp;[8.6.2 求输出结果](#chapter-eight-six-two) |
| &emsp;[8.7 求输出结果](#chapter-eight-seven) |
| &emsp;[8.8 阐述题](#chapter-eight-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 参考文献](#chapter-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

先记住 1 句话：

* **`this` 永远指向最后调用它的那个对象**

再牢记 2 句话：

* 普通函数中 `this` 的指向，是 `this` **执行时**的上下文
* 箭头函数中 `this` 的指向，是 `this` **定义时**的上下文

作用域链和 `this` 是两套不同的系统，它们之间基本没太多联系。

`this` 是和执行上下文绑定的，也就是说每个执行上下文中都有一个 `this`。

执行上下文分为 3 种：

* 全局执行上下文
* 函数执行上下文
* `eval` 执行上下文

> 注意这里是浏览器中的 `this`，和 Node 中的 `this` 是不一样的。

## <a name="chapter-three" id="chapter-three"></a>三 全局执行上下文中的 this

> [返回目录](#chapter-one)

在 Chrome 控制台中输入：`this`，你会看到答案：

```js
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

全局执行上下文中的 `this` 是指向 `Window` 的。

```js
function foo() {
  console.log(this);
}
foo();
```

这段代码也是输出 `Window`，为什么？

记住 `this` 就是谁调用它就指向谁。

我们在全局对象中调用 `foo`，实际上就相当于 `window.foo()` 的一个调用，那么就是指向 `Window`。

> 在执行上面代码之后，其实小伙伴可以在 Chrome 的控制台输入 `window`，会看到里面存在 `foo()` 方法。

> 注意这里是非严格模式。严格模式下的全局对象是 `undefined`，那就会报错误 `Uncaught TypeError: Cannot read property 'name' of undefined`

## <a name="chapter-four" id="chapter-four"></a>四 函数执行上下文中的 this

> [返回目录](#chapter-one)

在上面我们知道，一般的调用方法，是调用 `window` 上的方法。

那怎么获取当前函数的 `this` 呢？

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 通过 call/bind/apply 改变 this

> [返回目录](#chapter-one)

```js
this.myName = 'jsliang';
let foo = function() {
  this.myName = 'zhazhaliang';
}
foo();
console.log(window.myName); // 输出啥？
console.log(foo.myName); // 输出啥？
```

这时候的 `this` 指向 `window`，所以输出结果为；

* zhazhaliang
* undefined

通过 `call` 绑定后：

```js
this.myName = 'jsliang';
let foo = function() {
  this.myName = 'zhazhaliang';
}
foo.call(foo);
console.log(window.myName); // 输出啥？
console.log(foo.myName); // 输出啥？
```

输出结果为：

* jsliang
* zhazhaliang

当然你也可以换成 `apply` 和 `bind`，这里不做累述。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 通过对象调用方法设置

> [返回目录](#chapter-one)

使用对象来调用其内部的一个方法，该方法的 `this` 是指向对象本身的。

* **案例 1**

```js
let myObj = {
  name: 'jsliang',
  showThis: function() {
    console.log(this.name);
  },
};
myObj.showThis(); // 输出啥？
```

答案：输出 `jsliang`。

我们要时刻牢记：**谁调用的指向谁**。这里是通过 `myObj` 进行的一个调用，所以此刻的 `this` 指向 `myObj`。而 `myObj` 里面存有 `name: jsliang`，所以输出 `jsliang`。

当然，我们要有自知之明：

* **案例 2**

```js
let myObj = {
  myName: 'jsliang',
  showThis: function() {
    console.log(this.myName);
  },
};
let foo = myObj.showThis;
foo(); // 输出啥？
```

这时候它又变成 `window` 指向了，此刻 `let foo = myObj.showThis` 只是一个定义，真正执行是在 `foo()`。那么此刻 `foo()` 是咋搞的呢？`window.foo()` 啊！毋庸置疑输出 `undefined`。

* **案例 3**

```js
let myObj = {
  name: 'jsliang',
  showThis: function() {
    console.log(this.name);
  },
};
let foo = myObj.showThis;
foo(); // 输出啥？
```

一般来说，这段代码输出应该是 `undefined`。

但是，这里需要注意的是，`window.name` 是当前 `window` 的名称，它是 `window.open()` 打开新网页这个方法的第二个参数的值。

所以这里输出的 `window.name` 是个空值 `''`，或者当前存在的 `window` 的名称。

**jsliang** 通过一个例子带小伙伴们看看这个是怎么来的：

> index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>jsliang</title>
</head>
<body>
  <button class="btn">打开新网页</button>

  <script>
    (function() {
      const btn = document.querySelector('.btn');
      btn.onclick = function() {
        window.open('index.html', 'jsliang 的网页');
      }
    })()
  </script>
</body>
</html>
```

在新打开的网页中的控制台，输入 `window.name`，获取 `jsliang 的网页`。

结论：

* 在全局环境中调用一个函数，函数内部的 `this` 指向的是全局变量 `window`。
* 通过一个对象来调用其内部的一个方法，该方法的执行上下文中的 `this` 指向对象本身。

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 通过构造函数中设置

> [返回目录](#chapter-one)

```js
this.name = 'jsliang';
let Foo = function() {
  this.name = 'zhazhaliang';
}
let foo = new Foo();
console.log(foo.name); // 输出啥？
console.log(window.name); // 输出啥？
```

答案是：

* zhazhaliang
* jsliang

在将这个答案的缘故之前，我们看下 `new Foo()` 中，JavaScript 引擎做了什么事：

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

* zhazhaliang
* 25
* jsliang

当然，了解到这里，我们还是完善下 `new` 这个手写方法，免得误导小伙伴们觉得 `new` 就做了那么点事：

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

这样，我们就知道构造函数中的 `new` 是怎么一回事了。

## <a name="chapter-five" id="chapter-five"></a>五 this 设计缺陷和应对方案

> [返回目录](#chapter-one)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 嵌套函数中的 this 不会从外层函数中继承

> [返回目录](#chapter-one)

```js
var myObj = {
  myName: "jsliang", 
  showThis: function(){
    console.log(this.myName); // 输出啥？
    function bar(){
      console.log(this.myName); // 输出啥？
    }
    bar();
  },
};
myObj.showThis();
```

答案是：

1. jsliang
2. undefined

**解决方法一：通过 `that` 控制 `this` 指向**

```js
var myObj = {
  myName: "jsliang", 
  showThis: function(){
    console.log(this.myName); // 输出啥？
    let that = this;
    function bar(){
      console.log(that.myName); // 输出啥？
    }
    bar();
  },
};
myObj.showThis();
```

这样都输出 `jsliang` 了。

**解决方法二：通过 ES6 的箭头函数解决问题**

```js
var myObj = {
  myName: "jsliang", 
  showThis: function(){
    console.log(this.myName); // 输出啥？
    const bar = () => {
      console.log(this.myName); // 输出啥？
    }
    bar();
  },
};
myObj.showThis();
```

这是因为 ES6 中的箭头函数并不会创建其自身的执行上下文，所以箭头函数中的 `this` 取决于它的外部函数，即谁调用它 `this` 就继承自谁。

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 普通函数中 this 指向全局对象 window

> [返回目录](#chapter-one)

在实际工作中，我们并不希望函数执行上下文中的 `this` 默认指向全局对象，因为这样会打破数据的边界，造成一些误操作。

如果要让函数执行上下文中的 `this` 指向某个对象，最好的方式是通过 `call` 方法来显示调用。

这个问题可以通过设置 JavaScript 的 **严格模式** 来解决。在严格模式下，默认执行一个函数，其函数的执行上下文中的 `this` 值是 `undefined`，这就解决上面的问题了。

## <a name="chapter-six" id="chapter-six"></a>六 React 中 this 指向

> [返回目录](#chapter-one)

来源于：`this.handleClik = this.handleClick.bind(this);`

为什么要这么操作呢？

我们先看一份代码比对：

> 代码 1：对象调用字段中 this

```js
const test = {
  myName: 'jsliang',
  getName: function() {
    console.log(this.myName); // 输出 jsliang
  }
};
test.getName();
```

> 代码 2：存放到全局变量中

```js
const test = {
  myName: 'jsliang',
  getName: function() {
    console.log(this.myName); // 输出 undefined
  }
};
const func = test.getName;
func();
```

所以，React 中对应的方法，如果没有进行绑定，那么 `this` 就会混乱指向全局对象 `window`。

那么如何修正这个问题呢？

> 注：网友指出：**下面这 4 种方法的比对其实是有误的，普通对象没法跟类做对比**

> 当然，**jsliang** 在这里还是想列举出来

> 具体结论，相信 `202X` 年我们再次复习的时候，有机会就去逐步解答内心疑惑。

> 所以，为了避免矛盾冲突，小伙伴们可以跳过本章

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 解决方案一：提前 bind 绑定 this

> [返回目录](#chapter-one)

```js
const test = {
  myName: 'jsliang',
  getName: function() {
    console.log(this.myName); // 输出 jsliang
  }
};
test.getName = test.getName.bind(test);
const func = test.getName;
func();
```

对应 React 中的：

```js
constructor (props) {
  this.handleClick = this.handleClick.bind(this);
}
<button onClick={this.handleClick}>btn 1</button>
```

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 解决方案二：调用时 bind 绑定 this

> [返回目录](#chapter-one)

```js
const test = {
  myName: 'jsliang',
  getName: function() {
    console.log(this.myName); // 输出 jsliang
  }
};
const func = test.getName.bind(test);
func();
```

对应 React 中的：

```js
<button onClick={this.handleClick.bind(this)}>btn 2</button>
```

### <a name="chapter-six-three" id="chapter-six-three"></a>6.3 解决方案三：返回一个箭头函数

> [返回目录](#chapter-one)

```js
const test = {
  myName: 'jsliang',
  getName: function() {
    console.log(this.myName); // 输出 jsliang
  }
};
const func = () => test.getName();
func();
```

对应 React 中的：

```js
<button onClick={() => this.handleClick()}>btn 3</button>
```

### <a name="chapter-six-four" id="chapter-six-four"></a>6.4 ~~解决方案四：将调用方法变成箭头函数（失败）~~

> [返回目录](#chapter-one)

```js
const test = {
  myName: 'jsliang',
  getName: () => {
    console.log(this.myName);
  }
};
const func = test.getName;
func();
```

对应 React 中的：

```js
handleClick2 = () => {
  console.log('jsliang 2021');
}
<button onClick={this.handleClick2}>btn 4</button>
```

**但是，这种方法失败了，返回 `undefined`，是什么缘故呢？**

网友指出：

* 这 4 种方法的比对其实是有误的，普通对象没法跟类做对比

当然，**jsliang** 还是想列举出来，具体结论，相信后面有机会会逐步解答内心疑惑。

### <a name="chapter-six-five" id="chapter-six-five"></a>6.5 React 的 this 指向实际内容

> [返回目录](#chapter-one)

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

已知上面方法，编译后变成：

```js
"use strict";

// ...代码省略

var Toggle = /*#__PURE__*/function (_React$Component) {
  _inherits(Toggle, _React$Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, props);
    _this.state = {
      isToggleOn: true
    }; // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);

    return _this;
  }

  _createClass(Toggle, [{
    key: "handleClick",
    value: function handleClick() {
      console.log(this); // 输出是 undefined
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("button", {
        onClick: this.handleClick
      }, this.state.isToggleOn ? 'ON' : 'OFF');
    }
  }]);

  return Toggle;
}(React.Component);
```

主要看 `_createClass` 方法，第一个参数是被创建的类，第二个参数是一个数组，数组里面是这个被创建类中的方法。

很显然，代码中 `handleClick` 输出的 `this`，肯定是 `undefined`。

而 `render` 方法返回的是 `React.createElement`，在这个方法中，`this` 被指向了 `_createClass` 方法的第一个参数，也就是 `Toggle` 。

这时候，如果这个方法变成箭头函数：

```js
handleClick = () => {
  console.log(this);
}
```

此时箭头函数是 `this` 定义时的上下文。

当我们点击按钮的时候，会调用 `handleClick` 方法来处理事件，而 `handleClick` 是在 `Toggle` 方法中定义的，所以 `this` 指代 `Toggle` 这个类。

### <a name="chapter-six-six" id="chapter-six-six"></a>6.6 React 的 this 指向解决方案

> [返回目录](#chapter-one)

```js
import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    console.log('jsliang 2020');
  }
  handleClick2 = () => {
    console.log('jsliang 2021');
  }
  render () {
    // 四种绑定方法
    return (
      <div className='App'>
        {/* 方法一：通过 constructor 中进行 bind 绑定 */}
        <button onClick={this.handleClick}>btn 1</button>

        {/* 方法二：在里边绑定 this */}
        <button onClick={this.handleClick.bind(this)}>btn 2</button>

        {/* 方法三：通过箭头函数返回事件 */}
        <button onClick={() => this.handleClick()}>btn 3</button>
        
        {/* 方法四：让方法变成箭头函数 */}
        <button onClick={this.handleClick2}>btn 4</button>
        
        {/* 额外：直接调用不需要绑定 this */}
        {this.handleClick()}
      </div>
    )
  }
}

export default App;
```

## <a name="chapter-seven" id="chapter-seven"></a>七 小结

> [返回目录](#chapter-one)

先记住 1 句话：

* **`this` 永远指向最后调用它的那个对象**

再牢记 2 句话：

* 普通函数中 `this` 的指向，是 `this` **执行时**的上下文
* 箭头函数中 `this` 的指向，是 `this` **定义时**的上下文

## <a name="chapter-eight" id="chapter-eight"></a>八 题目

> [返回目录](#chapter-one)

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 this 题目解析 5 步曲

> [返回目录](#chapter-one)

* 第一题

```js
var name = 'window name';
function a() {
  var name = 'jsliang';
  console.log(this.name); // 输出啥？
  console.log('inner：' + this); // 输出啥？
}
a();
console.log('outer：' + this); // 输出啥？
```

上面代码输出啥？

---

答案：

```
window name
inner：window name
outer：window name
```

解析：这里的 `a()` 可以看成 `window.a()`，所以是都指向 `window` 里面的。

* 第二题

```js
var name = 'window name';
var a = {
  name: 'jsliang',
  fn: function () {
    console.log(this.name); // 输出啥？
  }
}
a.fn();
```

上面代码输出啥？

---

答案：jsliang

解析：现在是 `a.fn()`，所以这个指向 `a`，因此输出 `jsliang`

* 第三题

```js
var name = 'window name';
var a = {
  // name: 'jsliang',
  fn: function () {
    console.log(this.name); // 输出啥？
  }
}
a.fn();
```

上面代码输出啥？

---

答案：undefined

解析：很明显，`a` 里面并没有 `name` 方法了，所以 `a.fn()` 找不到 `a` 对象里面有 `name`，因此输出 `undefined`

* 第四题

```js
var name = 'window name';
var a = {
  name: 'jsliang',
  fn: function () {
    console.log(this.name); // 输出啥？
  }
}
var f = a.fn;
f();
```

上面代码输出啥？

---

答案：`window name`

解析：代码 `var f = a.fn` 并没有调用 `a.fn`，而是做了个定义。在 `f()` 的时候才调用了，此时的 `fn()` 是 `window.fn()`，所以指向了 `window`，因此输出 `window name`

* 第五题

```js
var name = 'window name';
function fn() {
  var name = 'jsliang';
  function innerFn() {
    console.log(this.name);
  };
  innerFn();
}
fn();
```

答案：`window name`

解析：小伙伴理解理解看看

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 let/const 的 this

> [返回目录](#chapter-one)

```js
let a = 10;
const b = 20;

function foo() {
  console.log(this.a);
  console.log(this.b);
}
foo();

console.log(window.a);
```

上面代码输出啥？

---

答案：`undefined`、`undefined`、`undefined`

解析：如果把 `var` 改成了 `let` 或者 `const`，变量是不会被绑定到 `window` 上的，所以此时会打印出三个 `undefined`。

### <a name="chapter-eight-three" id="chapter-eight-three"></a>8.3 箭头函数的 this

> [返回目录](#chapter-one)

```js
var name = 'window name';

var a = {
  name: 'jsliang',
  func1: function () {
    console.log(this.name);
  },
  func2: function () {
    setTimeout(() => {
      this.func1();
    }, 100);
  },
};

a.func1(); // 输出啥？
a.func2(); // 输出啥？
```

上面代码输出啥？

---

答案：

```
jsliang
jsliang
```

解析：箭头函数的 `this` 指向函数定义时的 `this`，而非执行时。箭头函数中没有 `this` 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 `this` 绑定的是最近一层非箭头函数的 `this`，否则，`this` 为 `undefined`。

### <a name="chapter-eight-four" id="chapter-eight-four"></a>8.4 求输出结果

> [返回目录](#chapter-one)

```js
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo(); // 输出啥？
foo2(); // 输出啥？
obj2.foo2(); // 输出啥？
```

上面代码输出啥？

---

答：

```
1
2
3
```

解析：

* `obj.foo()`：`obj` 调用 `foo()`，所以指向 `obj`，输出 `1`
* `foo2()`：实际上是 `window.foo2()`，指向 `window`，输出 `2`
* `obj2.foo2()`：`obj2` 调用 `foo2()`，指向 `obj2`，输出 `3`

### <a name="chapter-eight-five" id="chapter-eight-five"></a>8.5 隐式绑定丢失问题

> [返回目录](#chapter-one)

#### <a name="chapter-eight-five-one" id="chapter-eight-five-one"></a>8.5.1 求输出结果

> [返回目录](#chapter-one)

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
doFoo(obj.foo); // 输出啥？
```

上面代码输出啥？

---

答案：`Window {...}`、`2`

解析：**隐式绑定丢失问题**。`deFoo` 传参 `obj.foo` 的时候，此刻 `foo` 还没被执行，所以在 `doFoo` 中 `fn()` 就相当于 `window.fn()`，所以指向到 `window` 啦！

> 注意此时调用的时候，查找的 `fn` 是 `window` 上的 `fn`，而不是 `doFoo` 里的，`doFoo` 并没有设置 `fn` 这个方法。

#### <a name="chapter-eight-five-two" id="chapter-eight-five-two"></a>8.5.2 求输出结果

> [返回目录](#chapter-one)

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn();
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo); // 输出啥？
```

上面代码输出啥？

---

答案：`{ a: 3, doFoo: f }`、`2`

解析：

1. 此刻的 `fn()` 调用，查找到的位置还是 `window.foo()`，所以调用的时候会指向 `window`。
2. 这里的 `fn()` 是通过传参进来的，而不是 `doFoo` 里面存在的，所以执行的时候 `this` 找到的是 `foo` 定义的位置，实际上还是 `window.fn()`
3. 如何改正这个问题？

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  console.log(this);
  fn.call(this);
}
var obj = { a: 1, foo };
var a = 2;
var obj2 = { a: 3, doFoo };

obj2.doFoo(obj.foo);
```

### <a name="chapter-eight-six" id="chapter-eight-six"></a>8.6 显示绑定问题

> [返回目录](#chapter-one)

#### <a name="chapter-eight-six-one" id="chapter-eight-six-one"></a>8.6.1 求输出结果

> [返回目录](#chapter-one)

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 1 };
var a = 2;

foo(); // 输出啥？
foo.call(obj); // 输出啥？
foo().call(obj); // 输出啥？
```

上面代码输出啥？

---

答案：

```
2
1
2
Uncaught TypeError: Cannot read property 'call' of undefined
```

解析：

* `foo()`：指向 `window`
* `foo.call(obj)`：将 `foo` 的 `this` 指向了 `obj`
* `foo().call(obj)`：先执行 `foo()`，输出 `2`，然后它是无返回的，相当于 `undefined.call(obj)`，直接报错

#### <a name="chapter-eight-six-two" id="chapter-eight-six-two"></a>8.6.2 求输出结果

> [返回目录](#chapter-one)

```js
function foo() {
  console.log(this.a);
  return function () {
    console.log(this.a);
  };
}
var obj = { a: 1 };
var a = 2;

foo(); // 输出啥？
foo.call(obj); // 输出啥？
foo().call(obj); // 输出啥？
```

上面代码输出啥？

---

答案：

```
2
1
2
1
```

解析：前面 3 个不用说，和上面一题一样。

最后一个 `return function { this.a }`，所以变成这个方法来 `call(obj)`，因此输出 `obj` 中的 `a`，也就是 `1`。 

### <a name="chapter-eight-seven" id="chapter-eight-seven"></a>8.7 求输出结果

> [返回目录](#chapter-one)

```js
function Foo() {
  'use strict'
  console.log(this.location);
}

Foo();
```

请选择：

* A：当前窗口的 `Location` 对象
* B：`undefined`
* C：`null`
* D：`TypeError`

---

答案：D

解析：如果没有 `use strict`，那么选 A；如果是严格模式，那就是 D，严格模式下禁止 `this` 关键字指向全局对象。

### <a name="chapter-eight-eight" id="chapter-eight-eight"></a>8.8 阐述题

> [返回目录](#chapter-one)

```js
let userInfo = {
  name: 'jsliang',
  age: 25,
  sex: 'male',
  updateInfo: function(){
    // 模拟 XMLHttpRequest 请求延时
    setTimeout(function(){
      this.name = "zhazhaliang"
      this.age = 30;
      this.sex = 'female';
    }, 1000);
  },
};

userInfo.updateInfo();
```

解决这里的 `this` 指向问题，求得最终结果：

```js
{
  name: "zhazhaliang",
  age: 30,
  sex: "female",
  updateInfo: function(),
}
```

---

答案：`setTimeout(() => {})` 即可。

## <a name="chapter-night" id="chapter-night"></a>九 参考文献

> [返回目录](#chapter-one)

* [x] [再来40道this面试题酸爽继续](https://juejin.im/post/6844904083707396109)【阅读建议：1h】
* [x] [this,this,再次讨论javascript中的this,超全面](https://www.cnblogs.com/painsOnline/p/5102359.html)【阅读建议：10min】
* [x] [JavaScript中的this](https://juejin.im/post/59748cbb6fb9a06bb21ae36d)【阅读建议：10min】
* [x] [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)【阅读建议：20min】
* [x] [前端基础进阶（七）：全方位解读this](https://www.jianshu.com/p/d647aa6d1ae6)【阅读建议：20min】
* [x] [JavaScript基础心法——this](https://github.com/axuebin/articles/issues/6)【阅读建议：20min】
* [x] [11 | this：从JavaScript执行上下文的视角讲清楚this](https://time.geekbang.org/column/article/128427)【阅读建议：2hour】
* [x] [浅谈react 中的 this 指向](https://www.jianshu.com/p/159eabf152d0)【阅读建议：10min】
* [x] [react的性能优化](https://note.youdao.com/ynoteshare1/index.html?id=3d64b603405bcbb2c3cad3f750e5341d&type=note)【阅读建议：5min】
* [x] [React事件处理函数必须使用bind(this)的原因](https://blog.csdn.net/qq_34829447/article/details/81705977)【阅读建议：10min】
* [x] [由React构造函数中bind引起的this指向理解（React组件的方法为什么要用bind绑定this）](https://blog.csdn.net/AiHuanhuan110/article/details/106424812)【阅读建议：20min】
* [x] [React中this.handleClick = this.handleClick.bind(this)中的this指向问题](https://blog.csdn.net/yiersan__/article/details/108004911)【阅读建议：10min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

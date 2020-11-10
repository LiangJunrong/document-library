手写源码系列 - call + bind + apply
===

> Create by **jsliang** on **2020-09-08 13:37:27**  
> Recently revised in **2020-11-11 07:40:45**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 最终实现](#chapter-three) |
| &emsp;[3.1 手写 call](#chapter-three-one) |
| &emsp;[3.2 手写 apply](#chapter-three-two) |
| &emsp;[3.3 手写 bind](#chapter-three-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Arguments 对象](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 call](#chapter-five) |
| &emsp;[5.1 原生 call](#chapter-five-one) |
| &emsp;[5.2 手写 call](#chapter-five-two) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 apply](#chapter-six) |
| &emsp;[6.1 原生 apply](#chapter-six-one) |
| &emsp;[6.2 手写 apply](#chapter-six-two) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 bind](#chapter-seven) |
| &emsp;[7.1 原生 bind](#chapter-seven-one) |
| &emsp;[7.2 手写 bind](#chapter-seven-two) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 题目](#chapter-eight) |
| &emsp;[8.1 this 指向问题 1](#chapter-eight-one) |
| &emsp;[8.2 this 指向问题 2](#chapter-eight-two) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 参考文献](#chapter-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

面试官：手写一个 `call/apply/bind`。

工欲善其事，必先利其器，我们先了解一下这 3 者有什么区别：

> `call` 的使用

```js
function Product (name, price) {
  this.name = name;
  this.price = price;
}

function Food (name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

const food = new Food('cheese', 5);
console.log(food.name); // 'cheese'
```

* `call`：可以改变函数指向，第一个参数是要改变指向的对象，之后的参数形式是 `arg1, arg2...` 的形式
* `apply`：基本同 `call`，不同点在于第二个参数是一个数组 `[arg1, arg2...]`
* `bind`：改变 `this` 作用域会返回一个新的函数，这个函数不会马上执行

## <a name="chapter-three" id="chapter-three"></a>三 最终实现

> [返回目录](#chapter-one)

下面我们列一下今天的实现目标：

1. 手写 `call`
2. 手写 `apply`
3. 手写 `bind`

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 手写 call

> [返回目录](#chapter-one)

```js
Function.prototype.myCall = function(context = globalThis) {
  // 设置 fn 为调用 myCall 的方法
  context.fn = this;

  // 获取剩余参数
  const otherArg = Array.from(arguments).slice(1);

  // 调用这个方法，将剩余参数传递进去
  context.fn(otherArg);

  // 将这个方法的执行结果传给 result
  let result = context.fn();

  // 删除这个变量
  delete context.fn;

  // 返回 result 结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myCall(fn);
```

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 手写 apply

> [返回目录](#chapter-one)

```js
Function.prototype.myApply = function(context = globalThis, arr) {
  // 设置 fn 为调用 myCall 的方法
  context.fn = this;

  let result;

  // 如果存在参数，则传递进去
  // 将结果返回给 result
  if (arr) {
    result = context.fn(arr);
  } else { // 否则不传
    result = context.fn();
  }

  // 删除这个变量
  delete context.fn;

  // 返回 result 结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myApply(fn);
```

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 手写 bind

> [返回目录](#chapter-one)

```js
Function.prototype.myBind = function(context = globalThis) {
  // 设置 fn 为调用 myCall 的方法
  const fn = this;

  // 获取该方法剩余参数
  const otherArg = [...arguments].slice(1);

  // 设置返回的一个新方法
  const result = function() {

    // 获取返回方法体的参数
    const resultArg = [...arguments];

    // 如果是通过 new 调用的，绑定 this 为实例对象
    if (this instanceof result) {
      fn.apply(this, otherArg.concat(resultArg));
    } else { // 否则普通函数形式绑定 context
      fn.apply(context, otherArg.concat(resultArg));
    }
  }

  // 绑定原型链
  result.prototype = Object.create(fn.prototype);

  // 返回结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myBind(fn);
fn();
```

OK，懂了么，我们发车继续深造~

## <a name="chapter-four" id="chapter-four"></a>四 Arguments 对象

> [返回目录](#chapter-one)
  
* [MDN - Arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

`arguments` 是一个对应于传递给函数的参数的类数组对象。

```js
function fun(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}
```

`arguments` 对象不是一个 `Array `。

它类似于 `Array`，但除了 `length` 属性和索引元素之外没有任何 `Array` 属性。

将 `arguments` 转为数组：

```js
// ES5
var arg1 = Array.prototype.slice.call(arguments);
var arg2 = [].slice.call(arguments);

// ES6
var arg3 = Array.from(arguments);
var arg4 = [...arguments];
```

在手写 `call/bind/apply` 过程中，会用到 `arguments` 来获取方法体的传参，就好比手写 `call` 过程中，通常我们通过 `Array.from(arguments).slice(1)` 来获取第二个及后面的参数。

## <a name="chapter-five" id="chapter-five"></a>五 call

> [返回目录](#chapter-one)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 原生 call

> [返回目录](#chapter-one)

* [MDN - call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

> 注意：该方法的语法和作用与 `apply()` 方法类似，只有一个区别，就是 `call()` 方法接受的是一个参数列表，而 `apply()` 方法接受的是一个包含多个参数的数组。

* 语法：`function.call(thisArg, arg1, arg2, ...)`
  * `thisArg`：可选的。在 `function` 函数运行时使用的 `this` 值。
  * `arg1, arg2, ...`：指定的参数列表

```js
function Product (name, price) {
  this.name = name;
  this.price = price;
}

function Food (name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

const food = new Food('cheese', 5);
console.log(food.name); // 'cheese'
```

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 手写 call

> [返回目录](#chapter-one)

首先我们得搞明白 `call` 的特性：

1. 如果 `obj.call(null)`，那么 `this` 应该指向 `window`
2. 如果 `obj1.call(obj2)`，那么谁调用它，`this` 指向谁（这里就是 `obj2` 了）
3. `call` 可以传入多个参数，所以可以利用 `arguments` 这个字段来获取所有参数。将 `arguments` 转换数组后，获取除第一个参数外的其他参数
4. 设置一个变量，用完可以删掉它

综上：

> 手写 call 的 JS 代码：

```js
Function.prototype.myCall = function(context = globalThis) {
  // 设置 fn 为调用 myCall 的方法
  context.fn = this;

  // 获取剩余参数
  const otherArg = Array.from(arguments).slice(1);

  // 调用这个方法，将剩余参数传递进去
  context.fn(otherArg);

  // 将这个方法的执行结果传给 result
  let result = context.fn();

  // 删除这个变量
  delete context.fn;

  // 返回 result 结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myCall(fn);
```

小伙伴稍稍理解下，搞清楚它内部的流程，然后咱们实践一下：

> 防抖函数绑定手写 call

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>手写 call</title>
</head>
<body>
  <button class="btn">123</button>

  <script>
    (function() {
      Function.prototype.myCall = function(context) {
        const newContext = context || window;
        newContext.fn = this;
        const otherArg = Array.from(arguments).slice(1);
        newContext.fn(otherArg);
        const result = newContext.fn(otherArg);
        delete newContext;
        return result;
      };

      const debounce = function(fn) {
        let timer = null;
        return function() {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.myCall(this, arguments);
          }, 1000);
        }
      }

      let time = 0;
      const getNumber = function() {
        console.log(++time);
      }

      const btn = document.querySelector('.btn');
      btn.addEventListener('click', debounce(getNumber));
    })()
  </script>
</body>
</html>
```

这样我们就摸清了手写 `call`。

## <a name="chapter-six" id="chapter-six"></a>六 apply

> [返回目录](#chapter-one)

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 原生 apply

> [返回目录](#chapter-one)

* [MDN - apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

* 语法：`function.apply(thisArg, [argsArray])`
  * `thisArg`：必选的。在 `function` 函数运行时使用的 `this` 值
  * `[argsArray]`：可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 `func` 函数。

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max); // 7

const min = Math.min.apply(null, numbers);
console.log(min); // 2
```

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 手写 apply

> [返回目录](#chapter-one)

下面我们开始尝试手写 `apply`，记住这个方法和 `call` 类似，理解起来也不难：

```js
Function.prototype.myApply = function(context = globalThis, arr) {
  // 设置 fn 为调用 myCall 的方法
  context.fn = this;

  let result;

  // 如果存在参数，则传递进去
  // 将结果返回给 result
  if (arr) {
    result = context.fn(arr);
  } else { // 否则不传
    result = context.fn();
  }

  // 删除这个变量
  delete fcontext.fnn;

  // 返回 result 结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myApply(fn);
```

用自定义 `apply` + 防抖实践一下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM 操作</title>
</head>
<body>
  <button class="btn">123</button>

  <script>
    (function() {
      Function.prototype.myApply = function(context, arr) {
        const newContext = context || window;
        newContext.fn = this;
        console.log(newContext.fn)
        if (!arr) {
          result = newContext.fn();
        } else {
          result = newContext.fn(arr);
        }

        delete newContext;
        return result;
      };

      const debounce = function(fn, number) {
        let timer = null;
        return function() {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.myApply(this, number);
          }, 1000);
        }
      }

      const getNumber = function(time) {
        console.log(time);
      }

      let number = [1, 2, 3, 4, 5];
      const btn = document.querySelector('.btn');
      btn.addEventListener('click', debounce(getNumber, number));
    })()
  </script>
</body>
</html>
```

这样我们就摸清了手写 `apply`。

## <a name="chapter-seven" id="chapter-seven"></a>七 bind

> [返回目录](#chapter-one)

### <a name="chapter-seven-one" id="chapter-seven-one"></a>7.1 原生 bind

> [返回目录](#chapter-one)

* [MDN - bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

* 语法：`function.bind(thisArg, arg1, arg2, ...)`
  * `thisArg`：调用绑定函数时作为 `this` 参数传递给目标函数的值。
  * `arg1, arg2, ...`：当目标函数被调用时，被预置入绑定函数的参数列表中的参数。
* 返回值：一个原函数的拷贝，并拥有指定的 `this` 值和初始参数

```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
// 谁调用指向谁，这里 unboundGetX = module.getX
// 让 getX 里面的 this 指向了 window
// 而 window 里面并没有 x 方法
// 当然，在前面加上 window.x = 43 就有了

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
// 通过 bind，将 this 指向 module
```

### <a name="chapter-seven-two" id="chapter-seven-two"></a>7.2 手写 bind

> [返回目录](#chapter-one)

手写 `bind` 稍微有点小复杂，但是小伙伴们别慌，多读几遍可以摸清套路：

```js
Function.prototype.myBind = function(context = globalThis) {
  // 设置 fn 为调用 myCall 的方法
  const fn = this;

  // 获取该方法剩余参数
  const otherArg = [...arguments].slice(1);

  // 设置返回的一个新方法
  const result = function() {

    // 获取返回方法体的参数
    const resultArg = [...arguments];

    // 如果是通过 new 调用的，绑定 this 为实例对象
    if (this instanceof result) {
      fn.apply(this, otherArg.concat(resultArg));
    } else { // 否则普通函数形式绑定 context
      fn.apply(context, otherArg.concat(resultArg));
    }
  }

  // 绑定原型链
  result.prototype = Object.create(fn.prototype);

  // 返回结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myBind(fn);
fn();
```

## <a name="chapter-eight" id="chapter-eight"></a>八 题目

> [返回目录](#chapter-one)

通过上面的实践，小伙伴们应该对手写 `call`、`bind`、`apply` 有自己的理解了，下面看看这些题，试试挑战下。

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 this 指向问题 1

> [返回目录](#chapter-one)
      
```js
var color = 'green';

var test4399 = {
  color: 'blue',
  getColor: function() {
    var color = 'red';
    console.log(this.color);
  },
};

var getColor = test4399.getColor;
getColor(); // 输出什么？
test4399.getColor(); // 输出什么？
```

---

答案：`green`、`blue`。

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 this 指向问题 2

> [返回目录](#chapter-one)

```js
var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);
    (function() {
      console.log(this.foo);
      console.log(self.foo);
    })()
  }
}
myObject.func();
```

程序输出什么？

* A：bar bar bar bar
* B：bar bar bar undefined
* C：bar bar undefined bar
* D：undefined bar undefined bar

---

答案：C

1. 第一个 `this.foo` 输出 `bar`，因为当前 `this` 指向对象 `myObject`。
2. 第二个 `self.foo` 输出 `bar`，因为 `self` 是 `this` 的副本，同指向 `myObject` 对象。
3. 第三个 `this.foo` 输出 `undefined`，因为这个 IIFE（立即执行函数表达式）中的 `this` 指向 `window`。
4.第四个 `self.foo` 输出 `bar`，因为这个匿名函数所处的上下文中没有 `self`，所以通过作用域链向上查找，从包含它的父函数中找到了指向 `myObject` 对象的 `self`。

## <a name="chapter-night" id="chapter-night"></a>九 参考文献

> [返回目录](#chapter-one)

* [x] [MDN - Arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)【阅读建议：5min】
* [x] [MDN - call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)【阅读建议：5min】
* [x] [MDN - apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)【阅读建议：5min】
* [x] [MDN - bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)【阅读建议：5min】
* [x] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)【阅读建议：1h】
* [x] [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)【阅读建议：20min】
* [x] [this、apply、call、bind](https://juejin.im/post/6844903496253177863)【阅读建议：30min】
* [x] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)【阅读建议：10min】
* [x] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)【阅读建议：20min】
* [x] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)【阅读建议：10min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

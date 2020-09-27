this + call + bind + apply
===

> Create by **jsliang** on **2020-09-08 13:37:27**  
> Recently revised in **2020-09-27 20:51:50**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Arguments 对象](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 call](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 题目](#chapter-five) |
| &emsp;[5.1 this 指向问题 1](#chapter-five-one) |
| &emsp;[5.2 this 指向问题 2](#chapter-five-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)
        
参考：

* [ ] [再来40道this面试题酸爽继续](https://juejin.im/post/6844904083707396109)
* [ ] [this、apply、call、bind](https://juejin.im/post/6844903496253177863)
* [ ] [面试官问：JS的this指向](https://juejin.im/post/5c0c87b35188252e8966c78a)
* [ ] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)
* [ ] [面试官问：能否模拟实现JS的bind方法](https://juejin.im/post/5bec4183f265da616b1044d7)
* [ ] [JavaScript基础心法——this](https://github.com/axuebin/articles/issues/6)
* [ ] [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)
* [ ] [前端基础进阶（七）：全方位解读this](https://www.jianshu.com/p/d647aa6d1ae6)
* [ ] [JavaScript深入之call和apply的模拟实现](https://juejin.im/post/5907eb99570c3500582ca23c)
* [ ] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)
* [ ] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)
* [ ] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)
* [ ] [JavaScript中的this](https://juejin.im/post/59748cbb6fb9a06bb21ae36d)
* [ ] [this,this,再次讨论javascript中的this,超全面](https://www.cnblogs.com/painsOnline/p/5102359.html)
* [ ] [JS中函数名后面的括号加与不加的区别和作用？](https://www.zhihu.com/question/31044040)

## <a name="chapter-three" id="chapter-three"></a>三 Arguments 对象

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

## <a name="chapter-four" id="chapter-four"></a>四 call

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

## <a name="chapter-five" id="chapter-five"></a>五 题目

> [返回目录](#chapter-one)
        
### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 this 指向问题 1

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

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 this 指向问题 2

> [返回目录](#chapter-one)
        
undefined
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

答案：

1. 第一个 `this.foo` 输出 `bar`，因为当前 `this` 指向对象 `myObject`。
2. 第二个 `self.foo` 输出 `bar`，因为 `self` 是 `this` 的副本，同指向 `myObject` 对象。
3. 第三个 `this.foo` 输出 `undefined`，因为这个 IIFE（立即执行函数表达式）中的 `this` 指向 `window`。
4.第四个 `self.foo` 输出 `bar`，因为这个匿名函数所处的上下文中没有 `self`，所以通过作用域链向上查找，从包含它的父函数中找到了指向 `myObject` 对象的 `self`。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
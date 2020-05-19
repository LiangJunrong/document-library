for 家族
===

> Create by **jsliang** on **2020-05-19 11:03:37**  
> Recently revised in **2020-05-19 11:45:06**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 for](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 for...in](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 for...of](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 forEach](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 优劣对比](#chapter-seven) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在某次学习中，突然看到说需要对比 `for`、`for...in`、`for...of` 以及 `forEach` 这 4 个 `for` 家族成员，那么咱们就了解了解吧！

## <a name="chapter-three" id="chapter-three"></a>三 for

> [返回目录](#chapter-one)

* [【MDN】for](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for)

`for` 语句用来创建一个循环，它包含了三个可选的表达式，这三个表达式被包围在圆括号之中，使用分号分割，后跟一个用于在循环中执行的语句（通常是一个块语句）

> 示例代码

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 打印 0 到 9
```

`for` 的语法：

* `for([initialization]; [condition]; [final-expression]) { statement }`
  * `initialization`：一个表达式，可以用来进行变量声明等
  * `condition` 一个条件表达式，用来判断中止循环的条件
  * `final-expression`：一个每次循环后都会执行的表达式，可用来递增递减等操作。
  * `statement`：只要 `condition` 为 `true` 的时候，`statement` 里面的代码都会被执行。

`for` 是所有浏览器都兼容的，而且使用频率很高，这里就不需要过多解释了。

## <a name="chapter-four" id="chapter-four"></a>四 for...in

> [返回目录](#chapter-one)

* [【MDN】for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

`for...in` 语句以任意顺序遍历一个对象的出 Symbol 以外的可枚举属性。

> 示例代码

```js
let obj = {
  name: 'jsliang',
  age: 25,
};
obj.__proto__.weight = '84.4kg';

for (let i in obj) {
  console.log('------');
  console.log(i);
  console.log(obj[i]);
}

// ------
// name
// jsliang
// ------
// age
// 25
// ------
// weight
// 84.4kg
```

`for...in` 的语法：

* `for(variable in object) { statement }`
  * `variable`：在每次迭代时，这个 `variable` 会被赋值为不同的属性名
  * `object`：非 `Symbol` 类型的可枚举属性被迭代的对象

`for...in` 循环只遍历可枚举属性（包括它原型链上的可枚举属性）。

像 `Array` 和 `Object` 使用内置构造函数所创建的对象都会继承自 `Object.prototype` 和 `String.prototype` 的不可枚举属性，例如 `String` 的 `indexOf()` 方法或 `Object` 的 `toString()` 方法。

循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性（更接近原型链中对象的属性覆盖原型属性）。

`for...in` 不应该用于迭代一个 `Array`，其中索引顺序很重要

```js
var triangle = {
  a: 1,
  b: 2,
  c: 3
};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
// obj.color = red
```

`for...in` 也是所有浏览器都兼容的，但是注意使用限制。

## <a name="chapter-five" id="chapter-five"></a>五 for...of

> [返回目录](#chapter-one)

`for...of` 语句在可迭代对象（包括 `Array`、`Map`、`Set`、`String`、`TypedArray`、`arguments` 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行。

> 示例代码

```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// a
// b
// c
```

`for...of` 的语法：

* `for (variable of iterable) { statements }`
  * `variable`：在每次迭代时，将不同属性的值分配给变量
  * `iterable`：被迭代枚举其属性的对象

其他内容的迭代这里不哆嗦，这里讲讲迭代 DOM：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>for...of</title>
</head>
<body>
  <div class="container">
    <button class="get-dom">获取节点1</button>
    <button class="get-dom">获取节点2</button>
    <button class="get-dom">获取节点3</button>
  </div>
  
  <script>
    const buttons = document.querySelectorAll('.get-dom');

    for (let i of buttons) {
      console.log(i);
    }
    // button.get-dom
    // button.get-dom
    // button.get-dom
  </script>
</body>
</html>
```

由于 `for...of` 是 ES6 才出来的，所以存在兼容问题，例如 IE 全体不兼容。

## <a name="chapter-six" id="chapter-six"></a>六 forEach

> [返回目录](#chapter-one)

* [【MDN】Array.prototype.forEach()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

`forEach()` 方法对数组中的每个元素执行一次给定的函数。

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
// a
// b
// c
```

`forEach()` 的语法：

* `arr.forEach((item, index, array) => { statement })`
  * `item`：`arr` 中的每一项
  * `index`：对应该项的地址
  * `array`：该项的所有内容
  * `statement`：在这里做你想做的事情

值得注意的是，`forEach()` 方法没法中止或者跳出循环。

所以在一些特定的场景，尽量换成 `for`、`for...in` 或者 `for...of`。

> `forEach()` 视死如归，不会因为任何原因就放弃前进

`forEach()` 在所有的浏览器都支持。

## <a name="chapter-seven" id="chapter-seven"></a>七 优劣对比

> [返回目录](#chapter-one)

* `for`：

鼻祖，很多语言都在使用。

* `for...in`：

1. 遍历可能会遍历到原型链上的可枚举属性
2. `for...in` 不建议用来迭代 `Array`，因为索引顺序很重要，它不一定按照正确的顺序返回。（迭代数组建议 `forEach` 或者 `for...of`）
3. 常用于调试，方便检查对象属性

* `for...of`：

1. 可以迭代诸如 `Array`、`Map`、`Set`、`String`、`TypedArray`、`arguments` 对象等等……
2. 存在兼容问题，IE 所有版本不支持
3. 不能迭代对象

* `forEach`：

1. 无法中止或者跳出循环
2. 如果在遍历的过程中下面的某项被删除了，那么其后所有项会上移一个位置

## <a name="chapter-eight" id="chapter-eight"></a>八 总结

> [返回目录](#chapter-one)

以上，就是对 `for` 家族的学习了解，如果你非要说哪个性能更好，那还是推荐原生的 `for` 吧，毕竟它是鼻祖~

> 当然推荐小伙伴自行写些代码测试下

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
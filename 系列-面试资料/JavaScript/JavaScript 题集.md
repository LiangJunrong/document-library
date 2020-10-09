JavaScript 题集
===

> Create by **jsliang** on **2020-09-16 13:50:40**  
> Recently revised in **2020-09-28 16:59:29**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 题目 - 基础知识](#chapter-three) |
| &emsp;[3.1 数组常见 API](#chapter-three-one) |
| &emsp;[3.2 常见 DOM API](#chapter-three-two) |
| &emsp;[3.3 数组去重](#chapter-three-three) |
| &emsp;[3.4 数字化金额](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 题目 - 看题解释](#chapter-four) |
| &emsp;[4.1 暂时性死区](#chapter-four-one) |
| &emsp;[4.2 遍历问题](#chapter-four-two) |
| &emsp;[4.3 setTimeout](#chapter-four-three) |
| &emsp;[4.4 requestAnimationFrame](#chapter-four-four) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

参考文献：

* [x] [MDN - Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)【阅读建议：10min】

## <a name="chapter-three" id="chapter-three"></a>三 题目 - 基础知识

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 数组常见 API

> [返回目录](#chapter-one)

* **数组常见 API 有哪些？**

答：

* `push`：数组尾部添加元素
* `unshift`：数组头部添加元素
* `pop`：数组尾部移除元素
* `shift`：数组头部移除元素
* `splice`：删除数组元素
* `slice`：截取数组元素
* `indexOf`：查找某元素第一次出现的位置
* `lastIndexof`：查找某元素最后一次出现的位置
* `findIndex`：查找元素第一次出现的位置
* `forEach`：遍历元素
* `map`：遍历元素
* `filter`：过滤元素
* `some`：包含某元素
* `every`：所有元素和某元素一致
* `includes`：查看是否包含某元素
* `concat`：合并元素
* `join`：合并元素，变成字符串
* `toString`：变成字符串
* `sort`：元素排序

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 常见 DOM API

> [返回目录](#chapter-one)

```js
// 获取元素
const node = document.getElementById(id); // 或者 querySelector(".class|#id|name");

// 创建元素
const heading = document.createElement(name); // name: p、div、h1...
heading.innerHTML = '';

// 添加元素
document.body.appendChild(heading);

// 删除元素
document.body.removeChild(node);
```

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 数组去重

> [返回目录](#chapter-one)

```js
const arr = [1, 1, 2, 3, 3];
// 期望得到：[1, 2, 3]

// 方法一：for 配合新数组截取
const newArr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArr1.includes(arr[i])) {
    newArr1.push(arr[i]); 
  }
}
console.log('newArr1：', newArr1);

// 方法二：使用 Set
const newArr2 = [...new Set(arr)];
console.log('newArr2：', newArr2);

// 方法三：使用 filter
const newArr3 = arr.filter((item, index) => arr.lastIndexOf(item) === index);
console.log('newArr3：', newArr3);
```

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 数字化金额

> [返回目录](#chapter-one)

* **方法一：暴力遍历**

```js
const num = String(1234567890);
let result = '';

for (let i = num.length - 1; i >= 0; i--) {
  if (i !== num.length - 1 && i % 3 === 0) {
    result = num[i] + ',' + result;
  } else {
    result = num[i] + result;
  }
}

console.log(result);
```

* **方法二：API 技巧**

```js
console.log(
  String(1234567890).split('').reverse().reduce((prev, next, index) => (index % 3) === 0 ? next + ',' + prev : next + prev)
);
```

* **方法三：API技巧**

```js
console.log(
  (1234567890).toLocaleString('en-US')
);
```

* **方法四：正则表达式**

```js
String(1234567890).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```


## <a name="chapter-four" id="chapter-four"></a>四 题目 - 看题解释

> [返回目录](#chapter-one)

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 遍历问题

> [返回目录](#chapter-one)

以下代码执行后，array 的结果是？

```js
let array = [ , 1, , 2, , 3];
array = array.map((i) => ++i)
```

* A：`[ , 2, , 3, , 4]`
* B：`[NaN, 2, NaN, 3, NaN, 4]`
* C：`[1, 2, 1, 3, 1, 4]`
* D：`[null, 2, null, 3, null, 4]`

---

答案：A

解释：

1. `forEach()`、`filter()`、`reduce()`、`every()` 和 `some()` 都会跳过空位。
2. `map()` 会跳过空位，但会保留这个值
3. `join()` 和 `toString()` 会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串。

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 setTimeout

> [返回目录](#chapter-one)

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

以上代码执行结果？

* A：5 5 5 5 5
* B：0 0 0 0 0
* C：0 1 2 3 4
* D：1 2 3 4 5

---

答案：A

解析：

1. `var i` 在 `for` 中使用，会造成变量污染，从而导致全局有一个遍历 `i`，这个 `i` 运行到最后，就是 `5`
2. `setTimeout` 是宏任务，在 `script` 这个宏任务执行完毕后才执行，所以搜集到的 `i` 是 `5`
3. 最终输出 5 个 `5`

### <a name="chapter-four-four" id="chapter-four-four"></a>4.4 requestAnimationFrame

> [返回目录](#chapter-one)

```js
for (let i = 0; i < 5; i++) {
  requestAnimationFrame(() => {
    console.log(i);
  });
}
```

以上代码执行结果：

* A：1 2 3 4 5
* B：0 1 2 3 4
* C：4 4 4 4 4
* D：5 5 5 5 5

---

答：B

1. `let i` 使 `for` 形成块级作用域。
2. `requestAnimationFrame` 类似于 `setTimeout`，但是它可以当成一个微任务来看，是在微任务队列执行完毕后，执行 UI 渲染前，调用的一个方法。
3. 因此，这道题并不是指 `requestAnimationFrame` 会收集 `i`，而是 `let` 形成了块级作用域的问题，如果改成 `var i`，照样输出 5 个 `5`。

## 题目 - 变量问题

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 暂时性死区

> [返回目录](#chapter-one)

1、下面代码输出什么？

```js
let a = 1;
let test = function() {
  console.log(a);
  a++;
}
test();
```

2、下面代码输出什么？

```js
let a = 1;
let test = function() {
  console.log(a);
  let a = 2;
  a++;
}
test();
```

---

第一道题输出：`1`

第二道题输出：`Uncaught ReferenceError: Cannot access 'a' before initialization`

其原因是在同一个 `block` 中，`let` 在后面重新定义的，那么就不能在之前引用该变量。同时，也不能取嵌套外层的值。

### 输出打印结果

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

上面代码输出结果？

---

答案：undefined、报错

这道题转变一下就看明白了：

```js
function sayHi() {
  var name; // 变量提升 - 变量声明
  console.log(name); // undefined
  console.log(age); // let 存在暂时性死区，不会变量提升
  name = "Lydia"; // 变量提升 - 变量赋值
  let age = 21;
}

sayHi();
```

### 输出打印结果

```js
function myFunc() {
  console.log(a);
  console.log(func());

  var a = 1;
  function func() {
    return 2;
  }
}

myFunc();
```

请问输出啥？

---

答案：`undefined` `2`

### Event Loop

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

上面代码输出结果？

---

第一道题目：`var` 在 `for` 中存在变量污染，同步代码 `for` 执行完毕之后，再执行宏任务 `setTimeout`，发现当前 `i` 都成为 `3` 了，所以输出 `3、3、3`

第二道题目：`let` 在 `for` 中会形成块级作用域，每次迭代的时候 `i` 都是一个新值，并且每个值都存在于循环内的块级作用域，所以输出 `0、1、2`

### 输出打印结果

```js
let date = new Date();

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(new Date - date, i); // 1
  }, 1000);
}

console.log(new Date - date, i); // 2
```

请问输出啥？

---

答案：

```
0 5
1001 5
1004 5
1005 5
1006 5
1007 5
```

解析：题目先走宏任务 `script`，所以定义了 `date` 之后，执行注释为 2 这行的 `console`。

然后 5 个宏任务，都是定时器 `setTimeout`，所以会在之后执行，输出：`1000 5`，但是定时器也不一定准时的，所以有可能是 `1001`、`1002` 或者其他的。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
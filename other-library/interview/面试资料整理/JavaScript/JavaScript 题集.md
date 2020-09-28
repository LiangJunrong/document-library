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

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 暂时性死区

> [返回目录](#chapter-one)

下面代码输出什么？

```js
let a = 1;
let test = function() {
  console.log(a);
  a++;
}
test();
```

下面代码输出什么？

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

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
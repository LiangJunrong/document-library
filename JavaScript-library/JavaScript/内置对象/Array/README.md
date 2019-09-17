Array
===

> Create by **jsliang** on **2019-09-17 09:21:48**  
> Recently revised in **2019-09-17 10:00:10**

数组 - 最简单的内存数据结构

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;[2.1 为什么用数组？](#chapter-two-one) |
| &emsp;[2.2 如何创建和初始化数组？](#chapter-two-two) |
| &emsp;[2.3 如何访问数组？](#chapter-two-three) |
| &emsp;[2.4 二维、三维乃至多维数组以及如何访问？](#chapter-two-four) |
| &emsp;[2.5 来份案例热热身？](#chapter-two-five) |
| &emsp;[2.6 悬难疑惑？](#chapter-two-six) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 数组的增删改查及其工作应用](#chapter-three) |
| &emsp;[3.1 数组的新增操作](#chapter-three-one) |
| &emsp;[3.2 数组的删除和修改操作](#chapter-three-two) |
| &emsp;&emsp;[3.2.1 删除和修改之 splice()](#chapter-three-two-one) |
| &emsp;&emsp;[3.2.2 删除和修改之 slice()](#chapter-three-two-two) |
| &emsp;&emsp;[3.2.3 删除和修改之 filter()](#chapter-three-two-three) |
| &emsp;[3.3 数组的查询操作](#chapter-three-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 数组的常用知识点](#chapter-four) |
| &emsp;[4.1 push() - 末尾添加元素](#chapter-four-one) |
| &emsp;[4.2 unshift() - 开头添加元素](#chapter-four-two) |
| &emsp;[4.3 pop() - 末尾删除元素](#chapter-four-three) |
| &emsp;[4.4 shift() - 开头删除元素](#chapter-four-four) |
| &emsp;[4.5 splice() - 增删改元素](#chapter-four-five) |
| &emsp;[4.6 concat() - 拼合两个数组](#chapter-four-six) |
| &emsp;[4.7 filter() - 过滤数组元素](#chapter-four-seven) |
| &emsp;[4.8 forEach() - 遍历操作原数组](#chapter-four-eight) |
| &emsp;[4.9 join() - 数组转字符串](#chapter-four-night) |
| &emsp;[4.10 indexOf() - 顺序查找第一个](#chapter-four-ten) |
| &emsp;[4.11 lastIndexOf() - 倒序查找第一个](#chapter-four-eleven) |
| &emsp;[4.12 map() - 遍历返回新数组](#chapter-four-twelve) |
| &emsp;[4.13 reverse() - 反转数组元素](#chapter-four-thirteen) |
| &emsp;[4.14 slice() - 查找指定位置元素](#chapter-four-fourteen) |
| &emsp;[4.15 sort() - 数组排序](#chapter-four-fifteen) |
| &emsp;[4.16 toString() - 数组转字符串](#chapter-four-sixteen) |
| &emsp;[4.17 includes() - 数组包含某元素](#chapter-four-seventeen) |
| &emsp;[4.18 fill() - 填充数组](#chapter-four-eighteen) |
| &emsp;[4.19 reduce() - 数组累计](#chapter-four-nighteen) |
| &emsp;[4.20 find() - 查找数组元素](#chapter-four-twenty) |
| &emsp;[4.21 findIndex() - 查找元素索引](#chapter-four-twenty-one) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 总结](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

如果小伙伴刚好看到这篇文章，想了解下 **算法与数据结构** 中，关于 **数组** 的知识。

那么，希望看到这篇文章的小伙伴拥有：

1. 基本的 JavaScript 知识。
2. 知道一点点的数组及其用法。

同时，希望看完这篇文章的小伙伴掌握：

1. 数组基本常识
2. 数组的增删改查
3. 数组的常用知识点

但是，**jsliang** 无法确定小伙伴是否真具备上面知识点（前置条件），所以前言会简略介绍下数组，希望能先小科普一下，方便后面共同探讨。

如果小伙伴已经清楚数组相关基础知识点，可以跳过【前言】部分；

如果小伙伴不清楚或者想回顾下热热身，可以往下慢慢看。

> 更多精彩，欢迎关注下方公众号或者前往 **jsliang** 的 GitHub：https://github.com/LiangJunrong/document-library

![图](../../../../public-repertory/img/z-small-wechat-public-address.jpg)

### <a name="chapter-two-one" id="chapter-two-one">2.1 为什么用数组？</a>

> [返回目录](#chapter-one)

假设你写代码，列出星期一到星期日锻炼的时间，你可能会写成：

```js
let Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7;
```

这仅仅是一周的数据。

如果要你统计一年的数据，那样也太麻烦了，毕竟命名 365 个字段，会让人极度不适。

于是有了数组：

```js
let exercise = [1, 2, 3, 4, 5, 6, 7];
```

这不就变得简便了么。

### <a name="chapter-two-two" id="chapter-two-two">2.2 如何创建和初始化数组？</a>

> [返回目录](#chapter-one)

```js
let a = [];

let b = new Array();
```

这样都是可行的。

如果你想初始化有长度的数组，或者数组一开始就有值：

```js
let a = [1, 2, 3]; // [1, 2, 3]

let b = new Array(3); // [undefined, undefined, undefined]

let c = new Array([1, 2, 3]); // [1, 2, 3]

let d = new Array(3).fill(1); // [1, 1, 1]

let e = new Array(3).fill([]); // [[], [], []]
```

当然，后面两个通过 `fill()` 创建的数组，推荐碰到 `fill()` 方法的时候再进一步了解。

> 变量 e 形成的数组会出问题的嗷~

### <a name="chapter-two-three" id="chapter-two-three">2.3 如何访问数组？</a>

> [返回目录](#chapter-one)

```js
let a = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
```

记住数组的下标是从 0 开始的。  

> 如果某个程序猿跟你表白说你是它心中第 0 位的人……你还是拒绝 “他” 吧，已经走火入魔没救了。

### <a name="chapter-two-four" id="chapter-two-four">2.4 二维、三维乃至多维数组以及如何访问？</a>

> [返回目录](#chapter-one)

我们平时使用的 `[1, 2, 3]` 这种形式，称为一维数组。

而如果数组中嵌套数组，每嵌套多一层，就加一个维度，例如：

> 二维数组

```js
let a = [[1, 2, 3], [4, 5]]; // 二维数组

// 访问二维数组
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}
// 1
// 2
// 3
// 4
// 5
```

> 三维数组

```js
let b = [[1, 2, [3, 4]], [5, 6]]; // 三维数组

// 访问三维数组
for (let i = 0; i < b.length; i++) {
  for (let j = 0; j < b[i].length; j++) {
    for (let k = 0; k < b[i][j].length; k++) {
      console.log(b[i][j][k]);
    }
  }
}
// 3
// 4
```

至于多维数组，小伙伴可以自行推算。

### <a name="chapter-two-five" id="chapter-two-five">2.5 来份案例热热身？</a>

> [返回目录](#chapter-one)

在这里，贴两份代码带大家热热身。

> 遍历斐波那契数列

```js
const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13];

for (let i = 0; i < fibonacciSequence.length; i++) {
  console.log(fibonacciSequence[i]);
}

// 1 1 2 3 5 8 13
```

> 实现斐波那契数列

```js
const fibonacciSequence = [1, 1];

for (let i = 2; i < 20; i++) {
  fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
}

console.log(fibonacciSequence);

// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
```

### <a name="chapter-two-six" id="chapter-two-six">2.6 悬难疑惑？</a>

> [返回目录](#chapter-one)

数组虽然是最简单的内存数据结构，但是有些坑还是需要注意的，以免深陷无法自拔，例如：传值和传址。

```js
// 传值
let str1 = '1';
str2 = str1;
str2 = '2';
console.log(str1); // 1
console.log(str2); // 2

// 传址
let arr1 = [1, 2, 3];
arr2 = arr1;
arr2[0] = 4;
console.log(arr1); // [4, 2, 3]
console.log(arr2); // [4, 2, 3]
```

问：**jsliang** 你怎么看传值和传址，能不能详细介绍下？

答：看下我那篇面试文章 [jsliang 的 2019 面试准备](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/personal-experience/2019-interview-preparation.md#chapter-five-five) 或者百度下相关知识点吧，毕竟咱主要目的不是讲这个知识点，在这里引出是为了让小伙伴们热热身。

> 如果小伙伴觉得非常有必要将热身写成详细清单，小伙伴记得私信我哈

> 更多的数组问题或者相关隐藏点，还是等我想起来或者小伙伴提到，我再进行补充吧。

## <a name="chapter-three" id="chapter-three">三 数组的增删改查及其工作应用</a>

> [返回目录](#chapter-one)

提起 **算法与数据结构**，很多前端小伙伴可能第一时间反应：“卧槽这有卵用”，“为啥面试都搞这个，进去后还不是写 if...else...”……

enm...还真有用。

**jsliang** 结合数组的增删改查及其工作中的使用场景，跟你聊聊数组的妙用。

### <a name="chapter-three-one" id="chapter-three-one">3.1 数组的新增操作</a>

> [返回目录](#chapter-one)

话不多说，关门，放、放代码：

```js
let arr = [1, 2, 3];

// 通过 push() 方法
arr.push(4); // [1, 2, 3, 4]

// 通过 length 属性
arr[arr.length] = 5; // [1, 2, 3, 4, 5]
```

数组新增元素的两种方式：

* 一种是通过 `push()` 方法，直接将元素添加到数组最后一位。
* 另一种是通过利用数组的 `length` 属性，该属性可以显示数组的长度，而 `arr[arr.length]` 即给其最大长度后面再加一个长度。

既然上面我们通过两种方式，往数组后面插入了新元素，那么有没有方法，往数组前面插入新元素呢？

有！

```js
let arr = [3, 4, 5];

// 通过 unshift 方法
arr.unshift(2); // [2, 3, 4, 5]

// 通过遍历数组
for (let i = arr.length; i >= 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = 1;
// [1, 2, 3, 4, 5]
```

很好，通过这四种方式，我们就掌握了往数组头部和数组尾部新增元素。

**那么**，在工作中它们有何作用呢？

目前使用最多的是 `push()` 操作，通常用于给数组新增元素。

举例常见的场景：给 Table 新增一行数据。

|  | 数据内容 |
| --- | --- |
| 新增 | 第一行数据 - jsliang |
| 新增 | 第二行数据 - 梁渣渣 |

> **jsliang** 尝试自己画了个表格，太小了不好贴图，就使用 Markdown 演示下好了。

如上，我们点击【新增】按钮的时候，就可以直接往 Table 下面新增一行数据。

而如果是 `unshift()`，目前工作还未接触到，如果有碰到的小伙伴，欢迎贴出应用场景~

### <a name="chapter-three-two" id="chapter-three-two">3.2 数组的删除和修改操作</a>

> [返回目录](#chapter-one)

**首先**，**jsliang** 觉得删除和修改操作在一定程度上利用的数组 API 非常一致，所以贴在一起写了：

* splice()
* slice()
* filter()

在这里，我们介绍三种方法进行操作。

#### <a name="chapter-three-two-one" id="chapter-three-two-one">3.2.1 删除和修改之 splice()</a>

> [返回目录](#chapter-one)

对于前端来说，数组的 `splice()` 方法是个万金油，它能适用于新增、修改、删除这些场景。

那么，如何利用 `splice()` 进行新增、修改和删除呢？

我们先了解下 `splice()` 特性：

```js
var months = ['Jan', 'March', 'April', 'June'];

// 新增操作
months.splice(1, 0, 'Feb');
// ['Jan', 'Feb', 'March', 'April', 'June']

// 修改操作
months.splice(4, 1, 'May');
// ['Jan', 'Feb', 'March', 'April', 'May']

// 删除操作
months.splice(4, 1);
// ['Jan', 'Feb', 'March', 'April']
```

如上，`splice()` 的语法是：`array.splice(start, deleteCount, item1, item2, ...)`。

1. `start` 为数组的开始坐标
2. `deleteCount` 为需要从开始坐标起，删除的个数，可以为 0，代表不删除
3. `item` 为需要新增进去的元素。

那么，讲到这里，小伙伴们应该对 `splice()` 有深刻了解了。

下面我们讲讲 `splice()` 对于修改操作，在工作中的使用场景：

> 修改 Table 某行的数据

```js
let list = [
  { id: '1', name: 'jsliang' },
  { id: '2', name: '梁峻荣' },
  { id: '3', name: 'JavaScriptLiang' },
];

function addData(rowIndex) {
  list.splice(rowIndex, 0, {
    id: '4',
    name: '梁渣渣',
  });
}

addData(1);

console.log(list);
// [
//   { id: '1', name: 'jsliang' },
//   { id: '4', name: '梁渣渣' },
//   { id: '2', name: '梁峻荣' },
//   { id: '3', name: 'JavaScriptLiang' },
// ]
```

如上，我们希望将数据添加到指定位置（`addData(n)`），这时候我们就使用了 `splice()` 对其进行操作，从而修改了原数组。

#### <a name="chapter-three-two-two" id="chapter-three-two-two">3.2.2 删除和修改之 slice()</a>

> [返回目录](#chapter-one)

而作为和 `splice()` 一个字母之差的 `slice()`，又是何等的优秀呢？

**首先**，咱们科普下：

* splice()：所进行的操作会影响到原数组
* slice()：所进行的操作不会影响到原数组

什么意思呢？相信很多小伙伴在网上看数组相关攻略的时候，都会看到一堆的区分：**这个方法会影响到原数组，这个方法不会影响到原数组……等等**。

其实很容易理解：我想吃两块蛋糕，但是现在我只有一块蛋糕。如果我还惦记着自己的减肥，那么我可以将这款蛋糕切成两块，这样我就吃到两块蛋糕（影响到原数组）；如果我觉得吃了两块蛋糕不会肥，那我就去照着这块蛋糕的样子，再买一块（不影响原数组）。

当然，这里都说是修改咯，`slice()` 还是有丢丢影响到数组的：

```js
const str = ['j','s','l','i','a','n','g'];
str.slice(0, 2); // 'js'
str.slice(2); // 'liang'
```

对于 `slice()` 来说，它的参数为：`str.slice(beginSlice, endSlice)`。其中：

* `beginSlice`：从该索引（以 0 为基数）处开始提取原字符串中的字符。
* `endSlice`：结束位置（以 0 为基数），如果不传，默认到数组末尾。

> 注意，`splice()` 的第二个参数是影响到数组的个数，而 `slice()` 的第二个参数是结束的位置，所以 `slice()` 一般写法是：`slice(index, index + length)`，即需要修改的位置（index），及其影响的长度（length）。

很好，说完这一堆废话，咱们讲讲工作中的使用场景：

```js
let list = [
  { id: '1', name: 'jsliang' },
  { id: '2', name: '梁峻荣' },
];

function insertData(rowId) {
  list = [
    ...list.slice(0, list.findIndex(item => item.id === rowId) + 1),
    {
      id: '3',
      name: '',
    },
    ...list.slice(list.findIndex(item => item.id === rowId) + 1),
  ]
}

insertData('1');

console.log(list);
// [
//   { id: '1', name: 'jsliang' },
//   { id: '3', name: '' },
//   { id: '2', name: '梁峻荣' },
// ]
```

还记得在上面我们说过用 `slice()` 做修改操作，*也会影响到原数组* 吗？是的，在这份代码我们可以看出，我们根据之前的数组，组合成一个新的数组，让这个元素指向了新的数组地址。

当然，这个并不重要，我们讲讲它的使用场景：在需要修改 Table 某行的时候，我们将其唯一值（id）传递了过去，然后方法 `insertData` 根据传递的 id 找到那一行，对其进行了修改。

> 如果你感觉并非那么容易理解，你可以尝试下将 `rowId` 换成 `index`，这是个明智的选择。

#### <a name="chapter-three-two-three" id="chapter-three-two-three">3.2.3 删除和修改之 filter()</a>

> [返回目录](#chapter-one)

**首先**，**jsliang** 对于 `filter()` 这个方法也不是很常使用：

我有个朋友，网名就叫 `filter()`，每次使用它就跟使唤我朋友一样：“filter！我有事请你帮忙~”

但是，作为团队的一枚 **螺丝钉**，业务写得多了，你还是会接触到同事的代码的，所以还是有必要对其进行了解：

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// [12, 130, 44]

// 如果你喜欢用 ES6 的箭头函数
const number = [12, 5, 8, 130, 44];
const filterNumber = number.filter(item => item >= 10);
// [12, 130, 44]
```

很好，讲到这里，我们就顺带科普下 `filter()` 这个方法了：

* **语法**：`arr.filter(callback)`

* `callback`：用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它会返回由通过元素组成的数组，或者是一个空数组 []。它接受以下三个参数：
  * `element`：数组中当前正在处理的元素
  * `index`：正在处理的元素在数组中的索引。
  * `array`：调用了 `filter` 的数组本身。

所以一个比较完整的 `filter()` 可以这么写：

```js
const number = [12, 5, 8, 130, 44];
const filterNumber = number.filter((item, index, array) => {
  console.log(array);
  return item >= 10 && index > 3;
});
// 输出 5 次 [12, 5, 8, 130, 44]
// 最终 filterNumber 的值为 [44]
```

OK，介绍完毕，咱们看下应用场景：

```js
let list = [
  { id: '1', name: 'jsliang' },
  { id: '2', name: '梁峻荣' },
  { id: '3', name: 'JavaScriptLiang' },
];

function changeData(id, newObj) {
  list = [...list.filter(item => item.id !== id), newObj];
}

changeData('2', {
  id: '4',
  name: '梁渣渣',
});
[
  {id: "1", name: "jsliang"},
  {id: "3", name: "JavaScriptLiang"},
  {id: "4", name: "梁渣渣"},
]
```

这样，我们就将 `id` 为 2 的 `梁峻荣` 那行修改为 `id` 为 4 的 `梁渣渣`。

### <a name="chapter-three-three" id="chapter-three-three">3.3 数组的查询操作</a>

> [返回目录](#chapter-one)

上面讲完了新增、删除和修改，最后还是讲讲查询操作。

相比于上面的话题，查询的形式就多了。

例如说，我想知道数组中所有对象的 id：

```js
let list = [
  { id: '1', name: 'jsliang' },
  { id: '2', name: '梁峻荣' },
  { id: '3', name: 'JavaScriptLiang' },
];

const ids = list.map(item => item.id);
// ["1", "2", "3"]
```

无可厚非这也是一种查询，而且在工作中特实用，毕竟像 Ant Design 等，下拉框多选等情况，就需要将数据的 id 查找出来。

又或者说，我想知道 `JavaScript` 出现在哪个索引值下，它的 id 是多少：

```js
let list = [
  { id: '1', name: 'jsliang' },
  { id: '2', name: '梁峻荣' },
  { id: '3', name: 'JavaScriptLiang' },
];

const id1 = list[list.findIndex(item => item.name === 'JavaScriptLiang')].id;
// '3'

// 当然有更快速的
const id2 = list.find(item => item.name === 'JavaScriptLiang').id;
// '3'
```

当然，JavaScript 还有很多操作，可以查询数组中的数据。

当然，不管怎么说，**jsliang** 还是强烈推荐将这些方法记下来，然后在工作中不停尝试使用，这样你才会有所提升。

## <a name="chapter-four" id="chapter-four">四 数组的常用知识点</a>

> [返回目录](#chapter-one)

下面开始无聊的 **五年高考三年模拟** 试题训练，希望小伙伴能在了解某个方法之后，通过其下面的 LeetCode 进行相应训练，从而熟练掌握数组的常用知识点。

### <a name="chapter-four-one" id="chapter-four-one">4.1 push() - 末尾添加元素</a>

> [返回目录](#chapter-one)

* [push() 详细了解](./push.md)

`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```js
let arr = [1, 2, 3];

// 通过 push() 方法
arr.push(4); // [1, 2, 3, 4]
```

**实战 LeetCode**：

* [000 - 字谜分组（puzzle-grouping）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/000-%E5%AD%97%E8%B0%9C%E5%88%86%E7%BB%84%EF%BC%88puzzle-grouping%EF%BC%89.md)
* [020 - 有效的括号（valid-parentheses）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/020-%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7%EF%BC%88valid-parentheses%EF%BC%89.md)
* [067 - 二进制求和（add-binary）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/067-%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%B1%82%E5%92%8C%EF%BC%88add-binary%EF%BC%89.md)
* [088 - 合并两个有序数组（merge-sorted-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/088-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%EF%BC%88merge-sorted-array%EF%BC%89.md)
* [118 - 杨辉三角（pascals-triangle）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/118-%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92%EF%BC%88pascals-triangle%EF%BC%89.md)

### <a name="chapter-four-two" id="chapter-four-two">4.2 unshift() - 开头添加元素</a>

> [返回目录](#chapter-one)

* [unshift() 详细了解](./unshift.md)

`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。

```js
let arrA = ['1'];
arrA.unshift('0');
console.log(arrA); // ['0', '1']

let arrB = [4, 5, 6];
arrB.unshift(1, 2, 3);
console.log(arrB); // [1, 2, 3, 4, 5, 6]
```

**实战 LeetCode**：

* [066 - 加一（plus-one）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/066-%E5%8A%A0%E4%B8%80%EF%BC%88plus-one%EF%BC%89.md)
* [067 - 二进制求和（add-binary）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/067-%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%B1%82%E5%92%8C%EF%BC%88add-binary%EF%BC%89.md)
* [189 - 旋转数组（rotate-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/189-%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%EF%BC%88rotate-array%EF%BC%89.md)
* [202 - 快乐数（happy-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/202-%E5%BF%AB%E4%B9%90%E6%95%B0%EF%BC%88happy-number%EF%BC%89.md)

### <a name="chapter-four-three" id="chapter-four-three">4.3 pop() - 末尾删除元素</a>

> [返回目录](#chapter-one)

* [pop() 详细了解](./pop.md)

`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

```js
let arr = [1, 2, 3, 4];
for(let i = 0, time = 1; i < arr.length; time++) {
  console.log(`------\n第 ${time} 次遍历：`);
  console.log(arr.pop());
  console.log(arr);
}

/* Console：
------
第 1 次遍历：
4
[ 1, 2, 3 ]
------
第 2 次遍历：
3
[ 1, 2 ]
------
第 3 次遍历：
2
[ 1 ]
------
第 4 次遍历：
1
[]
*/
```

**实战 LeetCode**：

* [007 - 整数反转（reverse-integer）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/007-%E6%95%B4%E6%95%B0%E5%8F%8D%E8%BD%AC%EF%BC%88reverse-integer%EF%BC%89.md)
* [020 - 有效的括号（valid-parentheses）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/020-%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7%EF%BC%88valid-parentheses%EF%BC%89.md)
* [189 - 旋转数组（rotate-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/189-%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%EF%BC%88rotate-array%EF%BC%89.md)
* [202 - 快乐数（happy-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/202-%E5%BF%AB%E4%B9%90%E6%95%B0%EF%BC%88happy-number%EF%BC%89.md)
* [225 - 用队列实现栈（implement-stack-using-queues）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/225-%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88%EF%BC%88implement-stack-using-queues%EF%BC%89.md)

### <a name="chapter-four-four" id="chapter-four-four">4.4 shift() - 开头删除元素</a>

> [返回目录](#chapter-one)

* [shift() 详细了解](./shift.md)

`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```js
let str = [1, 2, 3];
console.log(str.shift()); // 1
console.log(str.shift()); // 2
console.log(str.shift()); // 3
console.log(str.shift()); // undefined
```

**实战 LeetCode**：

* [014 - 最长公共前缀（longest-common-prefix）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/014-%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80%EF%BC%88longest-common-prefix%EF%BC%89.md)
* [171 - Excel表列序号（excel-sheet-column-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/171-Excel%E8%A1%A8%E5%88%97%E5%BA%8F%E5%8F%B7%EF%BC%88excel-sheet-column-number%EF%BC%89.md)
* [225 - 用队列实现栈（implement-stack-using-queues）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/225-%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88%EF%BC%88implement-stack-using-queues%EF%BC%89.md)
* [232 - 用栈实现队列（implement-queue-using-stacks）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/232-%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%EF%BC%88implement-queue-using-stacks%EF%BC%89.md)

### <a name="chapter-four-five" id="chapter-four-five">4.5 splice() - 增删改元素</a>

> [返回目录](#chapter-one)

* [splice() 详细了解](./splice.md)

`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```js
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');

console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'May']
```

**实战 LeetCode**：

* [026 - 删除排序数组中的重复项（remove-duplicates-from-sorted-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/026-%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9%EF%BC%88remove-duplicates-from-sorted-array%EF%BC%89.md)
* [027 - 移除元素（remove-element）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/027-%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0%EF%BC%88remove-element%EF%BC%89.md)
* [088 - 合并两个有序数组（merge-sorted-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/088-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%EF%BC%88merge-sorted-array%EF%BC%89.md)
* [136 - 只出现一次的数字（single-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/136-%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97%EF%BC%88single-number%EF%BC%89.md)
* [189 - 旋转数组（rotate-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/189-%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%EF%BC%88rotate-array%EF%BC%89.md)

### <a name="chapter-four-six" id="chapter-four-six">4.6 concat() - 拼合两个数组</a>

> [返回目录](#chapter-one)

* [concat() 详细了解](./concat.md)

`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
const newArr = [1, 2, 3].concat(['a', 'b', 'c']);

// [1, 2, 3, 'a', 'b', 'c']
```

**实战 LeetCode**：

* [004 - 寻找两个数组的中位数（median-of-two-sorted-arrays）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/hard/004-%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0%EF%BC%88median-of-two-sorted-arrays%EF%BC%89.md)

### <a name="chapter-four-seven" id="chapter-four-seven">4.7 filter() - 过滤数组元素</a>

> [返回目录](#chapter-one)

* [filter() 详细了解](./filter.md)

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// [12, 130, 44]
```

**实战 LeetCode**：

* [349 - 两个数组的交集（intersection-of-two-arrays）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/349-%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86%EF%BC%88intersection-of-two-arrays%EF%BC%89.md)

### <a name="chapter-four-eight" id="chapter-four-eight">4.8 forEach() - 遍历操作原数组</a>

> [返回目录](#chapter-one)

* [forEach() 详细了解](./forEach.md)

`forEach()` 方法对数组的每个元素执行一次提供的函数。

```js
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 使用 for 遍历
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

// 使用 forEach 遍历
items.forEach(function(item){
  copy.push(item);
});
```

**实战 LeetCode**：

* [073 - 矩阵置零（set-matrix-zeroes）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/medium/073-%E7%9F%A9%E9%98%B5%E7%BD%AE%E9%9B%B6%EF%BC%88set-matrix-zeroes%EF%BC%89.md)
* [350 - 两个数组的交集II（intersection-of-two-arrays-ii）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/350-%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86II%EF%BC%88intersection-of-two-arrays-ii%EF%BC%89.md)
* [383 - 赎金信（ransom-note）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/383-%E8%B5%8E%E9%87%91%E4%BF%A1%EF%BC%88ransom-note%EF%BC%89.md)
* [434 - 字符串中的单词数（number-of-segments-in-a-string）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/434-%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0%EF%BC%88number-of-segments-in-a-string%EF%BC%89.md)

### <a name="chapter-four-night" id="chapter-four-night">4.9 join() - 数组转字符串</a>

> [返回目录](#chapter-one)

* [join() 详细了解](./join.md)

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。

```js
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1 的值变为 "Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```

**实战 LeetCode**：

* [000 - 字谜分组（puzzle-grouping）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/000-%E5%AD%97%E8%B0%9C%E5%88%86%E7%BB%84%EF%BC%88puzzle-grouping%EF%BC%89.md)
* [067 - 二进制求和（add-binary）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/067-%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%B1%82%E5%92%8C%EF%BC%88add-binary%EF%BC%89.md)
* [125 - 验证回文串（valid-palindrome）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/125-%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2%EF%BC%88valid-palindrome%EF%BC%89.md)
* [190 - 颠倒二进制位（reverse-bit）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/190-%E9%A2%A0%E5%80%92%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%EF%BC%88reverse-bit%EF%BC%89.md)
* [242 - 有效的字母异位词（valid-anagram）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/242-%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%EF%BC%88valid-anagram%EF%BC%89.md)

### <a name="chapter-four-ten" id="chapter-four-ten">4.10 indexOf() - 顺序查找第一个</a>

> [返回目录](#chapter-one)

* [indexOf() 详细了解](./indexOf.md)

`indexOf()` 方法返回调用 String 对象中第一次出现的指定值的索引。

```js
'I am jsliang'.indexOf('a', 4); // 9
[1, 3, 1, 4].indexOf(1, 1); // 2
'怪盗 jsliang'.indexOf('我'); // -1
```

**实战 LeetCode**：

* [001 - 两数之和（two-sum）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/001-%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%EF%BC%88two-sum%EF%BC%89.md)
* [027 - 移除元素（remove-element）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/027-%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0%EF%BC%88remove-element%EF%BC%89.md)
* [028 - 实现strStr（implement-strstr）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/028-%E5%AE%9E%E7%8E%B0strStr%EF%BC%88implement-strstr%EF%BC%89.md)
* [205 - 同构字符串（isomorphic-strings）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/205-%E5%90%8C%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%88isomorphic-strings%EF%BC%89.md)
* [217 - 存在重复元素（contains-duplicate）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/217-%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0%EF%BC%88contains-duplicate%EF%BC%89.md)

### <a name="chapter-four-eleven" id="chapter-four-eleven">4.11 lastIndexOf() - 倒序查找第一个</a>

> [返回目录](#chapter-one)

* [lastIndexOf() 详细了解](./lastIndexOf.md)

`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。

```js
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2); // 3
```

**实战 LeetCode**：

暂无题目

### <a name="chapter-four-twelve" id="chapter-four-twelve">4.12 map() - 遍历返回新数组</a>

> [返回目录](#chapter-one)

* [map() 详细了解](./map.md)

`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
[1, 2, 3, 4].map(item => item * 2) // [2, 4, 6, 8]

[{
  name: 'jsliang',
  age: 24,
}, {
  name: '梁峻荣',
  age: 124
}].map((item, index) => {
  return `${index} - ${item.name}`;
}) // ['0 - jsliang', '1 - 梁峻荣']
```

**实战 LeetCode**：

* [001 - 两数之和（two-sum）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/001-%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%EF%BC%88two-sum%EF%BC%89.md)
* [205 - 同构字符串（isomorphic-strings）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/205-%E5%90%8C%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%88isomorphic-strings%EF%BC%89.md)
* [412 - FizzBuzz（fizz-buzz）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/412-FizzBuzz%EF%BC%88fizz-buzz%EF%BC%89.md)
* [434 - 字符串中的单词数（number-of-segments-in-a-string）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/434-%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0%EF%BC%88number-of-segments-in-a-string%EF%BC%89.md)

### <a name="chapter-four-thirteen" id="chapter-four-thirteen">4.13 reverse() - 反转数组元素</a>

> [返回目录](#chapter-one)

* [reverse() 详细了解](./reverse.md)

`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

**实战 LeetCode**：

* [067 - 二进制求和（add-binary）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/067-%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%B1%82%E5%92%8C%EF%BC%88add-binary%EF%BC%89.md)
* [125 - 验证回文串（valid-palindrome）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/125-%E9%AA%8C%E8%AF%81%E5%9B%9E%E6%96%87%E4%B8%B2%EF%BC%88valid-palindrome%EF%BC%89.md)
* [171 - Excel表列序号（excel-sheet-column-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/171-Excel%E8%A1%A8%E5%88%97%E5%BA%8F%E5%8F%B7%EF%BC%88excel-sheet-column-number%EF%BC%89.md)
* [190 - 颠倒二进制位（reverse-bit）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/190-%E9%A2%A0%E5%80%92%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%EF%BC%88reverse-bit%EF%BC%89.md)
* [344 - 反转字符串（reverse-string）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/344-%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%88reverse-string%EF%BC%89.md)

### <a name="chapter-four-fourteen" id="chapter-four-fourteen">4.14 slice() - 查找指定位置元素</a>

> [返回目录](#chapter-one)

* [slice() 详细了解](./slice.md)

`slice()` 方法提取一个字符串的一部分，并返回一新的字符串。

```js
const str = 'jsliang';
str.slice(0, 2); // 'js'
str.slice(2); // 'liang'
```

**实战 LeetCode**：

* [005 - 最长回文子串（longest-palindromic-substring）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/medium/005-%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E4%B8%B2%EF%BC%88longest-palindromic-substring%EF%BC%89.md)
* [014 - 最长公共前缀（longest-common-prefix）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/014-%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80%EF%BC%88longest-common-prefix%EF%BC%89.md)
* [088 - 合并两个有序数组（merge-sorted-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/088-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%EF%BC%88merge-sorted-array%EF%BC%89.md)
* [459 - 重复的字符串（repeated-substring-pattern）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/459-%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%88repeated-substring-pattern%EF%BC%89.md)

### <a name="chapter-four-fifteen" id="chapter-four-fifteen">4.15 sort() - 数组排序</a>

> [返回目录](#chapter-one)

* [sort()](./sort.md)

`sort()` 对数组的元素进行排序，并返回数组。

```js
[4, 2, 5, 1, 3].sort(), // [1, 2, 3, 4, 5]
[4, 2, 5, 1, 3].sort((a, b) => a < b), // [5, 4, 3, 2, 1]
['a', 'd', 'c', 'b'].sort(), // ['a', 'b', 'c', 'd']
['jsliang', 'eat', 'apple'].sort(), // ['apple', 'eat', 'jsliang']
```

**实战 LeetCode**：

* [268 - 缺失数字（missing-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/268-%E7%BC%BA%E5%A4%B1%E6%95%B0%E5%AD%97%EF%BC%88missing-number%EF%BC%89.md)
* [389 - 找不同（find-the-difference）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/389-%E6%89%BE%E4%B8%8D%E5%90%8C%EF%BC%88find-the-difference%EF%BC%89.md)
* [414 - 第三大的数（third-maximum-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/414-%E7%AC%AC%E4%B8%89%E5%A4%A7%E7%9A%84%E6%95%B0%EF%BC%88third-maximum-number%EF%BC%89.md)
* [448 - 找出所有数组中消失的数字（find-all-numbers-disappeared-in-an-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/448-%E6%89%BE%E5%87%BA%E6%89%80%E6%9C%89%E6%95%B0%E7%BB%84%E4%B8%AD%E6%B6%88%E5%A4%B1%E7%9A%84%E6%95%B0%E5%AD%97%EF%BC%88find-all-numbers-disappeared-in-an-array%EF%BC%89.md)
* [455 - 分发饼干（assign-cookies）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/455-%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2%EF%BC%88assign-cookies%EF%BC%89.md)

### <a name="chapter-four-sixteen" id="chapter-four-sixteen">4.16 toString() - 数组转字符串</a>

> [返回目录](#chapter-one)

* [toString()](./toString.md)

`toString()` 返回一个字符串，表示指定的数组及其元素。

```js
let arr = [1, 2, 3];
arr.toString(); // '1,2,3'
```

**实战 LeetCode**：

* [190 - 颠倒二进制位（reverse-bit）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/190-%E9%A2%A0%E5%80%92%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BD%8D%EF%BC%88reverse-bit%EF%BC%89.md)
* [191 - 位1的个数（number-of-1-bits）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/191-%E4%BD%8D1%E7%9A%84%E4%B8%AA%E6%95%B0%EF%BC%88number-of-1-bits%EF%BC%89.md)
* [258 - 各位相加（add-digits）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/258-%E5%90%84%E4%BD%8D%E7%9B%B8%E5%8A%A0%EF%BC%88add-digits%EF%BC%89.md)
* [443 - 压缩字符串（string-compression）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/443-%E5%8E%8B%E7%BC%A9%E5%AD%97%E7%AC%A6%E4%B8%B2%EF%BC%88string-compression%EF%BC%89.md)

### <a name="chapter-four-seventeen" id="chapter-four-seventeen">4.17 includes() - 数组包含某元素</a>

> [返回目录](#chapter-one)

* [includes() 详细了解](./includes.md)

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

**实战 LeetCode**：

* [263 - 丑数（ugly-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/263-%E4%B8%91%E6%95%B0%EF%BC%88ugly-number%EF%BC%89.md)

### <a name="chapter-four-eighteen" id="chapter-four-eighteen">4.18 fill() - 填充数组</a>

> [返回目录](#chapter-one)

* [fill() 详细了解](./fill.md)

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
let arr = [1, 2, 3, 4, 5];
arr = new Array(arr.length).fill(0);
// arr - [0, 0, 0, 0, 0];
```

**实战 LeetCode**：

* [073 - 矩阵置零（set-matrix-zeroes）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/medium/073-%E7%9F%A9%E9%98%B5%E7%BD%AE%E9%9B%B6%EF%BC%88set-matrix-zeroes%EF%BC%89.md)

### <a name="chapter-four-nighteen" id="chapter-four-nighteen">4.19 reduce() - 数组累计</a>

> [返回目录](#chapter-one)

* [reduce()](./reduce.md)

`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```js
[1, 2, 3, 4].reduce((prev, next) => {
  return prev + next;
}); // 10
['前端', 'pang', 'liang'].reduce((prev, next, index) => {
  return (index = 0 ? '-js' : '') + prev + 'js' + next;
}); // 前端-jspang-jsliang
```

**实战 LeetCode**：

* [014 - 最长公共前缀（longest-common-prefix）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/014-%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80%EF%BC%88longest-common-prefix%EF%BC%89.md)
* [202 - 快乐数（happy-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/202-%E5%BF%AB%E4%B9%90%E6%95%B0%EF%BC%88happy-number%EF%BC%89.md)
* [258 - 各位相加（add-digits）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/258-%E5%90%84%E4%BD%8D%E7%9B%B8%E5%8A%A0%EF%BC%88add-digits%EF%BC%89.md)
* [268 - 缺失数字（missing-number）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/268-%E7%BC%BA%E5%A4%B1%E6%95%B0%E5%AD%97%EF%BC%88missing-number%EF%BC%89.md)
* [049 - 字母异位词分组（group-anagrams）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/medium/049-%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D%E5%88%86%E7%BB%84%EF%BC%88group-anagrams%EF%BC%89.md)

### <a name="chapter-four-twenty" id="chapter-four-twenty">4.20 find() - 查找数组元素</a>

> [返回目录](#chapter-one)

* [find() 详细了解](./find.md)

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```js
var inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
  return fruit.name === 'cherries';
}

inventory.find(findCherries));
// { name: 'cherries', quantity: 5 }
```

**实战 LeetCode**：

暂无实战

### <a name="chapter-four-twenty-one" id="chapter-four-twenty-one">4.21 findIndex() - 查找元素索引</a>

> [返回目录](#chapter-one)

* [findIndex() 详细了解](./findIndex.md)

`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

```js
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

array1.findIndex(isLargeNumber); // 3
```

**实战 LeetCode**：

暂无实战

## <a name="chapter-five" id="chapter-five">五 总结</a>

> [返回目录](#chapter-one)

经过前面一系列的折腾，我们基本对数组的各种操作有所了解，虽然谈不上 **精通**，但是支持日常工作是毫无问题的了。

写到这里，**jsliang** 查询了下字数：36884。

是的，路漫漫其修远兮，就连我一开始写这篇文章的时候，我也没想到它有这么多的内容可以写，而且还是没有将一些 ES6、ES7 的数组新特性加上的情况下篇幅。

数组 - 最简单的内存数据结构，也是工作中最常使用的数据结构。

如果你觉得 **jsliang** 写得很 OK，欢迎点赞、留言、加微信好友、关注微信公众号等。

咱们，将继续探索，扎实编程基础，了解更多的数据结构和算法！

> 所有联系方式尽在：[jsliang 的文档库](https://github.com/LiangJunrong/document-library)

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
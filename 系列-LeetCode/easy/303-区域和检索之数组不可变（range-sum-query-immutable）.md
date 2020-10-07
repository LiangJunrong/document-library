303 - 区域和检索之数组不可变（range-sum-query-immutable）
===

> Create by **jsliang** on **2019-07-22 10:22:11**  
> Recently revised in **2019-09-18 13:52:42**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：动态规划
* **题目地址**：https://leetcode-cn.com/problems/range-sum-query-immutable/
* **题目内容**：

```
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

说明:
你可以假设数组不可变。
会多次调用 sumRange 方法。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var NumArray = function (nums) {
  this.map = new Map();
  this.map.set(-1, 0);
  for (let i = 0; i < nums.length; i++) {
    this.map.set(i, this.map.get(i - 1) + nums[i]);
  }
};

NumArray.prototype.sumRange = function (i, j) {
  return this.map.get(j) - this.map.get(i - 1);
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

```js
const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
const sum1 = obj.sumRange(0, 2);
const sum2 = obj.sumRange(2, 5);
const sum3 = obj.sumRange(0, 5);
console.log(sum1); // 1
console.log(sum2); // -1
console.log(sum3); // -3
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 16/16 cases passed (132 ms)
  ✔ Your runtime beats 95.6 % of javascript submissions
  ✔ Your memory usage beats 6.49 % of javascript submissions (45.9 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，了解题意。

题目想我们做什么？无非就是给出数组 A，然后求和 `[i, j]` 范围的数组之和。

所以，**jsliang** 随手写道：

```js
var NumArray = function(nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
  return this.nums.slice(i, j + 1).reduce((prev, next) => {
    return prev + next;
  })
};
```

Submit 后系统很诚恳的给出：

```js
✘ Time Limit Exceeded
  ✘ 16/16 cases passed (N/A)
  ✘ testcase: '["NumArray","sumRange", ... 省略 10 万个'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

超时了怎么办？找找减少耗时的方法呗~

试试直接 `for` 循环：

```js
var NumArray = function(nums) {
  this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
  let sum = 0;
  for (let z = i; z < j + 1; z++) {
    sum += this.nums[z];
  }
  return sum;
};
```

不行，还是超时了！！！

**然后**，如何才能做到以空间换时间呢？需要缓存吧？怎么缓存呢？

```js
var NumArray = function (nums) {
  this.map = new Map();
  this.map.set(-1, 0);
  for (let i = 0; i < nums.length; i++) {
    this.map.set(i, this.map.get(i - 1) + nums[i]);
  }
};

NumArray.prototype.sumRange = function (i, j) {
  return this.map.get(j) - this.map.get(i - 1);
};
```

没错，我们将每次的和通过 `Map` 都记录下来。

例如，我们有数组：`[1, 2, 3, 4, 5]`

那么，`Map` 将其每次的和都存下来，即 `Map { -1 => 0, 0 => 1, 1 => 3, 2 => 6, 3 => 10, 4 => 15 }`。

> 小伙伴们要明白 `set(-1, 0)` 的用意，本质是累加数字。

**最后**，如果我们求两个位置之间的差值，将其相减即可。

* [3, 4] => 15 - 6 = 9
* [0, 4] => 15 - 0 = 15

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
217 - 存在重复元素（contains-duplicate）
===

> Create by **jsliang** on **2019-07-13 13:47:41**  
> Recently revised in **2019-09-18 13:36:51**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - indexOf()](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |
| &emsp;[3.3 解法 - Map](#chapter-three-three) |
| &emsp;[3.4 解法 - Set](#chapter-three-four) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、哈希表
* **题目地址**：https://leetcode-cn.com/problems/contains-duplicate/
* **题目内容**：

```
给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - indexOf()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsDuplicate = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) < i) {
      return true;
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,1,1,3,3,4,3,2,4,2]`
2. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 18/18 cases passed (1984 ms)
  ✔ Your runtime beats 17.34 % of javascript submissions
  ✔ Your memory usage beats 80.95 % of javascript submissions (37 MB)
```

* **知识点**：

1. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/indexOf.md)

* **解题思路**：

解题思路非常清晰：判断这个元素的 `indexOf()` 的位置是多少，如果不是当前的索引位置，则它不是第一次出现，即存在重复元素。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsDuplicate = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,1,1,3,3,4,3,2,4,2]`
2. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 18/18 cases passed (168 ms)
  ✔ Your runtime beats 35.21 % of javascript submissions
  ✔ Your memory usage beats 66.53 % of javascript submissions (38.3 MB)
```

* **知识点**：

1. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)

* **解题思路**：

**首先**，将数组排序，因为是整数数组，所以可以直接用 `sort()`。

**然后**，我们标明两个指针，一个指向当前位置，另一个指向下一个位置，比较这两个位置的值是否相同。

**最后**，根据比较返回 `true` 或者 `false` 即可。

### <a name="chapter-three-three" id="chapter-three-three">3.3 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsDuplicate = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return true;
    } else {
      map.set(nums[i], i)
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,1,1,3,3,4,3,2,4,2]`
2. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 18/18 cases passed (88 ms)
  ✔ Your runtime beats 93.69 % of javascript submissions
  ✔ Your memory usage beats 39.58 % of javascript submissions (41.5 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

`Map` 作为一个好用的 JS 对象，作用于哈希表特别 nice。

我们将每个经历的数字存储起来，然后每次遍历的时候，判断这个数字是否存储在哈希表中，如果存在，则返回 `true`，否则返回 `false`。

### <a name="chapter-three-four" id="chapter-three-four">3.4 解法 - Set</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsDuplicate = function(nums) {
  const tempSet = new Set();
  for (const item of nums) {
    if (tempSet.has(item)) {
      return true;
    } else {
      tempSet.add(item);
    }
  }
  return false;
}
```

* **执行测试**：

1. `nums`：`[1,1,1,3,3,4,3,2,4,2]`
2. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 18/18 cases passed (92 ms)
  ✔ Your runtime beats 90.17 % of javascript submissions
  ✔ Your memory usage beats 42.71 % of javascript submissions (40.3 MB)
```

* **知识点**：

1. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。由于唯一性，一般用于去重。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Set/README.md)

* **解题思路**：

想比于 `Map` 来说，`Set` 作为 ES6 的新工具，无疑也是非常好用的。

`Set` 通过 `add()` 和 `has()` 也能做到 `Map()` 的 `get()` 和 `set()`，除此之外我们也可以利用它的去重功能：

```js
var containsDuplicate = function(nums) {
  return nums.length === new Set([...nums]).size ? false : true;
};
```

提交：

```js
✔ Accepted
  ✔ 18/18 cases passed (80 ms)
  ✔ Your runtime beats 97.37 % of javascript submissions
  ✔ Your memory usage beats 16.04 % of javascript submissions (42.7 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
414 - 第三大的数（third-maximum-number）
===

> Create by **jsliang** on **2019-07-25 16:15:04**  
> Recently revised in **2019-07-25 17:05:54**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - Set](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/third-maximum-number/
* **题目内容**：

```
给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:
输入: [3, 2, 1]
输出: 1
解释: 第三大的数是 1.

示例 2:
输入: [1, 2]
输出: 2
解释: 第三大的数不存在, 所以返回最大的数 2 .

示例 3:
输入: [2, 2, 3, 1]
输出: 1
解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var thirdMax = function(nums) {
  nums.sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
      if (map.size === 3) {
        return nums[i];
      }
    }
  }
  return nums[0];
};
```

* **执行测试**：

1. `nums`：`[2, 2, 3, 1]`
2. `return`：

```js
1
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 26/26 cases passed (156 ms)
  ✔ Your runtime beats 17.34 % of javascript submissions
  ✔ Your memory usage beats 55 % of javascript submissions (36.1 MB)
```

* **知识点**：

1. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/sort.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)

* **解题思路**：

**清晰自己的思路，无疑是解题的最大帮助。**

**首先**，我们对数组进行排序：`nums.sort((a, b) => b - a)`，这样我们会得到一个倒序的数组。（即最大的在最前面）

**然后**，我们借助 `Map` 做哈希表。如果这个元素从未出现，我们就将其记录到哈希表，并标记它出现了。

```js
var thirdMax = function(nums) {
  nums.sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
      if (map.size === 3) {
        return nums[i];
      }
    }
  }
  return nums[0];
};
```

**最后**，我们判断 `Map` 的长度是否达到了 3，如果达到了，那么就返回目前的元素（即排行第三大）；如果没达到，那就在循环最后返回第 1 个元素。（即返回最大元素）

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Set</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var thirdMax = function(nums) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => b - a);
  return nums.length > 2 ? nums[2] : nums[0];
};
```

* **执行测试**：

1. `nums`：`[2, 2, 3, 1]`
2. `return`：

```js
1
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 26/26 cases passed (156 ms)
  ✔ Your runtime beats 17.34 % of javascript submissions
  ✔ Your memory usage beats 38 % of javascript submissions (37 MB)
```

* **知识点**：

1. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Set.md)
2. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/sort.md)

* **解题思路**：

**首先**，数组元素太多怎么办？先去重呗~

**然后**，对数组进行倒序排序。

**最后**，我们判断它是否有 3 个及以上元素，如果有，那么我们就返回第三个；如果没有，我们就返回第一个。

* **进一步拓展**：

还有其他题解吗？

> 解法 1：

```js
var thirdMax = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return;
  }
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return nums[0] >= nums[1] ? nums[0] : nums[1];
  }
  let first = nums[0];
  let second = -Infinity;
  let third = -Infinity;
  for (let i = 1; i < n; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] === first) {
      continue;
    } else if (nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (nums[i] === second) {
      continue;
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === -Infinity ? first : third;
};
```

Submit 提交：

```js
✔ Accepted
  ✔ 26/26 cases passed (100 ms)
  ✔ Your runtime beats 67.34 % of javascript submissions
  ✔ Your memory usage beats 73 % of javascript submissions (35 MB)
```

> 解法 2：

```js
var thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;
  for (const num of nums) {
    if (num > first) {
      [first, second, third] = [num, first, second];
    }
    if (num < first && num > second) {
      [second, third] = [num, second];
    }
    if (num < second && num > third) {
      third = num;
    }
  }
  return third === Number.MIN_SAFE_INTEGER ? first : third;
};
```

Submit 提交：

```js
✔ Accepted
  ✔ 26/26 cases passed (96 ms)
  ✔ Your runtime beats 71.77 % of javascript submissions
  ✔ Your memory usage beats 30 % of javascript submissions (37.5 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
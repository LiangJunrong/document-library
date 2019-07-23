349 - 两个数组的交集（intersection-of-two-arrays）
===

> Create by **jsliang** on **2019-07-23 10:11:48**  
> Recently revised in **2019-07-23 11:40:16**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 题解 - Set](#chapter-three-one) |
| &emsp;[3.2 题解 - Map](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：排序、哈希表、双指针、二分查找
* **题目地址**：https://leetcode-cn.com/problems/intersection-of-two-arrays/
* **题目内容**：

```
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]

示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]

说明:
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Set</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(item => new Set(nums2).has(item)))];
};
```

* **执行测试**：

1. `nums1`：`[4, 9, 5]`
2. `nums2`：`[9, 4, 9, 8, 4]`
3. `return`：

```js
[ 4, 9 ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 60/60 cases passed (312 ms)
  ✔ Your runtime beats 5.95 % of javascript submissions
  ✔ Your memory usage beats 5.11 % of javascript submissions (40 MB)
```

* **知识点**：

1. `filter()`：`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。[`filter()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/filter.md)
2. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Set.md)

* **解题思路**：

**最差的 Submit，可能出自最简洁的代码。**

1. 取交集：`nums1.filter(item => new Set(nums2).has(item))`
2. 去重：`[...new Set(arr)]`

这样，就可以取到去重的两个数组的交集，从而完成解题。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var intersection = function(nums1, nums2) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }
  for (let j = 0; j < nums2.length; j++) {
    if (map.get(nums2[j]) !== undefined && result.indexOf(nums2[j]) === -1) {
      result.push(nums2[j]);
    }
  }
  return result;
};
```

* **执行测试**：

1. `nums1`：`[4, 9, 5]`
2. `nums2`：`[9, 4, 9, 8, 4]`
3. `return`：

```js
[ 4, 9 ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 60/60 cases passed (72 ms)
  ✔ Your runtime beats 97.22 % of javascript submissions
  ✔ Your memory usage beats 26.87 % of javascript submissions (35.2 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)
2. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)
3. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)

* **解题思路**：

既然前面使用了内置函数 `Set`，那么再推荐下 `Map` 无可厚非。

`Map` 作为 JS 的内置函数，可用来做哈希表的题解。

在本题中，我们将 `nums1` 的值，都存储到 `Map` 中。

然后，遍历 `nums2`，如果 `Map` 中包含这个元素，并且数组 `result` 中不存在这个元素，我们就将它存入到数组中。

最后，根据前面的步骤，我们做到了去重 + 取交集。

* **进一步思考**：

使用 `Map` 或者 `Set` 肯定不是唯一的两个解，还有更多的其他解，就需要小伙伴个人挖掘了~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
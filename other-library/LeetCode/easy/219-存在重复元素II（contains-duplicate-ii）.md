219 - 存在重复元素II（contains-duplicate-ii）
===

> Create by **jsliang** on **2019-07-13 14:53:51**  
> Recently revised in **2019-09-18 13:37:17**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、哈希表
* **题目地址**：https://leetcode-cn.com/problems/contains-duplicate-ii/
* **题目内容**：

```
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

示例 1:
输入: nums = [1,2,3,1], k = 3
输出: true

示例 2:
输入: nums = [1,0,1,1], k = 1
输出: true

示例 3:
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
      map.set(nums[i], i);
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,2,3,1,2,3]`
2. `k`：`2`
3. `return`：`false`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 23/23 cases passed (80 ms)
  ✔ Your runtime beats 98.81 % of javascript submissions
  ✔ Your memory usage beats 47.94 % of javascript submissions (39.7 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**首先**，首推小伙伴们先看看上一题的题解（217 - 存在重复元素），里面讲解了 4 种题解。

**然后**，我们看看 `Map()` 如何操作：

1. 如果这个元素不存在，则将其存到哈希表 `map` 中。
2. 如果这个元素存在。先判断这个元素的索引和之前出现位置的索引的差值是否小于等于 `k`，如果是那么就为 `true`；如果不是，那么就存储这个位置，方便下一次的比较。

**最后**，如果上面的步骤都成，则返回 `false`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i] && (j - i <= k)) {
        return true;
      }
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,2,3,1,2,3]`
2. `k`：`2`
3. `return`：`false`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 23/23 cases passed (1752 ms)
  ✔ Your runtime beats 33.14 % of javascript submissions
  ✔ Your memory usage beats 57.03 % of javascript submissions (36.4 MB)
```

* **解题思路**：

**首先**，指针 `i` 指向当前元素，指针 `j` 指向 `i` 之后的元素，即：

> `[1, 2, 3, 1, 2, 3]`

| i | j |
| --- | --- |
| 0 | 1 2 3 4 5 |
| 1 | 2 3 4 5 |
| 2 | 3 4 5 |
| 3 | 4 5 |
| 4 | 5 |

这样，我们的双指针就会不停挪动，从而遍历整个数组。

**然后**，我们比较 `nums` 在指针 `i` 和 `j` 的位置的值是否相同，即 `nums[i] === nums[j]`，如果相同，再看 `j - i` 的值是否小于等于 `k`，如果是则返回 `true`。

**最后**，如果以上的条件都不成功，则返回 `false`。

* **进一步思考**：

这里我们提供了两种解法，那么还有没有其他解法呢？

**肯定有！**

所以小伙伴们可以自行尝试下，从而学到更多的知识~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
004 - 寻找两个数组的中位数（median-of-two-sorted-arrays）
===

> Create by **jsliang** on **2019-08-06 11:07:31**  
> Recently revised in **2019-08-06 11:40:50**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - Map](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：困难
* **涉及知识**：数组、二分查找、分治算法
* **题目地址**：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
* **题目内容**：

```
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0

示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const all = nums1.concat(nums2).sort((a, b) => a - b);
  if (all.length % 2 === 0) {
    return (all[all.length / 2] + all[all.length / 2 - 1]) / 2;
  } else {
    return all[(all.length - 1) / 2];
  }
};
```

* **执行测试**：

1. `nums1`：`[1, 3]`
2. `nums2`：`[2, 4]`
3. `return`：

```js
2.5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 2085/2085 cases passed (232 ms)
  ✔ Your runtime beats 33.82 % of javascript submissions
  ✔ Your memory usage beats 81.59 % of javascript submissions (39.1 MB)
```

* **知识点**：

1. `concat()`：`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。[`concat()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/concat.md)
2. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/sort.md)

* **解题思路**：

**首先**，人生第一道困难难度的题目，怎么看起来好像有点简单啊，立马上手：

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const all = nums1.concat(nums2).sort();
  if (all.length % 2 === 0) {
    return (all[all.length / 2] + all[all.length / 2 - 1]) / 2;
  } else {
    return all[(all.length - 1) / 2];
  }
};
```

Submit 提交看看：

```js
✘ Wrong Answer
  ✘ 1041/2085 cases passed (N/A)
  ✘ testcase: '[]\n[1,2,3,4]'
  ✘ answer: -2.0
  ✘ expected_answer: 2.5
  ✘ stdout: [ 3 ]
[ -2, -1 ]
```

一脸懵逼，还是我特意打印了下 `nums`、`nums2` 才知道，它给了未明觉利的东西啊。

> 报错返回的测试用例是：`nums1 = [], nums2 = [1,2,3,4]`

> 实测返回的测试用例是：`nums1 = [3], nums2 = [-2,-1]`

**然后**，再仔细看了下，代码没写全，`sort()` 需要做下兼容：

```js
var findMedianSortedArrays = function(nums1, nums2) {
  const all = nums1.concat(nums2).sort((a, b) => a - b);
  if (all.length % 2 === 0) {
    return (all[all.length / 2] + all[all.length / 2 - 1]) / 2;
  } else {
    return all[(all.length - 1) / 2];
  }
};
```

**最后**，提交：

```js
✔ Accepted
  ✔ 2085/2085 cases passed (232 ms)
  ✔ Your runtime beats 33.82 % of javascript submissions
  ✔ Your memory usage beats 81.59 % of javascript submissions (39.1 MB)
```

就通了，估计是 LeetCode 返回的问题。

> 注：能解题，但是时间复杂度可能没有 `O(log(m + n))`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const nums1Length = nums1.length,
    nums2Length = nums2.length;
  let iMin = 0,
    iMax = nums1Length;
  const halfLen = Math.floor((nums1Length + nums2Length + 1) / 2); // +1 这种情况单数时取 maxleft
  while (iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2); //   二分查找
    let j = halfLen - i;
    if (i < iMax && nums2[j - 1] > nums1[i]) {
      iMin = i + 1;
    } else if (i > iMin && nums1[i - 1] > nums2[j]) {
      iMax = i - 1;
    } else {
      let maxLeft = 0;
      if (i === 0) {
        maxLeft = nums2[j - 1]
      } else if (j === 0) {
        maxLeft = nums1[i - 1]
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      if ((nums1Length + nums2Length) % 2 === 1) {
        return maxLeft;
      }

      let minRight = 0;
      if (i === nums1Length) {
        minRight = nums2[j];
      } else if (j === nums2Length) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums2[j], nums1[i]);
      }
      return (maxLeft + minRight) / 2
    }
  }
  return 0;
};
```

* **执行测试**：

1. `nums1`：`[1, 3]`
2. `nums2`：`[2, 4]`
3. `return`：

```js
2.5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 2085/2085 cases passed (160 ms)
  ✔ Your runtime beats 94.83 % of javascript submissions
  ✔ Your memory usage beats 81.18 % of javascript submissions (39.1 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)

* **解题思路**：

**首先**，**jsliang** 肯定写不出这种解析来的啦：

> https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/javascriptban-ben-by-shen-zhen-dong-men-qing/

**然后**，这道题分析上，大佬给出的解释是：

> 数组长度好像是千万。一个毫秒级，一个二十多秒。  
> 作为一个前端，对于前端那种数据量，暴力破解这种就够用啦。

**最后**，这道题肯定有更多二分查找之类的解法，但是这次是按照分组来解题，目前学习进度是【数组】，所以咱用了数组的方法求解，后面再持续维护，加油！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
088 - 合并两个有序数组（merge-sorted-array）
===

> Create by **jsliang** on **2019-06-12 10:47:55**  
> Recently revised in **2019-09-18 10:22:26**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、双指针
* **题目地址**：https://leetcode-cn.com/problems/merge-sorted-array/
* **题目内容**：

```
给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }
  nums1.sort(sorter);
  function sorter(a, b) {
    return a - b;
  }
};
```

* **执行测试**：

1. `nums1`：`[1,2,3,0,0,0]`
2. `m`：`3`
3. `nums2`：`[2, 5, 6]`
4. `n`：`3`
5. `return`：

```js
[1, 2, 2, 3, 5, 6]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 59/59 cases passed (84 ms)
  ✔ Your runtime beats 90.84 % of javascript submissions
  ✔ Your memory usage beats 50.07 % of javascript submissions (34.4 MB)
```

* **知识点**：

1. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)

* **解题思路**：

**首先**，我们遍历一次小于 `n` 的次数，将 `nums2` 逐个替换到 `nums1` 中 `m` 长度后。

**然后**，我们通过 `sort()` 进行排序，因为 JavaScript 中的 `sort()`，对于 `[1, 5, 2, 10]` 来说，它的结果就是 `[1, 10, 2, 5]`，所以需要打下补丁。

**最后**，我们不需要 `return`，因为它会默认取 `nums1`。

* **进一步思考**：

这种方式还能不能优化呢？

答案是可以的：

```js
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => (a - b));
};
```

仅使用两行代码就可以解决，而且效率还不会太低：

```js
✔ Accepted
  ✔ 59/59 cases passed (76 ms)
  ✔ Your runtime beats 97.1 % of javascript submissions
  ✔ Your memory usage beats 40.57 % of javascript submissions (34.7 MB)
```

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var merge = function (nums1, m, nums2, n) {
  let count1 = 0;
  let count2 = 0;
  let len = nums1.length;
  while (count1 < m && count2 < n) {
    if (nums1[count1] > nums2[count2]) {
      nums1.push(nums2[count2]);
      count2 += 1;
    } else {
      nums1.push(nums1[count1]);
      count1 += 1;
    }
  }

  if (count1 < m) {
    nums1.push(...nums1.slice(count1, m));
  }

  if (count2 < n) {
    nums1.push(...nums2.slice(count2, n));
  }

  nums1.splice(0, len);
  return nums1;
};
```

* **执行测试**：

1. `nums1`：`[1,2,3,0,0,0]`
2. `m`：`3`
3. `nums2`：`[2, 5, 6]`
4. `n`：`3`
5. `return`：

```js
[1, 2, 2, 3, 5, 6]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 59/59 cases passed (88 ms)
  ✔ Your runtime beats 87.79 % of javascript submissions
  ✔ Your memory usage beats 97.87 % of javascript submissions (33.4 MB)
```

* **知识点**：

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)
2. `slice()`：`slice()` 方法提取一个字符串的一部分，并返回一新的字符串。[`slice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/slice.md)
3. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)

* **解题思路**：

**首先**，怎么个双指针法呢？用 `p1`（指针 1） 指向 `nums1` 的开头，`p2`（指针 2） 指向 `nums2` 的开头。 

用 `p1` 对应的值和 `p2` 进行比较，将最小的值放入都输出数组中。

每次比较，移动对应的 `p1` 或者 `p2`：

![图](../../../public-repertory/img/other-algorithm-088-1.png)

假设我们一开始执行的是：`merge([1,2,3,0,0,0], 3, [2,5,6], 3)`，那么：

```js
while (count1 < m && count2 < n) {
  if (nums1[count1] > nums2[count2]) {
    nums1.push(nums2[count2++]);
  } else {
    nums1.push(nums1[count1++]);
  }
}
```

经过 `while` 的遍历之后，我们把基本能添加的值，都添加进 `nums1` 了。

**然后**，我们再进行一次判断，是 `nums1` 没有遍历完还是 `nums2` 没有遍历完，如果没遍历完，那么就从那位开始，把剩下的通过 `slice()` 切割出来后，再通过解构赋值，将其 `push()` 到 `nums1` 即可：

```js
if (count1 < m) {
  nums1.push(...nums1.slice(count1, m));
}

if (count2 < n) {
  nums1.push(...nums2.slice(count2, n));
}
```

**最后**，我们通过 `nums1.splice(0, len)` 将 `nums1` 原本的内容删掉，就可以获得最终结果了。 

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
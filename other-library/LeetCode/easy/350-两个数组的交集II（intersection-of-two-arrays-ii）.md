350 - 两个数组的交集II（intersection-of-two-arrays-ii）
===

> Create by **jsliang** on **2019-07-23 15:16:40**  
> Recently revised in **2019-07-23 15:52:36**

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
* **涉及知识**：排序、哈希表、双指针、二分查找
* **题目地址**：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
* **题目内容**：

```
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]

示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。

进阶:
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var intersect = function(nums1, nums2) {
  let result = [];
  nums1.forEach(value => {
    let index = nums2.indexOf(value);
    if (index > -1) {
      result.push(value);
      nums2.splice(index, 1);
    }
  })
  return result;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `nums1`：`[4, 9, 5]`
2. `nums2`：`[9, 4, 9, 8, 4]`
3. `return`：

```js
[ 4, 9 ]
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 61/61 cases passed (76 ms)
  ✔ Your runtime beats 96.61 % of javascript submissions
  ✔ Your memory usage beats 63.3 % of javascript submissions (34.4 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `forEach()`：`forEach()` 方法对数组的每个元素执行一次提供的函数。[`forEach()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/forEach.md)
2. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)
3. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)
4. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/splice.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，这道题和 **349-两个数组的交集（intersection-of-two-arrays）** 没有任何区别，顶多就是多了个进阶。

**然后**，看了下这道题的【评论】，找了条更简单的解法：

```js
var intersect = function(nums1, nums2) {
  let result = [];
  nums1.forEach(value => {
    let index = nums2.indexOf(value);
    if (index > -1) {
      result.push(value);
      nums2.splice(index, 1);
    }
  })
  return result;
};
```

它的主要思路是：

1. 使用 `result` 来存储最终结果。
2. 通过 `forEach` 遍历数组 `nums1`。
3. 判断数组 `nums2` 中是否存在与 `nums1` 相同的值 `value`，即 `indexOf()` 后的值是否大于 `-1`，大于表明存在。
4. 如果存在 `value`，那么就将其添加到最终结果 `result` 中去，并且切割 `nums2` 中的这个元素，避免 `result` 数组中数据重复。（例如：`[1,2,2,1]` 和 `[2]`，会得出 `[2,2]` 这个错误答案）

**最后**，将结果返回出去即可。

除此之外，**jsliang** 没有看到更优秀的思路了，所以这里就不提供其他解了，小伙伴们如果看到，可以评论或者留言哈~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
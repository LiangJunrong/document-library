283 - 移动零（move-zeroes）
===

> Create by **jsliang** on **2019-07-19 14:19:24**  
> Recently revised in **2019-09-18 13:50:51**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 冒泡排序](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、双指针
* **题目地址**：https://leetcode-cn.com/problems/move-zeroes/
* **题目内容**：

```
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var moveZeroes = function(nums) {
  let map = new Map();
  map.set(0, 0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      map.set(0, map.get(0) + 1);
      i--;
    }
  }
  for (let i = 0; i < map.get(0); i++) {
    nums.push(0);
  }
  return nums;
};
```

* **执行测试**：

1. `nums`：`[0, 1, 0, 3, 12]`
2. `return`：`[1, 3, 12, 0, 0]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 21/21 cases passed (100 ms)
  ✔ Your runtime beats 64.67 % of javascript submissions
  ✔ Your memory usage beats 55.1 % of javascript submissions (35.6 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)
2. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)
3. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

* **解题思路**：

**首先**，记住一点，它要求在原数组操作，不得逾越。

**然后**，我们的思路就是：

1. 使用 `Map` 来记录 0 出现的次数。
2. 使用 `splice()` 来切割原数组。
3. 判断 `Map` 中 0 出现的次数，将 0 `push` 进数组。

**最后**，我们可以返回数组，也可以不返回数组，结束这道题题解。

* **进一步思考**：

这代码可不可以优化呢？

```js
var moveZeroes = function(nums) {
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count.push(0);
      i--;
    }
  }
  nums.push(...count);
  return nums;
};
```

Submit 提交结果为：

```js
✔ Accepted
  ✔ 21/21 cases passed (80 ms)
  ✔ Your runtime beats 97.1 % of javascript submissions
  ✔ Your memory usage beats 44.37 % of javascript submissions (35.7 MB)
```

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 冒泡排序</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j + 1] !== 0 && nums[j] === 0) {
        nums[j] = nums[j + 1];
        nums[j + 1] = 0;
      }
    }
  }

  return nums;
}
```

* **执行测试**：

1. `nums`：`[0, 1, 0, 3, 12]`
2. `return`：`[1, 3, 12, 0, 0]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 21/21 cases passed (272 ms)
  ✔ Your runtime beats 6.17 % of javascript submissions
  ✔ Your memory usage beats 34.33 % of javascript submissions (35.7 MB)
```

* **解题思路**：

**一种效率低下但仍不失为解决方案之一的方法**

冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从 A 到 Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。

在本题中：

```js
if (nums[j + 1] !== 0 && nums[j] === 0) {
  nums[j] = nums[j + 1];
  nums[j + 1] = 0;
}
```

如果当前的数字为 0，且它后面的那个数字不为 0，则把这个 0 往后移。

直到 0 都移动到了后面为止。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
189 - 旋转数组（rotate-array）
===

> Create by **jsliang** on **2019-07-08 11:44:01**  
> Recently revised in **2019-09-18 11:39:04**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 逐步移动](#chapter-three-one) |
| &emsp;[3.2 解法 - 一次到位](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/rotate-array/
* **题目内容**：

```
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 逐步移动</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
```

* **执行测试**：

1. `nums`：`[1, 2, 3, 4, 5, 6, 7]`
2. `k`：`3`
3. `return`：`[5, 6, 7, 1, 2, 3, 4]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 34/34 cases passed (124 ms)
  ✔ Your runtime beats 67.01 % of javascript submissions
  ✔ Your memory usage beats 20.6 % of javascript submissions (35.7 MB)
```

* **知识点**：

1. `unshift()`：`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。[`unshift()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/unshift.md)
2. `pop()`：`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。[`pop()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/pop.md)

* **解题思路**：

这里的思路就是逐步推进：

1. 将数组尾部的数字通过 `pop()` 给推出来
2. 往数组头部通过 `unshift()` 插入数字
3. 这样形成了一次旋转

以此往复，`k` 的值为多少，就旋转几次。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 一次到位</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var rotate = function(nums, k) {
  if (k) {
    nums.unshift(...nums.splice(nums.length - k, k))
  }
  return nums;
};
```

* **执行测试**：

1. `nums`：`[1, 2, 3, 4, 5, 6, 7]`
2. `k`：`3`
3. `return`：`[5, 6, 7, 1, 2, 3, 4]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 34/34 cases passed (96 ms)
  ✔ Your runtime beats 90.45 % of javascript submissions
  ✔ Your memory usage beats 78.3 % of javascript submissions (35.1 MB)
```

* **知识点**：

1. `unshift()`：`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。[`unshift()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/unshift.md)
2. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)

* **解题思路**：

相比于逐步推进，那么这次解法就是一次到位了。

在 `splice(开始坐标，剪切长度)` 中，我们的开始坐标是：`nums.length - k`

假如：`[1,2,3,4,5,6,7]`，那么就是 `7 - 3 = 4` 了，

我们的剪切长度即是 `k` 的长度。

这样，我们就通过两种解法解决了这道题，如果小伙伴们还有其他题解，欢迎评论留言~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
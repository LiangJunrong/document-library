268 - 缺失数字（missing-number）
===

> Create by **jsliang** on **2019-07-18 18:10:35**  
> Recently revised in **2019-07-18 18:10:38**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 转数组](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算、数组、数学
* **题目地址**：https://leetcode-cn.com/problems/missing-number/
* **题目内容**：

```
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:
输入: [3,0,1]
输出: 2

示例 2:
输入: [9,6,4,2,3,5,7,0,1]
输出: 8

说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
    if (nums[i] === i && !nums[i + 1]) {
      return i + 1;
    }
  }
};
```

* **执行测试**：

1. `nums`：`[9, 6, 4, 2, 3, 5, 7, 0, 1, 8, 11]`
2. `return`：`10`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 122/122 cases passed (156 ms)
  ✔ Your runtime beats 32.25 % of javascript submissions
  ✔ Your memory usage beats 16.29 % of javascript submissions (37.6 MB)
```

* **知识点**：

1. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/sort.md)

* **解题思路**：

**首先**，因为数组是无序的，所以对数组进行排序。同时，因为 JavaScript 的 `sort()` 方法，如果你不传参的话，对 `[9, 6, 4, 2, 3, 5, 7, 0, 1, 8, 11]` 的排序是：

```js
[ 0, 1, 11, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

所以需要 `sort((a, b) => a - b)`，得出：

```js
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 ]
```

**然后**，遍历这个数组，`index` 也是从 `0` 开始，这个数组也是从 `0` 开始，所以刚好判断 `nums[i] !== i` 的时候，我们将 `i` 给返回出去即可。

当然，LeetCode 还设置了一种情况，即 `[0]`、`[0, 1]`、`[0, 1, 2]` 这种，所以我们还需要另外一种判断：

```js
if (nums[i] === i && !nums[i + 1]) {
  return i + 1;
}
```

**最后**，我们就通过了这道题。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js

```

* **执行测试**：

1. 形参 1
2. 形参 2
3. `return`：

```js

```

* **LeetCode Submit**：

```js

```

* **知识点**：

1. 

* **解题思路**：

[图]

[分析]

* **进一步思考**：

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
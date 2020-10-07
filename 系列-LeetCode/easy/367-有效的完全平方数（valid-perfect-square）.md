367 - 有效的完全平方数（valid-perfect-square）
===

> Create by **jsliang** on **2019-07-23 16:05:55**  
> Recently revised in **2019-09-18 13:56:56**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 二分法](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学、二分查找
* **题目地址**：https://leetcode-cn.com/problems/valid-perfect-square/
* **题目内容**：

```
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：
输入：16
输出：True

示例 2：
输入：14
输出：False
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  for (let i = 1; i < num / 2 + 1; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
```

* **执行测试**：

1. `num`：`16`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 68/68 cases passed (1756 ms)
  ✔ Your runtime beats 14.34 % of javascript submissions
  ✔ Your memory usage beats 7 % of javascript submissions (34.7 MB)
```

* **解题思路**：

**最简单的想法往往是最暴力的。**

**首先**，看到题目，明晰题意，什么数符合完全平方数？

1. 由某个整数的平方得出的数。
2. 它的底数不能是 1，且大于等于 2。

> 并且，不要使用任何内置的库函数，如 `sqrt`。

**然后**，我们直接暴力解题：

```js
for (let i = 1; i < num / 2 + 1; i++) {
 if (i * i === num) {
   return true;
 }
}
return false;
```

1. 遍历一半的想法是，最小的完全平方数为 4，4 = 2 * 2。而 4 之后，它们的底数都小于它们的一半，例如 9 = 3 * 3、16 = 4 * 4……都是小于它们的一半。
2. 如果它等于 `i * i`，那么它就是一个完全平方数。

**最后**，返回相应的 `true` 或者 `false` 即可。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 二分法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  let left = 1;
  let right = num / 2 + 1;
  while (left < right) {
    let middle = Math.round((left + right) / 2);
    if (middle === right) {
      return false;
    }
    if (middle * middle < num) {
      left = middle;
    } else if (middle * middle > num) {
      right = middle;
    } else {
      return true;
    }
  }
};
```

* **执行测试**：

1. `num`：`16`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 68/68 cases passed (72 ms)
  ✔ Your runtime beats 86.82 % of javascript submissions
  ✔ Your memory usage beats 78 % of javascript submissions (33.5 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Math/README.md)

* **解题思路**：

**首先**，值得声明的是，这不是使用 `sqrt()` 直接求解，而是使用了 `Math.round()`，应该不算破坏了这道题的本意。

**然后**，我们想到使用 **二分法** 进行求解，**二分法求解** 是什么思路呢？

> 假设数字为 14。

1. 按照解法 1 的思路，我们设置限制为 `[1, 8]`（8 === 14 / 2 + 1，[1, 8] 代表闭区间）。此时，它们的中间数为 5（`Math.round(4.5)`），而 `5 * 5 > 14`，所以我们将右边数字往左移，即限制变为 `[1, 5]`。
2. 此时限制为 `[1, 5]`，它们的中间数为 3，而 `3 * 3 < 14`，所以左边数字往右移，即限制变为 `[3, 5]`。
3. 此时限制为 `[3, 5]`，它们的中间数为 4，而 `4 * 4 > 14`，所以右边数字往左移，即限制变为 `[3, 4]`。
4. 此时限制为 `[3, 4]`，它们的中间数为 4，因为它跟右边限制相同了（即接下来它会无限循环，达到了二分最佳值），所以我们可以判断这个数不是完全平方数（`return false`）。

> 如果小伙伴有兴趣，可以想想 16 的二分判断。

**最后**，我们成功使用二分法求解。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
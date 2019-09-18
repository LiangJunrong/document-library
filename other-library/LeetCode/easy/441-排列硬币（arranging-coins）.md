441 - 排列硬币（arranging-coins）
===

> Create by **jsliang** on **2019-07-29 16:15:53**  
> Recently revised in **2019-09-18 14:07:32**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 二分查找](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学、二分查找
* **题目地址**：https://leetcode-cn.com/problems/arranging-coins/
* **题目内容**：

```
你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

给定一个数字 n，找出可形成完整阶梯行的总行数。

n 是一个非负整数，并且在32位有符号整型的范围内。

示例 1:

n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.

示例 2:

n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var arrangeCoins = function(n) {
  let k = 0;
  while (n > 0) {
    k++;
    n = n - k;
  }
  return n === 0 ? k : k - 1;
};
```

* **执行测试**：

1. `n`：`5`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1336/1336 cases passed (140 ms)
  ✔ Your runtime beats 44.3 % of javascript submissions
  ✔ Your memory usage beats 65.75 % of javascript submissions (36 MB)
```

* **解题思路**：

**首先**，拿到题目，心中有了两种方案：

1. 暴力破解法
2. 二分查找法

**然后**，想了下 LeetCode 的尿性，暴力破解法不行的吧？

尝试了一下：

```js
var arrangeCoins = function(n) {
  let k = 0;
  while (n > 0) {
    k++;
    n = n - k;
  }
  return n === 0 ? k : k - 1;
};
```

Submit 提交：

```js
✔ Accepted
  ✔ 1336/1336 cases passed (140 ms)
  ✔ Your runtime beats 44.3 % of javascript submissions
  ✔ Your memory usage beats 65.75 % of javascript submissions (36 MB)
```

咳咳，居然还是成功的~

**最后**，讲解下暴力思路：

* 设置 `k` 为行数。
* 循环 `n`，直到 `n` 小于或者等于 0 为止。
* 每次循环，`k + 1`，同时 `n` 减去 `k`（因为第 `k` 行有 `k` 个硬币）。
* 最后看 `n` 是否为 0，如果是则刚好，返回 `k`，如果不是则返回 `k - 1`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 二分查找</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var arrangeCoins = function(n) {
  if (!n) {
    return 0;
  }
  // 第 k 行的结果值为 k * (k + 1) / 2
  let sum = n * 2;
  let left = 0;
  let right = n;
  while (n) {
    let middle = Math.round((left + right) / 2);
    if (middle * (middle + 1) === sum) {
      return middle;
    } else if (middle * (middle + 1) < sum) {
      left = middle;
    } else {
      right = middle;
    }
    if (left === right - 1) {
      return left;
    }
  }
};
```

* **执行测试**：

1. `n`：`5`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1336/1336 cases passed (104 ms)
  ✔ Your runtime beats 95.97 % of javascript submissions
  ✔ Your memory usage beats 5.48 % of javascript submissions (37.2 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**首先**，在上面我们讲到了两种解法，解法 1 的暴力破解我们尝试过了，现在讲下二分查找方法。

**然后**，我们需要掺杂点数学知识：

* 计算第 `k` 行的结果公式为：`k * (k + 1) / 2`

什么意思呢？

```js
k = 1
sum = 1 * (1 + 1) / 2 = 1

k = 2
sum = 2 * (2 + 1) / 2 = 3

k = 3
sum = 3 * (3 + 1) / 2 = 6

k...
sum...
```

不要问我怎么知道的，我也忘记怎么推导的，但是脑海中记得小学就搞过这条规律，初中/高中的二元一次方式求过解。

那么，用二分查找法来推导，要怎么搞呢？

```js
var arrangeCoins = function(n) {
  if (!n) {
    return 0;
  }
  // 第 k 行的结果值为 k * (k + 1) / 2
  let sum = n * 2;
  let left = 0;
  let right = n;
  while (n) {
    let middle = Math.round((left + right) / 2);
    if (middle * (middle + 1) === sum) {
      return middle;
    } else if (middle * (middle + 1) < sum) {
      left = middle;
    } else {
      right = middle;
    }
    if (left === right - 1) {
      return left;
    }
  }
};
```

如上所示，即二分查找法求解。

**最后**，我们通过两种方法成功破解了本题。

* **进一步思考**：

**还有没有其他方法呢？相信你有更好的求解！**

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
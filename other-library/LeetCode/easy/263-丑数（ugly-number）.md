263 - 丑数（ugly-number）
===

> Create by **jsliang** on **2019-07-18 17:15:35**  
> Recently revised in **2019-07-18 17:42:39**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/ugly-number/
* **题目内容**：

```
编写一个程序判断给定的数是否为丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。

示例 1:
输入: 6
输出: true
解释: 6 = 2 × 3

示例 2:
输入: 8
输出: true
解释: 8 = 2 × 2 × 2

示例 3:
输入: 14
输出: false 
解释: 14 不是丑数，因为它包含了另外一个质因数 7。

说明：
1 是丑数。
输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 数学</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isUgly = function(num) {
  if (!num) {
    return false;
  }
  while (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    if (num % 2 === 0) {
      num = num / 2;
    }
    if (num % 3 === 0) {
      num = num / 3;
    }
    if (num % 5 === 0) {
      num = num / 5;
    }
  }
  if (num === 1) {
    return true;
  }
  if (num !== 2 || num !== 3 || num !== 5) {
    return false;
  }
  return true;
};
```

* **执行测试**：

1. `num`：`14`
2. `return`：`false`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1012/1012 cases passed (92 ms)
  ✔ Your runtime beats 94.63 % of javascript submissions
  ✔ Your memory usage beats 43.01 % of javascript submissions (35.4 MB)
```

* **解题思路**：

**最复杂的思路，有可能是你最原始的思路**。

**首先**，虽然我这个题解可能复杂，但是我觉得我开始的思维是极其简单的。

1. 如果这个 `num === 0`，那么它不是丑数。
2. 如果这个数 `% 2 === 0` 或者 `% 3 === 0` 或者 `%5 === 0`，那么证明这个数是 2/3/5 的公倍数，那么我们就将它除于 `2/3/5`，同时这个数还可能是丑数。（例如 30 / 2 = 15，15 可能是丑数，所以可以继续循环）
3. 循环这个数，直到它不能 `%2`、`%3` 或者 `%5` 得出的结果为 0。
4. `while` 后，这个数已经不能整除 2/3/5 了，所以我们最终判断它的值为多少。如果是 2/3/5，表明它是丑数；如果不是，则它不是丑数。

```js
var isUgly = function(num) {
  if (!num) {
    return false;
  }
  while (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    if (num % 2 === 0) {
      num = num / 2;
    }
    if (num % 3 === 0) {
      num = num / 3;
    }
    if (num % 5 === 0) {
      num = num / 5;
    }
  }
  if (num === 1) {
    return true;
  }
  if (num !== 2 || num !== 3 || num !== 5) {
    return false;
  }
  return true;
};
```

**最后**，将结果值返回出去。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isUgly = function (num) {
  var list = [1, 2, 3, 5];

  if (num <= 0) {
    return false;
  }

  if (list.includes(num)) {
    return true;
  } else {
    for (li in list) {
      if (num % list[li] === 0 && list[li] !== 1) {
        return isUgly(num / list[li]);
      }
    }
  }

  return false;
};
```

* **执行测试**：

1. `num`：`14`
2. `return`：`false`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1012/1012 cases passed (104 ms)
  ✔ Your runtime beats 76.45 % of javascript submissions
  ✔ Your memory usage beats 7.53 % of javascript submissions (35.8 MB)
```

* **知识点**：

1. `includes()`：`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。[`reduce()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/includes.md)

* **解题思路**：

判断这个数，是否属于 1、2、3、5，如果不属于，则按照丑数规则进行递归，最后返回这个数的结果即可。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
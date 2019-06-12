066 - 加一（plus-one）
===

> Create by **jsliang** on **2019-06-11 07:52:37**  
> Recently revised in **2019-06-11 08:48:21**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 数学运算](#chapter-three-one) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/plus-one/
* **题目内容**：

```
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。

示例 2:
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 数学运算</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >=0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10;
    if (digits[i] > 0) {
      return digits;
    }
  }
  return [1, ...digits];
};
```

* **执行测试**：

1. `digits`：`[9, 9, 9]`
2. `return`：

```js
[1, 0, 0, 0]
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 109/109 cases passed (76 ms)
  √ Your runtime beats 94.21 % of javascript submissions
  √ Your memory usage beats 46.4 % of javascript submissions (33.7 MB)
```

* **解题思路**：

看到题目，一开始 **jsliang** 觉得 so easy 啦，于是：

```js
var plusOne = function(digits) {
  return String(Number(digits.join('')) + 1).split('');
};
```

然后它告诉我报错了：

```js
× Wrong Answer
  × 69/109 cases passed (N/A)
  × testcase: '[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]'
  × answer: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
  × expected_answer: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
  × stdout:
```

发愣了几秒，于是我百度了下 JS 的最大值：`9007199254740992`（16 位数），而测试需要计算的数字为：`6145390195186705543`（19 位数）。

众所周知，JS 超过最大值后，计算会出现不精确的问题，因此 `6145390195186705543 + 1` 后会出现答案：`6145390195186705000`。

所以想了另外一个法子：

```js
var plusOne = function(digits) {
  if (digits[digits.length - 1] === 9) {
    return String(Number(digits.join('')) + 1).split('');
  }
  digits[digits.length - 1] = digits[digits.length - 1] + 1;
  return digits;
};
```

这个法子，对末尾是 `9` 的进行转字符串再转数字，加一后再转字符串并转成数组。对末尾不是 `9` 的，直接进行后面一位的操作。

我以为我能过，结果还是：so naive!

```js
× Wrong Answer
  × 104/109 cases passed (N/A)
  × testcase: '[5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]'
  × answer: [5,NaN,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,NaN,NaN,2,8]
  × expected_answer: [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,9,0]
  × stdout:
```

还是输在了 JS 超过最大值的位置。

只能认输，寻求题解：

```js
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >=0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10;
    if (digits[i] > 0) {
      return digits;
    }
  }
  return [1, ...digits];
};
```

> [题解](https://leetcode-cn.com/problems/plus-one/solution/java-shu-xue-jie-ti-by-yhhzw/) 中使用的是 Java 解题思路，不过无大碍，转换成 JavaScript 就行了。

那么它这个什么意思呢？

**首先**，末尾开始遍历，正常情况下直到 `i` 小于 `0` 的时候终止循环。

**然后**，当碰到 `111`、`236` 这类末尾非 `9` 的情况时。

1. 我们会先让其 `(末位 + 1) % 10`。因为我们知道，`1` 至 `9` 中任意的数 `% 10`，得到的答案还是 `1 - 9`，但是 `10 % 10`，得到的答案是 `0` ！
2. 所以当 `111`、`236` 这种情况，末尾数字 `(1 + 1) % 10`、`(6 + 1) % 10` 后，得到的数字 `2` 和 `7` 会大于 `0`。因为它大于 `0` ，所以我们直接 `return` 出来即可。
3. 综上，小伙伴们可以先想想 `989` 的计算情况。

**最后**，当碰到 `999` 这类情况时。循环会执行到最后一位，因为它是极致情况，最后遍历出来的是 `[0, 0, 0]`，这时候，我们只需要往数组首位添加一个 `1` 即可，所以我们使用 ES6 的 `[...]` 扩展运算符来快速达到我们的目的。

> 如何使用 `unshift()` 方法来添加？

```js
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >=0; i--) {
    digits[i]++;
    digits[i] = digits[i] % 10;
    if (digits[i] > 0) {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
```

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
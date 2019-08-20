008 - 字符串转换整数（string-to-integer-atoi）
===

> Create by **jsliang** on **2019-8-21 07:33:59**  
> Recently revised in **2019-8-21 07:47:46**

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

* **难度**：中等
* **涉及知识**：数字、字符串
* **题目地址**：https://leetcode-cn.com/problems/string-to-integer-atoi/
* **题目内容**：

```
请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，qing返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

示例 1:
输入: "42"
输出: 42

示例 2:
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。

示例 3:
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。

示例 4:
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。

示例 5:
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const myAtoi = function(str) {
  const result = str.trim().match(/^(-|\+)?\d+/g);
  return result
    ? Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31))
    : 0;
};
```

* **执行测试**：

1. `str`：`   -42`
2. `return`：

```js
-42
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 1079/1079 cases passed (100 ms)
  √ Your runtime beats 88.01 % of javascript submissions
  √ Your memory usage beats 45.24 % of javascript submissions (35.9 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)

* **解题思路**：

**jsliang** 懂一点点正则，但是自己又写不出，只能求助于【题解】的大佬了：

1. 使用正则提取满足条件的字符，`/^(-|\+)?\d+/g`，`(-|\+)?` 表示第一位是 - 或 + 或都不是，`\d+` 表示匹配多个数字。
2. `Math.max(Math.min(Number(result[0]), 2 ** 31 - 1), -(2 ** 31))` 是 `- 2 ** 31 < num < 2 ** 31 - 1` 的js写法，保证不超出范围。

这道题考验的是一种设计能力，毕竟如果使用正常的 JavaScript 编写，是比较麻烦的（去空格以及匹配数字）。

所以咱们实在不懂的，过一下就行了，下次如果面试，希望是原题吧。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var myAtoi = function(s) {
  let i = 0,
    reg = /\d|[+-]/;
  let sign = "+",
    arr = [];
  let INT_MAX = 2 ** 31 - 1,
    INT_MIN = -(2 ** 31); //模拟数值极限,实际上js中只有64位浮点数
  while (s[i] === " ") {
    ++i; //跳过首部的所有空字符
  }
  let firstChar = s[i];
  if (!reg.test(firstChar)) return 0; //首个非空字符不是数字或者正负号
  if (firstChar === "+" || firstChar === "-") {
    sign = firstChar;
    ++i; //记录并跳过正负号
  }
  while (/\d/.test(s[i])) {
    let num = s[i].charCodeAt() - 48; //字符"0-9"的charCode: 48-57,这里用字符编码计算出字符对应的数值;
    arr.push(num); //记录有效的连续数字
    ++i;
  }
  let res = 0,
    over = sign === "+" ? 7 : 8;
  for (let index = 0; index < arr.length; ++index) {
    let item = arr[index]; //当前数字
    let pow = arr.length - 1 - index; //10的指数
    let step = item * 10 ** pow; //即将累加到结果中的数值
    if (
      res - (res % 10) > 2147483640 ||
      (res - (res % 10) === 2147483640 && step > over)
    )
      return sign === "+" ? INT_MAX : INT_MIN;
    //注意题目的假设条件:环境仅支持32位带符号的整数,所以这一步是在溢出前 用max_int除以10来比较,以防止结果溢出
    //很多人无视这个限制,先溢出再比较,这是不对的,因为按照题目意思,溢出后的数值是无法表达的,也就无法得知是否溢出了,只能提前判断.
    res += item * 10 ** pow; //结果累加
  }
  return sign === "+" ? res : -res;
};
```

* **执行测试**：

1. `str`：`   -42`
2. `return`：

```js
-42
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 1079/1079 cases passed (116 ms)
  √ Your runtime beats 50.81 % of javascript submissions
  √ Your memory usage beats 20.84 % of javascript submissions (36.6 MB)
```

* **知识点**：

1. `charCodeAt()`：`charCodeAt()` 获得字母对应的 ASCII 编码，例如 A - 65。[`charCodeAt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/charCodeAt.md)
2. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)

* **解题思路**：

正如前面所说，如果使用暴力破解，你会感到：**难受**。

小伙伴们可以瞅瞅这题的暴力解法，体会下这句话。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
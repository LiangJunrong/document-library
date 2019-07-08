190 - 颠倒二进制位（reverse-bit）
===

> Create by **jsliang** on **2019-07-08 14:04:54**  
> Recently revised in **2019-07-08 14:04:57**

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
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步拓展](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算
* **题目地址**：https://leetcode-cn.com/problems/reverse-bits/
* **题目内容**：

```
颠倒给定的 32 位无符号整数的二进制位。

示例 1：
输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。

示例 2：
输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。
 

提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。
在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现。
因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。
因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。

进阶:
如果多次调用这个函数，你将如何优化你的算法？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var reverseBits = function (n) {
  return parseInt((n).toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `n`：`10111100`
2. `return`：`1041389824`

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 600/600 cases passed (140 ms)
  ✔ Your runtime beats 26.29 % of javascript submissions
  ✔ Your memory usage beats 88.23 % of javascript submissions (35.5 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. parseInt
2. toString
3. padStart
4. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
5. `reverse()`：`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。[`reverse()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/reverse.md)
6. `join()`：`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`join()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/join.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**曾经有一份真诚摆在我面前，到最后才发现，原来是笑里藏刀。**

一开始 **jsliang** 的题解是：

```js
var reverseBits = function(n) {
  n = parseInt(parseInt(n, 2).toString().split('').reverse()).toString(2);
  return n;
};
```

比如输入：`10111100`，然后输出：`1000`，但是测试用例却是：

```js
✘ Wrong Answer
  ✘ 1/600 cases passed (N/A)
  ✘ testcase: '00000010100101000001111010011100'
  ✘ answer:          NaN (00000000000000000000000000000NaN)
  ✘ expected_answer:    964176192 (00111001011110000010100101000000)
  ✘ stdout:
```

该死的超限！！！

> 虽然我代码本身就是错的，哭唧唧

## <a name="chapter-eight" id="chapter-eight">八 进一步拓展</a>

> [返回目录](#chapter-one)

最后的最后，发现一份正经的题解，小伙伴们可以瞅瞅，我就不多逼逼啦~

```js
var reverseBits = function (n) {
  var newN = 0,
    count = 0;
  while (count <= 31) {
    if (count <= 30) {
      newN += ((n & 1) << (30 - count)) * 2;
    } else {
      newN += (n & 1);
    }
    n >>= 1;
    count++;
  }
  return newN;
};
```

```js
✔ Accepted
  ✔ 600/600 cases passed (84 ms)
  ✔ Your runtime beats 99.2 % of javascript submissions
  ✔ Your memory usage beats 22.35 % of javascript submissions (36.1 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
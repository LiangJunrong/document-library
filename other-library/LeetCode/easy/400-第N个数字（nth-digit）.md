400 - 第N个数字（nth-digit）
===

> Create by **jsliang** on **2019-7-24 07:48:12**  
> Recently revised in **2019-7-24 08:12:27**

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
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/nth-digit/
* **题目内容**：

```
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:
输入:
3
输出:
3

示例 2:
输入:
11
输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var findNthDigit = function(n) {
  if (n < 10) return n;
  let length = 0,
    cnt = 9,
    i = 1;
  for (; length + cnt * i < n; i++) {
    length += cnt * i;
    cnt *= 10;
  }
  let num = Math.pow(10, i - 1) - 1 + (n - length + 1) / i;
  let index = (n - length - 1) % i;

  return String(num)[index] - '0';
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `n`：`11`
2. `return`：

```js
0
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 70/70 cases passed (96 ms)
  √ Your runtime beats 24.07 % of javascript submissions
  √ Your memory usage beats 6.67 % of javascript submissions (34.2 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)
2. `String`：将其他值转成字符串。[`String` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/String.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**目测第一眼，估计我又不会了！**

**首先**，这是人做的题吗，第一眼看下去，不会……

回头看看题解和评论区，还是不会……

例子也少，3 返回 3，11 返回 0，这是神马鬼套路啊！！！

**然后**，看到大佬的题解和注释：

```js
var findNthDigit = function(n) {
  if (n < 10) return n;
  let length = 0,
    cnt = 9,
    i = 1;
  for (; length + cnt * i < n; i++) {
    length += cnt * i;
    cnt *= 10;
  }
  let num = Math.pow(10, i - 1) - 1 + (n - length + 1) / i;
  let index = (n - length - 1) % i;

  return String(num)[index] - '0';
};
```

> 注释：

```
长度为 1 的数字，[1,9] 共有 9 个数字，总字符串长度为 9 * 1 = 9。
长度为 2 的数字，[10,99] 一共 90 个数字，总字符串长度为 90 *2 = 180。
长度为 i 的数字，[pow(10, i - 1), pow(10, i)]，一共 9 * pow(10,i - 1) 个数，总字符串长度为 9 * pow(10, i - 1) * i。

然后确定 n 所处的数字的位数，返回 n 对应的位置即可。
```

**最后**，我把评论区 90 多道题解分析看完了，也没明白题意。大致有两点：

1. 它们之间存在规律。
2. 它们做了范围限制。

就此剧终……

> 内心：mmp……

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

有时候我们不得不怀疑，究竟是题出的太难，还是我们智商不够，没有第一时间了解题目。

所以，碰上这类题，还是当做智商题，扩宽视野吧！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
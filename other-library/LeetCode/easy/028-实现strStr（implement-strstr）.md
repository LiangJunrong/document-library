028 - 实现strStr（implement-strstr）
===

> Create by **jsliang** on **2019-06-06 19:34:22**  
> Recently revised in **2019-6-10 08:57:32**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - indexOf()](#chapter-three-one) |
| &emsp;[3.2 解法 - substring()](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：双指针、字符串
* **题目地址**：https://leetcode-cn.com/problems/implement-strstr/
* **题目内容**：

```
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2

示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1

说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - indexOf()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
```

* **执行测试**：

1. `haystack`：`hello`
2. `needle`：`ll`
3. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 74/74 cases passed (76 ms)
  ✔ Your runtime beats 95.5 % of javascript submissions
  ✔ Your memory usage beats 38.43 % of javascript submissions (34.2 MB)
```

* **知识点**：

1. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)

* **解题思路**：

破解的最快思路，帅的嘛就不谈了，直接使用 JS 内置方法……

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - substring()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var strStr = function(haystack, needle) {
  if (!haystack && !needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
```

* **执行测试**：

1. `haystack`：`hello`
2. `needle`：`ll`
3. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 74/74 cases passed (76 ms)
  ✔ Your runtime beats 95.5 % of javascript submissions
  ✔ Your memory usage beats 9.51 % of javascript submissions (35.8 MB)
```

* **知识点**：

1. `substring()`：`substring()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`substring()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/substring.md)

* **解题思路**：

这道题讲点道理，还是有双指针的影子在里面的，所以用 `substring` 又做了一遍：

1. 判断 `haystack` 和 `needle` 是否为空，为空返回 0。
2. 遍历 `haystack`，判断 `haystack` 中某个字符串是不是等于 `needle` 的第一个字符串。
3. 如果相等，则从 `i` 开始，判断 `haystack` 中的 `i + needle.length` 位是否等于 `needle`，是则返回对应的坐标 `i`。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
344 - 反转字符串（reverse-string）
===

> Create by **jsliang** on **2019-07-22 19:06:50**  
> Recently revised in **2019-09-18 13:53:43**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：双指针、字符串
* **题目地址**：https://leetcode-cn.com/problems/reverse-string/
* **题目内容**：

```
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var reverseString = function(s) {
  return s.reverse();
};
```

* **执行测试**：

1. `s`：`['h', 'e', 'l', 'l', 'o']`
2. `return`：

```js
['o', 'l', 'l', 'e', 'h']
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 478/478 cases passed (168 ms)
  ✔ Your runtime beats 92.8 % of javascript submissions
  ✔ Your memory usage beats 22.13 % of javascript submissions (47 MB)
```

* **知识点**：

1. `reverse()`：`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。[`reverse()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/reverse.md)

* **解题思路**：

**看到这道题的第一眼，我就觉得非常熟悉，我是否曾经做过？**

然后我仔细审了下题：反转数组、原地操作。

所以我直接上了代码：

```js
var reverseString = function(s) {
  return s.reverse();
};
```

最后就告诉我提交成功了，enm...是我变强了还是 LeetCode 的简单类型的题目重复了？

* **进一步思考**：

如果不使用 JS 原生 API，有其他解法吗？

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var reverseString = function(s) {
  for (let i = 0; i < (s.length - 1) / 2; i++) {
    let temp = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
  return s;
};
```

* **执行测试**：

1. `s`：`['h', 'e', 'l', 'l', 'o']`
2. `return`：

```js
['o', 'l', 'l', 'e', 'h']
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 478/478 cases passed (152 ms)
  ✔ Your runtime beats 98.85 % of javascript submissions
  ✔ Your memory usage beats 65.2 % of javascript submissions (46.6 MB)
```

* **解题思路**：

**首先**，我们想到头尾调转。

当我们有数组：`['0', '1', '2', '3', '4']` 的时候，我们需要调转的是：

* `'0'` 和 `'4'`
* `'1'` 和 `'3'`

**然后**，它们转换成编程来讲，即是：

* `'0'` 和 `'4'`：`i === 0`，`j === s.length - 1 - i`
* `'1'` 和 `'3'`：`i === 1`，`j === s.length - 1 - i`

OK，顺势推导，我们就可以完成这道题的题解。

**最后**，返回不返回 `s` 都是 OK 的，因为它要求的是原地遍历，最终 LeetCode 会取传进去的参数 `s` 进行查看。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
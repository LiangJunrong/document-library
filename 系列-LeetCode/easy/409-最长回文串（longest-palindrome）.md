409 - 最长回文串（longest-palindrome）
===

> Create by **jsliang** on **2019-07-25 14:47:11**  
> Recently revised in **2019-09-18 14:02:24**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - Set](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/longest-palindrome/
* **题目内容**：

```
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

注意:
假设字符串的长度不会超过 1010。

示例 1:
输入:
"abccccdd"
输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var longestPalindrome = function(s) {
  s = s.split('');
  let map = new Map();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      map.delete(s[i]);
      result += 2;
    } else {
      map.set(s[i], 1);
    }
  }
  return map.size ? result + 1 : result;
};
```

* **执行测试**：

1. `s`：`abccccdd`
2. `return`：

```js
7
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 95/95 cases passed (88 ms)
  ✔ Your runtime beats 86.93 % of javascript submissions
  ✔ Your memory usage beats 37.14 % of javascript submissions (35.6 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**首先**，我们解析下怎么的字符串能构成回文串：

1. 这个字母有两个，这样可以左右对称，例如：`abba`。
2. 这个字母可能有一个尾巴，作为中间对称点，例如：`abcba`。

**那么**，我们将字符串切换成数组，通过一个 `Map` 来记录字母出现的情况。

1. 遍历数组。
2. 如果 `Map` 中不包含数组出现的元素，那么我们将其出现的次数记为 1。
3. 如果 `Map` 中包含数组出现的元素，那么它的次数肯定是 1，所以回文串的长度 `result` 可以 + 2，同时清空掉这个元素。

```js
var longestPalindrome = function(s) {
  s = s.split('');
  let map = new Map();
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      map.delete(s[i]);
      result += 2;
    } else {
      map.set(s[i], 1);
    }
  }
  return map.size ? result + 1 : result;
};
```

**最后**，我们判断剩下的 `Map` 是否还有元素，如果存在，说明可以带一个尾巴，即 `result + 1`，如果不存在，则直接返回 `result`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Set</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var longestPalindrome = function (s) {
  let result = 0;
  let set = new Set();
  for (const str of s) {
    if (set.has(str)) {
      set.delete(str);
      result += 2;
    } else {
      set.add(str);
    }
  }
  return result + (set.size ? 1 : 0);
};
```

* **执行测试**：

1. `s`：`abccccdd`
2. `return`：

```js
7
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 95/95 cases passed (76 ms)
  ✔ Your runtime beats 94.77 % of javascript submissions
  ✔ Your memory usage beats 21.43 % of javascript submissions (36.1 MB)
```

* **知识点**：

1. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Set/README.md)

* **解题思路**：

**你能通过 Map 实现的，也可能通过 Set 实现，唯有尝试了，才能获得乐趣。**

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
387 - 字符串中的第一个唯一字符（first-unique-character-in-a-string）
===

> Create by **jsliang** on **2019-07-23 19:41:13**  
> Recently revised in **2019-09-18 13:58:52**

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

* **难度**：简单
* **涉及知识**：哈希表、字符串
* **题目地址**：https://leetcode-cn.com/problems/first-unique-character-in-a-string/
* **题目内容**：

```
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.

注意事项：您可以假定该字符串只包含小写字母。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
```

* **执行测试**：

1. `s`：`loveleetcode`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 104/104 cases passed (96 ms)
  ✔ Your runtime beats 98.03 % of javascript submissions
  ✔ Your memory usage beats 59.76 % of javascript submissions (37.7 MB)
```

* **知识点**：

1. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/indexOf.md)

* **解题思路**：

**首先**，如果小伙伴们有印象的话，我们在 [`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/indexOf.md) 中有进行讲解，查找字母出现的一个位置用 `indexOf()`，查找字母出现的最后一个位置，使用 `lastIndexOf()`。

**那么**，我们就有思路破解本题了：

1. 如果出现的第一个位置和出现的最后一个位置相同，那么就是唯一的，返回 `i`。
2. 如果都不是相同的，说明没有唯一值，返回 `-1`。

**这样**，我们就完成了本题题解。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var firstUniqChar = function (s) {
  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i]) == 1) {
      return i;
    }
  }
  return -1;
};
```

* **执行测试**：

1. `s`：`loveleetcode`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 104/104 cases passed (208 ms)
  ✔ Your runtime beats 24.4 % of javascript submissions
  ✔ Your memory usage beats 83.06 % of javascript submissions (37.4 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**首先**，经过 n 次的 `Map` 洗礼后，小伙伴们应该对 `Map` 不陌生了。

**然后**，我们还是讲讲思路：

1. 遍历一遍数组，将数组的元素及其出现次数添加到 `Map` 中。
2. 遍历一遍 `Map`，判断这个元素是否出现次数为 `1`，如果是，则返回对应的索引值。

**最后**，如果都不存在，则返回题目要求的 -1。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
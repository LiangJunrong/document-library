205 - 同构字符串（isomorphic-strings）
===

> Create by **jsliang** on **2019-07-12 18:40:54**  
> Recently revised in **2019-07-12 19:29:09**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map()](#chapter-three-one) |
| &emsp;[3.2 解法 - indexOf()](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/isomorphic-strings/
* **题目内容**：

```
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:
输入: s = "egg", t = "add"
输出: true

示例 2:
输入: s = "foo", t = "bar"
输出: false

示例 3:
输入: s = "paper", t = "title"
输出: true

说明:
你可以假设 s 和 t 具有相同的长度。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isIsomorphic = function(s, t) {
  let sMap = new Map(); // 记录 s 哈希表
  let tMap = new Map(); // 记录 t 哈希表
  let sFlag = 0;
  let tFlag = 0;
  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i])) {
      s[i] = sMap.get(s[i]);
    } else {
      sFlag++;
      sMap.set(s[i], sFlag);
      s[i] = sFlag;
    }
    if (tMap.get(t[i])) {
      t[i] = tMap.get(t[i]);
    } else {
      tFlag++;
      tMap.set(t[i], tFlag);
      t[i] = tFlag;
    }
    if (sMap.get(s[i]) !== tMap.get(t[i])) {
      return false;
    }
  }
  return true;
};
```

* **执行测试**：

1. `s`：`ab`
2. `t`：`ac`
3. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 30/30 cases passed (116 ms)
  ✔ Your runtime beats 44.62 % of javascript submissions
  ✔ Your memory usage beats 17.35 % of javascript submissions (39.8 MB)
```

* **知识点**：

1. `map()`：遍历数组，`item` 返回遍历项，`index` 返回当前索引。[`map()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/map.md)

* **解题思路**：

**最愚蠢的就是老想着奇技淫巧**。

**首先**，我们分两个 `Map()` 记录哈希表（如果只有一个 `Map()`，碰到 `ab` 和 `ac` 这种组合的时候会挂），使用 `sFlag` 和 `tFlag` 来表示这个字符是否重复出现。

**然后**，我们判断 `s` 的 `Map()` 和 `t` 的 `Map()` 是否有已经出现的字符串，如果出现，则直接设置值；如果没出现，则先设置下 `Map()` 值，再设置下这个位置的值。

**最后**，判断这两个值是否相同，相同则是 `true`，否则是 `false`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - indexOf()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }
  return true;
};
```

* **执行测试**：

1. `s`：`ab`
2. `t`：`ac`
3. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 30/30 cases passed (84 ms)
  ✔ Your runtime beats 93.08 % of javascript submissions
  ✔ Your memory usage beats 92.86 % of javascript submissions (35 MB)
```

* **知识点**：

1. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)

* **解题思路**：

**人比人，气死人**。

大佬思想：因为 `indexOf` 会返回遍历这个字符串的遇到一个第一个指定值的下标，所以判断两个下标是否一样即可。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
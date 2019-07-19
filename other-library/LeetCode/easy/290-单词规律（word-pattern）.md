290 - 单词规律（word-pattern）
===

> Create by **jsliang** on **2019-07-19 15:23:43**  
> Recently revised in **2019-07-19 16:17:43**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - Map * 2](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/word-pattern/
* **题目内容**：

```
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配。
例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:
输入: pattern = "abba", str = "dog cat cat dog"
输出: true

示例 2:
输入:pattern = "abba", str = "dog cat cat fish"
输出: false

示例 3:
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false

示例 4:
输入: pattern = "abba", str = "dog dog dog dog"
输出: false

说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var wordPattern = function(pattern, str) {
  pattern  = pattern.split('');
  str = str.split(' ');
  if (pattern.length !== str.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    // 如果存在值，但是对应的值跟哈希表中不一致，则规律不对
    if (map.get(str[i]) && map.get(str[i]) !== pattern[i]) {
      return false;
    }
    // 如果不存在值，但是对应的值的索引不是当前索引，则规律不对
    if (map.get(str[i]) === undefined && pattern.indexOf(pattern[i]) !== i) {
      return false;
    }
    map.set(str[i], pattern[i]);
  }
  return true;
};
```

* **执行测试**：

1. `pattern`：`abba`
2. `str`：`dog cat cat fish`
3. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 33/33 cases passed (72 ms)
  ✔ Your runtime beats 94.66 % of javascript submissions
  ✔ Your memory usage beats 75.9 % of javascript submissions (33.5 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)
3. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)

* **解题思路**：

**代码很长，我们细细分割**。

```js
var wordPattern = function(pattern, str) {
  pattern  = pattern.split('');
  str = str.split(' ');
  if (pattern.length !== str.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    // 如果存在值，但是对应的值跟哈希表中不一致，则规律不对
    if (map.get(str[i]) && map.get(str[i]) !== pattern[i]) {
      return false;
    }
    // 如果不存在值，但是对应的值的索引不是当前索引，则规律不对
    if (map.get(str[i]) === undefined && pattern.indexOf(pattern[i]) !== i) {
      return false;
    }
    map.set(str[i], pattern[i]);
  }
  return true;
};
```

**首先**，将 `pattern` 和 `str` 切割成数组。

> pattern: abba - > ['a', 'b', 'c', 'a']  
> str：dog cat cat fish -> ['dog', 'cat', 'cat', 'fish']

判断这两者的长度是否一致，如果不一致，那肯定不是有规律的单词，例如：

> pattern: jquery -> ['j', 'q', 'u', 'e', 'r', 'y']  
> str：jquery -> ['jquery']

这样肯定是不正确的。

**然后**，进行遍历。

1. 如果存在值，但是对应的值跟哈希表中存在的不一致，则规律不对。例如上面第 2 个（index 位置）的 `cat` 对应的是 `c`，但是 `Map` 中存的 `cat` 是 `b`，那么肯定返回 `false`。
2. 如果不存在值，但是对应的值的索引跟当前不一致，则规律不对。例如上面第 3 个（index 位置）的 `fish` 对应的是 `a`，但是 `pattern` 中对应 `a` 出现的位置是 0，所以它肯定也不是规律的单词，所以返回 `false`。
3. 其他情况则正常设置 `str[i]` 对应到 `pattern[i]` 上。

**最后**，如果这个词没有毛病，那么它就是有规律的词，返回 `true`。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map * 2</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var wordPattern = function (pattern, str) {
  var arr = str.split(' ');
  if (arr.length !== pattern.length) {
    return false;
  }
  var map = new Map();
  var map2 = new Map();
  for (var i = 0; i < pattern.length; i++) {
    map.set(pattern[i], arr[i]);
    map2.set(arr[i], pattern[i]);
  }
  for (var j = 0; j < pattern.length; j++) {
    if (map.get(pattern[j]) !== arr[j]) {
      return false;
    }
    if (map2.get(arr[j]) !== pattern[j]) {
      return false;
    }
  }
  return true;
};
```

* **执行测试**：

1. `pattern`：`abba`
2. `str`：`dog cat cat fish`
3. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 33/33 cases passed (76 ms)
  ✔ Your runtime beats 85.44 % of javascript submissions
  ✔ Your memory usage beats 19.28 % of javascript submissions (33.7 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)

* **解题思路**：

**双倍的 Map 是不是双倍的快乐？**

如果小伙伴仔细看了 **jsliang** 单个 `Map` 的解法，那么，再查看大佬这个两个 `Map` 的解法应该是可以搞通的。（说不定理解起来比看 **jsliang** 单个 `Map` 解法更清晰）

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
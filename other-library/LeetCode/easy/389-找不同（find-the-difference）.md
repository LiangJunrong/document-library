389 - 找不同（find-the-difference）
===

> Create by **jsliang** on **2019-7-23 22:05:48**  
> Recently revised in **2019-09-18 14:00:07**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - Map](#chapter-three-two) |
| &emsp;[3.3 解法 - 奇技淫巧](#chapter-three-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算、哈希表
* **题目地址**：https://leetcode-cn.com/problems/find-the-difference/
* **题目内容**：

```
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var findTheDifference = function(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      return t[i];
    }
  }
};
```

* **执行测试**：

1. `s`：`ae`
2. `t`：`aea`
3. `return`：

```js
a
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 54/54 cases passed (88 ms)
  √ Your runtime beats 84.81 % of javascript submissions
  √ Your memory usage beats 76.09 % of javascript submissions (35.2 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)

* **解题思路**：

**首先**，先将 `s` 和 `t` 切割成数组并排序。

**然后**，遍历最长的数组（即 `t`，因为 `t` 是 `s` 的变形），判断同一个坐标下，两个数组的元素是否相同。

**最后**，如果不同则返回 `t[i]`，因为 `t` 比 `s` 长，如果不同的时候，例如 `ae` 和 `aae`，相对的应该是 `t[i]` 不同的。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var findTheDifference = function(s, t) {
  s = s.split('');
  t = t.split('');
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) !== undefined) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (map.get(t[j]) === undefined) {
      return t[j];
    } else {
      map.set(t[j], map.get(t[j]) - 1);
      if (map.get(t[j]) === 0) {
        map.delete(t[j]);
      }
    }
  }
  return t.join('');
};
```

* **执行测试**：

1. `s`：`ae`
2. `t`：`aea`
3. `return`：

```js
a
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 54/54 cases passed (84 ms)
  √ Your runtime beats 91.56 % of javascript submissions
  √ Your memory usage beats 75 % of javascript submissions (35.2 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)
3. `join()`：`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`join()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/join.md)

* **解题思路**：

相对于暴力破解而言，哈希表也是一种解法。

**首先**，将字符串打成数组。

**然后**，先遍历 `s`，将它的每个元素的值和出现的次数记录起来。再遍历 `t`，如果 `t` 从未出现过，那么可以立马判定它为两者不同的值；如果曾经出现过，那么将其长度减去 1，之后这个长度减去 1 后刚好为 0，那么就去掉这个 `Map` 的元素。

**最后**，将 `t` 打成字符串返回出去，就是我们的求值。

### <a name="chapter-three-three" id="chapter-three-three">3.3 解法 - 奇技淫巧</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var findTheDifference = function(s, t) {
  for (let item of s) {
    t = t.replace(item, '');
  }
  return t;
};
```

* **执行测试**：

1. `s`：`ae`
2. `t`：`aea`
3. `return`：

```js
a
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 54/54 cases passed (108 ms)
  √ Your runtime beats 45.15 % of javascript submissions
  √ Your memory usage beats 5.43 % of javascript submissions (37.8 MB)
```

* **知识点**：

1. `replace()`：`replace()`方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。[`replace()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/replace.md)

* **解题思路**：

**有时候一些想法可能是你想不到或者别人想不到，但是非常奇妙的。**

这个解法是在【题解】看到的，思路非常清晰：

遍历 `s`，判断 `s` 的元素是否在 `t` 中存在，如果存在，则替换为 `''` 空字符串。

最后替换完毕后，即 `t` 剩下一个字符串了，那么返回 `t` 即可。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
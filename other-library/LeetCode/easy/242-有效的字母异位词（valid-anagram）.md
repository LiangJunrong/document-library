242 - 有效的字母异位词（valid-anagram）
===

> Create by **jsliang** on **2019-07-17 18:53:04**  
> Recently revised in **2019-09-18 13:47:17**

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
* **涉及知识**：排序、哈希表
* **题目地址**：https://leetcode-cn.com/problems/valid-anagram/
* **题目内容**：

```
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
```

* **执行测试**：

1. `s`：`anagram`
2. `t`：`nagaram`
3. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 34/34 cases passed (168 ms)
  ✔ Your runtime beats 42.71 % of javascript submissions
  ✔ Your memory usage beats 42.44 % of javascript submissions (38.1 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `sort()`：排序，保持返回数组的数字、字母为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)
3. `join()`：`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`join()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/join.md)

* **解题思路**：

**毫无技巧的碾压，是暴力破解的快乐**。

**首先**，什么是异位词？

假设字符串 `s` 为 `abcd`，`t` 为 `cdad`，那么它两就是异位。

即：字母出现的次数相等的两个词，就是异位词。

**然后**，我们就可以方便破解了：将它们打成数组，排序，再打成字符串。如果相同，即是异位词。

**最后**，希望小伙伴们不要被题意迷惑，其实有时候往往解题很简单。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (map.get(t[j])) {
      map.set(t[j], map.get(t[j]) - 1);
      if (map.get(t[j]) === 0) {
        map.delete(t[j]);
      }
    }
  }
  return !map.size;
};
```

* **执行测试**：

1. `s`：`anagram`
2. `t`：`nagaram`
3. `return`：`true`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 34/34 cases passed (116 ms)
  ✔ Your runtime beats 72.3 % of javascript submissions
  ✔ Your memory usage beats 74.35 % of javascript submissions (36.2 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**首先**，判断两个字符串的长度是否一致，如果不是，那么这两者肯定不是异位词。

**然后**，执行两次遍历：

1. 遍历第一次，记录每个单词出现的次数。
2. 遍历第二次，记录这个单词是否出现过，如果出现了，则消除对应的次数。如果对应的次数为 0，则消除这个元素（表明这个元素没有问题了）。

**最后**，判断 `Map` 是否还有值，一般来说，`String` 和 `Array` 通过 `length` 属性来判断，而 `Map` 通过 `size` 来判断。

> 在这里，**jsliang** 通过两种解法破解了这道题，小伙伴们有没有更加优秀的题解？欢迎留言或者评论~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
003 - 无重复长度的最长子串（longest-substring-without-repeating-characters）
===

> Create by **jsliang** on **2019-08-09 15:28:03**  
> Recently revised in **2019-08-09 16:55:49**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map(1)](#chapter-three-one) |
| &emsp;[3.2 解法 - Map(2)](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：中等
* **涉及知识**：哈希表、双指针、字符串、滑动窗口
* **题目地址**：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
* **题目内容**：

```
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map(1)</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0; // 最长长度
  let mark = 0; // 当前起始位置
  let map = new Map(); // 哈希表-记录出现的字符串
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) !== undefined) {
      maxLength = maxLength > map.size ? maxLength : map.size;
      // 清空重置
      map.clear();
      i = mark; // 回滚
      mark = mark + 1;
    } else {
      map.set(s[i], 1);
      if (i === s.length - 1) {
        maxLength = maxLength > map.size ? maxLength : map.size;    
      }
    }
  }
  return maxLength;
};
```

* **执行测试**：

1. `s`：`pwwkew`
2. `return`：

```js
3
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 987/987 cases passed (420 ms)
  ✔ Your runtime beats 22.31 % of javascript submissions
  ✔ Your memory usage beats 24.1 % of javascript submissions (41.8 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)

* **解题思路**：

**首先**，在讲解这道题前，给大家讲解一个游戏，叫：排火车。规则如下：

1. A、B 两个人将一副扑克牌分两半。
2. A、B 在不看牌的情况下轮流出牌，A -> 3 -> J -> 2……
3. 如果某方出的牌，在 “火车” 上已经出现了，那么可以收掉这两张重复牌之间的所有牌。例如：A -> 3 -> J -> 2 -> 3，那么收牌后牌面变成： A -> ……
4. 以此往复，谁的牌先出完，谁就输了。

**然后**，为什么讲这个游戏呢？因为这道题跟这个游戏很像：

```js
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0; // 最长长度
  let mark = 0; // 当前起始位置
  let map = new Map(); // 哈希表-记录出现的字符串
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) !== undefined) {
      maxLength = maxLength > map.size ? maxLength : map.size;
      // 清空重置
      map.clear();
      i = mark; // 回滚
      mark = mark + 1;
    } else {
      map.set(s[i], 1);
      if (i === s.length - 1) {
        maxLength = maxLength > map.size ? maxLength : map.size;    
      }
    }
  }
  return maxLength;
};
```

1. 从某个位置（i）开始查找，如果字符串中存在跟（i）相同的字符串，那么这段旅途结束了。
2. 如果它不是从 0 到 s.length - 1，那么它肯定不完全是最优解，所以我们需要重置数组。
3. 重置规则即是将（i）回滚到起始位置的下一个位置，然后将 `mark` 也标记为下一个位置。
4. 直到字符串遍历完毕为止。

**最后**，我们就成功求解啦~

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map(2)</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let hashMap = new Map();
  let ans = 0;
  for (let i = 0, j = 0; i < n; i++) {
    if (hashMap.has(s[i])) {
      j = Math.max(hashMap.get(s[i]), j)
    }
    ans = Math.max(ans, i - j + 1);
    hashMap.set(s[i], i + 1);
  }
  return ans;
};
```

* **执行测试**：

1. `s`：`pwwkew`
2. `return`：

```js
3
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 987/987 cases passed (112 ms)
  ✔ Your runtime beats 89.43 % of javascript submissions
  ✔ Your memory usage beats 85.52 % of javascript submissions (37.7 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)
2. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)

* **解题思路**：

**从来就没有什么最优解，有的只是无穷的脑洞。**

**首先**，这个解法，叫【滑动窗口】。

**然后**，跟题解 1 一样，如果这个字符串从未出现过，那么就将其设置一下。

如果这个字符串出现过，那么先比较 `j`，在比较 `ans`，从而动态获取最长长度。

**最后**，得出结果。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
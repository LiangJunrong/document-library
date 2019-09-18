459 - 重复的字符串（repeated-substring-pattern）
===

> Create by **jsliang** on **2019-07-30 13:07:32**  
> Recently revised in **2019-09-18 14:11:23**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 正则表达式](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/repeated-substring-pattern/
* **题目内容**：

```
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。

示例 2:

输入: "aba"

输出: False

示例 3:

输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const repeatedSubstringPattern = (s) => {
  let n = 1;
  while (n <= s.length) {
    let fragment = s.slice(0, n); // 用来做测试的片段
    for (let i = n; i < s.length; i += n) {
      let moveFragment = s.slice(i, i + n); // 移动的片段
      // 如果移动的片段和用来做测试的片段不一致，终止本次循环
      if (moveFragment !== fragment) {
        break;
      }
      // 如果移动片段到最后了都和测试片段相同，说明这是真的
      if (moveFragment === fragment && i === s.length - n) {
        return true;
      }
    }
    n++;
  }
  return false;
};
```

* **执行测试**：

1. `s`：`ababab`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 120/120 cases passed (116 ms)
  ✔ Your runtime beats 83.38 % of javascript submissions
  ✔ Your memory usage beats 30.22 % of javascript submissions (37.9 MB)
```

* **知识点**：

1. `slice()`：`slice()` 方法提取一个字符串的一部分，并返回一新的字符串。[`slice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/slice.md)

* **解题思路**：

**拿到题目满脑子骚操作**。

**首先**，小分析走一波：

1. 我们可以设置一个固定片段
2. 固定片段不停移动，直到移动到数组尾部
3. 如果固定片段移动过来，发现目前的片段和固定片段不同，那么就中断本次循环
4. 如果固定片段移动到数组末尾，且最后的一个片段和它相同，说明这个是重复的字符串

**然后**，我们直接上代码：

```js
const repeatedSubstringPattern = (s) => {
  let n = 1;
  while (n <= s.length) {
    let fragment = s.slice(0, n); // 用来做测试的片段
    for (let i = n; i < s.length; i += n) {
      let moveFragment = s.slice(i, i + n); // 移动的片段
      // 如果移动的片段和用来做测试的片段不一致，终止本次循环
      if (moveFragment !== fragment) {
        break;
      }
      // 如果移动片段到最后了都和测试片段相同，说明这是真的
      if (moveFragment === fragment && i === s.length - n) {
        return true;
      }
    }
    n++;
  }
  return false;
};
```

Submit 提交是成功的：

```js
✔ Accepted
  ✔ 120/120 cases passed (116 ms)
  ✔ Your runtime beats 83.38 % of javascript submissions
  ✔ Your memory usage beats 30.22 % of javascript submissions (37.9 MB)
```

**这样**，说明我们的思路是正确的，成功解题~

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const repeatedSubstringPattern = (s) => {
  return /^(\w+)\1+$/.test(s);
};
```

* **执行测试**：

1. `s`：`ababab`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 120/120 cases passed (120 ms)
  ✔ Your runtime beats 80.11 % of javascript submissions
  ✔ Your memory usage beats 36.69 % of javascript submissions (36.1 MB)
```

* **解题思路**：

**正则是真的秀**。

那么，我们解析一下这个正则：

`/^(\w+)\1+$/.test(s)`

1. `(\w+)` 表示任意多个字母或数字或下划线，也就是 A~Z,a~z,0~9,_ 中任意多个组成。
2. `\1+` 表明前面的字母可能重复 1+ 次数。

这样，正则表达式直接通过 `test()` 匹配 `s`，返回 `true` 或者 `false`。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
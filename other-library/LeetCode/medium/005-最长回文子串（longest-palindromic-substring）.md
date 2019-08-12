005 - 最长回文子串（longest-palindromic-substring）
===

> Create by **jsliang** on **2019-08-12 10:48:42**  
> Recently revised in **2019-08-12 14:48:55**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：中等
* **涉及知识**：字符串、动态规划
* **题目地址**：https://leetcode-cn.com/problems/longest-palindromic-substring/
* **题目内容**：

```
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。

示例 2：

输入: "cbbd"
输出: "bb"
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
const longestPalindrome = (s) => {
  let max = '';
  let length = s.length;
  if (length < 2) {
    return s;
  }
  for (let i = 0; i <= length; i++) {
    let newMax = core(s, i);
    max = newMax.length > max.length ? newMax : max;
  }
  return max;
};

const core = (str, index) => {
  // 递归遍历
  const loop = (prev, next) => {
    if (!str[prev] || !str[next]) {
      return str.slice(prev + 1, next);
    }
    if (str.charAt(prev) === str.charAt(next)) {
      return loop(prev - 1, next + 1);
    } else {
      return str.slice(prev + 1, next);
    }
  }
  // 一核对称
  let maxOne = loop(index - 1, index + 1);
  // 双核对称
  let maxTwo = loop(index, index + 1);
  // 返回结果
  return maxOne.length > maxTwo.length ? maxOne : maxTwo;
}
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `s`：`babad`
2. `return`：

```js
bab
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 103/103 cases passed (244 ms)
  ✔ Your runtime beats 46.77 % of javascript submissions
  ✔ Your memory usage beats 35.09 % of javascript submissions (38 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `slice()`：`slice()` 方法提取一个字符串的一部分，并返回一新的字符串。[`slice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/slice.md)
2. `charAt()`：`charAt()` 方法从一个字符串中返回指定的字符。[`charAt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/charAt.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，对于这道题，**jsliang** 毫无思路，不管是 **动态规划** 还是 **对称查找** 还是其他，都不太清楚，所以只能看官网和大佬们的题解。

**既然如此**，我们就尝试理解下这两种方法吧：

* **对称查找**：

```js
const longestPalindrome = (s) => {
  let max = '';
  let length = s.length;
  if (length < 2) {
    return s;
  }
  for (let i = 0; i <= length; i++) {
    let newMax = core(s, i);
    max = newMax.length > max.length ? newMax : max;
  }
  return max;
};

const core = (str, index) => {
  // 递归遍历
  const loop = (prev, next) => {
    if (!str[prev] || !str[next]) {
      return str.slice(prev + 1, next);
    }
    if (str.charAt(prev) === str.charAt(next)) {
      return loop(prev - 1, next + 1);
    } else {
      return str.slice(prev + 1, next);
    }
  }
  // 一核对称
  let maxOne = loop(index - 1, index + 1);
  // 双核对称
  let maxTwo = loop(index, index + 1);
  // 返回结果
  return maxOne.length > maxTwo.length ? maxOne : maxTwo;
}
```

Submit 提交：

```js
✔ Accepted
  ✔ 103/103 cases passed (244 ms)
  ✔ Your runtime beats 46.77 % of javascript submissions
  ✔ Your memory usage beats 35.09 % of javascript submissions (38 MB)
```

思想：

1. 一核对称：121、12321
2. 双核对称：1221、123321
3. 先枚举每一个字符，再针对该字符进行左右（双核对称时为当前字符和下一个字符）查找相等匹配

在这里，我们遍历字符串 `s`：

1. 遍历传递整个字符串 `s` 和当前索引 `index`。
2. 假设为一核对称，则发送索引的前后进行判断。如果两者相同，则进一步判断前后，直到无法判断为止。
3. 假设为二核对称，则发送索引以及索引的下一个进行判断。内部判断条件同上。
4. 最终，通过 `str.slice(prev + 1, next)`，来返回当前索引能获得的最大回文串，跟原先的比较，直到循环结束。

* **动态规划**：

```js
const longestPalindrome = (s) => {
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  };

  let max = -1;
  let str = '';
  // 这样可以遍历出所有子串, 以不同子串的开头为基准, 遍历所有子串
  for (let k = 0; k < s.length; k++) {
    // 采用不同的间隔依次遍历
    // 这里 i 是子串的开始索引, j 是子串的结束索引, k + 1 其实就是子串的长度
    for (let i = 0; i + k < s.length; i++) {
      let j = i + k;
      if (k == 0) {
        dp[i][j] = true;
      } else if (k <= 2) {
        if (s[i] == s[j]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        dp[i][j] = (dp[i + 1][j - 1] && s[i] == s[j]) ? true : false;
      }
      if (j - i > max && dp[i][j]) {
        max = j - i;
        str = s.substring(i, j + 1);
      }
    };
  };
  return str;
}
```

Submit 提交：

```js
✔ Accepted
  ✔ 103/103 cases passed (820 ms)
  ✔ Your runtime beats 14.44 % of javascript submissions
  ✔ Your memory usage beats 5.09 % of javascript submissions (160.9 MB)
```

相对于中心扩展来说，动态规划的较为复杂，这里的讲解咱们就跳过了，有兴趣的小伙伴可以仔细瞅瞅。

**这样**，我们就大致理解了这两种方法，当然，让我们单独写还是不行的，只能后面慢慢提升自己了。

> 我们通过两种方法破解了这道题，那么还有没有其他方法呢？  
> 答案是有的，而且这道题至少有 4 种以上解法。

```js
var longestPalindrome = function (s) {
  let re = ro = 1,
    p = s.length ? s[0] : "";
  // 检查是否回文串
  let check = u => u.split("").reverse().join("") === u ? p = u : null;
  for (let i = 1; i <= s.length - re;) {
    // 待检测偶数字母回文半径
    re = (p.length / 2 | 0) + 1;
    // 待检测奇数字母回文半径
    ro = Math.ceil(p.length / 2);
    // 没有匹配的话指针向后移
    check(s.slice(i - re, i + re)) || check(s.slice(i - ro, i + ro + 1)) ? re >= i ? i++ : null : i++;
  }
  return p;
};
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
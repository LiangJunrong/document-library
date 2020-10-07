821 - 字符的最短距离（shortest-distance-to-a-character）
===

> Create by **jsliang** on **2020-01-07 20:10:07**  
> Recently revised in **2020-1-7 23:11:08**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 进一步思考](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/shortest-distance-to-a-character/
* **题目内容**：

```
给定一个字符串 S 和一个字符 C。
返回一个代表字符串 S 中，
每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

说明:
1. 字符串 S 的长度范围为 [1, 10000]。
2. C 是一个单字符，且保证是字符串 S 里的字符。
3. S 和 C 中的所有字母均为小写字母。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 字符的最短距离
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {
  const result = [];
  let flag = -1;
  for (let i = 0; i < S.length; i++) {
    // 第一个 C 出现的位置
    if (S[i] === C && flag === -1) {
      for (let j = i; j >= 0; j--) {
        result.push(j);
      }
      flag = i;
    } else if (S[i] === C && flag >= 0 && flag < S.length) { // 中间 C 出现的位置
      // 中间的长度为偶数，例如 0 1 2 2 1 0
      if ((i - flag - 1) % 2 === 0) {
        for (let j = 1; j <= (i - flag - 1) / 2; j++) {
          result.push(j);
        }
        for (let k = (i - flag - 1) / 2; k >= 0; k--) {
          result.push(k);
        }
      } else { // 中间的长度为奇数，例如 0 1 2 1 0
        for (let j = 1; j <= (i - flag) / 2; j++) {
          result.push(j);
        }
        for (let k = (i - flag - 2) / 2; k >= 0; k--) {
          result.push(k);
        }
      }
      flag = i;
    } else if (i == S.length - 1) { // 如果最后结尾不是 C
      for (let j = 1; j <= S.length - 1 - flag; j++) {
        result.push(j);
      }
    }
  }
  return result;
};

console.log(shortestToChar('loveleetcode', 'e'));
// [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]
console.log(shortestToChar('loveleetcodejsliang', 'e'));
// [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(shortestToChar('baab', 'b'));
// [ 0, 1, 1, 0 ]
```

`node index.js` 返回：

```js
[ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]
[ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7 ]
[ 0, 1, 1, 0 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 76/76 cases passed (80 ms)
* Your runtime beats 70.34 % of javascript submissions
* Your memory usage beats 71.93 % of javascript submissions (35.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

如果你一进来就被上面的题解震撼到了，那么，你应该往下看下去~

拿到题目，思路是这样的：

1. 将 `S` 切分成三部分：起始，中间，尾部。例如 `loveleetcodejsliang`，切分成 `love`、`leetcode`、`jsliang`。
2. 那么，设置 `result` 为存放结果的地方，设置 `flag` 为游标，告诉数组上一次进展到哪（最近一次出现 `C` 的地方）。
3. 接着，通过三部分来遍历字符串 `S`：
4. 第一个 `C` 出现的位置，应该是降序添加数字，例如 `3 2 1 0`；
5. 最后一个 `C` 之后的数字，应该是顺序添加数字，例如 `0 1 2 3`；
6. 中间出现 `C` 的数字，要分两种情况：情况一，长度为偶数，那么就是 `0 1 2 2 1 0`，如果是奇数，那么就是 `0 1 2 1 0`。然后添加进去即可。

这样，我们就捋顺了这道题：

```js
const shortestToChar = (S, C) => {
  const result = [];
  let flag = -1;
  for (let i = 0; i < S.length; i++) {
    // 第一个 C 出现的位置
    if (S[i] === C && flag === -1) {
      for (let j = i; j >= 0; j--) {
        result.push(j);
      }
      flag = i;
    } else if (S[i] === C && flag >= 0 && flag < S.length) { // 中间 C 出现的位置
      // 中间的长度为偶数，例如 0 1 2 2 1 0
      if ((i - flag - 1) % 2 === 0) {
        for (let j = 1; j <= (i - flag - 1) / 2; j++) {
          result.push(j);
        }
        for (let k = (i - flag - 1) / 2; k >= 0; k--) {
          result.push(k);
        }
      } else { // 中间的长度为奇数，例如 0 1 2 1 0
        for (let j = 1; j <= (i - flag) / 2; j++) {
          result.push(j);
        }
        for (let k = (i - flag - 2) / 2; k >= 0; k--) {
          result.push(k);
        }
      }
      flag = i;
    } else if (i == S.length - 1) { // 如果最后结尾不是 C
      for (let j = 1; j <= S.length - 1 - flag; j++) {
        result.push(j);
      }
    }
  }
  return result;
};
```

Submit 提交也是 OK 的：

```js
Accepted
* 76/76 cases passed (80 ms)
* Your runtime beats 70.34 % of javascript submissions
* Your memory usage beats 71.93 % of javascript submissions (35.6 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

如果你也觉得 **jsliang** 很菜，那么你一定会往后看，因为他会去追寻大佬们的足迹：

> 官方题解

```js
const shortestToChar = (S, C) => {
  const length = S.length;
  const result = [];

  let prev = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < length; i++) {
    if (S[i] === C) {
      prev = i;
    }
    result[i] = i - prev;
  }

  prev = Number.MAX_SAFE_INTEGER;
  for (let i = length - 1; i >= 0; i--) {
    if (S[i] === C) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }

  return result;
};
```

这是个很有意思的题解，如果你也看懂了，兴许你会感觉非常兴奋：

* 终于脱离 **jsliang** 罗里吧嗦的代码了！

Submit 提交如下：

```js
Accepted
* 76/76 cases passed (68 ms)
* Your runtime beats 97.46 % of javascript submissions
* Your memory usage beats 14.03 % of javascript submissions (37 MB)
```

运行时间非常 nice~

思路如下：

1. 

拿官方示例 1 举例：

* `S = 'loveleetcode'`；
* `C = 'e'`；

顺序遍历的时候：

```js
[ 9007199254740991, 9007199254740992, 9007199254740992, 0, 1, 0, 0, 1, 2, 3, 4, 0 ]
```

然后我们在逆序遍历的时候，如果不是使用：

* `result[i] = Math.min(result[i], prev - i);`

而是用：

* `result[i] = prev - i;`

我们看看结果：

```js
[ 3, 2, 1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]
```

我们将其放在一起比较：

```js
[ 'big', 'big', 'big', 0, 1, 0, 0, 1, 2, 3, 4, 0 ]
[ 3,      2,        1, 0, 1, 0, 0, 4, 3, 2, 1, 0 ]
```

两者相交取最小值，你会感觉一切就是那么奇妙！

> 真真想不到！

如果你有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
806 - 写字符串需要的行数（number-of-lines-to-write-string）
===

> Create by **jsliang** on **2020-01-05 16:53:55**  
> Recently revised in **2020-01-05 17:15:39**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：
* **题目内容**：

```
我们要把给定的字符串 S 从左到右写到每一行上，
每一行的最大宽度为 100 个单位，
如果我们在写某个字母的时候会使这行超过了 100 个单位，
那么我们应该把这个字母写到下一行。

我们给定了一个数组 widths，
这个数组 widths[0] 代表 'a' 需要的单位，
widths[1] 代表 'b' 需要的单位，...，
 widths[25] 代表 'z' 需要的单位。

现在回答两个问题：
至少多少行能放下 S，
以及最后一行使用的宽度是多少个单位？
将你的答案作为长度为 2 的整数列表返回。

示例 1:
输入: 
widths = [10,10,10,10,10,10,
10,10,10,10,10,10,10,10,10,10,
10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
输出: [3, 60]
解释: 
所有的字符拥有相同的占用单位 10。所以书写所有的 26 个字母，
我们需要 2 个整行和占用 60 个单位的一行。

示例 2:
输入: 
widths = [4,10,10,10,10,10,10,
10,10,10,10,10,10,10,10,10,10,
10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
输出: [2, 4]
解释: 
除去字母 'a' 所有的字符都是相同的单位 10，
并且字符串 "bbbcccdddaa" 将会覆盖 9 * 10 + 2 * 4 = 98 个单位.
最后一个字母 'a' 将会被写到第二行，因为第一行只剩下2个单位了。
所以，这个答案是2行，第二行有4个单位宽度。
 
注:

字符串 S 的长度在 [1, 1000] 的范围。
S 只包含小写字母。
widths 是长度为 26的数组。
widths[i] 值的范围在 [2, 10]。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 写字符串需要的行数
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = (widths, S) => {
  const row = [];
  let rowMark = 0;
  for (let i = 0; i < S.length; i++) {
    const tempMark = widths[S[i].charCodeAt() - 97];
    if (rowMark + tempMark > 100) {
      row.push(rowMark);
      rowMark = tempMark;
    } else {
      rowMark += tempMark;
    }
  }
  row.push(rowMark);
  return [row.length, row[row.length - 1]];
};

console.log(
  numberOfLines(
    [10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10, 10
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
);
```

`node index.js` 返回：

```js
[3, 60]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 26/26 cases passed (60 ms)
* Your runtime beats 93.48 % of javascript submissions
* Your memory usage beats 46.15 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**谨且记住：如果题目描述地很复杂，说不定它很简单；如果题目描述的很简单，说不定它很难。**

给点精神，仔细读题：

1. 有一个 26 个长度的数组 `widths`，代表这 26 个字母所占的位置。如果你想更清晰点的话，你可以看成一个人，写的 26 个字母可能会占的位置大小（有些人写字大，有的人写字小）。
2. 有一个 [1, 1000] 长度的字符串 `S`，我们要做的就是将它占用的行数，以及它最后一行的数字 `show` 出来。
3. 值得注意的是：如果当前行到了 90，但是下一个字母占用的位置是 11，那么应该换行重新输入。

```js
const numberOfLines = (widths, S) => {
  const row = [];
  let rowMark = 0;
  for (let i = 0; i < S.length; i++) {
    const tempMark = widths[S[i].charCodeAt() - 97];
    if (rowMark + tempMark > 100) {
      row.push(rowMark);
      rowMark = tempMark;
    } else {
      rowMark += tempMark;
    }
  }
  row.push(rowMark);
  return [row.length, row[row.length - 1]];
};
```

看到这里，我们假设一个条件，应该是怎样的：

```js
console.log(
  numberOfLines(
    [10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10,
     10, 10, 10, 10, 10, 10
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
);
row = [100, 100, 60]
```

仔细看：

1. `S` 是从 `a-z` 的 26 个字母；
2. 它们对应的 `widths` 占用的位置都是 10，意味着每行恰好填充上 100；
3. 所以 `row` 最后应该是 `[100, 100, 60]`。

Submit 提交如下：

```js
Accepted
* 26/26 cases passed (60 ms)
* Your runtime beats 93.48 % of javascript submissions
* Your memory usage beats 46.15 % of javascript submissions (34.9 MB)
```

如果你没看懂，或者你有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
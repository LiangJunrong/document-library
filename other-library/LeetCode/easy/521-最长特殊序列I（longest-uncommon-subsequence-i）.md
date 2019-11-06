521 - 最长特殊序列I（longest-uncommon-subsequence-i）
===

> Create by **jsliang** on **2019-11-06 08:27:51**  
> Recently revised in **2019-11-06 09:08:32**

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
* **题目地址**：https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
* **题目内容**：

```
给定两个字符串，你需要从这两个字符串中找出最长的特殊序列。

最长特殊序列定义如下：

该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

子序列可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。

空序列为所有字符串的子序列，任何字符串为其自身的子序列。

输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。

示例 :
输入: "aba", "cdc"
输出: 3
解析: 最长特殊序列可为 "aba" (或 "cdc")

说明:
两个字符串长度均小于100。
字符串中的字符仅含有 'a'~'z'。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最长特殊序列I
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
  if (a.length > b.length) {
    return a.length;
  }
  if (b.length > a.length) {
    return b.length;
  }
  if (a !== b) {
    return a.length;
  }
  if (a === b) {
    return -1;
  }
};

console.log(findLUSlength('aba', 'cdc'));
// console.log(findLUSlength('aaa', 'aaa'));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 41/41 cases passed (56 ms)
* Your runtime beats 92.79 % of javascript submissions
* Your memory usage beats 42.1 % of javascript submissions (33.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**特别烦这种特殊的，然后示例又只有一个的题目！**

**首先**，审过第一遍题目，瞬间进入懵逼状态，难道我理解的不足？

先试试吧：

> 第一次尝试

```js
/**
 * @name 最长特殊序列I
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = (a, b) => {
  // 1. 定义变量
  const aList = a.split('');
  const bList = b.split('');
  const aResult = [];
  const bResult = [];
  // 2. 开始对比
  for (let i = 0; i < aList.length; i++) {
    if (bList.findIndex(item => item === aList[i]) === -1) {
      aResult.push(aList[i]);
    }
  }
  for (let i = 0; i < bList.length; i++) {
    if (aList.findIndex(item => item === bList[i]) === -1) {
      bResult.push(bList[i]);
    }
  }
  console.log(aResult);
  console.log(bResult);
  // 3. 返回结果
  let result = -1;
  if (aResult.length >= bResult.length && aResult.length !== 0) {
    result = aResult.length;
  }
  if (aResult.length <= bResult.length && bResult.length !== 0) {
    result = bResult.length;
  }
  return result;
};

console.log(findLUSlength('aba', 'cdc'));
// console.log(findLUSlength('aaa', 'aaa'));
```

**然后**，我就想打爆出这题的人，测试了下，这两个 `console.log()` 例子是可行的，但是：

```js
Wrong Answer
* 16/41 cases passed (N/A)

Testcase
"aefawfawfawfaw"
"aefawfeawfwafwaef"

Answer
-1

Expected Answer
17
```

就是说，没我想的那么简单，就像产品经理给你提了个需求，做出来才发现 ta 想要实现的是另外一个~

> 第二次尝试

```js
const findLUSlength = (a, b) => {
  if (a.length > b.length) {
    return a.length;
  }
  if (b.length > a.length) {
    return b.length;
  }
  if (a !== b) {
    return a.length;
  }
  if (a === b) {
    return -1;
  }
};
```

Submit 试试：

```js
Accepted
* 41/41 cases passed (56 ms)
* Your runtime beats 92.79 % of javascript submissions
* Your memory usage beats 42.1 % of javascript submissions (33.6 MB)
```

可以想象下到我是如何惊呆了！这……(ｷ｀ﾟДﾟ´)!!

无解，先讲解下思路：

1. 判断 `a` 和 `b` 的长度，如果不一致则取最长的那个。
2. 如果 `a` 和 `b` 的长度相等，那么判断两者是不是一样的字符串，如果是，返回 -1，如果不是，返回 `a` 或者 `b` 的长度。

**最后**，再缩短一下，写个一行题解留作纪念：

> 第三次尝试

```js
const findLUSlength = (a, b) => {
  return a.length >= b.length ? (a.length === b.length && a === b ? -1 : a.length) : b.length;
};
```

Submit 提交：

```js
Accepted
* 41/41 cases passed (52 ms)
* Your runtime beats 97.3 % of javascript submissions
* Your memory usage beats 21.05 % of javascript submissions (33.8 MB)
```

(ｷ｀ﾟДﾟ´)!!

至于剩下的，我就不翻阅【题解】和【评论】了，这题真的不怎么好。

小伙伴有更好的欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
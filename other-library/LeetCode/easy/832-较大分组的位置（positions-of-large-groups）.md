832 - 较大分组的位置（positions-of-large-groups）
===

> Create by **jsliang** on **2020-01-08 17:05:08**  
> Recently revised in **2020-01-08 18:34:28**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/positions-of-large-groups/
* **题目内容**：

```
在一个由小写字母构成的字符串 S 中，
包含由一些连续的相同字符所构成的分组。

例如，在字符串 S = "abbxxxxzyy" 中，
就含有 "a", "bb", "xxxx", 
"z" 和 "yy" 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。
找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。

示例 1:

输入: "abbxxxxzzy"
输出: [[3,6]]
解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。

示例 2:

输入: "abc"
输出: []
解释: "a","b" 和 "c" 均不是符合要求的较大分组。

示例 3:

输入: "abcdddeeeeaabbbcd"
输出: [[3,5],[6,9],[12,14]]
说明:  1 <= S.length <= 1000
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 较大分组的位置
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = (S) => {
  const result = [];
  let flagPosition = 0;
  let flagString = S[0];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== flagString) {
      if (i - flagPosition >= 3) {
        result.push([flagPosition, i - 1]);
      }
      flagPosition = i;
      flagString = S[i];
    } else if (
      S[i] === flagString
      && i === S.length - 1
      && i - flagPosition >= 2
    ) {
      result.push([flagPosition, i]);
    }
  }
  return result;
};

console.log(largeGroupPositions('abbxxxxzyy')); // [ [ 3, 6 ] ]
console.log(largeGroupPositions('abcdddeeeeaabbbcd')); // [ [ 3, 5 ], [ 6, 9 ], [ 12, 14 ] ]
console.log(largeGroupPositions('aaa')); // [ [0, 2] ]
console.log(largeGroupPositions('aba')); // []
console.log(largeGroupPositions('babaaaabbb')); // [ [ 3, 6 ], [ 7, 8 ] ]
```

`node index.js` 返回：

```js
[ [ 3, 6 ] ]
[ [ 3, 5 ], [ 6, 9 ], [ 12, 14 ] ]
[ [ 0, 2 ] ]
[]
[ [ 3, 6 ], [ 7, 9 ] ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 202/202 cases passed (80 ms)
* Your runtime beats 86.51 % of javascript submissions
* Your memory usage beats 25.72 % of javascript submissions (36.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

愣是想着一次遍历，永久解决问题！

> 线性扫描

```js
const largeGroupPositions = (S) => {
  const result = [];
  let flagPosition = 0;
  let flagString = S[0];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== flagString) {
      if (i - flagPosition >= 3) {
        result.push([flagPosition, i - 1]);
      }
      flagPosition = i;
      flagString = S[i];
    } else if (
      S[i] === flagString
      && i === S.length - 1
      && i - flagPosition >= 2
    ) {
      result.push([flagPosition, i]);
    }
  }
  return result;
};
```

思路如下：

1. 设置 `result` 获取地址。
2. 设置 `flagPosition` 存放 `flag` 变更的位置；设置 `flagString` 存放 `flag` 变更后的字符串。
3. 通过 `for` 遍历 `S`，进行判断：④ 如果当前字母和 `flagString` 不相等；⑤ 如果当前字母和 `flagString` 相等。
4. 如果当前字母和 `flagString` 不相等，那么就判断当前 `i` 减去 `flagPosition` 的结果是不是大于等于 3，如果是，则添加一个记录。同时，如果不相等，那么就变更 `flag` 的信息。
5. 如果当前字母和 `flagString` 相等，那么就判断它是不是在末尾，用来防止 `aaa`、`abbbccc` 等情况。

这样，就完成了这道题的破解~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看了下官方题解，发现还有双指针解法：

> 双指针

```js
const largeGroupPositions = (S) => {
  const result = [];
  let flag = 0;
  for (let i = 0; i < S.length; i++) {
    if (i === S.length - 1 || S[i] !== S[i + 1]) {
      if (i - flag + 1 >= 3) {
        result.push([flag, i]);
      }
      flag = i + 1;
    }
  }
  return result;
};
```

设置 `flag` 为前一个指标，然后判断 `S[i]` 和 `S[i + 1]` 的值是否一致，不一致的话，那么我们就启用双指标进行判断。

Submit 提交如下：

```js
Accepted
* 202/202 cases passed (80 ms)
* Your runtime beats 86.51 % of javascript submissions
* Your memory usage beats 14.29 % of javascript submissions (37.2 MB)
```

不得不承认这思路比我的好那么点~

如果小伙伴们有更好的思路方法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
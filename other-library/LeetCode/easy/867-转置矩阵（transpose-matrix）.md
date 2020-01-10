867 - 转置矩阵（transpose-matrix）
===

> Create by **jsliang** on **2020-1-10 19:38:30**  
> Recently revised in **2020-1-10 20:25:21**

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
* **题目地址**：https://leetcode-cn.com/problems/transpose-matrix/
* **题目内容**：

```
给定一个矩阵 A，
返回 A 的转置矩阵。

矩阵的转置是指将矩阵的主对角线翻转，
交换矩阵的行索引与列索引。

示例 1：

输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]

示例 2：

输入：[[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]

提示：

1 <= A.length <= 1000
1 <= A[0].length <= 1000
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 转置矩阵
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = (A) => {
  const result = [];
  for (let i = 0; i < A[0].length; i++) {
    const tempArr = [];
    for (let j = 0; j < A.length; j++) {
      tempArr.push(A[j][i]);
    }
    result.push(tempArr);
  }
  return result;
};

console.log(transpose(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
));
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

console.log(transpose(
  [
    [1, 2, 3],
    [4, 5, 6]
  ]
));
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]
```

`node index.js` 返回：

```js
[ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
[ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 36/36 cases passed (96 ms)
* Your runtime beats 15.73 % of javascript submissions
* Your memory usage beats 7.04 % of javascript submissions (37.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

enm...这道题真不难啦~

如果你搞过 99 乘法表，这道题应该都没有问题：

```js
const transpose = (A) => {
  const result = [];
  for (let i = 0; i < A[0].length; i++) {
    const tempArr = [];
    for (let j = 0; j < A.length; j++) {
      tempArr.push(A[j][i]);
    }
    result.push(tempArr);
  }
  return result;
};
```

双重遍历矩阵，通过两次操作，将数组添加到 `result` 中。

唯一一点需要注意的就是，如何纵向遍历呢？

通过 `A[j][i]` 即可~因为它是矩阵啊！

```js
Accepted
* 36/36 cases passed (96 ms)
* Your runtime beats 15.73 % of javascript submissions
* Your memory usage beats 7.04 % of javascript submissions (37.9 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

然后，看了下官方题解，总有你想不到的：

```js
const transpose = (A) => {
  // 二维数组初始化
  const matrix = Array.apply(null, Array(A[0].length)).map(i => {
    return Array.apply(null, Array(A.length)).map(j => {
      return '';
    });
  });
  // 直接替换
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      matrix[j][i] = A[i][j];
    }
  }
  return matrix;
};
```

值得注意的是，官方使用的是 `Java` 和 `Python`，然后二维数组初始化的时候碰到了问题，百度查找的初始化，有些是相同的，怎么说呢？

```js
[ [ 3, 6 ], [ 3, 6 ], [ 3, 6 ] ]
```

它改动一个会改动其他的，由于影响比较恶劣，我就不贴代码了。

如果你实在没有骚操作，就老老实实双重 `for` 遍历生成二维数组吧~

Submit 提交如下：

```js
Accepted
* 36/36 cases passed (80 ms)
* Your runtime beats 80.9 % of javascript submissions
* Your memory usage beats 59.15 % of javascript submissions (37.1 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
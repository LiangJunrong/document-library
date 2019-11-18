566 - 重塑矩阵（reshape-the-matrix）
===

> Create by **jsliang** on **2019-11-18 08:23:14**  
> Recently revised in **2019-11-18 09:06:48**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/reshape-the-matrix/
* **题目内容**：

```
在 MATLAB 中，有一个非常有用的函数 reshape。

它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，

以及两个正整数 r 和 c，

分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；

否则，输出原始矩阵。

示例 1:

输入: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4

输出: 
[[1,2,3,4]]

解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 
用之前的元素值一行一行填充新矩阵。

示例 2:

输入: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4

输出: 
[[1,2],
 [3,4]]

解释:
没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。

注意：
给定矩阵的宽和高范围在 [1, 100]。
给定的 r 和 c 都是正数。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 重塑矩阵
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  // 1. 获取二维数组的所有元素的个数，判断其值是否等于 r * c
  const newNums = [].concat.apply([],nums);
  if (newNums.length !== r * c) {
    return nums;
  }
  // 2. 符合转换条件
  const result = [];
  for (let i = 0; i < r; i++) {
    result[i] = newNums.splice(0, c);
  }
  return result;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1, 2, 3, 4]]
```

`node index.js` 返回：

```js
[[1, 2, 3, 4]]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 56/56 cases passed (80 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 97.92 % of javascript submissions (39.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，审题，刨出关键字：

1. 如果合理，则输出新数组；如果不合理，则保留其原始数据
2. 参数：二维数组、正整数 r（行数）和 c（列数）

如上。

**然后**，尝试按照自己理解解题：

```js
const matrixReshape = (nums, r, c) => {
  // 1. 获取二维数组的所有元素的个数，判断其值是否等于 r * c
  const newNums = [].concat.apply([], nums);
  if (newNums.length !== r * c) {
    return nums;
  }
  // 2. 符合转换条件
  const result = [];
  for (let i = 0; i < r; i++) {
    result[i] = newNums.splice(0, c);
  }
  return result;
};
```

Submit 提交试试：

```js
Accepted
* 56/56 cases passed (80 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 97.92 % of javascript submissions (39.3 MB)
```

哇！！这是直接跃升成第一名么，酷~

**最后**，讲讲思路，思路非常简单：

1. 将二维数组平整为一维数组。（通过 `apply` 将二维数组转成一维数组不会影响到原数组）
2. 判断一维数组的长度能否换成 `r * c` 格式，如果不行，那么返回原数组。
3. 如果可以，那么遍历 r 的个数，将 `newNums` 通过 `splice()` 依次切割到对应的位置即可。

看到这里，会不会觉得这道题特别简单！

如果小伙伴们有其他更好的方法或者思路，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
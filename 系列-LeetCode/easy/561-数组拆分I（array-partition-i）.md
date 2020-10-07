561 - 数组拆分I（array-partition-i）
===

> Create by **jsliang** on **2019-11-16 17:48:20**  
> Recently revised in **2019-11-16 18:03:25**

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
* **题目地址**：https://leetcode-cn.com/problems/array-partition-i/
* **题目内容**：

```
给定长度为 2n 的数组,

你的任务是将这些数分成 n 对,

例如 (a1, b1), (a2, b2), ..., (an, bn) 

使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:

n 是正整数,范围在 [1, 10000].
数组中的元素范围在 [-10000, 10000].
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 数组拆分I
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  return nums.sort((a, b) => a - b).reduce((prev, next, index) => {
    return index % 2 === 0 ? prev + next : prev;
  });
};

const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));
```

`node index.js` 返回：

```js
4
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 81/81 cases passed (144 ms)
* Your runtime beats 71.83 % of javascript submissions
* Your memory usage beats 32.56 % of javascript submissions (39 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，万物复苏，先解内涵：

* 该题目希望我进行升序排序，然后求出所有奇数位的和

那么，我进行尝试一番：

```js
/**
 * @name 数组拆分I
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  return nums.sort((a, b) => a - b).reduce((prev, next, index) => {
    return index % 2 === 0 ? prev + next : prev;
  });
};
```

Submit 结果：

```js
Accepted
* 81/81 cases passed (144 ms)
* Your runtime beats 71.83 % of javascript submissions
* Your memory usage beats 32.56 % of javascript submissions (39 MB)
```

**然后**，心再狠点，浓缩成一行，让队友（同事）不可维护：

```js
const arrayPairSum = (nums) => {
  return nums.sort((a, b) => a - b).reduce((prev, next, index) => index % 2 === 0 ? prev + next : prev);
};
```

Submit 提交：

```js
Accepted
* 81/81 cases passed (136 ms)
* Your runtime beats 86.3 % of javascript submissions
* Your memory usage beats 24.03 % of javascript submissions (39.1 MB)
```

**最后**，进行下这次解题的解读：

1. 将数组进行升序排序：`nums.sort((a, b) => a - b)`
2. 将数组的奇数位累加起来：`nums.reduce((prev, next, index) => ...)`。这个 `reduce` 接受 4 个参数，第一个 `prev` 是之前累积的值，第二个 `next` 是当前遍历的值，第三个 `index` 是当前的值的索引，第四个 `arr` 是整个数组，在这里即 `nums`，没有使用到。

这样，就简简单单地完成了这道题，是不是感觉 So easy~

如果小伙伴有更好的方法或者思想，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
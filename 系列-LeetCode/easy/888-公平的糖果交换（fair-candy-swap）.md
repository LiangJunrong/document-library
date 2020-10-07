888 - 公平的糖果交换（fair-candy-swap）
===

> Create by **jsliang** on **2020-01-14 15:48:24**  
> Recently revised in **2020-01-14 19:23:53**

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
* **题目地址**：https://leetcode-cn.com/problems/fair-candy-swap/
* **题目内容**：

```
爱丽丝和鲍勃有不同大小的糖果棒：
A[i] 是爱丽丝拥有的第 i 块糖的大小，
B[j] 是鲍勃拥有的第 j 块糖的大小。

因为他们是朋友，
所以他们想交换一个糖果棒，
这样交换后，
他们都有相同的糖果总量。
（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

返回一个整数数组 ans，
其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，
ans[1] 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，
你可以返回其中任何一个。

保证答案存在。

示例 1：

输入：A = [1,1], B = [2,2]
输出：[1,2]

示例 2：

输入：A = [1,2], B = [2,3]
输出：[1,2]

示例 3：

输入：A = [2], B = [1,3]
输出：[2,3]

示例 4：

输入：A = [1,2,5], B = [2,4]
输出：[5,4]

提示：

1 <= A.length <= 10000
1 <= B.length <= 10000
1 <= A[i] <= 100000
1 <= B[i] <= 100000
保证爱丽丝与鲍勃的糖果总量不同。
答案肯定存在。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {

};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 公平的糖果交换
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = (A, B) => {
  const harf = (A.reduce((prev, next) => { return prev + next }, 0) - B.reduce((prev, next) => { return prev + next }, 0)) / 2;
  for (let i = 0; i < A.length; i++) {
    if (B.includes(A[i] - harf)) {
      return [A[i], A[i] - harf];
    }
  }
};

console.log(fairCandySwap([1, 1], [2, 2])); // [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1, 2]
console.log(fairCandySwap([2], [1, 3])); // [2, 3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); // [5, 4]
```

`node index.js` 返回：

```js
[ 1, 2 ]
[ 1, 2 ]
[ 2, 3 ]
[ 5, 4 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 75/75 cases passed (500 ms)
* Your runtime beats 67.23 % of javascript submissions
* Your memory usage beats 52.63 % of javascript submissions (39.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

突然想到个问题：

* 数学那么万能，为何不尝试用数学呢？

已知 **爱丽丝** 拥有的糖果总数是 `x`，**鲍勃** 拥有的糖果总数是 `y`，他们需要交换的糖果为 `[m, n]`，其中 `m` 为 **爱丽丝** 需要交换的糖果，`n` 为 **鲍勃** 那么得到公式：

* x + n - m = y + m - n

即：(x - y) / 2 = m - n;

那么这样就简单的：

> 暴力破解

```js
const fairCandySwap = (A, B) => {
  const ASum = A.reduce((prev, next) => { return prev + next }, 0);
  const BSum = B.reduce((prev, next) => { return prev + next }, 0);
  const harf = (ASum - BSum) / 2;
  for (let i = 0; i < A.length; i++) {
    if (B.includes(A[i] - harf)) {
      return [A[i], A[i] - harf];
    }
  }
};
```

先不说逻辑，咱们看看 Submit 提交：

```js
Accepted
* 75/75 cases passed (520 ms)
* Your runtime beats 47.9 % of javascript submissions
* Your memory usage beats 52.63 % of javascript submissions (39.3 MB)
```

很明显我们的思路是 OK 的：

* (x - y) / 2 = m - n;

1. 求 A 数组的总和 `ASum`；
2. 求 B 数组的总和 `BSum`；
3. 求左半边的值 `(ASum - BSum) / 2`，即 `harf`；
4. 遍历 A 数组，判断数组中每个元素 `A[i] - harf` 是不是存在于 B 数组中，如果存在（必定存在），则返回结果。

enm...还真用数学思路解决了一道题~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
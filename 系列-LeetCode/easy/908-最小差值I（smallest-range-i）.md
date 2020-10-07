908 - 最小差值I（smallest-range-i）
===

> Create by **jsliang** on **2020-01-21 11:42:52**  
> Recently revised in **2020-01-21 12:08:54**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/smallest-range-i/
* **题目内容**：

```
给定一个整数数组 A，
对于每个整数 A[i]，
我们可以选择任意 x 满足 -K <= x <= K，
并将 x 加到 A[i] 中。

在此过程之后，我们得到一些数组 B。

返回 B 的最大值和 B 的最小值之间可能存在的最小差值。

示例 1：

输入：A = [1], K = 0
输出：0
解释：B = [1]

示例 2：

输入：A = [0,10], K = 2
输出：6
解释：B = [2,8]

示例 3：

输入：A = [1,3,6], K = 3
输出：0
解释：B = [3,3,3] 或 B = [4,4,4]

提示：

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-range-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最小差值I
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) => {
  let leftMax = Number.MIN_SAFE_INTEGER, // 左区间最大值
      rightMax = Number.MAX_SAFE_INTEGER; // 右区间最小值
  for (let i = 0; i < A.length; i++) {
    leftMax = Math.max(leftMax, A[i] - K);
    rightMax = Math.min(rightMax, A[i] + K);
  }
  return rightMax > leftMax ? 0 : leftMax - rightMax;
};

console.log(smallestRangeI([0, 10], 2)); // 6
console.log(smallestRangeI([1, 3, 6], 3)); // 0
```

`node index.js` 返回：

```js
6
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 68/68 cases passed (60 ms)
* Your runtime beats 93.33 % of javascript submissions
* Your memory usage beats 46.15 % of javascript submissions (36.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

乍看之下，一脸懵逼，这题有点不好理解？

仔细看了 5 遍，然后想了下，举个例子：

> 例子 1

1、A = [0,10], K = 2

这时候：

> 下面的 [ ] 表示数学的闭区间

* A[0] = [-2, 2]
* A[1] = [8, 12]

这时候最短距离应该是 `[2, 8]` 的最短。

再举个例子：

> 例子 2

2、A = [1,3,6], K = 3

这时候：

> 下面的 [ ] 表示数学的闭区间

* A[0] = [-2, 4]
* A[1] = [0, 6]
* A[2] = [3, 9]

从中取相差比较小的值，即 [3, 3, 3] 或者 [4, 4, 4]。

从而我们得出结论：

* 取【左区间最大值 - 右区间最小值的差值】！前提是左区间比右区间大。

以上为个人猜测，如果下面错了，当我没说~

> 暴力破解

```js
const smallestRangeI = (A, K) => {
  let leftMax = Number.MIN_SAFE_INTEGER, // 左区间最大值
      rightMax = Number.MAX_SAFE_INTEGER; // 右区间最小值
  for (let i = 0; i < A.length; i++) {
    leftMax = Math.max(leftMax, A[i] - K);
    rightMax = Math.min(rightMax, A[i] + K);
  }
  return rightMax > leftMax ? 0 : leftMax - rightMax;
};
```

Submit 提交试试：

```js
Accepted
* 68/68 cases passed (60 ms)
* Your runtime beats 93.33 % of javascript submissions
* Your memory usage beats 46.15 % of javascript submissions (36.1 MB)
```

这个真的一次 Submit 成功，惊喜。

思路如下：

1. 设置 `leftMax` 为左区间最大值，所以初始化应该是 JavaScript 最小值（用来获取最大值）。
2. 设置 `rightMax` 为右区间最小值，所以初始化应该是 JavaScript 最大值（用来获取最小值）。
3. 遍历数组 `A`，`leftMax` 和 `A[i] - K` 来比较；`rightMax` 和 `A[i] + k` 来比较。
4. 如果最后结果是右区间最小值比左区间最大值还大，那么返回 0；否则返回左区间最大值 - 右区间最小值。

这样，我们就完成了这道题的破解~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
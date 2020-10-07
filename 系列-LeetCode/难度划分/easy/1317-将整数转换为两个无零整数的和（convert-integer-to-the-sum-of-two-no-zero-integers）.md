1317 - 将整数转换为两个无零整数的和（convert-integer-to-the-sum-of-two-no-zero-integers）
===

> Create by **jsliang** on **2020-02-01 20:37:25**  
> Recently revised in **2020-02-01 20:51:20**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
* **题目内容**：

```
「无零整数」是十进制表示中 不含任何 0 的正整数。

给你一个整数 n，请你返回一个 由两个整数组成的列表 [A, B]，满足：

A 和 B 都是无零整数
A + B = n
题目数据保证至少有一个有效的解决方案。

如果存在多个有效解决方案，你可以返回其中任意一个。

示例 1：

输入：n = 2
输出：[1,1]
解释：A = 1, B = 1. A + B = n，
并且 A 和 B 的十进制表示形式都不包含任何 0 。

示例 2：

输入：n = 11
输出：[2,9]

示例 3：

输入：n = 10000
输出：[1,9999]

示例 4：

输入：n = 69
输出：[1,68]

示例 5：

输入：n = 1010
输出：[11,999]

提示：

2 <= n <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 将整数转换为两个无零整数的和
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = (n) => {
  let time = 1;
  while (
    String(time).includes('0')
    || String(n - time).includes('0')
  ) {
    time++;
  }
  return [time, n - time];
};

console.log(getNoZeroIntegers(2)); // [1, 1]
console.log(getNoZeroIntegers(11)); // [2, 9]
console.log(getNoZeroIntegers(1010)); // [11, 999]
```

`node index.js` 返回：

```js
[ 1, 1 ]
[ 2, 9 ]
[ 11, 999 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 206/206 cases passed (72 ms)
* Your runtime beats 46.31 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

首先，解读题意：

1. 给出一个整数 `n`。
2. 需要输出一个数组 `[A, B]`。
3. 其中 `A` 和 `B` 都是正整数（非 0 和负整数）
4. 存在 `A + B = n`。
5. 返回其中一个结果即可。

从上面来看，这道题也是非常宽松的，我们是不是输入 `[1, n - 1]` 即可？

> 暴力破解【错误】

```js
const getNoZeroIntegers = (n) => {
  return [1, n - 1];
};
```

Submit 提交：

```js
Wrong Answer
* 148/206 cases passed (N/A)

Testcase
* 11

Answer
* [1,10]

Expected Answer
* [2,9]
```

事实证明我们忽略了个条件：

* 返回的结果的正整数，不能包含 0。例如 `10`、`100`。

OK，修改下：

> 暴力破解

```js
const getNoZeroIntegers = (n) => {
  let time = 1;
  while (
    String(time).includes('0')
    || String(n - time).includes('0')
  ) {
    time++;
  }
  return [time, n - time];
};
```

如果 `time` 包含 0 或者 `n - time` 包含 0，那么我们就不停 + 1，直到两者都不包含为止。

Submit 提交：

```js
Accepted
* 206/206 cases passed (72 ms)
* Your runtime beats 46.31 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.1 MB)
```

这样，我们就完成了这道题。

当然，如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
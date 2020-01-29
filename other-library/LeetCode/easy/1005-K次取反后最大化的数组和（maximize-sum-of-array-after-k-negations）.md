1005 - K次取反后最大化的数组和（maximize-sum-of-array-after-k-negations）
===

> Create by **jsliang** on **2020-01-29 16:29:39**  
> Recently revised in **2020-01-29 17:28:18**

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
* **涉及知识**：贪心算法
* **题目地址**：https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
* **题目内容**：

```
给定一个整数数组 A，
我们只能用以下方法修改该数组：
我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，
然后总共重复这个过程 K 次。
（我们可以多次选择同一个索引 i。）

以这种方式修改数组后，返回数组可能的最大和。

示例 1：

输入：A = [4,2,3], K = 1
输出：5
解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。

示例 2：

输入：A = [3,-1,0,2], K = 3
输出：6
解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。

示例 3：

输入：A = [2,-3,-1,5,-4], K = 2
输出：13
解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。

提示：

1 <= A.length <= 10000
1 <= K <= 10000
-100 <= A[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations
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
var largestSumAfterKNegations = function(A, K) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name K次取反后最大化的数组和
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (A, K) => {
  // 1. 定义各种字段
  const positiveNumbers = []; // 正数
  const negativeNumbers = []; // 负数
  let zero = false; // 是否有 0
  let min = 101; // -100 <= A[i] <= 100
  let needMin = false; // 是否需要对最小值操作
  
  // 2. 获取正数、负数和 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      positiveNumbers.push(A[i]);
    } else if (A[i] < 0) {
      negativeNumbers.push(A[i]);
    } else {
      zero = true;
    }
    min = Math.min(min, Math.abs(A[i]));
  }
  
  // 3. 对正数集合和负数集合进行重新排序
  positiveNumbers.sort((a, b) => a - b); // 正数排序：[1, 2, 3]
  negativeNumbers.sort((a, b) => a - b); // 负数排序：[-3, -2, -1]

  // 4. 进行取反操作
  const negLength = negativeNumbers.length;
  if (K <= negLength) {
    for (let i = 0; i < K; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && zero) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && !zero && (K - negLength) % 2 === 0) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && !zero && (K - negLength) % 2 === 1) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
    needMin = true;
  }

  // 5. 汇总计算
  if (needMin) {
    return [...negativeNumbers, ...positiveNumbers].reduce((prev, next) => prev + next) - (min * 2);
  } else {
    return [...negativeNumbers, ...positiveNumbers].reduce((prev, next) => prev + next);
  }
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4, 0], 2)); // 13
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4, 0], 4)); // 15
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 5)); // 15
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 4)); // 13
console.log(largestSumAfterKNegations([-2, 4, 4, 4, 6, 3], 1)); // 23
```

`node index.js` 返回：

```js
13
15
15
13
23
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 78/78 cases passed (80 ms)
* Your runtime beats 58.73 % of javascript submissions
* Your memory usage beats 24.53 % of javascript submissions (37 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

题目意思是：

1. 假设有 A：`[3, -1, 0, 2]`，有 K：`3`。
2. 我们需要对 A 进行 K 次操作，以取得最大数组的和。
3. 在上面的数组中，我们对 `-1` 进行 1 次取反，得到 `1`，然后对其他任意数进行两次取反，得到原数，最终结果为 `0 + 1 + 2 + 3 = 6`。

OK，题意倒是理解了，但是不知道怎么下手，先尝试尝试吧：

> 区分正数、负数以及 0

```js
const largestSumAfterKNegations = (A, K) => {
  const positiveNumbers = []; // 正数
  const negativeNumbers = []; // 负数
  let zero = false; // 是否有 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      positiveNumbers.push(A[i]);
    } else if (A[i] < 0) {
      negativeNumbers.push(A[i]);
    } else {
      zero = true;
    }
  }
  positiveNumbers.sort((a, b) => a - b);
  negativeNumbers.sort((a, b) => a - b);
  console.log('正数集合：', positiveNumbers);
  console.log('负数集合：', negativeNumbers);
  console.log('是否有 0：', zero);
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4, 0], 2));
```

打印出来：

```
正数集合： [ 2, 5 ]
负数集合： [ -4, -3, -1 ]
是否有 0： true
```

现在最主要的是看 K，我们要做到的是尽可能把负数给转换成正数，以取得最大化的数组和。

所以：

1. 【`K <= negativeNumbers.length`】。如果 K 小于负数集合的长度，那么我们直接从小到大取反 K 个数字，求和即可（负数最小的取反得到的值比较大，例如 `-4 < -3`，`-(-4) > -(-3)`）。
2. 【`K > negativeNumbers.length, zero = true`】如果 K 大于负数集合的长度，并且包含 0，那么将所有负数集合中的数字变成正数，其他次数作用于 0 即可，求和即可。
3. 【`K > negativeNumbers.length, zero = false, (K - negativeNumbers.length) % 2 === 0`】如果 K 大于负数集合的长度，并且不包含 0，并并且多出来的次数是偶数，那么我们还是将所有负数集合中的数字变成正数，求和即可。（因为多出来的次数是偶数，所以我们可以重复对一个数字求反：对 4 求反 2 次还是 4）
4. 【`K > negativeNumbers.length, zero = false, (K - negativeNumbers.length) % 2 === 1`】次条件类似于判断 3，但是有个不同的是多出来的次数是奇数，所以我们还需要对绝对值最小的值进行一次取反操作~

分析完毕，答案呼之欲出：

> 暴力破解

```js
const largestSumAfterKNegations = (A, K) => {
  // 1. 定义各种字段
  const positiveNumbers = []; // 正数
  const negativeNumbers = []; // 负数
  let zero = false; // 是否有 0
  let min = 101; // -100 <= A[i] <= 100
  let needMin = false; // 是否需要对最小值操作
  
  // 2. 获取正数、负数和 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      positiveNumbers.push(A[i]);
    } else if (A[i] < 0) {
      negativeNumbers.push(A[i]);
    } else {
      zero = true;
    }
    min = Math.min(min, Math.abs(A[i]));
  }
  
  // 3. 对正数集合和负数集合进行重新排序
  positiveNumbers.sort((a, b) => a - b); // 正数排序：[1, 2, 3]
  negativeNumbers.sort((a, b) => a - b); // 负数排序：[-3, -2, -1]

  // 4. 进行取反操作
  const negLength = negativeNumbers.length;
  if (K <= negLength) {
    for (let i = 0; i < K; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && zero) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && !zero && (K - negLength) % 2 === 0) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
  } else if (K > negLength && !zero && (K - negLength) % 2 === 1) {
    for (let i = 0; i < negLength; i++) {
      negativeNumbers[i] = - negativeNumbers[i];
    }
    needMin = true;
  }

  // 5. 汇总计算
  if (needMin) {
    return [...negativeNumbers, ...positiveNumbers].reduce((prev, next) => prev + next) - (min * 2);
  } else {
    return [...negativeNumbers, ...positiveNumbers].reduce((prev, next) => prev + next);
  }
};
```

这里为了方便观众老爷观看，所以取反操作 **jsliang** 并没有对相同的操作进行合并，否则可以变成：

```js
if (K <= negLength) {
 for (let i = 0; i < K; i++) {
   negativeNumbers[i] = - negativeNumbers[i];
 }
} else if (K > negLength && !zero && (K - negLength) % 2 === 1) {
 for (let i = 0; i < negLength; i++) {
   negativeNumbers[i] = - negativeNumbers[i];
 }
 needMin = true;
} else {
 for (let i = 0; i < negLength; i++) {
   negativeNumbers[i] = - negativeNumbers[i];
 }
}
```

以上，就是 **jsliang** 对本题的解法~

当然，如果小伙伴们有更好的解法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
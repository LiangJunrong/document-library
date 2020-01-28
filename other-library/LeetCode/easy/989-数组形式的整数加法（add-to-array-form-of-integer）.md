989 - 数组形式的整数加法（add-to-array-form-of-integer）
===

> Create by **jsliang** on **2020-01-28 17:17:17**  
> Recently revised in **2020-01-28 18:11:40**

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
* **题目地址**：https://leetcode-cn.com/problems/add-to-array-form-of-integer/
* **题目内容**：

```
对于非负整数 X 而言，
X 的数组形式是每位数字按从左到右的顺序形成的数组。

例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

示例 1：

输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234

示例 2：

输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455

示例 3：

输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021

示例 4：

输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000

提示：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
如果 A.length > 1，那么 A[0] != 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
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
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 数组形式的整数加法
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const addToArrayForm = (A, K) => {
  // 1. 转换 A 和 K 为整数型数组
  let newA = A;
  let newB = String(K).split('').map(item => Number(item));
  // 2. 根据最长长度对 A 或者 K 进行补位
  const maxLength = Math.max(newA.length, newB.length);
  if (newA.length !== maxLength) {
    newA = [...Array.from(Array(maxLength - newA.length), (value => 0)), ...newA];
  } else {
    newB = [...Array.from(Array(maxLength - newB.length), (value => 0)), ...newB];
  }
  // 3. 获取结果，result 为结果集，patch 为补丁，即满 10 进位
  const result = [];
  let patch = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    // 4. 判断是否加上补丁需要进位不
    const tempResult = newA[i] + newB[i];
    if (tempResult + patch >= 10) {
      result.unshift((tempResult + patch) % 10);
      patch = 1;
    } else {
      result.unshift(tempResult + patch);
      patch = 0;
    }
  }
  // 5. 最后如果是 A = [9, 9, 9], K = 1 这种情况，需要添加前置 1
  return patch === 1 ? [...[1], ...result] : result;
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1, 2, 3, 4]
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)); // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

`node index.js` 返回：

```js
[ 1, 2, 3, 4 ]
[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 156/156 cases passed (256 ms)
* Your runtime beats 15.35 % of javascript submissions
* Your memory usage beats 20.24 % of javascript submissions (42.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

拿到题目，直接上手，单行求解，近乎完美：

> 暴力破解【报错】

```js
const addToArrayForm = (A, K) => {
  return String(Number(A.join('')) + K).split('').map(i => Number(i));
};
```

为啥是近乎呢？

```js
Wrong Answer
94/156 cases passed (N/A)

Testcase
[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
516

Answer
[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,0,0]

Expected Answer
[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
```

因为它是 20 位数字，超过 JavaScript 精准度了~

再仔细看它的长度 `1 <= A.length <= 10000`，懂了吧，要先搞好加法啦~

> 暴力破解【完善】

```js
const addToArrayForm = (A, K) => {
  // 1. 转换 A 和 K 为整数型数组
  let newA = A;
  let newB = String(K).split('').map(item => Number(item));
  // 2. 根据最长长度对 A 或者 K 进行补位
  const maxLength = Math.max(newA.length, newB.length);
  if (newA.length !== maxLength) {
    newA = [...Array.from(Array(maxLength - newA.length), (value => 0)), ...newA];
  } else {
    newB = [...Array.from(Array(maxLength - newB.length), (value => 0)), ...newB];
  }
  // 3. 获取结果，result 为结果集，patch 为补丁，即满 10 进位
  const result = [];
  let patch = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    // 4. 判断是否加上补丁需要进位不
    const tempResult = newA[i] + newB[i];
    if (tempResult + patch >= 10) {
      result.unshift((tempResult + patch) % 10);
      patch = 1;
    } else {
      result.unshift(tempResult + patch);
      patch = 0;
    }
  }
  // 5. 最后如果是 A = [9, 9, 9], K = 1 这种情况，需要添加前置 1
  return patch === 1 ? [...[1], ...result] : result;
};
```

所以这道题的重点考察不是数组的操作，而是对于超过 JavaScript 限制的整数加减的一种破解~

根据你使用的方法的不同，你会得到不同的 Submit 结果，就好比 **jsliang** 这里就是下等方法：

```js
Accepted
* 156/156 cases passed (256 ms)
* Your runtime beats 15.35 % of javascript submissions
* Your memory usage beats 20.24 % of javascript submissions (42.5 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

方丈我想学上乘功法~

好咧：

> 官方题解

```js
const addToArrayForm = (A, K) => {
  const ans = [];
  let cur = K;
  let i = A.length;
  while (--i >= 0 || cur > 0) {
    if (i >= 0) {
      cur += A[i];
    }
    ans.push(cur % 10);
    cur = Math.floor(cur / 10);
  }
  ans.reverse();
  return ans;
};
```

是不是感觉很神奇，这也行~

Submit 提交：

```js
Accepted
* 156/156 cases passed (124 ms)
* Your runtime beats 96.05 % of javascript submissions
* Your memory usage beats 66.26 % of javascript submissions (40.4 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
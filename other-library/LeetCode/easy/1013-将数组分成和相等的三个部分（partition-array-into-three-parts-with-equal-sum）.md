1013 - 将数组分成和相等的三个部分（partition-array-into-three-parts-with-equal-sum）
===

> Create by **jsliang** on **2020-01-29 20:02:22**  
> Recently revised in **2020-01-29 20:47:17**

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
* **题目地址**：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/
* **题目内容**：

```
给定一个整数数组 A，
只有我们可以将其划分为三个和相等的非空部分时才返回 true，
否则返回 false。

形式上，如果我们可以找出索引 i+1 < j，
且满足 (A[0] + A[1] + ... + A[i]
== A[i+1] + A[i+2] + ... + A[j-1]
== A[j] + A[j-1] + ... + A[A.length - 1])
就可以将数组三等分。

示例 1：

输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

示例 2：

输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false

示例 3：

输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

提示：

3 <= A.length <= 50000
-10000 <= A[i] <= 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 将数组分成和相等的三个部分
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = (A) => {
  // 1.计算 3 等分中每份的总额
  const one = A.reduce((prev, next) => prev + next) / 3;
  
  // 2. 设置 tempSum 表示目前累计，设置 time 表示目前能构成三等分的次数
  let tempSum = 0;
  let time = 0;

  // 3. 遍历计数
  for (let i = 0; i < A.length; i++) {
    tempSum += A[i];
    if (tempSum === one) {
      time++;
      tempSum = 0;
    }
  }

  // 4. 判断总次数是否为 3 次
  return time === 3;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // true
console.log(canThreePartsEqualSum([1, 7, 2, 6, 3, 5])); // true
```

`node index.js` 返回：

```js
true
false
true
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 53/53 cases passed (76 ms)
* Your runtime beats 81.25 % of javascript submissions
* Your memory usage beats 83.72 % of javascript submissions (39.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

按照题目的意思，就是我们需要三等分一个数组。

假设数组类似于一根棒子，我们需要拿刀将其切成三等分，如果能成，返回 `true`，如果不成，返回 `false`。

例如数组：`[1, 7, 2, 6, 3, 5]`，我们可以切成：`[1, 7], [2, 6], [3, 5]`，这样就是 3 等分了。

所以我们需要考虑着两个点落在哪，才能获取三等分：

> 暴力破解【超时】

```js
const canThreePartsEqualSum = (A) => {
  // 减少一次 reduce 操作
  const sum = A.reduce((prev, next) => prev + next);
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      const sum1 = A.slice(0, i + 1).reduce((prev, next) => prev + next);
      const sum2 = A.slice(i + 1, j + 1).reduce((prev, next) => prev + next);
      const sum3 = sum - sum1 - sum2;
      if (sum1 === sum2 && sum1 === sum3) {
        return true;
      }
    }
  }
  return false;
};
```

这时候给出的 Submit 提交为：

```js
Time Limit Exceeded
* 48/53 cases passed (N/A)
```

暴力有风险，使用需谨慎~

那么我们换个思路：

* 获取每份的长度 `one`，当竹竿累计到 `one` 的长度的时候，我们就砍掉它，同时 `time++`，判断最后是不是出现了 3 次即可。

> 暴力破解【通过】

```js
const canThreePartsEqualSum = (A) => {
  // 1.计算 3 等分中每份的总额
  const one = A.reduce((prev, next) => prev + next) / 3;
  
  // 2. 设置 tempSum 表示目前累计，设置 time 表示目前能构成三等分的次数
  let tempSum = 0;
  let time = 0;

  // 3. 遍历计数
  for (let i = 0; i < A.length; i++) {
    tempSum += A[i];
    if (tempSum === one) {
      time++;
      tempSum = 0;
    }
  }

  // 4. 判断总次数是否为 3 次
  return time === 3;
};
```

Submit 提交：

```js
Accepted
* 53/53 cases passed (76 ms)
* Your runtime beats 81.25 % of javascript submissions
* Your memory usage beats 83.72 % of javascript submissions (39.6 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
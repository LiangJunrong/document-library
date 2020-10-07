985 - 查询后的偶数和（sum-of-even-numbers-after-queries）
===

> Create by **jsliang** on **2020-01-28 16:25:22**  
> Recently revised in **2020-01-28 17:09:41**

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
* **题目地址**：https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries/
* **题目内容**：

```
给出一个整数数组 A 和一个查询数组 queries。

对于第 i 次查询，
有 val = queries[i][0], 
index = queries[i][1]，
我们会把 val 加到 A[index] 上。
然后，第 i 次查询的答案是 A 中偶数值的和。

（此处给定的 index = queries[i][1] 是从 0 开始的索引，
每次查询都会永久修改数组 A。）

返回所有查询的答案。

你的答案应当以数组 answer 给出，
answer[i] 为第 i 次查询的答案。

示例：

输入：
A = [1,2,3,4], 
queries = [[1,0],[-3,1],[-4,0],[2,3]]
输出：[8,6,2,4]
解释：
开始时，数组为 [1,2,3,4]。
将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，
偶数值之和为 2 + 2 + 4 = 8。
将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，
偶数值之和为 2 + 4 = 6。
将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，
偶数值之和为 -2 + 4 = 2。
将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，
偶数值之和为 -2 + 6 = 4。

提示：

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
1 <= queries.length <= 10000
-10000 <= queries[i][0] <= 10000
0 <= queries[i][1] < A.length

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 查询后的偶数和
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = (A, queries) => {
  const resultList = [];
  // 1. 先获取一开始的偶数和
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result += A[i];
    }
  }
  // 2. 每次变化将偶数和变动
  for (let i = 0; i < queries.length; i++) {
    // 2.1 如果相加后为偶数
    if ((A[queries[i][1]] + queries[i][0]) % 2 === 0) {
      // 2.1.1 如果原值相加前为偶数，我们需要先去除操作
      if (A[queries[i][1]] % 2 === 0) {
        result = result + queries[i][0];
        resultList.push(result);
      } else {
        result += A[queries[i][1]] + queries[i][0];
        resultList.push(result);
      }
    } else { // 2.2 如果相加后位奇数
      // 2.2.1 如果原值相加前为偶数，我们需要先去除操作
      if (A[queries[i][1]] % 2 === 0) {
        result = result - A[queries[i][1]];
        resultList.push(result);
      } else {
        resultList.push(result);
      }
    }
    // 修改原值
    A[queries[i][1]] += queries[i][0];
  }
  return resultList;
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]])); // [ 8, 6, 2, 4 ]
```

`node index.js` 返回：

```js
[ 8, 6, 2, 4 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 58/58 cases passed (116 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 73.56 % of javascript submissions (47.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

了解这道题的意思，看示例即可：

```
示例：

输入：
A = [1,2,3,4], 
queries = [[1,0],[-3,1],[-4,0],[2,3]]
输出：[8,6,2,4]
解释：
开始时，数组为 [1,2,3,4]。
将 1 加到 A[0] 上之后，数组为 [2,2,3,4]，
偶数值之和为 2 + 2 + 4 = 8。
将 -3 加到 A[1] 上之后，数组为 [2,-1,3,4]，
偶数值之和为 2 + 4 = 6。
将 -4 加到 A[0] 上之后，数组为 [-2,-1,3,4]，
偶数值之和为 -2 + 4 = 2。
将 2 加到 A[3] 上之后，数组为 [-2,-1,3,6]，
偶数值之和为 -2 + 6 = 4。
```

即：

首先我们有一串数组 `A = [1, 2, 3, 4]`；

然后我们有一串指令 `queries = [[1, 0], [-3, 1], [-4, 0], [2, 3]]`。

接着我们看指令每一项的第二个元素，这个元素代表需要操作数组 `A` 的索引，这里有 `0 -> 1 -> 0 -> 3`。

所以一开始操作第 0 项，将第 0 项的值加上指令的值（1），得到 `[1, 2, 3, 4] -> [2, 2, 3, 4]`，这时候的偶数和为 `2 + 2 + 4 = 8`。

以此类推，将所有的偶数和通过数组展示出来，最后得到结果：`[8, 6, 2, 4]`。

> 暴力破解【超时】

```js
const sumEvenAfterQueries = (A, queries) => {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    A[queries[i][1]] += queries[i][0];
    let tempResult = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] % 2 === 0) {
        tempResult += A[j];
      }
    }
    result.push(tempResult);
  }
  return result;
};
```

众所周知，**jsliang** 擅长的就是暴力，所以毫无疑问，这道题也暴力破解上了~

但是呢，一开始我就知道会超限了~听我分析下为啥：

1. 设置 `result` 获取所有偶数和。
2. 遍历 `queries`，价根据它的指令修改 `A` 的项。
3. 设置 `tempResult` 获取本次偶数和，将当中的 **正偶数** 和 **负偶数** 累积起来即可，将 `tempResult` 塞进 `result` 中。
4. 最后返回 `result` 即可。

为什么说它会超时呢？

因为我们每修改一次元素，我们就需要重新计算一遍 `A` 中的所有偶数的和。

这无疑非常耗时。

所有有没有法子，可以将 `A` 中的目前偶数和记起来，这样就不用那么麻烦了？

> 暴力破解【优化】

```js
const sumEvenAfterQueries = (A, queries) => {
  const resultList = [];
  // 1. 先获取一开始的偶数和
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result += A[i];
    }
  }
  // 2. 每次变化将偶数和变动
  for (let i = 0; i < queries.length; i++) {
    // 2.1 如果相加后为偶数
    if ((A[queries[i][1]] + queries[i][0]) % 2 === 0) {
      // 2.1.1 如果原值相加前为偶数，我们需要先去除操作
      if (A[queries[i][1]] % 2 === 0) {
        result = result + queries[i][0];
        resultList.push(result);
      } else {
        result += A[queries[i][1]] + queries[i][0];
        resultList.push(result);
      }
    } else { // 2.2 如果相加后位奇数
      // 2.2.1 如果原值相加前为偶数，我们需要先去除操作
      if (A[queries[i][1]] % 2 === 0) {
        result = result - A[queries[i][1]];
        resultList.push(result);
      } else {
        resultList.push(result);
      }
    }
    // 修改原值
    A[queries[i][1]] += queries[i][0];
  }
  return resultList;
};
```

解题步骤如下，我们获得了一次质的提升：

```js
Accepted
* 58/58 cases passed (116 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 73.56 % of javascript submissions (47.5 MB)
```

完美~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
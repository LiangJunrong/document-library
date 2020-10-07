1029 - 两地调度（two-city-scheduling）
===

> Create by **jsliang** on **2020-01-30 11:28:47**  
> Recently revised in **2020-01-30 13:20:46**

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
* **涉及知识**：贪心算法
* **题目地址**：https://leetcode-cn.com/problems/two-city-scheduling/
* **题目内容**：

```
公司计划面试 2N 人。

第 i 人飞往 A 市的费用为 costs[i][0]，
飞往 B 市的费用为 costs[i][1]。

返回将每个人都飞到某座城市的最低费用，
要求每个城市都有 N 人抵达。

示例：

输入：[[10,20],[30,200],[400,50],[30,20]]
输出：110
解释：
第一个人去 A 市，费用为 10。
第二个人去 A 市，费用为 30。
第三个人去 B 市，费用为 50。
第四个人去 B 市，费用为 20。

最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。

提示：

1 <= costs.length <= 100
costs.length 为偶数
1 <= costs[i][0], costs[i][1] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-city-scheduling
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 两地调度
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = (costs) => {
  let ALength = 0;
  let BLength = 0;
  costs.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs((b[0] - b[1])));
  let result = 0;
  for (let i = 0; i < costs.length; i++) {
    if (costs[i][0] > costs[i][1]) {
      result += costs[i][1];
      BLength++;
      costs[i].now = 'B';
    } else {
      result += costs[i][0];
      ALength++;
      costs[i].now = 'A';
    }
  }
  if (ALength > BLength) {
    for (let i = 0, j = ALength - costs.length / 2; i < costs.length, j > 0; i++) {
      if (costs[i].now === 'A') {
        result = result - costs[i][0] + costs[i][1];
        j--;
      }
    }
  } else if (BLength > ALength) {
    for (let i = 0, j = BLength - costs.length / 2; i < costs.length, j > 0; i++) {
      if (costs[i].now === 'B') {
        result = result - costs[i][1] + costs[i][0];
        j--;
      }
    }
  }
  return result;
};

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])); // ALength = BLength 110
console.log(twoCitySchedCost([[10, 20], [30, 200], [50, 400], [30, 20]])); // ALength > BLength 120
console.log(twoCitySchedCost([[20, 10], [200, 30], [50, 400], [30, 20]])); // ALength < BLength 120
```

`node index.js` 返回：

```js
110
120
120
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 49/49 cases passed (60 ms)
* Your runtime beats 95.05 % of javascript submissions
* Your memory usage beats 61.04 % of javascript submissions (34.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，阐释题目：

【题目】

有一个数组 costs：[[10, 20], [30, 40]]

其中：

1. costs.length 表示其中的长度，
2. cost[i][0] 表示第 i 个人飞往 A 市的费用；
3. cost[i][1] 表示第 i 个人飞往 B 市的费用；

希望：

1. 飞往 A 市的人数和飞往 B 市的人数相等；
2. 求最低费用；

提示：

1. costs.length 为偶数
2. 1 <= costs.length <= 100
3. 1 <= costs[i][0], costs[i][1] <= 1000

**然后**，尽可能多的假设，从而尝试发现规律：

> 【假设 1】

```
输入：[[10, 20], [30, 200]]
输出：50
解释：
第一个人去 B 市，花费 20
第二个人去 A 市，花费 30
总共 20 + 30 = 50
```

> 【假设 2】

```
输入：[[10, 20], [30, 200], [400, 50], [30, 60]]
输出：130
解释：
第一个人去 B 市，花费 20
第二个人去 A 市，花费 30
第三个人去 B 市，花费 50
第四个人去 A 市，花费 30
总共 20 + 30 + 50 + 30 = 130
```

**接着**，这时候，如果我们不管公司怎么分派，我们将所有人都分配到金额最小的地方，拿 `[[10, 20], [30, 200], [400, 50], [30, 60]]` 举例：

> 【尝试破解】

```js
/**
 * @name 两地调度
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = (costs) => {
  const result = [];
  for (let i = 0; i < costs.length; i++) {
    if (costs[i][0] > costs[i][1]) {
      result.push({
        city: 'B',
        cost: costs[i][1],
        prices: costs[i],
      });
    } else {
      result.push({
        city: 'A',
        cost: costs[i][0],
        prices: costs[i],
      });
    }
  }
  return result;
};

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 60]])); // 110
```

Submit 提交：

```js
[
  { city: 'A', cost: 10, prices: [ 10, 20 ] },
  { city: 'A', cost: 30, prices: [ 30, 200 ] },
  { city: 'B', cost: 50, prices: [ 400, 50 ] },
  { city: 'A', cost: 30, prices: [ 30, 60 ] },
]
```

这时候我们会发现，有 3 个人去了 A 市，肯定要赶走一个人是不是？

这时候我们再观察下它们对应的 `prices`，我们肯定挑一个转机费用最小的，让它滚去 B 市。

下面是破解代码，大家可以大略看看（不用仔细专研，下面会进行优化）

> 贪心算法【未优化】

```js
/**
 * @name 两地调度
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = (costs) => {
  // 1. 设置 result 观察 A、B 两地调配
  const result = [];
  let ALength = 0; // 记录去 A 地的
  let BLength = 0; // 记录去 B 地的
  for (let i = 0; i < costs.length; i++) {
    if (costs[i][0] > costs[i][1]) {
      result.push({
        city: 'B',
        cost: costs[i][1],
        prices: costs[i],
      });
      BLength++;
    } else {
      result.push({
        city: 'A',
        cost: costs[i][0],
        prices: costs[i],
      });
      ALength++;
    }
  }
  // 2. 判断 A 地多还是 B 地多还是两者一样多，进行更改以及统计
  if (ALength > BLength) {
    const filterResult = result
      .filter(item => item.city === 'A')
      .sort((a, b) => Math.abs(a.prices[0] - a.prices[1]) - Math.abs(b.prices[0] - b.prices[1]));
    const oldList = result.filter(item => item.city === 'B');
    for (let i = 0; i < ALength - costs.length / 2; i++) {
      filterResult[i] = {
        city: 'B',
        cost: filterResult[i].prices[1],
        prices: filterResult[i].prices,
      }
    }
    return [...filterResult, ...oldList].reduce((prev, next) => prev + next.cost, 0);
  } else if (BLength > ALength) {
    const filterResult = result
      .filter(item => item.city === 'B')
      .sort((a, b) => Math.abs(a.prices[0] - a.prices[1]) - Math.abs(b.prices[0] - b.prices[1]));
    const oldList = result.filter(item => item.city === 'A');
    for (let i = 0; i < BLength - costs.length / 2; i++) {
      filterResult[i] = {
        city: 'A',
        cost: filterResult[i].prices[0],
        prices: filterResult[i].prices,
      }
    }
    return [...filterResult, ...oldList].reduce((prev, next) => prev + next.cost, 0);
  } else {
    return result.reduce((prev, next) => prev + next.cost, 0);
  }
};

console.log(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])); // ALength > BLength 110
console.log(twoCitySchedCost([[20, 10], [200, 30], [400, 50], [30, 20]])); // ALength < BLength 110
console.log(twoCitySchedCost([[20, 10], [200, 30], [10, 50], [20, 40]])); // ALength = BLength 70
```

Submit 提交：

```js
Accepted
* 49/49 cases passed (72 ms)
* Your runtime beats 54.46 % of javascript submissions
* Your memory usage beats 93.51 % of javascript submissions (33.9 MB)
```

是的，根据这个思路，我们完全 OK 破解。

那么，我们优化下代码再谈谈：

> 贪心算法【优化】

```js
const twoCitySchedCost = (costs) => {
  // 1. 先按照差值排序
  costs.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs((b[0] - b[1])));
  
  // 2. 统计 A、B 两地以及当前结果 result
  let ALength = 0;
  let BLength = 0;
  let result = 0;
  for (let i = 0; i < costs.length; i++) {
    if (costs[i][0] > costs[i][1]) {
      result += costs[i][1];
      BLength++;
      costs[i].now = 'B'; // 标记这个人去了哪里
    } else {
      result += costs[i][0];
      ALength++;
      costs[i].now = 'A'; // 标记这个人去了哪里
    }
  }

  // 4. 判断哪边有多，就削哪边
  if (ALength > BLength) {
    for (let i = 0, j = ALength - costs.length / 2; i < costs.length, j > 0; i++) {
      if (costs[i].now === 'A') {
        result = result - costs[i][0] + costs[i][1];
        j--;
      }
    }
  } else if (BLength > ALength) {
    for (let i = 0, j = BLength - costs.length / 2; i < costs.length, j > 0; i++) {
      if (costs[i].now === 'B') {
        result = result - costs[i][1] + costs[i][0];
        j--;
      }
    }
  }

  // 5. 返回最终结果
  return result;
};
```

Submit 提交：

```js
Accepted
* 49/49 cases passed (60 ms)
* Your runtime beats 95.05 % of javascript submissions
* Your memory usage beats 61.04 % of javascript submissions (34.7 MB)
```

这样，我们就搞定了这道题~

> Happy 啦~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

本来以为我那算贪的，没想到还有 **代码更贪** 的：

> 贪心算法

```js
const twoCitySchedCost = (costs) => {
  // 让其以 costs[0]-costs[1] 的差值从小到大排序。
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let sum = 0;
  // 前一半取去 A 市，后一半取去 B 市，
  // 前一半是去 A 市最合适，后一半市去 B 市最合适。
  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2) {
      sum += costs[i][0];
    } else {
      sum += costs[i][1];
    }
  }
  return sum;
};
```

Submit 提交：

```js
Accepted
* 49/49 cases passed (64 ms)
* Your runtime beats 87.13 % of javascript submissions
* Your memory usage beats 81.82 % of javascript submissions (34.5 MB)
```

学到了~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
121 - 买卖股票的最佳时机（best-time-to-buy-and-sell-stock）
===

> Create by **jsliang** on **2019-7-1 08:37:50**  
> Recently revised in **2019-7-1 09:15:08**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 机遇求解](#chapter-three-two) |
| &emsp;[3.3 解法 - 进一步思考](#chapter-three-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、动态规划
* **题目地址**：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
* **题目内容**：

```
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

示例 2:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let temp = prices[j] - prices[i];
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
};
```

* **执行测试**：

1. `prices`：`[7, 1, 5, 3, 6, 4]`
2. `return`：`5`

* **LeetCode Submit**：

```js
√ Accepted
  √ 200/200 cases passed (432 ms)
  √ Your runtime beats 32.5 % of javascript submissions
  √ Your memory usage beats 81.63 % of javascript submissions (35.1 MB)
```

* **解题思路**：

**暴力一时爽，一直暴力一直爽**

在一开始看到这道题的时候，**jsliang** 还小楞了一会，这题目有何意义？

股市是跌宕起伏的，谁都不知道买入的那一刻是不是最低时刻，卖出的那一刻是最高时刻。

只能说是相对于前面的历史而已，是相对最低和相对最高，然后……

咳咳，说多了，咱回头解题。

**首先**，咱聊聊题目的意思，大概是什么呢？

即：第 n + i 天的值大于第 n 天的值

> [7, 1, 5, 3, 6, 4]

假设你第 1 天买的是 `7`，那么你需要找一个比 `7` 大的时机卖出，从而获取利益。

那么，毫无疑问，`6 - 1` 的确是这串数组的最大求解。又或者是：

> [5, 3, 6, 4]

那么，`6 - 3` 就是最大求解。

**然后**，看出题意后，咱们进行暴力破解，无非就是双重 `for` 循环遍历，然后只要它有利润赚，我们就记录下，不停的查看是否破新高。

```js
for (let i = 0; i < prices.length - 1; i++) {
  for (let j = i + 1; j < prices.length; j++) {
    let temp = prices[j] - prices[i];
    if (temp > max) {
      max = temp;
    }
  }
}
```

假设一开始是：`[5, 3, 6, 4]`

那么，第一次循环的值，出来的 `max` 为 `6 - 5`，即是 1。

最终得到的无非是 `6 - 3`，即是 3.

**最后**，我们再将 `max` 给 `return` 出去，就暴力突突了这道题。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 机遇求解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};
```

* **执行测试**：

1. `prices`：`[7, 1, 5, 3, 6, 4]`
2. `return`：`5`

* **LeetCode Submit**：

```js
√ Accepted
  √ 200/200 cases passed (76 ms)
  √ Your runtime beats 97.33 % of javascript submissions
  √ Your memory usage beats 22.08 % of javascript submissions (35.8 MB)
```

* **解题思路**：

这种解法，相对于暴力破解，也是挺有意思的。

它的思路是什么呢？

**首先**，我设置 `min` 为 JavaScript 的最大值，设置 `max` 为 0。

**然后**，我们开始思考，当前遍历的值，减去历史中出现的最小值，即是当前的利润。

> [5, 3, 6, 4]

1. 循环第 1 次。`min = 5`，当 `prices[i]` 为 `6` 的时候，产生正利润，所以该次循环的利润为 `1`。
2. 循环第 2 次。`min = 3`，当 `prices[i]` 为 `6` 的时候，产生的正利润为 `3`；当 `prices[i]` 为 `4` 的时候，产生的正利润为 `1`。因为有 `max` 记录最高值，所以本次最高利润为 `3`。
3. 循环第 3 次和第 4 次无正利润，忽略。
4. 最终的正利润为 `3`，即 `return 3`。

```js
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};
```

**最后**，我们获取到了最高值，解题完毕。

### <a name="chapter-three-three" id="chapter-three-three">3.3 解法 - 进一步思考</a>

> [返回目录](#chapter-one)

**唯有菜鸡，才会正视别人的强大**

**jsliang** 作为个菜鸡，就很喜欢膜拜大佬题解：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/

学习别人的思想，是件非常有意义的事情，毕竟智商就摆在那里，唯有从别人思想中获取到最大价值，你才能升华自己。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
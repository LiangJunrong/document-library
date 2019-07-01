122 - 买卖股票的最佳时机II（best-time-to-buy-and-sell-stock-ii）
===

> Create by **jsliang** on **2019-07-01 17:45:53**  
> Recently revised in **2019-07-01 19:42:53**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：贪心算法、数组
* **题目地址**：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
* **题目内容**：

```
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

示例 2:
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

示例 3:
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var maxProfit = function (prices) {
  var res = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      res += prices[i + 1] - prices[i];
    }
  }
  return res;
}
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `prices`：`[7,1,5,3,6,4]`
2. `return`：`7`

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 201/201 cases passed (80 ms)
  ✔ Your runtime beats 93.2 % of javascript submissions
  ✔ Your memory usage beats 61.2 % of javascript submissions (35.2 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，这道题的解法肯定不止我这一种，但是我没想到会是这么 ** 的解法也是可以的。

按照论坛的意思：**只要后一天价格比前一天高，就在前一天买进后一天卖出**

就是说：

* `[1,2,3,4,5]`：

1. 1 买 2 卖，收益 `2 - 1 = 1`
2. 2 买 3 卖，收益 `3 - 2 = 1`
3. 3 买 4 卖，收益 `4 - 3 = 1`
4. 4 买 5 卖，收益 `5 - 4 = 1`
5. `sum = 1 + 1 + 1 + 1 = 4`

* `[7,1,5,3,6,4]`：

1. 1 买 5 卖，收益 `5 - 1 = 4`
2. 3 卖 6 卖，收益 `6 - 3 = 3`
3. `sum = 4 + 3 = 7`

即当天可以立即卖出，立即买入。

**然后**，股票的价格千变万化，只会在某个瞬间，股票的价格是确定的，A 股一天的交易总时间为 4 个小时，这种瞬间太多了，想要在买入前找到价格最低的那一瞬间，几乎是不可能的。

**最后**，感觉做完这道题（看我题解），对我毫无帮助，感觉没学到知识点，可能是我层次太低没理解到，希望之后能有所收获。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
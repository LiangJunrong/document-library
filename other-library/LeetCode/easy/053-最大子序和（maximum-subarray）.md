053 - 最大子序和（maximum-subarray）
===

> Create by **jsliang** on **2019-06-10 15:15:45**  
> Recently revised in **2019-06-10 17:46:24**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 动态规划](#chapter-three-one) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、分治算法、动态规划
* **题目地址**：https://leetcode-cn.com/problems/maximum-subarray/
* **题目内容**：

```
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

进阶:
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 动态规划</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var maxSubArray = function(nums) {
  let result = nums[0]; // 最终结果值
  for (let i = 0; i < nums.length; i++) {
    let accumulativeValue = nums[i]; // 本次累加值
    let highest = nums[i]; // 本次最高值
    for (let j = i; j + 1 < nums.length; j++) {
      accumulativeValue = accumulativeValue + nums[j + 1];
      if (accumulativeValue > highest) {
        highest = accumulativeValue;
      }
    }
    if (highest > result) {
      result = highest;
    }
  }
  return result;
};
```

* **执行测试**：

1. `nums`：`[1, -2, 2, 3, -1]`
2. `return`：

```js
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 202/202 cases passed (292 ms)
  ✔ Your runtime beats 7.93 % of javascript submissions
  ✔ Your memory usage beats 97.97 % of javascript submissions (34.5 MB)
```

* **解题思路**：

讲道理说，这种解法属于动态规划。

所谓动态规划，就是利用逐步求解，以连续数组结束位置为每一步的解，在这里解法中，`result`、`accumulativeValue`、`highest` 就是记录的三个值，`accumulativeValue` 会记录每一步的累积值，然后和 `highest` 比较，获得本次最高值，最后再将本次最高值 `highest` 和历史最高值（结果值）`result` 比较，获得最终结果。

当然，**jsliang** 解题的时候实际上不会想这么多，无非就是用正常的思路来破解。

* **进一步思考**：

其实我一开始（上面解法）的思路还是复杂了，顶多算 **暴力破解**，所以可以做很大的优化，小伙伴们可以想想，再看看下面的优化。

```js
var maxSubArray = function(nums) {
  let max = nums[0]; // 最高值
  let val = 0; // 累加值
  for (let i = 0; i < nums.length; i++) {
    val = val + nums[i];
    max = val > max ? val : max;
    val = 0 > val ? 0 : val;
  }
  return max;
};
```

```js
✔ Accepted
  ✔ 202/202 cases passed (72 ms)
  ✔ Your runtime beats 98.5 % of javascript submissions
  ✔ Your memory usage beats 85.94 % of javascript submissions (34.8 MB)
```

是不是觉得这样子更简练了：

1. `max` 为最高值，`val` 为累加值
2. 每次累加则判断 `val` 和 `max` 的大小，然后取最大的（相当于 `Math.max(val, max)`）。
3. 如果 `val` 小于 `0`，则重置累加器。为什么呢？就好比 `[-1, -3, -2]`，它每次累加，是不是一定会小于 `0`？这样我们取每个值比较就行了。再比如当 `[-1, 3, 2]` 的时候，`-1 + 3` 是不是一定会小于 `3`？所以负数是个拖累数，当累加值小于 `0` 的时候，我们就需要清空计数器了。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
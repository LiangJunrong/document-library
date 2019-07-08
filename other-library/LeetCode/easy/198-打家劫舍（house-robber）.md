198 - 打家劫舍（house-robber）
===

> Create by **jsliang** on **2019-07-08 19:12:26**  
> Recently revised in **2019-07-08 19:53:37**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 转数组](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：动态规划
* **题目地址**：https://leetcode-cn.com/problems/house-robber/
* **题目内容**：

```
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

示例 1:
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 2:
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var rob = function (nums) {
  let len = nums.length;
  if (len == 0)
    return 0;
  let dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `nums`：`[1, 2, 3, 1]`
2. `return`：`4`

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 69/69 cases passed (80 ms)
  ✔ Your runtime beats 76.13 % of javascript submissions
  ✔ Your memory usage beats 13.37 % of javascript submissions (33.9 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，要感谢大佬的详细题解：https://leetcode-cn.com/problems/house-robber/solution/hua-jie-suan-fa-198-da-jia-jie-she-by-guanpengchn/

**然后**，**jsliang** 复述下动态规划的知识点：

* 动态规划方程：`dp[n] = MAX(dp[n-1], dp[n-2] + num)`

很好，结合题意来讲解下这个什么意思：

> [2,12,9,1,3]

**步骤 1**. `dp[0]` 和 `dp[1]` 固定为 `0` 和 `nums[0]`，这样我们就有起手数字。

**步骤 2**. 那么，`dp[2]` 如何求解呢？我们可以了解到，隔房取数，那么是不是应该找最大价值的。`nums[0] + nums[2] = 2 + 9 < nums[1]`，所以，动态比较，我们应该取 `nums[1]`，毕竟 `nums[0]` 和 `nums[2]` 加上都没有这个数高，所以 `dp[2] === 12`。

**步骤 3**. 此时，我们还剩 `[1, 3]` 这两个数字，我们继续套用公式：`dp[n] = MAX(dp[n-1], dp[n-2] + num)` 来理解，`dp[3]` 应该是 `2 + 1` 还是 `12`，那么 `dp[3]` 还是 `12`

……以此类推，到最后得出 `15`

```js
[ 0, 2, 12 ]
[ 0, 2, 12, 12 ]
[ 0, 2, 12, 12, 13 ]
[ 0, 2, 12, 12, 13, 15 ]
```

**最后**，我们将动态规划得出的结果返回出去即可。

## <a name="chapter-seven" id="chapter-seven">七 进一步思考</a>

> [返回目录](#chapter-one)

今天能看到大佬讲解下动态规划，个人还是觉得非常开心的。

就好比第一次解【树】的题目能看到大佬讲【树】的万能公式，解【双指针】能看到详细题解一样，都是非常让人开心的。

这次看到【动态规划】的详细讲解。虽然我压根就没思考过这道题题解，看着大佬的 Java 代码直接改写成 JavaScript 拿来用，但是我觉得学到了本身就是赚了。

下一次看到【动态规划】的题目，我就有这种思路了，nice。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
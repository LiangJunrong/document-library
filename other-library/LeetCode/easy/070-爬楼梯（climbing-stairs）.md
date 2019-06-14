070 - 爬楼梯（climbing-stairs）
===

> Create by **jsliang** on **2019-06-11 18:37:47**  
> Recently revised in **2019-06-11 19:36:15**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 动态规划](#chapter-three-one) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：动态规划
* **题目地址**：https://leetcode-cn.com/problems/climbing-stairs/
* **题目内容**：

```
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 动态规划</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var climbStairs = function(n) {
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }

  let memory = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    memory[i] = memory[i - 1] + memory[i - 2];
  }
  return memory[n];
};
```

* **执行测试**：

1. `n`：`5`
2. `return`：

```js
8
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 45/45 cases passed (72 ms)
  ✔ Your runtime beats 95.72 % of javascript submissions
  ✔ Your memory usage beats 99.53 % of javascript submissions (33.2 MB)
```

* **解题思路**：

**首先**，一开始看到这道题其实我是拒绝的，因为动态规划没好事！题不好做啊！(⊙﹏⊙)b

不过既然来了，那么就试试，所以在纸上画了画，还真找到了规律：

1. `n = 1` 的时候，有 `1` 种可能
2. `n = 2` 的时候，有 `2` 种可能
3. `n = 3` 的时候，有 `3` 种可能
4. `n = 4` 的时候，有 `5` 种可能
5. `n = 5` 的时候，有 `8` 种可能
6. 以此类推，在 `n` 不是 `1`、`2` 或者 `3` 的情况下 `climbStairs(n) = climbStairs(n - 1) + climbStairs(n - 2)`

所以答案呼之欲出：

```js
var climbStairs = function(n) {
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }
  let sum = climbStairs(n - 1) + climbStairs(n - 2);
  return sum;
};
```

然而，这是不可行的，LeetCode 会告诉你超时了：

```js
✘ Time Limit Exceeded
  ✘ 31/45 cases passed (N/A)
  ✘ testcase: '45'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

**然后**，既然超时，那么我们的做法应该是减少时间，那么怎么减少呢？来个骚操作试试：

```js
var climbStairs = function(n) {
  switch (n) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 5;
    case 5:
      return 8;
    case 6:
      return 13;
    case 7:
      return 21;
    case 8:
      return 34;
    case 9:
      return 55;
    case 10:
      return 89;
  }
  let sum = climbStairs(n - 1) + climbStairs(n - 2);
  return sum;
};
```

提交试试：

```js
✔ Accepted
  ✔ 45/45 cases passed (1244 ms)
  ✔ Your runtime beats 6.34 % of javascript submissions
  ✔ Your memory usage beats 37.23 % of javascript submissions (33.7 MB)
```

噗呲，一口血喷出，吐血身亡~

**最后**，再优化试试：

```js
var climbStairs = function(n) {
  if (n === 1 || n === 2 || n === 3) {
    return n;
  }

  let memory = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    memory[i] = memory[i - 1] + memory[i - 2];
  }
  return memory[n];
};
```

```js
✔ Accepted
  ✔ 45/45 cases passed (72 ms)
  ✔ Your runtime beats 95.72 % of javascript submissions
  ✔ Your memory usage beats 99.53 % of javascript submissions (33.2 MB)
```

哟嚯，完爆敌人！

在第一种方法和第二种方法中，使用了递归。而递归，是需要时间的，递归的次数越多，耗费的时间越长，就会出现之前的超时情况。

所以，在最后，我们将递归转换成数组的遍历添加，从而做到最简优化！

> 不知道少年知不知道另外一种骚操作，就是将测试的 45 种情况添加过去，会得到神奇的答案喔~

> 就是把第二种解法的 `switch...case` 写 45 次…… ^_^

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
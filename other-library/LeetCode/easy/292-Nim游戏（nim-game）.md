292 - Nim游戏（nim-game）
===

> Create by **jsliang** on **2019-07-19 16:54:36**  
> Recently revised in **2019-07-19 17:38:27**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：迷、极小化极大
* **题目地址**：https://leetcode-cn.com/problems/nim-game/
* **题目内容**：

```
你和你的朋友，两个人一起玩 Nim 游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

示例:

输入: 4
输出: false 
解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var canWinNim = function(n) {
  return n % 4;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `n`：`4`
2. `return`：

```js
false
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 60/60 cases passed (68 ms)
  ✔ Your runtime beats 93.84 % of javascript submissions
  ✔ Your memory usage beats 5.03 % of javascript submissions (34.3 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**所谓传奇，有可能是你触发了传说中的幸运 1**。

**首先**，我觉得我这代码应该在时间和空间上打败任何人了。但是可惜不是。

**然后**，**jsliang** 是通过找规律来破解的：

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| √ | √ | √ | x | √ | √ | √ | x | √ |

因为你和你的小伙伴都是极其机智的人，所以假设在你先手并且知道牌数的情况下，你一定不会让最后的数小于 3，毕竟这样你就输了（小伙伴可以一把拿走最大 3 张牌）。

同时你希望最后牌数为 4 张，并且到你的小伙伴拿牌。这样不管它怎么拿，你都赢了（拿走剩下的牌）。

有没有想到什么？是的，剩下 4 张的时候，如果小伙伴拿牌，那它肯定输，所以我们根据小伙伴的抽牌，跟他的和保持为 4 即可。（死亡轮回）

假设：

1. 总共 5 张牌，你肯定先拿 1 张，这样小伙伴不管拿几张，你都可以将剩下的拿走。
2. 总共 10 张牌，那么你的计算中将其除于 4，余数 2 即是你的起手拿牌数。
3. 总数 50 张牌，那么你的计算中将其除于 4，余数 2 即是你的起手拿牌数。
4. 总数 100 张，那么你的计算中将其除于 4，余数为 0，所以说明你不管怎么抽取，你的小伙伴一定会凑齐 4 张，到最后他一定会赢！

**最后**，我们就清楚了，如果这个数，刚好是 4 的倍数，我们铁定输。但是如果不是，我们必赢！

## <a name="chapter-seven" id="chapter-seven">七 题外话</a>

> [返回目录](#chapter-one)

最后的最后，突然想起这个游戏好像我玩过，然后坑了小学同学几次零食~

小学的时候从某本数学书上看到的游戏，具体什么忘记了。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
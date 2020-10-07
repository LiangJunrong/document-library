1175 - 质数排列（prime-arrangements）
===

> Create by **jsliang** on **2020-01-31 18:37:15**  
> Recently revised in **2020-01-31 18:55:35**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/prime-arrangements/
* **题目内容**：

```
请你帮忙给从 1 到 n 的数设计排列方案，
使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；
你需要返回可能的方案总数。

让我们一起来回顾一下「质数」：
质数一定是大于 1 的，
并且不能用两个小于它的正整数的乘积来表示。

由于答案可能会很大，
所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。

示例 1：

输入：n = 5
输出：12
解释：
举个例子，[1,2,5,4,3] 是一个有效的排列，
但 [5,2,3,4,1] 不是，
因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。

示例 2：

输入：n = 100
输出：682289015

提示：

1 <= n <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/prime-arrangements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题

> [返回目录](#chapter-one)

技不如人，甘拜下风~

> 【题解一】

思路：

```
1. 素数的全排列方式总数对于 10**9+7 的余数 a
2. 非素数的全排列方式总数对于 10**9+7 的余数 b
若直接计算 (a*b)%(10**9+7) 时由于数位溢出，导致计算结果不准确，此不准确结果为：682289019

因此最终的 a*b 乘法应该将其中的一个数拆为两部分，分别相乘并取余：

let MOD = 10**9+7;
function multi(a, b){
  //将 b 拆成 2 部分
  let t = Math.floor(b/100000),
      t2 = b % 100000;
  let sum = 0;
  for(let i = 0; i < t; i++){
    sum = (sum + 100000 * a) % MOD;
  }
  sum = (sum + t2 * a) % MOD;
  return sum;
}

作者：wanyan
链接：https://leetcode-cn.com/problems/prime-arrangements/solution/jsde-xiong-di-jie-mei-men-guo-lai-dian-ge-zan-jiu-/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

```js
var numPrimeArrangements = function (n) {
  let MOD = 10 ** 9 + 7;

  function A(n, m) {
    return (m === 0 ? 1 : A(n, m - 1) * (n - m + 1)) % MOD;
  }

  function su(a) {
    if (a < 2) return false;
    if (a === 2) return true;
    for (let i = 2; i < a; i++) {
      if (a % i === 0) return false;
    }
    return true;
  }

  function multi(a, b) {
    // 将 b 拆成 2 部分
    let t = Math.floor(b / 100000),
      t2 = b % 100000
    let sum = 0
    for (let i = 0; i < t; i++) {
      sum = (sum + 100000 * a) % MOD
    }
    sum = (sum + t2 * a) % MOD
    return sum
  }

  let numSu = 0;
  for (let i = 1; i <= n; i++) {
    if (su(i)) {
      numSu++;
    }
  }

  let a = A(numSu, numSu);
  let b = A(n - numSu, n - numSu);

  return multi(a,b);
};
```

Submit 提交：

```js
Accepted
* 100/100 cases passed (76 ms)
* Your runtime beats 17.65 % of javascript submissions
* Your memory usage beats 47.06 % of javascript submissions (34.9 MB)
```

看得我头晕眼花~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
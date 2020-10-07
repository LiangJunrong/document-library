507 - 完美数（perfect-number）
===

> Create by **jsliang** on **2019-11-3 11:48:39**  
> Recently revised in **2019-11-3 12:23:01**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/perfect-number/
* **题目内容**：

```
对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False

示例：
输入: 28
输出: True
解释: 28 = 1 + 2 + 4 + 7 + 14
 

提示：
输入的数字 n 不会超过 100,000,000. (1e8)
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 完美数
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  const positiveFactors = [1];
  const hash = new Map();
  for (let i = 2; i < num / 2; i++) {
    if (Number.isInteger(num / i) && !hash.get(i)) {
      positiveFactors.push(i);
      positiveFactors.push(num / i);
      hash.set(num / i, i);
    }
  }
  const result = positiveFactors.reduce((prev, curr) => {
    return prev + curr;
  });
  return num !== 1 && result === num;
};

const num = 28;
console.log(checkPerfectNumber(num));
```

`node index.js` 返回：

```js
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 156/156 cases passed (2128 ms)
* Your runtime beats 29.79 % of javascript submissions
* Your memory usage beats 14.29 % of javascript submissions (35.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

看到题目，思考内容：

1. 如果将传入的数字 `n` 进行遍历，找出所有的因素，那么会不会爆时，毕竟 `1e8` 的长度还是挺大的。

所以，我们尝试暴力破解先：

```js
/**
 * @name 完美数
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = (num) => {
  const positiveFactors = [1];
  const hash = new Map();
  for (let i = 2; i < num / 2; i++) {
    if (Number.isInteger(num / i) && !hash.get(i)) {
      positiveFactors.push(i);
      positiveFactors.push(num / i);
      hash.set(num / i, i);
    }
  }
  const result = positiveFactors.reduce((prev, curr) => {
    return prev + curr;
  });
  return num !== 1 && result === num;
};
```

Submit 提交：

```js
Accepted
* 156/156 cases passed (2128 ms)
* Your runtime beats 29.79 % of javascript submissions
* Your memory usage beats 14.29 % of javascript submissions (35.2 MB)
```

结果是可行的，虽然 **jsliang** 个人感觉还是不太满意，但是可以先讲讲思路：

1. 先在 `return` 处排除 1 的情况，因为它是个个例，需要单独分开。
2. 每个数必定存在正因数 1，所以将 1 放在初始化正因数 `positiveFactors` 的数组中。
3. 遍历 `num`，但是我们仅遍历一半，因为我们从 2 开始计算（拆半）。
4. 如果 `num / i` 是一个正整数，那么我们就存储两个正因数 `i` 和 `num / i`，同时，我们将 `num / i` 存储到哈希表上，防止重复统计。
5. 累加所有正因数之和，如果和原有的 `num` 相等，那么它就是正因数！

如上，我们就破解了这道题。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

为了更好的学习提升，咱们再逛逛【题解】和【评论】区，看看有什么 idea 是我们没想到，但是非常好用的：

> index.js

```js
const checkPerfectNumber = (num) => {
  return num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336;
};
```

Submit 试试：

```js
Accepted
* 156/156 cases passed (76 ms)
* Your runtime beats 71.63 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (33.6 MB)
```

这种方法叫做：我知道你的答案，所以我来个面向测试用例开发。/ 手动滑稽

> 这种方法来自【题解】的灵感：https://leetcode-cn.com/problems/perfect-number/solution/507-wan-mei-shu-by-yukarun/ 

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
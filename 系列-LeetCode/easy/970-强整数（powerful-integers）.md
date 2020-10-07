970 - 强整数（powerful-integers）
===

> Create by **jsliang** on **2020-01-28 11:50:19**  
> Recently revised in **2020-01-28 13:38:49**

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
* **涉及知识**：哈希表、数学
* **题目地址**：https://leetcode-cn.com/problems/powerful-integers/
* **题目内容**：

```
给定两个正整数 x 和 y，
如果某一整数等于 x^i + y^j，
其中整数 i >= 0 且 j >= 0，
那么我们认为该整数是一个强整数。

返回值小于或等于 bound 的所有强整数组成的列表。

你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。

示例 1：

输入：x = 2, y = 3, bound = 10
输出：[2,3,4,5,7,9,10]
解释： 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2

示例 2：

输入：x = 3, y = 5, bound = 15
输出：[2,4,6,8,10,14]

提示：

1 <= x <= 100
1 <= y <= 100
0 <= bound <= 10^6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/powerful-integers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 强整数
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = (x, y, bound) => {
  const result = [];
  // x, y 最小为 1，所以他两和最小为 1^0 + 1^0 = 2
  for (let i = 2; i <= bound; i++) {
    for (let j = 0; Math.pow(x, j) < i; j++) {
      for (let k = 0; Math.pow(y, k) <= i - Math.pow(x, j); k++) {
        if (Math.pow(x, j) + Math.pow(y, k) === i) {
          result.push(i);
        }
        if (y === 1) {
          break;
        }
      }
      if (x === 1) {
        break;
      }
    }
  }
  return [...new Set(result)];
};

console.log(powerfulIntegers(2, 3, 10)); // [ 2, 3, 4, 5, 7, 9, 10 ]
console.log(powerfulIntegers(3, 5, 15)); // [ 2, 4, 6, 8, 10, 14 ]
console.log(powerfulIntegers(2, 1, 10)); // [2, 3, 5, 9]
```

`node index.js` 返回：

```js
[ 2, 3, 4, 5, 7, 9, 10 ]
[ 2, 4, 6, 8, 10, 14 ]
[ 2, 3, 5, 9 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 93/93 cases passed (1160 ms)
* Your runtime beats 5.13 % of javascript submissions
* Your memory usage beats 7.57 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

这道题还是蛮有意思的：

1. 已知函数给定参数 `x, y, bound`，遍历 `[2, 3, 4, ... num, ..., bound]`，如果其中包含其中 `x^m + y^n = num`，那么 `num` 就是强整数。
2. 例如 `x = 2, y = 1, bound = 10`，那么结果为：`[2, 3, 5, 9]`。其中 `2 = 2^0 + 1^0`、`3 = 2^1 + 1^0`、`5 = 2^2 + 1^0`、`9 = 2^3 + 1^0`。

这样，我们就有了求解：

> 暴力破解

```js
const powerfulIntegers = (x, y, bound) => {
  const result = [];
  // x, y 最小为 1，所以他两和最小为 1^0 + 1^0 = 2
  for (let i = 2; i <= bound; i++) {
    for (let j = 0; Math.pow(x, j) < i; j++) {
      for (let k = 0; Math.pow(y, k) <= i - Math.pow(x, j); k++) {
        if (Math.pow(x, j) + Math.pow(y, k) === i) {
          result.push(i);
        }
        if (y === 1) {
          break;
        }
      }
      if (x === 1) {
        break;
      }
    }
  }
  return [...new Set(result)];
};
```

1. 遍历 `[2, bound]`，这毫无争议了。
2. 设置 `j` 为 `x` 的指数，当 `x^j < i` 的时候，循环继续。
3. 设置 `k` 为 `y` 的指数，当 `y^k <= i - x^j` 的时候，循环继续。
4. 如果 `x^j + y^k = i` 的时候，我们就添加一个项。
5. 另外，如果 `x === 1` 或者 `y === 1`，说明这个项没法继续增加了，`1^n === 1`，所以需要设置中止条件。
6. 最后我们返回 `result` 即可。

> 为什么是 `[...new Set(result)]`，因为 `powerfulIntegers(2, 3, 10)` 的时候，会出来结果 `[ 2, 3, 4, 5, 5, 7, 9, 10 ]`，因为 `5 = 2 + 3` 且 `5 = 4 + 1`，所以会出现两个 5，**jsliang** 偷懒最后才进行去重操作。

Submit 提交如下：

```js
Accepted
* 93/93 cases passed (1160 ms)
* Your runtime beats 5.13 % of javascript submissions
* Your memory usage beats 7.57 % of javascript submissions (34.9 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

少年，你想要更强吗，这里有本武林秘籍……

> 完美题解

```js
const powerfulIntegers = (x, y, bound) => {
  let set = new Set();
  for (let i = 0; Math.pow(x, i) <= bound && i < 20; i++) {
    for (let j = 0; Math.pow(y, j) <= bound && j < 20; j++) {
      let item = Math.pow(x, i) + Math.pow(y, j);
      if (item <= bound) {
        set.add(item);
      }
    }
  }
  return [...set];
};
```

1. 判断 `i < 20` 并且 `x^i <= bound`。（为什么小于 20？因为有可能 x || y 是 1，导致无限增长，死循环）
2. 判断 `j < 20` 并且 `y^j <= bound`。
3. 判断 `x^i + y^j <= bound`，如果是的话，证明这个 `number` 是可以的，将其添加到 `Set` 中。
4. 最后通过 `[...set]` 将其转换成数组即可。

Submit 提交如下：

```js
Accepted
* 93/93 cases passed (48 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 36.36 % of javascript submissions (33.9 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
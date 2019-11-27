605 - 种花问题（can-place-flowers）
===

> Create by **jsliang** on **2019-11-27 08:38:32**  
> Recently revised in **2019-11-27 09:10:23**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/can-place-flowers/
* **题目内容**：

```
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。
可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛，表示为一个数组包含 0 和 1
其中 0 表示没种植花，1 表示种植了花。

和一个数 n。

能否在不打破种植规则的情况下种入 n 朵花？

能则返回 True，不能则返回 False。

示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True

示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False

注意:

数组内已种好的花不会违反种植规则。
输入的数组长度范围为 [1, 20000]。
n 是非负整数，且不会超过输入数组的大小。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 种花问题
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let flowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0
      && flowerbed[i - 1] !== 1
      && flowerbed[i + 1] !== 1
    ) {
      flowers += 1;
      flowerbed[i] = 1;
    }
    if (flowers >= n) {
      return true;
    }
  }
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
```

`node index.js` 返回：

```js
true
false
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 123/123 cases passed (72 ms)
* Your runtime beats 95.68 % of javascript submissions
* Your memory usage beats 73.12 % of javascript submissions (36.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，个人思考：

1. `[1, 0, 0, 0, 1]` 的情况，种一朵花可以。
2. `[1, 0, 0, 0, 1]` 的情况，种两朵花不行。

那么，假设有 `[1, 0, 0, 0, 1, 0, 0, 1]` 的情况，能种几朵花？

答案是一朵，**jsliang** 的拆分是：`[1, 0]`、`[0]`、`[0, 1, 0]`、`[0, 1]`。

就是说，一个 `1`，前一个索引或者后一个索引带的值，都会被去掉。

这时候，我们就可以下手了：

> 暴力破解

```js
const canPlaceFlowers = (flowerbed, n) => {
  let flowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0
      && flowerbed[i - 1] !== 1
      && flowerbed[i + 1] !== 1
    ) {
      flowers += 1;
      flowerbed[i] = 1;
    }
  }
  return flowers >= n;
};
```

思路非常简单：

1. 设置 `flowers` 为可种植的花朵。
2. 遍历数组，如果数组 `i` 位置的前一个元素和后一个元素均为 0，并且数组 `i` 位置对应的元素也为 0，那么该位置可以种花。
3. 根据步骤 2，我们将 `flowers` 的数量 + 1，同时设置 `flowered[i] = 1`，表明已经种上花了（假设后面也是 0，那么就可以根据前面是否种了新花来判断）
4. 循环数组完毕，判断已种花的数量是否大于或者等于 n，返回结果。

Submit 提交：

```js
Accepted
* 123/123 cases passed (72 ms)
* Your runtime beats 95.68 % of javascript submissions
* Your memory usage beats 70.25 % of javascript submissions (36.1 MB)
```

OK，我们的思路是成功的。

那么，我们还能不能进一步优化？

> 优化暴力破解

```js
const canPlaceFlowers = (flowerbed, n) => {
  let flowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0
      && flowerbed[i - 1] !== 1
      && flowerbed[i + 1] !== 1
    ) {
      flowers += 1;
      flowerbed[i] = 1;
    }
    if (flowers >= n) {
      return true;
    }
  }
  return false;
};
```

在这个方法中，我们在 `for` 循环中设置的关卡：

* 当种植的花朵已经足够，那么即可中止函数并且返回 `true`。

这在应对一些特殊情况下是比较满足情况的，因为我们的数组长度范围在 `[1, 20000]`。

如果执行到 `10000` 的时候，发现已经满足种植的花朵数了，我们就不需要继续种植了。

```js
Accepted
* 123/123 cases passed (72 ms)
* Your runtime beats 95.68 % of javascript submissions
* Your memory usage beats 73.12 % of javascript submissions (36.1 MB)
```

当然，这个中止函数的关卡，如果碰到的是非常短的数组，可能比起一开始那个，会损耗一些时间，毕竟 `if` 判断也是需要时间的~

如上，本题解析就此结束。

如果你有更好的思路或者方法，欢迎留言评论或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
258 - 各位相加（add-digits）
===

> Create by **jsliang** on **2019-07-18 16:14:35**  
> Recently revised in **2019-07-18 16:48:04**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数字
* **题目地址**：https://leetcode-cn.com/problems/add-digits/
* **题目内容**：

```
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:
输入: 38
输出: 2 

解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var addDigits = function(num) {
  while (num > 9) {
    num = num.toString().split('');
    num = num.reduce((prev, next) => {
      return Number(prev) + Number(next);
    });
  }
  return num;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `num`：`38`
2. `return`：`2`

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 1101/1101 cases passed (88 ms)
  ✔ Your runtime beats 98.66 % of javascript submissions
  ✔ Your memory usage beats 29.54 % of javascript submissions (35.8 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `toString()`：`toString()` 返回一个字符串，表示指定的数组及其元素。[`toString()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/toString.md)
2. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
3. `reduce()`：`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。[`reduce()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/reduce.md)
4. `Number`：将其他值转成数字值。[`Number` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Number.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**断网断电也不能阻止我刷题的乐趣**！2019-07-18。

**首先**，今天下午停网停电，开着热点刷题。

**然后**，这道题的解法其实没那么难。

1. 将数字转换成字符串，然后通过字符串的 `split('')` 方法，将字符串转换成数组。
2. 通过 `reduce` 计算数组中每个元素的总和。因为 `split('')` 切割出来的是 `String` 类型的，所以需要通过 `Number` 强制转换。

```js
var addDigits = function(num) {
  while (num > 9) {
    num = num.toString().split('');
    num = num.reduce((prev, next) => {
      return Number(prev) + Number(next);
    });
  }
  return num;
};
```

**最后**，返回结果即可。

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

黑暗中的我思考：除此之外，还有没有其他题解呢？

是时候看看大佬们的奇技淫巧了：

> 解法 1：数学

```js
var addDigits = function (num) {
  if (num == 0) {
    return 0;
  }
  num %= 9;
  if (num == 0) {
    return 9;
  }
  return num;
};
```

震惊！为什么可以这样解题呢？！！！

> 解法 2：数学

```js
var addDigits = function (num) {
  return num == 0 ? 0 : (num - 1) % 9 + 1;
};
```

卧槽！精确到一行了！！！

> 解法 3：递归

```js
var addDigits = function (num) {
  var sum = 0;
  while (num > 0) {
    var digit = num % 10;
    sum += digit;
    num = (num - digit) / 10
  }
  if (sum >= 10) {
    return addDigits(sum)
  } else {
    return sum
  }
};
```

也是可行，但是想来应该比不上我想的代码，毕竟递归浪费的时间更多（虽然我没有网络可以提交证明~）

以上，就是这道题的题解啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
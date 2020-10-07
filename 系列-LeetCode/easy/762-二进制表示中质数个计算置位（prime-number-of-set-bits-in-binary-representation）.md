762 - 二进制表示中质数个计算置位（prime-number-of-set-bits-in-binary-representation）
===

> Create by **jsliang** on **2020-01-02 08:54:29**  
> Recently revised in **2020-01-02 09:23:57**

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
* **涉及知识**：位运算
* **题目地址**：https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/
* **题目内容**：

```
给定两个整数 L 和 R，
找到闭区间 [L, R] 范围内，
计算置位位数为质数的整数个数。

注意：
计算置位代表二进制表示中1的个数。
例如 21 的二进制表示 10101 有 3 个计算置位。
还有，1 不是质数。

示例 1:

输入: L = 6, R = 10
输出: 4
解释:
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)

示例 2:

输入: L = 10, R = 15
输出: 5
解释:
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)

注意:

L, R 是 L <= R 且在 [1, 10^6] 中的整数。
R - L 的最大值为 10000。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 计算转二进制后1的个数
 * @param {number} num 需要转换的数字
 * @return {number} 返回 1 的总个数
 */
const getOne = (num) => {
  let result = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      result += 1;
    };
    num = Math.floor(num / 2);
  }
  return result;
};

/**
 * @name 判断是否为质数
 * @param {number} num 需要判断的数字
 * @return {bool} true / false
 */
const judgementPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @name 二进制表示中质数个计算置位
 * @param {number} L 左范围
 * @param {number} R 右范围
 * @return {number} 返回其中的个数
 */
const countPrimeSetBits = (L, R) => {
  let result = 0;
  for (let i = L; i <= R; i++) {
    if (judgementPrime(getOne(i))) {
      result += 1;
    }
  }
  return result;
};

console.log(countPrimeSetBits(6, 10)); // 4
```

`node index.js` 返回：

```js
4
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 200/200 cases passed (148 ms)
* Your runtime beats 73.2 % of javascript submissions
* Your memory usage beats 65.22 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，先进行细分：

```js
/**
 * @name 计算转二进制后1的个数
 * @param {number} num 需要转换的数字
 * @return {number} 返回 1 的总个数
 */
const getOne = (num) => {

};

/**
 * @name 判断是否为质数
 * @param {number} num 需要判断的数字
 * @return {bool} true / false
 */
const judgementPrime = (num) => {

};

/**
 * @name 二进制表示中质数个计算置位
 * @param {number} L 左范围
 * @param {number} R 右范围
 * @return {number} 返回其中的个数
 */
const countPrimeSetBits = (L, R) => {
  let result = 0;
  for (let i = L; i <= R; i++) {
    if (judgementPrime(getOne(L))) {
      result += 1;
    }
  }
  return result;
};

console.log(countPrimeSetBits(6, 10));
```

将其拆解成三个方法，分别统计：

1. 计算二进制 1 的个数：`getOne`
2. 判断数字是否为质数：`judgementPrime`
3. 二进制表示中质数个计算置位：`countPrimeSetBits`

**然后**，详细设计后如下：

```js
/**
 * @name 计算转二进制后1的个数
 * @param {number} num 需要转换的数字
 * @return {number} 返回 1 的总个数
 */
const getOne = (num) => {
  let result = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      result += 1;
    };
    num = Math.floor(num / 2);
  }
  return result;
};

/**
 * @name 判断是否为质数
 * @param {number} num 需要判断的数字
 * @return {bool} true / false
 */
const judgementPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 * @name 二进制表示中质数个计算置位
 * @param {number} L 左范围
 * @param {number} R 右范围
 * @return {number} 返回其中的个数
 */
const countPrimeSetBits = (L, R) => {
  let result = 0;
  for (let i = L; i <= R; i++) {
    if (judgementPrime(getOne(i))) {
      result += 1;
    }
  }
  return result;
};

console.log(countPrimeSetBits(6, 10)); // 4
```

Submit 提交如下：

```js
Accepted
* 200/200 cases passed (148 ms)
* Your runtime beats 73.2 % of javascript submissions
* Your memory usage beats 65.22 % of javascript submissions (34.9 MB)
```

详细的就不用哆嗦啦，毕竟，转换成二进制和判断素数，之前讲解过的，如果不太清楚，可以查看：

* 《数据结构 - 栈》：https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/algorithms-and-data-structures/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E6%A0%88.md
* 《204 - 计数质数》：https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/204-%E8%AE%A1%E6%95%B0%E8%B4%A8%E6%95%B0%EF%BC%88count-primes%EF%BC%89.md

**jsliang** 在这两篇文章中都有讲解啦，就不一一列举了~

**最后**，如果小伙伴们有更好的思路想法，例如优化质数计算啦，又或者能更快判断二进制中 1 的个数啦等等，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
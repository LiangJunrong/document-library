剑指 Offer 16 - 数值的整数次方
===

> Create by **jsliang** on **2020-08-07 17:18:49**  
> Recently revised in **2020-08-07 17:44:20**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 题目](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题思路](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 解题套路](#chapter-four) |

## <a name="chapter-two" id="chapter-two"></a>二 题目

> [返回目录](#chapter-one)

```
实现函数 double Power(double base, int exponent)，
求 base 的 exponent 次方。

不得使用库函数，同时不需要考虑大数问题。

示例 1:
输入: 2.00000, 10
输出: 1024.00000

示例 2:
输入: 2.10000, 3
输出: 9.26100

示例 3:
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25

说明:
-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
注意：本题与主站 50 题相同：https://leetcode-cn.com/problems/powx-n/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

};
```

根据上面的已知函数，小伙伴们可以先尝试破解本题，确定了自己的答案后再看下面代码。

## <a name="chapter-three" id="chapter-three"></a>三 解题思路

> [返回目录](#chapter-one)

* 递归（爆栈）

290 / 304 个通过测试用例：Line 20: RangeError: Maximum call stack size exceeded

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  let result = 1; // 最终结果值
  let time = n; // 将递归次数给收集下
  let negativeFlag = false; // 判断是否为负数次方，是的话后面用 1 / result

  // 0 次方返回 1，负次方设置 flag
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    time = -n;
    negativeFlag = true;
  }

  // 递归
  const recursion = (time) => {
    if (time < 1) {
      return 1;
    }
    result *= x;
    recursion(time - 1);
  };
  recursion(time);

  // 如果是负次方，返回 1 / result
  if (negativeFlag) {
    return 1 / result;
  }
  // 否则返回 result
  return result;
};

console.log(myPow(2, -2));
```

* 迭代（超时）

301 / 304 个通过测试用例：x = 2.00000；n = -2147483648

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  let result = 1; // 最终结果值
  let time = n; // 将递归次数给收集下
  let negativeFlag = false; // 判断是否为负数次方，是的话后面用 1 / result

  // 0 次方返回 1，负次方设置 flag
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    time = -n;
    negativeFlag = true;
  }

  // 迭代
  while (time) {
    result *= x;
    time--;
  }

  // 如果是负次方，返回 1 / result
  if (negativeFlag) {
    return 1 / result;
  }
  // 否则返回 result
  return result;
};

console.log(myPow(2, -2));
```

* 递归（优化）

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  const isNegative = n < 0; // 是否是负指数

  // 递归
  const recursion = (n) => {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return x;
    }
    const tempResult = recursion(Math.floor(n / 2));
    return n % 2 === 0 ? tempResult * tempResult : tempResult * tempResult * x;
  };

  const result = recursion(Math.abs(n));
  return isNegative ? 1 / result : result;
};
```

## <a name="chapter-four" id="chapter-four"></a>四 套路分析

> [返回目录](#chapter-one)

本题暂未发现任何套路，如果有但是 **jsliang** 后面发现了的话，会在 GitHub 进行补充。

如果小伙伴有更好的思路想法，或者没看懂其中某种解法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
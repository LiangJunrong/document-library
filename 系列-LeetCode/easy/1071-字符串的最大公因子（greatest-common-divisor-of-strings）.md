1071 - 字符串的最大公因子（greatest-common-divisor-of-strings）
===

> Create by **jsliang** on **2020-01-30 22:49:53**  
> Recently revised in **2020-01-30 23:40:06**

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
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
* **题目内容**：

```
对于字符串 S 和 T，
只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，
我们才认定 “T 能除尽 S”。

返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"

示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"

示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""

提示：

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] 和 str2[i] 为大写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 字符串的最大公因子
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  const str = str1.split('');
  const length1 = str1.length;
  const length2 = str2.length;
  while (str.length) {
    const length = str.length;
    if (
      length1 % length === 0
      && length2 % length === 0
      && str.join('').repeat(length1 / length) === str1
      && str.join('').repeat(length2 / length) === str2
    ) {
      return str.join('');
    }
    str.pop();
  }
  return '';
};

console.log(gcdOfStrings('ABCABC', 'ABC')); // ABC
```

`node index.js` 返回：

```js
'ABC'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 103/103 cases passed (68 ms)
* Your runtime beats 61.19 % of javascript submissions
* Your memory usage beats 32.56 % of javascript submissions (35.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

话不多说，直接上代码：

> 暴力破解

```js
/**
 * @name 字符串的最大公因子
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  const str = str1.split('');
  const length1 = str1.length;
  const length2 = str2.length;
  while (str.length) {
    const length = str.length;
    if (
      length1 % length === 0
      && length2 % length === 0
      && str.join('').repeat(length1 / length) === str1
      && str.join('').repeat(length2 / length) === str2
    ) {
      return str.join('');
    }
    str.pop();
  }
  return '';
};
```

步骤分析：

1. 首先，我们先设置 `str` 为 `str1` 的的数组形态，然后设置 `length1` 和 `length2` 为对应 `str1` 和 `str2` 的长度。
2. 我们通过不停的 `pop()` 数组 `str` 的元素，让 `str` 慢慢变短。
3. 设置 `length` 为 `str.length`，判断 `length` 是否为 `length1` 和 `length2` 的公因子，如果是，则进而判断它重复 n 次后是否等于 `str1`/`str2`。
4. 如果条件 3 成立，则返回字符串；如果不成立，则返回空串 `''`。

Submit 提交如下：

```js
Accepted
* 103/103 cases passed (68 ms)
* Your runtime beats 61.19 % of javascript submissions
* Your memory usage beats 32.56 % of javascript submissions (35.3 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看下大佬的操作，能学到更多：

> gcd 算法

```js
/**
 * @name 欧几里得算法
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
/**
 * @name 字符串的最大公因子
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return '';
  };
  return str1.substring(0, gcd(str1.length, str2.length));
};
```

1. 首先，如果两个字符串有最大公因子，那么 `str1 + str2 === str2 + str1`，反正直接返回 `''`。
2. 然后，通过欧几里得算法（gcd 算法）辗转相除，求出最大公因数。
3. 最后，截取 `str1` 中的 0 到最大公因数的长度即可。

Submit 提交：

```js
Accepted
* 103/103 cases passed (68 ms)
* Your runtime beats 61.19 % of javascript submissions
* Your memory usage beats 65.12 % of javascript submissions (33.9 MB)
```

这样，我们就完成了这道题的破解。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
476 - 数字的补数（number-complement）
===

> Create by **jsliang** on **2019-10-25 09:17:22**  
> Recently revised in **2019-10-25 17:20:04**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算
* **题目地址**：https://leetcode-cn.com/problems/number-complement/
* **题目内容**：

```
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

注意:

给定的整数保证在32位带符号整数的范围内。
你可以假定二进制数不包含前导零位。

示例 1:
输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。

示例 2:
输入: 1
输出: 0
解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
```

## <a name="chapter-three" id="chapter-three">三 解题及测试</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  
};
```

根据上面的已知函数，尝试破解本题吧~

> 确定了自己的答案再看下面代码哈~

* **解题代码**：

```js
/**
 * 数字补位
 * @param {string} string 
 * @return {string}
 */
const digitComplement = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(1 - Number(str[i]));
  }
  return result.join('');
};

/**
 * @name 数字的补数
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  return parseInt(digitComplement(num.toString(2)), 2);
};
```

`node index.js` 返回：

```js
2
```

## <a name="chapter-four" id="chapter-four">四 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
Accepted
* 149/149 cases passed (64 ms)
* Your runtime beats 89.84 % of javascript submissions
* Your memory usage beats 54.32 % of javascript submissions (33.6 MB)
```

## <a name="chapter-five" id="chapter-five">五 解题思路</a>

> [返回目录](#chapter-one)

**首先**，一切尽在不言中，像咱这种没脑袋的人，肯定拿到题目就上：

```js
/**
 * 十进制转二进制
 * @param {number} num 
 * @return {string}
 */
const decimalToBinary = (num) => {
  const stack = [];
  while (num > 0) {
    stack.push(Math.floor(num % 2));
    num = Math.floor(num / 2);
  }
  return stack.reverse().join('');
};

/**
 * 数字补位
 * @param {string} string 
 * @return {string}
 */
const digitComplement = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(1 - Number(str[i]));
  }
  return result.join('');
};

/**
 * 二进制转十进制
 * @param {string} string
 * @return {number} 
 */
const binaryToDecimal = (str) => {
  return parseInt(str, 2);
};

/**
 * @name 数字的补数
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  return binaryToDecimal(digitComplement(decimalToBinary(num)));
};

console.log(findComplement(5)); // 2
```

兴许看到这么一大串代码，小伙伴是懵逼的，我是谁，我在哪，**jsliang** 写了啥垃圾玩意。

1. 刚好在昨天（2019-10-25）看了数据结构的栈，然后了解了下十进制转二进制，然后就顺带用上去了。
2. 在这步骤中，十进制转二进制，以及补位，**jsliang** 都写出来了，但是二进制转回十进制的时候，卡住了，一时间不知道怎么转回去。
3. 最后用了网上的快速方法：`parseInt(str, 2)`。

提交发现：

```js
Accepted
* 149/149 cases passed (76 ms)
* Your runtime beats 44.39 % of javascript submissions
* Your memory usage beats 6.17 % of javascript submissions (34.3 MB)
```

**然后**，既然知道有更好的方法，那当然是尝试弥补先前不足，于是稍微修改一点点：

```js
/**
 * 数字补位
 * @param {string} string 
 * @return {string}
 */
const digitComplement = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(1 - Number(str[i]));
  }
  return result.join('');
};

/**
 * @name 数字的补数
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  return parseInt(digitComplement(num.toString(2)), 2);
};
```

**最后**，感觉 OK 了，提交查看了下：

```js
Accepted
* 149/149 cases passed (64 ms)
* Your runtime beats 89.84 % of javascript submissions
* Your memory usage beats 54.32 % of javascript submissions (33.6 MB)
```

当然，**jsliang** 相信肯定有更好的解题答案，交由评论区的你们啦~

---

* 评论区代码秀：

```js
const findComplement = (num) => {
  return parseInt(Number(num.toString(2).toString().split('').map(n => {
    return Number(n) === 1 ? '0' : '1'
  }).join('')), 2);
};

console.log(findComplement(5)); // 2
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
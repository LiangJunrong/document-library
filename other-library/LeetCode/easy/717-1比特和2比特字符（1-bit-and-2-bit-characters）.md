717 - 1比特和2比特字符（1-bit-and-2-bit-characters）
===

> Create by **jsliang** on **2019-12-23 09:00:00**  
> Recently revised in **2019-12-23 09:47:24**

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
* **题目地址**：https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/
* **题目内容**：

```
有两种特殊字符。
第一种字符可以用一比特 0 来表示。
第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。
问最后一个字符是否必定为一个一比特字符。
给定的字符串总是由 0 结束。

示例 1:

输入: 
bits = [1, 0, 0]
输出: True
解释: 
唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。

示例 2:

输入: 
bits = [1, 1, 1, 0]
输出: False
解释: 
唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
注意:

1 <= len(bits) <= 1000.
bits[i] 总是 0 或 1.
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 1比特与2比特字符
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = (bits) => {
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0 && i === bits.length - 1) {
      return true;;
    } if (bits[i] === 1 && (bits[i + 1] === 0 || bits[i + 1] === 1)) {
      i++;
    }
  }
  return false;
};

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
console.log(isOneBitCharacter([0, 1, 0])); // false
```

`node index.js` 返回：

```js
true
false
false
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 93/93 cases passed (76 ms)
* Your runtime beats 38.08 % of javascript submissions
* Your memory usage beats 45.61 % of javascript submissions (34.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，仔细揣摩题意，得出以下信息：

1. 设立一个栈为 `stack`。
2. 如果当前元素和栈顶的元素相加为 1（`10`）或者相加为 2（`11`），那么我们就移除栈顶元素。
3. 如果不是条件 2，那么就将元素添加到栈中。
4. 遍历传入的数组，直到遍历完毕。

代码如下：

> 错误代码一

```js
const isOneBitCharacter = (bits) => {
  const stack = [];
  for (let i = 0; i < bits.length; i++) {
    if (
      stack[stack.length - 1] + bits[i] === 1
      || stack[stack.length - 1] + bits[i] === 2
    ) {
      stack.pop();
    } else {
      stack.push(bits[i]);
    }
  }
  return stack.length === 1 && stack[0] === 0;
};
```

**然后**，很可惜，这是失败的：

```js
Wrong Answer
37/93 cases passed (N/A)

Testcase
[0,0]

Answer
false

Expected Answer
true
```

那么，就是我忽略了另外一种元素：`0`，所以应该是三种情况：

* 0
* 10
* 11

就是说如果最后栈剩下的全都是 0，那也是可以原谅的：

> 错误代码二

```js
const isOneBitCharacter = (bits) => {
  const stack = [];
  for (let i = 0; i < bits.length; i++) {
    if (
      stack[stack.length - 1] + bits[i] === 1
      || stack[stack.length - 1] + bits[i] === 2
    ) {
      stack.pop();
    } else {
      stack.push(bits[i]);
    }
  }
  return stack.includes(0) && !stack.includes(1);
};
```

Submit 提交：

```js
Wrong Answer
64/93 cases passed (N/A)

Testcase
[0,1,0]

Answer
true

Expected Answer
false
```

年轻人你成功吸引了我的注意力，果然这种理念题，还是要碰壁很多次。

**最后**，经过十几次的失败尝试，总结出来了：

> 暴力破解

```js
const isOneBitCharacter = (bits) => {
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0 && i === bits.length - 1) {
      return true;;
    } if (bits[i] === 1 && (bits[i + 1] === 0 || bits[i + 1] === 1)) {
      i++;
    }
  }
  return false;
};
```

思路如下：

1. `for` 直接遍历 `bits`。
2. 碰到当前元素为 0，并且当前元素是最后一个，那么返回 `true`。
3. 最重要的是，如果当前元素是 1，并且下一个元素是 0 或者 1，那么直接 `i++`，表明我们跳过一组 10 或者 11 的判断。

Submit 提交：

```js
Accepted
* 93/93 cases passed (76 ms)
* Your runtime beats 38.08 % of javascript submissions
* Your memory usage beats 45.61 % of javascript submissions (34.2 MB)
```

这样，我们就完成了这道题的破解~

如果小伙伴们有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
541 - 反转字符串II（reverse-string-ii）
===

> Create by **jsliang** on **2019-11-10 13:16:42**  
> Recently revised in **2019-11-10 13:53:02**

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
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/reverse-string-ii/
* **题目内容**：

```
给定一个字符串和一个整数 

你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转

如果剩余少于 k 个字符，则将剩余的所有全部反转。

如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

示例:

输入: s = "abcdefg", k = 2
输出: "bacdfeg"

要求:
该字符串只包含小写的英文字母。
给定字符串的长度和 k 在[1, 10000]范围内。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 反转字符串II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  s = s.split('');
  const result = [];
  while (s.length) {
    result.push(s.splice(0, 2 * k));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].length < k) {
      result[i].reverse();
    }
    if (result[i].length >= k && result[i].length <= 2 * k) {
      const leftHarf = result[i].slice(0, k);
      const rightHarf = result[i].slice(k);
      result[i] = [...leftHarf.reverse(), ...rightHarf];
    }
  }
  return result.map(item => item.join('')).join('');
};

console.log(reverseStr('abcdefg', 2));
```

`node index.js` 返回：

```js
bacdfeg
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 60/60 cases passed (80 ms)
* Your runtime beats 61.72 % of javascript submissions
* Your memory usage beats 45.45 % of javascript submissions (37.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

首先看题，又是长篇大论然后就给了一个示例，想想要先试探几次就感觉不嗨皮啊！

```js
/**
 * @name 反转字符串II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  s = s.split('');
  const result = [];
  while (s.length) {
    result.push(s.splice(0, 2 * k));
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].length < k) {
      result[i].reverse();
    }
    if (result[i].length >= k && result[i].length <= 2 * k) {
      const leftHarf = result[i].slice(0, k);
      const rightHarf = result[i].slice(k);
      result[i] = [...leftHarf.reverse(), ...rightHarf];
    }
  }
  return result.map(item => item.join('')).join('');
};
```

Submit 试试：

```js
Accepted
* 60/60 cases passed (80 ms)
* Your runtime beats 61.72 % of javascript submissions
* Your memory usage beats 45.45 % of javascript submissions (37.6 MB)
```

真失败！！！

这么混乱的垃圾提交都通过了，哭~

讲讲思路：

1. 已知字符串： `abcdefg`。
2. 通过 `while` 循环，尝试按照 2k 长度进行分割：`[ [ 'a', 'b', 'c', 'd' ], [ 'e', 'f', 'g' ] ]`。
3. 通过 `for` 循环，将数组按照规矩进行翻转：
   1. 如果长度小于 k，则所有内容翻转。
   2. 如果长度大于或者等于 k，且小于或者等于 2k，那么将其拆分成两半，左半边翻转，右半边原样。
4. 最后将每个二维数组转换成字符串，再将一位数组转换成字符串。

很好，成功将一些小伙伴整懵逼~

如果你有更好的法子或者更清晰的思路，欢迎评论吐槽或者直接私聊捶我~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
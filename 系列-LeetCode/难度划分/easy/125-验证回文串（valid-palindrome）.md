125 - 验证回文串（valid-palindrome）
===

> Create by **jsliang** on **2019-7-2 07:50:41**  
> Recently revised in **2019-09-18 10:32:58**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：双指针、字符串
* **题目地址**：https://leetcode-cn.com/problems/valid-palindrome/
* **题目内容**：

```
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();
  let reverse = s.split('').reverse().join('');
  return s === reverse;
};
```

* **执行测试**：

1. `s`：`A man, a plan, a canal: Panama`
2. `return`：`true`

* **LeetCode Submit**：

```js
√ Accepted
  √ 476/476 cases passed (96 ms)
  √ Your runtime beats 95.55 % of javascript submissions
  √ Your memory usage beats 42.1 % of javascript submissions (38.3 MB)
```

* **知识点**：

1. `replace()`：`replace()`方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。[`replace()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/replace.md)
2. `toLocaleLowerCase()`：`toLocaleLowerCase()`方法根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。。[`toLocaleLowerCase()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/toLowerCase.md)
3. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
4. `reverse()`：`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。[`reverse()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/reverse.md)
5. `join()`：`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`join()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/join.md)

* **解题思路**：

暴力破解，无疑是最不耗脑力的，你只需要知道几个 JS 的 API 即可：

**首先**，规整字符串：

> `s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase();`

* `replace()`：将 `s` 中非大小写字符或者数字的内容替换掉。
* `toLocaleLowerCase`：将字符串转成小写。

此时，`s = amanaplanacanalpanama`

**然后**，将字符串转成数组，调用数组的 `reverse()`，再将数组换成字符串：

> `let reverse = s.split('').reverse().join('');`

* `split()`：将字符串转成数组
* `reverse()`：反转数组
* `join()`：将数组转成字符串

**最后**，判断下 `s === reverse`，`return` 这个结果值即可。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLocaleLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
```

* **执行测试**：

1. `s`：`A man, a plan, a canal: Panama`
2. `return`：`true`

* **LeetCode Submit**：

```js
√ Accepted
  √ 476/476 cases passed (92 ms)
  √ Your runtime beats 97.57 % of javascript submissions
  √ Your memory usage beats 75.72 % of javascript submissions (37.1 MB)
```

* **解题思路**：

**首先**，国际惯例去掉非大小写字符或者数字的字符串，并将字符串转换成小写。

**然后**，我们对字符串进行一个遍历（有的小伙伴可能不知道，JS 字符串也可以通过 `for` 遍历，但是听说字符串的遍历会比数组的遍历消耗多点）。

由于是判断回文，所以我们只需要循环一半即可（如果长度为 3/5/7 等奇数值，忽略中间那个字符串，例如 abcba，忽略 c 也是可行的）。

```js
if (s[i] !== s[s.length - 1 - i]) {
  return false;
}
```

**最后**，我们通过双指针的移动：

`0 1 2 3 4`
`a b c b a`

* 0 对应着 length - 1 - 0 = 4
* 1 对应着 length - 1 - 1 = 3
* 2 对应着 length - 1 - 2 = 2

这样，当它们对应的数字不同时，返回 `false`；否则返回 `true`。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
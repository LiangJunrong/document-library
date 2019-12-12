680 - 验证回文字符串II（valid-palindrome-ii）
===

> Create by **jsliang** on **2019-12-12 08:45:00**  
> Recently revised in **2019-12-12 10:43:58**

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
* **题目地址**：https://leetcode-cn.com/problems/valid-palindrome-ii/
* **题目内容**：

```
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:
输入: "aba"
输出: True

示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。

注意:
字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js

```

`node index.js` 返回：

```js

```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js

```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**酒精误事，没事少喝酒**。

折腾了近一个钟，愣是没啥想法，着急：

> 【失败】暴力破解

```js
/**
 * @name 判断左右字符串相等
 */
const judgeDifference = (arr) => {
  let leftStr = '',
      rightStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      leftStr += arr[i];
    }
    if (i > arr.length / 2 - 1) {
      rightStr = arr[i] + rightStr;
    }
  }
  return leftStr === rightStr;
};

/**
 * @name 验证回文字符串II
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  if (judgeDifference(s)) {
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    if (judgeDifference(s.slice(0, i) + s.slice(i + 1))) {
      return true;
    }
  }
  return false;
};
```

Submit 提交发现：

```js
Time Limit Exceeded
* 382/460 cases passed (N/A)
```

---

当字符串足够大，例如题目说的 50000 长度的时候，就超时了，所以需要进行优化~

> 【失败】暴力破解优化

```js
const validPalindrome = (s) => {
  if (s === s.split('').reverse().join('')) {
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    const tempArr = s.slice(0, i) + s.slice(i + 1);
    if (tempArr === tempArr.split('').reverse().join('')) {
      return true;
    }
  }
  return false;
};
```

Submit 提交：

```js
Time Limit Exceeded
* 377/460 cases passed (N/A)
```

---

事实证明暴力破解不了，咱们取巧吧：

> 双指针

```js
/**
 * @name 判断回文
 * @param {Array} s 字符串
 * @param {Number} left 左边位置
 * @param {Number} right 右边位置
 */
const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left++] != s[right--]) {
      return false;
    }
  }
  return true;
}
/**
 * @name 验证回文字符串II
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  const length = s.length;
  if (length < 2) {
    return true;
  }
  for (let i = 0; i < length; i++) {
    const reversePosition = length - i - 1;
    if (s[i] != s[reversePosition]) {
      return isPalindrome(s, i + 1, reversePosition) || isPalindrome(s, i, reversePosition - 1);
    }
  }
  return true;
};
```

Submit 提交：

```js
Accepted
* 460/460 cases passed (92 ms)
* Your runtime beats 92.36 % of javascript submissions
* Your memory usage beats 30.44 % of javascript submissions (43 MB)
```

题解：

1. 判断 `s` 的长度，不满 `2` 就返回 `true`。
2. 遍历 `s`，设置两个指针，一个从头到尾 `i`，一个从尾到头 `reversePosition = length - i - 1`。
3. 如果头和尾的字母不一致了，那么我们就判断 `i + 1` 和 `reversePosition` 之后是否为回文串，或者 `i` 和 `reversePosition - 1` 之后是否为回文串。
4. 从条件 3 开始，进行判断，如果再次出现不一致的情况，说明出现了两次不一致了，此时不能通过删除一个字母搞定，返回 `false`。
5. 除了上述条件外，其他都返回 `true`。

---

当然，【题解区】大佬的智慧是强大的，来看看递归：

> 递归

```js
const validPalindrome = (s, count = 0) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] === s[j]) {
      continue;
    }
    if (count > 0) {
      return false;
    }
    return validPalindrome(s.slice(i, j), count + 1) || validPalindrome(s.slice(i + 1, j + 1), count + 1);
  }
  return true;
};
```

Submit 提交：

```js
Accepted
* 460/460 cases passed (132 ms)
* Your runtime beats 29.17 % of javascript submissions
* Your memory usage beats 73.91 % of javascript submissions (42.5 MB)
```

如果小伙伴们有更好的思路或者见解，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
709 - 转换成小写字母（to-lower-case）
===

> Create by **jsliang** on **2019-12-22 12:05:53**  
> Recently revised in **2019-12-22 12:38:17**

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
* **题目地址**：https://leetcode-cn.com/problems/to-lower-case/
* **题目内容**：

```
实现函数 ToLowerCase()，
该函数接收一个字符串参数 str，
并将该字符串中的大写字母转换成小写字母，
之后返回新的字符串。

示例 1：

输入: "Hello"
输出: "hello"
示例 2：

输入: "here"
输出: "here"
示例 3：

输入: "LOVELY"
输出: "lovely"
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 转换成小写字母
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] > 'A' && str[i] < 'Z') {
      result += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(toLowerCase('Hello'));
```

`node index.js` 返回：

```js
'hello'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 8/8 cases passed (68 ms)
* Your runtime beats 32.54 % of javascript submissions
* Your memory usage beats 5.16 % of javascript submissions (34.4 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**程序员都是懒人，过一会回来再问回复还是这个！**

> 直接使用 API

```js
const toLowerCase = (str) => {
  return str.toLowerCase();
};
```

Submit 提交：

```js
Accepted
* 8/8 cases passed (60 ms)
* Your runtime beats 78.81 % of javascript submissions
* Your memory usage beats 5.16 % of javascript submissions (34.4 MB)
```

enm...原生的也只有这么低，看来有大佬写了个更好的啊~

说到这里，小伙伴们知道 `toLowerCase()` 和 `toLocaleLowerCase()` 的区别是啥么？

* `toLowerCase()`：借鉴于 java.lang.String 的同名方法，转换成小写。
* `toLocaleLowerCase()`：针对特定地区的实现，如土耳其语言等会应用特殊的规则，这时候就需要这个方法来保证实现正确。

> 如果你的代码可能会在多种语言环境中使用的话，还是 `toLocaleLowerCase()` 吧~

然后咱们用哈希表实现吧：

> 哈希表

```js
/**
 * @name 哈希映射
 * @param {*} str 传入的单个字符串
 */
const hash = (str) => {
  switch (str) {
    case 'A': return 'a'; case 'B': return 'b'; case 'C': return 'c'; case 'D': return 'd'; case 'E': return 'e'; case 'F': return 'f'; case 'G': return 'g'; case 'H': return 'h'; case 'I': return 'i'; case 'J': return 'J'; case 'H': return 'h'; case 'I': return 'i'; case 'J': return 'j'; case 'K': return 'K'; case 'L': return 'l'; case 'M': return 'm'; case 'N': return 'n'; case 'O': return 'o'; case 'P': return 'p'; case 'Q': return 'q'; case 'R': return 'r'; case 'S': return 's'; case 'T': return 't'; case 'U': return 'u'; case 'V': return 'v'; case 'W': return 'w'; case 'X': return 'x'; case 'Y': return 'y'; case 'Z': return 'z'; default : return str;
  }
}

/**
 * @name 转换成小写字母
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += hash(str[i]);
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 8/8 cases passed (68 ms)
* Your runtime beats 32.54 % of javascript submissions
* Your memory usage beats 5.16 % of javascript submissions (34.3 MB)
```

enm...又长又烂，成绩还不好看？

大佬们是怎么实现的，好奇去瞅瞅。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

参考下大佬们的题解，看下有没有收获~

> 利用 ASCII

```js
const toLowerCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      result += str[i];
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 8/8 cases passed (68 ms)
* Your runtime beats 32.54 % of javascript submissions
* Your memory usage beats 5.16 % of javascript submissions (34.4 MB)
```

如果小伙伴们有更好的思路或者想法，欢迎评论留言或者直接私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
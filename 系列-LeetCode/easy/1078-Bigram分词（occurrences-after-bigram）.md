1078 - Bigram分词（occurrences-after-bigram）
===

> Create by **jsliang** on **2020-01-31 10:59:54**  
> Recently revised in **2020-01-31 11:57:27**

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
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/occurrences-after-bigram/
* **题目内容**：

```
给出第一个词 first 和第二个词 second，
考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，
其中 second 紧随 first 出现，third 紧随 second 出现。

对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。

示例 1：

输入：
text = "alice is a good girl she is a good student", 
first = "a", 
second = "good"
输出：["girl","student"]

示例 2：

输入：
text = "we will we will rock you", 
first = "we", 
second = "will"
输出：["we","rock"]

提示：

1 <= text.length <= 1000
text 由一些用空格分隔的单词组成，
每个单词都由小写英文字母组成
1 <= first.length, second.length <= 10
first 和 second 由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/occurrences-after-bigram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name Bigram分词
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
  const textArr = text.split(' ');
  const result = [];
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      result.push(textArr[i + 2]);
    }
  }
  return result;
};

console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good')); // [ 'girl', 'student' ]
```

`node index.js` 返回：

```js
[ 'girl', 'student' ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 29/29 cases passed (64 ms)
* Your runtime beats 58.56 % of javascript submissions
* Your memory usage beats 49.38 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

简单难度：

> 暴力破解

```js
const findOcurrences = (text, first, second) => {
  const textArr = text.split(' ');
  const result = [];
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      result.push(textArr[i + 2]);
    }
  }
  return result;
};
```

步骤：

1. 先根据 `' '` 空格切割字符串。
2. 设置 `result` 获取最终结果。
3. 通过 2 个游标的移动，获取第三个游标对应的字符串，将其添加进 `result` 中。

打完收工，耗时如下：

```js
Accepted
* 29/29 cases passed (64 ms)
* Your runtime beats 58.56 % of javascript submissions
* Your memory usage beats 49.38 % of javascript submissions (33.8 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

那肯定会有小伙伴会纠结，我不喜欢用 JavaScript 原生 API 工具，我就喜欢手写，你都不是手写的：

> split 代码实现

```js
const findOcurrences = (text, first, second) => {
  const textArr = [];
  let str = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      textArr.push(str);
      str = '';
    } else {
      str += text[i];
    }
  }
  str.length && textArr.push(str);
  const result = [];
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      result.push(textArr[i + 2]);
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 29/29 cases passed (60 ms)
* Your runtime beats 73.87 % of javascript submissions
* Your memory usage beats 59.26 % of javascript submissions (33.7 MB)
```

enm...那我都直接在字符串上进行切割了，我何不直接在支付串上操作获取 `third` 元素：

> 暴力破解【优化】

```js
const findOcurrences = (text, first, second) => {
  // 1. 定义系列字段
  let flag = 0; // 当前游标
  let firstSite = 0; // 第一个字母游标
  let secondSite = 0; // 第二个字母游标
  const result = []; // 结果值
  let str = ''; // 当前字符串累计

  // 2. 开始搞事
  for (let i = 0; i < text.length; i++) {
    // 2.1 非 ' ' 空字符串下不停累加
    if (text[i] !== ' ') {
      str += text[i];
    }
    // 2.2 如果是 ' ' 或者是字符串末尾，进行结算
    if (text[i] === ' ' || i === text.length - 1) {
      flag++;
      if (firstSite === flag - 2 && secondSite === flag - 1) {
        result.push(str);
      }
      if (str === second && firstSite === flag - 1 && firstSite) {
        secondSite = flag;
      }
      if (str === first) {
        firstSite = flag;
      }
      str = '';
    }
  }
  // 3. 返回最终结果
  return result;
};
```

Submit 提交：

```js
Accepted
* 29/29 cases passed (60 ms)
* Your runtime beats 73.87 % of javascript submissions
* Your memory usage beats 6.17 % of javascript submissions (35.4 MB)
```

你想要的，全都在这了~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
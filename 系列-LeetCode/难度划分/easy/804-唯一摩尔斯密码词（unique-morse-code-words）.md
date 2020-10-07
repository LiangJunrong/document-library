804 - 唯一摩尔斯密码词（unique-morse-code-words）
===

> Create by **jsliang** on **2020-01-05 11:18:08**  
> Recently revised in **2020-01-05 11:44:46**

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
* **题目地址**：https://leetcode-cn.com/problems/unique-morse-code-words/
* **题目内容**：

```
国际摩尔斯密码定义一种标准编码方式，
将每个字母对应于一个由一系列点和短线组成的字符串，
比如: "a" 对应 ".-", 
"b" 对应 "-...",
"c" 对应 "-.-.", 等等。

为了方便，所有26个英文字母对应摩尔斯密码表如下：

[
  ".-","-...","-.-.","-..",
  ".","..-.","--.","....",
  "..",".---","-.-",".-..",
  "--","-.","---",".--.",
  "--.-",".-.","...","-",
  "..-","...-",".--","-..-",
  "-.--","--.."
]

给定一个单词列表，
每个单词可以写成每个字母对应摩尔斯密码的组合。

例如，"cab" 可以写成 "-.-..--..."，
(即 "-.-." + "-..." + ".-"字符串的结合)。
我们将这样一个连接过程称作单词翻译。

返回我们可以获得所有词不同单词翻译的数量。

例如:
输入: words = ["gin", "zen", "gig", "msg"]
输出: 2
解释: 
各单词翻译如下:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

共有 2 种不同翻译, "--...-." 和 "--...--.".

注意:

单词列表 words 的长度不会超过 100。
每个单词 words[i]的长度范围为 [1, 12]。
每个单词 words[i]只包含小写字母。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 转换单词为摩尔斯密码
 * @param {*} word 
 */
const transform = (word) => {
  let str = '';
  const map = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
  for (let i = 0; i < word.length; i++) {
    str += map[word[i].charCodeAt() - 97];
  }
  return str;
};

/**
 * @name 唯一摩尔斯密码词
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(transform(words[i]));
  }
  return [...new Set(result)].length;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
```

`node index.js` 返回：

```js
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 83/83 cases passed (76 ms)
* Your runtime beats 42.39 % of javascript submissions
* Your memory usage beats 20.64 % of javascript submissions (35.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

小意思啦，直接解题：

> 暴力破解

```js
const transform = (word) => {
  let str = '';
  const map = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
  for (let i = 0; i < word.length; i++) {
    str += map[word[i].charCodeAt() - 97];
  }
  return str;
};

const uniqueMorseRepresentations = (words) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(transform(words[i]));
  }
  return [...new Set(result)].length;
};
```

为了代码看起来简洁，所以抽取了一个方法 `transform`，主要功能是将单词转换成摩尔斯密码词。

最后通过 `Set` 去重得到 `length` 长度即可。

Submit 提交如下：

```js
Accepted
* 83/83 cases passed (76 ms)
* Your runtime beats 42.39 % of javascript submissions
* Your memory usage beats 20.64 % of javascript submissions (35.7 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，还有其他法子：

> 优化：哈希表

```js
const uniqueMorseRepresentations = (words) => {
  const map = new Map();
  const hash = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  for (let i = 0; i < words.length; i++) {
    let tempStr = '';
    for (let j = 0; j < words[i].length; j++) {
      tempStr += hash[words[i][j].charCodeAt() - 97];
    }
    map.set(tempStr, tempStr);
  }
  return map.size;
};
```

当然，很奇怪的是，它的效率跟前面都是半桶水啦：

```js
Accepted
* 83/83 cases passed (76 ms)
* Your runtime beats 42.39 % of javascript submissions
* Your memory usage beats 17.99 % of javascript submissions (35.8 MB)
```

如果你有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
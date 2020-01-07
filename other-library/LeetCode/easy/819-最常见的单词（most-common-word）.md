819 - 最常见的单词（most-common-word）
===

> Create by **jsliang** on **2020-01-07 08:31:23**  
> Recently revised in **2020-01-07 09:22:05**

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
* **题目地址**：https://leetcode-cn.com/problems/most-common-word/
* **题目内容**：

```
给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。
返回出现次数最多，
同时不在禁用列表中的单词。

题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，
不含标点符号。

段落中的单词不区分大小写。
答案都是小写字母。

示例：

输入: 
paragraph = "Bob hit a ball, 
the hit BALL flew far after it was hit."

banned = ["hit"]

输出: "ball"

解释: 
"hit" 出现了 3 次，但它是一个禁用的单词。
"ball" 出现了2次 (同时没有其他单词出现 2 次)，
所以它是段落里出现次数最多的，且不在禁用列表中的单词。 

注意，所有这些单词在段落里不区分大小写，
标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"）， 
"hit" 不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
 

说明：

1 <= 段落长度 <= 1000.
1 <= 禁用单词个数 <= 100.
1 <= 禁用单词长度 <= 10.

答案是唯一的, 且都是小写字母 
(即使在 paragraph 里是大写的，
即使是一些特定的名词，答案都是小写的。)
paragraph 只包含字母、空格和下列标点符号!?',;.
不存在没有连字符或者带有连字符的单词。
单词里只包含字母，不会出现省略号或者其他标点符号。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最常见的单词
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned)  =>{
  // 通过正则转换字符串为数组
  const strToArr = paragraph.match(/[a-zA-Z]+/g);
  if (strToArr.length === 1) {
    return strToArr[0].toLowerCase();
  }

  // 定义哈希表
  const map = new Map();

  // 定义最大次数和对应的字符串
  let max = Number.MIN_SAFE_INTEGER;
  let result = '';

  // 遍历数组
  for (let i = 0; i < strToArr.length; i++) {
    // 转换小写字母
    strToArr[i] = strToArr[i].toLowerCase();

    // 统计次数和是否禁用
    const time = map.get(strToArr[i]) || 0;
    const index = banned.findIndex(item => item === strToArr[i]);

    // 累积出现次数
    if (time) {
      map.set(strToArr[i], time + 1);
    } else {
      map.set(strToArr[i], 1);
    }

    // 判断是否需要替换
    if (time + 1 > max && index === -1) {
      max = time + 1;
      result = strToArr[i];
    }
  }

  // 返回结果
  return result;
};

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])); // ball
console.log(mostCommonWord('a.', []));
console.log(mostCommonWord('Bob. hIt, baLl', ['bob', 'hit']));
```

`node index.js` 返回：

```js
ball
a
ball
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 47/47 cases passed (68 ms)
* Your runtime beats 86.51 % of javascript submissions
* Your memory usage beats 33.33 % of javascript submissions (36.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，先上代码：

```js
const mostCommonWord = (paragraph, banned)  =>{
 // 1. 通过正则转换字符串为数组
 const strToArr = paragraph.match(/[a-zA-Z]+/g);

 // 2. 定义哈希表
 const map = new Map();

 // 3. 定义最大次数和对应的字符串
 let max = Number.MIN_SAFE_INTEGER;
 let result = '';

 // 4. 遍历数组
 for (let i = 0; i < strToArr.length; i++) {
   // 5. 转换当前值为小写字母
   strToArr[i] = strToArr[i].toLowerCase();

   // 6. 统计当前值次数和是否禁用
   const time = map.get(strToArr[i]) || 0;
   const index = banned.findIndex(item => item === strToArr[i]);

   // 7. 累积当前值出现次数
   if (time) {
     map.set(strToArr[i], time + 1);
   } else {
     map.set(strToArr[i], 1);
   }

   // 8. 判断最大次数和对应字符串是否需要替换
   if (time + 1 > max && index === -1) {
     max = time + 1;
     result = strToArr[i];
   }
 }

 // 9. 返回结果
 return result;
};
```

内容甚是简单，为了便于阅读，就加上了 9 条注释，小伙伴可以直接阅读。

Submit 提交：

```js
Accepted
* 47/47 cases passed (68 ms)
* Your runtime beats 86.51 % of javascript submissions
* Your memory usage beats 33.33 % of javascript submissions (36.8 MB)
```

当然，这过程是复杂了：

1. 用了正则 `match`；
2. 用了双重循环 `for + findIndex`。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，针对自身不足，希望能找到不错的方法~

> 简化暴力

```js
const mostCommonWord = (paragraph, banned) => {
  const wordList = paragraph.toLowerCase().match(/\w+/g);
  const result = {};
  for (let i = 0; i < wordList.length; i++) {
    if (!banned.includes(wordList[i]) && result[wordList[i]]) {
      result[wordList[i]] += 1;
    } else if (!banned.includes(wordList[i]) && !result[wordList[i]]) {
      result[wordList[i]] = 1;
    }
  }
  let count = 0;
  let maxItem = '';
  for (const key in result) {
    if (result[key] > count) {
      count = result[key];
      maxItem = key;
    }
  }
  return maxItem;
}
```

看起来清爽一点，不过效率同样不高：

```js
Accepted
* 47/47 cases passed (84 ms)
* Your runtime beats 15.08 % of javascript submissions
* Your memory usage beats 80 % of javascript submissions (35.5 MB)
```

还有空间节省到了极致的：

> 空间节省

```js
var mostCommonWord = function (paragraph, banned) {
  let arr = paragraph.toLowerCase().match(/\w+/g);
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!banned.includes(arr[i])) {
      let count = map.get(arr[i]) === undefined ? 0 : map.get(arr[i]);
      map.set(arr[i], ++count);
    }
  }
  let key = Array.from(map);
  key.sort(function (a, b) {
    return b[1] - a[1];
  })
  return key[0][0];
};
```

Submit 提交：

```js
Accepted
* 47/47 cases passed (80 ms)
* Your runtime beats 26.19 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.8 MB)
```

如果小伙伴有效率更好的方法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
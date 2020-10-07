1170 - 比较字符串最小字母出现频次（compare-strings-by-frequency-of-the-smallest-character）
===

> Create by **jsliang** on **2020-01-31 17:20:57**  
> Recently revised in **2020-01-31 18:19:19**

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
* **涉及知识**：数组、字符串
* **题目地址**：https://leetcode-cn.com/problems/compare-strings-by-frequency-of-the-smallest-character/
* **题目内容**：

```
我们来定义一个函数 f(s)，
其中传入参数 s 是一个非空字符串；
该函数的功能是统计 s  中（按字典序比较）最小字母的出现频次。

例如，若 s = "dcce"，那么 f(s) = 2，
因为最小的字母是 "c"，它出现了 2 次。

现在，给你两个字符串数组待查表 queries 和词汇表 words，
请你返回一个整数数组 answer 作为答案，
其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，
W 是词汇表 words 中的词。

示例 1：

输入：
queries = ["cbd"],
words = ["zaaaz"]
输出：[1]
解释：
查询 f("cbd") = 1，而 f("zaaaz") = 3 
所以 f("cbd") < f("zaaaz")。

示例 2：

输入：
queries = ["bbb","cc"], 
words = ["a","aa","aaa","aaaa"]
输出：[1,2]
解释：
第一个查询 f("bbb") < f("aaaa")，
第二个查询 f("aaa") 和 f("aaaa") 都 > f("cc")。

提示：

1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] 都是小写英文字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compare-strings-by-frequency-of-the-smallest-character
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    
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

不用看题目了，我来给你讲这道题什么规矩吧：

1. 有字符串数组 `queries = ['bbc', cc']`，以及另一个字符串数组：`words = ['a', 'aa', 'aaa', 'aaaa']`。
2. 统计两个字符串数组中最小字母出现的次数，即：`queriesNum = [2, 2], wordsNum = [1, 2, 3, 4]`。
3. 拿 `queriesNum` 去一一比对 `wordsNum` 中比它大的数字，返回对应的次数：`result = [2, 2]`。

> 注释：在 `queriesNum[0] = 2` 中，`wordsNum` 存在两个数字 3、4 比它大，所以有一次。在 `queriesNum[0] = 2` 中，`wordsNum` 存在两个数字 3、4 比它大，所以有 2 次。

OK，如果你看懂了这段话，那么答案呼之欲出了：

> 暴力破解【超时】

```js
const numSmallerByFrequency = (queries, words) => {
  const result = Array.from(Array(queries.length), () => 0);
  // 1. 遍历 queries 列表
  for (let i = 0; i < queries.length; i++) {
    // 2. 设置最小字母及其出现次数
    let queryMin = queries[i][0],
        queryMinTime = 0;
    for (let j = 0; j < queries[i].length; j++) {
      const queryCompare = queries[i][j].localeCompare(queryMin);
      if (queryCompare < 0) {
        queryMin = queries[i][j];
        queryMinTime = 1;
      } else if (queryCompare === 0) {
        queryMinTime ++;
      }
    }
    // 3. 将本次 query 逐个和 words[j] 对比
    for (let j = 0; j < words.length; j++) {
      let wordMin = words[j][0],
          wordMinTime = 0;
      for (let k = 0; k < words[j].length; k++) {
        const wordCompare = words[j][k].localeCompare(wordMin);
        if (wordCompare < 0) {
          wordMin = words[j][k];
          wordMinTime = 1;
        } else if (wordCompare === 0) {
          wordMinTime ++;
        }
      }
      if (queryMinTime < wordMinTime) {
        result[i]++;
      }
    }
  }
  return result;
};
```

很好，这很 LeetCode，直接超时：

```js
Time Limit Exceeded
* 36/37 cases passed (N/A)
```

那么肯定要优化优化啦：

> 暴力破解【优化】

```js
/**
 * @name 获取次数列表
 * @param {string[]} strs 
 */
const getTimeList = (strs) => {
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    // 2. 设置最小字母及其出现次数
    let minLetter = strs[i][0],
        minLetterTime = 0;
    for (let j = 0; j < strs[i].length; j++) {
      const compare = strs[i][j].localeCompare(minLetter);
      if (compare < 0) {
        minLetter = strs[i][j];
        minLetterTime = 1;
      } else if (compare === 0) {
        minLetterTime ++;
      }
    }
    result.push(minLetterTime);
  }
  return result;
};

/**
 * @name 比较字符串最小字母出现频次
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) => {
  const result = Array.from(Array(queries.length), () => 0);

  // 统计 queries
  const queriesNum = getTimeList(queries);
  // 统计 words
  const wordsNum = getTimeList(words);

  for (let i = 0; i < queriesNum.length; i++) {
    let time = 0;
    for (let j = 0; j < wordsNum.length; j++) {
      if (queriesNum[i] < wordsNum[j]) {
        time ++;
      }
    }
    result[i] = time;
  }

  return result;
};
```

Submit 提交：

```js
Accepted
* 37/37 cases passed (136 ms)
* Your runtime beats 55.81 % of javascript submissions
* Your memory usage beats 77.78 % of javascript submissions (38.7 MB)
```

搞定，收工~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
500 - 键盘行（keyboard-row）
===

> Create by **jsliang** on **2019-10-30 11:13:45**  
> Recently revised in **2019-10-30 17:30:33**

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
* **题目地址**：https://leetcode-cn.com/problems/keyboard-row/
* **题目内容**：

给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。

键盘如下图所示。

![图](../../../public-repertory/img/other-algorithm-500-1.png)

示例：

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]

注意：

你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 键盘行
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const rows = ['qwertyuiop','asdfghjkl','zxcvbnm'];
  return words.filter(word => {
    return rows.some(row => {
      return word.toLocaleLowerCase().split('').every(z => {
        return row.includes(z);
      });
    });
  });
};

// const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
const words = ['a', 'b'];
console.log(findWords(words));
```

`node index.js` 返回：

```js
['a', 'b']
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 22/22 cases passed (60 ms)
* Your runtime beats 91.26 % of javascript submissions
* Your memory usage beats 5.97 % of javascript submissions (33.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，这是道有意思的题，那么我们先意思意思：

```js
/**
 * @name 键盘行
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const hash = [
    { title: 'Q', index: 1 },
    { title: 'W', index: 1 },
    { title: 'E', index: 1 },
    { title: 'R', index: 1 },
    { title: 'T', index: 1 },
    { title: 'Y', index: 1 },
    { title: 'U', index: 1 },
    { title: 'I', index: 1 },
    { title: 'O', index: 1 },
    { title: 'P', index: 1 },
    { title: 'A', index: 2 },
    { title: 'S', index: 2 },
    { title: 'D', index: 2 },
    { title: 'F', index: 2 },
    { title: 'G', index: 2 },
    { title: 'H', index: 2 },
    { title: 'J', index: 2 },
    { title: 'K', index: 2 },
    { title: 'L', index: 2 },
    { title: 'Z', index: 3 },
    { title: 'X', index: 3 },
    { title: 'C', index: 3 },
    { title: 'V', index: 3 },
    { title: 'B', index: 3 },
    { title: 'N', index: 3 },
    { title: 'M', index: 3 },
  ]
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      result.push(words[i]);
    } else {
      for (let j = 0; j < words[i].length - 1; j++) {
        const prevIndex = hash.find(item => item.title === words[i][j].toUpperCase()).index;
        const nextIndex = hash.find(item => item.title === words[i][j + 1].toUpperCase()).index;
        if (prevIndex !== nextIndex) {
          break;
        }
        if (prevIndex === nextIndex && j === words[i].length - 2) {
          result.push(words[i]);
        }
      }
    }
  }
  return result;
};


// const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
const words = ['a', 'b'];
console.log(findWords(words));
```

**然后**，Submit 提交看下：

```js
Accepted
* 22/22 cases passed (96 ms)
* Your runtime beats 7.28 % of javascript submissions
* Your memory usage beats 5.97 % of javascript submissions (35 MB)
```

还有更菜的吗，有木有！！！(⊙﹏⊙)b

**最后**，再菜也讲下思路：

1. 定义哈希表，每个字母及其对应的行数。
2. 遍历传进来的数组 `words`，然后判断每个 `words` 的长度，因为长度为 1 的，就是单独一行。
3. 判断当前字母所在的行数和下一个字母所在的行数是否一致，如果不是，循环中断，如果直到数组倒数第二个（倒数第二和倒数第一），都是一致的话，那么这个单词就符合题目要求
4. 返回最终结果 `result`。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

既然今天有时间，肯定希望多折腾，多学习，然后提升自己，那么，Let's go：

> 正则表达式

```js
const findWords = (words) => {
  const regexp = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i;
  return words.filter(item => {
    return regexp.test(item);
  })
};
```

正则表达式的效率挺感人的：

```js
Accepted
* 22/22 cases passed (52 ms)
* Your runtime beats 98.54 % of javascript submissions
* Your memory usage beats 53.73 % of javascript submissions (33.6 MB)
```

当然我这种正则渣渣，就算搞懂了也是打死写不出的了，下一个。

> 复合计算

```js
const findWords = (words) => {
  const rows = ['qwertyuiop','asdfghjkl','zxcvbnm'];
  return words.filter(word => {
    return rows.some(row => word.toLocaleLowerCase().split('').every(z => row.includes(z)));
  });
};
```

Submit 提交：

```js
Accepted
* 22/22 cases passed (64 ms)
* Your runtime beats 83.5 % of javascript submissions
* Your memory usage beats 25.37 % of javascript submissions (33.7 MB)
```

OK，比起正则和我的暴力破解来，这个是比较中规中矩的，怕小伙伴们看不清楚，这里我们整理了下，顺带讲讲它的解法：

```js
const findWords = (words) => {
  const rows = ['qwertyuiop','asdfghjkl','zxcvbnm'];
  return words.filter(word => {
    return rows.some(row => {
      return word.toLocaleLowerCase().split('').every(z => {
        return row.includes(z);
      });
    });
  });
};
```

1. `rows` 存储键盘对应的三行。
2. 遍历 `rows` 和 `words`，每个 `word` 转小写并且转数组后，判断单个 `word` 的所有元素是否属于同一个 `row`。
3. 条件 2 判断中只要有一个条件符合那就表明这个单词属于上述条件中的一个。

口说无凭惹人烦，咱们还是看数据：

1. 数据为：`["Hello", "Alaska", "Dad", "Peace"]`
2. `Hello` 转小写转数组：`['h', 'e', 'l', 'l', 'o']`
3. 数组中的所有元素，`h` 在 `rows[1]`，但是 `e` 在 `rows[0]`，不符合全部值在同一个位置，排除
4. `Alaska` 转小写转数组：`['a','l','a','s','k','a']`
5. 数组中的所有元素，都在 `rows[1]` 中，所以 `filter` 后返回该值
6. 循环往复……

最终得出答案。

> 业务中多写这种代码 `filter`、`some`、`split`、`every`、`includes`……会让一些维护代码的菜鸡队友崩溃吧，如果数据再复杂点，估计一些比较牛的也琢磨不透吧~ /手动滑稽

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
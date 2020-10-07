953 - 验证外星语词典（verifying-an-alien-dictionary）
===

> Create by **jsliang** on **2020-01-28 09:57:24**  
> Recently revised in **2020-01-28 10:55:24**

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
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/verifying-an-alien-dictionary/
* **题目内容**：

```
某种外星语也使用英文小写字母，
但可能顺序 order 不同。
字母表的顺序（order）是一些小写字母的排列。

给定一组用外星语书写的单词 words，
以及其字母表的顺序 order，
只有当给定的单词在这种外星语中按字典序排列时，
返回 true；
否则，返回 false。

 

示例 1：

输入：
words = ["hello","leetcode"],
order = "hlabcdefgijkmnopqrstuvwxyz"
输出：true
解释：
在该语言的字母表中，'h' 位于 'l' 之前，
所以单词序列是按字典序排列的。

示例 2：

输入：
words = ["word","world","row"], 
order = "worldabcefghijkmnpqstuvxyz"
输出：false
解释：
在该语言的字母表中，'d' 位于 'l' 之后，
那么 words[0] > words[1]，因此单词序列不是按字典序排列的。

示例 3：

输入：
words = ["apple","app"], 
order = "abcdefghijklmnopqrstuvwxyz"
输出：false
解释：
当前三个字符 "app" 匹配时，
第二个字符串相对短一些，
然后根据词典编纂规则 "apple" > "app"，
因为 'l' > '∅'，
其中 '∅' 是空白字符，
定义为比任何其他字符都小（更多信息）。

提示：

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
在 words[i] 和 order 中的所有字符都是英文小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/verifying-an-alien-dictionary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 验证外星语词典
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  order = ' ' + order; // 我们将空字符串定义为空白字符，权重为 0
  for (let i = 0; i < words.length - 1; i++) {
    const length = Math.max(words[i].length, words[i + 1].length);
    for (let j = 0; j < length; j++) {
      const prevIndex = order.indexOf(words[i][j] || ' ');
      const nextIndex = order.indexOf(words[i + 1][j] || ' ');
      if (prevIndex > nextIndex) {
        return false;
      } else if (prevIndex < nextIndex) {
        break;
      } else {
        continue;
      }
    }
  }
  return true;
};

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')); // true
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')); // false
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')); // false
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
* 115/115 cases passed (72 ms)
* Your runtime beats 51.85 % of javascript submissions
* Your memory usage beats 80 % of javascript submissions (34 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

很高兴我开始研究外星语了，啥时候让我接触下外星人~

> LeetCode 强大的题目内容

那么，咱们按惯例，还是先转译下题目。

> LeetCode 题目都要转译，它是不是外星XXX……

分析如下：

1. 已知有一串字符 `words`：`['word', 'world', 'row']`。
2. 然后有一个字母顺序表 `order`：`worldabcefghijkmnpqstuvxyz`。
3. 这些单词 `words` 需要按照 `order` 的顺序进行排序，例如 `words` 中有单词 `['word', 'world', 'row']`，那么先比较第一个字母，即 `w, w, r`，这时候 `r` 在 `w` 后面无异议；接着比较第二个字母，即 `o, o`（此时第三个单词 `row` 已经排除了）……
4. 以此类推，直至所有单词比较完毕，无意义则返回 `true`，否则返回 `false`。

那么直接上代码：

> 暴力破解

```js
const isAlienSorted = (words, order) => {
  order = ' ' + order; // 我们将空字符串定义为空白字符，权重为 0
  for (let i = 0; i < words.length - 1; i++) {
    const length = Math.max(words[i].length, words[i + 1].length);
    for (let j = 0; j < length; j++) {
      const prevIndex = order.indexOf(words[i][j] || ' ');
      const nextIndex = order.indexOf(words[i + 1][j] || ' ');
      if (prevIndex > nextIndex) {
        return false;
      } else if (prevIndex < nextIndex) {
        break;
      } else {
        continue;
      }
    }
  }
  return true;
};
```

思路就如 **jsliang** 所分析的那样：

1. 首先重定义 `order`，因为根据案例 3 所说，需要对字符串进行补充，例如 `app` 和 `apple` 比较的时候，应该是 `app  ` 和 `apple` 比较（注意 `app` 后面加了 2 个空格）。
2. 然后通过 `for` 遍历 `words`，因为我们使用双指针，所有应该设置条件是 `i < words.length - 1`。
3. 接着我们通过 `Math.max` 获取两者的最大长度，避免 `app` 和 `apple` 比较失败的情况。
4. 再来就是遍历 `words[i]` 和 `words[i + 1]` 这两者，我们以 `order` 为哈希表，进行索引的查找。
5. 最后就是比较每个单词的索引，如果前者大于后者（`prevIndex > nextIndex`），那么说明这个是不符合规定的；如果前者小于后者，那么这个单词是 OK 的，我们应该中止这次循环，直接进入到 `words[i + 1]` 和 `words[i + 2]` 的比较；如果这两个单词是相同的，那么就进入下一个字符的比较~

这样，我们就完成了外星语词典的验证，Submit 提交为：

```js
Accepted
* 115/115 cases passed (72 ms)
* Your runtime beats 51.85 % of javascript submissions
* Your memory usage beats 80 % of javascript submissions (34 MB)
```

好了，我知道外星语用法了，赶紧告诉我去哪里找外星人~

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
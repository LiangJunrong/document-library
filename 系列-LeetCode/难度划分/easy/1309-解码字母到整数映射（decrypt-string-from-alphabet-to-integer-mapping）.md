1309 - 解码字母到整数映射（decrypt-string-from-alphabet-to-integer-mapping）
===

> Create by **jsliang** on **2020-02-01 20:00:04**  
> Recently revised in **2020-02-01 20:20:07**

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
* **题目地址**：https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
* **题目内容**：

```
给你一个字符串 s，
它由数字（'0' - '9'）和 '#' 组成。

我们希望按下述规则将 s 映射为一些小写英文字符：

字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

示例 1：

输入：s = "10#11#12"
输出："jkab"
解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

示例 2：

输入：s = "1326#"
输出："acz"

示例 3：

输入：s = "25#"
输出："y"

示例 4：

输入：s = "
12345678910#11#12#13#14#15#16#17
#18#19#20#21#22#23#24#25#26#
"
输出："abcdefghijklmnopqrstuvwxyz"

提示：

1 <= s.length <= 1000
s[i] 只包含数字（'0'-'9'）和 '#' 字符。
s 是映射始终存在的有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 解码字母到整数映射
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  const map = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const now = Number(s[i]);
    if (
      (now === 1 || now === 2)
      && s[i + 2] === '#'
    ) {
      result += map[Number(s[i] + s[i + 1])];
      i += 2;
    } else {
      result += map[now];
    }
  }
  return result;
};

console.log(freqAlphabets('10#11#12')); // 'jkab'
```

`node index.js` 返回：

```js
'jkab'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 40/40 cases passed (68 ms)
* Your runtime beats 51.27 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

首先，这道题的尴尬地方应该是，碰到 1 和 2 的时候，你需要注意是：

* 1
* 2
* 1x#
* 2x#

> `x` 为 1-9 的任意数

所以我们可以编写代码为：

> 哈希表

```js
const freqAlphabets = (s) => {
  const map = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const now = Number(s[i]);
    if (
      (now === 1 || now === 2)
      && s[i + 2] === '#'
    ) {
      result += map[Number(s[i] + s[i + 1])];
      i += 2;
    } else {
      result += map[now];
    }
  }
  return result;
};
```

> 注意，因为 1 映射的是 `a`，所以 `map` 第 0 位是 `''`，第 1 位才是 `'a'`。

破解思路：

1. 设置 `map` 为哈希表。
2. 设置 `result` 获取结果。
3. 判断 `Number(s[i])` 是否为 1 或者 2，并且 `s[i + 2]` 为 `'#'` 号，我们就将其合计起来，同时 `i += 2`，结合上面的 `i++`，跳动 3 次，忽略接下来的 2 个元素。
4. 如果不符合条件 3，那么直接添加上去即可。

Submit 提交：

```js
Accepted
* 40/40 cases passed (68 ms)
* Your runtime beats 51.27 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (33.8 MB)
```

搞定收工~

还收获了次 100% 空间打败，可喜可贺。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
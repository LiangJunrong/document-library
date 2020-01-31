1221 - 分割平衡字符串（split-a-string-in-balanced-strings）
===

> Create by **jsliang** on **2020-01-31 22:28:37**  
> Recently revised in **2020-01-31 22:53:43**

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
* **涉及知识**：贪心算法、字符串
* **题目地址**：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
* **题目内容**：

```
在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

返回可以通过分割得到的平衡字符串的最大数量。

示例 1：

输入：s = "RLRRLLRLRL"
输出：4
解释：
s 可以分割为 "RL", "RRLL", "RL", "RL", 
每个子字符串中都包含相同数量的 'L' 和 'R'。

示例 2：

输入：s = "RLLLLRRRLR"
输出：3
解释：
s 可以分割为 "RL", "LLLRRR", "LR", 
每个子字符串中都包含相同数量的 'L' 和 'R'。

示例 3：

输入：s = "LLLLRRRR"
输出：1
解释：s 只能保持原样 "LLLLRRRR".

提示：

1 <= s.length <= 1000
s[i] = 'L' 或 'R'

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 分割平衡字符串
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let time = 0;
  let RLength = 0;
  let LLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      RLength++;
    } else {
      LLength++;
    }
    if (RLength && LLength && RLength === LLength) {
      time++;
    }
  }
  return time;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLLLLRRRLR')); // 3
console.log(balancedStringSplit('LLLLRRRR')); // 1
```

`node index.js` 返回：

```js
4
3
1
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 40/40 cases passed (72 ms)
* Your runtime beats 33.98 % of javascript submissions
* Your memory usage beats 68.28 % of javascript submissions (34.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

看到这道题觉得很为难，是不是 LeetCode 又耍我了。

但是仔细想想，应该不是中等难度的题。

于是试了下：

> 暴力破解

```js
const balancedStringSplit = (s) => {
  let time = 0;
  let RLength = 0;
  let LLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      RLength++;
    } else {
      LLength++;
    }
    if (RLength && LLength && RLength === LLength) {
      time++;
    }
  }
  return time;
};
```

因为它是一个【平衡字符串】，所以它出现 `R` 和出现 `L` 的次数是一样的。

所以咱们通过比对 `RLength` 和 `LLength`，就可以知道是否能切割了。

又因为它不需要切割后的字符串，所以咱们统计次数 `time` 就行了。

Submit 提交：

```js
Accepted
* 40/40 cases passed (72 ms)
* Your runtime beats 33.98 % of javascript submissions
* Your memory usage beats 68.28 % of javascript submissions (34.2 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

哎！不对，为啥我感觉写得挺简洁的了，效率还是那么低下？

> 【题解区】

```js
const balancedStringSplit = (s) => {
  let count = 0,
      sign = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      sign++;
    } else {
      sign--;
    }
    if (sign === 0) {
      count++;
    }
  }
  return count;
};
```

这个大佬通过控制 `sign` 是否为 0 来判断是否平衡，比我的代码少了 1 个变量。

Submit 提交为：

```js
Accepted
* 40/40 cases passed (64 ms)
* Your runtime beats 75.4 % of javascript submissions
* Your memory usage beats 74.28 % of javascript submissions (34.1 MB)
```

enm...难道跟我的判断还有关系？

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
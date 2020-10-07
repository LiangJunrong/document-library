1189 - 气球的最大数量（maximum-number-of-balloons）
===

> Create by **jsliang** on **2020-01-31 20:35:31**  
> Recently revised in **2020-01-31 21:24:36**

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
* **涉及知识**：哈希表、字符串
* **题目地址**：https://leetcode-cn.com/problems/maximum-number-of-balloons/
* **题目内容**：

```
给你一个字符串 text，
你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

字符串 text 中的每个字母最多只能被使用一次。

请你返回最多可以拼凑出多少个单词 "balloon"。

示例 1：

输入：text = "nlaebolko"
输出：1

示例 2：

输入：text = "loonbalxballpoon"
输出：2

示例 3：

输入：text = "leetcode"
输出：0
 
提示：

1 <= text.length <= 10^4
text 全部由小写英文字母组成

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-number-of-balloons
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 气球的最大数量
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = (text) => {
  const bolloons = [0, 0, 0, 0, 0]; // ['b', 'a', 'l', 'o', 'n']
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'b':
        bolloons[0] += 1;
        break;
      case 'a':
        bolloons[1] += 1;
        break;
      case 'l':
        bolloons[2] += 1;
        break;
      case 'o':
        bolloons[3] += 1;
        break;
      case 'n':
        bolloons[4] += 1;
        break;
    }
  }
  return Math.min(bolloons[0], bolloons[1], Math.floor(bolloons[2] / 2), Math.floor(bolloons[3] / 2), bolloons[4]);
};

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
console.log(maxNumberOfBalloons('bolon')); // 0
```

`node index.js` 返回：

```js
1
2
0
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 23/23 cases passed (56 ms)
* Your runtime beats 97.92 % of javascript submissions
* Your memory usage beats 83.85 % of javascript submissions (34.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

我寻思着吧，这又是一道求父子集合的问题，就是稍微变动了下。

> 暴力破解

```js
const maxNumberOfBalloons = (text) => {
  const bolloons = [0, 0, 0, 0, 0]; // ['b', 'a', 'l', 'o', 'n']
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'b':
        bolloons[0] += 1;
        break;
      case 'a':
        bolloons[1] += 1;
        break;
      case 'l':
        bolloons[2] += 1;
        break;
      case 'o':
        bolloons[3] += 1;
        break;
      case 'n':
        bolloons[4] += 1;
        break;
    }
  }
  return Math.min(bolloons[0], bolloons[1], Math.floor(bolloons[2] / 2), Math.floor(bolloons[3] / 2), bolloons[4]);
};
```

思考了下感觉上面代码是比较完美的了：

1. 设置 `bolloons` 为 `['b', 'a', 'l', 'o', 'n']` 对应的次数。
2. 通过 `for` 将这些统计的次数给收集起来。
3. 然后找到这个数组中最小的次数即可~。

Submit 提交：

```js
Accepted
* 23/23 cases passed (56 ms)
* Your runtime beats 97.92 % of javascript submissions
* Your memory usage beats 83.85 % of javascript submissions (34.8 MB)
```

很好，挺优秀的这题解。

> 自己夸自己

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
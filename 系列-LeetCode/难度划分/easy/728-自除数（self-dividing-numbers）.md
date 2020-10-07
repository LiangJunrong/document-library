728 - 自除数（self-dividing-numbers）
===

> Create by **jsliang** on **2019-12-26 08:48:09**  
> Recently revised in **2019-12-26 09:04:16**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/self-dividing-numbers/
* **题目内容**：

```
自除数 是指可以被它包含的每一位数除尽的数。

例如，128 是一个自除数，
因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

还有，自除数不允许包含 0 。

给定上边界和下边界数字，
输出一个列表，
列表的元素是边界（含边界）内所有的自除数。

示例 1：

输入： 
上边界left = 1, 
下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
注意：

每个输入参数的边界满足 1 <= left <= right <= 10000。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 自除数
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let item = left; item <= right; item++) {
    const temp = String(item);
    for (let j = 0; j < temp.length; j++) {
      if (temp % temp[j] !== 0) {
        break;
      }
      if (temp % temp[j] === 0 && j === temp.length - 1) {
        result.push(Number(temp));
      }
    }
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));
```

`node index.js` 返回：

```js
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 31/31 cases passed (72 ms)
* Your runtime beats 78.82 % of javascript submissions
* Your memory usage beats 57.63 % of javascript submissions (36.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

数学题，要简单很简单，要难很难：

* **开始时间**：2019-12-26 08:48:12
* **结束时间**：2019-12-26 08:54:51

7 分钟搞定：

> 暴力破解

```js
/**
 * @name 自除数
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let item = left; item <= right; item++) {
    const temp = String(item);
    for (let j = 0; j < temp.length; j++) {
      if (temp % temp[j] !== 0) {
        break;
      }
      if (temp % temp[j] === 0 && j === temp.length - 1) {
        result.push(Number(temp));
      }
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 31/31 cases passed (72 ms)
* Your runtime beats 78.82 % of javascript submissions
* Your memory usage beats 57.63 % of javascript submissions (36.2 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看到【题解区】有个 JavaScript 解法：

* https://leetcode-cn.com/problems/self-dividing-numbers/solution/mei-shi-yao-yao-zhuan-wan-liao-by-shetia/

做了下简化，如下所示：

> 【题解区】解法一

```js
const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let item = left; item <= right; item++) {
    String(item).split('').every(t => item % t === 0) && result.push(item);
  }
  return result;
};
```

当然，这道题的简单难度无法想象，破解率 70%，所以小伙伴们随便折腾了。

如果小伙伴有更好的想法或者思路，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
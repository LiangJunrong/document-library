893 - 特殊等价字符串组（groups-of-special-equivalent-strings）
===

> Create by **jsliang** on **2020-01-16 09:04:41**  
> Recently revised in **2020-01-16 09:48:40**

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
* **题目地址**：https://leetcode-cn.com/problems/groups-of-special-equivalent-strings/
* **题目内容**：

```
你将得到一个字符串数组 A。

如果经过任意次数的移动，S == T，
那么两个字符串 S 和 T 是特殊等价的。

一次移动包括选择两个索引 i 和 j，
且 i ％ 2 == j ％ 2，交换 S[j] 和 S [i]。

现在规定，A 中的特殊等价字符串组是 A 的非空子集 S，
这样不在 S 中的任何字符串与 S 中的任何字符串都不是特殊等价的。

返回 A 中特殊等价字符串组的数量。

示例 1：

输入：["a","b","c","a","c","c"]
输出：3
解释：3 组 ["a","a"]，["b"]，["c","c","c"]

示例 2：

输入：["aa","bb","ab","ba"]
输出：4
解释：4 组 ["aa"]，["bb"]，["ab"]，["ba"]

示例 3：

输入：["abc","acb","bac","bca","cab","cba"]
输出：3
解释：3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"]

示例 4：

输入：["abcd","cdab","adcb","cbad"]
输出：1
解释：1 组 ["abcd","cdab","adcb","cbad"]

提示：

1 <= A.length <= 1000
1 <= A[i].length <= 20
所有 A[i] 都具有相同的长度。
所有 A[i] 都只由小写字母组成。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {

};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 特殊等价字符串组
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = (A) => {
  return [...new Set(A.map((item) => item.split('').filter((t, i) => i % 2 === 1).sort().join('') + item.split('').filter((t, i) => i % 2 === 0).sort().join('')))].length;
};

console.log(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 36/36 cases passed (76 ms)
* Your runtime beats 97.3 % of javascript submissions
* Your memory usage beats 26.67 % of javascript submissions (37.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，不管有的没的，先猜测如果暴力破解这道题，那么损耗一定不低，甚至有可能超时！

分析题意：

1. 有一个数组 A，它由 `n` 个相同长度的小写字母组成；
2. 数组 A 的长度在 `[1, 1000]` 之间；
3. 数组 A 中字符的长度在 `[1, 20]` 之间。

假设有数组：

* `['abc', 'acb', 'bac', 'bca', 'cab', 'cba']`

那么，如何判断是否有【特殊等价】字符呢？

有的，根据题意：

```
如果经过任意次数的移动，
S == T，
那么两个字符串 S 和 T 是特殊等价的。

一次移动包括选择两个索引 i 和 j，
且 i ％ 2 == j ％ 2，
交换 S[j] 和 S [i]。
```

这道题的意思是，在单个字符中：

1. 奇数索引只能和奇数索引交换；
2. 偶数索引只能和偶数索引交换。

例如：`acb`，那么只能 `a` 和 `b` 交换为 `bca`。（因为 `a` 索引为 0 ，`b` 索引为 2，两者 % 2 都为 0）。

> 题目中的表达即奇偶不能互换。

依次，我们可以顺势做出暴力破解：

> 暴力破解

```js
// ...好吧我做不出来
```

怀疑人生，这真的是【简单】难度？

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看了下题解，有个 JavaScript 的解题还不错：

* 题目, 我该拿什么拯救你?：https://leetcode-cn.com/problems/groups-of-special-equivalent-strings/solution/ti-mu-wo-gai-na-shi-yao-zheng-jiu-ni-by-shetia/


其实:

1. 有个数组, 元素是字符串；
2. 字符串中的字符两两交换，交换的字符索引满足 i ％ 2 == j ％ 2，就是说 奇跟奇, 偶跟偶 交换；
3. 不管交换多少次, 只要 字符串交换后 有和 另一个字符串交换 后 相同, 就为等价的；
4. 把这些等价的字符串归为 一个数组中；
5. 求 有多少个这样的数组；

既然 奇跟奇, 偶跟偶 交换, 我们何不 把字符串的字符索引为 奇 和 偶 的分离开来, 各放到一个数组中

然后 奇 偶 数组排序下, 再拼接起来, 如果它们是 特殊等价 的话, 这样的处理下来, 得到的就会是 完全相等的字符串

```
//如: 
A = ["abcd","cdab","adcb","cbad"]

// 奇偶分离
A = [
      [['a','c'],['b','d']],
      [['c','a'],['d','b']],
      [['a','c'],['d','b']],
      [['c','a'],['b','d']]
    ]

// 排序
A = [
      [['a','c'],['b','d']],
      [['a','c'],['b','d']],
      [['a','c'],['b','d']],
      [['a','c'],['b','d']]
    ]

// 拼接
A = ['abcd','abcd','abcd','abcd']

// 去重
A = ['abcd']

// 返回长度即可
```

所以有了题解：

```js
var numSpecialEquivGroups = function(A) {
 let list = A.map(item => {
   let arr = item.split('')
   let odd = arr.filter((t,i) => i%2===1).sort().join('')
   let event = arr.filter((t,i) => i%2===0).sort().join('')
   return event+odd
 })
 return [...new Set(list)].length
};
```

当然，尽信代码不如无码，所以 **jsliang** 进行了强压缩：

```js
const numSpecialEquivGroups = (A) => [...new Set(A.map((item) => item.split('').filter((t, i) => i % 2 === 1).sort().join('') + item.split('').filter((t, i) => i % 2 === 0).sort().join('')))].length;
```

Submit 提交为：

```js
Accepted
* 36/36 cases passed (76 ms)
* Your runtime beats 97.3 % of javascript submissions
* Your memory usage beats 26.67 % of javascript submissions (37.7 MB)
```

以上~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
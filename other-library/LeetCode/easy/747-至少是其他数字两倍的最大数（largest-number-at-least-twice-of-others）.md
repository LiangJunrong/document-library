747 - 至少是其他数字两倍的最大数（largest-number-at-least-twice-of-others）
===

> Create by **jsliang** on **2019-12-31 08:54:39**  
> Recently revised in **2019-12-31 09:19:31**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
* **题目内容**：

```
在一个给定的数组nums中，
总是存在一个最大元素。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，
则返回最大元素的索引，
否则返回-1。

示例 1:

输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6 是最大的整数, 
对于数组中的其他整数,
6 大于数组中其他元素的两倍。
6 的索引是 1, 所以我们返回1.

示例 2:

输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4 没有超过 3 的两倍大, 所以我们返回 -1.
 

提示:

nums 的长度范围在[1, 50].
每个 nums[i] 的整数范围在 [0, 100].
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 至少是其他数字两倍的最大数
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  let one = { value: 0, index: 0 };
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > one.value) {
      two = one.value;
      one.value = nums[i];
      one.index = i;
    } else if (nums[i] > two) {
      two = nums[i];
    }
  }
  return one.value >= two * 2 ? one.index : -1;
};

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
console.log(dominantIndex([0, 0, 0, 1])); // 3
```

`node index.js` 返回：

```js
1
-1
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 250/250 cases passed (72 ms)
* Your runtime beats 56.23 % of javascript submissions
* Your memory usage beats 64.06 % of javascript submissions (33.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

仔细想想，非常简单：

> 线性扫描

```js
const dominantIndex = (nums) => {
  let one = 0;
  let oneIndex = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > one) {
      two = one;
      one = nums[i];
      oneIndex = i;
    } else if (nums[i] > two) {
      two = nums[i];
    }
  }
  return one >= two * 2 ? oneIndex : -1;
};
```

1. 设置 `one`、`two` 表示最大值和第二大值的数字；
2. 设置 `oneIndex` 表示最大值的索引；
3. 通过 `for` 遍历 `nums`；
4. 遍历 `nums` 过程中：如果这个数 `nums[i]` 比最大值还大，那么替换掉 `two`、`one`、`oneIndex`；如果这个数 `nums[i]` 比第二大值还大，那么替换掉第二大值 `two`。
5. 判断 `one` 是否大于或者等于 `two * 2`，返回 `oneIndex` 或者 `-1`。

代码太过简介，导致我好像找不到更好点的……

如果你有其他想法或者思路，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
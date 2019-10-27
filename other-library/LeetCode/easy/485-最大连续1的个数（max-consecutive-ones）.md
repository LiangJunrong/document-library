485 - 最大连续1的个数（max-consecutive-ones）
===

> Create by **jsliang** on **2019-10-27 18:51:17**  
> Recently revised in **2019-10-27 19:18:10**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/max-consecutive-ones/
* **题目内容**：

```
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.

注意：
输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。
```

## <a name="chapter-three" id="chapter-three">三 解题及测试</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  nums = nums.join('').split('0');
  let result = 0;
  nums.forEach((item) => {
    result = Math.max(item.length, result);
  });
  return result;
};

const nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four">四 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
Accepted
* 41/41 cases passed (84 ms)
* Your runtime beats 78.06 % of javascript submissions
* Your memory usage beats 22.56 % of javascript submissions (37.4 MB)
```

## <a name="chapter-five" id="chapter-five">五 解题思路</a>

> [返回目录](#chapter-one)

定睛一看，这题属于入门题，感觉基本没啥难度嘛：

```js
/**
 * @name 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let result = 0; // 存放最大值
  let counter = 0; // 计数器，存放当前出现的次数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter += 1;
      result = Math.max(counter, result);
    }
    if (nums[i] === 0) {
      counter = 0;
    }
  }
  return result;
};
```

Submit 提交一看，果然通过了！

```js
Accepted
* 41/41 cases passed (80 ms)
* Your runtime beats 85.47 % of javascript submissions
* Your memory usage beats 47.56 % of javascript submissions (36.9 MB)
```

思路很简单：

1. 使用 `result` 来存放最大值，即最大连续 1 的个数
2. 使用 `counter` 来存放计数器，用来存放当前连续出现的个数
3. 遍历数组，碰到 1 的那么计数器 +1，碰到 0 的那么计数器重置
4. 最后在碰到 1 的时候，比较当前的次数是不是比 `result` 大了，是的话那就用最大的。

这样，我们就可以完成这道题的破解。

当然，**jsliang** 在拿到题目的时候，还有第二种想法，感觉也是 OK 的，于是就顺带写了：

```js
/**
 * @name 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  nums = nums.join('').split('0');
  let result = 0;
  nums.forEach((item) => {
    result = Math.max(item.length, result);
  });
  return result;
};
```

这种想法就是将数组合并成字符串，然后通过 0 去分割，从而得到 1 的分组，最后求这些分组的最长长度就行了~

详细的小伙伴们可以看代码，这里就不过多逼逼啦~

如果你有更好的想法，可以评论或者私聊我哈，感觉不错的话会加入到原文中~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
643 - 子数组最大平均数I（maximum-average-subarray-i）
===

> Create by **jsliang** on **2019-12-03 08:41:33**  
> Recently revised in **2019-12-03 09:18:38**

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
* **题目地址**：https://leetcode-cn.com/problems/maximum-average-subarray-i/
* **题目内容**：

```
给定 n 个整数，
找出平均数最大且长度为 k 的连续子数组，
并输出该最大平均数。

示例 1:
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 

注意:
1 <= k <= n <= 30,000。
所给数据范围 [-10,000，10,000]。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 获取数组和
 * @description 输入一个 k 长度的数组 nums，输出该数组的累积和
 * @param {Array} nums
 */
const getSum = (nums) => {
  return nums.reduce((prev, next) => prev + next);
};

/**
 * @name 子数组最大平均数I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let maxSum = getSum(nums.slice(0, k));
  let tempSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i - k];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
```

`node index.js` 返回：

```js
12.75
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 123/123 cases passed (92 ms)
* Your runtime beats 95.17 % of javascript submissions
* Your memory usage beats 61.9 % of javascript submissions (42.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**如果仅算暴力破解，这道题还是非常简单的**。

话不多说，上代码：

> 第一次破解

```js
/**
 * @name 获取平均数
 * @description 输入一个 k 长度的数组 nums，输出该数组的平均数
 * @param {Array} nums
 * @param {Number} k
 */
const getAverage = (nums, k) => {
  return nums.reduce((prev, next) => prev + next) / k;
};

/**
 * @name 子数组最大平均数I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  const queue = nums.slice(0, k);
  let maxAverage = getAverage(queue, k);
  for (let i = k; i < nums.length; i++) {
    queue.shift();
    queue.push(nums[i]);
    maxAverage = Math.max(getAverage(queue, k), maxAverage);
  }
  return maxAverage;
};
```

思路如下：

1. 获取 `nums` 的前 `k` 个元素赋值给 `queue` 队列。
2. 设置目前的最大平均值 `maxAverage` 为前 `k` 个元素 / `k`。
3. 遍历 `nums` 数组，从第 `k` 项开始，通过队列的 `shift()` 删除第一个元素，和通过 `push()` 添加最新的元素，比较新队列的平均值和目前的平均值大小。
4. 最后输出最大平均值 `maxAverage`。

Submit 提交如下：

```js
Accepted
* 123/123 cases passed (1316 ms)
* Your runtime beats 31.03 % of javascript submissions
* Your memory usage beats 19.05 % of javascript submissions (46.3 MB)
```

当然，如果仅仅拿这样的战绩，让别人看到，会笑掉大牙的，怎么说也要打掉牙充充胖子：

> 第二次优化

```js
/**
 * @name 获取数组和
 * @description 输入一个 k 长度的数组 nums，输出该数组的累积和
 * @param {Array} nums
 */
const getSum = (nums) => {
  return nums.reduce((prev, next) => prev + next);
};

/**
 * @name 子数组最大平均数I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let maxSum = getSum(nums.slice(0, k));
  let tempSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i - k];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum / k;
};
```

什么，这个跟之前有什么区别？

1. 每次遍历的计算少了。只需要计算当前的 “和” 即可，不用算多一次除法，很累的（除法：我招你惹你了）。
2. 操作节省了。之前使用数组，每次遍历需要执行两步操作（`shift()` 和 `push()`），现在只需要直接累加即可。
3. 空间节省了。将所有的数组换成了数字。

那么，它的结果如何？是不是有我说的那么好？

```js
Accepted
* 123/123 cases passed (92 ms)
* Your runtime beats 95.17 % of javascript submissions
* Your memory usage beats 61.9 % of javascript submissions (42.5 MB)
```

看，这就好比原本你有一辆自行车，改造了一下变成了摩托，跑得非常流畅了~

如果你有更好的想法或者思路，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
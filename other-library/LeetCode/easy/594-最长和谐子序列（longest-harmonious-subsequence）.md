594 - 最长和谐子序列（longest-harmonious-subsequence）
===

> Create by **jsliang** on **2019-11-24 10:40:03**  
> Recently revised in **2019-11-24 11:37:57**

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
* **题目地址**：https://leetcode-cn.com/problems/longest-harmonious-subsequence/
* **题目内容**：

```
和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是 1。

现在，给定一个整数数组，
你需要在所有可能的子序列中找到最长的和谐子序列的长度。

示例 1:

输入: [1,3,2,2,5,2,3,7]
输出: 5
原因: 最长的和谐数组是：[3,2,2,2,3].
说明: 输入的数组长度最大不超过20,000.
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
var findLHS = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最长和谐子序列
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  let maxLHS = 0;
  nums = nums.sort((a, b) => a - b);
  const filterList = [...new Set(nums)];
  for (let i = 0; i < filterList.length; i++) {
    if (filterList[i + 1] - filterList[i] === 1) {
      const tempLength = nums.lastIndexOf(filterList[i + 1]) - nums.indexOf(filterList[i]) + 1;
      maxLHS = tempLength > maxLHS ? tempLength : maxLHS;
    }
  }
  return maxLHS;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
```

`node index.js` 返回：

```js
5
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 201/201 cases passed (356 ms)
* Your runtime beats 5.38 % of javascript submissions
* Your memory usage beats 56.76 % of javascript submissions (42.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，先行思考，写下代码：

```js
const findLHS = (nums) => {
  let maxLHS = [];
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - nums[i + 1]) === 1) {
      const tempLHS = [...nums.filter(item => item === nums[i] || item === nums[i + 1])];
      if (tempLHS.length > maxLHS.length) {
        maxLHS = tempLHS;
      }
    }
  }
  return maxLHS.length;
};
```

Submit 提交发现：

```
Wrong Answer
126/201 cases passed (N/A)

Testcase
[1,4,1,3,1,-14,1,-13]

Answer
0

Expected Answer
2
```

那就是我理解错它的意思了，它还能隔元素，稍微修改代码：

```js
const findLHS = (nums) => {
  let maxLHS = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.findIndex(item => item === nums[i] + 1) > -1) {
      const tempLHS1 = [...nums.filter(item => item === nums[i] || item === nums[i] + 1)];
      if (tempLHS1.length > maxLHS.length) {
        maxLHS = tempLHS1;
      }
    }
    if (nums.findIndex(item => item === nums[i] - 1) > -1) {
      const tempLHS2 = [...nums.filter(item => item === nums[i] || item === nums[i] - 1)];
      if (tempLHS2.length > maxLHS.length) {
        maxLHS = tempLHS2;
      }
    }
  }
  return maxLHS.length;
};
```

Submit 提交后发现：

```
Time Limit Exceeded
176/201 cases passed (N/A)

Testcase
[76092,69425,66303,77889,75136...后面包含 N 个元素]
```

要求真高，想想怎么缩短长度：

```js
const findLHS = (nums) => {
  let maxLHS = 0;
  nums = nums.sort((a, b) => a - b);
  const filterList = [...new Set(nums)];
  for (let i = 0; i < filterList.length; i++) {
    if (filterList[i + 1] - filterList[i] === 1) {
      const tempLength = nums.lastIndexOf(filterList[i + 1]) - nums.indexOf(filterList[i]) + 1;
      maxLHS = tempLength > maxLHS ? tempLength : maxLHS;
    }
  }
  return maxLHS;
};
```

Submit 提交：

```js
Accepted
* 201/201 cases passed (356 ms)
* Your runtime beats 5.38 % of javascript submissions
* Your memory usage beats 56.76 % of javascript submissions (42.5 MB)
```

终于成功！说说思路：

1. 设置 **最长和谐子序列** 的长度 `maxLHS` 为 0。
2. 将 `nums` 排序一遍，这样方便查找（反正它不需要返回最长和谐子序列的数组）。
3. 再将排序后的 `nums` 去重 `filterList`，相同元素都不要出现。
4. 遍历 `filterList`，如果后一个元素减去前一个元素的结果是 1，这么表明它们有戏，进行下一步骤。
5. 在 `[1, 2, 2, 2, 3, 3, 5, 7]` 中，1 和 2 的和谐子序列为：`[1, 2, 2, 2]`，那么对应的 1 的最开始索引为 0，2 的最末尾索引为 3，所以它的长度是 3 - 0 + 1。
6. 同理，我们在 `nums` 中找到较小值的最开始索引，和较大值的最末尾索引，将它们的差值加上 1，即和谐子序列的长度。
7. 判断这个和谐子序列的长度是不是比目前的还要长，是的话设置它为最长。
8. 循环完毕，返回结果。

以上，我们就破解了这道题。

破解的过程是曲折的，但是也是有意思的，毕竟我们可以了解学习很多。

如果小伙伴有更好的思路，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
697 - 数组的度（degree-of-an-array）
===

> Create by **jsliang** on **2019-12-18 09:05:11**  
> Recently revised in **2019-12-18 10:34:40**

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
* **题目地址**：https://leetcode-cn.com/problems/degree-of-an-array/
* **题目内容**：

```
给定一个非空且只包含非负数的整数数组 nums, 
数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

示例 1:

输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是 2，因为元素 1 和 2 的出现频数最大，均为 2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1],
[1, 2, 2, 3],
[2, 2, 3, 1],
[1, 2, 2],
[2, 2, 3],
[2, 2]
最短连续子数组[2, 2]的长度为 2，所以返回 2.

示例 2:

输入: [1,2,2,3,1,4,2]
输出: 6

注意:

nums.length 在1到50,000区间范围内。
nums[i] 是一个在0到49,999范围内的整数。
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
var findShortestSubArray = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 数组的度
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let maxNumberList = [];
  for (let [key, value] of map) {
    if (value > maxNumber) {
      maxNumber = value;
      maxNumberList = [key];
    } else if (value === maxNumber) {
      maxNumberList.push(key);
    }
  }
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < maxNumberList.length; i++) {
    result = Math.min(result, nums.lastIndexOf(maxNumberList[i]) - nums.indexOf(maxNumberList[i]) + 1);
  }
  return result;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); // 2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); // 6
```

`node index.js` 返回：

```js
2
6
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 89/89 cases passed (136 ms)
* Your runtime beats 44.68 % of javascript submissions
* Your memory usage beats 72.73 % of javascript submissions (39.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**忍不住想翻答案，最终敌不过自己的好强心**。

第一次题解如下所示：

> 哈希表

```js
const findShortestSubArray = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let maxNumberList = [];
  for (let [key, value] of map) {
    if (value > maxNumber) {
      maxNumber = value;
      maxNumberList = [key];
    } else if (value === maxNumber) {
      maxNumberList.push(key);
    }
  }
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < maxNumberList.length; i++) {
    result = Math.min(result, nums.lastIndexOf(maxNumberList[i]) - nums.indexOf(maxNumberList[i]) + 1);
  }
  return result;
};
```

题解思路为：

1. 设置 `map` 存储哈希。
2. 第一个 `for` 遍历，将所有的值及其出现的次数，统计到 `map` 中。
3. 设置最大值 `maxNumber` 及最大值都有哪些值 `maxNumberList`。
4. 第二个 `for` 遍历，将 `maxNumber` 和 `maxNumberList` 填充上。
5. 设置结果为 `result`。
6. 第三个 `for` 遍历，将 `maxNumberList` 过一遍，在 `nums` 中查找 `maxNumberList` 中每个元素的 `indexOf` 和 `lastIndexOf`，通过 `lastIndexOf - indexOf + 1` 的计算，可以得到最短路线。
7. 返回结果为 `result`。

Submit 提交如下：

```js
Accepted
* 89/89 cases passed (136 ms)
* Your runtime beats 44.68 % of javascript submissions
* Your memory usage beats 72.73 % of javascript submissions (39.5 MB)
```

刚才讲解思路的时候，突然想起，我好像可以将两个 `for` 结合成一个，方法如下：

> 哈希表优化

```js
const findShortestSubArray = (nums) => {
  let newNums = [...new Set(nums)];
  let timeMax = Number.MIN_SAFE_INTEGER;
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < newNums.length; i++) {
    const length = nums.filter(item => item === newNums[i]).length;
    if (length > timeMax) {
      result = nums.lastIndexOf(newNums[i]) - nums.indexOf(newNums[i]) + 1;
      timeMax = length;
    } else if (length === timeMax) {
      result = Math.min(result, nums.lastIndexOf(newNums[i]) - nums.indexOf(newNums[i]) + 1);
      timeMax = length;
    }
  }
  return result;
};
```

思路如下：

1. 设置 `newNums` 来简化我们需要遍历的 `nums` 长度。
2. 设置 `timeMax` 记录出现次数最多的值。
3. 设置 `result` 记录需要返回的长度。
4. 遍历 `newNums`，查找每一个元素在原 `nums` 中出现的次数。
5. 判断这个长度是大于 `timeMax` 还是等于 `timeMax`。
6. 如果 `length > timeMax`，那么我们重新设置 `result = lastIndexOf - indexOf + 1`；
7. 如果 `length = timeMax`，那么我们取原 `result` 和目前 `lastIndexOf - indexOf + 1` 中的最小值。
8. 返回结果。

Submit 提交：

```js
Accepted
* 89/89 cases passed (468 ms)
* Your runtime beats 5.67 % of javascript submissions
* Your memory usage beats 36.36 % of javascript submissions (42.2 MB)
```

代码是 **精简** 了，但是因为它使用了双重循环嵌套，所以比起第一次来还更加不如。

如果你有更好的思路或者看法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
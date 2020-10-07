724 - 寻找数组的中心索引（find-pivot-index）
===

> Create by **jsliang** on **2019-12-25 08:57:09**  
> Recently revised in **2019-12-25 19:30:11**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/find-pivot-index/
* **题目内容**：

```
给定一个整数类型的数组 nums，
请编写一个能够返回数组“中心索引”的方法。

我们是这样定义数组中心索引的：

数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，
那么我们应该返回 -1。

如果数组有多个中心索引，
那么我们应该返回最靠近左边的那一个。

示例 1:

输入: 
nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 
索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。

示例 2:

输入: 
nums = [1, 2, 3]
输出: -1
解释: 
数组中不存在满足此条件的中心索引。

说明:

nums 的长度范围为 [0, 10000]。
任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
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
var pivotIndex = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * 数组求和
 * @param {*} nums 
 */
const getSum = (nums) => {
  if (nums.length) {
    return nums.reduce((prev, next) => prev + next);
  }
  return 0;
}

/**
 * @name 寻找数组的中心索引
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum = getSum(nums.slice(0, i));
    rightSum = getSum(nums.slice(i + 1));
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
console.log(pivotIndex([-1, -1, -1, -1, 0, -1])); // 2
console.log(pivotIndex([-1, -1, -1, -1, 0, 1])); // 1
console.log(pivotIndex([-1, -1, 0, -1, -1, -1])); // 3
console.log(pivotIndex([-1, -1, 1, 1, 0, 0])); // 4
console.log(pivotIndex([-1, -1, -1, 0, 1, 1])); // 0
console.log(pivotIndex([-1, -1, 0, 1, 1, 0])); // 5
```

`node index.js` 返回：

```js
3
-1
2
2
1
3
4
0
5
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 741/741 cases passed (1112 ms)
* Your runtime beats 15.27 % of javascript submissions
* Your memory usage beats 10.11 % of javascript submissions (42.4 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**填坑实录**：

1. 由于题目内容在 `[-1000, 1000]` 之间，所以有个问题就是 正+正、正+负、负+负 之间求和比较的操作。
2. 由于题目内容比较坑爹，所以碰到 `[-1, -1, -1, 0, 1, 1]` 的时候，需要返回 0。

但是：

> 失败代码

```js
const pivotIndex = (nums) => {
  const map = [];
  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    map.push({
      index: i,
      sum,
    })
  }
  const result = [];
  for (let j = nums.length - 1, sum = 0; j >= 0; j--) {
    if (j === 0 && sum === 0) {
      return 0;
    }
    sum += nums[j];
    for (let k = 0; k < map.length; k++) {
      if (map[k].sum === sum && k + 1 === j - 1) {
        result.unshift(k + 1);
      }
    }
  }
  return result[0] || -1;
};
```

最接近的还是失败：

```js
Wrong Answer
683/741 cases passed (N/A)

Testcase
[-1,-1,0,1,1,0]

Answer
-1

Expected Answer
5
```

最后，经历了以下调试后，换了思路：

```js
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
console.log(pivotIndex([-1, -1, -1, -1, 0, -1])); // 2
console.log(pivotIndex([-1, -1, -1, -1, 0, 1])); // 1
console.log(pivotIndex([-1, -1, 0, -1, -1, -1])); // 3
console.log(pivotIndex([-1, -1, 1, 1, 0, 0])); // 4
console.log(pivotIndex([-1, -1, -1, 0, 1, 1])); // 0
console.log(pivotIndex([-1, -1, 0, 1, 1, 0])); // 5
```

> 成功代码

```js
/**
 * 数组求和
 * @param {*} nums 
 */
const getSum = (nums) => {
  if (nums.length) {
    return nums.reduce((prev, next) => prev + next);
  }
  return 0;
}

/**
 * @name 寻找数组的中心索引
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum = getSum(nums.slice(0, i));
    rightSum = getSum(nums.slice(i + 1));
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};
```

终于 Submit 通过了：

```js
Accepted
* 741/741 cases passed (1112 ms)
* Your runtime beats 15.27 % of javascript submissions
* Your memory usage beats 10.11 % of javascript submissions (42.4 MB)
```

喜极而泣！

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看完官方答案，我感觉我给兜了圈子：

> 官方题解

```js
const pivotIndex = (nums) => {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
```

Submit 提交：

```js
Accepted
* 741/741 cases passed (92 ms)
* Your runtime beats 65.9 % of javascript submissions
* Your memory usage beats 17.98 % of javascript submissions (38.1 MB)
```

好吧，极度无语中……太菜了！

如果小伙伴有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
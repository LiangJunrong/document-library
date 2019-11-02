506 - 相对名次（relative-ranks）
===

> Create by **jsliang** on **2019-11-2 09:19:17**  
> Recently revised in **2019-11-2 09:59:10**

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
* **涉及知识**：排序
* **题目地址**：https://leetcode-cn.com/problems/relative-ranks/
* **题目内容**：

```
给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。

前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”

> "Gold Medal", "Silver Medal", "Bronze Medal"。

> 注：分数越高的选手，排名越靠前。

示例 1:

输入: [5, 4, 3, 2, 1]
输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
解释: 

前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” 
余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。

提示:
N 是一个正整数并且不会超过 10000。
所有运动员的成绩都不相同。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 相对名次
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = (nums) => {
  const sortNums = [];
  // 拷贝一份原数据
  nums.forEach((item) => {
    sortNums.push(item);
  })
  // 将这份数据进行排序
  sortNums.sort((a, b) => {
    return b - a;
  });
  // 将排序后的数据和原数据比对，进行名次赋值
  for (let j = 0; j < nums.length; j++) {
    const index = sort.findIndex(item => item === nums[j]);
    if (index === 0) {
      nums[j] = 'Gold Medal';
    } else if (index === 1) {
      nums[j] = 'Sliver Medal';
    } else if (index === 2) {
      nums[j] = 'Bronze Medal';
    } else {
      nums[j] = String(index + 1);
    }
  }
  return nums;
};

// const nums = [5, 4, 3, 2, 1];
const nums = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(nums));
```

`node index.js` 返回：

```js
[ 'Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4' ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 17/17 cases passed (256 ms)
* Your runtime beats 10.23 % of javascript submissions
* Your memory usage beats 89.29 % of javascript submissions (38.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

抱着疑惑做题，尽可能将一些边界搞定：

* 给出的数组是不是已经排好序的数组？

尝试：

```js
/**
 * @name 相对名次
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = (nums) => {
  nums.forEach((item, index) => {
    if (index === 0) {
      nums[0] = 'Gold Medal';
    } else if (index === 1) {
      nums[1] = 'Silver Medal';
    } else if (index === 2) {
      nums[2] = 'Bronze Medal';
    } else {
      nums[index] = String(index + 1);
    }
  });
  return nums;
};
```

Submit 提交：

```js
Wrong Answer
* 3/17 cases passed (N/A)

Testcase
[10,3,8,9,4]

Answer
["Gold Medal","Silver Medal","Bronze Medal","4","5"]

Expected Answer
["Gold Medal","5","Bronze Medal","Silver Medal","4"]
```

OK，这么说明我们的思路是错的，需要推翻之前的代码，内部排序再贴上标签：

```js
/**
 * @name 相对名次
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = (nums) => {
  const sortNums = [];
  // 拷贝一份原数据
  nums.forEach((item) => {
    sortNums.push(item);
  })
  // 将这份数据进行排序
  sortNums.sort((a, b) => {
    return b - a;
  });
  // 将排序后的数据和原数据比对，进行名次赋值
  for (let j = 0; j < nums.length; j++) {
    const index = sortNums.findIndex(item => item === nums[j]);
    if (index === 0) {
      nums[j] = 'Gold Medal';
    } else if (index === 1) {
      nums[j] = 'Silver Medal';
    } else if (index === 2) {
      nums[j] = 'Bronze Medal';
    } else {
      nums[j] = String(index + 1);
    }
  }
  return nums;
};
```

Submit 试试：

```js
Accepted
* 17/17 cases passed (256 ms)
* Your runtime beats 10.23 % of javascript submissions
* Your memory usage beats 89.29 % of javascript submissions (38.5 MB)
```

搞定，收工~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
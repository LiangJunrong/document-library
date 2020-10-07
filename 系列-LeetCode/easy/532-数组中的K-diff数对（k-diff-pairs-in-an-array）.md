532 - 数组中的K-diff数对（k-diff-pairs-in-an-array）
===

> Create by **jsliang** on **2019-11-08 08:44:22**  
> Recently revised in **2019-11-08 09:52:50**

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
* **涉及知识**：数组、双指针
* **题目地址**：https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/
* **题目内容**：

```
给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。

这里将 k-diff 数对定义为一个整数对 (i, j), 

其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.

示例 1:
输入: [3, 1, 4, 1, 5], k = 2
输出: 2
解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。

示例 2:
输入:[1, 2, 3, 4, 5], k = 1
输出: 4
解释: 数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。

示例 3:
输入: [1, 3, 1, 5, 4], k = 0
输出: 1
解释: 数组中只有一个 0-diff 数对，(1, 1)。

注意:
数对 (i, j) 和数对 (j, i) 被算作同一数对。
数组的长度不超过10,000。
所有输入的整数的范围在 [-1e7, 1e7]。
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
var findPairs = function(nums, k) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 数组中的K-diff数对
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  const map = new Map();
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const max = Math.max(nums[i], nums[j]);
      const min = Math.min(nums[i], nums[j]);
      if (max - min === k && map.get(`${min}${max}`) === undefined) {
        result += 1;
        map.set(`${min}${max}`, `${min}${max}`,);
      }
    }
  }
  return result;
};

// console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
// console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
```

`node index.js` 返回：

```js
1
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 72/72 cases passed (2584 ms)
* Your runtime beats 5.22 % of javascript submissions
* Your memory usage beats 6.25 % of javascript submissions (40 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，本想秀一秀，使用双重 Map，但是霎时间失败，只好先使用暴力解题先：

```js
const findPairs = (nums, k) => {
  const map = new Map();
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const max = Math.max(nums[i], nums[j]);
      const min = Math.min(nums[i], nums[j]);
      if (max - min === k && map.get(`${min}${max}`) === undefined) {
        result += 1;
        map.set(`${min}${max}`, `${min}${max}`,);
      }
    }
  }
  return result;
};
```

Submit 结果 *“非常不错”*：

```js
Accepted
* 72/72 cases passed (2584 ms)
* Your runtime beats 5.22 % of javascript submissions
* Your memory usage beats 6.25 % of javascript submissions (40 MB)
```

**然后**，你也知道，俺是喜欢较真的人，双重遍历实在太垃圾了，咱们试试优化一下：

```js
/**
 * @name 数组中的K-diff数对
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {
  if (k < 0) {
    return 0;
  }
  const map1 = new Map();
  const map2 = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + k === map1.get(nums[i] + k) && map2.get(`${nums[i]}${nums[i] + k}`) === undefined) {
      result += 1;
      map2.set(`${nums[i]}${nums[i] + k}`, `${nums[i]}${nums[i] + k}`);
    }
    if (nums[i] - k === map1.get(nums[i] - k) && map2.get(`${nums[i] - k}${nums[i]}`) === undefined) {
      result += 1;
      map2.set(`${nums[i] - k}${nums[i]}`, `${nums[i] - k}${nums[i]}`);
    }
    map1.set(nums[i], nums[i]);
  }
  return result;
};
```

Submit 试试：

```js
Accepted
* 72/72 cases passed (92 ms)
* Your runtime beats 83.48 % of javascript submissions
* Your memory usage beats 6.25 % of javascript submissions (41.7 MB)
```

**最后**，有更好 idea 的小伙伴，欢迎评论吐槽或者直接私聊我咯~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
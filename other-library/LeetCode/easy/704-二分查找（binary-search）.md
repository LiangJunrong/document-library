704 - 二分查找（binary-search）
===

> Create by **jsliang** on **2019-12-20 09:01:49**  
> Recently revised in **2019-12-20 09:43:28**

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
* **涉及知识**：二分查找
* **题目地址**：https://leetcode-cn.com/problems/binary-search/
* **题目内容**：

```
给定一个 n 个元素有序的（升序）整型数组 nums，
以及一个目标值 target。

写一个函数搜索 nums 中的 target，
如果目标值存在返回下标，
否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 
提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.ceil((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] === target) {
      return middle;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
```

`node index.js` 返回：

```js
4
-1
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 46/46 cases passed (60 ms)
* Your runtime beats 99.02 % of javascript submissions
* Your memory usage beats 13.49 % of javascript submissions (37.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

看到这道题，我想我又可以操作一番了，本题破解分为 3 个步骤：

1. 暴力破解 - 带你了解原有思路
2. 二分查找 - 体验二分的快乐
3. 原生利用 - 通过原有 JavaScript API，带你快速解题

那么，咱们开始暴力破解；

> 暴力破解

```js
const search = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};
```

Submit 提交：

```js
Accepted
* 46/46 cases passed (76 ms)
* Your runtime beats 51.86 % of javascript submissions
* Your memory usage beats 5.55 % of javascript submissions (37.7 MB)
```

暴力的思路就很简单了，相信初学 JavaScript 的小伙伴都能看得懂。

那么，咱们思考下：

1. 它给出了一个排序好的数组
2. 它给出了指定需要的元素

此时，我们顺着元素，从头到尾遍历，对于一个 “瞎子”，这无疑是最好的方法，顺藤摸瓜嘛~

但是，如果你的眼里非常好，你一下子看出 **它在哪个区块** 了，你还需要顺藤摸瓜嘛？

答案是：**不需要**。

> 二分查找

```js
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.ceil((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] === target) {
      return middle;
    }
  }
  return -1;
};
```

Submit 提交：

```js
Accepted
* 46/46 cases passed (60 ms)
* Your runtime beats 99.02 % of javascript submissions
* Your memory usage beats 13.49 % of javascript submissions (37.2 MB)
```

那么拿 `nums = [-1, 0, 3, 5, 9, 12], target = 9` 举例，开始二分查找的个人思路分享：

1. 设置 `left` 为起始位置，即 `left = 0`；
2. 设置 `right` 为末尾位置，即 `right = nums.length - 1`；

这时候，我们可以想象到，我们已经把握住了整个数组：

* `[-1, 0, 3, 5, 9, 12]`

何为二分？想想太阳旗军队的中分头，或者前端时间比较出名的 cxk，即拿 **开头 + 结尾 / 2** 进行计算。

这时候得出的结果是：`0 + 5 = 5`，`5 / 2 = 2.5`，但是数组没有 `nums[2.5]` 啊，所以我们往上取整，即 `3`。

对应代码如下：

```js
let left = 0;
let right = nums.length - 1;
while (left <= right) {
  const middle = Math.ceil((left + right) / 2);
}
```

到这时候，我们需要做的，就是完善 `while` 内部了，这时候我们找到的 `middle` 是 `5`，那么明眼人都可以看出来，我们需要取的那段是：

* `[5, 9, 12]`

那么我们就设置 `left` 定位到 `5`，所以：

```js
left = 3;
right = 5;
```

这时候再次中分，就是 `3 + 5 / 2`，即 `4`，而 `4` 刚好就是求解答案，所以输出 4：

```js
if (nums[middle] > target) {
  right = middle - 1;
} else if (nums[middle] < target) {
  left = middle + 1;
} else if (nums[middle] === target) {
  return middle;
}
```

OK，二分查找还是挺简单的，如果小伙伴想更清楚地了解，可以试试下面两个示例：

* `nums = [-1, 0, 3, 5, 9, 12], target = 2`
* `nums = [5], target = 5`

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

戏说不是胡说，解题不能拘束：

> API 利用 -> findIndex

```js
const search = (nums, target) => {
  return nums.findIndex(item => item === target);
};
```

Submit 提交：

```js
Accepted
* 46/46 cases passed (72 ms)
* Your runtime beats 70.65 % of javascript submissions
* Your memory usage beats 5.55 % of javascript submissions (37.7 MB)
```

> API 利用 -> indexOf

```js
const search = (nums, target) => {
  return nums.indexOf(target);
};
```

Submit 提交：

```js
Accepted
* 46/46 cases passed (68 ms)
* Your runtime beats 87.48 % of javascript submissions
* Your memory usage beats 13.49 % of javascript submissions (37.2 MB)
```

其他的就不一一写啦，再写就是扯犊子/吹牛了~

如果小伙伴有更好的思路或者想法，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
581 - 最短无序连续子数组（shortest-unsorted-continuous-subarray）
===

> Create by **jsliang** on **2019-11-21 08:36:48**  
> Recently revised in **2019-11-21 09:24:34**

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
* **题目地址**：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
* **题目内容**：

```
给定一个整数数组，
你需要寻找一个连续的子数组，
如果对这个子数组进行升序排序，
那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

示例 1:

输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 
    你只需要对 [6, 4, 8, 10, 9] 进行升序排序，
    那么整个表都会变为升序排序。

说明 :
输入的数组长度范围在 [1, 10,000]。
输入的数组可能包含重复元素 ，所以升序的意思是<=。
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
var findUnsortedSubarray = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 最短无序连续子数组
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
  const newNums = [...nums].sort((a, b) => a - b);
  const result = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== newNums[i]) {
      result[0] = i - 1;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] !== newNums[j]) {
      result[1] = j;
      break;
    }
  }
  return result[1] - result[0];
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([1, 2, 3, 4])); // 0
```

`node index.js` 返回：

```js
5
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 307/307 cases passed (124 ms)
* Your runtime beats 68.45 % of javascript submissions
* Your memory usage beats 51.61 % of javascript submissions (38.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，我是被标题折服了：

* 最短无序连续子数组

一个标题包含 4 个以上含义啊：

* 最短
* 无序
* 连续
* 子数组

好好看看，这道题是不是有标题那么厉害。

**然后**，发现题目内容烂的要死，内容新颖但是解释不清，看了两遍也没搞懂它想表达什么。

**jsliang** 感觉 LeetCode 好像很喜欢考验我的语文功底，给的题目含义不清，然后示例又少！坑啊！！！

看完第四遍，大致理解题意：

* `[2, 6, 4, 8, 10, 9, 15]`

假设有数组如上，从中找到一个子数组，进行升序排序后，整个数组就会变成升序排序。

那么，在 `[2, 6, 4, 8, 10, 9, 15]` 中，我们仅需要排序 `[6, 4, 8, 10, 9]`，这样整个数组就会变成升序排序：`[2, 4, 6, 8, 9, 10, 15]`，这时候需要排序的子数组长度是 5（`[6, 4, 8, 10, 9]`）。

所以我们返回的结果应该是 5。

OK，题意剖析完毕，开始解题：

> 第一次尝试

```js
const findUnsortedSubarray = (nums) => {
  // 1. 拷贝一份 nums
  const newNums = [...nums];
  // 2. 排序新数组
  newNums.sort((a, b) => a - b);
  // 3. 如果新数组和旧数组排序一致，则没有子数组
  if (nums.join('') === newNums.join('')) {
    return 0;
  }
  // 4. 如果排序不一致，则从头遍历和尾遍历走一遍
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== newNums[i]) {
      break;
    }
    result += 1;
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] !== newNums[j]) {
      break;
    }
    result += 1;
  }
  // 5. 返回中间不同的子数组的长度
  return nums.length - result;
};
```

拷贝数组过程中，想法新奇：

```js
// 1. 拷贝一份数组
const newNums = [...nums];

// 2. 原本打算遍历拷贝，觉得麻烦
// const newNums = [];
// for (let i = 0; i < nums.length; i++) {
//   newNums.push(nums[i]);
// }

// 3. 原本还打算使用 Object.assign，感觉不太漂亮
// const newNums = Object.assign([], nums);
```

Submit 提交：

```js
Accepted
* 307/307 cases passed (144 ms)
* Your runtime beats 43.45 % of javascript submissions
* Your memory usage beats 6.45 % of javascript submissions (41.6 MB)
```

以上，感觉还是比较麻烦，有没有更简单的代码呢？

如果你对自己的代码不满意，你是否会进行重新思考？

> 第二次尝试

```js
const findUnsortedSubarray = (nums) => {
  const newNums = [...nums].sort((a, b) => a - b);
  const result = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== newNums[i]) {
      result[0] = i - 1;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] !== newNums[j]) {
      result[1] = j;
      break;
    }
  }
  return result[1] - result[0];
};
```

Submit 提交：

```js
Accepted
* 307/307 cases passed (124 ms)
* Your runtime beats 68.45 % of javascript submissions
* Your memory usage beats 51.61 % of javascript submissions (38.5 MB)
```

还是不太满意，但是一时间想不到更好的了，去看看【题解区】和【评论区】大佬，也没有看到令我满意的。

如果小伙伴们有更好的法子或者思路，欢迎评论留言或者私聊我~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
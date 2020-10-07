645 - 错误的集合（set-mismatch）
===

> Create by **jsliang** on **2019-12-04 10:46:22**  
> Recently revised in **2019-12-04 12:33:41**

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
* **涉及知识**：哈希表、数学
* **题目地址**：https://leetcode-cn.com/problems/set-mismatch/
* **题目内容**：

```
集合 S 包含从 1 到 n 的整数。

不幸的是，因为数据错误，
导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，
导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 nums 代表了集合 S 发生错误后的结果。
你的任务是首先寻找到重复出现的整数，
再找到丢失的整数，
将它们以数组的形式返回。

示例 1:

输入: nums = [1,2,2,4]
输出: [2,3]
注意:

给定数组的长度范围是 [2, 10000]。
给定的数组是无序的。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 错误的集合
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  const result = [ , ];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) !== nums.lastIndexOf(i)) {
      result[0] = i;
    }
    if (nums.findIndex(item => item === i) === -1) {
      result[1] = i;
    }
  }
  return result;
};

// console.log(findErrorNums([1, 2, 2, 4])); // [2, 3]
console.log(findErrorNums([3, 2, 3, 4, 6, 5])); // [3, 1]
```

`node index.js` 返回：

```js
[3, 1]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 49/49 cases passed (2120 ms)
* Your runtime beats 5.66 % of javascript submissions
* Your memory usage beats 44 % of javascript submissions (38 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**拿到题意，开始思考**：

1. 我需要获取到数组中缺少的数字
2. 我需要获取到数组中重复的数字

于是就有了代码：

> 第一次攻略

```js
const findErrorNums = (nums) => {
  const result = [ , ];
  for (let i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) !== nums.lastIndexOf(i)) {
      result[0] = i;
    }
    if (nums.findIndex(item => item === i) === -1) {
      result[1] = i;
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 49/49 cases passed (2120 ms)
* Your runtime beats 5.66 % of javascript submissions
* Your memory usage beats 44 % of javascript submissions (38 MB)
```

虽然很粗略，但是并不妨碍我破题了。

在这个解法中用了双重遍历，`for` + `indexOf/lastIndexOf/findIndex`。

所以损耗的性能比较高。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

> 题解区

```js
/**
 * @name 错误的集合
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  const s = [...new Set(nums)].reduce((prev, next) => prev + next);
  const n = Math.max(...nums);
  const d = (n * (n + 1)) / 2 - s;

  return [
    nums.reduce((prev, next) => prev + next) - s,
    d === 0 ? n + 1 : d
  ];
};
```

Submit 提交：

```js
Accepted
* 49/49 cases passed (88 ms)
* Your runtime beats 64.15 % of javascript submissions
* Your memory usage beats 8 % of javascript submissions (42.2 MB)
```

> 来源自：https://leetcode-cn.com/problems/set-mismatch/solution/jian-dan-de-jie-jue-si-lu-by-undefined-91/

* 计算重复的数据

这个比较简单，就是原数组之和减去去重数组之和，这个差就是去重时去掉的那个重复元素。

* 计算丢失的数据

1. 如果数据完全正确，他们的和应该是 1+2+...+n 计算公式 (n * (n + 1)) / 2，n 是数组中最大的一项。
2. 如果 去重数组之和 等于 1+2+...+n，说明去重之后的数据格式是完全正确的，那么被丢失的数据就是 n + 1。
3. 否则被丢失的数据就是 1+2+...+n减去去重数组之和的值，也就说在 (1, n) 之间。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
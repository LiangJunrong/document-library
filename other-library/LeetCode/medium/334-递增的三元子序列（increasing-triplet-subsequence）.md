334 - 递增的三元子序列（increasing-triplet-subsequence）
===

> Create by **jsliang** on **2019-08-12 17:29:14**  
> Recently revised in **2019-08-12 18:58:50**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 贪心算法](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：中等
* **涉及知识**：数组、贪心算法
* **题目地址**：https://leetcode-cn.com/problems/increasing-triplet-subsequence/
* **题目内容**：

```
给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。

示例 1:

输入: [1,2,3,4,5]
输出: true

示例 2:

输入: [5,4,3,2,1]
输出: false
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var increasingTriplet = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] < nums[j] && nums[j] < nums[k]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,2,3,4,5]`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 62/62 cases passed (152 ms)
  ✔ Your runtime beats 13.33 % of javascript submissions
  ✔ Your memory usage beats 27.91 % of javascript submissions (34.8 MB)
```

* **解题思路**：

**首先**，先说说感想感觉暴力是最直观最快的破解方式了。

**然后**，还是说说代码思路：

```js
var increasingTriplet = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] < nums[j] && nums[j] < nums[k]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
```

1. 先 `for()` 遍历 `nums`，获得指针 `i`。
2. 然后 `for()` 再次遍历 `nums`，获得指针 `j`，`j = i + 1`，这样就是递增的序列了。
3. 再来，如果 `nums[i] < nums[j]`，这时候我们就可以进行第三次遍历，从而判断是否存在 `nums[i] < nums[j] < nums[k]`，存在就返回 `true`。

**这样**，我们就通过暴力破解来攻略了这道题。

> 中等难度一般会进行超时限制，这里我们也可以通过提交的时间空间用时看到暴力破解非常不理想。

> 这种解法满足不了题意说明，仅为了解释破解思路。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 贪心算法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var increasingTriplet = function(nums) {
  let one = 16666666666666;
  let two = 18888888888888;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= one) {
      one = nums[i];
    } else if (nums[i] <= two) {
      two = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
```

* **执行测试**：

1. `nums`：`[1,2,3,4,5]`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 62/62 cases passed (72 ms)
  ✔ Your runtime beats 98.33 % of javascript submissions
  ✔ Your memory usage beats 62.79 % of javascript submissions (34.4 MB)
```

* **解题思路**：

**当然**，除了暴力，或者下面的 **贪心算法**，我们还有其他方法的，这里演示一种 **贪心算法** 解题：

```js
var increasingTriplet = function(nums) {
  let one = 16666666666666;
  let two = 18888888888888;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= one) {
      one = nums[i];
    } else if (nums[i] <= two) {
      two = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
```

什么意思呢？我们举例：`[1,2,3,4,5]`。

1. 1 小于 `one`，所以 `one` 为 1。
2. 2 大于 `one` 并且小于 `two`，所以 `two` 为 2。
3. 此时，到了 3，而 3 大于 1 和 2，所以这时候就可以看出是递增的了。

说到这里，你可能觉得有点玄学。

没错，对于尚未接触贪心的 **jsliang** 来说，还真有点玄学，后面进一步探索吧~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
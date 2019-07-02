136 - 只出现一次的数字（single-number）
===

> Create by **jsliang** on **2019-07-02 18:54:59**  
> Recently revised in **2019-7-2 20:47:42**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 最菜解法](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |
| &emsp;[3.3 解法 - 玄学异或](#chapter-three-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算、哈希表
* **题目地址**：https://leetcode-cn.com/problems/single-number/
* **题目内容**：

```
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:
输入: [2,2,1]
输出: 1

示例 2:
输入: [4,1,2,1,2]
输出: 4
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 最菜解法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var singleNumber = function(nums) {
  while(nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[0]) {
        nums.splice(i, 1);
        nums.splice(0, 1);
        break;
      } else if (i === nums.length - 1 && nums[i] !== nums[0]) {
        return nums[0];
      }
    }
  }
  return nums[0];
};
```

* **执行测试**：

1. `nums`：`[4,1,2,1,2]`
2. `return`：`4`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 16/16 cases passed (252 ms)
  ✔ Your runtime beats 21.3 % of javascript submissions
  ✔ Your memory usage beats 15.97 % of javascript submissions (37.7 MB)
```

* **知识点**：

1. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/splice.md)

* **解题思路**：

**最菜思路，LeetCode 第 34 题破新低！**

**首先**，通过 `while` 判断，在 `while` 内部不断切割数组，直至它剩下长度为 1。

**然后**，遍历一次数组，判断是否存在相同的，存在则切割数组，并中断这次遍历。

> 特殊情况：如果遍历到了最末尾，且数组末尾不等于开头，那么我们返回开头数字，因为它没有相同的值

```js
if (nums[i] === nums[0]) {
  nums.splice(i, 1);
  nums.splice(0, 1);
  break;
} else if (i === nums.length - 1 && nums[i] !== nums[0]) {
  return nums[0];
}
```

**最后**，返回最终的数组的第 1 个数字。

解题思路对了，但是看到 LeetCode Submit 的结果，肯定是被大佬打爆了，那么一定会有更优解，继续思考。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var singleNumber = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
};
```

* **执行测试**：

1. `nums`：`[4,1,2,1,2]`
2. `return`：`4`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 16/16 cases passed (148 ms)
  ✔ Your runtime beats 33.85 % of javascript submissions
  ✔ Your memory usage beats 37.98 % of javascript submissions (36.3 MB)
```

* **知识点**：

1. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/sort.md)

* **解题思路**：

**百尺竿头，更进一步！**

此时的题解，相对于前面的解题思路，无疑更进了一步，主要思路是：

1. 将数字数组通过 `sort()` 排序
2. 通过双指针的移动，判断 `nums[i + 1]` 是否与 `nums[i]` 相等，相等则前进两位（`if` 条件中的 `i++` 和 `for` 的 i++） 相叠加，就是 `+2` 了
3. 返回不同的那一个数字。

### <a name="chapter-three-three" id="chapter-three-three">3.3 解法 - 玄学异或</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
```

* **执行测试**：

1. `nums`：`[4,1,2,1,2]`
2. `return`：`4`

* **LeetCode Submit**：

```js
√ Accepted
  √ 16/16 cases passed (72 ms)
  √ Your runtime beats 98.94 % of javascript submissions
  √ Your memory usage beats 73.15 % of javascript submissions (35.3 MB)
```

* **解题思路**：

**最后这个题解不做讲解，请小伙伴们自行思考。**

> 大佬思路

```
交换律：a ^ b ^ c <=> a ^ c ^ b

任何数于 0 异或为任何数 0 ^ n => n

相同的数异或为 0: n ^ n => 0

var a = [2, 3, 2, 4, 4]

2 ^ 3 ^ 2 ^ 4 ^ 4 等价于 2 ^ 2 ^ 4 ^ 4 ^ 3 => 0 ^ 0 ^3 => 3
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
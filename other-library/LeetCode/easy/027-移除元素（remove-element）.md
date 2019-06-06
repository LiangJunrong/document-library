027 - 移除元素（remove-element）
===

> Create by **jsliang** on **2019-06-06 15:56:49**  
> Recently revised in **2019-06-06 17:12:43**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 双指针](#chapter-three-one) |
| &emsp;[3..2 解法 - 递归](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、双指针
* **题目地址**：https://leetcode-cn.com/problems/remove-element/
* **题目内容**：

```
给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。

示例 2:

给定 nums = [0,1,2,2,3,0,4,2], val = 2,
函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。

说明:

为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

## <a name="chapter-three" id="chapter-threed">三 解题</a>

> [返回目录](#chapter-one)

* **官方题解**：

解题千千万，官方独一家，上面是官方使用 Java 进行的题解。

小伙伴可以先自己在本地尝试解题，再看看官方解题，最后再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
```

* **执行测试**：

1. `nums`：`[0,1,2,2,3,0,4,2]`
2. `val`：`2`
3. `return`：

```js
// [ 0, 1, 3, 0, 4 ]
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 113/113 cases passed (96 ms)
  ✔ Your runtime beats 54.39 % of javascript submissions
  ✔ Your memory usage beats 95.17 % of javascript submissions (33.4 MB)
```

* **知识点**：

1. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/splice.md)

* **解题思路**：

如果小伙伴们看过上一道（第 26 题）中关于双指针的解法，那么小伙伴对这道题应该非常清晰。

如果小伙伴们没有看过上一篇的题解，建议先去接触那道题。

思路：

1. 遍历整个数组
2. 判断数组中的某个数字是否和需要移除的元素相等
3. 如果两者相等，则移除改元素，并且遍历索引 `i = i - 1`（因为 `splice()` 改变了原数组，所以我们需要重新检查本次索引）

这样，我们就简单完成了这道题的破解。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeElement = function(nums, val) {
  if(nums.indexOf(val) != -1) {
    nums.splice(nums.indexOf(val), 1);
    return removeElement(nums, val);
  }
  return nums.length;
};
```

* **执行测试**：

1. `nums`：`[0,1,2,2,3,0,4,2]`
2. `val`：`2`
3. `return`：

```js
// [ 0, 1, 3, 0, 4 ]
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 113/113 cases passed (104 ms)
  ✔ Your runtime beats 38.48 % of javascript submissions
  ✔ Your memory usage beats 86.91 % of javascript submissions (33.5 MB)
```

* **知识点**：

1. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/splice.md)
2. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)

* **解题思路**：

```js
var removeElement = function(nums, val) {
  if(nums.indexOf(val) != -1) {
    nums.splice(nums.indexOf(val), 1);
    return removeElement(nums, val);
  }
  return nums.length;
};
```

总有那么一两个破解的方式，令人眼前一亮！

虽然使用递归来破解这道题，可能比不上双指针破解法，但是感觉思路还是不错的：

**首先**，我们通过 `indexOf()` 方法来判断我们的数组中是否还存在需要移除的那个元素。在测试数据 `[0,1,2,2,3,0,4,2]` 和 `2` 的遍历中，`nums,indexOf(val)` 的值分别为：

```js
2
2
5
-1
```

即对应我们的 `2` 出现的位置。

**然后**，我们通过 `splice()` 来裁剪原数组，起始位置就是找到 `2` 的位置，裁剪长度就是 1 个。

**最后**，如果是存在移除元素，我们裁剪完后，就再执行一遍自身（递归），否则就返回最终的长度。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
169 - 求众数（majority-element）
===

> Create by **jsliang** on **2019-07-05 13:54:05**  
> Recently revised in **2019-07-05 14:48:53**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map()](#chapter-three-one) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算、数组、分治算法
* **题目地址**：https://leetcode-cn.com/problems/majority-element/
* **题目内容**：

```
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:
输入: [3,2,3]
输出: 3

示例 2:
输入: [2,2,1,1,1,2,2]
输出: 2
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var majorityElement = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if (map.get(nums[i]) > nums.length / 2) {
        return nums[i];
      }
    } else {
      map.set(nums[i], 1);
      if (map.get(nums[i]) > nums.length / 2) {
        return nums[i];
      }
    }
  }
};
```

* **执行测试**：

1. `nums`：`[2,2,1,1,1,2,2]`
2. `return`：`2`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 44/44 cases passed (96 ms)
  ✔ Your runtime beats 83.27 % of javascript submissions
  ✔ Your memory usage beats 24.14 % of javascript submissions (37.7 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)

* **解题思路**：

**首先**，`Map()` 作为一个 **有记忆功能** 的 `Object`，在 LeetCode 中经常以哈希算法的形式出现，是个非常实用的 API，小伙伴们可以尝试多使用几次，记住 `Map()` 的使用技巧。

**然后**，**jsliang** 讲讲使用 `Map()` 的解题思路：

1. 通过 `for()` 遍历一遍 `nums`
2. 判断 `nums` 中的每个元素，如果在 `Map()` 中有存在，则将其出现次数 + 1，如果它的出现次数已经超过 `nums.length / 2`，那么它就是众数。
3. 然后，如果它没在 `Map()` 中存在，那么就直接存为 `1`，同时给个判断是否出现次数超过 `nums.length / 2`，这是预防如果数组为 `[1]` 的情况。

**这样**，我们就完成了这道题的破解。

* **进一步思考**：

除了 `Map()`，可能还有其他方法，这就需要小伙伴们去探索啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
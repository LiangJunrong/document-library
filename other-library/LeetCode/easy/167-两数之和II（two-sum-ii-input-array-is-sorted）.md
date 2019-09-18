167 - 两数之和II（two-sum-ii-input-array-is-sorted）
===

> Create by **jsliang** on **2019-07-04 17:17:39**  
> Recently revised in **2019-09-18 10:41:20**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 双指针](#chapter-three-one) |
| &emsp;[3.2 解法 - Map()](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、双指针、二分查找
* **题目地址**：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
* **题目内容**：

```
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

示例:
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
};
```

* **执行测试**：

1. `numbers`：`[2, 7, 11, 15]`
2. `target`：`9`
3. `return`：`[1, 2]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 17/17 cases passed (436 ms)
  ✔ Your runtime beats 13.64 % of javascript submissions
  ✔ Your memory usage beats 94.19 % of javascript submissions (34.6 MB)
```

* **解题思路**：

拿到题，看下题目，想 1 分钟思路，敲 1 分钟代码，提交，完事……

**我变强了，还好没那么快秃！**

**首先**，想到的就是双指针法，思路很简单：

1. 当 `i` 遍历到 `2` 的时候，`j` 依次遍历 `7`、`11`、`15`
2. 当 `i` 遍历到 `7` 的时候，`j` 依次遍历 `11`、`15`
3. 当 `i` 遍历到 `11` 的时候，`j` 依次遍历 `15`
4. 当 `i` 为 `15` 的时候，不遍历。

当然，这是正常情况下，`i` 指针和 `j` 指针指向不同的位置。

**然后**：

```js
if (numbers[i] + numbers[j] === target) {
  return [i + 1, j + 1];
}
```

判断这两者相加是否为 `target` 的值，相同则 `return` 出去就行了。

**最后**，如果小伙伴们还是没看懂这解题思路，建议多看两道双指针的题目，原理都是十分简单的。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Map()</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var twoSum = function(numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.get(numbers[i]) !== undefined) {
      return [map.get(numbers[i]), i + 1];
    } else {
      map.set(target - numbers[i], i + 1);
    }
  }
  return [];
};
```

* **执行测试**：

1. `numbers`：`[2, 7, 11, 15]`
2. `target`：`9`
3. `return`：`[1, 2]`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 17/17 cases passed (68 ms)
  ✔ Your runtime beats 98.53 % of javascript submissions
  ✔ Your memory usage beats 6.77 % of javascript submissions (35.5 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

* **解题思路**：

**回头想了一下，杀它个回马枪**

在双指针解法中，我们花费了大量的时间，因为进行了双重 `for` 遍历。

那么，我们可不可以压缩下呢？

于是，咱想到了 `Map`，使用哈希算法来解题。

让我们看看，将遍历中的数据，都进行 `Map` 存储，是怎样子的：

```js
Map { 7 => 0 }
undefined

Map { 7 => 0, 2 => 1 }
0

Map { 7 => 0, 2 => 1, -2 => 2 }
undefined

Map { 7 => 0, 2 => 1, -2 => 2, -6 => 3 }
undefined
```

看到这里，小伙伴们心里是不是异常清晰了？

是的，我们将每个数字的差值，作为 `key` 存储起来，然后将每个数字的索引（`index`），作为 `value` 存储起来。

这样，当我们获取不存在的值的时候，返回 `undefined`；

获取 `9 - 2 = 7` 的时候，它就不是 `undefined` 了，而是告诉我们它的 `value` 为 `0`

最终，通过判断取到的 `value` 是否为 `undefined`，我们成功通过 `Map` 破解了这道题。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
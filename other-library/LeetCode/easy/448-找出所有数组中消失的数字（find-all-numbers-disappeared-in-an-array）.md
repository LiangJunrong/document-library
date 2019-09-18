448 - 找出所有数组中消失的数字（find-all-numbers-disappeared-in-an-array）
===

> Create by **jsliang** on **2019-7-30 07:50:53**  
> Recently revised in **2019-09-18 14:09:51**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - Set](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
* **题目内容**：

```
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const findDisappearedNumbers = (nums) => {
  let map = new Map();
  for (let i = 1; i <= nums.length; i++) {
    map.set(i, 1);
  }
  for (let j = 0; j < nums.length; j++) {
    if (map.get(nums[j])) {
      map.delete(nums[j]);
    }
  }
  let result = [];
  for (let key of map.keys()) {
    result.push(key);
  }
  return result;
};
```

* **执行测试**：

1. `nums`：`[4,3,2,7,8,2,3,1]`
2. `return`：

```js
[5, 6]
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 34/34 cases passed (192 ms)
  √ Your runtime beats 48.21 % of javascript submissions
  √ Your memory usage beats 5.17 % of javascript submissions (61.9 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)
2. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

* **解题思路**：

**犹豫即将败北**。

**首先**，拿到题目第一眼，想想要不要尝试下使用 `Map`？

所以直接上手：

```js
const findDisappearedNumbers = (nums) => {
  let map = new Map();
  for (let i = 1; i <= nums.length; i++) {
    map.set(i, 1);
  }
  for (let j = 0; j < nums.length; j++) {
    if (map.get(nums[j])) {
      map.delete(nums[j]);
    }
  }
  let result = [];
  for (let key of map.keys()) {
    result.push(key);
  }
  return result;
};
```

**然后**，Submit 提交看看：

```js
√ Accepted
  √ 34/34 cases passed (192 ms)
  √ Your runtime beats 48.21 % of javascript submissions
  √ Your memory usage beats 5.17 % of javascript submissions (61.9 MB)
```

哟嚯，居然可行。

**最后**，我们讲讲使用 `Map` 的简单思路：

步骤 1：设置一个 1-n 的哈希表：

```js
let map = new Map();
for (let i = 1; i <= nums.length; i++) {
  map.set(i, 1);
}
// Map {
//   1 => 1,
//   2 => 1
//   3 => 1,
//   4 => 1,
//   5 => 1,
//   6 => 1,
//   7 => 1,
//   8 => 1,
// }
```

步骤 2：遍历原数组，删除对应哈希表中出现的数字：

```js
for (let j = 0; j < nums.length; j++) {
  if (map.get(nums[j])) {
    map.delete(nums[j]);
  }
}
// Map {
//   5 => 1,
//   6 => 1,
// }
```

步骤 3：遍历哈希表，将其转换为数组：

```js
let result = [];
for (let key of map.keys()) {
  result.push(key);
}
return result;
// [ 5, 6 ]
```

这样，就完成了这道题的破解。

> 不得不承认这是简单而又繁杂的破解思路，我们应该进行更多尝试。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - Set</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const findDisappearedNumbers = (nums) => {
  let newNums = [...new Set(nums)].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (newNums[i] != (i + 1)) {
      newNums.splice(i, 0, (i + 1));
      result.push((i + 1));
    }
  }
  return result;
};
```

* **执行测试**：

1. `nums`：`[4,3,2,7,8,2,3,1]`
2. `return`：

```js
[5, 6]
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 34/34 cases passed (1236 ms)
  √ Your runtime beats 21.12 % of javascript submissions
  √ Your memory usage beats 5.17 % of javascript submissions (51.9 MB)
```

* **知识点**：

1. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Set/README.md)
2. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)
3. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)
4. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

* **解题思路**：

**首先**，在上文中，我们讲到了使用 `Map` 进行求解。而讲起 `Map`，**jsliang** 又想到了它的死对头 `Set`，然后尝试了一波：

```js
const findDisappearedNumbers = (nums) => {
  let newNums = [...new Set(nums)].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (newNums[i] != (i + 1)) {
      newNums.splice(i, 0, (i + 1));
      result.push((i + 1));
    }
  }
  return result;
};
```

**然后**，我们看看它的思路：

1. 通过 `Set` 和 `sort()` 去重 + 排序。
2. 遍历数组，注意我们遍历的是 `nums` 的长度，毕竟求解的范围是 1-n。
3. 如果我们去重后的 `newNums` 不存在值，那么我们给它补充一个值，同时，补充的这个值，就是我们的求解值之一。

**最后**，我们将 `result` 返回出去即可。

* **进一步思考**：

那么，在上面，我们使用了自己的智慧进行解题，下面该看看大佬们的解题技巧啦：

> 解法 1：

```js
var findDisappearedNumbers = function(nums) {
  var newNums = [];
  var result = [];
  for (var i = 1; i <= nums.length; i++) {
    newNums[i] = nums.findIndex(e => e === i);
  }
  for (var i in newNums) {
    if (newNums[i] === -1) {
      result.push(i);
    }
  }
  return result;
};
```

Submit：

```js
√ Accepted
  √ 34/34 cases passed (5108 ms)
  √ Your runtime beats 18.73 % of javascript submissions
  √ Your memory usage beats 5.17 % of javascript submissions (52.2 MB)
```

> 解法 2：

```js
const findDisappearedNumbers = nums => {
  const arr = [...nums];
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] - 1] > 0 && (arr[nums[i] - 1] *= -1);
  }
  return arr.map((item, index) => item > 0 && index + 1).filter(Number);
};
```

Submit：

```js
√ Accepted
  √ 34/34 cases passed (160 ms)
  √ Your runtime beats 71.31 % of javascript submissions
  √ Your memory usage beats 29.31 % of javascript submissions (45.8 MB)
```

> 解法 3：

```js
var findDisappearedNumbers = function(nums) {
  let ans = Array(nums.length)
    .fill(null)
    .map((_, h) => h + 1);
  for (let i = 0; i < nums.length; i++) {
    if (ans[nums[i] - 1] == nums[i]) {
      ans[nums[i] - 1] = 0;
    }
  }
  ans = ans.filter(value => {
    return value != 0;
  });
  return ans;
};
```

Submit：

```js
√ Accepted
  √ 34/34 cases passed (144 ms)
  √ Your runtime beats 88.45 % of javascript submissions
  √ Your memory usage beats 29.31 % of javascript submissions (45.2 MB)
```

非常精彩~

那么该题的解题就此结束啦！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
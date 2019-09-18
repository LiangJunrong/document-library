049 - 字母异位词分组（group-anagrams）
===

> Create by **jsliang** on **2019-08-13 09:50:08**  
> Recently revised in **2019-09-18 14:18:08**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - 数学解法](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：中等
* **涉及知识**：哈希表、字符串
* **题目地址**：https://leetcode-cn.com/problems/group-anagrams/
* **题目内容**：

```
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var groupAnagrams = function(strs) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    const sortStrs = strs[i].split('').sort().join('');
    if (map.get(sortStrs) !== undefined) {
      result[map.get(sortStrs)].push(strs[i]);
    } else {
      map.set(sortStrs, result.length);
      result.push([strs[i]]);
    }
  }
  return result;
};
```

* **执行测试**：

1. `strs`：`['eat', 'tea', 'tan', 'ate', 'nat', 'bat']`
2. `return`：

```js
[
  ['ate','eat','tea'],
  ['nat','tan'],
  ['bat']
]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 101/101 cases passed (164 ms)
  ✔ Your runtime beats 98.36 % of javascript submissions
  ✔ Your memory usage beats 86.96 % of javascript submissions (44.7 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)
2. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
3. `sort()`：排序，保持返回数组的数字为顺序排列。[`sort()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/sort.md)
4. `join()`：`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。[`join()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/join.md)
5. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

* **解题思路**：

**以其说这是一道中等难度题，不如说这是一道简单-中等难度的跨度题。**

没有想象中的难，分三步走：

1. 设置 `Map` 作为哈希表。
2. 遍历数组 `strs`。
3. 判断 `strs` 中每个元素排序后（这样可以一致对比），是否存在于哈希表中，并将其添加到最终结果 `result` 上即可。

```js
var groupAnagrams = function(strs) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    const sortStrs = strs[i].split('').sort().join('');
    if (map.get(sortStrs) !== undefined) {
      result[map.get(sortStrs)].push(strs[i]);
    } else {
      map.set(sortStrs, result.length);
      result.push([strs[i]]);
    }
  }
  return result;
};
```

这样，就可以直接通过哈希表完成本题的破解。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 数学解法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var groupAnagrams = function (strs) {
  let res = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const hash = str.split('').reduce((sum, s) => {
      return sum * [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103][s.charCodeAt(0) - 97];
    }, 1)
    res[hash] ? res[hash].push(str) : res[hash] = [str]
  }

  return Object.values(res);
};
```

* **执行测试**：

1. `strs`：`['eat', 'tea', 'tan', 'ate', 'nat', 'bat']`
2. `return`：

```js
[
  ['ate','eat','tea'],
  ['nat','tan'],
  ['bat']
]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 101/101 cases passed (144 ms)
  ✔ Your runtime beats 99.67 % of javascript submissions
  ✔ Your memory usage beats 77.17 % of javascript submissions (45 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `reduce()`：`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。[`reduce()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/reduce.md)
3. `charCodeAt()`：`charCodeAt()` 获得字母对应的 ASCII 编码，例如 A - 65。[`charCodeAt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/charCodeAt.md)
4. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

* **解题思路**：

在【题解】区，看到一个有意思的题解：

https://leetcode-cn.com/problems/group-anagrams/solution/js-xie-leetcode-by-zhl1232-3/

> 算术基本定理，又称为正整数的唯一分解定理，即：每个大于 1 的自然数，要么本身就是质数，要么可以写为 2 个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。

大致意思就是：

1. 我们可以用质数存储一个哈希表：[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]。
2. 我们可以将 a b c 这些换算成 Unicode 编码。
3. 每个字母减去 a，可以得到对应的质数编码。例如：b - a = 1，对应的就是 3，然后 abc 就是 2 * 3 * 5 = 30。

这样，我们就保证了同一个字符串的相同性，从而求解到最终的值。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
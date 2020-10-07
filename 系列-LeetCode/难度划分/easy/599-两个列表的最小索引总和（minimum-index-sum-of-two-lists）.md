599 - 两个列表的最小索引总和（minimum-index-sum-of-two-lists）
===

> Create by **jsliang** on **2019-11-26 08:21:55**  
> Recently revised in **2019-11-26 09:14:02**

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
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
* **题目内容**：

```
假设 Andy 和 Doris 想在晚餐时选择一家餐厅，
并且他们都有一个表示最喜爱餐厅的列表，
每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。

如果答案不止一个，
则输出所有答案并且不考虑顺序。

你可以假设总是存在一个答案。

示例 1:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines",
"Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。

示例 2:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 
  他们共同喜爱且具有最小索引和的餐厅是“Shogun”，
  它有最小的索引和1(0+1)。

提示:
两个列表的长度范围都在 [1, 1000]内。
两个列表中的字符串的长度将在[1，30]的范围内。
下标从0开始，到列表的长度减1。
两个列表都没有重复的元素。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 两个列表的最小索引总和
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const map = new Map();
  let result = [];
  let min = 2000; // 数组范围在 [1, 1000]
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
    const mark = map.get(list2[j]);
    if (mark !== undefined) {
      if (mark + j === min) {
        result.push(list2[j]);
      } else if (mark + j < min) {
        result = [list2[j]];
        min = mark + j;
      } else {
        break;
      }
    }
  }
  return result;
};

// const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
// const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];
// ['Shogun']

const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
const list2 = ['KFC', 'Shogun', 'Burger King'];
// ['Shogun']

console.log(findRestaurant(list1, list2));
```

`node index.js` 返回：

```js
['Shogun']
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 133/133 cases passed (104 ms)
* Your runtime beats 97.54 % of javascript submissions
* Your memory usage beats 46.88 % of javascript submissions (43.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，心里想到的，有两种破解思路，咱一个一个试试：

> 解法一

```js
const findRestaurant = (list1, list2) => {
  let result = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < list1.length; i++) {
    const index = list2.findIndex(item => item === list1[i]);
    if (index > -1 && i + index === min) {
      result.push(list1[i]);
    }
    if (index > -1 && i + index < min) {
      result = [];
      result.push(list1[i]);
      min = i + index;
    }
  }
  return result;
};
```

这个方法的思路比较清晰：

1. 定义 `result` 接收结果。
2. 定义 `min` 接收目前最少索引。
3. 遍历 `list1`，然后再遍历 `list2` 查找是否存在元素和 `list[i]` 相等（`list2.findIndex()` 相当于遍历了 `list2`）。
4. 如果找到了两个数组相同的元素，此时需要判断两种情况。
5. 其一是 `i + index === min`，说明存在多个相同最小索引的元素，此时 `result` 需要添加多一个元素。
6. 其二是 `i + index < min`，说明这次的索引比目前的最小索引还小，那就清空数组并添加当前元素，同时重新设置 `min`。
7. 最后将 `result` 返回出去。

Submit 提交结果：

```js
Accepted
* 133/133 cases passed (144 ms)
* Your runtime beats 39.34 % of javascript submissions
* Your memory usage beats 53.13 % of javascript submissions (43 MB)
```

那么，挑刺：

1. 使用了双重遍历：`for` + `findIndex`。
2. 没有设置中断条件，例如一开始 `min` 已经是 3，后面 `i + index > 3` 了，就不需要继续遍历了。

下面试试第二种方法：

> 解法二

```js
const findRestaurant = (list1, list2) => {
  const map = new Map();
  let result = [];
  let min = 2000; // 数组范围在 [1, 1000]
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
    const mark = map.get(list2[j]);
    if (mark !== undefined) {
      if (mark + j === min) {
        result.push(list2[j]);
      } else if (mark + j < min) {
        result = [list2[j]];
        min = mark + j;
      } else {
        break;
      }
    }
  }
  return result;
};
```

在这个方法中，我们添加了一个哈希表，并进行了两次遍历：

1. 遍历 `list1`，将其所有元素添加进 `Map` 哈希表中。
2. 遍历 `list2`，查找 `Map` 中是否存在 `list2[j]`。
3. 如果查找的 `list2[j]` 存在于哈希表中，表明这个元素是存在的，进入 `if` 内部。
4. 判断 **查找到的索引 + 当前索引** 是否等于当前最小值。如果是，则给 `result` 添加当前元素，表明当前最小值不止有一个。
5. 判断 **查找到的索引 + 当前索引** 是否小于当前最小值。如果是，证明需要重新设置 `result`，即 `result = [list2[j]]`。
6. 判断 **查找到的索引 + 当前索引** 是否超过最小值，如果超过，中断循环。
7. 重复步骤 3 - 6，得到所有结果，最后通过 `result` 返回出去。

Submit 提交：

```js
Accepted
* 133/133 cases passed (104 ms)
* Your runtime beats 97.54 % of javascript submissions
* Your memory usage beats 46.88 % of javascript submissions (43.2 MB)
```

可以看到，时间超大幅度提升，空间较前面有所减少，牺牲了空间换来了时间的优化。

以上，就是本题的解法。

如果你有更好的想法或者思路，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
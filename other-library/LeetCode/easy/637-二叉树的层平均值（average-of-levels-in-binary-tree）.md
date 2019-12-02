637 - 二叉树的层平均值（average-of-levels-in-binary-tree）
===

> Create by **jsliang** on **2019-12-02 08:44:06**  
> Recently revised in **2019-12-02 09:42:51**

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
* **涉及知识**：树
* **题目地址**：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
* **题目内容**：

```
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

示例 1:

输入:
    3
   / \
  9  20
    /  \
   15   7

输出: [3, 14.5, 11]

解释:
第 0 层的平均值是 3, 
第 1 层是 14.5, 
第 2 层是 11. 
因此返回 [3, 14.5, 11]。

注意：

节点值的范围在32位有符号整数范围内。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name 二叉树的层平均值
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
  const result = [];
  const traverse = (root, depth) => {
    if (!root) {
      return;
    }
    (result[depth] || (result[depth] = [])).push(root.val);
    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  };
  traverse(root, 0);
  return result.map(item => item.reduce((pre, cur) => pre + cur) / item.length);
};

// const root = {
//   val: 3,
//   left: { val: 9, left: null, right: null },
//   right: {
//     val: 20,
//     left: { val: 15, left: null, right: null },
//     right: { val: 7, left: null, right: null },
//   },
// };
// [ 3, 14.5, 11 ]

const root = {
  val: 3,
  left: {
    val: 1,
    left: { val: 0, left: null, right: null },
    right: { val: 2, left: null, right: null },
  },
  right: {
    val: 5,
    left: { val: 4, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};
// [ 3, 3, 3 ]

// const root = {
//   val: -40,
//   left: { val: 0, left: null, right: null },
//   right: { val: -37, left: null, right: null },
// };
// [-40, -18.5]

console.log(averageOfLevels(root));
```

`node index.js` 返回：

```js
[ 3, 3, 3 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 65/65 cases passed (68 ms)
* Your runtime beats 99.12 % of javascript submissions
* Your memory usage beats 79.41 % of javascript submissions (38 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**原以为是简单难度，谁知死在测试用例上**。

直接上代码：

> 第一次题解

```js
const averageOfLevels = (root) => {
  const treeList = [];
  const map = new Map();
  const ergodic = (root, deep) => {
    if (!root) {
      return;
    }
    if (treeList[deep]) {
      treeList[deep] = (treeList[deep] + root.val) / map.get(deep);
      map.set(deep, map.get(deep) + 1);
    } else {
      treeList[deep] = root.val;
      map.set(deep, 2);
    }
    deep += 1;
    return ergodic(root.left, deep) + ergodic(root.right, deep);
  };
  ergodic(root, 0);
  return treeList;
};
```

1. 通过 `treeList` 记录最终结果
2. 通过 `map` 记录该层出现的次数
3. 通过 `ergodic` 进行递归
4. 递归中。如果节点为空，直接返回
5. 递归中。如果 `treeList` 的该层 `deep` 位置不存在，则添加该元素；否则将它的值加上 `root.val`，并处于 `map` 中记录该位置所出现的次数
6. 递归中。每次非空节点的遍历，都将 `deep` 的层次加一，直至递归结束
7. 最后返回结果 `treeList`

但是！还是出问题了：

```js
Wrong Answer
61/65 cases passed (N/A)

Testcase
[-40,0,-37,17,-87, ...省略..., null,null,3]

Answer
[-40.0,-37.0,11.5, ...省略..., -15.48889,3.0]

Expected Answer
[-40.0,-18.5,-5.25, ...省略..., -26.83333,3.0]
```

瞬间懵逼，这场景是什么鬼，我要怎么复现出来？

于是我去【题解区】找了一个：

> 参照题解

```js
const averageOfLevels = (root) => {
  const res = [];
  if (!root) return res;
  const traverse = (node, depth) => {
    (res[depth] || (res[depth] = [])).push(node.val);
    if (node.left) traverse(node.left, depth + 1);
    if (node.right) traverse(node.right, depth + 1);
  };
  traverse(root, 0);
  return res.map(item => item.reduce((pre, cur) => pre + cur) / item.length);
};
```

Submit 提交：

```js
Accepted
* 65/65 cases passed (92 ms)
* Your runtime beats 50 % of javascript submissions
* Your memory usage beats 94.12 % of javascript submissions (37.8 MB)
```

纳闷，回头再看看 `Map` 记录：

```js
Map {
  0 => 2,
  1 => 2,
  2 => 5,
  3 => 9,
  4 => 17,
  5 => 29,
  6 => 42,
  7 => 70,
  8 => 90,
  9 => 99,
  10 => 98,
  11 => 88,
  12 => 89,
  13 => 88,
  14 => 73,
  15 => 64,
  16 => 55,
  17 => 50,
  18 => 29,
  19 => 13,
  20 => 7,
  21 => 2 }
```

究竟哪里有问题？难不成是我 JS 被诟病的加减乘除计算？也不对啊！

仔细观察，第 1 层的时候有两个值，然后对应的是：

```js
const root = {
  val: -40,
  left: { val: 0, left: null, right: null },
  right: { val: -37, left: null, right: null },
};
```

问题很大啊兄嘚，遍历第 1 层的时候 `treeList[1] = 0`，然后就判断没了啊，所以最终结果是 `37`。

还有就是，每次我都会除于一个平均值，这就很大问题了：导致累计之后数值不准，所以还是需要使用 **参照题解**，才是上佳选择。

如上，如果小伙伴有更好的思路或者解法，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
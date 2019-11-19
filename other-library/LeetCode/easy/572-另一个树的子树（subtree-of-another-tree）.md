572 - 另一个树的子树（subtree-of-another-tree）
===

> Create by **jsliang** on **2019-11-19 08:34:29**  
> Recently revised in **2019-11-19 09:10:08**

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
* **涉及知识**：树
* **题目地址**：https://leetcode-cn.com/problems/subtree-of-another-tree/
* **题目内容**：

```
给定两个非空二叉树 s 和 t，

检验 s 中是否包含和 t 具有相同结构和节点值的子树。

s 的一个子树包括 s 的一个节点和这个节点的所有子孙。

s 也可以看做它自身的一棵子树。

示例 1:

给定的树 s:

     3
    / \
   4   5
  / \
 1   2

给定的树 t：

   4 
  / \
 1   2

返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:

给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0

给定的树 t：

   4
  / \
 1   2
返回 false。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 树的万能公式
 * @param {Object} root 树
 */
const ergodic = (root) => {
  if (!root) {
    return '!#';
  }
  return '!' + root.val + ergodic(root.left) + ergodic(root.right);
}

/**
 * @name 另一个树的子树
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  const sNodes = ergodic(s);
  const tNodes = ergodic(t);
  return sNodes.includes(tNodes);
};

// 示例 1: true
const s = {
  val: 3,
  left: {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
  },
  right: { val: 5, left: null, right: null },
};
const t = {
  val: 4,
  left: { val: 1, left: null, right: null },
  right: { val: 2, left: null, right: null },
};

// 示例 2: false
// const s = {
//   val: 3,
//   left: {
//     val: 4,
//     left: { val: 1, left: null, right: null },
//     right: {
//       val: 2,
//       left: { val: 0, left: null, right: null },
//       right: null,
//     },
//   },
//   right: { val: 5, left: null, right: null },
// };
// const t = {
//   val: 4,
//   left: { val: 1, left: null, right: null },
//   right: { val: 2, left: null, right: null },
// };
console.log(isSubtree(s, t));
```

`node index.js` 返回：

```js
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 176/176 cases passed (80 ms)
* Your runtime beats 98.55 % of javascript submissions
* Your memory usage beats 11.63 % of javascript submissions (40.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，开始发愣：

* **我记得有次滑铁卢，就是比较两棵树。**

所以，这次我要好好想想……

**然后**，突然发现，我比较两棵树可能不行，但是如果我将两棵树遍历成字符串，会不会比较好比较：

```js
/**
 * @name 树的万能公式
 * @param {Object} root 树
 */
const ergodic = (root) => {
  if (!root) {
    return '!#';
  }
  return '!' + root.val + ergodic(root.left) + ergodic(root.right);
}

/**
 * @name 另一个树的子树
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  const sNodes = ergodic(s);
  const tNodes = ergodic(t);
  return sNodes.includes(tNodes);
};
```

代码贼简单有木有！

示例 1 和示例 2 都搞定了有木有！

Submit 提交看看：

```js
Accepted
* 176/176 cases passed (80 ms)
* Your runtime beats 98.55 % of javascript submissions
* Your memory usage beats 11.63 % of javascript submissions (40.8 MB)
```

Perfect!

**最后**，讲讲思路：

1. 通过万能公式遍历树：`ergodic(root)`，拿到返回的字符串。
2. 将两个字符串进行比较，如果 `t` 包含在 `s` 内，就返回 `true` 即可。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

**最后的最后**，当然是惯例翻一下【题解区】和【评论区】啦，想看看正经点的解题步骤是怎样的~

> 官方题解

* https://leetcode-cn.com/problems/subtree-of-another-tree/solution/ling-yi-ge-shu-de-zi-shu-by-leetcode/

官方题解，仅有讲解，没有代码。

1. 解法 1 的先序遍历看起来跟我的解法一致。
2. 解法 2 的方法是：将 s 树进行遍历，每个节点都和 t 的根节点进行比较，如果相同，则进一步比较 s 当前节点（子节点）和 t 所有节点进行比较，如果成功则返回 `true`，否则返回 `false`。

> 闷骚解法

* https://leetcode-cn.com/problems/subtree-of-another-tree/solution/li-yong-javascriptde-jsonstringifyhan-shu-tou-ji-q/

```js
var isSubtree = function(s, t) {
  return JSON.stringify(s).includes(JSON.stringify(t));
};
```

Submit 提交：

```js
Accepted
* 176/176 cases passed (84 ms)
* Your runtime beats 94.2 % of javascript submissions
* Your memory usage beats 39.53 % of javascript submissions (38.9 MB)
```

看起来非常简洁高效有木有！o(╥﹏╥)o比我写的方法好多了，效率等也高。

最重要的是，它仅有一行！

以上，就是本题的破解及延伸啦~

如果小伙伴们碰到更新奇或者更清晰的解法，欢迎留言评论或者私聊我~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
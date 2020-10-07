669 - 修剪二叉搜索树（trim-a-binary-search-tree）
===

> Create by **jsliang** on **2019-12-09 07:46:50**  
> Recently revised in **2019-12-09 08:19:35**

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
* **题目地址**：https://leetcode-cn.com/problems/trim-a-binary-search-tree/
* **题目内容**：

```
给定一个二叉搜索树，同时给定最小边界 L 和最大边界 R。

通过修剪二叉搜索树，使得所有节点的值在 [L, R] 中 (R>=L) 。

你可能需要改变树的根节点，

所以结果应当返回修剪好的二叉搜索树的新的根节点。

示例 1:

输入: 
    1
   / \
  0   2

  L = 1
  R = 2

输出: 
    1
      \
       2

示例 2:

输入: 
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

输出: 
      3
     / 
   2   
  /
 1
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
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    
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
 * @name 修剪二叉搜索树
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = (root, L, R) => {
  if (!root) {
    return root;
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};

const root = {
  val: 1,
  left: { val: 0, left: null, right: null },
  right: { val: 2, left: null, right: null },
};
console.log(trimBST(root, 1, 2));
```

`node index.js` 返回：

```js
{ val: 1,
  left: null,
  right: { val: 2, left: null, right: null } }
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
执行结果：通过
执行用时：72 ms，在所有 JavaScript 提交中击败了 94.20% 的用户
内存消耗：39.3 MB，在所有 JavaScript 提交中击败了 29.41% 的用户
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**看了一眼，不会，进入学习状态。**

> 【题解区】 - 官方题解

```js
const trimBST = (root, L, R) => {
  if (!root) {
    return root;
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};
```

* **思路**：

不知道你有没有听过一个词语，叫 “左右互搏”，这里要做个新定义了！

**首先**，我们知道，我们需要修剪树的范围在 `[L, R]` 区间，那么小于 `L` 或者大于 `R` 的，我们就需要抛弃。

**然后**，当我们判断一个树的节点为空 `null` 的时候，我们直接返回这个节点，告诉它走不下去了；当我们判断一个树的节点大于 `R` 的时候，就让它去遍历左子树；如果一个树的节点小于 `L` 的时候，就让它遍历右子树。

**接着**，如果这棵树是正常的，属于 `[L, R]` 区间的，那么我们就让它正常的遍历左子树或者右子树。

* **实例**：

为了更方便我们了解机制，举个例子：

```js
const root = {
  val: 1,
  left: { val: 0, left: null, right: null },
  right: { val: 2, left: null, right: null },
};
const L = 1;
const R = 2;
```

我们在代码中进行 `console.log` 打印：

```js
const trimBST = (root, L, R) => {
  console.log(root);
  if (!root) {
    return root;
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};
```

输出如下：

```js
① { val: 1,
  left: { val: 0, left: null, right: null },
  right: { val: 2, left: null, right: null } }
② { val: 0, left: null, right: null }
③ null
④ { val: 2, left: null, right: null }
⑤ null
⑥ null
```

步骤：

1. 一开始遍历的是整棵树，这点是毫无疑问的，然后节点 `1` 属于 `[1, 2]` 区间内，所以正常遍历左右节点。
2. 遍历左节点 `root.left = trimBST(root.left, L, R)` 的时候，此时左子树的值 `val` 为 0，符合 `root.val < L`，所以执行 `trimBST(root.right, L, R)`。
3. 此时树节点 `{ val: 0, left: null, right: null }` 的右节点为 `null`，所以返回的是 `null`。
4. 遍历右节点 `root.right = trimBST(root.right, L, R)` 的时候，此时右子树的值 `val` 为 2，正常遍历左右节点。
5. 遍历节点为 `2` 的左子树，返回 `null`。
6. 遍历节点为 `2` 的右子树，返回 `null`。
7. 递归从步骤 1 到步骤 6 完毕，然后开始从步骤 6 开始向步骤 1 组装数据，最终返回我们需要的结果：

```js
{ val: 1,
  left: null,
  right: { val: 2, left: null, right: null } }
```

* **Submit 提交**：

```js
执行结果：通过
执行用时：72 ms，在所有 JavaScript 提交中击败了 94.20% 的用户
内存消耗：39.3 MB，在所有 JavaScript 提交中击败了 29.41% 的用户
```

再次学到一个点，叫 “左右互搏”，它的作用是：

* 筛选一棵树中不需要的节点，并返回最终有效节点。

如果你还没看懂，建议可以尝试下理解下面两个例子：

> 例子 1

```js
const root = {
  val: 1,
  left: {
    val: 0,
    left: null,
    right: { val: 1.5, left: null, right: null },
  },
  right: { val: 2, left: null, right: null },
};
```

> 例子 2

```js
const root = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: null,
    },
  },
  right: { val: 4, left: null, right: null },
};
```

那么，本题就到此结束了。

如果你有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
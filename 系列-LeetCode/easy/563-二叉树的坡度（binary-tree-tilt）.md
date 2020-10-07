563 - 二叉树的坡度（binary-tree-tilt）
===

> Create by **jsliang** on **2019-11-17 11:39:38**  
> Recently revised in **2019-11-17 13:25:45**

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
* **题目地址**：https://leetcode-cn.com/problems/binary-tree-tilt/
* **题目内容**：

```
给定一个二叉树，计算整个树的坡度。

一个树的节点的坡度定义即为：

该节点左子树的结点之和和右子树结点之和的差的绝对值。

空结点的的坡度是 0。

整个树的坡度就是其所有节点的坡度之和。

示例:

输入: 
         1
       /   \
      2     3
输出: 1
解释: 
结点的坡度 2 : 0
结点的坡度 3 : 0
结点的坡度 1 : |2-3| = 1
树的坡度 : 0 + 0 + 1 = 1
注意:

任何子树的结点的和不会超过32位整数的范围。
坡度的值不会超过32位整数的范围。
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
 * @return {number}
 */
var findTilt = function(root) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 树的万能公式（变形）
 * @param {Object} root 树
 * @param {Number} accuVal 累积节点值（从最深层次的节点开始）
 * @param {Number} accuTilt 累积的坡度（从最深层次的节点开始）
 */
const ergodic = (root, accuVal = 0, accuTilt = 0) => {
  // 如果为空，则累积节点值和坡度均为 0
  if (!root) {
    return [0, 0];
  }
  // 如果不为空，重新计算累积节点值和坡度
  const left = ergodic(root.left, accuVal, accuTilt);
  const right = ergodic(root.right, accuVal, accuTilt);
  accuVal = root.val + left[0] + right[0];
  accuTilt = left[1] + right[1] + Math.abs(left[0] - right[0]);
  return [accuVal, accuTilt];
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name 二叉树的坡度
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = (root) => {
  return ergodic(root)[1];
};

// const root= {
//   val: 1,
//   left: { val: 2, left: null, right: null },
//   right: { val: 3, left: null, right: null },
// }; // 1
const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null,
  },
  right: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null,
  },
}; // 11
console.log(findTilt(root));
```

`node index.js` 返回：

```js
11
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 75/75 cases passed (80 ms)
* Your runtime beats 87.72 % of javascript submissions
* Your memory usage beats 13.33 % of javascript submissions (39.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，开始思考，尝试解题：

> 下面代码未通过，可以过滤，直接看 Submit 结果

```js
const ergodic = (root, val, accu = 0) => {
  if (!root) {
    return [0, 0];
  }
  val = root.val;
  const leftVal = ergodic(root.left, val, accu);
  const rightVal = ergodic(root.right, val, accu);
  accu += leftVal[1] + rightVal[1] + Math.abs(leftVal[0] - rightVal[0]);accu);
  return [val, accu];
};

/**
 * @name 二叉树的坡度
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = (root) => {
  return ergodic(root)[1];
};
```

这时候，上面代码，显示的结果是 10，但是，Submit 提交的结果是 11：

```js
Wrong Answer
12/75 cases passed (N/A)

Testcase
[1,2,3,4,null,5]

Answer
10

Expected Answer
11
```

好生纳闷了一会，没记错啊，的确是 10 啊：(3 - 2) + 4 + 5 = 10。

难道要算上根节点？但是这样的话，题目示例应该返回的结果是 2，而不是 1！

就想不通了，去看下【题解区】和【评论区】。

**然后**，看到官方题解区，就明白了：

https://leetcode-cn.com/problems/binary-tree-tilt/solution/er-cha-shu-de-po-du-by-leetcode/

看来我的中文还没过十级，对这文字不清晰啊，重新写过一份：

```js
/**
 * @name 树的万能公式（变形）
 * @param {Object} root 树
 * @param {Number} accuVal 累积节点值（从最深层次的节点开始）
 * @param {Number} accuTilt 累积的坡度（从最深层次的节点开始）
 */
const ergodic = (root, accuVal = 0, accuTilt = 0) => {
  // 如果为空，则累积节点值和坡度均为 0
  if (!root) {
    return [0, 0];
  }
  // 如果不为空，重新计算累积节点值和坡度
  const left = ergodic(root.left, accuVal, accuTilt);
  const right = ergodic(root.right, accuVal, accuTilt);
  accuVal = root.val + left[0] + right[0];
  accuTilt = left[1] + right[1] + Math.abs(left[0] - right[0]);
  return [accuVal, accuTilt];
};
/**
 * @name 二叉树的坡度
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = (root) => {
  return ergodic(root)[1];
};
```

Submit 提交：

```js
Accepted
* 75/75 cases passed (80 ms)
* Your runtime beats 87.72 % of javascript submissions
* Your memory usage beats 13.33 % of javascript submissions (39.3 MB)
```

感觉对遍历还不是很熟，写得久了一点（天！这仅仅是一道简单题！）

**最后**，讲下题目的理解以及解题思路：

1. 每个树的节点都会有坡度，坡度为 **左子树节点之和 - 右子树节点之和**。
2. 拿我失败的那棵树举例（下图有示例）：
   1. 最底层，产生的坡度均为 0；
   2. 第二层，产生的坡度中，左子树的坡度为 |4 - 0|，右子树的坡度为 |5 - 0|；
   3. 第一层，产生的坡度为 |6 - 8|
3. 最终结果是：0 + 4 + 5 + 2 = 11。

```
        1
    /      \
  2         3
 /  \     /  \
4   null 5  null
```

在一开始的时候，**jsliang** 的理解是 *左子树节点 - 右子树节点*，从而导致结果错误，然后看了官网的图示例后（没有看代码哈），恍然大悟，经过代码调整最终成功！

> 坑爹的又是被示例太少打败了。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
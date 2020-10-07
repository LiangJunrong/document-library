543 - 二叉树的直径（diameter-of-binary-tree）
===

> Create by **jsliang** on **2019-11-11 08:40:04**  
> Recently revised in **2019-11-11 09:24:36**

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
* **题目地址**：https://leetcode-cn.com/problems/diameter-of-binary-tree/
* **题目内容**：

```
给定一棵二叉树，你需要计算它的直径长度。

一棵二叉树的直径长度是任意两个结点路径长度中的最大值。

这条路径可能穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
  
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
 * @name 二叉树的直径
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let deep = 0;
  const ergodic = (root) => {
    if (!root) {
      return 0;
    }
    const leftDepth = ergodic(root.left);
    const rightDepth = ergodic(root.right);
    deep = Math.max(deep, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  ergodic(root);
  return deep;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
}
console.log(diameterOfBinaryTree(root)); // 3
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 106/106 cases passed (68 ms)
* Your runtime beats 97.19 % of javascript submissions
* Your memory usage beats 55 % of javascript submissions (37.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看完题目，盖棺定论：

* 该树的最大直径等于左子树的最大深度 + 右子树的最大深度。

定义完毕，直接躺尸试试：

```js
const diameterOfBinaryTree = (root) => {
  let deep = 0;
  const ergodic = (root) => {
    if (!root) {
      return 0;
    }
    const leftDepth = ergodic(root.left);
    const rightDepth = ergodic(root.right);
    deep = Math.max(deep, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  ergodic(root);
  return deep;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
}

console.log(diameterOfBinaryTree(root)); // 3
```

Submit 提交结果：

```js
Accepted
* 106/106 cases passed (68 ms)
* Your runtime beats 97.19 % of javascript submissions
* Your memory usage beats 55 % of javascript submissions (37.1 MB)
```

满足~

下面说说解法：

1. 定义深度 `deep`。
2. 求出左子树的最大深度和右子树的最大深度
3. `deep` 记录当前的最大直径
4. `return` 左子树或者右子树的最大深度 + 1

这样，我们就完成了这道题的破解啦！

如果小伙伴们有更好的方式，可以评论留言或者直接私聊我~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
993 - 二叉树的堂兄弟节点（cousins-in-binary-tree）
===

> Create by **jsliang** on **2020-01-28 19:02:16**  
> Recently revised in **2020-01-28 19:36:33**

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
* **涉及知识**：树、广度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/cousins-in-binary-tree/
* **题目内容**：

```
在二叉树中，
根节点位于深度 0 处，
每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，
但父节点不同，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root，
以及树中两个不同节点的值 x 和 y。

只有与值 x 和 y 对应的节点是堂兄弟节点时，
才返回 true。否则，返回 false。

示例 1：

    1
   /  \
  2    3
 /
4

输入：root = [1,2,3,4], x = 4, y = 3
输出：false

示例 2：

  1
 /  \
 2   3
  \   \
   4   5

输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true

示例 3：

    1
   /  \
  2    3
   \
    4

输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false
 

提示：

二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cousins-in-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
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
 * @name 二叉树的堂兄弟节点
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = (root, x, y) => {
  // 1. 自定义 xRoot 和 yRoot
  const xRoot = {
    val: x,
    deep: undefined,
    father: undefined,
  };
  const yRoot = {
    val: y,
    deep: undefined,
    father: undefined,
  };
  // 2. 递归 root
  const ergodic = (root, k) => {
    // 2.1 如果这个是空节点（null），直接中止
    if (!root) {
      return;
    }
    // 2.2 深度 k++
    k++;
    // 2.3 如果下一层次的左子树或者右子树等于 x
    if (
      (root.left && root.left.val === x)
      || (root.right && root.right.val === x)
    ) {
      xRoot.deep = k + 1;
      xRoot.father = root.val;
    }
    // 2.4 如果下一层次的左子树或者右子树等于 y
    if (
      (root.left && root.left.val === y)
      || (root.right && root.right.val === y)
    ) {
      yRoot.deep = k + 1;
      yRoot.father = root.val;
    }
    // 2.5 如果 xRoot 和 yRoot 都没有出现，那么就一直遍历
    if (!(xRoot.deep && yRoot.deep)) {
      ergodic(root.left, k);
      ergodic(root.right, k);
    }
    return;
  };
  ergodic(root, -1);
  // 3. 判断最后的 xRoot 和 yRoot 的深度 deep 和父节点 father 即可
  return xRoot.deep === yRoot.deep && xRoot.father !== yRoot.father;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 5,
    left: null,
    right: { val: 6, left: null, right: null },
  },
};

console.log(isCousins(root, 4, 6)); // true
```

`node index.js` 返回：

```js
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 103/103 cases passed (68 ms)
* Your runtime beats 71.93 % of javascript submissions
* Your memory usage beats 47.73 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

警觉要素：

1. 处于相同的深度 `k`。
2. 两者的父节点不同。

示例：

```
    1
   / \
  2   5
 / \   \
3   4   6
```

在这棵树中：

* 【否】2 和 6 不是堂兄弟节点
* 【否】3 和 4 不是堂兄弟节点
* 【是】3 和 6 是堂兄弟节点
* 【是】4 和 6 是堂兄弟节点

这样大家就对堂兄弟节点清晰了，下面开始解题：

> 【第一步】获取深度

```js
const isCousins = (root, x, y) => {
  const ergodic = (root, k) => {
    if (!root) {
      return;
    }
    k++;
    console.log(k);
    ergodic(root.left, k);
    ergodic(root.right, k);
  };
  ergodic(root, -1);
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 5,
    left: null,
    right: { val: 5, left: null, right: null },
  },
};

console.log(isCousins(root, 4, 6));
```

对应的树就是上面说的：

```
    1
   / \
  2   5
 / \   \
3   4   6
```

通过递归函数 `ergodic`，我们可以看到输出：

```js
0
1
2
2
1
2
```

这样，我们先获取到了树的层次。

接着完善 **一下下**，我们就破解了这道题：

> 【第二步】递归破解

```js
const isCousins = (root, x, y) => {
  // 1. 自定义 xRoot 和 yRoot
  const xRoot = {
    val: x,
    deep: undefined,
    father: undefined,
  };
  const yRoot = {
    val: y,
    deep: undefined,
    father: undefined,
  };
  // 2. 递归 root
  const ergodic = (root, k) => {
    // 2.1 如果这个是空节点（null），直接中止
    if (!root) {
      return;
    }
    // 2.2 深度 k++
    k++;
    // 2.3 如果下一层次的左子树或者右子树等于 x
    if (
      (root.left && root.left.val === x)
      || (root.right && root.right.val === x)
    ) {
      xRoot.deep = k + 1;
      xRoot.father = root.val;
    }
    // 2.4 如果下一层次的左子树或者右子树等于 y
    if (
      (root.left && root.left.val === y)
      || (root.right && root.right.val === y)
    ) {
      yRoot.deep = k + 1;
      yRoot.father = root.val;
    }
    // 2.5 如果 xRoot 和 yRoot 都没有出现，那么就一直遍历
    if (!(xRoot.deep && yRoot.deep)) {
      ergodic(root.left, k);
      ergodic(root.right, k);
    }
    return;
  };
  ergodic(root, -1);
  // 3. 判断最后的 xRoot 和 yRoot 的深度 deep 和父节点 father 即可
  return xRoot.deep === yRoot.deep && xRoot.father !== yRoot.father;
};
```

这样，我们就从 0 到 1 的解析了这道题。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
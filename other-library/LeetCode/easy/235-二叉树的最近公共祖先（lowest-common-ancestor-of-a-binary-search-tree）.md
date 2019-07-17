235 - 二叉树的最近公共祖先（lowest-common-ancestor-of-a-binary-search-tree）
===

> Create by **jsliang** on **2019-07-17 10:04:00**  
> Recently revised in **2019-07-17 15:26:00**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 转数组](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树
* **题目地址**：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
* **题目内容**：

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:

root = [6,2,8,0,4,7,9,null,null,3,5]

![图](../../../public-repertory/img/other-algorithm-235-1.png) 

示例 1:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

示例 2:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

说明:
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lowestCommonAncestor = function(root, p, q) {
  const val = root.val;
  const pVal = p.val;
  const qVal = q.val;
  if (pVal > val && qVal > val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < val && qVal < val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
```

* **执行测试**：

> `root`：

```js
const root = {
  val: 6,
  left: {
    val: 2,
    left: { val: 0, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
  },
  right: {
    val: 8,
    left: { val: 7, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};
```

> `p`：

```js
const p = { val: 0, left: null, right: null };
```

> `q`：

```
const q = { val: 5, left: null, right: null };
```

> `return`：

```js
{ val: 2,
  left: { val: 0, left: null, right: null },
  right:
   { val: 4,
     left: { val: 3, left: null, right: null },
     right: { val: 5, left: null, right: null } } }
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 27/27 cases passed (152 ms)
  ✔ Your runtime beats 22.81 % of javascript submissions
  ✔ Your memory usage beats 92.59 % of javascript submissions (43.4 MB)
```

* **解题思路**：

**首先**，看到这题目，思路是乱糟糟的。

有心想下是不是需要后序遍历判断，但是想想又不对。

**然后**，看了下官方的 Java 解法，恍然大悟：

* 这是一棵二叉搜索树。

什么是二叉搜索树？

百度百科的说法是：二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。

怎么通俗解释呢？

![图](../../../public-repertory/img/other-algorithm-235-1.png) 

看图，在节点 `val = 4` 中，左边的节点为 3（即小于 4），右边的节点为 5（即大于 4）。同理，在节点 `val = 6` 中，左边的节点都小于 6，右边的节点都大于 6。

这样，想必小伙伴们就有思路了：

* 如果给出的节点是 `0` 和 `4`，那么先判断它在左子树，因为 `0` 和 `4` 都小于 6。再到节点 `2` 的时候，因为 `0 < 2 < 4`，所以，它们的最近祖先节点为 `2`。
* 如果给出的节点是 `0` 和 `5`，那么先判断它在左子树，因为 `0` 和 `5` 都小于 6。再到节点 `2` 的时候，因为 `0 < 2 < 5`，所以，它们的最近祖先节点为 `2`。
* ……

最后，我们就根据这个提示写出了递归题解：

```js
if (pVal > val && qVal > val) {
  return lowestCommonAncestor(root.right, p, q);
} else if (pVal < val && qVal < val) {
  return lowestCommonAncestor(root.left, p, q);
} else {
  return root;
}
```

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 迭代</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lowestCommonAncestor = function(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;
  while (root) {
    const parentVal = root.val;
    if (pVal > parentVal && qVal > parentVal) {
      root = root.right;
    } else if (pVal < parentVal && qVal < parentVal) {
      root = root.left;
    } else {
      return root;
    }
  }
  return null;
};
```

* **执行测试**：

> `root`：

```js
const root = {
  val: 6,
  left: {
    val: 2,
    left: { val: 0, left: null, right: null },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: { val: 5, left: null, right: null },
    },
  },
  right: {
    val: 8,
    left: { val: 7, left: null, right: null },
    right: { val: 9, left: null, right: null },
  },
};
```

> `p`：

```js
const p = { val: 0, left: null, right: null };
```

> `q`：

```
const q = { val: 5, left: null, right: null };
```

> `return`：

```js
{ val: 2,
  left: { val: 0, left: null, right: null },
  right:
   { val: 4,
     left: { val: 3, left: null, right: null },
     right: { val: 5, left: null, right: null } } }
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 27/27 cases passed (96 ms)
  ✔ Your runtime beats 99.65 % of javascript submissions
  ✔ Your memory usage beats 64.82 % of javascript submissions (43.7 MB)
```

* **解题思路**：

相比于递归，这次使用迭代方式无疑会更加，因为它不仅易解并且效率方面比递归快很多：

> 递归

```js
✔ Accepted
  ✔ 27/27 cases passed (152 ms)
  ✔ Your runtime beats 22.81 % of javascript submissions
  ✔ Your memory usage beats 92.59 % of javascript submissions (43.4 MB)
```

> 迭代

```js
✔ Accepted
  ✔ 27/27 cases passed (96 ms)
  ✔ Your runtime beats 99.65 % of javascript submissions
  ✔ Your memory usage beats 64.82 % of javascript submissions (43.7 MB)
```

至于迭代怎么解题的，**jsliang** 在这里就不做过多解释了，因为它们的判断都是一致的 —— 只要你了解了二叉搜索树的特性！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
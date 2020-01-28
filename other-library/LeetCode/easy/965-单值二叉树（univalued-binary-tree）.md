965 - 单值二叉树（univalued-binary-tree）
===

> Create by **jsliang** on **2020-01-28 11:25:15**  
> Recently revised in **2020-01-28 11:43:29**

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
* **题目地址**：https://leetcode-cn.com/problems/univalued-binary-tree/
* **题目内容**：

```
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 true；否则返回 false。

示例 1：

     1
    / \
  1     1
 / \     \
1   1     1

输入：[1,1,1,1,1,null,1]
输出：true

示例 2：

     2
    / \
  2     2
 / \ 
5   2

输入：[2,2,2,5,2]
输出：false

提示：

给定树的节点数范围是 [1, 100]。
每个节点的值都是整数，范围为 [0, 99] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/univalued-binary-tree
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    
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
 * @name 单值二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const val = root.val;
  let result = true;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val !== val) {
      result = false;
    }
    ergodic(root.left);
    ergodic(root.right);
  }
  ergodic(root);
  return result;
};

const root = {
  val: 2,
  left: {
    val: 2,
    left: { val: 5, left: null, right: null },
    right: { val: 2, left: null, right: null },
  },
  right: { val: 2, left: null, right: null },
};

console.log(isUnivalTree(root));
```

`node index.js` 返回：

```js
false
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 72/72 cases passed (68 ms)
* Your runtime beats 47.73 % of javascript submissions
* Your memory usage beats 55.56 % of javascript submissions (33.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

题目不难，惯例递归和迭代上一遍：

> 递归

```js
var isUnivalTree = function(root) {
  const val = root.val;
  let result = true;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val !== val) {
      result = false;
    }
    ergodic(root.left);
    ergodic(root.right);
  }
  ergodic(root);
  return result;
};
```

递归的思路就是将整棵树都进行遍历，判断当中每一个 `val` 是否和根节点的 `val` 相等即可。

Submit 提交：

```js
Accepted
* 72/72 cases passed (68 ms)
* Your runtime beats 47.73 % of javascript submissions
* Your memory usage beats 55.56 % of javascript submissions (33.9 MB)
```

迭代的思路就更简单了：

> 迭代

```js
const isUnivalTree = (root) => {
  const newRoot = [root];
  const val = root.val;
  while (newRoot.length) {
    const tempRoot = newRoot.pop();
    if (tempRoot.val !== val) {
      return false;
    }
    if (tempRoot.left) {
      newRoot.push(tempRoot.left);
    }
    if (tempRoot.right) {
      newRoot.push(tempRoot.right);
    }
  }
  return true;
};
```

Submit 提交如下：

```js
Accepted
* 72/72 cases passed (64 ms)
* Your runtime beats 71.97 % of javascript submissions
* Your memory usage beats 36.36 % of javascript submissions (34 MB)
```

感觉处理起树的题目，除非变异，否则都是手到擒来，唯手熟而已~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，大佬的代码还是要看看的：

> 两行代码

```js
var isUnivalTree = function(root, val) {
  val === undefined && (val = root.val)
  return !root.left && !root.right ? root.val === val : root.val === val && (root.left ? isUnivalTree(root.left, val) : true) && (root.right ? isUnivalTree(root.right, val) : true)
};
```

Submit 提交如下：

```js
Accepted
* 72/72 cases passed (64 ms)
* Your runtime beats 71.97 % of javascript submissions
* Your memory usage beats 30.3 % of javascript submissions (34 MB)
```

当然，算上 `function` 那行都是 3 行了，大佬骗我，顺手给你优化成 1 行：

```js
const isUnivalTree = (root, val = root.val) => !root.left && !root.right ? root.val === val : root.val === val && (root.left ? isUnivalTree(root.left, val) : true) && (root.right ? isUnivalTree(root.right, val) : true);
```

谁也想不到这道题怎么搞的，哈哈~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
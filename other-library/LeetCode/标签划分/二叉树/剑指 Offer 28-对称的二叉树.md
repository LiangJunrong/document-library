剑指 Offer 28 - 对称的二叉树
===

> Create by **jsliang** on **2020-09-04 13:44:59**  
> Recently revised in **2020-09-04 13:46:43**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 题目](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题思路](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 解题套路](#chapter-four) |

## <a name="chapter-two" id="chapter-two"></a>二 题目

> [返回目录](#chapter-one)

```
请实现一个函数，
用来判断一棵二叉树是不是对称的。

如果一棵二叉树和它的镜像一样，
那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

示例 1：
输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：
输入：root = [1,2,2,null,3,null,3]
输出：false

限制：

0 <= 节点个数 <= 1000

注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

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
var isSymmetric = function(root) {

};
```

根据上面的已知函数，小伙伴们可以先尝试破解本题，确定了自己的答案后再看下面代码。

## <a name="chapter-three" id="chapter-three"></a>三 解题思路

> [返回目录](#chapter-one)

* 递归（未优化）

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
const isSymmetric = (root) => {
  const recursion1 = (root) => {
    if (!root) {
      return '#';
    }
    return root.val + recursion1(root.left) + recursion1(root.right);
  }
  const result1 = recursion1(root);

  const recursion2 = (root) => {
    if (!root) {
      return '#';
    }
    return root.val + recursion2(root.right) + recursion2(root.left);
  };
  const result2 = recursion2(root);

  return result1 === result2;
};

/*
    1
   / \
  2   2
 /     \
3       3
*/
const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: { val: 3, left: null, right: null },
  },
};
console.log(isSymmetric(root));
```

* 递归（优化）

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
const isSymmetric = (root) => {
  // 1. 递归树
  const recursion = (root1, root2) => {
    // 2. 如果两个节点同时为空，则为 true
    if (!root1 && !root2) {
      return true;
    }

    // 3. 如果只有一个节点为空，则为 false
    if (!root1 || !root2) {
      return false;
    }

    // 4. 判断左边和右边是否相等，并且交互判断
    return root1.val === root2.val && recursion(root1.left, root2.right) && recursion(root1.right, root2.left);
  };

  // 5. 返回结果
  return recursion(root, root);
};
```

* 迭代

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.root1 = this.root2 = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  // 1. 设置当前层
  const nowRoot = [root, root];
  
  // 2. 判断当前层是否可以延续
  while (nowRoot.length) {

    // 3. 获取左右部分
    const root1 = nowRoot.pop();
    const root2 = nowRoot.pop();

    // 4. 如果两者是空节点，继续
    if (!root1 && !root2) {
      continue;
    }

    // 5. 如果左边右边只有一个空，或者左边的值不等于右边
    if (!root1 || !root2 || root1.val !== root2.val) {
      return false;
    }

    // 6. 重点：添加值
    nowRoot.push(root1.left);
    nowRoot.push(root2.right);

    nowRoot.push(root1.right);
    nowRoot.push(root2.left);
  }

  // 7. 如果上面没情况发生
  return true;
};
```

## <a name="chapter-four" id="chapter-four"></a>四 套路分析

> [返回目录](#chapter-one)

本题暂未发现任何套路，如果有但是 **jsliang** 后面发现了的话，会在 GitHub 进行补充。

如果小伙伴有更好的思路想法，或者没看懂其中某种解法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
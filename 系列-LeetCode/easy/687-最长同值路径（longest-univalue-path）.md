687 - 最长同值路径（longest-univalue-path）
===

> Create by **jsliang** on **2019-12-15 11:16:04**  
> Recently revised in **2019-12-15 12:27:26**

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
* **涉及知识**：树、递归
* **题目地址**：https://leetcode-cn.com/problems/longest-univalue-path/
* **题目内容**：

```
给定一个二叉树，
找到最长的路径，
这个路径中的每个节点具有相同值。
这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。

示例 1:
输入:
          5
         / \
        4   5
       / \   \
      1   1   5
输出:
2

示例 2:
输入:
          1
         / \
        4   5
       / \   \
      4   4   5
输出:
2

注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。
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
var longestUnivaluePath = function(root) {
    
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
 * @name 最长同值路径
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = (root) => {
  let answer = 0;
  const ergodic = (root) => {
    if (!root) {
      return 0;
    }
    const left = ergodic(root.left);
    const right = ergodic(root.right);
    let leftTimer = 0, rightTimer = 0;
    if (root.left && root.left.val === root.val) {
      leftTimer += left + 1;
    }
    if (root.right && root.right.val === root.val) {
      rightTimer += right + 1;
    }
    answer = Math.max(answer, leftTimer + rightTimer);
    return Math.max(leftTimer, rightTimer);
  };
  ergodic(root);
  return answer;
};

// const root = {
//   val: 5,
//   left: {
//     val: 4,
//     left: { val: 1, left: null, right: null },
//     right: { val: 1, left: null, right: null },
//   },
//   right: {
//     val: 5,
//     left: null,
//     right: { val: 5, left: null, right: null },
//   },
// };
// 2

const root = {
  val: 1,
  left: {
    val: 4,
    left: { val: 4, left: null, right: null },
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 5,
    left: null,
    right: { val: 5, left: null, right: null },
  },
};
// 2

console.log(longestUnivaluePath(root));
```

`node index.js` 返回：

```js
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 71/71 cases passed (204 ms)
* Your runtime beats 74.73 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (51.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看完题目，发现好像题目没有讲到：

* **怎样的路径才是最长路径？**

盲目猜测是同一个值，例如 5，在示例 1 中有 3 个 5 连起来，中间两条线，所以输出 2：

```
示例 1:
输入:
          5
         / \
        4   5
       / \   \
      1   1   5
输出:
2
```

然后在示例 2 中，3 个 4 连起来，中间也是两条线，所以输出 2：

```
示例 2:
输入:
          1
         / \
        4   5
       / \   \
      4   4   5
输出:
2
```

题目贴的标签是【树】和【递归】，所以咱们使用【递归】尝试下：

> 递归解题

```js
const longestUnivaluePath = (root) => {
  let answer = 0;
  const ergodic = (root) => {
    if (!root) {
      return 0;
    }
    const left = ergodic(root.left);
    const right = ergodic(root.right);
    let leftTimer = 0, rightTimer = 0;
    if (root.left && root.left.val === root.val) {
      leftTimer += left + 1;
    }
    if (root.right && root.right.val === root.val) {
      rightTimer += right + 1;
    }
    answer = Math.max(answer, leftTimer + rightTimer);
    return Math.max(leftTimer, rightTimer);
  };
  ergodic(root);
  return answer;
};
```

**好吧，上面答案并不是我写的。**

这点很重要，承认自己不足才能获取更大的进步。

在写这道题的时候，我最终步骤是想到了从下往上走的思路，但是我实现不出来，因为正常递归来说：

* 从上往下想容易，从下往上走难。

所以我去看了下怎么从下往上走，解题思路为：

1. 定义 `ergodic` 遍历树。
2. 定义 `left` 获取左侧树的最长路径，定义 `right` 获取右侧数的最长路径。
3. 如果有左侧树，并且左侧树的值和当前节点的值相等，那么设置 `leftTimer += left + 1`；如果有右侧数，并且右侧数的值和当前节点的值相等，那么设置 `rightTimer += right + 1`。
4. 此时判断外部变量 `answer` 和 `leftTimer + rightTimer` 的最大值，如果有最新值，则替换掉 `answer`。
5. `ergodic` 返回 `leftTimer` 和 `rightTimer` 的最大值（符合题目最长同值路径）。

这样，就解决了这道题。

Submit 提交：

```js
Accepted
* 71/71 cases passed (204 ms)
* Your runtime beats 74.73 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (51.6 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

但是，因为题解来源于官方题解：

* 官方题解：https://leetcode-cn.com/problems/longest-univalue-path/solution/zui-chang-tong-zhi-lu-jing-by-leetcode/

而在题解过程中，`ergodic` 还是出现了一些变量，每次递归都需要初始化，所以我想官方题解应该没有利用好递归的优点，对此进行了一些优化：

```js
const longestUnivaluePath = (root) => {
  let answer = 0;
  const ergodic = (root, val) => {
    if (!root) {
      return 0;
    }
    const left = ergodic(root.left, root.val);
    const right = ergodic(root.right, root.val);
    answer = Math.max(answer, left + right);
    if (root.val === val) {
      return Math.max(left, right) + 1;
    } else {
      return 0;
    }
  };
  ergodic(root);
  return answer;
};
```

曾记得做过的这些树题目中，还是有许多题目需要从下往上走的，所以记住这个套路，那么很多时候都能解决问题。

在这个套路中，我们需要知道的是：

1. 如果没值，则返回 0，如果有值，则返回最大值。
2. `Math.max(left, right)` 会做进一步的递归，如果持续相等，那么 `max` 最大值会一直累加 1。
3. 我们需要一个外部变量 `answer`，因为一棵树中可能出现不止一次的最大值，当然，我们也可以返回一个数组，记录 `[val, answer]`，也是可以的。

Submit 提交：

```js
Accepted
* 71/71 cases passed (208 ms)
* Your runtime beats 65.93 % of javascript submissions
* Your memory usage beats 58.33 % of javascript submissions (52.1 MB)
```

如果你有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
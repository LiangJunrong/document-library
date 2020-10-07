783 - 二叉搜索树节点最小距离（minimum-distance-between-bst-nodes）
===

> Create by **jsliang** on **2020-1-4 18:30:00**  
> Recently revised in **2020-1-4 19:24:37**

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
* **涉及知识**：树、递归
* **题目地址**：https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
* **题目内容**：

```
给定一个二叉搜索树的根结点 root, 
返回树中任意两节点的差的最小值。

示例：

输入: root = [4,2,6,1,3,null,null]
输出: 1
解释:
注意，root是树结点对象(TreeNode object)，而不是数组。

给定的树 [4,2,6,1,3,null,null] 可表示为下图:

          4
        /   \
      2      6
     / \    
    1   3  

最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
注意：

二叉树的大小范围在 2 到 100。
二叉树总是有效的，每个节点的值都是整数，且不重复。
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
var minDiffInBST = function(root) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 二叉搜索树节点最小距离
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = (root) => {
  let min = Number.MAX_SAFE_INTEGER;
  const list = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val) {
      list.push(root.val);
    }
    ergodic(root.left);
    ergodic(root.right);
  };
  ergodic(root);
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] < min) {
      min = list[i + 1] - list[i];
    }
  }
  return min;
};

const root = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: { val: 6, left: null, right: null },
};
console.log(minDiffInBST(root));
```

`node index.js` 返回：

```js
1
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 45/45 cases passed (80 ms)
* Your runtime beats 11.46 % of javascript submissions
* Your memory usage beats 35 % of javascript submissions (35.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，想到的肯定是暴力递归，多快好省~

> 递归

```js
const minDiffInBST = (root) => {
  let min = Number.MAX_SAFE_INTEGER;
  const list = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val) {
      list.push(root.val);
    }
    ergodic(root.left);
    ergodic(root.right);
  };
  ergodic(root);
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] < min) {
      min = list[i + 1] - list[i];
    }
  }
  return min;
};
```

当然，看到这里，任谁都是摇头，太渣了：

1. 通过 `ergodic` 递归了树；
2. 通过 `sort` 进行了从小到大排序；
3. 通过 `for` 进行了两两相比校验。

不信？看 Submit 提交：

```js
Accepted
* 45/45 cases passed (80 ms)
* Your runtime beats 11.46 % of javascript submissions
* Your memory usage beats 35 % of javascript submissions (35.1 MB)
```

OK，知道根源所在，那么我们是不是可以利用上二叉搜索树的特性？

> 中序遍历

```js
const minDiffInBST = (root) => {
  let prev = null,
      result = Number.MAX_SAFE_INTEGER;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    ergodic(root.left);
    if (prev) {
      result = Math.min(result, root.val - prev);
    }
    prev = root.val;
    ergodic(root.right);
  };
  ergodic(root);
  return result;
};
```

为什么说这个方法比前面的好，现在一眼就看得出来了吧？

1. 定义 `prev` 来设置前一个元素；
2. 定义 `result` 来获取结果；
3. 通过中序遍历来遍历二叉搜索树，先走左边 `ergodic(root.left)`，再走中间，最后走右边 `ergodic(root.right)`；

这样，我们就能保证两者是相邻的值最接近的节点啦~

Submit 提交如下：

```js
Accepted
* 45/45 cases passed (60 ms)
* Your runtime beats 93.75 % of javascript submissions
* Your memory usage beats 35 % of javascript submissions (35.1 MB)
```

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
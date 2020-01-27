938 - 二叉搜索树的范围和（range-sum-of-bst）
===

> Create by **jsliang** on **2020-01-27 15:39:53**  
> Recently revised in **2020-01-27 16:16:47**

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
* **题目地址**：https://leetcode-cn.com/problems/range-sum-of-bst/
* **题目内容**：

```
给定二叉搜索树的根结点 root，
返回 L 和 R（含）之间的所有结点的值的和。

二叉搜索树保证具有唯一的值。

示例 1：

输入：root = [10,5,15,3,7,null,18],
L = 7, R = 15
输出：32
示例 2：

输入：root = [10,5,15,3,7,13,18,1,null,6], 
L = 6, R = 10
输出：23

提示：

树中的结点数量最多为 10000 个。
最终的答案保证小于 2^31。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/range-sum-of-bst
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
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
 * @name 二叉搜索树的范围和
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = (root, L, R) => {
  const newRoot = [root];
  let result = 0;
  while (newRoot.length) {
    const tempRoot = newRoot.pop();
    if (tempRoot.val >= L && tempRoot.val <= R) {
      result += tempRoot.val;
    }
    if (tempRoot.left) {
      newRoot.push(tempRoot.left);
    }
    if (tempRoot.right) {
      newRoot.push(tempRoot.right);
    }
  }
  return result;
};

const root = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 15,
    left: null,
    right: { val: 18, left: null, right: null },
  },
};

console.log(rangeSumBST(root, 7, 15)); // 32
```

`node index.js` 返回：

```js
32
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 42/42 cases passed (192 ms)
* Your runtime beats 73.77 % of javascript submissions
* Your memory usage beats 52.47 % of javascript submissions (67.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

仔细看了下题目，发现毫无乐趣：

> 递归

```js
const rangeSumBST = (root, L, R) => {
  let result = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val >= L && root.val <= R) {
      result += root.val;
    }
    ergodic(root.left);
    ergodic(root.right);
  };
  ergodic(root);
  return result;
};
```

题目解析：

* 将所有在闭区间 `[L, R]` 中的值获取即可。

所以就有了上面的题解，Submit 提交如下：

```js
Accepted
* 42/42 cases passed (228 ms)
* Your runtime beats 13.27 % of javascript submissions
* Your memory usage beats 27 % of javascript submissions (70.5 MB)
```

再稍微动动脑子，咱们试试迭代：

> 迭代

```js
const rangeSumBST = (root, L, R) => {
  const newRoot = [root];
  let result = 0;
  while (newRoot.length) {
    const tempRoot = newRoot.pop();
    if (tempRoot.val >= L && tempRoot.val <= R) {
      result += tempRoot.val;
    }
    if (tempRoot.left) {
      newRoot.push(tempRoot.left);
    }
    if (tempRoot.right) {
      newRoot.push(tempRoot.right);
    }
  }
  return result;
};
```

Submit 提交如下：

```js
Accepted
* 42/42 cases passed (192 ms)
* Your runtime beats 73.77 % of javascript submissions
* Your memory usage beats 52.47 % of javascript submissions (67.3 MB)
```

搞定，收工~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，闲来无事，咱们再翻翻官网，另一种递归思路：

* 对树进行深度优先搜索，对于当前节点 `node`，如果 `node.val` 小于等于 `L`，那么只需要继续搜索它的右子树；如果 `node.val` 大于等于 `R`，那么只需要继续搜索它的左子树；如果 `node.val` 在区间 `(L, R)` 中，则需要搜索它的所有子树。

> 深度优先搜索【递归】

```js
const rangeSumBST = (root, L, R) => {
  let ans = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (L <= root.val && root.val <= R) {
      ans += root.val;
    }
    if (L < root.val) {
      ergodic(root.left);
    }
    if (root.val < R) {
      ergodic(root.right);
    }
  };
  ergodic(root);
  return ans;
};
```

相比于 **jsliang** 的递归，减少了一些不必要的开支~

Submit 提交如下：

```js
Accepted
* 42/42 cases passed (192 ms)
* Your runtime beats 73.77 % of javascript submissions
* Your memory usage beats 75.29 % of javascript submissions (67 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
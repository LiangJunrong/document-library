671 - 二叉树中第二小的节点（second-minimum-node-in-a-binary-tree）
===

> Create by **jsliang** on **2019-12-10 07:52:21**  
> Recently revised in **2019-12-10 08:43:40**

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
* **题目地址**：https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/
* **题目内容**：

```
给定一个非空特殊的二叉树，
每个节点都是正数，
并且每个节点的子节点数量只能为 2 或 0。

如果一个节点有两个子节点的话，
那么这个节点的值不大于它的子节点的值。 

给出这样的一个二叉树，
你需要输出所有节点中的第二小的值。

如果第二小的值不存在的话，输出 -1。

示例 1:

输入: 
    2
   / \
  2   5
     / \
    5   7

输出: 5
说明: 最小的值是 2 ，第二小的值是 5 。

示例 2:

输入: 
    2
   / \
  2   2

输出: -1
说明: 最小的值是 2, 但是不存在第二小的值。
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
var findSecondMinimumValue = function(root) {
    
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
 * @name 二叉树中第二小的节点
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = (root) => {
  const result = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    ergodic(root.left);
    ergodic(root.right);
  }
  ergodic(root);
  return [...new Set(result)][1] || -1;
};

const root = {
  val: 2,
  left: { val: 2, left: null, right: null },
  right: {
    val: 5,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(findSecondMinimumValue(root));
```

`node index.js` 返回：

```js
5
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 35/35 cases passed (56 ms)
* Your runtime beats 95 % of javascript submissions
* Your memory usage beats 25 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**肯定有取巧，但咱先暴力破解~**

> ① 暴力破解

```js
const findSecondMinimumValue = (root) => {
  const result = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    ergodic(root.left);
    ergodic(root.right);
  }
  ergodic(root);
  return [...new Set(result.sort((a, b) => a - b))][1] || -1;
};
```

思路相当简单呢：

1. 通过 `ergodic` 遍历获取所有节点。
2. 通过 `result.sort((a, b) => a - b)` 进行从小到大排序。
3. 通过 `[...new Set(result)]` 来进行去重。
4. 通过 `result[1] || -1` 来判断是否有结果，有就输出结果，没有就输出 `-1`。

Submit 提交：

```js
Accepted
* 35/35 cases passed (56 ms)
* Your runtime beats 95 % of javascript submissions
* Your memory usage beats 25 % of javascript submissions (33.8 MB)
```

enm...感觉效率好像蛮好的~

> ② 递归优化

```js
const findSecondMinimumValue = (root) => {
  const firstMinimun = root.val;
  let secondMinimun;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.val > firstMinimun && !secondMinimun) {
      secondMinimun = root.val;
      return;
    }
    if (root.val < secondMinimun && secondMinimun && root.val !== firstMinimun) {
      secondMinimun = root.val;
      return;
    }
    ergodic(root.left);
    ergodic(root.right);
  }
  ergodic(root);
  return secondMinimun || -1;
};
```

尝试按照题目的思路破解，结果可能是我没想好，感觉没那么好：

```js
Accepted
* 35/35 cases passed (52 ms)
* Your runtime beats 97.5 % of javascript submissions
* Your memory usage beats 6.25 % of javascript submissions (34.2 MB)
```

这一点如果你有思路，欢迎评论留言~

再尝试一下迭代，结束本次题目解析：

> 迭代解法

```js
const findSecondMinimumValue = (root) => {
  const newRoot = [root];
  const result = [];
  while (newRoot.length) {
    const tempRoot = newRoot.pop();
    result.push(tempRoot.val)
    if (tempRoot.left) {
      newRoot.push(tempRoot.left);
    }
    if (tempRoot.right) {
      newRoot.push(tempRoot.right);
    }
  }
  return [...new Set(result.sort((a, b) => a - b))][1] || -1;;
};
```

Submit 提交：

```js
Accepted
* 35/35 cases passed (64 ms)
* Your runtime beats 81.25 % of javascript submissions
* Your memory usage beats 12.5 % of javascript submissions (34 MB)
```

那么，更多的等你来秀啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
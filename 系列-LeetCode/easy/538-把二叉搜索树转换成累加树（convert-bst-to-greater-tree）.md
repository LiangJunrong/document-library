538 - 把二叉搜索树转换成累加树（convert-bst-to-greater-tree）
===

> Create by **jsliang** on **2019-11-9 19:15:22**  
> Recently revised in **2019-11-9 20:17:43**

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
* **题目地址**：https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
* **题目内容**：

```
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)。

使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

例如：

输入: 二叉搜索树:
    5
  /   \
 2     13

输出: 转换为累加树:
   18
  /   \
20     13
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 把二叉搜索树转换成累加树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = (root) => {
  const rootList = [];
  const ergodic = (param) => {
    if (!param.root) {
      return;
    }
    // 收集树元素
    if (param.isCollect) {
      rootList.push(param.root.val);
    }
    // 累加树元素
    if (param.isCompute) {
      rootList.filter(item => item > param.root.val).forEach(item => param.root.val += item);
    }
    ergodic({ root: param.root.left, isCompute: param.isCompute, isCollect: param.isCollect });
    ergodic({ root: param.root.right, isCompute: param.isCompute, isCollect: param.isCollect });
  };
  ergodic({
    root,
    isCompute: false, // 非计算模式
    isCollect: true, // 收集模式
  });
  ergodic({
    root,
    isCompute: true, // 计算模式
    isCollect: false, // 非收集模式
  })
  return root;
};

// const root = {
//   val: 5,
//   left: { val: 2, left: null, right: null },
//   right: { val: 13, left: null, right: null },
// };
const root = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(convertBST(root));
```

`node index.js` 返回：

```js
{ val: 5,
  left: { val: 6, left: null, right: null },
  right: { val: 3, left: null, right: null } }
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 212/212 cases passed (632 ms)
* Your runtime beats 5.6 % of javascript submissions
* Your memory usage beats 6.9 % of javascript submissions (50.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，日常惯例，周末午觉醒来，一切暴力了事：

```js
/**
 * @name 把二叉搜索树转换成累加树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = (root) => {
  const rootList = [];
  const ergodic = (param) => {
    if (!param.root) {
      return;
    }
    // 收集树元素
    if (param.isCollect) {
      rootList.push(param.root.val);
    }
    // 累加树元素
    if (param.isCompute) {
      rootList.filter(item => item > param.root.val).forEach(item => param.root.val += item);
    }
    ergodic({ root: param.root.left, isCompute: param.isCompute, isCollect: param.isCollect });
    ergodic({ root: param.root.right, isCompute: param.isCompute, isCollect: param.isCollect });
  };
  ergodic({
    root,
    isCompute: false, // 非计算模式
    isCollect: true, // 收集模式
  });
  ergodic({
    root,
    isCompute: true, // 计算模式
    isCollect: false, // 非收集模式
  })
  return root;
};

// const root = {
//   val: 5,
//   left: { val: 2, left: null, right: null },
//   right: { val: 13, left: null, right: null },
// };
const root = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(convertBST(root));
```

**然后**，得到结果：

```js
Accepted
* 212/212 cases passed (632 ms)
* Your runtime beats 5.6 % of javascript submissions
* Your memory usage beats 6.9 % of javascript submissions (50.7 MB)
```

**最后**，整理下思路：

1. 第一次遍历，是收集模式，即将树的所有元素收集到 `rootList` 中。
2. 第二次遍历，是计算模式，即将树的每个节点，和 `rootList` 中的值进行比较，将它和 `rootList` 中所有比它大的值进行想加。
3. 在 `ergodic` 函数体中，我们使用了 `Object` 的形式进行参数传递，以方便了解参数，虽然还是不怎么好看~

这样，我们就暴力破解了这道题。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，精益求精，一开始我的想法是，能不能直接一次性把所有值搞出来，然后累加，所以我还是求解下【题解】区和【评论】区，看看有没有更好的方法~

> 利用二叉搜索树解题

```js
const convertBST = (root) => {
  let sum = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    ergodic(root.right);
    sum += root.val;
    root.val = sum;
    ergodic(root.left);
  }
  ergodic(root);
  return root;
};
```

submit 提交：

```js
Accepted
* 212/212 cases passed (104 ms)
* Your runtime beats 84.8 % of javascript submissions
* Your memory usage beats 75.86 % of javascript submissions (39.9 MB)
```

官方题解，最为致命。

这种解法来自官方题解：https://leetcode-cn.com/problems/convert-bst-to-greater-tree/solution/ba-er-cha-sou-suo-shu-zhuan-huan-wei-lei-jia-shu-3/

思想非常秒，是我的忽略：

1. 这是一颗二叉搜索树，所以右子树是大于左子树的，那么我们肯定先走右边！
2. 走完右边后，我们的值就累积起来了，再走左边。

拿题目例子说：

```js
    5
  /   \
 2     13
```

1. 先走到 13，然后 `sum = 13`。
2. 再走到 5，然后 `sum = 18`。
3. 最后走到 2，然后 `sum = 20`。

秒啊~

> 官方题解下面还有迭代和反序中序等方式，如果小伙伴们感兴趣，可以去瞅瞅，或者你有属于自己的想法，欢迎评论留言或者私聊我吐槽~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
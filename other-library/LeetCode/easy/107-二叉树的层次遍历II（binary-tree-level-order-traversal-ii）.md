107 - 二叉树的层次遍历II（binary-tree-level-order-traversal-ii）
===

> Create by **jsliang** on **2019-06-14 17:56:48**  
> Recently revised in **2019-6-14 22:19:59**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树、广度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
* **题目内容**：

```
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其自底向上的层次遍历为：
[
  [15,7],
  [9,20],
  [3]
]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let result = [];
  let ergodic = function(root, depth) {
    if (!root) {
      return;
    }
    if (root.val != null) {
      if (!result[depth]) {
        result[depth] = [];
      }
      result[depth] = [root.val, ...result[depth]];
      depth += 1;
      ergodic(root.right, depth);
      ergodic(root.left, depth);
    }
  };
  ergodic(root, 0);
  return result.reverse();
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* 参数 `root`：

```js
let root = {
  val: 3,
  left: { val: 9, left: null, right: null, },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
```

* 返回值 `return`：

```js
[ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 34/34 cases passed (88 ms)
  ✔ Your runtime beats 86.53 % of javascript submissions
  ✔ Your memory usage beats 5.59 % of javascript submissions (37 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

又到了每日解题

**首先**，如果 `root` 是空的话，就返回 `[]`。

```js
if (!root) {
  return [];
}
```

**然后**，我们设置 `result` 来返回结果。

```js
let result = [];
```

**接着**，我们开始递归之旅：

* 步骤 1：如果节点没有下一个了，那么我们终止递归。

```js
if (!root) {
  return;
}
```

* 步骤 2：如果 `root.val` 存在值，那么我们设置 `result`：

```js
if (!result[depth]) {
  result[depth] = [];
}
result[depth] = [root.val, ...result[depth]];
```

小伙伴们可能比较在意这两段 JS 的作用。

```js
  3
 / \
9  20
  /  \
 15   7
```

假设，我们现在 `result: []`，我们递归第一遍，那么 `result[1]` 是不是要开辟一个数组空间，即：`result: [[]]`。然后通过 `[a, ...b]` 的形式，将数组扩展开来，即：`[3, ...[]]`，结果自然而然就是 `[3]` 了，所以 `result` 变成：`result: [[3]]`。

当我们递归第二遍的时候，我们先遍历的是右节点，故 `result:[[3], [20]]`……以此递归：

```js
[]
[ [ 3 ] ]
[ [ 3 ], [ 20 ] ]
[ [ 3 ], [ 20 ], [ 7 ] ]
[ [ 3 ], [ 20 ], [ 15, 7 ] ]
```

**最后**，我们通过 `return result.reverse()`，将数组反转并返回出去，从而得到倒序结果：

```js
[ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
```

我们就完成了对应的攻略。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
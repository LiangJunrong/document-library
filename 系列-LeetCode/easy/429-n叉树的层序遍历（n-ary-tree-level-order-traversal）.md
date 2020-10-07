429 - n叉树的层序遍历（n-ary-tree-level-order-traversal）
===

> Create by **jsliang** on **2019-07-25 19:16:54**  
> Recently revised in **2019-09-18 14:04:57**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树、广度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
* **题目内容**：

```
给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

例如，给定一个 3叉树 :

      1
    /   \
  3   2   4
 / \
5   6

返回其层序遍历:

[
  [1],
  [3,2,4],
  [5,6]
]
 

说明:

树的深度不会超过 1000。
树的节点总数不会超过 5000。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
const levelOrder = (root, deep = -1, result = []) => {
  if (!root) {
    return [];
  }
  deep++;
  if (!result[deep]) {
    result[deep] = [root.val];
  } else {
    result[deep].push(root.val);
  }
  for (let i = 0; i < root.children.length; i++) {
    levelOrder(root.children[i], deep, result);
  }
  return result;
}
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `root`：

```js
const root = {
  val: 1,
  $id: 1,
  children: [{
    val: 3,
    $id: 2,
    children: [{
      val: 5,
      $id: 5,
      children: [],
    }, {
      val: 6,
      $id: 6,
      children: [],
    }],
  }, {
    val: 2,
    $id: 3,
    children: [],
  }, {
    val: 4,
    $id: 4,
    children: [],
  }],
};
```

* `return`：

```js
[ [ 1 ], [ 3, 2, 4 ], [ 5, 6 ] ]
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 36/36 cases passed (908 ms)
  ✔ Your runtime beats 94.22 % of javascript submissions
  ✔ Your memory usage beats 5.26 % of javascript submissions (87.7 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，看到树，不要管是什么树，我们先回想公式：

```js
const ergodic = (root) => {
  if (!root) {
    return;
  }
  ergodic(root.left);
  ergodic(root.right);
}
```

**然后**，现在它变得高级了，要做 `n` 叉树，那么我们就：

```js
const levelOrder = (root) => {
  let result = [];
  const ergodic = (root, deep) => {
    if (!root) {
      return;
    }
    deep++;
    if (!result[deep]) {
      result[deep] = [root.val];
    } else {
      result[deep].push(root.val);
    }
    for (let i = 0; i < root.children.length; i++) {
      ergodic(root.children[i], deep);
    }
  }
  ergodic(root, -1);
  return result;
};
```

1. 定义 `result` 来接收最终成果。
2. 定义 `ergodic` 来遍历树。它接受两个参数：`root` 表示为树当前节点；`deep` 表示树的层级。
3. 调用 `ergodic(root, -1)` 初始化值。
4. 每次递归，`deep` 进行 `+1` 操作，表明树又深了一层。
5. 如果当前树深度下，`result[deep]` 是空，那么我们就需要初始化该 `result[deep]` 的值为 `[root.val]`；如果不为空，则直接使用 `push()` 方法。
6. 遍历当前树所有的子节点，直至结束。 

光说小伙伴们可能懵逼，我们打印下遍历：

```js
------
{ '$id': 1,
  children:
   [ { '$id': 2, children: [Array], val: 10 },
     { '$id': 5, children: [Array], val: 3 } ],
  val: 1 }
0
------
{ '$id': 2,
  children:
   [ { '$id': 3, children: [], val: 5 },
     { '$id': 4, children: [], val: 0 } ],
  val: 10 }
1
------
{ '$id': 3, children: [], val: 5 }
2
------
{ '$id': 4, children: [], val: 0 }
2
------
{ '$id': 5,
  children: [ { '$id': 6, children: [], val: 6 } ],
  val: 3 }
1
------
{ '$id': 6, children: [], val: 6 }
2
```

**接着**，我们就可以看到最终成果啦：

```js
[ [ 1 ], [ 10, 3 ], [ 5, 0, 6 ] ]
```

成果破解本题。

**最后**，我们再完善下题解，优化优化：

```js
const levelOrder = (root, deep = -1, result = []) => {
  if (!root) {
    return [];
  }
  deep++;
  if (!result[deep]) {
    result[deep] = [root.val];
  } else {
    result[deep].push(root.val);
  }
  for (let i = 0; i < root.children.length; i++) {
    levelOrder(root.children[i], deep, result);
  }
  return result;
}
```

Submit 提交：

```js
✔ Accepted
  ✔ 36/36 cases passed (908 ms)
  ✔ Your runtime beats 94.22 % of javascript submissions
  ✔ Your memory usage beats 5.26 % of javascript submissions (87.7 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
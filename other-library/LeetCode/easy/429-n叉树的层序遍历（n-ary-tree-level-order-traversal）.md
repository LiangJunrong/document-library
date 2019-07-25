429 - n叉树的层序遍历（n-ary-tree-level-order-traversal）
===

> Create by **jsliang** on **2019-07-25 19:16:54**  
> Recently revised in **2019-07-25 19:16:58**

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
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

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

```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. 

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

```js
/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

const root = {
  $id: 1,
  children: [{
    $id: 2,
    children: [{
      $id: 3,
      children: [],
      val: 5
    }, {
      $id: 4,
      children: [],
      val: 0
    }],
    val: 10
  }, {
    $id: 5,
    children: [{
      $id: 6,
      children: [],
      val: 6
    }],
    val: 3
  }],
  val: 1
};

const levelOrder = (root) => {
  let result = [];
  const ergodic = (root, deep) => {
    if (!root) {
      return '!#';
    }
    deep++;
    console.log('------');
    console.log(root);
    console.log(deep);
    let temp = [];
    if (temp.length) {
      result[deep].push(root.val);
    }
    for (let i = 0; i < root.children.length; i++) {
      ergodic(root.children[i], deep);
    }
  }
  ergodic(root, 0);
  return result;
};

console.log(levelOrder(root));
```

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)



---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
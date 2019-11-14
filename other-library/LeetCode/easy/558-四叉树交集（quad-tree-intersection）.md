558 - 四叉树交集（quad-tree-intersection）
===

> Create by **jsliang** on **2019-11-14 08:42:39**  
> Recently revised in **2019-11-14 10:33:30**

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
* **题目地址**：https://leetcode-cn.com/problems/quad-tree-intersection/
* **题目内容**：

```
四叉树是一种树数据，其中每个结点恰好有四个子结点：
  topLeft、topRight、bottomLeft 和 bottomRight。
  
四叉树通常被用来划分一个二维空间，递归地将其细分为四个象限或区域。

我们希望在四叉树中存储 True/False 信息。

四叉树用来表示 N * N 的布尔网格。

对于每个结点, 它将被等分成四个孩子结点直到这个区域内的值都是相同的。

每个节点都有另外两个布尔属性：isLeaf 和 val。

当这个节点是一个叶子结点时 isLeaf 为真。

val 变量储存叶子结点所代表的区域的值。

例如，下面是两个四叉树 A 和 B：

A:
+-------+-------+   T: true
|       |       |   F: false
|   T   |   T   |
|       |       |
+-------+-------+
|       |       |
|   F   |   F   |
|       |       |
+-------+-------+
topLeft: T
topRight: T
bottomLeft: F
bottomRight: F

B:               
+-------+---+---+
|       | F | F |
|   T   +---+---+
|       | T | T |
+-------+---+---+
|       |       |
|   T   |   F   |
|       |       |
+-------+-------+
topLeft: T
topRight:
     topLeft: F
     topRight: F
     bottomLeft: T
     bottomRight: T
bottomLeft: T
bottomRight: F
 

你的任务是实现一个函数

该函数根据两个四叉树返回表示这两个四叉树的逻辑或(或并)的四叉树。

A:                 B:                 C (A or B):
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       | F | F |  |       |       |
|   T   |   T   |  |   T   +---+---+  |   T   |   T   |
|       |       |  |       | T | T |  |       |       |
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       |       |  |       |       |
|   F   |   F   |  |   T   |   F   |  |   T   |   F   |
|       |       |  |       |       |  |       |       |
+-------+-------+  +-------+-------+  +-------+-------+
 

提示：

A 和 B 都表示大小为 N * N 的网格。
N 将确保是 2 的整次幂。

如果你想了解更多关于四叉树的知识，
你可以参考 https://en.wikipedia.org/wiki/Quadtree 这个页面。

逻辑或的定义如下：
如果 A 为 True ，
或者 B 为 True ，
或者 A 和 B 都为 True，
则 "A 或 B" 为 True。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js

```

`node index.js` 返回：

```js

```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js

```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，先看题目，似懂非懂，那么只有一个法子：

* **以身试法**。

直接提交 Submit 看看它传进来的数据结构是怎样的：

```js
const quadTree1 = {
  "$id": "1",
  "isLeaf": false,
  "val": true,
  "bottomLeft": {
    "$id": "4",
    "isLeaf": true,
    "val": false,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "bottomRight": {
    "$id": "5",
    "isLeaf": true,
    "val": false,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "topLeft": {
    "$id": "2",
    "isLeaf": true,
    "val": true,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "topRight": {
    "$id": "3",
    "isLeaf": true,
    "val": true,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
}
const quadTree2 = {
  "$id": "1",
  "isLeaf": false,
  "val": true,
  "bottomLeft": {
    "$id": "8",
    "isLeaf": true,
    "val": true,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "bottomRight": {
    "$id": "9",
    "isLeaf": true,
    "val": false,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "topLeft": {
    "$id": "2",
    "isLeaf": true,
    "val": true,
    "bottomLeft": null,
    "bottomRight": null,
    "topLeft": null,
    "topRight": null,
  },
  "topRight": {
    "$id": "3",
    "isLeaf": false,
    "val": true,
    "bottomLeft": {
      "$id": "6",
      "isLeaf": true,
      "val": true,
      "bottomLeft": null,
      "bottomRight": null,
      "topLeft": null,
      "topRight": null,
    },
    "bottomRight": {
      "$id": "7",
      "isLeaf": true,
      "val": true,
      "bottomLeft": null,
      "bottomRight": null,
      "topLeft": null,
      "topRight": null,
    },
    "topLeft": {
      "$id": "4",
      "isLeaf": true,
      "val": false,
      "bottomLeft": null,
      "bottomRight": null,
      "topLeft": null,
      "topRight": null,
    },
    "topRight": {
      "$id": "5",
      "isLeaf": true,
      "val": false,
      "bottomLeft": null,
      "bottomRight": null,
      "topLeft": null,
      "topRight": null,
    },
  },
}
```

OK，明白了，尝试解题：

```js
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
const intersect = (quadTree1, quadTree2) => {
  const ergodic = (tree) => {
    if (!tree) {
      return '';
    }
    return '!'
      + tree.val
      + ergodic(tree.bottomLeft)
      + ergodic(tree.bottomRight)
      + ergodic(tree.topLeft)
      + ergodic(tree.topRight);
  };
  console.log(ergodic(quadTree1));
  console.log(ergodic(quadTree2));
};
```

> 注：叶子节点即下面没有更深层次节点的最终节点。

现在，将这两棵树都遍历了：

> node index.js

```
!true!false!false!true!true
!true!true!false!true!true!true!true!false!false
```

那么最重要的来了：**取交集**。

……好吧，突然发现今天时间真的不够，折腾到接近开会才发现还没有完全思路（中间写了工作周报、看了插座学院、跟产品聊了会……）。

！回来再搞！

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

……

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
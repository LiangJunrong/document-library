112 - 路径总和（path-sum）
===

> Create by **jsliang** on **2019-6-26 07:43:40**  
> Recently revised in **2019-6-26 09:09:08**

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
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 进一步思考](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树、深度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/path-sum/
* **题目内容**：

```
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (!root.left && !root.right) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `sum`：`18`
* `root`：

```js
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null },
    }
  }
}
```

* `return`：

```js
true
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 114/114 cases passed (96 ms)
  √ Your runtime beats 91.36 % of javascript submissions
  √ Your memory usage beats 24.14 % of javascript submissions (37.3 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，我们尝试打印下递归路线：

```js
// root：
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// 
// sum：18
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  console.log('------');
  console.log(root);
  console.log(sum);
  if (!root.left && !root.right) {
    return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
```

**然后**，其结果为：

```js
------
{ val: 5,
  left:
   { val: 4,
     left: { val: 11, left: [Object], right: [Object] },
     right: null },
  right:
   { val: 8,
     left: { val: 13, left: null, right: null },
     right: { val: 4, left: null, right: [Object] } } }
13
------
{ val: 4,
  left:
   { val: 11,
     left: { val: 7, left: null, right: null },
     right: { val: 2, left: null, right: null } },
  right: null }
9
------
{ val: 11,
  left: { val: 7, left: null, right: null },
  right: { val: 2, left: null, right: null } }
-2
------
{ val: 7, left: null, right: null }
-9
------
{ val: 2, left: null, right: null }
-4
------
{ val: 8,
  left: { val: 13, left: null, right: null },
  right:
   { val: 4,
     left: null,
     right: { val: 1, left: null, right: null } } }
5
------
{ val: 13, left: null, right: null }
-8
------
{ val: 4,
  left: null,
  right: { val: 1, left: null, right: null } }
1
------
{ val: 1, left: null, right: null }
0
```

**最后**，看到这里，小伙伴就清楚了，这道题的解题思路！

## <a name="chapter-seven" id="chapter-seven">七 进一步思考</a>

> [返回目录](#chapter-one)

有时候，很多小伙伴会说：**哇，jsliang 又破解了一题，然而我看到题目就头痛！**

其实，**jsliang** 有时候也感到烦恼，因为有些题目，非得看题解。

就好比目前这题，一开始我的思路跟题解是反过来的：

```js
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
const sum = 22
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null },
    }
  }
}

var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }
  let index = 0;
  let arr = [];
  let ergodic = function(root) {
    console.log('------');
    console.log(root);
    console.log(arr);
    if (!root) {
      return 0;
    }
    if (!arr[index]) {
      arr[index] = 0;
    }
    arr[index] += root.val;
    if (!root.left && !root.right) {
      // 找到叶子节点，开始逆推
      index += 1;
      return arr[index];
    }
    return ergodic(root.left) + ergodic(root.right);
  }
  ergodic(root);
};

hasPathSum(root, sum);
```

结果打印：

```js
------
{ val: 5,
  left:
   { val: 4,
     left: { val: 11, left: [Object], right: [Object] },
     right: null },
  right:
   { val: 8,
     left: { val: 13, left: null, right: null },
     right: { val: 4, left: null, right: [Object] } } }
[]
------
{ val: 4,
  left:
   { val: 11,
     left: { val: 7, left: null, right: null },
     right: { val: 2, left: null, right: null } },
  right: null }
[ 5 ]
------
{ val: 11,
  left: { val: 7, left: null, right: null },
  right: { val: 2, left: null, right: null } }
[ 9 ]
------
{ val: 7, left: null, right: null }
[ 20 ]
------
{ val: 2, left: null, right: null }
[ 27 ]
------
null
[ 27, 2 ]
------
{ val: 8,
  left: { val: 13, left: null, right: null },
  right:
   { val: 4,
     left: null,
     right: { val: 1, left: null, right: null } } }
[ 27, 2 ]
------
{ val: 13, left: null, right: null }
[ 27, 2, 8 ]
------
{ val: 4,
  left: null,
  right: { val: 1, left: null, right: null } }
[ 27, 2, 21 ]
------
null
[ 27, 2, 21, 4 ]
------
{ val: 1, left: null, right: null }
[ 27, 2, 21, 4 ]
```

是的，这份遍历节点的，不完善，我想统计每个分支的和，但它遍历了一遍所有节点，却没做到统计和。

这时候，就涉及到知识盲区了，我知道有 4 条分支，但是如何将 4 条分支统计起来呢？为什么我可以求到所有节点的和，以及知道有 4 条分支，却不能统计 4 条分支的和呢？

抱着这种好奇心，我翻开了题解……

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
404 - 左叶子之和（sum-of-left-leaves）
===

> Create by **jsliang** on **2019-7-25 08:17:01**  
> Recently revised in **2019-7-25 08:53:31**

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
* **涉及知识**：树
* **题目地址**：https://leetcode-cn.com/problems/sum-of-left-leaves/
* **题目内容**：

```
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val;
    }
    return ergodic(root.right) + ergodic(root.left);
  }
  ergodic(root);
  return sum;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `root`：

```js
const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};
```

* `return`：

```js
24
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 102/102 cases passed (84 ms)
  √ Your runtime beats 70.87 % of javascript submissions
  √ Your memory usage beats 91.67 % of javascript submissions (33.9 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，咱再写一次树的遍历套路：

```js
const ergodic = function(root) {
  if (!root) {
    return '!#';
  }
  return '!' + root.val + ergodic(root.left) + ergodic(root.right);
}
```

**然后**，咱尝试一下破解：

```js
const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.left) {
      sum += root.left.val;
    }
    return ergodic(root.right) + ergodic(root.left);
  }
  ergodic(root);
  return sum;
};
```

Submit 提交后提示：

```js
× Wrong Answer
  × 31/102 cases passed (N/A)
  × testcase: '[1,2,3,4,5]'
  × answer: 6
  × expected_answer: 4
  × stdout:
```

它的意思是：**我们只要叶子的和，不是需要所有左节点的和**。

所以，在下面这种结构中，我们的代码就错了。

```js
const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
};
```

OK，那么我们优化下代码再提交尝试：

```js
const sumOfLeftLeaves = (root) => {
  let sum = 0;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val;
    }
    return ergodic(root.right) + ergodic(root.left);
  }
  ergodic(root);
  return sum;
};
```

Submit 提交结果：

```js
√ Accepted
  √ 102/102 cases passed (84 ms)
  √ Your runtime beats 70.87 % of javascript submissions
  √ Your memory usage beats 91.67 % of javascript submissions (33.9 MB)
```

**最后**，我们尝试优化下代码：

```js
const sumOfLeftLeaves = (root, left) => {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right && left) {
    return root.val;
  }
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};
```

## <a name="chapter-seven" id="chapter-seven">七 进一步思考</a>

> [返回目录](#chapter-one)

虽然我们使用递归遍历树屡试不爽。但是，如果我们能尝试更多方法，例如迭代，相信我们能逐渐丰富我们的思维模式，从而在面对问题的时候能尝试各种不同的方法求解。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
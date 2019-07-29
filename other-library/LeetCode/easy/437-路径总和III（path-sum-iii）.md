437 - 路径总和III（path-sum-iii）
===

> Create by **jsliang** on **2019-07-29 11:25:06**  
> Recently revised in **2019-07-29 11:25:09**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 双重递归](#chapter-three-one) |
| &emsp;[3.2 解法 - 单次递归](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树
* **题目地址**：https://leetcode-cn.com/problems/path-sum-iii/
* **题目内容**：

```
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 双重递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
const pathSum = (root, sum) => {
  let count = 0;
  const ergodic = (root, num) => {
    if (!root) {
      return;
    }
    num -= root.val;
    if (num === 0) {
      count++;
    }
    ergodic(root.left, num);
    ergodic(root.right, num);
  }
  const dfs = (root, num) => {
    if (!root) {
      return;
    }
    ergodic(root, num);
    dfs(root.left, num);
    dfs(root.right, num);
  }
  dfs(root, sum);
  return count;
};
```

* **执行测试**：

> `root`：

```js
const root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: { val: 3, left: null, right: null },
      right: { val: -2, left: null, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  },
  right: {
    val: -3,
    left: null,
    right: { val: 11, left: null, right: null },
  }
}
```

> `sum`：

```js
const sum = 8;
```

> `return`：

```js
3
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 126/126 cases passed (132 ms)
  ✔ Your runtime beats 66.92 % of javascript submissions
  ✔ Your memory usage beats 12.5 % of javascript submissions (37.3 MB)
```

* **解题思路**：

**首先**，这道题可以理解为较接近中等难度的题，如果没做出来不要焦虑。

**然后**，咱回顾下树的广度遍历原则：

```js
const ergodic = (root) => {
  if (!root) {
    return '!#';
  }
  return '!' + root.val + ergodic(root.left) + ergodic(root.right);
}
```

假设我们传入的 `root` 为本题例子中的参数：

> root

```js
const root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: { val: 3, left: null, right: null },
      right: { val: -2, left: null, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  },
  right: {
    val: -3,
    left: null,
    right: { val: 11, left: null, right: null },
  }
}
```

那么结果会返回：

```js
!10!5!3!3!#!#!-2!#!#!2!#!1!#!#!-3!#!11!#!#
```

很好，这样我们就清楚了从根节点开始的递归形态广度遍历。

**接着**，我们分析下题意：

1. 我们需要广度遍历每个节点。
2. 我们需要从每个节点开始，依次相加得到结果 `sum`，或者让 `sum` 一直减去每个节点的值，得到 0 的时候，表明找到了一条方式。
3. 我们将最终得到的所有方式给返回出去就行了。

所以我们有了代码：

```js
const pathSum = (root, sum) => {
  let count = 0;
  const ergodic = (root, num) => {
    if (!root) {
      return;
    }
    num -= root.val;
    console.log(num);
    if (num === 0) {
      count++;
    }
    ergodic(root.left, num);
    ergodic(root.right, num);
  }
  const dfs = (root, num) => {
    if (!root) {
      return;
    }
    console.log(root);
    ergodic(root, num);
    dfs(root.left, num);
    dfs(root.right, num);
  }
  dfs(root, sum);
  return count;
};
```

看好 `console.log()` 的位置了，因为我们会打印出来证明下我们的结论：

```js
------
{ val: 10,
  left:
   { val: 5,
     left: { val: 3, left: [Object], right: [Object] },
     right: { val: 2, left: null, right: [Object] } },
  right:
   { val: -3,
     left: null,
     right: { val: 11, left: null, right: null } } }
-2
-7
-10
-13
-8
-9
-10
1
-10
------
{ val: 5,
  left:
   { val: 3,
     left: { val: 3, left: null, right: null },
     right: { val: -2, left: null, right: null } },
  right:
   { val: 2,
     left: null,
     right: { val: 1, left: null, right: null } } }
3
0
-3
2
1
0
------
{ val: 3,
  left: { val: 3, left: null, right: null },
  right: { val: -2, left: null, right: null } }
5
2
7
------
{ val: 3, left: null, right: null }
5
------
{ val: -2, left: null, right: null }
10
------
{ val: 2,
  left: null,
  right: { val: 1, left: null, right: null } }
6
5
------
{ val: 1, left: null, right: null }
7
------
{ val: -3,
  left: null,
  right: { val: 11, left: null, right: null } }
11
0
------
{ val: 11, left: null, right: null }
-3
3
```

可以看到的是，通过双重递归，我们将每个节点都进行了一次广度遍历，最终得到了每个节点的情况。

如果计算的结果值为 0，证明是可以有的，那么 `count++`。

**最后**，我们将 `count` 的数字返回出去，成功解题。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 单次递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var pathSum = function (root, sum) {
  if (!root) {
    return 0;
  }
  let count = 0;
  let stack = [];
  let dfs = function (root, cur) {
    // 当前路径和等于从根节点到此节点的 val 和
    let curSum = cur + root.val;
    // 遍历栈，子路径和 = 根到此节点的路径和 - 根到父节点的路径和
    if (curSum === sum) {
      count++;
    }
    for (let i = 0; i < stack.length; i++) {
      if (curSum - stack[i] === sum)
        count++;
    }
    // 当前路径和入栈备用
    stack.push(curSum);
    // 用完了就弹出
    if (root.left) {
      dfs(root.left, cur + root.val);
      stack.pop();
    }
    if (root.right) {
      dfs(root.right, cur + root.val);
      stack.pop();
    }
  }
  dfs(root, 0);
  return count;
};
```

* **执行测试**：

> `root`：

```js
const root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: { val: 3, left: null, right: null },
      right: { val: -2, left: null, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  },
  right: {
    val: -3,
    left: null,
    right: { val: 11, left: null, right: null },
  }
}
```

> `sum`：

```js
const sum = 8;
```

> `return`：

```js
3
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 126/126 cases passed (112 ms)
  ✔ Your runtime beats 90.98 % of javascript submissions
  ✔ Your memory usage beats 6.25 % of javascript submissions (38 MB)
```

* **知识点**：

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)
2. `pop()`：`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。[`pop()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/pop.md)

* **解题思路**：

**更好的帮助形式是授之以渔**。

经过上面的讲解，单次递归的方式，我觉得小伙伴们可以自我尝试，挑战一下。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
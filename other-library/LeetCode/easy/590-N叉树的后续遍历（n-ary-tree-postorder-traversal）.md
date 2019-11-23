590 - N叉树的后续遍历（n-ary-tree-postorder-traversal）
===

> Create by **jsliang** on **2019-11-23 15:54:15**  
> Recently revised in **2019-11-23 16:53:48**

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
* **题目地址**：https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
* **题目内容**：

```
给定一个 N 叉树，返回其节点值的后序遍历。

例如，给定一个 3叉树 :

          1
      /   |   \
    3     2     4
  /  \
 5    6

返回其后序遍历: [5,6,3,2,4,1].

说明: 递归法很简单，你可以使用迭代法完成此题吗?
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @name N叉树的后序遍历
 * @param {Node} root
 * @return {number[]}
 */
const postorder = (root, result = []) => {
  if (!root) {
    return [];
  }
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], result);
    }
  }
  result.push(root.val);
  return result;
};

const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: null },
        { val: 6, children: null },
      ],
    },
    { val: 2, children: null },
    { val: 4, children: null },
  ],
};

console.log(postorder(root));
```

`node index.js` 返回：

```js
[ 5, 6, 3, 2, 4, 1 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 37/37 cases passed (88 ms)
* Your runtime beats 98.79 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**树的先序遍历和后序遍历，是怎么通过递归得出的呢？**

1. 先序：通过外层的数组，逐一获取遍历的元素。
2. 后序：通过内部的数组，逐一传递到外部。

说地再多不如看代码：

> 初始代码：

```js
const postorder = (root) => {
  const ergodic = (root, result = []) => {
    if (!root) {
      return [];
    }
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        ergodic(root.children[i], result);
      }
    }
    result.push(root.val);
    return result;
  };
  return ergodic(root);
};
```

这份代码 Submit 提交是 OK 的：

```js
Accepted
* 37/37 cases passed (88 ms)
* Your runtime beats 98.79 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.5 MB)
```

它的思路在于，通过一开始默认的空数组，不断【返回】上一层，往里面添加内容，最终返回后序遍历需要的结果。

如果你还不够清晰，不急，咱们先优化下代码，说不定你会有灵感：

> 第一次优化：精简代码

```js
const postorder = (root, result = []) => {
  if (!root) {
    return [];
  }
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], result);
    }
  }
  result.push(root.val);
  return result;
};
```

在这份代码中，它主要功能：

1. 第一个 `if` 判断数组是不是到了底部，如果是，那么返回 `[]` 数组。
2. 第二个 `if` 判断数组是不是还未展开完毕，如果是，则逐层遍历它的 `children`，将 `result` 传递出去。
3. 最后，`result` 添加这次节点的 `val` 值，并返回出去。

我们不妨加两个 `console.log()`，小伙伴们会观察地更加仔细：

```js
const postorder = (root, result = []) => {
  if (!root) {
    return [];
  }
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      postorder(root.children[i], result);
    }
  }
  result.push(root.val);
  console.log('------');
  console.log(root);
  console.log(result);
  return result;
};
```

它的打印记录为：

```
------
{ val: 5, children: null }
[ 5 ]
------
{ val: 6, children: null }
[ 5, 6 ]
------
{ val: 3,
  children: [ { val: 5, children: null }, { val: 6, children: null } ] }
[ 5, 6, 3 ]
------
{ val: 2, children: null }
[ 5, 6, 3, 2 ]
------
{ val: 4, children: null }
[ 5, 6, 3, 2, 4 ]
------
{ val: 1,
  children:
   [ { val: 3, children: [Array] },
     { val: 2, children: null },
     { val: 4, children: null } ] }
[ 5, 6, 3, 2, 4, 1 ]
```

可以清楚的看到，它按照我们的想法进行操作了。

当然，小伙伴们可以参考下上篇文章：589-N叉树的前序遍历（自行翻找 GitHub 或者公众号，这里不贴链接了），进行进一步的了解。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

正如题目所说，我们不能仅仅只会递归，还可以尝试下迭代：

```js
const postorder = (root) => {
  if (!root) {
    return [];
  }
  const result = [];
  const tempRoot = [root];
  while (tempRoot.length) {
    const current = tempRoot.pop();
    result.unshift(current.val);
    if (current.children) {
      for (let i = 0; i < current.children.length; i++) {
        tempRoot.push(current.children[i]);
      }
    }
  }
  return result;
};
```

在这份代码中，做的操作有：

1. 判断是否传入的为 `[]` 空树，如果是，则返回 `[]`。
2. 将 `root` 变成一个数组 `[root]` 设为 `tempRoot`，进行遍历操作。
3. 循环遍历 `tempRoot.length`，直到所有内容都遍历完毕。
4. 定义 `current` 获取 `tempRoot` 的最末尾元素。
5. 每次 `result` 获取当前元素的 `val` 值，将其塞入末尾。
6. 判断 `current` 的 `children` 里面是否还有值，有的话就遍历它，将其推入 `tempRoot`。
7. 循环步骤 4 - 步骤 6，直到当前元素都是最根层次的元素。
8. 最终返回 `result` 值。

Submit 提交结果：

```js
Accepted
* 37/37 cases passed (116 ms)
* Your runtime beats 97.57 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.4 MB)
```

这样，我们就完成了 N叉树的后序遍历 操作啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
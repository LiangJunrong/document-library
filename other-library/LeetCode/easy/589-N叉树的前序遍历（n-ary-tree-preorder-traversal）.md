589 - N叉树的前序遍历（n-ary-tree-preorder-traversal）
===

> Create by **jsliang** on **2019-11-22 08:47:39**  
> Recently revised in **2019-11-22 09:27:43**

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
* **题目地址**：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
* **题目内容**：

```
给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 :

          1
      /   |   \
    3     2     4
  /  \
 5    6

返回其前序遍历: [1,3,5,6,2,4]。

说明: 递归法很简单，你可以使用迭代法完成此题吗?
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @name N叉树的前序遍历
 * @param {Node} root
 * @param {}
 * @return {number[]}
 */
const preorder = (root) => {
  const result = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    root.children && root.children.forEach(item => ergodic(item));
  };
  ergodic(root);
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

console.log(preorder(root));
```

`node index.js` 返回：

```js
[1, 3, 5, 6, 2, 4]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 37/37 cases passed (80 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**你知道我在想什么，如果你看过我之前破解树的题目……**

直接万能公式递归暴力破解啦：

```js
const preorder = (root) => {
  const result = [];
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    result.push(root.val);
    root.children && root.children.forEach(item => ergodic(item));
  };
  ergodic(root);
  return result;
};
```

Submit 提交：

```js
Accepted
* 37/37 cases passed (80 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.3 MB)
```

哇喔，一百婚，妈妈我终于又拿到语文英语一百分了~

那么本题就此结束……啪，咱要精益求精！

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

在题目中，有句话：

* 说明: 递归法很简单，你可以使用迭代法完成此题吗?

哦豁？**jsliang** 能说自己不会迭代吗？

```js
const preorder = (root) => {
  if (!root) {
    return [];
  }
  const result = [], tempRoot = [root];
  while (tempRoot.length) {
    const current = tempRoot.pop();
    result.push(current.val);
    if (current.children) {
      for (let i = current.children.length - 1; i >= 0; i--) {
        tempRoot.push(current.children[i]);
      }
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 37/37 cases passed (92 ms)
* Your runtime beats 97.84 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.6 MB)
```

攻略如下：

1. 如果传进来的是空树，则返回 `[]`。
2. 将 `tempRoot` 看做是每一个子树（初始化的时候将整棵树当成子树）。
3. 遍历 `tempRoot`，只要它还有长度（意味着我们需要遍历所有项）。
4. 设置 `current` 为当前树（`tempRoot`）的末尾项，逐项遍历，判断其是否有 `children`，如果有，那么说明还可以进一步查找。
5. 循环 `current.children`，将其添加进 `tempRoot` 中。直到 `tempRoot` 的项都被推出来，表明内部不在存在项。
6. 循环结束，返回 `result`。

这样，这道题的破解就此结束，如果小伙伴们有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
559 - N叉树的最大深度（maximum-depth-of-n-ary-tree）
===

> Create by **jsliang** on **2019-11-15 08:43:25**  
> Recently revised in **2019-11-15 09:12:36**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：树、深度优先搜索、广度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
* **题目内容**：

```
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 3叉树 :

         ①
      /  |  \
    ③   ②   ④
   /  \
  ⑤   ⑥

我们应返回其最大深度，3。

说明:

树的深度不会超过 1000。
树的节点总不会超过 5000。
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
 * @return {number}
 */
var maxDepth = function(root) {
    
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
 * @name N叉树的最大深度
 * @param {Node} root
 * @return {number}
 */
const maxDepth = (root) => {
  // 1. 排除树为 null 的情况
  if (!root) {
    return 0;
  }
  // 2. 定义最大深度（默认有根节点）
  let MaxDepth = 1;
  // 4. 遍历方法（可提取到 maxDepth() 外面）
  const ergodic = (root, depth) => {
    // 5. 判断节点为 null 或者 children 为 []，则中止
    if (!root || !root.children.length) {
      return;
    }
    // 6. 每次遍历树深度 + 1
    depth += 1;
    // 7. MaxDepth 取最大深度
    MaxDepth = Math.max(depth, MaxDepth);
    // 8. 递归树的每个节点，直到所有节点都没有子节点为止
    root.children.forEach(item => {
      ergodic(item, depth);
    });
  };
  // 3. 遍历树，传递节点以及深度（默认从 1 开始）
  ergodic(root, MaxDepth);
  // 9. 返回最大深度
  return MaxDepth;
};

const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};
console.log(maxDepth(root));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 36/36 cases passed (664 ms)
* Your runtime beats 92.02 % of javascript submissions
* Your memory usage beats 87.67 % of javascript submissions (76.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，看题思意：

```js
function Node(val,children) {
  this.val = val;
  this.children = children;
};
```

我们做二叉树比较多，所以清楚二叉树的结构定义：

```js
const root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
};
```

那么，看到上面的 N 叉树定义，反而有点懵逼了，是怎么表示的？只能空函数提交试试了：

```js
const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};
```

OK，清楚题意，了解多叉树结构，那么开始解题：

> 遍历所有节点

```js
const maxDepth = (root) => {
  const ergodic = (root) => {
    console.log('------');
    console.log(root);
    if (!root.children.length) {
      return;
    }
    root.children.forEach(item => {
      ergodic(item);
    });
  };
  return ergodic(root);
};
```

`node index.js` 返回结果：

```js
------
{ val: 1,
  children:
   [ { val: 3, children: [Array] },
     { val: 2, children: [] },
     { val: 4, children: [] } ] }
------
{ val: 3,
  children: [ { val: 5, children: [] }, { val: 6, children: [] } ] }
------
{ val: 5, children: [] }
------
{ val: 6, children: [] }
------
{ val: 2, children: [] }
------
{ val: 4, children: [] }
```

有时候不得不感慨树的万能公式真的非常好用。

下面完善代码：

```js
const maxDepth = (root) => {
  // 1. 排除树为 null 的情况
  if (!root) {
    return 0;
  }
  // 2. 定义最大深度（默认有根节点）
  let MaxDepth = 1;
  // 4. 遍历方法（可提取到 maxDepth() 外面）
  const ergodic = (root, depth) => {
    // 5. 判断节点为 null 或者 children 为 []，则中止
    if (!root || !root.children.length) {
      return;
    }
    // 6. 每次遍历树深度 + 1
    depth += 1;
    // 7. MaxDepth 取最大深度
    MaxDepth = Math.max(depth, MaxDepth);
    // 8. 递归树的每个节点，直到所有节点都没有子节点为止
    root.children.forEach(item => {
      ergodic(item, depth);
    });
  };
  // 3. 遍历树，传递节点以及深度（默认从 1 开始）
  ergodic(root, MaxDepth);
  // 9. 返回最大深度
  return MaxDepth;
};

const root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};
console.log(maxDepth(root));
```

Submit 提交试试：

```js
Accepted
* 36/36 cases passed (664 ms)
* Your runtime beats 92.02 % of javascript submissions
* Your memory usage beats 87.67 % of javascript submissions (76.8 MB)
```

嗯，感觉还不错~

具体的思路就写到代码上了，小伙伴们可以详细瞅瞅。

今日解题到此结束，如果小伙伴们有更好的方法或者思路，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
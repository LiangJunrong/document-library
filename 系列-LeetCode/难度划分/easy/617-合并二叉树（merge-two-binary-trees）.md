617 - 合并二叉树（merge-two-binary-trees）
===

> Create by **jsliang** on **2019-11-29 08:37:58**  
> Recently revised in **2019-11-29 09:31:23**

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
* **涉及知识**：树
* **题目地址**：
* **题目内容**：

```
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入: 

	Tree 1                     Tree 2                  
          1                         2    
         / \                       / \    
        3   2                     1   3    
       /                           \   \   
      5                             4   7                  

输出合并后的树:

	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
注意: 合并必须从两个树的根节点开始。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name 合并二叉树
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

const t1 = {
  val: 1,
  left: {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null,
  },
  right: { val: 2, left: null, right: null },
};
const t2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: { val: 4, left: null, right: null },
  },
  right: {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null },
  },
};

console.log(mergeTrees(t1, t2));
```

`node index.js` 返回：

```js
{ val: 3,
  left:
   { val: 4,
     left: { val: 5, left: null, right: null },
     right: { val: 4, left: null, right: null } },
  right:
   { val: 5,
     left: null,
     right: { val: 7, left: null, right: null } } }
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 183/183 cases passed (104 ms)
* Your runtime beats 85.68 % of javascript submissions
* Your memory usage beats 71.28 % of javascript submissions (40.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**没有树的万能公式解决不了的，如果有，那就再想想**。

拿到题目，开始破解：

```js
const mergeTrees = (t1, t2) => {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
```

破解思路：

1. 同时递归两棵树
2. 如果第一棵树的节点为 `null`，那么就返回第二棵树（即使它也有可能为 `null`）。
3. 如果第二棵树的节点为 `null`，那么就返回第一棵树（即使它也有可能为 `null`）。
4. 如果两棵树的节点都有值，那么将它们相加起来。
5. 设置我们递归的主角为 `t1`，我们将其 `left` 和 `right` 投入递归大军。

Submit 提交：

```js
Accepted
* 183/183 cases passed (104 ms)
* Your runtime beats 85.68 % of javascript submissions
* Your memory usage beats 71.28 % of javascript submissions (40.1 MB)
```

这样，我们就完成了这道题的破解~

如果小伙伴有更好的思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
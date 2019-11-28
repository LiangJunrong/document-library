606 - 根据二叉树创建字符串（construct-string-from-binary-tree）
===

> Create by **jsliang** on **2019-11-28 08:38:26**  
> Recently revised in **2019-11-28 09:35:23**

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
* **涉及知识**：树、字符串
* **题目地址**：https://leetcode-cn.com/problems/construct-string-from-binary-tree/
* **题目内容**：

```
你需要采用前序遍历的方式，
将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。

你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

示例 1:

输入: 二叉树: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

输出: "1(2(4))(3)"

解释: 原本将是“1(2(4)())(3())”，
在你省略所有不必要的空括号对之后，
它将是“1(2(4))(3)”。

示例 2:

输入: 二叉树: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

输出: "1(2()(4))(3)"

解释: 和第一个示例相似，
除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    
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
 * @name 根据二叉树创建字符串
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (t) => {
  if (!t) {
    return '';
  }
  if (!t.left && !t.right) {
    return t.val + tree2str(t.left) + tree2str(t.right);
  }
  if (!t.right) {
    return `${t.val}(${tree2str(t.left)})${tree2str(t.right)}`;
  }
  return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
};

const t = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null,
  },
  right: { val: 3, left: null, right: null },
};
// 答案：1(2(4))(3)

// const t = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: { val: 4, left: null, right: null },
//   },
//   right: { val: 3, left: null, right: null },
// };
// 答案：1(2()(4))(3)

console.log(tree2str(t));
```

`node index.js` 返回：

```js
1(2()(4))(3)
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 162/162 cases passed (76 ms)
* Your runtime beats 92.68 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，咱们很久没回顾树的万能公式了，这里再瞅瞅：

> 树的万能公式

```js
const ergodic = (root) => {
  if (!root) {
    return '!#';
  }
  return '!' + root.val + ergodic(root.left) + ergodic(root.right);
}

const root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: {
    val: 3,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
};
console.log(ergodic(root));
```

打印一下看看：

```js

```

虽然说，一下子接触的时候可能不太熟练，但是后面拿多几道树的简单题练习，你会发现这个还是挺简单的。

**然后**，咱们开始解题：

> 第一次递归破解

```js
const tree2str = (t) => {
  const ergodic = (t) => {
    if (!t) {
      return '';
    }
    if (!t.left && !t.right) {
      return t.val + ergodic(t.left) + ergodic(t.right);
    }
    if (!t.left) {
      return `${t.val}(${ergodic(t.left)})(${ergodic(t.right)})`;
    }
    if (!t.right) {
      return `${t.val}(${ergodic(t.left)})${ergodic(t.right)}`;
    }
    return `${t.val}(${ergodic(t.left)})(${ergodic(t.right)})`;
  };
  return ergodic(t);
};
```

可以看出，我们分了 5 种判断：

1. 如果树是空节点（`t = null`），返回 `''` 空字符串。
2. 如果树的左右节点是空的（`t = {val: 3, left: null, right: null }`），那么我们不给与括号包裹。
3. 如果树的左节点是空的（`t = {val: 3, left: null, right: { val: 4, left: null, right: null }}`），这时候我们需要表示左节点是空的，所以需要左右都给与括号包裹。
4. 如果树的右节点是空的（`t = {val: 3, left: { val: 4, left: null, right: null }, right: null}`），那么我们设置右节点没有括号包裹即可
5. 除了情况 1 - 4，其他的都给与双重括号包裹。

Submit 提交结果：

```js
Accepted
* 162/162 cases passed (80 ms)
* Your runtime beats 79.27 % of javascript submissions
* Your memory usage beats 56.25 % of javascript submissions (38.2 MB)
```

上面可以直观地看出解题过程。

但是，**jsliang** 个人还是觉得复杂冗余了，所以进行精简优化：

> 第二次递归优化

```js
const tree2str = (t) => {
  if (!t) {
    return '';
  }
  if (!t.left && !t.right) {
    return t.val + tree2str(t.left) + tree2str(t.right);
  }
  if (!t.right) {
    return `${t.val}(${tree2str(t.left)})${tree2str(t.right)}`;
  }
  return `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`;
};
```

在这里，我们去掉了内部再包裹一个箭头函数（这太浪费啦~），精简了 `(!t.left)` 的判断，因为它跟默认的一样需要包裹左右。

Submit 提交看看：

```js
Accepted
* 162/162 cases passed (76 ms)
* Your runtime beats 92.68 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.6 MB)
```

我很满意~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

**你知道的，当一件事做得比较好或者很好的时候，你总会想着精益求精。**

所以，我尝试用了下递归：

```js
const tree2str = (t) => {
  let result = '';
  let root = [t];
  while (root.length) {
    const tempRoot = root.pop();
    if (tempRoot.name === 'left') {
      result += `(${tempRoot.val})`;
    } else if (tempRoot.name === 'right') {
      result += `(${tempRoot.val})`;
    } else {
      result += tempRoot.val;
    }
    // 迭代
    if (tempRoot.left) {
      tempRoot.left.name = 'left';
      root.push(tempRoot.left);
    }
    if (tempRoot.right) {
      tempRoot.right.name = 'right';
      root.unshift(tempRoot.right);
    }
  }
  return result;
};
```

结果发现：

```js
1(2)(4)(3)
```

不行啊还是太嫩了，翻遍【题解区（29）】和【评论区（82）】，发现没有 JavaScript 迭代的，【官方题解】的还是 Java 搞得，无奈收场。

如果小伙伴有更好的想法，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
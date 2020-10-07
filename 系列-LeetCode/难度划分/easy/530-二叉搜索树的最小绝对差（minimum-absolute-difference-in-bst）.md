530 - 二叉搜索树的最小绝对差（minimum-absolute-difference-in-bst）
===

> Create by **jsliang** on **2019-11-07 08:36:49**  
> Recently revised in **2019-11-07 09:46:40**

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
* **题目地址**：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
* **题目内容**：

```
给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。

示例 :

输入:

   1
    \
     3
    /
   2

输出:
1

解释:
最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

注意: 树中至少有2个节点。
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
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    
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
 * @name 二叉搜索树的最小绝对差
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  const treeList = [];
  const ergodic = (root) => {
    if (!root) {
      return '!#';
    }
    treeList.push(root.val);
    return '!' + root.val + ergodic(root.left) + ergodic(root.right);
  }
  ergodic(root);
  treeList.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < treeList.length - 1; i++) {
    const max = Math.max(treeList[i + 1], treeList[i]);
    const min = Math.min(treeList[i + 1], treeList[i]);
    if (max - min < result) {
      result = max - min;
    }
  }
  return result;
};

const root = {
  val: 1,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: null,
  },
};
console.log(getMinimumDifference(root)); // 3
```

`node index.js` 返回：

```js
1
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 186/186 cases passed (104 ms)
* Your runtime beats 50 % of javascript submissions
* Your memory usage beats 6.9 % of javascript submissions (41 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，想到的是使用树的万能公式，套路整棵树拿到所有节点，从而得到差值：

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @name 二叉搜索树的最小绝对差
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  const treeList = [];
  const ergodic = (root) => {
    if (!root) {
      return '!#';
    }
    treeList.push(root.val);
    return '!' + root.val + ergodic(root.left) + ergodic(root.right);
  }
  ergodic(root);
  treeList.sort((a, b) => a - b);
  return treeList[1] - treeList[0];
};

const root = {
  val: 1,
  left: null,
  right: {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: null,
  },
};
console.log(getMinimumDifference(root));
```

**然后**，发现稍微理解错误，因为倒数第二个减去倒数第一个可能不是最小值，例如：

* [1, 3, 4, 5]

所以上面的代码 Submit 会出现这种情况：

```js
Wrong Answer
33/186 cases passed (N/A)

Testcase
[543,384,652,null,445,null,699]

Answer
61

Expected Answer
47
```

所以重新修改了下代码：

```js
const getMinimumDifference = (root) => {
  const treeList = [];
  const ergodic = (root) => {
    if (!root) {
      return '!#';
    }
    treeList.push(root.val);
    return '!' + root.val + ergodic(root.left) + ergodic(root.right);
  }
  ergodic(root);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < treeList.length - 1; i++) {
    for (let j = i + 1; j < treeList.length; j++) {
      let tempMax = treeList[i] > treeList[j] ? treeList[i] : treeList[j];
      let tempMin = treeList[i] > treeList[j] ? treeList[j] : treeList[i];
      if (tempMax - tempMin < result) {
        result = tempMax - tempMin;
      }
    }
  }
  return result;
};
```

Submit 提交试试：

```js
Accepted
* 186/186 cases passed (196 ms)
* Your runtime beats 5.26 % of javascript submissions
* Your memory usage beats 6.9 % of javascript submissions (39.8 MB)
```

好的好的，耗时 15 分钟写出了最垃圾的代码，打不过 LeetCode 上任何一个人。

**最后**，我们还是分析下：

1. 通过 `ergodic` 遍历整棵树。
2. 设定 `result` 为数字最大值，`Number.MAX_SAFE_INTEGER` 的值为 JavaScript 最大安全值，即 `2^53 - 1`。
3. 通过 `for` 进行双重遍历，取最大值 - 最小值，判断它们的差值是否比 `result` 更小，如果是，则替代。
4. 输出 `result`。

那么，它有什么不足呢？

1. 递归树，耗时较大
2. 双重循环，耗时较大
3. 定义多个变量，占用空间大

很好，知道了缺陷，那么下面我们进行改善。

> 很多时候，我们奉行可用原则，然后再进一步精简。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

下面开始优化（搞事情）~

> 第一次优化

```js
const getMinimumDifference = (root) => {
  const treeList = [];
  const ergodic = (root) => {
    if (!root) {
      return '!#';
    }
    treeList.push(root.val);
    return '!' + root.val + ergodic(root.left) + ergodic(root.right);
  }
  ergodic(root);
  treeList.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < treeList.length - 1; i++) {
    const max = Math.max(treeList[i + 1], treeList[i]);
    const min = Math.min(treeList[i + 1], treeList[i]);
    if (max - min < result) {
      result = max - min;
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 186/186 cases passed (104 ms)
* Your runtime beats 50 % of javascript submissions
* Your memory usage beats 6.9 % of javascript submissions (41 MB)
```

这里通过对所有节点进行排序，因为相邻的两个节点的值是相对最小的：

* [1, 3, 4, 5]

例如上面，`4 - 1` 肯定没有 `3 - 1` 的值小。

再通过一次遍历，算出结果值。

所以这里的优化就是将双重遍历拆分成了两次单重遍历，用大 O 表示法来说，即将 O(n^2) 变成了 2 * O(n)。

> 第二次优化

```js
const getMinimumDifference = (root) => {
  let prevNode = null,
      result = Number.MAX_SAFE_INTEGER;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    ergodic(root.left);
    if (prevNode !== null) {
      result = Math.min(result, Math.abs(root.val - prevNode.val));
    }
    prevNode = root;
    ergodic(root.right);
  }
  ergodic(root);
  return result;
};
```

Submit 提交：

```js
Accepted
* 186/186 cases passed (76 ms)
* Your runtime beats 92.11 % of javascript submissions
* Your memory usage beats 72.41 % of javascript submissions (37.6 MB)
```

有时候，很多小伙伴会跟我说，看不懂我写的代码。

其实，有时候我也看不懂别人写的代码。

但是，总得去接受改变，挑战自我。

上面的代码是一份中序遍历破解，咱也没用过，这里说说对这代码的看法：

1. 遍历左边树节点
2. 求当前节点和上一个节点的差值
3. 遍历右边数节点

但是，经过测试，发现好像不够完善：

```js
const getMinimumDifference = (root) => {
  let prevNode = null,
      result = Number.MAX_SAFE_INTEGER;
  const ergodic = (root) => {
    if (!root) {
      return;
    }
    ergodic(root.left);
    if (prevNode !== null) {
      result = Math.min(result, Math.abs(root.val - prevNode.val));
    }
    prevNode = root;
    ergodic(root.right);
  }
  ergodic(root);
  return result;
};

const root = {
  val: 1,
  left: {
    val: 5,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: null,
  },
};
console.log(getMinimumDifference(root)); // 3。但是按道理说是 1。但是但是它通过了！可能我不太熟悉中序遍历？
```

如果小伙伴有更好的观点，欢迎评论吐槽或者私聊 **jsliang**

PS：写完已经过了 70 分钟，不得不吐槽时间过得真快。

PS： 参考答案来自【评论】区的 JavaScript 中序解法以及【题解】区的 Java 解法： https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/solution/er-cha-sou-suo-shu-jiu-zhong-xu-bian-li-cun-chu-qi/

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
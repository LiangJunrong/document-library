002 - 两数相加（add-two-numbers）
===

> Create by **jsliang** on **2019-12-13 08:57:56**  
> Recently revised in **2019-12-13 09:33:50**

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

* **难度**：中等
* **涉及知识**：链表、数学
* **题目地址**：https://leetcode-cn.com/problems/add-two-numbers/
* **题目内容**：

```
给出两个 非空 的链表用来表示两个非负的整数。

其中，它们各自的位数是按照 逆序 的方式存储的，
并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @name 两数之和
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, carry = 0) => {
  // 将两个链表同位相加，还要加上次同位相加的进位
  let val = l1.val + l2.val + carry;
  if (val >= 10) {
    // 大于 10， 进一位
    val = val % 10;
    carry = 1;
  } else {
    // 小于 10 不用进位
    carry = 0;
  }

  // 只要有下一位或进位，next 是下一位和进位的和，否则 next 就是 null
  const nullList = {
    val: 0,
    next: null,
  }
  if (l1.next || l2.next || carry) {
    return {
      val,
      next: addTwoNumbers(l1.next || nullList, l2.next || nullList, carry),
    }
  }
  return {
    val,
    next: null,
  }
};

const l1 = {
  val: 3,
  next: {
    val: 4,
    next: {
      val: 2,
      next: null
    },
  },
};
const l2 = {
  val: 4,
  next: {
    val: 6,
    next: {
      val: 5,
      next: null
    },
  },
};
console.log(addTwoNumbers(l1, l2));
// { val: 7, next: { val: 0, next: { val: 8, next: null } } }
```

`node index.js` 返回：

```js
{ val: 7, next: { val: 0, next: { val: 8, next: null } } }
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 1563/1563 cases passed (124 ms)
* Your runtime beats 91.63 % of javascript submissions
* Your memory usage beats 73.06 % of javascript submissions (38.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**树亦或者链，能用递归用递归。**

在 **jsliang** 看来递归是比较好用的一种算法模式了，能帮助我解决很多关于树或者链表的问题：

> 递归破解

```js
const addTwoNumbers = (l1, l2, carry = 0) => {
  // 将两个链表同位相加，还要加上次同位相加的进位
  let val = l1.val + l2.val + carry;
  if (val >= 10) {
    // 大于 10， 进一位
    val = val % 10;
    carry = 1;
  } else {
    // 小于 10 不用进位
    carry = 0;
  }

  // 只要有下一位或进位，next 是下一位和进位的和，否则 next 就是 null
  const nullList = {
    val: 0,
    next: null,
  }
  if (l1.next || l2.next || carry) {
    return {
      val,
      next: addTwoNumbers(l1.next || nullList, l2.next || nullList, carry),
    }
  }
  return {
    val,
    next: null,
  }
};
```

解题思路：

1. 进行进位判断，因为链表的值都是个位数，所以只需要判断是否需要进 1 即可。
2. 定义空链表 `nullList`，因为有时候 `l1.next` 或者 `l2.next` 已经空了，所以需要给个 0 定义。
3. 进行递归判断，只要存在 `l1.next` 或者 `l2.next` 或者 `carry` 这三个，我们都进行递归。
4. 否则，如果步骤 3 不成立，我们就告诉递归，我们到了尽头了，你可以结束递归了。

这样，我们就成功破解了这道题，Submit 提交如下：

```js
Accepted
* 1563/1563 cases passed (124 ms)
* Your runtime beats 91.63 % of javascript submissions
* Your memory usage beats 73.06 % of javascript submissions (38.3 MB)
```

当然，你肯定有其他思路或者想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
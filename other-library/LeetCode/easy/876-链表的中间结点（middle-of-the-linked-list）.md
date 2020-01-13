876 - 链表的中间结点（middle-of-the-linked-list）
===

> Create by **jsliang** on **2020-01-13 08:46:51**  
> Recently revised in **2020-01-13 09:23:31**

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
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/middle-of-the-linked-list/
* **题目内容**：

```
给定一个带有头结点 head 的非空单链表，
返回链表的中间结点。

如果有两个中间结点，
则返回第二个中间结点。

示例 1：

输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 
(测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，
这样：
ans.val = 3, 
ans.next.val = 4, 
ans.next.next.val = 5, 
以及 ans.next.next.next = NULL.

示例 2：

输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，
值分别为 3 和 4，
我们返回第二个结点。
 
提示：

给定链表的结点数介于 1 和 100 之间。
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
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
 * @name 链表的中间结点
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  const A = [head];
  while (A[A.length - 1].next) {
    A.push(A[A.length - 1].next);
  }
  return A[Math.floor(A.length / 2)];
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: { val: 5, next: null },
      },
    },
  },
};

console.log(middleNode(head));
```

`node index.js` 返回：

```js
{ val: 3, next: { val: 4, next: { val: 5, next: null } } }
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 15/15 cases passed (72 ms)
* Your runtime beats 14.79 % of javascript submissions
* Your memory usage beats 57.14 % of javascript submissions (33.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看到树或者链表，我们总能想起两样东西：

* 递归
* 迭代

在破解树的题目中，**jsliang** 用得最多的是递归，应该容易遍历输出。

**然后**，在这个链表上，感觉需要使用下迭代：

> 迭代

```js
const middleNode = (head) => {
  const A = [head];
  while (A[A.length - 1].next) {
    A.push(A[A.length - 1].next);
  }
  return A[Math.floor(A.length / 2)];
};
```

这时候我们应该有个想法：

* 如何将链表的每个节点暴露出来

我们构建了一个数组，让 `head` 放到数组的末尾，通过不断地将链表的 `next` 添加到数组末尾（直至 `next` 为 `null`），我们可以搞出下面的数据：

> console.log

```js
[
  { val: 1, next: { val: 2, next: [Object] } },
  { val: 2, next: { val: 3, next: [Object] } },
  { val: 3, next: { val: 4, next: [Object] } },
  { val: 4, next: { val: 5, next: null } },
  { val: 5, next: null },
]
```

看得清清楚楚，我们取到了整个链表的所有节点。

这时候，如何获取 **中间结点**，相信小伙伴们的一清二楚了：

* 如果是基数，获取中间点。例如长度为 5，则获取 `Math.floor(5 / 2) = 2` 即可。
* 如果是偶数，获取中间靠右的点。例如长度为 6，则获取 `Math.floor(6 / 2) = 3` 即可。

> 注意：编程数组中下标从 0 开始~

**最后**，咱们看看 Submit 提交：

```js
Accepted
* 15/15 cases passed (64 ms)
* Your runtime beats 53.55 % of javascript submissions
* Your memory usage beats 6.35 % of javascript submissions (34.3 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

如果你也查看了官方题解，那么你会看到 **jsliang** 的解法和它的第一解法一样，这里咱不多累述，咱们看看第二种解法：

> 快慢指针

```js
const middleNode = (head) => {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
```

这是我觉得非常秀并且也是挺容易理解的一种解法：

1. 设置快指针和慢指针对应的都是 `head`。
2. 设置快指针的跑动为一次 2 跳，设置慢指针的跑动为一次 1 跳。
3. 当快指针跑完全程的时候，慢指针恰巧跑到一半。

非常巧妙~

Submit 提交：

```js
Accepted
* 15/15 cases passed (68 ms)
* Your runtime beats 32.84 % of javascript submissions
* Your memory usage beats 84.13 % of javascript submissions (33.5 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
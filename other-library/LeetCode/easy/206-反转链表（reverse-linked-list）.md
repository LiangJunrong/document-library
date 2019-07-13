206 - 反转链表（reverse-linked-list）
===

> Create by **jsliang** on **2019-7-13 07:54:49**  
> Recently revised in **2019-7-13 08:42:07**

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
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/reverse-linked-list/
* **题目内容**：

```
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var reverseList = (head, q = null) => {
  if (head) {
    return reverseList(head.next, {
      val: head.val,
      next: q,
    });
  }
  return q;
}
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `head`：

```js
let head = {
  val: 1, next: {
    val: 2, next: {
      val: 3, next: {
        val: 4, next: {
          val: 5, next: null,
        },
      },
    },
  },
};
```

* `return`：

```js
{
  val: 5, next: {
    val: 4, next: {
      val: 3, next: {
        val: 2, next: {
          val: 1, next: null,
        },
      },
    },
  },
}
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 27/27 cases passed (80 ms)
  √ Your runtime beats 92.17 % of javascript submissions
  √ Your memory usage beats 6.29 % of javascript submissions (36.1 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**智商是硬伤，知识点也可能是**。

经过这次解题，**jsliang** 将链表给标记上了，等到系统学习算法与数据结构的时候，链表是必须搞懂的点之一。

**首先**，上面题解不是我写出来的，看的是评论区的题解，原代码是：

```js
const reverseList = (head, q = null) => head !== null ? reverseList(head.next, { val: head.val, next: q }) : q;
```

传说中的一行题解。

**然后**，怕小伙伴们跟我一样懵逼，**jsliang** 进行了改编：

```js
var reverseList = (head, q = null) => {
  console.log(q);
  if (head) {
    return reverseList(head.next, {
      val: head.val,
      next: q,
    });
  }
  return q;
}
```

**最后**，为了方便小伙伴们理解，**jsliang** 将 `q` 的过程打印了出来：

```js
null
{ val: 1, next: null }
{ val: 2, next: { val: 1, next: null } }
{ val: 3, next: { val: 2, next: { val: 1, next: null } } }
{ val: 4, next: { val: 3, next: { val: 2, next: [Object] } } }
{ val: 5, next: { val: 4, next: { val: 3, next: [Object] } } }
{ val: 5, next: { val: 4, next: { val: 3, next: [Object] } } }
```

嗯，对着 `console.log()` 来思考这次递归的用意，小伙伴们应该能清楚怎么反转链表了。（虽然下次还是可能写不出，但是没关系，后面大家一起系统学习~）

## <a name="chapter-seven" id="chapter-seven">七 进一步思考</a>

> [返回目录](#chapter-one)

上面使用了递归，下面看看迭代解法：

```js
var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  var current = head;
  var previous = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
```

提交结果是：

```js
√ Accepted
  √ 27/27 cases passed (80 ms)
  √ Your runtime beats 92.17 % of javascript submissions
  √ Your memory usage beats 70.6 % of javascript submissions (34.8 MB)
```

感兴趣的小伙伴可以推演下迭代的思路，在此 **jsliang** 就不多滴滴啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
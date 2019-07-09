203 - 移除链表元素（remove-linked-list-elements）
===

> Create by **jsliang** on **2019-07-09 19:01:37**  
> Recently revised in **2019-07-09 19:50:14**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 转数组](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/remove-linked-list-elements/
* **题目内容**：

```
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 正常解法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeElements = function(head, val) {
  let result = {
    val: -99,
    next: head,
  };
  let chase = result;
  while(chase.next) {
    if (chase.next.val === val) {
      chase.next = chase.next.next;
    } else {
      chase = chase.next;
    }
  }
  return result.next;
};
```

* **执行测试**：

> `head`：

```js
let head = {
  val: 1, next: {
    val: 2, next: {
      val: 6, next: {
        val: 3, next: {
          val: 4, next: {
            val: 5, next: {
              val: 6, next: null,
            },
          },
        },
      },
    },
  },
};
```

> `return`：

```js
let head = {
  val: 1, next: {
    val: 2, next: {
      val: 3, next: {
        val: 4, next: {
          val: 5, next: null
        },
      },
    },
  },
};
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 65/65 cases passed (104 ms)
  ✔ Your runtime beats 90.76 % of javascript submissions
  ✔ Your memory usage beats 24.79 % of javascript submissions (37.5 MB)
```

* **解题思路**：

**虽然链表做过几次，但是感觉印象不深。**

在前面的 LeetCode 题目中，我们做过几次链表，但是因为过久没接触，感觉又有些淡忘了，现在刚好重新复习。

**首先**，我们需要了解下链表的结构：

```js
let head = {
  val: 1, next: {
    val: 2, next: {
      val: 6, next: {
        val: 3, next: {
          val: 4, next: {
            val: 5, next: {
              val: 6, next: null,
            },
          },
        },
      },
    },
  },
};
```

小伙伴们可以发现，相对于 **树** 来说，**链表** 比较简单一点，一个 `val` 显示当前的值，一个 `next` 指向下一个节点。

**然后**，我们要如何将其中的 `6` 节点去掉呢？

```js
var removeElements = function(head, val) {
  let result = {
    val: -99,
    next: head,
  };
  let chase = result;
  while(chase.next) {
    if (chase.next.val === val) {
      chase.next = chase.next.next;
    } else {
      chase = chase.next;
    }
  }
  return result.next;
};
```

1. 新建一个 `result` 节点，用来获取最终的节点。因为我们不能直接引用 `head`（非址引用），所以我们创造一个，最后只需要指向它的 `next`，即可返回正确的链表。
2. 新建一个 `chase` 追逐者节点，用来追逐 `head` 的推进。
3. 我们在循环中判断，这个追逐节点的下一个节点的值，是否是需要去掉的值。如果是，我们则指向下下一层；如果不是，我们则指向下一层。
4. 直到 `chase` 没有下一层（即 `next` 为 `null`）后，我们返回最终结果。

**最后**，完成了本题的题解。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 递归</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeElements = function(head, val) {
  if (!head) {
    return null;
  }
  head.next = removeElements(head.next, val);
  if (head.val === val) {
    return head.next;
  } else {
    return head;
  }
};
```

* **执行测试**：

```js
✔ Accepted
  ✔ 65/65 cases passed (104 ms)
  ✔ Your runtime beats 90.76 % of javascript submissions
  ✔ Your memory usage beats 24.79 % of javascript submissions (37.5 MB)
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 65/65 cases passed (120 ms)
  ✔ Your runtime beats 66.03 % of javascript submissions
  ✔ Your memory usage beats 5.13 % of javascript submissions (38.2 MB)
```

* **解题思路**：

**光明正大的偷懒。**

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
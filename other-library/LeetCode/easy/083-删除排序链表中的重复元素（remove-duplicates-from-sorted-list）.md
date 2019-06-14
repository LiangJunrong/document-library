083 - 删除排序链表中的重复元素（remove-duplicates-from-sorted-list）
===

> Create by **jsliang** on **2019-6-12 08:50:11**  
> Recently revised in **2019-6-12 09:26:06**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题代码](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 总结](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
* **题目内容**：

```
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3
```

## <a name="chapter-three" id="chapter-three">三 解题代码</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

```js
var deleteDuplicates = function(head) {
  if (!head) { // 预防 [] 情况
    return head;
  }
  let removal = {
    val: -99, // 预防 [-1, 1, 1, 1, 3] 情况 
    next: null,
  };
  let follower = removal;
  while (head) {
    if (head.val != follower.val) {
      follower.next = head;
      head = head.next;
      follower = follower.next;
    } else {
      if (head.next === null) { // 预防 [1, 1, 2, 3, 3] 情况
        follower.next = null;
      }
      head = head.next;
    }
  }
  return removal.next;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* 参数：`head`：

```js
let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      },
    }
  }
}
```

* 返回值： `return`：

```js
{ val: 1, next: { val: 2, next: { val: 3, next: null } } }
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 165/165 cases passed (100 ms)
  √ Your runtime beats 90.76 % of javascript submissions
  √ Your memory usage beats 13.09 % of javascript submissions (36.3 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，这道题不是第一次碰到链表，小伙伴可以查看 [021-合并两个有序链表（merge-two-sorted-lists）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/021-%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8%EF%BC%88merge-two-sorted-lists%EF%BC%89.md)，先了解一波链表的有关知识。

**然后**，在这道题中，我们的解题思路就可以迎刃而解了：

* **步骤 1**：在代码中添加 `console.log()`，查看代码执行机制。

```js
var deleteDuplicates = function(head) {
  if (!head) { // 预防 [] 情况
    return head;
  }
  let removal = {
    val: -99, // 预防 [-1, 1, 1, 1, 3] 情况 
    next: null,
  };
  let follower = removal;
  while (head) {
    console.log('------');
    console.log(head);
    console.log(removal);
    console.log(follower);
    if (head.val != follower.val) {
      follower.next = head;
      head = head.next;
      follower = follower.next;
    } else {
      if (head.next === null) { // 预防 [1, 1, 2, 3, 3] 情况
        follower.next = null;
      }
      head = head.next;
    }
  }
  return removal.next;
};

let head = { // 即 [1, 1, 2, 3, 3]
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      },
    }
  }
}

deleteDuplicates(head);
```

* **步骤 2**：执行代码，得到打印信息，顺序 `head` -> `removal` -> `follower`。

```js
jsliang 注释：
  第一次遍历，
  我们的 head、removal、follower 都处于初始状态
------
{ val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }
{ val: -99, next: null }
{ val: -99, next: null }

jsliang 注释：
  第二次遍历，
  我们的 head = head.next，follower = head.next，
  这样 removal 就获得了 1，以及之后的整个 next。
------
{ val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } }
{ val: -99, next: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } } }
{ val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }

jsliang 注释：
  第三次遍历，
  我们的 head 继续前进一步：head = head.next，
  但是因为 head.val == follower.val，
  所以我们这次不修改 follower，从而做到去重的作用。
  （follower 的变动影响 removal 的变动）
------
{ val: 2, next: { val: 3, next: { val: 3, next: null } } }
{ val: -99, next: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } } }
{ val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }

jsliang 注释：
  第四次遍历，
  我们的 head 继续前进一步：head = head.next，
  然后 follower 和 removal 获得了 head.next。
------
{ val: 3, next: { val: 3, next: null } }
{ val: -99, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }
{ val: 2, next: { val: 3, next: { val: 3, next: null } } }

jsliang 注释：
  第五次遍历，
  我们的 head 继续前进一步：head = head.next，
  此时 head.val == follower.val，
  并且 head.next == null，
  所以我们直接将 follower.next 设置为 null，
  从而获得最终结果
------
{ val: 3, next: null }
{ val: -99, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } }
{ val: 3, next: { val: 3, next: null } }

jsliang 注释：
  最终 return 的值如下所示：
------
{ val: 1, next: { val: 2, next: { val: 3, next: null } } }
```

**最后**，小伙伴们如果还不理解，可以自行拷贝代码到本地，或者看多两遍代码，如有不懂，记得留言。

## <a name="chapter-seven" id="chapter-seven">七 总结</a>

> [返回目录](#chapter-one)

这样，我们就搞定了 LeetCode 简单难度的第二个链表题目，想来也就那么回事，小伙伴们学会了吗~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，或者发表最新前端攻略，扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
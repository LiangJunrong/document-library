141 - 环形链表（linked-list-cycle）
===

> Create by **jsliang** on **2019-7-3 08:10:25**  
> Recently revised in **2019-7-3 08:52:02**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：链表、双指针
* **题目地址**：https://leetcode-cn.com/problems/linked-list-cycle/
* **题目内容**：

```
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

第一眼看题，**没懂**

不对，再瞅瞅，**还是没懂**

难道，我想错了？看下题解，**还还是没懂**

这我就震惊了，我不会是遇到假题目了吧~

看下代码：

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
};
```

enm...怎么只有 `head`，那个 `pos` 呢？

回头看了下题解：

* 官方题解：https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode/
* 个人题解：https://leetcode-cn.com/problems/linked-list-cycle/solution/8mskuai-man-zhi-zhen-hashsi-lu-de-go-shi-xian-by-e/

> 比较有意思的题解：

```js
var hasCycle = function(head) {
  while (head) {
    if (head.val === 'jsliang') {
      return true;
    } else {
      head.val = 'jsliang';
    }
    head = head.next;
  }
  return false;
};
```

```js
√ Accepted
  √ 17/17 cases passed (84 ms)
  √ Your runtime beats 98.59 % of javascript submissions
  √ Your memory usage beats 75.67 % of javascript submissions (36.4 MB)
```

凉了凉了，怎么它们讲得头头是道，我却连题目都不懂~

无解，放着，等回头系统学下算法与数据结构的书，再看看是不是我哪里出问题了。

小伙伴们如果对这道题有个人见解，可以提出来，感谢分享~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
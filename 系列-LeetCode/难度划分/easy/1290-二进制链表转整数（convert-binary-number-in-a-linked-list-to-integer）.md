1290 - 二进制链表转整数（convert-binary-number-in-a-linked-list-to-integer）
===

> Create by **jsliang** on **2020-02-01 18:11:47**  
> Recently revised in **2020-02-01 18:52:18**

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
* **涉及知识**：位运算、链表
* **题目地址**：https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
* **题目内容**：

```
给你一个单链表的引用结点 head。

链表中每个结点的值不是 0 就是 1。

已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的 十进制值 。

示例 1：

① -> 〇 -> ①

输入：head = [1,0,1]
输出：5
解释：二进制数 (101) 转化为十进制数 (5)

示例 2：

输入：head = [0]
输出：0

示例 3：

输入：head = [1]
输出：1

示例 4：

输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
输出：18880

示例 5：

输入：head = [0,0]
输出：0

提示：

链表不为空。
链表的结点总数不超过 30。
每个结点的值不是 0 就是 1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number}
 */
var getDecimalValue = function(head) {
    
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
 * @name 二进制链表转整数
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head) => {
  const newHead = [head];
  let binary = '';
  while (newHead.length) {
    const tempHead = newHead.pop();
    binary += tempHead.val;
    if (tempHead.next) {
      newHead.push(tempHead.next);
    }
  }
  return parseInt(binary, 2);
};

const head = {
  val: 1,
  next: {
    val: 0,
    next: { val: 1, next: null },
  },
};

console.log(getDecimalValue(head)); // 5
```

`node index.js` 返回：

```js
5
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 102/102 cases passed (56 ms)
* Your runtime beats 94.62 % of javascript submissions
* Your memory usage beats 52.82 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

要记住的是，渣渣 **jsliang** 对于树和链表只有两种法子：

1. 递归
2. 迭代

咱们先上迭代：

> 迭代

```js
const getDecimalValue = (head) => {
  const newHead = [head];
  let binary = '';
  while (newHead.length) {
    const tempHead = newHead.pop();
    binary += tempHead.val;
    if (tempHead.next) {
      newHead.push(tempHead.next);
    }
  }
  return parseInt(binary, 2);
};
```

迭代的法子就是：

1. 将链表放进数组。
2. 每次都将最外面的元素推出来。
3. 通过 `binary` 累加结果值。
4. 再将链表的 `next` 节点推进数组。

Submit 提交：

```js
Accepted
* 102/102 cases passed (56 ms)
* Your runtime beats 94.62 % of javascript submissions
* Your memory usage beats 52.82 % of javascript submissions (33.8 MB)
```

当然，因为这道题还是有优化空间的，所以咱么可以进一步优化：

> 迭代【优化】

```js
const getDecimalValue = (head) => {
  let binary = '';
  while (head) {
    binary += head.val;
    head = head.next;
  }
  return parseInt(binary, 2);
};
```

Submit 提交：

```js
Accepted
* 102/102 cases passed (56 ms)
* Your runtime beats 94.62 % of javascript submissions
* Your memory usage beats 83.06 % of javascript submissions (33.7 MB)
```

迭代讲完了，咱们玩玩递归。

> 递归

```js
const getDecimalValue = (head) => {
  let binary = '';
  const ergodic = (head) => {
    if (!head) {
      return;
    }
    binary += head.val;
    ergodic(head.next);
  }
  ergodic(head);
  return parseInt(binary, 2);
};
```

递归的法子就是：

1. 设置递归函数 `ergodic`。
2. 如果深入到最终的节点为 `null`，那么中止递归。
3. 通过 `binary` 累加二进制值。
4. 重复 `ergodic(head.next)` 直到碰到 `!head` 为止。

Submit 提交：

```js
Accepted
* 102/102 cases passed (64 ms)
* Your runtime beats 70.17 % of javascript submissions
* Your memory usage beats 68.55 % of javascript submissions (33.7 MB)
```

当然，递归也有优化法子：

> 递归【优化】

```js
const getDecimalValue = (head, binary = '') => {
  if (!head) {
    return parseInt(binary, 2);
  }
  binary += head.val;
  return getDecimalValue(head.next, binary);
};
```

Submit 提交：

```js
Accepted
* 102/102 cases passed (60 ms)
* Your runtime beats 88.75 % of javascript submissions
* Your memory usage beats 68.55 % of javascript submissions (33.7 MB)
```

好了，今天的题目就到这里。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
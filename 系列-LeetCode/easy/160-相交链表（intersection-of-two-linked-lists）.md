160 - 相交链表（intersection-of-two-linked-lists）
===

> Create by **jsliang** on **2019-07-04 10:32:24**  
> Recently revised in **2019-07-04 16:40:14**

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

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
* **题目内容**：

编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

![图](../../../public-repertory/img/other-algorithm-160-1.png)

在节点 c1 开始相交。

*示例 1：*

![图](../../../public-repertory/img/other-algorithm-160-2.png)

```
输入：intersectVal = 8,
  listA = [4,1,8,4,5],
  listB = [5,0,1,8,4,5],
  skipA = 2,
  skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。
  从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
  在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

*示例 2：*

![图](../../../public-repertory/img/other-algorithm-160-3.png)

```
输入：intersectVal = 2,
  listA = [0,9,1,2,4],
  listB = [3,2,4],
  skipA = 3,
  skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。
  从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
  在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

*示例 3：*

![图](../../../public-repertory/img/other-algorithm-160-4.png)

```
输入：intersectVal = 0,
  listA = [2,6,4],
  listB = [1,5],
  skipA = 3,
  skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
  由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```
 
注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let a = headA,
    b = headB;

  // 相交则返回当前节点，否则返回 null
  // 当 a、b 不相交时：
  // 1. 如果 a 为 null，将 headB 赋值给 a；
  // 2. 如果 b 为 null，将 headA 赋值给 b；
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

```js
let base = {
  val: 8, next: {
    val: 4, next: {
      val: 5, next: null,
    },
  },
};

let headA = {
  val: 4, next: {
    val: 1, next: base,
  },
};

let headB = {
  val: 5, next: {
    val: 0, next: {
      val: 1, next: base,
    },
  },
}
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 45/45 cases passed (124 ms)
  ✔ Your runtime beats 84.62 % of javascript submissions
  ✔ Your memory usage beats 49.21 % of javascript submissions (42.9 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，拿到题目，我怀疑题目又有问题了，尝试了下 `test`，显示为：

```js
Input data:
8
[4,1,8,4,5]
[5,0,1,8,4,5]
2
3

Actual
  ✔ runtime: 72 ms
  ✘ answer: No intersection
  ✔ stdout: ''

Expected
  ✔ runtime: 28 ms
  ✔ answer: Intersected at '8'
  ✔ stdout: ''
```

然而给我的代码是：

```js
var getIntersectionNode = function(headA, headB) {
  // 代码
};
```

闹哪样呢！为什么它有那么多参数，我只有两个！

而且，`[4, 1, 8, 4, 5]` 和 `[5, 0, 1, 8, 4, 5]`，不是在 `1` 就相同了吗？怎么是 `8` 才相交！摔！！！

**然后**，仔细思考一下……卧槽，它说的相同，不会是地址相同吧？

小伙伴们都知道，在 JS 中，如果是 Number、String 等的复制，是通过传值来实现的；而 Array、Ojbect 等，是通过传址来实现了，看例子：

```js
let a = 1;
let b = a;
b = 2;
console.log(a); // 1

let c = [1, 2, 3];
let d = c;
d.push(4);
console.log(c); // [1, 2, 3, 4]
```

在这里，我们修改 `b` 的时候，`a` 是不会发生对应改变的。

而修改 `d` 的时候，因为修改了原数组，所以 `c` 也会对应变成 `[1, 2, 3, 4]`。

> 小伙伴们想了解更多，可以搜索 **JS 深拷贝与浅拷贝**

**划重点**：简单来说，有两个对象 A 和 B，B = A，当你修改 A 时，B 的值也跟着发生了变化，这时候就叫浅拷贝。如果不发生变化，就叫深拷贝。

所以，如果和猜测的一样，那么 `[4, 1, 8, 4, 5]` 和 `[5, 0, 1, 8, 4, 5]` 需要判断的，是它们在某个位置开始是否在同一地址。

不清楚 C、C++、Java 等编程语言是否可行，但是在 JS 中，这样的数据，即：

* **原始数据**：`[8, 4, 5]`
* **拷贝数据 A**：`[4, 1, 8, 4, 5]`
* **拷贝数据 B**：`[5, 0, 1, 8, 4, 5]`

那么，它在 JS 中如何表示呢？**jsliang** 在这里尝试了一下：

```js
let base = {
  val: 8, next: {
    val: 4, next: {
      val: 5, next: null,
    },
  },
};

let headA = {
  val: 4, next: {
    val: 1, next: base,
  },
};

let headB = {
  val: 5, next: {
    val: 0, next: {
      val: 1, next: base,
    },
  },
}
```

**接着**，我们分析下我们的代码：

```js
  let a = headA,
    b = headB;

  // 相交则返回当前节点，否则返回 null
  // 当 a、b 不相交时：
  // 1. 如果 a 为 null，将 headB 赋值给 a；
  // 2. 如果 b 为 null，将 headA 赋值给 b；
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
```

怎么说呢？我们是不是有两条链表：`a` 和 `b`。

`a` 的长度是 5，`b` 的长度是 6，那么，我们就可以利用这个长度差，做一些羞羞的事：

```
[4, 1, 8, 4, 5][5, 0, 1, 8, 4, 5]
[5, 0, 1, 8, 4, 5][4, 1, 8, 4, 5]
```

可以看到的是，遍历一轮后，刚好接触到了一块，从而返回最终结果。

**最后**，把这个尝试的在本地测试了一下，完全 OK，说明我们假设的数据 OK 了，再配合上面的解题代码，成功完成了这道题的破解。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
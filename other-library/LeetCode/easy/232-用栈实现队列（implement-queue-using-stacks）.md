232 - 用栈实现队列（implement-queue-using-stacks）
===

> Create by **jsliang** on **2019-7-16 08:15:25**  
> Recently revised in **2019-7-16 08:38:15**

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
* **涉及知识**：栈、设计
* **题目地址**：https://leetcode-cn.com/problems/implement-queue-using-stacks/
* **题目内容**：

```
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例:
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明:
你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
  // 检查 stack2 是否为空，如果不为空把 stack2 的内容 pop 出来在压入 stack1 中
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
  // 每次 pop 都先把 stack1 中的元素压入 stack2 中
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return this.stack1[0];
};

MyQueue.prototype.empty = function() {
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return !this.stack1.length;
};
```

* **执行测试**：

```js
let queue = new MyQueue();

queue.push(1);
queue.push(2);
console.log(queue.peek());  // 1
console.log(queue.pop());   // 1
console.log(queue.empty()); // false
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 17/17 cases passed (72 ms)
  √ Your runtime beats 91.08 % of javascript submissions
  √ Your memory usage beats 98.9 % of javascript submissions (33.1 MB)
```

* **解题思路**：

如果小伙伴们看过 **225-用队列实现栈**，那么小伙伴对这道题也是迎刃而解；

如果没看过，没问题，咱复制粘贴过来（滑稽脸）：

**首先**，官方出这道题的想法是，让小伙伴们了解下队列和栈。

**那么**，我们就讲讲这两者：

* 队列：先进先出。简单来说，就是有一个数组，通过 `push()` 推进每个元素，通过 `shift()` 推出第一个元素，这种形式就是队列。
* 栈：先进后出。简单来说，就是有一个数组，通过 `push()` 推进每个元素，通过 `pop()` 推出最后一个元素，这种形式就是栈。

如果小伙伴们还是不理解，那么我们讲讲两个例子：

* 队列：饭堂打饭。我们需要排队，先到的排前面，打完饭后可以先走。
* 栈；俄罗斯套娃，或者叠罗汉。先进的需要最后出，要不然取不出来，或者罗汉直接倒了。

**最后**，根据这个思路，我们可以轻易求解。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
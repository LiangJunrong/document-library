225 - 用队列实现栈（implement-stack-using-queues）
===

> Create by **jsliang** on **2019-07-13 19:18:35**  
> Recently revised in **2019-07-13 19:30:51**

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
* **涉及知识**：栈、设计
* **题目地址**：https://leetcode-cn.com/problems/implement-stack-using-queues/
* **题目内容**：

```
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空

注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。

你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var MyStack = function() {
  this.stask = [];
};

MyStack.prototype.push = function(x) {
  this.stask[this.stask.length] = x;
};

MyStack.prototype.pop = function() {
  let arr = this.stask;
  let last = this.stask.length - 1;
  let temp = arr[last];
  this.stask.length = this.stask.length - 1;
  return temp;
};

MyStack.prototype.top = function() {
  let arr = this.stask;
  let last = this.stask.length - 1;
  return arr[last];
};

MyStack.prototype.empty = function() {
  let arr = this.stask;
  if (!arr.length) {
    return true;
  } else {
    return false;
  }
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

```js
let stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());

// 2
// 2
// false
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 16/16 cases passed (76 ms)
  ✔ Your runtime beats 82.32 % of javascript submissions
  ✔ Your memory usage beats 59.3 % of javascript submissions (33.6 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

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
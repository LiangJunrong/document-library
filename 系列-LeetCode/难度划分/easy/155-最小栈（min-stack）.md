155 - 最小栈（min-stack）
===

> Create by **jsliang** on **2019-07-03 16:40:04**  
> Recently revised in **2019-07-03 19:29:55**

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
* **题目地址**：https://leetcode-cn.com/problems/min-stack/
* **题目内容**：

```
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。

示例:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var MinStack = function () {
  this.stack = [];
  this.min = null;
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.min === null) {
    this.min = x;
  } else {
    this.min = Math.min(this.min, x);
  }
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min = this.stack.length ? this.stack.reduce((min, num) => Math.min(min, num), Infinity) : null;
};

MinStack.prototype.top = function () {
  if (!this.stack.length) {
    return null;
  }
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

```js
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
let nowMin = minStack.getMin();
console.log('现在最小：' + nowMin);
minStack.pop();
let nowTop = minStack.top();
console.log('现在顶部：' + nowTop);
let newMin = minStack.getMin();
console.log(minStack);
console.log('现在最小：' + newMin);
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 18/18 cases passed (148 ms)
  ✔ Your runtime beats 97.72 % of javascript submissions
  ✔ Your memory usage beats 48.3 % of javascript submissions (44.2 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**首先**，上手直接开撸：

```js
var MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
};

MinStack.prototype.pop = function() {
  this.stack.pop();
};

MinStack.prototype.top = function() {
  if (!this.stack.length) {
    return null;
  }
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.stack.slice().sort((a, b) => a - b)[0];
};
```

一开始我的思路是这样的，然后 LeetCode 提交返回：

```js
✘ Time Limit Exceeded
  ✘ 17/18 cases passed (N/A)
  ✘ testcase: '["MinStack","push","push",……]'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

好家伙，超时限制！！！

**接着**，发现它还会提出 JS 最大值超范围的数字，范围限制！！！

**最后**，感觉不太耐烦了，直接找大佬的代码了。

> 有的小伙伴说我没有讲解每句话的意思，其实这道题总体来说没有任何难点

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
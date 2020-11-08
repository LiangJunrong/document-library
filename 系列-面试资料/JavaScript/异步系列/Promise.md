异步系列 - Promise
===

> Create by **jsliang** on **2020-09-07 22:28:53**  
> Recently revised in **2020-11-08 09:18:03**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| &emsp;[2.1 浅思](#chapter-two-one) |
| &emsp;[2.2 参考文献](#chapter-two-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Promise 初探](#chapter-three) |
| &emsp;[3.1 是什么](#chapter-three-one) |
| &emsp;[3.2 为什么](#chapter-three-two) |
| &emsp;[3.3 怎么用](#chapter-three-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Promise 基础](#chapter-four) |
| &emsp;[4.1 new Promise](#chapter-four-one) |
| &emsp;[4.2 Promise 状态](#chapter-four-two) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 题库：基础题](#chapter-five) |
| &emsp;[5.1 题目一](#chapter-five-one) |
| &emsp;[5.2 题目二](#chapter-five-two) |
| &emsp;[5.3 题目三](#chapter-five-three) |
| &emsp;[5.4 题目四](#chapter-five-four) |
| &emsp;[5.5 题目五](#chapter-five-five) |
| &emsp;[5.6 题目六](#chapter-five-six) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 题库：结合 setTimeout](#chapter-six) |
| &emsp;[6.1 题目一](#chapter-six-one) |
| &emsp;[6.2 题目二](#chapter-six-two) |
| &emsp;[6.3 题目三](#chapter-six-three) |
| &emsp;[6.4 题目四](#chapter-six-four) |
| &emsp;[6.5 题目五](#chapter-six-five) |
| &emsp;[6.6 题目六](#chapter-six-six) |
| &emsp;[6.7 题目七](#chapter-six-seven) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 .then() 链式操作](#chapter-seven) |
| &emsp;[7.1 两个参数](#chapter-seven-one) |
| &emsp;[7.2 链式调用](#chapter-seven-two) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 .catch() 捕获问题](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 .finally() 强制执行](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 题库：.then()、.catch()、.finally()](#chapter-ten) |
| &emsp;[10.1 题目一](#chapter-ten-one) |
| &emsp;[10.2 题目二](#chapter-ten-two) |
| &emsp;[10.3 题目三](#chapter-ten-three) |
| &emsp;[10.4 题目四](#chapter-ten-four) |
| &emsp;[10.5 题目五](#chapter-ten-five) |
| &emsp;[10.6 题目六](#chapter-ten-six) |
| &emsp;[10.7 题目七](#chapter-ten-seven) |
| &emsp;[10.8 题目八](#chapter-ten-eight) |
| &emsp;[10.9 题目九](#chapter-ten-night) |
| &emsp;[10.10 题目十](#chapter-ten-ten) |
| &emsp;[10.11 题目十一](#chapter-ten-eleven) |
| &emsp;[10.12 题目十二](#chapter-ten-twelve) |
| &emsp;[10.13 题目十三](#chapter-ten-thirteen) |
| &emsp;[10.14 题目十四](#chapter-ten-fourteen) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 .all() 接力赛](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 .race() 个人赛](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 题库：.all()、.race()](#chapter-thirteen) |
| &emsp;[13.1 题目一](#chapter-thirteen-one) |
| &emsp;[13.2 题目二](#chapter-thirteen-two) |
| &emsp;[13.3 题目三](#chapter-thirteen-three) |
| &emsp;[13.4 题目四](#chapter-thirteen-four) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 Promise 源码](#chapter-fourteen) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 题库：结合 async/await](#chapter-fifteen) |
| &emsp;[15.1 题目一](#chapter-fifteen-one) |
| &emsp;[15.2 题目二](#chapter-fifteen-two) |
| &emsp;[15.3 题目三](#chapter-fifteen-three) |
| &emsp;[15.4 题目四](#chapter-fifteen-four) |
| &emsp;[15.5 题目五](#chapter-fifteen-five) |
| &emsp;[15.6 题目六](#chapter-fifteen-six) |
| &emsp;[15.7 题目七](#chapter-fifteen-seven) |
| &emsp;[15.8 题目八](#chapter-fifteen-eight) |
| &emsp;[15.9 题目九](#chapter-fifteen-night) |
| &emsp;[15.10 题目十](#chapter-fifteen-ten) |
| &emsp;[15.11 题目十一](#chapter-fifteen-eleven) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 综合题](#chapter-sixteen) |
| &emsp;[16.1 题目一](#chapter-sixteen-one) |
| &emsp;[16.2 题目二](#chapter-sixteen-two) |
| &emsp;[16.3 题目三](#chapter-sixteen-three) |
| <a name="catalog-chapter-seventeen" id="catalog-chapter-seventeen"></a>[十七 大厂题](#chapter-seventeen) |
| &emsp;[17.1 使用 Promise 实现每隔一秒输出 1、2、3](#chapter-seventeen-one) |
| &emsp;[17.2 使用 Promise 实现红绿灯交替重复亮](#chapter-seventeen-two) |
| &emsp;[17.3 实现 mergePromise 函数](#chapter-seventeen-three) |
| &emsp;[17.4 根据 PromiseA+ 实现一个自己的 Promise](#chapter-seventeen-four) |
| &emsp;[17.5 封装一个异步加载图片的方法](#chapter-seventeen-five) |
| &emsp;[17.6 限制异步操作并发数并尽可能快地完成](#chapter-seventeen-six) |
| &emsp;[17.7 JS 实现异步调度器](#chapter-seventeen-seven) |
| <a name="catalog-chapter-eighteen" id="catalog-chapter-eighteen"></a>[十八 总结](#chapter-eighteen) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

本文会结合 `Promise` 知识点 + 训练题的形式进行讲解。

前置知识点：

* [JavaScript 异步](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/README.md)
* [Event Loop](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Event%20Loop.md)

如不太了解这些知识点，请先点击前往观看，避免走火入魔。

### <a name="chapter-two-one" id="chapter-two-one"></a>2.1 浅思

> [返回目录](#chapter-one)

JavaScript 里的异步方案的演进时，是用下面这种顺序：

* `callback -> promise -> generator -> async/await`

在计算机行业，盛行着一种朴素还原论的迷思：

* 越接近底层，技术含量越高。
* 每个程序员都有读懂底层源代码的追求。

这在一定程度上是正确的。

不过，我们也应该看到，一旦底层和表层之间，形成了领域鸿沟。精通底层，并不能代表在表层的水平。

比如游戏的开发者，不一定是游戏中的佼佼者。这在 FPS 射击游戏或者格斗游戏里尤为明显，这些游戏里的绝大部分顶尖玩家，完全不会写代码。

如果将精通 `Promise` 定义为，善于在各种异步场景中使用 `Promise` 解决问题。

那么，能手写 `Promise` 实现，对精通 `Promise` 帮助不大。

> 来源于微信公众号：工业聚

### <a name="chapter-two-two" id="chapter-two-two"></a>2.2 参考文献

> [返回目录](#chapter-one)

请理解这是一个工作 2 年多的小前端做的整理，可能会忽略一些大佬文章的精华，从而做出不恰当的排序。

以下文章排名不分先后，纯粹是个人对比，丝毫没有诋毁一丝心态，所有文章是带着膜拜心思一一阅读完毕的。

**不错的**：

* [x] [ES6 入门 - Promise 对象](https://es6.ruanyifeng.com/#docs/promise)【阅读建议：2h】
* [x] [要就来 45 道 Promise 面试题一次爽到底](https://juejin.im/post/6844904077537574919)【阅读建议：8h】
* [x] [面试精选之 Promise](https://juejin.im/post/6844903625609707534)【阅读建议：20min】

**手写 Promise**：

* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：略读】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：略读】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：略读】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：略读】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：略读】

**Promises/A+ 规范**：

* [x] [Promises/A+ 规范（中文版](https://segmentfault.com/a/1190000002452115)【阅读建议：无】
* [x] [Promises/A+ 规范（英文版）](https://promisesaplus.com/)【阅读建议：无】
* [x] [Promises/A+ 测试仓库](https://github.com/promises-aplus/promises-tests/tree/master/lib/tests)【阅读建议：无】

**增加阅历的**：

* [x] [ES6 之 Promise 常见面试题](https://blog.csdn.net/weixin_37719279/article/details/80950713)【阅读建议：10min】
* [x] [Promise 必知必会（十道题）](https://juejin.im/post/6844903509934997511)【阅读建议：10min】
* [x] [大白话讲解 Promise（一）](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)【阅读建议：30min】

## <a name="chapter-three" id="chapter-three"></a>三 Promise 初探

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 是什么

> [返回目录](#chapter-one)

**什么是 `Promise`？**

咱们直接打印一下：

```js
console.dir(Promise);
/*
Promise(
  all: ƒ all()
  arguments: (...)
  caller: (...)
  length: 1
  name: "Promise"
  prototype: Promise {constructor: ƒ, then: ƒ, catch: ƒ, finally: ƒ, Symbol(Symbol.toStringTag): "Promise"}
  race: ƒ race()
  reject: ƒ reject()
  resolve: ƒ resolve()
  Symbol(Symbol.species): (...)
  Symbol(allSettled): ƒ (d)
  get Symbol(Symbol.species): ƒ [Symbol.species]()
  __proto__: ƒ ()
  [[Scopes]]: Scopes[0]
)
*/
```

是的，`Promise` 是一个构造函数。

就这么简单，别想其他杂七杂八的，好不好用才是关键。

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 为什么

> [返回目录](#chapter-one)

**为什么需要 `Promise`？**

看一段代码：

```js
const action = () => {
  setTimeout(() => {
    ajax('http://www.xxx.com/getData', (text) => {
      if (text === 'hello') {
        doSomething2();
      } else if (text === 'world') {
        doSomething3();
      }
    })
  }, 500);
};
action();

doSomething1();
```

这种就是回调地狱式的代码：

1. 执行 `action`，将 `setTimeout` 放进宏任务队列
2. 执行 `doSomething1()`，执行里面代码
3. 500ms 或以后，执行 `ajax`，等待完成
4. `ajax` 完成后，判断 `text`，进而执行 `doSomething2()` 或者 `doSomething3`。

这无疑看起来是挺不容易的，因为当 `doSomething` 里面的代码再丰富起来，你不仔细看，还真不知道这代码会怎么走。

再看一个例子：

```js
请求1(function(请求结果1){
  请求2(function(请求结果2){
    请求3(function(请求结果3){
      请求4(function(请求结果4){
        请求5(function(请求结果5){
          请求6(function(请求结果3){
            ...
          })
        })
      })
    })
  })
})
```

有没有头皮发麻的感觉。

回调地狱带来的负面作用有以下几点：

* 代码臃肿。
* 可读性差。
* 耦合度过高，可维护性差。
* 代码复用性差。
* 容易滋生 bug。
* 只能在回调里处理异常。

所以，为了解决这种痛楚，这就需要一个承诺：

* 把某件事交给某个人，这个人做完后，不管失败还是成功，都会给你一个回应，这样你就能安心将事情交给它了。

这个人就叫 `Promise`，我们看看它直观的作用：

```js
function getData() {
  const p = new Promise((resolve, reject) => {
    // Ajax 请求等
    setTimeout(() => {
      console.log('获取数据成功');
      resolve('传入成功后的数据');
    }, 1000);
  });
  return p;
}
getData().then((res) => {
  // 获取到数据，然后进行处理
  console.log(res);

  // 如果下面还有 Ajax 请求，那么继续调用
  // getData2()
});
```

这样我们就可以安心玩耍了。

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 怎么用

> [返回目录](#chapter-one)

`Promise` 的使用，说难也不难，咱们直接上代码：

```js
// 1. 设置一个 promise
const promise = new Promise((resolve, reject) => {
  // 2. 设置一个 0-10 随机数
  const number = Math.floor(Math.random() * 10);

  // 3. 如果这个数大于 5，我们当它成功了
  if (number > 5) {
    resolve('大于 5'); // resolve 相当于解决的意思
  } else { // 4. 否则就是失败的
    reject('小于 5'); // reject 相当于处理失败的意思
  }
});

// 5. 如果是 resolve，那就走 .then；如果是 reject，那就走 .catch
promise.then((res) => {
  console.log('成功：', res);
}).catch((error) => {
  console.log('失败：', error);
}).finally(() => {
  // 6. 注意 finally 就是剧终的意思，不管是好结局还是坏结局，都是结局
  console.log('不管前面发生了啥，我都会调用');
});
```

它的输出：

> 输出 1

```
失败： 小于 5
不管前面发生了啥，我都会调用
```

> 输出 2

```
成功： 大于 5
不管前面发生了啥，我都会调用
```

因为我们用了随机值，所以上面 2 种输出都有可能。

至于它里面的 `resolve`、`reject`、`.then()`、`.catch()`、`.finally()`，我们暂且不管，后面再扯，就问问自己前面的理解了没？

如果理解了，那么恭喜你对 `Promise` 有了个简单的了解。

## <a name="chapter-four" id="chapter-four"></a>四 Promise 基础

> [返回目录](#chapter-one)

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 new Promise

> [返回目录](#chapter-one)

**首先**，我们先看看如何走一个 `new Promise`：

```js
const promise = new Promise((resolve, reject) => {
  console.log(resolve); // [Function]
  console.log(reject); // [Function]
});

console.log(promise); // Promise { <pending> }
```

**然后**，我们对这几个概念进行区分：

1. `Promise` 对象是一个构造函数，用来生成 `Promise` 实例，所以 `new Promise()` 不足奇怪。
2. `new Promise()` 传入一个函数，这个函数可以带 2 个参数：`resolve` 和 `reject`。
3. `resolve` 的作用是将 `Promise` 对象的状态从 “未完成” 变为 “成功”（`pending -> resolved`）
4. `reject` 的作用是将 `Promise` 对象的状态从 “未完成” 变为 “失败”（`pending -> rejected`）
5. 在没有执行 `resolve` 和 `reject` 之前，它们还是 `pending` 的。

**最后**，想必这么一说，小伙伴们对这个有一个清晰概念了。

那么下面我们再看看 `Promise` 的状态。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 Promise 状态

> [返回目录](#chapter-one)

**`Promise` 有 3 种状态：`pending`、`fulfilled`、`rejected`**

1. 初始状态：`pending`
2. 成功状态：`fulfilled`（实际打印会看到 `resolved`）
3. 失败状态：`rejected`

如果你在 `new Promise` 中用了 `resolve()`，那么它就会走 `.then()`；

如果你用的是 `reject()`，那么它就走 `.catch()`。

怎么说呢？

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('成功');
});

promise1.then((res) => {
  console.log('res 1：', res);
}).catch((error) => {
  console.log('error 1：', error);
})

const promise2 = new Promise((resolve, reject) => {
  reject('失败');
});

promise2.then((res) => {
  console.log('res 2：', res);
}).catch((error) => {
  console.log('error 2：', error);
})
```

在这段代码中，它的输出为：

```
res 1： 成功
error 2： 失败
```

这很容易理解，因为 `promise1` 走了 `resolve` 而 `promise2` 走了 `reject`。

**`Promise` 的状态一经改变就不能再进行更改。**

看下面代码：

```js
const promise = new Promise((resolve, reject) => {
  resolve('成功 1');
  reject('失败');
  resolve('成功 2');
});

promise.then((res) => {
  console.log('res：', res);
}).catch((err) => {
  console.log('err：', err);
});
```

输出啥？

没错输出的是：`res： 成功 1`。

一诺千金，你同意将你身边妹子介绍给我了，回头又说不行了，这怎么成。

> 疯狂暗示

同样，`Promise` 也是不允许返回的：

* 你将状态改为了 `resolved`，那么就别想再改了，乖乖走 `.then()` 吧！

OK，看到这里你对 `Promise` 基础有一定了解了，咱们上题吧！

## <a name="chapter-five" id="chapter-five"></a>五 题库：基础题

> [返回目录](#chapter-one)

在这之前，强调一遍 `Event Loop`。

`Event Loop` 执行顺序：

1. 一开始整个脚本 `script` 作为一个宏任务执行
2. 执行过程中，**同步代码** 直接执行，**宏任务** 进入宏任务队列，**微任务** 进入微任务队列。
3. 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。
4. 执行浏览器 UI 线程的渲染工作。
5. 检查是否有 `Web Worker` 任务，有则执行。
6. 执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。

**微任务** 包括：

* `MutationObserver`
* `Promise.then()/catch()`
* 以 `Promise` 为基础开发的其他技术，例如 `fetch API`
* V8 的垃圾回收过程
* Node 独有的 `process.nextTick`

**宏任务** 包括：

* `script`
* `setTimeout`
* `setInterval`
* `setImmediate`
* `I/O`
* `UI rendering`

举例一段代码：

```js
const promise = new Promise((resolve, reject) => {
  console.log('1');
  resolve('2');
});

setTimeout(() => {
  console.log('3');
}, 0);

promise.then((res) => {
  console.log(res);
});
```

输出：`1 -> 2 -> 3`。

怎么理解呢？

> 在所有任务开始的时候，由于宏任务包括了 `script`，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务（例如 `setTimeout`）将会被放到下一个宏任务中执行。

1. 先走 `script`。
2. 碰到 `promise = new Promise`，直接走里面。
3. 打印出 1。
4. 碰到 `resolve()`，将 `Promise` 状态改为 `resolved`，将 `Promise.then()` 丢进 `script` 这个宏任务下的微任务队列中。
5. 此时 `script` 宏任务下的微任务队列有：`promise.then()`。
6. 碰到 `setTimeout()`，将其丢进宏任务队列中。
7. 此时宏任务队列有：`script`、`setTimeout`。
8. 同步任务执行完毕。
9. 检查当前宏任务 `script` 下的微任务，并循环出队。
10. 输出 `2`。
11. 宏任务 `script` 下没有任何可执行的了，走下一个宏任务 `setTimeout`。
12. 输出 `3`。
13. 宏任务队列走完了，代码执行完毕。

简单来说：

1. 先走 `script`。
2. 碰到的宏任务 `setTimeout` 等放后面，等 `script` 走完再出队。
3. 碰到的微任务看当前宏任务，是 `script` 就丢 `script` 里面，是 `setTimeout` 就丢 `setTimeout` 里面。
4. 每次宏任务走完同步任务和微任务，就走下一个宏任务。
5. 循环步骤 4。

就这么简单，说多无益，刷题加深印象！

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 题目一

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  console.log('promise');
});

console.log('1', promise);

/*
  输出顺序即分析：
  输出：
    * promise
    * 1 Promise { <pending> }
  分析：
    1. 从上到下，碰到 new Promise，输出 'promise'
    2. 输出 '1' 和 promise 当前状态
*/
```

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 题目二

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
  console.log(2);
});

promise.then(() => {
  console.log(3);
})

console.log(4);

/**
  输出过程及分析：
  输出：1 -> 2 -> 4 -> 3
  分析：
    1. 从上往下，碰到 new Promise，先走 1
    2. 碰到 resolve，改变 Promise 状态
    3. 输出 2
    4. 碰到 .then()，将其丢进微任务
    5. 输出 4
    6. 回来执行步骤 4 的微任务，输出 3
*/
```

### <a name="chapter-five-three" id="chapter-five-three"></a>5.3 题目三

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});

promise.then(() => {
  console.log(3);
})

console.log(4);

/**
  输出过程及分析：
  输出：1 -> 2 -> 4
  分析：
    1. 从上往下，碰到 new Promise，先走 1
    2. 继续往下，输出 2
    3. 碰到 .then()，因为 new Promise 中并没有 resolve，所以不会把它丢进微任务
    4. 输出 4
*/
```

### <a name="chapter-five-four" id="chapter-five-four"></a>5.4 题目四

> [返回目录](#chapter-one)

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve('resolve1');
})

const promise2 = promise1.then((res) => {
  console.log(res);
});

console.log('1', promise1);
console.log('2', promise2);

/**
  输出顺序及分析：
  输出：
    * promise1
    * 1 Promise { <resolve>: 'resolve1' }
    * 2 Promise { <pending> }
    * resolve1
  分析：
    1. 碰到 new Promise，输出 promise1
    2. 碰到 resolve，改变 Promise 状态，并保存结果
    3. 碰到 promise1.then，放进微任务队列
    4. promise2 是一个新的状态为 pending 的 Promise
    5. 输出 1 和 promise1，当前 promise1 的状态为 resolve，并且存在 'resolve1'
    6. 输出 2 和 promise2，当前 promise2 的状态为 peding
    7. 宏任务走完，执行微任务，输出 resolve1
*/
```

### <a name="chapter-five-five" id="chapter-five-five"></a>5.5 题目五

> [返回目录](#chapter-one)

```js
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success');
}));

fn().then((res) => {
  console.log(res);
})

console.log('start');

/**
  执行顺序和解析：
  顺序：
    * 1
    * 'start'
    * 'success'
  解析：
    1. fn 是一个立即执行函数，所以会先执行 new Promise，所以输出 1
    2. 碰到 resolve，将 Promise 状态改变
    3. 碰到 .then()，因为前面改变了状态，所以会将其放进微任务
    4. 输出 'start'
    5. 宏任务走完，执行微任务，输出 'success'
*/
```

### <a name="chapter-five-six" id="chapter-five-six"></a>5.6 题目六

> [返回目录](#chapter-one)

```js
const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  })
};

console.log('start');

fn().then((res) => {
  console.log(res);
});

/**
  执行顺序和解析：
  顺序：
    * 'start'
    * 1
    * 'success'
  解析：
    上一道题是立即执行函数，这道题不是
    所以会在 fn() 调用的时候，才会执行 new Promise
*/
```

## <a name="chapter-six" id="chapter-six"></a>六 题库：结合 setTimeout

> [返回目录](#chapter-one)

关于宏任务 `setTimeout`，我们就要举例一道经典题了：

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

这道题的输出：

```
3
3
3
```

从 `Event Loop` 的角度来看：

1. 走同步任务，`var i` 遍历走完，`i = 3`（`var` 变量污染）。
2. `for()` 遍历的同时，将 3 个 `setTimeout` 塞进了宏任务中。
3. `script` 这个宏任务执行完毕。
4. 依次执行 3 个 `setTimeout`，因为此时 `i` 为 `3`，所以会依次输出 3 个 3。

当然，解决方案也很简单：

* **方法一：设置立即执行函数**

通过设置立即执行函数的方式，形成块作用域，解决 `i` 的污染问题。

```js
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}
```

* **方法二：设置 let**

`let` 会让 `for` 形成块作用域，从而防止污染，解决问题。

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

当然，`setTimeout` 还有一个问题：

```js
setTimeout(() => {
  console.log(1);
}, 0);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 500);
```

这份代码输出啥？

```
1
3
2
```

`setTimeout` 接收 2 个参数：

* `function()`：回调函数。在第二个参数指定的时间后执行。
* `timer`：执行时间（毫秒）。在 `n` 毫秒后执行回调函数。

一般来说，宏任务遵循队列的规则，按顺序入队出队，这样应该输出：`1 -> 2 -> 3`。

这在 `timer` 相同的情况下的确如此。

但是，在 `timer` 不同的情况下，需要按照 **优先队列** 的方式进行入队：

* **谁最小，谁在前面**。

所以这里输出的顺序是：`1 -> 3 -> 2`。

> 你不需要理解 **优先队列** 是啥，你想着尊老爱幼，`timer` 越小越在前面即可。

OK，关于 `setTimeout` 相关知识点 **jsliang** 介绍完毕，咱们看题！

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 题目一

> [返回目录](#chapter-one)

```js
console.log('start');

setTimeout(() => {
  console.log('time');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');

/**
  执行顺序和分析：
  顺序：
    * 'start'
    * 'end'
    * 'resolve'
    * 'time'
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script
    3. 输出 'start'
    4. 碰到 setTimeout，丢进宏任务队列
    5. 碰到 Promise，然后 Promise 变成 resolve() 状态后，执行了 .then()，所以丢进微任务队列
    6. 输出 'end'
    7. 遍历本次的微任务队列，输出步骤 5 的内容，即 'resolve'
    8. 步骤 7 走完，执行下一个宏任务队列，输出 'time'
*/
```

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 题目二

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);

  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

/**
  执行顺序和分析：
  顺序：
    * 1
    * 2
    * 4
    * 'timerStart'
    * 'timerEnd'
    * 'success'
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script 这个宏任务
    3. 碰到 new Promise，输出 1
    4. 碰到 setTimeout，放进宏任务队列
    5. 输出 2
    6. 碰到 .then()，但是没有钥匙（resolve），跳过
    7. 输出 4
    8. 当前没有微任务，执行下一个宏任务 setTimeout
    9. 输出 'timerStart'
    10. Promise 碰到 resolve，改变状态，表明 .then() 可以放进微任务了
    11. 输出 'timerEnd'
    12. 执行宏任务 setTimeout 下的微任务，即 Promise.then()
    13. 输出 'success'
*/
```

### <a name="chapter-six-three" id="chapter-six-three"></a>6.3 题目三

> [返回目录](#chapter-one)

```js
setTimeout(() => {
  console.log('timer1');
  setTimeout(() => {
    console.log('timer3');
  }, 0);
}, 0);

setTimeout(() => {
  console.log('timer2');
}, 0);

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'start'
    * 'timer1'
    * 'timer2'
    * 'timer3'
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script 这个宏任务
    3. 碰到第一个 setTimeout，丢进宏任务队列
    4. 这里的 setTimeout为输出 'timer1' 的一整个 setTimeout，此时并不会进入里面执行代码
    5. 碰到第二个 setTimeout，丢进宏任务队列
    6. 输出 'start'
    7. 查看微任务，并没有微任务
    8. 查看宏任务队列，有 2 个，分别是输出 time1 和 timer2 的
    9. 先将第一个 setTimeout 出队列，输出 'timer1'
    10. 碰到第三个 setTimeout，将它丢进宏任务队列，排在第二个之后
    11. 第一个 setTimeout 没有微任务，所以本次宏任务执行完毕
    12. 第二个 setTimeout 出队列，输出 'timer2'
    13. 此时它也没用微任务，所以本次宏任务再次执行完毕
    14. 第三个 setTimeout 出队列，输出 'timer3'
    15. 第三个也没用微任务，所以执行完毕
    16. 此时宏任务队列都执行完毕，收工
*/
```

### <a name="chapter-six-four" id="chapter-six-four"></a>6.4 题目四

> [返回目录](#chapter-one)

```js
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise');
  });
}, 0);

setTimeout(() => {
  console.log('timer2');
}, 0);

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'start'
    * 'timer1'
    * 'promise'
    * 'timer2'
  注意：node V10.16.0 的输出版本有所不同
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script 这个宏任务
    3. 碰到第一个 setTimeout，丢进宏任务队列
    4. 这里的 setTimeout为输出 'timer1' 的一整个 setTimeout，此时并不会进入里面执行代码
    5. 碰到第二个 setTimeout，丢进宏任务队列
    6. 输出 'start'
    7. 查看微任务，并没有微任务，所以执行下一个宏任务
    8. 查看宏任务队列，有 2 个，分别是输出 time1 和 timer2 的
    9. 先将第一个 setTimeout 出队列，输出 'timer1'
    10. 碰到 Promise.then()，将它丢进此时的微任务队列
    11. 步骤 10 存放了第一个 setTimeout 的一个微任务，执行并输出 'promise'
    12. 第二个 setTimeout 出队列，输出 'timer2'
    13. 此时它也没用微任务，所以本次宏任务再次执行完毕
    14. 此时宏任务队列都执行完毕，收工
*/
```

### <a name="chapter-six-five" id="chapter-six-five"></a>6.5 题目五

> [返回目录](#chapter-one)

```js
Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'start'
    * 'promise1'
    * 'timer1'
    * 'promise2'
    * 'timer2'
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script 这个宏任务
    3. 碰到 Promise.then()，将其推进微任务队列，注意不会执行里面内容
    4. 碰到 timer1，将其推进宏任务队列
    5. 输出 'start'
    6. 查看 script 中的宏任务队列，发现 Promise.then()，将其推出执行
    7. 输出 'promise1'
    8. 碰到 timer2，将其推进宏任务队列
    9. script 没有剩余的微任务，所以继续遍历宏任务
    10. 发现队列 [timer1, timer2]，根据队列先进先出原则，推出 timer1
    11. 输出 'timer1'，发现微任务 Promise.then()，将其推进 timer1 的微任务队列
    12. 输出 `promise2`
    13. 继续执行宏任务队列，出队 timer2，输出 'timer2'
*/
```

### <a name="chapter-six-six" id="chapter-six-six"></a>6.6 题目六

> [返回目录](#chapter-one)

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 0);
});

const promise2 = promise1.then(() => {
  throw new Error('error!');
});

console.log('promise1-1', promise1);
console.log('promise2-1', promise2);

setTimeout(() => {
  console.log('promise1-2', promise1);
  console.log('promise2-2', promise2);
}, 0);

/**
  执行顺序和分析：
  顺序：
    * 'promise1-1' Promise { <pending> }
    * 'promise2-1' Promise { <pending> }
    * 'promise1-2' Promise { <resolve>: 'success' }
    * 'promise2-2' Promise { <reject>: Error: error! }
  注意：在 Node v10.16.0 上运行结果不太相同
  分析：
    1. 记住 script 和 setTimeout 是宏任务
    2. 首先执行 script 这个宏任务
    3. 碰到 promise1 这边，执行 new Promise 里面内容，将带 resolve 的 setTimeout 推入宏任务队列
    4. 碰到 promise2，因为还没有进入 resolve 状态，所以这里不理会
    5. 连续两行输出，因为 promise1 和 promise2 都尚未处理，所以是 peading 状态
    6. 碰到第二个 setTimeout，将其推入宏任务队列
    7. 查看宏任务队列，推出第一个 setTimeout，将 Promise 状态改为 resolve
    8. 执行 promise2，改变 promise2 的状态为 reject
    9. 第一个 setTimeout 执行完毕，执行第二个 setTimeout
    10. 输出步骤 8 和 步骤 9 中的 Promise 状态
*/
```

### <a name="chapter-six-seven" id="chapter-six-seven"></a>6.7 题目七

> [返回目录](#chapter-one)

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
    console.log('timer1');
  }, 0);

  console.log('promise1 里面的内容');
});

const promise2 = promise1.then(() => {
  throw new Error('error!');
});

console.log('promise1-1', promise1);
console.log('promise2-1', promise2);

setTimeout(() => {
  console.log('timer2');
  console.log('promise1-1', promise1);
  console.log('promise2-2', promise2);
}, 0);

/**
  执行顺序和分析：
  顺序：
    * 'promise1 里面的内容'
    * 'promise1-1' Promise { <pending> }
    * 'promise2-1' Promise { <pending> }
    * 'timer1'
    * 'timer2'
    * 'promise1-2' Promise { <resolve>: 'success' }
    * 'promise2-2' Promise { <reject>: Error: error! }
  注意：在 Node v10.16.0 上运行结果不太相同
  分析：
    跟上一题类型相似，这里不做分析
*/
```

## <a name="chapter-seven" id="chapter-seven"></a>七 .then() 链式操作

> [返回目录](#chapter-one)

### <a name="chapter-seven-one" id="chapter-seven-one"></a>7.1 两个参数

> [返回目录](#chapter-one)

在上面的题目中，我们尽情了解了 `.then()`，但是我们并没有细讲，所以这里进行一一讲解。

话不多说，先看代码：

```js
const promise1 = new Promise((resolve, reject) => {
  resolve('1');
});

promise1.then(
  (res) => {
    console.log('res：', res);
  }, (err) => {
    console.log('err：', err);
  }
)

const promise2 = new Promise((resolve, reject) => {
  reject('1');
});

promise2.then(
  (res) => {
    console.log('res：', res);
  }, (err) => {
    console.log('err：', err);
  }
)
```

它输出啥：

```
res： 1
err： 1
```

所以，实际上 `.then()` 是接收 2 个参数的：

* `resolved`：如果我们设置了 `resolved` 状态，那么我们就会走第一个参数。
* `rejected`：如果我们设置了 `rejected` 状态，那么我们就会走第二个参数。

这第 2 个参数和 `.catch()` 是差不多的。

但是，为了保持代码的可观，建议第二个参数改为 `.catch()`，方便理解。

### <a name="chapter-seven-two" id="chapter-seven-two"></a>7.2 链式调用

> [返回目录](#chapter-one)

在 `Promise.then()` 方法中，`.then()` 是可以链式调用的。

```js
Promise.resolve(1).then((res1) => {
  console.log('res 1：', res1); // res 1： 1
  return res1;
}).then((res2) => {
  console.log('res 2：', res2); // res 2： 1
})
```

可以看到，下一个 `.then()`，可以接收上一个 `.then()` 中 `return` 出来的内容。

当然，值得注意的是，如果我们没有 `return res1`，那么输出会变成：`res 2： undefined`。

这样，如果我们需要做一些异步操作，那么就可以使用这种方法。

话不多说，先上代码：

```js
const red = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('红');
      resolve('红灯走完了');
    }, 1000);
  });
}
const green = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('绿');
      resolve('绿灯走完了');
    }, 1000);
  });
}

red().then((res1) => {
  console.log('res1：', res1);
  return green();
}).then((res2) => {
  console.log('res2：', res2);
})

/*
  1s 后输出：
    红
    res1： 红灯走完了

  2s 后输出：
    绿
    res2： 绿灯走完了
*/
```

这里边，红灯返回一个 `Promise` 对象，等 `setTimeout` 走完，状态变为 `resolved`，那么就走 `.then()`，继而 1s 后输出：`红 -> res1： 红灯走完了`。

接着，我们将 `green()` 执行了，并将它的返回 `return` 给了下一个 `.then()`。

所以，我们会在 2s 后输出 `绿 -> 绿灯走完了`。

这就是 `.then()` 的门门道道。

## <a name="chapter-eight" id="chapter-eight"></a>八 .catch() 捕获问题

> [返回目录](#chapter-one)

在上面我们提到过：

* `reject` 的作用是将 `Promise` 对象的状态从 “未完成” 变为 “失败”（`pending -> rejected`）

而 `.then()` 的第 2 个参数和 `.catch()` 是一样的作用，都是捕获失败的内容的。

```js
const getRandom = new Promise((resolve, reject) => {
  const number = Math.random() * 10; // 生成 1-10 范围的数字
  if (number > 5) {
    reject('数字超过 5');
  } else {
    resolve('数字小于 5');
  }
});

// 捕获错误方式一：使用 catch()
getRandom.then((res) => {
  console.log('res：', res);
}).catch((error) => {
  console.log('error：', error);
});

// 捕获错误方式二：then() 有两个参数
getRandom.then(
  (res) => { // 等同于 then()
    console.log('res：', res);
  }, (error) => { // 等同于 catch()
    console.log('error：', error);
  },
);

/*
 输出：

  * res： 数字小于 5
  * error： 数字超过 5
  
  两者中随机一个
*/
```

当然，为了阅读可观，建议还是使用 `.then().catch()` 的方式，而不是通过 `.then()` 里面的第 2 个参数来表示。

## <a name="chapter-night" id="chapter-night"></a>九 .finally() 强制执行

> [返回目录](#chapter-one)

`finally` 方法用于指定不管 `Promise` 对象最后状态如何，都会执行的操作。

同时，`.finally()` 方法的回调函数是不接受任何参数的，因为它是强制执行，不需要依赖 `Promise` 的执行结果。

它本质上就是 `.then()` 方法的特例。

```js
// 1. 设置一个 promise
const promise = new Promise((resolve, reject) => {
  // 2. 设置一个 0-10 随机数
  const number = Math.floor(Math.random() * 10);

  // 3. 如果这个数大于 5，我们当它成功了
  if (number > 5) {
    resolve('大于 5'); // resolve 相当于解决的意思
  } else { // 4. 否则就是失败的
    reject('小于 5'); // reject 相当于处理失败的意思
  }
});

// 5. 如果是 resolve，那就走 .then；如果是 reject，那就走 .catch
promise.then((res) => {
  console.log('成功：', res);
}).catch((error) => {
  console.log('失败：', error);
}).finally(() => {
  // 6. 注意 finally 就是剧终的意思，不管是好结局还是坏结局，都是结局
  console.log('不管前面发生了啥，我都会调用');
});
```

咱们拿开头的这份代码来回顾下 `.finally()` 吧：

> 输出 1

```
失败： 小于 5
不管前面发生了啥，我都会调用
```

> 输出 2

```
成功： 大于 5
不管前面发生了啥，我都会调用
```

因为我们用了随机值，所以上面 2 种输出都有可能。

但是，不管是哪种输出，`.finally()` 是一定会走出来的。

## <a name="chapter-ten" id="chapter-ten"></a>十 题库：.then()、.catch()、.finally()

> [返回目录](#chapter-one)

### <a name="chapter-ten-one" id="chapter-ten-one"></a>10.1 题目一

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  resolve('success1');
  reject('error');
  resolve('success2');
});

promise.then((res) => {
  console.log('then1: ', res);
}).then((res) => {
  console.log('then2: ', res);
}).catch((error) => {
  console.log('catch: ', error);
});

/**
  执行顺序和分析：
  顺序：
    * 'then1: success1'
    * 'then2: undefined'
  分析：
    1. 执行了 resolve('success1') 后，改变了状态为 resolve，不在理会 new Promise 后面的
    2. 将第 1 个 .then() 添加到微任务
    3. 执行第 1 个 .then()，将第 2 个 .then() 推进微任务
*/
```

### <a name="chapter-ten-two" id="chapter-ten-two"></a>10.2 题目二

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  reject('error');
  resolve('success2');
});

promise.then((res) => {
  console.log('then1: ', res);
}).then((res) => {
  console.log('then2: ' ,res);
}).catch((error) => {
  console.log('catch: ', error);
}).then((res) => {
  console.log('then3: ', res);
})

/**
  执行顺序和分析：
  顺序：
    * 'catch:  error'
    * 'then3:  undefined'
  分析：
    1. 碰到 new Promise()，将 reject('error') 执行，改变 Promise 的状态
    2. 碰到 .catch()，将其推进微任务
    3. 执行 .catch() 里面内容，输出 'catch: error'，然后 return Promise {<pending>}
    4. 执行下一个微任务 .then()，输出 then3: undefined
*/
```

### <a name="chapter-ten-three" id="chapter-ten-three"></a>10.3 题目三

> [返回目录](#chapter-one)

```js
Promise
.resolve(1)
.then((res) => {
  console.log(res);
  return 2;
}).catch((err) => {
  return 3;
}).then((res) => {
  console.log(res);
});

/**
  执行顺序和分析：
  顺序：
    * 1
    * 2
  分析：
    1. resolve(1) 走了第一个 .then，打印 1
    2. return 2 会被包装成 resolve(2)
    3. 因为没有 reject，所以不走 .catch
    4. 走完第 2 个 .then，打印 2
*/
```

### <a name="chapter-ten-four" id="chapter-ten-four"></a>10.4 题目四

> [返回目录](#chapter-one)

```js
Promise
.reject(1)
.then((res) => {
  console.log(res);
  return 2;
}).catch((err) => {
  console.log(err);
  return 3;
}).then((res) => {
  console.log(res);
});

/**
  执行顺序和分析：
  顺序：
    * 1
    * 3
  分析：
    1. reject(1) 会走 .catch，所以先输出 1
    2. return 3 会被包装成 resolve(3)
    3. 所以继续走第 2 个 .then，输出 3
*/
```

### <a name="chapter-ten-five" id="chapter-ten-five"></a>10.5 题目五

> [返回目录](#chapter-one)

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer');
    resolve('success');
  }, 0);
});

const start = Date.now();

promise.then((res) => {
  console.log(res, Date.now() - start);
});

promise.then((res) => {
  console.log(res, Date.now() - start);
});

/**
  执行顺序和分析：
  顺序：
    * 'timer'
    * 'success 4'
    * 'success 4'
  注释：也有 3/4 或者 4/5 的情况
  分析：
    1. new Promise 将 setTimeout 添加进宏任务
    2. 执行完宏任务 script，然后就执行 setTimeout
    3. 输出 'timer'
    4. 标记 Promise 状态为 resolve
    5. 将第一个 .then() 放进微任务
    6. 将第二个 .then() 放进微任务
    7. 因为步骤 5 和步骤 6 的时候，这两者都是相同 resolve 值，所以都是 'success'
    8. 输出 success 4
    9. 输出 success 4
    10. 如果执行比较慢，那么这两个输出的值会不一致。例如 3、4
*/
```

### <a name="chapter-ten-six" id="chapter-ten-six"></a>10.6 题目六

> [返回目录](#chapter-one)

```js
Promise.resolve().then(() => {
  return new Error('error!');
}).then((res) => {
  console.log('then: ', res);
}).catch((err) => {
  console.log('catch: ', err);
});

/**
  执行顺序和分析：
  顺序：
    * 'then:  Error: error!'
  分析：
    return new Error('error!') 会被包裹成 return Promise.resolve(new Error('error!')) 返回到 .then()
*/
```

### <a name="chapter-ten-seven" id="chapter-ten-seven"></a>10.7 题目七

> [返回目录](#chapter-one)

```js
const promise = Promise.resolve().then(() => {
  return promise;
});

promise.catch((err) => {
  console.log(err);
});

/**
  执行顺序和分析：
  顺序：
    * TypeError: Chaining cycle detected for promise #<Promise>
  分析：
    不能返回 promise 本身，会造成死循环
*/
```

### <a name="chapter-ten-eight" id="chapter-ten-eight"></a>10.8 题目八

> [返回目录](#chapter-one)

```js
Promise
.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log);

/**
  执行顺序和分析：
  顺序：
    * 1
  分析：
    1. .then 和 .catch 的参数希望是函数，传入非函数会发生值透传
    2. 值透传导致第 1 个 then 和第 2 个 then 传入的都不是函数，导致它传到最后的 1 个 then 里面
*/
```

### <a name="chapter-ten-night" id="chapter-ten-night"></a>10.9 题目九

> [返回目录](#chapter-one)

```js
Promise
.reject('err')
.then((res) => {
  console.log('success: ', res);
}, (err) => {
  console.log('error: ', err);
}).catch((err) => {
  console.log('catch: ', err);
})

/**
  执行顺序和分析：
  顺序：
    * 'error:  err'
  分析：
    reject('err') 会进入 Promise.then 的第二个参数，所以输出 'error: err'
*/
```

如果本题中的 `.then()` 中的第 2 个参数去掉了，那么就会进入 `.catch()` 函数中。

### <a name="chapter-ten-ten" id="chapter-ten-ten"></a>10.10 题目十

> [返回目录](#chapter-one)

```js
Promise
.resolve()
.then((res) => {
  throw new Error('error!');
}, (err) => {
  console.log('error: ', err);
}).catch((err) => {
  console.log('catch: ', err);
})

/**
  执行顺序和分析：
  顺序：
    * catch:  Error: error!
  分析：
    因为是 .resolve()，所以会执行 .then 第 1 个参数，然后 return 的值到 .catch 中
    而不是返回第 2 个参数上
*/
```

### <a name="chapter-ten-eleven" id="chapter-ten-eleven"></a>10.11 题目十一

> [返回目录](#chapter-one)

1. `.finally()` 方法不管 `Promise` 对象最后的状态如何都会执行。
2. `.finally()` 方法的回调函数不接受任何的参数，也就是说你在 `.finally()` 函数中是没法知道 `Promise` 最终的状态是 `resolved` 还是 `rejected` 的。
3. 它最终返回的默认会是一个上一次的 `Promise` 对象值，不过如果抛出的是一个异常则返回异常的 `Promise` 对象。

```js
Promise
.resolve('1')
.then((res) => {
  console.log(res);
}).finally(() => {
  console.log('finally1');
});

Promise
.resolve('2')
.finally(() => {
  console.log('finally2');
  return '这里是 finally2';
}).then((res) => {
  console.log('finally2 后面的 then 函数', res);
})

/**
  执行顺序和分析：
  顺序：
    * 1
    * 'finally2'
    * 'finally1'
    * 'finally2 后面的 then 函数 2'
  分析：
*/
```

### <a name="chapter-ten-twelve" id="chapter-ten-twelve"></a>10.12 题目十二

> [返回目录](#chapter-one)

```js
Promise
.resolve('1')
.finally(() => {
  console.log('finally1');
  return new Error('我是 finally1 中抛出的异常');
}).then((res) => {
  console.log('finally 后面的 then 函数: ', res);
}).catch((err) => {
  console.log('捕获错误: ', err);
})

/**
  执行顺序和分析：
  顺序：
    * 'finally1'
    * 捕获错误:  Error: 我是 finally1 中抛出的异常
  分析：
    1. 碰到 resolve('1')，将 Promise 的状态改为 resolve
    2. 碰到 .finally()，丢进微任务，后面 .then() 和 .catch() 需要等 .finally() 执行完毕
    3. 执行 .finally()，输出 'finally1'，然后执行 throw new Error，这里会将这种情况交由到 .catch()
    4. 输出 捕获错误:  Error: 我是 finally1 中抛出的异常
  补充：
    这里如果是 return throw new Error('') 会发生什么情况呢？
    它会走 .then()，因为它是 return 的形式，从而输出：finally 后面的 then 函数: 1
    注意这里的 return new Error('') 并没有返回函数，所以 1 穿透了
*/
```

### <a name="chapter-ten-thirteen" id="chapter-ten-thirteen"></a>10.13 题目十三

> [返回目录](#chapter-one)

```js
function promise1() {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1');
  });
  return p;
}

function promise2() {
  return new Promise((resolve, reject) => {
    reject('error');
  });
}

promise1().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('finally1');
})

promise2().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('finally2');
})

/**
  执行顺序和分析：
  顺序：
    * 'promise1'
    * '1'
    * 'error'
    * 'finally1'
    * 'finally2'
  分析：
    1. 执行 promise1()，进入里面代码
    2. 碰到 p，将 p 内容执行一遍，打印 'promise1'，同时将其状态改为 resolve
    3. 此时 promise1() 将 .then() 这个微任务推进微任务队列，我们记为微 1
    4. 步骤 1 到 3，promise1() 执行完毕
    5. 开始执行 promise2()，碰到 return new Promise，将其状态改为 reject
    6. 碰到 promise2() 中的 .then()，将其推进微任务队列，记为微 2
    7. script 这个宏任务执行完毕，开始执行微任务队列
    8. 推出微 1，打印 '1'，因为上面我们传的 p 是 resolve('1')
    9. 将 promise1() 里面的 finally1 推入微任务队列，记为微 3
    10. 推出微 2，因为前面标记的时候，传的值是 'error'，所以我们输出 'error'
    11. 推出微 3，输出 'finally1'
    12. 推出微 4，输出 'finally2'
*/
```

### <a name="chapter-ten-fourteen" id="chapter-ten-fourteen"></a>10.14 题目十四

> [返回目录](#chapter-one)

```js
function promise1() {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1');
  });
  return p;
}

function promise2() {
  return new Promise((resolve, reject) => {
    reject('error');
  });
}

promise1().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).then(() => {
  console.log('then1');
})

promise2().then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
}).then(() => {
  console.log('then2');
})

/**
  执行顺序和分析：
  顺序：
    * 'promise1'
    * '1'
    * 'error'
    * 'then1'
    * 'then2'
  分析：
    推导过程跟上题一样
*/
```

## <a name="chapter-eleven" id="chapter-eleven"></a>十一 .all() 接力赛

> [返回目录](#chapter-one)

Promise 的 `all` 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

假设有代码：

```js
const p = Promise.all([p1, p2, p3]);
```

`p` 的状态由 `p1`、`p2`、`p3` 决定，分成两种情况。

1. 只有 `p1`、`p2`、`p3` 的状态都变成 `fulfilled`，`p` 的状态才会变成 `fulfilled`，此时 `p1`、`p2`、`p3` 的返回值组成一个数组，传递给 `p` 的回调函数。
2. 只要 `p1`、`p2`、`p3` 之中有一个被 `rejected`，`p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数。

所以，结合一下 `setTimeout` 当做异步函数，我们尝试下运用 `.all()` 方法：

```js
const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log('one');
    resolve('one');
  }, 1000);
}) 
const two = new Promise((resolve) => {
  setTimeout(() => {
    console.log('two');
    resolve('two');
  }, 3000);
}) 
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve('three');
  }, 2000);
}) 

/*
 先输出：
 * one
 * three
 * two
 
 再输出 res：[ 'one', 'two', 'three' ]
*/
Promise.all([one, two, three]).then((res) => {
  console.log(res); // [ 'one', 'two', 'three' ]
});
```

这是所有状态都成功的，如果这 3 个中有 1 个是失败的呢？请自行尝试。

## <a name="chapter-twelve" id="chapter-twelve"></a>十二 .race() 个人赛

> [返回目录](#chapter-one)

和 `all()` 方法不同，`Promise.race()` 方法是谁先走完谁先输出。

就好比跑步比赛的个人 100 米赛跑一样，拿第 1 的才值得被人记住，其他的就不用过多理会了。

将上面的例子中，`.all()` 改为 `.race()`，则会得到不一样的结果。

```js
const one = new Promise((resolve) => {
  setTimeout(() => {
    console.log('one');
    resolve('one resolve');
  }, 1000);
}) 
const two = new Promise((resolve) => {
  setTimeout(() => {
    console.log('two');
    resolve('two resolve');
  }, 3000);
}) 
const three = new Promise((resolve) => {
  setTimeout(() => {
    console.log('three');
    resolve('three resolve');
  }, 2000);
}) 

/*
 先输出 one
 再输出：one resolve
 最后依序输出：
 * three
 * two
*/
Promise.race([one, two, three]).then((res) => {
  console.log(res); // 'one'
});
```

## <a name="chapter-thirteen" id="chapter-thirteen"></a>十三 题库：.all()、.race()

> [返回目录](#chapter-one)

`Promise.all()` 和 `Promise.race()` 用法：

1. `.all()` 作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。
2. `.race()` 作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。

小总结：

1. `Promise.all().then()` 结果中的数组的顺序和 `Promise.all()` 接收到的数组的顺序一致，并不会因为 `setTimeout` 的输出而改变。
2. `Promise.all()` 和 `Promise.then()` 碰到会抛出异常的情况，都只会抛出最先出现问题的那个，被 `.then()` 的第二个参数或者 `.catch()` 捕获，但是不会影响数组中其他的异步任务的执行。

### <a name="chapter-thirteen-one" id="chapter-thirteen-one"></a>13.1 题目一

> [返回目录](#chapter-one)

在这之前我们先做下 `setTimeout` 知识点的复习：

```js
setTimeout(() => {
  console.log('2');
}, 2000);

setTimeout(() => {
  console.log('1-1');
}, 1000);

setTimeout(() => {
  console.log('1-2');
}, 1000);

setTimeout(() => {
  console.log('0');
}, 0);
```

这块的输出是啥？

```
0 -> 1-1 -> 1-2 -> 2
```

方便记忆，我们可以认为：

* 同为宏任务，多个 `setTimeout`，可以理解为，时间小的会被排在前面。

所以，原本我们的宏任务应该是个队列，但是正如在上面的 `script` 宏任务中，我们添加了 4 个 `setTimeout`，而这种相同的 `setTimeout`，我们按照时间进行排序。

这时候看第一题：

```js
function runAsync(x) {
  const p = new Promise((resolved, reject) => {
    if (x % 2 === 0) {
      return setTimeout(() => {
        console.log(x);
        resolved(x);
      }, 2000);
    }
    return setTimeout(() => {
      console.log(x);
      resolved(x);  
    }, 1000);
  });
  return p;
}

Promise.all([
  runAsync(1),
  runAsync(2),
  runAsync(3)
]).then((res) => {
  console.log(res);
})

/**
  执行顺序和分析：
  顺序：
    * 1
    * 3
    * 2
    * [1, 2, 3]
  分析：
    1. Promise.all 将 3 个 runAsync 按顺序添加进方法中
    2. 在 script 这个宏任务中，依次添加 3 个 setTimeout
    3. 根据时间对宏任务队列中的 setTimeout 进行重新排序
    4. 1、2、3 对应的秒数为 1s、2s、1s，所以排序为 1 -> 3 -> 2
    5. 等待一秒后，分别输出 1、3
    6. 等待两秒后，输出 2
    7. 执行 .then()，依照 .all() 中数组的排序输出对应的数组结果（怎么进来怎么出去）
  适用场景：
    需要预先加载多种图片、静态文件等，可以通过 Promise.all() 进行处理
*/
```

### <a name="chapter-thirteen-two" id="chapter-thirteen-two"></a>13.2 题目二

> [返回目录](#chapter-one)

```js
function runAsync (x) {
  const p = new Promise((res, rej) => {
    if (x === 3) {
      return setTimeout(() => {
        rej(x, console.log(x));
      }, 500);
    }
    return setTimeout(() => {
     res(x, console.log(x)); 
    }, 1000);
  });
  return p;
}

function runReject (x) {
  const p = new Promise((res, rej) => {
    return setTimeout(() => {
      rej(x, console.log(x));
    }, 1000 * x);
  });
  return p;
}

Promise.all([
  runAsync(1),
  runReject(4),
  runAsync(3),
  runReject(2),
]).then((res) => {
  console.log('then: ', res);
}, (err) => {
  console.log('err: ', err);
}).catch((err) => {
  console.log('catch: ', err);
})

/**
  执行顺序和分析：
  顺序：
    * 3
    * err: 3
    * 1
    * 2
    * 4
  分析：
    1. 首先，我们当 .all() 是一个队列，先进先出
    2. 此时宏任务依次添加 setTimeout(1)、setTimeout(4)、setTimeout(3)、setTimeout(2)
    3. OK，我们在前面说过，相同 setTimeout 会被排序，所以顺序变为 3 -> 1 -> 2 -> 4
    4. 这时候的 setTimeout 对应的时间为 500ms、1s、2s、4s
    5. 然后，需要记住一点新特性：.catch 只能捕获 .all 里面最先的那个异常，并且只执行一次
    6. 所以，先执行 3 的时候，会依次输出 3 -> err: 3
    7. 后面的 2 和 4 的异常不再抛出，依次输出 1 -> 2 -> 4
*/
```

### <a name="chapter-thirteen-three" id="chapter-thirteen-three"></a>13.3 题目三

> [返回目录](#chapter-one)

```js
function runAsync(x) {
  const p = new Promise((resolved, reject) => {
    if (x % 2 === 0) {
      return setTimeout(() => {
        console.log(x);
        resolved(x);
      }, 2000);
    }
    return setTimeout(() => {
      console.log(x);
      resolved(x);  
    }, 1000);
  });
  return p;
}

Promise.race([
  runAsync(2),
  runAsync(1),
  runAsync(3)
]).then((res) => {
  console.log('res: ', res);
})

/**
  执行顺序和分析：
  顺序：
    * 1
    * 'res: 1'
    * 3
    * 2
  注意：
    Node v10.16.0 的答案略有不同
  分析：
    1. Promise.race() 将 3 个 runAsync 按顺序添加进方法中
    2. 在 script 这个宏任务中，依次添加 3 个 setTimeout 宏任务：2 -> 1 -> 3
    3. 根据时间对宏任务队列中的 setTimeout 进行重新排序
    4. 1、2、3 对应的秒数为 1s、2s、1s，所以排序为 1 -> 3 -> 2
    5. 等待一秒后，输出 1
    6. 此时 .race() 迫不及待得想告诉你结果，跟着输出 res: 1
    7. 紧接着输出 3
    8. 等待两秒后，输出 2
  适用场景：
    用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作
*/
```

### <a name="chapter-thirteen-four" id="chapter-thirteen-four"></a>13.4 题目四

> [返回目录](#chapter-one)

```js
function runAsync (x) {
  const p = new Promise((res, rej) => {
    if (x === 3) {
      return setTimeout(() => {
        rej(x, console.log(x));
      }, 500);
    }
    return setTimeout(() => {
     res(x, console.log(x)); 
    }, 1000);
  });
  return p;
}

function runReject (x) {
  const p = new Promise((res, rej) => {
    return setTimeout(() => {
      rej(x, console.log(x));
    }, 1000 * x);
  });
  return p;
}

Promise.race([
  runAsync(1),
  runReject(4),
  runAsync(3),
  runReject(2),
]).then((res) => {
  console.log('then: ', res);
}, (err) => {
  console.log('err: ', err);
}).catch((err) => {
  console.log('catch: ', err);
})

/**
  执行顺序和分析：
  顺序：
    * 3
    * err: 3
    * 1
    * 2
    * 4
  分析：
    1. 首先，我们当 .race() 是一个队列，先进先出
    2. 此时宏任务依次添加 setTimeout(1)、setTimeout(4)、setTimeout(3)、setTimeout(2)
    3. OK，我们在前面说过，相同 setTimeout 会被排序，所以顺序变为 3 -> 1 -> 2 -> 4
    4. 这时候的 setTimeout 对应的时间为 500ms、1s、2s、4s
    5. 然后，需要记住一点：.race() 只会跑最先的那个
    6. 所以，先执行 3 的时候，会依次输出 3 -> err: 3
    7. 后面的 2 和 4 的异常不再抛出，依次输出 1 -> 2 -> 4
*/
```

## <a name="chapter-fourteen" id="chapter-fourteen"></a>十四 Promise 源码

> [返回目录](#chapter-one)

在 **jsliang** 手写源码系列中有详细分析。

* [jsliang 手写源码系列：Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise.md)

## <a name="chapter-fifteen" id="chapter-fifteen"></a>十五 题库：结合 async/await

> [返回目录](#chapter-one)

总结：

1. 在 `function()` 里面碰到 `await` 直接走里面内容。
2. 如果 `function()` 里的 `await` 后面还有其他代码，将其当做 `Promise.then()` 一样，视为微任务。

### <a name="chapter-fifteen-one" id="chapter-fifteen-one"></a>15.1 题目一

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

async1();

console.log(4);

/**
  执行顺序和分析：
  顺序：
    * 1
    * 3
    * 4
    * 2
  分析：
    1. 首先，我们执行 script 这个宏任务
    2. 碰到 async1()，执行里面代码，输出 1
    3. 碰到 await async2()，阻塞了，所以需要先执行 async2()
    4. 执行 async2()，输出 3
    5. 碰到 console.log(4)，输出 4
    6. 阻塞部分走完了，script 这个宏任务也走完了，接着走 async1() 后面的
    7. 输出 2
*/
```

### <a name="chapter-fifteen-two" id="chapter-fifteen-two"></a>15.2 题目二

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async');

  new Promise((resolve) => {
    console.log('promise');
    resolve();
  }).then((res) => {
    console.log('promise.then');
  })
}

async1();

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'async'
    * 'promise'
    * 'start'
    * 'promise.then'
  分析：
    1. 首先，我们执行 script 这个宏任务
    2. 碰到 async1()，执行里面代码，输出 'async'
    3. 碰到 new Promise，执行里面代码，输出 'promise'
    4. 将 Promise 的状态标记为 resolved
    5. 将 .then() 丢进微任务
    6. 输出 'start'
    7. 执行微任务 .then()，输出 'promise.then'
*/
```

### <a name="chapter-fifteen-three" id="chapter-fifteen-three"></a>15.3 题目三

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  setTimeout(() => {
    console.log('timer1 start');
  }, 0);
  Promise.resolve().then((res) => {
    console.log('promise1');
  })
  await async2();
  setTimeout(() => {
    console.log('timer1 end');
  }, 0);
  console.log('async1 end');
}

async function async2() {
  setTimeout(() => {
    console.log('timer2');
  }, 0);
  Promise.resolve().then((res) => {
    console.log('promise2');
  })
  console.log('async2');
}

async1();

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'async1 start'
    * 'async2'
    * 'start'
    * 'promise1'
    * 'promise2'
    * 'async1 end'
    * 'timer1 start'
    * 'timer2'
    * 'timer1 end'
  分析：
    1. 首先，我们理顺一个事实：在 await 后面的，会等当前宏任务里面所有微任务执行完毕，方且执行
    2. 碰到 async1()，开始执行里面内容
    3. 输出 'async1 start'
    4. 将 'timer1 start' 丢进宏任务队列，标记为宏 1
    5. 将 'promise1' 丢进微任务队列，标记为微 1
    6. 碰到 await async2()，先执行 async2，阻塞下面的代码，标记后面代码为马后炮 1
    7. 执行 async2，碰到 'timer2'，将其丢进宏任务队列，标记为宏 2
    8. 碰到 'promise2'，将其丢进微任务队列，标记为微 2
    9. 输出 'async2'
    10. async2 走完，继续往下走，输出 start
    11. 当前有 3 个部分我们没走，分别是微 1、微 2 和马后炮 1
    12. 【死记】，碰到不走 11 这种情况，我们需要记住先执行当前微任务，再马后炮
    13. 执行微任务，输出 'promise1'、'promise2'
    14. 执行马后炮，将 'timer1 end' 丢进宏任务队列，即为宏 3
    15. 输出 'async1 end'
    16. 依次执行宏 1、宏 2 和 宏 3，输出 'timer1 start' -> 'timer2' -> 'timer1 end'
  灵魂提升：
    如果 'timer1 start' -> 'timer2' -> 'timer1 end' 对应的时间分别为 500ms、1000ms、500ms，请问输出啥？
*/
```

### <a name="chapter-fifteen-four" id="chapter-fifteen-four"></a>15.4 题目四

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
  setTimeout(() => {
    console.log('timer1');
  }, 0);
}

async function async2() {
  setTimeout(() => {
    console.log('timer2');
  }, 0);
  console.log('async2');
}

async1();

setTimeout(() => {
  console.log('timer3');
}, 0);

console.log('start');

/**
  执行顺序和分析：
  顺序：
    * 'async1 start'
    * 'async2'
    * 'start'
    * 'async1 end'
    * 'timer2'
    * 'timer3'
    * 'timer1'
  分析：
    思路同上一道题
*/
```

### <a name="chapter-fifteen-five" id="chapter-fifteen-five"></a>15.5 题目五

> [返回目录](#chapter-one)

```js
async function fn() {
  return 123;
}

fn().then((res) => {
  console.log(res);
})

/**
  执行顺序和分析：
  顺序：
    * 123
  分析：
    正常情况下， async 中的 await 命令是一个 Promise 对象，返回该对象的结果
    但如果不是 Promise 对象的话，就会直接返回对应的值，相当于 Promise.resolve();
*/
```

### <a name="chapter-fifteen-six" id="chapter-fifteen-six"></a>15.6 题目六

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  await new Promise((resolve) => {
    console.log('promise1');
  })
  console.log('async1 success');
  return 'async1 end';
}

console.log('script start');

async1().then((res) => {
  console.log('res: ', res);
})

console.log('script end');

/**
  执行顺序和分析：
  顺序：
    * 'script start'
    * 'async1 start'
    * 'promise1'
    * 'script end'
  分析：
    1. 特殊题
    2. 在 await 后面的 Promise 是没有返回值的，所以 await 会一直等待
    3. 这样子的话，async1 success 这些后面的内容都不会执行了
  思考：
    如果在 'promise1' 后面添加一行 resolve('123'); 结果会怎样？
*/
```

### <a name="chapter-fifteen-seven" id="chapter-fifteen-seven"></a>15.7 题目七

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  await new Promise((resolve) => {
    console.log('promise1');
    resolve('promise resolve');
  })
  console.log('async1 success');
  return 'async1 end';
}

console.log('script start');

async1().then((res) => {
  console.log('res: ', res);
})

new Promise((resolve) => {
  console.log('promsie2');
  setTimeout(() => {
      console.log('timer');
  }, 0);
})

/**
  执行顺序和分析：
  顺序：
    * 'script start'
    * 'async1 start'
    * 'promise1'
    * 'promsie2'
    * 'async1 success'
    * 'res: async1 end'
    * 'timer'
  分析：
    1. 紧跟上一题的分析，Promise 必须 resolve 了，await 后面的代码才会继续执行
    2. 先走整体 script 宏任务，输出 'script start'
    3. 碰到 async1() 的执行，走里面去看看
    4. 输出 'async1 start'
    5. 碰到 await new Prmise
    6. 输出 'promise1'
    7. 看到 resolve，改变 Promise 状态，告知 await 有等待对象，将后面的内容丢进微任务 1
    8. 往下执行后面的 new Promsie
    9. 输出 'promsie2'
    10. 将 setTimeout 丢进宏任务 1
    11. 现在有一个微任务 1 和一个宏任务 1
    12. 先走微任务 1
    13. 输出 'async1 success'
    14. 碰到 return，告知后面添加一个微任务 2
    15. 继续执行微任务 2，输出 'res: async1 end'
    16. 没有其他微任务了，输出宏任务队列，输出 'timer1'
*/
```

### <a name="chapter-fifteen-eight" id="chapter-fifteen-eight"></a>15.8 题目八

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('settimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('promise1');
  resolve();
}).then((res) => {
  console.log('promise2');
})

console.log('script end');

/**
  执行顺序和分析：
  顺序：
    * 'script start'
    * 'async1 start'
    * 'async2'
    * 'promise1'
    * 'script end'
    * 'promise2'
    * 'async1 end'
    * 'settimeout'
  分析：
    到了这里就不需要解释了，跟上面题目类似
*/
```

### <a name="chapter-fifteen-night" id="chapter-fifteen-night"></a>15.9 题目九

> [返回目录](#chapter-one)

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(() => {
  console.log('settimeout');
}, 0);

async1();

new Promise((resolve) => {
  console.log('promise1');
  resolve();
}).then((res) => {
  console.log('promise2');
})

console.log('script end');

/**
  执行顺序和分析：
  顺序：
    * 'script start'
    * 'async1 start'
    * 'async2'
    * 'promise1'
    * 'script end'
    * 'async1 end'
    * 'promise2'
    * 'settimeout'
  注意：
    这里的输出 'async1 end' 和 'promise2'，在 Node v10.16.0 是反过来的
  分析：
    到了这里就不需要解释了，跟上面题目类似
*/
```

### <a name="chapter-fifteen-ten" id="chapter-fifteen-ten"></a>15.10 题目十

> [返回目录](#chapter-one)

```js
async function testSomething() {
  console.log('test something');
  return 'test something';
}

async function testAsync() {
  console.log('test async');
  return Promise.resolve('hello test async');
}

async function test() {
  console.log('test start');

  const v1 = await testSomething();
  console.log('v1: ', v1);

  const v2 = await testAsync();
  console.log('v2: ', v2);

  console.log(v1, v2);
}

test();

const promise = new Promise((resolve) => {
  console.log('promise start');
  resolve('promise');
})

promise.then((val) => {
  console.log(val);
})

console.log('test end');

/**
  执行顺序和分析：
  顺序：
    * 'test start'
    * 'test something'
    * 'promise start'
    * 'test end'
    * 'v1: test something'
    * 'test async'
    * 'promise'
    * 'v2: hello test async'
    * 'test something' 'hello test async'
  注意：
    这里的输出在 Node v10.16.0 是不同的
  分析：
    到了这里就不需要解释了，跟上面题目类似
*/
```

### <a name="chapter-fifteen-eleven" id="chapter-fifteen-eleven"></a>15.11 题目十一

> [返回目录](#chapter-one)

开始做 `async` 处理错误的题。

```js
async function async1() {
  await async2();
  console.log('async1');
  return 'async1 success';
}

async function async2() {
  return new Promise((resolve, reject) => {
    console.log('async2');
    reject('error');
  })
}

async1().then((res) => {
  console.log('res: ', res);
})

/**
  执行顺序和分析：
  顺序：
    * 'async2'
    * Promise {<rejected>: "error"}
  分析：
    如果在 async 函数中抛出了错误，则终止错误结果，不会继续向下执行。throw new Error 也是如此。
*/
```

## <a name="chapter-sixteen" id="chapter-sixteen"></a>十六 综合题

> [返回目录](#chapter-one)

### <a name="chapter-sixteen-one" id="chapter-sixteen-one"></a>16.1 题目一

> [返回目录](#chapter-one)

```js
const first = () => (new Promise((resolve1, reject1) => {
  console.log(3);
  
  const p = new Promise((resolve2, reject2) => {
    console.log(7);
    
    setTimeout(() => {
      console.log(5);
      resolve1(6);
      console.log(p);
    }, 0);

    resolve2(1);
  });

  resolve1(2);

  p.then((res1) => {
    console.log('res1: ', res1);
  });
}));

first().then((res2) => {
  console.log('res2: ', res2);
});

console.log(4);

/**
  执行顺序：
    * 3
    * 7
    * 4
    * res: 1
    * res: 2
    * 5
    * Promise{ <resolve> 1 }
*/
```

### <a name="chapter-sixteen-two" id="chapter-sixteen-two"></a>16.2 题目二

> [返回目录](#chapter-one)

```js
const async1 = async() => {
  console.log('async1');
  
  setTimeout(() => {
    console.log('timer1');
  }, 2000);

  await new Promise((resolve) => {
    console.log('promise1');
  })

  console.log('async1 end');
  return 'async1 success';
};

console.log('script start');

async1().then((res1) => {
  console.log('res1: ', res1);
})

console.log('script end');

Promise
.resolve(1)
.then(2)
.then(Promise.resolve(3))
.catch(4)
.then((res2) => {
  console.log('res2: ', res2);
})

setTimeout(() => {
  console.log('timer2');
}, 1000);

/**
  执行顺序：
    * 'script start'
    * 'async1'
    * 'promise1'
    * 'script end'
    * 'res2: 1'
    * 'timer2'
    * 'timer1'
*/
```

### <a name="chapter-sixteen-three" id="chapter-sixteen-three"></a>16.3 题目三

> [返回目录](#chapter-one)

```js
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3');
    console.log('timer1');
  }, 0);
  resolve('resolve1');
  resolve('resolve2');
}).then((res) => {
  console.log(res);
  setTimeout(() => {
    console.log(p1);
  }, 1000);
}).finally((res) => {
  console.log('finally: ', res);
})

/**
  执行顺序：
    * 'resolve1'
    * 'finally: undefined'
    * 'timer1'
    * 'Promise { <resolved> undefined }'
*/
```

## <a name="chapter-seventeen" id="chapter-seventeen"></a>十七 大厂题

> [返回目录](#chapter-one)

### <a name="chapter-seventeen-one" id="chapter-seventeen-one"></a>17.1 使用 Promise 实现每隔一秒输出 1、2、3

> [返回目录](#chapter-one)

```js
const oneToThree = () => {
  const arr = [1, 2, 3];
  arr.reduce((prev, next) => {
    return prev.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(next);
          resolve();
        }, 1000);
      })
    });
  }, Promise.resolve())
};

console.log(oneToThree());
```

改写 forEach：

```js
/**
 * 实现函数 forEach(arr, cb)，使 cb 逐个处理 arr 中的元素
 * 一次处理可能是同步的，也可能是异步的
 * 要求处理完成当前元素才能处理下一个。
 * 提示：cb 函数执行如果是异步，会返回一个 Promise
 */
const liangEach = (arr, cb) => {
  arr.reduce((prev, next) => {
    return prev.then((res1) => {
      return cb(next);
    });
  }, Promise.resolve())
};

const arr = [1, 2, 5];

liangEach(arr, (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(n);
      resolve();
    }, 1000);
  })
})
```

如果有 `async/await` 实现：

```js
/**
 * 实现函数 forEach(arr, cb)，使 cb 逐个处理 arr 中的元素
 * 一次处理可能是同步的，也可能是异步的
 * 要求处理完成当前元素才能处理下一个。
 * 提示：cb 函数执行如果是异步，会返回一个 Promise
 */
async function liangEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    await cb(arr[i]);
  }
};

const arr = [1, 2, 5];

liangEach(arr, (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(n);
      resolve();
    }, 1000);
  })
});
```

### <a name="chapter-seventeen-two" id="chapter-seventeen-two"></a>17.2 使用 Promise 实现红绿灯交替重复亮

> [返回目录](#chapter-one)

红灯 3 秒亮一次，黄灯 2 秒亮一次，绿灯 1 秒亮一次，用 Promise 实现 3 个灯交替重复亮。

已知函数：

```js
function red() {
  console.log('red');
}
function yellow() {
  console.log('yellow');
}
function green() {
  console.log('green');
}
```

答案：

```js
function red() {
  console.log('red');
}
function yellow() {
  console.log('yellow');
}
function green() {
  console.log('green');
}

const light = (timer, cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  })
}

const step = () => {
  Promise.resolve().then(() => {
    return light(3000, red);
  }).then(() => {
    return light(2000, yellow);
  }).then(() => {
    return light(1000, green);
  }).then(() => {
    return step();
  })
};

step();
```

### <a name="chapter-seventeen-three" id="chapter-seventeen-three"></a>17.3 实现 mergePromise 函数

> [返回目录](#chapter-one)

实现 `mergePromise` 函数，将传进去的数组按先后顺序执行，并且把返回的值先后放在数组 `data` 中。

例如：

```js
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return 1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return 2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return 3
})

function mergePromise () {
  // 在这里写代码
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```

答案：

```js
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return 1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return 2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return 3
})

function mergePromise (ajaxList) {
  const data = [];
  let promise = Promise.resolve();

  ajaxList.forEach((ajax) => {
    promise = promise.then(() => {
      return ajax();
    }).then((resolve) => {
      data.push(resolve);
      return data;
    })
  })

  return promise;
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```

### <a name="chapter-seventeen-four" id="chapter-seventeen-four"></a>17.4 根据 PromiseA+ 实现一个自己的 Promise

> [返回目录](#chapter-one)

在 **jsliang** 手写源码系列中有详细分析。

* [jsliang 手写源码系列：Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise.md)

### <a name="chapter-seventeen-five" id="chapter-seventeen-five"></a>17.5 封装一个异步加载图片的方法

> [返回目录](#chapter-one)

```js
function loadImg(url) {
  // ...实现代码
}
```

答案：

```js
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      console.log('图片加载完成');
      resolve(image);
    }
    image.onerror = () => {
      reject(new Error('加载失败' + url));
    }
    image.src = url;
  })
}
```

### <a name="chapter-seventeen-six" id="chapter-seventeen-six"></a>17.6 限制异步操作并发数并尽可能快地完成

> [返回目录](#chapter-one)

已知图片列表：

```js
var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
```

已知函数：

```js
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });
};

function limitLoad(urls, handler, limit) {
  // ...实现代码
}
```

求同时下载的链接熟练不超过 3 个的情况下，尽可能快地完成。

```js
const urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });
}

function limitLoad(urls, handler, limit) {
  let sequence = [].concat(urls); // 复制urls
  // 这一步是为了初始化 promises 这个"容器"
  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      // 返回下标是为了知道数组中是哪一项最先完成
      return index;
    });
  });
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
  return sequence
    .reduce((pCollect, url) => {
      return pCollect
        .then(() => {
          return Promise.race(promises); // 返回已经完成的下标
        })
        .then((fastestIndex) => {
          // 获取到已经完成的下标
          // 将"容器"内已经完成的那一项替换
          promises[fastestIndex] = handler(url).then(() => {
            return fastestIndex; // 要继续将这个下标返回，以便下一次变量
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
    .then(() => {
      // 最后三个用.all来调用
      return Promise.all(promises);
    });
}
limitLoad(urls, loadImg, 3)
  .then((res) => {
    console.log("图片全部加载完毕");
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

### <a name="chapter-seventeen-seven" id="chapter-seventeen-seven"></a>17.7 JS 实现异步调度器

> [返回目录](#chapter-one)

审题并完成下面代码：

```js
/**
 * 题目：JS 实现异步调度器
 * 要求：
 *  JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有 2 个
 *  完善下面代码中的 Scheduler 类，使程序能正确输出
 */

class Scheduler {
  add(promiseCreator) {
    // ...
  }
  // ...
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
const scheduler = new Scheduler();
const addTack = (time, order) => {
  return scheduler
    .add(() => timeout(time))
    .then(() => console.log(order));
};
addTack(1000, '1');
addTack(500, '2');
addTack(300, '3');
addTack(400, '4');

// 输出：2 3 1 4
// 一开始，1、2 两个任务进入队列
// 500ms 时，完成 2，输出 2，任务 3 进队
// 800ms 时，完成 3，输出 3，任务 4 进队
// 1000ms 时，完成 1，输出 1，没有下一个进队的
// 1200ms 时，完成 4，输出 4，没有下一个进队的
// 进队完成，输出 2 3 1 4
```

实现方式（`async/await`）：

```js
/**
 * 题目：JS 实现异步调度器
 * 要求：
 *  JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有 2 个
 *  完善下面代码中的 Scheduler 类，使程序能正确输出
 */

class Scheduler {
  constructor(maxNum) {
    this.taskList = [];
    this.count = 0;
    this.maxNum = maxNum; // 最大并发数
  }
  async add(promiseCreator) {
    // 如果当前并发超过最大并发，那就进入任务队列等待
    if (this.count >= this.maxNum) {
      await new Promise((resolve) => {
        this.taskList.push(resolve);
      })
    }

    // 次数 + 1（如果前面的没执行完，那就一直添加）
    this.count++;

    // 等待里面内容执行完毕
    const result = await promiseCreator();

    // 次数 - 1
    this.count--;

    // 将队首出队
    if (this.taskList.length) {
      this.taskList.shift()();
    }

    // 链式调用，将结果值返回出去
    return result;
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const scheduler = new Scheduler(2);
const addTack = (time, order) => {
  return scheduler
    .add(() => timeout(time))
    .then(() => console.log(order));
};
addTack(1000, '1');
addTack(500, '2');
addTack(300, '3');
addTack(400, '4');

// 输出：2 3 1 4
// 一开始，1、2 两个任务进入队列
// 500ms 时，完成 2，输出 2，任务 3 进队
// 800ms 时，完成 3，输出 3，任务 4 进队
// 1000ms 时，完成 1，输出 1，没有下一个进队的
// 1200ms 时，完成 4，输出 4，没有下一个进队的
// 进队完成，输出 2 3 1 4
```

## <a name="chapter-eighteen" id="chapter-eighteen"></a>十八 总结

> [返回目录](#chapter-one)

写到这里，终于扯完了所有要扯的内容。

**首先**，这篇文章的大部分题目，取自 [LinDaiDai_霖呆呆](https://juejin.im/user/360295513463912) 的文章，非常感激他的文章，我花了 8 小时以上，把这些题目结合浏览器和 `Node` 的打印敲了一遍，终于大略搞通这块相关内容。

同时，无业游民期间，感激呆呆的鼓励，对求职之路坚定信心。

**然后**，这篇文章大概是 `Promise` 的劝退文吧！

因为根据我编写和整理后的预估，它需要一周左右的时间进行阅读和大体掌控！

但是，如果你真的看完了，那么恭喜你：`Promise` 这块任督二脉你已经打通了。

**最后**，如果小伙伴觉得文章不错，欢迎各种鼓励（点赞、Star……），联系方式可以看个人 Github 首页，有问题也请尽量私聊，毕竟有时候真的感觉时间不够折腾：

* [jsliang 的文档库](https://github.com/LiangJunrong/document-library)

那么，江湖有缘再见！

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

手写源码系列 - Promise
===

> Create by **jsliang** on **2020-09-17 18:14:12**  
> Recently revised in **2020-09-18 00:07:54**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

JavaScript 里的异步方案的演进时，是用下面这种顺序：

* `callback -> promise -> generator -> async/await`

在计算机行业，盛行着一种朴素还原论的迷思。即认为越接近底层，技术含量越高。每个程序员都有读懂底层源代码的追求。

这在一定程度上是正确的。不过，我们也应该看到，一旦底层和表层之间，形成了领域鸿沟。精通底层，并不能代表在表层的水平。

比如游戏的开发者，不一定是游戏中的佼佼者。这在 FPS 射击游戏或者格斗游戏里尤为明显，这些游戏里的绝大部分顶尖玩家，完全不会写代码。

如果将精通 `Promise` 定义为，善于在各种异步场景中使用 `Promise` 解决问题。

那么，能手写 `Promise` 实现，对精通 `Promise` 帮助不大。

> 来源于微信公众号：工业聚

* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：写得比较细，没前面剖析的清晰】

```js
const isFunction = obj => typeof obj === 'function'
const isObject = obj => !!(obj && typeof obj === 'object')
const isThenable = obj => (isFunction(obj) || isObject(obj)) && 'then' in obj
const isPromise = promise => promise instanceof Promise

// Promise 有 3 个状态，分别是 pending, fulfilled 和 rejected。
// 在 pending 状态，Promise 可以切换到 fulfilled 或 rejected。
// 在 fulfilled 状态，不能迁移到其它状态，必须有个不可变的 value。
// 在 rejected 状态，不能迁移到其它状态，必须有个不可变的 reason。
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(f) {
  this.result = null
  this.state = PENDING
  this.callbacks = []

  let onFulfilled = value => transition(this, FULFILLED, value)
  let onRejected = reason => transition(this, REJECTED, reason)

  let ignore = false
  let resolve = value => {
    if (ignore) return
    ignore = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }
  let reject = reason => {
    if (ignore) return
    ignore = true
    onRejected(reason)
  }

  try {
    f(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

// Promise 必须有 then 方法，接受 onFulfilled 和 onRejected 参数。
// onFulfilled 和 onRejected 如果是函数，必须最多执行一次。
// onFulfilled 的参数是 value，onRejected 函数的参数是 reason。
// then 方法可以被调用很多次，每次注册一组 onFulfilled 和 onRejected 的 callback。它们如果被调用，必须按照注册顺序调用。
// 所以需要在 function Promise 中添加 this.callbacks = []
Promise.prototype.then = function(onFulfilled, onRejected) {
  // then 方法必须返回 promise。
  return new Promise((resolve, reject) => {
    let callback = { onFulfilled, onRejected, resolve, reject }

    // 当 state 处于 pending 状态，就储存进 callbacks 列表里。
    // 当 state 不是 pending 状态，就扔给 handleCallback 去处理。
    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      // 至于 handleCallback 是什么。其实不重要，我们只需要知道，它一定存在。我们总得做一些处理，不是写死在 then 函数里，就是在外部的辅助函数里。
      // 至于为啥要套个 setTimeout 呢？因为我们不是在 JS 引擎层面实现 Promise，而是使用 JS 去实现 JS Promises。在JS里无法主动控制自身 execution context stack。可以通过 setTimeout/nextTick 等 API 间接实现，此处选用了 setTimeout。
      setTimeout(() => handleCallback(callback, this.state, this.result), 0)
    }
  })
}

const handleCallback = (callback, state, result) => {
  let { onFulfilled, onRejected, resolve, reject } = callback
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch (error) {
    reject(error)
  }
}

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

// 一些特殊的 value 被 resolve 时，要做特殊处理。这个特殊处理，规范也明确描述了。
const resolvePromise = (promise, result, resolve, reject) => {
  // 第一步，如果 result 是当前 promise 本身，就抛出 TypeError 错误。
  if (result === promise) {
    let reason = new TypeError('Can not fufill promise with itself')
    return reject(reason)
  }

  // 第二步，如果 result 是另一个 promise，那么沿用它的 state 和 result 状态。
  if (isPromise(result)) {
    return result.then(resolve, reject)
  }

  // 第三步，如果 result 是一个 thenable 对象。先取 then 函数，再 call then 函数，重新进入 The Promise Resolution Procedure 过程。
  if (isThenable(result)) {
    try {
      let then = result.then
      if (isFunction(then)) {
        return new Promise(then.bind(result)).then(resolve, reject)
      }
    } catch (error) {
      return reject(error)
    }
  }

  // 若都不是，则直接 resolve result。
  resolve(result)
}

module.exports = Promise
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
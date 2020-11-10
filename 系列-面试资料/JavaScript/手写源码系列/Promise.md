手写源码系列 - Promise
===

> Create by **jsliang** on **2020-09-17 18:14:12**  
> Recently revised in **2020-11-09 09:49:43**

面试官：手写一个 `Promise`，要求实现 `resolve()/reject()/then()`……

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 迷思](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 简版手写 Promise](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 手写 Promise](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 Promise.all()](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Promise.race()](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 Promise 异步调度器](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 参考文献](#chapter-eight) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 迷思

> [返回目录](#chapter-one)

JavaScript 里的异步方案的演进中：

* `callback -> promise -> generator -> async/await`

在计算机行业，盛行着一种朴素还原论的迷思：即认为越接近底层，技术含量越高。

每个程序员都有读懂底层源代码的追求。

这在一定程度上是正确的。

不过，我们也应该看到，一旦底层和表层之间，形成了领域鸿沟。

精通底层，并不能代表在表层的水平。

比如游戏的开发者，不一定是游戏中的佼佼者。这在 `FPS` 射击游戏或者格斗游戏里尤为明显，这些游戏里的绝大部分顶尖玩家，完全不会写代码。

如果将精通 `Promise` 定义为，善于在各种异步场景中使用 `Promise` 解决问题。

那么，能手写 `Promise` 实现，对精通 `Promise` 帮助不大。

> 这段文本来源于 工业聚

## <a name="chapter-three" id="chapter-three"></a>三 简版手写 Promise

> [返回目录](#chapter-one)

```js
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
  const that = this;
  that.status = PENDING;
  that.value = null;
  that.reason = null;

  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = RESOLVED;
      that.value = value;
      that.resolvedCallbacks.map(cb => cb(value));
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;
      that.rejectedCallbacks.map(cb => cb(reason));
    }
  }

  try {
    fn(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  const that = this;
  
  if (that.status === PENDING) {
    that.resolvedCallbacks.push(onFullfilled);
    that.rejectedCallbacks.push(onRejected);
  }

  if (that.status === RESOLVED) {
    onFullfilled(that.value);
  }

  if (that.status === REJECTED) {
    onFullfilled(that.reason);
  }

  return that;
}

const p = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

p.then((res) => {
  console.log('结果：', res); // 结果：1000
}).then(() => {
  console.log('jsliang'); // jsliang
})
```

这段代码在 **jsliang** 的个人理解上是这样解读的：

1. 有 `pending`、`resolved` 以及 `rejected` 这 3 个状态。详见代码前 3 行。
2. 状态一旦由 `pending` 向 `resolve` 或者 `rejected` 转变，那就不能再次变化。详见代码 `function resolve` 和 `function reject`。
3. 代码执行到 `.then` 的时候，分为 2 种情况：其一是走了异步，状态成了 `PENDING`，走第一个逻辑；其二是 `RESOLVED` 或者 `REJECTED`，走了第二个和第三个逻辑。
4. 在走了第一个逻辑的情况中，因为我们是异步方案，所以会在 `n` 秒之后走 `function resolve` 或者 `function reject`，而在这两个方法体中，`that.resolvedCallbacks.map(cb => cb(value))` 或者 `that.rejectedCallbacks.map(cb => cb(reason))` 会将我们存入的回调方法进行执行，从而实现 `Promise.then()` 的功能。

如果小伙伴还不清晰地可以敲多两遍代码，如果小伙伴对 **jsliang** 的理解不感兴趣的，可以看看参考文献的 `Promise A+` 规范，更有利于小伙伴理解。

## <a name="chapter-four" id="chapter-four"></a>四 手写 Promise

> [返回目录](#chapter-one)

代码来源工业聚那篇文章：

> 一开始本来觉得这份代码非常健全，但是让 **jsliang** 默写真的太为难自己了，所以用了上一章的那份代码。

```js
/**
 * @name JsliangPromise
 * @description 手写 Promise
 */

/* ——————————————————————————————————————————————— 设置共用函数 ——————————————————————————————————————————————— */
// 判断是否为函数
const isFunction = (obj) => {
  return typeof obj === 'function';
};

// 判断是否为对象
const isObject = (obj) => {
  return !!(obj && typeof obj === 'object');
};

// 判断是否为 thenable
const isThenable = (obj) => {
  return (
    isFunction(obj)
    || isObject(obj)
  ) && 'then' in obj;
};

// 判断是否为 Promise
const isPromise = (promise) => {
  return promise instanceof JsliangPromise;
};


/* ——————————————————————————————————————————————— 设置 Promise 状态 ——————————————————————————————————————————————— */
/**
  1. Promise 有 3 个状态：pending、fulfilled、rejected
    * pending：Promise 可以切换到 fulfilled 或者 rejected 状态
    * fulfilled：不能迁移到其他状态，必须有个不可变的 value
    * rejected：不能迁移到其他状态，必须有个不可变的 reason
*/
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/* ——————————————————————————————————————————————— Promise 补充处理 ——————————————————————————————————————————————— */

// 3.6 handleCallback 函数，根据 state 状态，判断是走 fulfilled 路径还是 rejected 路径
const handleCallback = (callback, state, result) => {
  // 3.6.1 解构
  const { onFulfilled, onRejected, resolve, reject } = callback;

  // 3.6.2 判断
  try {
    // 3.6.3 如果是成功的
    if (state === FULFILLED) {
      // 3.6.4 判断 onFulfilled 是否为函数
      if (isFunction(onFulfilled)) {
        // 3.6.5 如果是，将它的返回值作为下一个 Promise 的 result
        resolve(onFulfilled(result));
      } else {
        // 3.6.6 如果不是，直接以当前 Promise 的 result 作为下一个 Promise 的 result
        resolve(result);
      }
    } else if (state === REJECTED) {
      if (isFunction(onRejected)) {
        resolve(onRejected(result));
      } else {
        reject(result);
      }
    }
  } catch (error) {
    // 3.6.7 如果执行过程抛错，那这个错误，作为下一个 Promise 的 rejected reason 来用
    reject(error);
  }
};

// 2.3.4 清空之前的内容
const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) {
    handleCallback(callbacks.shift(), state, result);
  }
};

// 2.3 状态一旦不是 pending，就不允许再次转换
const transition = (promise, state, result) => {
  // 2.3.1 如果是 pending，那么就就该成对应的 state 和 result
  if (promise.state !== PENDING) {
    return;
  }

  // 2.3.2 如果不是，那么就进行设置
  promise.state = state;
  promise.result = result;

  // 2.3.3 当状态变更时，异步清空所有 callbacks
  setTimeout(() => {
    handleCallbacks(promise.callbacks, state, result);
  }, 0);
}

// 2.6 一些特殊的 value 被 resolve 时，要做特殊处理。
// 这个特殊处理，规范也明确描述了
const resolvePromise = (promise, result, resolve, reject) => {
  // 2.6.1 如果 result 是当前 Promise 本身，就抛出 TypeError 错误
  if (result === promise) {
    return reject(new TypeError('Can not fulfill promise with itself'));
  }

  // 2.6.2 如果 result 是另一个 Promise，那么沿用当前的 state 和 result 状态
  if (isPromise(result)) {
    return result.then(resolve, reject);
  }

  // 2.6.3 如果 result 是一个 thenable 对象。
  // 先去 then 函数，再 call then 函数，重新进入 The Promise resolution procedure 过程
  if (isThenable(result)) {
    try {
      if (isFunction(result.then)) {
        return new JsliangPromise(then.bind(result)).then(resolve, reject);
      }
    } catch (error) {
      return reject(error);
    }
  }

  // 2.6.4 若都不是，直接 resolve result
  resolve(result);
};

/* ——————————————————————————————————————————————— Promise 实现 ——————————————————————————————————————————————— */

// 2. 设置 Promise
const JsliangPromise = function(f) {
  // 2.1 设置初始化状态
  this.state = PENDING;
  this.result = null;

  // 3.1 .then() 可以被多次调用，所以需要设置数组进行记录
  this.callbacks = [];

  // 2.2 构造 onFulfilled 来切换到 fulfilled，构造 onRejected 来切换到 rejected 状态
  const onFulfilled = value => transition(this, FULFILLED, value);
  const onRejected = reason => transition(this, REJECTED, reason);

  // 2.3 配合 ignore 来保证 resolve/reject 只有一次调用作用
  let ignore = false;
  
  // 2.4 设置 resolve 的处理方式
  let resolve = (value) => {
    if (ignore) {
      return;
    }
    ignore = true;
    // 2.5 对 resolve 进行 3 条规则判定
    resolvePromise(this, value, onFulfilled, onRejected);
  };

  let reject = (reason) => {
    if (ignore) {
      return;
    }
    ignore = true;
    onRejected(reason);
  }

  // 2.6 进行尝试
  try {
    // 2.6.1 将 resolve 和 reject 作为参数传入 f 函数，方便调用
    f(resolve, reject);
  } catch (error) {
    // 2.6.2 如果 f 函数执行报错，那么错误就作为 reject 的 reason 来用
    reject(error);
  }
}

// 3. Promise.then 方法
JsliangPromise.prototype.then = function (onFulfilled, onRejected) {
  // 3.2 .then() 方法返回 Promise，所以需要 return 一个出去
  return new JsliangPromise((resolve, reject) => {

    // 3.3 设置 callback
    const callback = { onFulfilled, onRejected, resolve, reject };

    // 3.4 如果 state 处于 pending 状态，就存储进 callbacks 列表里
    if (this.state === PENDING) {
      this.callbacks.push(callback);
    } else {
      // 3.5 如果不是，就扔个 handleCallback 去处理
      // 至于为什么用 setTimeout？因为我们模拟不了微任务，那就用宏任务去解决吧
      setTimeout(() => {
        handleCallback(callback, this.state, this.result);
      }, 0);
    }
  });
};

/* ——————————————————————————————————————————————— 测试 ——————————————————————————————————————————————— */

const promise = new JsliangPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve(2);
  }, 1000);
});

promise.then((res) => {
  console.log('res 1：', res);
  return 3;
}).then((res) => {
  console.log('res 2：', res);
});
```

## <a name="chapter-five" id="chapter-five"></a>五 Promise.all()

> [返回目录](#chapter-one)

下面我们练习一些题目。

给定内容：

```js
const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const b = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

Promise.myAll([a, b]).then((res) => {
  console.log('结果：', res);
});
```

要求输出 `结果：[ 500, 1000 ]`。

```js
Promise.myAll = function(arr) {
  // 1. 返回一个 Promise
  return new Promise((resolve, reject) => {

    // 2. 设置最终返回结果
    const result = [];

    // 3. 获取数组的长度以及当前进展索引 index
    const length = arr.length;
    let index = 0;

    // 4. 遍历数组，将里面所有内容走一遍
    for (let i = 0; i < arr.length; i++) {

      // 5 在 .then 里面给 result 设置内容
      // 如果 index 到了最尾，那么就 resolve(result)
      // 否则 reject(err)
      arr[i].then((res) => {
        result[i] = res;
        
        index++;

        if (index === length) {
          resolve(result);
        }
      }).catch((err) => {
        throw new Error(err);
      })
    }
  })
};
```

## <a name="chapter-six" id="chapter-six"></a>六 Promise.race()

> [返回目录](#chapter-one)

给定内容：

```js
const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const b = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

Promise.myRace([a, b]).then((res) => {
  console.log('结果：', res);
});
```

要求输出 `结果：500`。

`race` 方法和前面的 `all` 方法类似，不同的是它在第一次执行 `.then` 的时候直接返回结果就可以了，而不需要每个结果都返回。

```js
Promise.myRace = function(arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then((res) => {
        return resolve(res);
      }).catch((err) => {
        throw new Error(err);
      })
    }
  })
};

const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const b = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1000);
  }, 1000);
});

Promise.myRace([a, b]).then((res) => {
  console.log('结果：', res);
})
```

## <a name="chapter-seven" id="chapter-seven"></a>七 Promise 异步调度器

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

## <a name="chapter-eight" id="chapter-eight"></a>八 参考文献

> [返回目录](#chapter-one)

* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：大概看了遍，没前面剖析的清晰】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：写得比较细，没前面剖析的清晰】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：写得比较细，没前面剖析的清晰】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

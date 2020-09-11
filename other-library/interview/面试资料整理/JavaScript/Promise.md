Promise
===

> Create by **jsliang** on **2020-09-07 22:28:53**  
> Recently revised in **2020-09-11 17:20:18**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [x] [要就来45道Promise面试题一次爽到底](https://juejin.im/post/6844904077537574919)【阅读建议：8h+】
* [ ] [BAT前端经典面试问题：史上最最最详细的手写Promise教程](https://juejin.im/post/6844903625769091079)
* [ ] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)
* [ ] [你好，JavaScript异步编程---- 理解JavaScript异步的美妙](https://juejin.im/post/5b56c3586fb9a04faa79a8e0)
* [ ] [理解异步之美 --- promise与async await （三）](https://juejin.im/post/6844903664209887246?utm_source=gold_browser_extension)
* [ ] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)
* [ ] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)
* [ ] [Promise 必知必会（十道题）](https://juejin.im/post/6844903509934997511)
* [ ] [面试精选之Promise](https://juejin.im/post/6844903625609707534)
* [ ] [手写Promise 20行](https://juejin.im/post/5e6f4579f265da576429a907)
* [ ] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)
* [ ] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)
* [ ] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)
* [ ] [从setState promise化的探讨 体会React团队设计思想](https://zhuanlan.zhihu.com/p/28905707)

## <a name="chapter-three" id="chapter-three"></a>三 Promise 系列

> [返回目录](#chapter-one)

* `Promise` 基础
* `Promise` 结合 `setTimeout`
* `Promise` 中的 `then`、`catch`、`finally`
* `Promise` 中的 `all`、`race`
* `async`/`await` 的几道题
* `async` 处理错误
* 综合题
* 几道大厂的面试题

Event Loop 执行顺序：

1. 一开始整个脚本 `script` 作为一个宏任务执行
2. 执行过程中，**同步代码** 直接执行，**宏任务** 进入宏任务队列，**微任务** 进入微任务队列。
3. 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。
4. 执行浏览器 UI 线程的渲染工作。
5. 检查是否有 `Web Worker` 任务，有则执行。
6. 执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。

**微任务**包括：`MutationObserver`、`Promise.then()/catch()`、以 `Promise` 为基础开发的其他技术，例如 `fetch API`、V8 的垃圾回收过程、`Node 独有的 process.nextTick`。

**宏任务**包括：`script`、`setTimeout`、`setInterval`、`setImmediate`、`I/O`、`UI rendering`。

> 在所有任务开始的时候，由于宏任务包括了 `script`，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务（例如 `setTimeout`）将会被放到下一个宏任务中执行。

## <a name="chapter-four" id="chapter-four"></a>四 Promise 基础

> [返回目录](#chapter-one)

### 4.1 题目一

```js
const promise = new Promise((resolve, reject) => {
  console.log('promise');
});

console.log('1', promise);

/*
  输出顺序即分析：
  输出：
    1. promise
    2. 1 Promise { <pending> }
  分析：
    1. 从上到下，碰到 new Promise，输出 promise
    2. 输出 1 和 promise 当前状态
*/
```

### 4.2 题目二

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
    5. 回来执行步骤 4 的微任务，输出 3
*/
```

### 4.3 题目三

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

### 4.4 题目四

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
    5. 输出 2 和 promise2，当前 promise2 的状态为 peding
    6. 宏任务走完，执行微任务，输出 resolve1
*/
```

### 4.5 题目五

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

### 4.6 题目六

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

## <a name="chapter-five" id="chapter-five"></a>五 Promise 进阶：结合 `setTimeout`

> [返回目录](#chapter-one)

### 5.1 题目一

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

### 5.2 题目二

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

### 5.3 题目三

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

### 5.4 题目四

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

### 5.5 题目五

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
    * 'promist1'
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

### 5.6 题目六

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

### 5.7 题目七

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

## <a name="chapter-six" id="chapter-six"></a>六 Promise 进阶：`then`、`catch`、`finally`

> [返回目录](#chapter-one)

1. `Promise` 的状态已经改变就不能再改变。（6.1）
2. `.then()` 和 `.catch()` 都会返回一个新的 `Promise`，状态为 `pending`。（4.2）
3. `catch()` 不管连接到哪里，都能捕获上层未捕捉过的错误。（6.2）
4. 在 `Promise` 中，返回任意一个非 `Promise` 的值都会被包裹成 `Promise` 对象，例如 `return 2` 会被包装成 `return Promise.resolve(2)`。
5. `Promise` 的 `.then()` 和 `.catch()` 可以被调用多次，但是如果 `Promise` 内部的状态一经改变，并且有了一个值，那么后续每次调用 `.then()` 或者 `.catch()` 的时候都会直接拿到该值。（6.5）
6. `.then()` 或者 `.catch()` 中 `return` 一个 `error` 对象并不会抛出错误，所以不会被后续的 `.catch()` 捕获。（6.6）
7. `.then()` 或者 `.catch()` 返回的值不能是 `Promise` 本身，否则会造成死循环。（6.7）
8. `.then()` 或者 `.catch()` 的参数期望是函数，传入非函数则会发生值透传。（6.8）
9. `.then()` 方法能接受 2 个参数，第 1 个是成功处理的函数，第 2 个是处理失败的函数，在某些时候你可以认为 `.catch()` 是 `.then()` 第 2 个参数的简便写法。（6.9）
10. `.finally()` 方法也是返回一个 `Promise`，它在 `Promise` 结束的时候，无论结果为 `resolved` 还是 `rejected`，都会返回里面的回调函数。

### 6.1 题目一

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
    * 'then: success1'
    * 'then: undefined'
  分析：
    1. 执行了 resolve('success1') 后，改变了状态为 resolve，不在理会 new Promise 后面的
    2. 将第 1 个 .then() 添加到微任务
    3. 执行第 1 个 .then()，将第 2 个 .then() 推荐微任务
*/
```

### 6.2 题目二

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

### 6.3 题目三

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

### 6.4 题目四

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

### 6.5 题目五

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

### 6.6 题目六

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

### 6.7 题目七

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

### 6.8 题目八

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

### 6.9 题目九

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

### 6.10 题目十

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

### 6.11 题目十一

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

### 6.12 题目十二

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

### 6.13 题目十三

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

### 6.14 题目十四

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

## <a name="chapter-seven" id="chapter-seven"></a>七 Promise 进阶：`all`、`race`

> [返回目录](#chapter-one)

`Promise.all()` 和 `Promise.race()` 用法：

1. `.all()` 作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。
2. `.race()` 作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。

小总结：

1. `Promise.all().then()` 结果中的数组的顺序和 `Promise.all()` 接收到的数组的顺序一致，并不会因为 `setTimeout` 的输出而改变。
2. `Promise.all()` 和 `Promise.then()` 碰到会抛出异常的情况，都只会抛出最先出现问题的那个，被 `.then()` 的第二个参数或者 `.catch()` 捕获，但是不会影响数组中其他的异步任务的执行。

### 7.1 题目一

在这之前先理解：

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

### 7.2 题目二

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

### 7.3 题目三

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

### 7.4 题目四

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

## <a name="chapter-eight" id="chapter-eight"></a>八 Promise 进阶：`async`、`await`

> [返回目录](#chapter-one)

### 8.1 题目一

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

### 8.2 题目二

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

### 8.3 题目三

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

### 8.4 题目四

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

### 8.5 题目五

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

### 8.6 题目六

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

### 8.7 题目七

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

### 8.8 题目八

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

### 8.9 题目九

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

### 8.10 题目十

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

### 8.11 题目十一

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

## <a name="chapter-night" id="chapter-night"></a>九 综合题

> [返回目录](#chapter-one)

### 9.1 题目一

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

### 9.2 题目二

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

### 9.3 题目三

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

## <a name="chapter-ten" id="chapter-ten"></a>十 大厂题

> [返回目录](#chapter-one)

* [几道大厂的面试题](https://juejin.im/post/6844904077537574919#heading-50)

### 10.1 使用 Promise 实现每隔一秒输出 1、2、3

```js
const oneToThree = () => {
  const arr = [1, 2, 3];
  arr.reduce((prev, next) => {
    return prev.then((res1) => {
      return new Promise((res2) => {
        setTimeout(() => {
          res2(console.log(next), 1000);
        }, 1000);
      })
    });
  }, Promise.resolve())
};

console.log(oneToThree());
```

### 10.2 使用 Promise 实现红绿灯交替重复亮

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

### 10.3 实现 mergePromise 函数

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

### 10.4 根据 PromiseA+ 实现一个自己的 Promise

* [ ] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287#heading-7)
* [ ] [写一个符合 Promises/A+ 规范并可配合 ES7 async/await 使用的 Promise](https://zhuanlan.zhihu.com/p/23312442)

### 10.5 封装一个异步加载图片的方法

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

### 10.6 限制异步操作并发数并尽可能快地完成

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

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
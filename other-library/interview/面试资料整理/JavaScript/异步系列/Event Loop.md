异步系列 - Event Loop
===

> Create by **jsliang** on **2020-09-07 22:19:48**  
> Recently revised in **2020-09-21 19:46:22**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 单线程和多线程](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Event Loop](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 两个环境 Event Loop 对比](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 题目训练](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

`Event Loop` 即事件循环，是指浏览器或 `Node` 的一种解决 JavaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。

* [x] [浏览器与Node的事件循环(Event Loop)有何区别?](https://zhuanlan.zhihu.com/p/54882306)【阅读建议：20min】
* [x] [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200)【阅读建议：20min】
* [x] [事件循环机制的那些事](https://mp.weixin.qq.com/s/PBX_YHw0-f3bbSDH5ZbbJQ?)【阅读建议：10min】
* [x] [深入理解js事件循环机制（Node.js篇）](http://lynnelv.github.io/js-event-loop-nodejs)【阅读建议：无】
* [x] [详解 JavaScript 中的 Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)【阅读建议：5min】
* [x] [深入理解 JavaScript Event Loop](https://zhuanlan.zhihu.com/p/34229323)【阅读建议：20min】
* [x] [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.im/post/5d901418518825539312f587)【阅读建议：20min】
* [x] [JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)【阅读建议：10min】
* [x] [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)【阅读建议：20min】
* [x] [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)【阅读建议：无】
* [x] [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)【阅读建议：无】

**其他参考文献**：

* [x] [浏览器进程？线程？傻傻分不清楚！](https://imweb.io/topic/58e3bfa845e5c13468f567d5)【阅读建议：5min】

## <a name="chapter-three" id="chapter-three"></a>三 单线程和多线程

> [返回目录](#chapter-one)

JavaScript 是一个单线程的语言。

单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。

以 Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程。

一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。

当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

**浏览器内核** 是多线程的，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

* GUI 渲染线程：解析 HTML、CSS 等。在 JavaScript 引擎线程运行脚本期间，GUI 渲染线程处于挂起状态，也就是被 “冻结” 了。
* JavaScript 引擎线程：负责处理 JavaScript 脚本。
* 定时触发器线程：`setTimeout`、`setInterval` 等。事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 JS 引擎线程执行。
* 事件触发线程：负责将准备好的事件交给 JS 引擎执行。
* 异步 `http` 请求线程：负责执行异步请求之类函数的线程，例如 `Promise.then()`、`ajax` 等。

* 为什么不设计成多线程？

假设有个 DOM 节点，现在有线程 A 操作它，删除了这个 DOM；然后线程 B 又操作它，修改了某部分。那么现在问题来了，咱听谁的？

所以干脆设计成一个单线程，哪怕后期 HTML5 出了个 `web worker` 也是不允许操作 DOM 结构的，可以完成一些分布式的计算。

* 为什么需要异步？

这时候又有问题了，如果调用某个接口（Ajax），或者加载某张图片的时候，我们卡住了，这样页面是不是就一直不能渲染？

然后因为单线程只能先让前面的程序走完，即便这个接口或者图片缓过来了，我下面还有其他任务没做呢，这不就卡死了么？

所以这时候异步来了：

在涉及某些需要等待的操作的时候，我们就选择让程序继续运行。

等待接口或者图片返回过来后，就通知程序我做好了，你可以继续调用了。

* 为什么会有 Event Loop？

前面 **jsliang** 讲到： JavaScript 一样一次只能做一件事。

如果碰到一些需要等待的程序，例如 `setTimeout` 等，那就歇菜了，所以 JavaScript 为了协调事件、用户交互、脚本、渲染、网络等，就搞出来一个 **事件循环（Event Loop）**。

* 什么是 Event Loop？

JavaScript 从 `script` 开始读取，然后不断循环，从 “任务队列” 中读取执行事件的过程，就是 **事件循环（Event Loop）**。

* Event Loop 的执行机制？

## <a name="chapter-four" id="chapter-four"></a>四 Event Loop

> [返回目录](#chapter-one)

JavaScript 有一个 `main thread` 主线程和 `call-stack` 调用栈（执行栈），所有的任务都会被放到调用栈等待主线程执行。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 Event Loop 执行过程

> [返回目录](#chapter-one)

**Event Loop** 过程：

1. 一开始整个脚本 `script` 作为一个宏任务执行
2. 执行过程中，**同步代码** 直接执行，**宏任务** 进入宏任务队列，**微任务** 进入微任务队列。
3. 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。
4. 执行浏览器 `UI` 线程的渲染工作。
5. 检查是否有 `Web Worker` 任务，有则执行。
6. 执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。

事件循环中的异步队列有两种：宏任务队列（`MacroTask`）和 微任务队列（`MicroTask`）。

**宏任务队列可以有多个，微任务队列只有一个。**

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

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 Node 和 浏览器

> [返回目录](#chapter-one)

为啥会有 **浏览器 Event Loop** 和 **Node.js Event Loop**？

简单来说：

* **你的页面放到了浏览器去展示，你的数据放到了后台处理（将 Node.js 看成 PHP、Java 等后端语言），这两者能没有区别么？！**

再仔细一点：

* **Node.js**：Node.js 的 Event Loop 是基于 libuv。libuv 已经对 Event Loop 作出了实现。
* **浏览器**：浏览器的 Event Loop 是基于 [HTML5 规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) 的。而 HTML5 规范中只是定义了浏览器中的 Event Loop 的模型，具体实现留给了浏览器厂商。

> libuv 是一个多平台支持库，主要用于异步 I/O。它最初是为 Node.js 开发的，现在 Luvit、Julia、pyuv 和其他的框架也使用它。[Github - libuv 仓库](https://github.com/libuv/libuv)

所以，咱们得将这两个 Event Loop 区分开来，它们是不一样的东东哈~

## <a name="chapter-five" id="chapter-five"></a>五 两个环境 Event Loop 对比

> [返回目录](#chapter-one)

浏览器环境下，`microtask` 的任务队列是每个 `macrotask` 执行完之后执行。

而在 Node.js 中，`microtask` 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 `microtask` 队列的任务。

## <a name="chapter-six" id="chapter-six"></a>六 题目训练

> [返回目录](#chapter-one)

### 9.1 同步任务

```js
function bar() {
  console.log('bar');
}

function foo() {
  console.log('foo');
  bar();
}

foo();
```

### 9.2 定时器

```js
console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

setTimeout(function () {
  console.log("3");
}, 2000);

console.log("4");
```

### 9.3 定时器 + Promise

> 题 1

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

> 题 2

```js
Promise.resolve().then(function promise1() {
  console.log('promise1');
})

setTimeout(function setTimeout1() {
  console.log('setTimeout1')
  Promise.resolve().then(function promise2() {
    console.log('promise2');
  })
}, 0)

setTimeout(function setTimeout2() {
  console.log('setTimeout2')
}, 0)
```

### 9.4 综合

```js
console.log("1");

setTimeout(function () {
  console.log("2");

  new Promise(function (resolve) {
    console.log("3");
    resolve();
  }).then(function () {
    console.log("4");
  });
});

new Promise(function (resolve) {
  console.log("5");
  resolve();
}).then(function () {
  console.log("6");
});

setTimeout(function () {
  console.log("7");
});

setTimeout(function () {
  console.log("8");

  new Promise(function (resolve) {
    console.log("9");
    resolve();
  }).then(function () {
    console.log("10");
  });
});

new Promise(function (resolve) {
  console.log("11");
  resolve();
}).then(function () {
  console.log("12");
});

console.log("13");
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
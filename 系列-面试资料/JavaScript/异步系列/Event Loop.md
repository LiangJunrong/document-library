异步系列 - Event Loop
===

> Create by **jsliang** on **2020-09-07 22:19:48**  
> Recently revised in **2020-11-07 07:55:09**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 单线程和多线程](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Event Loop](#chapter-four) |
| &emsp;[4.1 Event Loop 执行过程](#chapter-four-one) |
| &emsp;[4.2 requestAnimationFrame](#chapter-four-two) |
| &emsp;&emsp;[4.2.1 requestAnimationFrame 介绍](#chapter-four-two-one) |
| &emsp;&emsp;[4.2.2 requestAnimationFrame 使用缘由](#chapter-four-two-two) |
| &emsp;[4.3 Web Worker](#chapter-four-three) |
| &emsp;&emsp;[4.3.1 Web Worker 使用](#chapter-four-three-one) |
| &emsp;&emsp;[4.3.2 Web Worker 数据通讯](#chapter-four-three-two) |
| &emsp;&emsp;[4.3.3 Web Worker 可操作 API](#chapter-four-three-three) |
| &emsp;&emsp;[4.3.4 Web Worker 兼容性](#chapter-four-three-four) |
| &emsp;[4.4 Node 和 浏览器](#chapter-four-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 两个环境 Event Loop 对比](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 题目训练](#chapter-six) |
| &emsp;[6.1 同步任务](#chapter-six-one) |
| &emsp;[6.2 定时器](#chapter-six-two) |
| &emsp;[6.3 定时器 + Promise](#chapter-six-three) |
| &emsp;[6.4 综合](#chapter-six-four) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 参考文献](#chapter-seven) |
| &emsp;[7.1 requestAnimationFrame 参考文献](#chapter-seven-one) |
| &emsp;[7.2 Web Worker 参考文献](#chapter-seven-two) |
| &emsp;[7.3 其他参考文献](#chapter-seven-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

`Event Loop` 即事件循环，是指浏览器或 `Node` 的一种解决 JavaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。

## <a name="chapter-three" id="chapter-three"></a>三 单线程和多线程

> [返回目录](#chapter-one)

JavaScript 是一个单线程的语言。

单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。

以 Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程。

一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。

当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

* **浏览器内核是怎样的？**

浏览器内核是多线程的，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

1. **GUI 渲染线程**：解析 HTML、CSS 等。在 JavaScript 引擎线程运行脚本期间，GUI 渲染线程处于挂起状态，也就是被 “冻结” 了。
2. **JavaScript 引擎线程**：负责处理 JavaScript 脚本。
3. **定时触发器线程**：`setTimeout`、`setInterval` 等。事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 JS 引擎线程执行。
4. **事件触发线程**：负责将准备好的事件交给 JS 引擎执行。
5. **异步 `http` 请求线程**：负责执行异步请求之类函数的线程，例如 `Promise.then()`、`ajax` 等。

* **为什么不设计成多线程？**

假设有个 `DOM` 节点，现在有线程 `A` 操作它，删除了这个 `DOM`；

然后线程 `B` 又操作它，修改了这个 `DOM` 某部分。

那么现在问题来了，咱听谁的？

所以干脆设计成一个单线程，安全稳妥不出事。

哪怕后期 HTML5 出了个 `Web Worker` 也是不允许操作 `DOM` 结构的，可以完成一些分布式的计算。

> `Web Worker` 在本文中有讲解

* **为什么需要异步？**

这时候又有问题了，如果调用某个接口（`Ajax`），或者加载某张图片的时候，我们卡住了，这样页面是不是就一直不能渲染？

然后因为单线程只能先让前面的程序走完，即便这个接口或者图片缓过来了，我下面还有其他任务没做呢，这不就卡死了么？

所以这时候异步来了：

在涉及某些需要等待的操作的时候，我们就选择让程序继续运行。

等待接口或者图片返回过来后，就通知程序我做好了，你可以继续调用了。

## <a name="chapter-four" id="chapter-four"></a>四 Event Loop

> [返回目录](#chapter-one)

* **为什么会有 Event Loop？**

前面 **jsliang** 讲到： JavaScript 线程一次只能做一件事。

如果碰到一些需要等待的程序，例如 `setTimeout` 等，那就歇菜了。

所以，JavaScript 为了协调事件、用户交互、脚本、渲染、网络等，就搞出来一个 **事件循环（Event Loop）**。

* **什么是 Event Loop？**

JavaScript 从 `script` 开始读取，然后不断循环，从 “任务队列” 中读取执行事件的过程，就是 **事件循环（Event Loop）**。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 Event Loop 执行过程

> [返回目录](#chapter-one)

**Event Loop** 执行过程如下：

1. 一开始整个脚本 `script` 作为一个宏任务执行
2. 执行过程中，**同步代码** 直接执行，**宏任务** 进入宏任务队列，**微任务** 进入微任务队列。
3. 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。
4. 执行浏览器 `UI` 线程的渲染工作。
5. 检查是否有 `Web Worker` 任务，有则执行。
6. 执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。

事件循环中的异步队列有两种：宏任务队列（`MacroTask`）和 微任务队列（`MicroTask`）。

> Web Worker 是运行在后台的 JS，独立于其他脚本，不会影响页面的性能。

**宏任务队列可以有多个，微任务队列只有一个。**

**宏任务** 包括：

* `script`
* `setTimeout`
* `setInterval`
* `setImmediate`
* `I/O`
* `UI rendering`

**微任务** 包括：

* `MutationObserver`
* `Promise.then()/catch()`
* 以 `Promise` 为基础开发的其他技术，例如 `fetch API`
* V8 的垃圾回收过程
* Node 独有的 `process.nextTick`

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 requestAnimationFrame

> [返回目录](#chapter-one)

#### <a name="chapter-four-two-one" id="chapter-four-two-one"></a>4.2.1 requestAnimationFrame 介绍

> [返回目录](#chapter-one)

`window.requestAnimationFrame()` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。

该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

`requestAnimationFrame` 简称 `rAF`。

我们看一下它使用情况：

```html
<body>
  <div class="animation">动画元素</div>

  <script>
    window.onload = function() {
      const element = document.querySelector('.animation'); 
      let start;

      function step(timestamp) {
        if (start === undefined) {
          start = timestamp;
        }
        const elapsed = timestamp - start;

        // 这里使用 Math.min() 确保元素刚好停在 200px 的位置。
        element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

        // 在两秒后停止动画
        if (elapsed < 2000) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    };
  </script>
</body>
```

#### <a name="chapter-four-two-two" id="chapter-four-two-two"></a>4.2.2 requestAnimationFrame 使用缘由

> [返回目录](#chapter-one)

如果我们使用 `setTimeout` 来实现动画效果，那么我们会发现在某些低端机上出现卡顿、抖动的现象，它产生的原因是：

* `setTimeout` 的执行事件并不是确定的。它属于宏任务队列，只有当主线程上的任务执行完毕后，才会调用队列中的任务判断是否开始执行。
* 刷新频率受屏幕分辨率和屏幕尺寸影响，因此不同设备的刷新频率不同，而 `setTimeout` 只能固定一个时间间隔刷新。

在上面 `Event Loop` 的过程中，我们知道执行完微任务队列会有一步操作：

* 执行浏览器 `UI` 线程的渲染工作。

而 `requestAnimationFrame` 就在这里边执行，就不会等宏任务队列的排队，从而导致卡顿等问题了。

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 Web Worker

> [返回目录](#chapter-one)

`Web Worker` 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。

如我们所知，JavaScript 一直是属于单线程环境，我们无法同时运行两个 JavaScript 脚本。

但是试想一下，如果我们可以同时运行两个（或者多个）JavaScript 脚本，一个来处理 UI 界面（一直以来的用法），一个来处理一些复杂计算，那么性能就会更好。

在 HTML5 的新规范中，实现了 `Web Worker` 来引入 JavaScript 的 “多线程” 技术，他的能力让我们可以在页面主运行的 JavaScript 线程中加载运行另外单独的一个或者多个 JavaScript 线程。

> 注意：JavaScript 本质上还是单线程的，`Web Worker` 只是浏览器（宿主环境）提供的一个得力 API。

#### <a name="chapter-four-three-one" id="chapter-four-three-one"></a>4.3.1 Web Worker 使用

> [返回目录](#chapter-one)

调用 Web Worker：

> index.js

```js
console.log('index-同步任务');
Promise.resolve().then((res) => {
  console.log('index-Promise');
});
setTimeout(() => {
  console.log('index-setTimeout');
}, 1000);
```

> index.html

```html
<script>
  window.onload = function() {
    console.log('本地-同步任务');
    // 微任务之间
    Promise.resolve().then((res) => {
      console.log('本地-微任务 1');
    })
    const worker1 = new Worker('./index.js');
    Promise.resolve().then((res) => {
      console.log('本地-微任务 2');
    })

    // 宏任务之间
    setTimeout(() => {
      console.log('本地-宏任务 1');
    }, 1000);
    const worker2 = new Worker('./index.js');
    setTimeout(() => {
      console.log('本地-宏任务 2');
    }, 1000);
  };
</script>
```

执行的时候打印结果：

```
本地-同步任务
本地-微任务 1
本地-微任务 2
index-同步任务
index-Promise
index-同步任务
index-Promise
本地-宏任务 1
本地-宏任务 2
index-setTimeout
index-setTimeout
```

可以看到：

1. 先执行 `script` 中同步任务
2. 再执行 `script` 中微任务
3. 然后执行 UI 线程的渲染工作（这里在代码中没有体现，感兴趣的可以试试添加 `rAF`）
4. 接着才执行 `Web Worker` 里面内容
5. 再来是 `index.html` 中的宏任务
6. 最后才是 `Web Worker` 文件中的宏任务

可以看出它仍符合 `Event Loop` 流程。

#### <a name="chapter-four-three-two" id="chapter-four-three-two"></a>4.3.2 Web Worker 数据通讯

> [返回目录](#chapter-one)

> index.js

```js
onmessage = (res) => {
  // Worker 接收数据
  console.log('Worker 收到数据：', res);
  // Worker 收到数据：
  // MessageEvent {isTrusted: true, data: "查房，这里是 index.html！", origin: "", lastEventId: "", source: null, …}

  // Worker 发送数据
  postMessage('开门！这里是 index.js');
}
```

> index.html

```html
<script>
window.onload = function() {
  // 实例化 Worker
  const worker = new Worker('./index.js');

  // index.html 接收数据
  worker.addEventListener('message', (res) => {
  console.log('index.html 收到数据：', res);
  // index.html 收到数据：
  // MessageEvent {isTrusted: true, data: "开门！这里是 index.js", origin: "", lastEventId: "", source: null, …}
  });

  // index.html 发送数据
  worker.postMessage('查房，这里是 index.html！');

  //  终止 Worker
  worker.terminate();
};
</script>
```

在 `index.html` 中，通过：

* `worker.addEventListener('message', callback)`。接收 Web Worker 传递的数据。
* `worker.postMessage('xxx')`。发送数据给 Web Worker。
* `worker.terminate()`。终止通讯

在 `index.js` 中，通过：

```js
onmessage = (res) => {
  console.log(res); // 在 onmessage 方法接受数据
  postMessage('xxx'); // 通过 postMessage 发送数据
}
```

#### <a name="chapter-four-three-three" id="chapter-four-three-three"></a>4.3.3 Web Worker 可操作 API

> [返回目录](#chapter-one)

* `setTimeout()， clearTimeout()， setInterval()， clearInterval()`：有了这几个函数，就可以在 `Web Worker` 线程中执行定时操作了；
* `XMLHttpRequest` 对象：意味着我们可以在 `Web Worker` 线程中执行 `Ajax` 请求；
* `navigator` 对象：可以获取到 `ppName`，`appVersion`，`platform`，`userAgent` 等信息；
* `location` 对象（只读）：可以获取到有关当前 URL 的信息；

如果需要加载其他 JS 脚本：

```js
importScripts('./index2.js', './index3.js');

// 或者

// importScripts('./index2.js');
// importScripts('./index3.js');
```

#### <a name="chapter-four-three-four" id="chapter-four-three-four"></a>4.3.4 Web Worker 兼容性

> [返回目录](#chapter-one)

* IE：11 版本
* Edge：14+ 版本
* Firefox：51+ 版本
* Chrome：56+ 版本
* 其他：看 [caniuse 链接](https://caniuse.com/webworkers)

### <a name="chapter-four-four" id="chapter-four-four"></a>4.4 Node 和 浏览器

> [返回目录](#chapter-one)

为啥会有 **浏览器 Event Loop** 和 **Node.js Event Loop**？

简单来说：

* **你的页面放到了浏览器去展示，你的数据放到了后台处理（将 Node.js 看成 PHP、Java 等后端语言），这两者能没有区别么？！**

再仔细一点：

* **Node.js**：Node.js 的 `Event Loop` 是基于 `libuv`。`libuv` 已经对 Node.js 的 `Event Loop` 作出了实现。
* **浏览器**：浏览器的 `Event Loop` 是基于 [HTML5 规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) 的。而 HTML5 规范中只是定义了浏览器中的 `Event Loop` 的模型，具体实现留给了浏览器厂商。

> `libuv` 是一个多平台支持库，主要用于异步 I/O。它最初是为 Node.js 开发的，现在 `Luvit`、`Julia`、`pyuv` 和其他的框架也使用它。[Github - libuv 仓库](https://github.com/libuv/libuv)

所以，咱们得将这两个 `Event Loop` 区分开来，它们是不一样的东东哈~

## <a name="chapter-five" id="chapter-five"></a>五 两个环境 Event Loop 对比

> [返回目录](#chapter-one)

浏览器环境下，`microtask` 的任务队列是每个 `macrotask` 执行完之后执行。

而在 Node.js 中，`microtask` 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 `microtask` 队列的任务。

这里没有讲 Node.js 的时间循环机制，第一个是因为 **jsliang** 对 Node 不熟，怕瞎写误导；第二个是因为面试官问的时候，基本上回答的都是浏览器的事件循环机制，偶尔提一嘴 `Event Loop` 分为浏览器事件循环和 Node 事件循环算是加点小分了。

## <a name="chapter-six" id="chapter-six"></a>六 题目训练

> [返回目录](#chapter-one)

在训练之前，咱们先讲下考题范围：

* **同步任务**：碰到直接执行，不要管三七二十一。
* **宏任务**：`script`、`setTimeout`
* **微任务**：`Promise.then()`、`async/await`

暂时就这么点内容，想来不会考错！

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 同步任务

> [返回目录](#chapter-one)

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

这段内容输出啥？

* `foo` -> `bar`

详情不需要解释。

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 定时器

> [返回目录](#chapter-one)

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

* 宏任务队列：`script`、`setTimeout(2)`、`setTimeout(3)`
* 微任务队列：无

所以输出：

```
1
4
2
3
```

### <a name="chapter-six-three" id="chapter-six-three"></a>6.3 定时器 + Promise

> [返回目录](#chapter-one)

* 题目 1：请输出下面代码打印情况

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

`script` 宏任务下：

* 宏任务 `setTimeout`
* 微任务 `.then(promise1)`

所以先执行同步代码，先输出：`script start` -> `script end`。

然后调用微任务，输出 `promise1`，将 `then(promise2)` 放入微任务。

再次调用微任务，将 `promise2` 输出。

最后调用宏任务 `setTimeout`，输出 `setTimeout`。

因此输出顺序：

```
script start
script end
promise1
promise2
setTimeout
```

---

* 题目 2：请输出下面代码打印情况

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

`script` 宏任务下：

* 同步任务：无
* 微任务：`Promise.then(promise1)`
* 宏任务：`setTimeout(setTimeout1)`、`setTimeout(setTimeout2)`

所以先走同步任务，发现并没有，不理会。

然后再走微任务 `Promise.then(promise1)`，输出 `promise1`。

接着推出宏任务，先走 `setTimeout(setTimeout1)`：

* 同步任务：`console.log('setTimeout1')`
* 微任务：`Promise.then(promise2)`
* 宏任务：`setTimeout(setTimeout2)`（注意这里的宏任务是整体的）

所以先走同步任务，输出 `setTimeout1`。

接着走微任务，输出 `promise2`。

然后推出宏任务 `setTimeout(setTimeout2)`。

`setTimeout(setTimeout2)` 环境下的微任务和宏任务都没有，所以走完同步任务，输出 `setTimeout2`，就结束了。

因此，输出顺序：

```
promise1
setTimeout1
promise2
setTimeout2
```

---

* 题目 3：请输出下面代码打印情况

```js
setTimeout(function() {
  console.log(4);
}, 0);

const promise = new Promise((resolve) => {
  console.log(1);
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log(2);
}).then(function() {
  console.log(5);
});

console.log(3);
```

`script` 下：

* 同步任务：`console.log(1)`、`console.log(2)`、`console.log(3)`。
* 微任务：`Promise.then()`（等到 9999 再添加进来）
* 宏任务 `setTimeout`

所以先走同步任务，注意当我们 `new Promsie()` 的时候，内部的代码会执行的，跟同步任务一样的，而 `.then()` 在 `resolve()` 的情况下才会添加到微任务。

因此先输出 `1 -> 2 -> 3`。

然后推出微任务 `Promise.then()`，所以输出 5。

最后推出宏任务 `setTimeout`，输出 4。

结果顺序为：

```
1
2
3
5
4
```

### <a name="chapter-six-four" id="chapter-six-four"></a>6.4 综合

> [返回目录](#chapter-one)

综合题目就不给答案解析了，请自行脑补。

---

* 题目 1：请输出下面代码打印情况

```js
setTimeout(function () {
  console.log('timeout1');
}, 1000);

console.log('start');

Promise.resolve().then(function () {
  console.log('promise1');
  Promise.resolve().then(function () {
    console.log('promise2');
  });
  setTimeout(function () {
    Promise.resolve().then(function () {
      console.log('promise3');
    });
    console.log('timeout2')
  }, 0);
});

console.log('done');
```

结果：

```
start
done
promise1
promise2
timeout2
promise3
timeout1
```

---

* 题目 2：请输出下面代码打印情况

```js
console.log("script start");

setTimeout(function() {
  console.log("setTimeout---0");
}, 0);

setTimeout(function() {
  console.log("setTimeout---200");
  setTimeout(function() {
    console.log("inner-setTimeout---0");
  });
  Promise.resolve().then(function() {
    console.log("promise5");
  });
}, 200);

Promise.resolve()
.then(function() {
  console.log("promise1");
})
.then(function() {
  console.log("promise2");
});

Promise.resolve().then(function() {
  console.log("promise3");
});

console.log("script end");
```

输出：

```
script start
script end
promise1
promise3
promise2
setTimeout---0
setTimeout---200
promise5
inner-setTimeout---0
```

---

* 题目 3：请输出下面代码打印情况

```js
console.log(1);

setTimeout(() => {
  console.log(2);

  new Promise((resolve) => {
    console.log(3);
  }).then(() => {
    console.log(4);
  });
}, 200);

new Promise((resolve) => {
  console.log(5);
  resolve();
}).then(() => {
  console.log(6);
});

setTimeout(() => {
  console.log(7);
}, 0);

setTimeout(() => {
  console.log(8);

  new Promise(function (resolve) {
    console.log(9);
    resolve();
  }).then(() => {
    console.log(10);
  });
}, 100);

new Promise(function (resolve) {
  console.log(11);
  resolve();
}).then(() => {
  console.log(12);
});

console.log(13);
```

输出：

```
1
5
11
13
6
12
7
8
9
10
2
3
```

## <a name="chapter-seven" id="chapter-seven"></a>七 参考文献

> [返回目录](#chapter-one)

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

### <a name="chapter-seven-one" id="chapter-seven-one"></a>7.1 requestAnimationFrame 参考文献

> [返回目录](#chapter-one)

* [x] [再谈谈 Promise, setTimeout, rAF, rIC](https://segmentfault.com/a/1190000019154514)【阅读建议：10min】
* [x] [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)【阅读建议：10min】

### <a name="chapter-seven-two" id="chapter-seven-two"></a>7.2 Web Worker 参考文献

> [返回目录](#chapter-one)

* [x] [JavaScript 中的多线程 -- Web Worker](https://zhuanlan.zhihu.com/p/25184390)【阅读建议：30min】
* [x] [浅谈HTML5 Web Worker](https://juejin.im/post/6844903496550989837)【阅读建议：10min】
* [x] [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634)【阅读建议：10min】

### <a name="chapter-seven-three" id="chapter-seven-three"></a>7.3 其他参考文献

> [返回目录](#chapter-one)

* [x] [浏览器进程？线程？傻傻分不清楚！](https://imweb.io/topic/58e3bfa845e5c13468f567d5)【阅读建议：5min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

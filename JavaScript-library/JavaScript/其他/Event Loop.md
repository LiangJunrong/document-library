Event Loop
===

> Create by **jsliang** on **2019-12-09 11:34:15**  
> Recently revised in **2019-12-10 13:32:04**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

你曾经有没有这种疑惑：

> 疑惑一：为什么它不按照我的意思走？

```js
let name;
setTimeout(() => {
  name = 'jsliang';
}, 1000);
if (name) {
  console.log(name);
}
// console: nothing
```

> 疑惑二：为什么它不按照我的意思走？

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// console: 3 3 3
```

记录 JavaScript 中 Event Loop 在浏览器环境和 Node.js 环境的情况和它们之间的差异。

为什么需要 Event Loop？

因为 JavaScript 是单线程的。

单线程意味着，所有任务都需要排队，前一个任务结束，才会执行后一个任务。

如果前一个任务耗时很长，那么后一个任务就不得不一直等着。

为了协调事件（event），用户交互（user interaction），脚本（script），渲染（rendering），网络（networking）等，用户代理（user agent）必须使用事件循环（event loops）。

> 注：浏览器的 Event Loop 和 Node.js 的 Event Loop 是两码事，这里讲的是浏览器的，更多内容可以翻到下面，查看 **jsliang** 的详细讲解。

## 实例

> 实例 1

```js
setTimeout(function () {
  console.log('timeout1');
}, 0);

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

## 参考文献

* [《Tasks, microtasks, queues and schedules》 - Jake](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [《彻底搞懂浏览器 Event-loop》 - 刘小夕](https://juejin.im/post/5c947bca5188257de704121d)
* [《彻底理解 JS Event Loop（浏览器环境）》 - 93](https://juejin.im/post/5aa3332b518825557c011896)
* [《彻底弄懂浏览器端的 Event-Loop》 - 长可](https://juejin.im/post/5c303e67518825260b46cbdc)
* [《什么是浏览器的事件循环（Event Loop）？》 - 鱼子酱](https://segmentfault.com/a/1190000010622146)
* [《理解event loop（浏览器环境与nodejs环境）》 - sugerpocket](https://imweb.io/topic/5b148768d4c96b9b1b4c4ea1)
* [《从 event loop 规范探究 JavaScript 异步及浏览器更新渲染时机》 - 杨敬卓](https://github.com/aooy/blog/issues/5)
* [《跟着 Event loop 规范理解浏览器中的异步机制》 - fi3ework](https://github.com/fi3ework/blog/issues/29)
* [《不要混淆 nodejs 和浏览器中的 event loop》 - youth7](https://cnodejs.org/topic/5a9108d78d6e16e56bb80882)
* [《浏览器的 event loop 和 node 的 event loop》 - 金大光](https://juejin.im/post/5b095a1d6fb9a07abc2a5e81)
* [《浏览器与 Node 的事件循环(Event Loop)有何区别?》 - 浪里行舟](https://juejin.im/post/5c337ae06fb9a049bc4cd218)
* [《浏览器和 Node 不同的事件循环（Event Loop）》 - toBeTheLight](https://juejin.im/post/5aa5dcabf265da239c7afe1e)
* [《let 和 const 命令》 - 阮一峰](http://es6.ruanyifeng.com/#docs/let)

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
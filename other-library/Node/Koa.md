Koa
===

> Create by **jsliang** on **2018-11-8 13:34:30**  
> Recently revised in **2020-6-5 08:49:54**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件，而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

* Koa 介绍
* Koa 使用
* 内置对象
* 中间件基础
* http 状态码
* koa-router
* koa-views
* koa-static

## <a name="chapter-three" id="chapter-three"></a>三 Koa 初始化

> [返回目录](#chapter-one)

* `npm init`
* `npm i koa`

```js
const Koa = require('koa');

// 4 个对象
// application
const app = new Koa();

app.use((ctx) => {
  console.log(ctx);
  /**
   * context 上下文
   * ctx.res
   * ctx.req
   * ctx.request req 它对原生的 req 做了封装
   * ctx.response res 它对原生的 res 做了封装
   */
  ctx.body = 'hello world';
});

app.listen(9000);
```

## <a name="chapter-four" id="chapter-four"></a>四 Koa 中间件和洋葱模型

> [返回目录](#chapter-one)

```js
const Koa = require('koa');

// 4 个对象
// application
const app = new Koa();

// 中间件 -> fn
// 通过 use 添加中间件
app.use((ctx, next) => {
  console.log('中间件 1 开始');
  ctx.body = 'hello world 1';
  next();
  console.log('中间件 1 结束');
});

app.use((ctx, next) => {
  console.log('中间件 2 开始');
  ctx.body = 'hello world 2';
  next();
  console.log('中间件 2 结束');
});

app.use((ctx, next) => {
  console.log('中间件 3 开始');
  ctx.body = 'hello world 3';
  next();
  console.log('中间件 3 结束');
});

app.listen(9000);
```

在这里，我们用了 3 个 `app.use`，代表我们有 3 个使用的中间件，看输出：

```
中间件 1 开始
中间件 2 开始
中间件 3 开始
中间件 3 结束
中间件 2 结束
中间件 1 结束
```

即我们从中间件 1 开始，一直走到中间件 3。然后在从中间件 3 处理完毕，逆转回去中间件 1。

有点类似于递归的模式。

比较好的文章：

* [koa 洋葱模型](https://blog.csdn.net/u011860431/article/details/95303772)

关于洋葱模型的利用：

> index.js

```js
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  // 1. 挂载数据到全局
  ctx.state = {
    name: 'jsliang',
  };
  // 2. 将数据换成同步
  const start = Date.now();
  await next();
  console.log(Date.now() - start); // 2008
});

const delay = (arguments) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
}

app.use(async (ctx) => {
  await delay();
  console.log(ctx.state.name); // jsliang
  ctx.body = '延迟展示';
})

app.listen(9000);
```

## <a name="chapter-five" id="chapter-five"></a>五 koa-router

> [返回目录](#chapter-one)

快速使用：

* `npm init`
* `npm i koa koa-router`

> index.js

```js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.redirect('/', '/home');
router.get('/home', (ctx) => {
  ctx.body = 'koa-router';
})

router.get('/home/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = `URL 参数：id=${id}`;
})

app.use(router.routes());
app.listen(9000);
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
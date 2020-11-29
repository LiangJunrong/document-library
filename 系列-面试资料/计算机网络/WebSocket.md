WebSocket
===

> Create by **jsliang** on **2020-10-27 15:49:50**  
> Recently revised in **2020-11-29 14:43:42**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 WebSocket 和 HTTP](#chapter-three) |
| &emsp;[3.1 （短）轮询（Polling）](#chapter-three-one) |
| &emsp;[3.2 长轮询](#chapter-three-two) |
| &emsp;[3.3 WebSocket](#chapter-three-three) |
| &emsp;[3.4 两者比对](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Socket.io](#chapter-four) |
| &emsp;[4.1 服务端代码](#chapter-four-one) |
| &emsp;[4.2 客户端代码](#chapter-four-two) |
| &emsp;[4.3 小结](#chapter-four-three) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

`WebSocket` 是 `HTML5` 新增的一种全双工通信协议，客户端和服务器基于 TCP 握手连接成功后，两者之间就可以建立持久性的连接，实现双向数据传输。

## <a name="chapter-three" id="chapter-three"></a>三 WebSocket 和 HTTP

> [返回目录](#chapter-one)

我们知道 `HTTP` 协议是一种单向的网络协议，在建立连接后，它允许客户端向服务器发送请求资源后，服务器才会返回相应的数据，而服务器不能主动推送数据给客户端。

当时为什么这样设计呢？假设一些不良广告商主动将一些信息强行推送给客户端，这不得不说是一个灾难。

所以现在我们要做股票的实时行情，或者获取火车票的剩余票数等，就需要客户端和服务器之间反复地进行 `HTTP` 通讯，客户端不断地发送 `GET` 请求，去获取当前的实时数据。

下面介绍几种常见的方式。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 （短）轮询（Polling）

> [返回目录](#chapter-one)

短轮询模式下，客户端每隔一段时间向服务器发送 `HTTP` 请求。

服务器收到请求后，将最新的数据发回给客户端。

这种情况下的弊端是非常明显的：某个时间段服务器没有更新内容，但是客户端每隔一段时间发送请求来询问，而这段时间内的请求是无效的。

这就导致了网络带宽的浪费。

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 长轮询

> [返回目录](#chapter-one)

长轮询模式下，客户端向服务器发出请求，服务器并不一定会立即回应客户端，而是查看数据是否有更新。

如果数据更新了的话，那就立即发送数据给客户端；如果没有更新，那就保持这个请求，等待有新的数据到来，才将数据返回给客户端。

如果服务器长时间没有更新，那么一段时间后，请求变会超时，客户端收到消息后，会立即发送一个新的请求给服务器。

当然这种方式也有弊端：当服务器向客户端发送数据后，必须等待下一次请求才能将新的数据发出，这样客户端接收新数据就有一个最短时间间隔。

如果服务器更新频率较快，那么就会出现问题。

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 WebSocket

> [返回目录](#chapter-one)

基于前面的情况，为了彻底解决服务器主动向客户端发送数据的问题。

`W3C` 在 `HTML5` 中提供了一种让客户端与服务器之间进行全双工通讯的网络技术 `WebSocket`。

`WebSocket` 基于 `TCP` 协议，是一种全新的、独立的协议，与 `HTTP` 协议兼容却不会融入 `HTTP` 协议，仅仅作为 `HTML5` 的一部分。

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 两者比对

> [返回目录](#chapter-one)

基于上面，小伙伴们大概了解了 `WebSocket` 的缘由了，这里再总结对比一下 `HTTP` 和 `WebSocket`。

* 相同点

1. 都需要建立 `TCP` 连接
2. 都属于七层协议中的应用层协议

* 不同点

1. `HTTP` 是单向数据流，客户端向服务器发送请求，服务器响应并返回数据；`WebSocket` 连接后可以实现客户端和服务器双向数据传递，除非某一端断开连接。
2. `HTTP` 的 `url` 使用 `http//` 或者 `https//` 开头，而 `WebSocket` 的 `url` 使用 `ws//` 开头

## <a name="chapter-four" id="chapter-four"></a>四 Socket.io

> [返回目录](#chapter-one)

我们先来看 `WebSocket` 的一个使用方式：

```js
const ws = new WebSocket("ws//:xxx.xx", [protocol])

ws.onopen = () => {
  ws.send('hello')
  console.log('send')
}

ws.onmessage = (ev) =>{
  console.log(ev.data)
  ws.close()
}

ws.onclose = (ev) =>{
  console.log('close')
}

ws.onerror = (ev) =>{
  console.log('error')
}
```

`WebSocket` 实例化后，前端可以通过上面介绍的方法进行对应的操作，看起来还是蛮简单的。

但是，如果想完全搭建一个 `WebSocket` 服务端比较麻烦，又浪费时间。

所以：`Socket.io` 基于 `WebSocket`，加上轮询机制以及其他的实时通讯方面的内容，实现的一个库，它在服务端实现了实时机制的响应代码。

也就是说，`WebSocket` 仅仅是 `Socket.io` 实现通讯的一个子集。

因此，`WebSocket` 客户端连接不上 `Socket.io` 服务端，`Socket.io` 客户端也连不上 `WebSocket` 服务端。

下面我们讲解下如何实现一个简单的聊天。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 服务端代码

> [返回目录](#chapter-one)

> package.json

```json
{
  "devDependencies": {
    "express": "^4.15.2",
    "socket.io": "^2.3.0"
  }
}

```

> index.js

```js
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let path = require('path');

app.use('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

// 开启 socket.io
io.on('connection', (client) => {

  // 如果有新客户端进来，显示 ID
  console.log(`客户端 ID：${client.id}`);

  // 监听客户端的输入信息
  client.on('channel', (data) => {
    console.log(`客户端 ${client.id} 发送信息 ${data}`);
    io.emit('broadcast', data);
  });

  // 判断客户端是否关闭
  client.on('disconnect', () => {
    console.log(`客户端关闭：${client.id}`);
  });
});

server.listen(3000, () => {
  console.log('服务监听 3000 端口');
});
```

如上，我们直接通过 `npm i` 安装依赖包后，直接通过 `node index.js` 可以开启服务。

当然，如果小伙伴们想手动装包，执行下面命令即可：

```shell
npm i express socket.io express -D
```

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 客户端代码

> [返回目录](#chapter-one)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Socket.io</title>
  <script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.slim.js"></script>
</head>

<body>

  <input type="text" id="input">
  <button id="btn">send</button>
  <div id="content-wrap"></div>

  <script>
    window.onload = function () {
      let inputValue = null;

      // 连接 socket.io
      let socket = io('http://localhost:3000');
      // 将创建的信息以添加 p 标签的形式展示成列表
      socket.on('broadcast', data => {
        let content = document.createElement('p');
        content.innerHTML = data;
        document.querySelector('#content-wrap').appendChild(content);
      })

      // 设置输入框的内容
      let inputChangeHandle = (ev) => {
        inputValue = ev.target.value;
      }
      // 获取输入框并监听输入
      let inputDom = document.querySelector("#input");
      inputDom.addEventListener('input', inputChangeHandle, false);

      // 当用户点击发送信息的时候，进行数据交互
      let sendHandle = () => {
        socket.emit('channel', inputValue);
      }
      let btnDom = document.querySelector("#btn");
      btnDom.addEventListener('click', sendHandle, false);

      // 打页面卸载的时候，通知服务器关闭
      window.onunload = () => {
        btnDom.removeEventListener('click', sendHandle, false);
        inputDom.removeEventListener('input', inputChangeHandle, false);
      }
    };
  </script>
</body>

</html>
```

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 小结

> [返回目录](#chapter-one)

`Socket.io` 不仅支持 `WebSocket`，还支持许多种轮询机制以及其他实时通信方式，并封装了通用的接口。

这些方式包含 `Adobe Flash Socket`、`Ajax` 长轮询、`Ajax multipart streaming`、持久 `Iframe`、`JSONP` 轮询等。

换句话说，当 `Socket.io` 检测到当前环境不支持 `WebSocket` 时，能够自动地选择最佳的方式来实现网络的实时通信。

这样，我们就对 `WebSocket` 有一定的了解，面试的时候就不慌了。

## <a name="chapter-five" id="chapter-five"></a>五 参考文献

> [返回目录](#chapter-one)

* [x] [websocket 与Socket.IO介绍](https://www.cnblogs.com/mazg/p/5467960.html)【阅读建议：10min】
* [x] [WebSocket 与 Socket.IO](https://zhuanlan.zhihu.com/p/23467317)【阅读建议：10min】
* [x] [Websocket和Socket.io的区别及应用](https://www.jianshu.com/p/970dcfd174dc)【阅读建议：20min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

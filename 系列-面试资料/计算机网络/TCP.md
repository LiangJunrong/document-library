TCP
===

> Create by **jsliang** on **2020-09-22 00:06:18**  
> Recently revised in **2020-11-28 07:45:39**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 UDP 连接](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 TCP 连接](#chapter-four) |
| &emsp;[4.1 建立连接阶段](#chapter-four-one) |
| &emsp;&emsp;[4.1.1 三次握手过程](#chapter-four-one-one) |
| &emsp;&emsp;[4.1.2 问题：两次握手不行吗？](#chapter-four-one-two) |
| &emsp;&emsp;[4.1.3 问题：三次握手过程中可以携带数据吗？](#chapter-four-one-three) |
| &emsp;[4.2 传输数据阶段](#chapter-four-two) |
| &emsp;[4.3 断开连接阶段](#chapter-four-three) |
| &emsp;&emsp;[4.3.1 四次挥手过程](#chapter-four-three-one) |
| &emsp;&emsp;[4.3.2 问题：为什么需要四次挥手](#chapter-four-three-two) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 TCP 和 UDP 的区别](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 参考文献](#chapter-six) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

面试官问：你知道三次握手和四次挥手吗，能不能讲讲其中过程？为什么不能两次握手？还有为什么要四次挥手才断开连接呢？

## <a name="chapter-three" id="chapter-three"></a>三 UDP 连接

> [返回目录](#chapter-one)

用户数据包协议（User Datagram Protocol），简称 `UDP`，是基于 `IP` 之上开发能和应用打交道的协议。

`UDP` 中一个最重要的信息是端口号，端口号其实就是一个数字，每个想访问网络的程序都需要绑定一个端口号。

通过端口号 `UDP` 就能把指定的数据包发送给指定的程序了，所以通过 `IP` 地址信息把数据包发送给指定的电脑，而 `UDP` 通过端口号把数据包分发给正确的程序。

`UDP` 传输缺陷：

* 数据包在传输过程容易丢失
* 大文件传输中，`UDP` 并不知道如何组成这些数据包，不知道如何还原成完整的文件。

虽说 `UDP` 不能保证数据可靠性，但是传输速度却非常快，所以 `UDP` 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等。

## <a name="chapter-four" id="chapter-four"></a>四 TCP 连接

> [返回目录](#chapter-one)

`TCP`（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。

`TCP` 相对于 `UDP` 有 2 个特点：

* 对于数据包的丢失，建立重传机制
* `TCP` 引入数据包排序机制，用来保证把乱序的数据包组合成一个完整的文件

在一个 `TCP` 连接中，会有 3 个过程。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 建立连接阶段

> [返回目录](#chapter-one)

这个阶段是通过 “三次握手” 来建立客户端和服务器之间的连接。

`TCP` 提供面向连接的通讯传输。面向连接是指数据通讯开始先做好两端之间的准备工作。

所谓 **三次握手**，是指在建立一个 `TCP` 连接时，客户端和服务器总共要发送 3 个数据包来确认连接的建立。

三次握手主要作用是：

* 确认双方的接收能力和发送能力
* 指定自己的初始化序列号，为后面的可靠性做准备

#### <a name="chapter-four-one-one" id="chapter-four-one-one"></a>4.1.1 三次握手过程

> [返回目录](#chapter-one)

刚开始客户端处于 `Closed` 的状态，服务器处于 `Listen` 状态。

1. **客户端发送到服务器**。客户端发送 `SYN` 报文给服务器，并且指明客户端初始化序列号为 `ISN(c)`，即以 `SYN=1, seq=x` 的形式发送过去。此时客户端处于 `SYN_SEND` 状态。
2. **服务器发送给客户端**。服务器收到客户端的 `SYN` 和 `ISN(c)`，也发送一个 `SYN` 回去，同时设置 `ACK = ISN(c) + 1` 以及指明服务器初始化序列号为 `ISN(s)`，即以 `SYN=1, ACK=x+1， seq=y` 的形式发送给客户端。
3. **客户端发送到服务器**。客户端收到服务器发送的消息后，设置 `ACK = ISN(s) + 1`，将自身的 `ISN(c) + 1`，即以 `ACK=y+1, seq=x+1` 的形式发送给服务器。此时客户端处于 `ESTABLISHED` 阶段，服务器收到报文，也处于 `ESTABLISHED` 阶段，双方建立了连接。

![图](https://pic3.zhimg.com/80/v2-2a54823bd63e16674874aa46a67c6c72_720w.jpg)

> 图片来源于知乎，懒得重画，水印保留，如侵即删

#### <a name="chapter-four-one-two" id="chapter-four-one-two"></a>4.1.2 问题：两次握手不行吗？

> [返回目录](#chapter-one)

三次握手的目的：

1. 客户端发送数据给服务器，服务器确认自己可以接受客户端的请求。
2. 服务器发送数据给客户端，客户端确认自己可以发送数据给服务器，也可以接受到服务器的请求。
3. 客户端发送数据给服务器，服务器确认自己可以发送数据给客户端。

如果采用两次握手，客户端发送数据给服务器，服务器确认后就当连接开始：

1. 客户端发送一次请求给服务器……指定时间后没响应再发了一个
2. 服务器先接收到后一个建立连接的请求，然后前一个建立连接的请求，因为网络延迟等问题，在第二个之后达到了
3. 服务器认为第二个请求是最新发的，于是向客户端发送确认报文段，同意建立连接，于是连接建立了（两次握手）
4. 这时候客户端还在等待最新的请求连接（第二次请求），自动忽略服务器发送的关于第一个请求连接的响应，也不发送数据
5. 服务器一直等待客户端发送数据，服务器资源被占用

简单来说：

```
客户端 -> 1 -> 服务器
客户端 -> 2 -> 服务器
服务器 get 1
服务器 get 2
服务器 reply 1
客户端 wait 2
gg
```

所以才需要三次握手而不是两次握手。

#### <a name="chapter-four-one-three" id="chapter-four-one-three"></a>4.1.3 问题：三次握手过程中可以携带数据吗？

> [返回目录](#chapter-one)

答案：第三次握手的时候可以携带，第一第二次不可以携带。

原因：如果第一次可以携带数据的话，有可能是恶意攻击服务器。这时候释放大量的数据，不理会服务器的的承受能力，让服务器花费很多时间、内存空间接收报文。

第三次握手的时候，客户端处于 `ESTABLISHED` 状态了，它可以建立连接并且知道服务器的接收、发送能力是正常的，所以可以携带数据了。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 传输数据阶段

> [返回目录](#chapter-one)

此时客户端和服务器都处于 `ESTABLISHED` 状态。

这个阶段中，接收端需要对每个数据包进行确认操作。即接收端在接收到数据包之后，需要发送确认数据包给发送端。

如果发送端在规定时间内没有接收到接收端的反馈确认消息，那么判断丢包（数据包丢失），从而触发自身的重发机制。

一个大的文件在传输过程中会被拆分为多个小的数据包，接收端按照 TCP 头中的序号进行排序，保证组成完整的数据。

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 断开连接阶段

> [返回目录](#chapter-one)

数据传输完毕之后，需要终止连接，通过 **四次挥手** 来保证双方都能断开连接。

#### <a name="chapter-four-three-one" id="chapter-four-three-one"></a>4.3.1 四次挥手过程

> [返回目录](#chapter-one)

* **客户端发送给服务器**。客户端以 `FIN=1, seq=u` 的形式发送给服务器，表示需要关闭客户端和服务器的数据传输。此时客户端处于 `FIN_WAIT` 状态。
* **服务器发送给客户端**。服务器收到信息，先返回 `ACK` 给客户端，即以 `ACK=1, seq=v, ack=u+1` 的形式返回给客户端，表示收到客户端报文了。此时服务器处于 `CLOST_WAIT` 状态。
* **服务器发送给客户端**。服务器等待一会，看客户端还有没有数据没发过来，等处理完这些数据之后，也想断开连接了，于是发送 `FIN` 给客户端，即以 `FIN=1, ACK=1, seq=w, ack=u+1` 的形式发送给客户端。此时服务器处于 `LAST_ACK` 状态。
* **客户端发送给服务器**。客户端收到 `FIN` 之后，返回 `ACK` 报文作为应答，即以 `ACK=1, seq=w+1` 的形式发送给服务器。此时客户端处于 `TIME_WAIT` 状态。

过一阵子之后，客户端确保服务器收到自己的 `ACK` 报文了，则变成 `CLOSED` 状态。服务器接受到 `ACK` 报文之后，就也处于 `CLOSED` 状态了。

![图](https://pic2.zhimg.com/80/v2-c7d4b5aca66560365593f57385ce9fa9_720w.jpg)

> 图片来源于知乎，懒得重画，水印保留，如侵即删

#### <a name="chapter-four-three-two" id="chapter-four-three-two"></a>4.3.2 问题：为什么需要四次挥手

> [返回目录](#chapter-one)

因为服务器接收到客户端的关闭请求之后。

如果有一些数据因为网络延迟等问题没有发送到，那么它直接关闭会导致这些数据没有接收到；亦或者服务器也有一些数据要发送给客户端，要确保这些数据发送完。

我们知道 `TCP` 是个可靠的棒小伙，所以它才会第一次回复客户端收到关闭连接的请求了，第二次回复客户端你发送的数据应该没延迟了，我也发送完我要发送的数据了，可以关闭了。

最后客户端接收到了，回复告诉服务器它也可以关闭了，然后过一阵子确保服务器接收到它发的 `ACK` 报文之后，也处于 `CLOSED` 状态了。

## <a name="chapter-five" id="chapter-five"></a>五 TCP 和 UDP 的区别

> [返回目录](#chapter-one)

* `TCP` 是面向连接的，`UDP` 是无连接的即发送数据前不需要先建立链接。
* `TCP` 提供可靠的服务。也就是说，通过 `TCP` 连接传送的数据，无差错，不丢失，不重复，且按序到达；UDP尽最大努力交付，即不保证可靠交付。并且因为 `TCP` 可靠，面向连接，不会丢失数据因此适合大数据量的交换。
* `TCP` 是面向字节流，`UDP` 面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如 `IP` 电话和视频会议等）。
* `TCP` 只能是 1对1 的，`UDP` 支持 1对1，1对多。
* `TCP` 的首部较大为 `20` 字节，而 `UDP` 只有 `8` 字节。
* `TCP` 是面向连接的可靠性传输，而 `UDP` 是不可靠的。

## <a name="chapter-six" id="chapter-six"></a>六 参考文献

> [返回目录](#chapter-one)

* [x] [面试官，不要再问我三次握手和四次挥手](https://zhuanlan.zhihu.com/p/86426969)【阅读建议：1hour】
* [x] [关于三次握手与四次挥手面试官想考我们什么](https://juejin.im/post/6844903834708344840)【阅读建议：20min】
* [x] [通俗大白话来理解TCP协议的三次握手和四次分手](https://github.com/jawil/blog/issues/14)【阅读建议：20min】
* [x] [TCP协议详解](https://juejin.im/post/5ba895a06fb9a05ce95c5dac)【阅读建议：40min】
* [x] [面试时，你被问到过 TCP/IP 协议吗?](https://juejin.im/post/58e36d35b123db15eb748856)【阅读建议：20min】
* [x] [“三次握手，四次挥手”你真的懂吗？](https://zhuanlan.zhihu.com/p/53374516)【阅读建议：20min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

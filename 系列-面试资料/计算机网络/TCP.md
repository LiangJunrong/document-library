TCP
===

> Create by **jsliang** on **2020-09-22 00:06:18**  
> Recently revised in **2020-10-05 22:40:36**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

## UDP 连接

用户数据包协议（User Datagram Protocol），简称 UDP，是基于 IP 之上开发能和应用打交道的协议。

UDP 中一个最重要的信息是端口号，端口号其实就是一个数字，每个想访问网络的程序都需要绑定一个端口号。

通过端口号 UDP 就能把指定的数据包发送给指定的程序了，所以 IP 通过 IP 地址信息把数据包发送给指定的电脑，而 UDP 通过端口号把数据包分发给正确的程序。

UDP 传输缺陷：

* 数据包在传输过程容易丢失
* 大文件传输中，UDP 并不知道如何组成这些数据包，不知道如何还原成完整的文件。

虽说 UDP 不能保证数据可靠性，但是传输速度却非常快，所以 UDP 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等。

## TCP 连接

TCP（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。

TCP 相对于 UDP 有 2 个特点：

* 对于数据包的丢失，建立重传机制
* TCP 引入数据包排序机制，用来保证把乱序的数据包组合成一个完整的文件

在一个 TCP 连接中，会有 3 个过程。

### 建立连接阶段

这个阶段是通过 “三次握手” 来建立客户端和服务端之间的连接。

TCP 提供面向连接的通讯传输。面向连接是指数据通讯开始先做好两端之间的准备工作。

所谓 **三次握手**，是指在建立一个 TCP 连接时，客户端和服务端总共要发送 3 个数据包来确认连接的建立。

什么是三次握手：

1. 客户端发送数据给服务端，服务端确认自己可以接受客户端的请求。
2. 服务端发送数据给客户端，客户端确认自己可以发送数据给服务端，也可以接受到服务端的请求。
3. 客户端发送数据给服务端，服务端确认自己可以发送数据给客户端。

三次握手让客户端和服务端都了解到双方都能接受数据和发送数据给对方。

### 传输数据阶段

这个阶段中，接收端需要对每个数据包进行确认操作。即接收端在接收到数据包之后，需要发送确认数据包给发送端。

如果发送端在规定时间内没有接收到接收端的反馈确认消息，那么判断丢包（数据包丢失），从而触发自身的重发机制。

一个大的文件在传输过程中会被拆分为多个小的数据包，接收端按照 TCP 头中的序号进行排序，保证组成完整的数据。

### 断开连接阶段

数据传输完毕之后，需要终止连接，通过 **四次挥手** 来保证双方都能断开连接。

## TCP 和 UDP 的区别

* TCP 是面向连接的，UDP 是无连接的即发送数据前不需要先建立链接。
* TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失，不重复，且按序到达；UDP尽最大努力交付，即不保证可靠交付。并且因为 TCP 可靠，面向连接，不会丢失数据因此适合大数据量的交换。
* TCP 是面向字节流，UDP 面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如 IP 电话和视频会议等）。
* TCP 只能是 1对1 的，UDP支持 1对1，1对多。
* TCP 的首部较大为 20 字节，而 UDP 只有 8 字节。
* TCP 是面向连接的可靠性传输，而 UDP 是不可靠的。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
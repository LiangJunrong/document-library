HTTP
===

> Create by **jsliang** on **2020-10-07 20:24:11**  
> Recently revised in **2020-10-07 20:24:11**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **HTTP/0.9** 传输体积很小的文件，没有 HTTP 请求头和请求体，服务器也不返回头信息。
* **HTTP/1.0** 核心诉求是支持多种类型的文件下载。加入了请求头和响应头支持多种不同类型的数据。以及状态码、Cache 机制、用户代理等。
* **HTTP/1.1**
  * 改进了 1.0 版本每次 HTTP 通信都需要建立 TCP 连接、传输 HTTP 数据再断开 TCP 连接的尴尬局面，支持持续连接。只要浏览器或者服务器没有明确断开连接，那么该 TCP 连接会一直保持（默认开启）。
  * 如果 TCP 通道中某个请求因为某些原因没有及时返回，会阻塞后面所有请求（队头阻塞），所以 HTTP/1.1 通过管线化来解决队头阻塞的问题。
  * HTTP/1.0 每个域名绑定唯一 IP 地址，一个服务器只能支持一个域名。HTTP/1.1 请求头增加 Host 字段，表示当前域名地址，服务器可以根据不同的 Host 值做不同的处理。这样一台物理主机就可以绑定多个虚拟主机，每个虚拟主机都有自己单独的域名。
  * HTTP/1.0 需要在响应头设置完整的数据大小来接收数据，但是随着服务器端发展，很多页面动态生成，不知道传输数据的最终大小。HTTP/1.1 引入 Chunk transfer 机制来解决这个问题，服务器将数据分割成任意大小的数据块，每个数据块发送时附带上个数据块的长度，最后使用一个零长度的块作为发送数据完成的标志，从而支持了动态内容。
  * 客户端 Cookie、安全机制。
* **HTTP/2.0** 一个域名只使用一个 TCP 长连接和消除队头阻塞问题
  * 一旦一个 TCP 连接建立之后，就进入了发送数据状态，刚开始 TCP 协议会采用一个非常慢的速度去发送数据，然后慢慢加快发送数据的速度，直到发送数据的速度达到一个理想状态，我们把这个过程称为慢启动。HTTP/2.0 实现了一个域名只使用一个 TCP 长连接来传输数据，这样整个页面资源的下载过程只需要一次慢启动，同时也避免了多个 TCP 连接竞争带宽所带来的问题。
  * 队头阻塞的问题，等待请求完成后才能去请求下一个资源，这种方式无疑是最慢的，所以 HTTP/2 需要实现资源的并行请求，也就是任何时候都可以将请求发送给服务器，而并不需要等待其他请求的完成，然后服务器也可以随时返回处理好的请求资源给浏览器。
* **HTTP/3.0** QUIC 协议
  * 实现了类似 TCP 的流量控制、传输可靠性的功能。
  * 集成了 TLS 加密功能。
  * 实现了 HTTP/2 中的多路复用功能。
  * 实现了快速握手功能。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
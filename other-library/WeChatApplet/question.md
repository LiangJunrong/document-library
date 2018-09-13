# 微信小程序
> create by **jsliang** on **2018-9-13 09:57:50**  
> Recently revised in **2018-9-13 09:57:54**

&emsp;记录微信小程序开发中碰到的问题

## 给 UI 大佬
1. **question**：~~UI 的设计稿，能否尽可能使用小程序平台提供的默认样式，减少开发时长。~~  
&emsp;**answer**：不行，因为已经设计完毕了。

&emsp;例如，下面图中的单选框，是微信自己给出的单选框，虽然看起来很 low ，但是，如果你采用这个，那么 **小梁** 会很高兴，因为能减少编写样式的时间，将更多的功夫花在功能实现上。

![图](../../public-repertory//img/other-WeChatApplet-question-1.png)

&emsp;当然，这并不意味着要你设计一个很 low 的产品~后期是可以进行界面优化的。当然，这也得看 **产品大佬** 怎么决定了~  
&emsp;下面是小程序自带样式图的地址：

[--- 地址 ---](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html)

<br>

## 给后端大佬
1. 每个小程序都需要一个通讯域名用来进行 HTTP 请求(request)、上传文件(uploadFile)、下载文件(downloadFile)和 WebSocket 通信(connectSocket)。
2. 域名必须为 https，不能使用 IP 地址或者 localhost 形式。
3. 域名必须经过 ICP 备案。
4. 服务器的返回值请使用 UTF-8 编码，非 UTF-8 编码可能导致转换失败。
5. 关于 HTTPS 证书：[地址](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)

![图](../../public-repertory//img/other-WeChatApplet-question-2.png)

<br>

## 给产品大佬
1. **question**：需要实现的功能有多少，是否有需求文档？例如：搜索、话费支付等。  
&emsp;**answer**：

2. **question**：~~UI 的设计稿有多少张？不计算弹窗的情况下。~~  
&emsp;**answer**：已拿到所有的 PSD 设计稿

3. **question**：后端大概将提供多少接口？  
&emsp;***answer**：


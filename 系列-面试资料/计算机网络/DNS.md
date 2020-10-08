DNS
===

> Create by **jsliang** on **2020-09-21 22:36:04**  
> Recently revised in **2020-10-08 21:07:06**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 正文](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 正文

> [返回目录](#chapter-one)

DNS（Domain Name System，域名系统），最初，由于 IP 地址长且难记，通过 IP 访问网站不方便。

所以后来通过发明了 DNS 服务器，这个时候我们访问网站输入网站域名，DNS 服务器就解析我们的域名为 IP。

1. 查询 `www.baidu.com`
2. 访问客户端 DNS 缓存：**浏览器缓存** -> **系统缓存（host）** -> **路由器缓存**
3. 访问 **ISP DNS 服务器**（ISP，互联网服务提供商，有联通电信移动等。如果你是电信网络，则进入电信的 DNS 缓存服务器，以下简称本地），如果本地服务器有，则直接返回；如果没有，让本地 DNS 服务器去逐个咨询查找。
4. 本地去咨询 **DNS 根服务器**，DNS 根服务器发现是 `.com 区域` 管理的，告诉本地去咨询它。
5. 本地去咨询 **.com 顶级域服务器**，.com 域服务器告诉本地去咨询 `baidu.com 主区域` 的服务器。
6. 本地去咨询 **baidu.com 主域名服务器**，baidu.com 域服务器查找到对应的 IP 地址，返回给本地。
7. 本地 DNS 云服务器通知用户对方 IP 地址，同时缓存这个 IP 地址，下次就直接访问了。

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

* [x] [DNS 解析顺序](https://blog.csdn.net/Yooneep/article/details/89882123)【阅读建议：5min】
* [x] [写给前端工程师的DNS基础知识](http://www.sunhao.win/articles/netwrok-dns.html)【阅读建议：10min】
* [x] [前端优化: DNS预解析提升页面速度](https://www.jianshu.com/p/95a0c0636d28)【阅读建议：5min】
* [x] [DNS解析](https://imweb.io/topic/55e3ba46771670e207a16bc8)【阅读建议：10min】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
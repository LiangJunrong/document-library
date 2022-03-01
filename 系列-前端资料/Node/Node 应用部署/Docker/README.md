Docker
===

> Create by **jsliang** on **2022-02-28 08:40:59**  
> Recently revised in **2022-03-02 02:03:46**

* Docker 系列文档：https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E5%89%8D%E7%AB%AF%E8%B5%84%E6%96%99/Node/Node%20%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2

Hello 小伙伴们早上、中午、下午、晚上、深夜好，我是 **jsliang**，一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

本系列文章将以一个萌新的角度，从 0 入门，从安装 Docker，到将 Nginx、Node.js 以及 Puppeteer 服务部署到 Docker 中。

当然，写这篇文章是因为有个工作场景：

* 需要部署一个 Node.js + TypeScript + Puppeteer 的服务到 Docker 中，避免和工作机的开发环境 Hosts 相冲突

所以，它的使用场景是比较局限的，**仅仅是为了在局域网开启一个服务而已**！

如果小伙伴希望能出全自动化系列：**本地编写 Git 仓库代码，然后 push 到 GitHub 后，走 CI/CD 并更新到服务器……**

欢迎催更，如果人多或者我有空会再进一步更新，否则我可能有点小小拖更~

话归正题，本系列主要内容：

* 01 - 下载 & 安装
* 02 - 入门 & Nginx 服务
* 03 - 解疑 & Docker 概念
* 04 - 入门 & Node 服务
* 05 - 解疑 & Docker 指令
* 06 - 入门 & Puppeteer 服务

> 全系列 Docker 文章可以前往 GitHub，微信用户可以点击文末【阅读原文】查看：https://github.com/LiangJunrong/document-library/tree/master/%E7%B3%BB%E5%88%97-%E5%89%8D%E7%AB%AF%E8%B5%84%E6%96%99/Node/Node%20%E5%BA%94%E7%94%A8%E9%83%A8%E7%BD%B2

当然，除此之外，**jsliang** 会将这系列内容整理成视频，方便小伙伴们观看学习，感兴趣的可以在 GitHub 首页找到追更 **jsliang** 的方式~

* [Github - LiangJunrong/document-library/](https://github.com/LiangJunrong/document-library)

## 参考文献

* [Docker 官网](https://www.docker.com/get-started)
* [菜鸟教程 - Docker 教程](https://www.runoob.com/docker/docker-tutorial.html)
* [Docker - 从入门到实践](https://yeasy.gitbook.io/docker_practice/)
* [掘金 - 花生Peadar - 写给前端的Docker实战教程](https://juejin.cn/post/6844903946234904583)

### Docker 概念

* [华为云 - 什么是 Dockerfile](https://www.huaweicloud.com/zhishi/edu-arc-yys28.html)
* [知乎 - 测试的能量 - Docker 入门：镜像 image](https://zhuanlan.zhihu.com/p/144355897)
* [Docker Hub](https://hub.docker.com/)
* [SegmentFault - facelessman - Docker 必备六大国内镜像](https://segmentfault.com/a/1190000023117518)
* [CSDN - AC_bin - docker 修改使用国内镜像源](https://blog.csdn.net/qq_21384293/article/details/115180907)
* [CSDN - Yvesty - win10-Docker desktop 切换中国镜像源](https://blog.csdn.net/Yvesty/article/details/118601701)
* [Andy_Lee - 可能是把 Docker 的概念讲的最清楚的一篇文章](http://dockone.io/article/6051)
* [华为云 - 崔云龙 - 什么是 Docker 容器？](https://info.support.huawei.com/info-finder/encyclopedia/zh/Docker%E5%AE%B9%E5%99%A8.html)
* [Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice/basic_concept/container)
* [腾讯云 - xcbeyond - Docker是如何实现隔离的](https://cloud.tencent.com/developer/article/1647535)
* [CSDN - 布吉_岛 - Dockerfile如何编写（指令详解）](https://blog.csdn.net/zx110503/article/details/103480514)
* [SegmentFault - 时间被海绵吃了 - Docker: 编写 dockerfile 启动 node.js 应用](https://segmentfault.com/a/1190000017946741)
* [CSDN - 杭州小哥哥 - 查看docker版本命令docker version](https://blog.csdn.net/W_317/article/details/104363979)

### 入门 & Node 服务

* [博客园 - 刘哇勇 - Docker 部署 Node 应用](https://www.cnblogs.com/Wayou/p/14901465.html)

### 解疑 & Docker 指令

* [掘金 - lcb8816 - alpine的Docker镜像使用避坑汇总](https://juejin.cn/post/6850418112237502472)
* [CSDN - 童安格粉丝 - 如何解决Docker容器和宿主机时间同步问题](https://blog.csdn.net/a1010256340/article/details/80269508)
* [腾讯云 - 雪梦科技 - Docker 时区调整方案](https://cloud.tencent.com/developer/article/1626811)
* [博客园 - mosakashaka - Docker For Windows时间不对的问题](https://www.cnblogs.com/mosakashaka/p/12609228.html)
* [Setting the timezone](https://wiki.alpinelinux.org/wiki/Setting_the_timezone)
* [CSDN - 秋雨雁南飞 - Docker For Window 设置时区](https://blog.csdn.net/czjnoe/article/details/114273552)
* [CSDN - self321 - Docker内时区查询和修改方法](https://blog.csdn.net/self321/article/details/110388000)
* [Docker - 从入门到实践 - 删除本地镜像](https://yeasy.gitbook.io/docker_practice/image/rm)
* [知乎 - 老土豆 - Docker 解决代码更新后同镜像（images）的同步问题](https://zhuanlan.zhihu.com/p/366271256)
* [CSDN - 灬点点 - Docker删除容器与镜像](https://blog.csdn.net/qq_32447301/article/details/79387649)
* [掘金 - 翛云 - puppeteer cluster 相关docker镜像构建](https://juejin.cn/post/6968335094842916901)
* [菜鸟教程 - Docker cp 命令](https://www.runoob.com/docker/docker-cp-command.html)

### 入门 & Puppeteer 服务

* [How to Run Puppeteer and Headless Chrome in a Docker Container](https://www.cloudsavvyit.com/13461/how-to-run-puppeteer-and-headless-chrome-in-a-docker-container/)
* [在 nodejs 中使用 puppeteer 并通过 docker 部署](https://blog.mapleque.com/posts/tool/puppeteer/js-puppeteer-docker/)
* [GitHub - Puppeteer - Running Puppeteer in Docker](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

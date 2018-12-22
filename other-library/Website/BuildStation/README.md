云服务器建站
===

> Create by **jsliang** on **2018-12-21 13:34:13**  
> Recently revised in **2018-12-22 15:07:03**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得点个赞或者给个 star，你们的赞和 star 是我编写更多更精彩文章的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Website/BuildStation/README.md)**

<br>

&emsp;**本篇文章重点**：

* 云服务器购买及使用
* 域名备案及解析
* Nginx 配置多个二级域名及解析网页
* Node 服务端的部署及 MySQL 的安装

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 云服务器及域名](#chapter-three) |
| &emsp;[3.1 云服务器](#chapter-three-one) |
| &emsp;[3.2 域名](#chapter-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Nginx 代理前端页面](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 MySQL 安装及部署](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Node 提供接口服务](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 总结](#chapter-seven) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;作为一枚程序猿，  
&emsp;第一句编程必须是 `Hello World!`，  
&emsp;第一个愿望必须是 `My Blog`，  
&emsp;如果不是，当我没说。

&emsp;关于云服务器。  
&emsp;作为一枚能 “折腾” (能作死) 的人，**jsliang** 玩过腾讯云服务器和阿里云服务器。  
* 腾讯云服务器。如果你是大学生，那么腾讯云不可错过，[\[云+校园\]学生云服务器体验套餐 10 元/月](https://cloud.tencent.com/act/campus?fromSource=gwzcw.596698.596698.596698)。这个活动，其实一开始的价格是 1元/月，**jsliang** 用了两年，直至 **jsliang** 毕业。后来，enm... 你知道的，变成了 10 元/月，一年就是 120 元，云服务器配置是 1 核 2 G + 1 M带宽，对于初学者来说，完全够用了。
* 阿里云服务器。即是我目前正在使用的云服务器。也许有的小伙伴们也知道，双 11 双 12 不仅有疯狂的淘宝购物，还有阿里云服务器的推送，说不定已经买了一台给自己用。  

> 如果小伙伴们没有接触过阿里云，可以使用我的推广链接，领最高 1888 的云产品通用代金券：  
> * [阿里云服务器新用户推广](https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=w7hismrh)  
> 
> 当然，这篇文章的主题是云服务器，小伙伴们如果想配置一台自己的云服务器，可以点击链接：  
> * [高性能云服务器 - 低至 293元/年](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)  
> 
> 如果小伙伴想给自己的企业买，推荐企业级高性能服务器：  
> * [企业级高性能云服务器](https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=w7hismrh)

<br>

# <a name="chapter-three" id="chapter-three">三 云服务器及域名</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;云服务器和域名都是需要备案的：[阿里云备案管理](https://bsn.console.aliyun.com/?spm=5176.100251.aliyun_topbar.16.188a4f15763rAj#/bsnApply?_k=bai4u6)  
&emsp;小伙伴可以通过上面链接了解下备案相关知识。

<br>

# <a name="chapter-three-one" id="chapter-three-one">3.1 云服务器</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;如果你已经通过上面推送购买了云服务器，或者你本身就有云服务器，那么我们开始讲解下 **jsliang** 对云服务器的使用：

&emsp;我们了解下在哪里可以看到自己的云服务器：

1. 在阿里云首页点击控制台。

![图](../../../public-repertory/img/other-build-station-1.png)

<br>

2. 点击左侧展开侧边栏，点击云服务器 ECS。

![图](../../../public-repertory/img/other-build-station-2.png)

<br>

3. 点击实例，选择云服务器所在地区，便出现了自己买的云服务器实例。

![图](../../../public-repertory/img/other-build-station-3.png)

<br>

&emsp;我们需要记住有四大块：

* **IP 地址**。**IP 地址**可以让你通过 Win + R，输入 mstsc 后，在远程桌面中，通过输入公网地址以及密码，访问你的云服务器，[方法详情](https://yq.aliyun.com/articles/224155)。
* **远程连接**。**远程连接**可以直接通过网页的形式连接云服务器，对它进行操作。
* **实例状态**。**更多 -> 实例状态**可以停止、开启、重启云服务器。
* **磁盘和镜像**。
  * 如果你感觉 Windows 云服务器满足不了你了，或者你想更换 Windows 系统的其他版本，那么你可以通过 **更多 -> 磁盘和镜像 -> 更换系统盘** 来更换系统（请先在实例状态中停止云服务器）。
  * 如果你觉得你的云服务器爆满了，想重新折腾过，那么可以通过 **更多 -> 磁盘和镜像 -> 重新初始化磁盘** 进行服务器的重置。

> 这里我们讲解的是 Windows 系统对 Windows 云服务器的操作，因为 Windows 系统方便操作，所以有着其他系统的云服务器的小伙伴，可以考虑将云服务器改成 Windows 系统或者百度、google 查找其他云服务器的部署方式。

&emsp;现在，我们讲解了云服务器的基本操作，我们暂且先放一边，讲解下域名部分。

<br>

# <a name="chapter-three-two" id="chapter-three-two">3.2 域名</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在你使用域名之前，记得给域名备个案；[阿里云备案管理](https://beian.aliyun.com/)  
&emsp;如果你没有域名，可自行购买：[万网域名注册](https://wanwang.aliyun.com/?spm=5176.8142029.digitalization.9.69a26d3envis4t)

&emsp;现在我们进入[域名控制台](https://dc.console.aliyun.com/next/index?spm=5176.2020520101.aliyun_sidebar.aliyun_sidebar_domain.1a344df5h27HR0#/domain/list/all-domain)：

![图](../../../public-repertory/img/other-build-station-4.png)

&emsp;除了备案，其他的都不用理会了，我们直接点击解析

![图](../../../public-repertory/img/other-build-station-5.png)

&emsp;上面的图片中显示的，都是 **jsliang** 在 **jsliang.top** 进行的解析记录。其中：

* **主机记录**：二级域名开头，例如 `game` 对应的就是 `http://game.jsliang.top` 这个二级域名。
* **记录值**：就是小伙伴云服务器的公网地址，在上面章节中提到过云服务器的 IP 地址。这是个很重要的玩意，请勿泄露。

&emsp;很好，现在我们点击 **添加记录**：

![图](../../../public-repertory/img/other-build-station-6.png)

&emsp;我们只需要填上 **主机记录** 以及 **记录值**，然后点击 **确定** 就可以完成一条二级域名的添加了。

> 下面会讲解到如何通过云服务器的 Nginx 配置，使二级域名导向服务器中的指定目录。

<br>

# <a name="chapter-four" id="chapter-four">四 Nginx 代理前端页面</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;

<br>

# <a name="chapter-five" id="chapter-five">五 MySQL 安装及部署</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;

<br>

# <a name="chapter-six" id="chapter-six">六 Node 提供接口服务</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;

<br>

# <a name="chapter-seven" id="chapter-seven">七 总结</a>

> [返回目录](#catalog-chapter-seven)

<br>

&emsp;

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
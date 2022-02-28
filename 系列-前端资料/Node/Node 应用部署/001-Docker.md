Docker
===

> Create by **jsliang** on **2022-02-28 08:40:59**  
> Recently revised in **2022-02-28 09:00:04**

## 一、安装

### 1.1 下载 & 安装

打开地址进行下载：

* https://www.docker.com/products/docker-desktop

安装过程如下：

![图](./img/Docker-01.jpg)

### 1.2 查看版本

安装完毕后查看版本：`docker version`

![图](./img/Docker-02.jpg)

注意，此时它报错：`error during connect: This error may indicate that the docker daemon is not running.`

### 1.3 修复 error during connect

当它报这个错的时候，可以看到桌面端无法正常启动，界面显示 `Docker Desktop stopping...`

![图](./img/Docker-03.jpg)

解决上面报错方法：

* https://stackoverflow.com/questions/40459280/docker-cannot-start-on-windows

我使用的解决方案是 Manuel Larrota 的，界面上 Ctrl + F 直接搜这个人就好

> **注意**：修复问题过程中很可能要求重启，所以该重启的时候就重启，别一直觉得他们提供的方案没问题

### 1.4 修复 WSL 2 installation is iscomplate

启动 Docker 的时候，弹窗：

![图](./img/Docker-04.jpg)

大概意思就是缺少某个小组件，找到同样疑惑：

* https://superuser.com/questions/1584710/docker-wsl-2-installation-is-incomplete

解决方案（Using WSL 2 based engine）：

* https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

下载这个 `.msi` 文件并安装即可。

> **注意**：修复问题过程中很可能要求重启，所以该重启的时候就重启，别一直觉得他们提供的方案没问题

### 1.5 检查正常运转

* 查看桌面端：

![图](./img/Docker-05.jpg)

* 查看 Docker 版本：`docker version`

![图](./img/Docker-06.jpg)

* 查看镜像（Image）：`docker image ls`

![图](./img/Docker-07.jpg)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

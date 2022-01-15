个人游戏开发
===

> Create by **jsliang** on **2022-01-08 17:23:01**  
> Recently revised in **2022-01-15 17:49:12**

每个大老粗的男人背后，总有一颗稚嫩的玩游戏的童心~

30 岁前想从 0 到 1 开发至少一款游戏，想必这会是一个有趣的事情。

## 关于游戏开发

* 游戏开发难不？

从一枚新手角度来说，看到 Cocos Creator 编辑器界面和网上视频教程，个人还是觉得挺难的：**我只想写代码，别让我整那么多~**

所以还是乖乖从 Hello World 开始吧，真的就从 0 开始整。

* 关于图形学的了解？

刚才看了 Fly 关于图形学的前 2 章内容：

https://wzf1997.github.io/learn-visualization/blog/person/chooseGrapic.html#%E5%85%88%E5%B8%A6%E5%A4%A7%E5%AE%B6%E7%9C%8B%E5%87%A0%E5%BC%A0%E6%9C%89%E8%B6%A3%E7%9A%84%E7%85%A7%E7%89%87

里面讲得很全，但可能不是我想要的，如果开发游戏需要从 0 到 1 从图形学开始，那么会是一个枯燥的内容。

所以，对于个人游戏开发，目前 **jsliang** 的想法是：

**「做」**。不管你想要尝试什么，至少你应该能搞一个 “Demo”，这会让你的学习兴趣、探索兴趣大大提升。

这一点在之前学习游戏开发的时候体现过：呀！开发微信小游戏需要了解 Canvas 技巧？于是我就傻乎乎跑去 MDN 上看了 Canvas 系列，结果看着看着就放置了。

> 同公司安排的任务不同，非是强制型的学习，很容易就因为碰到其他条件直接被打回原形

所以，对于这块，我觉得我应该先上手，而不是把前置内容先过一遍，这样只会让一大批人在玩游戏前，被指导任务搞得直接卸载退游！

**「补」**。做出来后，对游戏肯定有自己的 feel：这块不行，那块不好。

这样，就有源动力去对自己做出来的内容，进一步补充。

> 当然，也有可能这时候你就判断到自己只是想耍耍，而不是特别想要做个人游戏开发

至于后面的内容，还没悟出来，先走前 2 步！

## 第一款游戏

* 射击类型的，类似于「小小法师」「超强射手」
* 找到一款游戏资源：幽灵射手 3D 小游戏：https://www.bilibili.com/video/BV1nf4y1P7S8（就是听说有很多坑，下载下来无法运行等）
* 基础设定：

金木水火土、雷电、毒

### 从 0 到 1

* 设置编辑器为中文：Cocos Creator -> Preferences -> General -> Language
* 设置编辑器的打开程序为 VS Code：Cocos Creator -> 偏好设置 -> 外部程序 -> 默认脚本编辑器

这样，我们就可以使用中文编辑器，同时在使用脚本的时候，双击 TS 文件可以打开 VS Code。

* Hello World 教程：https://docs.cocos.com/creator/manual/zh/getting-started/helloworld/
* 一步两步教程：https://docs.cocos.com/creator/manual/zh/getting-started/first-game/

TODO: 每次学习新技术都是阵痛，如果你不去学，那么你将 out
TODO: 可以开始构建游戏世界，尝试表述你这个游戏的内容（是否能整个小说？有点意思）

### 如何设置打开的目录为 VS Code

1. 打开 Cocos Creator，在 assets 上新建 foo.ts，此时双击打开的是系统自带的播放器，打不开的
2. 需要在 `Cocos Creator -> 偏好设置 -> 外部程序 -> 默认脚本编辑器` 上设置
3. 快速找到 VS Code 编辑器位置：
   1. Windows 10 系统搜索：Visual Studio Code
   2. 右键 -> 打开文件位置，从而找到快捷键
   3. 右键 -> 打开文件所在的位置，从而找到快捷键所在的真实目录
   4. 将路径复制到默认脚本编辑器上的弹窗中

## 参考资料

服务端：

* [TSPRC](https://tsrpc.cn/)
* [NESTJS](https://docs.nestjs.cn/)
* [Midway](https://midwayjs.org/)
* [云开发 CloudBase](https://cloudbase.net/)

游戏引擎：

* [Cocos](https://www.cocos.com/)
* [Cocos Creator](https://www.cocos.com/products#CocosCreator)
* [Cocos 技术文档](https://www.cocos.com/docs#creator)

资料补充：

* [Fly - 从 0 到 1 入门数据可视化](https://wzf1997.github.io/learn-visualization/blog/person/chooseGrapic.html)
* [Cocos - 疯狂打群架多人版 —— TSRPC + Cocos 多人实时对战示例项目](https://store.cocos.com/app/detail/3432)
* [HelloWorld - Wesley13 - H5游戏开发：游戏引擎入门推荐](https://www.helloworld.net/p/7248991818)

协议：

* [MIT 协议](https://www.ruanyifeng.com/blogimg/asset/201105/bg2011050101.png)

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

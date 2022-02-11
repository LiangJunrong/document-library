Node 客服系统
===

> Create by **jsliang** on **2022-01-25 22:17:28**  
> Recently revised in **2022-01-25 22:56:44**

## 一、需求背景

在工作中，产品突发奇想，希望能开发一个机器人，能够自动识别用户 @机器人 的操作，将问题反馈到值班人员，这样值班人员就不会遗漏信息。

已知信息：

* 客服系统能收到用户提问，类似于 IM 上用户 @机器人
* 值班人员不是固定的，需要将线上值班表下载下来
* 自动回复话术不是固定的，如果在固定话术里面有，那就回复；否则转发到值班人员
* 每天下班前，需要再次下载值班表，将值班表中的信息读取出来并统计汇报给反馈群（未处理、漏处理、正在跟进）

## 二、TODO 清单

* [ ] 搭建 Node 工具库基础
  * [ ] 配置基础：Node 环境、TypeScript、ESLint 等
  * [ ] commander.js
  * [ ] color.js
* [ ] 搭建 Node 服务
  * [ ] Puppeteer 下载文件到本地
  * [ ] node-xlsx 读取文件信息并设置自动回复关键字
  * [ ] Express + Socket.io 打造服务
  * [ ] Express 监听用户信息，如果客服在 5 分钟内未处理，通过 webhook 发送信息到企业微信
  * [ ] 企业微信 webhook 信息通知

## webhook 机器人

对于 webhook 机器人，想必使用过「企业微信」「飞书」「钉钉」的小伙伴都不陌生，他们的对接文档：

* 企业微信：https://developer.work.weixin.qq.com/document/path/91770
* 飞书：https://www.feishu.cn/hc/zh-CN/articles/360024984973
* 钉钉：https://open.dingtalk.com/document/group/custom-robot-access

哪家先整出来的咱就不考察了，咱们来看下它的使用吧！

因为 **jsliang** 就用过企微，那咱们就用这个吧，下载软件后，咱们创建一个个人团队：

TODO: 此处应有手机端创建过程

然后新增一个 webhook 机器人：

TODO: 此处应有创建过程

很奇怪的是，我在 PC 端没有找到 webhook 机器人的创建过程，不知道是不是只有移动端才能创建。

不管了，开始整活！



## 三、参考文献

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习横杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

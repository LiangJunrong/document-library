微信小程序
===

> create by **jsliang** on **2018-9-13 09:04:41**  
> Recently revised in **2018-12-23 21:22:46**

&emsp;应产品所需，用技术去折服他~  
&emsp;微信小程序开发，走你！

## 一、环境准备

### 1.1 下载安装

[---地址---](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=18091218)

### 1.2 授权登录

[---地址---](https://jingyan.baidu.com/article/4dc408486e25e2c8d946f1b7.html)  
&emsp;按上面地址配置，然后扫码登录进小程序。

## 二、环境介绍

### 2.1 文件类型

| 文件类型 | 作用 |
| --- | --- |
| .json | JSON 配置文件 |
| .wxml | WXML 模板文件 |
| .wxss | WXSS 样式文件 |
| .js | JS 脚本逻辑文件 |

### 2.2 .json 文件

1. **app.json**：小程序的全局配置。 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)
2. **project.config.json**：工具的个性化配置，例如界面颜色、编译配置等。 [详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
3. **page.json**：页面配置，用来设置页面的整体样式等。 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

### 2.3 WXML 模板

&emsp;WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/index.html)

### 2.4 WXSS 样式

&emsp;WXSS(WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)

### 2.5 事件
1. 事件是视图层到逻辑层的通讯方式。
2. 事件可以将用户的行为反馈到逻辑层进行处理。
3. 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
4. 事件对象可以携带额外信息，如 id, dataset, touches。

### 2.6 API

&emsp;小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。

### 2.7 审核发布
&emsp;微信公众平台 -> 小程序管理后台 -> 开发管理 -> 开发版本 -> 提交审核

## 三、友情链接

| 作者 | 链接 |
| --- | --- |
| 小程序官网 | [小程序组件](https://developers.weixin.qq.com/miniprogram/dev/component/) |
| jsliang | [微信小程序 bug 集中营](./WeChatAppletBug.md) |
| jsliang | [微信小程序通讯录](./WeChatAppletFunctionList.md) |

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

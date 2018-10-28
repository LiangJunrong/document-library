Angular开发手册 - 1 - 介绍
===

> create by **jsliang** on **2018年9月5日17:48:55**   
> Recently revised in **2018年9月6日09:35:21**

## 介绍
&emsp;Angular 是一个开发平台。它能帮你更轻松的构建 Web 应用。Angular 集声明式模板、依赖注入、端到端工具和一些最佳实践于一身，为你解决开发方面的各种挑战。Angular 为开发者提升构建 Web、手机或桌面应用的能力。

### 1.1 Angular 的优点
* 跨平台
1. 渐进式应用：充分利用现代 Web 平台的各种能力，提供 App 式体验。高性能、离线使用、免安装。
2. 原生：借助来自Ionic、NativeScript和React Native中的技术与思想，构建原生移动应用。
3. 桌面：借助你已经在Web开发中学过的能力，结合访问原生操作系统API的能力，创造能在桌面环境下安装的应用，横跨Mac、Windows和Linux平台。

* 速度与性能
1. 代码生成：Angular会把你的模板转换成代码，针对现代JavaScript虚拟机进行高度优化，轻松获得框架提供的高生产率，同时又能保留所有手写代码的优点。
2. 统一平台：在服务端渲染应用的首屏，像只有HTML和CSS的页面那样几乎瞬间展现，支持 Node.js®、.NET、PHP，以及其它服务器，为通过SEO来优化站点铺平了道路。
3. 代码拆分：借助新的组件路由器，Angular可以实现快速加载。自动代码拆分机制可以让用户仅仅加载那些用于渲染所请求页面的代码。

* 生产率
1. 模板：通过简单而强大的模板语法，快速创建UI视图。
2. Angular CLI：命令行工具：快速进入构建环节、添加组件和测试，然后立即部署。
3. 各种 IDE：在常用IDE和编辑器中获得智能代码补全、实时错误反馈及其它反馈等特性。

* 完整开发故事
1. 测试：使用Karma进行单元测试，让你在每次存盘时都能立即知道是否弄坏了什么。Protractor则让你的场景测试运行得又快又稳定。
2. 动画：通过Angular中直观简便的API创建高性能复杂编排和动画时间线 —— 只要非常少的代码。
3. 可访问性：通过支持ARIA的组件、开发者指南和内置的一体化测试基础设施，创建具有完备可访问性的应用。

<br>

### 1.2 AngularJS 架构与 Angular 架构
* AngularJS 的架构：
![图](../../public-repertory/img/js-angular-stock-management-platform-chapter1-1.png)

* 为何 AngularJS 被抛弃
1. 饱受诟病的性能问题。通过检查进行数据更新，当数据不断增加时，检查的效率就不断降低。页面加载速度也会变慢。
2. 落后于当前web发展理念(如组件式的开发)
3. 对手机端的支持不是太友好。由于angularJS是09年诞生的，因此并没有考虑到手机端的适配，首先是性能问题，手机平台的硬件资远远比不上电脑平台。

&emsp;于是，就有了 Angular 的开发：

![图](../../public-repertory/img/js-angular-stock-management-platform-chapter1-2.png)

* 组件( Component )：是 Angular 应用的基本构建块，可以把一个组件理解为一段带有业务逻辑和数据的HTML
* 服务：用来封装可重用的业务逻辑
* 指令：允许你向 HTML 元素添加自定义行为
* 模块：将应用中不同部分组织成一个 Angular 框架可以理解的单页。

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
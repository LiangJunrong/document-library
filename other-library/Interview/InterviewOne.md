阿里系公司第一轮电面题
===

> Create by **jsliang** on **2018-12-6 21:19:00**  
> Recently revised in **2018-12-6 21:29:01**

<br>

> 更多面试题请查看 [面试小集](./README.md)

&emsp;**薪酬范围**：`10K-20K`

&emsp;**岗位描述**：
1. 产品/系统前端技术选型、技术路线规划及系统部署设计，推动所设计架构的有效落实。
2. 配合产品经理，准确理解业务需求，实现产品经理的设计要求，对用户交互和视觉效果有较强的感知力和认知力。
3. 配合后台工程师，设计数据接口协议，实现数据的加载和处理。设计性能优良、交互流畅，易维护、易扩展的数据处理和视图渲染架构。
4. 开发高安全性、强兼容性的用户界面，使之稳定可靠。
5. 为高性能的用户界面设计优秀的编码和技术标准，负责前端开发规范和流程制定。
6. 构建可复制的前端组件库，以确保快速应用原型的想法；

&emsp;**任职资格**:
1. 精通HTML5、CSS3和JavaScript语言，深入HTTP及相关网络协议，熟悉跨终端、跨浏览器的开发模式和平台特性，了解业界技术发展状况；
2. 主导或独立负责过一定规模产品前端，前端技术有专研领域，掌握至少一种非前端开发语言并实际完成项目；
3. 有优质技术产品或开源贡献者优先；有前端架构、性能优化、Hybrid研发、iOS/Android应用开发经验可作为加分项；
4. 充分的产品意识、数据意识，善于规划执行、协调沟通，结果导向；
5. 有团队管理经验，带领团队技术攻坚，团队建设上有突出表现。

&emsp;**面试内容**：

1. 先说一下 `React` 和 `Vue` 的不同点。
2. 原型 `propetype` 与 `_prop_`。
3. 问：什么可以改变 `this` 的指向？答：`bind`、`call`、`apply`。问：那你说一下 `bind` `apply`、`call`。答：简述一下 `bind` 的内部实现，`apply` 和 `call` 的区别。
4. 闭包的理解以及优缺点。
5. 简述一下 js 的垃圾回收机制（因为第三题中我说了，闭包中的东西不会被垃圾回收机制回收，如果滥用会导致性能问题）
6. 问：跨域的几种方式。答：`jsonp`、`core`、`nginx`
7. 性能优化的哪些方式。
8. 简述一下观察者模式。
9. 移动端 `1px` 的问题。
10. 移动端 300ms 延迟，如何解决的？
11. 两栏布局，
12. 实现一个高度为屏幕宽度一半的正方形。
13. **重点**：**写过 Vue 插件么？为什么有些 Vue 插件要使用前要 `Vue.use`，而有一些不需要。（ PS：有 Vue 插件不需要 `use` 的吗？）**
14. 简单说下 Vue 中的 `mixin`，你在什么场景使用它。
15. 了解 Webpack 么？Webpack 优化，你做过哪些。（感觉这个巴拉巴拉吹过了）Webpack 原理是什么？
16. React 中 `setstate` 以后到页面渲染这之间发生了什么？ (从 `diff` 算法开始，`props` 的生命周期钩子说了一下)
17. 简述一下 `Redux` 的数据流向
18. 说下你理解的排序算法，冒泡排序和快排的区别。（尼玛，巴拉巴拉说了一堆，发现说错了，说成二分法排序了，泪奔）
19. 协商缓存你了解么？怎么判断浏览器是怎么判断是什么缓存的。`catch-control` 的几种值，这个突然卡壳了，么想起来。
20. `promise` 的几种状态，他的内部原理是怎么样的？
21. 数组去重，以及排序。
22. 说一下 `cssd` 选择器的权重。
23. `ajax` 预检，如何取消他？
24. Web 安全
25. promise.then 和 settimeout 哪个会先执行，为什么？
26. margin 塌陷的原理。

暂时就想起这么多来，叭叭的说了整整半个小时

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
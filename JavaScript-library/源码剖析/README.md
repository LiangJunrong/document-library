源码剖析
===

> Create by **jsliang** on **2020-05-20 08:40:45**  
> Recently revised in **2020-5-20 08:52:22**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [【微信公众号】ScarSu《如何高效学习一个新知识》](https://mp.weixin.qq.com/s/7KUgyXOkqqjWNWM98meXmw)

* 什么时候看源码？

对于复杂的开源项目，一上来就看源码是不合理的，可能导致效率低下，适得其反。

对于一个开源项目，会经历几个阶段：

1. 首先，刚接触时，跟着官方文档，运行 Demo 实例
2. 接着，在工作中应用、实践以及踩坑
3. 然后，能够熟练使用，了解一些设计思想，但是不知道设计原理
4. 最后，去看源码

* 如何看源码？

**首先**，需要了解这个项目最值得学习的地方，让我们更清楚我们想要什么，有助于我们收集资料，提高学习效率。

**然后**，从全局的角度了解整个项目，帮助我们形成整体的知识结构：

1. 项目背景
2. 项目解决的问题
3. 项目仓库，了解 Issue 报告规则、PR 规则、贡献规则、开发环境……
4. 项目的目录结构
5. 项目的元数据。例如 `package.json`
6. 项目的构建方式，运行环境、入口，构建输出
7. 项目的历史版本和当前版本的区别，未来发展方向
8. 项目的技术选型：项目的技术依赖、优化方案、类型控制、格式检查、代码规范、API 接口设计，单元测试等

**接着**，重点切入。根据你对项目的熟练使用，带着使用的问题去看源码，了解这个项目的重点是如何实现的。

**最后**，模仿实现。我们不需要知道每一个细节是怎么处理的，但是我们可以根据重点的实现原理，做一个模仿版本，这个过程有助于查漏补缺。

**最后的最后**，开源贡献。如果你在实践过程中有新的感悟，或者你也做了一些东西，也可以开源出去，有助于编程界的提升。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
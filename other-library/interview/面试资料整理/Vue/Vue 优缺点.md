Vue 优缺点
===

> Create by **jsliang** on **2020-09-07 21:20:50**  
> Recently revised in **2020-09-07 21:26:14**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* 优点

1、响应式

Vue 最大的优点，通过 MVVM 思想实现数据的双向绑定，通过虚拟 DOM 让数据操作 DOM，而不必操作真实 DOM，提升性能，让开发者有更多时间去思考业务逻辑。

2、组件化

把一个单页应用中的各个模块拆分到一个个组件当中，或者把一些公用的部分抽取出来做成一个可复用的组件。提高开发效率，方便重复使用，使项目的可维护性更强。

* 缺点

1、不利于 SEO。

2、导航不可用，如果一定要导航需要自行实现前进、后退。（由于单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）。

3、初次加载时耗较多。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
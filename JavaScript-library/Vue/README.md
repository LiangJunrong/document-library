Vue
===

> Create by **jsliang** on **2018-10-29 11:48:55**  
> Recently revised in **2018-10-29 11:49:00**

<br>

&emsp;记录下 Vue 的系统学习

&emsp;参考文档：[Vue.js 官方文档](https://cn.vuejs.org/v2/guide/)  
&emsp;参考视频：[开课吧 6月 Vue 视频](https://www.kaikeba.com/)

![图](../../public-repertory/img/js-vue-basic-learning-1.png)

# <a name="chapter-one" id="chapter-one">一 目录</a>

<br>

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;为何需要 Vue ？

* 首先，jQuery 库，它的影响是执行 DOM 操作 + Ajax 请求
* 然后，art-template 库，主要是作为模板引擎，对页面进行渲染。
* 最后，在广大的需求之下，我们有了 Vue 这样，有简易的 DOM 体验，有模板引擎，有路由功能的框架的出现。

<br>

&emsp;Vue 和 jQuery 在代码上的区别是什么？

* 在 jQuery 这种代码库上，它的使用时调用某个函数，我们只需要把控库的代码就可以了。
* 在 Vue 这种框架上，它会初始化自身的一些行为，然后执行你所编写的代码，最后释放资源，从而帮助我们更好地运行我们编写好的代码。

<br>

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
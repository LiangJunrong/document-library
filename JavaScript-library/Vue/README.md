Vue
===

> Create by **jsliang** on **2018-10-29 11:48:55**  
> Recently revised in **2019-2-11 11:35:56**

<br>

&emsp;**记录下关于 Vue 框架的系统学习旅途：Vue 基础 -> Vue 实战 -> Vue 源码剖析。**  

&emsp;**如果小伙伴也在学习 Vue，或者想复习下 Vue。那么，跟我一起走吧，发车啦~**

<br>

# <a name="chapter-one" id="chapter-one">一 学习目录</a>

| 目录 |
| --- |
| [Vue 基础](./VueBase.md) |
| [Vue Router](./VueRouter.md) |
| [Vue-Cli](./VueCli.md) |
| [Axios](./Axios.md) |

<br>

# <a name="chapter-two" id="chapter-two">二 写在前面</a>

* 问：Vue 是啥？
* 答：Vue 是前端三大流行框架之一，学前端不知道 Vue 就跟炒股不认识巴菲特一样。老铁，了解来一发？[【 Go! 】](https://cn.vuejs.org/v2/guide/)

<br>

* 问：学 Vue 有啥用？
* 答：小伙伴们应该不会跟钱过不去吧？现在企业的前端招聘要求中大都有 Vue 技能需求，所以学了拿更高工资啊。不信？点击去看看：[【 Go! 】](https://www.zhipin.com/geek/new/index/recommend)

<br>

* 问：有没有参考文档？
* 答：关于学习 Vue 方面，最佳推荐还是官方文档，因为不管是其他文字还是视频教程，都是基于 Vue 的官方文档或者 GitHub 进行学习编写的。  [Vue.js 官方文档](https://cn.vuejs.org/v2/guide/) 

<br>

* 问：有没有参考视频？
* 答：
1. **开课吧** - [Vue.js 及项目实战(2018/06)](https://www.kaikeba.com/)  

&emsp;在这里偶然发现一套来自 **开课吧** 的教学视频，然后发现它是今年 6 月份录制的，内容上还算是比较新，并且文件命名非常有意思，在这里咱的 Vue 基础知识先跟着它走一遍看看~  
&emsp;【11-08】补充：Axios 中涉及到 Koa 提供的后端接口，还需要恶补一番 Node 基础或者 Koa 直接上手。

![图](../../public-repertory/img/js-vue-basic-learning-2.png)

2. **慕课网** - [《Vue.js 源码全方位深入解析》](https://coding.imooc.com/class/228.html)

&emsp;还未开封，但是研究源码可能参考该套视频。

3. 插件：Vue DevTools

<br>

# 三 学习旅途

&emsp;在 Vue 套餐的学习旅途中：

1. 【10-25】想用 Vue + Koa + MongoDB 搭建一套商城，于是学习 **jspang** 的[教程](http://jspang.com/post/vue-koa.html)。
2. 【10-28】跟着学习了几天，发现一些基础知识真的忘得差不多了，不知道 Vue 基础知识，不知道 Node 基础知识，不知道 Koa 怎么玩，好纠结，好难受。
3. 【10-29】敲下 Vue 的 `README` 文章，开始 Vue 学习。
4. 【11-08】发现自己所有知识点都塞进一篇文章了，感觉不好，所以拆分成 `VueBase`、`VueRouter`、`VueCli`、`Axios` 这四篇文章。同时，发现自己 Axios 没法跟着教程下去了，想搞点 Node 基础，弄个 Koa 服务来帮助自己。

<br>

# 四 感言

<br>

&emsp;【11-04】今天第一次发表该文章，收到了许许多多的评价，这里我抽取印象教深刻的两句话，说说我的想法：

1. “我现在 觉得看别人的技术书籍都没有官方的好.因为别人吃过一遍，可能还没有消化好就出来欺世盗名...然后我们看他写的...学到的就更少了”
2. “为什么不直接翻官方文档，然后再以别人的技术文章为辅”。
  
&emsp;再三咀嚼这两句话，我觉得还是有道理的，就好比我在文章中，会说明我参考了哪里的视频，哪里的文章，最后推荐小伙伴们去积极查阅官方文档。  
&emsp;关于 `欺世盗名` 说法，个人觉得我不曾牛逼做到这种效果 ^_^。  
&emsp;我写文章的目的，仅仅是为了加深我的印象，并且将我的学习、工作经验分享出来，让其他人学习后，可以减少重复躺坑时间。

<br>

# 五 感谢

<br>

1. QQ群：`364140450` 的网友 **青蛙表哥**。非常佩服这位老哥，发表文章当天就我的代码敲了一遍，然后告诉我一些代码是可以优化的，并且对【深度监听】章节进行了自己的理解并推翻了我的代码。

<br>

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
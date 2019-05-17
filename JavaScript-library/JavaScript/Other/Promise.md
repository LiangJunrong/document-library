ES6学习 - 1 - Promise
===

> create by **jsliang** on **2018-8-23 14:26:38**  
> Recently revised in **2018-12-23 20:35:05**

# PS：由于工作突然来活，Promise学习暂且放下，jsliang会利用下班时间慢慢补充。

## 学习导言
&emsp;在学习Promise前，我们先理解两组词：**单线程和多线程**、**同步和异步**。  
&emsp;**单线程和多线程**：在你选购电脑的时候，也许会时不时听导购员跟你推荐：“这台机子是6核12线程的” “这台机子是4核8线程的”……啪啦啪啦介绍一番，然后你就纳闷了，什么是线程？线程是干什么的？……哎~停！专业的解释小伙伴们可以去看专业的回答：[线程](https://baike.baidu.com/item/%E7%BA%BF%E7%A8%8B#1)、[单线程和多线程](https://www.cnblogs.com/hui-run/p/6625913.html)、[单线程和多线程的区别](https://blog.csdn.net/douglax/article/details/1532258)。在这里，我们通过一个通俗易懂的小场景，带大家去理解单线程和多线程：  
&emsp;图（一堆钱）  
&emsp;图（单线程抢钱）  
&emsp;图（多线程抢钱）  
&emsp;解释：通过这个小场景，我们明白了单线程和多线程是什么样子的。下面我们继续了解同步和异步。  
&emsp;**同步和异步**：[文章1](https://www.cnblogs.com/anny0404/p/5691379.html)、[文章2](https://www.zhihu.com/question/19732473/answer/20851256)、[文章3](https://blog.csdn.net/qq_22855325/article/details/72958345)  
&emsp;在理解了 **单线程和多线程**、**同步和异步**的基础上，我们来看看单线程的JavaScript是如何通过Promise来实现异步操作的。
 
## 借鉴与领悟
&emsp;今天我们看看邵哥关于Promise的文章，理解下Promise的世界。[先行观赏](https://juejin.im/post/5b6e5cbf51882519ad61b67e)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

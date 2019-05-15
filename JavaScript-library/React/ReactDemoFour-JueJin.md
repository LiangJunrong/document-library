React Demo Four - 掘金
===

> Create by **jsliang** on **2019-5-15 08:25:08**  
> Recently revised in **2019-5-15 08:25:12**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoThree-JueJin.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

**首先**，经过前面的一系列折腾，发觉自己的时间远远没有想象中的那么充足，又因为这三周的工作，搞得自己 “精疲力竭”、“无法动弹”，越发感到暴躁与疲惫（可能有天气的小小影响）。

**同时**，经过前面的贴代码，以及文章反馈远没有自己想象中的高，**jsliang** 觉得自己可能做了无用功，于是在 **React 系列 4 仿掘金** 的更新上感觉动力不足——也许你会觉得这句话非常扯淡，**jsliang** 的动力怎么会跟文章反馈挂钩了……

**再来就是**，看到身边的同事/小伙伴都在刷 LeetCode、看 React 源码、学 Java、搞 Egg……越发觉得自己落了下乘，所以在暴躁的同时也在犹豫彷徨，我究竟想成就一个怎样的未来：**jsliang** 的未来在哪？

**这么说来**，思来想去，目前自己可以走三条路：

1. **深造**：一路走到黑，完善 React 系列栈，并配合 Node、MySQL 打造自己的网站，毕竟深度学习才能让自己在某个领域成为 “砖家”，可以想象的是，深入学习 React 的大佬是可以自己搭建公司的 React 脚手架，自己开发插件，自己优化项目等。
2. **广度**：扩宽自己思维，学算法，探索 LeetCode 等网站。有句话叫做：**一流的数学，二流的算法**。数学咱就算了，没这头脑，但是搞搞算法应该可以吧，并且算法这玩意真的挺有用的，有时候工作总觉得某方面没处理好，没准就是算法的影响。
3. **转行**：这也许是最没有出息的想法。众所周知编程是一行吃青春饭的地儿，年轻的时候进了这个行业是能拿到高回报的。可是，毕竟是青春饭碗，过了这个年纪往往就意味着有淘汰风险，毕竟身体比不了年轻人，精力、思考等也比不上。所以，就算 **jsliang** 在本命年也深深感到这个危机。但是，转行要转哪去？除了编程我还有啥能力，不可得知。

**因此**，这本身就是个值得深思的问题。而且，我们还有生活，我们的努力就是为了更好的生活，如果你的努力带来的是 **996-ICU**，一年甚至几年的努力工作、努力学习换不来住一次医院，换不来房子的首付，想想这是很可怕的事情。

**最后**，说到这里小伙伴们心里应该有谱了，至于 **jsliang** 的想法或者你对自己的未来有想法了想找个人来个中肯的建议，你可以联系 **jsliang**：

* QQ：1741020489
* 微信：

![图](../../public-repertory/img/z-small-wechat.jpeg)

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

* **实现效果**：

![图](../../public-repertory/img/js-react-demo-four-1.png)

* **源码下载**：[React 系列文章代码地址](https://github.com/LiangJunrong/React)

* **使用技术**：

```js
"dependencies": {
  "axios": "^0.18.0",
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "react-loadable": "^5.5.0",
  "react-redux": "^7.0.2",
  "react-router-dom": "^5.0.0",
  "react-scripts": "3.0.0",
  "redux": "^4.0.1",
  "redux-saga": "^1.0.2"
},
```

其中数据处理方面没有使用，即：`react-loadable`、`react-redux`、`redux`、`redux-saga` 这四个没有使用到，下篇文章可能尝试完善做好。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
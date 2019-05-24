2019 面试实战 - Round Three
===

> Create by **jsliang** on **2019-3-15 16:40:52**  
> Recently revised in **2019-3-17 21:31:15**
 
**Hello 小伙伴们，如果觉得本文还不错，记得给 jsliang 的文档库点个 **star** ， 你们的 **star** 是我学习折腾的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-PracticalRoundThree.md)**

并不是只有特定的季节才能跑路，只因为人跑得多了，这条路就定下来了。

金三银四跑路季，**jsliang** 进行了第三回合的面试，并写下这篇文章。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 上午 10:00](#chapter-three) |
| [3.1 一面笔试题](#chapter-three-one) |
| [3.2 二面小程序](#chapter-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 总结](#chapter-four) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

**请时刻准备好自己的简历，不管是互联网经济不佳面临裁员，还是因为公司内部斗争严重想换份工作，还是因为厌倦了目前的一切……只有随时更新自己，把自己的简历准备好，你才知道哪一刻跑路是最佳选择。**

* **时间**：2019-3-15
* **地点**：广州
* **年限**：一年工作经验
* **薪酬要求**：9K - 15K
* **场次**：上午一场
* **感想**：面试上瘾了，就是想接触更多人，看到更广阔的世界。

## <a name="chapter-three" id="chapter-three">三 上午 10:00</a>

> [返回目录](#chapter-one)

拿完体检单，“顺带” 去面试一下~

## <a name="chapter-three-one" id="chapter-three-one">3.1 一面笔试题</a>

> [返回目录](#chapter-one)

1. 什么是闭包，闭包的优缺点是什么？请简单描述一下。
2. 简单描述一下 TCP 与 UDP 的区别。
3. 点击 button 页面会刷新，如何阻止？
4. 事件触发共经历几个阶段？请分别阐述。
5. 请写出代码输出的结果。如何合理改动代码，是它返回期望的结果？

```js
for(var i = 1; i <= 2; i++) {
  setTimeout(function() {
    alert(i)
  }, 1000)
}
```

6. 

```js
function demo() {
  this.length = 10;
  var fn = function() {
    console.log(this.length); // 输出多少？
  }
  arr = [fn, 'hello layui'];
  fn.length = 100;
  arr[0]();
}
```

## <a name="chapter-three-two" id="chapter-three-two">3.2 二面小程序</a>

> [返回目录](#chapter-one)

* **面试官**：“你好，先自我介绍一下。”
* **我**：（噼里啪啦一顿介绍）
* **面试官**：“好的，说一下你做小程序遇到的问题。”
* **我**：“问题的话，就是在没经验下，看文档开发小程序。然后做得最难的就是通讯录模块，新增/修改的时候需要使用二分法判断下拉到具体位置。**①**”

> **①**：详情可见我的文章：[《微信小程序之奇技淫巧》](https://github.com/LiangJunrong/document-library/blob/master/other-library/WeChatApplet/WeChatAppletFunctionList.md)

* **面试官**：“那你说一下做小程序碰到的样式问题。”
* **我**：“最烦的就是改小程序内部的组件的样式，例如微信小程序视频组件等。”
* **面试官**：“额(⊙o⊙)…好的，其实小程序也没啥好问的。”
* **我**：“是的。个人感觉小程序就是 Vue 的阉割版。”
* **面试官**：“好的，那就这些吧，嗯，你可能要过两三天等复试，因为我们这边属于国企，所以流程还是要走的。”
* **我**（惊讶）“噢噢，好的，谢谢~”

## <a name="chapter-four" id="chapter-four">四 总结</a>

> [返回目录](#chapter-one)

是的，很轻松的一个上午，压根没感觉到面试的紧张感，可能因为面试内容仅仅讨论小程序，所以没太多需要沟通的。

就这样，我的 2019 面试之旅结束了，剩下的就是将我的面试准备内容贴出来（爆大招），给小伙伴们更多的参考，为自己的面试做充足的准备。

最后祝小伙伴们找到合适的工作咯~

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
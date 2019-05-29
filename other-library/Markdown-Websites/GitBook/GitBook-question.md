GitBook 开发问题记录
===

> Create by **jsliang** on **2019-5-23 08:57:02**  
> Recently revised in **2019-5-29 08:48:05**

在使用 GitBook 的过程中，Mac 使用 `gitbook serve` 和 `gitbook serve` 的时候，是 OK 的。

但是，在 Windows 下：

```
1. document-library\JavaScript-library\Vue\VueBase.md
2. document-library\JavaScript-library\Vue\VueOfficialDocuments.md
3. document-library\JavaScript-library\Vue\VueDemoTwo.md
4. document-library\JavaScript-library\React\ReactList-ReactRouter.md
5. document-library\other-library\shortArticle\share\November2018.md
6. document-library\other-library\Website\ShoppingMall\ShoppingMall.md
7. document-library\other-library\WeChatApplet\WeChatAppletBug.md
8. document-library\other-library\WeChatApplet\WeChatAppletFunctionList.md
```

后来，小伙伴 **胡琦** 给了我提醒：

“这几个文件需要切换 CRLF 为 LF：[ETC - Issue - 3](https://github.com/react-guide/ETC/issues/3)”

然后，我顺着文章查看：

* [GitBook-Markdown bug](https://github.com/GitbookIO/gitbook-markdown/issues/2)

## 关于 CR、LF、CRLF

* CR：Carriage Return，对应 ASCII 中转义字符 \r，表示回车。早期的 Mac 系统（MacIntosh）采用 CR 格式。
* LF：Linefeed，对应 ASCII 中转义字符 \n，表示换行。Unix / Linux / Mac OS X 等使用 LF 格式。
* CRLF：Carriage Return & Linefeed，对应 ASCII 中转义字符 \r\n，表示回车并换行。Windows 系统采用两个字符换行，即 CR + LF。

更多可以查看：[CRLF、CR、LF详解](https://blog.csdn.net/lishuoboy/article/details/84768748)

我们文中出现的 bug，应该是 GitBook 编译的时候，使用的换行符配置不同，导致 Mac 和 Windows 有差异。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
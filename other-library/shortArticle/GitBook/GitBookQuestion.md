GitBook 开发问题
===

> Create by **jsliang** on **2019-5-23 08:57:02**  
> Recently revised in **2019-05-23 15:14:03**

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
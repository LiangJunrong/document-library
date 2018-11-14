Markdown 使用语法
===

> create by **jsliang** on **2018-08-22 17:58:56**  
> Recently revised in **2018-11-14 21:40:54**

&emsp;什么事Markdown？Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本具有一定的格式。Markdown文件的后缀为 \.md  
&emsp;在jsliang看来，Markdown就是HTML的简化版、TXT文本的格式版。如果你在编写中存在难点，你可以直接在Markdown中使用HTML标记语言（包括使用行内样式）。 

<br>

## 预览主题
&emsp;在这里，介绍下VS Code的MarkDown预览如何更换为GitHub主题。
1. 使用 Ctrl + Shift + P 打开设置面板，或者点 **文件\>首选项\>设置** 打开设置面板。
2. 设置 "markdown.styles"为引用本地CSS（只能绝对路径），或者引用网上的第三方文件。这里引用了Public-Repertory\/css下的markdown-github.css文件。
3. 配置为：
```
"markdown.styles": [
  "E:\\MyWeb\\jsliang-study\\Document-Library\\Public-Repertory\\css\\markdown-github.css"
]
```

<br>

&emsp;PS：如果不满意加载本地的 Markdown Style，可以使用 VS Code 的插件：`Markdown Preview Github Styling`

<br>

下面介绍Markdown常用语法：

<br>

# 1. 标题
&emsp;**用法介绍**：标题可以像HTML一样使用一级至六级标题，使用\#即可，一级标题的使用方法为：`# 一级标题`，几级标题就使用几个\#。  
&emsp;**展示：**
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

<br>

# 2. 无序列表
&emsp;**用法介绍**：无序列表可以使用\* \+ \-这三种格式，这里推荐使用\*：`* 列表1`  
&emsp;**展示：**
* 列表1
+ 列表2
- 列表3

<br>

# 3. 有序列表
&emsp;**用法介绍**：有序列表使用数字`1. ***`即可，如果开始数字是3，那这个列表就从`3. ***`开始，第二条是`4. ***`  
&emsp;**展示：**
1. 列表1
2. 列表2
3. 列表3

<br>

# 4. 区块引用
&emsp;**用法介绍**：区块引用使用\>这个符号，空格后放文本即可：`> 一级区块`  
&emsp;**展示：**  
> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了

<br>

# 5. 分割线
&emsp;**用法介绍**：分割线使用三个及以上的\*或者\-或者\_都可，这里使用三个\*：`***`  
&emsp;**展示：**  
***
---
___

<br>

# 6. 链接
&emsp;链接分为行内式和参数式这两种方法
## 6.1 行内式  
&emsp;**用法介绍**：`[jsliang的网站](http://www.jsliang.top)`  
&emsp;**展示：**

[jsliang的网站](http://www.jsliang.top)

## 6.2 参数式
&emsp;**用法介绍**：  
```
[site]:http://www.jsliang.top "网站"
[网站]:http://www.jsliang.top "网站"
这里是[site],这里是[网站]
```
[site]:http://www.jsliang.top "网站"
[网站]:http://www.jsliang.top "网站"

&emsp;**展示：**

这里是[site],这里是[网站]

<br>

# 7. 图片
&emsp;**用法介绍**：  
* 如果是本地图片，则支持绝对路径和相对路径
* 如果是网络图片，则可以使用http://**来引入
* 如果是base64，怎么使用参考[markdown引用base64](https://blog.csdn.net/slaughterdevil/article/details/79255933)
> 
&emsp;**展示：**  

![图片](../../../public-repertory/img/other-markdown-logo.jpg)

<br>

# 8. 代码框
代码框分为单行用和多行用这两种方法：
## 8.1 单行用  
&emsp;**用法介绍**：` `` `  
&emsp;**展示：**  

`<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>`

## 8.2 多行用
&emsp;**用法介绍**：  
> ```
\`\`\` 注释  
多行代码文本1  
多行代码文本2  
\`\`\`
> ```

&emsp;**展示：**
``` 多行代码如何编写
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
```

<br>

# 9. 表格
表格有三种表示方法：
## 9.1 第一类表格
&emsp;**用法介绍**：  
> ```
\| name    \| age  \| sex  \|  
\| :-----: \| :--- \| ---: \|  
\| jsliang \| 23   \| 男   \|  
\| 小梁    \| 23   \| 男   \|  
> ```

&emsp;**展示：** 

| name    | age  | sex  |
| :-----: | :--- | ---: |
| jsliang | 23   | 男   |
| 小梁    | 23   | 男   |

<br>

## 9.2 第二类表格
&emsp;**用法介绍**：  
> ```
\| name    \| age  \| sex  \|  
\| ----- \| ----- \|   
\| jsliang \| 23   \| 男   \|  
\| 小梁    \| 23   \| 男   \|  
> ```

&emsp;**展示：**

| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |
| 内容3 | 内容4 |

<br>

## 9.3 第三类表格
&emsp;**用法介绍**： 
> ```
学号 \| 姓名 \| 分数  
\- \| - \| -  
小明 \| 男 \| 75  
小红 \| 女 \| 79  
小陆 \| 男 \| 92  
> ```

&emsp;**展示：**

学号 | 姓名 | 分数
- | - | -
小明 | 男 | 75
小红 | 女 | 79
小陆 | 男 | 92

<br>

# 10. 强调
## 10.1 字体倾斜
&emsp;**用法介绍**：`*字体倾斜*`或者`_字体倾斜_`  
&emsp;**展示：**

*字体倾斜*
_字体倾斜_
## 10.2 字体加粗
&emsp;**用法介绍**：`**字体加粗**`或者`__字体加粗__`  
&emsp;**展示：**

**字体加粗**
__字体加粗__

<br>

# 11. 转义
&emsp;**用法介绍**：通过使用\加上特殊字符，达到转义效果。  
&emsp;**展示：**
* \\
* \`
* \~
* \*
* \_
* \-
* \+
* \.
* \!
* ……

<br>

# 12. 删除线
&emsp;**用法介绍**：`~~请删除我吧~~`  
&emsp;**展示：**  

~~请删除我吧！~~

<br>

# 13. 功能实现

&emsp;实现的功能：`- [x]` 
- [x] 功能1
- [x] 功能2

&emsp;未实现的功能：`- [ ]`
- [ ] 功能3
- [ ] 功能4

<br>

# 14. 结语
至此，Markdown语法介绍完毕，有兴趣的小伙伴继续去了解更深层次的Markdown语法吧！——2018年8月21日10:54:26

<br>

***
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
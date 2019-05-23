Markdown
===

> create by **jsliang** on **2018-08-22 17:58:56**  
> Recently revised in **2019-05-23 19:28:40**

## 一 序

什么是 Markdown？

Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本具有一定的格式。Markdown 文件的后缀为 `.md`。 

在 **jsliang** 看来，Markdown 就是 HTML 的简化版、TXT 文本的格式版。

如果你在编写中存在难点，你可以直接在 Markdown 中使用 HTML 标记语言（包括使用行内样式）。 

## 二 预览主题

在这里，介绍下 VS Code 的 Markdown 预览如何更换为 GitHub 主题。

1. 使用 `Ctrl + Shift + P` 打开设置面板，或者点 **文件\>首选项\>设置** 打开设置面板。
2. 设置 `markdown.styles` 为引用本地CSS（只能绝对路径），或者引用网上的第三方文件。这里引用了 `public-repertory/css` 下的 `markdown-github.css` 文件。
3. 配置为：

```
"markdown.styles": [
  "E:\\MyWeb\\jsliang-study\\Document-Library\\Public-Repertory\\css\\markdown-github.css"
]
```

PS：如果不满意加载本地的 Markdown Style，可以使用 VS Code 的插件：`Markdown Preview Github Styling`

## 三 Markdown 语法

下面介绍Markdown常用语法：

### 3.1 标题

* **用法介绍**：标题可以像 HTML 一样使用一级至六级标题，使用 `#` 即可，一级标题的使用方法为：`# 一级标题`，几级标题就使用几个 `#`。  

* **演示**：

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### 3.2 无序列表

* **用法介绍**：无序列表可以使用 `*` `+` `-` 这三种格式，这里推荐使用`*`：`* 列表1`  

* **演示**：

```
* 列表1
+ 列表2
- 列表3
```

* 列表1
+ 列表2
- 列表3

### 3.3 有序列表

* **用法介绍**：有序列表使用数字`1. ***`即可，如果开始数字是3，那这个列表就从`3. ***`开始，第二条是`4. ***`  

* **演示**：

```
1. 列表1
2. 列表2
3. 列表3
```

1. 列表1
2. 列表2
3. 列表3

### 3.4 区块引用

* **用法介绍**：区块引用使用 `>` 这个符号，空格后放文本即可：`> 一级区块`  

* **演示**：

```
> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了
```

> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了

### 3.5 分割线

* **用法介绍**：分割线使用三个及以上的 `*` 或者 `-` 或者 `_` 都可，这里使用三个 `*`：`***`  

* **演示**：

```
***
---
___
```

***
---
___

### 3.6 链接

链接分为行内式和参数式这两种方法

#### 3.6.1 行内式  

* **演示**：

```
[jsliang 的网站](http://www.jsliang.top)
```

[jsliang 的网站](http://www.jsliang.top)

#### 3.6.2 参数式

* **演示**：  

```
[site]:http://www.jsliang.top "网站"
[网站]:http://www.jsliang.top "网站"

这里是 [site]，这里是 [网站]
```

[site]:http://www.jsliang.top "网站"
[网站]:http://www.jsliang.top "网站"

这里是 [site]，这里是 [网站]

### 3.7 图片

* **用法介绍**：  

如果是本地图片，则支持绝对路径和相对路径

如果是网络图片，则可以使用 `http://**` 来引入

如果是 base64，怎么使用参考 [markdown 引用 base64](https://blog.csdn.net/slaughterdevil/article/details/79255933)

* **演示**：

```
![图片](../../../public-repertory/img/other-markdown-logo.jpg)
```

![图片](../../../public-repertory/img/other-markdown-logo.jpg)

### 3.8 代码框

代码框分为单行用和多行用这两种方法：

#### 3.8.1 单行用  

* **用法介绍**：` `` `  

* **演示**：

```
`<p>你好使用者，要看看 jsliang 的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>`
```

`<p>你好使用者，要看看 jsliang 的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>`

#### 3.8.2 多行用

* **用法介绍**：  

> ```
\`\`\`

\`\`\`
> ```

* **演示**：

> ```
\`\`\`注释  
多行代码文本1  
多行代码文本2  
\`\`\`
> ```

```
多行代码文本1  
多行代码文本2  
```

### 3.9 表格

表格有三种表示方法：

#### 3.9.1 第一类表格

* **演示**：  

> ```
\| name    \| age  \| sex  \|  
\| :-----: \| :--- \| ---: \|  
\| jsliang \| 23   \| 男   \|  
\| 小梁    \| 23   \| 男   \|  
> ```

| name    | age  | sex  |  
| :-----: | :--- | ---: |  
| jsliang | 23   | 男   |  
| 小梁    | 23   | 男   |  

#### 3.9.2 第二类表格

* **演示**： 

> ```
\| name    \| age  \| sex  \|  
\| ----- \| ----- \| -----  \|  
\| jsliang \| 23   \| 男   \|  
\| 小梁    \| 23   \| 男   \|  
> ```

| name | age | sex |
| ----- | ----- | --- |
| jsliang | 23   | 男   |  
| 小梁    | 23   | 男   |  

#### 3.9.3 第三类表格

* **演示**：

> ```
学号 \| 姓名 \| 分数  
\- \| - \| -  
小明 \| 男 \| 75  
小红 \| 女 \| 79  
小陆 \| 男 \| 92  
> ```

学号 | 姓名 | 分数  
- | - | -  
小明 | 男 | 75  
小红 | 女 | 79  
小陆 | 男 | 92  

### 3.10 强调

#### 3.10.1 字体倾斜

* **用法介绍**：`*字体倾斜*`或者`_字体倾斜_`  

* **演示**：

```
*字体倾斜*
_字体倾斜_
```

*字体倾斜*
_字体倾斜_

### 10.2 字体加粗

* **用法介绍**：`**字体加粗**` 或者 `__字体加粗__`  

* **演示**：

```
**字体加粗**
__字体加粗__
```

**字体加粗**
__字体加粗__

### 3.11 转义

* **用法介绍**：通过使用\加上特殊字符，达到转义效果。  

* **演示**：

```
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
```

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

### 3.12 删除线

* **用法介绍**：`~~请删除我吧~~`  

* **演示**：  

```
~~请删除我吧！~~
```

~~请删除我吧！~~

### 3.13 功能实现

* **用法介绍**：实现的功能：`- [x]` 

* **演示**：

```
- [x] 功能1
- [x] 功能2
```

- [x] 功能1
- [x] 功能2

* **用法介绍**：未实现的功能：`- [ ]`

* **演示**：

```
- [ ] 功能3
- [ ] 功能4
```

- [ ] 功能3
- [ ] 功能4

### 3.14 缩略标签

* **演示**：

```
<details>
  <summary>基础知识</summary>

被缩略

你还需要知道其他的吗？

</details>
```

<details>
  <summary>基础知识</summary>

被缩略

你还需要知道其他的吗？

</details>

### 3.15 结语

至此，Markdown 语法介绍完毕，有兴趣的小伙伴继续去了解更深层次的 Markdown 语法吧！——2018年8月21日10:54:26

---
> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
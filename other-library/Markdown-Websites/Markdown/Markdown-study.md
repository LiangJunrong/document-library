Markdown 学习
===

> create by **jsliang** on **2018-08-22 17:58:56**  
> Recently revised in **2019-5-29 09:03:26**

什么是 Markdown？

Markdown 是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本具有一定的格式。Markdown 文件的后缀为 `.md`。

在 **jsliang** 看来，Markdown 就是 HTML 的简化版、TXT 文本的格式版。

如果你在编写中存在难点，你可以直接在 Markdown 中使用 HTML 标记语言、CSS 样式以及 JS 脚本，对自己编写的文章等进行扩展。 

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

**jsliang** 在一开始的时候，使用过 Word 或者自己搭建的富文本博客来编写自己的文章，说实话，那太痛苦了，代码无法做很好的处理，文章写起来不利索，处理样式的时候浪费大量时间……

然后，在大佬的推荐下，**jsliang** 接触了 Markdown，并感受到世界深深的鼓励。

是的，谁用谁知道！

## <a name="chapter-three" id="chapter-three">三 Markdown 语法</a>

> [返回目录](#chapter-one)

下面介绍 Markdown 中的常用语法。

### <a name="chapter-three-one" id="chapter-three-one">3.1 标题</a>

> [返回目录](#chapter-one)

* **用法介绍**：标题可以像 HTML 一样使用一级至六级标题，使用 `#` 即可，一级标题的使用方法为：`# 一级标题`，几级标题就使用几个 `#`。  

* **写法**：

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

* **演示**：

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### <a name="chapter-three-two" id="chapter-three-two">3.2 无序列表</a>

> [返回目录](#chapter-one)

* **用法介绍**：无序列表可以使用 `*` `+` `-` 这三种格式，这里推荐使用`*`：`* 列表1`  

* **写法**：

```
* 列表1
+ 列表2
- 列表3
```

* **演示**：

* 列表1
+ 列表2
- 列表3

### <a name="chapter-three-three" id="chapter-three-three">3.3 有序列表</a>

> [返回目录](#chapter-one)

* **用法介绍**：有序列表使用数字`1. ***`即可，如果开始数字是3，那这个列表就从`3. ***`开始，第二条是`4. ***`  

* **写法**：

```
1. 列表1
2. 列表2
3. 列表3
```

* **演示**：

1. 列表1
2. 列表2
3. 列表3

### <a name="chapter-three-four" id="chapter-three-four">3.4 区块引用</a>

> [返回目录](#chapter-one)

* **用法介绍**：区块引用使用 `>` 这个符号，空格后放文本即可：`> 一级区块`  

* **写法**：

```
> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了
```

* **演示**：

> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了
>>> 注意：这是三级嵌套，相信你知道怎么用了

### <a name="chapter-three-five" id="chapter-three-five">3.5 分割线</a>

> [返回目录](#chapter-one)

* **用法介绍**：分割线使用三个及以上的 `*` 或者 `-` 或者 `_` 都可，这里使用三个 `*`：`***`  

* **写法**：

```
***
---
___
```

* **演示**：

***
---
___

### 3.6 链接

链接分为行内式和参数式这两种方法

#### 3.6.1 行内式  

* **写法**：

```
[jsliang 的网站](http://www.jsliang.top)
```

[jsliang 的网站](http://www.jsliang.top)

#### 3.6.2 参数式

* **写法**：  

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

* **写法**：

```
![图片](../../../public-repertory/img/other-markdown-logo.jpg)
```

![图片](../../../public-repertory/img/other-markdown-logo.jpg)

### 3.8 代码框

代码框分为单行用和多行用这两种方法：

#### 3.8.1 单行用  

* **用法介绍**：` `` `  

* **写法**：

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

* **写法**：

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

* **写法**：  

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

* **写法**： 

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

* **写法**：

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

* **写法**：

```
*字体倾斜*
_字体倾斜_
```

*字体倾斜*
_字体倾斜_

### 10.2 字体加粗

* **用法介绍**：`**字体加粗**` 或者 `__字体加粗__`  

* **写法**：

```
**字体加粗**
__字体加粗__
```

**字体加粗**
__字体加粗__

### 3.11 转义

* **用法介绍**：通过使用\加上特殊字符，达到转义效果。  

* **写法**：

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

* **写法**：  

```
~~请删除我吧！~~
```

~~请删除我吧！~~

### 3.13 功能实现

* **用法介绍**：实现的功能：`- [x]` 

* **写法**：

```
- [x] 功能1
- [x] 功能2
```

- [x] 功能1
- [x] 功能2

* **用法介绍**：未实现的功能：`- [ ]`

* **写法**：

```
- [ ] 功能3
- [ ] 功能4
```

- [ ] 功能3
- [ ] 功能4

### 3.14 缩略标签

* **写法**：

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

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
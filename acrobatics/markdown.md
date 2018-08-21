markdown使用语法
===

# 标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

# 无序列表
* 列表1
+ 列表2
- 列表3

# 有序列表
3. 列表1
2. 列表2
1. 列表3

# 区块引用
> 注意：区块引用的左边，有个竖线！
>> 注意：引用还可以嵌套使用，这是二级的引用，二级以上相信你也懂了

# 分割线
***
---
___

# 链接
## 行内式
[jsliang的网站](http://www.jsliang.top)
## 参数式
[site]:http://www.jsliang.top "网站"
[网站]:http://www.jsliang.top "网站"

这里是[site],这里是[网站]

# 图片
> * 如果是本地图片，则支持绝对路径和相对路径
> * 如果是网络图片，则可以使用http://**来引入
> * 如果是base64，怎么使用参考[markdown引用base64](https://blog.csdn.net/slaughterdevil/article/details/79255933)

![图片](../img/acrobatics-markdown-logo.jpg)

# 代码框
## 单行用``
`<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>`

### 多行用```
``` 多行代码如何编写
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
<p>你好使用者，要看看jsliang的网站吗？<a href="http://www.jsliang.top">点我跳转</a></p>
```
# 表格
## 第一类表格
| name    | age  | sex  |
| :-----: | :--- | ---: |
| jsliang | 23   | 男   |
| 小梁    | 23   | 男   |

## 第二类表格
| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |
| 内容3 | 内容4 |

## 第三类表格
学号 | 姓名 | 分数
- | - | -
小明 | 男 | 75
小红 | 女 | 79
小陆 | 男 | 92

# 强调
*字体倾斜*
_字体倾斜_
**字体加粗**
__字体加粗__

# 转义
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

# 删除线
~~请删除我吧！~~

# MarkDown预览更换为GitHub主题
1. 使用 Ctrl + Shift + P 打开设置面板，或者点 **文件\>首选项\>设置** 打开设置面板。
2. 设置 "markdown.styles"为引用本地CSS（只能绝对路径），或者引用网上的第三方文件。这里引用了acrobatics\/css下的markdown-github.css文件。
3. 配置为：
```
"markdown.styles": [
    "E:\\MyWeb\\jsliang-study\\Document-Library\\acrobatics\\css\\markdown-github.css"
]
```
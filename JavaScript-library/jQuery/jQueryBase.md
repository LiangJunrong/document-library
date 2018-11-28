jQuery 基础
===

> Create by **jsliang** on **2018-05-07 15:56:17**  
> Recently revised in **2018-11-28 08:34:39**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 尝试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 兼容](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 jQuery 语法](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 jQuery 选择器](#chapter-six) |
| &emsp;[6.1 元素选择器](#chapter-six-one) |
| &emsp;[6.2 #ID 选择器](#chapter-six-two) |
| &emsp;[6.3 .class 选择器](#chapter-six-three) |
| &emsp;[6.4 其他用法](#chapter-six-four) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 DOM 事件](#chapter-seven) |
| &emsp;[7.1 mouseover 与 mouseenter](#chapter-seven-one) |
| &emsp;[7.2 键盘事件顺序](#chapter-seven-two) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 jQuery 效果](#chapter-eight) |
| &emsp;[8.1 显示/隐藏](#chapter-eight-one) |
| &emsp;[8.2 淡入/淡出](#chapter-eight-two) |
| &emsp;[8.3 滑动](#chapter-eight-three) |
| &emsp;[8.4 动画](#chapter-eight-four) |
| &emsp;[8.5 停止动画](#chapter-eight-five) |
| &emsp;[8.6 链](#chapter-eight-six) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 捕获](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 设置](#chapter-ten) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 添加元素](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 删除元素](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 CSS 类](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 CSS() 方法](#chapter-fourteen) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 尺寸](#chapter-fifteen) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 祖先选择器](#chapter-sixteen) |
| <a name="catalog-chapter-seventeen" id="catalog-chapter-seventeen"></a>[十七 后代选择器](#chapter-seventeen) |
| <a name="catalog-chapter-eighteen" id="catalog-chapter-eighteen"></a>[十八 同胞选择器](#chapter-eighteen) |
| <a name="catalog-chapter-nighteen" id="catalog-chapter-nighteen"></a>[十九 过滤选择器](#chapter-nighteen) |
| <a name="catalog-chapter-twenty" id="catalog-chapter-twenty"></a>[二十 load](#chapter-twenty) |
| <a name="catalog-chapter-twenty-one" id="catalog-chapter-twenty-one"></a>[二十一 get() 和 post()](#chapter-twenty-one) |
| <a name="catalog-chapter-twenty-two" id="catalog-chapter-twenty-two"></a>[二十二 Ajax](#chapter-twenty-two) |
| <a name="catalog-chapter-twenty-three" id="catalog-chapter-twenty-three"></a>[二十三 JSONP](#chapter-twenty-three) |
| <a name="catalog-chapter-twenty-four" id="catalog-chapter-twenty-four"></a>[二十四 noConflict](#chapter-twenty-four) |
| <a name="catalog-chapter-twenty-five" id="catalog-chapter-twenty-five"></a>[二十五 jQuery 实例](#chapter-twenty-five) |
| <a name="catalog-chapter-twenty-six" id="catalog-chapter-twenty-six"></a>[二十六 选择器扩展](#chapter-twenty-six) |
| &emsp;[26.1 显示/隐藏](#chapter-twenty-six-one) |
| &emsp;[26.2 淡入/淡出](#chapter-twenty-six-two) |
| &emsp;[26.3 滑动](#chapter-twenty-six-three) |
| &emsp;&emsp;[26.3.1 内容过滤选择器](#chapter-twenty-six-three-one) |
| &emsp;&emsp;[26.3.2 可见性过滤选择器](#chapter-twenty-six-three-two) |
| &emsp;[26.4 动画](#chapter-twenty-six-four) |
| &emsp;[26.5 停止动画](#chapter-twenty-six-five) |
| &emsp;[26.6 链](#chapter-twenty-six-six) |
| <a name="catalog-chapter-twenty-seven" id="catalog-chapter-twenty-seven"></a>[二十七 插件扩展](#chapter-twenty-seven) |
| &emsp;[27.1 jQuery Validate](#chapter-twenty-seven-one) |
| &emsp;[27.2 jQuery Accordion](#chapter-twenty-seven-two) |
| &emsp;[27.3 jQuery Autocomplete](#chapter-twenty-seven-three) |
| &emsp;[27.4 jQuery Growl](#chapter-twenty-seven-four) |
| &emsp;[27.5 jQuery Password Validation](#chapter-twenty-seven-five) |
| &emsp;[27.6 jQuery Prettydate](#chapter-twenty-seven-six) |
| &emsp;[27.7 jQuery Treeview](#chapter-twenty-seven-seven) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
ECharts 打造在线个人简历
===

> Create by **jsliang** on **2018-12-5 11:48:56**  
> Recently revised in **2018-12-5 14:27:06**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得点个赞或者给个 star，你们的赞和 star 是我编写更多更精彩文章的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/ECharts/CurriculumVitae.md)**

<br>

&emsp;互联网冬天？裁员？跳槽？  
&emsp;最近频繁听到身边朋友跳槽的声音，然后 “被” 要求改了几份简历，结果嘛，enmmm......  
&emsp;所以，咱使用 Vue + ECharts + ElementUI 来打造份个人简历，小伙伴们看看对面试有木有帮助吧~  
&emsp;涉及技术：

* Vue
* Vue-Router
* ECharts
* ElementUI
* HTML/HTML5
* CSS/CSS3
* JS/ES6

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 整体搭建](#chapter-three) |
| &emsp;<a name="catalog-chapter-three-one" id="catalog-chapter-three-one"></a>[3.1 基础配置](#chapter-three-one) |
| &emsp;<a name="catalog-chapter-three-two" id="catalog-chapter-three-two"></a>[3.2 总体配置](#chapter-three-two) |
| &emsp;<a name="catalog-chapter-three-three" id="catalog-chapter-three-three"></a>[3.3 安装 ECharts](#chapter-three-three) |
| &emsp;<a name="catalog-chapter-three-four" id="catalog-chapter-three-four"></a>[3.4 安装 ElementUI](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 分步实现](#chapter-four) |
| &emsp;<a name="catalog-chapter-four-one" id="catalog-chapter-four-one"></a>[4.1 part1 - 基本信息](#chapter-four-one) |
| &emsp;<a name="catalog-chapter-four-two" id="catalog-chapter-four-two"></a>[4.2 part2 - 好友分布](#chapter-four-two) |
| &emsp;<a name="catalog-chapter-four-three" id="catalog-chapter-four-three"></a>[4.3 part3 - 技能特长](#chapter-four-three) |
| &emsp;<a name="catalog-chapter-four-four" id="catalog-chapter-four-four"></a>[4.4 part4 - 工作经验](#chapter-four-four) |
| &emsp;<a name="catalog-chapter-four-five" id="catalog-chapter-four-five"></a>[4.5 part5 - 前端研发](#chapter-four-five) |
| &emsp;<a name="catalog-chapter-four-six" id="catalog-chapter-four-six"></a>[4.6 part6 - 自学旅途](#chapter-four-six) |
| &emsp;<a name="catalog-chapter-four-seven" id="catalog-chapter-four-seven"></a>[4.7 part7 - 求职意向](#chapter-four-seven) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;在使用 Vue + ECharts 编写公司报表项目的时候，突如其来，想到可以写个在线简历。  
&emsp;**于是，就去做了。**  
&emsp;文章中的见解仅代表个人观点，不代表 “最优想法”，请文明评论、科学参考。  
&emsp;如有更好建议，可加 **jsliang** 的文档库 QQ 群：`798961601`。  
&emsp;谢谢~

<br>

# <a name="chapter-three" id="chapter-three">三 整体搭建</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;工欲善其事  
&emsp;必先利其器  
&emsp;在我们进行愉快折腾之前，我们需要将代码的环境搭建好，才能如鱼得水更好地开发。

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 基础配置</a>

> [返回目录](#catalog-chapter-three-one)

<br>

&emsp;首先，我们通过控制台（终端）新建一个 `Vue-Cli` 项目：

* `vue init webpack`

![图](../../public-repertory/img/js-ECharts-CurriculumVitae-1.png)

&emsp;然后，我们使用 `npm i` 安装 `Vue-Cli` 的依赖，生成 `node_modules` 文件夹。  
&emsp;最后，我们引入 `CSS reset`，并清理红框内文件，之后项目变为如下所示：

![图](../../public-repertory/img/js-ECharts-CurriculumVitae-2.png)

&emsp;此刻我们的一些文件发生了变动：

> HelloWorld.vue

```
<template>
  <div class="hello">
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>
```

<br>

> App.vue

```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
```

<br>

> main.js

```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../static/css/reset.css' /**引入样式重置 */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

> reset.css

```
/* 
  * reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  * The purpose of reset is not to allow default styles to be consistent across all browsers, but to reduce the potential problems of default styles.
  * create by jsliang
*/

/** 清除内外边距 - clearance of inner and outer margins **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* 结构元素 - structural elements */
dl, dt, dd, ul, ol, li, /* 列表元素 - list elements */
pre, /* 文本格式元素 - text formatting elements */
form, fieldset, legend, button, input, textarea, /* 表单元素 - from elements */
th, td /* 表格元素 - table elements */ {
  margin: 0;
  padding: 0;
}

/** 设置默认字体 - setting the default font **/
body, button, input, select, textarea {
  font: 18px/1.5 '黑体', Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

/** 重置列表元素 - reset the list element **/
ul, ol { list-style: none; }

/** 重置文本格式元素 - reset the text format element **/
a, a:hover { text-decoration: none; }

/** 重置表单元素 - reset the form element **/
button { cursor: pointer; }
input { font-size: 18px; outline: none; }

/** 重置表格元素 - reset the table element **/
table { border-collapse: collapse; border-spacing: 0; }

/** 图片自适应 - image responsize **/
img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; vertical-align: middle; }

/* 
    * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
    * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
*/
div, input { box-sizing: border-box; }

/** 清除浮动 - clear float **/
.jsliang-clear:after, .clear:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.jsliang-clear, .clear {
  *zoom: 1;
}

/** 设置input的placeholder - set input placeholder **/
input::-webkit-input-placeholder { color: #919191; font-size: .26rem } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: .26rem } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: .26rem } /* Internet Explorer */
```

&emsp;当然，怕小伙伴们嫌麻烦，直接上传了基础代码：[地址]()

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 总体配置</a>

> [返回目录](#catalog-chapter-three-two)

<br>

&emsp;

<br>

## <a name="chapter-three-three" id="chapter-three-three">3.3 安装 ECharts</a>

> [返回目录](#catalog-chapter-three-three)

<br>

&emsp;

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 安装 ElementUI</a>

> [返回目录](#catalog-chapter-three-four)

<br>

&emsp;

<br>

# <a name="chapter-four" id="chapter-four">四 分步实现</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;**提问**：简历一般有什么内容？  
&emsp;**回答**：

1. 基本信息：姓名、工作年限、学历、格言、年龄、联系电话、电子邮箱、GitHub、掘金……
2. 求职意向：职位、城市、薪资、入职时间……
3. 工作经验：……
4. 个人技能：熟悉 HTML5、CSS3、JavaScript……
5. 教育背景/荣誉证书（没有出彩的话，**jsliang** 就建议忽略不写了）

&emsp;所以，我们就着这几方面来编写我们的简历。

<br>

## <a name="chapter-four-one" id="chapter-four-one">4.1 part1 - 基本信息</a>

> [返回目录](#catalog-chapter-four-one)

<br>

&emsp;

<br>

## <a name="chapter-four-two" id="chapter-four-two">4.2 part2 - 好友分布</a>

> [返回目录](#catalog-chapter-four-two)

<br>

&emsp;

<br>

## <a name="chapter-four-three" id="chapter-four-three">4.3 part3 - 技能特长</a>

> [返回目录](#catalog-chapter-four-three)

<br>

&emsp;

<br>

## <a name="chapter-four-four" id="chapter-four-four">4.4 part4 - 工作经验</a>

> [返回目录](#catalog-chapter-four-four)

<br>

&emsp;

<br>

## <a name="chapter-four-five" id="chapter-four-five">4.5 part5 - 前端研发</a>

> [返回目录](#catalog-chapter-four-five)

<br>

&emsp;

<br>

## <a name="chapter-four-six" id="chapter-four-six">4.6 part6 - 自学旅途</a>

> [返回目录](#catalog-chapter-four-six)

<br>

&emsp;

<br>

## <a name="chapter-four-seven" id="chapter-four-seven">4.7 part7 - 求职意向</a>

> [返回目录](#catalog-chapter-four-seven)

<br>

&emsp;

<br>

# 四 打赏
  
&emsp;撰文不易，如果文章对小伙伴有帮助，希望小伙伴们给勤劳敲代码、辛苦撰文的 **jsliang** 进行微信/支付宝打赏，你们的每一次打赏都是最好的鼓励，谢谢~

![图](../../public-repertory/img/seek-reward.png)

![图](../../public-repertory/img/seek-reward.jpg)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

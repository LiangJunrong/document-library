jQuery 工作常用解决方案
===

> Create by **jsliang** on **2018-11-4 10:37:33**  
> Recently revised in **2019-2-11 11:18:40**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/jQuery/jQueryFrequentlyUsed.md)**

&emsp;记录工作中，使用 jQuery、HTML、CSS 等技术的技巧，包括但不限于：`rem` 适配、`css reset`、活动边框、弹窗等。  

&emsp;比较琐碎，各取所需。

<br>

# 一 JavaScript

<br>

## 1.1 jQuery 引入

&emsp;CDN：`<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>`

<br>

## 1.2 双引号与单引号的使用规范

&emsp;在平时的时候，能使用双引号就用双引号。  
&emsp;在拼接字符串的时候，使用单引号裹住。

<br>

## 1.3 移动端rem适配

&emsp;直接在 `index.html` 中引用该 `js` 文件即可。

> mobile-terminal-adaptation.js

```
/*
 * 2018年7月25日10:38:23
 * 移动端rem适配，px:rem = 100:1
 * 该适配兼容UC竖屏转横屏出现的BUG
 * 自定义设计稿的宽度：designWidth
 * 最大宽度:maxWidth
 * 这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
 */
! function (e, t) {
  function n() {
    var n = l.getBoundingClientRect().width;
    t = t || 540, n > t && (n = t);
    var i = 100 * n / e;
    r.innerHTML = "html{font-size:" + i + "px;}"
  }
  var i, d = document,
    o = window,
    l = d.documentElement,
    r = document.createElement("style");
  if (l.firstElementChild) l.firstElementChild.appendChild(r);
  else {
    var a = d.createElement("div");
    a.appendChild(r), d.write(a.innerHTML), a = null
  }
  n(), o.addEventListener("resize", function () {
    clearTimeout(i), i = setTimeout(n, 300)
  }, !1), o.addEventListener("pageshow", function (e) {
    e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
  }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener(
    "DOMContentLoaded",
    function (e) {
      d.body.style.fontSize = "16px"
    }, !1)
}(1000, 1000);
```

<br>

## 1.4 jQuery ajax

&emsp;方法1：

```
$.ajax({
  url: host + '/addressInfo',
  type: 'get',
  dataType: 'json',
  data: {
  addressName: $serA
}
}).done(function (res) {
  console.log(res);
}).fail(function () {
  console.log("error");
}).always(function () {
  console.log("complete");
});
```

<br>

&emsp;方法2：

```
$.ajax({
    url: host + '/olduser/up',
    type: 'get',
    dataType: 'json',
    data: {
    userName: $("#search-name").val(),
    adsl: $("#search-id").val()
  },
  success:function(res){
    if(res.code == 0) {
      $("#search-name").val() + "&adsl=" + escape($("#search-id").val());
    } else {
      alert(res.msg);
    }
  }
})
```

<br>

## 1.5 URL加码及解码

&emsp;加码：

```
window.location = "adslList.htm?name=" + escape(name) + "&idNo=" + escape(idNo);
```

<br>

&emsp;解码：

```
function getUrlParam(name) {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return unescape(r[2]); return null;
}

console.log("url name=" + getUrlParam("name") + ",url idNo=" + getUrlParam("idNo"));
```

<br>

## 1.6 常用正则表达式

1. 使用方式：
```
if(!/^((\d{8})|(1[35784]\d{9}))$/.test($("#user-phone").val())){
  alert('请填写11位手机号码或8位固话号码');
  return false;
}
```

<br>

2. 密码强度

* 必须包含数字+小写字母+大写字母的密码，位数在8-10位之间：

```
^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
```

* 只能是字母、数字和下划线：

```
^\w+$
```

3. 校验中文：

```
^[\u4e00-\u9fa5]{0,}$
```

4. Email验证：

```
[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?
```

5. 身份证验证

```
^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$
```

6. 手机号验证：以1开头，第二位数是3/4/5/7/8的11位手机号码

```
^1[3,4,5,7,8]\d{9}$
```

<br>

# 二 HTML

<br>

## 2.1 搜索跳转到百度

```
<form class="baidu-search" action="http://www.baidu.com/baidu" target="_blank">
  <input type="text" name="word" placeholder="我不要，给我滚开~" id="baidu-input"><br>
  <button type="submit">皮皮虾我们溜</button>
</form>
```

<br>

# 三 CSS

<br>

## 3.1 设置input的placeholder

> reset.css

```
/** 设置input的placeholder - set input placeholder **/
input::-webkit-input-placeholder { color: #727272; } /* Webkit browsers */
input::-moz-placeholder { color: #727272; } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #727272; } /* Internet Explorer */
```

<br>

## 3.2 使图片根据不同设备自适应

> reset.css

```
/** 图片自适应 - image responsize **/
img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; }
```

<br>

## 3.3 垂直居中

&emsp;首先，父元素设置relative；  
&emsp;然后，需要定位的元素设置absolute；  
&emsp;最后，垂直居中的top为50%，margin-top为该元素高度的负一半的高度值。  

```
.search-result-area {
  position: relative;
  padding: 0 36px;
}
.previous-page, .next-page {
  position: absolute;
  top:50%;
  margin-top: -36px;
}
.previous-page {
  left: 0;
}
.next-page {
  right: 0;
}
```

<br>

## 3.4 左右两栏布局

1. div1不变，div2浮动，div2的margin-left为div1的宽度。
2. div1+div2浮动，父级overflow=hidden。
3. 父级relative定位，子级absolute定位。

<br>

## 3.5 css reset

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

/*
  * 图片自适应 - image responsize 
  * 1. 清空浏览器对图片的设置
  * 2. <div>图片</div> 的情况下，图片会撑高 div，这么设置可以清除该影响
*/
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
input::-webkit-input-placeholder { color: #919191; font-size: .32rem } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: .32rem } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: .32rem } /* Internet Explorer */
```

<br>

## 3.6 li前面点换成图片

```
ul{
 list-style-image: url(img/5.jpg);
}
```

<br>

## 3.7 制作div的边框

```
.content:before {
  content: " ";
  display: block;
  width: 100%;
  height: 3.46rem;
  background: url("../images/mobile-frame-top.jpg") no-repeat center;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
}
.content {
  position: relative;
  background: url("../images/mobile-frame-content.jpg") repeat-y center;
  background-size: 100% auto;
  width: 10rem;
  padding: 3.46rem 1.37rem 2.26rem;
  font-size: .3rem;
}
.content:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2.26rem;
  background: url("../images/mobile-frame-bottom.png") no-repeat center;
  background-size: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9;
}
```

<br>

## 3.8 手机端背景图不能正确放大

```
.banner {
  background: url("../images/banner.jpg") no-repeat;
  background-size: 100% auto;
}
```

<br>

## 3.9 position情况下居中

&emsp;left值计算：width - button宽度一半

<br>

## 3.10 jsliang的弹窗

&emsp;如果希望弹窗不固定大小，在手机端或者 PC 端都能使用，推荐使用百分比配置。

> *.html

```
<div class="jsliang-prompt">
  <div class="jsliang-mask"></div>
  <div class="jsliang-alert">
    <img src="./images/error.png" alt="error">
    <p class="jsliang-tips">该板块暂未开放~</p>
    <p>
      <a href="javascript:void(0)" class="jsliang-get-it" id="jsliang-get-it">好的，我知道了</a>
    </p>
  </div>
</div>
```

<br>

> *.css

```
/** 弹窗 - alert **/
.jsliang-prompt {
  display: none;
}
.jsliang-mask {
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  filter: alpha(opacity=30);
  -ms-filter: "alpha(opacity=30)";
  opacity: .3;
}
.jsliang-alert {
  z-index: 999;
  position: fixed;
  top: 30%;
  left: 40%;
  width: 320px;
  height: 220px;
  box-shadow: 2px 2px 4px #A0A0A0, -2px -2px 4px #A0A0A0;
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
}
.jsliang-alert img {
  width: 120px;
  height: 83.8px;
}
.jsliang-alert p {
  margin-top: 10px;
}
.jsliang-get-it {
  color: #fff;
  background: #5bc0de;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143em;
  white-space: nowrap;
  cursor: pointer;
  border-color: #46b8da;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
}
.jsliang-get-it:hover {
  background: #31b0d5;
}
/* end */
```

<br>

## 3.11 常用SVG

&emsp;直接引用到页面即可。

```
<div class="loading-spokes">
  <svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="black">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s" />
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s" />
  </path>
  </svg>
</div>
```

<br>

## 3.12 滚动条

```
http://www.xuanfengge.com/demo/201311/scroll/css3-scroll.html
```

<br>

## 3.13 修改select样式

> *.html

```
<div class="activity-area-select">
  <select class="activity-area" id="activity-friday-area">
    <option value ="请选择商铺区域">请选择商铺区域</option>
    <option value ="香洲">香洲</option>
    <option value ="拱北">拱北</option>
    <option value ="前山">前山</option>
    <option value ="横琴">横琴</option>
    <option value ="斗门">斗门</option>
    <option value ="金湾">金湾</option>
  </select>
</div>
```

<br>

> *.css

```
.activity-area-select {
  width: 4.3rem;
  height: .6rem;
  line-height: .6rem;
  margin-left: .5rem;
  border: 1px solid #e0e0e0;
  border-radius: .28rem;
  font-size: .24rem;
  float: left;
}
/* 修改浏览器默认select */
.activity-area-select select {
  /* 清除边框 - Chrome和Firefox里面的边框不一样，需要复写 */
  border: none;
  /* 清除聚焦颜色 */
  outline: none;
  /* 清除默认样式 */
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("../images/icon-select.png") no-repeat center right scroll transparent;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-left: .3rem;
  padding-right: 2rem;
}
/* 清除边框 - 清除ie的默认选择框样式清除，隐藏下拉箭头*/
.activity-area-select select::-ms-expand {
  display: none;
  outline: none;
}
```

<br>

## 3.14 修改table样式

> *.html

```
<table class="search-result-table" id="search-result-table">
  <thead>
    <tr>
      <th>商铺名称</th>
      <th>商铺地址</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>珠海粤西贸易有限公司</td>
      <td>珠海市香洲区群华路44号（五洲康城）</td>
    </tr>
    <tr>
      <td>珠海市香洲阑山唯佳生鲜馆</td>
      <td>香洲区南福路199号商铺</td>
    </tr>
  </tbody>
</table>
```

<br>

> *.css

```
.search-result-table {
  border:solid #e1e1e1;
  border-width:1px 0px 0px 1px;
}
table thead, tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.search-result-table tr:nth-child(2n+2) {
  background: #fff7ef;
}
.search-result-table th {
  background: #ffa751;
  color: #fff;
  font-size: .24rem;
  height: .63rem;
  line-height: .63rem;
  border:solid #e1e1e1; 
  border-width: 0px 1px 1px 0px;
}
.search-result-table tbody {
  display: block;
  height: 6.05rem;
  overflow-x: hidden;
  overflow-y: scroll;
}
.search-result-table td {
  font-size: .22rem;
  height: .9rem;
  padding-left: .22rem;
  border:solid #e1e1e1; 
  border-width: 0px 1px 1px 0px;
}
```

<br>

# 四 Other

<br>

## 4.1 VSCode 选中设置

&emsp;文件 -> 设置 -> User Settings -> editor.wordSeparators  
&emsp;下划线选中：

```
`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?
```

&emsp;横杠选中：
```
./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?  
```

<br>

## 4.2 浏览器前缀参照

&emsp;-moz- 对应 Firefox,   
&emsp;-webkit- 对应 Safari and Chrome  
&emsp;-o- 对应 Opera  
&emsp;-ms- 对应 Internet Explorer

<br>

## 4.3 git的使用

&emsp;本地仓库上传到GitHub：
1. git init
2. git add .
3. git commit -m "first commit"
4. git remote add origin https://github.com/address
5. git push -u origin master

&emsp;更新本地仓库到GitHub
1. git add .
2. git commit -m "更新"
3. git push -u origin master

&emsp;拉取GitHub项目到本地
1. git clone address

<br>

## 4.4 VS Code 设置模板页

1. 安装插件 HTML Snippets
2. 文件-首选项-用户代码片段-HTML
3. 修改文件内容为：

```
{
  // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  // Example:
  // "Print to console": {
  //  "prefix": "log",
  //  "body": [
  //      "console.log('$1');",
  //      "$2"
  //  ],
  //  "description": "Log output to console"
  // }
  "!!": {
  "prefix": "!!",
  "body": [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "\t<meta charset=\"UTF-8\">",
    "\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">",
    "\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
    "\t<title>HelloWorld</title>",
    "</head>",
    "<body>",
    "\t$1",
    "\t",
    "\t<script src=\"https://cdn.bootcss.com/jquery/3.3.1/jquery.js\"></script>",
    "</body>",
    "</html>"
  ],
  "description": "!! - Defines a template for a html5 document"
  }
}
```

4. 在HTML页面输入!!然后回车，即可看到新效果

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
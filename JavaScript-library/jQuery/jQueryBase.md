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
| &emsp;[26.1 基本选择器](#chapter-twenty-six-one) |
| &emsp;[26.2 层次选择器](#chapter-twenty-six-two) |
| &emsp;[26.3 过滤选择器（重点）](#chapter-twenty-six-three) |
| &emsp;&emsp;[26.3.1 内容过滤选择器](#chapter-twenty-six-three-one) |
| &emsp;&emsp;[26.3.2 可见性过滤选择器](#chapter-twenty-six-three-two) |
| &emsp;[26.4 属性过滤选择器](#chapter-twenty-six-four) |
| &emsp;[26.5 状态过滤选择器](#chapter-twenty-six-five) |
| &emsp;[26.6 表单选择器](#chapter-twenty-six-six) |
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

&emsp;本文最初用 `word` 记录于 `2018-05-07`。  
&emsp;那时候还是前端职场新人，想在想起还是非常感谢带我的前端小姐姐的指导。  
&emsp;这篇文章是在 **[jQuery 教程 | 菜鸟教程](https://www.runoob.com/jquery/jquery-tutorial.html)** 学习的过程中的记录笔记。  
&emsp;如需系统学习 jQuery，建议参考网上现成的系统的 jQuery 网站教程/视频教程。  
&emsp;本文仅供 jQueryer 复习自己所学知识。

<br>

# <a name="chapter-three" id="chapter-three">三 尝试</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;jQuery是一个轻量级的 "写的少，做的多" 的 JavaScript 库。  

&emsp;jQuery 的引用：

* 百度 CDN：

```
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
```
* jQuery 官网 CDN：
  
```
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
```
* BootCDN：

```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
```

<br>

&emsp;尝试：

> index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>尝试引用jQuery - 2018年5月7日16:20:50</title>
  
  </head>
  <body>
    <p>点我？消失给你看哦~</p>
    <p>继续点试试？</p>
    <p>再点试试？</p>

    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(document).ready(function(){
        $("p").click(function(){
          $(this).hide();
        });
      });
    </script>
  </body>
</html>
```


<br>

# <a name="chapter-four" id="chapter-four">四 兼容</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;jQuery 版本 2 以上不支持 IE6，7，8 浏览器。  
&emsp;如果需要支持 IE6/7/8，那么请选择 1.9。  
&emsp;你还可以通过条件注释在使用 IE6/7/8 时只包含进1.9。  

```
<!--[if lt IE 9]>
  <script src="jquery-1.9.0.js"></script>
<![endif]--><!--[if gte IE 9]><!-->
  <script src="jquery-2.0.0.js"></script><!--<![endif]-->
```

<br>

# <a name="chapter-five" id="chapter-five">五 jQuery 语法</a>

> [返回目录](#catalog-chapter-five)

<br>

&emsp;基础语法： `$(selector).action()`。在jQuery中，$=jQuery

&emsp;ready：

* 写法1：`$(document).ready(function(){ // 开始写 jQuery 代码... });`
* 写法2：`$(function(){ // 开始写 jQuery 代码... });`

<br>

# <a name="chapter-six" id="chapter-six">六 jQuery 选择器</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;jQuery 选择器可以帮助我们更好地选择 DOM 元素。

<br>

## <a name="chapter-six-one" id="chapter-six-one">6.1 元素选择器</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;在页面中选取所有 `<p>` 元素:  

> js 代码片段

```
$("p")
实例：
$(document).ready(function(){ 
  $("button").click(function(){ 
    $("p").hide(); 
  }); 
});
```

<br>

## <a name="chapter-six-two" id="chapter-six-two">6.2 #ID 选择器</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;通过 id 选取元素语法如下：`$("#test")`  

> js 代码片段

```
$(document).ready(function(){ 
  $("button").click(function(){ 
    $("#test").hide(); 
  }); 
});
```

<br>

## <a name="chapter-six-three" id="chapter-six-three">6.3 .class 选择器</a>

> [返回目录](#catalog-chapter-six)

<br>

&emsp;jQuery 类选择器可以通过指定的 class 查找元素：`$(".test")`  

> js 代码片段

```
$(document).ready(function(){ 
  $("button").click(function(){ 
    $(".test").hide(); 
  }); 
});
```

<br>

## <a name="chapter-six-four" id="chapter-six-four">6.4 其他用法</a>

> [返回目录](#catalog-chapter-six)

<br>

| 语法 | 描述 |
| --- | --- |
| `$("*")` | 选取所有元素 |
| `$(this)` |	选取当前 `HTML` 元素 |
| `$("p.intro")` | 选取 `class` 为 `intro` 的 `<p>` 元素 |
| `$("p:first")` | 选取第一个 `<p>` 元素 |
| `$("ul li:first")` | 选取第一个 `<ul>` 元素的第一个 `<li>` 元素 |
| `$("ul li:first-child")` | 选取每个 `<ul>` 元素的第一个 `<li>` 元素 |
| `$("[href]")` | 选取带有 `href` 属性的元素 |
| `$("a[target='_blank']")` | 选取所有 `target` 属性值等于 `"_blank"` 的 `<a>` 元素 |
| `$("a[target!='_blank']")` | 选取所有 `target` 属性值不等于 `"_blank"` 的 `<a>` 元素 |
| `$(":button")` | 选取所有 `type="button"` 的 `<input>` 元素 和 `<button>` 元素 |
| `$("tr:even")` | 选取偶数位置的 `<tr>` 元素 |
| `$("tr:odd")` | 选取奇数位置的 `<tr>` 元素 |

<br>

# <a name="chapter-seven" id="chapter-seven">七 DOM 事件</a>

> [返回目录](#catalog-chapter-seven)

<br>

| 鼠标事件 | 键盘事件 | 表单事件 |文档/窗口事件 |
| --- | --- | --- | --- |
| `click` - 点击 | `keypress` - 键被按下 | `submit` - 表单提交 | `load` - 全部加载（1.8已废弃） |
| `dbclick` - 双击 | `keydown` - 键按下的过程 | `change` - 文本改变 | resize - 浏览器窗口大小调试 |
| `mouseenter` - 鼠标进入 | `keyup` - 键被松开 | `focus` - 获得焦点 | scroll - 滚动 |
| `mouseleave` - 鼠标离开| &emsp; | `blur` - 失去焦点 | `unload` - 离开页面（1.8已废弃） |

<br>

## <a name="chapter-seven-one" id="chapter-seven-one">7.1 mouseover 与 mouseenter</a>

> [返回目录](#catalog-chapter-seven)

<br>

&emsp;`mouseover` 事件在鼠标移动到选取的元素及其子元素上时触发。  
&emsp;`mouseenter` 事件只在鼠标移动到选取的元素上时触发。  
&emsp;`mouseleave` 与 `mouseout`同样。

<br>

## <a name="chapter-seven-two" id="chapter-seven-two">7.2 键盘事件顺序</a>

> [返回目录](#catalog-chapter-seven)

<br>

1. keydown - 键按下的过程

&emsp;↓↓↓↓↓

2. keypress - 键被按下

&emsp;↓↓↓↓↓

3. keyup - 键被松开

<br>

# <a name="chapter-eight" id="chapter-eight">八 jQuery 效果</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;jQuery 可以使用其事件，做一些好玩的事情

<br>

## <a name="chapter-eight-one" id="chapter-eight-one">8.1 显示/隐藏</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;语法：

* 隐藏：`$(selector).hide(speed,callback);`
* 显示：`$(selector).show(speed,callback);`
* 切换：`$(selector).toggle(speed,callback);`
* `speed`：速度（毫秒）
* `callback`：完成后显示的函数

> index.html

```
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>显示与隐藏</title>
  </head>

  <body>
    <p>如果你点击“隐藏” 按钮，我将会消失。</p>
    <button id="hide">隐藏</button>
    <button id="show">显示</button>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(function () {
        $("#hide").click(function () {
          $("p").hide(5000);
        });
        $("#show").click(function () {
          $("p").show(1000);
        });
      });
    </script>
  </body>

</html>
```

<br>

## <a name="chapter-eight-two" id="chapter-eight-two">8.2 淡入/淡出</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;语法：

* 淡入：`$(selector).fadeIn(speed,callback);`
* 淡出：`$(selector).fadeOut(speed,callback);`
* 切换：`$(selector).fadeToggle(speed,callback);`
* 渐变：`$(selector).fadeTo(speed,opacity,callback);`
* `speed`：速度
* `opacity`：透明度
* `callback`：回调函数

> index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>淡入与淡出</title>
    <style>
      .container {
        width: 320px;
        margin: 0 auto;
      }
      #red {
        width: 100px;
        height: 100px;
        background: red;
      }
      #green {
        width: 100px;
        height: 100px;
        background: green;
      }
      #blue {
        width: 100px;
        height: 100px;
        background: blue;
      }
      #fadeIn {
        display: none;
      }
    </style>
    
  </head>

  <body>
    <div class="container">
      <button id="fadeToggle">
      <span id="fadeIn">淡入</span>
      <span id="fadeOut">淡出</span>
      </button>
      <button id="fadeTo">渐变</button>
      <div id="red"></div>
      <div id="green"></div>
      <div id="blue"></div>
    </div>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(function(){
        $("#fadeToggle").click(function(){
          $("#blue").fadeToggle(1000,function(){
            $("#green").fadeToggle(500,function(){
              $("#red").fadeToggle(200)
            });
          });
          $("#fadeIn").toggle();
          $("#fadeOut").toggle();
        });
        $("#fadeTo").click(function(){
          $("#red").fadeTo(500,0.3);
          $("#green").fadeTo(1000,0.5);
          $("#blue").fadeTo("slow",0.1);
        })
      });
    </script>
  </body>

</html>
```

<br>

## <a name="chapter-eight-three" id="chapter-eight-three">8.3 滑动</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;语法：

* `$(selector).slideDown(speed,callback);`
* `$(selector).slideUp(speed,callback);`
* `$(selector).slideToggle(speed,callback);`
* `speed`：时间
* `callback`：回调函数

> index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>显示与隐藏</title>
    <style>
      #toggleHide {
        display: none;
      }
    </style>
    
  </head>

  <body>
    <button id="toggle">
    <span id="toggleHide">显示</span>
    <span id="toggleShow">隐藏</span>
    </button>
    <p>如果你点击“隐藏” 按钮，我将会消失。</p>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(function () {
        $("#toggle").click(function () {
          $("#toggleHide").toggle()
          $("#toggleShow").toggle();
          $("p").toggle(1000);
        });
      });
    </script>
  </body>

</html>
```

<br>

## <a name="chapter-eight-four" id="chapter-eight-four">8.4 动画</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;语法：

* `$(selector).animate({params},speed,callback);`
* `params`：css 属性（键值对形式，-号替换为驼峰 → `border-radius=borderRadius:'15px'`）
* `speed`：时间
* `callback`：回调函数

&emsp;操作：
1. 能操作单个属性
2. 能操作多个属性
3. 值能使用相对值（+=、-=）
4. 属性值能为"show"、"hide" 或 "toggle"等
5. 编写多个animate能使用队列功能

> index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>动画</title>
    <style>
      .container {
        width: 320px;
        margin: 0 auto;
        text-align: center;
      }
      #circle {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: rgb(243, 207, 5);
        display: inline-block;
        position: relative;
      }
      #stop {
        display: none;
      }
    </style>
    
  </head>

  <body>
    <div class="container">
      <button id="run">
        <span id="start">start!</span> 
        <span id="stop">stop!</span>
      </button>
      <hr/>
      <div id="circle"></div>
    </div>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <!-- jQuery颜色插件 -->
    <script src="http://code.jquery.com/color/jquery.color-2.1.2.js" integrity="sha256-1Cn7TdfHiMcEbTuku97ZRSGt2b3SvZftEIn68UMgHC8="
    crossorigin="anonymous"></script>
    <script>
      $(function () {
        var start;
        $("#stop").click(function(){
          clearInterval(start);
          $("#start").show();
          $("#stop").hide();
        });
        $("#start").click(function(){
          start = setInterval("runBall()", 1000);
          $("#start").hide();
          $("#stop").show();
          });
        });

        function runBall() {
          $("#circle").animate({
          left: '-=110px',
          top: '+=150px',
          backgroundColor: 'red'
        });
        $("#circle").animate({
          left: '110px',
          backgroundColor: 'rgb(5, 243, 172)'
        });
        $("#circle").animate({
          left: '0',
          top: '0',
          backgroundColor: 'rgb(243, 207, 5)'
        });
      };
    </script>
  </body>

</html>
```

<br>

## <a name="chapter-eight-five" id="chapter-eight-five">8.5 停止动画</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;语法：

* `$(selector).stop(stopAll,goToEnd);`
* `stopAll`：默认 `false`。`true`：停止包括后续 `animate` 的所有动作
* `goToEnd`：默认 `false`。`true`：直接跳到该动作末尾，同时停止后面动作

> index.html

```
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>停止动画</title>
    <style>
      .container {
        width: 320px;
        margin: 0 auto;
      }
      #text {
        background: #b9f309;
        position: relative;
      }
      #text p {
        text-indent: 2em;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <button id="start">开始</button>
      <button id="stopDefault">停止</button>
      <button id="stopAll">停止所有</button>
      <button id="stopToEnd">停止动画，但完成动作</button>
      <hr>
      <div id="text">
        <p>点击 "开始" 按钮开始动画。</p>
        <p>点击 "停止" 按钮停止当前激活的动画，但之后我们能再动画队列中再次激活。</p>
        <p>点击 "停止所有" 按钮停止当前动画，并清除动画队列，所以元素的所有动画都会停止。</p>
        <p>点击 "停止动画，但完成动作" 快速完成动作，并停止它。</p>
      </div>
    </div>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script>
      $(function () {
        $("#start").click(function () {
          $("#text").animate({
            top: '200px'
          }, 1000);
          $("#text").animate({
            top: '0'
          }, 1000);
        });
        $("#stopDefault").click(function(){
          $("#text").stop();
        })
        $("#stopAll").click(function(){
          $("#text").stop(true);
        })
        $("#stopToEnd").click(function(){
          $("#text").stop(true,true);
        })
      });
    </script>

  </body>

</html>
```

<br>

## <a name="chapter-eight-six" id="chapter-eight-six">8.6 链</a>

> [返回目录](#catalog-chapter-eight)

<br>

&emsp;

<br>

# <a name="chapter-night" id="chapter-night">九 捕获</a>

> [返回目录](#catalog-chapter-night)

<br>

&emsp;

<br>

# <a name="chapter-ten" id="chapter-ten">十 设置</a>

> [返回目录](#catalog-chapter-ten)

<br>

&emsp;

<br>

# <a name="chapter-eleven" id="chapter-eleven">十一 添加元素</a>

> [返回目录](#catalog-chapter-eleven)

<br>

&emsp;

<br>

# <a name="chapter-twelve" id="chapter-twelve">十二 删除元素</a>

> [返回目录](#catalog-chapter-twelve)

<br>

&emsp;

<br>

# <a name="chapter-thirteen" id="chapter-thirteen">十三 CSS 类</a>

> [返回目录](#catalog-chapter-thirteen)

<br>

&emsp;

<br>

# <a name="chapter-fourteen" id="chapter-fourteen">十四 CSS() 方法</a>

> [返回目录](#catalog-chapter-fourteen)

<br>

&emsp;

<br>

# <a name="chapter-fifteen" id="chapter-fifteen">十五 尺寸</a>

> [返回目录](#catalog-chapter-fifteen)

<br>

&emsp;

<br>

# <a name="chapter-sixteen" id="chapter-sixteen">十六 祖先选择器</a>

> [返回目录](#catalog-chapter-sixteen)

<br>

&emsp;

<br>

# <a name="chapter-seventeen" id="chapter-seventeen">十七 后代选择器</a>

> [返回目录](#catalog-chapter-seventeen)

<br>

&emsp;

<br>

# <a name="chapter-eighteen" id="chapter-eighteen">十八 同胞选择器</a>

> [返回目录](#catalog-chapter-eighteen)

<br>

&emsp;

<br>

# <a name="chapter-nighteen" id="chapter-nighteen">十九 过滤选择器</a>

> [返回目录](#catalog-chapter-nighteen)

<br>

&emsp;

<br>

# <a name="chapter-twenty" id="chapter-twenty">二十 load</a>

> [返回目录](#catalog-chapter-twenty)

<br>

&emsp;

<br>

# <a name="chapter-twenty-one" id="chapter-twenty-one">二十一 get() 和 post()</a>

> [返回目录](#catalog-chapter-twenty-one)

<br>

&emsp;

<br>

# <a name="chapter-twenty-two" id="chapter-twenty-two">二十二 Ajax</a>

> [返回目录](#catalog-chapter-twenty-two)

<br>

&emsp;

<br>

# <a name="chapter-twenty-three" id="chapter-twenty-three">二十三 JSONP</a>

> [返回目录](#catalog-chapter-twenty-three)

<br>

&emsp;

<br>

# <a name="chapter-twenty-four" id="chapter-twenty-four">二十四 noConflict</a>

> [返回目录](#catalog-chapter-twenty-four)

<br>

&emsp;

<br>

# <a name="chapter-twenty-five" id="chapter-twenty-five">二十五 jQuery 实例</a>

> [返回目录](#catalog-chapter-twenty-five)

<br>

&emsp;

<br>

# <a name="chapter-twenty-six" id="chapter-twenty-six">二十六 选择器扩展</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-one" id="chapter-twenty-six-one">26.1 基本选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-two" id="chapter-twenty-six-two">26.2 层次选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-three" id="chapter-twenty-six-three">26.3 过滤选择器（重点）</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

### <a name="chapter-twenty-six-three-one" id="chapter-twenty-six-three-one">26.3.1 内容过滤选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

### <a name="chapter-twenty-six-three-two" id="chapter-twenty-six-three-two">26.3.2 可见性过滤选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-four" id="chapter-twenty-six-four">26.4 属性过滤选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-five" id="chapter-twenty-six-five">26.5 状态过滤选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

## <a name="chapter-twenty-six-six" id="chapter-twenty-six-six">26.6 表单选择器</a>

> [返回目录](#catalog-chapter-twenty-six)

<br>

&emsp;

<br>

# <a name="chapter-twenty-seven" id="chapter-twenty-seven">二十七 插件扩展</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-one" id="chapter-twenty-seven-one">27.1 jQuery Validate</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-two" id="chapter-twenty-seven-two">27.2 jQuery Accordion</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-three" id="chapter-twenty-seven-three">27.3 jQuery Autocomplete</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-four" id="chapter-twenty-seven-four">27.4 jQuery Growl</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-five" id="chapter-twenty-seven-five">27.5 jQuery Password Validation</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-six" id="chapter-twenty-seven-six">27.6 jQuery Prettydate</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

## <a name="chapter-twenty-seven-seven" id="chapter-twenty-seven-seven">27.7 jQuery Treeview</a>

> [返回目录](#catalog-chapter-twenty-seven)

<br>

&emsp;

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
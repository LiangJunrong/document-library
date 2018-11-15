正则表达式
===

> Create by **jsliang** on **2018-11-14 10:41:20**  
> Recently revised in **2018-11-15 21:04:24**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/tree/master/other-library/RegularExpression)**

<br>

&emsp;正则在我眼里，就是作弊码  
&emsp;你可以老老实实打怪，但是你用了会觉得很爽快

&emsp;正则表达式：正则，也叫做规则，让计算机能够读懂人类的规则。正则表达式是繁琐的，越学你会觉得越发发狂。但是，它又是强大的，学会之后的应用可以大大提高你的开发效率。善于利用工具，方能成就自我。

&emsp;参考文献/视频/手册：

* [正则表达式-教程 | 菜鸟教程](http://www.runoob.com/regexp/regexp-tutorial.html)
* [正则表达式在线测试 | 菜鸟教程](https://c.runoob.com/front-end/854)

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

<br>

&emsp;**不折腾的前端，和咸鱼有什么区别~**

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 整合](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 前言](#chapter-three) |
| &emsp;[3.1 初识正则表达式](#chapter-three-one) |
| &emsp;[3.2 简要攻略](#chapter-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 test 方法](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 search 方法](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 match 方法](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 replace 方法](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 敏感词过滤](#chapter-eight) |
| <a name="catalog-chapter-nine" id="catalog-chapter-nine"></a>[九 匹配子项](#chapter-nine) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 字符类](#chapter-ten) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 过滤标签](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 获取class的方法](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 转义字符](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 量词](#chapter-fourteen) |

<br>

# <a name="chapter-two" id="chapter-two">二 整合</a>

> [目录](#catalog-chapter-two)

<br>

&emsp;本章节整理总结了所有的参考文献，方便日后快速回顾回忆。  
&emsp;如果你还没正式开始正则表达式，请快速浏览跳过本章节。

| 字符  | 描述                                                                         |
| ----- | ---------------------------------------------------------------------------- |
| ^     | 匹配输入字符串的开始位置                                                     |
| $     | 匹配输入字符串的结尾位置                                                     |
| ()    | 标记一个子表达式的开始和结束位置                                             |
| []    | 标记一个中括号表达式的开始，里面的元素整体代表一个字符                       |
| {n,m} | 匹配从n开始到m结束的位置                                                     |
| *     | 匹配前面子表达式的零次或多次（即 {0,} ）                                     |
| ?     | 匹配前面的子表达式零次或一次（即 {0,1} ）                                    |
| +     | 匹配前面的子表达式一次或多次（即 {1,} ）                                     |
| .     | 匹配除换行符\n之外的任何单字符                                               |
| \     | 转义字符。将下一个字符标记为特殊字符、或原义字符、或向后引用、或八进制转义符 |
|       |                                                                              | 指明两项之间选择一项，相当于“或” |
| \s    | 空格（\S：非空格）                                                           |
| \d    | 数字（\D：非数字）                                                           |
| \w    | 字符（字母，数字，下划线。\W：非字符）                                       |
| ?<=   | 匹配以其后面规则为开头的字符串                                               |
| ?=    | 匹配以()结尾的字符串，并存储到分组中                                         |

<br>

&emsp;常用匹配：

1. 密码强度
* 必须包含数字+小写字母+大写字母的密码，位数在8-10位之间：` ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$ `
* 只能是字母、数字和下划线：` ^\w+$ `
2. 校验中文：` ^[\u4e00-\u9fa5]{0,}$ `
3. Email验证：
```
[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])? 
```
4. 身份证验证：` ^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$ `
5. 手机号验证，以1开头，第二位数是3/4/5/7/8的11位手机号码：` ^1[3,4,5,7,8,9]\d{9}$ `

<br>

# <a name="chapter-three" id="chapter-three">三 前言</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;什么是正则表达式？正则表达式：正则，也叫做规则，让计算机能够读懂人类的规则。  
&emsp;正则表达式都是用来操作字符串的。  

<br>

# <a name="chapter-three-one" id="chapter-three-one">3.1 初识正则表达式</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;我们通过一个表达式来初识正则表达式：  
&emsp;某天，盗贼小白给了盗贼小黑一个盒子，盒子有 3 层嵌套，并约定了交易密码提取方式：小白将给小黑提供一串字符串，小黑只需要将字符串中的所有相连的数字找出来，然后把它们拼接成一个新数组，数组的第一项就是第一个盒子的密码，以此类推……

> "abc123def456hash789" -> [123, 456, 789] - > [外层盒子1密码, 中间层盒子2密码, 最内层盒子3密码]

&emsp;现在假设盗贼小黑使用 JavaScript 进行常规查找：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>正则表达式</title>
</head>

<body>
  <p>正则表达式 | <b>jsliang</b> 学习记录</p>

  <script>
    window.onload = function () {
      var str = "abc123def456hash789"

      function findNum(str) {
        var arr = [];
        var tmp = '';
        for (var i = 0; i < str.length; i++) {
          if (str.charAt(i) >= "0" && str.charAt(i) <= "9") {
            tmp += str.charAt(i);
          } else {
            if (tmp) {
              arr.push(tmp);
              tmp = "";
            }
          }
        }
        if (tmp) {
          arr.push(tmp);
          tmp = "";
        }
        return arr;
      }
      console.log(findNum(str));
    }
  </script>
</body>

</html>
```

<br>

&emsp;写到这里，小黑觉得不妥，上面代码写得太麻烦太复杂了，于是决定使用正则表达式查找：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>正则表达式</title>
</head>

<body>
  <p>正则表达式 | <b>jsliang</b> 学习记录</p>

  <script>
    window.onload = function() {
      var str = "abc123def456hash789";
      function findNum(str) {
        return str.match(/\d+/g);
      }
      console.log(findNum(str));
    }
  </script>
</body>

</html>
```

<br>

&emsp;小黑瞬间觉得自己很牛逼有木有？！只需要一行代码，就能解决字符串查找的时候用的一大串代码！

<br>

# <a name="chapter-three-two" id="chapter-three-two">3.2 简要攻略</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;上文，盗贼小黑通过使用 `str.match(/\d+/g)`，解决了获取箱子密码的问题。  
&emsp;那么，这串正则表达式是什么意思呢？我们先抛开这个，解析一串简单的：  

> `^[a-z0-9_-]{6,12}$`

&emsp;首先，`^` 表示匹配字符串的开始位置，结合后面的 `[a-z0-9_-]` 表示该字符串开头可以为 `a-z` 的字母，`0-9` 的数字，`_` 下划线，`-` 连接符。  
&emsp;然后，`[a-z]` 表示匹配 `a-z` 中任意单个字母；`[0-9]` 表示匹配 `0-9` 中任意单个数字；`[_]` 表示匹配下划线；`[-]` 表示匹配连接符 `-`。所以，`[a-z0-9_-]` 表示字符串可以包含`数字`、`字母`、`_`、`-` 这四种形式的字符串。  
&emsp;接着，`{6, 12}` 表示该字符串的长度为 `6-12` 位。  
&emsp;最后，`$` 表示结束标志，可参考 `^` 的规则。

> `^` 与 `$` 同时使用时，表示精确匹配。

&emsp;终上所述，小伙伴们应该猜测到了这个正则表达式的用途：**校验用户名**。该用户名只能包含字符、数字、下划线和连接字符(-)，并且用户名的长度最长为 12 位，最短为 6 位。

&emsp;那么，它在 JavaScript 中要如何使用呢？我们通常用 `/正则表达式/` 两个斜杠来包裹我们要写的正则表达式：

```
var reg = /^[a-z0-9_-]{6,12}$/
```

&emsp;看，这样就是一条规则了，如果你需要让他匹配一个字符串 `str`。那么，只需要在代码中：

```
var str = 'abc-cba_abc';
var reg = /^[a-z0-9_-]{6,12}$/;
console.log(reg.test(str));
```

&emsp;这样，我们就告诉了 JavaScript：`reg` 通过 `test()` 方法去测试 `str` 是否符合 `reg`的规则，如果符合则返回 `true`，如果不符合则返回 `true`。这里返回的是 `true`，因为我们的 `str` 是符合 `reg` 规则的

> `test()` 方法会在后面逐步讲解

&emsp;下面贴出完整代码：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>正则表达式</title>
</head>

<body>
  <p>正则表达式 | <b>jsliang</b> 学习记录</p>

  <script>
    window.onload = function() {
      var str = 'abc-cba_abc';
      var reg = /^[a-z0-9_-]{6,12}$/;
      console.log(reg.test(str)); // true
    }
  </script>
</body>

</html>
```

<br>

# <a name="chapter-three-three" id="chapter-three-three">3.3 基本模式匹配</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;通过上面的了解，小伙伴对正则表达式应该有了初始的了解，下面我们猜测一下，下面的 `Console 1-3` 哪些是 `true`，哪些是 `false`：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>正则表达式</title>
</head>

<body>
  <p>正则表达式 | <b>jsliang</b> 学习记录</p>

  <script>
    window.onload = function() {
      var str = "Cheer for yourself";
      var reg1 = /^Cheer/;
      var reg2 = /yourself$/;
      var reg3 = /for/;
      console.log(reg1.test(str));
      console.log(reg2.test(str));
      console.log(reg3.test(str));
    }
  </script>
</body>

</html>
```

<br>

&emsp;答案是，这三个都返回 `true`。在这三个 `console.log()` 中，第一个判断该字符串是否以 `Cheer` 开头；第二个判断该字符串是否以 `yourself` 结尾；第三个判断该字符串是否包含 `for`。在日常工作中，经常利用该方法，判断用户输入的 `string` 里面是否包含某些文字，例如：`jsliang 是傻逼`，就需要判断替换为 `jsliang 是帅哥`，至于怎么替换敏感字，我们下文讲解~  

<br>

# <a name="chapter-four" id="chapter-four">四 test 方法</a>

> [目录](#catalog-chapter-four)

<br>

&emsp;test: 正则表达式搜索字符串指定的值，从而去匹配字符串。如果匹配成功就返回真，如果匹配失败就返回假  
&emsp;test的写法：正则.test(字符串)

```
// \s : 空格
// \S : 非空格
// \d : 数字
// \D : 非数字
// \w : 字符 （字母，数字，下划线_）
// \W : 非字符

var str = "12313213ab2131";
var re = /\D/;
if(re.test(str)) {
  console.log("不全是数字！");
} else {
  console.log("全是数字！");
}
```

<br>

# <a name="chapter-five" id="chapter-five">五 search 方法</a>

> [目录](#catalog-chapter-five)

<br>

&emsp;search：正则去匹配字符串，如果匹配成功，就返回匹配成功的位置，如果匹配失败就返回-1  
&emsp;search 的写法：字符串.search(正则)

```
// 正则中的默认，是区分大小写的
// 如果不区分大小写的话，在正则的最后加标识i
var str = "abcdef";
var re = /g/i;
// var re = new RegExp("B", "i");
console.log(str.search(re));
```

<br>

# <a name="chapter-six" id="chapter-six">六 match 方法</a>

> [目录](#catalog-chapter-six)

<br>

&emsp;match : 正则去匹配字符串，如果匹配成功，就返回匹配成功的数组，如果匹配不成，就返回null  
&emsp;match的写法: 字符串.match(正则)

```
// 正则默认： 正则匹配成功就会结束，不会继续匹配
// 如果想查找全部，就要加标识 g（全局匹配）
// 量词：匹配不确定的位置
// + ： 至少出现一次

var str = "123fadf321dfadf4fadf1";
var re = /\d+/g;
console.log(str.match(re));
```

<br>

# <a name="chapter-seven" id="chapter-seven">七 replace 方法</a>

> [目录](#catalog-chapter-seven)

<br>

&emsp;replace ： 正则去匹配字符串，匹配成功的字符串去替换成新的字符串  
&emsp;replace的写法： 字符串.replace(正则,新的字符串)

```
var str = 'aaa';
var re = /a+/g;
str = str.replace(re, "b");
console.log(str);
```

<br>

# <a name="chapter-eight" id="chapter-eight">八 敏感词过滤</a>

> [目录](#catalog-chapter-eight)

<br>

> *.html

```
<div class="filtering-of-sensitive-words">
  <!-- 7、敏感词过滤 -->
  <h3>敏感词过滤</h3>
  <p>替换前</p>
  <textarea name="before" id="" cols="30" rows="10"></textarea>
  <input type="button" value="确定" id="input1">
  <p>替换后</p>
  <textarea name="after" id="" cols="30" rows="10"></textarea>
</div>
```

<br>

> *.js

```
// | : 或的意思
// replace : 第二个参数 ： 可以是字符串，也可以是一个回调函数

window.onload = function() {
  var aT = document.getElementsByTagName("textarea");
  var oInput = document.getElementById("input1");

  // 非诚勿扰在中国船的监视之下寸步难行
  var re = /非诚|中国船|监视之下/g;

  oInput.onclick = function() {
    // 字符串写法： aT[1].value = at[0].value.replace(re, "*");
    aT[1].value = aT[0].value.replace(re, function(str) {
      // 函数的第一个参数，就是匹配成功的字符
      var result = "";
      for(var i=0; i<str.length; i++) {
        result += "*";
      }
      return result;
    });
  }
}
```

<br>

# <a name="chapter-nine" id="chapter-nine">九 匹配子项</a>

> [目录](#catalog-chapter-nine)

<br>

&emsp;匹配子项 ： 小括号() (还有另外一个意思，分组操作)
&emsp;把正则的整体叫做（母亲）
&emsp;然后把左边第一个括号里面的正则，叫做这个第一个子项（母亲的第一个孩子）
&emsp;第二个小括号就是第二个孩子

> *.js

```
var str = "2018-5-25";
var re = /(\d+)(-)/g;
str = str.replace(re, function($0, $1, $2){
  // 第一个参数：$0（母亲),第二个参数：$1（第一个孩子），第三个参数：$1(第二个孩子)
  return $1 + '.';
  // return $0.substring(0, $0.length-1) + ".";
});
console.log(str);
```

<br>

&emsp;匹配子项2

```
var str = "abc";
var re = /(a)(b)(c)/
console.log(str.match(re));
// 输出 ： [ 'abc', 'a', 'b', 'c', index: 0, input: 'abc' ]
// 当match不加g的时候才能获取子项的集合
```

<br>

# <a name="chapter-ten" id="chapter-ten">十 字符类</a>

> [目录](#catalog-chapter-ten)

<br>

&emsp;字符类：一组类似的元素 [] 中括号的整体代表一个字符

```
// var str = "abcd";
// var re = /a[bcd]c/;
// console.log(re.test(str));

// 排除 ： ^ 如果写在[]里面的话，就代表排除的意思
// var str = "abc";
// var re = /a[^bcd]c/;
// console.log(re.test(str));

var str = "a.c";
var re = /a[a-z0-9A-Z]c/;
console.log(re.test(str));
```

<br>

# <a name="chapter-eleven" id="chapter-eleven">十一 过滤标签</a>

> [目录](#catalog-chapter-eleven)

<br>

```
window.onload = function() {
  var filterLabel = document.getElementById("filter-label");
  var aT = filterLabel.getElementsByTagName("textarea");
  var oInput = document.getElementById("input2");
  // var re = /<\w+/g;
  var re = /<[^>]+>/g;
  oInput.onclick = function() {
    aT[1].value = aT[0].value.replace(re, "");
  };
};
```

<br>

# <a name="chapter-twelve" id="chapter-twelve">十二 获取class的方法</a>

> [目录](#catalog-chapter-twelve)

<br>

```
window.onload = function () {
  // var aLi = document.getElementsByClassName("li1");
  var aLi = getByClass(document, "li1");
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].style.background = "red";
  }

  function getByClass(oParent, sClass) {
    var arr = [];
    var aEle = oParent.getElementsByTagName("*");
    // var re = /sClass/; // 当正则需要传参的时候，一定要用全称的写法
    var re = new RegExp("\\b" + sClass + "\\b");
    for (var i = 0; i < aEle.length; i++) {
    if(re.test(aEle[i].className)) {
      arr.push(aEle[i]);
      }
    }
    return arr;
  }
};
```

<br>

# <a name="chapter-thirteen" id="chapter-thirteen">十三 转义字符</a>

> [目录](#catalog-chapter-thirteen)

<br>

```
// \1：重复的第一个子项
// \2: 重复的第二个子项
// ……

var str1 = "abca";
var re1 = /(a)(b)(c)\1/;
console.log(re1.test(str1));

var str2 = "assbsscssadc";
var arr2 = str2.split("");
str2 = arr2.sort().join("");
var value = "";
var index = 0;
var re = /(\w)\1+/g;
str2.replace(re, function($0, $1){
if(index<$0.length) {
  index = $0.length;
  value = $1;
}
});
console.log("最多的字符："+value+"，重复的次数："+index);
```

<br>

# <a name="chapter-fourteen" id="chapter-fourteen">十四 量词</a>

> [目录](#catalog-chapter-fourteen)

<br>

```
// 量词 ： {}
/*

{4, 7} : 最少出现4次，最多出现7次
{4,} : 最少出现4次
{4} :正好出现4次

+ : {1,} // 类似于\d{1,}
? : {0,1} : 出现0次或者1次
* : {0,} : 至少出现0次

*/

var str = "ac";
var re = /ab*/;
console.log(re.test(str));

// ^ : 正则的最开始位置，代表起始的意思
// $ : 正则的最末尾位置，代表结束的意思

//判断是不是QQ号
window.onload = function () {
  var aInput = document.getElementById("isQQ").getElementsByTagName("input");
  var re = /^[1-9]\d{4,11}$/;
  aInput[1].onclick = function () {
    if (re.test(aInput[0].value)) {
      console.log("是QQ号");
    } else {
      console.log("不是QQ号");
    }
  };
};

// 去掉前后空格
var str = ' hello ';
console.log('(' + trim(str) + ')');

function trim(str) {
  var re = /^\s+|\s+$/g;
  return str.replace(re, '');
}

console.log(trim(str));

// 正则集合
var re = {
qq: /[1-9][0-9]{4,9}/,
email: /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/,
number: /\d+/
};

re.email
```

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
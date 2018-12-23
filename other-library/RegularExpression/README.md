正则表达式
===

> Create by **jsliang** on **2018-11-14 10:41:20**  
> Recently revised in **2018-12-23 21:23:21**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star**，你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/tree/master/other-library/RegularExpression)**

<br>

&emsp;正则表达式：正则，也叫做规则，让计算机能够读懂人类的规则。  
&emsp;正则表达式是繁琐的，越学你会觉得越发发狂。  
&emsp;但是，它又是强大的。正则在我眼里，就是作弊码，学会之后的应用可以大大提高你的开发效率。  
&emsp;所以，你可以老老实实打怪，但是你用了它会觉得编程更爽快。

&emsp;综上，有了 **jsliang** 编写这篇文章来记录自己所学的冲动。  
&emsp;为此，也是灵感触发，**jsliang** 写了个 PC 小游戏（请用电脑打开网址）：

* **[正则小游戏地址](http://playregex.jsliang.top/)**

![图](../../public-repertory/img/other-RegularExpression-1.gif)

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

<br>

&emsp;**不折腾的前端，和咸鱼有什么区别~**

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 整合](#chapter-two) |
| &emsp;[2.1 常用正则](#chapter-two-one) |
| &emsp;[2.2 匹配规则](#chapter-two-two) |
| &emsp;[2.3 常用方法](#chapter-two-three) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正则旅途](#chapter-three) |
| &emsp;[3.1 初识正则](#chapter-three-one) |
| &emsp;[3.2 正则解析](#chapter-three-two) |
| &emsp;[3.3 正则练习](#chapter-three-three) |
| &emsp;[3.4 渐入佳境：() 匹配子项](#chapter-three-four) |
| &emsp;[3.5 渐入佳境：[] 字符类](#chapter-three-five) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 回顾总结](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 文章更正](#chapter-five) |

<br>

# <a name="chapter-two" id="chapter-two">二 整合</a>

> [目录](#catalog-chapter-two)

<br>

&emsp;本章节整理总结了所有的参考文献，方便日后快速回顾回忆。  
&emsp;如果你还没正式开始正则表达式，请快速浏览跳过本章节。

&emsp;精选参考文献/视频/手册：

* [正则表达式-教程 | 菜鸟教程](http://www.runoob.com/regexp/regexp-tutorial.html)
* [正则表达式在线测试 | 菜鸟教程](https://c.runoob.com/front-end/854)
* [正则表达式手册 | 开源中国社区](http://tool.oschina.net/uploads/apidocs/jquery/regexp.html)
* [鬼斧神工之正则表达式 | 慕课网](https://www.imooc.com/learn/350)
* [正则表达式真的很 6，可惜你不会写 | 前端之巅](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247489641&idx=1&sn=5fd41822e46dc471ec551b7901e8f2e7&chksm=f951ad2ace26243c7a5300a7e0a18cd51fba7f516815cc1ee037e80b873d503ebeefecb4fd74&mpshare=1&scene=1&srcid=1008AuZ5aklTGmEXxuQUSgNm#rd)
* [正则表达式 - 快速参考 | Miscrosoft Docs](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference)
* [揭开正则表达式的神秘面纱 | 正则工作室](http://www.regexlab.com/zh/regref.htm)
* [正则表达式 JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

<br>

## <a name="chapter-two-one" id="chapter-two-one">2.1 常用正则表达式</a>

> [目录](#catalog-chapter-two)

<br>

1. **验证姓名**
* 2 到 9 位中文昵称：`^[\u4e00-\u9fa5]{2,9}$ `

2. **验证密码**
* 只能是字母、数字和下划线，长度不限制：` ^\w+$ `
* 允许 小写字母 `a-z`、大写字母 `A-Z`、数字 `0-9`、下划线 `_`、 连接符 `-`，且长度在 6-18 位数：` /^[a-zA-Z0-9_-]{6,18}$/ `
* 必须包含数字+小写字母+大写字母的密码，且长度在8-10位之间：` ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$ `

3. **验证 Email**
* 允许有一个字符符合 [A-Za-z0-9_] 之后可以为 [A-Za-z0-9_-+.] + `@` + 允许有一个字符符合 [A-Za-z0-9_] 之后可以为 [A-Za-z0-9_-.] + `.` + 允许有一个字符符合 [A-Za-z0-9_] 之后可以有 [A-Za-z0-9_-.] 的邮箱：` ^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$ `

4. **验证身份证**
* 18 位身份证号，尾数是数字或者字母 X：` ^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$ `
* 15 或者 18 位身份证号，尾数可以是数字及 X 或者 x：` (^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$) `

5. **验证手机号**
* 以 1 开头，第二位数是 3/4/5/7/8 的 11 位手机号码：` ^1[3,4,5,7,8,9]\d{9}$ `
* 移动号码：` ^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|1703|1705|1706|18[2-478])\d{7,8}$ `
* 电信号码：` ^(?:133|153|1700|1701|1702|177|173|18[019])\d{7,8}$ `
* 联通号码：` ^(?:13[0-2]|145|15[56]|176|1704|1707|1708|1709|171|18[56])\d{7,8}|$ `

<br>

## <a name="chapter-two-two" id="chapter-two-two">2.2 匹配规则</a>

> [目录](#catalog-chapter-two)

<br>

| 字符 | 描述 | 例子 |
| ---- | ---- | ---- |
| `\` | 将下一个字符标记为特殊字符、或原义字符、或向后引用、或八进制转义符。 | `\n` 表示换行符、`\d` 匹配 [0-9] 的数字 |
| `^` | 匹配输入字符串的开始位置。 | `^abc` 表示匹配有 abc 开头的字符串 |
| `$` | 匹配输入字符串的结束位置。 |  `^\d$` 表示匹配一个 [0-9] 的数字 |
| `*` | 匹配前面的子表达式零次或多次。 | `zo*` 能匹配 `z` 或者 `zoo`。`*` 等价于 `{0,}`。 |
| `+` | 匹配前面的子表达式一次或多次。 | `zo+` 能匹配 `zo` 或者 `zoo`，但不能匹配 `z`。`+` 等价于 `{1,}`。 |
| `?` | 匹配前面的子表达式零次或一次。 | `do(es)?` 可以匹配 `does` 或 `does` 中的 `do`。`?` 等价于 `{0,1}`。 |
| `{n}` | `n` 是一个非负整数。匹配确定的 n 次。 | `o{2}` 不能匹配 `Bob` 中的 `o`，但是能匹配 `food` 中的两个 `o`。 |
| `{n,}` | `n` 是一个非负整数。至少匹配 n 次。 | `o{2,}` 不能匹配 `Bob` 中的 `o`，但能匹配 `foooood` 中的所有 `o`。`o{1,}` 等价于 `o+`。`o{0,}` 则等价于 `o*`。 |
| `{n,m}` | m 和 n 均为非负整数，其中 n <= m。最少匹配 n 次且最多匹配 m 次。 | 例如，`o{1,3}` 将匹配 `fooooood` 中的前三个 o。`o{0,1}` 等价于 `o?`。请注意在逗号和两个数之间不能有空格。 |
| `?` | 当该字符紧跟在任何一个其他限制符 `*`、`+`、`?`、`{n}`、`{n,}`、`{n,m}` 后面时（例如 `+?`），匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。 | 对于字符串 `oooo`，`o+?` 将匹配单个 `o`，而 `o+` 将匹配所有 `o`。 |
| `.` | 匹配除 `\n` 之外的任何单个字符。`.` 是一个很强大的 **元符号**，请慎用。| 要匹配包括 `\n` 在内的任何字符，请使用 `(.|\n)` 的模式。要匹配小数点本身，请使用 `\.`。`a.e` 能匹配 `nave` 中的 `ave` 或者匹配 `water` 中的 `ate` |
| `(子表达式)` | 	标记一个子表达式的开始和结束位置。 | `(\w)\1` 能匹配 `deep` 中的 `ee` |
| `(?:子表达式)` | 匹配 **z子表达式** 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用或字符 `(|)` 来组合一个模式的各个部分是很有用。 | `industr(?:y|ies)` 就是一个等同于 `industry|industries` 但更简略的正则表达式。 |
| `(?=子表达式)` | 一般用法：`××(?=子表达式)`，它的意思就是 `××` 后面的条件限制是 `?=` 后面的 `子表达式` | `Windows(?=95|98|NT|2000)` 能匹配 `Windows2000` 中的 `Windows`，但不能匹配 `Windows3.1` 中的 `Windows`。`\w+(?=\.)` 能匹配 `He is. The dog ran. The sun is out.` 中的 `is`、`ran` 和 `out` |
| `(?!子表达式)` | 类似于 `(?=子表达式)`，表示不等于后面的 `子表达式`。 | `Windows(?!95|98|NT|2000)` 能匹配 `Windows3.1` 中的 `Windows`，但不能匹配 `Windows2000` 中的 `Windows`。`\b(?!un)\w+\b` 能匹配 `unsure sure unity used` 中的 `sure` 和 `used` |
| `(?<=子表达式)` | 同上。 | `(?<=95|98|NT|2000)Windows` 能匹配 `2000Windows` 中的 `Windows`，但不能匹配 `3.1Windows` 中的`Windows`。`(?<=19)\d{2}\b` 能匹配 `1851 1999 1950 1905 2003` 中的 `99`、`50` 和 `05` |
| `(?<!子表达式)` | 同上。 | `(?<!95|98|NT|2000)Windows` 能匹配 `3.1Windows` 中的 `Windows`，但不能匹配 `2000Windows` 中的 `Windows`。`\b(?!un)\w+\b` 能匹配 `unsure sure unity used` 中的 `sure` 和 `used` |
| `x|y` | 匹配 x 或者 y。| `z|food` 能匹配 `z` 或者 `food`。`(z|f)ood` 则匹配 `zood` 或 `food`。 |
| `[xyz]` | 字符集合。匹配所包含的任意一个字符。 | `[abc]` 可以匹配 `plain` 中的 `a`。 |
| `[^xyz]` | 求反。匹配未包含的任意字符。 | 例如，`[^abc]` 可以匹配 `plain` 中的 `p`。`[^aei]` 匹配 `reign` 中的 `r`、`g` 和 `n` |
| `[a-z]` | 字符范围。匹配指定范围内的任意字符。 | `[a-z]` 可以匹配 `a` 到 `z` 范围内的任意小写字母字符。注意：`[A-Z]` 才匹配大写英文字母 |
| `[^a-z]` | 求反。匹配任何不在指定范围内的任意字符。 | `[^a-z]` 可以匹配任何不在 `a` 到 `z` 范围内的任意字符。 |
| `\b` | 匹配一个单词边界，也就是指单词和空格间的位置。 | `er\b` 可以匹配 `never` 中的 `er`，但不能匹配 `verb` 中的 `er`。 |
| `\B` | 匹配非单词边界。| `er\B` 能匹配 `verb` 中的 `er`，但不能匹配 `never` 中的 `er`。 |
| `\cx` | 匹配由 x 指明的控制字符。 | 例如，`\cM` 匹配一个 `Control-M` 或者回车符。`x` 的值必须为 `A-Z` 或 `a-z` 之一。否则，将 `c` 视为一个原义的 `c` 字符。 |
| `\d` | 匹配一个数字字符。等价于[0-9]。 | `4 = IV` 中的 `4` |
| `\D` | 匹配一个非数字字符。等价于[^0-9]。 | `4 = IV` 中的 ` `、`=`、` `、`I` 和 `V` |
| `\f` | 匹配一个换页符。等价于\x0c和\cL。 | `[\f]{2,}`	能匹配 `\f\f\f` 中的 `\f\f\f`。 |
| `\n` | 匹配一个换行符。等价于\x0a和\cJ。 | `\r\n(\w+)` 能匹配 `\r\nThese are\ntwo lines.` 中的 `\r\nThese` |
| `\r` | 匹配一个回车符。等价于\x0d和\cM。 | `\r\n(\w+)` 能匹配 `\r\nThese are\ntwo lines.` 中的 `\r\nThese` |
| `\s`| 匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。 | `\w\s` 能匹配 `ID A1.3` 中的 `D` |
| `\S` | 匹配任何非空白字符。等价于[^ \f\n\r\t\v]。 | `\s\S` 能匹配 `int __ctr` 中的 ` _` |
| `\t` | 匹配一个制表符。等价于\x09和\cI。 | `(\w+)\t` 能 匹配 `item1\titem2\t` 中的 `item1\t` 和 `item2\t` |
| `\v` | 匹配一个垂直制表符。等价于\x0b和\cK。 | `[\v]{2,}` 能匹配 `\v\v\v` 中的 `\v\v\v` |
| `\w` | 匹配包括下划线的任何单词字符。等价于 `[A-Za-z0-9_]`。   | `ID A1.3` 中的 `I`、`D`、`A`、`1` 和 `3` |
| `\W` | 匹配任何非单词字符。等价于 `[^A-Za-z0-9_]`。 | `ID A1.3` 中的 ` `、`.`。 |

<br>

## <a name="chapter-two-three" id="chapter-two-three">2.3 常用方法</a>

> [目录](#catalog-chapter-two)

<br>

&emsp;JavaScript 正则默认： 正则匹配成功就会结束，不会继续匹配。如果想查找全部，就要加标识 `g`（全局匹配）

<br>

1. `test()`

&emsp;**规则**：正则表达式搜索字符串指定的值，从而去匹配字符串。如果匹配成功就返回 `true`，如果匹配失败就返回 `false`。  
&emsp;**用法**：`正则.test(字符串)`  
&emsp;**案例**：

> js 代码片段

```
var str = "123abc";
var re = /\D/; // 匹配非数字
if(re.test(str)) {
  console.log("不全是数字！");
} else {
  console.log("全是数字！");
}
```

> Console：`不全是数字`

<br>

2. `search()`

&emsp;**规则**：正则去匹配字符串，如果匹配成功，就返回匹配成功的位置，如果匹配失败就返回 `-1`  
&emsp;**用法**：`字符串.search(正则)`  
&emsp;**案例**：

> js 代码片段

```
var str = "abcdef";
var re1 = /d/i; // 3
var re2 = /h/i; // -1
console.log(str.search(re1));
console.log(str.search(re2));
```

> Console：  
> `3`  
> `-1`

<br>

3. `match()`

&emsp;**规则**：正则去匹配字符串，如果匹配成功，就返回匹配成功的数组，如果匹配不成，就返回 `null`  
&emsp;**用法**：`字符串.match(正则)`  
&emsp;**案例**：

> js 代码片段

```
var str = "123fadf321dfadf4fadf1"; //(4) ["123", "321", "4", "1"]
var re = /\d+/g;
console.log(str.match(re));
```

> Console：`(4) ["123", "321", "4", "1"]`

<br>

4. `replace()`

&emsp;**规则**：正则去匹配字符串，匹配成功的字符串去替换成新的字符串。函数的第一个参数，是匹配成功的字符；第二个参数：可以是字符串，也可以是一个回调函数。  
&emsp;**用法**：`字符串.replace(正则,新的字符串)`  
&emsp;**案例**：

* 简单案例

> js 代码片段

```
var str = 'aaa';
var re = /a+/g;
str = str.replace(re, "b");
console.log(str); // b
```

> Console：`b`

<br>

* 敏感词过滤

> html 代码片段

```
<div class="filtering-of-sensitive-words">
  <h3>敏感词过滤</h3>
  <p>替换前</p>
  <textarea name="before" id="" cols="30" rows="10"></textarea>
  <input type="button" value="确定" id="input1">
  <p>替换后</p>
  <textarea name="after" id="" cols="30" rows="10"></textarea>
</div>
```

> js 代码片段

```
window.onload = function() {
  var aT = document.getElementsByTagName("textarea");
  var oInput = document.getElementById("input1");

  var re = /非诚|中国船|监视之下/g;

  oInput.onclick = function() {
    // 一律单个替换： aT[1].value = at[0].value.replace(re, "*");
    // 多个替换：
    aT[1].value = aT[0].value.replace(re, function(str) {
      var result = "";
      for(var i=0; i<str.length; i++) {
        result += "*";
      }
      return result;
    });
  }
}
```

> Console  
> 替换前：`非诚勿扰在中国船的监视之下寸步难行`  
> 替换后：`**勿扰在***的****寸步难行`

<br>

# <a name="chapter-three" id="chapter-three">三 正则旅途</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;什么是正则表达式？正则表达式：正则，也叫做规则，让计算机能够读懂人类的规则。  
&emsp;正则表达式都是用来操作字符串的。  

&emsp;**本文学习目标**：

1. 通过小故事给小伙伴学习 JavaScript 的正则表达式
2. 让小伙伴能了解基本正则表达式的意思，并能自己写正则表达式

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 初识正则</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;正则长咋样？怎么用？很简单，三行代码带你入门

```
var regex = /^\d+$/;
var myNumber = '123';
console.log(regex.test(myNumber)); // true
```

&emsp;上面的正则，能验证字符串 `myNumber` 是不是纯数字组成，就这么简单，正则入门了！  
&emsp;但是，如果我要是敢就这么结束文章，我敢保证你们想拍死我！所以，我们通过一个表达式的故事来初识正则表达式：  

&emsp;某天，盗贼小白给了盗贼小黑一个盒子，盒子像俄罗斯套娃一样，有 3 层嵌套：  

![图](../../public-repertory/img/other-RegularExpression-2.jpg)

&emsp;并且，他们约定了交易密码提取方式：小白将给小黑提供一串字符串，小黑只需要将字符串中的所有相连的数字找出来，然后把它们拼接成一个新数组，数组的第一项就是第一个盒子的密码，以此类推……

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

&emsp;那么，讲到这里，小伙伴们应该对正则有了个简单的了解，称热打铁，Here we go~

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 正则解析</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;在上文中，盗贼小黑通过使用 `str.match(/\d+/g)`，解决了获取箱子密码的问题。  
&emsp;那么，这串正则表达式是什么意思呢？我们先抛开这个，解析一串简单的：  
> `^[a-z0-9_-]{6,12}$`

&emsp;首先，`^` 表示匹配字符串的开始位置，结合后面的 `[a-z0-9_-]` 表示该字符串开头可以为 `a-z` 的字母，`0-9` 的数字，`_` 下划线，`-` 连接符。  
&emsp;然后，`[a-z]` 表示匹配 `a-z` 中任意单个字母；`[0-9]` 表示匹配 `0-9` 中任意单个数字；`[_]` 表示匹配下划线；`[-]` 表示匹配连接符 `-`。所以，将前面的连起来，`[a-z0-9_-]` 表示字符串可以包含`数字`、`字母`、`_`、`-` 这四种形式的字符串。  
&emsp;接着，`{6, 12}` 表示该字符串的长度为 `6-12` 位。  
&emsp;最后，`$` 表示结束标志，`^` 的相反。

> `^` 与 `$` 同时使用时，表示精确匹配。

&emsp;终上所述，小伙伴们应该猜测到了这个正则表达式的用途：**校验用户名**。该用户名只能包含字符、数字、下划线 `(_)` 和连接字符 `(-)`，并且用户名的长度最长为 12 位，最短为 6 位。

&emsp;那么，它在 JavaScript 中要如何使用呢？我们通常用 `/正则表达式/` 两个斜杠来包裹我们要写的正则表达式：

```
var reg = /^[a-z0-9_-]{6,12}$/
```

&emsp;看，这样就是一条规则了，如果你需要让他匹配一个字符串 `str`。那么，只需要在代码中使用 `test()` 测试方法：

```
var str = 'abc-cba_abc';
var reg = /^[a-z0-9_-]{6,12}$/;
console.log(reg.test(str)); // true
```

&emsp;这样，我们就告诉了 JavaScript：`reg` 通过 `test()` 方法去测试 `str` 是否符合 `reg`的规则，如果符合则返回 `true`，如果不符合则返回 `false`。这里返回的是 `true`，因为我们的 `str` 是符合 `reg` 规则的。

> `test()` 方法及其他好用的方法已经整合到 [【2.3 JS 正则方法】](#chapter-two-three) 里面了，迫不及待的小伙伴们可点击链接先行查看。

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

## <a name="chapter-three-three" id="chapter-three-three">3.3 正则练习</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;通过上面的了解，小伙伴对正则表达式应该有了初始的了解，下面我们猜测一下，下面的 `Console 1 - Console 3`中， 哪些是 `true`，哪些是 `false`：

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

&emsp;答案是，这三个都返回 `true`。在这三个 `console.log()` 中：  
&emsp;第一个判断该字符串是否以 `Cheer` 开头；  
&emsp;第二个判断该字符串是否以 `yourself` 结尾；  
&emsp;第三个判断该字符串是否包含 `for`。  
&emsp;在日常工作中，经常利用该方法，判断用户输入的 `string` 里面是否包含某些文字，例如：`jsliang 是傻逼`，就需要判断替换为 `jsliang 是帅哥`，至于怎么替换敏感字，迫不及待的小伙伴们可前往 [【2.3 JS 正则方法】](#chapter-two-three) 先行了解~  

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 渐入佳境：() 匹配子项</a>

> [目录](#catalog-chapter-three)

<br>

&emsp;所谓匹配子项，其实就是我们的小括号 `()` 。它还有另外一个意思，叫分组操作。下面我们引用章节 [【2.2 正则表达式规则】](#chapter-two-two) 中的定义：  

| 表达式 | 释义 | 用法 |
| --- | --- | --- |
| `(子表达式)` | 	标记一个子表达式的开始和结束位置。 | `(\w)\1` 能匹配 `deep` 中的 `ee` |

&emsp;如果光解释意思，小伙伴们可能稀里糊涂。所以我们先上代码：

> js 代码片段

```
var str = "2018-11-28";
var re = /(\d+)(-)/g;
str = str.replace(re, function($0, $1, $2){
  // 第一个参数：$0（母亲)
  // 第二个参数：$1（第一个孩子）
  // 第三个参数：$2 (第二个孩子)
  console.log("$0：" + $0); // 2018- 以及 11-
  console.log("$1：" + $1); // 2018 以及 11
  console.log("$2：" + $2); // - 以及 -
  return $1 + '.';
});
console.log(str); // 2018.11.28
```

> Console：  
> `$0：2018-`  
> `$1：2018`  
> `$2：-`  
> `$0：11-`  
> `$1：11`  
> `$2：-`  
> `2018.11.28`

&emsp;**首先**，我们解析下这段正则：

* `/(\d+)/` 表示任意 1 个及以上的数字
* `/(-)/` 表示匹配字符 `-`
* `g` 表示匹配一次以上

&emsp;所以这段正则的意思就是匹配一次及以上的 `数字-` 形式的字符串。
&emsp;**然后**，我们使用了 `replace()` 方法。我们观察 `Console` 打印出来的结果，可以看出：`$0` 即是我们的正则 `var re = /(\d+)(-)/g` 去匹配 `var str = "2018-11-28"` 所得到的结果，这里我们匹配成功了两次，即 `2018-` 及 `11-`；`$1` 即是我们的一个小括号 `(\d+)` 的匹配结果，所以结果为 `2018` 以及 `11`；`$2` 即是我们的第二个小括号 `(-)` 的匹配结果，所以结果为 `-` 以及 `-`。  
&emsp;**最后**，我们做的事情就是，将 `$1` 加上 `.`，并返回最终结果给 `str`，即最终结果：`2018.11.28`。  

> 在这里提到了 `replace()` 方法，详情可了解：[点击前往](#chapter-two-three)

<br>

&emsp;**【Once again】** 如果小伙伴们感觉还是不过瘾，那么我们再来一段：

> js 代码片段

```
var str = "abc";
var re = /(a)(b)(c)/;
console.log(str.match(re));
```

> Console  
> `(4) ["abc", "a", "b", "c", index: 0, input: "abc", groups: undefined]`

&emsp;这里我们不做过多讲述，相信小伙伴们经过这两个案例，应该对 `()` 有了一定的了解。

<br>

## <a name="chapter-three-five" id="chapter-three-five">3.5 渐入佳境：[] 字符类</a>

> [目录](#catalog-chapter-three)

&emsp;何为字符类？  
&emsp;所谓字符类，就是一组类似的元素 `[]` 这样的中括号的整体，所代表一个字符。  
&emsp;话不多说，先上代码：

> js 代码片段

```
var str1 = "abcd";
var re1 = /a[bcd]c/;
console.log(re1.test(str1)); // true

var str2 = "abc";
var re2 = /a[^bcd]c/;
console.log(re2.test(str2)); // false

var str3 = "a.c";
var re3 = /a[a-z0-9A-Z]c/;
console.log(re3.test(str3));  // false
```

> Console  
> `true`  
> `false`  
> `false`

&emsp;**首先**，我们先解析第一部分：

* `/a/`：匹配字母 `a`
* `/[bcd]/`：匹配字母 `bcd` 中的一位
* `/[d]`：匹配字母 `d`

&emsp;所以，可以看出，我们用 `re1` 来测试 `str1` 是否符合，它会返回 `true`。  

&emsp;**然后**，我们解析第二部分：

*  `^` 如果写在 `[]` 里面的话，就代表排除的意思。在这里就代表着 `a` 和 `c` 中间不能是 `bcd` 中的任意一个

&emsp;所以，可以看出，我们用 `re2` 来测试 `str1` 是否符合，它会返回 `false`。  

&emsp;**最后**，我们解析第三部分：

* `/[a-z0-9A-Z]/`：匹配小写字母 `a-z`，或者数字 `0-9`，或者大写字母 `A-Z`。即 `a` 与 `c` 之间只能是上面匹配地上的字符。

&emsp;所以，可以看出，我们用 `re3` 来测试 `str3` 是否符合，它会返回 `false`。

<br>

# <a name="chapter-four" id="chapter-four">四 回顾总结</a>

> [目录](#catalog-chapter-four)

<br>

&emsp;在第三章中，我们介绍了强大之处，介绍了它的使用方法，并通过小练习、`()` 以及 `[]` 的讲解，让小伙伴们更进一步了解在 JavaScript 中正则的使用……  
&emsp;但！  
&emsp;这是完结吗？！  
&emsp;不！  
&emsp;由于 **jsliang** 时间有限，没法一一给小伙伴们介绍正则的乐趣及工作中如何使用正则提高工作效率。  
&emsp;所以，在第二章 [【整合】](#chapter-two) 中，**jsliang** 整合网上资源，记录了一些常用的正则工具，里面有很多东西，是在这篇文章中没有涉及的，有兴趣的小伙伴可以逐一尝试加深对正则的了解。  

&emsp;**————For the end————**  
&emsp;在编写这篇文章中，**jsliang** 玩性大发写下了下面的游戏（请用电脑查看）：

* **游戏地址**：[天下第一武道会](http://playregex.jsliang.top/)
* **代码地址**：[https://github.com/LiangJunrong/regex](https://github.com/LiangJunrong/regex)

<br>

# <a name="chapter-five" id="chapter-five">五 文章更正</a>

> [目录](#catalog-chapter-five)

<br>

1. 掘金反馈 2018-11-20
* **类型**：内容错误
* **反馈用户**：[Kaelalv](https://juejin.im/user/5bee10b1f265da61776b8c1b)
* **反馈内容**：3.2内容中对这段代码解析时：
```
var str = 'abc-cba_abc'; 
var reg = /^[a-z0-9_-]{6,12}$/; 
console.log(reg.test(str)); // true 
```
&emsp;作者手误，打错：不符合则 返回 true；正确：不符合则 返回 false。
* **反馈处理**：已更正，谢谢反馈

<br>

&emsp;**如果小伙伴们觉得本文还不错，记得 掘金 给个赞并去 GitHub 点个 **star**， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/tree/master/other-library/RegularExpression)**

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
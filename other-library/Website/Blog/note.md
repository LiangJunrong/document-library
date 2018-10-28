Vue + Node + MongoDB 学习笔记
===

> create by **jsliang** on **2018-10-16 21:48:25**  
> Recently revised in **2018-10-28 12:05:20**

<br>

# <a name="catalog" id="catalog">目录</a>
| 章节  |
| ---  |
| [第一章 印象](#chapter-one) |
| [第二章 基础语法](#chapter-two) |
| [第三章 路由](#chapter-three) |
| [第四章 Axios](#chapter-four) |
| [第五章 ES6 奇技淫巧](#chapter-five) |
| [第六章 杂碎](#chapter-six) |

<br>

# <a name="chapter-one" id="chapter-one">第一章 印象</a>

> [返回目录](#catalog)

<br>

* Vue 是一个灵活的、渐进式框架：声明式渲染 -> 组件系统 -> 客户端路由 -> 大规模状态管理 -> 构建工具  

* Vue 区别于 jQuery：

1. 数据驱动。不同于 jQuery 的命令式操作，不需要大规模对 DOM 节点的更新替换，Vue 更专注于数据层，通过数据层的改变，来渲染页面。  

&emsp;&emsp;View(DOM) <---> ViewModule(Vue) <---> Model(POJO - 原生JS对象)

2. 组件化。在 jQuery 中，一些业务逻辑不能更好的提取出来。而 Vue 可以对一些常用的功能模块进行抽取，形成组件：例如购物车、登录。

* Vue 如何实现双向数据绑定的关键： Object.defineProperty 的 get 和 set 方法。案例可以找： `E:\学习资料\实战\Vue+Node+Mongodb\第1章课程介绍\1.3vue概括核心思想.wmv`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue 双向数据绑定实现</title>
</head>
<body>
    <input type="text" id="userName">
    <br>
    <span id="uName"></span>

    <script>
        var obj = {};
        Object.defineProperty(obj, "userName", {
            get: function() {
                console.log("get init");
            },
            set: function(val) {
                console.log("set init");
                document.getElementById("uName").innerText = val;
                document.getElementById("userName").value = val;
            }
        });
        document.getElementById("userName").addEventListener("keyup", function(event){
            obj.userName = event.target.value;
        })
    </script>
</body>
</html>
```

* 通过 vue-cli 搭建的环境，是 SPA 单页应用。
* 如果需要使用 Vue 搭建多页面应用，需要通过 `<script>` 标签引用 Vue，或者配置 Webpack 来开发 Vue 的多页面应用。

* 通过 vue-cli 构建 SPA 应用：
1. 全局安装 vue-cli ：`npm i vue-cli -g`
2. 简洁生成：`vue init webpack-simple demo` || 完整生成：`vue init webpack demo2`
3. 安装依赖：`cnpm i`

<br>

# <a name="chapter-two" id="chapter-two">第二章 基础语法</a>

> [返回目录](#catalog)

<br>

1. 模板语法

* Mustache 语法： {{ msg }}
* HTML 赋值：v-html = ""
* 绑定属性：v-bind:id= ""
* 使用表达式：{{ ok ? 'yes' : 'no' }}
* 文本赋值：v-text = ""
* 指令：v-if = ""
* 过滤器： {{ message || capitalize }} 和 v-bind:id = " rawId | fromatId "

<br>

2. Class 和 Style 绑定

* 对象语法：v-bind:class="{ 'active':isActive, 'text-danger':hasError }"
* 数组语法：

```
<div v-bind:class="{activeClass, errorClass}">
</div>

data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}
```

* style 绑定-对象语法：v-bind:style = "{ color: activeColor, fontSize: fontSize + 'px' }"

<br>

3. 条件渲染

* v-if：`v-if` 判断，如果否，则连 DOM 节点都不产出。
* v-else：相反于 `v-if`。
* v-else-if：`v-if` 的多种判断情况。
* v-show：不同于 `v-if`，该条件渲染产生了 DOM 节点，它只是控制 DOM 的显示隐藏，有则 `display: block`，无则 `display: none`。
* v-cloak：

<br>

4. Vue 事件处理器

* v-on:click = "greet" 或者 @click = "greet"
* v-on:click.stop、v-on:click.stop.prevent、v-on:click.self、v-on:click.once
* v-on:keyup.enter

<br>

5. Vue 组件

* 全局组件和局部组件
* 父子组件通讯-数据传递
* Slot

<br>

# <a name="chapter-three" id="chapter-three">第三章 路由</a>

> [返回目录](#catalog)

<br>

* 什么是前端路由？它有什么作用？  

&emsp;路由时根据不同 url 地址 展示不同的内容或页面。  
&emsp;前端路由就是把不同路由对应的不同内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。

* 什么时候使用前端路由？

&emsp;在单页面应用，大部分页面结构不变，只改变部分内容的使用。

* 前端路由有什么优缺点？

&emsp;优点：  
&emsp;用户体验好，不需要每次都从服务器全部获取，可以快速展现给用户

&emsp;缺点：  
&emsp;不利于 SEO  
&emsp;使用浏览器的前进，后退键会重新发送请求，没有合理地利用缓存  
&emsp;单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

* vue 使用 vue-router 来构建 SPA

1. 使用 `<router-link></router-link>` 或者 `this.$router.push({path: ''})`  
2. 使用 `<router-view></router-view>`

* 什么是动态路由？

| 模式                          | 匹配路径            | $route.params                      |
| ----------------------------- | ------------------- | ---------------------------------- |
| /user/:username               | /user/evan          | { username: 'evan' }               |
| /user/:username/post/:post_id | /user/evan/post/123 | { username: 'evan', post_id: 123 } |

* 什么是嵌套路由？

&emsp;一级路由下还有二级路由，通过 `children` 来定义。

* 什么是编程式路由？

&emsp;通过 js 来实现页面的跳转。  

1. `$router.push("name")`
2. `$router.push({path: "name"})`
3. `$router.push({path: "name?a=123"})` 或者 `$router.push({path: "name", query: {a:123}})`
4. `$router.go(-1)`

* 什么是命名路由和命名视图

&emsp;给路由定义不同的名字，根据名字进行匹配。  
&emsp;给不同的 router-view 定义名字，通过名字进行对应组件的渲染。

<br>

# <a name="chapter-four" id="chapter-four">第四章 Axios</a>

> [返回目录](#catalog)

&emsp;安装方式：

1. `npm i axios`
2. `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

&emsp;方法：

1. `axios.request(config)`
2. `axios.get(url[,config])`
3. `axios.delete(url[,config])`
4. `axios.head(url[,config])`
5. `axios.options(url[,config])`
6. `axios.post(url[,config])`
7. `axios.put(url[,config])`
8. `axios.patch(url[,config])`

<br>

# <a name="chapter-five" id="chapter-five">第五章 ES6 奇技淫巧</a>

> [返回目录](#catalog)

<br>

* 函数与循环

&emsp;旧姿势

```
function sum(x, y, z) {
    var total = 0;
    if(x) { 
        total += x;
    }
    if(y) {
        total += y;
    }
    if(z) {
        total += z;
    }
    console.log(total);
}

sum(1, 3, 5);
```

<br>

&emsp;新姿势

```
function sum(...m) {
    let total = 0;
    for(var i of m) {
        total += i;
    }
    console.log(total);
}
sum(4, 8, 9, 10);
```

<br>

&emsp;更新姿势

```
let sum = (...m) => {
    let total = 0;
    for(var i of m) {
        total += i;
    }
    console.log(total);
}
sum(1, 3, 5, 7);
```

<br>

* 数组

&emsp;数组添加数组

&emsp;旧姿势

```
```
let arr1 = [4, 8];

let arr2 = [1, 3];

arr1.concat(...arr2);
console.log(arr1);
```
```

&emsp;新姿势

```
let arr1 = [{
    name: jsliang,
    age: 23
}, {
    name: JavaScriptLiang,
    age: 23
}];

let arr2 = [{
    name: JavaLiang,
    age: 23
}, {
    name: LiangJs,
    age: 23
}];

arr1.push(...arr2);
console.log(arr1);
```

&emsp;更新姿势

```
let arr1 = [{
    name: jsliang,
    age: 23
}, {
    name: JavaScriptLiang,
    age: 23
}];

let arr2 = [{
    name: JavaLiang,
    age: 23
}, {
    name: LiangJs,
    age: 23
}];

let arr3 = [...arr1, ...arr2];
console.log(arr3);
```

* 数组

&emsp;如果有一个数组，开头固定，其他不固定：

```
var [x, ...y] = [4, 5, 6, 7];
console.log(y); // 5, 6, 7

let [a, b, c] = "ES6"; // a=E, b=S, c=6

let xyz = [...'es6']; // xyz=['e', 's', '6']
```

<br>

* Promise

```
// api.js
const fetch = ({ url, data, header }) => {
    return new Promise((resolve, reject) => {
        axios.post({
            ...
            success: res => {

            },
            error: res => {

            }
        })
    })
};

export const login = data => {
    return fetch({
        url: '...',
        data: data
    })
};

// 调用 api.js
import {
    login
} from './api.js';

login({
    userName: '',
    userPhone: ''
}).then( (res) => {

})
```


&emsp;如果有多个 Promise ，则：

```
Promise.all([checkLogin(), getUserInfo()]).then( ([loginres, getinfores]) => {

})
```

<br>

* export 与 import

> a.js

```
export let sum1 = (x, y) => {
    return x + y;
}
export let sum2 = (x, y, z) => {
    return x + y + z;
}
```

<br>

> b.js

```
import {
    sum1,
    sum2
} from './a.js';

console.log(sum1(1, 2));
console.log(sum2(1, 2, 3));

// 或者

import * as a from './a.js';
console.log(a.sum1);
console.log(a.sum2);
```

<br>

# <a name="chapter-six" id="chapter-six">第六章 杂碎</a>

> [返回目录](#catalog)

<br>

&emsp;npm 工具

1. vue-lazyload 

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

设计模式手册 - 3 - 工厂模式
===

> create by **jsliang** on **2018年8月22日11:19:00**  
> Recently revised in **2019-05-20 17:34:16**

## 第三章 工厂模式

### 3.1 使用介绍
* 将 new 操作单独封装。
* 遇到 new 时，就要考虑是否使用工厂模式。
* 举个例子：  

&emsp;你去购买汉堡，只需要跟服务员点餐，做汉堡这些步骤你就不用理会了。然后下一个人去购买汉堡，也是只需要点餐，至于餐厅怎么操作的，就不需要去关心了。在这里，餐厅封装了做汉堡的工作，只需要“接受点餐”、“送餐给顾客”就可以了。

<br>

### 3.2 UML类图及其实现

![图](../../public-repertory/img/js-design-pattern-chapter3-1.png)

```js
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        alert("init");
    }
    fun1() {
        alert("fun1");
    }
    fun2() {
        alert("fun2");
    }
}

class Creator {
    create(name) {
        return new Product(name);
    }
}

// 测试
let creator = new Creator();
let p = creator.create("p1");
p.init(); // init
p.fun1(); // fun1
```

<br>

### 3.3 使用场景
* jQuery - $("div")
* React.createElement
* vue 异步组件

> jQuery

```js
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for(let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    append(node) {
        alert("Hello function append!");
    }
    addClass(name) {
        alert("Hello function addClass! "+ name);
    }
    html(data) {
        alert("Hello function html!");
    }
    // 此处省略若干API……
}

window.$ = function(selector) {
    return new jQuery(selector);
}

let p = $("p");
p.addClass("jsliang"); // Hello function addClass! jsliang
```

> React

```js
var profile = <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>

var profile = React.createElement("div", null,
    React.createElement("img", {src: "avatar.png", className: "profile"}),
    React.createElement("h3", null, [user.firstName, user.lastName].join(" "));
);
```

```js
class Vnode(tag, attr, children) {
    // ...省略内部代码...
}
React.createElement = function(tag, attrs, children) {
    return new Vnode(tag, attrs, children);
}
```

> Vue

```js
Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 1000)
})
```

<br>

### 3.4 设计原则验证
* 构造函数和创建者分离
* 符合开放封闭原则

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
# 设计模式手册 - 12 - 其他模式
> create by **jsliang** on **2018年9月3日11:53:05**  

## 第十二章 其他模式
&emsp;这里讲解前11章之外，比较少用的模式。

> 原型模式、桥接模式、组合模式、享元模式、策略模式、模板方法模式、职责连模式、命令模式、备忘录模式、中介者模式、访问者模式、解释器模式

<br>

### 12.1 原型模式
* clone 自己，生成一个新对象
* Java 默认有 clone 接口，不用自己实现
* 对比 JS 中的原型 prototype：
1. prototype 可以理解为 ES6 class 的一种底层原理
2. 而 class 是实现面向对象的基础，并不是服务于某个模式
3. 若干年后如果 ES6 全面普及，大家可能会忽略掉 prototype
4. 但是 Object.create 却会长久存在

```
// `Object.create` 用到了原型模式的思想（虽然不是 java 中的 clone ）
// 基于一个原型创建一个对象
var prototype = {
    getName: function() {
        return this.first + " " + this.last;
    },
    say: function() {
        console.log("hello");
    }
}

// 基于原型创建 x
let x = Object.create(prototype);
x.first = "A";
x.last = "B";
alert(x.getName()); // A B
x.say(); // hello
```

<br>

### 12.2 桥接模式
* 用户把抽象化与实现化解耦
* 使得二者可以独立变化

> 原实例场景

```
class ColorShape {
    yellowCircle() {
        console.log("yellow circle");
    }
    redCircle() {
        console.log("red circle");
    }
    yellowTriangle() {
        console.log("yellow triangle");
    }
    redTriangle() {
        console.log("red triangle");
    }
}

// 测试
let cs = new ColorShape();
cs.yellowCircle(); // yellow circle
cs.redCircle(); // red circle
cs.yellowTriangle(); // yellow triangle
cs.redTriangle(); // red triangle
```

> 使用桥接模式

```
class Color {
    constructor(name) {
        this.name = name;
    }
}

class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    draw() {
        console.log(`${this.color.name} ${this.name}`);
    }
}

// 测试代码
let red = new Color("red");
let yellow = new Color("yellow");
let circle = new Shape("circle", red);
circle.draw(); // red circle

let triangle = new Shape("triangle", yellow);
triangle.draw(); // yellow triangle
```

* 设计原则验证
1. 抽象和实现分离，解耦
2. 符合开放封闭原则

<br>

### 12.3 组合模式
* 生成树形结构，表示“整体-部分”关系
* 让整体和部分都具有一致的操作模式

```
<div id="div1" class="container">
    <p>123</p>
    <p>456</p>
</div>

{
    tag: "div",
    attr: {
        id: "div1",
        className: "container"
    },
    children: [
        {
            tag: "p",
            attr: {},
            children: ["123"]
        },
        {
            tag: "p",
            attr: {},
            children: ["456"]
        }
    ]
}
```

* 整体和单个节点的操作是一致的
* 整体和单个节点的数据结构也保持一致

* 设计原则验证
1. 将整体和单个节点的操作抽象出来
2. 符合开放封闭原则

<br>

### 12.4 享元模式
* 共享内存（主要考虑内存，而非效率）
* 相同的数据，共享使用

```
<!-- 无限下拉列表，将事件代理到高层节点上 -->
<!-- 如果都绑定到`<a>`标签，对内存开销太大 -->
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
    <!-- 无限下拉列表 -->
</div>

<script>
    var div1 = document.getElementById("div1");
    div1.addEventListener("click", function(e) {
        var target = e.target;
        if(e.nodeName === "A") {
            alert(target.innerHTML);
        }
    })
</script>
```

* 设计原则验证
1. 将相同的部分抽象出来
2. 符合开放封闭原则

<br>

### 12.5 策略模式
* 不同策略分开处理
* 避免出现大量 if...else... 或者 switch...case...

> 原代码实现
```
class User {
    constructor(type) {
        this.type = type;
    }
    buy() {
        if(this.type === "ordinary") {
            console.log("普通用户购买");
        } else if(this.type === "member") {
            console.log("会员用户购买");
        } else if(this.type === "vip") {
            console.log("vip 用户购买");
        }
    }
}
```

> 策略模式代码实现  
> 针对不用的用户，设计不用的类，从而解耦用户等级
```
class OrdinaryUser {
    buy() {
        console.log("普通用户购买");
    }
}

class MemberList {
    buy() {
        console.log("会员用户购买");
    }
}

class VipUser {
    buy() {
        console.log("vip 用户购买");
    }
}

var u1 = new OrdinaryUser();
u1.buy();

var u2 = new MemberList();
u2.buy();

var u3 = new VipUser();
u3.buy();

// 测试代码
var u1 = new User("ordinary");
u1.buy();  // 普通用户购买
var u2 = new User("member");
u2.buy(); // 会员用户购买
var u3 = new User("vip");
u3.buy(); // vip 用户购买
```

* 设计原则验证
1. 不同策略，分开处理，而不是混合在一起
2. 符合开放封闭原则

<br>

### 12.6 模板方法模式

<br>

### 12.7 职责连模式

<br>

### 12.8 命令模式模式

<br>

### 12.9 备忘录模式

<br>

### 12.10 中介者模式

<br>

### 12.11 访问者模式

<br>

### 12.12 解释器模式

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
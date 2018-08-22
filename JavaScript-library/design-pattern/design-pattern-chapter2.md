# 设计模式手册 - 2 - 面向对象
> create by **jsliang** on **2018年8月22日11:35:19**  

## 二、面向对象
### 2.1 概念
&emsp;什么是面向对象？大概1000个人有1001个解释。在这里，jsliang也不去做着1001种解释了，你看着烦我写着累，所以咱用大俗话强行解释一通，懂的就过了，不懂的还不查百度/Chrome就是你的过了。  
&emsp;说起面向对象，我们就要结合面向过程来说了。下面我们有一个游戏场景：  

&emsp;**游戏过程：**
1. 皮皮虾打开自己的控制面板，检查了下自己状态；
2. 皮皮虾往画面右边走了两步；
3. 皮皮虾夹了下象拔蚌；
4. 皮皮虾受到了象拔蚌的甩鞭反击；
5. 皮皮虾打开自己的控制面板，检查了下自己状态；
6. 皮皮虾发现状态不对，赶紧逃跑。

&emsp;**面向过程：**
1. 描绘一只皮皮虾，一个象拔蚌，一个战斗场景;
2. 编写弹窗，显示皮皮虾状态;
3. 编写动画，皮皮虾在游戏场景向右移动两步;
4. 编写动画，皮皮虾攻击象拔蚌;
5. 编写动画，象拔蚌攻击皮皮虾;
6. 编写弹窗，弹窗显示皮皮虾状态;
7. 编写动画，皮皮虾退出战斗场景；
8. 编写动画，败北动画。

&emsp;**面向对象：**  
> **准备：**
> * 皮皮虾库。存放了`皮皮虾`的`属性状态`、`动作`……
> * 象拔蚌库。存放了`象拔蚌`的`属性状态`、`动作`……
> * 游戏场景库。存放了`二维坐标`、`移动动画`、`战败场景`、`胜利场景`……
1. 调用了皮皮虾的`属性状态`。
2. 调用了皮皮虾的`属性状态`中的`头像`，调用了游戏场景库中的`移动动画`，传了两个`二位坐标`，皮皮虾从左移到右，顺带调用了皮皮虾的`跑步动作`。
3. 调用了皮皮虾的`攻击动作`，耍出一套降象十八剪。
4. 调用了象拔蚌的`攻击动作`，顺带调用了皮皮虾的`受击动作`。
5. 调用了皮皮虾的`属性状态`。
6. 调用了皮皮虾`败北`的动作，顺带调用了场景库的`战败场景`。

&emsp;你可能会说，不对啊！面向对象还要做准备，这样不是比面向过程更复杂吗？如果你游戏就这么个场景，那么，使用面向对象就得不偿失了，毕竟做准备也要花功夫的。但是，如果你的游戏，还有火影大战海贼王，也是调用同样的游戏场景库，如果你使用面向过程，是不是要复制粘贴或者重新写过，但是面向对象只需要调用已经写好的游戏场景库，从而省下了大笔时间。  
&emsp;这么说你可能还迷糊，说了那么多话，面向对象究竟长啥样？别急，我们代码的世界见：
```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        alert(`${this.name} eat something`);
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

let jsliang = new Person("jsliang");
jsliang.eat();

let JavaScriptLiang = new Person("JavaScriptLiang");
JavaScriptLiang.speak();
```
&emsp;在这段代码中，我们使用了封装了个Person的类（如果小伙伴你仅知道ES5，没见过ES6的语法，建议先去看下ES6），然后，jsliang调用了eat这个吃饭的动作，JavaScriptLiang调用了speak这个说话的动作，下次run()、sleep()这些我们也可以放进去，从而实现每个人都可以有属于自己的一套动作。这就是面向对象写法。  
&emsp;很好，经这么一说，jsliang算是勉强过了一遍什么是面向过程和面向对象了。如果小伙伴还是不懂，嗯，如果你没看到开篇那句话的话，那你还是不懂吧~先跟着jsliang撸一遍面向对象再说！

<br>

### 2.2 三要素
#### 2.2.1 继承
&emsp;继承，简单来说，就是子类继承父类。
```
//父类： 人类Person
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        alert(`${this.name} eat something`);
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`);
    }
}
//子类： 学生Student
class Student extends People {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    study() {
        alert(`${this.name} ID is ${this.id}`);
    }
}

let jsliang = new People("jsliang", 23);
jsliang.speak();

// 在这里，子类学生继承了父类人类，学生既可以调用study()类
// 也可以调用父类中的eat()和speak()
let studentLiang = new Student("jsliang", 18, "003");
studentLiang.study();
studentLiang.eat();
```

#### 2.2.2 封装
&emsp;封装，简单来说，就是数据的权限和保密。  
&emsp;封装有三个关键字：public(完全开放)、protected(对子类开放)、private(对自己开放)。  
&emsp;目前来说，ES6不支持封装，而TypeScript支持。  
```

```

#### 2.2.3 多态
&emsp;多态，同一接口不同实现。

### 2.3 实例


### 2.4 意义

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
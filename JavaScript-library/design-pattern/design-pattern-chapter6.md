# 设计模式手册 - 6 - 装饰器模式
> create by **jsliang** on **2018年8月30日09:54:33**  

## 第六章 装饰器模式
* 为对象添加新功能
* 不改变其原有的结构和功能

> 手机壳可以简单的看做是一个装饰器模式

### 6.1 UML类图
![图](../../public-repertory/img/js-design-pattern-chapter6-1.png)


### 6.2 代码实现
```
class Circle {
    draw() {
        console.log("画一个圆形");
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    draw() {
        this.circle.draw();
        this.setRedBorder(circle);
    }
    setRedBorder() {
        console.log("设置红色边框");
    }
}

// 测试代码
let circle = new Circle();
circle.draw(); // 画一个圆形

let dec = new Decorator(circle);
dec.draw(); 
// 画一个圆形
// 设置红色边框
```

### 6.3 使用场景
* ES7 装饰器： core-decorators

&emsp;ES7装饰器的三个步骤：
* 配置环境：
1. `npm install babel-plugin-transform-decorators-legacy -D`
2. 设置.babelrc配置
```
{
    "presets": [
        "env"
    ],
    "plugins": [
        ["transform-decorators-legacy"]
    ]
}
```
&emsp;然后测试该配置是否生效：
```
// 一个简单的 demo
// @testDec 对 Demo 这个 class 的装饰，装饰的方法就是使用 testDec() 这个函数
@testDec
class Demo {

}
function testDec(target) {
    target.isDec = true;
}
alert(Demo.isDec); // true
```
&emsp;在这里简化下装饰器语法：
```
// 装饰器的原理

@decorator
class A {}

// 等同于
class A {}
A = decorator(A) || A;
```
* 装饰类

&emsp;在这里，我们还可以传参数：
```
// 一个简单的 demo
// @testDec 对 Demo 这个 class 的装饰，装饰的方法就是使用 testDec() 这个函数
@testDec(false)
class Demo {

}

function testDec(isDec) {
    return function(target) {
        target.isDec = isDec;
    }
}
alert(Demo.isDec); // false
```
&emsp;然后，我们再根据mixin进行一个示例
```
function mixins(...list) {
    return function(target) {
        Object.assign(target.prototype, ...list);
    }
}

const Foo = {
    foo() { 
        alert('foo') 
    }
}

@mixins(Foo)
class MyClass {
    
}

let obj = new MyClass();
obj.foo(); // foo
```
* 装饰方法

&emsp;@readonly 只读属性
```
class Person {
    constructor() {
        this.first = "A";
        this.last = "B";
    }

    // 装饰方法
    @readonly
    name() {
        return `${this.first} ${this.last}`
    }
}

function readonly(target, name, descriptor) {
    /**
     * descriptor 属性描述对象 (Object.defineProperty 中会用到)，原来的值如下：
     * {
     *   value: specifiedFunction,
     *   enumerable: false,
     *   configurable: true,
     *   writable: true
     * }
     */
    descriptor.writable = false;
    return descriptor;
}

var p = new Person();
console.log(p.name()); // A B
// 如果设置 p.name = function() {}; 这样子就会报错，因为 name 被我们设置为只读属性
```
&emsp;例子2：
```
class Math {
    // 装饰方法
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this.arguments);
    };

    return descriptor;
}

const math = new Math();
const result = math.add(2, 4); // 执行 add 时，会自动打印日志，因为有 @log 装饰器
console.log("result", result);
/**
 * Calling add with Arguments(2) [2, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
 * result NaN
 */
```

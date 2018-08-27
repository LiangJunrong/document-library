# 设计模式手册 - 4 - 单例模式
> create by **jsliang** on **2018年8月27日09:15:18**  

## 第四章 单例模式
* 系统中被唯一使用
* 一个类只有一个实例
* 单例模式中需要用到private，而ES6中没有private，所以需要TypeScript

<br>

### 4.1 代码实现
```
class SingleObject {
    login() {
        console.log("login...");
    }
}
SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if(!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})()

// 测试：注意这里只能使用静态函数 getInstance ，不能 new SingleObject() !!!
let obj1 = SingleObject.getInstance();
obj1.login(); // login...
let obj2 = SingleObject.getInstance();
obj2.login(); // login...
console.log(obj1 == obj2); // true （两者必须完全相等）
```

<br>

### 4.2 使用场景
* jQuery 只有一个 `$` ，这就是单例模式的一个例子
* 登录框
* 购物车
* vuex 和 redux 中的 store

> jQuery单例模式
```
// jQuery 只有一个 '$'
if (window.jQuery != null) {
    return window.jQuery;
} else {
    // 初始化
}
```
> 如果引用了jQuery，那就不做任何操作；如果没有引用，那就初始化引用。

> 登录框模拟
```
class LoginForm {
    constructor() {
        this.state = "hide";
    }
    show() {
        if(this.state === "show") {
            alert("已经显示");
            return;
        }
        this.state = "show";
        console.log("登录框显示成功");
    }
    hide() {
        if(this.state === "hide") {
            alert("已经隐藏");
            return;
        }
        this.state = "hide";
        console.log("登录框隐藏成功");
    }
}
LoginForm.getInstance = (function() {
    let instance;
    return function() {
        if(!instance) {
            instance = new LoginForm();
        }
        return instance;
    }
})();

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.hide();

console.log("login1 === login2", login1 === login2); // login1 === login2 true
```

<br>

### 4.3 设计原则验证
* 符合单一职责原则，只实例化唯一的对象
* 没法具体开放封闭原则，但是绝对不违反开放封闭原则
设计模式手册 - 4 - 单例模式
===

> create by **jsliang** on **2018年8月27日09:15:18**  
> Recently revised in **2019-05-20 17:58:32**

## 第四章 单例模式
* 系统中被唯一使用
* 一个类只有一个实例
* 单例模式中需要用到private，而ES6中没有private，所以需要TypeScript

<br>

### 4.1 代码实现

```js
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

```js
// jQuery 只有一个 '$'
if (window.jQuery != null) {
    return window.jQuery;
} else {
    // 初始化
}
```

> 如果引用了jQuery，那就不做任何操作；如果没有引用，那就初始化引用。

> 登录框模拟

```js
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

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

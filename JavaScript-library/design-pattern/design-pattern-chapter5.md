# 设计模式手册 - 5 - 适配器模式
> create by **jsliang** on **2018年8月27日09:15:18**  

## 第五章 适配器模式
* 旧接口格式和使用者不兼容
* 中间加一个适配转换接口

<br>

### 5.1 UML类图
![图](../../public-repertory/img/js-design-pattern-chapter5-1.png)

<br>

### 5.2 代码实现
```
class Adaptee {
    specificRequest() {
        return "德国标准的插头";
    }
}
class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }
    request() {
        let info = this.adaptee.specificRequest();
        return `${info} -> 转换器 -> 中国标准的插头`;
    }
}

// 测试
let target = new Target();
console.log(target.request()); // 德国标准的插头 -> 转换器 -> 中国标准的插头
```

### 5.3 使用场景
* 封装旧接口
* vue computed

> 封装旧接口
```
// 自己封装的 ajax ，使用方式如下：
ajax({
    url: 'getData',
    type: 'Post',
    dataType: 'json',
    data: {
        id: '123'
    }
}).done(function() {

})

// 由于历史原因，代码中全都是：
// $.ajax({...})

// 做一层适配器
var $ = {
    ajax: function(options) {
        return this.ajax(options);
    }
}
```

> vue computed
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue Computed</title>
</head>
<body>
    <div id="app">
        <p>顺序： {{message}}</p>
        <p>逆序： {{reversedMessage}}</p>
    </div>

    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                message: "hello"
            },
            computed: {
                reversedMessage: function() {
                    return this.message.split('').reverse().join('');
                }
            }
        })
    </script>
</body>
</html>
```

<br>

### 5.4 设计原则验证
* 将旧接口和使用者进行分离
* 符合开放封闭原则
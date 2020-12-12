设计模式
===

> Create by **jsliang** on **2020-09-01 21:06:48**  
> Recently revised in **2020-12-12 15:49:33**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 面向对象](#chapter-three) |
| &emsp;[3.1 封装](#chapter-three-one) |
| &emsp;[3.2 继承](#chapter-three-two) |
| &emsp;&emsp;[3.2.1 ES5 写法](#chapter-three-two-one) |
| &emsp;&emsp;[3.2.2 ES6 写法](#chapter-three-two-two) |
| &emsp;[3.3 多态](#chapter-three-three) |
| &emsp;&emsp;[3.3.1 ES5 写法](#chapter-three-three-one) |
| &emsp;&emsp;[3.3.2 ES6 写法](#chapter-three-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 设计原则](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 工厂模式](#chapter-five) |
| &emsp;[5.1 ES5 写法](#chapter-five-one) |
| &emsp;[5.2 ES6 写法](#chapter-five-two) |
| &emsp;[5.3 小结](#chapter-five-three) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 单例模式](#chapter-six) |
| &emsp;[6.1 ES5 写法](#chapter-six-one) |
| &emsp;[6.2 ES6 写法](#chapter-six-two) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 代理模式和中介者模式](#chapter-seven) |
| &emsp;[7.1 代理模式](#chapter-seven-one) |
| &emsp;[7.2 中介者模式](#chapter-seven-two) |
| &emsp;[7.3 小结](#chapter-seven-three) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 发布订阅模式](#chapter-eight) |
| &emsp;[8.1 观察者模式举例](#chapter-eight-one) |
| &emsp;[8.2 Object.defineProperty 和 Proxy](#chapter-eight-two) |
| &emsp;[8.3 小结](#chapter-eight-three) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 参考文献](#chapter-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

设计模式是一门学问，它里面有 22+ 种类的设计模式。

淡淡忧伤：你尽管学，过几个月忘了回来再看看你还懂不懂。

前端面试中，常见的你可以回答的设计模式如下：

| 设计模式 | 描述 | 例子 |
| --- | --- | --- |
| 单例模式 | 一个类只能构造出一个唯一实例 | Redux/Vuex 的 Store |
| 工厂模式 | 对创建对象逻辑的封装 | jQuery 的 `$(selector)` |
| 观察者模式 | 当一个对象被修改时，会自动通知它的依赖对象 | Redux 的 `subsrcibe`、Vue 的双向绑定 |
| 装饰器模式 | 对类的包装，动态地扩展类的功能 | React 的高阶组件、ES7 装饰器 |
| 适配器模式 | 兼容新旧接口，对类的包装 | 封装旧 API |
| 代理模式 | 控制对象的访问 | 事件代理、ES6 的 `Proxy` |

当然，如果你还了解其他，那就更好了~

## <a name="chapter-three" id="chapter-three"></a>三 面向对象

> [返回目录](#chapter-one)

在开始复习设计模式之前，我们回顾下面向对象。

什么是面向对象，我们可以和面向过程比对一下：

* **面向过程**：关注的是过程中的每一个环节
  * 吃蛋炒饭（单身狗版）：买鸡蛋 → 买米 → 蒸米 → 炒蛋 → 炒米 → 混合 → 搅拌 → 蛋炒饭
* **面向对象**：关注的是让对象做事情
  * 吃蛋炒饭（情侣版）：找一个对象，做蛋炒饭，你吃蛋炒饭

现实可能不会扎你的心，但是 **jsliang** 会。

> **jsliang** 也是单身汪，所以扎你们前先扎了自己，不慌，一起扎心

​面向对象（Object Oriented Programming，简称 OOP），是一种编程开发思想。

它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。

1. 现实需求（盖大楼）
2. 需要哪些对象（设计师、搬运工、砌墙师、木匠、导购…）
3. 分工与合作
4. 完成项目

这就好比你要完成一个项目，你可以会配置 Webpack + Babel，并且用上 React 和 Ant Design。

那么 Webpack 由什么组成呢，你又可以将其拆分开，填充一个一个 `loader` 和 `plugin`，最终由一个个小组件组合成一个项目。

简单来说：面向对象关心的不是过程，关心的是哪个部分找谁来完成。

面向对象有三大特性：**封装、基础和多态**，下面我们一一介绍。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 封装

> [返回目录](#chapter-one)

假设我们需要判断目标类型：

> 面向过程写法

```js
// 今天 A 找你判断下类型
const A = 'jsliang';
const AType = Object.prototype.toString.call(A);
console.log(AType); // [object String]

// 明天 B 找你判断下类型
const B = 25;
const BType = Object.prototype.toString.call(B);
console.log(BType); // [object Number]

// 后天 C 找你判断下类型
const C = { obj: 'girl' };
const CType = Object.prototype.toString.call(C);
console.log(CType); // [object Object]
```

这就好比今天亲戚 A 找你办事，明天亲戚 B 找你办事，后天亲戚 C 找你办事，但是他们要你帮忙做的是查一下某某明星。

烦不烦，为啥别家亲戚是介绍相亲，你家亲戚是介绍明星。

于是你想了个法子：

> 面向对象写法

```js
// 判断类型
const getType = (obj) => Object.prototype.toString.call(obj);

// 今天 A 找你判断下类型
const A = 'jsliang';
console.log(getType(A)); // [object String]

// 明天 B 找你判断下类型
const B = 25;
console.log(getType(B)); // [object Number]

// 后天 C 找你判断下类型
const C = { obj: 'girl' };
console.log(getType(C)); // [object Object]
```

当你让亲戚用你写的 “千度” 软件去查找之后，世界瞬间安静了，恭喜你完成了宅男的特性的维护。

咳咳，话回正题，其实这就是封装了。

想必看到这里小伙伴也不会陌生，日常工作中，碰到出现多次的代码，一般都会采取封装方式将代码抽取出来。

**封装的好处**：封装的优势在于定义只可以在类内部进行对属性的操作，外部无法对这些属性指手画脚，要想修改，也只能通过你定义的封装方法。

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 继承

> [返回目录](#chapter-one)

离职期间，**jsliang** 每天晚上因为找不到工作而疲惫的时候，都会幻想我老爸是千万富翁，其实让我工作只是为了让我能承受考验，最后是要回家继承资产的~

没错，这个继承和你想的继承差不多，就是有一个方法 `Father`，然后 `Children` 继承 `Father` 账目上的内容。

注意是账目上，就是说 `Father` 的静态属性和静态方法并不会继承，就好比你继承资产就够了，不需要继承父辈的不良嗜好（抽烟喝酒）。

哆嗦无益，咱看代码。

#### <a name="chapter-three-two-one" id="chapter-three-two-one"></a>3.2.1 ES5 写法

> [返回目录](#chapter-one)

ES5 写继承的话，这里来一个手写继承的方式吧，用的是 **寄生组合式继承**。

```js
const Father = function (name, like) {
  this.name = name;
  this.like = like;
  this.money = 10000000;
};

Father.prototype.company = function() {
  console.log(`${this.name} 有 ${this.money} 元`);
}

const Children = function (name, like) {
  Father.call(this);
  this.name = name;
  this.like = like;
}

Children.prototype = Object.create(Father.prototype);
Children.prototype.constructor = Children;

const jsliang = new Children('jsliang', '学习');
console.log(jsliang); // Children {name: "jsliang", like: "学习", money: 10000000}
jsliang.company(); // jsliang 有 10000000 元
```

这是一个面试考点，就是考你能不能手写继承。

当然还有其他的继承方式，这是 **jsliang** 找到的一个较为完善的继承方法。

#### <a name="chapter-three-two-two" id="chapter-three-two-two"></a>3.2.2 ES6 写法

> [返回目录](#chapter-one)

```js
class Father {
  constructor(name, like) {
    this.name = name;
    this.like = like;
    this.money = 10000000;
  }
  company() {
    console.log(`${this.name} 有 ${this.money} 元`);
  }
  // 静态方法并不会继承，并且可以通过类名调用
  static smoke() {
    console.log(`${this.name} 喜欢抽烟`);
  }
}

Father.smoke(); // Father 喜欢抽烟

class Children extends Father {
  constructor(name, like) {
    super();
    this.name = name;
    this.like = like;
  }
}

const jsliang = new Children('jsliang', '学习');
console.log(jsliang); // Children {name: "jsliang", like: "学习", money: 10000000}
jsliang.company(); // jsliang 有 10000000 元
jsliang.smoke(); // TypeError: jsliang.smoke is not a function
```

**特别提醒**：继承会继承父类的实例属性和实例方法，并不会继承静态属性和静态方法，并且静态方法只能通过类名去调用。

**继承的好处**：继承减少了代码的冗余，省略了很多重复代码，开发者可以从父类底层定义所有子类必须有的属性和方法，以达到耦合的目的；

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 多态

> [返回目录](#chapter-one)

多态，可以简单理解为继承过来并对其有自己的理解。

多态具体表现为方法重载和方法重写：

* **方法重载**：重载是指不同的函数使用相同函数名，但是函数的参数个数或者类型不同。调用的时候根据函数的参数来区分不同的函数。
* **方法重写**：重写（也叫覆盖）是指派生类中重新对基类中的虚函数重新实现。即函数名和参数都一样，只是函数的实现体不一样。

下面我们来个多态之 **方法重写** 的 ES5 和 ES6 写法。

#### <a name="chapter-three-three-one" id="chapter-three-three-one"></a>3.3.1 ES5 写法

> [返回目录](#chapter-one)

```js
const Father = function (name, like) {
  this.name = name;
  this.like = like;
  this.money = 10000000;
};

Father.prototype.company = function() {
  console.log(`${this.name} 有 ${this.money} 元`);
}

const Children = function (name, like) {
  Father.call(this);
  this.name = name;
  this.like = like;
  this.money = 10000;
}

Children.prototype = Object.create(Father.prototype);
Children.prototype.constructor = Children;
Children.prototype.company = function() {
  console.log(`${this.name} 有 ${this.money} 元`);
}

const father = new Father('jsliang 的老爸', '学习');
console.log(father); // Father { name: 'jsliang 的老爸', like: '学习', money: 10000000 }
father.company(); // jsliang 的老爸 有 10000000 元

const jsliang = new Children('jsliang', '学习');
console.log(jsliang); // Children { name: 'jsliang', like: '学习', money: 10000 }
jsliang.company(); // jsliang 有 10000 元
```

#### <a name="chapter-three-three-two" id="chapter-three-three-two"></a>3.3.2 ES6 写法

> [返回目录](#chapter-one)

```js
class Father {
  constructor(name, like) {
    this.name = name;
    this.like = like;
    this.money = 10000000;
  }
  company() {
    console.log(`${this.name} 有 ${this.money} 元`);
  }
}

class Children extends Father {
  constructor(name, like) {
    super();
    this.name = name;
    this.like = like;
    this.money = 10000;
  }
  company() {
    console.log(`${this.name} 有 ${this.money} 元`);
  }
}

const father = new Father('jsliang 的老爸', '抽烟');
console.log(father); // Father { name: 'jsliang 的老爸', like: '抽烟', money: 10000000 }
father.company(); // jsliang 的老爸 有 10000000 元

const jsliang = new Children('jsliang', '学习');
console.log(jsliang); // Children { name: 'jsliang', like: '学习', money: 10000 }
jsliang.company(); // jsliang 有 10000 元
```

果然做 “工程师” 是没有前途的，做梦才是。

你看要个点赞和 Github star，弹幕评论区全是 “下次一定”。

---

硬核广告，如果小伙伴需要联系 **jsliang**，可以到 GitHub 首页找到联系方式：

* [Github](https://github.com/LiangJunrong/document-library)

---

**多态的好处**：多态实现了方法的个性化，不同的子类根据具体状况可以实现不同的方法，光有父类定义的方法不够灵活，遇见特殊状况就捉襟见肘了。

## <a name="chapter-four" id="chapter-four"></a>四 设计原则

> [返回目录](#chapter-one)

设计模式有 6 大原则：单一职责原则、里氏替换原则、依赖倒置原则、接口隔离原则、迪米特原则、开放封闭原则。

当然，我们不是 “职业” 的，我们就是面向面试的，所以记住两个原则即可：

* **单一职责原则**：一个类只负责一个功能领域中的相应职责。或者：就一个类而言，只有一个引起它变化的原因。
* **开放封闭原则**：核心的思想是软件实体（类、模块、函数等）是可扩展的、但不可修改的。也就是说，对拓展是开放的，对修改是封闭的。

下面我们开始逐个介绍设计模式。

## <a name="chapter-five" id="chapter-five"></a>五 工厂模式

> [返回目录](#chapter-one)

在日常生活中，我们知道有果糖工厂、塑料工厂。

而设计模式中的工厂模式，也是如此。

工厂模式是 JavaScript 中最常用的一种用于创建对象的设计模式，其核心就是将逻辑封装在一个函数中不暴露创建对象的具体逻辑。

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 ES5 写法

> [返回目录](#chapter-one)

```js
const Person = function() {
  const [name, age, sex] = [...arguments];
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.sayName = () => {
    console.log(`我叫 ${this.name}，性别 ${this.sex}，今年 ${this.age}`);
  }
};

const p1 = new Person('jsliang', 25, '男');
const p2 = new Person('靓女', 25, '女');

p1.sayName(); // 我叫 jsliang，性别 男，今年 25
p2.sayName(); // 我叫 靓女，性别 女，今年 25
```

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 ES6 写法

> [返回目录](#chapter-one)

```js
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  sayName() {
    console.log(`我叫 ${this.name}，性别 ${this.sex}，今年 ${this.age}`);
  }
}

const p1 = new Person('jsliang', 25, '男');
const p2 = new Person('靓女', 25, '女');

p1.sayName(); // 我叫 jsliang，性别 男，今年 25
p2.sayName(); // 我叫 靓女，性别 女，今年 25
```

### <a name="chapter-five-three" id="chapter-five-three"></a>5.3 小结

> [返回目录](#chapter-one)

工厂模式是为了解决多个类似对象声明的问题，也就是为了解决实列化对象产生重复的问题。

工厂模式的优缺点如下：

* **优点**：能解决多个相似的问题。
* **缺点**：不能知道对象识别的问题（对象的类型不知道）

## <a name="chapter-six" id="chapter-six"></a>六 单例模式

> [返回目录](#chapter-one)

单例模式即一个类只能构造出唯一实例，单例模式的意义在于共享、唯一， Redux/Vuex 中的 `Store`、jQuery 的 `$` 或者业务场景中的购物车、登录框都是单例模式的应用。

### <a name="chapter-six-one" id="chapter-six-one"></a>6.1 ES5 写法

> [返回目录](#chapter-one)

```js
const Single = function (name, password) {
  this.name = name;
  this.password = password;
};

Single.prototype.login = (name, password) => {
  if (!this.only) {
    this.only = new Single(name, password);
  }
  return this.only;
};

let user1 = new Single().login('jsliang', '123456');
let user2 = new Single().login('zhazhaliang', '654321');

console.log(user1 === user2); // true
console.log(user1); // Single { name: 'jsliang', password: '123456' }
console.log(user2); // Single { name: 'jsliang', password: '123456' }
```

### <a name="chapter-six-two" id="chapter-six-two"></a>6.2 ES6 写法

> [返回目录](#chapter-one)

```js
class SingletonLogin {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  static getInstance(name, password) {
    // 判断对象是否已经被创建,若创建则返回旧对象
    if (!this.instance) {
      this.instance = new SingletonLogin(name, password);
    }
    return this.instance;
  }
}

let obj1 = SingletonLogin.getInstance('jsliang', '123456')
let obj2 = SingletonLogin.getInstance('zhazhaliang', '654321')

console.log(obj1 === obj2)    // true
console.log(obj1)           // SingletonLogin { name: 'jsliang', password: '123456' }
console.log(obj2)           // SingletonLogin { name: 'jsliang', password: '123456' }
```

## <a name="chapter-seven" id="chapter-seven"></a>七 代理模式和中介者模式

> [返回目录](#chapter-one)

下面我们将代理模式和中介者模式：

* **代理模式**：代理模式强调的是个体。将原类（原方法体）进行封装，客户端只需要与代理进行交流，代理就是原类的一个替身。简而言之就是用一个对象代表另外一个对象。
* **中介模式**：中介模式强调的是互相独立。定义一个中介对象来封装系列对象之间的交互。中介者使各个对象不需要显示地相互引用，从而使其耦合性松散，而且可以独立地改变他们之间的交互。

OK，下面我们通过代码理解下代理模式和中介者模式吧~

### <a name="chapter-seven-one" id="chapter-seven-one"></a>7.1 代理模式

> [返回目录](#chapter-one)

代码模式就是：

**jsliang** 要给心动女孩送花，然后 **jsliang** 不好意思，所以他摆脱他的好哥们帮忙送花，这个代理人就是好哥们。

```js
// 心动女孩
const Girl = function() {
  this.name = '心动女孩';
  this.get = (person, gift) => {
    console.log(`${person} 送给 ${this.name} ${gift}`);
  };
}

// jsliang
const JSLiang = function() {
  this.name = 'jsliang';
  this.send = () => {
    return '99 朵玫瑰';
  }
}

// 好哥们
const Friend = function(getUser) {
  this.getUser = new getUser();
  this.jsliang = new JSLiang();
  this.run = () => {
    this.getUser.get(this.jsliang.name, this.jsliang.send());
  }
};

// 好哥们帮忙给不同妹子送礼物
const friend = new Friend(Girl);
friend.run(); // jsliang 送给 心动女孩 99 朵玫瑰
```

哎，形象全没，**jsliang** 见一个爱一个，好哥们不得跑断腿，哈哈。

**代理模式适用场景**：

代理模式的适用场景是图片的预加载，在预加载过程中，图片未加载完毕之前，用一个 `loading` 作为图片的占位符，等待加载完毕之后再进行赋值。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>代理模式</title>
</head>

<body>
  <div class="animation">动画元素</div>

  <script>
    window.onload = function () {
      var myImage = (function () {
        var imgNode = document.createElement("img");
        document.body.appendChild(imgNode);
        return {
          setSrc: function (src) {
            imgNode.src = src;
          }
        }
      })();
      // 代理模式
      var ProxyImage = (function () {
        var img = new Image();
        img.onload = function () {
          myImage.setSrc(this.src);
        };
        return {
          setSrc: function (src) {
            myImage.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603709264332&di=f6f8e48c1c88bf640aac9899df98a97c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20171107%2F643ceb1031394c5887d3509b31878c52.gif");
            setTimeout(() => {
              img.src = src;
            }, 3000);
          }
        }
      })();
      // 调用方式
      ProxyImage.setSrc("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3592308877,3684082784&fm=26&gp=0.jpg");
    };
  </script>
</body>

</html>
```

### <a name="chapter-seven-two" id="chapter-seven-two"></a>7.2 中介者模式

> [返回目录](#chapter-one)

那么什么是中介者模式呢？

就是当好哥们想赚外快的时候，想起他曾经帮 **jsliang** 跑过腿，那么他也可以帮其他人跑腿啊，于是好哥们变成了中间商，成立了快递公司。

```js
// 心动女孩
const Girl = function() {
  this.name = '心动女孩';
  this.get = (person, gift) => {
    console.log(`${person} 送给 ${this.name} ${gift}`);
  };
}

// jsliang
const JSLiang = function() {
  this.name = 'jsliang';
  this.send = () => {
    return '99 朵玫瑰';
  }
}

// 快递公司
const Express = function(postUser, getUser) {
  this.postUser = new postUser();
  this.getUser = new getUser();
  this.run = () => {
    this.getUser.get(this.postUser.name, this.postUser.send());
  }
};

// 快递员
const courier = new Express(JSLiang, Girl);
courier.run(); // jsliang 送给 心动女孩 99 朵玫瑰
```

很简单嘛，假设 **jsliang** 喜欢的女孩不在广州，那么就需要别人 “帮忙” 将礼物送给异地 girl。

而这种模式，就是中介者模式，作为一个中间人传递信息。

从中可以看出代理模式的好处：

1. 代理对象可以代替本体被实例化，并使其可以被远程访问
2. 可以把本体实例化推迟到真正需要的时候。

当然，有好就有坏，在代码中使用代理模式，这个中介会承担较多的责任，一旦中介（快递员）病了，那么你的花就送达不了了。

同样，现实中，如果你真喜欢那妹子，还是当面去送吧，没听过 “每天收到花的女孩最后和快递员结婚了么！”

**中介者模式适用场景**：

```js
var goods = {
  // 手机库存
  "red|32G": 3,
  "red|64G": 1,
  "blue|32G": 7,
  "blue|32G": 6,
};

// 中介者
var mediator = (function () {
  var colorSelect = document.getElementById("colorSelect");
  var memorySelect = document.getElementById("memorySelect");
  var numSelect = document.getElementById("numSelect");
  return {
    changed: function (obj) {
      switch (obj) {
        case colorSelect:
          // TODO
          break;
        case memorySelect:
          // TODO
          break;
        case numSelect:
          // TODO
          break;
      }
    },
  };
})();
colorSelect.onchange = function () {
  mediator.changed(this);
};
memorySelect.onchange = function () {
  mediator.changed(this);
};
numSelect.onchange = function () {
  mediator.changed(this);
};
```

### <a name="chapter-seven-three" id="chapter-seven-three"></a>7.3 小结

> [返回目录](#chapter-one)

这里将代理模式和中介者模式放在一块，相信小伙伴们也看到了，是有缘故的。

但是实际工作中会不会常用代理模式和中介者模式，**jsliang** 不知道，因为真没试过，可能某些场景试过，但是不会往这方面想。

以后工作有机会再留意留意吧，至于面试中有没可能问？这里也不知道，因为这是非热点，小伙伴们了解了解即可~

## <a name="chapter-eight" id="chapter-eight"></a>八 发布订阅模式

> [返回目录](#chapter-one)

发布-订阅模式又叫观察者模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。

看完定义有点懵？

现实生活中的发布-订阅模式，就好比 **jsliang** 在网上看中一双鞋子，但是没货了，于是点击（订阅）了卖家的发货通知。等卖家有货之后，所有点击（订阅）了发货通知的买家，都会看到通知。

发布-订阅模式的优缺点：

* **优点**

1. 支持简单的广播通信。当对象状态发生改变时，会自动通知已经订阅过的对象，例如上面的举例。
2. 发布者与订阅者的耦合性降低。我是卖家我并不关心有多少人订阅了，我只要到货的时候，将货物数量更改下就行了。

* **缺点**

1. 耗时耗内存。创建订阅者需要消耗一定的时间和内存
2. 过度使用不好维护。

OK，说了那么多，我们举个代码小例子，然后讲讲 Vue 中的 `Object.defineProperty` 和 `Proxy` 使用。

### <a name="chapter-eight-one" id="chapter-eight-one"></a>8.1 观察者模式举例

> [返回目录](#chapter-one)

```js
// 定义发布者
const seller = {};

// 缓存列表：存放订阅者的回调函数
seller.buyerList = [];

// 订阅方法
seller.listen = (user, fn) => {
  // 如果有人订阅了，那就将它存放到缓存列表中
  seller.buyerList.push(fn);
  console.log(`亲爱的 ${user}，你已经订阅了新鞋发布`);
}

// 发布信息
seller.trigger = () => {
  const buyerList = seller.buyerList;
  for (let i in buyerList) {
    if (buyerList.hasOwnProperty(i)) {
      buyerList[i].call(this);
    }
  }
}

const buyer1 = seller.listen('jsliang', () => console.log('颜色是黑色，尺码是 43 码')); // 亲爱的 jsliang，你已经订阅了新鞋发布
const buyer2 = seller.listen('zhazhaliang', () => console.log('颜色是红色，尺码是 44 码')); // 亲爱的 zhazhaliang，你已经订阅了新鞋发布

// 假设 2 秒后到货
setTimeout(() => {
  seller.trigger();
}, 2000);

// 颜色是黑色，尺码是 43 码
// 颜色是红色，尺码是 44 码
```

这样就实现了简单的发布-订阅模式，如果卖家有不同商品，两个用户分别关注两个不同商品要怎么实现呢？小伙伴们可以思考思考。

### <a name="chapter-eight-two" id="chapter-eight-two"></a>8.2 Object.defineProperty 和 Proxy

> [返回目录](#chapter-one)

在 Vue 2.0 版本，我们通过 `Object.defineProperty` 来观察数据：

```js
const person = {
  name: 'jsliang',
  age: 25,
};

Object.keys(person).forEach((key) => {
  Object.defineProperty(person, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      console.log('get');
    },
    set: (newName) => {
      console.log(newName);
    },
  });
});

person.name = 'zhazhaliang'; // zhazhaliang
console.log(person); // { name: [Getter/Setter], age: [Getter/Setter] }
```

其中：

* `enumerable`：对象属性是否可通过 `for-in` 循环，`false` 为不可循环，默认值为 `true`。
* `configurable`：能否使用 ·、能否需改属性特性、或能否修改访问器属性，`false` 为不可重新定义，默认值为 `true`。

那么，我们再来看看 `Proxy`：

```js
const queuedObserver = new Set();

const observe = fn => queuedObserver.add(fn);
const observeable = obj => new Proxy(obj, {set});

const set = function(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObserver.forEach(observer => observer());
  return result;
};

const person = observeable({
  name: 'jsliang',
  age: 25,
});

const print = () => {
  console.log(`姓名：${person.name}，年龄：${person.age}`);
}
observe(print);

person.name = 'zhazhaliang'; // 姓名：zhazhaliang，年龄：25
```

那么，为什么 Vue 3.0 要换成 `Proxy` 呢？

> 注意听讲，这是面试题~

`Object.defineProperty` 缺点：

1. 不能监听数组变化
2. 必须遍历对象每个属性

而 `Proxy` 的目标是对象，这样就省去了属性的遍历。

至于更深入的了解，譬如如何在页面中敲一个，让页面和数据绑定，这里就不哆嗦了，感兴趣的小伙伴们可以看 **jsliang** 另一个库：

* [all-for-one 你感兴趣的这里全都有](https://github.com/LiangJunrong/all-for-one)

### <a name="chapter-eight-three" id="chapter-eight-three"></a>8.3 小结

> [返回目录](#chapter-one)

需要指正一点的是，`ES6 Proxy` 在模式上属于代理模式。

日常工作中，常见的观察者模式有：

* `Promise`
* Node 的 `EventEmitter` 事件监听器
* Vue 的 `Watch` 声明周期钩子

## <a name="chapter-night" id="chapter-night"></a>九 参考文献

> [返回目录](#chapter-one)

本系列参考 14 篇文章。

* [x] [设计模式](https://juejin.im/post/6844904116552990727#heading-59)【阅读建议：1h】
* [x] [Javascript常用的设计模式详解](https://www.cnblogs.com/tugenhua0707/p/5198407.html)【阅读建议：1h】
* [x] [JavaScript设计模式](https://juejin.im/post/59df4f74f265da430f311909)【阅读建议：20min】
* [x] [JavaScript 中常见设计模式整理](https://juejin.im/post/5afe6430518825428630bc4d)【阅读建议：1h】
* [x] [JavaScript 常见设计模式解析](https://juejin.im/post/58f4c702a0bb9f006aa80f25)【阅读建议：20min】
* [x] [深入 JavaScript 设计模式，从此有了优化代码的理论依据](https://juejin.im/post/5d58ca046fb9a06ad0056cc7)【阅读建议：30min】
* [x] [设计模式之美-前端](https://zhuanlan.zhihu.com/p/111553641)【阅读建议：1h】
* [x] [发布订阅模式，在工作中它的能量超乎你的想象](https://juejin.im/post/6844903616172539917)【阅读建议：30min】
* [x] [使用原生 JavaScript 构建状态管理系统](https://juejin.im/post/6844903660804112391)【阅读建议：20min】
* [x] [外观模式、代理模式和中介者模式的区别](https://blog.csdn.net/cjxunooo/article/details/84985679)【阅读建议：1min】
* [x] [【设计模式】外观模式&代理模式&中介者模式的区别](https://www.cnblogs.com/wangke-tech/p/11894067.html)【阅读建议：3min】
* [x] [Proxy 与Object.defineProperty介绍与对比](https://www.jianshu.com/p/d16565c6b6ee)【阅读建议：10min】
* [x] [Proxy和defineProperty实现数据观察（观察者模式）](https://www.haorooms.com/post/data_proxy_defineproperty)【阅读建议：20min】
* [x] [Proxy观察者模式以及Object.defineProperty的缺点](https://blog.csdn.net/qq_39689241/article/details/95351710)【阅读建议：3min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

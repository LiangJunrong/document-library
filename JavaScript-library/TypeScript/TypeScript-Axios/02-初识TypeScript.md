02 - 初识 TypeScript
===

> Create by **jsliang** on **2020-3-3 07:49:30**  
> Recently revised in **2020-03-05 16:38:20**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 TypeScript 的特点](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 安装 TypeScript](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 快速入门](#chapter-five) |
| &emsp;[5.1 编译代码](#chapter-five-one) |
| &emsp;[5.2 报错提示](#chapter-five-two) |
| &emsp;[5.3 类型注解](#chapter-five-three) |
| &emsp;[5.4 接口](#chapter-five-four) |
| &emsp;[5.5 类](#chapter-five-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 总结](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

TypeScript 作为 JavaScript 语言的超集，它为 JavaScript 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。

同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。

## <a name="chapter-three" id="chapter-three"></a>三 TypeScript 的特点

> [返回目录](#chapter-one)

TypeScript 主要有 3 大特点：

* 始于 JavaScript，归于 JavaScript

TypeScript 可以编译出纯净、简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中以及任何支持 ECMAScript 3（或者更高版本）的 JavaScript 引擎中。

* 强大的工具构建大型应用

类型允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作。比如静态检查和代码重构。

类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。

类型让你定义软件组件之间的接口和洞察现有 JavaScript 库的行为。

* 先进的 JavaScript

TypeScript 提供最新的不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript（ES6）和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

这些特性在高可信应用程序开发时事可用的，但是会被编译成简洁的 ECMAScript3（或更高版本）的 JavaScript。

总结：TypeScript 在社区的流行度度越来越高，它非常适用于一些大型项目，也非常适用于一些基础库，极大地帮助我们提升了开发效率和体验。

## <a name="chapter-four" id="chapter-four"></a>四 安装 TypeScript

> [返回目录](#chapter-one)

1. 安装 Node.js
2. 安装 TypeScript：`npm i typescript -g`
3. 查看版本：`tsc -V`（Version 3.8.3）

## <a name="chapter-five" id="chapter-five"></a>五 快速入门

> [返回目录](#chapter-one)

在这部分，我们会通过下面 4 点来进行快速了解：

* 编译代码
* 报错提示
* 类型注解
* 接口
* 类

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 编译代码

> [返回目录](#chapter-one)

新建文件夹 `ts-axios`，在里面建立一个 `index.ts`：

> ts-axios/index.ts

```ts
function sayHello(person) {
  return 'Hello ' + person;
}

const user = 'jsliang';

console.log(sayHello(user));
```

然后对该文件进行编译：

```shell
tsc index.ts
```

这时候文件夹 `ts-axios` 下会添加一个文件：

* `ts-axios/index.js`

打开看到：

```js
function sayHello(person) {
    return 'Hello ' + person;
}
var user = 'jsliang';
console.log(sayHello(user));

```

看不出有啥变化？那试试 ES6 语法：

> ts-axios/index.ts

```ts
const getName = (s, n) => {
	return s.split(' ').findIndex(item => item === n);
}

const str = 'I\' m jsliang';
const user = 'jsliang';

console.log(getName(str, user));
```

通过 `tsc index.ts` 编译文件后，生成 `index.js` 文件如下：

> ts-axios/index.js

```js
var getName = function (s, n) {
    return s.split(' ').findIndex(function (item) { return item === n; });
};
var str = 'I\' m jsliang';
var user = 'jsliang';
console.log(getName(str, user));

```

可以看出 ES6 的箭头函数语法变成了 ES5 的函数方法，当然，不止如此，下面我们会逐步探索了解。

### <a name="chapter-five-two" id="chapter-five-two"></a>5.2 报错提示

> [返回目录](#chapter-one)

在进一步了解 TypeScript 特性之前，我们有必要了解下 TypeScript 的报错机制：

> ts-axios/index.ts

```ts
function sayHello(person: string) {
  return 'Hello ' + person;
}

console.log(sayHello([1, 2, 3]));
```

通过 `tsc index.ts` 编译后发现控制台提示：

```shell
index.ts:5:22 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

5 console.log(sayHello([1, 2, 3]));
                       ~~~~~~~~~

Found 1 error.
```

可以看出我们期望的是 `string` 字符串类型，但是我们传递了 `number[]` 数字数组类型，所以 TypeScript 给我们进行了报错提醒。

当然，虽然编译报错了，但是 TypeScript 会如实打包。

> ts-axios/index.jw

```js
function sayHello(person) {
    return 'Hello ' + person;
}
console.log(sayHello([1, 2, 3]));

```

当然，我们还是希望自己能重视控制台的报错提示，去修复它，从而减少我们开发过程中出现的问题。

### <a name="chapter-five-three" id="chapter-five-three"></a>5.3 类型注解

> [返回目录](#chapter-one)

在上面报错提示的学习中，我们看到了一句话：

```ts
function sayHello(person: string) {
  return 'Hello ' + person;
}
```

那么这个：`person: string`，相信小伙伴们在看上面代码的时候已经了解了，它就是类型注解。

TypeScript 中的类型注解是一种轻量级的为函数或者变量添加约束的方式。

在 `person: string` 中的意思就是，我们希望 `person` 传入的类型值为字符串，而不是 `[1, 2, 3]` 这种 `number[]` 或者其他内容。

### <a name="chapter-five-four" id="chapter-five-four"></a>5.4 接口

> [返回目录](#chapter-one)

接下来我们进行接口的定义，先看代码：

> ts-axios/index.ts

```ts
interface Person {
  firstName: string;
  lastName: string;
}

function sayHi(person: Person) {
  return 'Hello ' + person.firstName + person.lastName;
}

let user = {
  firstName: 'Liang',
  lastName: 'Junrong',
};

console.log(sayHi(user));

// 1. cmd：tsc index.ts
// 2. cmd：node index.js
// 3. console：Hello LiangJunrong
```

此时执行 2 个 `shell` 命令：

```shell
tsc index.ts

node index.js
```

打印：

```
Hello LiangJunrong
```

看到这里，我们应该略有感想：

* 类型注解和接口，就是一个 `function()` 定义的时候进行设置，一个将这些限制提取出来，放到 `interface` 中。

> 两者区分

```ts
function sayHi(name: string, age: number) {
  return `人物：${name} ${age} 岁`;
}
console.log(sayHi('梁峻荣', 25));

interface User {
  name: string;
  age: number;
}
function sayHello(user: User) {
  return `人物：${user.name} ${user.age} 岁`;
}
console.log(sayHello({ name: 'jsliang', age: 25 }));
```

### <a name="chapter-five-five" id="chapter-five-five"></a>5.5 类

> [返回目录](#chapter-one)

最后，我们了解下 TypeScript 中一个重要的点：类。

类不难理解，所谓物以类聚人以群分，而我们的类就是区分不同的功能实现。

下面举例 `User` 类：

> ts-axios/index.ts

```ts
class User {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('Liang', 'Junrong');

console.log(user.firstName); // Liang
console.log(user.lastName); // Junrong
```

通过 `shell` 命令编译后：

```shell
tsc index.ts
node index.js
```

查看 `index.js`：

> ts-axios/index.ts

```js
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
var user = new User('Liang', 'Junrong');
console.log(user.firstName);
console.log(user.lastName);

```

查看 `Console`：

```
Liang
Junrong
```

可以看出 `Class` 本质上还是 JavaScript 函数的实现，它只是 TypeScript 中的一个语法糖。

## <a name="chapter-six" id="chapter-six"></a>六 总结

> [返回目录](#chapter-one)

到此，我们就快速了解了 TypeScript 的一些基础内容。

* TypeScript 安装
* TypeScript 的特点
* TypeScript 快速入门

那么，我们下面将会进一步探索。

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

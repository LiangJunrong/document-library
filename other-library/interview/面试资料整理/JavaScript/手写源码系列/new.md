手写源码系列 - new
===

> Create by **jsliang** on **2020-10-06 17:48:21**  
> Recently revised in **2020-10-06 17:48:46**

```js
this.name = 'jsliang';
let Foo = function() {
  this.name = 'zhazhaliang';
}
let foo = new Foo();
console.log(foo.name); // 输出啥？
console.log(window.name); // 输出啥？
```

答案是：

* zhazhaliang
* jsliang

在将这个答案的缘故之前，我们看下 `new Foo()` 中，JavaScript 引擎做了什么事：

* 首先创建一个空对象 `tempObj = {}`。
* 接着调用 `Foo.apply` 方法，将 `tempObj` 作为 `apply` 方法的参数，这样当 `Foo` 的执行上下文创建时，它的 `this` 就指向 `tempObj` 对象。
* 然后执行 `Foo` 函数，此时的 `Foo` 函数执行上下文中的 `this` 指向了 `tempObj` 对象。
* 最后返回 `tempObj` 对象。

```js
function myNew(func, ...args) {
  const tempObj = {};
  func.apply(tempObj, args);
  return tempObj;
}

this.name = 'jsliang';
let Foo = function(name, age) {
  this.name = name;
  this.age = age;
}
let foo = myNew(Foo, 'zhazhaliang', 25);
console.log(foo.name); // 输出啥？
console.log(foo.age); // 输出啥？
console.log(window.name); // 输出啥？
```

如上，我们可以看到此时 `this` 是属于 `tempObj` 的，绑定到 `foo` 上去了，从而获取到：

* zhazhaliang
* 25
* jsliang

当然，了解到这里，我们还是完善下 `new` 这个手写方法：

```js
function myNew(func, ...args) {
  // 1. 判断方法体
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体';
  }

  // 2. 创建新对象
  const obj = {};

  // 3. 这个对象的 __proto__ 指向 func 这个类的原型对象
  // 即实例可以访问构造函数原型（constructor.prototype）所在原型链上的属性
  obj.__proto__ = Object.create(func.prototype);
  // 为了兼容 IE 可以让步骤 2 和 步骤 3 合并
  // const obj = Object.create(func.prototype);

  // 4. 通过 apply 绑定 this 执行并且获取运行后的结果
  let result = func.apply(obj, args);
  
  // 5. 如果构造函数返回的结果是引用数据类型，则返回运行后的结果
  // 否则返回新创建的 obj
  const isObject = typeof result === 'object' && typeof result !== null;
  const isFunction = typeof result === 'function';
  return isObject || isFunction ? result : obj;
}

// 测试
function Person(name) {
  this.name = name;
  return function() { // 用来测试第 5 点
    console.log('返回引用数据类型');
  };
}
// 用来测试第 2 点和第 3 点
Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}
const me = myNew(Person, 'jsliang'); // 用来测试第 4 点
me.sayName(); // My name is jsliang
console.log(me); // Person {name: 'jsliang'}

// 用来测试第 1 点
// const you = myNew({ name: 'jsliang' }, 'jsliang'); // 报错：第一个参数必须是方法体
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
设计模式资料整理
===

> Create by **jsliang** on **2020-09-01 21:06:48**  
> Recently revised in **2020-10-26 13:37:07**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 单一职责原则和开放封闭原则](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 单例模式](#chapter-four) |
| &emsp;[4.1 ES5 例子](#chapter-four-one) |
| &emsp;[4.2 ES6 例子](#chapter-four-two) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

| 设计模式 | 描述 | 例子 |
| --- | --- | --- |
| 单例模式 | 一个类只能构造出一个唯一实例 | Redux/Vuex 的 Store |
| 工厂模式 | 对创建对象逻辑的封装 | jQuery 的 `$(selector)` |
| 观察者模式 | 当一个对象被修改时，会自动通知它的依赖对象 | Redux 的 `subsrcibe`、Vue 的双向绑定 |
| 装饰器模式 | 对类的包装，动态地扩展类的功能 | React 的高阶组件、ES7 装饰器 |
| 适配器模式 | 兼容新旧接口，对类的包装 | 封装旧 API |
| 代理模式 | 控制对象的访问 | 事件代理、ES6 的 `Proxy` |

## <a name="chapter-three" id="chapter-three"></a>三 单一职责原则和开放封闭原则

> [返回目录](#chapter-one)

* **单一职责原则**：一个类只负责一个功能领域中的相应职责。或者：就一个类而言，只有一个引起它变化的原因。
* **开放封闭原则**：核心的思想是软件实体（类、模块、函数等）是可扩展的、但不可修改的。也就是说，对拓展是开放的，对修改是封闭的。

## <a name="chapter-four" id="chapter-four"></a>四 单例模式

> [返回目录](#chapter-one)

单例模式即一个类只能构造出唯一实例，单例模式的意义在于共享、唯一， Redux/Vuex 中的 `Store`、jQuery 的 `$` 或者业务场景中的购物车、登录框都是单例模式的应用。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 ES5 例子

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

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 ES6 例子

> [返回目录](#chapter-one)

```js
class SingletonLogin {
  constructor(name, password) {
    this.name = name
    this.password = password
  }
  static getInstance(name, password) {
    // 判断对象是否已经被创建,若创建则返回旧对象
    if (!this.instance) this.instance = new SingletonLogin(name, password)
    return this.instance
  }
}

let obj1 = SingletonLogin.getInstance('CXK', '123')
let obj2 = SingletonLogin.getInstance('CXK', '321')

console.log(obj1 === obj2)    // true
console.log(obj1)           // { name:CXK,password:123 }
console.log(obj2)           // 输出的依然是 { name:CXK,password:123 }
```

## <a name="chapter-five" id="chapter-five"></a>五 参考文献

> [返回目录](#chapter-one)

* [x] [设计模式](https://juejin.im/post/6844904116552990727#heading-59)【阅读建议：1h】
* [ ] [Javascript常用的设计模式详解](https://www.cnblogs.com/tugenhua0707/p/5198407.html)
* [ ] [JavaScript设计模式](https://juejin.im/post/59df4f74f265da430f311909)
* [ ] [JavaScript 中常见设计模式整理](https://juejin.im/post/5afe6430518825428630bc4d)
* [ ] [JavaScript 常见设计模式解析](https://juejin.im/post/58f4c702a0bb9f006aa80f25)
* [ ] [深入 JavaScript 设计模式，从此有了优化代码的理论依据](https://juejin.im/post/5d58ca046fb9a06ad0056cc7)
* [ ] [设计模式之美-前端](https://zhuanlan.zhihu.com/p/111553641)
* [ ] [发布订阅模式，在工作中它的能量超乎你的想象](https://juejin.im/post/6844903616172539917)
* [ ] [使用原生 JavaScript 构建状态管理系统](https://juejin.im/post/6844903660804112391)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
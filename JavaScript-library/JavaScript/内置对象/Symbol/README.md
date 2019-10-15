Symbol
===

> Create by **jsliang** on **2019-10-15 19:25:00**  
> Recently revised in **2019-10-15 19:36:57**

* **参考文献**：

1. [MDN - Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
2. [阮一峰 - Symbol](http://es6.ruanyifeng.com/#docs/symbol)

* **功能**：

ES5 的对象属性名都是字符串，这容易造成属性名的冲突。

比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。

如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。

这就是 ES6 引入 Symbol 的原因。

---

ES6 引入了一种新的原始数据类型 `Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```js
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2; // false

```

* **语法**：`Symbol(description)`
  * `description`：可选的字符串。Symbol 的描述，可用于调试但不能访问 Symbol 本身。

* **进一步探索**：

Symbol 并不能通过 new 生成，如果你通过 new 来创建 Symbol，会报错：

```js
var sym = new Symbol(); // TypeError
```

需要注意的是：

* `typeof` 可以识别 Symbol 类型
* `for...in` 不能枚举 Symbol 类型（浅拷贝如果数据中存在该类型需要注意）
* `JSON.stringify()` 中以 Symbol 作为键的属性会被忽略（深拷贝方式 `JSON.parse(JSON.stringify())` 如果数据中存在该类型需要注意）

* **更多**：

建议参考阮一峰文章，这里不做过多描述。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
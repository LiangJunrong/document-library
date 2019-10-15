判断数据类型 - toString
===

> Create by **jsliang** on **2019-10-16 01:24:21**  
> Recently revised in **2019-10-16 01:24:25**

* **原文**：[MDN - toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

* **功能**：`toString()` 方法返回一个表示该对象的字符串。

* **方法**：`obj.toString()`

* **返回值**：一个表示该对象的字符串。

* **说明**：

每个对象都有一个 `toString()` 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。

默认情况下，`toString()` 方法被每个 `Object` 对象继承，如果该方法没有在自定义对象中被覆盖，`toString()` 返回 `'[object type]'`，其中 `type` 是类型

```js
const obj = new Object();
console.log(obj.toString()); // [object Object]
```

当然，我们根据这点，可以通过 `toString()` 来获取每个对象的类型。

为了每个对象都能通过 `Object.prototype.toString()` 来检测，我们需要用 `Function.prototype.call()` 或者 `Function.prototype.apply()` 的形式来调用，传递要检查的对象作为第一个参数，称为 `thisArg`。

* **代码**：

```js
/**
 * @name 示例
 * @description toString 检测对象类型
 */
const toString = Object.prototype.toString;

console.log(toString.call(new Date));     // [object Date]
console.log(toString.call(new String));   // [object String]
console.log(toString.call(Math));         // [object Math]
console.log(toString.call('jsliang'));    // [object String]
console.log(toString.call(123));          // [object Number]
console.log(toString.call([]));           // [object Array]
console.log(toString.call({}));           // [object Object]
console.log(toString.call(undefined));    // [object Undefined]
console.log(toString.call(null));         // [object Null]

console.log('------');

console.log(toString.apply(new Date));     // [object Date]
console.log(toString.apply(new String));   // [object String]
console.log(toString.apply(Math));         // [object Math]
console.log(toString.apply('jsliang'));    // [object String]
console.log(toString.apply(123));          // [object Number]
console.log(toString.apply([]));           // [object Array]
console.log(toString.apply({}));           // [object Object]
console.log(toString.apply(undefined));    // [object Undefined]
console.log(toString.apply(null));         // [object Null]
```

**PS**：当然，看到这里会不会有人忍不住查一下 `call()`、`apply()` 以及 `bind()` 三者的区别呢~

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
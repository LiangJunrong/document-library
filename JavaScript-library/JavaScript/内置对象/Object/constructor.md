方法 - constructor
===

> Create by **jsliang** on **2019-10-15 13:35:33**  
> Recently revised in **2019-10-15 16:30:51**

* **原文**：[MDN - constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)

* **功能**：`constructor()` 返回创建实例对象的 Object 构造函数的引用。

* **描述**：

所有对象都会从它的原型上继承一个 `constructor` 属性。

```js
const arr = [];
console.log(arr.constructor === Array); // true

const obj = {};
console.log(obj.constructor === Object); // true

const num = 1;
console.log(num.constructor === Number); // true

const str = '1';
console.log(str.constructor === String); // true

const bool = true;
console.log(bool.constructor === Boolean); // true

const nul = null;
// console.log(bool.constructor); // 报错：Uncaught TypeError: Cannot read property 'constructor' of null at <anonymous>:1:5

const undefin = undefined;
// console.log(undefin.constructor); // 报错：Uncaught TypeError: Cannot read property 'constructor' of null at <anonymous>:1:5
```

* **说明**：

本次我们了解的，是通过 `constructor` 来判断某个数据的类型：

* [判断数据类型-方法合集](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%92%8C%E8%BF%90%E7%AE%97%E7%AC%A6/%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B-%E6%96%B9%E6%B3%95%E5%90%88%E9%9B%86.md)

在这篇文章中，我们会通过 `typeof`、`instanceof`、`constructor` 以及 `Object.prototype.toString().call()` 这四个方法，讲解这些方法判断数据类型的情况。

但是 `constructor` 的功能不限于此，更多的我们就后续进行跟进了。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
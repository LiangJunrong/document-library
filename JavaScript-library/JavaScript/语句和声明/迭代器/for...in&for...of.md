语句和声明 - 迭代器 - for...in、for...of 对比
===

> create by **jsliang** on **2019-10-14 15:29:27**  
> Recently revised in **2019-10-14 15:31:01**

在我们工作的时候，会不会 `for...in` 和 `for...of` 傻傻分不清，这里我们讲解下这两者的区别：

无论是 `for...in` 还是 `for...of` 语句都是迭代一些东西，它们之间的主要区别在于它们的迭代方式。

`for...in` 语句以任意顺序迭代对象的可枚举属性。

`for...of` 语句遍历可迭代对象定义要迭代的数据。

上代码：

```js
/**
 * @name 区分
 * @description for...of 和 for...in 的区别
 */
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i);
}
// 0
// 1
// 2
// foo
// arrCustom
// objCustom

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i);
  }
}
// 0
// 1
// 2
// foo

for (let i of iterable) {
  console.log(i);
}
// 3
// 5
// 7
```

**首先**，由于继承和原型链的关系，每个对象将继承 `objCustom` 属性，并且作为 `Array` 的每个对象将继承 `arrCustom` 属性。

因此，对象 `iterable` 继承属性 `objCustom` 和 `arrCustom`。

> `iterable.__proto__` 可以查找到 `arrCustom`  
> `iterable.__proto__.__proto__` 可以查找到 `objCustom`

**然后**，再我们通过 `for...in` 遍历 `iterable` 对象时，会遍历其所有的可枚举属性。

> 这里不是记录 3、5、7 或者 `hello`，因为这些不是枚举属性，但是会记录数组索引以及 `arrCustom` 和 `objCustom`。

```js
for (let i in iterable) {
  console.log(i);
}
// 0
// 1
// 2
// foo
// arrCustom
// objCustom
```

**接着**，如果我们使用 `hasOwnProperty()` 来检查，那么会检查属于自己的枚举属性（而不是继承的）。

```js
for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i);
  }
}
// 0
// 1
// 2
// foo
```

**最后**，需要了解的是 `for...of`，该循环迭代并记录 `iterable` 作为可迭代对象定义的迭代值，即 3、5、7，而不是任何对象的属性。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
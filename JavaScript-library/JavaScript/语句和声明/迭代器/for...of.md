语句和声明 - 迭代器 - for...of
===

> create by **jsliang** on **2019-10-14 11:09:21**  
> Recently revised in **2019-10-14 15:06:07**

* **原文**：[MDN - for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

* **功能**：`for...of` 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。

* **语法**：`for (variable in object) { statement }`
  * `variable`：在每次迭代时，`variable` 会被赋值为不同的属性名。
  * `object`：被迭代枚举其属性的对象。

* **说明**：

`for...of` 可以做非常多的事情，例如迭代 Array、String、Map、Set、DOM 集合……也可以关闭迭代器等，非常强大。

* **代码**：

```js
/**
 * @name 案例1
 * @description 迭代 Array
 */
const interable1 = [10, 20, 30];
for (let value of interable1) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
console.log('interable1: ' + interable1);
// interable1: 10,20,30


/**
 * @name 案例2
 * @description 迭代 String
 */
const interable2 = 'jsliang';
for (let value of interable2) {
  console.log(value);
}
// 'j'
// 's'
// 'l'
// 'i'
// 'a'
// 'n'
// 'g'

/**
 * @name 案例3
 * @description 迭代 Map
 */
const interable3 = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of interable3) {
  console.log(entry);
}
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
for (let [key, value] of interable3) {
  console.log(`${key}: ${value}`);
}
// 'a: 1'
// 'b: 2'
// 'c: 3'

/**
 * @name 案例4
 * @description 迭代 Set
 */
const interable4 = new Set([1, 1, 2, 2, 3, 3]);
for (let value of interable4) {
  console.log(value);
}
// 1
// 2
// 3

/**
 * @name 案例5
 * @description 关闭迭代器：可以使用 break、throw continue、return
 */
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
for (let o of foo()) {
  console.log(o);
  break;
}
// 1
```

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
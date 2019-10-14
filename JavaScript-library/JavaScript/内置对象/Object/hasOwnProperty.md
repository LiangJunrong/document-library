方法 - hasOwnProperty
===

> Create by **jsliang** on **2019-10-14 16:00:23**  
> Recently revised in **2019-10-14 16:25:45**

* **原文**：[MDN - hasOwnProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

* **功能**：`hasOwnProperty()` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

* **方法**：`obj.hasOwnProperty(prop)`
  * `prop`：要检测的属性的 `String` 字符串形式表示的名称，或者 `Symbol`。

* **返回值**：用来判断某个对象是否具有指定属性的布尔值 `Boolean`。

* **说明**：

所有继承了 `Object` 的对象都会继承到 `hasOwnProperty` 方法。

这个方法可以用来检测一个对象是否含有具有特定的自身属性。

和 `in` 运算符不同，该方法会忽略掉哪些从原型链上继承到的属性。

> 即使属性的值是 `null` 或者 `undefined`，只要属性存在，`hasOwnProperty` 依旧会返回 `true`。

* **建议**：如果整篇文章还不足以解答你的疑惑，可以顺带了解下 [for...in](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/%E8%BF%AD%E4%BB%A3%E5%99%A8/for...in.md) 和 [for...of](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/%E8%BF%AD%E4%BB%A3%E5%99%A8/for...of.md) 以及 [for...in 与 for...of 的区别](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/%E8%BF%AD%E4%BB%A3%E5%99%A8/for...in%26for...of.md)

```js
/**
 * @name hasOwnProperty
 * @description null 和 undefined 同样会被判断
 */
const obj = new Object();
obj.propOne = null;
console.log(obj.hasOwnProperty('propOne')); // true
obj.propTwo = undefined;
console.log(obj.hasOwnProperty('propTwo')); // true
```

* **代码**：

```js
/**
 * @name 示例1
 * @description hasOwnProperty 示例
 */
const obj1 = new Object();
obj1.prop = 'exists';
console.log(obj1.hasOwnProperty('prop')); // true
delete obj1.prop;
console.log(obj1.hasOwnProperty('prop')); // false

/**
 * @name 示例2
 * @description 区分 hasOwnProperty 判断自身属性和继承属性
 */
const obj2 = new Object();
obj2.name = 'jsliang';
console.log(obj2.toString()); // [object Object]
console.log(obj2.hasOwnProperty('name')); // true
console.log(obj2.hasOwnProperty('toString')); // false

/**
 * @name 示例3
 * @description 遍历一个对象的所有自身属性
 */
const jsliang = new Object();
Object.prototype.showSkill = () => {
  console.log('渣渣一个！');
};
jsliang.name = 'jsliang';
jsliang.age = '25';
jsliang.canPlay = () => {
  console.log('play');
};
console.log(jsliang);
// { name: 'jsliang', age: '25', canPlay: [Function] }
console.log(jsliang.__proto__);
// { showSkill: () => { console.log('渣渣一个！'); }, constructor: ...省略 }
for (const prop in jsliang) {
  if (jsliang.hasOwnProperty(prop)) {
    console.log(prop);
    // name
    // age
    // play
  } else {
    console.log(prop);
    // showSkill
  }
}
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
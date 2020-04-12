记录 ES6 的知识点
===

> Create by **jsliang** on **2020-4-12 20:54:38**  
> Recently revised in **2020-4-12 21:06:44**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

## let

## var

## const

* 常量不能重新赋值
* 不能重复声明
* 块级作用域
* `const` 不会被预解析
* 定义对象（和其他语言差别）
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const

## let 和 var 差异

* `let` 允许声明一个在作用域限制在块级的变量、语句或者表达式
   * 块级作用域
* `var` 声明的变量只能是全局或者整个函数快的
* `let` 不能重复声明
* `let` 不会被预解析（hoisting）
* 临时死区（temporal dead zone）
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let

## 解构赋值

* 对象的解构赋值
* 数组的解构赋值
* 字符串的解构赋值
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## 展开运算符

* 对象展开
* 数组展开
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax

## Set 对象

* `Set` 对象的数据结构
* `Set` 相关属性与方法
  * `size` 属性
  * `clear()`、`delete()`、`get()`、`has()`、`add()`
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set

## Map 对象

* `Map` 对象的数据结构
* `Map` 相关属性与方法
* `size` 属性
* `clear()`、`delete()`、`get()`、`has()`、`set()`
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

## 函数新增拓展

* 箭头函数
  * 箭头函数的各种写法
  * 箭头函数的 `this` 问题
  * 箭头函数的不定参问题
  * 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* `rest` 参数设置
* 参数默认值设置

## 新增数组扩展

* `Array.from()`、`Array.of()`
* `find()`、`findIndex()`、`includes()`
* `flat()`、`flatMap()`
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

## 新增字符串扩展

* `includes()`、`startsWith()`、`endsWith()`
* `repeat()`
* 模板字符串
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

## 新增对象扩展

* 属性简洁表示法
* 属性名表达式
* 手册地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

## babel 使用

* Babel 是一个 JavaScript 编译器
* 手册地址：https://www.babeljs.cn/
* Babel 基本是否方法

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
swap 交换
===

> create by **jsliang** on **2020-4-5 17:27:33**  
> Recently revised in **2020-4-5 17:33:47**

* 什么是 swap 交换？

就是交换两个变量的值，例如：

```js
let a = 1, b = 3;
// 交换 a/b，让 a = 3, b = 1
```

那么，这时候你会怎么操作呢？

> swap 原生

```js
let a = 1, b = 3;

const temp = a;
a = b;
b = temp;

console.log(a); // 3
console.log(b); // 1
```

原生 JavaScript 通过介入中间变量即可实现它们的交换。

> swap ES6

```js
let a = 1, b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1
```

也可以通过 ES6 的解构赋值进行交换。

这些都是小内容，简单了解下还是可以的~

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

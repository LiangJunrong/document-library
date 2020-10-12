instanceof
===

> Create by **jsliang** on **2020-10-12 16:05:54**  
> Recently revised in **2020-10-12 16:23:46**

面试官：手写一个 `instanceof`。

其实 `instanceof` 就是查找原型链的过程，如果你不懂原型和原型链，去看 **jsliang** 的原型和原型链文章先吧：

* [JavaScript - 原型和原型链](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%8E%9F%E5%9E%8B%E4%B8%8E%E5%8E%9F%E5%9E%8B%E9%93%BE.md)

OK，那么有下面代码：

```js
const Father = function() {
  this.bigName = '爸爸';
  console.log(this.bigName);
}
Father.prototype.sayHello = function() {
  console.log(`我是你爸爸`);
}

const Child = function() {
  this.smallName = '儿子';
  console.log(this.smallName);
}
Child.prototype = Object.create(Father.prototype);

const child = new Child();
child.sayHello();

console.log(child instanceof Child);
console.log(child instanceof Father);
console.log(child instanceof Object);
```

如何改造当中的 `instanceof` 呢？

```js
function instanceOf(a, b) {
  let proto = a.__proto__;
  const prototype = b.prototype;

  // 从当前 __proto__ 开始查找
  while (proto) {
    
    // 如果找到 null 还没有找到，返回 false
    if (proto === null) {
      return false;
    }

    // 如果 a.__proto__.xxx === b.prototype，返回 true
    if (proto === prototype) {
      return true;
    }

    // 进一步迭代
    proto = proto.__proto__;
  }
}

console.log(instanceOf(child, Child));
console.log(instanceOf(child, Father));
console.log(instanceOf(child, Object));
```

输出结果同 `instanceof` 一样，完成目标！

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
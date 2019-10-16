WeakMap
===

> Create by **jsliang** on **2019-10-16 11:37:43**  
> Recently revised in **2019-10-16 11:45:22**

* **参考文献**：[MDN - WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

* **功能**：

`WeakMap` 对象是一组键/值对的集合，其中的键是弱引用的。

其键必须是对象，而值可以是任意的。

* **语法**：`new WeakMap([iterable])`
  * `iterable`：`Iterable` 是一个数组（二元数组）或者其他可迭代的且其元素是键值对的对象。每个键值对会被加到新的 `WeakMap` 里。`null` 会被当做 `undefined`。

* **属性**：

1. `WeakMap.length`：`length` 属性的值为 0。
2. `WeakMap.prototype`：`WeakMap` 构造器的原型。允许添加属性到所有的 `WeakMap` 对象。

* **WeakMap 实例**：

**属性**：

1. `WeakMap.prototype.constructor`：返回创建 `WeakMap` 实例的原型函数。

**方法**：

1. `WeakMap.prototype.delete(key)`：移除 `key` 的关联对象。执行后 `WeakMap.prototype.has(key)` 返回 `false`。
2. `WeakMap.prototype.get(key)`：返回 `key` 关联对象, 或者  `undefined` (没有 `key` 关联对象时)。
3. `WeakMap.prototype.has(key)`：根据是否有 `key` 关联对象返回一个 `Boolean` 值。
4. `WeakMap.prototype.set(key, value)`：在 `WeakMap` 中设置一组 `key` 关联对象，返回这个 `WeakMap` 对象。

* **代码示例**：

```js
let wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
let o1 = {},
    o2 = function(){};

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // value 可以是任意值,包括一个对象
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个 WeakMap 对象
wm1.get(o2); // "azerty"
wm2.get(o2); // undefined，wm2 中没有 o2 这个键

wm1.has(o2); // true
wm2.has(o2); // false

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
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
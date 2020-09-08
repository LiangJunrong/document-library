this + call + bind + apply
===

> Create by **jsliang** on **2020-09-08 13:37:27**  
> Recently revised in **2020-09-08 14:03:28**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

```js
var color = 'green';

var test4399 = {
  color: 'blue',
  getColor: function() {
    var color = 'red';
    console.log(this.color);
  },
};

var getColor = test4399.getColor;
getColor(); // 输出什么？
test4399.getColor(); // 输出什么？
```

答案：`green`、`blue`。

参考：

* [ ] [三元-手写代码系列](http://47.98.159.95/my_blog/js-api/001.html)
* [ ] [再来40道this面试题酸爽继续](https://juejin.im/post/6844904083707396109)
* [ ] [this、apply、call、bind](https://juejin.im/post/6844903496253177863)
* [ ] [面试官问：JS的this指向](https://juejin.im/post/5c0c87b35188252e8966c78a)
* [ ] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)
* [ ] [面试官问：能否模拟实现JS的bind方法](https://juejin.im/post/5bec4183f265da616b1044d7)
* [ ] [JavaScript基础心法——this](https://github.com/axuebin/articles/issues/6)
* [ ] [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)
* [ ] [前端基础进阶（七）：全方位解读this](https://www.jianshu.com/p/d647aa6d1ae6)
* [ ] [JavaScript深入之call和apply的模拟实现](https://juejin.im/post/5907eb99570c3500582ca23c)
* [ ] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)
* [ ] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)
* [ ] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)
* [ ] [JavaScript中的this](https://juejin.im/post/59748cbb6fb9a06bb21ae36d)
* [ ] [this,this,再次讨论javascript中的this,超全面](https://www.cnblogs.com/painsOnline/p/5102359.html)
* [ ] [JS中函数名后面的括号加与不加的区别和作用？](https://www.zhihu.com/question/31044040)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
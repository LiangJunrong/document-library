手写源码系列
===

> Create by **jsliang** on **2020-09-21 15:06:41**  
> Recently revised in **2020-09-28 18:26:00**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [ ] [22 道高频 JavaScript 手写面试题及答案](https://juejin.im/post/6844903911686406158)
* [ ] [前端面试常见的手写功能](https://juejin.im/post/6873513007037546510)
* [ ] [「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/6844903809206976520)
* [ ] [几道JS代码手写题以及一些代码实现](https://juejin.im/post/6844903575559077895)
* [ ] [三元-手写代码系列](http://47.98.159.95/my_blog/js-api/001.html)
* [x] [CORS 原理及实现](https://www.jianshu.com/p/b2bdf55e1bf5)【阅读建议：30min】
* [x] [JSONP 原理及实现](https://www.jianshu.com/p/88bb82718517)【阅读建议：30min】

## jsliang 整理

* [ ] [手写系列](https://github.com/LiangJunrong/document-library/tree/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97)
  * [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise.md)
  * [x] [Promise 实现 Ajax](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/Promise%20%E5%AE%9E%E7%8E%B0%20Ajax.md)
  * [x] [迭代器](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E8%BF%AD%E4%BB%A3%E5%99%A8.md)
  * [x] [防抖和节流](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81.md)
  * [x] [自定义原生事件](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/JavaScript/%E6%89%8B%E5%86%99%E6%BA%90%E7%A0%81%E7%B3%BB%E5%88%97/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6.md)

## 题 2：手写 new

```js
function myNew (fn, ...args) {
  const instance = Object.create(fn.prototype);
  const result = fn.call(instance, ...args);
  return typeof reuslt === 'object' ? result : instance;
}
```

### 题 3：手写 instanceof

```js
function myInstanceof (left, right) {
  const proto = Object.getPrototypeOf(left);

  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}
```

### 题 4：手写 JSONP

基本原理：主要就是利用 `script` 标签的 `src` 属性没有跨域的限制，通过指向一个需要访问的地址，由服务端返回一个预先定义好的 Javascript 函数的调用，并且将服务器数据以该函数参数的形式传递过来，此方法需要前后端配合完成。

执行过程：

* 前端定义一个解析函数（如: `jsonpCallback = function (res) {}`）
* 通过 `params` 的形式包装 `script` 标签的请求参数，并且声明执行函数（如 `cb=jsonpCallback`）
* 后端获取到前端声明的执行函数（`jsonpCallback`），并以带上参数且调用执行函数的方式传递给前端
* 前端在 `script` 标签返回资源的时候就会去执行 `jsonpCallback` 并通过回调函数的方式拿到数据了。

优缺点：

* 缺点：只能通过 `GET` 请求
* 优点：兼容性好，在一些古老的浏览器中都可以进行

```js
<script>
    function JSONP({
        url,
        params = {},
        callbackKey = 'cb',
        callback
    }) {
        // 定义本地的唯一callbackId，若是没有的话则初始化为1
        JSONP.callbackId = JSONP.callbackId || 1;
        let callbackId = JSONP.callbackId;
        // 把要执行的回调加入到JSON对象中，避免污染window
        JSONP.callbacks = JSONP.callbacks || [];
        JSONP.callbacks[callbackId] = callback;
        // 把这个名称加入到参数中: 'cb=JSONP.callbacks[1]'
        params[callbackKey] = `JSONP.callbacks[${callbackId}]`;
        // 得到'id=1&cb=JSONP.callbacks[1]'
        const paramString = Object.keys(params).map(key => {
            return `${key}=${encodeURIComponent(params[key])}`
        }).join('&')
        // 创建 script 标签
        const script = document.createElement('script');
        script.setAttribute('src', `${url}?${paramString}`);
        document.body.appendChild(script);
        // id自增，保证唯一
        JSONP.callbackId++;

    }
    JSONP({
        url: 'http://localhost:8080/api/jsonps',
        params: {
            a: '2&b=3',
            b: '4'
        },
        callbackKey: 'cb',
        callback (res) {
            console.log(res)
        }
    })
    JSONP({
        url: 'http://localhost:8080/api/jsonp',
        params: {
            id: 1
        },
        callbackKey: 'cb',
        callback (res) {
            console.log(res)
        }
    })
</script>
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
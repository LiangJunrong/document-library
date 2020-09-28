DOM
===

> Create by **jsliang** on **2020-09-16 22:08:06**  
> Recently revised in **2020-09-28 16:10:18**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

参考文献：

* [x] [MDN - DOM 概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)【阅读建议：20min】
* [x] [Javascript操作DOM常用API总结](https://www.jianshu.com/p/e8b05b9f72ad)【阅读建议：20min】

## DOM 常用 API

可以使用 `document` 或 `window` 元素的 API 来操作文档本身或获取文档的子类（Web 页面中的各种元素）。

```js
// 获取元素
const node = document.getElementById(id); // 或者 querySelector(".class|#id|name");

// 创建元素
const heading = document.createElement(name); // name: p、div、h1...
heading.innerHTML = '';

// 添加元素
document.body.appendChild(heading);

// 删除元素
document.body.removeChild(node);
```

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>DOM 操作</title>
  <style>
    div {
      border: 1px solid #ccc;
      padding: 50px;
      width: 100px;
    }
  </style>
</head>
<body>
  <div id="dom1">元素 1</div>
  <div class="dom2">元素 2</div>
  
  <button class="btn">点我</button>

  <script>
    (function() {
      const btn = document.querySelector('.btn');

      // 注册点击事件
      btn.onclick = function() {
        const dom1 = document.getElementById('dom1');

        // 第一种添加元素
        const newDom1 = document.createElement('p');
        newDom1.innerHTML = '<a href="https://github.com/LiangJunrong/document-library">jsliang 的文档库</a>';
        dom1.appendChild(newDom1);

        // 第二种添加元素
        const newDom2 = document.createElement('ul');
        newDom2.innerHTML = `
          <li>aaa</li>
          <li>bbb</li>
        `;
        document.body.appendChild(newDom2);

        // 移除元素
        const dom2 = document.querySelector('.dom2');
        document.body.removeChild(dom2);
      }
    })()
  </script>
</body>
</html>
```

## 介绍一下虚拟 DOM

虚拟 DOM 本质就是用一个原生的 JavaScript 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。

由于在浏览器中操作 DOM 是很昂贵的。

频繁地操作 DOM，会产生一定的性能问题，因此我们需要这一层抽象，在 patch 过程中尽可能地一次性将差异更新到 DOM 中，这样保证了 DOM 不会出现性能很差的情况。

另外还有很重要的一点，也是它的设计初衷，为了更好的跨平台，比如 Node.js 就没有 DOM,如果想实现 SSR（服务端渲染），那么一个方式就是借助 Virtual DOM，因为 Virtual DOM 本身是 JavaScript 对象。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
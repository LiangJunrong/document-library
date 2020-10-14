DOM
===

> Create by **jsliang** on **2020-09-16 22:08:06**  
> Recently revised in **2020-09-29 08:40:52**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 DOM 常用 API](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 虚拟 DOM](#chapter-four) |
| &emsp;[4.1 要点 1：浏览器渲染过程](#chapter-four-one) |
| &emsp;[4.2 要点 2：DOM 操作昂贵](#chapter-four-two) |
| &emsp;[4.3 要点 3：Diff 算法](#chapter-four-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

参考文献：

* [x] [MDN - DOM 概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)【阅读建议：20min】
* [x] [Javascript操作DOM常用API总结](https://www.jianshu.com/p/e8b05b9f72ad)【阅读建议：20min】
* [x] [vue核心之虚拟DOM(vdom)](https://www.jianshu.com/p/af0b398602bc)【阅读建议：20min】

## <a name="chapter-three" id="chapter-three"></a>三 DOM 常用 API

> [返回目录](#chapter-one)

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

## <a name="chapter-four" id="chapter-four"></a>四 虚拟 DOM

> [返回目录](#chapter-one)

**jsliang** 思路：通过 3 个要点讲解虚拟 DOM。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 要点 1：浏览器渲染过程

> [返回目录](#chapter-one)

* 创建 DOM 树。用 HTML 解析器分析 HTML 元素，创建一棵 DOM 树。
* 创建 CSS 规则树（CSS rule tree）。用 CSS 解析器解析 CSS 文件和 `inline` 样式，生成页面的样式表。
* 创建 Render 树。将 DOM 树和 CSS 规则树关联起来，构建 Render 树。
* 布局 Layout。根据 Render 树，浏览器开始布局，为每个 Render 树上的节点确定一个在显示器上出现的精确坐标。
* 绘制 Painting。在 Render 树和节点显示坐标的基础上，调用每个节点的 `paint` 方法，将它们绘制出来。

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 要点 2：DOM 操作昂贵

> [返回目录](#chapter-one)

由于在浏览器中操作 DOM 是很昂贵的：

* 用原生 JS 或者 jQuery 操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程。

> 拓展要点：回流和重绘

频繁地操作 DOM，会产生一定的性能问题，因此我们需要这一层抽象，在 `patch` 过程中尽可能地一次性将差异更新到 DOM 中，这样保证了 DOM 不会出现性能很差的情况。

但是这样并不能解决问题，所有就有了虚拟 DOM。

虚拟 DOM 本质就是用一个原生的 JavaScript 对象去描述一个 DOM 节点，是对真实 DOM 的一层抽象。

> 真实 DOM 节点

```html
<div id="container">
  <ul>
    <li></li>
  </ul>
</div>
```

> JS 模拟虚拟 DOM

```js
const tree = Element('div', { id: 'container' }, {
  Element('ul', {}, [
    Element('li', {}, ['新节点值'])
  ]),
});

const root = tree.render();
document.querySelector('#container').appendChild(root);
```

可以看到虚拟 DOM 对象最基本的三个属性：

* 标签类型
* 标签元素的属性
* 标签元素的子节点

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 要点 3：Diff 算法

> [返回目录](#chapter-one)

两棵树完全对比的时间复杂度是 O(n^3)，而 React 的 Diff 算法的时间复杂度是 O(n)。

要实现这么低的时间复杂度，意味着在比较差异时只会对同一层级的节点进行比较，因为如果进行完全的比较，算法实际复杂度会过高，所以舍弃了这种完全的比较方式，而采用同层比较。

Diff 算法的核心就是对虚拟 DOM 节点进行深度优先遍历，并对每一个虚拟节点进行编号，在遍历的过程中对同一个层级的节点进行比较，最终得到比较后的差异。

假设现在的虚拟 DOM 的更新前后为：

```js
// DOM 节点值
const dom = `
  <div id="container">
    <p>123</p>
    <ul>
      <li class="jsliang1">li 节点</li>
      <li>旧节点值</li>
    </ul>
  </div>
`;

// 旧节点
const tree = Element('div', { id: 'container' }, [
  Element('p', {}, ['123']),
  Element('ul', {}, [
    Element('li', { class: 'jsliang1' }, ['li 节点']),
    Element('li', {}, ['旧节点值']),
  ]),
]);

// 变成下面新的虚拟 DOM
const tree = Element('div', { id: 'container' }, [
  Element('h3', {}, ['小标题']), // 更新节点
  Element('ul', {}, [
    Element('li', { class: 'jsliang2' }, ['li 节点']), // 更新属性或者属性值
    Element('li', {}, ['新节点值']), // 更新文本
  ]),
]);
```

Diff 获取虚拟 DOM 节点变更的 4 种情况比较：

* **节点类型变了**。`<p>` -> `<h3>`。直接 `Replace`，将旧节点卸载并装载新节点。
* **节点类型一样，仅仅属性或者属性值变了**。直接 `Props`，更新节点。
* **文本变了**。直接 `Text`，修改文字内容就行了。
* **增加、删除或者移动了子节点**。直接 `Reorder`，这个方法比较复杂，我们具体来讲讲。

最粗暴的方法就是遍历每个新虚拟 DOM 节点，和旧虚拟 DOM 节点比对。在旧 DOM 中是否存在，不同就卸载原来的上新的。

这时候不得不提一下 React 或者 Vue 里面的 `key`，我们在写业务的时候，被告知 `key` 值不能是索引值 `index`。

为什么这样子呢？

假设我们有 4 个元素，旧的元素是 1、2、3、4，新的元素是 1、3、2、4，但是如果我们用了索引值 `index`，那么它们就一直是 0-3。

这样子的话，我们 React 或者 Vue 就没法比较好的监听它的一个变动。

所以一般来说，我们将 `key` 值定位成数组的 `id` 或者其他值，方便它变动的时候去监听。

这样子通过 Diff 比较完毕之后，我们就可以获取需要变动的内容，最终去更新真实 DOM 节点。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
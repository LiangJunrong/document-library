虚拟 DOM
===

> Create by **jsliang** on **2020-10-25 17:18:26**  
> Recently revised in **2020-12-09 08:03:55**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 虚拟 DOM](#chapter-three) |
| &emsp;[3.1 要点 1：浏览器渲染过程](#chapter-three-one) |
| &emsp;[3.2 要点 2：DOM 操作昂贵](#chapter-three-two) |
| &emsp;[3.3 要点 3：Diff 算法](#chapter-three-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 虚拟 DOM 实现原理](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 虚拟 DOM 和真实 DOM 比对](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Diff 算法](#chapter-six) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

带着问题看文章：

* 虚拟 DOM 是什么？
* 虚拟 DOM 实现原理是什么？
* Diff 是什么？

## <a name="chapter-three" id="chapter-three"></a>三 虚拟 DOM

> [返回目录](#chapter-one)

**jsliang** 思路：通过 3 个要点讲解虚拟 DOM。

1. 描述浏览器的渲染过程
2. 真实 DOM 操作昂贵，所以需要虚拟 DOM
3. `Diff` 简要做了什么，`key` 在当中扮演什么角色

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 要点 1：浏览器渲染过程

> [返回目录](#chapter-one)

* 创建 DOM 树。用 HTML 解析器分析 HTML 元素，创建一棵 DOM 树。
* 创建 CSS 规则树（CSS rule tree）。用 CSS 解析器解析 CSS 文件和 `inline` 样式，生成页面的样式表。
* 创建 Render 树。将 DOM 树和 CSS 规则树关联起来，构建 Render 树。
* 布局 Layout。根据 Render 树，浏览器开始布局，为每个 Render 树上的节点确定一个在显示器上出现的精确坐标。
* 绘制 Painting。在 Render 树和节点显示坐标的基础上，调用每个节点的 `paint` 方法，将它们绘制出来。

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 要点 2：DOM 操作昂贵

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

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 要点 3：Diff 算法

> [返回目录](#chapter-one)

两棵树完全对比的时间复杂度是 `O(n^3)`，而 React 的 `Diff` 算法的时间复杂度是 `O(n)`。

要实现这么低的时间复杂度，意味着在比较差异时只会对同一层级的节点进行比较，因为如果进行完全的比较，算法实际复杂度会过高，所以舍弃了这种完全的比较方式，而采用同层比较。

`Diff` 算法的核心就是对虚拟 DOM 节点进行深度优先遍历，并对每一个虚拟节点进行编号，在遍历的过程中对同一个层级的节点进行比较，最终得到比较后的差异。

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

`Diff` 获取虚拟 DOM 节点变更的 4 种情况比较：

* **节点类型变了**。`<p>` -> `<h3>`。直接 `Replace`，将旧节点卸载并装载新节点。
* **节点类型一样，仅仅属性或者属性值变了**。直接 `Props`，更新节点。
* **文本变了**。直接 `Text`，修改文字内容就行了。
* **增加、删除或者移动了子节点**。直接 `Reorder`，这个方法比较复杂，小伙伴们具体可以去了解下。

`Diff` 的实现，最粗暴的方法就是遍历每个新虚拟 DOM 节点，和旧虚拟 DOM 节点比对。在旧 DOM 中是否存在，不同就卸载原来的上新的。

这时候不得不提一下 React 或者 Vue 里面的 `key`，我们在写业务的时候，被告知 `key` 值不能是索引值 `index`。

为什么这样子呢？

假设我们有 4 个元素，旧的元素是 1、2、3、4，新的元素是 1、3、2、4，但是如果我们用了索引值 `index`，那么它们就一直是 0-3。

这样子的话，我们 React 或者 Vue 就没法比较好的监听它的一个变动。

所以一般来说，我们将 `key` 值定位成数组的 `id` 或者其他值，方便它变动的时候去监听。

这样子通过 `Diff` 比较完毕之后，我们就可以获取需要变动的内容，最终去更新真实 DOM 节点。

## <a name="chapter-four" id="chapter-four"></a>四 虚拟 DOM 实现原理

> [返回目录](#chapter-one)

* 虚拟 DOM 本质上是 JavaScript 对象，是对真实 DOM 的抽象
* 状态变更时，记录新树和旧树的差异
* 最后把差异更新到真正的 DOM 中

## <a name="chapter-five" id="chapter-five"></a>五 虚拟 DOM 和真实 DOM 比对

> [返回目录](#chapter-one)

优点：

* **保证性能下限**：虚拟 DOM 可以经过 `Diff` 找出最小差异，然后批量进行 `patch`，这种操作虽然比不上手动优化，但是比起粗暴的 DOM 操作性能要好很多，因此虚拟 DOM 可以保证性能下限。
* **无需手动操作 DOM**：虚拟 DOM 的 `Diff` 和 `patch` 都是在一次更新中自动进行的，我们无需手动操作 DOM，极大提高开发效率。
* **跨平台**：虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、移动端开发等。

缺点：

* **无法进行极致优化**：在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化，例如 VS Code 采用直接手动操作 DOM 的方式进行极端的性能优化。

## <a name="chapter-six" id="chapter-six"></a>六 Diff 算法

> [返回目录](#chapter-one)

比较原生虚拟 DOM 和新的虚拟 DOM 的区别，使用 Diff（Different）算法

![图](../../public-repertory/img/js-react-principle-1.png)

如上图，在 React 中，对于 `setState`，它采用异步操作，统一对 `state` 中的数据进行更改。

---

![图](../../public-repertory/img/js-react-principle-2.png)

**首先**，比对第一层的 DOM 节点，如果它相同，则往下继续对比；如果它不同，则停止对比，更新第一层及以下的 DOM 节点。

**然后**，比对第二次的 DOM 节点……

**最后**，形成一种比对算法。

![图](../../public-repertory/img/js-react-principle-3.png)

所以总结下来就是：

* 把树形结构按照层级分解，只比较同级元素。
* 给列表结构的每个单元添加唯一的 `key` 属性，方便比较。
* React 只会匹配相同 `class` 的 `component`（这里面的 `class` 指的是组件的名字）
* 合并操作，调用 `component` 的 `setState` 方法的时候, `React` 将其标记为 `dirty`。到每一个事件循环结束, React 检查所有标记 `dirty` 的 `component` 重新绘制.
* 选择性子树渲染。开发人员可以重写 `shouldComponentUpdate` 提高 `Diff` 的性能。

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

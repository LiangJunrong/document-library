HTML + CSS
===

> Create by **jsliang** on **2020-09-07 16:14:51**  
> Recently revised in **2020-10-19 19:07:38**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 DIV + CSS 布局的优缺点](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 如何解决 a 标点击后 hover 事件失效的问题？](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 响应式的好处](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 实现垂直居中](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 position 属性列举](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 脱离文档流](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 块级格式化上下文（BFC）](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 题目一](#chapter-ten) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 盒子模型](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 px、em 和 rem 的区别](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 link 和 @import 区别](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 渐进增减和优雅降级](#chapter-fourteen) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 CSS 设置隐藏元素](#chapter-fifteen) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 CSS 选择器](#chapter-sixteen) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)
  
参考文献：

* [x] [12个HTML和CSS必须知道的重点难点问题](https://juejin.im/post/6844903567707357197)【阅读建议：20min】
* [x] [HTML脱离文档流的三种方法](https://blog.csdn.net/theLostLamb/article/details/79581984)【阅读建议：5min】
* [x] [MDN - 块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)【阅读建议：20min】
* [x] [BFC(块级格式化上下文)](https://www.jianshu.com/p/498145565e4f)【阅读建议：5min】
* [x] [MDN - CSS（层叠样式表）@import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/%40import)【阅读建议：5min】

## <a name="chapter-three" id="chapter-three"></a>三 DIV + CSS 布局的优缺点

> [返回目录](#chapter-one)
  
优点：

1. 代码精简，且结构与样式分离，易于维护
2. 代码量减少了，减少了大量的带宽，页面加载的也更快，提升了用户的体验
3. 对 SEO 搜索引擎更加友好，且 H5 又新增了许多语义化标签更是如此
4. 允许更多炫酷的页面效果，丰富了页面
5. 符合 W3C 标准，保证网站不会因为网络应用的升级而被淘汰

缺点：

1. 不同浏览器对 web 标准默认值不同，所以更容易出现对浏览器的兼容性问题。

## <a name="chapter-four" id="chapter-four"></a>四 如何解决 a 标点击后 hover 事件失效的问题？

> [返回目录](#chapter-one)
  
改变 `a` 标签 CSS 属性的排列顺序：

> LoVe HAte 原则

```
link -> visited -> hover -> active
```

* `a:link`：简写 `a`，未访问的样式
* `a:visited`：已经访问的样式
* `a:hover`：鼠标移上去时的样式
* `a:active`：鼠标按下的样式

在 CSS 中，如果对于相同元素针对不同条件的定义，适宜将最一般的条件放在最上面，依次向下，保证最下面的是最特殊的条件（可以理解为样式覆盖）。

这样，浏览器显示元素的时候，才会从特殊到一半、逐级向上验证条件。

## <a name="chapter-five" id="chapter-five"></a>五 响应式的好处

> [返回目录](#chapter-one)
  
对某些数据的修改就能自动更新视图，让开发者不需要操作 DOM，有更多的时间去思考完成业务逻辑。

## <a name="chapter-six" id="chapter-six"></a>六 实现垂直居中

> [返回目录](#chapter-one)

* **方法一：Flex 布局（子元素是块级元素）**

```css
.box {
  display: flex;
  width: 100px;
  height: 100px;
  background-color: pink;
}

.box-center{
  margin: auto;
  background-color: greenyellow;
}
```

* **方法二：Flex 布局**

```css
.box {
  display: flex;
  width: 100px;
  height: 100px;
  background-color: pink;
  justify-content: center;
  align-items: center;
}

.box-center{
  background-color: greenyellow;
}
```

* **方法三：绝对定位实现（定位元素定宽定高）**

```css
.box {
  position: relative;
  height: 100px;
  width: 100px;
  background-color: pink;
}

.box-center{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: greenyellow;
}
```

* **方法四：使用 transform**

父盒子设置：`display: relative`

div 设置：

```css
div {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}
```

## <a name="chapter-seven" id="chapter-seven"></a>七 position 属性列举

> [返回目录](#chapter-one)
  
```css
div {
  position: absolute;
}
```

* `static`：默认位置。不需要特别声明，不常用。
* `relative`：相对定位。相对于元素默认的位置进行定位，设置 `top/left/right/bottom` 后的元素仍占据空间。
* `absolute`：绝对定位。如果父元素设置了 `position: absolute/relative`，那么这个设置成立。它会根据上一个设置了 `absolute/relative` 的元素进行偏移。
* `fixed`：固定定位。相对于整个浏览器窗口进行定位，无论页面怎么滚动。
* `sticky`：黏性定位。屏幕范围内该元素位置不受影响，超出范围后，会变成 `fixed`，根据设置的 `left/top` 等属性成固定的效果。

## <a name="chapter-eight" id="chapter-eight"></a>八 脱离文档流

> [返回目录](#chapter-one)
  
**文档流**：将窗体自上而下分成一行一行，并在每行中按从左至右一次排放元素，成为文档流，也就普通流。

**脱离文档流**：脱离文档流的元素，将不再在文档流占据空间，而是漂浮在文档流上方。

* `float: left/right`：使用之后会脱离，但是其他盒子会环绕该元素的周围。
* `position: absolute/fixed`：`absolute` 为绝对定位，脱离文档流之后还是会相对于该元素的父类（做了 `relative/absolute` 定位的父类）进行偏移。而 `fixed` 就是完全脱离文档流，相对于 HTML （整个浏览器窗口）的形式展示。

## <a name="chapter-night" id="chapter-night"></a>九 块级格式化上下文（BFC）

> [返回目录](#chapter-one)
  
**BFC 布局规则** 是指页面上一个隔离的独立容器，容器内部的子元素不会影响到外面的元素，反之外面的元素也不会影响容器里面的元素。

**特性：**

1. 在 BFC 中，盒子从顶端开始垂直地一个接一个地排列
2. 盒子垂直方向的距离由 `margin` 决定，属于同一个 BFC 的两个相邻盒子的 `margin` 会发生重叠

**主要用途：**

1. 清除元素内部浮动。`overflow: hidden`
2. 解决外边距合并问题。创建 2 个不同 BFC，就不会发生 `margin` 重叠

> 外边距问题

```html
<div style="width:100px; height:100px; margin-bottom:100px;"></div>
<div style="width:100px; height:100px; margin-top:200px;"></div>
```

这段代码产生的页面中，它们的边距是 `200px`，需要通过 BFC 解决边距问题。

**产生 BFC 的条件：**

* 根元素 `html`
* `float: left/right`
* `position: absolute/fixed`
* `display: inline-block/flex/grid`
* `overflow: hidden`

## <a name="chapter-ten" id="chapter-ten"></a>十 题目一

> [返回目录](#chapter-one)

如果父元素都为浮动，不能解决父类高度塌陷问题的是：

* A：给父元素添加 `clear: both`
* B：给父元素添加 `overflow: hidden`
* C：在浮动元素下方添加空 `div`，并添加样式 `clear: both`
* D：设置父元素 `:after { content: "", clear: both; display: block; overflow: hidden }`

---

答案：B

## <a name="chapter-eleven" id="chapter-eleven"></a>十一 盒子模型

> [返回目录](#chapter-one)
  
* `box-sizing: content-box`。标准盒子，总宽度等于：`width + padding + border + margin`。
* `box-sizing: border-box`。IE 盒子，总宽度等于：`width + margin`。IE 盒子的 `width` 包含了 `width`、`padding` 和 `border` 属性。

详细看：[jsliang - 盒子模型](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/CSS/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.md)

## <a name="chapter-twelve" id="chapter-twelve"></a>十二 px、em 和 rem 的区别

> [返回目录](#chapter-one)
  
`px`：像素（Pixel）。绝对单位。像素 `px` 是相对于显示器屏幕分辨率而言的，是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果 `px` 要换算成物理长度，需要指定精度 `DPI`。

`em` 是相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。它会继承父级元素的字体大小，因此并不是一个固定的值。

`rem` 是 `CSS3` 新增的一个相对单位（`root em`，`根 em`），使用 `rem` 为元素设定字体大小时，仍然是相对大小，但相对的只是 HTML 根元素。

## <a name="chapter-thirteen" id="chapter-thirteen"></a>十三 link 和 @import 区别

> [返回目录](#chapter-one)
  
CSS 引入方式有：

* 内联：`style` 属性（`style="color: red"`）
* 内嵌：`style` 标签（`<style></style>`）
* 外链：`link` 标签（`<link href="index.css">`
* 导入：`@import`（`@import url('index.css')` 或者 `@import 'index.css'`）

`link` 和 `@import` 区别：

* `link` 是 `XHTML` 标签，除了加载 `CSS` 外，还可以定义 `RSS` 等其他事务；`@import` 属于 `CSS` 范畴，只能加载 `CSS`。
* `link` 引用 `CSS` 时，在页面载入时同时加载；`@import` 需要页面网页完全载入以后加载。
* `link` 是 `XHTML` 标签，无兼容问题；`@import` 是在 `CSS2.1` 提出的，低版本的浏览器不支持。
* `link` 支持使用 `Javascript` 控制 `DOM` 去改变样式；而 `@import` 不支持。

## <a name="chapter-fourteen" id="chapter-fourteen"></a>十四 渐进增减和优雅降级

> [返回目录](#chapter-one)
  
关键的区别是他们所侧重的内容，以及这种不同造成的工作流程的差异。

* **优雅降级**：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
* **渐进增强**：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

区别：

* 优雅降级是从复杂的现状开始，并试图减少用户体验的供给
* 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要
* 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## <a name="chapter-fifteen" id="chapter-fifteen"></a>十五 CSS 设置隐藏元素

> [返回目录](#chapter-one)

* `display: none`：彻底消失，会导致浏览器回流和重绘，不能再触发点击事件。
* `visibility: hidden`：元素隐藏，空间仍保留，会导致重绘，但是不能再触发点击事件。
* `opacity: 0`：设置为透明，相当于它还在那里，但是你看不到，可以触发点击事件。

## <a name="chapter-sixteen" id="chapter-sixteen"></a>十六 CSS 选择器

> [返回目录](#chapter-one)

CSS 选择器及样式优先级：

* 在属性后面使用 `!important` 会覆盖页面任意位置定义的元素样式
* 作为 `style` 属性写在元素内的样式（行内样式）
* `id` 选择器
* 类选择器 | 伪类选择器 | 属性选择器（后面样式覆盖前面样式）
* 标签选择器
* 通配符选择器
* 浏览器自定义样式

## 层叠上下文

元素提升为一个比较特殊的图层，在三维空间中 (z 轴) 高出普通元素一等。

**触发条件**：

* 根层叠上下文（`HTML`）
* `position`
* CSS3 属性
  * `flex`
  * `transform`
  * `opacity`
  * `filter`
  * `will-change`
  * `-webkit-overflow-scrolling`

层叠等级：层叠上下文在 z 轴上的排序

* 在同一层叠上下文中，层叠等级才有意义
* `z-index` 的优先级最高

![图](https://user-gold-cdn.xitu.io/2019/2/14/168e9d9f3a1d368b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
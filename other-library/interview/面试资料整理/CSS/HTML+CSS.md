HTML + CSS
===

> Create by **jsliang** on **2020-09-07 16:14:51**  
> Recently revised in **2020-09-07 22:25:28**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

1. DIV + CSS 布局的优缺点
2. 如何解决 a 标点击后 hover 事件失效的问题？
3. 响应式的好处

## <a name="chapter-three" id="chapter-three"></a>三 详细

> [返回目录](#chapter-one)

### 3.1 DIV + CSS 布局的优缺点

优点：

1. 代码精简，且结构与样式分离，易于维护
2. 代码量减少了，减少了大量的带宽，页面加载的也更快，提升了用户的体验
3. 对 SEO 搜索引擎更加友好，且 H5 又新增了许多语义化标签更是如此
4. 允许更多炫酷的页面效果，丰富了页面
5. 符合 W3C 标准，保证网站不会因为网络应用的升级而被淘汰

缺点：

1. 不同浏览器对 web 标准默认值不同，所以更容易出现对浏览器的兼容性问题。

### 3.2 如何解决 a 标点击后 hover 事件失效的问题？

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

### 3.3 响应式的好处

对某些数据的修改就能自动更新视图，让开发者不需要操作 DOM，有更多的时间去思考完成业务逻辑。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
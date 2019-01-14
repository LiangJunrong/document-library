Vue 官方文档二三事
===

> Create by **jsliang** on **2019-1-14 10:40:32**  
> Recently revised in **2019-1-14 10:40:35**

记录在阅读 Vue、VueRouter、VueCli 等官方文档时的一些笔记，仅供参考，不做发表。

## <a name="chapter-one" id="chapter-one">一 目录</a>

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 Vue](#chapter-two) |
| &emsp;[2.1 安装](#chapter-two-one) |
| &emsp;[2.2 指令](#chapter-two-two) |
| &emsp;[2.3 生命周期钩子](#chapter-two-three) |
| &emsp;[2.4 数据监听](#chapter-two-four) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 VueRouter](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 VueCli](#chapter-four) |

## <a name="chapter-two" id="chapter-two">二 Vue</a>

> [返回目录](#catalog-chapter-two)

### <a name="chapter-two-one" id="chapter-two-one">2.1 安装</a>

> [返回目录](#catalog-chapter-two)

* 如果是 0 基础，最好安装 CDN：[BootCDN](https://www.bootcdn.cn/vue/)。
  
> 这里不推荐官网的 jsDelivr 提供的 CDN，因为打开它的官网都加载好久，这 CDN 好不好用就不敢保证了。

* 如果有 Node + Webpack 基础，可以直接用命令行工具：[Vue Cli](https://cli.vuejs.org/zh/guide/)

### <a name="chapter-two-two" id="chapter-two-two">2.2 指令</a>

> [返回目录](#catalog-chapter-two)

| 名称 | 作用 |
| --- | --- |
| `{{}}` | 将数据解析为纯文本，与 `v-text` 的区别就是花括号会显示 `{{}}` |
| `v-text` | 将数据解析为纯文本。 |
| `v-html` | 输出真正的 HTML，HTML 标签可以使用 |
| `v-bind` | 属性字段可以通过 `v-bind` 或者其简写 `:bind` 绑定到 HTML 上，例如 `<a>` 标签的 `url` 或者自定义属性 `:disabled` 等…… |
| `v-if` | 通过值 `true` 或者 `false` 来显示/隐藏标签，一般会结合三元表达式。与 `v-show` 的区别是，`v-if` 的标签，如果为 `false` 是直接删掉该节点，而 `v-show` 是通过 `display:none` 来控制标签 |
| `v-show` |  通过值 `true` 或者 `false` 来显示/隐藏标签，一般会结合三元表达式。|
| `v-on` | 事件方法可以通过 `v-on` 或者其简写 `@` 来绑定到 HTML 上，例如点击事件 `@click` 或者鼠标回车事件 `v-on:keyup.enter` |
|  |  |
|  |  |

### <a name="chapter-two-four" id="chapter-two-four">2.4 数据监听</a>

> [返回目录](#catalog-chapter-two)



> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
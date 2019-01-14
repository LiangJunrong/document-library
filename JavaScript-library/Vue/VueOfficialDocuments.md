Vue 官方文档二三事
===

> Create by **jsliang** on **2019-1-14 10:40:32**  
> Recently revised in **2019-1-14 12:44:13**

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
| &emsp;[2.5 样式](#chapter-two-five) |
| &emsp;[2.6 数组操作](#chapter-two-six) |
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
| `v-if` | 通过值 `true` 或者 `false` 来添加/删除标签，一般会结合三元表达式。与 `v-show` 的区别是，`v-if` 的标签，如果为 `false` 是直接删掉该节点，而 `v-show` 是通过 `display:none` 来控制标签 |
| `v-else-if` | 结合 `v-if` 使用 |
| `v-else` | 结合 `v-if` 使用 |
| `v-show` |  通过值 `true` 或者 `false` 来显示/隐藏标签，一般会结合三元表达式。|
| `v-on` | 事件方法可以通过 `v-on` 或者其简写 `@` 来绑定到 HTML 上，例如点击事件 `@click` 或者鼠标回车事件 `v-on:keyup.enter` |
| `v-for` | 常见形式：`v-for="(item, index) in items`。`item` 是单个元素，`index` 是数组下标。其他形式：`v-for="item of items` |
|  |  |

* 小 tips

1. `v-if` VS `v-show`：一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
2. `v-if` + `v-for`：永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，例如：`v-for="user in users" v-if="user.isActive"` 就是不推荐的。如果你打死都要这么做，那么 `v-for` 具有比 `v-if` 更高的优先级。

### <a name="chapter-two-four" id="chapter-two-four">2.4 数据监听</a>

> [返回目录](#catalog-chapter-two)

**`watch` 与 `computed`**：

* `computed` 强调计算，例如 `c = a + b`，`b` 是外界传来不断变化的，因为你只要显示 `c`，所以使用 `computed`。而 `watch` 属性强调自身值的变化前后的动作，如果需要完成 `c = a + b`，那么你需要 `watch` 数据 `a` 与 `b` 的变化，在这两者变化的时候，在方法中执行 `c = a + b`。
* `watch` 在处理异步操作或者开销较大的操作上有优势。
  * 执行异步操作不能串行返回结果，使用 `watch`；
  * 开销较大的操作，避免堵塞主线程，使用 `watch`；
  * 简单且串行返回的，使用 `computed`。
* `computed` 对绑定的值有依赖，如果每次操作的值不变化，则不进行计算，具有缓存特性。watch 会侦听前后变化的状态，无论操作的值是否变化，都会执行定义的函数体，所以会有 data(newVal, oldVal)。

### <a name="chapter-two-five" id="chapter-two-five">2.5 样式</a>

> [返回目录](#catalog-chapter-two)

| 类型 | 说明 |
| --- | --- |
| `:class` | 动态绑定 Class，可以通过多分类：`:class="{ a: true, 'b', c: false }`，或者结合计算属性 `:class="computedClass`，或者通过三元表达式：`:class="{ a ? a == 1 : a == 2 }"` |
| `:style` | 动态绑定行内样式，如果是 `font-size` 之类的，最好通过驼峰式 `fontSize` 来编写。如果采用 `:style="{styleOne, styleTwo}"` 的形式，当遇到 `transform` 时，Vue 会自动添加相应的前缀。 |

### <a name="chapter-two-six" id="chapter-two-six">2.6 数组操作</a>

> [返回目录](#catalog-chapter-two)

1. 改变原数组的方法

* `push()` - 向数组尾部添加元素
* `pop()` - 删除并导出数组最后一个元素
* `shift()` - 删除并导出数组第一个元素
* `unshift()` - 向数组开头添加元素
* `splice()` - 向数组中添加/删除元素并返回新的数组
* `sort()` - 排序
* `reverse()` - 反转数组

2. 不改变原数组的方法

* `filter()` - 过滤数组
* `concat()` - 拼接两至多个数组
* `slice()` - 获取数组指定位置数据

> 不改变原数组的方法比改变原数组的方法高效，至于怎么姿势才爽，那就看个人感受了。

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
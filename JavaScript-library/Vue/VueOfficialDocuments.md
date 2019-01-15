Vue 官方文档二三事
===

> Create by **jsliang** on **2019-1-14 10:40:32**  
> Recently revised in **2019-1-15 08:11:37**

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
| &emsp;[2.7 事件修饰符](#chapter-two-seven) |
| &emsp;[2.8 按键修饰符](#chapter-two-eight) |
| &emsp;[2.9 父子组件及其通讯](#chapter-two-night) |
| &emsp;[2.10 过渡动画](#chapter-two-ten) |
| &emsp;[2.11 混入](#chapter-two-eleven) |
| &emsp;[2.12 自定义指令](#chapter-two-twelve) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 VueRouter](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 VueCli](#chapter-four) |

## <a name="chapter-two" id="chapter-two">二 Vue</a>

> [返回目录](#catalog-chapter-two)

* [Vue 教程](https://cn.vuejs.org/v2/guide/)
* [Vue API](https://cn.vuejs.org/v2/api/)

### <a name="chapter-two-one" id="chapter-two-one">2.1 安装</a>

> [返回目录](#catalog-chapter-two)

* 如果是 0 基础，最好安装 CDN：[BootCDN](https://www.bootcdn.cn/vue/)。
  
> 这里不推荐官网的 jsDelivr 提供的 CDN，因为打开它的官网都加载好久，这 CDN 好不好用就不敢保证了。

* 如果有 Node + Webpack 基础，可以直接用命令行工具：[Vue Cli](https://cli.vuejs.org/zh/guide/)

### <a name="chapter-two-two" id="chapter-two-two">2.2 指令</a>

> [返回目录](#catalog-chapter-two)

* `{{}}` - 将数据解析为纯文本，与 `v-text` 的区别就是花括号会显示 `{{}}`
* `v-text` - 将数据解析为纯文本。
* `v-html` - 输出真正的 HTML，HTML 标签可以使用.
* `v-bind` - 属性字段可以通过 `v-bind` 或者其简写 `:bind` 绑定到 HTML 上，例如 `<a>` 标签的 `url` 或者自定义属性 `:disabled` 等…… 
* `v-if` - 通过值 `true` 或者 `false` 来添加/删除标签，一般会结合三元表达式。与 `v-show` 的区别是，`v-if` 的标签，如果为 `false` 是直接删掉该节点，而 `v-show` 是通过 `display:none` 来控制标签。
* `v-else-if` - 结合 `v-if` 使用。
* `v-else` - 结合 `v-if` 使用。
* `v-show` -  通过值 `true` 或者 `false` 来显示/隐藏标签，一般会结合三元表达式。
* `v-on` - 事件方法可以通过 `v-on` 或者其简写 `@` 来绑定到 HTML 上，例如点击事件 `@click` 或者鼠标回车事件 `v-on:keyup.enter`。`v-on` 与 `methods` 是一对搭档。
* `v-for` - 常见形式：`v-for="(item, index) in items`。`item` 是单个元素，`index` 是数组下标。其他形式：`v-for="item of items`。
* `v-model` - 双向数据绑定，通常与 `<input>`、`<textarea>` 及 `<select>` 进行绑定。

> 小 tips

1. `v-if` VS `v-show`：一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
2. `v-if` + `v-for`：永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，例如：`v-for="user in users" v-if="user.isActive"` 就是不推荐的。如果你打死都要这么做，那么 `v-for` 具有比 `v-if` 更高的优先级。
3. `v-model`：有三个修饰符可以善于利用：`v-model.lazy` 将 `input` 更新换为 `change` 更新；`v-model.number` 直接绑定数字，结合 `<input type="number">` 更好使用；`v-model.trim` 自定过滤首尾空白字符。

### <a name="chapter-two-four" id="chapter-two-four">2.4 数据监听</a>

> [返回目录](#catalog-chapter-two)

**`watch` 与 `computed`**：

* `computed` 强调计算，例如 `c = a + b`，`b` 是外界传来不断变化的，因为你只要显示 `c`，所以使用 `computed`。而 `watch` 属性强调自身值的变化前后的动作，如果需要完成 `c = a + b`，那么你需要 `watch` 数据 `a` 与 `b` 的变化，在这两者变化的时候，在方法中执行 `c = a + b`。
* `watch` 在处理异步操作或者开销较大的操作上有优势。
  * 执行异步操作不能串行返回结果，使用 `watch`；
  * 开销较大的操作，避免堵塞主线程，使用 `watch`；
  * 简单且串行返回的，使用 `computed`。
* `computed` 对绑定的值有依赖，如果每次操作的值不变化，则不进行计算，具有缓存特性。`watch` 会侦听前后变化的状态，无论操作的值是否变化，都会执行定义的函数体，所以会有 data(newVal, oldVal)。

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

### <a name="chapter-two-seven" id="chapter-two-seven">2.7 事件修饰符</a>

> [返回目录](#catalog-chapter-two)

* `.stop` - 阻止事件冒泡。例如：`@click.stop="say"` 阻止 `say` 方法传递到上一级 DOM。
* `.prevent` - 阻止默认事件。例如：`@click.prevent="say"`，阻止点击事件，然后执行 `say`。
* `.capture` - 给元素添加监听器，在一个 HTML 模块中，如果有 4 层嵌套，前 2 层使用了 `.capture` 修饰符，第 3/4 层未使用，点击第 4 层触发点击事件，则顺序为：1 -> 2 -> 4 -> 3，因为 `.capture` 会先触发。
* `.self` - 只触发该 DOM 本身的事件。相比于 `.stop` 阻止事件冒泡，`.self` 忽略事件冒泡和捕获的影响。
* `.once` - 事件将只会触发一次。例如：`@click.once='doOnce'`，`doOnce` 只会执行一次。
* `.passive` - 不要阻止事件的默认行为。例如：`v-on:scroll.passive="onScroll"`，在进行滚动的时候同时执行 `onScroll`，而不是等 `onScroll` 执行完再滚动。

### <a name="chapter-two-eight" id="chapter-two-eight">2.8 按键修饰符</a>

> [返回目录](#catalog-chapter-two)

> `v-on:keyup.13` = `@click.enter`

* `.enter` - 回车
* `.tab` - Tab 键
* `.delete` - Back Space 或者 Delete
* `.esc` - Esc 键
* `.space` - 空格键
* `.up` - 上箭头
* `.down` - 下箭头
* `.left` - 左箭头
* `.right` - 右箭头
* `.ctrl` - Ctrl 键
* `.alt` - Alt 键
* `.shift` - Shift 键

### <a name="chapter-two-night" id="chapter-two-night">2.9 父子组件及其通讯</a>

> [返回目录](#catalog-chapter-two)

* 组件的写法
* 全局组件与局部组件
* 父组件传递数据给子组件
* 子组件传递数据给父组件
* 父子组件的 `v-model` 实现
* `<slot>` - 默认插槽与其具名插槽
* `:is` 的灵活应用
* `<keep-alive>` 缓存状态，避免重新渲染

> 静态赋值 `props`：`title="My name is jsliang"`；动态赋值 `props`：`:title="article.title + ' by ' + article.name`；`props` 可以传入 `String`、`Number`、`Boolean`、`Array`、`Object`、`Date`、`Function`、`Symbol` 并且对其进行以上类型验证。

### <a name="chapter-two-ten" id="chapter-two-ten">2.10 过渡动画</a>

> [返回目录](#catalog-chapter-two)

* 单组件过渡 `<transition>`
* 过渡 6 状态：`v-enter`、`v-enter-active`、`v-enter-to`、`v-leave`、`v-leave-active`、`v-leave-to`
* 过渡系统 + 第三方 CSS 动画库（[Animate.css](https://daneden.github.io/animate.css/)）
* 过渡时间：`:duration`
* 过渡钩子：`@:before-enter`、`@:enter`、`@:after-enter`、`@:enter-cancelled`、`@:before-leave`、`@:leave`、`@:after-leave`、`@:leave-cancelled`
* `key` 在 `<transition>` 的作用
* 过渡模式：`in-out` 与 `out-in`
* 数字过渡
* 颜色过渡

### <a name="chapter-two-eleven" id="chapter-two-eleven">2.11 混入</a>

> [返回目录](#catalog-chapter-two)

在 Vue 中，有一群万金油般存在，高尚的临时工：`mixins`。

> **临时工**：城管临时工，干着城管的活，日常冲在第一线，有问题直接背锅。

`mixins`，在官方的称呼是：**混入**。

然而，在个人理解上，更宁愿称呼它为：**模具**。

什么意思呢？就是当你发现 `new Vue()` 中的 `data`、`methods`，在多个页面重复使用的时候，你可以将它们抽取出来，然后跟 **模具** 一样，给需要使用的每个页面，先盖个章，留个某某到此一游的印迹，再在此基础上进行开发。

举个例子：你有一个字段 `pageNo: 1`，在文章列表页、商品页都定义了，你抽取出来，存放到 `mixins.js` 中，然后在这两个页面通过 `mixins: mymixin` 盖个章，让这两个页面初始数据都存有 `pageNo: 1`。

> 以后，你就是我的小弟了~

> 项目目录

```
- src
 - mixins
 - utils
```

> src/mixins/mixins.js

```
export default {
  data() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}
```

> HomeHeader.vue

```
import mymixin from '../src/mixins/mixins'

new Vue({
  mixins: mymixin,
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

* 选项混入
* 全局混入

### <a name="chapter-two-twelve" id="chapter-two-twelve">2.11 自定义指令</a>

> [返回目录](#catalog-chapter-two)

* 局部指令：`directives`
* 全局指令：`Vue.directive`
* 自定义指令钩子函数：`bind`、`inserted`、`update`、`componentUpdated`、`unbind`

**作用**：

1. `foucs` 自动聚焦

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
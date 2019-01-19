Vue 官方文档二三事
===

> Create by **jsliang** on **2019-1-14 10:40:32**  
> Recently revised in **2019-1-19 12:52:39**

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
| &emsp;[2.13 过滤器](#chapter-two-thirteen) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Vue Router](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 Vue Cli](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 风格规范](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 Vue</a>

> [返回目录](#catalog-chapter-two)

本章节内容参考自：

* [Vue 教程](https://cn.vuejs.org/v2/guide/)
* [Vue API](https://cn.vuejs.org/v2/api/)

### <a name="chapter-two-one" id="chapter-two-one">2.1 安装</a>

> [返回目录](#catalog-chapter-two)

* 如果是 0 基础，推荐通过 CDN 引用 Vue：[BootCDN](https://www.bootcdn.cn/vue/)。

```
<script src="https://cdn.bootcss.com/vue/2.5.21/vue.js"></script>
```

* 如果有 Node + Webpack 基础，推荐使用命令行工具：[Vue Cli](https://cli.vuejs.org/zh/guide/)

```
npm i @vue/cli -g
```

### <a name="chapter-two-two" id="chapter-two-two">2.2 指令</a>

> [返回目录](#catalog-chapter-two)

* **v-text** - 将数据解析为纯文本。另外还可以使用 `{{}}`，它也会将数据解析为纯文本，与 `v-text` 的区别就是花括号在网络加载慢的时候会显示 `{{ *** }}`。
* **v-html** - 输出真正的 HTML，在 `v-html` 中可以使用 HTML 标签，但是请注意防范 XSS 攻击。
* **v-if** - 通过值 `true` 或者 `false` 来 **添加/删除标签**，一般会结合三元表达式使用。与 `v-show` 的区别是，`v-if` 的标签，如果为 `false` 是直接删掉该节点，而 `v-show` 是通过 `display:none` 来控制标签。同时，`v-if` 与 `v-else-if`、`v-else` 可以配套使用。
* **v-show** -  通过值 `true` 或者 `false` 来切换 `display` **显示/隐藏标签**，一般会结合三元表达式。
* **v-for** - 常见形式：`v-for="(item, index) in items`。`item` 是单个元素，`index` 是数组下标。其他形式：`v-for="item of items`。
* **v-bind** - 可以通过 `v-bind` 或者其简写 `:bind` 绑定到 HTML 的属性字段上，例如 `<a>` 标签动态绑定 `url` 的时候 `:url` 或者自定义属性 `:disabled` 或者动态绑定 `class`、`style` 中使用 `:class`、`style` 等…… 
* **v-on** - 可以通过 `v-on` 或者其简写 `@` 来绑定到 HTML 事件上，例如点击事件 `@click` 或者鼠标回车事件 `v-on:keyup.enter`。`v-on` 与 `methods` 是一对搭档。
* **v-model** - 双向数据绑定。通常与 `<input>`、`<textarea>` 及 `<select>` 进行绑定。
* **v-once** - 只渲染元素和组件一次。之后重新渲染，该元素及其子元素会被视为静态内容忽略。

> 详细介绍：[API - Vue.js](https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4)

---

> 小 tips

1. **v-if** 和 **v-show**：一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
2. **v-if** 和 **v-for**：永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上，例如：`v-for="user in users" v-if="user.isActive"` 就是不推荐的。建议可以通过 HTML5 的标签 `<template>` 来分开这两者，其作用类似于微信小程序的 `<block>`。如果你打死都要这么做，那么 `v-for` 具有比 `v-if` 更高的优先级。
3. **v-model**：善用三个修饰符：`v-model.lazy` 将 `input` 更新换为 `change` 更新；`v-model.number` 直接绑定数字，结合 `<input type="number">` 更好使用；`v-model.trim` 自动过滤首尾空白字符。

### <a name="chapter-two-three" id="chapter-two-three">2.3 生命周期钩子</a>

> [返回目录](#catalog-chapter-two)

![图](../../public-repertory/img/js-vue-basic-17.png)

### <a name="chapter-two-four" id="chapter-two-four">2.4 数据监听</a>

> [返回目录](#catalog-chapter-two)

**watch** 与 **computed**：

1. 对比一：
* `computed` 强调计算。例如 `c = a + b`，因为你只要显示 `c`，所以不需要理会 `a` 与 `b` 的值是否动态传入，只需要使用 `computed` 监察 `c` 即可。
* `watch` 属性强调自身值的变化前后的动作。如果需要完成 `c = a + b`，那么你需要 `watch` 数据 `a` 与 `b` 的变化，在这两者变化的时候，在方法中执行 `c = a + b`。

2. 对比二：
* `watch` 在处理异步操作或者开销较大的操作上有优势。执行异步操作不能串行返回结果、执行开销较大的操作避免堵塞主线程的时候，使用 `watch`。
* 简单且串行返回的，使用 `computed`。

3. 对比三：
* `computed` 对绑定的值有依赖，如果每次操作的值不变化，则不进行计算，具有缓存特性。
* `watch` 会侦听前后变化的状态，无论操作的值是否变化，都会执行定义的函数体，所以会有 `data(newVal, oldVal)`。

### <a name="chapter-two-five" id="chapter-two-five">2.5 样式</a>

> [返回目录](#catalog-chapter-two)

| 类型 | 说明 |
| --- | --- |
| `:class` | 动态绑定 Class，可以通过多分类：`:class="{ a: true, 'b', c: false }`，或者结合计算属性 `:class="computedClass"`，或者通过三元表达式：`:class="{ a ? a == 1 : a == 2 }"` |
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

* 基础组件的写法
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

> 1. extends 类似于 mixins
> 2. extends 支持单个对象，mixins 支持数组
> 3. ~~Vue.extend > Vue.component > extends > mixins，即开发的时候同时使用 extends 和 mixins，注意覆盖顺序~~

> 测试代码.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <title>Vue 学习</title>

</head>

<body>

  <div id="app"></div>

  <!-- Vue CDN - 提供 Vue 服务 -->
  <script src="https://cdn.bootcss.com/vue/2.5.21/vue.js"></script>
  
  <script>

    var extend = {
      data() {
        return {
          number: 1
        }
      }
    }

    var mixin = {
      data() {
        return {
          number: 2
        }
      }
    }

    new Vue({
      el: '#app',
      data() {
        return {
          number: 3
        }
      },
      extends: extend,
      mixins: [mixin],
      created() {
        // 在这里不推荐同时使用 extends 与 mixins，因为会混淆
        // 如果代码是这样子的，则这里输出的是 3
        // 如果 new Vue 中没定义 number，则输出的是 2（mixins 中的值）
        // 如果 mixins 中没定义 number，则输出的是 1（extend 中的值）
        console.log(this.number); // Console：3
      }
    })

  </script>
</body>

</html>
```

### <a name="chapter-two-twelve" id="chapter-two-twelve">2.12 自定义指令</a>

> [返回目录](#catalog-chapter-two)

* 局部指令：`directives`
* 全局指令：`Vue.directive`
* 自定义指令钩子函数：`bind`、`inserted`、`update`、`componentUpdated`、`unbind`

**作用**：

1. `focus` 自动聚焦

### <a name="chapter-two-thirteen" id="chapter-two-thirteen">2.13 过滤器</a>

> [返回目录](#catalog-chapter-two)

* 使用方法：`{{ message | messageFilter }}`，然后定义 `filters: { messageFilter(value) { // ...代码 } }`
* 局部过滤器
* 全局过滤器
* 串联过滤器

## <a name="chapter-three" id="chapter-three">三 Vue Router</a>

> [返回目录](#catalog-chapter-three)

* 正在更新……

## <a name="chapter-four" id="chapter-four">四 Vue Cli</a>

> [返回目录](#catalog-chapter-four)

* 正在更新……

## <a name="chapter-five" id="chapter-five">五 风格规范</a>

> [返回目录](#catalog-chapter-five)

* **组件名应该始终是多个单词的，根组件 App 除外**。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。例如：`todo-item`、`TodoItem`。

* **组件的 `data` 必须是一个函数**。当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。例如：

```
data() {
  return {
    name: 'jsliang'
  }
}
```

* **Prop 定义应该尽量详细**。在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。例如：

```
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

* **总是用 `key` 配合 `v-for`**。`key` 的作用：1.`key` 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。2. 在 `v-for` 中使用 `key`，方便 Vue 跟踪每个节点，从而重用和重新排序现有元素。例如：

```
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>

<transition>
  <span :key="text">{{ text }}</span>
</transition>
```

* **永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**。例如：

```
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

* **为组件样式设置作用域**。给每个组件的 CSS 使用 `scoped`，避免组件之间的样式互相影响。

```
<style module>
.button {
  border: none;
  border-radius: 2px;
}
</style>
```

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
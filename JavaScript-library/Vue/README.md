Vue
===

> Create by **jsliang** on **2018-10-29 11:48:55**  
> Recently revised in **2018-10-29 15:02:04**

<br>

&emsp;**记录下关于 Vue 框架的系统学习旅途：Vue 基础 -> 深入 Vue 套餐 -> Vue 源码剖析。**

&emsp;**参考文档：**

1. [Vue.js 官方文档](https://cn.vuejs.org/v2/guide/) 
  
&emsp;关于学习 Vue 方面，最佳推荐还是官方文档，因为不管是其他文字还是视频教程，都是基于 Vue 的官方文档或者 GitHub 进行学习编写的。   

<br>

&emsp;**参考视频：**

1. **开课吧** - [Vue.js 及项目实战(2018/06)](https://www.kaikeba.com/)  

&emsp;在这里偶然发现一套来自 **开课吧** 的教学视频，然后发现它是今年 6 月份录制的，内容上还算是比较新，并且文件命名非常有意思，在这里咱的 Vue 基础知识先跟着它走一遍看看~

![图](../../public-repertory/img/js-vue-basic-learning-1.png)

2. **慕课网** - [《Vue.js 源码全方位深入解析》](https://coding.imooc.com/class/228.html)

&emsp;还未开封，但是研究源码可能参考该套视频。

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

<br>

&emsp;**不折腾的前端，和咸鱼有什么区别~**

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Vue 基础](#chapter-three) |
| &emsp;[3.1 初识 Vue](#chapter-three-one) |
| &emsp;[3.2 挂载数据 - data](#chapter-three-two) |
| &emsp;[3.3 进一步优化 el](#chapter-three-three) |
| &emsp;[3.4 插值表达式 - {{ ? }}](#chapter-three-four) |
| &emsp;[3.5 指令 - v-?](#chapter-three-five) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

1. 为何需要 Vue ？

* 首先，jQuery 库，它的影响是执行 DOM 操作 + Ajax 请求
* 然后，art-template 库，主要是作为模板引擎，对页面进行渲染。
* 最后，在广大的需求之下，我们有了 Vue 这样，有简易的 DOM 体验，有模板引擎，有路由功能的框架的出现。

<br>

2. Vue 和 jQuery 在代码上的区别是什么？

* 在 jQuery 这种代码库上，它的使用时调用某个函数，我们只需要把控库的代码就可以了。
* 在 Vue 这种框架上，它会初始化自身的一些行为，然后执行你所编写的代码，最后释放资源，从而帮助我们更好地运行我们编写好的代码。

<br>

# <a name="chapter-three" id="chapter-three">三 Vue 基础</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在这里，我们通过讲解如何构建 Vue 项目，以及一些基础的 Vue 指令的讲解，快速上手 Vue 开发。

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 初识 Vue</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;话不多数，我们直接看代码及其实现：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue学习 - 2018-10-29 13:27:49</title>
</head>

<body>
  <!-- 挂载点。可以理解为被操作的对象 -->
  <div id="app"></div>

  <!-- 开发环境版本，包含了有帮助的命令行警告 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

  <!-- 生产环境版本，优化了尺寸和速度 -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/vue"></script> -->

  <script>
    new Vue({
      // el：发生行为的目的地，即我们的挂载点
      el: "#app",
      /*
       * template：模板，即我们要渲染进挂载点的页面标签。
       * 最外一层必须有一层包裹，例如 <div> 
       */
      template: `
          <div>
            <p>Hello World</p>
          </div>
        `,
    })
  </script>
</body>

</html>
```

<br>

&emsp;现在，我们解析下代码运行：

1. 首先，创建一个空白的 html 模板文件，通过 CDN 引用 Vue：

```
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

<br>

2. 然后，我们编写一个挂载点，即我们的 Vue，最终会在哪个 DOM 里面进行操作：

```
<!-- 挂载点。可以理解为被操作的对象 -->
<div id="app"></div>
```

<br>

3. 最后，我们通过 New 一个 Vue 实例对象，对我们 id 为 app 的 DOM 节点进行操作：

```
new Vue({
  // el：发生行为的目的地，即我们的挂载点
  el: "#app",
  /*
    * template：模板，即我们要渲染进挂载点的页面标签。
    * 最外一层必须有一层包裹，例如 <div> 
    */
  template: `
      <div>
        <p>Hello World</p>
      </div>
    `,
})
```

<br>

&emsp;这样，我们最终就显示了 Vue 的简单引用，是不是觉得非常简单：

![图](../../public-repertory/img/js-vue-basic-learning-2.png)

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 挂载数据 - data</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;如果 Vue 仅仅是只有 `template` 这个模板装载，那么它跟 jQuery 就显得毫无差别了，下面我们使用下 Vue 的 `data` 进行数据渲染：

```
<script>
  new Vue({
    // el：发生行为的目的地，即我们的挂载点
    el: "#app",
    /*
      * template：模板，即我们要渲染进挂载点的页面标签。
      * 最外一层必须有一层包裹，例如 <div> 
      */
    template: `
        <div>
          <p>Hello World</p>
          <p>{{ text }}</p>
        </div>
    `,
    data: function() {
      return {
        // template 中要使用的数据
        text: 'Hello World!'
      }
    }
  })
</script>
```

<br>

&emsp;在这里，我们可以看到，我们在 `template` 中加了一个 `<p>` 标签，通过 `{{ text }}` 形式，引入了一个叫 `text` 的 `data` 数据：

```
<p>{{ text }}</p>
```

<br>

&emsp;接着我们在 `<scirpt>` 中定义了 `text` 的内容，从而实现数据渲染：

```
data: function() {
  return {
    // template 中要使用的数据
    text: 'Hello World!'
  }
}
```

<br>

&emsp;这样，我们就知道了，我们不仅可以通过模板 `template` 来渲染 `<div>` 标签，我们也可以将 js 中定义的数据或者变量，通过操作 `data` 从而改变 html 里面的内容。

![图](../../public-repertory/img/js-vue-basic-learning-3.png)

<br>

## <a name="chapter-three-three" id="chapter-three-three">3.3 进一步优化 el</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在 `3.1` 章节 及 `3.2` 章节中，我们使用 `el` 的方式是：

```
el: '#app',
```

&emsp;该 `el` 挂载形式，在 Vue 内部运行机制中，它会根据你传入的值，进行查找：

* 如果传入的是 `#app`，那它就判断查找 `id` 为 `app` 的节点；
* 如果传入的是 `.app`，那它就查找 `class` 为 `app` 的节点；
* 如果传入的是节点名 `div`，那它就查找节点名……  

&emsp;大家应该清楚，这样判断查找是需要时间的，所以我们可以：

```
el: document.getElementById('app'),
```

<br>

&emsp;这般操作，使 Vue 直接将挂载点挂载到 `id` 上去，从而获得更好的加载速度。  
&emsp;这算是对 `el` 的一个小优化。

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 插值表达式 - {{ ? }}</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;如果小伙伴有点印象，应该还记得，我们在章节 `3.2` 中通过 `{{}}` 这个插值表达式的使用，在 `data` 中对其里面的数据进行操作。  
&emsp;下面，我们进一步讲解这个 `{{}}` 还可以进行哪种骚操作：

* 对象：{{ {name: 'jack'} }}
* 字符串 {{ 'Hello World!' }}
* 布尔值： {{ isTrue == -1 }}
* 三元表达式： {{ isTrue ? '正确' : '错误' }}

&emsp;下面我们通过代码进行操作演示：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue学习 - 2018-10-29 13:27:49</title>
</head>

<body>

  <div id="app"></div>


  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    new Vue({

      el: document.getElementById('app'),

      template: `
          <div>
            <p>{{ text }}</p>
            <p>{{ {name: 'jack'} }}</p>
            <p>{{ 'Hello World!' }}</p>
            <p>{{ isTrue == -1 }}</p>
            <p>{{ isTrue ? '真' : '假' }}</p>
          </div>
      `,

      data: function() {
        return {
          text: 'Hello World!',
          isTrue: true
        }
      }
    })
  </script>
</body>

</html>
```

<br>

&emsp;它在浏览器的展示为：

![图](../../public-repertory/img/js-vue-basic-learning-4.png)

<br>

&emsp;关键代码讲解：

```
<div>
  <!-- 赋值 text 到 <p> 标签中 -->
  <p>{{ text }}</p>
  
  <!-- 赋值对象到标签中 -->
  <p>{{ {name: 'jack'} }}</p>
  
  <!-- 直接赋值字符串到标签中 -->
  <p>{{ 'Hello World!' }}</p>

  <!-- 
    直接进行布尔判断，isTrue 在 data 中设置为 true，
    而 -1 转为 布尔值 是 false，所以两者不相等
    输出值为 false 
  -->
  <p>{{ isTrue == -1 }}</p>

  <!-- 运行三元表达式，isTrue 为 true，输出 真 -->
  <p>{{ isTrue ? '真' : '假' }}</p>
</div>
```

<br>

## <a name="chapter-three-five" id="chapter-three-five">3.5 指令 - v-?</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在 Vue 中，如果单单使用 `{{}}` 这种插值表达式，是满足不了我们对数据的操作欲望的。所以，Vue 以 `v-if`、`v-bind` 等形式，提供了一些对于页面 + 数据的更为方便的操作：指令  

* `v-text`
* `v-html`
* `v-if`
* `v-else-if`
* `v-else`
* `v-show`
* `v-bind`
* `v-click`
* `v-model`
* `v-for`

<br>

&emsp;这里通过一个 `index.html` 及一张图向大家演示其基本用法：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue学习 - 2018-10-29 13:27:49</title>
  <style>
    /* 颜色样式：红、绿、蓝 */
    .color-red {
      color: red;
    }

    .color-blue {
      color: blue;
    }

    .color-green {
      color: green;
    }
  </style>
</head>

<body>
  <!-- 挂载地点 -->
  <div id="app"></div>

  <!-- cdn 引用 -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    new Vue({
      // 挂载到 id 为 app 的节点上
      el: document.getElementById('app'),
      // 挂载的模板内容
      template: `
          <div>

            <p>v-text 演示</p>
            <p v-text='vTextOrHtml'></p>

            <br/>

            <p>v-html 演示</p>
            <p v-html='vTextOrHtml'></p>

            <br/>

            <p>v-if -> v-else-if -> v-else 演示</p>
            <p v-if='vIf == 1'>Hello v-If</p>
            <p v-else-if='vIf == 2'>Hello v-else-if</p>
            <p v-else>Hello v-else</p>

            <br/>

            <p>v-show 演示</p>
            <p v-show='isTrue'></p>

            <br/>

            <p>v-bind:××× -> :××× 演示</p>
            <input v-bind:value="vBind" v-bind:class="colorRed" type="text"/>
            <input v-bind:other1="other1" :other2="other2" :other3=" 'other3' " value="Hello :属性值" type="text"/><br/>

            <br/>

            <p>v-click -> @click 演示</p>
            <button v-on:click=" vBind= 'Hello v-on:click' ">v-on:click - 点击直接改变 vBind 的值</button><br>
            <button @click="changevBindValue">v-on:click - 点击通过事件改变 vBind 的值</button><br>

            <br/>

            <p>v-model 演示</p>
            <input v-model="vModel" type="text" />
            <p>{{ vModel }}</p>

            <br/>

            <p>v-for 演示</p>
            <ul v-for="(item, index) in vFor" :class="item.classStyle">
              <li>{{index+1}}. {{item.name}} - {{item.age}}</li>
            </ul>
          </div>
      `,
      data: function () { // 数据挂载
        return {
          
          // v-text 及 v-html 使用数据
          vTextOrHtml: '<span style="color: red">我是红的</p>',
          
          // v-if 使用数据
          vIf: 2,
          
          // v-show 使用数据
          isTrue: false,
          
          // v-bind 使用数据
          vBind: "Hello v-bind",
          
          // v-bind 通过动态绑定 class 修改样式
          colorRed: 'color-red',
          
          // v-bind 的 :属性 的使用形式
          other1: 'other1',
          
          // 同上
          other2: 'other2',
          
          // v-model 使用数据
          vModel: 'Hello v-model',
          
          // v-for 使用数据
          vFor: [{
              name: '张三', // 姓名
              age: 22, // 年龄
              classStyle: "color-red" // 样式
            },
            {
              name: '李四',
              age: 23,
              classStyle: "color-blue"
            },
            {
              name: '王五',
              age: 24,
              classStyle: "color-green"
            }
          ]
        }
      },
      /* 
       * 方法 - methods
       * 如果你在页面中，想给 v-on:click(@click) 事件绑定方法
       * 那么，该方法需要在 methods 中编写
       */
      methods: {
        // 点击修改 v-bind 的值
        changevBindValue: function (e) {
          
          console.log(e.target); // <button>v-on:click - 点击通过事件改变 vBind 的值</button>
          
          console.log(this.vBind); // Hello v-bind
          // 将 `Hello v-bind` 换为 `Hello @click`
          
          this.vBind = "Hello @click!";
        }
      }
    })
  </script>
</body>

</html>
```

<br>

&emsp;页面为：

![图](../../public-repertory/img/js-vue-basic-learning-5.png)

<br>

&emsp;在这里，我们对代码进行下讲解：

```
<div>
  <!-- 
    这里直接将 vTextOrHtml 中的文本
    当成 string 渲染到页面中去
   -->
  <p v-text='vTextOrHtml'></p>

  <br/>

  <!-- 
    这里在渲染 vTextOrHtml 的过程中，
    如果遇到标签，则对标签页进行渲染 
   -->
  <p v-html='vTextOrHtml'></p>

  <br/>

  <!-- 
    判断 data 中 vIf 的值是多少，
    这里有三种情况：v-if、v-else-if、v-else。
    如果项目中有更多情况，则再添加 v-else-if 即可
  -->
  <p v-if='vIf == 1'>Hello v-If</p>
  <p v-else-if='vIf == 2'>Hello v-else-if</p>
  <p v-else>Hello v-else</p>

  <br/>

  <!-- 
    判断 isTrue 是真还是假，
    它不同于 v-if 的方面是：
    v-if 如果是假，则在 Element 中没有渲染
    v-show 如果是假，则该标签为 display: none
  -->
  <p v-show='isTrue'></p>

  <br/>

  <!-- 
    v-bind 有两种格式：
    1. v-bind:value - 全写
    2. :value - 简写
    我们还可以通过 v-bind:class 来动态赋值
    v-bind:other1="other1" 在页面中显示就是：
    <input other1="other1" />>
   -->
  <input v-bind:value="vBind" v-bind:class="colorRed" type="text"/>
  <input v-bind:other1="other1" :other2="other2" :other3=" 'other3' " value="Hello :属性值" type="text"/><br/>

  <br/>

  <!-- 
    v-on:click 有两种格式：
    1. v-on:click - 全写
    2. @click - 简写
    v-on:click 除了可以直接在里面写表达式，还可以填写方法
   -->
  <button v-on:click=" vBind= 'Hello v-on:click' ">v-on:click - 点击直接改变 vBind 的值</button><br>
  <button @click="changevBindValue">v-on:click - 点击通过事件改变 vBind 的值</button><br>

  <br/>

  <!-- 
    v-model 是双向数据绑定，
    在这里，上面 input 的修改
    会影响到下面 p 显示的内容
   -->
  <input v-model="vModel" type="text" />
  <p>{{ vModel }}</p>

  <br/>

  <!-- 
    v-for 循环体遍历输出
   -->
  <ul v-for="(item, index) in vFor" :class="item.classStyle">
    <li>{{index+1}}. {{item.name}} - {{item.age}}</li>
  </ul>
</div>
```

<br>

&emsp;v-bind 和 v-model 的区别：

* v-bind：将 Vue 中的数据同步到页面，即该值大部分用于前端向浏览器传固定数据。v-bind 可以给任何属性赋值，是从 Vue 到页面的单向数据流。
* v-model：双向数据绑定，前端向浏览器传数据，用户操作浏览器的更改前端可以察觉到。v-model 只能给具有 value 属性的元素进行双向数据绑定（必须使用的是有 value 属性的元素）

&emsp;**关于 Vue 的指令，这里仅做简单讲解，想详细学习的小伙伴，记得前往官方文档：[Vue 文档](https://cn.vuejs.org/v2/guide/)**

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
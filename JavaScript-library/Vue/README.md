Vue
===

> Create by **jsliang** on **2018-10-29 11:48:55**  
> Recently revised in **2018-10-29 11:49:00**

<br>

&emsp;**记录下关于 Vue 框架的系统学习旅途：Vue 基础 -> 深入 Vue 套餐 -> Vue 源码剖析。**

&emsp;参考文档。关于学习 Vue 方面，最佳推荐还是官方文档，因为不管是其他文字还是视频教程，都是基于 Vue 的官方文档或者 GitHub 进行学习编写的：[Vue.js 官方文档](https://cn.vuejs.org/v2/guide/)    

&emsp;参考视频。

1. 开课吧 - [Vue.js 及项目实战(2018/06)](https://www.kaikeba.com/)  

&emsp;在这里偶然发现一套来自 **开课吧** 的教学视频，然后发现它是今年 6 月份录制的，比较新，并且文件命名非常有意思，在这里先瞅瞅它的授课内容如何，如果很 nice 到时候再跟小伙伴们分享~

![图](../../public-repertory/img/js-vue-basic-learning-1.png)

2. 慕课网 - [《Vue.js 源码全方位深入解析》](https://coding.imooc.com/class/228.html)

&emsp;还未开封，但是研究源码可能参考该套视频。

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

<br>

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;为何需要 Vue ？

* 首先，jQuery 库，它的影响是执行 DOM 操作 + Ajax 请求
* 然后，art-template 库，主要是作为模板引擎，对页面进行渲染。
* 最后，在广大的需求之下，我们有了 Vue 这样，有简易的 DOM 体验，有模板引擎，有路由功能的框架的出现。

<br>

&emsp;Vue 和 jQuery 在代码上的区别是什么？

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

&emsp;首先看下我们的代码及其实现：

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

&emsp;然后我们解析下代码运行：

1. 首先，创建一个空白的 html 模板文件，通过 CDN 引用 Vue：

```
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

2. 然后，我们编写一个挂载点，即我们的 Vue，最终会在哪个 DOM 里面进行操作：

```
<!-- 挂载点。可以理解为被操作的对象 -->
<div id="app"></div>
```

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

&emsp;这样，我们最终就显示了 Vue 的简单引用：

![图](../../public-repertory/img/js-vue-basic-learning-2.png)

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 Data - 挂载数据</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;如果 Vue 仅仅是只有 `template` 这个模板装载，那么它跟 jQuery 就显得毫无差别了，下面我们使用下 Vue 的 `data` 数据渲染：

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

&emsp;在这里，首先我们可以看到，我们在 `template` 中加了一个 `<p>` 标签；然后通过 `{{ text }}` 形式，引入了一个叫 `text` 的 `data` 数据：

```
<p>{{ text }}</p>
```

<br>

&emsp;最后我们在 `<scirpt>` 中定义了 `text` 的内容：

```
data: function() {
  return {
    // template 中要使用的数据
    text: 'Hello World!'
  }
}
```

<br>

&emsp;这样，我们就知道了，我们不仅可以通过模板渲染 `<div>` 标签，我们也可以将 js 中定义的数据或者变量，通过操作 `data` 从而改变 html 里面的内容。

![图](../../public-repertory/img/js-vue-basic-learning-3.png)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
Vue Demo - 功成千骨
===

> Create by **jsliang** on **2019-1-2 08:46:46**  
> Recently revised in **2019-1-7 08:17:42**

抛开 Vue-Cli 开发一个 TodoList 并不断完善，实现本地存储，离线访问，并完成正在进行、完成列表、回收清单这三个功能模块：

* 新增任务
* 修改任务
* 删除任务

成品展示：

![图](../../public-repertory/img/js-vue-demo-one-1.png)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录                                                |
| --------------------------------------------------- |
| [一 目录](#chapter-one)                             |
| [二 前言](#chapter-two)                         |
| [三 项目解析](#chapter-three)                       |
| [四 骨架 - HTML](#chapter-four)                       |
| [五 功能 - JS](#chapter-five)                       |
| [六 皮肤 - CSS](#chapter-six)                       |
| [七 总结](#chapter-seven)                       |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

经过系列的折腾，并且参照不同大佬的“新人作” - TodoList 的各种写法，综合起来，从 0 到 1 不依赖 Vue-Cli 打造一个属于自己的 TodoList，后期加以 Node 的框架 Koa 连接 MySQL 提供接口，从而实现面向大众的 TodoList！

## <a name="chapter-three" id="chapter-three">三 项目解析</a>

> [返回目录](#chapter-one)

在我们平时的工作中，我们应该在拿到 PSD 设计稿或者原型设计的时候，我们应该对我们的功能进行划分，对 HTML、CSS、JS 进行划分，以便于后期的维护制作，下面我们先看一下我们的 UI：

![图](../../public-repertory/img/js-vue-demo-one-2.png)

好吧惨不忍睹，我们使用 PS 稍微完善下：

![图](../../public-repertory/img/js-vue-demo-one-3.png)

OK，下面我们就可以开始切图仔的工作啦！

## <a name="chapter-four" id="chapter-four">四 骨架 - HTML</a>

> [返回目录](#chapter-one)

> index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
  <title>功成千骨</title>

  <!-- css 区 -->
  <link rel="stylesheet" href="./css/index.css">

</head>
<body>
  <!-- html 区 -->
  <div class="main-container">
    <div class="header">
      <h3>功成千骨</h3>
    </div>
    <div class="content">
      <!-- 输入区 -->
      <div class="content-input-todo">
        <input type="text" placeholder="第 n 个敌人">
        <button>进击</button>
      </div>
      <!-- 列表区 -->
      <div class="content-list">
        <!-- 待完成 -->
        <div class="content-list-todo">
          <p>千军万马取敌首</p>
          <ul>
            <li>
              <input type="checkbox">
              <span>敌军 1</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>敌军 2</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>敌军 3</span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 已完成 -->
        <div class="content-list-finish">
          <p>敌羞吾去脱他衣</p>
          <ul>
            <li>
              <input type="checkbox">
              <span>亡军 1</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>亡军 2</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>亡军 3</span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 回收站 -->
        <div class="content-list-recycle">
          <p>溃不成军鸟兽散</p>
          <ul>
            <li>
              <input type="checkbox">
              <span>逃军 1</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>逃军 2</span>
              <span>×</span>
            </li>
            <li>
              <input type="checkbox">
              <span>逃军 3</span>
              <span>×</span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="footer">
      <p>不折腾的前端</p>
      <p>和咸鱼有什么区别</p>
      <p>@2019 <a href="" target="_blank">jsliang 文档库</a></p>
    </div>
  </div>

  <!-- js 区 -->
  <script src="https://cdn.bootcss.com/vue/2.5.21/vue.js"></script>
  <script src="./js/index.js"></script>

</body>
</html>
```

> 此时，`index.css` 和 `index.js` 这两个文件，可以是空的，因为我们先架好骨架，再进行 CSS 的渲染以及 JS 的事件。

![图](../../public-repertory/img/js-vue-demo-one-4.png)

## <a name="chapter-five" id="chapter-five">五 功能 - JS</a>

> [返回目录](#chapter-one)

现在，我们进行页面的数据化，我们需要考虑有哪几块是需要变成数据的：**输入的内容**、**todo 项**、**完成项**、**未完成项**。

那么，我们先进行简单抽取：

> index.html 

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
  <title>功成千骨</title>

  <!-- css 区 -->
  <link rel="stylesheet" href="./css/index.css">

</head>
<body>
  <!-- html 区 -->
  <div class="main-container" id="app">
    <div class="header">
      <h3>功成千骨</h3>
    </div>
    <div class="content">
      <!-- 输入区 -->
      <div class="content-input-todo">
        <input type="text" placeholder="第 n 个敌人" v-model="todo">
        <button>进击</button>
      </div>
      <!-- 列表区 -->
      <div class="content-list">
        <!-- 待完成 -->
        <div class="content-list-todo">
          <p>千军万马取敌首</p>
          <ul>
            <li v-for="todoItem in todoInfos" :key="todoItem.id">
              <input type="checkbox" v-model="todoItem.isChecked">
              <span v-text="todoItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 已完成 -->
        <div class="content-list-finish">
          <p>敌羞吾去脱他衣</p>
          <ul>
            <li v-for="finishItem in finishInfos" :key="finishItem.id">
              <input type="checkbox" v-model="finishItem.isChecked">
              <span v-text="finishItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 回收站 -->
        <div class="content-list-recycle">
          <p>溃不成军鸟兽散</p>
          <ul>
            <li v-for="recycleItem in recycleInfos" :key="recycleItem.id">
              <input type="checkbox" v-model="recycleItem.isChecked">
              <span v-text="recycleItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="footer">
      <p>不折腾的前端</p>
      <p>和咸鱼有什么区别</p>
      <p>@2019 <a href="" target="_blank">jsliang 文档库</a></p>
    </div>
  </div>

  <!-- js 区 -->
  <script src="https://cdn.bootcss.com/vue/2.5.21/vue.js"></script>
  <script src="./js/index.js"></script>

</body>
</html>
```

在这里，我们将页面数据化了，然后我们编写 `index.js` 的内容：

> index.js

```
var app = new Vue({
  el: "#app",
  data: {
    todo: '',
    todoInfos: [
      {
        id: 7,
        isChecked: false,
        todoTitle: "敌军 1",
      },
      {
        id: 8,
        isChecked: false,
        todoTitle: "敌军 2",
      },
      {
        id: 9,
        isChecked: false,
        todoTitle: "敌军 3",
      },
    ],
    finishInfos: [
      {
        id: 1,
        isChecked: true,
        todoTitle: "亡军 1",
      },
      {
        id: 2,
        isChecked: true,
        todoTitle: "亡军 2",
      },
      {
        id: 3,
        isChecked: true,
        todoTitle: "亡军 3",
      },
    ],
    recycleInfos: [
      {
        id: 4,
        isChecked: false,
        todoTitle: "逃军 1",
      },
      {
        id: 5,
        isChecked: false,
        todoTitle: "逃军 2",
      },
      {
        id: 6,
        isChecked: false,
        todoTitle: "逃军 3",
      },
    ]
  }
})
```

在这里，我们观察下 `todoInfos`、`finishInfos`、`recycleInfos` 这三个数组，发现它们都是差不多的结构。那么，我们干脆将它合并？

> index.js

```
var app = new Vue({
  el: "#app",
  data: {
    todo: '',
    todoInfos: [
      {
        id: 7,
        isChecked: false,
        todoTitle: "敌军 1",
        state: 0
      },
      {
        id: 8,
        isChecked: false,
        todoTitle: "敌军 2",
        state: 0
      },
      {
        id: 9,
        isChecked: false,
        todoTitle: "敌军 3",
        state: 0
      },
      {
        id: 1,
        isChecked: true,
        todoTitle: "亡军 1",
        state: 1
      },
      {
        id: 2,
        isChecked: true,
        todoTitle: "亡军 2",
        state: 1
      },
      {
        id: 3,
        isChecked: true,
        todoTitle: "亡军 3",
        state: 1
      },
      {
        id: 4,
        isChecked: false,
        todoTitle: "逃军 1",
        state: 2
      },
      {
        id: 5,
        isChecked: false,
        todoTitle: "逃军 2",
        state: 2
      },
      {
        id: 6,
        isChecked: false,
        todoTitle: "逃军 3",
        state: 2
      },
    ]
  }
})
```

这样一来，我们就可以通过 `state` 来区分这三块的数据：

> index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
  <title>功成千骨</title>

  <!-- css 区 -->
  <link rel="stylesheet" href="./css/index.css">

</head>
<body>
  <!-- html 区 -->
  <div class="main-container" id="app">
    <div class="header">
      <h3>功成千骨</h3>
    </div>
    <div class="content">
      <!-- 输入区 -->
      <div class="content-input-todo">
        <input type="text" placeholder="第 n 个敌人" v-model="todo">
        <button>进击</button>
      </div>
      <!-- 列表区 -->
      <div class="content-list">
        <!-- 待完成 -->
        <div class="content-list-todo">
          <p>千军万马取敌首</p>
          <ul>
            <li v-for="todoItem in todoInfos" :key="todoItem.id" v-if="todoItem.state == 0">
              <input type="checkbox" v-model="todoItem.isChecked">
              <span v-text="todoItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 已完成 -->
        <div class="content-list-finish">
          <p>敌羞吾去脱他衣</p>
          <ul>
            <li v-for="finishItem in todoInfos" :key="finishItem.id" v-if="finishItem.state == 1">
              <input type="checkbox" v-model="finishItem.isChecked">
              <span v-text="finishItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
        <!-- 回收站 -->
        <div class="content-list-recycle">
          <p>溃不成军鸟兽散</p>
          <ul>
            <li v-for="recycleItem in todoInfos" :key="recycleItem.id" v-if="recycleItem.state == 2">
              <input type="checkbox" v-model="recycleItem.isChecked">
              <span v-text="recycleItem.todoTitle"></span>
              <span>×</span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
    </div>
    <div class="footer">
      <p>不折腾的前端</p>
      <p>和咸鱼有什么区别</p>
      <p>@2019 <a href="" target="_blank">jsliang 文档库</a></p>
    </div>
  </div>

  <!-- js 区 -->
  <script src="https://cdn.bootcss.com/vue/2.5.21/vue.js"></script>
  <script src="./js/index.js"></script>

</body>
</html>
```

![图](../../public-repertory/img/js-vue-demo-one-4.png)

此时，我们的页面还是如修改之前一般。

## <a name="chapter-six" id="chapter-six">六 皮肤 - CSS</a>

> [返回目录](#chapter-one)

## <a name="chapter-seven" id="chapter-seven">七 总结</a>

> [返回目录](#chapter-one)


> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

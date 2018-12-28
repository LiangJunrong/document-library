1. Mint-UI
2. 9 宫格布局：

* 在 src/components/home 中使用

> Home.vue

```
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>

.grid ul {
  margin: 0;
  padding: 0;
}
.grid li {
  list-style: none;
  float: left;
  width: 33.3%;
  backgorund-color: yellowgreen;
  text-align: center;
  height: 30px;
}
```

3. 组件封装

* 在 components 文件夹下新建 common
* 在 common 下新建 MyUl.vue

> MyUl.vue

```
<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'my-ul',
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
```

MyLi.vue
```
<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'my-li',
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
li {
  list-style: none;
  float: left;
  width: 33.3%;
  backgorund-color: yellowgreen;
  text-align: center;
  height: 30px;
}
</style>
```

* main.js 中引用自己的组件

> main.js

```
// 引入自己的 ul 和 li 组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'

// 注册全局组件
Vue.component(MyUl.name, MyUl);
Vue.component(MyLi.name, MyLi);
```

* 在页面中使用

> Home.vue

```
<div class="grid">
  <my-ul>
    <!-- :key 相当于给数据 grids 的每个元素做标识，如果 Vue 监听到某个元素不在了，单纯对这个元素做操作，而不是重新渲染加载 DOM，即先操作虚拟 DOM，最后再渲染到真实 DOM 上面 -->
    <my-li v-for="(grid, index) in grids" :key="index">
      <a href="grid.url">
        <span :class="grid.className"></span>
        <span>{{grid.title}}</span>
      </a>
    </my-li>
  </my-ul>
</div>

data() {
  return {
    grids: [
      { className: "cms-news", title: "新闻资讯", url: "baidu.com" },
      { className: "cms-photo", title: "图文分享", url: "jsliang.top" },
    ]
  }
}
```

4. 重定向路由：

> router/index.js

routes: [
  {
    path: '/',
    redirect: { name: 'home' },
  }
]

5. 通过 `<router-link>` 导向页面：

> Home.vue

```
<router-link :to="grid.router">首页</router-link>

data() {
  return {
    grids: [
      {className: "cms-news", title: "新闻", router:{name: 'new.list'}}
    ]
  }
}
```

> router/index.js

```

import NewsList from "@/components/News/NewsList"

routers: [
  {
    name: "news.list",
    path: "/news/list",
    component: NewsList
  }
]
```

> News/NewsList.vue

```
……省略
```

6. 关于 `:key="**"`，如果数据有对应的 id，则用它的 id。

7. 时间过滤器：[Moments.js](http://momentjs.com/)

* 安装 Monents.js：`npm install moment --save`

> main.js

```
// 定义 moment 全局日期过滤器
import Moment from 'moment';

// {{ 'xxx' | converTime('YYYY-MM-DD') }}
// {{ 'xxx' | converTime('YYYY年MM月DD日') }}
Vue.filter("converTime", function(data, formatStr) {
  return Moment(data).format(formatStr);
});
```

> NewsList.vue

```
{{ news.add_time | converTime('YYYY-MM-DD') }}
```

* 可以获取绝对时间或者相对时间

```
Vue.filter("relativeTime", function(previousTime) {
  return Moment(previousTime).fromNow();
})
```

1. 封装头部

> components/common/NavBar.vue

```
<template>
  <div>
    <span @click="goBack">返回</span>
    <span>{{title}}</span>
  </div>
</template>
<script>
  export default {
    name: 'nav-bar',
    props: ['title'],
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>

</style>
```

> src/main.js

```
// 引入自己的 ul 和 li 组件
import NabBar from '@/components/Common/NabBar'

// 注册全局组件
Vue.component(NabBar.name, NabBar);
```

> NewsList.vue

```
<nav-bar :title="新闻列表"></nav-bar>
```

9. 点击切换不同页面，MintUI 组件下边导航

> App.vue

```
@click = "changeHash"

methods: {
  changeHash() {
    // 在 Vue 完成渲染任务以后的行为
    this.$nextTick(function() {
      console.log(this.selected);
      this.$router.push({
        name: this.selected
      })
    })
  }
}
```

10. 点击跳转到文章详情

> NewsList.vue

```
<router-link :to="{name: 'news.detail', query:{id:news.id}}"></router-link>
```

> index.js

```
import NewsDetail from '@/components/News/NewsDetail';

export default new Router({
  routes: [
    // 新闻详情
    {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    }
  ]
})
```

> NewsDetail

```
……
```

11. 图文分享

> Home.vue

```
{
  className: "cms-photo",
  title: "图文分享",
  router: {
    name: "photo.list",
    params: {
      categoryId: 0
    }
  }
}
```

> router/index.js

```
{
  name: "photo.list",
  path: "/photo/list/:category",
  component: PhotoList
}
```

12. lazy load

* 使用 MintUi 自带的 v-lazy 指令
* 安装 v-lazy 包

13. 路由守卫

&emsp;[路由守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

> PhotoList.vue

```
export default {
  beforeRouteUpdate(to, from, next) {
    // ...
    console.log(to);
    next();
  }
}
```

14. 接口返回信息

```
{
  Status: 1, //数据状态
  Code: 200, //反码状态
  Message: 'Successful', //描述信息
  ClientTime: 1473765898, //客户端请求时间
  ServerTime: 1473765935, //服务端响应时间
  token: '38ce6474a370c3fe84ddf92403bec204cfcbe07b', //唯一token也可做加密key
  data:{ //json数据，格式层级关系根据对应需求虽易定
    key1: value1,
    key2: value2,
    key3: {
    [
      name: '小明',
      sex: 1,
    ],[
      name: '小华',
      sex: 1,
    ],[
      name: '小刚',
      sex: 1,
    ]}
  }
}
```

15. 关于分类跳转

* 在 created() 中调用函数，查看 id，跳转到不同分类
* 在用户修改 url 时，beforeRouteUpdate() 中调用函数，查看 id，跳转到不同分类
* 在点击按钮上触发事件。

16. 新闻详情

* 通过 `v-html` 来渲染富文本

> NewsDetail.vue

```
<div class="news-content" v-html="newsDetail.content"></div>
```

* 由于 `v-html` 是 `this.nextTick()` 中执行的，所以要注意下渲染机制。

17. 图片预览

* [图片预览插件 - vue-preview](https://www.npmjs.com/package/vue-preview)

> main.js

```
// 图片预览插件
import VuePreview from 'vue-preview'

// default install
Vue.use(VuePreview);
// 上面代码会内部运行下面代码
Vue.component('vue-preview', componentObj);
```

18. 封装评论组件

* 新建 src/components/Common/Comment.vue

> Comment.vue

```
// 内容
export default {
  name: "comment"
}
```

> main.js

```
import Comment from '@/components/Common/Comment';

Vue.component(Comment.name, Comment);
```

> PhotoDetail.vue

```
<!-- 使用评论组件 -->
<comment :cid="$route.query.id"></comment>


let id = this.$route.query.id;
```

* 关于使用组件
  * artId - 详情 id
  * pageIndex - 页数

> Comment.vue

```
export default {
  name: "comment",
  props: ['cid'], // 评论需要的 id
  created() {
    // 使用该组件的时候，是否有页码，如果有，就到那个页面，如果没有，就是第一页。
    let id = this.$route.query.page || '1';
  }
}
```

19. 关于评论方式

* 路人
* 用户

20. 加载中

> src/main.js

```
// 配置请求拦截器，显示 loading 图标
Axios.interceptors.request.use(function(config) {
  MintUI.Indicator.open({
    text: "加载中...",
    spinnerType: "fading-circle"
  })
  return config;
});

// 配置响应拦截器，关闭 loading 图标
Axios.intercepotrs.response.use(function(response) {
  MintUI.Indicator.close();
  return response;
})
```
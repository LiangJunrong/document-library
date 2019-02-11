Vue Demo Two - 新闻 SPA
===

> Create by **jsliang** on **2019-1-23 12:56:37**  
> Recently revised in **2019-2-11 11:31:58**

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

20. 加载中功能

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

21. MintUI 下拉刷新与上拉加载

[参考地址](http://mint-ui.github.io/docs/#/zh-cn2/loadmore)

```
<!-- 
  :auto-fill - 自动帮助发请求填充满父元素
  :bottom-method - 拉动函数
  :bottom-add-loaded - 为 true 终结拉动函数的调用
 -->
<mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore" :buttom-all-loaded="isAllLoaded"></mt-loadmore>

// loadmore 的禁止函数调用的属性来控制
this.isAllLoaded = true;

// 通知元素重新定位
this.$refs.loadmore.onBottomLoaded();
```

22. 过渡效果

* [Vue 过渡动画](https://cn.vuejs.org/v2/guide/transitions.html)

23. 父子组件通讯

* 新建 `src/EventBus.js`

> EventBus.js

```
import Vue from 'vue';

// bus 公交车，基于事件的同一个载体对象
let EventBus = new Vue();

// $on(事件名, function() {}) -> $emit('事件名', 数据)
export default EventBus;
```

> src/App.vue

```
import EventBus from './EventBus.js';

export default {
  created() {
    EventBus.$on('addShopcart', (data) => {
      console.log(data);
      console.log(this);
    })
  }
}
```

> src/components/Goods/GoodsDetail.vue

```
insertBall() {
  // 通知 App 组件增加小球数量
  EventBus.$emit('addShopcart', this.pickNum);
}
```

24. 路由守卫判断来回的路由

* [路由守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%AE%88%E5%8D%AB)

```
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

25. 商品的增删改查

> src/GoodsTools.js

```
let obj = {};

// 获取所有商品数据
obj.getGoodsList = function() {
  return JSON.parse(window.localStorage.getItem('goodsList') || '{}');
}

// 保存商品
obj.saveGoods = function(goodsList) {
  // 本地存储
  window.localStorage.setItem('goodsList', JSON.stringify(goodsList));
}

// 新增一个商品
obj.add = function(goods) {
  // 判断当前 goodsList 中是否包含该商品，有则追加，无则赋值
  let goodsList = this.getGoodsList();
  if(goodsList[goods.id]) {
    // 有该 key 做追加
    goodsList[goods.id] += goods.num;
  } else {
    goodsList[goods.id] = goods.num;
  }

  // 保存数据
  this.saveGoods(goodsList);
}

// 获取购物车数量总数
obj.getTotalCount = function() {
  let goodsList = this.getGoodsList();
  let values = Object.value(goodsList);
  let sum = 0;
  values.forEach(val => sum += val);
  return sum;
}

export default obj;
```

> App.vue

```
import GoodsTools from './GoodsTools.js';

export default {
  created() {
    // 初始化小球的数量
    this.num = GoodsTools.getTotalCount();
  }
}
```

> GoodsDetail.vue

```
import GoodsTools from '@/GoodsTools';

afterEnter() {
  // 添加到本地存储
  GoodsTools.add({
    id: this.goodsInfo.id,
    num: this.pickNum
  })
}
```

26. 离开页面

```
beforeRouteLeave(to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 this
  if(confirm('亲，真的要离开吗？')) {

  } else {
    // 取消导航行为
    next(false);
  }
}
```

27. `<router-view></router-view>` 中获取其他组件的高度

> App.vue

```
<div>
  <header ref="appHeader"></header>
  <router-view :apprefs="$refs"></router-view>
  <footer ref="appFooter"></footer>
</div>
```

> Content.vue

```
export default {
  props: ['apprefs'],
  mounted() {
    console.log(this.apprefs.appHeader.$el.offsetHeight);
    console.log(this.apprefs.appFooter.$el.offsetHeight);
  }
}
```

28. 滚动行为

* [VueRouter 滚动行为](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
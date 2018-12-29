Vuex
===

> Create by **jsliang** on **2018-12-29 18:58:58**  
> Recently revised in **2018-12-29 18:59:02**

<br>

&emsp;Vuex 的学习

* 安装 Vuex：`cnpm i vuex -S`

> src/main.js

```
// 1. 引入 Vuex
import Vuex from 'vuex';
// 2. 安装插件
Vue.use(Vuex);
// 3. 创建 store
let store = new Vuex.Store({
  // 4. 配置 store 中的数据/存/取
  state: {
    number: 30
  },
  // 取数据
  getters: {
    getNum(state) {
      return state.num;
    }
  },
  // 操作数据
  mutations: {
    addNum(state, payload) {
      // 调用者传递增加的数量
      state.num += payload.num;
    }
  },
  // 行为，在行为中，可以存在异步操作，但是最终还是通知 mutations
  actions: {
    addNumByServerRate(store, payload) {
      setTimeout(function() {
        let rate = 1;
        state.commit('addNum', {num: payload.num * rate});
      }, 1000)
    }
  }
})

new Vue({
  el: '#app',
  // 5. 将 store 对象关联到 Vue 实例
  store,
  compontents: { App },
  template: '<App/>'
})
```

> App.vue

```
export default {
  methods: {
    change() {
      // 也可以改值，但不是官方推荐，会被寄刀片的
      // this.$store.state.xxx

      // 一般写代码都不直接提交，除非明知是同步操作，没有后台请求
      this.$store.commit('addNum', {num:5});

      // 完美的套路
      this.$store.dispatch('addNumByServerRate', { num: 10 });
    }
  },
  computed: {
    appShowNum() {
      return this.$store.getters.getNum;
    }
  }
}
```

## 提取出来，提高解耦性

* 新建 src/modules/numModule.js

> modules/numModule.js

```
// 上面内容
```

> main.js

```
import numModule from '@/modules/numModule';
```

<br>

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
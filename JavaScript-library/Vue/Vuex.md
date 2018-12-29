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
      this.$store.commit('addNum', {num:5});
    }
  },
  computed: {
    appShowNum() {
      return this.$store.getters.getNum;
    }
  }
}
```

<br>

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
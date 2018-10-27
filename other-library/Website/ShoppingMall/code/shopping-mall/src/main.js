// 通过 import 导入依赖
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// 使用导入
Vue
.use(Button)
.use(Row)
.use(Col)
.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

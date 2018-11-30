ECharts + Vue 折腾记
===

> Create by **jsliang** on **2018-11-28 11:01:39**  
> Recently revised in **2018-11-30 09:03:18**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得点个赞或者给个 star，你们的赞和 star 是我编写更多更精彩文章的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/ECharts/EChartsVue.md)**

&emsp;技术官网就是躺坑的地儿！  
&emsp;翻遍百度文，一把辛酸泪~  
&emsp;整合网上的 Vue + ElementUI，Vue + ECharts，ECharts + 百度地图 API……的文章，带你走非一般的道路。

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| &emsp;[3.1 Vue](#chapter-three-one) |
| &emsp;[3.2 Echarts](#chapter-three-two) |
| &emsp;[3.3 ElementUI](#chapter-three-three) |
| &emsp;[3.4 百度地图](#chapter-three-four) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;现在是大数据和云计算的时代，所以数据可视化逐渐变成一种趋势。  
&emsp;而 ECharts 对于制作的图表可以满足小伙伴们的创造力，它具备华丽的外衣，且实用。  
&emsp;在这里，**jsliang** 将通过 ECharts + Vue 进行折腾。

> 如果小伙伴们对 Vue 还不太熟，这里可能没法带你飞喔~  
> 前置条件：[Vue](https://github.com/LiangJunrong/document-library/tree/master/JavaScript-library/Vue)、Npm、Webpack

&emsp;参考文献：

1. [ECharts Demo | ECharts 官网](http://www.echartsjs.com/examples/)
2. [ElementUI | ElementUI 官网](http://element-cn.eleme.io/#/zh-CN/)
3. [在 vue-cli 项目中使用 echarts | 博客园 - 搞前端的李蚊子](https://www.cnblogs.com/Smiled/p/7686316.html)
4. [Vue：在 Vue 中使用 echarts | 简书 - Mr_Treasure](https://www.cnblogs.com/Smiled/p/7686316.html)
5. [在 VUE 项目中使用 ECharts 画 K 线图和面积图 | CSDN - zgh0711](https://v-charts.js.org/#/)
6. [在 vue 中添加 Echarts 图表使用详解 | PHP 中文网 - 小云云](http://www.php.cn/js-tutorial-384897.html)
7. [v-charts | 饿了么](https://v-charts.js.org/#/)
8. [vue-echarts | npm](https://www.npmjs.com/package/vue-echarts)
9. [在 vue 中，应该直接使用 echarts 还是 vue-echarts | Vue 论坛 - JasonBai007](https://forum.vuejs.org/t/vue-echarts-vue-echarts/48831)
10. [在 vue 项目中引入高德地图及其 UI 组件 | CSDN - shuaizi96](https://blog.csdn.net/shuaizi96/article/details/73611254/)
11. [vue 引入高德地图 echarts](https://www.jianshu.com/p/6fa910498b26)
12. [百度地图引用报错 A parser-blocking, cross site (i.e. different eTLD+1) script | CSDN - 雨中畅游](https://blog.csdn.net/viewyu12345/article/details/80705114)

<br>

# <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;Now, let's go~

> 如果你觉得自己的 npm 下载速度过慢，请使用 cnpm：

* 安装：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
* 使用：`cnpm i 插件 -g`

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 Vue</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;Vue 参考文档：

* [介绍 Vue.js | Vue 官网](https://cn.vuejs.org/v2/guide/)
* [介绍 Vue Router | Vue Router 官网](https://router.vuejs.org/zh/)

&emsp;步骤：

1. 安装 `vue-cli`：`npm i vue-cli -g`
2. 初始化 Vue 项目：`vue init webpack`
3. 开启开发模式：`npm run dev`
4. 打开浏览器，查看网页： `http://localhost:8080`

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 Echarts</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;**首先**，我们在项目中安装 ECharts 依赖：

```
npm i echarts -S
```

&emsp;**然后**，你可以选择按需引用还是全局引用：

1. **全局引用**

&emsp;ECharts 初始化应在钩子函数 `mounted()` 中，这个钩子函数是在 `el` 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用。

> 项目/src/main.js

```
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

<br>

> 项目/src/components/HelloWorld.vue

```
<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
}
</script>

<style scoped>

</style>
```

<br>

2. **按需引用**

&emsp;如果我们使用全局引用。将 ECharts 图表打包，会导致体积过大，所以项目中最好按需引入。  
&emsp;在这里我们使用 `requrie` 引用而不是 `import`，因为 `import` 必须写全路径，比较麻烦。

> 项目/src/components/HelloWorld.vue

```
<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  // 引入柱状图组件
  require("echarts/lib/chart/bar");
  // 引入提示框和title组件
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/title");
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  };
</script>

<style scoped>

</style>
```

<br>

&emsp;**最后**，我们只需要 `npm run dev` 启动项目，打开 `localhost:8080` 即可。

![图](../../public-repertory/img/js-EChartsVue-1.png)

<br>

## <a name="chapter-three-three" id="chapter-three-three">3.3 ElementUI</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;考虑到项目没有 UI 设计稿。那么，就需要引用一款 Vue 的 UI 框架了，偷懒用 ElementUI 吧。  
&emsp;然后，为了使项目尽可能小巧，**jsliang** 打算按需引入 ElementUI：

1. 安装 ElementUI：`npm i element-ui -S`
2. 安装 babel-plugin-component：`npm i babel-plugin-component -D`
3. 修改 .babelrc：

> .babelrc

```
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

4. 按需引入 `Row` 与 `Col`：

> main.js

```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

&emsp;这样，就可以在项目中使用这两个组件了。

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 百度地图</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;引用百度地图很简单，但是结合 Vue + ECharts 来使用百度地图，很难。现在我们过一遍如何使用：

1. 引用百度地图：

> 项目/index.html

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>ECharts 图表</title>
    <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=3.0&ak=Xjmh9v5jGa******6ZVf0PU2ueSedr5F"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

> 注意：srcipt 引用的链接，需要你去百度地图 API 那里获得，因为 ak 对应的是个人的 API 地址。[百度地图 API](http://lbsyun.baidu.com/index.php?title=jspopular3.0)

2. 在组件中使用它：

```
<template>
  <div class="mer">
    <p>全国商户数/全国用户数表</p>
    <div id="mer-my-chart" class="mer-my-chart"></div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");

  export default {
    data() {
      return {
        
      }
    },
    mounted() {
      this.drawMap();
    },
    methods: {
      drawMap() {
        
        setTimeout(() => {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('mer-my-chart'));
          
          // 创建地图实例  
          var map = new BMap.Map("mer-my-chart");

          // 绘制图表
          myChart.setOption({
            // 加载 bmap 组件
            bmap: {
              // 百度地图中心经纬度
              center: [120.13066322374, 30.240018034923],
              // 百度地图缩放
              zoom: 5,
              // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
              roam: true,
              // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
              mapStyle: {}
            },
            series: [{
              type: 'scatter',
              // 使用百度地图坐标系
              coordinateSystem: 'bmap',
              // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
              data: [ [120, 30, 1] ]
            }]
          });
        }, 1000);
      }
    }
  };
</script>

<style scoped>
  .mer-my-chart {
    width: 100%;
    height: 500px;
  }
</style>
```

&emsp;这样，我们就可以在我们的 ECharts 畅通无阻地使用百度地图了。

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得点个赞或者给个 star，你们的赞和 star 是我编写更多更精彩文章的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/ECharts/EChartsVue.md)**

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
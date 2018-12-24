Vue 开发准备
===

> Create by **jsliang** on **2018-12-24 11:54:30**  
> Recently revised in **2018-12-24 16:12:59**

在使用 VueCli 开发之前，有些步骤是重复的，如果一个一个重新写过比较麻烦，故在此记录一些常用步骤。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| [二 大体步骤](#chapter-two) |
| [三 详细步骤](#chapter-three) |
| &emsp;[3.1 安装 VueCli](#chapter-three-one) |
| &emsp;[3.2 重置 CSS 样式](#chapter-three-two) |
| &emsp;[3.3 引用左上角图标](#chapter-three-three) |
| &emsp;[3.4 按需引用 ElementUI](#chapter-three-four) |
| &emsp;[3.5 Axios 封装使用](#chapter-three-five) |
| &emsp;[3.6 配置使用 less](#chapter-three-six) |

## <a name="chapter-two" id="chapter-two">二 大体步骤</a>

> [返回目录](#chapter-one)

1. 启动 VueCli 开发模式
2. 引用重置 CSS 样式表
3. 引用右上角 icon 图标
4. 按需引用 ElementUI
5. 引用并封装 Axios

## <a name="chapter-three" id="chapter-three">三 详细步骤</a>

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one">3.1 安装 VueCli</a>

> [返回目录](#chapter-one)

1. 安装 `vue-cli`：`npm i vue-cli -g`
2. 初始化 Vue 项目：`vue init webpack`
3. 开启开发模式：`npm run dev`
4. 打开浏览器，查看网页： `http://localhost:8080`

### <a name="chapter-three-two" id="chapter-three-two">3.2 重置 CSS 样式</a>

> [返回目录](#chapter-one)

1. 引入重置样式表

> static/css/reset.css

```
/* 
  * reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  * The purpose of reset is not to allow default styles to be consistent across all browsers, but to reduce the potential problems of default styles.
  * create by jsliang
*/

/** 清除内外边距 - clearance of inner and outer margins **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* 结构元素 - structural elements */
dl, dt, dd, ul, ol, li, /* 列表元素 - list elements */
pre, /* 文本格式元素 - text formatting elements */
form, fieldset, legend, button, input, textarea, /* 表单元素 - from elements */
th, td /* 表格元素 - table elements */ {
  margin: 0;
  padding: 0;
}

/** 设置默认字体 - setting the default font **/
body, button, input, select, textarea {
  font: 18px/1.5 '黑体', Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

/** 重置列表元素 - reset the list element **/
ul, ol { list-style: none; }

/** 重置文本格式元素 - reset the text format element **/
a, a:hover { text-decoration: none; }

/** 重置表单元素 - reset the form element **/
button { cursor: pointer; }
input { font-size: 18px; outline: none; }

/** 重置表格元素 - reset the table element **/
table { border-collapse: collapse; border-spacing: 0; }

/** 图片自适应 - image responsize **/
img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; vertical-align: middle; }

/* 
    * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
    * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
*/
div, input { box-sizing: border-box; }

/** 清除浮动 - clear float **/
.jsliang-clear:after, .clear:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.jsliang-clear, .clear {
  *zoom: 1;
}

/** 设置input的placeholder - set input placeholder **/
input::-webkit-input-placeholder { color: #919191; font-size: .26rem } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: .26rem } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: .26rem } /* Internet Explorer */
```

2. 引用重置样式表

> src/main.js

```
// 引入样式重置
import '../static/css/reset.css'
```

### <a name="chapter-three-three" id="chapter-three-three">3.3 引用左上角图标</a>

> [返回目录](#chapter-one)

1. 在下面目录存放 ico 图片：[在线制作 ico 图标](http://www.bitbug.net/)

> static/img/icon.ico

2. 引用左上角图标

> index.html

```
<link rel="shortcut icon" type=image/ico href=./static/img/icon.ico>
```

### <a name="chapter-three-four" id="chapter-three-four">3.4 按需引用 ElementUI</a>

> [返回目录](#chapter-one)

1. 安装 ElementUI：`npm i element-ui -S`
2. 安装 babel 插件：`cnpm i babel-plugin-component -D`
3. 修改 `.babelrc`：

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
// 引入及使用 ElementUI
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);
```

> App.vue

```
<el-row>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">左一</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">左二</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">右二</el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">右一</el-col>
</el-row>
```

5. 响应式布局下基于断点的隐藏类：

> main.js

```
// 引入基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css';
```

然后你就可以使用下面的 CSS 类：

* `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
* `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
* `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
* `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
* `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
* `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
* `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
* `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
* `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
* `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
* `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏

注：

| 参数 | 说明 |
| --- | --- |
| xs | `<768px` |
| sm | `>=768px` |
| md | `>=992px` |
| lg | `>=1200px` |
| xl | `>=1920px` |

6. 更多使用：[ElementUI 组件](http://element-cn.eleme.io/#/zh-CN/component/installation)

### <a name="chapter-three-five" id="chapter-three-five">3.5 Axios 封装使用</a>

> [返回目录](#chapter-one)

1. 安装 Axios：`cnpm i axios -D`
2. 封装 `api` 到 `src/api/api.js` 中

> api.js

```
/**
 * 封装逻辑
 * 1. 引入 axios。
 * 2. 设置请求配置 request。如：请求超时，响应头等
 * 3. 设置请求中的遮罩（未实现）
 * 4. 设置请求成功后的数据过滤（未实现）
 * 5. 设置并暴露接口，传 data、method、url 到请求配置 request 上。
 */

// 设置 axios
import axios from 'axios';

// 请求配置
const request = axios.create({
  // 本地开发 dev 的时候，不需要开启这个
  // baseURL: 'http://172.26.167.5:8080',
  timeout: 5000,
  headers: {
    timestamp: "20181026094424",
    deviceid: "10102",
    signature: "F9CB03DD3ED50EDA5DB214C42D4DC0D6",
  }
})

/**
 * 获取用户名
 * userId
 */
export const getUserName = data => request({
  method: 'get',
  url: '/api/getUserName',
  params: data
})
```

3. 在 `Pages` 中调用：

> UserInfo.vue

```
// 引用接口
import { getUserName } from "@/api/api"

export default {
  methods: {
    _getUserName() {

      // 获取用户名
      getUserName({
        userId: this.userId,
      }).then( (res) => {
        console.log("\n【API - 获取用户名】：");
      })
    }
  }
}
```

4. 设置 webpack 跨域 `index.js`：

> config/index.js

```
dev: {
  proxyTable: {
   '/stat': { // restful 接口规律
     target: 'http://172.**.**.**:8080/', // 接口的域名
     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
   }
 },
},
```

5. 更多参考：[Axios 中文说明](https://www.kancloud.cn/yunye/axios/234845)

### <a name="chapter-three-six" id="chapter-three-six">3.6 配置使用 less</a>

> [返回目录](#chapter-one)

1. 安装 less 和 less-loader：`cnpm i less less-loader -D`
2. 添加 webpack 打包规则：

> build/webpack.base.conf.js

```
{
  test: /\.less$/,
  loader: "style-loader!css-loader!less-loader"
}
```

3. 在 style 中使用 less：

```
<style lang="less" scoped>
.left {
  border: 1px solid #ccc;
  .left-one {
    font-size: 10px;
  }
}
</style>
```

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
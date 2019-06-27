Axios
===

> Create by **jsliang** on **2018-11-8 13:41:10**  
> Recently revised in **2019-05-31 13:50:06**

饮水思源：[Axios 中文文档](https://www.kancloud.cn/yunye/axios/234845)

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

* 从浏览器中创建 XMLHttpRequests
* 从 node.js 创建 http 请求
* 支持 Promise API
* 拦截请求和响应
* 转换请求数据和响应数据
* 取消请求
* 自动转换 JSON 数据
* 客户端支持防御 XSRF

## <a name="chapter-one" id="chapter-one">一 目录</a>

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 正文](#chapter-two) |
| &emsp;<a name="catalog-chapter-two-one" id="catalog-chapter-two-one"></a>[2.1 get](#chapter-two-one) |
| &emsp;<a name="catalog-chapter-two-two" id="catalog-chapter-two-two"></a>[2.1 post](#chapter-two-two) |

## <a name="chapter-two" id="chapter-two">二 正文</a>

> [返回目录](#catalog-chapter-two)

axios 实战经验

### <a name="chapter-two-one" id="chapter-two-one">2.1 get</a>

> [返回目录](#catalog-chapter-two-one)

方法：`axios.get(url, options)`

话不多说，先上代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue学习</title>
</head>

<body>
  <div id="app"></div>

  <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
  <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.js"></script>
  <!-- 1. 引用 axios -->
  <script src="https://cdn.bootcss.com/axios/0.18.0/axios.js"></script>
  
  <script>

    new Vue({
      el: document.getElementById('app'),
      template: `
        <div>
          <button @click="sendAjax">发送请求</button>
          <span>数据为：</span>
          {{ getData }}
        </div>
      `,
      data() {
        return {
          getData: ''
        }
      },
      methods: {
        sendAjax() {
          // 直接使用 axios
          // get 为请求方式
          axios.get('https://www.easy-mock.com/mock/5be3885e033152564881d354/getInfo')
          // then 为 promise 获取数据
          .then((res) => {
            this.getData = res.data;
          })
          // catch 为 promise 捕获异常
          .catch();
        }
      }
    })

  </script>
</body>

</html>
```

如上，我们使用 axios 非常简单，只需要引用它的 cdn，然后通过：

```
axios.get()
.then()
.catch()
```

就可以直接调用 axios 获取数据。

### <a name="chapter-two-two" id="chapter-two-two">2.2 post</a>

> [返回目录](#catalog-chapter-two-two)

post 请求讲解

# 三 杂记

## 3.1 跨域代理

* [http-proxy-middleware | 代理了解推荐文章](https://npm.taobao.org/package/http-proxy-middleware)

**步骤 1**. 设置 `index.js`：

```
dev: {
  proxyTable: {
   '/stat': {
     target: 'http://172.**.**.**:8080/', // 接口的域名
     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
   }
 },
},
```

**步骤 2**. 设置 `main.js` 全局拦截器：

```
// 设置 axios
import axios from 'axios';
// 添加请求拦截器
axios.interceptors.request.use( (config) => {
  config.headers.common['timestamp'] = "******";
  config.headers.common['deviceid'] = "******";
  config.headers.common['signature'] = "******";
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 在请求错误时做些什么
  return Promise.reject(error);
})
```

**步骤 3**. 调用 `PartOne.vue`：

```
axios({
  url: "stat/getApersonnelDistribution",
  method: "get",
  params: {
    rank: 4
  },
}).then( (res) => {
  console.log(res);
})
```

### 3.2 单个页面多 API 调用

**步骤 1**. 全代码为：

```
create() {
  this._getApi();
},
methods: {
 _getApi() {
   axios(xxx).then( res=> {
     console.log(res);
     this._drawxxx(res);
   })
 },
 _drawxxx(res) {

 }
}
```

**步骤 2**. 理解：

**首先**，在 `create()` 中调用方法体。  

**然后**，在 `methods()` 中编写方法体，方法体调用 `axios`。  

**最后**，在方法体中通过 `axios` 获取到数据之后，将数据传入到方法中进行处理。

**步骤 3**. 缘故：这样分布处理，有利于代码逻辑优化，当某步出现错误的时候，方便调试。同时使用 `_` 开头命名方法，防止与其他 `api` 冲突。

### 3.3 Axios 封装

**步骤 1**. 封装 `api` 到 `src/api/api.js` 中

> api.js

```js
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
  // baseURL: 'http://172.****.****.5:8080',
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

**步骤 2**. 在 `Pages` 中调用：

> UserInfo.vue

```js
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

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
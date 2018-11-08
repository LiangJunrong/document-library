Axios
===

> Create by **jsliang** on **2018-11-8 13:41:10**  
> Recently revised in **2018-11-8 22:08:51**

<br>

&emsp;饮水思源：[Axios 中文文档](https://www.kancloud.cn/yunye/axios/234845)

&emsp;Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

* 从浏览器中创建 XMLHttpRequests
* 从 node.js 创建 http 请求
* 支持 Promise API
* 拦截请求和响应
* 转换请求数据和响应数据
* 取消请求
* 自动转换 JSON 数据
* 客户端支持防御 XSRF

<br>

## <a name="chapter-one" id="chapter-one">一 目录</a>

| 目录 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 正文](#chapter-two) |
| &emsp;<a name="catalog-chapter-two-one" id="catalog-chapter-two-one"></a>[2.1 get](#chapter-two-one) |
| &emsp;<a name="catalog-chapter-two-two" id="catalog-chapter-two-two"></a>[2.1 post](#chapter-two-two) |

<br>

## <a name="chapter-two" id="chapter-two">二 正文</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;axios 实战经验

<br>

## <a name="chapter-two-one" id="chapter-two-one">2.1 get</a>

> [返回目录](#catalog-chapter-two-one)

<br>

&emsp;方法：`axios.get(url, options)`

&emsp;话不多说，先上代码：

```
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

<br>

&emsp;如上，我们使用 axios 非常简单，只需要引用它的 cdn，然后通过：

```
axios.get()
.then()
.catch()
```

&emsp;就可以直接调用 axios 获取数据。

<br>

## <a name="chapter-two-two" id="chapter-two-two">2.2 post</a>

> [返回目录](#catalog-chapter-two-two)

<br>

&emsp;post 请求讲解

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
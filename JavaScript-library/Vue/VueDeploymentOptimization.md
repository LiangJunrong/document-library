Vue 部署优化
===

> Create by **jsliang** on **2018-12-7 14:53:566**  
> Recently revised in **2019-3-6 10:57:46**

<br>

&emsp;在进行 Vue 项目部署时，发现它访问速度贼慢，于是做了下优化，下面是优化建议：

<br>

# 一 进行路由懒加载

&emsp;[路由懒加载 - VueRouter 官网](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

&emsp;大致意思就是，将 `import PartOne from '@/components/PartOne'`

&emsp;换成 `const PartOne = () => import('@/components/PartOne');`

&emsp;这样，就可以访问快点了。

> index.js

```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const PartOne = () => import('@/components/PartOne');

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        PartOne: PartOne,
      }
    },
    {
      path: '/PartOne',
      name: 'PartOne',
      component: PartOne
    },
  ]
})
```

<br>

# 二 开启 Gzip

1. [Nginx 配置 Gzip](https://blog.csdn.net/liupeifeng3514/article/details/79018334)  

> PS：Nginx 需要在 conf/nginx.conf 文件中的 `http` 中设置。

```
#user  nobody;

# 跟CPU有关，不用修改
worker_processes  1;

events {
  # nginx最大负载量
  worker_connections  1024;
}

http {
  # mime type映射
  include       mime.types;
  default_type  application/octet-stream;

  # 启动高效传输文件的模式
  sendfile        on;

  # 长连接timeout
  keepalive_timeout  65;

  # 开启 gzip
  gzip  on;
  gzip_types text/plain application/x-javascript application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

  # http结构下可以有多个server。请求进来后，确定哪一个server由server_name决定
  server {
    # 监听端口
    listen      80 default_server;

    # 识别的域名
    server_name localhost default_server;

    # 一个关键配置，与URL参数乱码问题有关
    #charset utf-8;

    root html;

    location / {
      index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    # 
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   html;
    }
  }
  include ../vhost/*.conf;
}
```

<br>

2. [Vue 开启 Gzip](https://www.jianshu.com/p/44ce0f66e800)

&emsp;**首先**，安装 `compression-webpack-plugin`：

* `npm i compression-webpack-plugin -D`

&emsp;**然后**，修改配置代码：

> config/index.js

```
// ... 代码省略

productionGzip: true,
productionGzipExtensions: ['js', 'css'],
```

&emsp;**最后**，打包的文件中会有 `.gz` 后缀的文件，表示开启成功了。

<br>

# 三 屏蔽 sourceMap

&emsp;修改配置代码：

> config/index.js

```
// ... 代码省略

productionSourceMap: false,
```

&emsp;这个 `productionSourceMap` 有什么作用呢？其实就是项目打包后，我们的代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确知道是哪里的代码出错了，而开启了 `productionSourceMap`，就会自动生成一些 `map` 文件，准确地告诉我们哪一行那一列出错。  
&emsp;关闭了 `productionSourceMap` 后，一方面可以减少上线代码包的大小，另一方面提高系统的安全性。

<br>

# 四 开启 uglifyjs-webpack-plugin 的 cache

> build/webpack.prod.conf.js

```js
new UglifyJsPlugin({
  cache: true,
  uglifyOptions: {
    compress: {
      warnings: false
    }
  },
  sourceMap: config.build.productionSourceMap,
  parallel: true
}),
```

开启后打包第二次的时间是第一次的一半。

<br>

# 五 优化图片

&emsp;平时我们切图、下载图的 png、jpg 图片，都异常的大，所以我们需要对图片进行压缩：

* [TinyPNG | 图片压缩](https://tinypng.com/)

&emsp;上面的网站就能很不错地压缩图片，从而减少图片的体积。

<br>

# 六 参考文献：

1. [vuejs项目性能优化总结 | 简书 - Evtion](https://www.jianshu.com/p/41075f1f5297)

<br>

> [![知识共享许可协议](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
> **jsliang** 的文档库</a> 由 [梁峻荣](https://github.com/LiangJunrong/document-library) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。  
> 基于 [https://github.om/LiangJunrong/document-library](https://github.om/LiangJunrong/document-library) 上的作品创作。  
> 本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
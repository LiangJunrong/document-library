Vue 部署优化
===

> Create by **jsliang** on **2018-12-7 14:53:566**  
> Recently revised in **2019-05-31 14:25:00**

在进行 Vue 项目部署时，发现它访问速度贼慢，于是做了下优化，下面是优化建议：

## 一 进行路由懒加载

* [路由懒加载 - VueRouter 官网](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

大致意思就是，将 `import PartOne from '@/components/PartOne'`

换成 `const PartOne = () => import('@/components/PartOne');`

这样，就可以访问快点了。

> index.js

```js
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

## 二 开启 Gzip

* [Nginx 配置 Gzip](https://blog.csdn.net/liupeifeng3514/article/details/79018334)  

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

* [Vue 开启 Gzip](https://www.jianshu.com/p/44ce0f66e800)

**首先**，安装 `compression-webpack-plugin`：

* `npm i compression-webpack-plugin -D`

**然后**，修改配置代码：

> config/index.js

```js
// ... 代码省略

productionGzip: true,
productionGzipExtensions: ['js', 'css'],
```

**最后**，打包的文件中会有 `.gz` 后缀的文件，表示开启成功了。

## 三 屏蔽 sourceMap

修改配置代码：

> config/index.js

```js
// ... 代码省略

productionSourceMap: false,
```

这个 `productionSourceMap` 有什么作用呢？其实就是项目打包后，我们的代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确知道是哪里的代码出错了，而开启了 `productionSourceMap`，就会自动生成一些 `map` 文件，准确地告诉我们哪一行那一列出错。  

关闭了 `productionSourceMap` 后，一方面可以减少上线代码包的大小，另一方面提高系统的安全性。

## 四 开启 uglifyjs-webpack-plugin 的 cache

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

## 五 优化图片

平时我们切图、下载图的 png、jpg 图片，都异常的大，所以我们需要对图片进行压缩：

* [TinyPNG | 图片压缩](https://tinypng.com/)

上面的网站就能很不错地压缩图片，从而减少图片的体积。

## 六 参考文献：

* [vuejs项目性能优化总结 | 简书 - Evtion](https://www.jianshu.com/p/41075f1f5297)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
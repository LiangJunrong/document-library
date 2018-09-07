# Angular开发手册 - 3 - 开发准备
> create by **jsliang** on **2018年9月5日17:37:31**  
> Recently revised in **2018年9月7日15:49:33**

## 开发准备

## 3.1 安装依赖
1. 安装引用 jquery 和 bootstrap：
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>股票管理平台</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <app-root></app-root>

  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
</body>
</html>
```
2. 安装 TS 类型描述文件： `npm i @types/jquery @types/bootstrap -D` (由于 TypeScript 中不支持 $ ，所以我们需要先安装类型描述文件，让 TypeScript 认识 jQuery 和 Bootstrap ，以免它报错)

### 3.2 新建组件
1. 新建导航栏组件： `ng g component navbar`
2. 新建尾部组件： `ng g component footer`
3. 查询表单组件： `ng g component search`
4. 新建轮播图组件： `ng g component carousel`
5. 新建产品信息组件： `ng g component product`
6. 新建星级评价组件： `ng g component stars`
7. 查看是否有生成新的组件：

![图](../../public-repertory/img/js-angular-stock-management-platform-chapter3-1.png)

8. 此时，发现 **app.module.ts** 变为：
```
// 这是 Angular 的模块文件

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  // 声明模块、指令以及管道
  declarations: [
    //,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    AppComponent
  ],
  // 导入的模块
  imports: [
    // 浏览器模块
    BrowserModule
  ],
  // 模块中提供的服务
  providers: [],
  // 声明模块主组件
  bootstrap: [AppComponent]
})

export class AppModule { }
```

### 3.3 开始开发
> app.component.html
```
<app-navbar></app-navbar>
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <app-search></app-search>
    </div>
    <div class="col-md-9">
      <app-carousel></app-carousel>
      <app-product></app-product>
    </div>
  </div>
</div>
<app-footer></app-footer>
```

> navbar.component.html
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">管理平台</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">在线竞拍</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">关于我们</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">联系我们</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">网站地图</a>
      </li>
    </ul>
  </div>
</nav>
```

> navbar.component.css
```
.navbar {
    margin-bottom: 30px;
}
```

> footer.component.html
```
<div class="container">
  <hr>
  <footer>
    <div class="row">
      <div class="col-lg-12">
        <p>jsliang Angular 入门实战 @2018</p>
      </div>
    </div>
  </footer>
</div>
```

> search.component.html
```
<form name="searchForm">
  <div class="form-group">
    <label for="productTitle">商品名称</label>
    <input type="text" id="productTitle" placeholder="商品名称" class="form-control">
  </div>
  <div class="form-group">
    <label for="productPrice">商品价格</label>
    <input type="number" id="productPrice" placeholder="商品价格" class="form-control">
  </div>
  <div class="form-group">
    <label for="productCategory">商品类别</label>
    <select id="productCategory" class="form-control"></select>
  </div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-block">搜索</button>
  </div>
</form>
```

> carousel.component.html
```
<div class="row">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <style type="text/css">
              #holder_165b232526b text {
                fill: #555;
                font-weight: normal;
                font-family: Helvetica, monospace;
                font-size: 40pt
              }
            </style>
          </defs>
          <g id="holder_165b232526b">
            <rect width="800" height="400" fill="#777"></rect>
            <g><text x="285.921875" y="217.7">First slide</text></g>
          </g>
        </svg>
      </div>
      <div class="carousel-item">
        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <style type="text/css">
              #holder_165b2325267 text {
                fill: #444;
                font-weight: normal;
                font-family: Helvetica, monospace;
                font-size: 40pt
              }
            </style>
          </defs>
          <g id="holder_165b2325267">
            <rect width="800" height="400" fill="#666"></rect>
            <g><text x="247.3203125" y="217.7">Second slide</text></g>
          </g>
        </svg>
      </div>
      <div class="carousel-item">
        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <style type="text/css">
              #holder_165b232526d text {
                fill: #333;
                font-weight: normal;
                font-family: Helvetica, monospace;
                font-size: 40pt
              }
            </style>
          </defs>
          <g id="holder_165b232526d">
            <rect width="800" height="400" fill="#555"></rect>
            <g><text x="277" y="217.7">Third slide</text></g>
          </g>
        </svg>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
```

> product.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 1.5, "这是第一个商品，这是 jsliang 学习 Angular入门实战时创建的", ["硬件设备"]),
      new Product(1, "第二个商品", 2.99, 2.5, "这是第二个商品，这是 jsliang 学习 Angular入门实战时创建的", ["图书", "后端"]),
      new Product(1, "第三个商品", 3.99, 3.5, "这是第三个商品，这是 jsliang 学习 Angular入门实战时创建的", ["硬件设备"]),
      new Product(1, "第四个商品", 4.99, 4.5, "这是第四个商品，这是 jsliang 学习 Angular入门实战时创建的", ["电子产品", "硬件设备"]),
      new Product(1, "第五个商品", 5.99, 5.5, "这是第五个商品，这是 jsliang 学习 Angular入门实战时创建的", ["电子产品"]),
      new Product(1, "第六个商品", 6.99, 1.5, "这是第六个商品，这是 jsliang 学习 Angular入门实战时创建的", ["图书", "前端"])
    ]
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
```

> product.component.html
```
<div class="row">
  <div *ngFor="let product of products" class="col-sm-4 col-md-4 col-lg-4">
    <div class="thumbnail">
      <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <style type="text/css">
            #holder_165b232526d text {
              fill: #333;
              font-weight: normal;
              font-family: Helvetica, monospace;
              font-size: 40pt
            }
          </style>
        </defs>
        <g id="holder_165b232526d">
          <rect width="800" height="400" fill="#555"></rect>
          <g><text x="277" y="217.7">Third slide</text></g>
        </g>
      </svg>
      <div class="caption">
        <h4 class="pull-right">{{ product.price }}元</h4>
        <h4 class="pull-right">
          <a href="">{{ product.title }}</a>
        </h4>
        <p> {{ product.desc }} </p>
      </div>
      <div>
        <app-stars></app-stars>
      </div>
    </div>
  </div>
</div>
```


<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
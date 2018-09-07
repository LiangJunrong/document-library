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
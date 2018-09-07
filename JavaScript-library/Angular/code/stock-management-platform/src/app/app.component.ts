// 从 angular 核心中引用 Component 这个装饰器
import { Component } from '@angular/core';

// 定义装饰器
@Component({
  selector: 'app-root', // 挂载 dom 节点
  templateUrl: './app.component.html', // 模板 html 文件
  styleUrls: ['./app.component.css'] // 模板 css 样式文件
})

// 控制器
export class AppComponent {
  title = '股票管理平台'; // AppComponent 控制器有个 title 值
}
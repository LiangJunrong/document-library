# Angular开发手册 - 2 - 项目工程结构介绍
> create by **jsliang** on **2018年9月5日12:28:37**  
 
## 第二章 项目工程结构介绍
![图](../../public-repertory/img/js-angular-taskmgr-chapter2-1.png)

### 2.1 文件组织约定
* 目录结构按相对独立的功能划分
* src/app 下第一层子目录中除了模块，还有领域对象、动画和工具文件夹
* 资源存放在 src/assets 目录下

### 2.2 命名约定
* 模块和组件的类文件都使用 index.ts 的命名约定

### 2.3 新建项目
```
ng new taskmgr -si --style=scss —— 新建 angular 项目
// 注： -si === --skip-install
cnpm i —— 安装依赖
ng g m core —— 创建核心模块
ng g m shared —— 创建分享模块
```
![图](../../public-repertory/img/js-angular-taskmgr-chapter2-2.png)


### 2.4 添加代码
> taskmgr/src/app/core/core.module.ts
```
// 原代码
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { }
```

```
// 更新后代码
import { NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { 
  constructor(parent: CoreModule) {
    if(parent) {
      throw new Error("模块已经存在，不能再次加载！");
    }
  }
}
```

> taskmgr/src/app/shared/shared.module.ts
```
// 原代码
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }

```

```
// 更新后代码
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }

```

> taskmgr/src/app/app.module.ts
```
// 原代码

```

```
// 更新后代码
```

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
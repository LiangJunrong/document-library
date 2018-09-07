// 关闭 Angular 的开发模式
import { enableProdMode } from '@angular/core';
// 使用哪个模块来启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 导入主模块
import { AppModule } from './app/app.module';
// 导入环境配置
import { environment } from './environments/environment';

// 如果是生产环境，就调用下面方法
if (environment.production) {
  enableProdMode();
}

// 设置启动模块为 AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

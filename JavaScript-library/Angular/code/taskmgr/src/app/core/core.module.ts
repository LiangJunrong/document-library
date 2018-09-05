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

商城
===

> 使用 Vue 搭建的商城

## 运行机制

```
# 安装依赖
npm install

# 在 localhost:8080 运行
npm run dev

# 打包部署到服务器
npm run build
```

<br>

> 学习笔记

## 前端开发环境
* 安装 `vue-cli`：`npm i vue-cli -g`
* 初始化 Vue 项目：`vue init webpack`
* 开启开发模式：`npm run dev`
* 打开浏览器，查看网页： `http://localhost:8080`

## Vant 引用
* 安装 Vant：`npm i vant -S`
* 通过安装 `babel-plugin-import` 按需引用组件模块：`npm i babel-plugin-import -D`
* 在 `.babelrc` 文件中配置 `plugins`：

```
{
  "presets": [
      ... 省略，详情在 .babelrc 中有，复制下面的 plugins 就行
  ],
  "plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "vant",
        "style": true
      }
    ]
  ]
}

```  

<br>

* 页面中引用 Vant 组件：

> src/main.js

```
import { Button } from 'vant'
Vue.use(Button)
```

<br>

> App.vue

```
<van-button type="primary">主要按钮</van-button>
```

## 移动端屏幕适配基础

> 知识普及
 
* 常见的移动端 web 布局适配方法
1. 固定高度，宽度百分比（过时，不推荐）
2. Media Query（媒体查询）：Bootstrap
3. Flex 布局：主流布局模式，采用 Flex + rem 进行移动端适配
4. rem：相对单位长度，相对于根元素( html )的 `font-size` 计算值的倍数

<br>


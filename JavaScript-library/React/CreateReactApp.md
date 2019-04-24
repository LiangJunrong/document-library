Create React App - React 脚手架
===

> create by **jsliang** on **2019-04-24 11:36:57**   
> Recently revised in **2019-04-24 11:37:01**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/CreateReactApp.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

Create React App 是一个官方支持的创建 React 单页应用程序的方法。它提供了一个零配置的现代构建设置。

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

1. 下载 Node.js
2. 安装 React 脚手架：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`
4. 打包项目：`npm build`

* 参考链接：[Create React App 中文文档](https://www.html.cn/create-react-app/)

## <a name="chapter-four" id="chapter-four">四 默认支持特性</a>

> [返回目录](#chapter-one)

* 支持所有现代浏览器（排除 IE 9、10、11，如果需要，需要自行配置）
* 支持指数运算符 (ES2016)
* 支持 Async/await (ES2017)
* 支持 Object Rest(剩余)/Spread(展开) 属性 (ES2018)
* 支持动态 import() (stage 3 proposal)
* 支持 Class 字段和静态属性 (part of stage 3 proposal).
* 支持 JSX, Flow 和 TypeScript.

## <a name="chapter-five" id="chapter-five">五 使用 VS Code 调试</a>

> [返回目录](#chapter-one)

可以通过 Visio Studio Code 的插件调试 Create React App：

1. 调试 -> 添加配置：

> launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

2. 保存 -> 开始调试
3. 通过上述步骤即可调试，如有问题查看：

* 参考资料：[使用 VSCode 调试 React 应用](https://zhuanlan.zhihu.com/p/30583784)
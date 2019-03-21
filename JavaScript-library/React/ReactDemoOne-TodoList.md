React Demo One - TodoList
===

> Create by **jsliang** on **2019-3-18 08:37:10**  
> Recently revised in **2019-3-21 08:04:04**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoOne-TodoList.md)**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| &emsp;[3.1 新建 React 项目](#chapter-three-one) |
| &emsp;[3.2 项目目录解析](#chapter-three-two) |
| &emsp;[3.3 精简项目结构](#chapter-three-three) |
| &emsp;[3.4 双向数据绑定](#chapter-three-four) |
| &emsp;[3.5 组件式开发](#chapter-three-five) |
| &emsp;[3.6 父子组件通讯](#chapter-three-six) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 总结](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

通过编写一个简单的 TodoList 小 Demo，熟悉 React 的开发流程。

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

Now，开始搞事情。

### <a name="chapter-three-one" id="chapter-three-one">3.1 新建 React 项目</a>

> [返回目录](#chapter-one)

1. 下载 Node.js
2. 安装 React 脚手架：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`
4. 打开 `localhost:3000` 查看页面

![图](../../public-repertory/img/js-react-demo-one-1.png)

### <a name="chapter-three-two" id="chapter-three-two">3.2 项目目录解析</a>

> [返回目录](#chapter-one)

```shell
- todolist
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
    - mainfest.json      —— 提供 meta 信息给项目，并与 serviceWorker.js 相呼应，进行离线 APP 定义
  - src ——————————————————— 项目主要目录
    - App.css            —— 主组件样式
    - App.js             —— 主组件入口
    - App.test.js        —— 自动化测试文件
    - index.css          —— 全局 css 文件
    - index.js           —— 所有代码的入口
    - logo.svg           —— 页面的动态图
    - serviceWorker.js   —— PWA。帮助开发手机 APP 应用，具有缓存作用
  - .gitignore ——————————— 配置文件。git 上传的时候忽略哪些文件
  - package-lock.json ———— 锁定安装包的版本号，保证其他人在 npm i 的时候使用一致的 node 包
  - package.json ————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ———————————— 项目介绍文件
```

### <a name="chapter-three-three" id="chapter-three-three">3.3 精简项目结构</a>

> [返回目录](#chapter-one)

为了方便开发，下面对 creat-react-app 的初始目录进行精简：

```shell
- todolist
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
  - src ——————————————————— 重要的目录
    - App.js             —— 主组件入口
    - index.js           —— 所有代码的入口
  - .gitignore ——————————— 配置文件。git 上传的时候忽略哪些文件
  - package.json ————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ———————————— 项目介绍文件
```

`favicon.ico`、`.gitignore`、`README.md` 是我们无需理会的，但是其他文件，我们需要精简下它们的代码：

> 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Todolist</title>
  </head>
  <body>
    <noscript>你需要允许在 APP 中运行 JavaScript</noscript>
    <div id="root"></div>
  </body>
</html>
```

> 2. App.js

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React!
      </div>
    );
  }
}

export default App;
```

> 3. index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

> 4. package.json

```json
{
  "name": "todolist",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-scripts": "2.1.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

### <a name="chapter-three-four" id="chapter-three-four">3.4 初探组件</a>

> [返回目录](#chapter-one)

![图](../../public-repertory/img/js-react-demo-one-2.png)

类似于上图，在进行页面开发的时候，我们很容易地使用庖丁解牛的技巧，将页面进行划分，然后一部分一部分地将页面搭建出来。

给个比较官方的说法，就叫页面组件化：将页面切成几个部分，从而有利于页面的拼装以及代码的维护。

在 create-react-app 的默认配置中，App.js 就是一个组件，一起来看：

> App.js

```js
// 1. 引用 React 及其组件
import React, { Component } from 'react';

// 2. 定义一个叫 App 的组件继承于 Component
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React!
      </div>
    );
  }
}

// 3. 根据 React 实例，在 App 内部编写完毕后，导出这个 App 组件
export default App;
```

在上面，我们引用、定义并导出了这个 App 的组件，然后我们就要使用它：

> index.js

```js
// 1. 引入 React、ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 将 App.js 导入进来
import App from './App';

// 3. 通过 ReactDOM 将 App.js 以虚拟 DOM 的形式渲染/挂载到 root 根节点，该节点在 index.html 中
ReactDOM.render(<App />, document.getElementById('root'));
```

`index.js` 告诉我们，它会通过 ReactDom，将 App.js 这个组件挂载到 `root` 这个节点上，那么，这个 `root` 在哪里呢？我们查看下 index.html：

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortc ut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Todolist</title>
  </head>
  <body>
    <noscript>你需要允许在 APP 中运行 JavaScript</noscript>
    <div id="root"></div>
  </body>
</html>
```

OK，很容易地我们就捋清楚思路了：我们在 index.html 中定义了个 `root` 根节点，然后我们通过 index.js，将 App.js 以组件形式渲染到了 index.html 中，从而实现了节点的挂载。

> 思维发散：我们知道 index.js 和 App.js 的最终结合是挂载到 `id="root"` 节点上的，如果我们再开一个 index2.js 和 App2.js，挂载到 `id="root2"` 节点上，行不行呢？亦或者我们开一个 `id="root3"` 的节点，我们在其中操作 jQuery，是不是也可行？

### <a name="chapter-three-five" id="chapter-three-five">3.5 JSX</a>

> [返回目录](#chapter-one)



* **JSX**：

在上面代码中，不管是：

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

还是：

```js
class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello React!
      </div>
    );
  }
}
```

等这些有关 DOM 的渲染，都需要用到 JSX，所以需要引入 React：

```js
import React from 'react';
```

那么，什么是 JSX 呢？

React 的核心机制之一就是可以在内存中创建虚拟的 DOM 元素。React 利用虚拟 DOM 来减少对实际 DOM 的操作从而提升性能。 

JSX 就是 Javascript 和 XML 结合的一种格式。React 发明了 JSX，利用HTML 语法来创建虚拟 DOM。当遇到 `<`，JSX 就当 HTML 解析，遇到 `{` 就当 JavaScript 解析。

在 JSX 语法中，如果我们需要使用自己创建的组件，我们直接使用它的定义名即可，例如：

```js
// 1. 引入 React、ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 将 App.js 导入进来
import App from './App';

// 3. 通过 ReactDOM 将 App.js 以虚拟 DOM 的形式渲染/挂载到 root 根节点，该节点在 index.html 中
ReactDOM.render(<App />, document.getElementById('root'));
```

其中第三点即是自定义组件渲染到根节点。

> 如果需要使用自定义组件，那么该组件不能小写开头 ~~app~~，而是使用 `App` 这样的大写开头形式。

* **事件及双向数据绑定**：

```js
// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '1312',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 单项数据绑定 */}
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>吃饭</li>
          <li>睡觉</li>
          <li>打豆豆</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }

}

export default TodoList;
```

### <a name="chapter-three-six" id="chapter-three-six">3.6 父子组件通讯</a>

> [返回目录](#chapter-one)

* **新增与修改**：

```js
// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // 渲染页面
  render() {
    let closeStyle = {
      fontSize: '1.2em',
      color: 'deepskyblue'
    }
    return (
      <Fragment>
        <div>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map( (item, index) => {
              return <li key={index}>
                <span>{index} - {item}</span>
                <span style={closeStyle} onClick={this.handleItemDelete.bind(this, index)}>×</span>
              </li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 方法体 - 输入内容
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 方法体 - 删除项目
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}

export default TodoList;
```

* **组件**：

```js
// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

// 引用样式
import './style.css';

// 引入组件
import TodoItem from './TodoItem';

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // 渲染页面
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            id="insertArea"
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map( (item, index) => {
              return (
                <TodoItem 
                  item={item} 
                  index={index}
                  handleItemDelete={this.handleItemDelete.bind(this)}
                />
                // <li key={index}>
                //   <span>{index} - {item}</span>
                //   <span className="icon-close" onClick={this.handleItemDelete.bind(this, index)}>×</span>
                // </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 方法体 - 输入内容
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  // 方法体 - 删除项目
  handleItemDelete(index) {
    // immutable - state 不允许做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}

export default TodoList;
```

* **再次优化**：

```js
// Fragment 是一种占位符形式，类似于 Vue 的 Template
import React, { Component, Fragment } from 'react';

// 引入组件
import TodoItem from './TodoItem';

// 引用样式
import './style.css';

class TodoList extends Component {

  // 构造函数
  constructor(props) {
    super(props);
    // 定义数据
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 渲染页面
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          {/* 单项数据绑定 */}
          {/* 在 React 中，绑定时间的，一般为半驼峰形式 */}
          <input 
            id="insertArea"
            type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {/* 精简 JSX，将部分抽取出来 */}
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  // 获取单独项
  getTodoItem() {
    return this.state.list.map( (item, index) => {
      return (
        <TodoItem 
          key={index}
          item={item} 
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      )
    })
  }

  // 方法体 - 输入内容
  handleInputChange(e) {
    const value = e.target.value;
    this.setState( () => ({
      inputValue: value
    }))
  }

  // 方法体 - 点击提交
  handleBtnClick() {
    const list = this.state.list,
          inputValue = this.state.inputValue;
    this.setState( () => ({
      list: [...list, inputValue],
      inputValue: ''
    }))

    // 或者可以这样写：
    // this.setState( (prevState) => ({
    //   list: [...prevState.list, prevState.inputValue],
    //   inputValue: ''
    // }))

  }

  // 方法体 - 删除项目
  handleItemDelete(index) {
    // immutable - state 不允许做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState( () => ({
      list: list
    }))
  }

}

export default TodoList;
```

> TodoItem.js

```js
import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // 这种写法可以节省性能
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        <span>{item}</span>
        <span className="icon-close" onClick={this.handleClick}>×</span>
      </li>
    )
  }

  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }

}

export default TodoItem;
```

## <a name="chapter-four" id="chapter-four">四 总结</a>

> [返回目录](#chapter-one)

## <a name="chapter-five" id="chapter-five">五 参考文献</a>

> [返回目录](#chapter-one)

1. [《React.Component 与 React.PureComponent（React之性能优化）》](https://www.cnblogs.com/clover77/p/9394514.html)
2. [《visual studio code + react 开发环境搭建》](https://www.jianshu.com/p/ec7c2bab16cc)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
2020 React 学习
===

> Create by **jsliang** on **2020-09-14 13:42:13**  
> Recently revised in **2020-09-15 22:35:39**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

### React

React 是什么？

React 是一个用于构建用户界面的 JavaScript 库

中文手册：https://react.docschina.org/

### 命令式编程和声明式编程

* 命令式编程（jQuery）：告诉计算机怎么做（How） - 过程

```js
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
  if (this.classList.contains(‘red’)) {
    this.classList.remove(‘red’);
    this.classList.add(‘blue’);
  } else {
    this.classList.remove(‘blue’);
    this.classList.add(‘red’);
  }
};
container.appendChild(btn);
```

* 声明式编程（React）：告诉计算机我们要什么（What） - 结果

```js
class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

React 没有去修改 DOM，只是声明了页面应该是什么样子（根据不同的 `state`）.

放到整个应用层面也是一样的道理，我们更加需要关心的是整个应用和页面的框架结构。

### create-react-app 脚手架

虽然通过 `script` 的方式也能完成 React.js 的开发，但是它无法使用模块化，因此需要使用 Create React App.

Create React App 是一个使用 Node.js 编写的命令行工具，通过它可以帮助我们快速生成 React.js 项目，并内置了 Babel、Webpack 等工具帮助我们实现 ES6+ 解析、模块化解析打包，也就是通过它，我们可以使用 模块化 以及 ES6+ 等更新的一些特性。同时它还内置 ESLint 语法检测工具、Jest 单元测试工具。还有一个基于 Node.js 的 WebServer 帮助我们更好的在本地预览应用，其实还有更多。

这些都通过 Create React App 帮助我们安装并配置好了，**开箱即用**。

### 初始化

* `create-react-app` 脚手架 + `Node` 环境
* 安装脚手架：`npm i create-react-app -g`
* 创建项目：`create-react-app 项目名`
* 启动项目：`npm start`
* 打包项目：`npm run build`

### JSX

* JSX：JavaScript + XML
* 它可以作为值使用
* 它并不是字符串
* 它也不是 HTML
* 它可以配合 JavaScript 表达式一起使用

### 插值表达式

在 JSX 中可以使用 `{表达式}` 嵌入表达式

表达式：产生值的一组代码的集合

* 变量
* 算术运算
* 函数调用
* ……

注意：分清楚 表达式 和 语句 的区别，`if`、`for`、`while` 这些都是语句，JSX 不支持语句

* 不同类型的数据在插值中的表现
  * 字符串、数字：原地输出
  * 布尔值、空、未定义：被忽略
  * 数组：去掉逗号，根据数量生成对应节点
  * 对象：不识别

### 条件渲染

* 三目运算符
* 与或运算符

### JSX 使用注意事项

* React 必须有一个顶层的包含元素 - `React.Fragment`
* JSX 不是 HTML，很多属性编写时不一样，例如 `className`、`htmlFor` 等
  * `style` 接受的是一个对象。`style={{ color: 'red' }}`
  * `className` 可以接收一个字符串，也可以是一个表达式
* 列表渲染，必须有 key
* 在 JSX 中，所有标签必须闭合
* 标签小写字母开头，组件大写字母开头

**XSS** 为了有效地防止 XSS 注入攻击，React DOM 会在渲染的时候把内容（字符串）进行转义，所以字符串形式的标签是不会作为 HTML 标签进行处理的。

### 组件化

组件：对具有一定独立功能的数据和方法的封装，对外暴露接口，有利于代码功能的复用，且不担心冲突问题。

* 函数式组件
  * 函数的名称就是组件的名称
  * 函数的返回值就是组件要渲染的内容
* 类式组件
  * 组件类必须继承 `React.Component`
  * 组件类必须有 `render` 方法

### props

1. 调用 jsx 文件
2. 父子组件通讯：`props`

> 父组件

```js
import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
  render() {
    return (
      <h1>
        <hr />
        React 父组件
        <hr />
        <Child info1={'React 父组件'} info2={'给子组件传递的 2 条信息'} />
      </h1>
    )
  }
}
```

子组件：

```js
import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    const { info1, info2 } = this.props;

    return (
      <div>
        { info1 }{ info2 }
      </div>
    )
  }
}
```

### state 状态

在 React 组件中，通过 `state` 来控制视图的渲染，当我们希望更新不同的视图，用 `state` 来进行控制

`state` 是组件内部一种可以改变的数据，数据改变之后，UI 也会随之进行改变

需要重新渲染视图，必须调用 `setState`。

```js
import React, { Component } from 'react'

export default class State extends Component {
  state = {
    count: 1,
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            count++;
            this.setState({
              count, 
            })
          }}
        >
          点击加一
        </button>
      </div>
    )
  }
}
```

### props 和 state 的区别

* `props` - 父组件传递过来的参数
* `state` - 组件自身状态
  * `setState` 修改数据
  * 多个 `setState` 合并

`state` 的主要作用是用于保存、控制以及修改自己的可变状态，可以在组件内部进行修改，但是无法在组件外部进行修改组件的 `state`

`props` 的主要作用是让使用该组件的父组件和可以传入参数来配置该组件，它是外部传进来的配置参数，组件内部无法控制也无法修改

`state` 和 `props` 都可以决定组件的外观和显示状态。通常，`props` 作为不变数据或者初始化数据传递给组件，可变状态使用 `state`


### this 指向问题

在 React 中事件处理函数的 `this` 默认为 `undefined`。

？为什么？

解决 this 指向问题的两种方法：

1. 利用箭头函数，使函数的 `this` 继承所在作用域，指向组件的实例
2. 利用 `bind` 绑定 `this`

```js
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={() => { console.log(this) }}>
          点击 1
        </button>
        <button onClick={this.clickHandler}>
          点击 2
        </button>
      </div>
    )
  }
}

export default App;
```

### setState()

* `setState` 的参数
  * 对象
  * 函数：使用函数作为参数时，一定要有返回值，返回值是一个对象，对象中定义的是关于 `setTimeout`
* `setState` 会自动帮助我们合并 `state`，所以只需要传入要修改的项即可。
* `setState` 是异步方法，不会立马修改 `state`
* 短时间内多次 `setState`，React 会合并操作，只重新渲染一次。

```js
  state = {
    age: 10,
  }
  render() {
    let { age } = this.state;
    return (
      <div>
        <p>{ age }</p>
        <button
          onClick={() => {
            // 写法 2
            // age++;
            // this.setState(() => {
            //   return {
            //     age,
            //   };
            // });
            this.setState({
              age: age + 1,
            })
          }}
        >添加年龄</button>
      </div>
    )
  }
```

* `setState` 渲染完毕：

```js
this.setState({
  age: age + 1,
}, () => {
  console.log('组件重新渲染完毕')
})
```

### 组件通讯

在 React.js 中，数据是从上至下流动（传递）的，也就是一个父组件可以把它的 `state` / `props` 通过 `props` 传递给它的子组件，但是子组件不能修改 `props`

React.js 是单项数据流，如果子组件需要修改父组件状态（数据），是通过回调函数方式来完成的。

React 组件间通讯：组件之间传递信息

* 父级向子级传递信息
  * 把要传递的信息在调用子组件时，加组件的属性上。在子组件内容通过 `props` 属性进行接收
* 子级向父级传递信息
  * 在父级中定义相关的操作回调，然后该回调方法传递给子级，子级需要传递数据给父级时，则调用父级传入的回调方法
* 同级之间传递信息
  * 把信息和回调方法定义在父级中，通过父级去管理

### 跨组件通讯 Context

* `React.createContext(defaultValue);`
     `{ Consumer, Provider } = createContext(defaultValue)`
* `Context.Provider` 在父组件调用 `Provider` 传递数据
    * `value` 要传递的数据
* 接收数据
    * `class.contextType = Context;`
    * `static contextType = Context;`
      * `this.context;`
    * `Context.Consumer`

```js
<Consumer>
    {(props)=>{
        console.log(props);
        return <div></div>
    }}
</Consumer>
```

**注意在使用不熟练时，最好不要在项目中使用 context，context 一般给第三方库使用**

> context.js

```js
import { createContext } from 'react'

const context = createContext();

console.log(context);
/*
  $$typeof: Symbol(react.context)
  Consumer: {$$typeof: Symbol(react.context), _context: {…}, _calculateChangedBits: null, …}
  Provider: {$$typeof: Symbol(react.provider), _context: {…}}
  _calculateChangedBits: null
  _currentRenderer: null
  _currentRenderer2: null
  _currentValue: undefined
  _currentValue2: undefined
  _threadCount: 0
  __proto__: Object
*/

const { Provider, Consumer } = context;


export default context;

export {
  Provider, // 向下传递信息
  Consumer, // 接收信息
}

```

> Father.jsx

```js
import React, { Component } from 'react'
import Child from './Child'
import { Provider } from './context'

export class Father extends Component {
  state={
    info: '要传递的内容',
  }
  changeInfo = (from) => {
    this.setState({
      info: `改变了要传递的内容 - 来自${from}`,
    })
  }
  render() {
    const { info } = this.state;
    return (
      <Provider
        value={{
          info,
          changeInfo: this.changeInfo,
        }}>
        <Child />
      </Provider>
    )
  }
}

export default Father

```

> Child.jsx

```js
import React, { Component } from 'react';
import context, { Consumer } from './context';

export class Child extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(props) => {
            console.log(props);
            const { info, changeInfo } = props;
            return (
              <React.Fragment>
                <h1>{info}</h1>
                <button onClick={() => changeInfo('子级')}>点击传递给父级</button>
              </React.Fragment>
            );
          }}
        </Consumer>
      </div>
    );
  };
  // 方法二
  // render() {
  //   return <h1>{this.context.info}</h1>
  // }
}

// 方法二
// Child.contextType = context;

export default Child

```

### 组件生命周期

组件生命周期：组件从创建到卸载中间的各个过程

React 16.3 之前组件的生命周期函数：

* 挂载阶段
  * `construcror`：初始化
  * `componentWillMount`：组件即将挂载到真实 DOM
  * `render`：生成虚拟 DOM
  * `componentDidMount`：组件已经挂载到真实 DOM
* 更新阶段
  * `conponentWillReceiveProps(nextProps)`：父组件更新引起子组件更新并传入新的 `props`
  * `shouldComponentUpdate(nextProps, nextState)`：判断组件是否需要更新，当返回值为 `true`，继续执行后续生命周期函数，然后完成组件更新；为 `false` 时后续声明周期不执行，组件不会更新
  * `componentWillUpdate(nextProps, nextState)`：组件即将更新
  * `render`：生成虚拟 DOM
  * `componentDidiUpdate(prevProps, prevState)`：组件更新完毕
  * 在 `render` 之前，新的 `props` 和 `state` 只能通过参数获取，`this.props` 和 `this.state` 中保存的还是更新之前的数据
* 卸载阶段
  * `componentWillUnmount`：即将从 DOM 中删除组件

React 16.3 之后组件的声明周期函数：

新增：

1. `static getDerivedStateFromProps(props, state)`
2. `getSnapshotBeforeUpdate`

删除：

1. `componentWillMount`
2. `conponentWillReceiveProps(nextProps)`
3. `componentDidiUpdate(prevProps, prevState)`

完整：

* 挂载阶段
  * `constructor`
  * `static getDerivedStateFromProps(props, state)`：在组件挂载和更新之后执行，把 `newProps`，加到 `state` 里面
  * 注意 this 问题
  * `render`
  * `componentDidMount`：处理副作用(请求)
* 更新阶段
  * `static getDerivedStateFromProps(props, state)`：在组件挂载和更新之后执行，把 `newProps`，加到 `state` 里面
  * `shouldComponentUpdate`：判断是否跟新
  * `render`
  * `getSnapshotBeforeUpdate`：组件更新之后，已经执行了 `render`，还没有把虚拟 DOM 生成真实 DOM 去，用来获取组件之前的 DOM 快照
  * `componentDidUpdate()`：处理副作用(请求)
* 卸载阶段
  * `componentWillUnmount`：删除添加在全局的一些信息或操作

强制更新：`this.forceUpdate()`


---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
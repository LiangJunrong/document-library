2020 React 学习
===

> Create by **jsliang** on **2020-09-14 13:42:13**  
> Recently revised in **2020-09-17 14:44:15**

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


### 受控组件和非受控组件

### key 值

涉及到 `diff` 算法。

React 通过 `key` 的比较，新增、删除和更新节点。

`key` 值不要使用索引，因为如果它更新前后都是相同的项，但是项里面的内容不同了，这样就没法监听到，从而更新不了。

### PureComponent

`PureComponent` 提供了一个具有浅比较的 `shouldComponentUpdate` 方法，其他和 `Component` 完全一致。

### ref

获取组件 DOM。

* 旧版 - `string ref`
* 新版 - `createRef()`

注意：在组件挂载完成之后及更新之后使用

### dangerouslySetInnerHTML

危险地设置 HTML。

```html
<div dangerouslySetInnerHTML={{ _html: data }}></div>
```

### children

组件标签对中间的内容会被当做一个特殊的属性 `props.children` 传入组件内容

可以自定义结构的组件的常用形式

* `children`
* 传递函数
* 传递子组件

> Father.jsx

```js
import React, { Component } from 'react';
import Child from './Child';

export class App extends Component {
  render() {
    return (
      <Child>
        <p>你好</p>
        <p>通过 Child 传递过去</p>
      </Child>
    )
  }
}

export default App;
```

> Child.jsx

```js
import React, { Component } from 'react';

export class Child extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Child;
```

### 函数式组件

> Pure.jsx

```js
import React from "react";

function Title(props) {
  // 默认情况下，尤其是 16.7 之前，函数式组件没有 state 和声明周期，所以也叫做纯渲染组件
  return (
    <div className="title">
      <h1>jsliang</h1>
    </div>
  )
}

function Bar(props) {
  return (
    <div>
      <p>你好，纯渲染组件</p>
      {props.val}
    </div>
  )
}

export { Title, Bar };
```

> 引用

```js
import React, { Component } from 'react'
import { Title, Bar } from './Pure'

export class App extends Component {
  state={
    val: 'Hello World!',
  }
  render() {
    const { val } = this.state;
    return (
      <div>
        <Title />
        <Bar props={{ val }} />
      </div>
    )
  }
}

export default App

```


### 函数式组件

函数式组件：

1. 参数是 `props`
2. `return` 是该组件要构建的视图
3. 在 16.7 之前，函数式组件没有 `state` 也没有生命周期，被称之为 **无状态组件** 或者 **纯渲染组件**

> Pure.jsx

```js
import React from "react";

function Title(props) {
  // 默认情况下，尤其是 16.7 之前，函数式组件没有 state 和声明周期，所以也叫做纯渲染组件
  return (
    <div className="title">
      <h1>jsliang</h1>
    </div>
  )
}

function Bar(props) {
  return (
    <div>
      <p>你好，纯渲染组件</p>
      {props.val}
    </div>
  )
}

export { Title, Bar };
```

> 引用

```js
import React, { Component } from 'react'
import { Title, Bar } from './Pure'

export class App extends Component {
  state={
    val: 'Hello World!',
  }
  render() {
    const { val } = this.state;
    return (
      <div>
        <Title />
        <Bar props={{ val }} />
      </div>
    )
  }
}

export default App

```

### hook

`hook`：钩子函数，无需编写类即可使用状态和其他 React 功能

* `useState`：`const [状态, 修改状态的方法] = useState(初始值);`
  * `const [state, setState] = useState(initialState);`
* `useEffect`：
  * 类组件 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
  * 需要清除的副作用
* `useRef`

```js
import React, { useState } from 'react'

function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>数值：{count}</p>
      <button
        onClick={() => {
          setCount((++count));
        }}
      >
        加 1
      </button>
    </div>
  )
}

export default App;
```

`useState` 注意事项：

1. `setState` 方法同样是异步方法
2. 只要调用 `setState` 组件就会更新，不过无需担心渲染性能
3. 如果 `state` 是对象类型的数据，更新时要注意把其他状态合起来，`setState` 

```js
import React, { useState } from 'react'

function App() {
  let [state, setState] = useState({
    name: 'jsliang',
    count: 10,
  });
  let { name, count } = state;
  return (
    <div>
      <p>姓名：{name}</p>
      <p>数值：{count}</p>
      <button
        onClick={() => {
          setState({
            ...state,
            count: count + 1,
          });
        }}
      >
        加 1
      </button>
    </div>
  )
}

export default App;
```

* `useEffect`：`useEffect(回调函数, [依赖])`
  * 类组件 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
  * 需要清除的副作用:异步处理、数据请求、DOM 操作

```js
import React, { useState, useEffect } from 'react'

function App() {
  let [state, setState] = useState({
    name: 'jsliang',
    count: 10,
  });
  let { name, count } = state;

  // 组件挂载：调用函数组件 -> 渲染完成之后 -> 副作用函数
  // 组件更新：准备更新 -> 返还函数 -> 组件更新 -> 更新完成之后 -> 副作用函数
  // 组件卸载：准备卸载 -> 返还函数 -> 组件卸载
  useEffect(() => { // 副作用函数
    console.log('数值更新完成'); // 再走这里
    return () => { // 返还函数
      console.log('数值准备更新'); // 先走这里
    }
  }, [count]);

  // 当 useEffect 依赖为空时，该副作用只在组件挂载完成之后执行
  // 该副作用的返还函数，只在组件执行
  useEffect(() => {
    console.log('副作用函数'); // 除了初始化会走，点击按钮不输出
    return () => {
      console.log('返还函数'); // 一直不会执行
    }
  }, [])

  return (
    <div>
      <p>姓名：{name}</p>
      <p>数值：{count}</p>
      <button
        onClick={() => {
          setState({
            ...state,
            count: count + 1,
          });
        }}
      >
        加 1
      </button>
    </div>
  )
}

export default App;
```

* `useRef`

```js
import React, { useState, useEffect, useRef } from 'react'

function App() {
  let [state, setState] = useState({
    name: 'jsliang',
    count: 10,
  });
  let { name, count } = state;

  // 组件挂载：调用函数组件 -> 渲染完成之后 -> 副作用函数
  // 组件更新：准备更新 -> 返还函数 -> 组件更新 -> 更新完成之后 -> 副作用函数
  // 组件卸载：准备卸载 -> 返还函数 -> 组件卸载
  useEffect(() => { // 副作用函数
    console.log('数值更新完成'); // 再走这里
    return () => { // 返还函数
      console.log('数值准备更新'); // 先走这里
    }
  }, [count]);

  // 当 useEffect 依赖为空时，该副作用只在组件挂载完成之后执行
  // 该副作用的返还函数，只在组件执行
  useEffect(() => {
    console.log('副作用函数'); // 除了初始化会走，点击按钮不输出
    return () => {
      console.log('返还函数'); // 一直不会执行
    }
  }, []);

  const btn = useRef();
  console.log(btn); // {current: button}

  return (
    <div>
      <p>姓名：{name}</p>
      <p>数值：{count}</p>
      <button
        ref={btn}
        onClick={() => {
          setState({
            ...state,
            count: count + 1,
          });
          btn.current.innerHTML = '加加';
        }}
      >
        加 1
      </button>
    </div>
  )
}

export default App;
```

`useRef()` 除了可以获取 DOM 节点之前，也可以用来保存更新前的数据。

注意组件更新是不会更新 `ref` 中保存的值的，需要我们手动更新。（DOM 绑定除外）

```js
const prevData = useRef(count);
useEffect(() => {
  // 如果没有更新，手动更新
  if (prevData.current !== count) {
    prevData.current = count;
  }
}, [count])
```

* `hooks` 使用规定

1. 只在 React 函数中调用 Hook
   1. React 函数组件中
   2. 自定义 React Hook
2. 只在最顶层使用 Hook。不能放到 `function` -> `if` 等语法里面

### 自定义 Hook

* 自定义 Hook 必须以 `use` 开始命名
* 作用：复用一些逻辑

> scroll.js

```js
import React from 'react';
import useScroll from './hook';

function Scroll() {
  const scrolly = useScroll();
  return (
    <div>
      <style>
        {
          `
            div {
              width: 500px;
              height: 400px;
              border: 2px solid #000;
            }
          `
        }
      </style>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <span
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          padding: 10,
          border: '1px solid #ccc',
          background: '#f1f1f1'
        }}
      >
        当前位置：{scrolly}
      </span>
    </div>
  )
}

export default Scroll;
```

> hook.js

```js
import { useEffect, useState } from 'react';

function useScroll() {
  let [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY);
    };
    return () => {
      window.onscroll = null;
    }
  }, [scrollY]);

  return scrollY;
}

export default useScroll;
```

### 路由

* 路由：根据不同的 URL 规则，呈现不同的页面

当应用变得复杂的时候，就需要分块的进行处理和展示。

传统模式下，我们是把整个应用分成了多个页面，然后通过 URL 进行连接。

但是这种方式也有一些问题，每次切换页面都需要重新发送所有请求和渲染整个页面，不止性能上会有影响，同时也会导致整个 JavaScript 重新执行，丢失状态。

### SPA

Single Page Application：单页面应用，整个应用只加载一个页面（入口页面），后续在与用户的交互过程中，通过 DOM 操作在这个单页上动态生成结构和内容

**优点：**

* 有更好的用户体验（减少请求和渲染和页面跳转产生的等待与空白），页面切换快
* 重前端，数据和页面内容由异步请求（AJAX）+ DOM 操作来完成，前端处理更多的业务逻辑

**缺点：**

* 首次进入处理慢
* 不利于 SEO

### SPA 的页面切换机制

虽然 SPA 的内容都是在一个页面通过 JavaScript 动态处理的，但是还是需要根据需求在不同的情况下分内容展示。

如果仅仅只是依靠 JavaScript 内部机制去判断，逻辑会变得过于复杂。

通过把 JavaScript 与 URL 进行结合的方式：JavaScript 根据 URL  的变化，来处理不同的逻辑，交互过程中只需要改变 URL 即可。

这样把不同 URL 与 JavaScript 对应的逻辑进行关联的方式就是路由，其本质上与后端路由的思想是一样的。

### 前端路由

前端路由只是改变了 URL 或 URL 中的某一部分，但一定不会直接发送请求，可以认为仅仅只是改变了浏览器地址栏上的 URL 而已。

JavaScript 通过各种手段处理这种 URL 的变化，然后通过 DOM 操作动态的改变当前页面的结构

* URL 的变化不会直接发送 HTTP 请求
* 业务逻辑由前端 JavaScript 来完成

目前前端路由主要的模式：

* 基于 URL Hash 的路由
* 基于 HTML5 History API 的路由：https://developer.mozilla.org/zh-CN/docs/Web/API/History_API

### React Router

理解了路由基本机制以后，也不需要重复造轮子，我们可以直接使用 React Router 库

* https://reacttraining.com/react-router/

React Router 提供了多种不同环境下的路由库

* web
* native

React Router 知识点：

* `BrowserRouter`：基于 `history` 的路由模式，特征和正常的 `url` 没有任何区别
* `HashRouter`：基于 `hash` 值的路由模式，特征在 `url` 里，路径以 `#` 号开始

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>  ,
  document.getElementById('root')
);
```

* Route 组件作用，根据 `url` 来匹配视图
  * path 要匹配的 `url` 路径
    * 注意 `path` 默认是模糊匹配，即当前 `url` 以 `path` 开始时就会匹配成功
    * exact 精确匹配 即 `url` 必须 和 `path` 一致时才会匹配成功
    * strict 严格匹配 如 `path` 为：`/about`，url 为：`/about/`, 不加 `strict` 匹配成功，加了 `strict` 则匹配不成功
    * 多规则匹配: `[path1, path2, ……]`;
  * `component` 路径匹配成功之后要显示的视图组件
  * `/about/details`

```js
import React, {Fragment } from 'react';
import { Route } from 'react-router-dom';
import IndexView from './view/index';
import AboutView from './view/about';
import JoinView from './view/join';
import Nav from './component/nav';

function App() {
  return (
    <Fragment>
      <Nav />
      <Route path={["/","/index"]} exact component={IndexView} />
      <Route path="/about" exact strict component={AboutView} />
      <Route path="/join" exact component={JoinView} />
    </Fragment>
  );
}

export default App;
```

* `Link` 链接组件
* `to` 属性为要跳转的链接

```js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  return (
    <nav>
      <Link to="/">首页</Link>
      <span> | </span>

      {/* 在路由项目中，不要用 a 做跳转，会进行页面刷新 */}
      <a href="/">a-首页</a>
      <span> | </span>

      <Link to="/about">关于我们</Link>
      <span> | </span>

      <Link to="/join">加入我们</Link>
      <span> | </span>

      {/* 外链的话则使用 a 标签，不要用lin */}
      {/* <Link to="https://www.baidu.com">百度</Link> */}
      <a href="https://www.baidu.com">百度</a>
    </nav>
  )
}

export default Nav;
```

* 基于 web 的 React Router 为：`react-router-dom`
* 安装 `npm i -S react-router-dom`
* BrowserRouter 组件（history）：基于 HTML5 History API 的路由组件
* HashRouter 组件（hash）：基于 URL Hash 的路由组件
* Route 组件：通过该组件来设置应用单个路由信息，Route 组件所在的区域就是就是当 `url` 与当前 Route 设置的 `path` 属性匹配的时候，后面 `component` 将要显示的区域
* `exact` 属性表示路由使用 精确匹配模式，非 `exact` 模式下 '/' 匹配所有以 '/' 开头的路由
* `Link` 组件用来处理 `a` 链接 类似的功能（它会在页面中生成一个 `a` 标签），但设置这里需要注意的，`react-router-dom` 拦截了实际 `a` 标签的默认动作，然后根据所有使用的路由模式（Hash 或者 HTML5）来进行处理，改变了 URL，但不会发生请求，同时根据 Route 中的设置把对应的组件显示在指定的位置
* `to` 属性类似 `a` 标签中的 `href`

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
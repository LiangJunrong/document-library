React Demo Two - TodoList 升级
===

> create by **jsliang** on **2019-3-26 09:26:53**   
> Recently revised in **多久**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoTwo-TodoListUpgrade.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 初始化项目](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 使用 Ant Design](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 使用 Redux](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 Redux 探索](#chapter-six) |
| &emsp;[6.1 Redux 插件](#chapter-six-one) |
| &emsp;[6.2 Redux 知识点讲解](#chapter-six-two) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 Redux 探索](#chapter-seven) |
| &emsp;[7.1 Input 输入数据](#chapter-seven-one) |
| &emsp;[7.2 Button 提交数据](#chapter-seven-two) |
| &emsp;[7.3 删除 TodoItem 列表项](#chapter-seven-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

本次 Demo 基于 ReactDemoOne 进行了 Redux 的升级，同时会讲解到中间件 Redux-Thunk 以及 Redux-Saga，最终会使用 React-Redux 进行项目重构。

所以，没有看第一篇的小伙伴可以查看：

* [React Demo One - TodoList](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoOne-TodoList.md)

如果小伙伴想对照这源码一起看文章，可以前往下面地址下载：

* [React 系列源码地址](https://github.com/LiangJunrong/React)

注意，本文代码在 TodoListUpgrade 目录，并且它四个文件夹，分别对应：

* Redux-Base —— 记录 Redux 基础内容
* Redux-Thunk —— 在 Redux-Base 基础上进行 `redux-thunk` 的中间件配置
* Redux-Saga —— 在 Redux-Base 基础上进行 `redux-saga` 的中间件配置
* React-Redux —— 对 TodoList 进行 `react-redux` 重新改造

Redux-Base 项目最终目录如下，小伙伴可以先创建空文件放着，后续将使用到：

![图](../../public-repertory/img/js-react-demo-two-1.png)

## <a name="chapter-three" id="chapter-three">三 初始化项目</a>

> [返回目录](#chapter-one)

获取 [React 系列](https://github.com/LiangJunrong/React) 中 Simpify 目录中的代码，将其 Copy 到 Redux-Base 中，并将 App 修改为 TodoList，进行 TodoList 小改造。

下面我们开始修改：

> 1. src/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
```

</details>

> 2. src/~~App.js~~ TodoList.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
import './index.css';

class TodoList extends Component {
  render() {
    return (
      <div className="App">
        Hello TodoList!
      </div>
    );
  }
}

export default TodoList;
```

</details>

> 3. src/index.css

<details>

  <summary>代码详情</summary>

```css
/* 尚未进行编写 */
```

</details>

此时我们在终端运行 `npm run start`，显示结果为：

![图](../../public-repertory/img/js-react-demo-two-2.png)

## <a name="chapter-four" id="chapter-four">四 使用 Ant Design</a>

> [返回目录](#chapter-one)

* Ant Design 官网：https://ant.design/index-cn

下面开始在 TodoList 项目中使用 Ant Design：

* 安装：`npm i antd -S`
* 使用：

> 1. src/TodoList.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react'; // 引入 React 及其 Component
import './index.css'; // 引入 index.css
import { Input, Button, List } from 'antd'; // 1. 引入 antd 的列表
import 'antd/dist/antd.css'; // 2. 引入 antd 的样式

// 3. 定义数据
const data = [
  '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
  '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
  '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
  '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
];

class TodoList extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        {/* 4. 使用 Input、Button 组件 */}
        <div className="todo-action">
          <Input placeholder='todo' className="todo-input" />
          <Button type="primary" className="todo-submit">提交</Button>
        </div>
        {/* 5. 使用 List 组件 */}
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
```

</details>

> 2. src/index.css

<details>

  <summary>代码详情</summary>

```css
.todo {
  width: 1000px;
  margin: 20px auto 0;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.todo-title {
  text-align: center;
}
.todo-action .todo-input {
  width: 200px;
}
.todo-action .todo-submit {
  margin-left: 10px;
}
.todo-list {
  margin-top: 30px;
}
```

</details>

在这里，我们引用 Ant Design 的步骤大致为：

1. 引入 antd 的 Input、Button、List 组件
2. 引入 antd 的样式
3. 定义数据
4. 使用 Input、Button 组件
5. 使用 List 组件

此时页面显示为：

![图](../../public-repertory/img/js-react-demo-two-3.png)

## <a name="chapter-five" id="chapter-five">五 使用 Redux</a>

> [返回目录](#chapter-one)

我觉得有必要在讲解 Redux 之前，我们先使用 Redux 体验一下：

* 安装 Redux：`npm i redux -S`
* 下面我们按照 Redux 的使用方法先试试：

> 在 src 目录下创建 store 目录用来存储 Redux 数据，该目录下有 reducer.js 以及 index.js 两个文件

**首先**，我们编写 reducer.js 文件，该文件的作用是定义并处理数据：

> 1. src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 1. 我们定义一个数据 defaultState
const defaultState = {
  inputValue: '',
  todoList: [
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
  ]
}

// 2. 我们将数据 defaultState 最终以 state 形式导出去
export default (state = defaultState, action) => {
  return state;
}
```

</details>

**然后**，我们编写 index.js 文件，该文件的作用是通过 createStore 方法创建数据仓库并导出去给 TodoList.js 使用。

> 2. src/store/index.js

<details>

  <summary>代码详情</summary>

```js
import { createStore } from 'redux'; // 3. 我们引用 redux 这个库中的 createStore
import reducer from './reducer'; // 4. 我们引用 reducer.js 中导出的数据

// 5. 我们通过 redux 提供的方法 reducer 来构建一个数据存储仓库
const store = createStore(reducer);

// 6. 我们将 store 导出去
export default store;
```

</details>

**最后**，我们在 TodoList.js 中引用 store/index.js 并到列表中进行使用，以及打印出来 store 传递给我们的数据：

> 3. src/TodoList.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react'; // 引入 React 及其 Component
import './index.css'; // 引入 index.css
import { Input, Button, List } from 'antd'; // 引入 antd 的组件
import 'antd/dist/antd.css'; // 引入 antd 的样式
import store from './store'; // 7. 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

class TodoList extends Component {

  // 8. 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);
    // 9. 我们尝试在 Console 中打印 store.getState()
    console.log(store.getState());
    this.state = store.getState();
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        {/* 使用 Input、Button 组件 */}
        <div className="todo-action">
          <Input placeholder='todo' className="todo-input" />
          <Button type="primary" className="todo-submit">提交</Button>
        </div>
        {/* 使用 List 组件 */}
        {/* 10. 将原先的 data 换成 state 中的 todoList */}
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
```

</details>

这时候，我们查看 Chrome 控制台和页面，发现它的确起作用了：

![图](../../public-repertory/img/js-react-demo-two-4.png)

这样我们就完成了 Redux 中数据的【查询】，那么我们如何【修改】 Redux 中的数据，以及 Redux 是什么呢？我们一一道来。

## <a name="chapter-six" id="chapter-six">六 Redux 探索</a>

> [返回目录](#chapter-one)

* **Redux 官网**：[链接](https://redux.js.org/)
* **Redux 中文小册**：[链接](https://www.redux.org.cn/)

> 如果小伙伴觉得自己看小册或者官网理解比较通透，请自行查阅，下面观点仅供参考。

### <a name="chapter-six-one" id="chapter-six-one">6.1 Redux 插件</a>

> [返回目录](#chapter-one)

1. 安装：科学上网找到对应的 Chrome 插件，或者百度下载一个，或者通过 `npm install --save-dev redux-devtools` 安装它的开发者工具。
2. 使用：
   1. 关闭浏览器，并重新打开，再打开控制台（F12），进入 Redux 栏，提示你尚未安装代码
   2. 前往 index.js 安装代码。
   3. 查看 state 中发现存有数据，此时 Redux 插件安装完毕。

> src/store/index.js

<details>

  <summary>代码详情</summary>

```js
import { createStore } from 'redux';
import reducer from './reducer';

// 如果安装了 Redux 工具，则在这里可以直接使用该工具
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

</details>

### <a name="chapter-six-two" id="chapter-six-two">6.2 Redux 知识点讲解</a>

> [返回目录](#chapter-one)

![图](../../public-repertory/img/js-react-demo-two-5.png)

由于 React 关于自身的定义：“用于构建用户界面的 JavaScript 库”。

所以，当我们在 React 中，如果兄弟组件需要通讯，例如上图中左侧的深色圆圈发送数据到顶部（第一排）的圆圈，我们就需要兜很多弯子，导致数据通讯非常麻烦。

而 Redux 的出现，是为了弥补这种麻烦的通讯方式：建立起一个中央机制，方便各组件之间的通讯。从而就有了上图中右侧的调度方式。

那么，Redux 是怎么个运行/工作机制呢？我们通过下面图片进行分析：

![图](../../public-repertory/img/js-react-demo-two-6.png)

在上面图中，我们假设：

* 蓝色（React Component）：借书人
* 黄色（Action Creators）：借书动作
* 橙色（Store）：图书管理员
* 紫色（Reducers）：系统

它的流程可以理解为：首先借书人走到前台（借书动作）跟图书管理员申请借书，图书管理员帮它在系统中查找书籍资料，然后拿到电脑返回信息，最后告诉他去哪借/怎么使用。

换回正常话，即：当组件（React Components）需要调用数据的时候，它就向创造器（Action Creators）发起请求，创造器通知管理者（Store），管理者就去查找相关资料（Reducers），拿到返回的信息后，再告诉组件。

而在这过程中，我们会使用到 Redux 的一些常用/核心 API：

1. `createStore`：创建 store
2. `store.dispatch`：派发 action
3. `store.getState`：获取 store 所有数据内容
4. `store.subscribe`：监控 store 改变，store 改变了该方法就会被执行

下面我们通过 Input 输入数据、Button 提交数据以及删除 TodoItem 列表项进一步讲解上面知识点。

## <a name="chapter-seven" id="chapter-seven">七 Redux 数据修改</a>

> [返回目录](#chapter-one)

现在开始通过 Input 输入数据、Button 提交数据以及删除 TodoItem 列表项讲解 Redux 数据修改。

### <a name="chapter-seven-one" id="chapter-seven-one">7.1 Input 输入数据</a>

> [返回目录](#chapter-one)

> 1. src/TodoList.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react'; // 引入 React 及其 Component
import './index.css'; // 引入 index.css
import { Input, Button, List } from 'antd'; // 引入 antd 的组件
import 'antd/dist/antd.css'; // 引入 antd 的样式
import store from './store'; // 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

class TodoList extends Component {

  // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);
    // 我们尝试在 Console 中打印 store.getState()
    // console.log(store.getState());
    this.state = store.getState();
    
    // 2. 定义 handleInputChange
    this.handleInputChange = this.handleInputChange.bind(this);

    // 7. 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        {/* 使用 Input、Button 组件 */}
        <div className="todo-action">
          {/* 1. Input 绑定 handleInputChange 事件 */}
          <Input 
            placeholder='todo' 
            className="todo-input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button 
            type="primary" 
            className="todo-submit"
          >
            提交
          </Button>
        </div>
        {/* 使用 List 组件 */}
        {/* 将原先的 data 换成 state 中的 todoList */}
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  // 3. 编写 handleInputChange
  handleInputChange(e) {
    // 4. 通过 action，将数据传递给 store
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  // 8. 在 handleStoreChange 中处理数据
  handleStoreChange() {
    this.setState(store.getState());
  }

}

export default TodoList;
```

</details>

> 2. src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 定义一个数据 defaultState
const defaultState = {
  inputValue: '',
  todoList: [
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
  ]
}

// 将数据 defaultState 最终以 state 形式导出去
export default (state = defaultState, action) => {
  // 5. 打印 state 和 action
  console.log(state);
  console.log(action);

  // 6. 在 reducer.js 中获取数据，并 return 回去处理结果
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }
  
  return state;
}
```

</details>

此时，我们打开控制台，一边在 Input 输入框输入内容，一边查看 Console 输出，会发现：

![图](../../public-repertory/img/js-react-demo-two-7.gif)

现在我们来分析下（或者小伙伴看着代码的备注理解下），我们修改代码的时候做了什么：

1. 在 Input 组件中，我们为其 `onChange` 时绑定 `handleInputChange` 事件。
2. 定义 `handleInputChange` 方法。
3. 编写 `handleInputChange` 方法。
4. 我们在 `handleInputChange` 中编写 `action`，通过 `dispatch` 将 `action` 从 TodoList.js 传递给 Redux 中的 reducer.js。
5. 在 reducer.js 中打印 `state` 和 `action`。
6. Redux 在 reducer.js 中接收到 `state` 和 `action`，然后我们将新的 `newState` 返回回去（先返回到 src/store/index.js，再返回到 src/TodoList.js），期望 TodoList.js 能接受到反馈。
7. 在 TodoList 的 `constructor` 中通过 `store.subscribe` 绑定处理 Redux 传回来的数据的处理方法 `handleStoreChange`。
8. 在 `handleStoreChange` 中，我们直接 `setState` Redux 返回的 state，即 `store.getState()`。

这时候，我们再查看章节 6.2 的 Redux 知识点讲解，就会发现知识点通畅了。

* 前往：[6.2 Redux 知识点讲解](#chapter-six-two)

> 参考：计数器

<details>

  <summary>代码详情</summary>

```js
import { createStore } from 'redux';

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1
```

</details>

### <a name="chapter-seven-two" id="chapter-seven-two">7.2 Button 提交数据</a>

> [返回目录](#chapter-one)

下面，我们为 Input 提供回车事件，以及使用 Button 的提交事件，小伙伴们可以参照 Input 的输入事件，先自行编写，写完再查看这个章节收获会更大。

> src/TodoList.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react'; // 引入 React 及其 Component
import './index.css'; // 引入 index.css
import { Input, Button, List } from 'antd'; // 引入 antd 的组件
import 'antd/dist/antd.css'; // 引入 antd 的样式
import store from './store'; // 引入 store，你可以理解为 store 提供数据。./store 是 ./store/index.js 的缩写

class TodoList extends Component {

  // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
  constructor(props) {
    super(props);
    // 我们尝试在 Console 中打印 store.getState()
    // console.log(store.getState());
    this.state = store.getState();
    
    // 处理 handleInputChange 方法
    this.handleInputChange = this.handleInputChange.bind(this);

    // 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    // 2. 处理 handleAddItem 方法
    this.handleAddItem = this.handleAddItem.bind(this);

    // 7. 处理 handleInputKeyUp 方法
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        {/* 使用 Input、Button 组件 */}
        <div className="todo-action">
          {/* Input 绑定 handleInputChange 事件 */}
          {/* 6. Input 绑定回车事件：handleInputKeyUp */}
          <Input 
            placeholder='todo' 
            className="todo-input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          {/* 1. 为 Button 定义点击执行 handleAddItem 方法 */}
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleAddItem}
          >
            提交
          </Button>
        </div>
        {/* 使用 List 组件 */}
        {/* 将原先的 data 换成 state 中的 todoList */}
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (<List.Item>{index + 1} - {item}</List.Item>)}
          />
        </div>
      </div>
    );
  }

  // 编写 handleInputChange 方法
  handleInputChange(e) {
    // 通过 dispatch(action)，将数据传递给 store
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  // 在 handleStoreChange 中处理数据
  handleStoreChange() {
    this.setState(store.getState());
  }

  // 3. 编写 handleAddItem 方法
  handleAddItem() {
    // 4. 通过 dispatch(action)，将数据传递给 store
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action);
  }

  // 8. 为 Input 的 keyUp 方法 handleInputKeyUp 绑定 handleAddItem
  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

}

export default TodoList;
```

</details>

> src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 定义一个数据 defaultState
const defaultState = {
  inputValue: '',
  todoList: [
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    // '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
  ]
}

// 将数据 defaultState 最终以 state 形式导出去
export default (state = defaultState, action) => {
  // 打印 state 和 action
  // console.log(state);
  // console.log(action);

  // 在 reducer.js 中获取数据，并 return 回去处理结果
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  // 5. 在 reducer.js 中获取数据，并 return 回去处理结果
  if(action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }

  return state;
}
```

</details>

这时候，我们的 Button 提交事件都处理完毕了，此时页面的功能实现：

![图](../../public-repertory/img/js-react-demo-two-8.gif)

OK，我们再来梳理一遍流程：

1. 为 Button 定义点击执行 `handleAddItem` 方法
2. 处理 `handleAddItem` 方法
3. 编写 `handleAddItem` 方法
4. 通过 `dispatch(action)`，将数据传递给 `store`
5. 在 reducer.js 中获取数据，并 return 回去处理结果
6. Input 绑定回车事件：`handleInputKeyUp`
7. 处理 `handleInputKeyUp` 方法
8. 为 Input 的 keyUp 方法 `handleInputKeyUp` 绑定 `handleAddItem`

值得注意的是，我们在 Input 的时候，就做过 `handleStoreChange` 的处理，所以我们就没有再写 `store.subscribe()` 来监控数据的改变，所以小伙伴们要注意整体流程。

### <a name="chapter-seven-three" id="chapter-seven-three">7.3 删除 TodoItem 列表项</a>

> [返回目录](#chapter-one)



### 5.3 点击删除列表项

> TodoList.js

```js
// 引用 React 及其组件
import React, { Component } from 'react';
// 引用 Antd
import 'antd/dist/antd.css';
// 引用主 CSS 文件
import './index.css';
// 引入 输入框、按钮、列表、头像
import { Input, Button, List, Avatar } from 'antd';
// 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);

    // 3. 绑定处理 redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo info' 
            className="todo-input" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleButtonClick}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    // 1. 通过 Action，将数据传给 Store
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  // 4. 绑定的方法
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick(e) {
    // 5. 执行 Button 点击的流程
    const action = {
      type: 'add_todo_item'
    };
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleButtonClick();
    }
  }

  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action);
  }

}

export default TodoList;
```

> reducer.js

```js
const defaultState = {
  inputValue: '',
  list: [
    // { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  ]
}

// reducer 可以接收 state，但是绝不能修改 state
export default (state = defaultState, action) => {
  // 2. 在 reducer.js 中获取数据，并 return 返回回去
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 6. 接收 TodoList 传递过来的数据，并进行处理与返回
  if(action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    let newList = {
      title: newState.inputValue,
      description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第 n 条描述'
    };
    newState.list.push(newList);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
```

### 5.4 抽取 ActionType

在 store 目录下新增一个 actionTypes.js：

> 项目/src/store/actionTypes.js

```js
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
```

然后在 TodoList.js 和 reducer.js 中使用：

> TodoList.js

```js
// 引用 React 及其组件
import React, { Component } from 'react';
// 引用 Antd
import 'antd/dist/antd.css';
// 引用主 CSS 文件
import './index.css';
// 引入 输入框、按钮、列表、头像
import { Input, Button, List, Avatar } from 'antd';
// 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import store from './store';
// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);

    // 3. 绑定处理 redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo info' 
            className="todo-input" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleButtonClick}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    // 1. 通过 Action，将数据传给 Store
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action);
  }

  // 4. 绑定的方法
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick(e) {
    // 5. 执行 Button 点击的流程
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleButtonClick();
    }
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action);
  }

}

export default TodoList;
```

> reducer.js

```js
// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [
    // { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  ]
}

// reducer 可以接收 state，但是绝不能修改 state
export default (state = defaultState, action) => {
  // 2. 在 reducer.js 中获取数据，并 return 返回回去
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 6. 接收 TodoList 传递过来的数据，并进行处理与返回
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    let newList = {
      title: newState.inputValue,
      description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第 n 条描述'
    };
    newState.list.push(newList);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
```

抽取 actionTypes.js 的意义在于，固定 action.type 值，从而不会因为在两处不同地方使用，导致报错。

### 5.5 抽取整个 action

在上面工作中，我们将 actionType 抽取出来了。但是，当页面足够复杂的时候，我们的 action 管理起来就非常复杂了，所以我们尝试将整个 action 抽取出来。

我们在 store 目录中新建一个 actionCreators.js：

> 项目/src/store/actionCreators.js

```js
// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
```

机智的小伙伴，看到这里，应该就明白我们的意图了，所以，我们再修改下 TodoList.js 即可：

> src/TodoList.js

```js
// 引用 React 及其组件
import React, { Component } from 'react';
// 引用 Antd
import 'antd/dist/antd.css';
// 引用主 CSS 文件
import './index.css';
// 引入 输入框、按钮、列表、头像
import { Input, Button, List, Avatar } from 'antd';
// 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import store from './store';
// 引入 actionCreators.js
import { getInputChangeAction, getAddItemAction, getItemDeleteAction } from './store/actionCreators'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);

    // 3. 绑定处理 redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo info' 
            className="todo-input" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.handleAddItem}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    // 1. 通过 Action，将数据传给 Store
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  // 4. 绑定的方法
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleAddItem(e) {
    // 5. 执行 Button 点击的流程
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleItemDelete(index) {
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }

}

export default TodoList;
```

这样，我们就把 action 抽取出来了，在大型项目中，对我们的工作会非常方便。

### 5.6 UI 组件和容器组件

* UI 组件 —— 傻瓜组件，做页面的渲染
* 容器组件 —— 聪明组件，做页面的逻辑

在这里，我们进行组件的拆分：

> src/TodoList.js

```js
import React, { Component } from 'react'; // 引用 React 及其组件
import 'antd/dist/antd.css'; // 引用 Antd
import './index.css'; // 引用主 CSS 文件
import store from './store'; // 引入 Redux（如果不写目录下的文件，默认引用 index.js）
import { getInputChangeAction, getAddItemAction, getItemDeleteAction } from './store/actionCreators' // 引入 actionCreators.js
// 1. 引入 TodoListUI
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState(); // 获取 store 数据
    this.handleInputChange = this.handleInputChange.bind(this); // 输入内容改变
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this); // 回车添加项
    this.handleAddItem = this.handleAddItem.bind(this); // 按钮添加项
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this); // store 数据改变
    store.subscribe(this.handleStoreChange); // 监听 store 改变，改变就执行 handleStoreChange 方法
  }

  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleInputKeyUp = {this.handleInputKeyUp}
        handleAddItem = {this.handleAddItem}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }

  handleInputChange(e) { // input 输入数据
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() { // 监听 store 数据改变
    this.setState(store.getState());
  }

  handleAddItem() { // 添加数据
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleInputKeyUp(e) { // 回车添加数据
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleItemDelete(index) { // 删除数据
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }

}

export default TodoList;
```

在这里，我们将 render 中的内容抽取到子组件，该子组件在 src 目录下，叫 TodoListUI，脏活累活让他做，我们只需要将数据传递给它就行了，然后我们编写子组件内容：

> src/TodoListUI.js
 
```js
import React, { Component } from 'react'; // 引用 React 及其组件
import { Input, Button, List, Avatar } from 'antd'; // 引入 输入框、按钮、列表、头像

class TodoListUI extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input 
            placeholder='todo info' 
            className="todo-input" 
            value={this.props.inputValue} 
            onChange={this.props.handleInputChange}
            onKeyUp={this.props.handleInputKeyUp}
          />
          <Button 
            type="primary" 
            className="todo-submit"
            onClick={this.props.handleAddItem}
          >
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;
```

这样，我们就完成了 UI 组件和容器组件的拆分。

### 5.7 无状态组件

当一个组件中，只有 render() 函数，而不做其他事情的时候，我们就把它叫做无状态组件。

在 TodoList 这个项目中，我们可以在 TodoListUI 进行一个无状态组件的定义：

> src/TodoListUI

```js
import React from 'react'; // 引用 React 及其组件
import { Input, Button, List, Avatar } from 'antd'; // 引入 输入框、按钮、列表、头像

const TodoListUI = (props) => {
  return (
    <div className="todo">
      <div className="todo-title">
        <h1>TodoList</h1>
      </div>
      <div className="todo-action">
        <Input 
          placeholder='todo info' 
          className="todo-input" 
          value={props.inputValue} 
          onChange={props.handleInputChange}
          onKeyUp={props.handleInputKeyUp}
        />
        <Button 
          type="primary" 
          className="todo-submit"
          onClick={props.handleAddItem}
        >
          提交
        </Button>
      </div>
      <div className="todo-list">
        <List
          itemLayout="horizontal"
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {props.handleItemDelete(index)}}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="http://jsliang.top">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default TodoListUI;
```

在这里，由于我们没有使用 Component 了，所以我们在第一行去掉了 Component 的引用。

同时，我们规定传入到项目中的参数为 props，于是我们就不需要 this.props.** 的形式来引用父组件传递过来的数据，而是直接使用 props 就行了。

### 5.8 Redux 中发送异步请求获取数据

* 引入 Axios：`cnpm i axios -S`
* 在 componentDidMount 中获取接口数据，并走流程，最终渲染到页面上：

> TodoList.js

```js
import React, { Component } from 'react'; // 引用 React 及其组件
import 'antd/dist/antd.css'; // 引用 Antd
import './index.css'; // 引用主 CSS 文件
import store from './store'; // 引入 Redux（如果不写目录下的文件，默认引用 index.js）

// 7. 引入 initListAction
import { getInputChangeAction, getAddItemAction, getItemDeleteAction, initListAction } from './store/actionCreators' // 引入 actionCreators.js
import TodoListUI from './TodoListUI'; // 引入 TodoListUI
// 1. 引入 axios
import axios from 'axios'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState(); // 获取 store 数据
    this.handleInputChange = this.handleInputChange.bind(this); // 输入内容改变
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this); // 回车添加项
    this.handleAddItem = this.handleAddItem.bind(this); // 按钮添加项
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this); // store 数据改变
    store.subscribe(this.handleStoreChange); // 监听 store 改变，改变就执行 handleStoreChange 方法
  }

  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleInputKeyUp = {this.handleInputKeyUp}
        handleAddItem = {this.handleAddItem}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    // 2. 调用接口
    axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist').then( (res) => {
      console.log(res.data.todolist);
      // 3. 将接口数据 dispatch 到 action 中，所以需要先前往 actionCreators.js 中创建 action
      // 8. 创建 action 并 dispatch 到 reducer.js 中
      const action = initListAction(res.data.todolist);
      store.dispatch(action);
    })
  }

  handleInputChange(e) { // input 输入数据
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() { // 监听 store 数据改变
    this.setState(store.getState());
  }

  handleAddItem() { // 添加数据
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleInputKeyUp(e) { // 回车添加数据
    if(e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleItemDelete(index) { // 删除数据
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }

}

export default TodoList;
```

> actionCreators.js

```js
// 5. 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

// 4. 编写导出的 initListAction，所以需要先在 actionTypes 中引入 INIT_LIST_ACTION
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
```

> actionTypes.js

```js
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
// 6. 导出INIT_LIST_ACTION
export const INIT_LIST_ACTION = 'init_list_action';
```

> reducer.js

```js
// 引入 actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [
    // { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  ]
}

// reducer 可以接收 state，但是绝不能修改 state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
  // 在 reducer.js 中获取数据，并 return 返回回去
  if(action.type === CHANGE_INPUT_VALUE) {
    // JSON.parse(JSON.stringify(state)) 是一种深拷贝，但是这种深拷贝对一些类型无效，详情可看： 
    // https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md#chapter-five-five
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 接收 TodoList 传递过来的数据，并进行处理与返回
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    let newList = {
      title: newState.inputValue,
      description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第 n 条描述'
    };
    newState.list.push(newList);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // 9. 接受 TodoList 传递过来的数据，并进行处理与返回
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}
```

这样，我们就完成了 axios 的调用，并渲染到页面上，整理出来，思路为：

1. TodoList.js —— 引入 axios
2. TodoList.js —— 通过 axios 调用接口
3. TodoList.js —— 将接口数据 dispatch 到 action 中，所以需要先前往 actionCreators.js 中创建 action
4. actionCreators.js —— 编写导出的 initListAction，所以需要先在 actionTypes 中引入 INIT_LIST_ACTION
5. actionCreators.js —— 引入 actionTypes
6. actionTypes.js —— 导出INIT_LIST_ACTION
7. TodoList.js —— 创建 action 并 dispatch 到 reducer.js 中
8. reducer.js —— 接受 TodoList 传递过来的数据，并进行处理与返回

### 5.9 Redux-Thunk 中间件进行 ajax 请求发送

在上章节，我们在 TodoList 中进行了 Ajax 请求，这是可以的。

但是，随着 Ajax 请求越来越多，如果我们都在页面中编写，那么就会让页面显得臃肿。

这时候，就需要 Redux-thunk 了。Redux-thunk 可以把异步请求及复杂业务逻辑抽取到其他地方处理。

* Redux Thunk：[Github 地址](https://github.com/reduxjs/redux-thunk)
* 安装：`npm i redux-thunk -S`
* 使用：

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
```

### 5.10 Redux-Saga 中间件进行 Ajax 请求发送

* Redux Saga：[Github 地址](https://github.com/redux-saga/redux-saga)
* 安装：`npm i redux-saga -S`
* 使用：

### 5.11 React-Redux 的使用

* React Redux：[GitHub 地址](https://github.com/reduxjs/react-redux)
* 安装：`npm i react-redux -S`
* 使用：

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

<!-- > <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。 -->
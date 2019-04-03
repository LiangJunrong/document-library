React Demo Two - TodoList 升级
===

> create by **jsliang** on **2019-3-26 09:26:53**   
> Recently revised in **2019-4-4 07:26:55**

## 一 初始化项目

1. 获取 Simpify 目录，修改 App 为 TodoList

## 二 Ant Design of React

1. 安装：`cnpm i antd -S`
2. 使用：

> TodoList.js

```js
import React, { Component } from 'react';

import 'antd/dist/antd.css';

import './index.css';

import { Input, Button, List, Avatar } from 'antd';

const data = [
  { title: '第一条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条描述', },
  { title: '第二条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条描述', },
  { title: '第三条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条描述', },
  { title: '第四条标题', description: '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条描述', },
];
class TodoList extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder='todo info' className="todo-input" />
          <Button type="primary" className="todo-submit">提交</Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />,
        </div>
      </div>
    );
  }
}

export default TodoList;
```

> index.css

```css
.todo {
  width: 1000px;
  margin: 20px auto 0;
  padding-top: 30px;
  padding-left: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.todo-title {
  text-align: center;
}
.todo-input {
  width: 200px;
}
.todo-submit {
  margin-left: 10px;
}
```

此时页面显示为：

![图](../../public-repertory/img/js-react-demo-two-temp-1.png)

## 三 Redux

1. 安装 Redux：`npm i redux -S`
2. 使用：

> src/store/reducer.js

```js
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  return state;
}
```

> src/store/index.js

```js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

这时候我们就可以在 TodoList.js 中引用并打印出来：

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
// 引入 redux（如果不写目录下的文件，默认引用 index.js）
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder='todo info' className="todo-input" value={this.state.inputValue} />
          <Button type="primary" className="todo-submit">提交</Button>
        </div>
        <div className="todo-list">
          <List
            itemLayout="horizontal"
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="http://jsliang.top">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />,
        </div>
      </div>
    );
  }
}

export default TodoList;
```

查看 Chrome 控制台，发现它的确输出了：

```Console
{inputValue: "", list: Array(0)}
```

这样我们就完成了 redux 的引用。

现在页面显示为；

![图](../../public-repertory/img/js-react-demo-two-temp-2.png)

## 四 Redux 插件

1. 安装：科学上网的 Chrome 插件，或者百度下载一个
2. 使用：
   1. 关闭浏览器，并重新打开，再打开控制台（F12），进入 Redux 栏，提示你尚未安装代码
   2. 前往 index.js 安装代码。
   3. 查看 state 中发现存有数据，此时 Redux 插件安装完毕。

> index.js

```js
import { createStore } from 'redux';
import reducer from './reducer';

// 如果安装了 Redux 工具，则使用该工具
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```


---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
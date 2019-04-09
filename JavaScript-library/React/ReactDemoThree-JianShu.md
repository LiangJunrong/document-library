React Demo Three - 简书
===

> Create by **jsliang** on **2019-4-7 19:37:41**  
> Recently revised in **2019-4-10 07:36:21**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoThree-JianShu.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

## 一 初始化目录

首先，引入 Simplify 目录的内容到 JianShu 文件夹。或者前往文章 [《React Demo One - TodoList》](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoOne-TodoList.md#chapter-three-three) 手动进行项目简化

然后，我们通过：

* 安装依赖：`npm i`
* 运行项目：`npm run start`

跑起项目来，运行结果如下所示：

![图](../../public-repertory/img/js-react-demo-three-1.png)

接着，我们在 src 目录下引入 reset.css，去除各种浏览器的差异性影响。

> src/reset.css

<details>

  <summary>代码详情</summary>

```js
/* 
  * reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  * The purpose of reset is not to allow default styles to be consistent across all browsers, but to reduce the potential problems of default styles.
  * create by jsliang
*/

/** 清除内外边距 - clearance of inner and outer margins **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* 结构元素 - structural elements */
dl, dt, dd, ul, ol, li, /* 列表元素 - list elements */
pre, /* 文本格式元素 - text formatting elements */
form, fieldset, legend, button, input, textarea, /* 表单元素 - from elements */
th, td /* 表格元素 - table elements */ {
    margin: 0;
    padding: 0;
}

/** 设置默认字体 - setting the default font **/
body, button, input, select, textarea {
    font: 18px/1.5 '黑体', Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

/** 重置列表元素 - reset the list element **/
ul, ol { list-style: none; }

/** 重置文本格式元素 - reset the text format element **/
a, a:hover { text-decoration: none; }

/** 重置表单元素 - reset the form element **/
button { cursor: pointer; }
input { font-size: 18px; outline: none; }

/** 重置表格元素 - reset the table element **/
table { border-collapse: collapse; border-spacing: 0; }

/*
  * 图片自适应 - image responsize 
  * 1. 清空浏览器对图片的设置
  * 2. <div>图片</div> 的情况下，图片会撑高 div，这么设置可以清除该影响
*/
img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; vertical-align: middle; }

/* 
  * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
  * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
*/
div, input { box-sizing: border-box; }

/** 清除浮动 - clear float **/
.jsliang-clear:after, .clear:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
}
.jsliang-clear, .clear {
    *zoom: 1;
}

/** 设置input的placeholder - set input placeholder **/
input::-webkit-input-placeholder { color: #919191; font-size: 1em } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: 1em } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: 1em } /* Internet Explorer */
```

</details>

顺带创建一个空的全局样式 index.css 文件。

并在 index.js 中引入 reset.css 和 index.css。

> src/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

</details>

## 二 创建 React 头部组件

首先，我们安装 Ant Design，在开发中减少写样式的时间：`npm i antd -S`

然后，在 src 目录下，新建 common 目录，并在 common 目录下，新建 header 目录，其中的 index.js 内容如下：

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}

export default Header;
```

</details>

接着，我们在 App.js 中引入 header.js：

> src/App.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
```

</details>

最后，页面显示为：

![图](../../public-repertory/img/js-react-demo-three-2.png)

由此，我们完成了 Ant Design 的引入及 Header 组件的创建。

## 三 编写简书头部导航

首先，我们编写 src/common/header 下的 index.js：

> src/common/heder/index.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

import homeImage from '../../resources/img/header-home.png';
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputFocus: true
    }
    this.searchFocusOrBlur = this.searchFocusOrBlur.bind(this);
  }

  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img alt="首页" src={homeImage} className="headef_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              <CSSTransition
                in={this.state.inputFocus}
                timeout={200}
              >
                <input 
                  className={this.state.inputFocus ? 'input-nor-active' : 'input-active'}
                  placeholder="搜索"
                  onFocus={this.searchFocusOrBlur}
                  onBlur={this.searchFocusOrBlur}
                />
              </CSSTransition>
              <i className={this.state.inputFocus ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write"></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    )
  }

  searchFocusOrBlur(e) {
    const inputFocus = this.state.inputFocus;
    this.setState( () => ({
      inputFocus: !inputFocus
    }))
  }

}

export default Header;
```

</details>

然后，我们添加 CSS 样式：

> src/common/heder/index.css

<details>

  <summary>代码详情</summary>

```css
header {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
}
.headef_left-img {
  width: 100px;
  height: 56px;
}
.header_center {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-item {
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.header_center-left {
  display: flex;
}
.header_center-left-home {
  color: #ea6f5a;
}
.header_center-left-search {
  position: relative;
}
.header_center-left-search input {
  width: 240px;
  padding: 0 40px 0 20px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
}
.header_center-left-search .input-active {
  width: 280px;
}
.header_center-left-search i {
  position: absolute;
  top: 8px;
  right: 10px;
}
.header_center-left-search .icon-active {
  padding: 3px;
  top: 4px;
  border-radius: 15px;
  border: 1px solid #ea6f5a;
}
.header_center-left-search .icon-active:hover {
  cursor: pointer;
}
.header_center-right {
  display: flex;
  color: #969696;
}
.header_right-register, .header_right-write {
  width: 80px;
  text-align: center;
  height: 38px;
  line-height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
}
.header_right-write {
  margin-left: 10px;
  padding-left: 10px;
  margin-right: 0px;
  color: #fff;
  background-color: #ea6f5a;
}
```

</details>

接着，由于图标这些，我们可以抽取到公用样式表中，所以我们在 src 目录下添加 common.css：

> src/common.css

<details>

  <summary>代码详情</summary>

```css
.icon {
  display: inline-block;
  width: 20px;
  height: 21px;
  margin-right: 5px;
}
.icon-home {
  background: url('./resources/img/icon-home.png') no-repeat center;
  background-size: 100%;
}
.icon-write {
  background: url('./resources/img/icon-write.png') no-repeat center;
  background-size: 100%;
}
.icon-download {
  background: url('./resources/img/icon-download.png') no-repeat center;
  background-size: 100%;
}
.icon-search {
  background: url('./resources/img/icon-search.png') no-repeat center;
  background-size: 100%;
}
```

</details>

最后，我们在 src 下的 index.js 中引用 common.css

> src/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './index.css';
import './common.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

</details>

至此，我们页面展示为：

![图](../../public-repertory/img/js-react-demo-three-3.png)

## 四 设置输入框动画

> 参考地址：[react-transition-group](https://github.com/reactjs/react-transition-group)

* 安装动画库：`npm i react-transition-group -S`

修改代码：

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
// 1. 引入动画库
import { CSSTransition } from 'react-transition-group';
import './index.css';

import homeImage from '../../resources/img/header-home.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputBlur: true
    }
    this.searchFocusOrBlur = this.searchFocusOrBlur.bind(this);
  }

  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img alt="首页" src={homeImage} className="headef_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              {/* 2. 通过 CSSTransition 包裹 input */}
              <CSSTransition
                in={this.state.inputBlur}
                timeout={200}
                classNames="slide"
              >
                <input 
                  className={this.state.inputBlur ? 'input-nor-active' : 'input-active'}
                  placeholder="搜索"
                  onFocus={this.searchFocusOrBlur}
                  onBlur={this.searchFocusOrBlur}
                />
              </CSSTransition>
              <i className={this.state.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write"></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    )
  }

  searchFocusOrBlur(e) {
    const inputBlur = this.state.inputBlur;
    this.setState( () => ({
      inputBlur: !inputBlur
    }))
  }

}

export default Header;
```

</details>

> src/common/header/index.css

<details>

  <summary>代码详情</summary>

```css
header {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
}
.headef_left-img {
  width: 100px;
  height: 56px;
}
.header_center {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-item {
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.header_center-left {
  display: flex;
}
.header_center-left-home {
  color: #ea6f5a;
}
.header_center-left-search {
  position: relative;
}
/* 3. 编写对应的 CSS 样式 */
.slide-enter {
  transition: all .2s ease-out;
}
.slide-enter-active {
  width: 280px;
}
.slide-exit {
  transition: all .2s ease-out;
}
.silde-exit-active {
  width: 240px;
}
/* 3. 结束 */
.header_center-left-search input {
  width: 240px;
  padding: 0 40px 0 20px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
}
.header_center-left-search .input-active {
  width: 280px;
}
.header_center-left-search i {
  position: absolute;
  top: 8px;
  right: 10px;
}
.header_center-left-search .icon-active {
  padding: 3px;
  top: 4px;
  border-radius: 15px;
  border: 1px solid #ea6f5a;
}
.header_center-left-search .icon-active:hover {
  cursor: pointer;
}
.header_center-right {
  display: flex;
  color: #969696;
}
.header_right-register, .header_right-write {
  width: 80px;
  text-align: center;
  height: 38px;
  line-height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
}
.header_right-write {
  margin-left: 10px;
  padding-left: 10px;
  margin-right: 0px;
  color: #fff;
  background-color: #ea6f5a;
}
```

</details>

这样，经过四个操作步骤：

1. 安装动画库：`npm i react-transition-group -S`
2. 引入动画库
3. 通过 CSSTransition 包裹 input
4. 编写对应的 CSS 样式

我们就成功实现了 CSS 动画插件的引入及使用，此时页面显示为：

![图](../../public-repertory/img/js-react-demo-three-4.gif)

## 五 优化代码

* 安装 Redux：`npm i redux -S`
* 安装 React-Redux：`npm i react-redux -S`
* 开始在代码中加入 Redux 和 React-Redux

1. 创建 store 文件夹，并在里面创建 index.js 和 reducer.js：

> src/store/index.js

<details>

  <summary>代码详情</summary>

```js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

</details>

> src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  return state;
}
```

</details>

2. 接着在 App.js 中引用 react-redux 以及 store/index.js：

> src/App.js

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header />
      </Provider>
    );
  }
}

export default App;
```

</details>

3. 然后修改 src 下 index.js 中的内容：

<details>

  <summary>代码详情</summary>

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';

import homeImage from '../../resources/img/header-home.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header_left">
          <a href="/">
            <img alt="首页" src={homeImage} className="headef_left-img" />
          </a>
        </div>
        <div className="header_center">
          <div className="header_center-left">
            <div className="nav-item header_center-left-home">
              <i className="icon icon-home"></i>
              <span>首页</span>
            </div>
            <div className="nav-item header_center-left-download">
              <i className="icon icon-download"></i>
              <span>下载App</span>
            </div>
            <div className="nav-item header_center-left-search">
              <CSSTransition
                in={this.props.inputBlur}
                timeout={200}
                classNames="slide"
              >
                <input 
                  className={this.props.inputBlur ? 'input-nor-active' : 'input-active'}
                  placeholder="搜索"
                  onFocus={this.props.searchFocusOrBlur}
                  onBlur={this.props.searchFocusOrBlur}
                />
              </CSSTransition>
              <i className={this.props.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
            </div>
          </div>
          <div className="header_center-right">
            <div className="nav-item header_right-center-setting">
              <span>Aa</span>
            </div>
            <div className="nav-item header_right-center-login">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div className="header_right nav-item">
          <span className="header_right-register">注册</span>
          <span className="header_right-write nav-item">
            <i className="icon icon-write"></i>
            <span>写文章</span>
          </span>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputBlur: state.inputBlur
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
      const action = {
        type: 'search_focus_or_blur'
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```

</details>

4. 最后我们再修改下 reducer.js，获取并处理 src/index.js 中 `dispatch` 过来的值：

> src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  if(action.type === 'search_focus_or_blur') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }
  return state;
}
```

</details>

5. 如此，我们完成了修改的步骤。同时，这时候因为 src/index.js 中只有 `render` 方法体，它构成了无状态组件，所以我们将其转换成无状态组件：

> src/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';

import homeImage from '../../resources/img/header-home.png';

const Header = (props) => {
  return (
    <header>
      <div className="header_left">
        <a href="/">
          <img alt="首页" src={homeImage} className="headef_left-img" />
        </a>
      </div>
      <div className="header_center">
        <div className="header_center-left">
          <div className="nav-item header_center-left-home">
            <i className="icon icon-home"></i>
            <span>首页</span>
          </div>
          <div className="nav-item header_center-left-download">
            <i className="icon icon-download"></i>
            <span>下载App</span>
          </div>
          <div className="nav-item header_center-left-search">
            <CSSTransition
              in={props.inputBlur}
              timeout={200}
              classNames="slide"
            >
              <input 
                className={props.inputBlur ? 'input-nor-active' : 'input-active'}
                placeholder="搜索"
                onFocus={props.searchFocusOrBlur}
                onBlur={props.searchFocusOrBlur}
              />
            </CSSTransition>
            <i className={props.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
          </div>
        </div>
        <div className="header_center-right">
          <div className="nav-item header_right-center-setting">
            <span>Aa</span>
          </div>
          <div className="nav-item header_right-center-login">
            <span>登录</span>
          </div>
        </div>
      </div>
      <div className="header_right nav-item">
        <span className="header_right-register">注册</span>
        <span className="header_right-write nav-item">
          <i className="icon icon-write"></i>
          <span>写文章</span>
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    inputBlur: state.inputBlur
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
      const action = {
        type: 'search_focus_or_blur'
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```

</details>

最终，我们完成了 Redux、React-Redux 的引用及使用，以及对 src/index.js 的无状态组件的升级。

## 六 使用 redux-devtools-extension 插件

修改 src/store/index.js 如下：

> src/store/index.js

<details>

  <summary>代码详情</summary>

```js
import { createStore, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers())

export default store;
```

</details>

这时候，我们就成功开启之前安装过的 redux-devtools-extension 插件。

使用一下：

![图](../../public-repertory/img/js-react-demo-three-5.gif)

## 七 抽取 reducer.js

在项目开发中，我们会发现 reducer.js 随着项目的开发越来越庞大，最后到不可维护的地步。

该视频的慕课讲师也提到：**当你的一个 js 文件代码量超过 300 行，说明它的设计一开始来说就是不合理的。**

所以，我们要想着进一步优化它。

首先，我们在 header 目录下，新建 store，并新建 reducer.js，将 src/store 的 reducer.js 中的内容剪切到 header/store/reducer.js 中：

> src/common/header/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 1. 将 reducer.js 转移到 header/store/reducer.js 中
const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  if(action.type === 'search_focus_or_blur') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }
  return state;
}
```

</details>

然后，我们修改 src/store/reducer.js 的内容为：

> src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 2. 通过 combineReducers 整合多个 reducer.js 文件
import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';

const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
```

</details>

最后，我们修改 src/common/header/index.js 内容：

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
// 代码省略 。。。
const mapStateToProps = (state) => {
  return {
    // 3. 因为引用的层级变了，所以需要修改 state.inputBlur 为 state.header.inputBlue
    inputBlur: state.header.inputBlur
  }
}
// 代码省略 。。。
```

</details>

在这里，我们需要知道的是：之前我们只有一层目录，所以修改的是 `state.inputBlur`，但是，因为通过 `combineReducers` 将 reducer.js 进行了整合，所以需要修改为 `state.header.inputBlur`

至此，我们就完成了 reducer.js 的优化。

## 八 抽取 action

1. 首先在 header 的 store 中新建 actionCreators.js 文件：

> src/common/header/store/actionCreators.js

<details>

  <summary>代码详情</summary>

```js
// 1. 定义 actionCreators
export const searchFocusOrBlur = () => ({
  type: 'search_focus_or_blur'
})
```

</details>

2. 然后我们在 header 中的 index.js 文件引入 actionCreators.js，并在 `mapDispathToProps` 方法体中将其 `dispatch` 出去：

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';
// 2. 以 actionCreators 的形式将所有 action 引入进来
import * as actionCreators from './store/actionCreators';

import homeImage from '../../resources/img/header-home.png';

const Header = (props) => {
  return (
    <header>
      <div className="header_left">
        <a href="/">
          <img alt="首页" src={homeImage} className="headef_left-img" />
        </a>
      </div>
      <div className="header_center">
        <div className="header_center-left">
          <div className="nav-item header_center-left-home">
            <i className="icon icon-home"></i>
            <span>首页</span>
          </div>
          <div className="nav-item header_center-left-download">
            <i className="icon icon-download"></i>
            <span>下载App</span>
          </div>
          <div className="nav-item header_center-left-search">
            <CSSTransition
              in={props.inputBlur}
              timeout={200}
              classNames="slide"
            >
              <input 
                className={props.inputBlur ? 'input-nor-active' : 'input-active'}
                placeholder="搜索"
                onFocus={props.searchFocusOrBlur}
                onBlur={props.searchFocusOrBlur}
              />
            </CSSTransition>
            <i className={props.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
          </div>
        </div>
        <div className="header_center-right">
          <div className="nav-item header_right-center-setting">
            <span>Aa</span>
          </div>
          <div className="nav-item header_right-center-login">
            <span>登录</span>
          </div>
        </div>
      </div>
      <div className="header_right nav-item">
        <span className="header_right-register">注册</span>
        <span className="header_right-write nav-item">
          <i className="icon icon-write"></i>
          <span>写文章</span>
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    inputBlur: state.header.inputBlur
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
      // 3. 使用 actionCreators
      dispatch(actionCreators.searchFocusOrBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```

</details>

3. 接着，因为我们在 actionCreators.js 中使用的 `type` 是字符串，所以我们同样在 store 中创建 actionTypes.js，将其变成常量：

> src/common/header/store/actionTypes.js

<details>

  <summary>代码详情</summary>

```js
export const SEARCH_FOCUS_OR_BLUR = 'search_focus_or_blur';
```

</details>

4. 再然后，我们在 actionCreators.js 中引入 actionTypes.js：

> src/common/header/store/actionCreators.js

<details>

  <summary>代码详情</summary>

```js
// 4. 引入常量
import { SEARCH_FOCUS_OR_BLUR } from './actionTypes'

// 1. 定义 actionCreators
// 5. 将 action 中的字符串修改为常量
export const searchFocusOrBlur = () => ({
  type: SEARCH_FOCUS_OR_BLUR
})
```

</details>

5. 再接着，我们修改下 header 目录中 store 下的 reducer.js，因为我们的字符串变成了常量，所以这里也需要做相应变更：

> src/common/header/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// 6. 引入常量
import * as actionTypes from './actionTypes'

const defaultState = {
  inputBlur: true
};

export default (state = defaultState, action) => {
  // 7. 使用常量
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputBlur = !newState.inputBlur
    return newState;
  }
  return state;
}
```

</details>

6. 然后，我们现在 header/store 目录下有：actionCreators.js、actionTypes.js、reducer.js 三个文件，如果我们每次引入都要一个一个找，那是相当麻烦的，所以我们在 header/store 目录下再新建一个 index.js，通过 index.js 来管理这三个文件，这样我们其他页面需要引入它们的时候，我们只需要引入 store 下的 index.js 即可。

> src/common/header/store/index.js

<details>

  <summary>代码详情</summary>

```js
// 8. 统一管理 store 目录中的文件
import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes';
import reducer from './reducer';

export { actionCreators, actionTypes, reducer };
```

</details>

7. 值得注意的是，这时候我们可以处理下 header/index.js 文件：

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';
// 2. 以 actionCreators 的形式将所有 action 引入进来
// import * as actionCreators from './store/actionCreators';
// 9. 引入 store/index 文件即可
import { actionCreators } from './store';

import homeImage from '../../resources/img/header-home.png';

// 代码省略
```

</details>

8. 最后，再处理下 src/store/reducer.js，因为它引用了 common/header/store 中的 reducer.js：

<details>

  <summary>代码详情</summary>

```js
import { combineReducers } from 'redux';
// 10. 修改下引用方式
import { reducer as headerReducer } from '../common/header/store';

const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
```

</details>

至此，我们就完成了本次的优化抽取。

## 九 immutable.js

在我们工作的过程中，如果一不小心修改了 reducer.js 中的 ·（平时开发的时候，我们会通过 `JSON.parse(JSON.stringify())` 来进行深拷贝，获取一份额外的来进行修改）。

所以，这时候，我们就需要使用 immutable.js，它是由 Facebook 团队开发的，用来帮助我们生产 `immutable` 对象，从而限制 `state` 不可被改变。

* 安装 immutable.js：`npm i immutable`。
* 案例 immutable.js：

```js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + " vs. " + map2.get('b'); // 2 vs. 50
```

然后，我们在简书 Demo 中使用：

> src/common/header/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
import * as actionTypes from './actionTypes'
// 1. 通过 immutable 引入 fromJS
import { fromJS } from 'immutable';

// 2. 对 defaultState 使用 fromJS
const defaultState = fromJS({
  inputBlur: true
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS_OR_BLUR) {
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.inputBlur = !newState.inputBlur
    // return newState;

    // 4. 通过 immutable 的方法来 set state 的值
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值和设置的值，返回一个全新的对象
    return state.set('inputBlur', !state.get('inputBlur'));
  }
  return state;
}
```

</details>

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import { actionCreators } from './store';

import homeImage from '../../resources/img/header-home.png';

const Header = (props) => {
  return (
    <header>
      <div className="header_left">
        <a href="/">
          <img alt="首页" src={homeImage} className="headef_left-img" />
        </a>
      </div>
      <div className="header_center">
        <div className="header_center-left">
          <div className="nav-item header_center-left-home">
            <i className="icon icon-home"></i>
            <span>首页</span>
          </div>
          <div className="nav-item header_center-left-download">
            <i className="icon icon-download"></i>
            <span>下载App</span>
          </div>
          <div className="nav-item header_center-left-search">
            <CSSTransition
              in={props.inputBlur}
              timeout={200}
              classNames="slide"
            >
              <input 
                className={props.inputBlur ? 'input-nor-active' : 'input-active'}
                placeholder="搜索"
                onFocus={props.searchFocusOrBlur}
                onBlur={props.searchFocusOrBlur}
              />
            </CSSTransition>
            <i className={props.inputBlur ? 'icon icon-search' : 'icon icon-search icon-active'}></i>
          </div>
        </div>
        <div className="header_center-right">
          <div className="nav-item header_right-center-setting">
            <span>Aa</span>
          </div>
          <div className="nav-item header_right-center-login">
            <span>登录</span>
          </div>
        </div>
      </div>
      <div className="header_right nav-item">
        <span className="header_right-register">注册</span>
        <span className="header_right-write nav-item">
          <i className="icon icon-write"></i>
          <span>写文章</span>
        </span>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    // 3. 通过 immutable 提供的 get() 方法来获取 inputBlur 属性
    inputBlur: state.header.get('inputBlur')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    searchFocusOrBlur() {
      dispatch(actionCreators.searchFocusOrBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```

</details>

我们大致做了四个步骤，从而完成了 immutable.js 的引用及使用：

1. 通过 `import` `immutable` 引入 `fromJS`
2. 对 `defaultState` 使用 `fromJS`
3. 这时候我们就不能直接修改 `matStateToProps` 中的值了，而是 通过 `immutable` 提供的 `get()` 方法来获取 `inputBlur` 属性
4. 通过 `immutable` 的方法来 `set` `state` 的值。`immutable` 对象的 `set` 方法，会结合之前 `immutable` 对象的值和设置的值，返回一个全新的对象

这样，我们就成功保护了 `state` 的值。

## 十 redux-immutable

当然，在上面，我们保护了 header 中的 `state`，我们在代码中：

```js
inputBlur: state.header.get('inputBlur')
```

这个 `header` 也是 `state` 的值，所以我们也需要对它进行保护，所以我们就需要 redux-immutable

* 安装 redux-immutable：`npm i redux-immutable`
* 使用 redux-immutable：

> src/store/reducer.js

<details>

  <summary>代码详情</summary>

```js
// import { combineReducers } from 'redux';
// 1. 通过 redux-immutable 引入 combineReducers 而非原先的 redux
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

const reducer =  combineReducers({
  header: headerReducer
})

export default reducer;
```

</details>

> src/common/header/index.js

<details>

  <summary>代码详情</summary>

```js
// 代码省略。。。
const mapStateToProps = (state) => {
  return {
    // 2. 通过同样的 get 方法来获取 header
    inputBlur: state.get('header').get('inputBlur')
  }
}
// 代码省略。。。
```

</details>

这样，通过简单的三个步骤，我们就保护了主 `state` 的值：

1. 安装 redux-immutable：`npm i redux-immutable`
2. 通过 redux-immutable 引入 `combineReducers` 而非原先的 redux
3. 通过同样的 `get` 方法来获取 `header`

## 十一 热门搜索



## N 失误

1. ~~`SEARCH_FOCUS_OR_BLUR` 的值，不应该通过这个来控制 `false` 或者 `true`，从而增加了开发难度~~
2. ~~现在 immutable.js 的 `set` 方法，不知道如何修改。~~

## N 参考文献

1. [使用 immutable 优化 React](https://segmentfault.com/a/1190000010438089)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
# 仿简书项目 - 3 - Redux 数据管理
> create by **jsliang** on **2018-9-10 16:17:24**  
> Recently revised in **2018-9-11 12:20:06**

<br>

## 第三章 Redux 数据管理

<br>

### 3.1 Redux
1. 安装 `redux`： `npm i redux -D`
2. 安装 `react-redux`：`npm i react-redux -D`
3. 创建 `store` 文件夹
4. 创建 `index.js` 文件
5. 此时目录如下：

![图](../../public-repertory/img/js-react-jianshu-chapter3-1.png)

6. 修改下面的文件：
> App.js
```
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
```

> store/index.js
```
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```

> store/reducer.js
```
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    return state;
}
```

> common/header/index.js
```
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style'

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-shouye"></use>
                        </svg>
                        <span> 首页</span>
                    </NavItem>
                    <NavItem className="left">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiazaiAPP"></use>
                        </svg>
                        <span> 下载App</span>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={500}
                            classNames="slide"
                        >
                        <NavSearch
                            className={this.props.focused ? 'focused' : ''} 
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <div className={this.props.focused ? 'focused icon-search' : 'icon-search'}>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-icon_search"></use>
                            </svg>
                        </div>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-yumao"></use>
                        </svg>
                        <span> 写文章</span>
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```
7. 修改 common/header/`index.js` 以及 src/store/`reducer.js` 这两个文件：
> common/header/index.js
```
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className="left active">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-shouye"></use>
                    </svg>
                    <span> 首页</span>
                </NavItem>
                <NavItem className="left">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-xiazaiAPP"></use>
                    </svg>
                    <span> 下载App</span>
                </NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={500}
                        classNames="slide"
                    >
                    <NavSearch
                        className={props.focused ? 'focused' : ''} 
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                    ></NavSearch>
                    </CSSTransition>
                    <div className={props.focused ? 'focused icon-search' : 'icon-search'}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-icon_search"></use>
                        </svg>
                    </div>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-yumao"></use>
                    </svg>
                    <span> 写文章</span>
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
```

> src/store/reducer.js
```
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if(action.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if(action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state;
}
```
8. 新建 `store` 文件夹
9. 新建 `reducer.js` 文件
10. 对 redux 进行拆分：
> common/header/index.js
```
const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}
```

> common/header/store/reducer.js
```
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if(action.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if(action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state;
}
```

> src/store/reducer.js
```
import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';

export default combineReducers({
    header: headerReducer
})
```



<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
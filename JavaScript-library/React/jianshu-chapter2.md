仿简书项目 - 2 - 导航栏编写
===

> create by **jsliang** on **2018-9-11 11:05:20**  
> Recently revised in **2018-9-11 09:39:01**

<br>

## 第二章 导航栏编写

<br>

### 2.1 创建公共组件

![图](../../public-repertory/img/js-react-jianshu-chapter2-1.png)

1. 新建 `common` 文件夹
2. 新建 `header` 文件夹
3. 新建 `index.js` 文件

> **index.js**
```
import React, { Component } from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;
```
4. 下载 logo：

![图](./code/jianshu/src/static/logo.png)

5. 新建 `style.js` 文件
> **style.js**
```
import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px; 
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;
```
6. 此时项目效果（localhost:3000）如下图所示：
![图](../../public-repertory/img/js-react-jianshu-chapter2-2.png)

<br>

### 2.2 添加 IconFont 图标
1. 登录 [阿里巴巴矢量图](http://www.iconfont.cn) 下载图标库
2. 在 src 下的 `index.js` 中引用 [iconfont.js](./code/jianshu/src/static/iconfont/iconfont.js)
> index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './static/iconfont/iconfont';

ReactDOM.render(<App />, document.getElementById('root'));
```
3. 往 src 下的 `style.js` 中引用样式：
> style.js
```
    /** 引入 iconfont **/
    .icon {
        width: 1em;
        height: 1em;
        vertical-alian: -.15em;
        fill: currentColor;
        overflow: hidden;
    }
```
4. 在导航条 header 中的 `index.js` 中引用iconfont：
> index.js
```
import React, { Component } from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style'

class Header extends Component {
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
                        <NavSearch></NavSearch>
                        <div className="icon-search">
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
}

export default Header;
```
5. 修改下 header 中的 `style.js` 样式：
```
import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    font-size: 17px;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .icon-search {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 24px;
        line-height: 24px;
        border-radius: 13px;
        text-align: center;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    float: left;
    width: 240px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px; 
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;
```
6. 此刻项目样子为：  
&emsp;浏览器：

![图](../../public-repertory/img/js-react-jianshu-chapter2-3.png)

&emsp;项目目录：

![图](../../public-repertory/img/js-react-jianshu-chapter2-4.png)

### 2.3 搜索框动画
1. 在 header 组件下的 `index.js` 中，添加或者修改下面代码：
> index.js
```
    constructor(props) {
        super(props);
        this.state = {
            focused: true
        }
    }
    <SearchWrapper>
        <NavSearch
            className={this.state.focused ? 'focused' : ''}
        ></NavSearch>
        <div className={this.state.focused ? 'focused icon-search' : 'icon-search'}>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-icon_search"></use>
            </svg>
        </div>
    </SearchWrapper>
```
2. 在 header 组件下的 `style.js` 中，添加或者修改下面代码：
```
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .icon-search {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 24px;
        line-height: 24px;
        text-align: center;
        &.focused {
            background: #fff;
            width: 30px;
            height: 30px;
            line-height: 35px;
            border-radius: 15px;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    float: left;
    width: 240px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &.focused {
        width: 300px;
    }
`;
```
3. 在这里，我们通过设置 constructor 中的 focused 状态为 true 或者 false，来设置动画前后的样式。
4. 编写事件：
> index.js
```
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    <SearchWrapper>
        <NavSearch
            className={this.state.focused ? 'focused' : ''} 
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
        ></NavSearch>
        <div className={this.state.focused ? 'focused icon-search' : 'icon-search'}>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-icon_search"></use>
            </svg>
        </div>
    </SearchWrapper>

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
```
5. 安装 `react-transition-group`：`npm i react-transition-group -D`
6. 引用 `react-transition-group`：
> index.js
```
import { CSSTransition } from 'react-transition-group';

<SearchWrapper>
    <CSSTransition
        in={this.state.focused}
        timeout={500}
        classNames="slide"
    >
    <NavSearch
        className={this.state.focused ? 'focused' : ''} 
        onFocus={this.handleInputFocus}
        onBlur={this.handleInputBlur}
    ></NavSearch>
    </CSSTransition>
    <div className={this.state.focused ? 'focused icon-search' : 'icon-search'}>
        <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-icon_search"></use>
        </svg>
    </div>
</SearchWrapper>
```

&emsp;同时，往 `style.js` 添加样式：
```
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .slide-enter {
        transition: all .5s ease-out;
    }
    .slide-enter-active {
        width: 300px;
    }
    .slide-exit {
        transition: all .5s ease-out;
    }
    .slide-exit-active {
        width: 240px;
    }
    .icon-search {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 24px;
        line-height: 24px;
        text-align: center;
        &.focused {
            background: #fff;
            width: 30px;
            height: 30px;
            line-height: 35px;
            border-radius: 15px;
        }
    }
`;
```
7. 这时候，我们可以查看到详细效果：
![图](../../public-repertory/img/js-react-jianshu-chapter2-5.gif)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
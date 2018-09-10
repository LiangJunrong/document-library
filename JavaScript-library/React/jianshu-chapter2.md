# 仿简书项目 - 2 - 标题没想好
> create by **jsliang** on **2018-9-10 16:17:24**  
> Recently revised in **2018-9-10 16:17:10**

<br>

## 第二章 标题没想好

<br>

### 1.1 创建公共组件

![图](../../public-repertory/img/js-react-jianshu-chapter2-1.png)

1. 新建 `common` 文件夹
2. 新建 `header` 文件夹
3. 新建 `index.js` 文件
4. 下载 logo：

![图](./code/jianshu/src/static/logo.png)

5. 新建 `style.js` 文件

> **index.js**
```
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>header</div>
        )
    }
}

export default Header;
```

> **style.js**
```
import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

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
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`

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
`
```
6. 此时项目效果（localhost:3000）如下图所示：
![图](../../public-repertory/img/js-react-jianshu-chapter2-2.png)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
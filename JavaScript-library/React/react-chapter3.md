# React - 3 - JSX 语法
> create by **jsliang** on **2018年9月5日10:41:19** 

## 第三章 JSX 语法
&emsp;一般我们在 html 中，我们才会用 \<div\> 这些标签。但是，在 React 中，它通过 js ，使用了 \<div\> 这些标签，而只要 \<div\> 出现在 React 中，我们就将它叫做 JSX 。
&emsp;在 React 中，使用到了 render() ，一般都涉及到了 JSX 语法：
```
import React, { Component } from 'react';

/**
 * import { Component } from 're act';
 * 
 * 等价于
 * 
 * import React from 'react'
 * const Component = React.Component
 */

class App extends Component {
  // JSX
  render() {
    return (
      <h3>Hello React!</h3>
    );
  }
}

export default App;
```

&emsp;在 JSX 语法中，如果我们要使用自己创建的组件，那么这个组件名称，首字母必须大写：
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
&emsp;在 ReactDOM 渲染的组件上， App 这个组件的首字母就是大写的。

<br>

###  目录
| 章节名 | 导航                                |
| ------ | ----------------------------------- |
| 第一章 | [基础环境搭建](./react-chapter1.md) |
| 第二章 | [组件](./react-chapter2.md)         |
| 第三章 | [JSX 语法](./react-chapter3.md)     |

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
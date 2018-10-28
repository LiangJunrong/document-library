React - 2 - 组件
===

> create by **jsliang** on **2018年9月5日10:41:14** 
> Recently revised in **2018-10-28 10:54:44**

## 第二章 组件
&emsp;每个网站，是由多个 html 页面组成的，而 html 页面，可以看成是多个组件组成的。  
&emsp;所谓组件，就是如 “庖丁解牛” 般，将网站划分为多个 “块” ，这里我们使用 index.html 页面进行讲解：

![目录](../../public-repertory/img/js-react-chapter2-1.png)

&emsp;在这里，我们将网站分成了很多 “块” 。网站生成中，我们将不同的组件，纷纷以 dom 的形式，加载到 index.html 文件中，从而就有了我们一个完整的 index.html。  
&emsp;学过 HTML5 的小伙伴，应该对 \<header\>、\<sidebar\>、\<footer\> 这类标签有很深的感触，那么，react 或者 vue 或者 angular 中出现的组件概念，就跟这些标签一样，起到 “庖丁解牛” 般的作用。

### 2.1 React 组件
&emsp;在这里，我们以 `第一章` 中的 App.js 进行 react 组件的讲解：
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h3>Hello React!</h3>
    );
  }
}

export default App;
```
&emsp;在这段代码中，我们就通过 import 引用了 react 的组件： Component，然后在下面定义了 App 这个类来继承 react 的组件类。  
&emsp;如果我们不使用 `import { Component } from 'react`，那么，我们在 `class App extends Component`中可以改写为 `class App extends React.Component`，一样可以起到相同的作用，但是为了方便，我们通常直接引用 `react` 中的 `Component` 这个类，再使用 `render()` 方法渲染 dom 并导出 App 这个类。  
&emsp;上面代码可以改写为：
```
import React, { Component } from 'react';

/**
 * import { Component } from 'react';
 * 
 * 等价于
 * 
 * import React from 'react'
 * const Component = React.Component
 */

class App extends React.Component {
  render() {
    return (
      <h3>Hello React!</h3>
    );
  }
}

export default App;
```

<br>

### 2.2 导入组件
&emsp;在上面，我们定义了一个组件 App，那么，该组件是怎么被使用的呢？  
&emsp;我们先看下 index.js 的内容：
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
&emsp;在 index.js 中，我们通过 import 从 App.js 中引用了 App 这个类，然后通过 `ReactDOM.render(<App />, document.getElementById('root'));` 这行代码中，我们将组件渲染到了 root 这个节点，从而实现了组件的加载。

<br>

###  目录
| 章节名 | 导航                                |
| ------ | ----------------------------------- |
| 第一章 | [基础环境搭建](./react-chapter1.md) |
| 第二章 | [组件](./react-chapter2.md)         |
| 第三章 | [JSX 语法](./react-chapter3.md)     |

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
React Demo Two - 简书
===

> Create by **jsliang** on **2019-3-22 12:47:51**  
> Recently revised in **2019-3-22 12:47:56**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/ReactDemoTwo-JianShu.md)**

* [React 系列源码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 总结](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **调试工具**：

* [React Development Tools 介绍](http://www.cnplugins.com/zhuanti/how-to-use-react-tools.html)
* [React Development Tools 下载地址](https://pan.baidu.com/s/1ND_HsvDMnWDPo332UDLZPQ)


* **子组件接受数据校验及默认设置**

```js
// 引用类型校验
import PropTypes from 'prop-types'

class TodoItem extends React {
  // ...省略
}

// 使用类型校验
TodoItem.protoTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 使用字段默认值
TodoItem.defaultProps = {
  test: 'Hello World!'
}

export default TodoItem;
```

* **`poops`、`state` 以及 `render` 函数的关系**

当组件的 `state` 或者 `props` 发生改变的时候，`render` 函数就会重新执行。

当父组件的 `render` 函数被运行时，它的子组件的 `render` 都将被重新运行一次。

* **虚拟 DOM 与真实 DOM**

**首先**，尝试模仿下 React 的数据更新：

1. `state` 数据
2. `JSX` 模板
3. 数据 + 模板结合，生成真实的 DOM，来显示
4. `state` 发生改变
5. 数据 + 模板结合，生成真实的 DOM，替换原始的 DOM

**然后**，我们分析下缺陷：

1. 第一次生成了一个完整的 DOM 片段
2. 第二次生成了一个完整的 DOM 片段
3. 第二次的 DOM 替换第一次的 DOM，非常耗性能

**最后**，我们尝试优化下思路：

1. `state` 数据
2. `JSX` 模板
3. 数据 + 模板结合，生成真实的 DOM，来显示
4. `state` 发生改变
5. 数据 + 模板结合，生成真实的 DOM，并不直接替换原始的 DOM
6. 新的 DOM 与原始的 DOM 作对比，找差异
7. 找出 `input` 框发生了什么变化
8. 只用新的 DOM 中的 `input` 元素，替换掉老的 DOM 中的 `input` 元素

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
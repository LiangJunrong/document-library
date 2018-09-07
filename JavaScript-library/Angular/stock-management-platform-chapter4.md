# Angular开发手册 - 4 - 路由
> create by **jsliang** on **2018年9月5日17:38:19** 
> Recently revised in **2018年2018年9月7日15:49:52**

## 路由

## 6.1 Route
| 名称 | 简介                                |
| ------ | ----------------------------------- |
| Routes | 路由配置，保存着哪个 URL 对应展示哪个组件，以及在哪个 RouterOutlet 中展示组件 |
| RouterOutlet | 在 HTML 中标记路由内容呈现位置的占位符指令 |
| Router | 负责在运行时执行路由的对象，可以通过调用其 navigate() 和 navigateByUrl() 方法来导航到一个指定的路由。 |
| RouterLink | 在 HTML 中声明路由导航用的指令 |
| ActivatedRoute | 当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等。 |

<br>

### 6.2 解析图
![图](../../public-repertory/img/js-angular-stock-management-platform-chapter4-1.png)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
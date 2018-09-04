# 设计模式手册 - 13 - 综合应用
> create by **jsliang** on **2018年9月4日09:37:55**  

## 第十三章 综合应用-购物车
&emsp;使用 jQuery 做一个模拟购物车的示例
* 功能如下：
1. 显示购物列表
2. 加入购物车
3. 从购物车删除

* 涉及的设计模式：
1. 工厂模式
2. 单例模式
3. 装饰器模式
4. 观察者模式
5. 状态模式
6. 模板方法模式
7. 代理模式

<br>

### 13.1 UML类图
![图](../../public-repertory/img/js-design-pattern-chapter13-1.png)

<br>

### 13.2 编程环境搭建
&emsp;值得注意的是，我们使用之前搭建好的编程环境。

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
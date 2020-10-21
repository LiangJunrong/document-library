Babel
===

> Create by **jsliang** on **2020-10-21 22:35:16**  
> Recently revised in **2020-10-21 22:35:16**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 Babel 原理](#chapter-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

## <a name="chapter-three" id="chapter-three"></a>三 Babel 原理

> [返回目录](#chapter-one)

大多数 JavaScript `Parser` 遵循 `estree` 规范，`Babel` 最初基于 `acorn` 项目（轻量级现代 JavaScript 解析器）

`Babel` 大概分为三大部分：

* **解析**：将代码转换成 `AST`
  * **词法分析**：将代码（字符串）分割为 `token` 流，即语法单元成的数组
  * **语法分析**：分析 token 流（上面生成的数组）并生成 `AST`
* **转换**：访问 `AST` 的节点进行变换操作生产新的 `AST`
  * `Taro` 就是利用 `babel` 完成的小程序语法转换
* **生成**：以新的 AST 为基础生成代码

想了解如何一步一步实现一个编译器的小伙伴可以移步 `Babel` 官网曾经推荐的开源项目 [the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
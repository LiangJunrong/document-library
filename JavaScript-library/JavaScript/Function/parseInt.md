方法 - parseInt()
===

> Create by **jsliang** on **2019-05-17 11:30:04**  
> Recently revised in **2019-07-08 14:49:48**

* **原文**：[MDN - parseInt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

* **功能**：`parseInt(string, radix)`，`string` 为字符串，`radix` 为介于 2-36 之间的数。使用者告诉这个函数 `string`（比如 11）是 `radix`（比如 2 ）进制的，函数将固定返回 `string` 以十进制时显示的数（3）。

* **语法**：`parseInt(string, radix)`
  * `string`：要被解析的值。
  * `radix`：一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。

* **返回值**：返回解析后的整数值。如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN。

* **代码**：

```js
parseInt("0xF", 16);     // 15
parseInt("F", 16);       // 15
parseInt("17", 8);       // 15
parseInt(021, 8);        // 15
parseInt("015", 10);     // 15
parseInt(15.99, 10);     // 15
parseInt("15,123", 10);  // 15
parseInt("FXX123", 16);  // 15
parseInt("1111", 2);     // 15
parseInt("15 * 3", 10);  // 15
parseInt("15e2", 10);    // 15
parseInt("15px", 10);    // 15
parseInt("12", 13);      // 15
```

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
Promise 实现 Ajax
===

> Create by **jsliang** on **2020-09-17 21:58:47**  
> Recently revised in **2020-09-17 22:14:39**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

```js
// XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据。
const getJSON = (url) => {
  return new Promise((resolve, reject) => {
    const handler = () => {
      // 判断请求状态码
      if (this.readyState !== 4) {
        return;
      }

      // 请求的响应状态
      if (this.state === 200) {
        resolve(this.response);
      } else {
        // 完整的响应状态文本（例如，"200 OK"）
        reject(new Error(this.statusText));
      }
    };

    const client = new XMLHttpRequest();
    client.open('GET', url); // 初始化一个请求。
    client.onreadystatechange = handler; // 当 readyState 属性变化时，调用 EventHandler
    client.responseType = 'json'; // 一个用于定义响应类型的枚举值（enumerated value）。
    client.setRequestHeader('Accept', 'application/json'); // 设置 HTTP 请求头的值。必须在 open() 之后、send() 之前调用 setRequestHeader() 方法。
    client.send(); // 发送请求。
  });
};

getJSON('https://www.baidu.com').then((json) => {
  console.log('成功：', json);
}).catch((error) => {
  console.error('失败：', error);
})
```

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
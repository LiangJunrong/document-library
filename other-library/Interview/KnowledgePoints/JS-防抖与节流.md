2019 面试准备 - JS 防抖与节流
===

> Create by **jsliang** on **2019-2-23 20:55:34**  
> Recently revised in **2019-3-5 21:52:49**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/KnowledgePoints/JS-%E9%98%B2%E6%8A%96%E4%B8%8E%E8%8A%82%E6%B5%81.md)**

**本文涉及知识点**：

* **防抖与节流**
* **重绘与回流**
* **浏览器解析 URL**
* **DNS**
* **浏览器渲染页面**

**在本文中，jsliang 会讲解通过自我探索后关于上述知识点的个人理解，如有纰漏、疏忽或者误解，欢迎各位小伙伴留言指出。**

> 如果小伙伴对文章存有疑问，想快速得到回复。  
> 或者小伙伴对 jsliang 个人的前端文档库感兴趣，也想将自己的前端知识整理出来。  
> 欢迎加 QQ 群一起探讨：`798961601`。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 防抖与节流](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 重绘与回流](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 浏览器解析 URL](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六  DNS](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 浏览器渲染页面](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 总结](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 参考文献](#chapter-night) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

在工作中，我们可能碰到这样的问题：

* 用户在搜索的时候，在不停敲字，如果每敲一个字我们就要调一次接口，接口调用太频繁，给卡住了。
* 用户在阅读文章的时候，我们需要监听用户滚动到了哪个标题，但是每滚动一下就监听，加上其他的业务代码，就卡住了。

## <a name="chapter-three" id="chapter-three">三 防抖与节流</a>

> [返回目录](#chapter-one)

1. 为什么会有防抖和节流？可以就和回流与重绘来解释。
2. 工作中哪些内容使用了防抖和节流？举例工作中用户快速连续点击提交按钮
  解决方案：
* 使用 disabled
* 用户点击的时候使用节流，2秒内不管怎么点击都只执行一次调用接口，同时更换按钮（需要准备两个按钮，一个点击提交，一个等待中），然后等接口调用完毕后，再把点击提交的按钮显示出来（如果界面卡到 2 秒内点击提交的按钮都不会消失，那这种方案有风险的）
* 设置 flag，一开始的时候为 true，进入业务代码的时候判断 flag 情况，之后设置为 false，只有等接口返回信息后，再设置为 true。
* 使用 Axios 的拦截器实现按钮多次提交请求。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>防抖</title>
</head>
<body>
  <button id="debounce">点我防抖！</button>

  <script>
    window.onload = function() {
      // 防抖
      var myDebounce = document.getElementById("debounce");
      myDebounce.addEventListener("click", debounce(sayDebounce));
    }

    // 防抖
    function debounce(fn) {
      // 创建一个标记用来存放定时器的返回值
      let timeout = null;
      return function() {
        // 每次当用户点击/输入的时候，把前一个定时器清除
        clearTimeout(timeout);
        // 然后创建一个新的 setTimeout，
        // 这样就能保证点击按钮后的 interval 间隔内
        // 如果用户还点击了的话，就不会执行 fn 函数
        timeout = setTimeout(() => {
          fn.call(this, arguments);
        }, 1000);
      };
    }

    function sayDebounce() {
      console.log("防抖成功！");
    }

  </script>
</body>
</html>
```

> 知识点补充：何为 `arguments`，后端转前端的同学，可以将 `arguments` 理解为能实现重载函数功能的工具，例如 `function test()` 这个方法中，由于我们不确定变量有多少，比如 `test("jsliang", 24)`，又或者 `test("LiangJunrong", "jsliang")`，这时候只需要在函数 `test` 中用 `arguments` 接收就行了，`function test() { let arr1 = argument[0] }` 中，`arr1` 就可以获取到传进来的第一个变量。  
> 所以 `fn.call(this, arguments)` 其实是将不确定变量替换到函数中了。  
> 参考资料 1：[《闲聊JS中的apply和call》](https://www.cnblogs.com/alai88/p/5518441.html)  
> 参考资料 2：[《js中arguments的用法》](https://www.cnblogs.com/LMJBlogs/p/6024148.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>节流</title>
</head>
<body>

  <button id="throttle">点我节流！</button>

  <script>
    window.onload = function() {
      var myThrottle = document.getElementById("throttle");
      myThrottle.addEventListener("click", throttle(sayThrottle));
    }

    // 节流
    function throttle(fn) {
      // 通过闭包保存一个标记
      let canRun = true;
      return function() {
        // 在函数开头判断标志是否为 true，不为 true 则中断函数
        if(!canRun) {
          return;
        }
        // 设置为 false，防止执行之前再被执行
        canRun = false;
        // 定时器
        setTimeout( () => {
          fn.call(this, arguments);
          // 执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
          canRun = true;
        }, 1000);
      };
    }

    function sayThrottle() {
      console.log("节流成功！");
    }

  </script>
</body>
</html>
```

## <a name="chapter-four" id="chapter-four">四 重绘与回流</a>

> [返回目录](#chapter-one)

* **重绘(repaint)**：当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此**损耗较少**。
* **回流(reflow)**：当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。常见的有：页面初次渲染、浏览器窗口大小改变、元素尺寸/位置/内容发生改变、元素字体大小变化、添加或者删除可见的 DOM 元素以及激活 CSS 伪类（:hover……）等等

**回流必定会触发重绘，重绘不一定会触发回流。重绘的开销较小，回流的代价较高。**

* 工作中关于重绘与回流的关注？

1. 避免频繁操作样式，可汇总后统一一次修改
2. 尽量使用 class 进行样式修改，而不是直接操作样式
3. 减少 DOM 的操作，可使用字符串一次性插入

## <a name="chapter-five" id="chapter-five">五 浏览器解析 URL</a>

> [返回目录](#chapter-one)

* 当用户输入 URL，到浏览器呈现给用户页面，经历了一下过程：

1. 用户输入 URL，浏览器获取到 URL。
2. 浏览器（应用层）进行 DNS 解析（如果输入的是 IP 地址，此步骤省略）
3. 根据解析出的 IP 地址 + 端口，浏览器（应用层）发起 HTTP 请求，请求中携带请求头（header）和请求体（body）。
4. 请求到达传输层，TCP 协议为传输报文提供可靠的字节流传输服务，它通过三次握手等手段来保证传输过程的安全可靠，通过将大块数据的分割成一个个报文段的方式提供给大量数据的便携传输。
5. 到网络层，网络层通过 ARP 寻址得到接受方的 Mac 地址，IP 协议把在传输层被分割成一个个数据包传送接受方。
6. 数据到达数据链路层，请求阶段完成。
7. 接收方在数据链路层收到数据包之后，层层传递到应用层，接受方应用程序就得到请求报文。
8. 接收方收到发送方的 HTPP 请求之后，进行请求文件资源（如 HTML 文件）的寻找并响应报文。
9. 发送方收到响应报文后，如果报文中的状态码表示请求成功，则接受返回的资源（如 HTML 文件），进行页面渲染。

## <a name="chapter-six" id="chapter-six">六 DNS</a>

> [返回目录](#chapter-one)

* 当用户在浏览器输入 `http://jsliang.top` 时，DNS 经历了以下步骤：

1. 浏览器根据地址，在自身缓存中查找 DNS（域名服务器） 中的解析记录。如果存在，则直接返回 IP 地址；如果不存在，则查找操作系统中的 hosts 文件是否有该域名的 DNS 解析记录，如果有就返回。
2. 在条件 1 中的浏览器缓存或者操作系统的 hosts 文件中都没有这个域名的 DNS 解析记录，或者已经过期，则向域名服务器发起请求解析这个域名。
3. 先向本地域名服务器中请求，让它解析这个域名，如果解析不了，则向根域名服务器请求解析。
4. 根服务器给本地域名服务器返回一个主域名服务器。
5. 本地域名服务器向主域名服务器发起解析请求。
6. 主域名服务器接收到解析请求后，查找并返回域名对应的域名服务器的地址。
7. 域名服务器会查询存储的域名和 IP 的映射关系表，返回目标 IP 记录以及一个 TTL（Time To Live）值。
8. 本地域名服务器接收到 IP 和 TTL 值，进行缓存，缓存的时间由 TTL 值控制。
9. 将解析的结果返回给用户，用户根据 TTL 值缓存在本地系统缓存中，域名解析过程结束。

## <a name="chapter-seven" id="chapter-seven">七 浏览器渲染页面</a>

> [返回目录](#chapter-one)

* 浏览器渲染页面的过程 - [详细讲解](https://juejin.im/post/5bbaa549e51d450e827b6b13)：

1. 浏览器通过 HTMLParser 根据深度遍历的原则把 HTML 解析成 DOM Tree。
2. 浏览器通过 CSSParser 将 CSS 解析成 CSS Rule Tree（CSSOM Tree）。
3. 浏览器将 JavaScript 通过 DOM API 或者 CSSOM API 将 JS 代码解析并应用到布局中，按要求呈现响应的结果。
4. 根据 DOM 树和 CSSOMG 树来构造 render Tree。
5. layout：重排，当 render tree 中任一节点的几何尺寸发生改变，render tree 就会重新布局，重新来计算所有节点在屏幕的位置。
6. repaint：重绘，当 render tree 中任一元素样式属性（几何尺寸没改变）发生改变时，render tree 都会重新画，比如字体颜色，背景等变化。
7. paint：遍历 render tree，并调动硬件图形 API 来绘制每个节点。

![图](../../../public-repertory/img/other-InterviewPreparation-01.png)

## <a name="chapter-eight" id="chapter-eight">八 总结</a>

> [返回目录](#chapter-one)

## <a name="chapter-night" id="chapter-night">九 参考文献</a>

> [返回目录](#chapter-one)

1. [《函数防抖和节流》](https://www.jianshu.com/p/c8b86b09daf0)
2. [《节流 & 防抖》](https://qishaoxuan.github.io/blog/js/throttleDebounce.html?tdsourcetag=s_pctim_aiomsg)
3. [《JS奇淫巧技：防抖函数与节流函数》](https://www.cnblogs.com/chenqf/p/7986725.html)

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
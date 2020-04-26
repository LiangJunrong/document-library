面向对象
===

> Create by **jsliang** on **2020-4-26 15:45:42**  
> Recently revised in **2020-4-26 16:00:58**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

### 面向对象编程思想

* 面向过程：注重解决问题的步骤，分析问题需要的每一步，实现函数依次调用；
* 面向对象：是一种程序设计思想。将数据和处理数据的程序封装到对象中。
* 面向对象特性：抽象、封装、继承、多态。

优点：提高代码的复用性及可维护性。

说了那么多，到底啥意思呢？

举个栗子：

* **jsliang** 去附近的砂锅麻辣烫吃饭。

这就是面向对象，即：

```js
const eat = () => {
  return 'jsliang 去砂锅麻辣烫吃饭';
}
eat();
```

但是，吃饭这个动作，是个正常人都可以做的啊，所以：

```js
const eat = (people) => {
  return `${people} 去砂锅麻辣烫吃饭`;
}
eat('jsliang');
```

这时候，就开始面向对象了，即可以任何人到这家餐厅吃饭。

如果你在工作中，你可能觉得这样还不够完美：我们不一定要吃砂锅麻辣烫啊！也不一定天天吃啊！

```js
const eat = (people, address, time) => {
  return `${people} 去 ${address} 吃 ${time}`;
}
eat('jsliang', '煲仔饭', '午饭');
```

很好，这就是面向过程 -> 面向对象。

在工作中，就是当我们一件事，有很多份代码都使用到的时候，就将其抽取出来（封装）。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
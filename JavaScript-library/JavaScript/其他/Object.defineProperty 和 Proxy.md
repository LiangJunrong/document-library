Object.defineProperty 和 Proxy
===

> Create by **jsliang** on **2020-04-24 11:19:51**  
> Recently revised in **2020-04-24 11:38:57**

**欢迎关注 jsliang 的文档库 —— 一个穷尽一生更新的仓库，查看更多技术、理财、健身文章：https://github.com/LiangJunrong/document-library**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 实战](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 参考文献](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 个人整理](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 总结](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

上周在学习过程中，接触到了 `Object.defineProperty` 和 `Proxy` 来构建 MVVM，对此感到有点兴趣，陆续也看到一些两者对比的文章，在此进行总结比对。

## <a name="chapter-three" id="chapter-three"></a>三 实战

> [返回目录](#chapter-one)

* 项目地址：https://github.com/LiangJunrong/all-for-one
* 项目位置：011 —— 013（没基础的小伙伴可以从 009 看起）
* 代码

> Object.defineProperty

```js
observer(data) {
  const dep = new Dep();
  for (let key in data) {
    let value = data[key];
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return value;
      },
      set(newValue) {
        dep.notify(newValue, key);
        if (newValue !== value) {
          value = newValue;
        }
      }
    });
  }
};

// 绑定事件二次渲染视图
for (let i = 0; i < result.length; i++) {
  new Watcher(this._data, result[i], (newValue, key) => {
    if (result[i] === key) {
      textContent = textContent.replace(this._data[result[i]], newValue);
    }
    node.textContent = textContent;
  });
}
```

> Proxy

```js
observer(data) {
  const dep = new Dep();
  this._data = new Proxy(data, {
    get(target, key) {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return target[key];
    },
    set(target, key, newValue) {
      dep.notify(newValue, key);
      target[key] = newValue;
      return true;
    }
  })
};

// 绑定事件二次渲染视图
for (let i = 0; i < result.length; i++) {
  new Watcher(this._data, result[i], (newValue, key) => {
    if (result[i] === key) {
      textContent = textContent.replace(this._data[result[i]], newValue);
    }
    node.textContent = textContent;
  });
}
```

> 发布订阅

```js
// 发布订阅
// 发布者
class Dep {
  constructor() {
    this.subs = [];
  };
  addSub(sub) {
    this.subs.push(sub);
  };
  // 发布
  notify(newValue, key) {
    this.subs.forEach((sub) => {
      sub.update(newValue, key);
    });
  }
}
// 订阅者
class Watcher {
  constructor(data, key, cb) {
    Dep.target = this;
    this.cb = cb;
    // 人为触发 get
    data[key];
    Dep.target = null;
  };
  update(newValue, key) {
    this.cb(newValue, key);
  }
}
```

将 `Object.defineProperty` 升级到 `Proxy` 是很顺滑的，更新的代码并不多，但是课程讲师说这个 `Proxy` 具备很大优势，有多大呢？咱一起看看。

## <a name="chapter-four" id="chapter-four"></a>四 参考文献

> [返回目录](#chapter-one)

下面章节的献丑，均来自大佬们的文献供我参考：

* [【平台】作者《文章名》](地址)

## <a name="chapter-five" id="chapter-five"></a>五 个人整理

> [返回目录](#chapter-one)

## <a name="chapter-six" id="chapter-six"></a>六 总结

> [返回目录](#chapter-one)

--

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
jQuery 源码剖析
===

> Create by **jsliang** on **2020-05-21 07:41:32**  
> Recently revised in **2020-5-21 09:12:43**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 初步模仿](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

学习 jQuery 核心源码实现以及自己尝试写一个东东~

## <a name="chapter-three" id="chapter-three"></a>三 初步模仿

> [返回目录](#chapter-one)

* 1、初始化

我们初始化实现 `jsliang('.btn1').click(() => { ... })` 完成基本的实现：

> index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>仿 jQuery</title>
</head>
<body>
  <button class="btn1">点击</button>
  
  <script src="./index.js"></script>
  <script>
    jsliang('.btn1').click(() => {
      console.log('回调');
    })
  </script>
</body>
</html>
```

> index.js

```js
class JSLIANG {
  constructor(arg) {
    // 1. 获取元素
    console.log(arg); // .btn1
    const elements = document.querySelectorAll(arg);
    console.log(elements); // NodeList [button.btn1]

    // 2. 绑定元素
    this.length = elements.length;
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
  }
  click(fn) {
    /*
      JSLIANG {
        0: button.btn1
        __proto__: Object
      }
    */
    console.log('this：', this);
    /*
      fn： () => {
        console.log('回调');
      }
    */
    console.log('fn：', fn);
    // 3. 使用元素
    for (let i = 0; i < this.length; i++) {
      this[i].onclick = () => {
        fn(); // '回调'
      }
    }
  }
}

function jsliang(arg) {
  return new JSLIANG(arg);
}
```

---

* 2、`$(fn)`

然后基于此进行多样化拓展：

> index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>仿 jQuery</title>
</head>
<body>
  <button class="btn1">点击1</button>
  <button class="btn2">点击2</button>
  <button class="btn3">点击3</button>
  <button class="btn3">点击3</button>
  
  <script src="./index.js"></script>
  <script>
    jsliang(() => {
      console.log('Hello World!');
    })
    jsliang('.btn1').click(() => {
      console.log('回调1');
    })
    jsliang(document.querySelector('.btn2')).click(() => {
      console.log('回调2');
    })
    jsliang(document.querySelectorAll('.btn3')).click(() => {
      console.log('回调3');
    })
  </script>
</body>
</html>
```

> index.js

```js
class JSLIANG {
  constructor(argument) {
    console.log(typeof argument); // string/function/...
    if (typeof argument === 'string') {
      // 如果是字符串，表明需要获取 DOM 节点
      // 举例：jsliang('.btn1')
      this.addElements(document.querySelectorAll(argument));
    } else if (typeof argument === 'function') {
      // 如果是函数，通过 DOMContentLoaded 监听页面 onload 完毕然后执行
      // 举例：jsliang(() => { ... })
      window.addEventListener('DOMContentLoaded', argument);
    } else if (typeof argument === 'object') {
      // 如果是对象，那么它是不是传了 DOM 节点进来
      if (typeof argument.length === 'undefined') {
        // 当对象是 1 个
        this[0] = argument;
        this.length = 1;
      } else {
        // 当对象是多个
        this.addElements(argument);
      }
    }
  }
  // 添加元素
  addElements(elements) {
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
  }
  // 判断点击
  click(fn) {
    for (let i = 0; i < this.length; i++) {
      this[i].onclick = () => {
        fn();
      }
    }
    // 链式操作
    return new JSLIANG(this);
  }
}

function jsliang(arg) {
  return new JSLIANG(arg);
}
```

这样，我们就完成了基本 jQuery 的实现。

---

* 3、`$(elements).animate(style, time, fn)`

甚至我们还可拓展更多方法，例如动画实现~

> index.html

```html
<script>
  jsliang('.button1').click(() => {
    jsliang('.box2').animate({ width: '300px', height: '300px', borderRadius: '150px' }, 3000, () => {
      console.log('展开完成！');
    });
  });
</script>
```

```js
class JSLIANG {
  // ...代码省略
  animate(styles, time, fn) {
    for (let i = 0; i < this.length; i++) {
      this[i].style.transition = time / 1000 + 's';
    }
    Object.getOwnPropertyNames(styles).forEach((key) => {
      for (let i = 0; i < this.length; i++) {
        this[i].style[key] = styles[key];
      }
    });
    fn();
    // 链式操作
    return new JSLIANG(this);
  }
  // ...代码省略
}
```

---

* `$(.btn).on('mouseover mousedown', fn)`

> index.html

```html
<script>
  jsliang('.btn').on('mousemove mousedown', () => {
    console.log('event...');
  })
</script>
```

> index.js

```js
class JSLIANG {
  // ...代码省略
  on(eventName, fn) {
    // 'mousemove   mousedown    mouseover'
    eventName = eventName.replace(/\s+/g, ' ');
    const eventList = eventName.split(' ');
    // 针对每个节点绑定事件
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventList.length; j++) {
        this[i].addEventListener(eventList[j], fn);
      }
    }
    // 链式操作
    return new JSLIANG(this);
  }
  // ...代码省略
}

```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
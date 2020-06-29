Array - sort() 探索
===

> Create by **jsliang** on **2020-4-8 21:53:07**  
> Recently revised in **2020-4-9 08:57:34**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 结论](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

事情得从 **jsliang** 练习的一份代码开始讲起：

> 排序算法代码

```js
const jsliangSort = function() {
  // 用 let，后面需要改造
  let array = [];

  // 打印数组
  this.print = function() {
    console.log(array);
  };

  // 获取数组
  this.getArray = function() {
    return array;
  };

  // 清空数组
  this.clear = function() {
    array = [];
  };

  // 插入元素，支持单个元素或者数组，不支持对象
  this.insert = function(item) {
    if (Object.prototype.toString.call(item).slice(8, -1) === 'Array') {
      array = [...array, ...item];
    } else {
      array.push(item);
    }
    return this;
  };

  // 冒泡排序
  this.bubbleSort = function(type = 'asc') {
    for (let i = 0; i < array.length; i++) {
      // 设置冒泡阻止 flag
      let stopFlag = true;
      for (let j = 0; j < array.length - 1; j++) {
        if (
          (type === 'asc' && array[j] > array[j + 1])
          || (type === 'desc' && array[j] < array[j + 1])
        ) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          stopFlag = false;
        }
      }
      // 如果没有发生冒泡，说明它已完成排序，可以提前结束冒泡
      if (stopFlag) {
        break;
      }
    }
  };

  // 选择排序
  this.selectionSort = function(type = 'asc') {
    let changeIndex;
    for (let i = 0; i < array.length - 1; i++) {
      changeIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (
          (type === 'asc' && array[changeIndex] > array[j])
          || (type === 'desc' && array[changeIndex] < array[j])
        ) {
          changeIndex = j;
        }
      }
      if (i !== changeIndex) {
        [array[changeIndex], array[i]] = [array[i], array[changeIndex]];
      }
    }
  };
};

const array = new jsliangSort();

array.insert([2, 3, 1, 4]).insert(6).insert(5);
array.print(); // [2, 3, 1, 4, 6, 5]

console.log('------');
console.time('内置排序');

const asc = array.getArray().sort((a, b) => a - b);
console.log(asc); // [ 1, 2, 3, 4, 5, 6 ]
const desc = array.getArray().sort((a, b) => b - a);
console.log(desc); // [ 6, 5, 4, 3, 2, 1 ]

console.timeEnd('内置排序'); // 内置排序: 0.680ms

array.clear();
array.insert([2, 3, 1, 4]).insert(6).insert(5);

console.log('------');
console.time('冒泡排序');

array.bubbleSort();
array.print(); // [ 1, 2, 3, 4, 5, 6 ]

array.bubbleSort('desc');
array.print(); // [ 6, 5, 4, 3, 2, 1 ]

console.timeEnd('冒泡排序'); // 冒泡排序: 0.244ms

array.clear();
array.insert([2, 3, 1, 4]).insert(6).insert(5);

console.log('------');
console.time('选择排序');

array.selectionSort();
array.print(); // [ 1, 2, 3, 4, 5, 6 ]

array.selectionSort('desc');
array.print(); // [ 6, 5, 4, 3, 2, 1 ]

console.timeEnd('选择排序'); // 选择排序: 0.180ms

array.clear();
array.insert([2, 3, 1, 4]).insert(6).insert(5);
```

在这份代码中，关于数组 `[2, 3, 1, 4, 6, 5]` 的先升序再降序的排序时间统计，得到一份 “不正常” 的数据：

| 方法 | 时间 |
| --- | --- |
| 原生排序 | 0.680ms |
| 冒泡排序 | 0.244ms |
| 选择排序 | 0.180ms |

小朋友，你是不是有很多问号：

* 为什么原生的 `Array.prototype.sort()` 排序这么差？
* 它不是用了插入排序以及快速排序么？
* 为什么为什么为什么？
* ……

于是感到疑惑的 **jsliang** 花了一晚 + 一早的时间查资料。

> 早上起来发现显示器坏了，然后修了一会后发现昨晚查找的资料（在浏览器上页签打开的）居然散落丢失了，只能去历史浏览记录捡起一些内容，惨痛的教训！

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

话不多说，进入正题：

在 MDN 中的 `Array.prototype.sort()` 内容上，解释如下：

* `sort()` 方法用原地算法对数组的元素进行排序，并返回数组。
* 默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的。
* 由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

就是说，它的工作内容，是由不同浏览器内核决定的，Chrome 和 Firefox 等都不一样。

这里资料丢了，咱就不搞啥大头葱讲各个浏览器用了啥排序算法了。

咱们重点聊聊 V8 的 `sort` 排序：

> test\mjsunit\array-sort.js

```js
function TestSortDoesNotDependOnArrayPrototypePush() {
  // InsertionSort is used for arrays which length <= 22
  var arr = [];
  for (var i = 0; i < 22; i++) arr[i] = {};
  Array.prototype.push = function() {
    fail('Should not call push');
  };
  arr.sort();

  // Quicksort is used for arrays which length > 22
  // Arrays which length > 1000 guarantee GetThirdIndex is executed
  arr = [];
  for (var i = 0; i < 2000; ++i) arr[i] = {};
  arr.sort();
}
```

这是下载的 V8 引擎库 （https://github.com/v8/v8） 中找到的一行代码：

* `InsertionSort is used for arrays which length <= 22`：当数组长度小于等于 22 时，使用插入排序。
* `Quicksort is used for arrays which length > 22`：当数组长度大于 22 时，使用可快速排序。
* `Arrays which length > 1000 guarantee GetThirdIndex is executed`：当数组长度大于 1000 时确保 `GetThirdIndex` 的运行。

> 注 1：【2020-4-9】注意时效性，V8 可能会维护改动

> 注 2：查找的资料中，表明的是长度小于等于 10 为插入排序，大于 10 为快速排序

> 注 3:：`GetThirdIndex` 这个硬是找不到是什么意思。

那么说的话，长度小于 22 的时候，有可能是因为算法或者其他问题（局部原因），导致原生的排序比不上我写的，所以咱们再进行一遍测试：

```js
const array = new jsliangSort();

for (let i = 998; i >= 0; i--) {
  array.insert(i);
}

console.log('------');
console.time('内置排序');

const asc = array.getArray().sort((a, b) => a - b);
const desc = array.getArray().sort((a, b) => b - a);

console.timeEnd('内置排序');

array.clear();
for (let i = 998; i >= 0; i--) {
  array.insert(i);
}

console.log('------');
console.time('冒泡排序');

array.bubbleSort();

array.bubbleSort('desc');

console.timeEnd('冒泡排序');

array.clear();
for (let i = 998; i >= 0; i--) {
  array.insert(i);
}

console.log('------');
console.time('选择排序');

array.selectionSort();

array.selectionSort('desc');

console.timeEnd('选择排序');
```

这时候的结果如何呢？看表：

| 方法 | 时间 |
| --- | --- |
| 原生排序 | 3.445ms |
| 冒泡排序 | 23.788ms |
| 选择排序 | 11.507ms |

哦豁？！来精神了，先将表统一一下：

| 方法 | 插入长度 |  |
| --- | --- | --- |
|  | 006 | 999 |
| 原生排序 | 0.680ms | 3.445ms |
| 冒泡排序 | 0.244ms | 23.788ms |
| 选择排序 | 0.180ms | 11.507ms |

> 小伙伴可以尝试输入各种数字进行统计，这里不一一展示

那么很明显了，V8 告诉我们：

* 不能以偏概全，凡事都有意外。
* 我还是可以信赖的~

如果你对它具体的实现感兴趣的话，可以翻看下参考文献的代码，里面有讲解关于 V8 的 `sort()` 排序的一些资料，这里就不装高端了。

## <a name="chapter-four" id="chapter-four">四 结论</a>

> [返回目录](#chapter-one)

在某些情况下，JavaScript 原生的排序可能比不上你自己写的一些方法，但是作为它内置的方法，并且各个浏览器都进行了各自的推荐，那么我们该使用它就使用它吧！

有桥了就不要造船了，面试啥的或许可以谈谈这个内容，或者在架构设计的时候，考虑下 `sort()` 的性能优化。

但是实际业务如果你较真这个，估计你会遍体鳞伤~

最后写点小总结：

1. JavaScript 的 `sort()` 在不同的浏览器内核有不同的实现机制，Chrome、Firefix 等是不同的。
2. V8 的 `sort()` 在某些长度使用了插入排序，在某些长度使用了快速排序，所以表现的性能不一致（某些长度看 V8 版本，不同版本可能长度不一样）

以上。

## <a name="chapter-five" id="chapter-five">五 参考文献</a>

> [返回目录](#chapter-one)

* [【MDN】Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [【GitHub】node](https://github.com/nodejs/node)
* [【GitHub】v8](https://github.com/v8/v8)
* [【简书】caoqi95《原地算法（in-place algorithm）》](https://www.jianshu.com/p/567b1dc38db7)
* [【知乎】Smith《[译] V8引擎中的排序》](https://zhuanlan.zhihu.com/p/55338902)
* [【简书】请叫我大苏《原来浏览器的数组排序 sort() 有 BUG》](https://www.jianshu.com/p/4889381a526a)
* [【CSDN】前端瓶子君《前端进阶算法2：从Chrome V8源码看JavaScript数组(附赠腾讯面试题)》](https://blog.csdn.net/lunahaijiao/article/details/105283439)
* [【简书】魏永_Owen_Wei《JS-数组sort方法用的是哪种排序算法》](https://www.jianshu.com/p/0ddbc3c8f683)
* [【v8官网】《Getting things sorted in V8》](https://v8.dev/blog/array-sort)
* [【博客】亚里士朱德《【深度】扒开V8引擎的源码，我找到了你们想要的前端算法》](https://yalishizhude.github.io/2019/09/05/v8-sort/)
* [【ts39】Array.prototype.sort](https://tc39.es/ecma262/#sec-array.prototype.sort)
* [【微信公众号】李超《探究JS V8引擎下的“数组”底层实现》](https://mp.weixin.qq.com/s/np9Yoo02pEv9n_LCusZn3Q)
* ……

更多的文献当天丢失了，找不到，这些是抢救回来的一些资料 /手动嚎啕大哭

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
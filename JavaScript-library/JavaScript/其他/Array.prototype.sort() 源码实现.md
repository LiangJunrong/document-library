Array.prototype.sort() 源码实现
===

> Create by **jsliang** on **2020-4-8 21:53:07**  
> Recently revised in **2020-4-8 23:05:19**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 参考文献](#chapter-ten) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

事情得从一份代码开始讲起：

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
| 原生排序 |  |
| 冒泡排序 |  |
| 选择排序 |  |

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

## <a name="chapter-ten" id="chapter-ten">十 参考文献</a>

> [返回目录](#chapter-one)

* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()
* [【网站】作者《文章名》]()

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
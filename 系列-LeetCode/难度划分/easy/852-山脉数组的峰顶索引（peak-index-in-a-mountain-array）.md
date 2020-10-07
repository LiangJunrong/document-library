852 - 山脉数组的峰顶索引（peak-index-in-a-mountain-array）
===

> Create by **jsliang** on **2020-01-09 18:55:13**  
> Recently revised in **2020-01-09 19:55:38**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 进一步思考](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：二分查找
* **题目地址**：
* **题目内容**：

```
我们把符合下列属性的数组 A 称作山脉：

* A.length >= 3
* 存在 0 < i < A.length - 1，
使得A[0] < A[1] < ... A[i-1] < A[i]
> A[i+1] > ... > A[A.length - 1]

给定一个确定为山脉的数组，
返回任何满足：
A[0] < A[1] < ... A[i-1] < A[i]
> A[i+1] > ... > A[A.length - 1]
的 i 的值。

示例 1：

输入：[0,1,0]
输出：1

示例 2：

输入：[0,2,1,0]
输出：1

提示：

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A 是如上定义的山脉
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 山脉数组的峰顶索引
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = (A) => {
  return A.indexOf(Math.max(...A));
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 1, 2, 0])); // 2
```

`node index.js` 返回：

```js
1
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 32/32 cases passed (52 ms)
* Your runtime beats 97.87 % of javascript submissions
* Your memory usage beats 45 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

拿到题目，细细思考一下，抖了下机灵：

> 一行求解

```js
const peakIndexInMountainArray = (A) => A.indexOf(Math.max(...A));
```

一行求解！

`Math.max` 可以塞多个元素，所以我们通过 `...A` 进行数组解耦，传入 `Math.max` 中。

然后通过 `indexOf` 查找到位置即可~

Submit 提交如下：

```js
Accepted
* 32/32 cases passed (52 ms)
* Your runtime beats 97.87 % of javascript submissions
* Your memory usage beats 45 % of javascript submissions (34.9 MB)
```

然而，你并不知道的是，当中还有一些曲折：

> 两种方法

```js
// findIndex
const peakIndexInMountainArray = (A) => A.findIndex(i => i === Math.max(...A));

// indexOf
const peakIndexInMountainArray = (A) => A.indexOf(Math.max(...A));
```

结果你知道会发生什么吗？

> 两种结局

```js
// findIndex
Accepted
* 32/32 cases passed (440 ms)
* Your runtime beats 5.85 % of javascript submissions
* Your memory usage beats 14 % of javascript submissions (35.4 MB)

// indexOf
Accepted
* 32/32 cases passed (52 ms)
* Your runtime beats 97.87 % of javascript submissions
* Your memory usage beats 45 % of javascript submissions (34.9 MB)
```

那么，就是看下为何 `findIndex` 和 `indexOf` 差别那么大了：

* [Difference Between indexOf and findIndex function of array - Stack Overflow](https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array)
* [findIndex - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
* [indexOf - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

在这些文章中提到：

* `indexOf` 的第一个参数希望查找一个 `value` 值，可以用于原始类型的数组。
* `findIndex` 的一个参数希望一个 `callback` 回调函数，可以用于复杂数据类型的数组或者查找条件比一个值要复杂的情况。

根据 ECMA-262 标准，它们的实现方式分别为：

> findIndex 实现机制

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}
```

> indexOf 实现机制

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

如果你不想看源码，那么也可以看看实验：

> 运行时间对比

```js
A = [1, 2, 3, 2, 1];

console.time('findIndex');
const findNumIndex = (A) => A.findIndex(i => i === Math.max(...A));
findNumIndex(A);
console.timeEnd('findIndex');

console.time('indexOf');
const indexOfNum = (A) => A.indexOf(Math.max(...A));
indexOfNum(A);
console.timeEnd('indexOf');
```

输出结果为：

```js
findIndex: 0.267ms
indexOf: 0.083ms
```

排除了提交 LeetCode 的网络问题，我们可以得知查找单个元素的时候，`indexOf()` 的效率的确是远远大于 `findIndex()`。

所以，以后小伙伴们使用查找元素的时候，可以根据对着两种方式的了解，进而提高自己代码的效能~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
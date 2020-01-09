indexOf 和 findIndex 的区别
===

> create by **jsliang** on **2020-01-09 19:42:06**  
> Recently revised in **2020-01-09 19:55:56**

在破解题目 [852-山脉数组的峰顶索引（peak-index-in-a-mountain-array）](https://github.com/LiangJunrong/document-library/blob/master/other-library/LeetCode/easy/852-%E5%B1%B1%E8%84%89%E6%95%B0%E7%BB%84%E7%9A%84%E5%B3%B0%E9%A1%B6%E7%B4%A2%E5%BC%95%EF%BC%88peak-index-in-a-mountain-array%EF%BC%89.md) 的时候，发现了一个现象：

假设有数组：`[1, 2, 3, 2, 1]`。

那么使用 `findIndex` 和 `indexOf` 去查找元素为 3 的值，会发生什么呢？

> 两种方法

```js
const A = [1, 2, 3, 2, 1];
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

咦，那就有点意思了，这两者的 `runtime` 相差那么大，会不会有可能是我网络问题？

于是我本地实验了下：

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

> 我同事说试验不够完善，还可以扩大数组，或者查找更深层次元素，小伙伴们可以尝试尝试

排除了提交 LeetCode 的网络问题，我们可以得知查找单个元素的时候，`indexOf()` 的效率的确是远远大于 `findIndex()`。

那么，为何 `findIndex` 和 `indexOf` 差别那么大呢，**jsliang** 查找了几篇文章：

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

所以，以后小伙伴们使用查找元素的时候，可以根据对着两种方式的了解，进而提高自己代码的效能~

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
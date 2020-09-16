JavaScript 题集
===

> Create by **jsliang** on **2020-09-16 13:50:40**  
> Recently revised in **2020-09-16 14:06:39**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

### 题 1：暂时性死区

下面代码输出什么？

```js
let a = 1;
let test = function() {
  console.log(a);
  a++;
}
test();
```

下面代码输出什么？

```js
let a = 1;
let test = function() {
  console.log(a);
  let a = 2;
  a++;
}
test();
```

---

第一道题输出：`1`

第二道题输出：`Uncaught ReferenceError: Cannot access 'a' before initialization`

其原因是在同一个 `block` 中，`let` 在后面重新定义的，那么就不能在之前引用该变量。同时，也不能取嵌套外层的值。

### 题 2：遍历问题

以下代码执行后，array 的结果是？

```js
let array = [ , 1, , 2, , 3];
array = array.map((i) => ++i)
```

* A：`[ , 2, , 3, , 4]`
* B：`[NaN, 2, NaN, 3, NaN, 4]`
* C：`[1, 2, 1, 3, 1, 4]`
* D：`[null, 2, null, 3, null, 4]`

---

答案：A

解释：

1. `forEach()`、`filter()`、`reduce()`、`every()` 和 `some()` 都会跳过空位。
2. `map()` 会跳过空位，但会保留这个值
3. `join()` 和 `toString()` 会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串。

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
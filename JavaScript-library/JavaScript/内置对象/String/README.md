String
===

> Create by **jsliang** on **2019-05-19 11:17:49**  
> Recently revised in **2019-09-11 11:34:22**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 简介](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 详解](#chapter-three) |
| &emsp;[3.1 字符串 - 查询](#chapter-three-one) |
| &emsp;[3.2 字符串 - 正则表达式](#chapter-three-two) |
| &emsp;[3.3 字符串 - 修改](#chapter-three-three) |
| &emsp;[3.4 字符串 - 转类型](#chapter-three-four) |
| &emsp;[3.5 字符串 - 大小写](#chapter-three-five) |
| &emsp;[3.6 字符串 - 去空格](#chapter-three-six) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 拓展](#chapter-four) |

## <a name="chapter-two" id="chapter-two">二 简介</a>

> [返回目录](#chapter-one)

* **参考**：[MDN - String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

* **功能**：`String` 全局对象是一个用于字符串或一个字符序列的构造函数。`String` 可以将其他类型的值转换成字符串。

* **使用**：

```js
// String(anything)：将 anything 转成字符串。
String(123); // '123'
String(true); // 'true'
```

## <a name="chapter-three" id="chapter-three">三 详解</a>

> [返回目录](#chapter-one)

在日常工作中，我们一般使用以下两种形式来定义某个数据类型为字符串：

```js
let str = new String();
// 或者
str2 = '';
```

然后，在 `String` 这个内置对象中，还存在许多内置的方法，例如：`str.repeat()`、`str.concat()` 等……

在讲解这些方法前，咱们来探索下，如何给 `String` 添加新的方法：

```js
String.prototype.add = (a, b) => a + b;
String.prototype.owner = 'jsliang';
let str = new String();
str.add(1, 3); // 4
str.owner; // jsliang
```

通过这个可以看出，使用原型链，我们可以往浏览器内置对象中添加方法，所以，为什么我们定义某个数据为字符串，就可以使用一堆方法，想必小伙伴们也了解为什么：

```js
let str = 'jsliang';
str.charAt(4); // 'a'
str.concat(' like use js'); // 'jsliang like use js'
str.indexOf(str[str.length - 1]); // 6
```

那么，话不多说，咱们了解下日常工作中常用的一些 `String` 内置方法。

### <a name="chapter-three-one" id="chapter-three-one">3.1 字符串 - 查询</a>

> [返回目录](#chapter-one)

1. `str.length`：返回了字符串的长度。[详细学习](./length.md)
2. `str.charAt(index)`：返回特定位置的字符。[详细学习](./charAt.md)
3. `str.charCodeAt(index)`：返回表示给定索引的字符的 Unicode 的值。[详细学习](./charCodeAt.md)
4. `str.includes(searchString, fromIndex))`：判断一个字符串里是否包含其他字符串。[详细学习](./includes.md)
5. `str.indexOf(searchString, fromIndex)`：从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回 -1。[详细学习](./indexOf.md)
6. `str.lastIndexOf()`：从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回 -1。[详细学习](./lastIndexOf.md)
7.  `str.substring()`：返回在字符串中指定两个下标之间的字符。[详细学习](./substring.md)

### <a name="chapter-three-two" id="chapter-three-two">3.2 字符串 - 正则表达式</a>

> [返回目录](#chapter-one)

1. `str.match()`：使用正则表达式与字符串相比较。[详细学习](./match.md)
2. `str.matchAll()`：返回一个包含所有匹配正则表达式及分组捕获结果的迭代器。[详细学习](./matchAll.md)
3. `str.replace()`：被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。[详细学习](./replace.md)
4. `str.search()`：对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。[详细学习](./search.md)

### <a name="chapter-three-three" id="chapter-three-three">3.3 字符串 - 修改</a>

> [返回目录](#chapter-one)

1. `str.concat()`：连接两个字符串文本，并返回一个新的字符串。[详细学习](./concat.md)
2. `str.padStart()`：在当前字符串头部填充指定的字符串，直到达到指定的长度。返回一个新的字符串。[详细学习](./padStart.md)
3. `str.padEnd()`：在当前字符串尾部填充指定的字符串，直到达到指定的长度。返回一个新的字符串。[详细学习](./padEnd.md)
4. `str.repeat()`：返回指定重复次数的由元素组成的字符串对象。[详细学习](./repeat.md)
5. `str.slice()`：摘取一个字符串区域，返回一个新的字符串。[详细学习](./slice.md)

### <a name="chapter-three-four" id="chapter-three-four">3.4 字符串 - 转类型</a>

> [返回目录](#chapter-one)

1. `str.split()`：（字符串转数组）通过分离字符串成子串，将字符串对象分割成字符串数组。[详细学习](./split.md)
2. `type.toString()`：（其他类型转字符串）返回用字符串表示的特定对象。[详细学习](./toString.md)

### <a name="chapter-three-five" id="chapter-three-five">3.5 字符串 - 大小写</a>

> [返回目录](#chapter-one)

1. `str.toLocaleLowerCase()` / `str.toLowerCase()`：根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，`toLowerCase` 的返回值是一致的。[详细学习](./toLowerCase.md)
2. `str.toLocaleUpperCase()` / `str.toUpperCase()`：根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，`toUpperCase` 的返回值是一致的。[详细学习](./toUpperCase.md)

### <a name="chapter-three-six" id="chapter-three-six">3.6 字符串 - 去空格</a>

> [返回目录](#chapter-one)

1. `str.trim()`：从字符串的开始和结尾去除空格。[详细学习](./trim.md)
2. `str.trimStart()` / `str.trimLeft()`：从字符串的左侧去除空格。[详细学习](./trimStart.md)
3. `str.trimEnd()` / `str.trimRight()`：从字符串的右侧去除空格。[详细学习](./trimEnd.md)

## <a name="chapter-four" id="chapter-four">四 拓展</a>

> [返回目录](#chapter-one)

> 浏览器内置对象之字符串 API

```js
new String; // 在浏览器敲入 new String

// 输出
String {
  length: 0,
  __proto__: {
    anchor: ƒ anchor(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    big: ƒ big(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    blink: ƒ blink(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    bold: ƒ bold(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    charAt: ƒ charAt(),
    charCodeAt: ƒ charCodeAt(),
    codePointAt: ƒ codePointAt(), // 返回使用 UTF-16 编码的给定位置的值的非负整数。
    concat: ƒ concat(),
    constructor: ƒ String(), // 用于创造对象的原型对象的特定的函数。
    endsWith: ƒ endsWith(), // 需要兼容处理（ES6）
    fixed: ƒ fixed(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    fontcolor: ƒ fontcolor(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    fontsize: ƒ fontsize(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    includes: ƒ includes(),
    indexOf: ƒ indexOf(),
    italics: ƒ italics(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    lastIndexOf: ƒ lastIndexOf(),
    length: 0,
    link: ƒ link(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    localeCompare: ƒ localeCompare(), // 返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。
    match: ƒ match(),
    matchAll: ƒ matchAll(),
    normalize: ƒ normalize(), // 返回调用字符串值的Unicode标准化形式。
    padEnd: ƒ padEnd(),
    padStart: ƒ padStart(),
    repeat: ƒ repeat(),
    replace: ƒ replace(),
    search: ƒ search(),
    slice: ƒ slice(),
    small: ƒ small(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    split: ƒ split(),
    startsWith: ƒ startsWith(), // 需要兼容处理（ES6）
    strike: ƒ strike(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    sub: ƒ sub(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    substr: ƒ substr(), // 避免使用，后期可能被移除
    substring: ƒ substring(),
    sup: ƒ sup(), // 被限制使用，因为只对可用的 HTML 标签和属性提供部分支持。
    toLocaleLowerCase: ƒ toLocaleLowerCase(),
    toLocaleUpperCase: ƒ toLocaleUpperCase(),
    toLowerCase: ƒ toLowerCase(),
    toString: ƒ toString(),
    toUpperCase: ƒ toUpperCase(),
    trim: ƒ trim(),
    trimEnd: ƒ trimEnd(),
    trimLeft: ƒ trimStart(),
    trimRight: ƒ trimEnd(),
    trimStart: ƒ trimStart(),
    valueOf: ƒ valueOf(), // 返回特定对象的原始值。
    Symbol(Symbol.iterator): ƒ [Symbol.iterator](),
  }
}
```

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
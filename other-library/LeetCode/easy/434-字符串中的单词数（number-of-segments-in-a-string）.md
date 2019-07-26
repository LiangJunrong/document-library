434 - 字符串中的单词数（number-of-segments-in-a-string）
===

> Create by **jsliang** on **2019-07-26 10:54:15**  
> Recently revised in **2019-07-26 11:24:26**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解 1](#chapter-three-one) |
| &emsp;[3.2 解法 - 暴力破解 2](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/number-of-segments-in-a-string/
* **题目内容**：

```
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

输入: "Hello, my name is John"
输出: 5
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var countSegments = function(s) {
  s = s.split(' ');
  let length = s.length;
  s.forEach((item) => {
    if (item === '') {
      length--;
    }
  })
  return length;
};
```

* **执行测试**：

1. `s`：`Hello, my name is John`
2. `return`：

```js
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 26/26 cases passed (116 ms)
  ✔ Your runtime beats 11.81 % of javascript submissions
  ✔ Your memory usage beats 11.76 % of javascript submissions (33.9 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `forEach()`：`forEach()` 方法对数组的每个元素执行一次提供的函数。[`forEach()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/forEach.md)

* **解题思路**：

**首先**，明确题意：

1. `'Hello, my name is John'` 返回 5。
2. `'           '` 返回 0。

**然后**，原本打算直接：

```js
var countSegments = function(s) {
  return s.split(' ').length;
};
```

结果不满足条件 2，报错了。

所以，修改为：

```js
var countSegments = function(s) {
  s = s.split(' ');
  let length = s.length;
  s.forEach((item) => {
    if (item === '') {
      length--;
    }
  })
  return length;
};
```

即：我们先切割，再统计它的长度，遍历一次，如果发现里面存在 `''` 空字符串，那么我们就将其长度减一。

**最后**，我们返回它的长度即可。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 暴力破解 2</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var countSegments = function (s) {
  let res = 0;
  s.split(' ').map((val) => {
    if (val !== '') {
      res++;
    }
  })
  return res;
}
```

* **执行测试**：

1. `s`：`Hello, my name is John`
2. `return`：

```js
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 26/26 cases passed (84 ms)
  ✔ Your runtime beats 48.03 % of javascript submissions
  ✔ Your memory usage beats 42.65 % of javascript submissions (33.7 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `map()`：遍历数组，`item` 返回遍历项，`index` 返回当前索引。[`map()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/map.md)

* **解题思路**：

思路同 3.1，先将字符串切割成数组，然后遍历数组。

如果数组中的元素不是空格，那么就让元素 + 1，最终返回 `res` 即可。

* **进一步思考**：

> 扩展题解 1：

```js
var countSegments = function (s) {
  let transfer = [
      [0, 1],
      [0, 1]
    ],
    state = 0,
    count = 0;
  s += " ";
  for (let i = 0; i < s.length; ++i) {
    let id = (s[i] != " ") | 0,
      ns = transfer[state][id];
    if (state > ns) count++;
    state = ns;
  }
  return count;
};
```

Submit 提交记录：

```js
✔ Accepted
  ✔ 26/26 cases passed (116 ms)
  ✔ Your runtime beats 11.81 % of javascript submissions
  ✔ Your memory usage beats 23.53 % of javascript submissions (33.8 MB)
```

> 扩展题解 2：

```js
var countSegments = function (s) {
  //去除前后空白符，用\s+任何Unicode空白符分割的数组
  return (s.trim() === '') ? 0 : s.trim().split(/\s+/).length;
};
```

Submit 提交记录：

```js
✔ Accepted
  ✔ 26/26 cases passed (88 ms)
  ✔ Your runtime beats 38.58 % of javascript submissions
  ✔ Your memory usage beats 35.29 % of javascript submissions (33.7 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
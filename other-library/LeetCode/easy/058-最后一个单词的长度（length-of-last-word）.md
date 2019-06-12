058 - 最后一个单词的长度（length-of-last-word）
===

> Create by **jsliang** on **2019-06-10 18:18:16**  
> Recently revised in **2019-06-10 19:46:34**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 正则表达式](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/length-of-last-word/
* **题目内容**：

```
给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:
输入: "Hello World"
输出: 5
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lengthOfLastWord = function(s) {
  // 防止 'b   a  cc' 的情况，去掉多余空格（去重）
  const result = [...new Set(s.split(' '))];
  // 防止 'a  ' 的情况
  if (result.length >=2 && result[result.length - 1] === '') {
    return result[result.length - 2].length
  }
  return result[result.length - 1].length;
};
```

* **执行测试**：

1. `s`：`Hello World`
2. `return`：

```js
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 59/59 cases passed (72 ms)
  ✔ Your runtime beats 96.22 % of javascript submissions
  ✔ Your memory usage beats 20.38 % of javascript submissions (33.9 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Set.md)

* **解题思路**：

**首先**，说个比较复杂的逻辑：

1. 通过 `split()` 将字符串打成数组
2. 通过 `Set` 对数组去重
3. 通过 `[...Object]` 扩展运算符再将 `Set` 类型打成数组。

**然后**，由于 `'a '` 的情况下，会将该字符串转成 `['a', '']`，所以我们需要判断最后一个是不是 `''`，如果是的话，我们取倒数第二个的长度。

**最后**，正常情况下，返回倒数第一个的长度。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 正则表达式</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var lengthOfLastWord = function(s) {
  s = s.replace(/(\s*$)/g, "");
  let arr = s.split(' ');
  return arr[arr.length - 1].length;
};
```

* **执行测试**：

1. `s`：`Hello World`
2. `return`：

```js
5
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 59/59 cases passed (64 ms)
  ✔ Your runtime beats 99.42 % of javascript submissions
  ✔ Your memory usage beats 35.25 % of javascript submissions (33.7 MB)
```

* **知识点**：

1. `RegExp`：构造函数的原型对象。常用语一些便捷操作。[`RegExp` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/RegExp.md)
2. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)

* **解题思路**：

**首先**，进行正则去空格，`\s` 的意思是匹配任何空白字符，包括空格、制表符、换行符等，而 `*` 表示任意个，`$` 表示结尾，所以 `\s*$` 的意思就是匹配结尾的任意个空格，并将其替换为 `''`（注意，不是空，而是去掉）

**然后**，通过 `split()` 将字符串打成数组。

**最后**，返回数组最后一位的长度。

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
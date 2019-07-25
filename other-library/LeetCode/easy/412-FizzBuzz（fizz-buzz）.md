412 - FizzBuzz（fizz-buzz）
===

> Create by **jsliang** on **2019-07-25 15:48:32**  
> Recently revised in **2019-07-25 16:08:25**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 奇技淫巧](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：无
* **题目地址**：https://leetcode-cn.com/problems/fizz-buzz/
* **题目内容**：

```
写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

n = 15,

返回:
[
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz"
]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i + '');
    }
  }
  return result;
};
```

* **执行测试**：

1. `n`：`15`
2. `return`：

```js
[ '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz' ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 8/8 cases passed (92 ms)
  ✔ Your runtime beats 76.26 % of javascript submissions
  ✔ Your memory usage beats 57.05 % of javascript submissions (37.3 MB)
```

* **知识点**：

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)

* **解题思路**：

虽然这是一道 LeetCode 题，但是我觉得这是一道大一作业题，可以说是简单地不能再简单了，完全就是玩了可以丢的那种~

> 自行解析，不做评论

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 奇技淫巧</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var fizzBuzz = function(n) {
  return Array(n).fill(0).map((_, i) => (i + 1) % 3 === 0? (i + 1) % 5 === 0? 'FizzBuzz': 'Fizz': (i + 1) % 5 === 0? 'Buzz': i + 1 + '');
};
```

* **执行测试**：

1. `n`：`15`
2. `return`：

```js
[ '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz' ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 8/8 cases passed (92 ms)
  ✔ Your runtime beats 76.26 % of javascript submissions
  ✔ Your memory usage beats 30.13 % of javascript submissions (37.4 MB)
```

* **知识点**：

1. `map()`：遍历数组，`item` 返回遍历项，`index` 返回当前索引。[`map()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/map.md)

* **解题思路**：

有点像是强行压缩成一行，引起极度不适~

业务代码中不要这么写喔~要不然你队友会拍死你的。

> 这种写法不好维护

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
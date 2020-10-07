443 - 压缩字符串（string-compression）
===

> Create by **jsliang** on **2019-07-29 17:15:44**  
> Recently revised in **2019-09-18 14:08:35**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 暴力破解](#chapter-three-one) |
| &emsp;[3.2 解法 - 双指针](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/string-compression/
* **题目内容**：

```
给定一组字符，使用原地算法将其压缩。

压缩后的长度必须始终小于或等于原数组长度。

数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

在完成原地修改输入数组后，返回数组的新长度。

进阶：
你能否仅使用O(1) 空间解决问题？

示例 1：

输入：
["a","a","b","b","c","c","c"]

输出：
返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

说明：
"aa"被"a2"替代。"bb"被"b2"替代。"ccc"被"c3"替代。

示例 2：

输入：
["a"]

输出：
返回1，输入数组的前1个字符应该是：["a"]

说明：
没有任何字符串被替代。

示例 3：

输入：
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

输出：
返回4，输入数组的前4个字符应该是：["a","b","1","2"]。

说明：
由于字符"a"不重复，所以不会被压缩。"bbbbbbbbbbbb"被“b12”替代。
注意每个数字在数组中都有它自己的位置。
注意：

所有字符都有一个ASCII值在[35, 126]区间内。
1 <= len(chars) <= 1000。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var compress = function(chars) {
  if (chars.length === 1) {
    return chars.length;
  }
  let start = 0;
  let mark = chars[0];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== mark || i === chars.length - 1) {
      let length = i - start;
      if (i === chars.length - 1 && chars[i] === chars[i - 1]) {
        length += 1;
      }
      let numberToArr;
      if (length === 1) {
        numberToArr = [mark];
      } else {
        numberToArr = [mark, ...String(length).split('')];
      }
      mark = chars[i];
      chars.splice(start, length, ...numberToArr);
      if (length === 1) {
        i = start + 1;
      } else {
        i = start + 2 + (String(length).split('').length - 1);
      }
      start = i;
    }
  }
  return chars.length;
};
```

* **执行测试**：

1. `chars`：`["a","a","b","b","c","c","c"]`
2. `return`：

```js
[ 'a', '2', 'b', '2', 'c', '3' ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 70/70 cases passed (108 ms)
  ✔ Your runtime beats 57.64 % of javascript submissions
  ✔ Your memory usage beats 23.68 % of javascript submissions (37.4 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/split.md)
2. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)
3. `String`：将其他值转成字符串。[`String` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/README.md)

* **解题思路**：

**首先**，解题中的繁杂，不一一道来，一开始我的思路，写出来的题解是这样的：

```js
var compress = function(chars) {
  if (chars.length === 1) {
    return chars.length;
  }
  let start = 0;
  let mark = chars[0];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== mark || i === chars.length - 1) {
      let length = i - start;
      if (i === chars.length - 1 && chars[i] === chars[i - 1]) {
        length += 1;
      }
      let numberToArr;
      if (length === 1) {
        numberToArr = [mark];
      } else {
        numberToArr = [mark, ...String(length).split('')];
      }
      mark = chars[i];
      chars.splice(start, length, ...numberToArr);
      if (length === 1) {
        i = start + 1;
      } else {
        i = start + 2 + (String(length).split('').length - 1);
      }
      start = i;
    }
  }
  return chars.length;
};
```

Submit 是这样的：

```js
✔ Accepted
  ✔ 70/70 cases passed (108 ms)
  ✔ Your runtime beats 57.64 % of javascript submissions
  ✔ Your memory usage beats 23.68 % of javascript submissions (37.4 MB)
```

**然后**，咱讲讲思路：

* `["a"]` 这种长度为 1 的情况，直接返回 1 即可。
* `["a","a","b","b","c","c","c"]` 这种正常情况，我们需要统计的是字母变更以及数组结尾的长度。
* `["a","b","b","b","b","b","b","b","b","b","b","b","b"]` 这种长度有 1 的情况，1 不需要体现出来，即不需要 `["a", "1"]` 这样，并且它的 `i` 只需要改变 1 位即可。
* `["a","a","a","b","b","a","a"]` 这种长度超过 2 的情况，我们在需要表示成 `["a", "3"]` 的同时，我们的下表 `i` 需要加上 2。
* `["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]` 这种中间字母长度超过 10 的，我们还需要给下标加上它的长度，例如：`[ 'a', '6', 'b', '2', '1', 'c', '1', '4' ]`，如果不加，那么它会变成 `[ 'a', '6', 'b', '2', 'c', '1', '4' ]`。
* ……

经过多种尝试最终成功破解本题，代码过于复杂不推荐理解。

**最后**，我们成功原地修改数组，并返回数组的长度。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var compress = function (chars) {
  let j = 0,
    count = 1;
  chars.push(0);
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== chars[i - 1]) {
      chars[j] = chars[i - 1];
      j++;
      if (count > 1) {
        let temp = count.toString();
        for (let k = 0; k < temp.length; k++) {
          chars[j++] = temp[k];
        }
      }
      count = 1;
    } else {
      count++;
    }
  }
  return j;
};
```

* **执行测试**：

1. `chars`：`["a","a","b","b","c","c","c"]`
2. `return`：

```js
[ 'a', '2', 'b', '2', 'c', '3' ]
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 70/70 cases passed (100 ms)
  ✔ Your runtime beats 77.78 % of javascript submissions
  ✔ Your memory usage beats 23.68 % of javascript submissions (37.4 MB)
```

* **知识点**：

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)
2. `toString()`：`toString()` 返回一个字符串，表示指定的数组及其元素。[`toString()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/toString.md)

* **解题思路**：

看了下大佬的题解，使用的是双指针法。

判断如下：

1. 给数组增加长度，然后给末尾添加 0。（为什么不直接从 0 开始，请思考对与否）。
2. 遍历 `chars` 数组。
3. 将长度赋值到数组中。

尝试打印下数据：

```js
var compress = function (chars) {
  let j = 0,
    count = 1;
  chars.push(0);
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== chars[i - 1]) {
      chars[j] = chars[i - 1];
      j++;
      if (count > 1) {
        let temp = count.toString();
        for (let k = 0; k < temp.length; k++) {
          chars[j++] = temp[k];
        }
      }
      count = 1;
      console.log('------');
      console.log(chars);
      console.log(count);
    } else {
      count++;
    }
  }
  return j;
};
```

> Console

```js
------
[ 'a', '2', 'b', 'b', 'c', 'c', 'c', 0 ]
1
------
[ 'a', '2', 'b', '2', 'c', 'c', 'c', 0 ]
1
------
[ 'a', '2', 'b', '2', 'c', '3', 'c', 0 ]
1
```

这样，我们就成功解决了这道题啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
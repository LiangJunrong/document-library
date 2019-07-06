171 - Excel表列序号（excel-sheet-column-number）
===

> Create by **jsliang** on **2019-07-06 14:55:42**  
> Recently revised in **2019-07-06 14:55:46**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map() + 数学](#chapter-three-one) |
| &emsp;[3.2 解法 - 数学解法](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/excel-sheet-column-number/
* **题目内容**：

```
给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

  A -> 1
  B -> 2
  C -> 3
  ...
  Z -> 26
  AA -> 27
  AB -> 28 
  ...

示例 1:
输入: "A"
输出: 1

示例 2:
输入: "AB"
输出: 28

示例 3:
输入: "ZY"
输出: 701
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map() + 数学</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var titleToNumber = function(s) {
  let map = new Map();
  map.set('A', 1);
  map.set('B', 2);
  map.set('C', 3);
  map.set('D', 4);
  map.set('E', 5);
  map.set('F', 6);
  map.set('G', 7);
  map.set('H', 8);
  map.set('I', 9);
  map.set('J', 10);
  map.set('K', 11);
  map.set('L', 12);
  map.set('M', 13);
  map.set('N', 14);
  map.set('O', 15);
  map.set('P', 16);
  map.set('Q', 17);
  map.set('R', 18);
  map.set('S', 19);
  map.set('T', 20);
  map.set('U', 21);
  map.set('V', 22);
  map.set('W', 23);
  map.set('X', 24);
  map.set('Y', 25);
  map.set('Z', 26);
  let time = 0;
  let result = 0;
  let convert = function(s) {
    let now = s.shift();
    if (now !== undefined) {
      result += map.get(now) * Math.pow(26, time);
      time++;
      convert(s);
    }
  }
  convert(s.split('').reverse());
  return result;
};
```

* **执行测试**：

1. `s`：`ZZZ`
2. `return`：`18278`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1000/1000 cases passed (108 ms)
  ✔ Your runtime beats 74.27 % of javascript submissions
  ✔ Your memory usage beats 5.33 % of javascript submissions (37.7 MB)
```

* **知识点**：

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)
2. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)
3. `shift()`：`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。[`shift()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/shift.md)
4. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
5. `reverse()`：`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。[`reverse()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/reverse.md)

* **解题思路**：

**首先**，对于找规律题，我们完全不需要怂，毕竟谁没被 “数学奥林匹克竞赛” 折磨过~

**然后**，我们开始找规律：

* `A-Z`：1 ~ 26
* `AA`：1 * 26^1 + 1 * 26^0
* `ZZ`：26 * 26^1 + 26 * 26^0
* `AAA`：1 * 26^2 + 1 * 26^1 + 1 * 26^0
* `ZZZ`：26 * 26^2 + 26 * 26^1 + 26 * 26^0

什么？你居然没有看懂？

`A` 到 `Z` 对应的是不是 1 至 26？

然后 `AA` 是 27，那么这个 27 是怎么得到的呢？即 26 + 1，即 1 乘于 26 的 1 次方，再加上 1 乘于 26 的 0 次方；

然后 `ZZ` 是 702，那么这个 702 是怎么得到的呢？即 26 * 26 + 26，即 26 乘于 26 的 1 次方，再加上 26 乘于 26 的 0 次方。

这么说小伙伴们是不是一目明了？看出这规律了？

**接着**，我们只需要使用一个递归，用来从尾到头依次转换字母为数字：

```js
let convert = function(s) {
  let now = s.shift();
  if (now !== undefined) {
    result += map.get(now) * Math.pow(26, time);
    time++;
    convert(s);
  }
}
convert(s.split('').reverse());
```

**最后**，我们将这个数字返回出去即可。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 数学解法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var titleToNumber = function (s) {
  let sum = 0;
  let base = 1;

  for (let char of [...s].reverse()) {
    sum += (char.charCodeAt() - 64) * base;
    base *= 26;
  }

  return sum;
};
```

* **执行测试**：

1. `s`：`ZZZ`
2. `return`：`18278`

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 1000/1000 cases passed (100 ms)
  ✔ Your runtime beats 86.32 % of javascript submissions
  ✔ Your memory usage beats 24.67 % of javascript submissions (35.5 MB)
```

* **知识点**：

1. `reverse()`：`reverse()` 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。[`reverse()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/reverse.md)
2. `charCodeAt()`：`charCodeAt()` 获得字母对应的 ASCII 编码，例如 A - 65。[`charCodeAt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/charCodeAt.md)

* **解题思路**：

如果小伙伴了解了第一个题解，那么这个也难不住小伙伴们了，简洁便利的方法，越看越发美妙~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
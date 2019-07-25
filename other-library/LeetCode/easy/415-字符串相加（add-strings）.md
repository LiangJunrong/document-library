415 - 字符串相加（add-strings）
===

> Create by **jsliang** on **2019-07-25 17:24:28**  
> Recently revised in **2019-07-25 19:08:40**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/add-strings/
* **题目内容**：

```
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库，
也不能直接将输入的字符串转换为整数形式。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var addStrings = function(num1, num2) {
  // 如果没有超过 JS 最大精度限制
  if (num1.length < 16 && num2.length < 16) {
    return String(Number(num1) + Number(num2));
  }
  // 如果超过 JS 最大精度限制
  // 1. 补位：12345 与 01234
  let patch = '';
  const differenceLength = num1.length > num2.length ? num1.length - num2.length : num2.length - num1.length;
  for (let i = 0; i < differenceLength; i++) {
    patch += '0';
  }
  if (num1.length > num2.length) {
    num2 = patch + num2;
  } else if(num1.length < num2.length) {
    num1 = patch + num1;
  }
  // 2. 计算相加
  let temp = 0; // 补进制
  let result = '';
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = Number(num1[i]) + Number(num2[i]) + temp;
    if (sum >= 10) {
      result = sum % 10 + result;
      // 如果超 10 记得补 1
      temp = 1;
      // 如果在最后一个字符串了，那么记得给前面补 1
      if (i === 0) {
        result = '1' + result;
      }
    } else {
      result = sum + result;
      temp = 0; // 如果没超 10 记得清 0
    }
  }
  return result;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `num1`：`23108814760092`
2. `num2`：`55183904456427981`
3. `return`：

```js
55207013271188073
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 315/315 cases passed (88 ms)
  ✔ Your runtime beats 96.73 % of javascript submissions
  ✔ Your memory usage beats 43.04 % of javascript submissions (36.8 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `String`：将其他值转成字符串。[`String` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/String.md)
2. `Number`：将其他值转成数字值。[`Number` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Number.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，看到内容蠢蠢欲动，这不是送分题嘛：

```js
var addStrings = function(num1, num2) {
  return Number(num1) + Number(num2);
};
```

提交后：

```js
✘ Wrong Answer
  ✘ 194/315 cases passed (N/A)
  ✘ testcase: '"9333852702227987"\n"85731737104263"'
  ✘ answer: "9419584439332252"
  ✘ expected_answer: "9419584439332250"
  ✘ stdout:
```

果然还是送命题哎！

我们得知道，当 JavaScript 达到最大值 `9007199254740992` 的时候，它就精度不准确了。

所以，想想办法咯。

**然后**，仔细观察发现，我们可以直接计算字符串，怎么计算呢？

```js
var addStrings = function(num1, num2) {
  // 如果没有超过 JS 最大精度限制
  if (num1.length < 16 && num2.length < 16) {
    return String(Number(num1) + Number(num2));
  }
  // 如果超过 JS 最大精度限制
  // 1. 补位：12345 与 01234
  let patch = '';
  const differenceLength = num1.length > num2.length ? num1.length - num2.length : num2.length - num1.length;
  for (let i = 0; i < differenceLength; i++) {
    patch += '0';
  }
  if (num1.length > num2.length) {
    num2 = patch + num2;
  } else if(num1.length < num2.length) {
    num1 = patch + num1;
  }
  // 2. 计算相加
  let temp = 0; // 补进制
  let result = '';
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = Number(num1[i]) + Number(num2[i]) + temp;
    if (sum >= 10) {
      result = sum % 10 + result;
      // 如果超 10 记得补 1
      temp = 1;
      // 如果在最后一个字符串了，那么记得给前面补 1
      if (i === 0) {
        result = '1' + result;
      }
    } else {
      result = sum + result;
      temp = 0; // 如果没超 10 记得清 0
    }
  }
  return result;
};
```

1. 如果没有超过最大精度限制，即它们两个相加数字的长度小于 16，我们直接使用 JavaScript 自带的加法运算。
2. 如果超过最大精度限制，那么就实施方案二。
3. 先补位。为什么要补位呢？我们的计算都是从个位数相加的，即 **最后一位对齐** 原则，通过补位，我们可以将 1234 变成 01234，从而能够跟 12345 对齐相加。
4. 遍历相加。遍历的两个数字，如果相加大于 10，那么前面一位就需要 + 1，我们通过 `temp` 来记录，同时，如果是最后一个字符串，我们需要给前面的补字符串 1；如果相加小于 10，说明可以直接添加到字符串中，同时，我们需要清空掉补位数（即 `temp`）。

**最后**，我们成功解析了这道题！！！

> 送命题最终没有把我送葬~

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

那么，看看大佬们有没有更优秀的思想：

```js
var addStrings = function (num1, num2) {
  let a = num1.split('');
  let b = num2.split('');
  let c = 0;
  let res = '';
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res;
};
```

Submit 提交查看：

```js
✔ Accepted
  ✔ 315/315 cases passed (104 ms)
  ✔ Your runtime beats 73.82 % of javascript submissions
  ✔ Your memory usage beats 83.54 % of javascript submissions (36.2 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
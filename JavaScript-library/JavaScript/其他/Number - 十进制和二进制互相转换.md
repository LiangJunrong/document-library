Number - 十进制和二进制互相转换
===

> create by **jsliang** on **2020-01-29 21:32:38**  
> Recently revised in **2020-6-24 08:53:03**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 字符串求和/求差](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 十进制转二进制](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 二进制转十进制](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 总结](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在刷题的生涯中，你会碰到让你尴尬的一个问题：

1. 十进制转二进制怎么转？
2. 二进制转十进制怎么转？

如果小伙伴对 JS 的 API 相当熟练，那么就是信手拈来：

* 十进制转二进制：`num.toString(2)`
* 二进制转十进制：`parseInt(num, 2)`

因为这两个问题在 JavaScript 中都提供了工具，所以直接对需要转换的数套用这两个即可。

然而，咱们更进一步探讨下：

1. 如果需要提升性能
2. 如果需要转换大数

为什么要这么说？咱们拿 `toString()` 来看：

* [MDN - toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

```
阐述：toString() 方法返回指定 Number 对象的字符串表示形式。

语法：numObj.toString([radix])

参数：radix
指定要用于数字到字符串的转换的基数(从2到36)。
如果未指定 radix 参数，则默认值为 10。

描述：
如果基数没有指定，则使用 10。
如果对象是负数，则会保留负号。
即使 radix 是 2 时也是如此：
返回的字符串包含一个负号（-）前缀和正数的二进制表示，
不是 数值的二进制补码。
```

很好，看到这里我们可以清晰清楚，`Number.prototype.toString()` 对于负数是无能为力的。

同时，在 LeetCode 题目【1018-可被5整除的二进制前缀】中，**jsliang** 还发现，大数（超过 JavaScript 的 `Number.MAX_SAFE_INTEGER` 限制）也无法被准确转换成二进制。

这种情况下，迫切希望知道如何将二进制转出十进制的个位数来，因为个位数为 5 或者为 0 才能被 5 整除。

但是，找了老久，网上搜索 **JS 二进制转十进制**，得到的全是 `num.toString(2)` 或者 `parseInt(num, 2)`。

无法，换了关键字，直接搜 **二进制转十进制**，找到几篇不错的非代码讲解：

* https://www.cnblogs.com/web-record/p/11132861.html
* https://www.cnblogs.com/xkfz007/articles/2590472.html

那么咱们开始转换成编程语言，这样以后刷题，咱们就可以直接套用了！

## <a name="chapter-three" id="chapter-three"></a>三 字符串求和/求差

> [返回目录](#chapter-one)

**jsliang** 在编写这篇文章的过程中，发现字符串求和的可以弄成共用函数，然后直接打爆里面 2 道题：

* [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)
* [415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)

> 字符串求和（支持 2 进制和 10 进制）

```js
/**
* @name stringAddtion
* @description 字符串求和
* @param {string} a 加数一
* @param {string} b 加数二
* @param {any} base 基数（默认十进制）
* @return 返回计算结果
*/
const stringAddtion = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 进位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1, bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) { // a 或 b 还有位可以相加
    // aIndex bIndex可能为负数值，需要转化为 0
    sum = (+a[aIndex] || 0) + (+b[bIndex] || 0) + carry;
    // 是否需要进位
    carry = sum >= base ? 1 : 0;
    // 计算最终结果
    result = sum % base + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }
  // 如果计算完毕后还有进位，那么前面 + 1
  if (carry) {
    result = '1' + result;
  }
  // 返回最终结果
  return result;
};
```

同样，字符串求差有没有题目不知道，因为 **jsliang** 刷题太多，忘记是否有求差的了，但是因为下面会用到，所以这里提取出来放着：

> 字符串求差（支持 2 进制和 10 进制）

```js
/**
* @name stringDifference
* @description 字符串求差
* @param {string} a 减数一
* @param {string} b 减数二
* @param {any} base 基数（默认十进制）
* @return 返回计算结果
*/
const stringDifference = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 借位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1, bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) { // a 或 b 还有位可以相减
    // 判断是否需要借位
    let reduce = 0;
    if ((+a[aIndex] || 0) < (+b[bIndex] || 0)) {
      reduce = (+a[aIndex] || 0) + base - (+b[bIndex]);
      carry = 1;
    } else {
      reduce = (+a[aIndex] || 0) - (+b[bIndex] || 0) - carry;
      carry = 0;
    }
    // 计算最终结果
    result = reduce % base + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }

  // 返回最终结果
  return result;
};
```

## <a name="chapter-four" id="chapter-four"></a>四 十进制转二进制

> [返回目录](#chapter-one)

注意！这里的十进制转二进制包括：

* 正整数 [0, n]
* 负整数 [n, 0)
* 小数 (0, 1)
* 小数 (1, n)

**不包括负小数** **不包括负小数** **不包括负小数** 重要的事说三遍，如果你需要，私聊我，看心情补补了~

```js
/**
* @name stringAddtion
* @description 字符串求和
* @param {string} a 加数一
* @param {string} b 加数二
* @param {any} base 基数（默认十进制）
* @return 返回计算结果
*/
const stringAddtion = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 进位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1, bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) { // a 或 b 还有位可以相加
    // aIndex bIndex可能为负数值，需要转化为 0
    let sum = (+a[aIndex] || 0) + (+b[bIndex] || 0) + carry;
    // 是否需要进位
    carry = sum >= base ? 1 : 0;
    // 计算最终结果
    result = sum % base + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }
  // 如果计算完毕后还有进位，那么前面 + 1
  if (carry) {
    result = '1' + result;
  }
  // 返回最终结果
  return result;
};

/*
  * 英文荒漠 jsliang 查找的缩写
  * EQU - 等于：equal 
  * NEQ - 不等于：not equal
  * LSS - 小于：less than
  * LEQ - 小于或等于：equal or less than
  * GTR - 大于：greater than
  * GEQ - 大于或等于：equal or greater than
*/

/**
* @name integerLEQZero
* @description 大于或者等于 0 的整数转换为二进制
* @param {number} number
* @return 二进制字符串
*/
const integerGEQZero = (number) => {
  let result = '';
  while (number >= 1) {
    result = number % 2 + result;
    number = Math.floor(number / 2);
  }
  return result;
};

/**
* @name integerLSSZero
* @description 小于 0 的整数转换为二进制
* @param {number} number
* @return 二进制字符串
*/
const integerLSSZero = (number) => {
  let result = '';
  // 转正
  number = -number;
  // 求二进制并取反
  while (number >= 1) {
    if (number % 2 === 1) {
      result = '0' + result;
    } else {
      result = '1' + result;
    }
    number = Math.floor(number / 2);
  }
  // 补全
  if (result.length < 8) {
    result = '1'.repeat(8 - result.length) + result;
  }
  // 加一
  result = stringAddtion(result, '1', 2);
  return result;
};

/**
* @name floorGTROne
* @description 大于 1 的小数转二进制
* @param {number} number
* @return 二进制字符串
*/
const floorGTROne = (number) => {
  let result = '';
  const integer = Math.floor(number);
  const decimal = number - integer;
  result += integerGEQZero(integer) + '.' + floorBetweenZeroOne(decimal).split('.')[1];
  return result;
};

/**
* @name floorBetweenZeroOne
* @description 大于 0 小于 1 的小数转二进制
* @param {number} number
* @return 二进制字符串
*/
const floorBetweenZeroOne = (number) => {
  let result = '';
  while (
    number != 0
    && number != 1 // 取值到 0 或者 1 为止
    && result.length < 32 // 或者长度达到需要
  ) {
    // 取小数部分
    if (number > 1) {
      number = number - 1;
    }
    result = result + Math.floor(number * 2);
    number = number * 2;
  }
  result = '0.' + result;
  return result;
};

/**
* @name decimalToBinary
* @description 正负整数转二进制
* @param {any} number 需要转换的数字
* @return 二进制字符串
*/
const decimalToBinary = (number) => {
  let result = '';
  
  if (Number.isInteger(number) && number >= 0) { // 正整数
    result = integerGEQZero(number);
  } else if (Number.isInteger(number) && number < 0) { // 负整数
    result = integerLSSZero(number);
  } else if (!Number.isInteger(number) && number > 0 && number < 1) { // 正小数（不带整数位）
    result = floorBetweenZeroOne(number);
  } else if (!Number.isInteger(number) && number > 1) { // 正小数（带整数位）
    result = floorGTROne(number);
  }

  return result;
};

// 正整数转二进制 [0, n]
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(42)); // 101010

// 负整数转二进制 [n, 0)
console.log(decimalToBinary(-10)); // 11110110
console.log(decimalToBinary(-42)); // 11010110

// 小数转二进制 (0, 1)
console.log(decimalToBinary(0.125)); // 0.001
console.log(decimalToBinary(0.8125)); // 0.1101

// 小数转二进制 (1, n)
console.log(decimalToBinary(6.125)) // 110.001
console.log(decimalToBinary(173.8125)) // 10101101.1101
```

## <a name="chapter-five" id="chapter-five"></a>五 二进制转十进制

> [返回目录](#chapter-one)

注意！这里的二进制转十进制包括：

* 正整数 [0, n]
* 负整数 [n, 0)
* 小数 (0, 1)
* 小数 (1, n)

**不包括负小数** **不包括负小数** **不包括负小数** 重要的事说三遍，如果你需要，私聊我，看心情补补了~

其实就是上面代码的计算的逆推……但是逆推也是挺累的好伐 -_-

```js
/**
* @name stringDifference
* @description 字符串求差
* @param {string} a 减数一
* @param {string} b 减数二
* @param {any} base 基数（默认十进制）
* @return 返回计算结果
*/
const stringDifference = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 借位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1, bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) { // a 或 b 还有位可以相减
    // 判断是否需要借位
    let reduce = 0;
    if ((+a[aIndex] || 0) < (+b[bIndex] || 0)) {
      reduce = (+a[aIndex] || 0) + base - (+b[bIndex]);
      carry = 1;
    } else {
      reduce = (+a[aIndex] || 0) - (+b[bIndex] || 0) - carry;
      carry = 0;
    }
    // 计算最终结果
    result = reduce % base + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }

  // 返回最终结果
  return result;
};

/*
  * 英文荒漠 jsliang 查找的缩写
  * EQU - 等于：equal 
  * NEQ - 不等于：not equal
  * LSS - 小于：less than
  * LEQ - 小于或等于：equal or less than
  * GTR - 大于：greater than
  * GEQ - 大于或等于：equal or greater than
*/

/**
* @name integerLEQZero
* @description 大于或者等于 0 的二进制转换为整数
* @param {string} binary
* @return 整数
*/
const integerGEQZero = (binary) => {
  let result = 0;

  const index = binary.indexOf('1');
  const newBinary = binary.slice(index).split('').reverse('').join(''); // 截取 1 后面的，然后从最后往前取
  for (let i = 0; i < newBinary.length; i++) {
    result += newBinary[i] * Math.pow(2, i);
  }

  return result;
};

/**
* @name integerLSSZero
* @description 小于 0 的二进制转换为整数
* @param {string} binary
* @return 整数
*/
const integerLSSZero = (binary) => {
  let result = 0;

  // 减一
  binary = stringDifference(binary, '1', 2);
  let reverseBinary = ''; // 取反
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      reverseBinary += '1';
    } else {
      reverseBinary += '0';
    }
  }
  result = -(integerGEQZero(reverseBinary));

  return result;
};

/**
* @name floorGTROne
* @description 大于 1 的二进制转小数
* @param {string} binary
* @return 小数
*/
const floorGTROne = (binary) => {
  let result = 0;

  const [integer, decimal] = binary.split('.');
  result = integerGEQZero(integer) + floorBetweenZeroOne('0.' + decimal);

  return result;
};

/**
* @name floorBetweenZeroOne
* @description 大于 0 小于 1 的二进制转小数
* @param {string} binary
* @return 小数
*/
const floorBetweenZeroOne = (binary) => {
  let result = 0;

  binary = binary.replace('.', ''); // 去掉小数点

  for (let i = 0; i < binary.length; i++) {
    result += Number(binary[i]) * Math.pow(2, -i);
  }

  return result;
};

/**
* @name binaryToDecimal
* @description 二进制转十进制
* @param {string} binary
* @return 十进制整数
*/
const binaryToDecimal = (binary) => {
  let result = 0; // 设置结果集

  if (!binary.includes('.')) { // 不带小数点的

    // 不足 8 位则补全 8 位
    if (binary.length < 8) {
      binary = '0'.repeat(8 - binary.length) + binary;
    }

    if (binary[0] === '0') { // 首位为 0 则是正整数 [0, n]
      result = integerGEQZero(binary);
    } else if (binary[0] === '1') { // 首位为 1 则是负整数 [n, 0)
      result = integerLSSZero(binary);
    }
  } else { // 带小数点的

    if (binary.split('.')[0] === '0') { // 如果整数部位只有 0 (0, 1)
      result = floorBetweenZeroOne(binary);
    } else { // 如果整数部位大于 0 (1, n)
      result = floorGTROne(binary);
    }
  }

  return result;
};

// 二进制转正整数 [0, n]
console.log(binaryToDecimal('1010')); // 10
console.log(binaryToDecimal('101010')); // 42

// 二进制转负整数 [n, 0)
console.log(binaryToDecimal('11101011')); // -21
console.log(binaryToDecimal('11110110')); // -10
console.log(binaryToDecimal('11010110')); // -42

// 二进制转小数 (0, 1)
console.log(binaryToDecimal('0.001')); // 0.125
console.log(binaryToDecimal('0.1101')); // 0.8125

// 二进制转小数 (1, n)
console.log(binaryToDecimal('110.001')); // 6.125
console.log(binaryToDecimal('10101101.1101')); // 173.8125
```

## <a name="chapter-six" id="chapter-six"></a>六 总结

> [返回目录](#chapter-one)

以上，就是本次的探索了~

是的，不带任何讲解……

小伙伴们可以结合《加减危机》进行食用：

* https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%85%B6%E4%BB%96/Number%20-%20%E5%8A%A0%E5%87%8F%E5%8D%B1%E6%9C%BA.md

如果小伙伴们发现文章有误，欢迎指正~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
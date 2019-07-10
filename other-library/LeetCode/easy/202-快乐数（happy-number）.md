202 - 快乐数（happy-number）
===

> Create by **jsliang** on **2019-7-9 08:04:52**  
> Recently revised in **2019-7-9 09:06:14**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 最蠢解题](#chapter-three-one) |
| &emsp;[3.2 解法 - 数学解法](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表、数学
* **题目地址**：https://leetcode-cn.com/problems/happy-number/
* **题目内容**：

```
编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
如果可以变为 1，那么这个数就是快乐数。

示例: 
输入: 19
输出: true
解释: 
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 最蠢解题</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
let numToArr = function(n) {
	let arr = [];
	n = ('' + n).split('');
	while(n.length) {
		arr.unshift(parseInt(n.pop()));
	}
	return arr;
};

var isHappy = function(n) {
	let time = 30;
	while(time) {
		n = numToArr(n);
		n = n.reduce((prev, next) => {
			return prev + next * next;
		}, 0);
		if (n === 1) {
			return true;
		}
		time--;
	}
	return false;
};
```

* **执行测试**：

1. `n`：`19`
2. `return`：`true`

* **LeetCode Submit**：

```js
√ Accepted
  √ 401/401 cases passed (356 ms)
  √ Your runtime beats 5.43 % of javascript submissions
  √ Your memory usage beats 5.52 % of javascript submissions (45.4 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `unshift()`：`unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。[`unshift()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/unshift.md)
3. `parseInt()`：`parseInt(string, radix)`，`string` 为字符串，`radix` 为介于 2-36 之间的数。使用者告诉这个函数 `string`（比如 11）是 `radix`（比如 2 ）进制的，函数将固定返回 `string` 以十进制时显示的数（3）。[`parseInt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/parseInt.md)
4. `pop()`：`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。[`pop()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/pop.md)
5. `reduce()`：`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。[`reduce()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/reduce.md)

* **解题思路**：

**解出题不代表聪明，可能还一定程度证明你代码的愚蠢。**

**可是不管如何，至少你解题成功了！**

如题，我们需要破解什么？

```
输入: 19
输出: true
解释: 
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
```

**关键字**：

1. 有一个正整数
2. 经过 n 次的拆分
3. 每次拆分后的数字平方之和是否为 1

n 次是多少次？不知道，咱设置一个阈值：`30`

如何拆分？那就是使用函数 `numToArr`，将【数字】转换成【整数型数组】

如何获取拆分后的数字平方之和？使用 `reduce` 完成累积计算，再判断 `n` 是否为 1 了。

本次涉及的知识点较多，小伙伴们可能看不懂，但是希望能够认真看看，毕竟：

**从愚蠢中看到聪明。**

* **进一步思考**：

在上面我们使用了愚蠢的解法，所以我们可以尝试改进。

> **jsliang** 本来想先改进了，再贴上代码的，但是想到这样就毫无意义了，所以还是先贴上代码，再优化。

```js
var isHappy = function(n) {
	let time = 6;
	while(time) {
		n = ('' + n).split('');
		console.log(n);
		n = n.reduce((prev, next) => {
			return prev + next * next;
		}, 0);
		if (n === 1) {
			return true;
		}
		time--;
	}
	return false;
};
```

OK，咱们优化完毕，查看提交成果：

```js
√ Accepted
  √ 401/401 cases passed (192 ms)
  √ Your runtime beats 7.9 % of javascript submissions
  √ Your memory usage beats 6.75 % of javascript submissions (39.6 MB)
```

虽然，还是那么愚蠢，但是我们可以猜测，大佬们是不是又用了数学算法了！

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 数学解法</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isHappy = function(n) {
  if (n == 1 || n == 7) {
    return true;
  }
  if (n < 10) {
    return false;
  }
  let sum = 0;
  while (n >= 1) {
    let d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }
  return isHappy(sum);
};
```

* **执行测试**：

1. `n`：`19`
2. `return`：`true`

* **LeetCode Submit**：

```js
√ Accepted
  √ 401/401 cases passed (80 ms)
  √ Your runtime beats 95.31 % of javascript submissions
  √ Your memory usage beats 74.85 % of javascript submissions (35.1 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)

* **解题思路**：

**愚蠢可以天生，但是聪明非学习不可。**

既然我们想不出来，那么就吸取下【评论】【题解】的优秀题解了。

这种方法可以归于 **找数学规律**：

1. 在 1-9 中，1 和 7 是快乐数，即它们计算后的最终结果是 `1`。除此之外，都不是快乐数，返回 `false`。
2. 一个数，假设是 89。那么，第一次遍历，将它磨 10，得到的是个位数 9；除以 10（JS 没有强类型，需要借助 `Math.floor()`），那么缩短 1 位变成 8。第二次遍历，将它磨 10，得到 8，再除以 10，得到的数小于 1，终止循环。
3. 在这过程中，我们得到 `sum = 9 * 9 + 8 * 8`，即将一个数彻底分解。递归往复，在结果为 10 之内的时候，就可以返回 `true` 或者 `false` 了。

* **进一步思考**：

那么，除了这种找规律，是否还有其他解法？

在此再来一道题解，其他看个人提升~

> 题解 - `Set()` 的使用

```js
var isHappy = function(n) {
  var mySet = new Set();
  while (1) {
    var k = n,
      sum = 0;
    while (k) {
      sum += Math.pow(k % 10, 2);
      k = Math.floor(k / 10);
    }
    if (sum == 1) {
      return true;
    } else if (!mySet.has(sum)) {
      mySet.add(sum);
      n = sum;
    } else {
      return false;
    }
  }
};
```

> Submission

```js
√ Accepted
  √ 401/401 cases passed (76 ms)
  √ Your runtime beats 98.52 % of javascript submissions
  √ Your memory usage beats 81.59 % of javascript submissions (34.9 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
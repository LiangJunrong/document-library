326 - 3的幂（power-of-three）
===

> Create by **jsliang** on **2019-07-22 17:31:17**  
> Recently revised in **2019-09-18 13:53:13**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 循环遍历](#chapter-three-one) |
| &emsp;[3.2 解法 - 数学破解](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/power-of-three/
* **题目内容**：

```
给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:
输入: 27
输出: true

示例 2:
输入: 0
输出: false

示例 3:
输入: 9
输出: true

示例 4:
输入: 45
输出: false

进阶：
你能不使用循环或者递归来完成本题吗？
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 循环遍历</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPowerOfThree = function(n) {
  while (n > 3) {
    n = n / 3;
  }
  if (n === 3 || n === 1) {
    return true;
  } else {
    return false;
  }
};
```

* **执行测试**：

1. `n`：`27`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 21038/21038 cases passed (324 ms)
  ✔ Your runtime beats 92.48 % of javascript submissions
  ✔ Your memory usage beats 39.1 % of javascript submissions (48.3 MB)
```

* **解题思路**：

感觉这道题，跟 2 的幂差不多，所需要做的，就是将这个数不停地除于 3，判断它到最后是等于 3 还是小于 3。

如果是小于，说明它不是底数为 3。

如果它等于，说明它是底数为 3。

> 如果为 1，那就是 3 的 0 次方。

* **进一步思考**：

```js
进阶：
你能不使用循环或者递归来完成本题吗？
```

题目还有个进阶，不能使用递归或者循环，那么怎么使用数学方法呢？

看了下题解，有个非常暴力的：

```js
var isPowerOfThree = function(n) {
  switch (n) {
		case 1: return true;
		case 3: return true;
		case 9: return true;
		case 27: return true;
		case 81: return true;
		case 243: return true;
		case 729: return true;
		case 2187: return true;
		case 6561: return true;
		case 19683: return true;
		case 59049: return true;
		case 177147: return true;
		case 531441: return true;
		case 1594323: return true;
		case 4782969: return true;
		case 14348907: return true;
		case 43046721: return true;
		case 129140163: return true;
		case 387420489: return true;
		case 1162261467: return true;
		default: return false;
	}
};
```

直接将结果枚举出来，毕竟 3 的幂方摆在那了。

但是感觉这种面向测试编程了，只能说学个解题思路而已。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 数学破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var isPowerOfThree = function(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
```

* **执行测试**：

1. `n`：`27`
2. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 21038/21038 cases passed (328 ms)
  ✔ Your runtime beats 91.36 % of javascript submissions
  ✔ Your memory usage beats 28.21 % of javascript submissions (48.4 MB)
```

* **知识点**：

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Math/README.md)

* **解题思路**：

数学不好，不做解释~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
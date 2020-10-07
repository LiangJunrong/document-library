868 - 二进制间距（binary-gap）
===

> Create by **jsliang** on **2020-01-11 08:59:09**  
> Recently revised in **2020-01-11 09:31:58**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 进一步思考](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/binary-gap/
* **题目内容**：

```
给定一个正整数 N，
找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离。 

如果没有两个连续的 1，返回 0 。

示例 1：

输入：22
输出：2
解释：
22 的二进制是 0b10110 。
在 22 的二进制表示中，有三个 1，组成两对连续的 1 。
第一对连续的 1 中，两个 1 之间的距离为 2 。
第二对连续的 1 中，两个 1 之间的距离为 1 。
答案取两个距离之中最大的，也就是 2 。

示例 2：

输入：5
输出：2
解释：
5 的二进制是 0b101 。

示例 3：

输入：6
输出：1
解释：
6 的二进制是 0b110 。

示例 4：

输入：8
输出：0
解释：
8 的二进制是 0b1000 。
在 8 的二进制表示中没有连续的 1，所以返回 0 。

提示：

1 <= N <= 10^9
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 十进制转二进制
 * @param {number} N 需要转换的数字
 * @return {string} 返回二进制字符串
 */
const decimalToBinary = (N) => {
  let result = '';
  while (N > 0) {
    result = N % 2 + result;
    N = Math.floor(N / 2);
  }
  return result;
}

/**
 * @name 二进制间距
 * @param {number} N
 * @return {number}
 */
const binaryGap = (N) => {
  const binary = decimalToBinary(N);
  let result = 0;
  let flag = binary[0] === '1' ? 0 : -1;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1' && flag !== -1) {
      result = Math.max(result, i - flag);
      flag = i;
    }
  }
  return result;
};

console.log(binaryGap(22));
```

`node index.js` 返回：

```js
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 260/260 cases passed (72 ms)
* Your runtime beats 40 % of javascript submissions
* Your memory usage beats 8.7 % of javascript submissions (34 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

在开始讲解这道题之前，应该按惯例「贴」一下十进制转二进制的方法，虽然之前讲过好多次了：

> 十进制转二进制

```js
/**
 * @name 十进制转二进制
 * @param {number} N 需要转换的数字
 * @return {string} 返回二进制字符串
 */
const decimalToBinary = (N) => {
  let result = '';
  while (N > 0) {
    result = N % 2 + result;
    N = Math.floor(N / 2);
  }
  return result;
}
console.log(decimalToBinary(6)); // 110
```

感觉记住 6 的二进制是不错的，毕竟 6 翻了就 110 了~

那么，如何求二进制间距呢？

> 暴力破解

```js
const decimalToBinary = (N) => {
  let result = '';
  while (N > 0) {
    result = N % 2 + result;
    N = Math.floor(N / 2);
  }
  return result;
}

const binaryGap = (N) => {
  const binary = decimalToBinary(N);
  let result = 0;
  let flag = binary[0] === '1' ? 0 : -1;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1' && flag !== -1) {
      result = Math.max(result, i - flag);
      flag = i;
    }
  }
  return result;
};
```

步骤：

1. 通过 `binary` 获取二进制。
2. 设置 `result` 为 0；
3. 设置 `flag` 初始化为 0 或者 -1，表明第一个 `number` 是不是 1.
4. 通过 `for` 遍历 `binary`，判断当前值（`binary[i]`）是不是 1，并且 `flag` 不是 -1.
5. 通过不断更新 `result`，得到最终结果。

Submit 提交如下：

```js
Accepted
* 260/260 cases passed (72 ms)
* Your runtime beats 40 % of javascript submissions
* Your memory usage beats 8.7 % of javascript submissions (34 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看了下官方题解，感觉不喜欢（不会写）：

> 一次遍历

```js
const binaryGap = (N) => {
  let last = -1,
      result = 0;
  for (let i = 0; i < 32; i++) {
    if (((N >> i) & 1) > 0) {
      if (last >= 0) {
        result = Math.max(result, i - last);
      }
      last = i;
    }
  }
  return result;
};
```

里面使用了 `>>` 和 `&`，enm...我是不想理解的了，目前真接触不到这个~

Submit 提交：

```js
Accepted
* 260/260 cases passed (60 ms)
* Your runtime beats 88.7 % of javascript submissions
* Your memory usage beats 8.7 % of javascript submissions (35 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
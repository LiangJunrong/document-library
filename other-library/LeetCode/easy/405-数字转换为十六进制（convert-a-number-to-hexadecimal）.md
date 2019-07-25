405 - 数字转换为十六进制（convert-a-number-to-hexadecimal）
===

> Create by **jsliang** on **2019-07-25 10:45:31**  
> Recently revised in **2019-07-25 11:40:47**

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

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：位运算
* **题目地址**：https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/
* **题目内容**：

```
给定一个整数，编写一个算法将这个数转换为十六进制数。
对于负整数，我们通常使用 补码运算 方法。

注意:

1. 十六进制中所有字母(a-f)都必须是小写。
2. 十六进制字符串中不能包含多余的前导零。
如果要转化的数为 0，那么以单个字符'0'来表示；
对于其他情况，十六进制字符串中的第一个字符将不会是0字符。 
3. 给定的数确保在32位有符号整数范围内。
4. 不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。

示例 1：
输入:
26
输出:
"1a"

示例 2：
输入:
-1
输出:
"ffffffff"
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var toHex = function (num) {
  if (!num) {
    return '0';
  }
  num = num > -1 ? num : num + Math.pow(2, 32);
  let res = '',
    Hex = '0123456789abcdef';
  while (num) {
    res = Hex[num % 16] + res;
    num = num / 16 | 0;
  }
  return res;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `num`：`26`
2. `return`：

```js
1a
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 100/100 cases passed (108 ms)
  ✔ Your runtime beats 8.7 % of javascript submissions
  ✔ Your memory usage beats 6.06 % of javascript submissions (34.2 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `Math`：JS 中的内置对象，具有数学常数和函数的属性和方法。[`Math` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Math.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，这道位运算，真的真的真的不想做。

**然后**，强忍住一脸懵逼，找到了一道题解，再细细解析：

1. 如果这个数是负数，需要补码，补码即加上 2 的 32 次幂。
2. 将这个数 `%16`，得到的是当前位的十六进制，将其添加到 `res` 前面。
3. 将这个数 `/16` 来进行循环遍历，直至这个数小于或者等于 0 为止。

**最后**，返回最终求解。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
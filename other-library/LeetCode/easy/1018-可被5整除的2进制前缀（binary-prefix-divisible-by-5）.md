1018 - 可被5整除的2进制前缀（binary-prefix-divisible-by-5）
===

> Create by **jsliang** on **2020-01-29 20:54:27**  
> Recently revised in **2020-01-29 22:01:03**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/
* **题目内容**：

```
给定由若干 0 和 1 组成的数组 A。
我们定义 N_i：
从 A[0] 到 A[i] 的第 i 个子数组，
被解释为一个二进制数（从最高有效位到最低有效位）。

返回布尔值列表 answer，
只有当 N_i 可以被 5 整除时，
答案 answer[i] 为 true，否则为 false。

示例 1：

输入：[0,1,1]
输出：[true,false,false]
解释：
输入数字为 0, 01, 011；
也就是十进制中的 0, 1, 3 。
只有第一个数可以被 5 整除，
因此 answer[0] 为真。

示例 2：

输入：[1,1,1]
输出：[false,false,false]

示例 3：

输入：[0,1,1,1,1,1]
输出：[true,false,false,false,true,false]

示例 4：

输入：[1,1,1,0,1]
输出：[false,false,false,false,false]

提示：

1 <= A.length <= 30000
A[i] 为 0 或 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 可被5整除的二进制前缀
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = (A) => {
  let total = 0;
  const answer = [];
  for (let i = 0; i < A.length; i++) {
    total = (total * 2 + A[i]) % 10;
    answer.push(total === 0 || total === 5);
  }
  return answer;
};

console.log(prefixesDivBy5([0, 1, 1])); // [true, false, false]
```

`node index.js` 返回：

```js
[ true, false, false ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 24/24 cases passed (76 ms)
* Your runtime beats 95.95 % of javascript submissions
* Your memory usage beats 89.83 % of javascript submissions (38 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

“好像没那么复杂”：

> 暴力破解【超时】

```js
const prefixesDivBy5 = (A) => {
  let binary = '';
  const result = [];
  for (let i = 0; i < A.length; i++) {
    binary += A[i];
    if (parseInt(binary, 2) % 5 === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
```

通过字符串累计每个字节，然后判断是否能 % 5 即可。

然后就出问题了：

```
Wrong Answer
* 9/24 cases passed (N/A)

Testcase
* [1,0,1,0,0,0,0,0,0,0,0, ...省略..., 0,0,1,1,0,0,1,1,1]

Answer
* [false,false,true, ...省略..., ,false,false]

Expected Answer
* [false,false,true,true, ...省略...,false,false]
```

初步判断应该是这个二进制过长，然后转换过程出了问题，导致不能正常转换~

这有点类似于大数（bigNumber）的加减会有问题一样。

无解，十进制转二进制我懂，二进制转十进制不太清楚啊！

> 这个弊端应该是所有编程语言都会出现，即涉及到大数运算时，精度缺失问题

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

事实证明，授之于鱼不如授之以渔。

> 【题解区】

```js
const prefixesDivBy5 = (A) => {
  let total = 0;
  const answer = [];
  for (let i = 0; i < A.length; i++) {
    total = (total * 2 + A[i]) % 10;
    answer.push(total === 0 || total === 5);
  }
  return answer;
};
```

我们并不需要进行完全转换，只需要判断这个数的末尾是否为 0 或者 5 即可。

> 能被 5 整除的数，末尾为 0 或者 5。

所以，二进制转换十进制如何操作？

**jsliang** 开了篇文章讲解：

1. 正整数转二进制
2. 负整数转二进制
3. 小数转二进制
4. ……

地址如下：

* https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%85%B6%E4%BB%96/%E5%8D%81%E8%BF%9B%E5%88%B6%E5%92%8C%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%BA%92%E7%9B%B8%E8%BD%AC%E6%8D%A2.md

Submit 提交：

```js
Accepted
* 24/24 cases passed (76 ms)
* Your runtime beats 95.95 % of javascript submissions
* Your memory usage beats 89.83 % of javascript submissions (38 MB)
```

这样，我们就完成这道题的讲解，如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
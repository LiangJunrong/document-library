949 - 给定数字能组成的最大时间（largest-time-for-given-digits）
===

> Create by **jsliang** on **2020-01-27 20:20:11**  
> Recently revised in **2020-01-27 21:40:16**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/largest-time-for-given-digits/
* **题目内容**：

```
给定一个由 4 位数字组成的数组，
返回可以设置的符合 24 小时制的最大时间。

最小的 24 小时制时间是 00:00，
而最大的是 23:59。
从 00:00 （午夜）开始算起，过得越久，时间越大。

以长度为 5 的字符串返回答案。
如果不能确定有效时间，则返回空字符串。

示例 1：

输入：[1,2,3,4]
输出："23:41"
示例 2：

输入：[5,5,5,5]
输出：""

提示：

A.length == 4
0 <= A[i] <= 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-time-for-given-digits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 给定数字能组成的最大时间
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = (A) => {
  let maxNumber = -1;
  let result = '';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const hour = String(A[i]) + String(A[j]);
      if (j !== i && A[i] <= 2 && Number(hour) < 24) {
        for (let k = 0; k < 4; k++) {
          const minute = String(A[k]) + String(A[6 - i - j - k]);
          if (k !== i && k !== j && Number(minute) < 60) {
            if (Number(hour + minute) > maxNumber) {
              maxNumber = Number(hour + minute);
              result = hour + ':' + minute;
            }
          }
        }
      }
    }
  }
  return result;
};

console.log(largestTimeFromDigits([1, 2, 3, 4])); // '23:41'
console.log(largestTimeFromDigits([5, 5, 5, 5])); // ''
console.log(largestTimeFromDigits([0, 0, 0, 0])); // '00:00'
```

`node index.js` 返回：

```js
'23:41'
''
'00:00'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 172/172 cases passed (80 ms)
* Your runtime beats 38.78 % of javascript submissions
* Your memory usage beats 23.53 % of javascript submissions (36.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**jsliang** 出品，必定暴力破解：

> 暴力破解【未简化】

```js
const largestTimeFromDigits = (A) => {
  let maxNumber = 0;
  let result = '';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const judge1 = j !== i;
      const judge2 = A[i] <= 2;
      const judge3 = Number(String(A[i]) + String(A[j])) <= 23;
      if (judge1 && judge2 && judge3) {
        const surplus = [];
        for (let k = 0; k < 4; k++) {
          if (k !== i && k !== j) {
            surplus.push(k);
          }
        }
        if (Number(String(A[surplus[0]]) + String(A[surplus[1]])) < 60) {
          if (Number(String(A[i]) + String(A[j] +  String(A[surplus[0]])) + String(A[surplus[1]])) >= maxNumber) {
            maxNumber = Number(String(A[i]) + String(A[j] +  String(A[surplus[0]])) + String(A[surplus[1]]));
            result = String(A[i]) + String(A[j] + ':' + String(A[surplus[0]])) + String(A[surplus[1]]);
          }
        }
        if (Number(String(A[surplus[1]]) + String(A[surplus[0]])) < 60) {
          if (Number(String(A[i]) + String(A[j] +  String(A[surplus[1]])) + String(A[surplus[0]])) >= maxNumber) {
            maxNumber = Number(String(A[i]) + String(A[j] +  String(A[surplus[1]])) + String(A[surplus[0]]));
            result = String(A[i]) + String(A[j] + ':' + String(A[surplus[1]])) + String(A[surplus[0]]);
          }
        }
      }
    }
  }
  return result;
};
```

思路如下：

1. 通过先取前两个数字，这两个数字组成的新数字小于等于 `23`。
2. 再取剩余的两个数字，这两个数字组成的新数字小于等于 `59`。

好的我说完了废话，咱们先看看 Submit 提交：

```js
Accepted
* 172/172 cases passed (80 ms)
* Your runtime beats 38.78 % of javascript submissions
* Your memory usage beats 23.53 % of javascript submissions (36.3 MB)
```

OK，我想说就这么结束可以么，哈哈~

> 暴力破解【简化】

```js
const largestTimeFromDigits = (A) => {
  let maxNumber = -1;
  let result = '';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const hour = String(A[i]) + String(A[j]);
      if (j !== i && A[i] <= 2 && Number(hour) < 24) {
        for (let k = 0; k < 4; k++) {
          const minute = String(A[k]) + String(A[6 - i - j - k]);
          if (k !== i && k !== j && Number(minute) < 60) {
            if (Number(hour + minute) > maxNumber) {
              maxNumber = Number(hour + minute);
              result = hour + ':' + minute;
            }
          }
        }
      }
    }
  }
  return result;
};
```

这里的简化思路和前面类似，都是取 `hour < 24`，`minute < 60` 这两个条件，然后优化了下判断：

1. 设置 `i, j, k, 6-i-j-k` 这四个指针；
2. 判断它们不相同，并且都在 `0, 1, 2, 3` 这四个位置上；
3. 取 `i, j` 设置为 `hour`，唯有小于 24 的才进行下一步；
4. 取 `k, 6-i-j-k` 设置为 `minute`，唯有小于 60 的才进行下一步；
5. 判断这个值是否比 `maxNumber` 大，如果是，则替换最终结果 `result`。

Submit 提交如下：

```js
Accepted
* 172/172 cases passed (76 ms)
* Your runtime beats 46.94 % of javascript submissions
* Your memory usage beats 32.35 % of javascript submissions (35.5 MB)
```

顺带翻了下【题解区】和【评论区】，目前就上面那份简化版的是最简洁的了。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsiang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
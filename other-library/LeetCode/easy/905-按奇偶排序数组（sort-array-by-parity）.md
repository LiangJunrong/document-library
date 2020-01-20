905 - 按奇偶排序数组（sort-array-by-parity）
===

> Create by **jsliang** on **2020-01-20 17:49:09**  
> Recently revised in **2020-01-20 18:53:55**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/sort-array-by-parity/
* **题目内容**：

```
给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

示例：

输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

提示：

1 <= A.length <= 5000
0 <= A[i] <= 5000
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 按奇偶排序数组
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i]);
    } else {
      result.push(A[i]);
    }
  }
  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
```

`node index.js` 返回：

```js
[ 4, 2, 3, 1 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 285/285 cases passed (104 ms)
* Your runtime beats 29.29 % of javascript submissions
* Your memory usage beats 78.52 % of javascript submissions (37 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，这道题拿到面试上来讲，就是送分题，特别简单：

> 暴力破解

```js
const sortArrayByParity = (A) => {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i]);
    } else {
      result.push(A[i]);
    }
  }
  return result;
};
```

只要偶数排在奇数前面，不管你怎么排都可以，这条件已经放得很宽很宽了。

所以咱们：

1. 设置 `result` 来获取新数组；
2. 遍历数组 `A[i]`，将找到的情侣党（偶数）放在数组头部（`unshift`），将找到的单身狗（奇数）放在数组尾部（`push`）；
3. 最后返回 `result` 即可。

**然后**，可能有的小伙伴会有疑惑，我直接挪动元素组的元素不 OK 吗？为啥需要新开数组呢？

1. 如果我们线性遍历数组，那么我们如何定位这个位置是不是走过了？
2. 如果我们对数组操作了，那么我们下一步应该从何走起？

当然，也有可能是 **jsliang** 想不到，咱们逛逛【评论区】和【题解区】。

还真有！

> 快排

```js
const sortArrayByParity = (A) => {
  let i = 0,
      j = A.length - 1;
  while (i < j) {
    if (A[i] % 2 > A[j] % 2) {
      const temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
    if (A[i] % 2 === 0) {
      i ++;
    }
    if (A[j] % 2 === 1) {
      j --;
    }
  }
  return A;
};
```

官方说话：

```
维护两个指针 i 和 j，
循环保证每刻小于 i 的变量都是偶数
（也就是 A[k] % 2 == 0 当 k < i），
所有大于 j 的都是奇数。

所以， 4 种情况针对 (A[i] % 2, A[j] % 2)：

如果是 (0, 1)，那么万事大吉 i++ 并且 j--。
如果是 (1, 0)，那么交换两个元素，然后继续。
如果是 (0, 0)，那么说明 i 位置是正确的，只能 i++。
如果是 (1, 1)，那么说明 j 位置是正确的，只能 j--。
通过这 4 种情况，循环不变量得以维护，
并且 j-i 不断变小。最终就可以得到奇偶有序的数组。
```

其实目的和很简单：

1. 设置 `i` 为数组起点；设置 `j` 为数组终点。
2. 我们通过 `while` 判断，循环直到 `i > j` 终止。
3. 如果 `A[i]` 是奇数，`A[j]` 是偶数，那么就对它们进行交换，从而保持排序顺序上：偶数 > 奇数的原则。
4. 如果 `A[i]` 当前是偶数，那么 `i++`，表明这个元素合格了；
5. 如果 `A[j]` 当前是技术，那么 `j--`，表明这个元素也合格了；

通过上面步骤，小伙伴们应该可以看到 `i` 和 `j` 的差距在不断减少，最终 `i > j`。

Submit 提交：

```js
Accepted
* 285/285 cases passed (88 ms)
* Your runtime beats 87.45 % of javascript submissions
* Your memory usage beats 48.92 % of javascript submissions (37.3 MB)
```

**最后**，如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
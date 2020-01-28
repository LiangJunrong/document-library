976 - 三角形的最大周长（largest-perimeter-triangle）
===

> Create by **jsliang** on **2020-01-28 15:24:40**  
> Recently revised in **2020-01-28 15:59:55**

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
* **涉及知识**：排序、数学
* **题目地址**：https://leetcode-cn.com/problems/largest-perimeter-triangle/
* **题目内容**：

```
给定由一些正数（代表长度）组成的数组 A，
返回由其中三个长度组成的、
面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

示例 1：

输入：[2,1,2]
输出：5

示例 2：

输入：[1,2,1]
输出：0

示例 3：

输入：[3,2,3,4]
输出：10

示例 4：

输入：[3,6,2,3]
输出：8

提示：

3 <= A.length <= 10000
1 <= A[i] <= 10^6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/largest-perimeter-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 三角形的最大周长
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = (A) => {
  A.sort((a, b) => a - b);
  for (let i = A.length - 3; i >= 0; i--) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};

console.log(largestPerimeter([2, 1, 2])); // 5
console.log(largestPerimeter([1, 2, 1])); // 0
console.log(largestPerimeter([3, 2, 3, 4])); // 10
console.log(largestPerimeter([3, 6, 2, 3])); // 8
console.log(largestPerimeter([1, 2, 2, 4, 18, 8])); // 5
```

`node index.js` 返回：

```js
5
0
10
8
5
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 84/84 cases passed (4788 ms)
* Your runtime beats 5.21 % of javascript submissions
* Your memory usage beats 55.63 % of javascript submissions (38.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

拿到题目，暴力通杀：

> 暴力破解【未简化】

```js
const largestPerimeter = (A) => {
  const result = [];
  // 定律：三角形两边之和大于第三边
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (
          A[i] + A[j] > A[k]
          && A[j] + A[k] > A[i]
          && A[i] + A[k] > A[j]
        ) {
          console.log(A[i], A[j], A[k]);
          result.push(A[i] + A[j] + A[k]);
        }
      }
    }
  }
  return result.sort((a, b) => b - a)[0] || 0;
};
```

根据定律两边之和大于第三遍，直接判断即可：

Submit 提交：

```js
Runtime Error
* 54/84 cases passed (N/A)
```

然后就等着惨败吧~

虽然能通过其他的判定：

```js
console.log(largestPerimeter([2, 1, 2])); // 5
console.log(largestPerimeter([1, 2, 1])); // 0
console.log(largestPerimeter([3, 2, 3, 4])); // 10
console.log(largestPerimeter([3, 6, 2, 3])); // 8
console.log(largestPerimeter([1, 2, 2, 4, 18, 8])); // 5
```

但是耐不住它内容超多啊~

所以咱们需要控制下自己~

> 暴力破解【简化版】

```js
const largestPerimeter = (A) => {
  A.sort((a, b) => b - a);
  // 定律：三角形两边之和大于第三边
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (
          A[i] + A[j] > A[k]
          && A[j] + A[k] > A[i]
          && A[i] + A[k] > A[j]
        ) {
          return A[i] + A[j] + A[k];
        }
      }
    }
  }
  return 0;
};
```

在这里，我们先对 `A` 进行了降序排序，然后再进行 三边求和 对比。

如果三边求和对比成功，我们就输出这三边和，否则直到最后输出 0 表明没有该结果。

其实这样写的时候内心是有点忐忑的，因为我怕有可能最长的三角形周长不是最高（降序排序拿不到最好的）。

不过居然过了，有点意外：

```js
Accepted
* 84/84 cases passed (4788 ms)
* Your runtime beats 5.21 % of javascript submissions
* Your memory usage beats 55.63 % of javascript submissions (38.2 MB)
```

即便时间低的可怜~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，暴力并不能解决一切，咱们以和为贵，看看其他大佬的解法~

> 官方题解

```js
const largestPerimeter = (A) => {
  A.sort((a, b) => a - b);
  for (let i = A.length - 3; i >= 0; i--) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2];
    }
  }
  return 0;
};
```

看到这里震惊有木有~

先将数组从小到大排序，然后判断最大两个值之和大于第三值，即可构成三角形！

Submit 提交：

```js
Accepted
* 84/84 cases passed (108 ms)
* Your runtime beats 85.42 % of javascript submissions
* Your memory usage beats 19.38 % of javascript submissions (38.7 MB)
```

评委它违规，欺负我不懂数学~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
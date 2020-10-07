1051 - 高度检查器（height-checker）
===

> Create by **jsliang** on **2020-01-30 22:21:36**  
> Recently revised in **2020-01-30 22:45:09**

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
* **题目地址**：https://leetcode-cn.com/problems/height-checker/
* **题目内容**：

```
学校在拍年度纪念照时，
一般要求学生按照 非递减 的高度顺序排列。

请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。

示例：

输入：heights = [1,1,4,2,1,3]
输出：3

提示：

1 <= heights.length <= 100
1 <= heights[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/height-checker
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 高度检查器
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  const newHeights = [...heights].sort((a, b) => a - b);
  let people = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== newHeights[i]) {
      people++;
    }
  }
  return people;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 79/79 cases passed (72 ms)
* Your runtime beats 66.01 % of javascript submissions
* Your memory usage beats 42.98 % of javascript submissions (35.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

题目让我感到困惑：

1. 给定一个数组：`heights = [1, 1, 4, 2, 1, 3]`。
2. 尽可能少的移动，让其变成【非递减】排序。
3. 求出这个最少的移动人数。

按照 **jsliang** 自身的理解，将 4 移动到 3 后面，将 2 移动到 1 后面，总共 2 次移动，搞定收工。

但是，示例返回的是 `3`，这就让我感到困惑无比了~

接着我想了下，它的意思是不是说：`[4, 2, 1]` 移动了位置变成了 `[1, 2,3, 4]`，所以移动次数是 `3`？还是不对啊，皱眉。

再搞搞，意思是：4 和 1 调换，4 再和 3 调换，所以移动了 3 个人？

那样的话……

> 暴力破解

```js
const heightChecker = (heights) => {
  const newHeights = [...heights].sort((a, b) => a - b);
  let people = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== newHeights[i]) {
      people++;
    }
  }
  return people;
};
```

我们将 `height` 进行 `sort()` 的顺序操作，得到递增数列 `newHeight`。

然后逐一比较 `height` 和 `newHeight`，所不同的位置，就是它们需要移动的次数。

Submit 提交：

```js
Accepted
* 79/79 cases passed (72 ms)
* Your runtime beats 66.01 % of javascript submissions
* Your memory usage beats 42.98 % of javascript submissions (35.1 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看下【题解区】发现都是大佬：

> 桶

```js
const heightChecker = (heights) => {
  let arr = [0];
  heights.forEach(h => {
    if (arr[h]) {
      arr[h]++;
    } else {
      arr[h] = 1;
    }
  });
  let count = 0;
  let k = 0;
  arr.forEach((a, i) => {
    while(a--){
      if(heights[k++] !== i) {
        count++;
      }
    }
  })
  return count;
};
```

Submit 提交：

```js
Accepted
* 79/79 cases passed (64 ms)
* Your runtime beats 92.74 % of javascript submissions
* Your memory usage beats 97.52 % of javascript submissions (34.3 MB)
```

唯有先羡慕一番，后面学习了各种排序方法后，再逐一复习~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
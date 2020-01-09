849 - 到最近的人的最大距离（maximize-distance-to-closest-person）
===

> Create by **jsliang** on **2020-01-09 17:13:42**  
> Recently revised in **2020-01-09 17:56:47**

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
* **题目地址**：https://leetcode-cn.com/problems/maximize-distance-to-closest-person/
* **题目内容**：

```
在一排座位（seats）中，
1 代表有人坐在座位上，
0 代表座位上是空的。

至少有一个空座位，
且至少有一人坐在座位上。

亚历克斯希望坐在一个作为，
能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。

示例 1：

输入：[1,0,0,0,1,0,1]
输出：2
解释：
如果亚历克斯坐在第二个空位（seats[2]）上，
他到离他最近的人的距离为 2 。
如果亚历克斯坐在其它任何一个空位上，
他到离他最近的人的距离为 1 。
因此，他到离他最近的人的最大距离是 2 。 

示例 2：

输入：[1,0,0,0]
输出：3
解释： 
如果亚历克斯坐在最后一个座位上，
他离最近的人有 3 个座位远。
这是可能的最大距离，所以答案是 3 。

提示：

1 <= seats.length <= 20000
seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 到最近的人的最大距离
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = (seats) => {
  let max = 0;
  let flag = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = Math.max(max, i - 1 - flag);
      flag = i;
    }
  }
  let firstDist = seats.indexOf(1);
  let endDist = seats.length - 1 - seats.lastIndexOf(1);
  if (max % 2 === 0) {
    return Math.max(firstDist, max / 2, endDist);
  } else {
    return Math.max(firstDist, (max + 1) / 2, endDist);
  }
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
console.log(maxDistToClosest([1, 0, 0, 0])); // 3
```

`node index.js` 返回：

```js
2
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 79/79 cases passed (76 ms)
* Your runtime beats 71.55 % of javascript submissions
* Your memory usage beats 59.09 % of javascript submissions (36.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

拿到题目，捋捋思路：

1. 将数组分成三部分，头部尾部和中间；
2. 头部长度求解是：`seats.indexOf(1)`；
3. 尾部长度求解是：`seats.length - 1 - seats.lastIndexOf(1)`；
4. 中间长度求解稍微复杂点，就是遍历的过程中，发现 1 的数字，那么就两个 1 之间的长度求解出来：`max = Math.max(max, i - 1 - flag)`。

通过这样的求解，判断中间的长度是奇数还是偶数，因为我们需要判断中间的距离是：`max / 2` 还是 `(max - 1) / 2`。

最后判断 `Math.max(firstDist, 中间长度, endDist)` 即可~

> 暴力破解

```js
const maxDistToClosest = (seats) => {
  let max = 0;
  let flag = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = Math.max(max, i - 1 - flag);
      flag = i;
    }
  }
  let firstDist = seats.indexOf(1);
  let endDist = seats.length - 1 - seats.lastIndexOf(1);
  if (max % 2 === 0) {
    return Math.max(firstDist, max / 2, endDist);
  } else {
    return Math.max(firstDist, (max + 1) / 2, endDist);
  }
};
```

Submit 提交：

```js
Accepted
* 79/79 cases passed (76 ms)
* Your runtime beats 71.55 % of javascript submissions
* Your memory usage beats 59.09 % of javascript submissions (36.3 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

然后，回头想了一个垃圾解法：

> 暴力破解（不可取）

```js
const maxDistToClosest = (seats) => {
  const newSeats = seats.join('').split('1');
  let maxLength = 0;
  for (let i = 1; i < newSeats.length - 1; i++) {
    if (newSeats[i].length > maxLength) {
      maxLength = newSeats[i].length;
    }
  }
  if (maxLength % 2 === 0) {
    return Math.max(newSeats[0].length, maxLength / 2, newSeats[newSeats.length - 1].length);
  } else {
    return Math.max(newSeats[0].length, (maxLength + 1) / 2, newSeats[newSeats.length - 1].length);
  }
};
```

做法就是将座位换成字符串，再根据 1 拆分成数组。

这时候，我们就可以获取到各个 0 字符串的长度。

拿到当中最长长度和开头以及末尾 0 的长度比较，返回最长长度~

Submit 提交：

```js
Accepted
* 79/79 cases passed (88 ms)
* Your runtime beats 17.24 % of javascript submissions
* Your memory usage beats 18.18 % of javascript submissions (38.2 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
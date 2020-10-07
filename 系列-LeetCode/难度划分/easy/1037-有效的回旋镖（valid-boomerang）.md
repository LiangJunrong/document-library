1037 - 有效的回旋镖（valid-boomerang）
===

> Create by **jsliang** on **2020-01-30 16:21:42**  
> Recently revised in **2020-01-30 16:54:38**

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
* **题目地址**：https://leetcode-cn.com/problems/valid-boomerang/
* **题目内容**：

```
回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。

给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。

示例 1：

输入：[[1,1],[2,3],[3,2]]
输出：true

示例 2：

输入：[[1,1],[2,2],[3,3]]
输出：false

提示：

points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-boomerang
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 有效的回旋镖
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = (points) => {
  const Ax = points[0][0];
  const Ay = points[0][1];
  const Bx = points[1][0];
  const By = points[1][1];
  const Cx = points[2][0];
  const Cy = points[2][1];
  return (Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0;
};

console.log(isBoomerang([[1, 1], [2, 3], [3, 2]])); // true
```

`node index.js` 返回：

```js
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 190/190 cases passed (60 ms)
* Your runtime beats 93.1 % of javascript submissions
* Your memory usage beats 38.78 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

元芳，这道题你怎么看？

大人！我不知道这道题数学公式！

是的，坑爹的，又要百度搜索公式了：

* 判断三个点是否构成三角形公式：(Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0

> 暴力破解

```js
const isBoomerang = (points) => {
  const Ax = points[0][0];
  const Ay = points[0][1];
  const Bx = points[1][0];
  const By = points[1][1];
  const Cx = points[2][0];
  const Cy = points[2][1];
  return (Ax * (By - Cy) + Bx * (Cy - Ay) + Cx * (Ay - By)) / 2 !== 0;
};
```

直接套用公式就行了，Submit 提交：

```js
Accepted
* 190/190 cases passed (60 ms)
* Your runtime beats 93.1 % of javascript submissions
* Your memory usage beats 38.78 % of javascript submissions (33.8 MB)
```

那些说只需要一行的给我站住，看我不兜晕你：

> 一行求解

```js
const isBoomerang = (points) => (points[0][0] * (points[1][1] - points[2][1]) + points[1][0] * (points[2][1] - points[0][1]) + points[2][0] * (points[0][1] - points[1][1])) / 2 !== 0;
```

Submit 提交：

```js
Accepted
* 190/190 cases passed (64 ms)
* Your runtime beats 77.59 % of javascript submissions
* Your memory usage beats 97.96 % of javascript submissions (33.5 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

肯定还有的小伙伴说会有更简单的公式：

> 暴力破解【简化】

```js
/**
 * @name 有效的回旋镖
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = (points) => {
  const dx = points[1][0] - points[0][0];
  const dy = points[1][1] - points[0][1];
  const ex = points[2][0] - points[0][0];
  const ey = points[2][1] - points[0][1];
  return dx * ey != ex * dy;
}
```

Submit 提交：

```js
Accepted
* 190/190 cases passed (60 ms)
* Your runtime beats 93.1 % of javascript submissions
* Your memory usage beats 97.96 % of javascript submissions (33.5 MB)
```

就酱，这道题就结束啦！

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
733 - 图像渲染（flood-fill）
===

> Create by **jsliang** on **2019-12-27 08:39:39**  
> Recently revised in **2019-12-27 09:42:33**

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
* **涉及知识**：深度优先搜索
* **题目地址**：https://leetcode-cn.com/problems/flood-fill/
* **题目内容**：

```
有一幅以二维整数数组表示的图画，
每一个整数表示该图画的像素值大小，
数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列），
和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，
从初始坐标开始，
记录初始坐标的上下左右四个方向上像素值，
与初始坐标相同的相连像素点，
接着再记录这四个方向上符合条件的像素点，
与他们对应四个方向上像素值与初始坐标相同的相连像素点，
……，
重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。

示例 1:

输入: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析: 
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。

注意:

image 和 image[0] 的长度在范围 [1, 50] 内。
给出的初始点将满足：
0 <= sr < image.length 和 0 <= sc < image[0].length。

image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535]内。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 图像渲染
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  const oldColor = image[sr][sc]; // 旧颜色
  const drawList = [[sr, sc]]; // 剩余可描点
  const mapRoute = new Map(); // 哈希表 - 记录走过的路径
  while (drawList.length) {
    const tempP = drawList.pop(); // 当前可描点 - tempPosition
    const p1 = tempP[0]; // 当前可描点 - 横坐标 - position1
    const p2 = tempP[1]; // 当前可描点 - 纵坐标 - position2
    if (mapRoute.get(`${p1}${p2}`) === undefined) { // 走过的路不要重复
      image[p1][p2] = newColor;
      if (p1 - 1 >= 0 && image[p1 - 1][p2] === oldColor) {
        drawList.push([p1 - 1, p2]);
      }
      if (p2 - 1 >= 0 && image[p1][p2 - 1] === oldColor) {
        drawList.push([p1, p2 - 1]);
      }
      if (p1 + 1 < image.length && image[p1 + 1][p2] === oldColor) {
        drawList.push([p1 + 1, p2]);
      }
      if (p2 + 1 < image[0].length && image[p1][p2 + 1] === oldColor) {
        drawList.push([p1, p2 + 1]);
      }
    }
    mapRoute.set(`${p1}${p2}`, true);
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2,
  )
);
```

`node index.js` 返回：

```js
[
  [ 2, 2, 2 ],
  [ 2, 2, 0 ],
  [ 2, 0, 1 ],
]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 277/277 cases passed (80 ms)
* Your runtime beats 96.92 % of javascript submissions
* Your memory usage beats 60 % of javascript submissions (36.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

孩子没娘，说来话长。

咋看这道题还是挺绕的，不过不要太 care 啦，**jsliang** 为你一一道来：

> jsliang 破解

```js
const floodFill = (image, sr, sc, newColor) => {

  const oldColor = image[sr][sc]; // 旧颜色
  const drawList = [[sr, sc]]; // 剩余可描点
  const mapRoute = new Map(); // 哈希表 - 记录走过的路径

  while (drawList.length) {
    const tempP = drawList.pop(); // 当前可描点 - tempPosition
    const p1 = tempP[0]; // 当前可描点 - 横坐标 - position1
    const p2 = tempP[1]; // 当前可描点 - 纵坐标 - position2
    if (mapRoute.get(`${p1}${p2}`) === undefined) { // 走过的路不要重复
      image[p1][p2] = newColor;
      if (p1 - 1 >= 0 && image[p1 - 1][p2] === oldColor) {
        drawList.push([p1 - 1, p2]);
      }
      if (p2 - 1 >= 0 && image[p1][p2 - 1] === oldColor) {
        drawList.push([p1, p2 - 1]);
      }
      if (p1 + 1 < image.length && image[p1 + 1][p2] === oldColor) {
        drawList.push([p1 + 1, p2]);
      }
      if (p2 + 1 < image[0].length && image[p1][p2 + 1] === oldColor) {
        drawList.push([p1, p2 + 1]);
      }
    }
    mapRoute.set(`${p1}${p2}`, true);
  }
  return image;
};
```

**首先**，我们先明确一些变量：

1. `oldColor`：题目表明所有相邻的旧颜色都要换成新颜色，所以我们肯定要知道旧颜色是多少的。
2. `drawList`：**关键列表**，我们将当前可描的点，都加入到 `drawList` 中，将它所有可描的点都遍历一遍，我们就走完了所有点。
3. `mapRoute`：走过的点，`[1, 1]` 的上边是 `[0, 1]`，`[0, 1]` 的下边是 `[1, 1]`……如果我们不做限制，它们可以不断重复，这就会造成死循环啦！所以我们用 `mapRoute` 记录走过的点。

OK，定义完毕，开始遍历 `drawList`，在遍历之前，先介绍它内部的一些变量：

1. `tempP`：我们通过 `tempPosition` 来表明当前需要走的点。
2. `p1`：我们 `tempP` 的横坐标。
3. `p2`：我们 `tempP` 的纵坐标。

**然后**，我们开始描点：

1. 如果这个点曾经出现在 `mapRoute`，那么我们就不遍历它了！
2. 如果这个点没有出现在 `mapRoute`，那么设置 `image[p1][p2] = newColor`，即这个点被我们占领了，打上了 `newColor` 的标志。
3. 判断上下左右四个坐标，以及坐标的值是不是和 `oldColor` 相同，如果相同，则添加到 `drawList` 可描列表上去。

**最后**，通过 `drawList` 的不断判断，我们将所有可描的点都走了一遍。

Submit 提交：

```js
Accepted
* 277/277 cases passed (80 ms)
* Your runtime beats 96.92 % of javascript submissions
* Your memory usage beats 60 % of javascript submissions (36.6 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

在这道题中，我们使用了迭代的方式，那么小伙伴能不能使用递归来进行解决呢？

如果你有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
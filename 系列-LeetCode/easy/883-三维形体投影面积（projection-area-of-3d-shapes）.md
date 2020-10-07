883 - 三维形体投影面积（projection-area-of-3d-shapes）
===

> Create by **jsliang** on **2020-01-13 19:19:00**  
> Recently revised in **2020-01-14 09:01:24**

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
* **题目地址**：https://leetcode-cn.com/problems/projection-area-of-3d-shapes/
* **题目内容**：

在 `N * N` 的网格中，我们放置了一些与 x，y，z 三轴对齐的 `1 * 1 * 1` 立方体。

每个值 `v = grid[i][j]` 表示 v 个正方体叠放在单元格 (`i, j`) 上。

现在，我们查看这些立方体在 xy、yz 和 zx 平面上的投影。

投影就像影子，将三维形体映射到一个二维平面上。

在这里，从顶部、前面和侧面看立方体时，我们会看到“影子”。

返回所有三个投影的总面积。
 
示例 1：

输入：[[2]]
输出：5

示例 2：

输入：[[1,2],[3,4]]
输出：17
解释：
这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。

![图](../../../public-repertory/img/other-algorithm-883-1.png)

示例 3：

输入：[[1,0],[0,2]]
输出：8

示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：14

示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：21

提示：

1 <= grid.length = grid[0].length <= 50
0 <= grid[i][j] <= 50

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 三维形体投影面积
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = (grid) => {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    let verticalMax = 0;
    let rowMax = 0;
    for (let j = 0; j < grid[0].length; j++) {
      verticalMax = Math.max(verticalMax, grid[j][i]);
      rowMax = Math.max(rowMax, grid[i][j]);
      if (grid[i][j] > 0) {
        result += 1;
      }
    }
    result += verticalMax + rowMax;
  }
  return result;
};

console.log(projectionArea([[2, 2, 2], [1, 1, 1], [0, 1, 1]])); // 8 + 6 + 4 = 18
```

`node index.js` 返回：

```js
18
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 90/90 cases passed (64 ms)
* Your runtime beats 90.48 % of javascript submissions
* Your memory usage beats 11.11 % of javascript submissions (35.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看到这道题的时候，内心是有点抗拒的，毕竟《三维形体投影面积》，听起来就很高端，但是仔细想想，**jsliang** 高中立体几何满分~不怂，就是做：

> 暴力破解

```js
const projectionArea = (grid) => {
  // 计算正视
  let sideLooking = 0;
  const map = [[], [], []];
  for (let i = 0; i < grid.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, grid[j][i]);
    }
    sideLooking += max;
  }
  // 计算侧视
  let faceUpTo = 0;
  for (let i = 0; i < grid.length; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < grid[0].length; j++) {
      max = Math.max(max, grid[i][j]);
    }
    faceUpTo += max;
  }
  // 计算俯视
  let overlook = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > 0) {
        overlook += 1;
      }
    }
  }
  return faceUpTo + sideLooking + overlook;
};
```

还记得高中数学老师讲过：

* **如果你不会的，那你就用工具刀将你的橡皮擦切开来。**（橡皮擦卒）

这道题也很简单：

* 俯视：可以看到所有的数字，如果数字大于 1，表明这里有 1 个面积。
* 正视：计算竖排对应最高个数相加。
* 测试：计算横排对应最高个数相加。

看到这里还是懵圈，所以我们先进行一个假设：

这组数据为：

```js
[
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ]
]
```

进行切图：

| 名称 | 纵1 | 纵2 | 纵3 |
| --- | --- | --- | --- |
| 横1 | 6 | 7 | 8 |
| 横2 | 3 | 4 | 5 |
| 横3 | 0 | 1 | 2 |

OK，看到这里就很简单了：

* 俯视：8 个

数字代表着它的个数，如果它是 0 个，表明这个位置是空缺的，所以俯视应该是有 8 个投影面积。

* 正视：21 个

正视即计算纵排最高个数相加。

1. 第一纵排为 `[0, 3, 6]`，那么最大是 6。
2. 第二纵排为 `[1, 4, 7]`，那么最大是 7。
3. 第三纵排为 `[2, 5, 8]`，那么最大是 8。

总计就是 6 + 7 + 8 = 21 个。

* 侧视：15 个

侧视即计算横排最高个数相加。

1. 第一横排为 `[0, 1, 2]`，那么最大是 2。
2. 第二横排为 `[3, 4, 5]`，那么最大是 5。
3. 第三横排为 `[6, 7, 8]`，那么最大是 8。

总计就是 2 + 5 + 8 = 15 个。

这样，我们最终结果就是 8 + 21 + 15 = 44 个。

如果小伙伴还没想清楚，可以再读几遍，或者买块橡皮进行切片，或者拿几个正立方体块进行搭建模型观察。

这也是 **jsliang** 高中数学立体几何所得经验，额外的分享~

如果上面所讲你已经懂了，那么 **jsliang** 就继续优化自己代码了~

> 暴力优化

```js
const projectionArea = (grid) => {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    let verticalMax = 0;
    let rowMax = 0;
    for (let j = 0; j < grid[0].length; j++) {
      verticalMax = Math.max(verticalMax, grid[j][i]);
      rowMax = Math.max(rowMax, grid[i][j]);
      if (grid[i][j] > 0) {
        result += 1;
      }
    }
    result += verticalMax + rowMax;
  }
  return result;
};
```

就这样，我们就优化了自己的代码啦~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
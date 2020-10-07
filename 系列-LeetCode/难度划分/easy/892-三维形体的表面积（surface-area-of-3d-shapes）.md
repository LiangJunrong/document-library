892 - 三维形体的表面积（surface-area-of-3d-shapes）
===

> Create by **jsliang** on **2020-01-14 19:26:36**  
> Recently revised in **2020-01-15 09:23:22**

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
* **涉及知识**：几何、数学
* **题目地址**：https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
* **题目内容**：

```
在 N * N 的网格上，
我们放置一些 1 * 1 * 1 的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。

示例 1：

输入：[[2]]
输出：10

示例 2：

输入：[[1,2],[3,4]]
输出：34

示例 3：

输入：[[1,0],[0,2]]
输出：16

示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32

示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46

提示：

1 <= N <= 50
0 <= grid[i][j] <= 50
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
var surfaceArea = function(grid) {

};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 三维形体的表面积
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = (grid) => {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        let nowArea = grid[i][j] * 4 + 2;
        if (grid[i - 1] && grid[i - 1][j]) {
          nowArea -= Math.min(grid[i][j], grid[i - 1][j]);
        }
        if (grid[i + 1] && grid[i + 1][j]) {
          nowArea -= Math.min(grid[i][j], grid[i + 1][j]);
        }
        if (grid[i][j - 1]) {
          nowArea -= Math.min(grid[i][j], grid[i][j - 1]);
        }
        if (grid[i][j + 1]) {
          nowArea -= Math.min(grid[i][j], grid[i][j + 1]);
        }
        result += nowArea;
      }
    }
  }
  return result;
};

console.log(surfaceArea([[2]])); // 10
console.log(surfaceArea([[1, 2], [3, 4]])); // 34
console.log(surfaceArea([[1, 0], [0, 2]])); // 16
console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // 32
```

`node index.js` 返回：

```js
10
34
16
32
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 90/90 cases passed (64 ms)
* Your runtime beats 94.32 % of javascript submissions
* Your memory usage beats 25 % of javascript submissions (35.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

禀告大人，尚有一事，暂不清晰：

* `[[1, 2],[3, 4]]`

已知数组如上，按题意所说：

```
每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。
```

即：

* [0, 0] => 1
* [0, 1] => 2
* [1, 0] => 3
* [1, 1] => 4

形成图形格如下：

| 坐标 | 纵1 | 纵2 |
| --- | --- | --- |
| 横2 | 3 | 4 |
| 横1 | 1 | 2 |

那么，表面积为：

> 一个柱体表面积计算公式：n * 4 + 2（n 为个数）

* 1 => 6 - 2 = 4
* 2 => 10 - 3 = 7
* 3 => 14 - 4 = 10
* 4 => 18 - 5 = 13

总表面积为：4 + 7 + 10 + 13 = 34

OK，这样我们就得到法子：

> 暴力破解

```js
const surfaceArea = (grid) => {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        let nowArea = grid[i][j] * 4 + 2;
        if (grid[i - 1] && grid[i - 1][j]) {
          nowArea -= Math.min(grid[i][j], grid[i - 1][j]);
        }
        if (grid[i + 1] && grid[i + 1][j]) {
          nowArea -= Math.min(grid[i][j], grid[i + 1][j]);
        }
        if (grid[i][j - 1]) {
          nowArea -= Math.min(grid[i][j], grid[i][j - 1]);
        }
        if (grid[i][j + 1]) {
          nowArea -= Math.min(grid[i][j], grid[i][j + 1]);
        }
        result += nowArea;
      }
    }
  }
  return result;
};
```

1. 设置 `result` 获取最终结果。
2. 双重 `for` 遍历获取当前元素。
3. 注意：只有当 `grid[i][j]` 不为 0 的时候才有面积，所以需要判断 `grid[i][j]`。
4. 设置 `nowArea` 为当前的表面积，即 `grid[i][j] * 4 + 2`。
5. 判断它的上下左右是否存有柱体，位置为 i+1、i-1、j+1、j-1。
6. 在判断过程中，如果上下左右的高度大于当前高度，那么取两者中的最小值，即当前高度即可。

这样，我们就完成了题的破解，Submit 提交如下：

```js
Accepted
* 90/90 cases passed (64 ms)
* Your runtime beats 94.32 % of javascript submissions
* Your memory usage beats 25 % of javascript submissions (35.8 MB)
```

这道题为数学几何题，这里咱们不做过多补充。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
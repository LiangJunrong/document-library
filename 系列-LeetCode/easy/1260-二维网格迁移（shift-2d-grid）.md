1260 - 二维网格迁移（shift-2d-grid）
===

> Create by **jsliang** on **2020-02-01 13:22:33**  
> Recently revised in **2020-02-01 14:29:27**

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
* **题目地址**：https://leetcode-cn.com/problems/shift-2d-grid/
* **题目内容**：

给你一个 m 行 n 列的二维网格 grid 和一个整数 k。

你需要将 grid 迁移 k 次。

每次「迁移」操作将会引发下述活动：

1. 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
2. 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
3. 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。

请你返回 k 次迁移操作后最终得到的 二维网格。

---

示例 1：

![图](../../../public-repertory/img/other-algorithm-1260-1.png)

* 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
* 输出：[[9,1,2],[3,4,5],[6,7,8]]

---

示例 2：

![图](../../../public-repertory/img/other-algorithm-1260-2.png)

* 输入：grid = [
  [3,8,1,9],
  [19,7,2,5],
  [4,6,11,10],
  [12,0,21,13],
], k = 4
* 输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

---

示例 3：

* 输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
* 输出：[[1,2,3],[4,5,6],[7,8,9]]

提示：

1. 1 <= grid.length <= 50
2. 1 <= grid[i].length <= 50
3. -1000 <= grid[i][j] <= 1000
4. 0 <= k <= 100

* 来源：力扣（LeetCode）
* 链接：https://leetcode-cn.com/problems/shift-2d-grid
* 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 二维网格迁移
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
  const m = grid.length;
  const n = grid[0].length;
  k = k % (m * n);
  const matrix = Array.from(Array(m), () => []);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      matrix[(i + Math.floor((j + k) / n)) % m][(j + k) % n] = grid[i][j];
    }
  }
  return matrix;
};

console.log(shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1
));
// [ [ 9, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

console.log(shiftGrid(
  [[1], [2], [3], [4], [7], [6], [5]],
  23
));
// [ [ 6 ], [ 5 ], [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 7 ] ]
```

`node index.js` 返回：

```js

[ [ 9, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]
[ [ 6 ], [ 5 ], [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 7 ] ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 107/107 cases passed (108 ms)
* Your runtime beats 83.23 % of javascript submissions
* Your memory usage beats 58.7 % of javascript submissions (40.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，这道题如果按照题意，一次一次地迁移，估计会超时。

那么，我们可以思考下，经过 `k` 次的迁移后，这个点的位置会到哪里。

> 整体迁移情况

```
time -> 0
[ [1, 2],
  [3, 4] ]

time -> 1
[ [4, 1],
  [2, 3] ]

time -> 2
[ [3, 4],
  [1, 2] ]

time -> 3
[ [2, 3]
  [4, 1] ]

time -> 4
[ [1, 2]
  [3, 4] ]
```

从整体迁移情况可以看出，当我们的 `k === m * n` 后，我们就进行新一轮往复的迁移。

> m 为行，n 为列，以下相同

所以 `k` 需要简化成 `k % (m * n)` 次。

> 单个迁移情况

```
假设为上图的 1，迁移了 3 次后：

[0, 0] => [0, 1] => [1, 0] => [1, 1]
```

可以看到，我们可以把 `[x, y]` 看成是一个两位长度的数。

这个两位长度的数，符合满 n 进 1 的规则。

即在 `[0, 1] => [1, 0]` 的时候，其实一开始是 `[0, 1] => [0, 2]`，因为 `[0, 2]` 满足于 `2 === n` 了，所以需要 0 加一，即 `[1, 0]`。

同时，当 `[x, y]` 中的 `x` 满足于 `2 === m` 时，`x` 应该也进行加一操作。

即符合规则：`[(x + Math.floor((y + k) / n)) % m, (y + k) % n]`。

OK，如此，我们就可以得出结果：

> 找规律

```js
const shiftGrid = (grid, k) => {
  const m = grid.length;
  const n = grid[0].length;
  k = k % (m * n);
  const matrix = Array.from(Array(m), () => []);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      matrix[(i + Math.floor((j + k) / n)) % m][(j + k) % n] = grid[i][j];
    }
  }
  return matrix;
};
```

Submit 提交：

```js
Accepted
* 107/107 cases passed (108 ms)
* Your runtime beats 83.23 % of javascript submissions
* Your memory usage beats 58.7 % of javascript submissions (40.3 MB)
```

这样，我们就通过观察、分析题意，一步一步推导出结果。

如果小伙伴们还有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
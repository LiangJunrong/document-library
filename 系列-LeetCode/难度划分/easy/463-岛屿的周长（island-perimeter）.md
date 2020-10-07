463 - 岛屿的周长（island-perimeter）
===

> Create by **jsliang** on **2019-10-23 10:40:38**  
> Recently revised in **2019-10-23 11:45:10**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题即测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 知识点](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 进一步思考](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/island-perimeter/
* **题目内容**：

```
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。

整个网格被水完全包围，但其中恰好有一个岛屿

（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。

格子是边长为 1 的正方形。

网格为长方形，且宽度和高度均不超过 100 。

计算这个岛屿的周长。

示例 :

输入:
[
 [0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0],
]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
```

![图](../../../public-repertory/img/other-algorithm-463-1.png)

## <a name="chapter-three" id="chapter-three">三 解题及测试</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

> index.js

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
};
```

> 确定了自己的答案再看下面代码哈~

* **解题代码**：

```js
/**
 * @name 计算岛屿周长辅流程——计算岛屿含有几条边
 * @description 判断传来地图对应坐标的上下左右是否存在 1
 * @param {number[][]} grid 地图
 * @param {number} i 横坐标
 * @param {number} j 纵坐标
 * @return {number}
 */
const judge = (grid, i, j) => {
  // 如果有上下左右，那么就用上下左右的值
  // 如果上下左右没值，那么就给 0
  const top = grid[i - 1] ? grid[i - 1][j] : 0;
  const bottom = grid[i + 1] ? grid[i + 1][j] : 0;
  const left = grid[i][j - 1] || 0;
  const right = grid[i][j + 1] || 0;
  // 总共 4 条边，出现 1 表明这条边有岛屿
  return 4 - (top + bottom + left + right);
}

/**
 * @name 计算岛屿周长主流程
 * @param {number[][]} grid 地图
 * @return {number}
 */
const islandPerimeter = (grid) => {
  if (grid.length <= 0 || grid.length > 100) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        result += judge(grid, i, j);
      }
    }
  }
  return result;
};

const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0],
];

console.log(islandPerimeter(grid));
```

`node index.js` 返回：

```js
16
```

## <a name="chapter-four" id="chapter-four">四 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
Accepted
* 5833/5833 cases passed (208 ms)
* Your runtime beats 89.72 % of javascript submissions
* Your memory usage beats 50 % of javascript submissions (44.3 MB)
```

## <a name="chapter-five" id="chapter-five">五 解题思路</a>

> [返回目录](#chapter-one)

**万物终归暴力可解**

当你想不到比较清晰的思路时，建议尝试暴力破解。

通过题意，我们可以想明白关键的几个点：

1. 岛屿是必定连在一块的。
2. 其中每个小岛屿，都有 4 块边。
3. 其中每个小岛屿，都会连着其他岛屿（至少一个），所以每有一个隔壁小岛屿，那么就需要减去 1 块边。
4. 将每块岛屿的所有边统计起来，就是结果。

这样我们就很清晰啦：

1. 遍历岛屿地图 `grid`。其中 `i` 表示横坐标，类似于案例的 `grid[0] = [0,1,0,0]`；其中 `j` 表示纵坐标，`grid[i][j]` 就是具体到每个小岛屿。
2. 判断在岛屿中，该小地图上下左右是否有邻居。总共 4 条边，那么 `grid[i][j]` 上下左右没出现一个 1（1 代表有岛屿），就减去一条边。
3. 最后统计所有结果到 `result` 即可。

这就是 **jsliang** 破解本题的思路！

> 当然，小伙伴们肯定有更好的，欢迎留言吐槽！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
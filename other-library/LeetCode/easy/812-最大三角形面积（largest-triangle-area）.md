812 - 最大三角形面积（largest-triangle-area）
===

> Create by **jsliang** on **2020-01-06 08:36:10**  
> Recently revised in **2020-01-06 09:36:18**

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
* **题目地址**：https://leetcode-cn.com/problems/largest-triangle-area/
* **题目内容**：

给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

示例:

输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]

输出: 2

解释: 

这五个点如下图所示。组成的橙色三角形是最大的，面积为 2。

![图](../../../public-repertory/img/other-algorithm-812-1.png)

注意:

3 <= points.length <= 50.
不存在重复的点。
 -50 <= points[i][j] <= 50.
结果误差值在 10^-6 以内都认为是正确答案

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 求三角形面积
 * @description
    expression: S = |(x2 - x1)(y3 - y1)-(x3 - x1)(y2 - y1)| / 2
    param: [0, 0], [0, 2], [2, 0];
    return: 2
 * @param {*} p1 坐标 1
 * @param {*} p2 坐标 2
 * @param {*} p3 坐标 3
 * @return 返回面积
 */
const getArea = (p1, p2, p3) => {
  return Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2;
};

/**
 * @name 最大三角形面积
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = (points) => {
  const result = [];
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        result.push(getArea(points[i], points[j], points[k]));
      }
    }
  }
  return result.sort((a, b) => b - a)[0];
};

console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));
```

`node index.js` 返回：

```js
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 57/57 cases passed (148 ms)
* Your runtime beats 6.9 % of javascript submissions
* Your memory usage beats 27.27 % of javascript submissions (42.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**jsliang** 一思考，上帝会发笑：

1. 如果给出了 3 个点，且这三个点在一条直线上。【无解】
2. 3 个点围成一个三角形，所以暴力的话，会对所有组合进行求解。【残忍】
3. 如果这 3 个点不好找高，例如 `[[0, 0], [1, 2], [2, 1]]`，那么就非常被动。【懵逼】

先查一下三角形面积求法，需要了解的是，如何通过 3 个坐标求面积：

* [如何计算三角形面积 - wikiHow](https://zh.wikihow.com/%E8%AE%A1%E7%AE%97%E4%B8%89%E8%A7%92%E5%BD%A2%E9%9D%A2%E7%A7%AF)
* [通过三个点的坐标求出三角形面积的公式 - 百度知道](https://zhidao.baidu.com/question/93368735.html)
* [通过三点坐标求三角形面积 - hehedad](https://blog.csdn.net/chenshibo17/article/details/79260532)

那么，现在了解了，根据 3 个点求三角形面积公式的是：

* `S = (x1y2 + x2y3 + x3y1 - x1y3 - x2y1 - x3y2) / 2`

这……是初中数学还是高中数学来着，忘了忘了，难受。

> 求三角形面积

```js
/**
 * @name 求三角形面积
 * @description
    expression: S = |(x2 - x1)(y3 - y1)-(x3 - x1)(y2 - y1)| / 2
    param: [0, 0], [0, 2], [2, 0];
    return: 2
 * @param {*} p1 坐标 1
 * @param {*} p2 坐标 2
 * @param {*} p3 坐标 3
 * @return 返回面积
 */
const getArea = (p1, p2, p3) => {
  return Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2;
};
console.log(getArea([0, 0], [0, 2], [2, 0])); // 2
```

已知这条公式，那么暴力破解就运营而生了：

> 暴力破解

```js
/**
 * @name 求三角形面积
 * @description
    expression: S = |(x2 - x1)(y3 - y1)-(x3 - x1)(y2 - y1)| / 2
    param: [0, 0], [0, 2], [2, 0];
    return: 2
 * @param {*} p1 坐标 1
 * @param {*} p2 坐标 2
 * @param {*} p3 坐标 3
 * @return 返回面积
 */
const getArea = (p1, p2, p3) => {
  return Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1])) / 2;
};

/**
 * @name 最大三角形面积
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = (points) => {
  const result = [];
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        result.push(getArea(points[i], points[j], points[k]));
      }
    }
  }
  return result.sort((a, b) => b - a)[0];
};
```

已知 `points` 的长度范围是 [3, 50]，长度对应的排列组合为：

* 3 —— 1
* 4 —— 2 + 1 = 3
* 5 —— 3 + 2 + 1 = 6
* 6 —— 4 + 3 + 2 + 1 = 10
* ……
* n —— (n - 2) + (n - 3) + ... + 1 = n(n + 1) / 2

即：最多 50 * 51 / 2 = 1275 种组合

Submit 提交如下：

```js
Accepted
* 57/57 cases passed (148 ms)
* Your runtime beats 6.9 % of javascript submissions
* Your memory usage beats 27.27 % of javascript submissions (42.8 MB)
```

虽然有点类似于 *作弊* 了，但是好歹一步一步探索出来了，鼓掌~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

在【题解区】和【评论区】看一下其他大佬的操作：

> 非暴力求解

```js
var largestTriangleArea = function (points) {
  let xMin = -Infinity,
    xMax = Infinity,
    yMin = -Infinity,
    yMax = Infinity
  points.forEach(p => {
    let [x, y] = p
    xMin = Math.min(xMin, x)
    xMax = Math.max(xMax, x)
    yMin = Math.min(yMin, y)
    yMax = Math.max(yMax, y)
  })
  points = points.filter(p => {
    let [x, y] = p
    return [xMin, xMax].includes(x) >= 0 || [yMin, yMax].includes(y) >= 0
  })
  return getMin(points)

  function area(p1, p2, p3) {
    let dx1 = p2[0] - p1[0]
    let dx2 = p3[0] - p1[0]
    let dy1 = p2[1] - p1[1]
    let dy2 = p3[1] - p1[1]
    return Math.abs(dx1 * dy2 - dx2 * dy1) / 2
  }

  function getMin(arr) {
    let len = arr.length,
      res = 0
    for (let i = 0; i < len - 2; ++i) {
      for (let j = i + 1; j < len - 1; ++j) {
        for (let k = j + 1; k < len; ++k) {
          res = Math.max(res, area(points[i], points[j], points[k]))
        }
      }
    }
    return res
  }
};
```

Submit 提交如下：

```js
Accepted
* 57/57 cases passed (84 ms)
* Your runtime beats 13.79 % of javascript submissions
* Your memory usage beats 90.91 % of javascript submissions (36 MB)
```

如果你有更好的方法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
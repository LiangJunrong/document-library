1266 - 访问所有点的最小时间（minimum-time-visiting-all-points）
===

> Create by **jsliang** on **2020-02-01 16:12:50**  
> Recently revised in **2020-02-01 16:36:08**

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
* **涉及知识**：几何、数组
* **题目地址**：https://leetcode-cn.com/problems/minimum-time-visiting-all-points/
* **题目内容**：

平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。

请你计算访问所有这些点需要的最小时间（以秒为单位）。

你可以按照下面的规则在平面上移动：

每一秒沿水平或者竖直方向移动一个单位长度，

或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。

必须按照数组中出现的顺序来访问这些点。

---

示例 1：

![图](../../../public-repertory/img/other-algorithm-1266-1.png)

* 输入：points = [[1,1],[3,4],[-1,0]]
* 输出：7
* 解释：一条最佳的访问路径是： [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   

```
从 [1,1] 到 [3,4] 需要 3 秒 
从 [3,4] 到 [-1,0] 需要 4 秒
一共需要 7 秒
```

---

示例 2：

* 输入：points = [[3,2],[-2,2]]
* 输出：5

提示：

1. points.length == n
2. 1 <= n <= 100
3. points[i].length == 2
4. -1000 <= points[i][0], points[i][1] <= 1000

* 来源：力扣（LeetCode）
* 链接：https://leetcode-cn.com/problems/minimum-time-visiting-all-points
* 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 访问所有点的最小时间
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x1 = points[i][0];
    const y1 = points[i][1];
    const x2 = points[i + 1][0];
    const y2 = points[i + 1][1];
    result += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }
  return result;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])); // 7
```

`node index.js` 返回：

```js
7
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 122/122 cases passed (72 ms)
* Your runtime beats 54.19 % of javascript submissions
* Your memory usage beats 84.66 % of javascript submissions (34.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

说难不难，说简单也简单（就是很简单）。

观察题目，注意以下几点：

1. 只能按照 `points` 顺序前行。
2. 只能按 米 字状一次移动一个。

已知有数组：`[[1, 1], [3, 4], [-1, 0]]`

那么，我们从 `[1, 1] => [3, 4]` 需要多久时间呢？

答案：4 - 1 = 3

那么，我们从 `[3, 4] => [-1, 0]` 需要多久时间呢？

答案：4 - 0 = 4 或者 3 - -1 = 4

小心求证大胆假设，按照这样的说法，我们是不是应该有公式：

* Math.max( | y2 - y1 |, | x2 - x1 |)

其中 || 为求绝对值，毕竟时间为正的。

所以，咱们小心求证试试：

> 找规律

```js
const minTimeToVisitAllPoints = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    result += Math.max(Math.abs(points[i + 1][0] - points[i][0]), Math.abs(points[i + 1][1] - points[i][1]));
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 122/122 cases passed (72 ms)
* Your runtime beats 54.19 % of javascript submissions
* Your memory usage beats 84.66 % of javascript submissions (34.7 MB)
```

OK，搞定完事~

为了方便好看点，**jsliang** 优化下：

> 找规律【优化】

```js
const minTimeToVisitAllPoints = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x1 = points[i][0];
    const y1 = points[i][1];
    const x2 = points[i + 1][0];
    const y2 = points[i + 1][1];
    result += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 122/122 cases passed (64 ms)
* Your runtime beats 88.37 % of javascript submissions
* Your memory usage beats 80.83 % of javascript submissions (34.7 MB)
```

OK，如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
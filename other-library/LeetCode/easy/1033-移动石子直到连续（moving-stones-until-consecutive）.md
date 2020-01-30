1033 - 移动石子直到连续（moving-stones-until-consecutive）
===

> Create by **jsliang** on **2020-01-30 14:26:42**  
> Recently revised in **2020-01-30 15:08:20**

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
* **涉及知识**：脑经急转弯
* **题目地址**：https://leetcode-cn.com/problems/moving-stones-until-consecutive/
* **题目内容**：

```
三枚石子放置在数轴上，
位置分别为 a，b，c。

每一回合，
我们假设这三枚石子当前分别位于位置 x, y, z，
且 x < y < z。
从位置 x 或者是位置 z 拿起一枚石子，
并将该石子移动到某一整数位置 k 处，
其中 x < k < z 且 k != y。

当你无法进行任何移动时，
即，这些石子的位置连续时，游戏结束。

要使游戏结束，你可以执行的最小和最大移动次数分别是多少？
以长度为 2 的数组形式返回答案：
answer = [minimum_moves, maximum_moves]

示例 1：

输入：a = 1, b = 2, c = 5
输出：[1, 2]
解释：将石子从 5 移动到 4 再移动到 3，或者我们可以直接将石子移动到 3。

示例 2：

输入：a = 4, b = 3, c = 2
输出：[0, 0]
解释：我们无法进行任何移动。

提示：

1 <= a <= 100
1 <= b <= 100
1 <= c <= 100
a != b, b != c, c != a

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/moving-stones-until-consecutive
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 移动石子直到连续
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = (a, b, c) => {
  const sort = [a, b, c].sort((a, b) => a - b);
  [a, b, c] = [sort[0], sort[1], sort[2]];
  // 1. 开场天胡
  if (a + 1 === b && b + 1 === c) {
    return [0, 0];
  } else if (b - a <= 2 || c - b <= 2) { // 2. 挪动 1 个仔即可
    return [1, c - a - 2];
  } else { // 3. 需要挪动 2 个仔
    return [2, c - a - 2];
  }
};

console.log(numMovesStones(1, 2, 5)); // [1, 2]
console.log(numMovesStones(3, 5, 1)); // [1, 2]
```

`node index.js` 返回：

```js
[1, 2]
[1, 2]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 187/187 cases passed (64 ms)
* Your runtime beats 81.54 % of javascript submissions
* Your memory usage beats 71.19 % of javascript submissions (33.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

这个 Tag 打了个 **脑经急转弯**，我是有点措手不及，好像 200 多道题来第一次看到~

而且，坑爹的是它有个 `3 5 1`，提交之后我才发现并不是 `[x, y, z] = [a, b, c]`，而是给出 `a, b, c` 三个数你，你需要先自行排序！

> 脑筋急转弯

```js
const numMovesStones = (a, b, c) => {
  const sort = [a, b, c].sort((a, b) => a - b);
  [a, b, c] = [sort[0], sort[1], sort[2]];
  // 1. 开场天胡
  if (a + 1 === b && b + 1 === c) {
    return [0, 0];
  } else if (b - a <= 2 || c - b <= 2) { // 2. 挪动 1 个仔即可
    return [1, c - a - 2];
  } else { // 3. 需要挪动 2 个仔
    return [2, c - a - 2];
  }
};
```

OK，咱们聊聊做法：

1. 开场天胡的咱们就不多说了，一步都挪不动：`[1, 2, 3]`。这种情况是 `a + 1 = b, b + 1 = c`。
2. 开场地胡的咱们至少可以移动一次，就是：`[1, 3, 4]`。这种情况是 `b - a <= 2, c - b <= 2`。
3. 开场啥都不胡（非酋你好）的咱们辛苦下，至少移动两次，类似：`[1, 5, 8]`。这种情况就排除其他两种情况即可。
4. 那么最多移动多少次？以 `b` 为固定点，结果是：`(b - a - 1) + (c - b - 1)`，所以就是 `c - a - 2` 了。

Submit 提交：

```js
Accepted
* 187/187 cases passed (64 ms)
* Your runtime beats 81.54 % of javascript submissions
* Your memory usage beats 71.19 % of javascript submissions (33.7 MB)
```

OK，搞定完事~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
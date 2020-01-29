999 - 车的可用捕货量（available-captures-for-rook）
===

> Create by **jsliang** on **2020-01-29 11:32:54**  
> Recently revised in **2020-01-29 12:31:46**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/available-captures-for-rook/
* **题目内容**：

在一个 8 x 8 的棋盘上，有一个白色车（rook）。

也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。

它们分别以字符 “R”，“.”，“B” 和 “p” 给出。

大写字符表示白棋，小写字符表示黑棋。

车按国际象棋中的规则移动：

它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。

另外，车不能与其他友方（白色）象进入同一个方格。

返回车能够在一次移动中捕获到的卒的数量。

---

示例 1：

![图](../../../public-repertory/img/other-algorithm-999-1.png)

输入：

```
[
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
]
```

输出：3

解释：在本例中，车能够捕获所有的卒。

---

示例 2：

![图](../../../public-repertory/img/other-algorithm-999-2.png)

输入：

```
[
  [".",".",".",".",".",".",".","."],
  [".","p","p","p","p","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","B","R","B","p",".","."],
  [".","p","p","B","p","p",".","."],
  [".","p","p","p","p","p",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
]
```

输出：0

解释：象阻止了车捕获任何卒。

---

示例 3：

![图](../../../public-repertory/img/other-algorithm-999-3.png)

输入：

```
[
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  ["p","p",".","R",".","p","B","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","B",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
]
```

输出：3

解释： 车可以捕获位置 b5，d6 和 f5 的卒。

提示：

board.length == board[i].length == 8
board[i][j] 可以是 'R'，'.'，'B' 或 'p'
只有一个格子上存在 board[i][j] == 'R'

```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/available-captures-for-rook
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 车的可用捕获量
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = (board) => {
  // 1. 找到车的位置
  let RPoint = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        RPoint = [i, j];
      }
    }
  }
  // 2. 统计次数
  let time = 0;
  // 2.1 往上走
  for (let j = RPoint[1]; j >= 0; j--) {
    if (board[RPoint[0]][j] === 'B') {
      break;
    }
    if (board[RPoint[0]][j] === 'p') {
      time ++;
      break;
    }
  }
  // 2.2 往下走
  for (let j = RPoint[1]; j < 8; j++) {
    if (board[RPoint[0]][j] === 'B') {
      break;
    }
    if (board[RPoint[0]][j] === 'p') {
      time ++;
      break;
    }
  }
  // 2.3 往左走
  for (let i = RPoint[0]; i >= 0; i--) {
    if (board[i][RPoint[1]] === 'B') {
      break;
    }
    if (board[i][RPoint[1]] === 'p') {
      time ++;
      break;
    }
  }
  // 2.4 往右走
  for (let i = RPoint[0]; i < 8; i++) {
    if (board[i][RPoint[1]] === 'B') {
      break;
    }
    if (board[i][RPoint[1]] === 'p') {
      time ++;
      break;
    }
  }
  return time;
};

console.log(numRookCaptures(
  [
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","R",".",".",".","p"],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
  ]
)); // 3

console.log(numRookCaptures(
  [
    [".",".",".",".",".",".",".","."],
    [".","p","p","p","p","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","B","R","B","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","p","p","p","p",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
  ]
)); // 0

console.log(numRookCaptures(
  [
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    ["p","p",".","R",".","p","B","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","B",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."],
  ]
)); // 3
```

`node index.js` 返回：

```js
3
0
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 22/22 cases passed (88 ms)
* Your runtime beats 11.43 % of javascript submissions
* Your memory usage beats 72.34 % of javascript submissions (33.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

贵圈真乱，我要捋捋：

* 车 - R
* 空白 - .
* 象 - B
* 小兵 - p

> 大写表示自家人，小写表示敌方

然后，没下过国际象棋，所以稍微理解了下：

* 车能捕获所有在同一横排或者同一纵排的所有兵

> 不知道是不是除了兵外还可以捕获皇后之类的

简单来说，神挡杀神，佛挡杀佛，狠起来连队友也杀……enm...这道题不行。

【关键点 1】车可以捕获所有同一横排或者统一纵排的兵，但是碰到自己队友拦路，就行不通了。

就好比曹操败走华容道，关羽挡住了，你总不能把关羽先干掉再杀向曹操吧~

【关键点 2】还有就是，一次只能捕获一个：

```
兵1 兵2 车 兵3 兵4
```

就好比这样，只能捕获 兵2 和 兵3。

废话那么多，开始破解：

> 暴力破解

```js
const numRookCaptures = (board) => {
  // 1. 找到车的位置
  let RPoint = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        RPoint = [i, j];
      }
    }
  }
  // 2. 统计次数
  let time = 0;
  // 2.1 往上走
  for (let j = RPoint[1]; j >= 0; j--) {
    if (board[RPoint[0]][j] === 'B') {
      break;
    }
    if (board[RPoint[0]][j] === 'p') {
      time ++;
      break;
    }
  }
  // 2.2 往下走
  for (let j = RPoint[1]; j < 8; j++) {
    if (board[RPoint[0]][j] === 'B') {
      break;
    }
    if (board[RPoint[0]][j] === 'p') {
      time ++;
      break;
    }
  }
  // 2.3 往左走
  for (let i = RPoint[0]; i >= 0; i--) {
    if (board[i][RPoint[1]] === 'B') {
      break;
    }
    if (board[i][RPoint[1]] === 'p') {
      time ++;
      break;
    }
  }
  // 2.4 往右走
  for (let i = RPoint[0]; i < 8; i++) {
    if (board[i][RPoint[1]] === 'B') {
      break;
    }
    if (board[i][RPoint[1]] === 'p') {
      time ++;
      break;
    }
  }
  return time;
};
```

这应该是比较暴力的一种方法了，我不管你什么规则，只要在我暴力破解涉及的范围内，我都可以搞出来~

篇幅限制，这里就不翻看题解区和评论区了。

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
1275 - 找出井字棋的获胜者（find-winner-on-a-tic-tac-toe-game）
===

> Create by **jsliang** on **2020-02-01 16:41:01**  
> Recently revised in **2020-02-01 17:16:03**

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
* **题目地址**：https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/
* **题目内容**：

```
A 和 B 在一个 3 x 3 的网格上玩井字棋。

井字棋游戏的规则如下：

玩家轮流将棋子放在空方格 (" ") 上。

第一个玩家 A 总是用 "X" 作为棋子，
而第二个玩家 B 总是用 "O" 作为棋子。

"X" 和 "O" 只能放在空方格中，
而不能放在已经被占用的方格上。

只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，
游戏结束。

如果所有方块都放满棋子（不为空），游戏也会结束。

游戏结束后，棋子无法再进行任何移动。

给你一个数组 moves，
其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），
它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。

如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；
如果游戏以平局结束，则返回 "Draw"；
如果仍会有行动（游戏未结束），则返回 "Pending"。

你可以假设 moves 都 有效（遵循井字棋规则），
网格最初是空的，A 将先行动。

示例 1：

输入：moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
输出："A"
解释："A" 获胜，他总是先走。
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"

示例 2：
输入：moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
输出："B"
解释："B" 获胜。
"X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
"   " -> " O " -> " O " -> " O " -> "XO " -> "XO " 
"   "    "   "    "   "    "   "    "   "    "O  "

示例 3：

输入：moves = [
  [0,0],[1,1],[2,0],
  [1,0],[1,2],[2,1],
  [0,1],[0,2],[2,2]
]
输出："Draw"
输出：由于没有办法再行动，游戏以平局结束。
"XXO"
"OOX"
"XOX"

示例 4：

输入：moves = [[0,0],[1,1]]
输出："Pending"
解释：游戏还没有结束。
"X  "
" O "
"   "

提示：

1 <= moves.length <= 9
moves[i].length == 2
0 <= moves[i][j] <= 2
moves 里没有重复的元素。
moves 遵循井字棋的规则。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 判断矩阵
 * @param {*} matrix 需要判断的矩阵
 */
const judge = (matrix) => {
  const [
    p1, p2, p3,
    p4, p5, p6,
    p7, p8, p9,
  ] = [
    matrix[0][0], matrix[0][1], matrix[0][2],
    matrix[1][0], matrix[1][1], matrix[1][2],
    matrix[2][0], matrix[2][1], matrix[2][2],
  ]
  // 1. 判断横排
  if (p1 === p2 && p2 === p3) {
    return p1;
  } else if (p4 === p5 && p5 === p6) {
    return p4;
  } else if (p7 === p8 && p8 === p9) {
    return p7;
  }
  // 2. 判断竖排
  if (p1 === p4 && p4 === p7) {
    return p1;
  } else if (p2 === p5 && p5 === p8) {
    return p2;
  } else if (p3 === p6 && p6 === p9) {
    return p3;
  }
  // 3. 判断斜排
  if (p1 === p5 && p5 === p9) {
    return p1;
  } else if (p3 === p5 && p5 === p7) {
    return p3;
  }
  return 'Draw'; // 无结局
};

/**
 * @name 找出井字棋的获胜者
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = (moves) => {
  // 1. 填充九宫格为 NaN，NaN !== NaN
  const matrix = Array.from(Array(3), () => Array.from(Array(3), () => NaN));
  // 2. 遍历 moves 命令进行填充
  for (let i = 0; i < moves.length; i++) {
    const x = moves[i][0];
    const y = moves[i][1];
    if (i % 2 === 0) {
      matrix[x][y] = 'A';
    } else {
      matrix[x][y] = 'B';
    }
  }
  // 3. 返回最终结果
  const result = judge(matrix);
  if (moves.length < 9 && result === 'Draw') {
    return 'Pending';
  } else {
    return result;
  }
};

console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]])); // 'A'
```

`node index.js` 返回：

```js
'A'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 100/100 cases passed (64 ms)
* Your runtime beats 76.38 % of javascript submissions
* Your memory usage beats 54.17 % of javascript submissions (33.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

这道题，在我编写五子棋的游戏中也碰到过。

当初老师教的是暴力编写，所以你懂的：

> 暴力破解

```js
/**
 * @name 判断矩阵
 * @param {*} matrix 需要判断的矩阵
 */
const judge = (matrix) => {
  const [
    p1, p2, p3,
    p4, p5, p6,
    p7, p8, p9,
  ] = [
    matrix[0][0], matrix[0][1], matrix[0][2],
    matrix[1][0], matrix[1][1], matrix[1][2],
    matrix[2][0], matrix[2][1], matrix[2][2],
  ]
  // 1. 判断横排
  if (p1 === p2 && p2 === p3) {
    return p1;
  } else if (p4 === p5 && p5 === p6) {
    return p4;
  } else if (p7 === p8 && p8 === p9) {
    return p7;
  }
  // 2. 判断竖排
  if (p1 === p4 && p4 === p7) {
    return p1;
  } else if (p2 === p5 && p5 === p8) {
    return p2;
  } else if (p3 === p6 && p6 === p9) {
    return p3;
  }
  // 3. 判断斜排
  if (p1 === p5 && p5 === p9) {
    return p1;
  } else if (p3 === p5 && p5 === p7) {
    return p3;
  }
  return 'Draw'; // 无结局
};

/**
 * @name 找出井字棋的获胜者
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = (moves) => {
  // 1. 填充九宫格为 NaN，NaN !== NaN
  const matrix = Array.from(Array(3), () => Array.from(Array(3), () => NaN));
  // 2. 遍历 moves 命令进行填充
  for (let i = 0; i < moves.length; i++) {
    const x = moves[i][0];
    const y = moves[i][1];
    if (i % 2 === 0) {
      matrix[x][y] = 'A';
    } else {
      matrix[x][y] = 'B';
    }
  }
  // 3. 返回最终结果
  const result = judge(matrix);
  if (moves.length < 9 && result === 'Draw') {
    return 'Pending';
  } else {
    return result;
  }
};
```

步骤如下：

1. 设计九宫格元素都为 `NaN`。这里需要强调的是，我们设置 `NaN` 是因为 `NaN !== NaN`。
2. 遍历 `moves` 命令，对矩阵 `matrix` 进行填充。这里需要注意的是，我们填充 `'A'` 或者 `'B'`，并不需要最后再判断是 `'X'`/`'O'`。
3. 然后就是通过 `judge` 方法暴力判断矩形，分别列举横排、竖排和斜排的情况即可。
4. 最后就是 `Draw` 状态和 `Pending` 状态需要进行区分。

搞定收工，Submit 提交：

```js
Accepted
* 100/100 cases passed (64 ms)
* Your runtime beats 76.38 % of javascript submissions
* Your memory usage beats 54.17 % of javascript submissions (33.9 MB)
```

当然，如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
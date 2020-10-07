036 - 有效的数独（valid-sudoku）
===

> Create by **jsliang** on **2019-08-05 10:22:26**  
> Recently revised in **2019-09-18 14:15:52**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：中等
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/valid-sudoku/
* **题目内容**：

判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。

数字 1-9 在每一列只能出现一次。

数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

![图](../../../public-repertory/img/other-algorithm-036-1.png)

上图是一个部分填充的有效的数独。

数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:

输入:

```
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
```

输出: true
示例 2:

输入:

```
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
```

输出: false

解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     
但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

**说明**：

一个有效的数独（部分已被填充）不一定是可解的。

只需要根据以上规则，验证已经填入的数字是否有效即可。

给定数独序列只包含数字 1-9 和字符 '.' 。

给定数独永远是 9x9 形式的。

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
let map = new Map();

// 计算横排
const calculateHorizontalRow = (board) => {
  map.clear();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
    map.clear();
  }
  map.clear();
  return true;
}

// 计算纵排
const calculateTandem = (board) => {
  map.clear();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.' && map.get(board[j][i])) {
        return false;
      }
      map.set(board[j][i], 1);
    }
    map.clear();
  }
  map.clear();
  return true;
}

// 小九宫格计算
const calculateTheNineSquares = (a, b, c, d, board) => {
  map.clear();
  for (let i = a; i < b; i++) {
    for (let j = c; j < d; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  return true;
}

const isValidSudoku = (board) => {
  /**
   * 计算横排
   * board - 需要判断的数独
   */
  if (!calculateHorizontalRow(board)) {
    return false;
  };
  /**
   * 计算纵排
   * board - 需要判断的数独
   */
  if (!calculateTandem(board)) {
    return false;
  };
  /**
   * 计算 3 * 3 宫格
   * a - 横排起始位置
   * b - 横排截止位置
   * c - 纵排起始位置
   * d - 纵排截止位置
   * board - 需要判断的数独
   */
  // 左上角
  if (!calculateTheNineSquares(0, 3, 0, 3, board) ) {
    return false;
  };
  // 中上角
  if (!calculateTheNineSquares(0, 3, 3, 6, board)) {
    return false;
  }
  // 右上角
  if (!calculateTheNineSquares(0, 3, 6, 9, board)) {
    return false;
  }
  // 左中角
  if (!calculateTheNineSquares(3, 6, 0, 3, board)) {
    return false;
  }
  // 中间
  if (!calculateTheNineSquares(3, 6, 3, 6, board)) {
    return false;
  }
  // 右中角
  if (!calculateTheNineSquares(3, 6, 6, 9, board)) {
    return false;
  }
  // 左下角
  if (!calculateTheNineSquares(6, 9, 0, 3, board)) {
    return false;
  }
  // 中下角
  if (!calculateTheNineSquares(6, 9, 3, 6, board)) {
    return false;
  }
  // 右下角
  if (!calculateTheNineSquares(6, 9, 6, 9, board)) {
    return false;
  }
  return true;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `board`：

```js
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
```

* `return`：

```js
true
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 504/504 cases passed (152 ms)
  ✔ Your runtime beats 27.62 % of javascript submissions
  ✔ Your memory usage beats 36.7 % of javascript submissions (38.4 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Map/README.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，看到这道题，就觉得很有意思。

如果你是科班毕业（跟着老教授学过 C、C++ 等），那么你应该做过那道 **99 乘法表** 题目，知道双重 `for()` 暴力输出的快乐。

如果你没做过，没事儿，咱这里玩玩（做过的可以跳过，或者看看预热）。

```js
let result = [];

for (let i = 1; i <= 9; i++) {
  let temp = [];
  for (let j = i; j <= 9; j++) {
    temp.push(`${i} * ${j} = ${i * j}`);
  }
  result.push(temp);
}

console.log(result);
```

打印出来非常好看：

```js
['1 * 1 = 1',  '1 * 2 = 2',  '1 * 3 = 3',  '1 * 4 = 4',  '1 * 5 = 5',  '1 * 6 = 6',  '1 * 7 = 7',  '1 * 8 = 8',  '1 * 9 = 9']
['2 * 2 = 4',  '2 * 3 = 6',  '2 * 4 = 8',  '2 * 5 = 10', '2 * 6 = 12', '2 * 7 = 14', '2 * 8 = 16', '2 * 9 = 18']
['3 * 3 = 9',  '3 * 4 = 12', '3 * 5 = 15', '3 * 6 = 18', '3 * 7 = 21', '3 * 8 = 24', '3 * 9 = 27']
['4 * 4 = 16', '4 * 5 = 20', '4 * 6 = 24', '4 * 7 = 28', '4 * 8 = 32', '4 * 9 = 36']
['5 * 5 = 25', '5 * 6 = 30', '5 * 7 = 35', '5 * 8 = 40', '5 * 9 = 45']
['6 * 6 = 36', '6 * 7 = 42', '6 * 8 = 48', '6 * 9 = 54']
['7 * 7 = 49', '7 * 8 = 56', '7 * 9 = 63']
['8 * 8 = 64', '8 * 9 = 72']
['9 * 9 = 81']
```

为什么会扯到这个呢，因为接下来需要双重 `for()` 遍历，怕小伙伴们看不懂。

话不多说，先上代码：

```js
var isValidSudoku = function (board) {
  let map = new Map();
  // 计算横排
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
    map.clear();
  }
  // 计算竖排
  map.clear();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.' && map.get(board[j][i])) {
        return false;
      }
      map.set(board[j][i], 1);
    }
    map.clear();
  }
  map.clear();
  // 计算 3 * 3 宫格
  for (let i = 0; i < 3; i++) { // 左上角
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 0; i < 3; i++) { // 中上角
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 0; i < 3; i++) { // 右上角
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 3; i < 6; i++) { // 左中角
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 3; i < 6; i++) { // 中间
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 3; i < 6; i++) { // 右中角
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 6; i < 9; i++) { // 左下角
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 6; i < 9; i++) { // 中下角
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  for (let i = 6; i < 9; i++) { // 右下角
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  return true;
};
```

思路是怎样的呢：

1. 设置 `Map`。 设置 `i` 为横坐标，`j` 为纵坐标。
2. 先计算横排。通过每次都校验 `board[i][j]` 是否存在，如果出现过且不是 `'.'`，那么它就构成不了数独。同时，每计算完一排，清空 `Map` 的数据。
3. 再计算纵排。相同于横排的计算，我们只需要把 `i` 和 `j` 的位置调换，就可以依次校验每纵排的数据，同时每次计算完一排，清空 `Map` 的数据。
4. 最后计算每个小九宫格。**jsliang** 一开始没想到好的形式，于是分为 9 个方位分别计算了。

**最后**，如果校验完毕，证明这个数独是可行的，返回 `false`。

**最后的最后**，如果小伙伴发现一个代码是冗余的，类似于 **jsliang** 在上面写的 9 个小宫格的计算，那么我们可以尝试将其提取出来：

```js
let map = new Map();

// 计算横排
const calculateHorizontalRow = (board) => {
  map.clear();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
    map.clear();
  }
  map.clear();
  return true;
}

// 计算纵排
const calculateTandem = (board) => {
  map.clear();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.' && map.get(board[j][i])) {
        return false;
      }
      map.set(board[j][i], 1);
    }
    map.clear();
  }
  map.clear();
  return true;
}

// 小九宫格计算
const calculateTheNineSquares = (a, b, c, d, board) => {
  map.clear();
  for (let i = a; i < b; i++) {
    for (let j = c; j < d; j++) {
      if (board[i][j] !== '.' && map.get(board[i][j])) {
        return false;
      }
      map.set(board[i][j], 1);
    }
  }
  map.clear();
  return true;
}

const isValidSudoku = (board) => {
  /**
   * 计算横排
   * board - 需要判断的数独
   */
  if (!calculateHorizontalRow(board)) {
    return false;
  };
  /**
   * 计算纵排
   * board - 需要判断的数独
   */
  if (!calculateTandem(board)) {
    return false;
  };
  /**
   * 计算 3 * 3 宫格
   * a - 横排起始位置
   * b - 横排截止位置
   * c - 纵排起始位置
   * d - 纵排截止位置
   * board - 需要判断的数独
   */
  // 左上角
  if (!calculateTheNineSquares(0, 3, 0, 3, board) ) {
    return false;
  };
  // 中上角
  if (!calculateTheNineSquares(0, 3, 3, 6, board)) {
    return false;
  }
  // 右上角
  if (!calculateTheNineSquares(0, 3, 6, 9, board)) {
    return false;
  }
  // 左中角
  if (!calculateTheNineSquares(3, 6, 0, 3, board)) {
    return false;
  }
  // 中间
  if (!calculateTheNineSquares(3, 6, 3, 6, board)) {
    return false;
  }
  // 右中角
  if (!calculateTheNineSquares(3, 6, 6, 9, board)) {
    return false;
  }
  // 左下角
  if (!calculateTheNineSquares(6, 9, 0, 3, board)) {
    return false;
  }
  // 中下角
  if (!calculateTheNineSquares(6, 9, 3, 6, board)) {
    return false;
  }
  // 右下角
  if (!calculateTheNineSquares(6, 9, 6, 9, board)) {
    return false;
  }
  return true;
};
```

提升还是有的：

```js
✔ Accepted
  ✔ 504/504 cases passed (120 ms)
  ✔ Your runtime beats 69.41 % of javascript submissions
  ✔ Your memory usage beats 70.16 % of javascript submissions (37.8 MB)
```

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

那么，还有没有其他方法呢？这里强烈推荐官方方法：

> https://leetcode-cn.com/problems/valid-sudoku/solution/you-xiao-de-shu-du-by-leetcode/

```java
class Solution {
  public boolean isValidSudoku(char[][] board) {
    // init data
    HashMap<Integer, Integer> [] rows = new HashMap[9];
    HashMap<Integer, Integer> [] columns = new HashMap[9];
    HashMap<Integer, Integer> [] boxes = new HashMap[9];
    for (int i = 0; i < 9; i++) {
      rows[i] = new HashMap<Integer, Integer>();
      columns[i] = new HashMap<Integer, Integer>();
      boxes[i] = new HashMap<Integer, Integer>();
    }

    // validate a board
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        char num = board[i][j];
        if (num != '.') {
          int n = (int)num;
          int box_index = (i / 3 ) * 3 + j / 3;

          // keep the current cell value
          rows[i].put(n, rows[i].getOrDefault(n, 0) + 1);
          columns[j].put(n, columns[j].getOrDefault(n, 0) + 1);
          boxes[box_index].put(n, boxes[box_index].getOrDefault(n, 0) + 1);

          // check if this value has been already seen before
          if (rows[i].get(n) > 1 || columns[j].get(n) > 1 || boxes[box_index].get(n) > 1)
            return false;
        }
      }
    }

    return true;
  }
}
```

* 时间复杂度：O(1)O(1)，因为我们只对 81 个单元格进行了一次迭代。
* 空间复杂度：O(1)O(1)。

翻译成 JavaScript 就是：

```js
const isValidSudoku = (board) => {
  let rows = new Map();
  let columns = new Map();
  let boxes = new Map();

  for (let i = 0; i < 9; i++) {
    rows.set(`rows${i}`, new Map());
    columns.set(`columns${i}`, new Map());
    boxes.set(`boxes${i}`, new Map());
  }

  for (let i = 0; i < 9; i++) {

    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') {
        continue;
      }
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      let row = rows.get(`rows${i}`);
      let col = columns.get(`columns${j}`);
      let box = boxes.get(`boxes${boxIndex}`);

      if (row.has(board[i][j]) || col.has(board[i][j]) || box.has(board[i][j])) {
        return false;
      } else {
        row.set(board[i][j], 1);
        col.set(board[i][j], 1);
        box.set(board[i][j], 1);
      }
    }
  }
  return true;
};
```

提交后：

```js
✔ Accepted
  ✔ 504/504 cases passed (112 ms)
  ✔ Your runtime beats 84.79 % of javascript submissions
  ✔ Your memory usage beats 26.62 % of javascript submissions (38.9 MB)
```

相信看得懂的就看得懂了，看不懂的也不会看链接也不会百度也不会问的了。^_^ 滑稽脸

那么这道题就这样子了。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
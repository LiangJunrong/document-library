874 - 模拟行走机器人（walking-robot-simulation）
===

> Create by **jsliang** on **2020-01-11 10:43:26**  
> Recently revised in **2020-01-11 14:01:10**

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
* **涉及知识**：贪心算法
* **题目地址**：https://leetcode-cn.com/problems/walking-robot-simulation/
* **题目内容**：

```
机器人在一个无限大小的网格上行走，
从点 (0, 0) 处开始出发，
面向北方。

该机器人可以接收以下三种类型的命令：
-2：向左转 90 度
-1：向右转 90 度
1 <= x <= 9：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物。

第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

如果机器人试图走到障碍物上方，
那么它将停留在障碍物的前一个网格方块上，
但仍然可以继续该路线的其余部分。

返回从原点到机器人的最大欧式距离的平方。

示例 1：

输入: commands = [4,-1,3], obstacles = []
输出: 25
解释: 机器人将会到达 (3, 4)
示例 2：

输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
输出: 65
解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处

提示：

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
答案保证小于 2 ^ 31
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 模拟行走机器人
 * @description 指令：
 * -2：向左转 90°
 * -1：向右转 90°
 * 1 <= x <= 9：向前移动 x 个单位
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
  var dx = [0, 1, 0, -1];
  var dy = [1, 0, -1, 0];
  var di = 0;
  var endX = 0;
  var endY = 0;
  var result = 0;
  var hashObstacle = {};
  for (var r = 0; r < obstacles.length; r++) {
    hashObstacle[obstacles[r][0] + '-' + obstacles[r][1]] = true;
  }
  for (var s = 0; s < commands.length; s++) {
    if (commands[s] == -2) {
      di = (di + 3) % 4;
    } else if (commands[s] == -1) {
      di = (di + 1) % 4;
    } else {
      // 每次走一步
      for (var z = 1; z <= commands[s]; z++) {
        var nextX = endX + dx[di];
        var nextY = endY + dy[di];
        // 判断下一步是否为障碍物
        if (hashObstacle[nextX + '-' + nextY]) {
          break;
        }
        endX = nextX;
        endY = nextY;
        result = Math.max(result, endX * endX + endY * endY);
      }
    }
  }
  return result;
};

// console.log(robotSim([4, -1, 3], [])); // 25
// console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]])); // 65
// console.log(robotSim(
//   [-2, 8, 3, 7, -1],
//   [
//     [-4, -1],
//     [1, -1],
//     [1, 4],
//     [5, 0],
//     [4, 5],
//     [-2, -1],
//     [2, -5],
//     [5, 1],
//     [-3, -1],
//     [5, -3]
//   ]
// )); // 324
console.log(robotSim(
  [-2, -1, 8, 9, 6],
  [
    [-1, 3],
    [0, 1],
    [-1, 5],
    [-2, -4],
    [5, 4],
    [-2, -3],
    [5, -1],
    [1, -1],
    [5, 5],
    [5, 2]
  ]
)); // 0
```

`node index.js` 返回：

```js
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 47/47 cases passed (220 ms)
* Your runtime beats 44.64 % of javascript submissions
* Your memory usage beats 36.36 % of javascript submissions (56.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

崩溃题目：

> 错误解法

```js
/**
 * @name 模拟行走机器人
 * @description 指令：
 * -2：向左转 90°
 * -1：向右转 90°
 * 1 <= x <= 9：向前移动 x 个单位
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
  // 机器人当前位置
  let position = [0, 0];
  // 机器人面朝：east - 东；west - 西；south - 南；north - 北
  let flag = 'north';
  for (let i = 0; i < commands.length; i++) {
    if (flag === 'north') {
      if (commands[i] === -2) {
        flag = 'west';
      } else if (commands[i] === -1) {
        flag = 'east';
      } else {
        let min = 30001;
        // 碰撞检测
        for (let j = 0; j < obstacles.length; j++) {
          if (obstacles[j][0] === position[0] && obstacles[j][1] > position[1] && position[1] + commands[i] >= obstacles[j][1]) {
            min = Math.min(min, obstacles[j][1]);
          }
        }
        if (min !== 30001) {
          position[1] = min - 1;
        } else {
          position[1] += commands[i];
        }
      }
    } else if (flag === 'east') {
      if (commands[i] === -2) {
        flag = 'north';
      } else if (commands[i] === -1) {
        flag = 'south';
      } else {
        let min = 30001;
        // 碰撞检测
        for (let j = 0; j < obstacles.length; j++) {
          if (obstacles[j][1] === position[1] && obstacles[j][0] > position[0] && position[0] + commands[i] >= obstacles[j][0]) {
            min = Math.min(min, obstacles[j][0]);
          }
        }
        if (min !== 30001) {
          position[0] = min - 1;
        } else {
          position[0] += commands[i];
        }
      }
    } else if (flag === 'south') {
      if (commands[i] === -2) {
        flag = 'east';
      } else if (commands[i] === -1) {
        flag = 'west';
      } else {
        let max = -30001;
        // 碰撞检测
        for (let j = 0; j < obstacles.length; j++) {
          if (obstacles[j][0] === position[0] && obstacles[j][1] < position[1] && position[1] - commands[i] <= obstacles[j][1]) {
            max = Math.max(max, obstacles[j][1]);
          }
        }
        if (max !== -30001) {
          position[1] = max + 1;
        } else {
          position[1] -= commands[i];
        }
      }
    } else if (flag === 'west') {
      if (commands[i] === -2) {
        flag = 'south';
      } else if (commands[i] === -1) {
        flag = 'north';
      } else {
        let max = -30001;
        // 碰撞检测
        for (let j = 0; j < obstacles.length; j++) {
          if (obstacles[j][1] === position[1] && obstacles[j][0] < position[0] && position[0] - commands[i] <= obstacles[j][0]) {
            max = Math.max(max, obstacles[j][0]);
          }
        }
        if (max !== -30001) {
          position[0] = max + 1;
        } else {
          position[0] -= commands[i];
        }
      }
    }
  }
  return Math.pow(Math.abs(position[0]), 2) + Math.pow(Math.abs(position[1]), 2);
};
```

测了几条，然后在：

```js
[1,2,-2,5,-1,-2,-1,...省略 n 个,-2,-1,1,4,7]
[[-57,-58],[-72,91],[-55,35],...省略 n 个,[24,-10]]
```

Submit 提交：

```js
Answer
1138

Expected Answer
5140
```

enm...望天长叹，看答案：

```js
const robotSim = (commands, obstacles) => {
  var dx = [0, 1, 0, -1];
  var dy = [1, 0, -1, 0];
  var di = 0;
  var endX = 0;
  var endY = 0;
  var result = 0;
  var hashObstacle = {};
  for (var r = 0; r < obstacles.length; r++) {
    hashObstacle[obstacles[r][0] + '-' + obstacles[r][1]] = true;
  }
  for (var s = 0; s < commands.length; s++) {
    if (commands[s] == -2) {
      di = (di + 3) % 4;
    } else if (commands[s] == -1) {
      di = (di + 1) % 4;
    } else {
      // 每次走一步
      for (var z = 1; z <= commands[s]; z++) {
        var nextX = endX + dx[di];
        var nextY = endY + dy[di];
        // 判断下一步是否为障碍物
        if (hashObstacle[nextX + '-' + nextY]) {
          break;
        }
        endX = nextX;
        endY = nextY;
        result = Math.max(result, endX * endX + endY * endY);
      }
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 47/47 cases passed (220 ms)
* Your runtime beats 44.64 % of javascript submissions
* Your memory usage beats 36.36 % of javascript submissions (56.7 MB)
```

无奈中……

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
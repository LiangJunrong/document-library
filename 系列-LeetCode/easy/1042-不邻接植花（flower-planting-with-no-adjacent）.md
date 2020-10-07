1042 - 不邻接植花（flower-planting-with-no-adjacent）
===

> Create by **jsliang** on **2020-01-30 16:59:45**  
> Recently revised in **2020-01-30 20:52:47**

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
* **涉及知识**：图
* **题目地址**：https://leetcode-cn.com/problems/flower-planting-with-no-adjacent/
* **题目内容**：

```
有 N 个花园，按从 1 到 N 标记。

在每个花园中，你打算种下四种花之一。

paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。

另外，没有花园有 3 条以上的路径可以进入或者离开。

你需要为每个花园选择一种花，
使得通过路径相连的任何两个花园中的花的种类互不相同。

以数组形式返回选择的方案作为答案 answer，
其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。
花的种类用  1, 2, 3, 4 表示。

保证存在答案。

示例 1：

输入：N = 3, paths = [[1,2],[2,3],[3,1]]
输出：[1,2,3]

示例 2：

输入：N = 4, paths = [[1,2],[3,4]]
输出：[1,2,1,2]

示例 3：

输入：N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
输出：[1,2,3,4]

提示：

1 <= N <= 10000
0 <= paths.size <= 20000
不存在花园有 4 条或者更多路径可以进入或离开。
保证存在答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flower-planting-with-no-adjacent
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 不邻接植花
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = (N, paths) => {
  // 1. 构造通道，索引 0 对应花园 1
  const gardenPath = Array.from(Array(N), () => []);
  
  // 2. 填充数据
  for (let i = 0; i < paths.length; i++) {
    gardenPath[paths[i][0] - 1].push(paths[i][1]);
    gardenPath[paths[i][1] - 1].push(paths[i][0]);
  }
  
  // 3. 开始挖坑，拿好花种
  const result = Array.from(Array(N), () => '');
  const flowers = [1, 2, 3, 4];

  // 4. 开始填坑
  for (let i = 0; i < gardenPath.length; i++) {
    const path = gardenPath[i].map(item => result[item - 1]);
    const canUse = Array.from(new Set([...flowers].filter(item => !path.includes(item))));
    result[i] = canUse[0];
  }

  // 5. 去掉没用的坑
  return result;
};

console.log(gardenNoAdj(3, [[1, 2], [2, 3], [3, 1]])); // [1, 2, 3]
console.log(gardenNoAdj(3, [[2, 3], [1, 3], [2, 1]])); // [1, 2, 3]

console.log(gardenNoAdj(4, [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]])); // [1, 2, 3, 4]
console.log(gardenNoAdj(4, [[1, 2], [3, 4]])); // [1, 2, 1, 2]
console.log(gardenNoAdj(4, [[1, 2], [3, 4], [3, 2], [4, 2], [1, 4]])); // [1, 2, 1, 3]

console.log(gardenNoAdj(5, [[4, 1], [4, 2], [4, 3], [2, 5], [1, 2], [1, 5]])); // [1, 2, 1, 3, 3]

console.log(gardenNoAdj(6, [[1, 2], [1, 4], [2, 4], [3, 4], [2, 6], [6, 1]])); // [1, 2, 1, 3, 1, 3]
```

`node index.js` 返回：

```js
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 1, 2 ]
[ 1, 2, 1, 3 ]
[ 1, 2, 1, 3, 3 ]
[ 1, 2, 1, 3, 1, 3 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 51/51 cases passed (240 ms)
* Your runtime beats 16.67 % of javascript submissions
* Your memory usage beats 16.67 % of javascript submissions (73.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

有时候 LeetCode 题目的描述令人诟病，你是知道的：

* 没有花园有 3 条以上的路径可以进入或者离开。
* 不存在花园有 4 条或者更多路径可以进入或离开。

那就是不存在 [4, n) 路径了。

……

> FBI warning：这道题是中等难度，LeetCode 放到简单难度就是想折腾你

……

经过近 3 小时的折腾，终于搞出套路：

> 暴力破解【未简化】

```js
const gardenNoAdj = (N, paths) => {
  // 1. 构造通道
  const gardenMap = Array.from(Array(N), (value, index) => {
    return {
      garden: index + 1,
      path: [],
    };
  });
  
  // 2. 填充数据
  for (let i = 0; i < paths.length; i++) {
    gardenMap[paths[i][0] - 1].path.push(paths[i][1]);
    gardenMap[paths[i][1] - 1].path.push(paths[i][0]);
  }
  
  // 3. 开始挖坑，拿好花种
  const result = Array.from(Array(N + 1), () => '');
  const flowers = [1, 2, 3, 4];

  // 4. 开始填坑
  for (let i = 0; i < gardenMap.length; i++) {
    const values = [];
    for (let j = 0; j < gardenMap[i].path.length; j++) {
      const k = gardenMap[i].path[j];
      values.push(result[k]);
    }
    const canUse = Array.from(new Set([...flowers].filter(x => !values.includes(x))));
    result[i + 1] = canUse[0];
  }

  // 5. 去掉没用的坑
  result.shift();
  return result;
};
```

拿 `[[1, 2], [1, 4], [2, 4], [3, 4], [2, 6], [6, 1]]` 分析：

**首先**，步骤 1 + 步骤 2，生成数据：

```js
[
  { garden: 1, path: [ 2, 4, 6 ] },
  { garden: 2, path: [ 1, 4, 6 ] },
  { garden: 3, path: [ 4 ] },
  { garden: 4, path: [ 1, 2, 3 ] },
  { garden: 5, path: [] },
  { garden: 6, path: [ 2, 1 ] },
]
```

这时候我们知道，哪个花园可以通向哪个花园。

**然后**，我们开始挖坑和设置花种：

```js
['', '', '', '', '', '', '']
[1, 2, 3, 4]
```

需要注意的是，为了保持索引的一致性，这里我们加了个表示 0 的坑，最后会通过 `result.shift()` 清空掉。

**接着**，开始填坑：

```
1 => ['', 1, '', '', '', '', '']
2 => ['', 1,  2, '', '', '', '']
3 => ['', 1,  2,  1, '', '', '']
4 => ['', 1,  2,  1,  3, '', '']
5 => ['', 1,  2,  1,  3,  1, '']
6 => ['', 1,  2,  1,  3,  1,  1]
```

可以看到，我们通过 `values` 获取了当前花园通向其他花园的值，然后我们通过 `canUse` 取 `values` 和 `flowers` 的差集，表明我们剩余可用的花种有多少。

这时候，知道剩余可用花种，我们用第一种就行了。

**最后**，通过 `result.shift()` 把第一个坑去掉，就是我们的结果。

Submit 提交：

```js
Accepted
* 51/51 cases passed (324 ms)
* Your runtime beats 7.14 % of javascript submissions
* Your memory usage beats 13.33 % of javascript submissions (76.1 MB)
```

当然，为了代码的条理性，我们编写了一些无用代码，**jsliang** 整理下：

> 暴力破解【简化】

```js
const gardenNoAdj = (N, paths) => {
  // 1. 构造通道，索引 0 对应花园 1
  const gardenPath = Array.from(Array(N), () => []);
  
  // 2. 填充数据
  for (let i = 0; i < paths.length; i++) {
    gardenPath[paths[i][0] - 1].push(paths[i][1]);
    gardenPath[paths[i][1] - 1].push(paths[i][0]);
  }
  
  // 3. 开始挖坑，拿好花种
  const result = Array.from(Array(N), () => '');
  const flowers = [1, 2, 3, 4];

  // 4. 开始填坑
  for (let i = 0; i < gardenPath.length; i++) {
    const path = gardenPath[i].map(item => result[item - 1]);
    const canUse = Array.from(new Set([...flowers].filter(item => !path.includes(item))));
    result[i] = canUse[0];
  }

  // 5. 去掉没用的坑
  return result;
};
```

Submit 提交：

```js
Accepted
* 51/51 cases passed (240 ms)
* Your runtime beats 16.67 % of javascript submissions
* Your memory usage beats 16.67 % of javascript submissions (73.5 MB)
```

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
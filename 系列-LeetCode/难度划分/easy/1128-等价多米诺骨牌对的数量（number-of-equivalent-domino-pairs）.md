1128 - 等价多米诺骨牌对的数量（number-of-equivalent-domino-pairs）
===

> Create by **jsliang** on **2020-01-31 13:49:41**  
> Recently revised in **2020-01-31 14:25:01**

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
* **题目地址**：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/
* **题目内容**：

```
给你一个由一些多米诺骨牌组成的列表 dominoes。

如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度，
得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d]，
等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。

在 0 <= i < j < dominoes.length 的前提下，
找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例：

输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
 

提示：

1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 等价多米诺骨牌对的数量
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = (dominoes) => {
  let result = 0;
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (
        (dominoes[i][0] === dominoes[j][0]
          && dominoes[i][1] === dominoes[j][1])
        ||
        (dominoes[i][0] === dominoes[j][1]
          && dominoes[i][1] === dominoes[j][0])
      ) {
        result++;
      }
    }
  }
  return result;
};

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])); // 1
```

`node index.js` 返回：

```js
1
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 19/19 cases passed (4596 ms)
* Your runtime beats 9.86 % of javascript submissions
* Your memory usage beats 93.22 % of javascript submissions (40.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

题目的意思很简单：

1. 给定一个数组 `dominoes`。
2. 假设其里面的值为 `[[1, 2], [2, 1], [1, 2], [1, 3]]`。
3. 那么 `[1, 2]` 和 `[2, 1]` 能构成多米诺骨牌，`[1, 2]`（第 1 个元素） 和 `[1, 2]`（第 3 个元素）也能构成多米诺骨牌。
4. 返回数组中能构成多米诺骨牌的对数。

那么 **jsliang** 表示有个疑问：`[[1, 2], [2, 1], [1, 2]]` 是不是能构成 3 对，还是说一个元素只能使用一次。

所以，尝试破解吧：

> 暴力破解

```js
const numEquivDominoPairs = (dominoes) => {
  let result = 0;
  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if (
        (dominoes[i][0] === dominoes[j][0]
          && dominoes[i][1] === dominoes[j][1])
        ||
        (dominoes[i][0] === dominoes[j][1]
          && dominoes[i][1] === dominoes[j][0])
      ) {
        result++;
      }
    }
  }
  return result;
};
```

完全按照题目意思做即可。

Submit 提交：

```js
Accepted
* 19/19 cases passed (4596 ms)
* Your runtime beats 9.86 % of javascript submissions
* Your memory usage beats 93.22 % of javascript submissions (40.7 MB)
```

那么，有没有法子优化呢？

咱们先观察下：

* 如果仅有一个时，不构成多米诺骨牌，所以为 0。
* 如果有两个时，构成 1 对。
* 如果有三个时，构成 3 对。
* ……
* 如果有 n 个时，构成 n(n - 1)/2 对。

表示为：

```
1 -> 0
2 -> 1
3 -> 3
4 -> 6
5 -> 10
6 -> 15
... -> ...
n -> n(n - 1)/2
```

OK，那这样就简单啦，可以利用下哈希表：

> 哈希表

```js
const numEquivDominoPairs = (dominoes) => {
  let result = 0;
  const map = new Map();
  for (let i = 0; i < dominoes.length; i++) {
    const now = `${Math.min(dominoes[i][0], dominoes[i][1])}${Math.max(dominoes[i][0], dominoes[i][1])}`;
    if (map.has(now)) {
      const time = map.get(now);
      result += time;
      map.set(now, map.get(now) + 1);
    } else {
      map.set(now, 1);
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 19/19 cases passed (76 ms)
* Your runtime beats 95.77 % of javascript submissions
* Your memory usage beats 59.32 % of javascript submissions (42.4 MB)
```

OK，又破解了一道题，嗨皮~

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
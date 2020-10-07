1103 - 分糖果（distribute-candies-to-people）
===

> Create by **jsliang** on **2020-01-31 12:16:06**  
> Recently revised in **2020-01-31 12:33:43**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/distribute-candies-to-people/
* **题目内容**：

```
排排坐，分糖果。

我们买了一些糖果 candies，
打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，
第二个小朋友 2 颗，依此类推，
直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，
给第一个小朋友 n + 1 颗糖果，
第二个小朋友 n + 2 颗，
依此类推，直到给最后一个小朋友 2 * n 颗糖果。

重复上述过程
（每次都比上一次多给出一颗糖果，
当到达队伍终点后再次从队伍起点开始），
直到我们分完所有的糖果。

注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），
这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，
以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。

示例 1：

输入：candies = 7, num_people = 4
输出：[1,2,3,1]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0,0]。
第三次，ans[2] += 3，数组变为 [1,2,3,0]。
第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），
最终数组变为 [1,2,3,1]。

示例 2：

输入：candies = 10, num_people = 3
输出：[5,2,3]
解释：
第一次，ans[0] += 1，数组变为 [1,0,0]。
第二次，ans[1] += 2，数组变为 [1,2,0]。
第三次，ans[2] += 3，数组变为 [1,2,3]。
第四次，ans[0] += 4，最终数组变为 [5,2,3]。

提示：

1 <= candies <= 10^9
1 <= num_people <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distribute-candies-to-people
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 分糖果II
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
  const result = Array.from(Array(num_people), () => 0);
  let candy = 0;
  while (candies) {
    for (let i = 0; i < num_people; i++) {
      candy++;
      if (candies - candy > 0) {
        result[i] += candy;
        candies -= candy;
      } else {
        result[i] += candies;
        candies = 0;
        break;
      }
    }
  }
  return result;
};

console.log(distributeCandies(7, 4)); // [ 1, 2, 3, 1 ]
```

`node index.js` 返回：

```js
[ 1, 2, 3, 1 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 27/27 cases passed (56 ms)
* Your runtime beats 95.28 % of javascript submissions
* Your memory usage beats 29.67 % of javascript submissions (34.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

挺喜欢这种新奇的题，能让人精神抖擞。

这道题的意思就好比刷墙，第一次刷地较淡，第二次再刷就用更浓的。

题目的意思是：

有小朋友 `num_people = 4`，那么就有数组 `['', '', '', '']`。

这时候开始派发糖果 `candies == 11`：

```
1 => [1, '', '', '']
2 => [1,  2, '', '']
3 => [1,  2,  3, '']
4 => [1,  2,  3,  4]
5 => [2,  2,  3,  4]
```

到了第五轮的时候，我们还剩 `11 - 1 - 2 - 3 - 4 = 1` 颗糖，所以第 1 个小朋友就有 `1 + 1 = 2` 颗糖了。

懂了题目意思，开始解题：

> 暴力破解

```js
const distributeCandies = (candies, num_people) => {
  const result = Array.from(Array(num_people), () => 0);
  let candy = 0;
  while (candies) {
    for (let i = 0; i < num_people; i++) {
      candy++;
      if (candies - candy > 0) {
        result[i] += candy;
        candies -= candy;
      } else {
        result[i] += candies;
        candies = 0;
        break;
      }
    }
  }
  return result;
};
```

按照题目要求，我们做了以下步骤：

1. 通过 `Array.from()` 生成一个长度为 `num_people` 的数组，数组元素全部为 0。
2. 设置当前糖果 `candy` 为 0。
3. 通过 `while()` 判断当前是否还剩糖果，如果不剩则终止循环。
4. 通过 `for()` 遍历，进行糖果的分配，如果当前糖果有剩余，那么我们就将 `candy` 分配给当前小朋友；如果当前糖果没剩余，那么我们就将 `candies` 都丢给当前小朋友，并告诉 `while()` 糖果没有了。

这样我们就解决了这道题。

Submit 提交：

```js
Accepted
* 27/27 cases passed (56 ms)
* Your runtime beats 95.28 % of javascript submissions
* Your memory usage beats 29.67 % of javascript submissions (34.6 MB)
```

如果小伙伴还有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
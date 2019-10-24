475 - 供暖器（heaters）
===

> Create by **jsliang** on **2019-10-24 09:37:30**  
> Recently revised in **2019-10-24 17:38:26**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题即测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 知识点](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：二分查找
* **题目地址**：https://leetcode-cn.com/problems/heaters/
* **题目内容**：

```
冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，
找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。

你将输出供暖器的最小加热半径。

说明:
给出的房屋和供暖器的数目是非负数且不会超过 25000。
给出的房屋和供暖器的位置均是非负数且不会超过 10^9。
只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
所有供暖器都遵循你的半径标准，加热的半径也一样。

示例 1:
输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。
如果我们将加热半径设为1，那么所有房屋就都能得到供暖。

示例 2:
输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。
我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
```

## <a name="chapter-three" id="chapter-three">三 解题及测试</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

```js
/**
 * @name 计算供暖器主方法
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = (houses, heaters) => {
  // 去除边界
  if (
    !houses.length
    || !heaters.length
    || houses.length > 25000
    || heaters.length > 25000
  ) {
    return 0;
  }
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < houses.length; i++) {
    let max = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < heaters.length; j++) {
      max = Math.min(max, Math.abs(houses[i] - heaters[j]));
    }
    result = Math.max(result, max);
  }
  return result;
};

// 测试组 1
const houses = [1, 5];
const heaters = [2];

// 测试组 2
// const houses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const heaters = [3, 8, 12];

console.log(findRadius(houses, heaters));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four">四 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
Accepted
* 30/30 cases passed (1596 ms)
* Your runtime beats 24.07 % of javascript submissions
* Your memory usage beats 94.12 % of javascript submissions (38.4 MB)
```

## <a name="chapter-five" id="chapter-five">五 知识点</a>

> [返回目录](#chapter-one)

1. `Number.MIN_SAFE_INTEGER`：JavaScript 中最小的安全的 integer 型数字。
2. `Number.Max_SAFE_INTEGER`：JavaScript 中最大的安全的 integer 型数字。
3. `Math.min`：取两者最小值
4. `Math.max`：取两者最大值
5. `Math.abs(number)`：取 `number` 的绝对值

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

业务繁忙，没啥心情就暴力吧~

暴力的优雅在于简单：通过双重 `for` 循环，判断每一座房子和每一个供暖器的距离。

1. 遍历房子的长度
2. 判断房子距离每个供暖器的距离，最短的就是距离房子最近的供暖器
3. 判断条件 2 的距离中最大的距离，因为我们需要覆盖所有的范围

这样，我们就暴力破解了这道题。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
575 - 分糖果（distribute-candies）
===

> Create by **jsliang** on **2019-11-20 08:43:32**  
> Recently revised in **2019-11-20 09:21:06**

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
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/distribute-candies/
* **题目内容**：

```
给定一个偶数长度的数组，
其中不同的数字代表着不同种类的糖果，
每一个数字代表一个糖果。

你需要把这些糖果平均分给一个弟弟和一个妹妹。

返回妹妹可以获得的最大糖果的种类数。

示例 1:
输入: candies = [1,1,2,2,3,3]
输出: 3
解析:
    一共有三种种类的糖果，每一种都有两个。
    最优分配方案：
    妹妹获得[1,2,3],
    弟弟也获得[1,2,3]。
    这样使妹妹获得糖果的种类数最多。

示例 2 :
输入: candies = [1,1,2,3]
输出: 2
解析: 
    妹妹获得糖果[2,3],
    弟弟获得糖果[1,1]，
    妹妹有两种不同的糖果，
    弟弟只有一种。
    这样使得妹妹可以获得的糖果种类数最多。

注意:
数组的长度为[2, 10,000]，并且确定为偶数。
数组中数字的大小在范围[-100,000, 100,000]内。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 分糖果
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = (candies) => {
  const candiesType = [...new Set(candies)].length;
  const candiesHalf = candies.length / 2;
  return Math.min(candiesType, candiesHalf);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); // 3
// console.log(distributeCandies([1, 1, 2, 3])); // 2
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 205/205 cases passed (136 ms)
* Your runtime beats 90.58 % of javascript submissions
* Your memory usage beats 26.39 % of javascript submissions (45 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

```
示例 1:
输入: candies = [1,1,2,2,3,3]
输出: 3
解析:
    一共有三种种类的糖果，每一种都有两个。
    最优分配方案：
    妹妹获得[1,2,3],
    弟弟也获得[1,2,3]。
    这样使妹妹获得糖果的种类数最多。

示例 2 :
输入: candies = [1,1,2,3]
输出: 2
解析: 
    妹妹获得糖果[2,3],
    弟弟获得糖果[1,1]，
    妹妹有两种不同的糖果，
    弟弟只有一种。
    这样使得妹妹可以获得的糖果种类数最多。
```

**首先**，拿到题目，开始思考：

1. 确保妹妹拿到的糖果都是不同种类（Number 不同）
2. 如果是相同种类，那就不算进 **不同种类**，即：
   1. 假设有糖果 [1, 1, 1, 2, 2, 2]。
   2. 妹妹拿到的种类是 [1, 2]。
   3. 所以应该返回 2 种。

**然后**，确定自己想法，开始尝试：

```js
const distributeCandies = (candies) => {
  const map = new Map();
  candies.forEach((item) => {
    if (map.get(item) === undefined) {
      map.set(item, item);
    }
  });
  return map.size < (candies.length / 2) ? map.size : candies.length / 2;
};
```

Submit 提交：

```js
Accepted
* 205/205 cases passed (152 ms)
* Your runtime beats 67.39 % of javascript submissions
* Your memory usage beats 55.56 % of javascript submissions (44.2 MB)
```

**最后**，说下解题思路以及优化方案：

1. 通过 `Map` 记录糖果种类
2. 通过 `forEach` 遍历所有糖果，找出每一种不同类型的糖果
3. 判断 `Map` 记录的糖果种类是不是大于糖果总数的一半，因为需要分配同等量给弟弟和妹妹，那么妹妹最多拿到的糖果种类应该小于或者等于通过的一半。
4. 最后返回小于或者等于一半的糖果种类。

那么，这里有什么危害呢？

* `forEach` 遍历了整个数组，其实应该在判断 `Map` 的长度大于总糖果数的一半起，就应该中断数组，返回结果，减少计算。

优化如下：

> 优化 1

```js
const distributeCandies = (candies) => {
  const map = new Map();
  for (let i = 0; i < candies.length; i++) {
    if (map.get(candies[i]) === undefined) {
      map.set(candies[i], candies[i]);
    }
    if (map.size > candies.length / 2) {
      return candies.length / 2;
    }
  }
  return map.size;
};
```

Submit 提交：

```js
Accepted
* 205/205 cases passed (148 ms)
* Your runtime beats 72.1 % of javascript submissions
* Your memory usage beats 30.55 % of javascript submissions (45 MB)
```

再来想想，我们能不能不使用 Map？尝试一下：

> 优化 2

```js
const distributeCandies = (candies) => {
  const candiesType = [...new Set(candies)].length;
  const candiesHalf = candies.length / 2;
  return Math.min(candiesType, candiesHalf);
};
```

Submit 提交：

```js
Accepted
* 205/205 cases passed (136 ms)
* Your runtime beats 90.58 % of javascript submissions
* Your memory usage beats 26.39 % of javascript submissions (45 MB)
```

然后它老是说我占用的空间多……不能忍，直接一行代码梭哈：

> 优化 3

```js
const distributeCandies = (candies) => Math.min([...new Set(candies)].length, candies.length / 2);
```

Submit 提交：

```js
Accepted
* 205/205 cases passed (144 ms)
* Your runtime beats 77.17 % of javascript submissions
* Your memory usage beats 33.33 % of javascript submissions (44.9 MB)
```

有内鬼，终止交易！

难不成 Set 后的数组重新开辟的空间过大了？有这可能……o(╥﹏╥)o

> LeetCode 解析你的代码，给出的时间和空间占比总是不一致！相信自己就好。

如果小伙伴有更好的方法或者思路，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
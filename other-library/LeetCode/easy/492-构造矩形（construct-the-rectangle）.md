492 - 构造矩形（construct-the-rectangle）
===

> Create by **jsliang** on **2019-10-28 10:54:31**  
> Recently revised in **2019-10-28 12:32:14**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 进一步思考](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/construct-the-rectangle/
* **题目内容**：

```
作为一位web开发者，懂得怎样去规划一个页面的尺寸是很重要的。

现给定一个具体的矩形页面面积，你的任务是：

设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。

要求：

1. 你设计的矩形页面必须等于给定的目标面积。
2. 宽度 W 不应大于长度 L，换言之，要求 L >= W 。
3. 长度 L 和宽度 W 之间的差距应当尽可能小。
你需要按顺序输出你设计的页面的长度 L 和宽度 W。

示例：

输入: 4
输出: [2, 2]
解释: 目标面积是 4， 所有可能的构造方案有 [1,4], [2,2], [4,1]。
但是根据要求2，[1,4] 不符合要求; 根据要求3，[2,2] 比 [4,1] 更能符合要求. 所以输出长度 L 为 2， 宽度 W 为 2。

说明:
给定的面积不大于 10,000,000 且为正整数。
你设计的页面的长度和宽度必须都是正整数。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 构造矩形
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  const harf = Math.ceil(Math.sqrt(area));
  for (let i = harf; i <= area; i++) {
    if (Number.isInteger(area / i)) {
      return [i, area / i];
    }
  }
};

const area = 4;
console.log(constructRectangle(area));
```

`node index.js` 返回：

```js
[2, 2]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 50/50 cases passed (128 ms)
* Your runtime beats 48.35 % of javascript submissions
* Your memory usage beats 17.86 % of javascript submissions (34.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，稍微思考，写出代码：

```js
/**
 * @name 构造矩形
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
  const harf = Math.ceil(Math.sqrt(area));
  for (let i = harf; i <= area; i++) {
    if (Number.isInteger(area / i)) {
      return [i, area / i];
    }
  }
};

const area = 2;
console.log(constructRectangle(area));
```

**然后**，尝试提交：

```js
Accepted
* 50/50 cases passed (128 ms)
* Your runtime beats 48.35 % of javascript submissions
* Your memory usage beats 17.86 % of javascript submissions (34.9 MB)
```

**最后**，讲下思路：

1. 首先，最极端的状况肯定是：2 * 2 或者 3 * 3 等，所以先开方 `area`，再向上取整。
2. 然后，从开方的地方开始，到 `area` 结束，进行遍历。
3. 最后，判断 `area` 是否能整除 `i`，如果可以，说明它们有故事，就可以给 good ending 了。

> PS：为什么不需要最后再返回一个默认数组？因为任何正整数都可以被 1 整除啊！

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

那么，还能不能更进一步呢？毕竟上面的只打败了 48% 的运行时间，18% 的空间。

于是 **jsliang** 想了下，然后去 LeetCode 【题解】和【评论】查看了下，还真，没有……

果然大佬都是静悄悄做完然后从不留言的么……

如果小伙伴有更好的题解，欢迎评论留言私聊……

enm...好像上面话语会让人有些误解？！！！

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
860 - 柠檬水找零（lemonade-change）
===

> Create by **jsliang** on **2020-1-10 19:00:15**  
> Recently revised in **2020-1-10 19:31:33**

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
* **涉及知识**：贪心算法
* **题目地址**：https://leetcode-cn.com/problems/lemonade-change/
* **题目内容**：

```
在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，
（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，
然后向你付 5 美元、10 美元或 20 美元。
你必须给每个顾客正确找零，
也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，
返回 true，否则返回 false 。

示例 1：

输入：[5,5,5,10,20]
输出：true
解释：
前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出 true。

示例 2：

输入：[5,5,10]
输出：true

示例 3：

输入：[10,10]
输出：false

示例 4：

输入：[5,5,10,10,20]
输出：false

解释：
前 2 位顾客那里，
我们按顺序收取 2 张 5 美元的钞票。
对于接下来的 2 位顾客，
我们收取一张 10 美元的钞票，
然后返还 5 美元。
对于最后一位顾客，
我们无法退回 15 美元，
因为我们现在只有两张 10 美元的钞票。
由于不是每位顾客都得到了正确的找零，
所以答案是 false。

提示：

0 <= bills.length <= 10000
bills[i] 不是 5 就是 10 或是 20 
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five ++;
    } else if (bills[i] === 10) {
      ten ++;
      five --;
      if (five < 0) {
        return false;
      }
    } else {
      if (ten > 0 && five > 0) {
        ten --;
        five --;
      } else if (five > 2) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
```

`node index.js` 返回：

```js
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 45/45 cases passed (72 ms)
* Your runtime beats 65.75 % of javascript submissions
* Your memory usage beats 31.11 % of javascript submissions (36.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

这道题，让我想起了小学的时候，两辆火车对着开，亦或者一个家伙往水池里灌水，一个家伙防水……

看到一句话直接炸毛：*注意，一开始你手头没有任何零钱*。

没零钱不会支付宝吗，没零钱开啥摊啊，哈哈，忍不住吐槽~

> 哈希表

```js
const lemonadeChange = (bills) => {
  const map = new Map();
  for (let i = 0; i < bills.length; i++) {
    const five = map.get(5) || 0;
    const ten = map.get(10) || 0;
    if (bills[i] === 5) {
      map.set(5, five + 1);
    } else if (bills[i] === 10) {
      if (five > 0) {
        map.set(5, five - 1);
        map.set(10, ten + 1);
      } else {
        return false;
      }
    } else {
      if (ten > 0 && five > 0) {
        map.set(5, five - 1);
        map.set(10, ten - 1);
      } else if (five >= 3) {
        map.set(5, five - 3);
      } else {
        return false;
      }
    }
  }
  return true;
};
```

思路很简单：

1. 通过 `map` 记录哈希，我们主要记录 5 块钱和 10 块钱剩下多少张。
2. 通过 `for` 遍历账单：
3. 如果给的是 5 块，那么无需找零，设置 5 块的张数 + 1即可；
4. 如果给的是 10 块，那没啥好说的，直接找零 5 块；如果 5 块一张都没了，自然就报错 `false`；
5. 如果给的是 20 块，那么应该找零 10 + 5，或者 5 + 5 + 5，如果这两种都没有，那么自然没法收款~

这样就搞定啦：

```js
Accepted
* 45/45 cases passed (72 ms)
* Your runtime beats 65.75 % of javascript submissions
* Your memory usage beats 31.11 % of javascript submissions (36.7 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

估计用了 `map`，很多小伙伴都看懵逼了，所以 **jsliang** 细细想了下，为啥不直接用数字呢：

```js
const lemonadeChange = (bills) => {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five ++;
    } else if (bills[i] === 10) {
      ten ++;
      five --;
      if (five < 0) {
        return false;
      }
    } else {
      if (ten > 0 && five > 0) {
        ten --;
        five --;
      } else if (five > 2) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
```

Submit 提交：

```js
Accepted
* 45/45 cases passed (60 ms)
* Your runtime beats 95.89 % of javascript submissions
* Your memory usage beats 51.11 % of javascript submissions (36.1 MB)
```

瞬间提升不少~

看了下【官方题解】……原来这样就是贪心，先给一张 10 块和一张 5 块……

> 喂，好像贪心思想没那么高大上啊！

如果小伙伴有更好思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
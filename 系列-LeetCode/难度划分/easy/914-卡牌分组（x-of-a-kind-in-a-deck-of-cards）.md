914 - 卡牌分组（x-of-a-kind-in-a-deck-of-cards）
===

> Create by **jsliang** on **2020-01-22 19:39:07**  
> Recently revised in **2020-01-22 20:47:00**

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
* **涉及知识**：数组、数学
* **题目地址**：
* **题目内容**：

```
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，
使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。

示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。

示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]

示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 求最大公约数
 */
const gcd = (x, y) => x == 0 ? y : gcd(y % x, x);

/**
 * @name 卡牌分组
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  let obj = {};
  for (let i of deck) {
    obj[i] = !obj[i] ? 1 : ++obj[i];
  }

  let arr = Object.values(obj);
  let res = arr[0];
  return arr.every(i => (res = gcd(res, i)) > 1);
}

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
console.log(hasGroupsSizeX([1])); // false
console.log(hasGroupsSizeX([1, 1])); // true
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); // true
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])); // true
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3])); // true
console.log(hasGroupsSizeX([1, 1])); // true
```

`node index.js` 返回：

```js
true
false
false
true
true
true
true
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 69/69 cases passed (80 ms)
* Your runtime beats 49.41 % of javascript submissions
* Your memory usage beats 46.85 % of javascript submissions (36.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

答案咱先不谈，关键点在于求最大公约数：

> 求最大公约

```js
/**
 * 求两数最大公约数
 * @param {*} deck 
 */
const gcd = (a, b) => a == 0 ? b : gcd(b % a, a);
```

然后暴力求解：

> 失败的暴力

```js
/**
 * 求两数最大公约数
 * @param {*} deck 
 */
const gcd = (u, v) => {
  while (v != 0) {
    temp = u % v;
    u = v;
    v = temp;
  }
  return u;
}

/**
 * @name 卡牌分组
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  const filterDeck = [];
  const map = new Map();
  for (let i = 0; i < deck.length; i++) {
    if (!map.has(deck[i])) {
      filterDeck.push(deck.filter(item => item === deck[i]).length);
      map.set(deck[i], 1);
    }
  }
  if (filterDeck[0] < 2) {
    return false;
  }
  if (filterDeck[0] >= 2 && filterDeck.length === 1) {
    return true;
  }
  let min = 10001;
  for (let i = 0; i < filterDeck.length; i++) {
    min = Math.min(min, filterDeck[i]);
  }
  for (let i = 0; i < filterDeck.length; i++) {
    if (filterDeck[i] % min !== 0) {
      return false;
    }
  }
  return true;
};

// console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
// console.log(hasGroupsSizeX([1])); // false
// console.log(hasGroupsSizeX([1, 1])); // true
// console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); // true
// console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])); // true
// console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3])); // true
// console.log(hasGroupsSizeX([1, 1])); // true
```

`console.log` 打印的就是我失败的记录~

惨淡，可能我思路错了。

> 题解方法【一】

```js
var hasGroupsSizeX = function (deck) {
  function gcd(x, y) {
    return x == 0 ? y : gcd(y % x, x);
  }

  let obj = {};
  for (let i of deck) {
    obj[i] = !obj[i] ? 1 : ++obj[i];
  }

  let arr = Object.values(obj);
  let res = arr[0];
  return arr.every(i => (res = gcd(res, i)) > 1);
}
```

> 题解方法【二】

```js
var hasGroupsSizeX = function (deck) {
  //  最大公约数
  let gcd = function (u, v) {
    while (v != 0) {
      temp = u % v;
      u = v;
      v = temp;
    }
    return u;
  }
  let minv;
  let count = {};
  for (let i = 0; i < deck.length; i++) {
    if (!count[deck[i]]) {
      count[deck[i]] = 0
    }
    count[deck[i]]++;
  }
  for (let key in count) {
    let v = count[key]
    if (minv == undefined) {
      minv = v;
      continue;
    }
    if (minv % v == 0 || v % minv == 0) {
      minv = Math.min(minv, v);
    } else {
      minv = gcd(v > minv ? v : minv, v > minv ? minv : v);
      if (minv == 1) {
        return false;
      }
    }
  }
  return minv >= 2;
};
```

失败的人暂且不多 bb~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
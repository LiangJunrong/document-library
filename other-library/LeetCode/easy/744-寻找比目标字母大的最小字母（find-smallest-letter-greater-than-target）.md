744 - 寻找比目标字母大的最小字母（find-smallest-letter-greater-than-target）
===

> Create by **jsliang** on **2019-12-28 09:09:45**  
> Recently revised in **2019-12-28 09:48:32**

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
* **涉及知识**：二分查找
* **题目地址**：https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/
* **题目内容**：

```
给定一个只包含小写字母的有序数组 letters，
和一个目标字母 target，
寻找有序数组里面比目标字母大的最小字母。

数组里字母的顺序是循环的。

举个例子，如果目标字母 target = 'z'，
并且有序数组为 letters = ['a', 'b']，
则答案返回 'a'。

示例:

输入:
letters = ["c", "f", "j"]
target = "a"
输出: "c"

输入:
letters = ["c", "f", "j"]
target = "c"
输出: "f"

输入:
letters = ["c", "f", "j"]
target = "d"
输出: "f"

输入:
letters = ["c", "f", "j"]
target = "g"
输出: "j"

输入:
letters = ["c", "f", "j"]
target = "j"
输出: "c"

输入:
letters = ["c", "f", "j"]
target = "k"
输出: "c"

注:
letters长度范围在[2, 10000]区间内。
letters 仅由小写字母组成，最少包含两个不同的字母。
目标字母target 是一个小写字母。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 寻找比目标字母大的最小字母
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  // 处于数组中的情况
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] <= target && letters[i + 1] > target) {
      return letters[i + 1];
    }
  }
  // 比最小还小：输出 index = 0
  if (letters[0] > target) {
    return letters[0];
  }
  // 和最小一样：输出 index = 1
  if (letters[0] === target) {
    return letters[1];
  }
  // 和最大一样或者更大：输出 index = 0
  if (letters[letters.length - 1] <= target) {
    return letters[0];
  }
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // 'c'
```

`node index.js` 返回：

```js
'c'
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 165/165 cases passed (72 ms)
* Your runtime beats 82.5 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (37.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看到题目，先捋捋思绪：

* `['a', 'b', 'c']`

1. 如果目标字母 `b` 比 `a` 大，比 `c` 小，那么输出 `c`；
2. 如果目标字母 `c` 等于 `c`，靠在数组最右边，那么输出最左边的字母 `a`。

**然后**，开始撸码：

```js
const nextGreatestLetter = (letters, target) => {
  // 处于数组中的情况
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] <= target && letters[i + 1] > target) {
      return letters[i + 1];
    }
  }
  // 比最小还小：输出 index = 0
  if (letters[0] > target) {
    return letters[0];
  }
  // 和最小一样：输出 index = 1
  if (letters[0] === target) {
    return letters[1];
  }
  // 和最大一样或者更大：输出 index = 0
  if (letters[letters.length - 1] <= target) {
    return letters[0];
  }
};
```

好像没啥难度：

```js
Accepted
* 165/165 cases passed (72 ms)
* Your runtime beats 82.5 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (37.7 MB)
```

**最后**，想起好像还有二分查找方法，咱们就试试吧~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

官方题解，有时候非常精妙~

> 解法一：二分查找

```js
const nextGreatestLetter = (letters, target) => {
  let left = 0;
  let right = letters.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (letters[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return letters[left % letters.length];
};
```

它运用了二分查找，并且将模运算（%）巧妙应用到了这道题中。

Submit 提交：

```js
Accepted
* 165/165 cases passed (60 ms)
* Your runtime beats 99.38 % of javascript submissions
* Your memory usage beats 32.35 % of javascript submissions (36.9 MB)
```

> 解法二：线性扫描

```js
const nextGreatestLetter = (letters, target) => {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
};
```

看到这里的时候，感觉智商被按在地上摩擦，看人家的破解和看我的破解，真心智商压制~

Submit 提交：

```js
Accepted
* 165/165 cases passed (76 ms)
* Your runtime beats 64.38 % of javascript submissions
* Your memory usage beats 8.82 % of javascript submissions (37.4 MB)
```

如果小伙伴有更好的思路想法，欢迎评论吐槽或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
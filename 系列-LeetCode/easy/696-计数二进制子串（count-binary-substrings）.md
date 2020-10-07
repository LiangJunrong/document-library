696 - 计数二进制子串（count-binary-substrings）
===

> Create by **jsliang** on **2019-12-17 08:32:20**  
> Recently revised in **2019-12-17 09:45:46**

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
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/count-binary-substrings/
* **题目内容**：

```
给定一个字符串 s，
计算具有相同数量 0 和 1 的非空(连续)子字符串的数量，
并且这些子字符串中的所有 0 和所有 1 都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 
有 6 个子串具有相同数量的连续 1 和 0：
“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011” 不是有效的子串，因为所有的 0（和 1）没有组合在一起。

示例 2 :

输入: "10101"
输出: 4
解释: 
有 4 个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续 1 和 0。
注意：

s.length 在 1 到 50,000 之间。
s 只包含 “0” 或 “1” 字符。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 判断子串
 * @param {String} s 需要判断的位置
 * @param {Number} i 目前判断的位置
 * @return 0 表示不是子串，1 表示符合子串
 */
const judgeSubstrings = (s, i) => {
  for (let j = i + 1; j < s.length; j++) {
    if (s[j] !== s[i]) {
      const slice = s.slice(j, j + j - i);
      if (slice.length === j - i && !slice.includes(s[i])) {
        return 1;
      }
      break;
    }
  }
  return 0;
}

/**
 * @name 计数二进制子串
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += judgeSubstrings(s, i);
  }
  return result;
};

console.log(countBinarySubstrings('00110011')); // 6
console.log(countBinarySubstrings('10101')); // 4
console.log(countBinarySubstrings('00110')); // 3
```

`node index.js` 返回：

```js
6
4
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 90/90 cases passed (5436 ms)
* Your runtime beats 5.28 % of javascript submissions
* Your memory usage beats 50.4 % of javascript submissions (38.9 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**只能后悔，没有好好学习……**

这道题的知识点，没看错的话，应该可以通过滑动窗口或者线性扫描进行统计。

然而……我并不是很熟练啊！

只能先通过暴力破解试试，然后学一下人家是怎么使用滑动窗口或者线性扫描的了。

> 暴力破解

```js
const countBinarySubstrings = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] === '1') {
          const slice = s.slice(j, j + j - i);
          if (slice.length === j - i && !slice.includes('0')) {
            result += 1;
          }
          break;
        }
      }
    }
    if (s[i] === '1') {
      for (let k = i + 1; k < s.length; k++) {
        if (s[k] === '0') {
          const slice = s.slice(k, k + k - i);
          if (slice.length === k - i && !slice.includes('1')) {
            result += 1;
          }
          break;
        }
      }
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 90/90 cases passed (5436 ms)
* Your runtime beats 5.28 % of javascript submissions
* Your memory usage beats 50.4 % of javascript submissions (38.9 MB)
```

Of course, 这是最初思路，讲起来有点绕，我整理一下来进行讲解：

> 暴力破解优化

```js
/**
 * @name 判断子串
 * @param {String} s 需要判断的位置
 * @param {Number} i 目前判断的位置
 * @return 0 表示不是子串，1 表示符合子串
 */
const judgeSubstrings = (s, i) => {
  for (let j = i + 1; j < s.length; j++) {
    if (s[j] !== s[i]) {
      const slice = s.slice(j, j + j - i);
      if (slice.length === j - i && !slice.includes(s[i])) {
        return 1;
      }
      break;
    }
  }
  return 0;
}

/**
 * @name 计数二进制子串
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = (s) => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += judgeSubstrings(s, i);
  }
  return result;
};
```

讲解下我的思路：

1. 设置 `result` 获取结果。
2. 通过 `for` 遍历字符串 `s`。
3. 将每次需要判断的位置 `i` 和字符串 `s` 都传递给 `judgeSubstrings` 进行计算。
4. 在 `judgeSubstrings` 中，从 `i + 1` 开始继续往下遍历，如果找到某个元素不等于 `s[i]`，那么我们就判断往后延长 `j - i` 的长度，是不是都为 `s[i]` 相反的元素。
5. 如果是，则返回 1；如果不是，则返回 0。
6. 遍历完毕字符串 `s` 后，返回结果。

举个例子：

* `00110`

1. `i = 0, s[i] = 0`，那么找到 `00` 和 `11`，符合条件。
2. `i = 1, s[i] = 0`，那么找到 `0` 和 `1`，符合条件。
3. `i = 2, s[i] = 1`，那么没找到最够的 `0`，来匹配 `11`，不符合条件。
4. `i = 3, s[i] = 1`，那么找到 `1` 和 `0`，符合条件。
5. `i = 4, s[i] = 0`，其实这个末尾是不需要判断的了，为了好看增加了一次运算？

这样我们就通过暴力破解完成了解题，enm...好像有双指针的影子了。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

既然开头我就说了可以移动窗口或者线性扫描，所以咱们去找找移动窗口或者线性扫描的攻略吧：

> 线性扫描

```js
const countBinarySubstrings = (s) => {
  let ans = 0, prev = 0, cur = 1;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i - 1) !== s.charAt(i)) {
      ans += Math.min(prev, cur);
      prev = cur;
      cur = 1;
    } else {
      cur ++;
    }
  }
  return ans + Math.min(prev, cur);
};
```

题解内容：https://leetcode-cn.com/problems/count-binary-substrings/solution/ji-shu-er-jin-zhi-zi-chuan-by-leetcode/

很妙的一种计算方式，目前暂时理解完解释不出来，想看它怎么做的可以看上面官方题解。

Submit 提交：

```js
Accepted
* 90/90 cases passed (84 ms)
* Your runtime beats 98.49 %of javascript submissions
* Your memory usage beats 60 % of javascript submissions (37.8 MB)
```

如果你有更好的思路或者见解，欢迎评论留言或者私聊~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
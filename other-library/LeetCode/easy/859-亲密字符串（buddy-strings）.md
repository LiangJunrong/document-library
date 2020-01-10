859 - 亲密字符串（buddy-strings）
===

> Create by **jsliang** on **2020-01-10 09:02:28**  
> Recently revised in **2020-01-10 09:44:41**

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
* **题目地址**：https://leetcode-cn.com/problems/buddy-strings/
* **题目内容**：

```
给定两个由小写字母构成的字符串 A 和 B，
只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，
就返回 true；否则返回 false。

 

示例 1：

输入： A = "ab", B = "ba"
输出： true

示例 2：

输入： A = "ab", B = "ab"
输出： false

示例 3:

输入： A = "aa", B = "aa"
输出： true

示例 4：

输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true

示例 5：

输入： A = "", B = "aa"
输出： false

提示：

0 <= A.length <= 20000
0 <= B.length <= 20000
A 和 B 仅由小写字母构成。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 亲密字符串
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = (A, B) => {
  // A 和 B 长度相等
  if (A.length !== B.length) {
    return false;
  }
  // A 和 B 不匹配的地方不能超过 3 处
  const misMatch = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      misMatch.push(i);
      if (misMatch.length > 2) {
        return false;
      }
    }
  }
  if (misMatch.length === 0) {
    // 如果 A 和 B 相等，去重判断
    return [...new Set(A)].length < A.length;
  } else if (misMatch.length === 2) {
    // 如果 misMatch 长度为 2，判断 A[0] = B[1] && A[1] = B[0]
    return A[misMatch[0]] === B[misMatch[1]] && A[misMatch[1]] === B[misMatch[0]];
  }
  return false;
};

console.log(buddyStrings('ab', 'ba')); // true
console.log(buddyStrings('ab', 'ab')); // false
console.log(buddyStrings('aa', 'aa')); // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')); // true
console.log(buddyStrings('', 'aa')); // false
```

`node index.js` 返回：

```js
true
false
true
true
false
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 23/23 cases passed (72 ms)
* Your runtime beats 78.38 % of javascript submissions
* Your memory usage beats 11.43 % of javascript submissions (36.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

分析题目意思：

1. 交换 A 中 2 个字母后，A = B；
2. 【必须】`A = 'ab'`、`B = 'ab'`，返回 `false`。
3. A 和 B 可以全部字母相等且两者由单个元素构成。例如：`A = 'aa'`、`B = 'aa'`，返回 `true`。
4. A 和 B 可以有两个位置不同，这样调转这两个位置的顺序后有可能相同。例如：`A = 'aaaaaaabc'`、`B = 'aaaaaaacb'`，返回 `true`。

然后，然后就得出了：

> 面向用例编程（不可取）

```js
const buddyStrings = (A, B) => {
  if (A.length !== B.length || !A.length || !B.length) {
    return false;
  }
  const map = new Map();
  let flag1 = false;
  for (let i = 0; i < A.length; i++) {
    if (map.get(A[i])) {
      flag1 = true;
      map.set(A[i], map.get(A[i]) + 1);
    } else {
      map.set(A[i], 1);
    }
  }
  if (A === B && flag1) {
    return true;
  } else if (A === B && !flag1) {
    return false;
  }
  const newA = A.split('');
  const newB = B.split('');
  let flag2 = -1;
  for (let i = 0; i < newA.length; i++) {
    if (newA[i] !== newB[i] && flag2 === -1) {
      flag2 = i;
    } else if (newA[i] !== newB[i] && flag2 !== -1) {
      const temp = newA[flag2];
      newA[flag2] = newA[i];
      newA[i] = temp;
      break;
    }
  }
  return newA.join('') === newB.join('');
};
```

针对条件进行了多重筛选，不管你懵不懵逼，反正写完我都不想去整理（跟我写业务代码，写烂了的时候一样~）

Submit 提交如下：

```js
Accepted
* 23/23 cases passed (80 ms)
* Your runtime beats 39.19 % of javascript submissions
* Your memory usage beats 11.43 % of javascript submissions (36.6 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

然后，去【题解区】和【评论区】逛逛，发现一个思路非常清晰的解法：

* ☆≡═ 亲密字符串：https://leetcode-cn.com/problems/buddy-strings/solution/-qin-mi-zi-fu-chuan-by-hareyukai/

下面是原说法：

1. 统计字符串 A，B 中字符不匹配的下标。
2. 不匹配的下标个数不等于 0 或 2 时，不能由 A 得到 B。
3. 不匹配的下标个数等于 0 时，A 与 B 中字符完全相同，还需要 A 中有重复字符。
4. 不匹配的下标个数等于 2 时，判断交换两对字符后是否匹配。

```C++
class Solution {
public:
  bool buddyStrings(const string & a, const string & b) {
    if (a.size() != b.size()) return false;
    vector < int > index_of_mismatch;
    for (int i = 0; i < a.size(); i++)
      if (a[i] != b[i]) {
        index_of_mismatch.push_back(i);
        if (2 < index_of_mismatch.size()) return false;
      }
    if (index_of_mismatch.size() == 0) {
      return set < char > (a.begin(), a.end()).size() < a.size();
    } else if (index_of_mismatch.size() == 2) {
      return a[index_of_mismatch[0]] == b[index_of_mismatch[1]] &&
        a[index_of_mismatch[1]] == b[index_of_mismatch[0]];
    }
    return false;
  }
};
```

这是原 C++ 题解，稍微整理了下：

```js
const buddyStrings = (A, B) => {
  // A 和 B 长度相等
  if (A.length !== B.length) {
    return false;
  }
  // A 和 B 不匹配的地方不能超过 3 处
  const misMatch = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      misMatch.push(i);
      if (misMatch.length > 2) {
        return false;
      }
    }
  }
  if (misMatch.length === 0) {
    // 如果 A 和 B 相等，去重判断
    return [...new Set(A)].length < A.length;
  } else if (misMatch.length === 2) {
    // 如果 misMatch 长度为 2，判断 A[0] = B[1] && A[1] = B[0]
    return A[misMatch[0]] === B[misMatch[1]] && A[misMatch[1]] === B[misMatch[0]];
  }
  return false;
};
```

Submit 提交：

```js
Accepted
* 23/23 cases passed (80 ms)
* Your runtime beats 39.19 % of javascript submissions
* Your memory usage beats 11.43 % of javascript submissions (36.6 MB)
```

还是挺不错的，膜拜大佬~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
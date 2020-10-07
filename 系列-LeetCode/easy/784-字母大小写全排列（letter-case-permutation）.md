784 - 字母大小写全排列（letter-case-permutation）
===

> Create by **jsliang** on **2020-1-4 19:27:56**  
> Recently revised in **2020-1-4 21:33:21**

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
* **涉及知识**：位运算、回溯算法
* **题目地址**：https://leetcode-cn.com/problems/letter-case-permutation/
* **题目内容**：

```
给定一个字符串 S，
通过将字符串 S 中的每个字母转变大小写，
我们可以获得一个新的字符串。
返回所有可能得到的字符串集合。

示例:
输入: S = "a1b2"
输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

输入: S = "3z4"
输出: ["3z4", "3Z4"]

输入: S = "12345"
输出: ["12345"]
注意：

S 的长度不超过12。
S 仅由数字和字母组成。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 字母大小写全排列
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = S => {
  const res = [];
  const backtrack = (start, s) => {
    res.push(s);
    for (let i = start; i < s.length; i++) {
      if (s[i] >= 'a' && s[i] <= 'z') {
        backtrack(i + 1, s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1));
      } else if (s[i] >= 'A' && s[i] <= 'Z') {
        backtrack(i + 1, s.slice(0, i) + s[i].toLowerCase() + s.slice(i + 1));
      }
    }
  };
  backtrack(0, S);
  return res;
};

console.log(letterCasePermutation("a1b2c3")); // ['a1b2c3', 'A1b2c3', 'a1B2c3', 'a1b2C3', 'A1B2c3', 'A1b2C3', 'a1B2C3', 'A1B2C3']
// console.log(letterCasePermutation('ab2')); // ['ab2', 'aB2', 'Ab2', 'AB2']
// console.log(letterCasePermutation('3z4')); // ['3z4', '3Z4']
// console.log(letterCasePermutation('123')); // ['123']

```

`node index.js` 返回：

```js
[ 'a1b2c3',
  'A1b2c3',
  'a1B2c3',
  'A1B2c3',
  'a1b2C3',
  'A1b2C3',
  'a1B2C3',
  'A1B2C3' ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 63/63 cases passed (88 ms)
* Your runtime beats 63.87 % of javascript submissions
* Your memory usage beats 55.17 % of javascript submissions (37.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，这道题，可以说我之前应该碰到过相似题目，但是总想不出来了，毕竟 **回溯算法** 这个词，还是挺刺激的。

但是 だいじょうぶ 啦，咱们哈希玩得溜，照样先拿个一血：

> 哈希表

```js
const letterCasePermutation = (S) => {
  let map = [];
  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      map = [...new Set([S[0].toLowerCase(), S[0].toUpperCase()])];
    } else {
      map = map.filter(item => item.length === i);
      const upper = S[i].toUpperCase();
      const lower = S[i].toLowerCase();
      const length = map.length;
      for (let i = 0; i < length; i++) {
        if (map.findIndex(item => item === map[i] + upper) === -1) {
          map.push(map[i] + upper);
        }
        if (map.findIndex(item => item === map[i] + lower) === -1) {
          map.push(map[i] + lower);
        }
      }
    }
  }
  return map.filter(item => item.length === S.length);
};
```

思路为：

1. 设置 `map` 为哈希表（没有使用 `Map`，后面会提及为啥）；
2. 通过 `for` 遍历 `S`；
3. 判断：如果是第一次的时候，`i === 0`，进行 `map` 的初始化，即 `[...new Set(arr)]`，这样可以去重开头为数字的情况。
4. 判断：如果不是第一次，`i !== 0`，那么我们做以下步骤：
5. 步骤 1：通过 `filter` 过滤掉长度不符合的字符串，表明之前的 out 了，被淘汰了。
6. 步骤 2：设置 `upper`、`lower` 为当前 `S[i]` 对应的大小写字母，当然，如果是数字也没问题，下面会过滤掉。
7. 步骤 3：通过 `for` 遍历 `map` 的长度，注意这里使用 `length` 来代替 `map.length`，因为下面步骤 `map` 会不停增长长度，如果不写死，那么就造成死循环了。
8. 步骤 4：通过 `findIndex` 查找 `map` 内里有没有元素，和当前元素相加是不会重复的。如果是，则添加到 `map` 中
9. 最后，再通过一次 `filter` 将等同于 `S.length` 长度的字符串暴露出去。

Submit 提交如下：

```js
Accepted
* 63/63 cases passed (752 ms)
* Your runtime beats 5.04 % of javascript submissions
* Your memory usage beats 5.17 % of javascript submissions (52 MB)
```

提交信息残暴如斯，已经不再是哈希了，而是暴力破解了~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

绞尽脑汁拿了个差生评价，咱们只能参考借鉴下优等生的题解了：

> 优生解法一：递归

```js
const letterCasePermutation = function f(str) {
  if (str.length === 0) {
    return [''];
  }
  const a = str[0];
  const b = [...new Set([a.toLowerCase(), a.toUpperCase()])];
  if (str.length === 1) {
    return b;
  }
  return letterCasePermutation(str.slice(1)).reduce((r, c) => [...r, ...b.map(m => m + c)], []);
};
```

好处是：代码精简

坏处是：看不懂，或者说，一下子难以理解

Submit 提交：

```js
Accepted
* 63/63 cases passed (160 ms)
* Your runtime beats 7.56 % of javascript submissions
* Your memory usage beats 5.17 % of javascript submissions (43.7 MB)
```

> 优生解法二：回溯算法

```js
const letterCasePermutation = S => {
  const res = [];
  const backtrack = (start, s) => {
    res.push(s);
    for (let i = start; i < s.length; i++) {
      if (s[i] >= 'a' && s[i] <= 'z') {
        backtrack(i + 1, s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1));
      } else if (s[i] >= 'A' && s[i] <= 'Z') {
        backtrack(i + 1, s.slice(0, i) + s[i].toLowerCase() + s.slice(i + 1));
      }
    }
  };
  backtrack(0, S);
  return res;
};
```

假设已有字符串 `ab2`，按照这边的回溯，是怎么一回事？

1. 构造递归树；
2. 依次递归遍历。

咱们按照代码理解：

```js
// ...代码省略
const backtrack = (start, s) => {
 console.log('------');
 console.log(start);
 console.log(s);
 // ...代码省略
}
// ...代码省略
```

我们往代码中插入 3 个 `console.log`，方便观察：

```
------
0
ab2
------
1
Ab2
------
2
AB2
------
2
aB2
```

它依次执行了：

```js
backtrack(0, 'ab2'); ->

backtrack(1, 'Ab2');
backtrack(2, 'aB2'); ->

backtrack(2, 'AB2');
```

看到这里，如果你没有感到 **恍然大悟**，那么你可以将代码放到编辑器上，看看 `'a1b2c3'` 的打印情况。

简直妙不可言~

Submit 提交：

```js
Accepted
* 63/63 cases passed (88 ms)
* Your runtime beats 63.87 % of javascript submissions
* Your memory usage beats 55.17 % of javascript submissions (37.8 MB)
```

---

题外话：

* 问：什么是回溯算法？

* 答：

回溯算法实际上是一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解时，就 “回溯” 返回，尝试别的路径。

回溯法是一种选优搜索法，按选优条件向前搜索，以达到目标。

但当探索到某一步时，发现原先选择并不优或达不到条件，就退回一步重新选择，这种走不通就退回再走的技术，就是回溯法。

在这当中，满足回溯条件的某个状态的点称为 “回溯点”。

> 注：这道题被标明是【简单】，但是大佬在解题的时候，也会吐槽【不简单】，可以看下 https://leetcode-cn.com/problems/letter-case-permutation/solution/shen-du-you-xian-bian-li-hui-su-suan-fa-python-dai/

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
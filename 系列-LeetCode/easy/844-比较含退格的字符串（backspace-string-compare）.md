844 - 比较含退格的字符串（backspace-string-compare）
===

> Create by **jsliang** on **2020-01-09 16:35:22**  
> Recently revised in **2020-01-09 17:07:40**

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

* **难度**：
* **涉及知识**：
* **题目地址**：
* **题目内容**：

```
给定 S 和 T 两个字符串，
当它们分别被输入到空白的文本编辑器后，
判断二者是否相等，
并返回结果。

# 代表退格字符。 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。

示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。

示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。

示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。

提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 比较含退格的字符串
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  const newS = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      newS.push(S[i]);
    } else {
      newS.pop();
    }
  }
  const newT = [];
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      newT.push(T[i]);
    } else {
      newT.pop();
    }
  }
  return newS.join('') === newT.join('');
};

console.log(backspaceCompare('ab#c', 'ab#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a##c', '#a#c')); // true
console.log(backspaceCompare('a#c', 'b')); // false
```

`node index.js` 返回：

```js
true
true
true
false
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 104/104 cases passed (64 ms)
* Your runtime beats 86.06 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (36 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

enm...有点简单？

> 暴力破解-数组

```js
const backspaceCompare = (S, T) => {
  const newS = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      newS.push(S[i]);
    } else {
      newS.pop();
    }
  }
  const newT = [];
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      newT.push(T[i]);
    } else {
      newT.pop();
    }
  }
  return newS.join('') === newT.join('');
};
```

思路如下：

1. 输入原字符串 `S` 和 `T`，比较修改后的字符串 `newS` 和 `newT` 是否相同；
2. 设置 `newS = []`，为什么使用数组？因为可以偷懒！遍历 `S` 判断是 `#` 则推出数组末尾的元素，如果不是则往数组添加该元素。
3. 设置 `newT = []`，原理同 `newS`。
4. 比较 `newS` 和 `newT` 转换成字符串后是否相同。

Submit 提交如下：

```js
Accepted
* 104/104 cases passed (64 ms)
* Your runtime beats 86.06 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (36 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

然后，有的小伙伴就纠结啊，听说数组会占用比较多空间和时间啥的，这里我尝试给你看吧：

> 暴力破解-字符串

```js
const backspaceCompare = (S, T) => {
  let newS = '';
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      newS += S[i];
    } else {
      newS = newS.substr(0, newS.length - 1);
    }
  }
  let newT = '';
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      newT += T[i];
    } else {
      newT = newT.substr(0, newT.length - 1);
    }
  }
  return newS === newT;
};
```

Submit 提交：

```js
Accepted
* 104/104 cases passed (68 ms)
* Your runtime beats 73.71 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (36.6 MB)
```

甚至还比数组的暴力破解差~

看完官方题解，本来不打算 “贴代码” 了，但是想想，说不定有小伙伴喜欢：

> 双指针

```js
const backspaceCompare = (S, T) => {
  let i = S.length - 1,
      j = T.length - 1,
      skipS = 0,
      skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === '#') {
        skipS ++;
        i --;
      } else if (skipS > 0) {
        skipS --;
        i --;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (T[j] === '#') {
        skipT ++;
        j --;
      } else if (skipT > 0) {
        skipT --;
        j --;
      } else {
        break;
      }
    }
    if (i >= 0 && j >= 0 && S[i] !== T[j]) {
      return false;
    }
    if ((i >= 0) != (j >= 0)) {
      return false;
    }
    i --;
    j --;
  }
  return true;
};
```

Submit 提交：

```js
Accepted
* 104/104 cases passed (72 ms)
* Your runtime beats 54.58 % of javascript submissions
* Your memory usage beats 77.94 % of javascript submissions (34.6 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
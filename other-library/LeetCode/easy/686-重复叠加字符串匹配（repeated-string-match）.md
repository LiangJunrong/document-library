686 - 重复叠加字符串匹配（repeated-string-match）
===

> Create by **jsliang** on **2019-12-14 17:26:58**  
> Recently revised in **2019-12-14 18:05:10**

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
* **题目地址**：https://leetcode-cn.com/problems/repeated-string-match/
* **题目内容**：

```
给定两个字符串 A 和 B, 
寻找重复叠加字符串A的最小次数，
使得字符串 B 成为叠加后的字符串 A 的子串，
如果不存在则返回 -1。

举个例子，A = "abcd"，B = "cdabcdab"。

答案为 3，
因为 A 重复叠加三遍后为 “abcdabcdabcd”，
此时 B 是其子串；
A 重复叠加两遍后为"abcdabcd"，
B 并不是其子串。

注意:

A 与 B 字符串的长度在 1 和 10000 区间范围内。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 重复叠加字符串匹配
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const mutiple = Math.ceil(B.length / A.length);
  if (A.repeat(mutiple).includes(B)) {
    return mutiple;
  }
  if (A.repeat(mutiple + 1).includes(B)) {
    return mutiple + 1;
  }
  return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
```

`node index.js` 返回：

```js
3
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 55/55 cases passed (48 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 83.33 % of javascript submissions (33.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看完题目，我觉得可能有一种思路陷阱：

* 拿到 A 和 B；
* 判断需要叠加 `n` 次 A 之后，能超过 B 的长度；
* 将 A 进行 `repeat()` 到 `n` 次后，去匹对 B；
* 结果还有种可能，就是 `n` 次不够，但是 `n + 1` 次却是够的。

事实也是如此，题目的示例：

* A = "abcd"，B = "cdabcdab"

就已证明 A 需要叠加 3 次变成 `abcdabcdabcd` 才能将 B 变成其子串。（实际 A 叠加 2 次后就跟 B 一样长了）

话不多说，咱们直接解题，看看能否成功：

> 暴力破解

```js
const repeatedStringMatch = (A, B) => {
  const mutiple = Math.ceil(B.length / A.length);
  if (A.repeat(mutiple).includes(B)) {
    return mutiple;
  }
  if (A.repeat(mutiple + 1).includes(B)) {
    return mutiple + 1;
  }
  return -1;
};
```

Submit 提交：

```js
Accepted
* 55/55 cases passed (48 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 83.33 % of javascript submissions (33.7 MB)
```

瞎猫碰上死耗子！

这么看来一般有两种可能：

* A = 'abcd', B = 'cdabcdab'
* A = 'a', B = 'aa'

其他的我提交这份暴力破解方法的时候没碰到，所以猜测一般是这两个了。

既然如此，优化成一行代码吧：

> 一行代码版本 1

```js
const repeatedStringMatch = (A, B) => {
  return A.repeat(Math.ceil(B.length / A.length)).includes(B)
    ? Math.ceil(B.length / A.length)
    : A.repeat(Math.ceil(B.length / A.length) + 1).includes(B)
      ? Math.ceil(B.length / A.length) + 1
      : -1;
};
```

Submit 提交效果咱们就不发了，一般一行代码的效率，你懂的~

> 噢，这里我还不是一行，我强行分了几行，好看一点，如果你工作中想坑队友，可以将这些换行都干掉，然后你同事就会很愉快地把你干掉。

> 一行代码版本 2

```js
const repeatedStringMatch = (A, B) => A.repeat(Math.ceil(B.length / A.length)).includes(B) ? Math.ceil(B.length / A.length)  : A.repeat(Math.ceil(B.length / A.length) + 1).includes(B) ? Math.ceil(B.length / A.length) + 1  : -1;
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

enm...好像是不是解题太快了，现在时间是：

* 2019-12-14 17:51:31

开始的时间是：

* 2019-12-14 17:27:01

咱们，再去【题解区】和【评论区】看看吧，说不定有所收获。

> 可以理解为这菜鸡 liang 想不出其他法子了。

下面看看别人的代码，就不做过多评论的，总感觉我写的简单好多：

> 评论区代码 1

```js
var repeatedStringMatch = function(A, B) {
  let num = Math.ceil(B.length / A.length) + 1;
  let temp = A;
  for (let i = 0; i < num; i++) {
    if (A.indexOf(B) != -1) {
      return i + 1;
    }
    A += temp;
  }
  return -1;
};
```

> 评论区代码 2

```js
var repeatedStringMatch = function(A, B) {
  let max = "";
  while (max.length < B.length + A.length) {
    max += A;
  }
  for (let i = 0; i < A.length; i++) {
    if (max.substring(i, i + B.length) == B) {
      return Math.floor((i + B.length - 1) / A.length) + 1;
    }
  }
  return -1;
};
```

如果你有更好的想法或者思路，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
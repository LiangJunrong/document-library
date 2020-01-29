1021 - 删除最外层的括号（remove-outermost-parentheses）
===

> Create by **jsliang** on **2020-01-29 22:17:56**  
> Recently revised in **2020-01-29 23:18:49**

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
* **涉及知识**：栈
* **题目地址**：https://leetcode-cn.com/problems/remove-outermost-parentheses/
* **题目内容**：

```
有效括号字符串为空 ("")、
"(" + A + ")" 或 A + B，
其中 A 和 B 都是有效的括号字符串，
+ 代表字符串的连接。

例如，""，"()"，"(())()" 和 "(()(()))"，
都是有效的括号字符串。

如果有效字符串 S 非空，
且不存在将其拆分为 S = A+B 的方法，
我们称其为原语（primitive），
其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，
考虑将其进行原语化分解，
使得：S = P_1 + P_2 + ... + P_k，
其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，
删除分解中每个原语字符串的最外层括号，返回 S 。 

示例 1：

输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，
原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

示例 2：

输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，
原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

示例 3：

输入："()()"
输出：""
解释：
输入字符串为 "()()"，
原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

提示：

S.length <= 10000
S[i] 为 "(" 或 ")"
S 是一个有效括号字符串

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-outermost-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 删除最外层的括号
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S) => {
  // 1. 设置数组获取原语
  const primitive = [];

  // 2. 初始化堆栈
  let now = [S[0]];

  // 3. 设置游标
  let flag = 0;

  // 4. 遍历函数
  for (let i = 1; i < S.length; i++) {
    // 4.1 如果当前的括号和栈顶元素一致，则添加，否则则推出
    if (S[i] === now[now.length - 1]) {
      now.push(S[i]);
    } else {
      now.pop();
    }
    // 4.2 如果 now 没长度了，说明当前是一个有效的括号了，进行一系列操作
    if (!now.length) {
      primitive.push(S.slice(flag, i + 1));
      flag = i + 1;
      now = [S[i + 1]];
      i++;
    }
  }

  // 5. 遍历原语，进行操作
  for (let i = 0; i < primitive.length; i++) {
    primitive[i] = primitive[i].slice(1, primitive[i].length - 1);
  }

  // 6. 将原语换成字符串
  return primitive.join('');
};

console.log(removeOuterParentheses('(()())(())')); // ()()()
```

`node index.js` 返回：

```js
()()()
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 59/59 cases passed (84 ms)
* Your runtime beats 19.7 % of javascript submissions
* Your memory usage beats 10.44 % of javascript submissions (37.5 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

鲁迅曾经说过：

* 括号太多看不过来

讲真看得我有点眼花，我都要凑过去数括号了（近视加深 ing……）

吐槽完毕，开始解题：

1. 存在一个有效的括号：`(()())(())`。
2. 首先我们需要对其原语化。什么是原语化？即对这个有效括号进行拆分，拆分出来的括号还是有效的：`(()())` + `(())`。这时候，我们不能进一步拆分了，这样的操作就叫做原语化。
3. 然后我们去掉原语化后每个块的外层括号，变成：`()()` + `()`。
4. 所以得到答案：`()()()`。

这样，答案呼之欲出：

> 暴力破解

```js
const removeOuterParentheses = (S) => {
  // 1. 设置数组获取原语
  const primitive = [];

  // 2. 初始化堆栈
  let now = [S[0]];

  // 3. 设置游标
  let flag = 0;

  // 4. 遍历函数
  for (let i = 1; i < S.length; i++) {
    // 4.1 如果当前的括号和栈顶元素一致，则添加，否则则推出
    if (S[i] === now[now.length - 1]) {
      now.push(S[i]);
    } else {
      now.pop();
    }
    // 4.2 如果 now 没长度了，说明当前是一个有效的括号了，进行一系列操作
    if (!now.length) {
      primitive.push(S.slice(flag, i + 1));
      flag = i + 1;
      now = [S[i + 1]];
      i++;
    }
  }

  // 5. 遍历原语，进行操作
  for (let i = 0; i < primitive.length; i++) {
    primitive[i] = primitive[i].slice(1, primitive[i].length - 1);
  }

  // 6. 将原语换成字符串
  return primitive.join('');
};
```

Submit 提交：

```js
Accepted
* 59/59 cases passed (84 ms)
* Your runtime beats 19.7 % of javascript submissions
* Your memory usage beats 10.44 % of javascript submissions (37.5 MB)
```

这是 **jsliang** 一开始的思路，也是最暴躁的思路，毕竟刚出社会的小伙伴不怕刚，直到社会磨平了他的棱角：

> 暴力破解【优化】

```js
const removeOuterParentheses = (S) => {
  const primitive = []; // 原语化数组
  let nowPrimitive = [S[0]]; // 当前原语
  const now = [S[0]]; // 当前堆栈
  for (let i = 1; i < S.length; i++) {
    // 堆栈操作
    if (S[i] === now[now.length - 1]) {
      now.push(S[i]);
    } else {
      now.pop();
    }
    // 原语操作
    nowPrimitive.push(S[i]);
    if (!now.length) {
      now.push(S[i + 1]);
      i++;

      nowPrimitive.shift();
      nowPrimitive.pop();
      primitive.push(nowPrimitive.join(''));
      nowPrimitive = [S[i + 1]];
    }
  }
  return primitive.join('');
};
```

Submit 提交：

```js
Accepted
* 59/59 cases passed (76 ms)
* Your runtime beats 40.66 % of javascript submissions
* Your memory usage beats 16.13 % of javascript submissions (37.1 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

接下来就是看看大佬操作了：

* https://leetcode-cn.com/problems/remove-outermost-parentheses/solution/javascript-jian-dan-de-deltafa-bu-xu-yao-stack-by-/

> delta 法

```js
const removeOuterParentheses = (S) => {
  let delta = 0;
  let res = '';

  for (const ch of S) {
    if (ch === '(' && delta !== 0 || ch === ')' && delta !== 1) {
      res += ch;
    }
    if (ch === '(') {
      ++delta;
    } else if (ch === ')') {
      --delta;
    }
  }

  return res;
};
```

Submit 提交：

```js
Accepted
* 59/59 cases passed (68 ms)
* Your runtime beats 78.28 % of javascript submissions
* Your memory usage beats 46.52 % of javascript submissions (36.2 MB)
```

至于这操作怎么理解，我也是第一次看啊~

你品，你细细地品~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
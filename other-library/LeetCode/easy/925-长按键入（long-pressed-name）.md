925 - 长按键入（long-pressed-name）
===

> Create by **jsliang** on **2020-01-25 20:26:49**  
> Recently revised in **2020-01-25 21:07:07**

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
* **涉及知识**：双指针、字符串
* **题目地址**：https://leetcode-cn.com/problems/long-pressed-name/
* **题目内容**：

```
你的朋友正在使用键盘输入他的名字 name。

偶尔，在键入字符 c 时，
按键可能会被长按，
而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。
如果它对应的可能是你的朋友的名字
（其中一些字符可能被长按），
那么就返回 True。

示例 1：

输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。

示例 2：

输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。

示例 3：

输入：name = "leelee", typed = "lleeelee"
输出：true

示例 4：

输入：name = "laiden", typed = "laiden"
输出：true
解释：长按名字中的字符并不是必要的。

提示：

name.length <= 1000
typed.length <= 1000
name 和 typed 的字符都是小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/long-pressed-name
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 长按键入
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
  let time = 0,
      position = 0;
  for (let i = 0; i < name.length; i++) {
    for (let j = position; j < typed.length; j++) {
      if (name[i] === typed[j]) {
        position = j + 1;
        time ++;
        break;
      }
    }
  }
  return time === name.length;
};

console.log(isLongPressedName('alex', 'aaleex')); // true
console.log(isLongPressedName('saeed', 'ssaaedd')); // false
console.log(isLongPressedName('leelee', 'lleeelee')); // true
console.log(isLongPressedName('laiden', 'laiden')); // true
```

`node index.js` 返回：

```js
true
false
true
true
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 71/71 cases passed (80 ms)
* Your runtime beats 17.69 % of javascript submissions
* Your memory usage beats 55.17 % of javascript submissions (34.4 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

看完题目，分析题意：

* `name` 是 `typed` 的子集
* 这两者顺序一致（猜测）

是的，求出这两个即可~

> 双指针

```js
const isLongPressedName = (name, typed) => {
  let time = 0,
      position = 0;
  for (let i = 0; i < name.length; i++) {
    for (let j = position; j < typed.length; j++) {
      if (name[i] === typed[j]) {
        position = j + 1;
        time ++;
        break;
      }
    }
  }
  return time === name.length;
};
```

解法如下：

1. 设置 `time` 记录匹对的次数；
2. 设置 `position` 记录当前 `j + 1` 的位置；
3. 双重 `for` 遍历 `name` 和 `typed`，查找两者相同的位置，如果有，则设置 `position = j + 1`，并且 `time ++`，同时中止第二层 `for` 循环；
4. 最后判断 `time` 的次数是否和 `name` 的长度一致即可。

Submit 提交为：

```js
Accepted
* 71/71 cases passed (80 ms)
* Your runtime beats 17.69 % of javascript submissions
* Your memory usage beats 55.17 % of javascript submissions (34.4 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

接下来轻松一下，看看大佬题解，准备下瓜子：

> 【题解一】

```js
const isLongPressedName = (name, typed) => {
  let i = 0,
    j = 0,
    len = typed.length,
    n = name.length;

  while (i < n) {
    let cur = name[i],
      count = 1,
      k = i + 1;

    while (k < n && name[k] == cur) {
      k++;
      count++; // 记录当前字符的连续个数
    }
    i = k;

    let p = 0;
    while (j < len) {
      if (typed[j] == cur) {
        j++;
        p++;
        if (j == len && i < n) return false; // 如果 typed 遍历结束时候，name 还没结束，则返回 false
      } else {
        if (p < count) {
          return false; // 如果 typed 中该字符的个数小于 name 中出现的个数，返回 false
        }
        break;
      }
    }
  }
  return true;
};
```

Submit 提交：

```js
Accepted
* 71/71 cases passed (60 ms)
* Your runtime beats 94.62 % of javascript submissions
* Your memory usage beats 54.31 % of javascript submissions (34.5 MB)
```

看到题解那么长，还觉得有点不削？然后看提交，还真香~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
720 - 词典里最长的单词（longest-word-in-dictionary）
===

> Create by **jsliang** on **2019-12-24 08:56:51**  
> Recently revised in **2019-12-24 12:30:40**

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
* **涉及知识**：字典树、哈希表
* **题目地址**：https://leetcode-cn.com/problems/longest-word-in-dictionary/
* **题目内容**：

```
给出一个字符串数组 words 组成的一本英语词典。

从中找出最长的一个单词，
该单词是由 words 词典中其他单词逐步添加一个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。

若无答案，则返回空字符串。

示例 1:

输入: 
words = ["w","wo","wor","worl", "world"]
输出: "world"
解释: 
单词 "world" 可由 "w", "wo", "wor", 和 "worl" 添加一个字母组成。

示例 2:

输入: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出: "apple"
解释: 
"apply"和"apple"都能由词典中的单词组成。
但是"apple"得字典序小于"apply"。

注意:

所有输入的字符串都只包含小写字母。
words 数组长度范围为 [1,1000]。
words[i] 的长度范围为 [1,30]。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 词典中最长的单词
 * @param {string[]} words
 * @return {string}
 */
const longestWord = (words) => {
  const map = [[]];
  for (let i = 0; i < words.length; i++) {
    if (map[words[i].length]) {
      map[words[i].length].push(words[i]);
    } else {
      map[words[i].length] = [words[i]];
    }
  }
  let route = [...map[1]];
  for (let i = 2; i < map.length; i++) {
    let tempRoute = [];
    for (let j = 0; j < map[i].length; j++) {
      const index = route.findIndex(item => map[i][j].slice(0, map[i][j].length - 1) === item);
      if (index > -1) {
        tempRoute.push(map[i][j]);
      }
    }
    if (tempRoute.length) {
      route = tempRoute;
    }
  }
  return route.sort((a, b) => a.localeCompare(b))[0] || '';
};

console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world'])); // world
console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])); // apple
console.log(longestWord(['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat'])); // latte
console.log(longestWord(['yo', 'ew', 'fc', 'zrc', 'yodn', 'fcm', 'qm', 'qmo', 'fcmz', 'z', 'ewq', 'yod', 'ewqz', 'y'])); // yodn
console.log(longestWord(['rac', 'rs', 'ra', 'on', 'r', 'otif', 'o', 'onpdu', 'rsf', 'rs', 'ot', 'oti', 'racy', 'onpd'])); // otif
console.log(longestWord(['ogz','eyj','e','ey','hmn','v','hm','ogznkb','ogzn','hmnm','eyjuo','vuq','ogznk','og','eyjuoi','d'])); // eyj
```

`node index.js` 返回：

```js
world
apple
latte
yodn
otif
eyj
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 57/57 cases passed (164 ms)
* Your runtime beats 35.59 % of javascript submissions
* Your memory usage beats 42.86 % of javascript submissions (41.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，拿到题目，开始解析：

1. 进行 `sort` 长度排序，让单词按照长度从小到大进行排序。
2. 进行 `for` 遍历，如果下一个长度包裹上一个长度，那么说明它 “进化” 了。

> 第一次尝试

```js
const longestWord = (words) => {
  // 按照长度排序
  words.sort((a, b) => a.length - b.length);
  // 查找
  let prevMark = '';
  let nowMark = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(nowMark)) {
      prevMark = nowMark;
      nowMark = words[i];
    } else if (words[i].includes(prevMark) && words[i] < nowMark) {
      nowMark = words[i];
    }
  }
  return nowMark;
};
```

但是，我知道这样子会出事，虽然我的两个例子都通过了：

```js
console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']));
// world
console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']));
// apple
```

为什么呢，因为假设如果它这个词典，不仅仅只有一条线的时候，你不知道以哪个为基础：

```js
Wrong Answer
20/57 cases passed (N/A)

Testcase
["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]

Answer
"cat"

Expected Answer
"latte"
```

说白了就是它不想你那么简单过关~

现在有三条基线：

* `m, mo, moc, moch, mocha`
* `l, la, lat, latt, latte`
* `c, ca, cat`

想个法子，做多线操作：

> 第二次尝试

```js
const longestWord = (words) => {
  // 按照长度排序
  words.sort((a, b) => a.length - b.length);
  // 查找
  const map = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      map.push({
        prevValue: words[i],
        nextValue: words[i],
      })
    } else {
      for (let j = 0; j < map.length; j++) {
        if (
          words[i][0] === map[j].nextValue[0]
          && words[i].includes(map[j].nextValue)
        ) {
          map[j].prevValue = map[j].nextValue;
          map[j].nextValue = words[i];
          break;
        } else if (words[i].includes(map[j].prevValue) && words[i] < map[j].nextValue) {
          map[j].nextValue = words[i];
          break;
        }
      }
    }
  }
  map.sort((a, b) => b.nextValue.length - a.nextValue.length);
  const length = map[0].nextValue.length;
  let result = map[0].nextValue;
  for (let i = 0; i < map.length; i++) {
    if (map[i].nextValue.length === length) {
      result = result < map[i].nextValue ? result : map[i].nextValue;
    } else {
      break;
    }
  }
  return result;
};
```

罗里吧嗦写了长长一堆，然后能对现有的 3 个案例进行准确排序了：

```js
console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']));
// world
console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']));
// apple
console.log(longestWord(['m','mo','moc','moch','mocha','l','la','lat','latt','latte','c','ca','cat']));
// latte
```

但是，我并不想分析我写的代码和优化它了，因为我看到了不可思议的一幕：

```js
Wrong Answer
29/57 cases passed (N/A)

Testcase
["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]

Answer
"ewqz"

Expected Answer
"yodn"
```

然后我尝试打印了一下：

```js
console.log('ewqz' < 'yodn');
```

返回的结果是 `true`，如果是按照词典的排序，那么 `ewqz` 也应当在 `yodn` 之前，那么究竟是什么缘故呢？我也只能翻看答案了！

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

看完答案后，我直接怀疑人生了：

> JavaScript 答案题解

```js
const longestWord = (words) => {
  // 按长度排序，如果长度相同，按字典序降序排列,
  let map = new Map();
  words.sort((a, b) => {
    if (!map.has(a)) map.set(a, 1);
    if (!map.has(b)) map.set(b, 1);
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return b[i].charCodeAt() - a[i].charCodeAt();
        }
      }
    } else {
      return a.length - b.length;
    }
  });
  // 字典序的降序排列保证同长度下满足条件的第一个一定是字典序最小的
  for (let i = words.length - 1; i >= 0; --i) {
    let flag = true;
    // 如果到了一个长度的字符必然是 true
    for (let j = 0; j < words[i].length - 1; ++j) {
      let temp = words[i].substr(0, j + 1);
      if (!map.has(temp)) {
        flag = false;
      }
    }
    if (flag) {
      return words[i];
    }
  }
  return '';
};
```

……太长，不看！我就不信自己破解不了：

> jsliang 题解

```js
const longestWord = (words) => {
  const map = [[]];
  for (let i = 0; i < words.length; i++) {
    if (map[words[i].length]) {
      map[words[i].length].push(words[i]);
    } else {
      map[words[i].length] = [words[i]];
    }
  }
  let route = [...map[1]];
  for (let i = 2; i < map.length; i++) {
    let tempRoute = [];
    for (let j = 0; j < map[i].length; j++) {
      const index = route.findIndex(item => map[i][j].slice(0, map[i][j].length - 1) === item);
      if (index > -1) {
        tempRoute.push(map[i][j]);
      }
    }
    if (tempRoute.length) {
      route = tempRoute;
    }
  }
  return route.sort((a, b) => a.localeCompare(b))[0] || '';
};
```

思路非常简单，以 `['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat']` 为例：

**首先**，遍历 `words` 数组，通过设置 `map` 这个二维数组来重组数据：

```js
console.log(map);
[
  [],
  [ 'm', 'l', 'c' ],
  [ 'mo', 'la', 'ca' ],
  [ 'moc', 'lat', 'cat' ],
  [ 'moch', 'latt' ],
  [ 'mocha', 'latte' ],
]
```

**然后**，我们假设这个数组是有进化路线的，例如：`l -> la -> lat`。

那么，通过初始化设置 `route` 为仅包含一个长度的字母：`['m', 'l', 'c']`。

**接着**，双重 `for` 遍历这个二维数组，查看其每一项是否是 `route` 中的元素添加了一个字母组成：

```js
console.log(tempRoute);
[ 'mo', 'la', 'ca' ]
[ 'moc', 'lat', 'cat' ]
[ 'moch', 'latt' ]
[ 'mocha', 'latte' ]
```

可以看到它真实按照我们给定的进化路线前行，最终得到的进化路线 `route` 为：

* `[ 'mocha', 'latte' ]`

**最后**，我们需要做的就是对这个数组进行排序，并输出最终结果的第一个元素即可：`route.sort((a, b) => a.localeCompare(b))[0] || ''`

Submit 提交：

```js
Accepted
* 57/57 cases passed (164 ms)
* Your runtime beats 35.59 % of javascript submissions
* Your memory usage beats 42.86 % of javascript submissions (41.3 MB)
```

这样，我们就完成了这道题的破解！！！

如果小伙伴们有更好的思路方法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
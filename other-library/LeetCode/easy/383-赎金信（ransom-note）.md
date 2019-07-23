383 - 赎金信（ransom-note）
===

> Create by **jsliang** on **2019-07-23 18:53:59**  
> Recently revised in **2019-07-23 19:35:24**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - Map](#chapter-three-one) |
| &emsp;[3.2 解法 - 暴力破解](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/ransom-note/
* **题目内容**：

```
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。
如果可以构成，返回 true；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - Map</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  let map = new Map();
  ransomNote.forEach(item => {
    if (map.get(item) !== undefined) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  })
  magazine.forEach(item => {
    if (map.get(item) !== undefined) {
      map.set(item, map.get(item) - 1);
      if (map.get(item) === 0) {
        map.delete(item);
      } 
    }
  })
  return map.size === 0;
};
```

* **执行测试**：

1. `ransomNote`：`aa`
2. `magazine`：`aab`
3. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 126/126 cases passed (100 ms)
  ✔ Your runtime beats 91 % of javascript submissions
  ✔ Your memory usage beats 42.11 % of javascript submissions (37.8 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `Map`：保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。[`Map` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Object/Map.md)
3. `forEach()`：`forEach()` 方法对数组的每个元素执行一次提供的函数。[`forEach()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/forEach.md)

* **解题思路**：

**首先**，尝试了下暴力破解：

```js
var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) {
        ransomNote.splice(i, 1);
        magazine.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return ransomNote.length === 0;
};
```

Submit 发现被无情否掉了：

```js
✘ Time Limit Exceeded
  ✘ 114/126 cases passed (N/A)
  ✘ testcase: '"ajbejfcgea。。。省略后面","jfcgea。。。省略后面"'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

**然后**，仔细思考了下，暴力是行不通了，遍历耗时太多，那么可不可以用空间换时间，使用 `Map` 进行哈希表记忆呢？

```js
var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  let map = new Map();
  ransomNote.forEach(item => {
    if (map.get(item) !== undefined) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  })
  magazine.forEach(item => {
    if (map.get(item) !== undefined) {
      map.set(item, map.get(item) - 1);
      if (map.get(item) === 0) {
        map.delete(item);
      } 
    }
  })
  return map.size === 0;
};
```

> 中间尝试了 n 遍后……

Submit 试试：

```js
✔ Accepted
  ✔ 126/126 cases passed (100 ms)
  ✔ Your runtime beats 91 % of javascript submissions
  ✔ Your memory usage beats 42.11 % of javascript submissions (37.8 MB)
```

OK 成功破解！

顺带讲解下主要思路：

1. 将两个字符串 `'aa'`、`'aab'` 切割成数组：`['a', 'a']`、`['a', 'a', 'b']`
2. 第一个 `forEach` 将其中元素及其出现次数记录到 `Map` 中。
3. 第二个 `forEach` 进行出现次数递减，如果次数为 0 的时候，删除这个元素。
4. 最后判断 `Map` 的长度即可。

**最后**，我们再思考下，还有其他方法吗？

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) != -1) {
      magazine.splice(magazine.indexOf(ransomNote[i]), 1)
    } else {
      return false;
    }
  }
  return true;
};
```

* **执行测试**：

1. `ransomNote`：`aa`
2. `magazine`：`aab`
3. `return`：

```js
true
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 126/126 cases passed (108 ms)
  ✔ Your runtime beats 81 % of javascript submissions
  ✔ Your memory usage beats 31.05 % of javascript submissions (39.1 MB)
```

* **知识点**：

1. `split()`：`split()` 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。[`split()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/split.md)
2. `indexOf()`：判断数组中是否存在判断条件中的值。如果存在，则返回第一次出现的索引；如果不存在，则返回 -1。[`indexOf()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/indexOf.md)
3. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/splice.md)

* **解题思路**：

**首先**，看到评论区的这道题解，内心感情非常丰富：还记得前面的题解吗？

```js
var canConstruct = function(ransomNote, magazine) {
  ransomNote = ransomNote.split('');
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {
      if (ransomNote[i] === magazine[j]) {
        ransomNote.splice(i, 1);
        magazine.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return ransomNote.length === 0;
};
```

这里我们使用了两次遍历，所以超时了。

超时之后，我们立马更换了使用 `Map` 来做哈希表，从而解决了这道题。

而看到评论区的这个题解，则是优化了我这个超时的代码：

```js
var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) != -1) {
      magazine.splice(magazine.indexOf(ransomNote[i]), 1)
    } else {
      return false;
    }
  }
  return true;
};
```

大佬的想法是：

1. 将字符串 `magazine` 拆分成数组。
2. 遍历 `ransomNote`，判断它每个字符串是否存在于 `magazine` 中。如果存在，则删掉 `magazine` 中的这个元素（相当于杂志剪去这个字母，防止杂志中的字母不够用）；如果不存在，表明 `magazine` 杂志的单词不够完成写赎金信。

这样，就完成了我的想法的优化。

* **结论**

有时候你完成不了的，你可以换一个思路，也可以就原本思路进行优化，不要因为限制了，所以感觉苦恼，无法前行。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
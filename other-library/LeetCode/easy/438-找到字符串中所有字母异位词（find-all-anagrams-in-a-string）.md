438 - 找到字符串中所有字母异位词（find-all-anagrams-in-a-string）
===

> Create by **jsliang** on **2019-07-29 11:41:39**  
> Recently revised in **2019-09-18 14:07:07**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
* **题目内容**：

```
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。

示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。

示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
const isEqual = (a, b) => {
  for (let k in a) {
    if (a[k] !== b[k]) {
      return false;
    }
  }
  return true;
}
const findAnagrams = (s, p) => {
  const pLength = p.length;
  const sLength = s.length;
  let result = [];
  let mapS = new Array(26);
  let mapP = new Array(26);
  for (let i = 0; i < pLength; i++) {
    let sKey = p[i].charCodeAt() - 97;
    if (mapP[sKey]) {
      mapP[sKey] += 1;
    } else {
      mapP[sKey] = 1;
    }
  }
  for (let i = 0; i < sLength; i++) {
    let sKey = s[i].charCodeAt() - 97;
    if (mapS[sKey]) {
      mapS[sKey] += 1;
    } else {
      mapS[sKey] = 1;
    }
    if (i >= pLength) {
      mapS[s[i - pLength].charCodeAt() - 97] -= 1;
    }
    if (isEqual(mapP, mapS)) {
      result.push(i - pLength + 1);
    }
  }
  return result;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `s`：`abaacbabc`
2. `p`：`abc`
3. `return`：

```js
[ 3, 4, 6 ]
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 36/36 cases passed (204 ms)
  ✔ Your runtime beats 61.73 % of javascript submissions
  ✔ Your memory usage beats 32.2 % of javascript submissions (41.7 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `charCodeAt()`：`charCodeAt()` 获得字母对应的 ASCII 编码，例如 A - 65。[`charCodeAt()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/String/charCodeAt.md)
2. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/push.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，做了一版尝试：

```js
const getPosition = (slice, p) => {
  slice = slice.split('').sort().join('');
  p = p.split('').sort().join('');
  if (slice === p) {
    return true;
  } else {
    return false;
  }
}

const findAnagrams = (s, p) => {
  const sLength = s.length;
  const pLength = p.length;
  let result = [];
  for (let i = 0; i < (sLength - pLength) + 1; i++) {
    if (getPosition(s.slice(i, i + pLength), p)) {
      result.push(i);
    }
  }
  return result;
};
```

通过遍历数组 `s`，将其每个部分拆出来，一一和 `p` 对比，从而找到对应位置。

这个在字符串较短的时候是 OK 的，但是较长的字符串的话，就会超时报错：

```js
✘ Time Limit Exceeded
  ✘ 35/36 cases passed (N/A)
  ✘ testcase: '
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopq...省略"
  \n
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghij...省略"'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

经校验：`s` 的长度为 20098，`p` 的长度为 10036，所以需要计算的次数为 10000 多次，就超时了，差评~

所以想想其他法子吧。

**然后**，也许你会说，使用 `Map` 会不会好点：

```js
const resetMap = (p, map) => {
  for (let i = 0; i < p.length; i++) {
    if (map.get(p[i]) !== undefined) {
      map.set(p[i], map.get(p[i]) + 1);
    } else {
      map.set(p[i], 1);
    }
  }
  return map;
}

const getPosition = (slice, map) => {
  for (let i = 0; i < slice.length; i++) {
    if (map.get(slice[i]) !== undefined) {
      map.set(slice[i], map.get(slice[i]) - 1);
      if (map.get(slice[i]) === 0) {
        map.delete(slice[i]);
      }
    }
  }
  if (!map.size) {
    return true;
  } else {
    return false;
  }
}

const findAnagrams = (s, p) => {
  const sLength = s.length;
  const pLength = p.length;
  let map = new Map();
  resetMap(p, map);
  let result = [];
  for (let i = 0; i < (sLength - pLength) + 1; i++) {
    if (getPosition(s.slice(i, i + pLength), map)) {
      result.push(i);
    }
    map = new Map();
    resetMap(p, map);
  }
  return result;
};
```

Submit 提交的话，你会发现它比正常方法还更加被限制：

```js
✘ Time Limit Exceeded
  ✘ 34/36 cases passed (N/A)
  ✘ testcase: '
  "aaaaaaaaaaaaaaaaaaaaa... 省略 n 个"
  \n
  "aaaaaaaaaaaaaaaaaaaaa... 省略 n 个"
  '
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

**最后**，只能查看了大佬的代码，成功解题~

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

还有其他求解么？

有的：

> 方法 1：

```js
var findAnagrams = function (s, p) {
  var map = new Map();
  var res = [];
  var flag = 0;
  [...'abcdefghijklmnopqrstuvwxyz'].forEach((char, i) => map.set(char, 2 ** i));
  for (var i = 0; i < s.length; i++) {
    flag = flag + map.get(p[0]) - map.get(s[i]);
    flag === 0 && p.length - 1 <= i && res.push(i + 1 - p.length);
    p = p.slice(1) + s[i];
  }
  return res;
};
```

提交后：

```js
✔ Accepted
  ✔ 36/36 cases passed (160 ms)
  ✔ Your runtime beats 75.31 % of javascript submissions
  ✔ Your memory usage beats 40.68 % of javascript submissions (41.4 MB)
```

> 方法 2：滑动窗口

```js
var findAnagrams = function(str, pattern) {
  const map = {};
  for (const char of pattern) {
    map[char] = ~~(map[char]) + 1;
  }

  const currentMap = Object.keys(map).reduce((pre, key) => Object.assign(pre, {[key]: 0}), {})

  const result = [];

  for (const [index, char] of [...str].entries()) {
    if(index < pattern.length - 1) {
      map[char] !== undefined && (currentMap[char] += 1);
      continue;
    }
    let lastchar = str[index - pattern.length]

    if(map[lastchar] !== undefined) {
      currentMap[lastchar] -= 1;
    }

    if(map[char] !== undefined) {
      currentMap[char] += 1;
    }

    if(JSON.stringify(currentMap) === JSON.stringify(map)) {
      result.push(index - pattern.length + 1);
    }
  }
  
  return result;
}
```

Submit 提交：

```js
✔ Accepted
  ✔ 36/36 cases passed (876 ms)
  ✔ Your runtime beats 35.8 % of javascript submissions
  ✔ Your memory usage beats 5.09 % of javascript submissions (44.2 MB)
```

至于其中逻辑请自行探索，这里就不多讲啦~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
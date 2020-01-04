774 - 宝石与石头（jewels-and-stones）
===

> Create by **jsliang** on **2020-01-04 08:38:32**  
> Recently revised in **2020-01-04 08:59:47**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/jewels-and-stones/
* **题目内容**：

```
给定字符串 J 代表石头中宝石的类型，
和字符串 S 代表你拥有的石头。

S 中每个字符代表了一种你拥有的石头的类型，
你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，
J 和 S 中的所有字符都是字母。
字母区分大小写，
因此 "a" 和 "A" 是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3

示例 2:

输入: J = "z", S = "ZZ"
输出: 0

注意:

S 和 J 最多含有50个字母。
 J 中的字符不重复。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 宝石与石头
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const map = new Map();
  for (let i = 0; i < J.length; i++) {
    map.set(J[i], true);
  }
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (map.get(S[i])) {
      result += 1;
    }
  }
  return result;
};

console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
```

`node index.js` 返回：

```js
3
0
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 254/254 cases passed (68 ms)
* Your runtime beats 70.91 % of javascript submissions
* Your memory usage beats 31.24 % of javascript submissions (34.4 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

太过简单，都懒得思考了，直接撸代码：

> 哈希表

```js
const numJewelsInStones = (J, S) => {
  const map = new Map();
  for (let i = 0; i < J.length; i++) {
    map.set(J[i], true);
  }
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (map.get(S[i])) {
      result += 1;
    }
  }
  return result;
};
```

定义一个哈希表，记录 `J` 的所有内容。

然后遍历 `S` 的所有内容，如果其中的元素是哈希表中出现的，那么就将结果 `result + 1`。

Submit 提交如下：

```js
Accepted
* 254/254 cases passed (68 ms)
* Your runtime beats 70.91 % of javascript submissions
* Your memory usage beats 31.24 % of javascript submissions (34.4 MB)
```

值得思考，自秤是比较精炼的了，居然效率那么低下？

换一种题解：

> 暴力破解

```js
const numJewelsInStones = (J, S) => {
  let result = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      result += 1;
    }
  }
  return result;
};
```

Submit 提交：

```js
Accepted
* 254/254 cases passed (72 ms)
* Your runtime beats 50.38 % of javascript submissions
* Your memory usage beats 76.38 % of javascript submissions (33.7 MB)
```

enm...还是不如人意？

所以大佬做了啥，居然给刷得那么厉害。

> 一行求解

```js
const numJewelsInStones = (J, S) => S.split('').filter(i => J.includes(i)).length;
```

Submit 提交：

```js
Accepted
* 254/254 cases passed (64 ms)
* Your runtime beats 85.15 % of javascript submissions
* Your memory usage beats 37.81 % of javascript submissions (34.3 MB)
```

越发在意，存储（memory）的占用都那么少，时间（runtime）也不是很好……

在【题解区】和【评论区】找了很久，发觉不是事儿，指不定大佬做完，也没有 show 一下解析。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
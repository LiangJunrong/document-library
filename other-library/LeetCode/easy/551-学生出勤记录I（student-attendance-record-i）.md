551 - 学生出勤记录I（student-attendance-record-i）
===

> Create by **jsliang** on **2019-11-12 08:30:53**  
> Recently revised in **2019-11-12 09:15:16**

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
* **题目地址**：https://leetcode-cn.com/problems/student-attendance-record-i/
* **题目内容**：

```
给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

* 'A' : Absent，缺勤
* 'L' : Late，迟到
* 'P' : Present，到场

如果一个学生的出勤记录中不超过一个'A'(缺勤)

并且不超过两个连续的'L'(迟到),

那么这个学生会被奖赏。

你需要根据这个学生的出勤记录判断他是否会被奖赏。

示例 1:
输入: "PPALLP"
输出: True

示例 2:
输入: "PPALLL"
输出: False
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js

```

`node index.js` 返回：

```js

```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js

```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**人生难得一道题，居然想的是用哪种骚方法实现比较炫酷。**

```js
// 实现记录……
```

然后，然后我就发现我被坑了：

* 不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到)

审题啊审题！

再来一遍：

```js
/**
 * @name 学生出勤记录I
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
  let AFlag = true;
  let LFlag = true;
  for (let i = 0; i < s.length; i++) {
    if (AFlag && s[i] === 'A' && s.lastIndexOf('A') !== i) {
      AFlag = false;
    }
    if (LFlag && s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') {
      LFlag = false;
    }
    if (!AFlag || !LFlag) {
      break;
    }
  }
  return AFlag && LFlag;
};
```

Submit 提交：

```js
Accepted
* 113/113 cases passed (64 ms)
* Your runtime beats 84.42 % of javascript submissions
* Your memory usage beats 78.57 % of javascript submissions (33.6 MB)
```

解法如下：

1. 设置 A 和 L 的标志，都没有超标。
2. 循环中。判断当前元素为 `'A'`，并且最后一个 `'A'` 的位置和当前位置不相同，意味着有 2 个 `'A'` 及以上，设置 `'A'` 超标。
3. 循环中。判断当前元素为 `'L'`，并且 `i+1`、`i+2` 的元素都为 `'L'`，意味着有 3 个 `'L'`，设置 `'L'` 超标。
4. 循环中。如果满足以上任意一个条件，那么就中止循环（减少时间成本）。
5. 唯有 A 和 L 的标志同为 `true`，才能获得奖励。

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

不甚满意！

1. 遍历中还设置了 `lastIndexOf`，成本较高。
2. 判断有点绕。

所以下面看看【题解区】和【评论区】有没大佬见解。

> 官方题解 1 - 字符串解法

```js
const checkRecord = (s) => {
  let count = 0;
  for (let i = 0; i < s.length && count < 2; i++) {
    if (s[i] === 'A') {
      count++;
    }
  }
  return count < 2 && s.indexOf('LLL') < 0;
};
```

虽然官方题解比我的简练，但是效果好像没我好：

```js
Accepted
* 113/113 cases passed (72 ms)
* Your runtime beats 62.34 % of javascript submissions
* Your memory usage beats 66.67 % of javascript submissions (33.7 MB)
```

> 官方题解 2 - 正则解法

```js
const checkRecord = (s) => {
  return !s.match(".*(A.*A|LLL).*");
};
```

任何方法，惯上了正则，都变得高大上，当然一般人都不怎么想搞，毕竟在 **jsliang** 的理解中，喜欢写正则要不就是大佬，要不就喜欢秀（然后业务代码不可维护 /手动滑稽）：

```js
Accepted
* 113/113 cases passed (72 ms)
* Your runtime beats 62.34 % of javascript submissions
* Your memory usage beats 64.29 % of javascript submissions (33.7 MB)
```

好吧，其他大佬写得有点杂，这里就不一一展示了。

如果小伙伴有更好的想法，欢迎评论留言或者直接私聊我，我们下期见~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
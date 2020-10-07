1154 - 一年中的第几天（day-of-the-year）
===

> Create by **jsliang** on **2020-01-31 15:04:03**  
> Recently revised in **2020-01-31 15:18:00**

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
* **涉及知识**：数学
* **题目地址**：https://leetcode-cn.com/problems/day-of-the-year/
* **题目内容**：

```
给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，
请你计算并返回该日期是当年的第几天。

通常情况下，我们认为 1 月 1 日是每年的第 1 天，
1 月 2 日是每年的第 2 天，依此类推。
每个月的天数与现行公元纪年法（格里高利历）一致。

示例 1：

输入：date = "2019-01-09"
输出：9

示例 2：

输入：date = "2019-02-10"
输出：41

示例 3：

输入：date = "2003-03-01"
输出：60

示例 4：

输入：date = "2004-03-01"
输出：61

提示：

date.length == 10
date[4] == date[7] == '-'，其他的 date[i] 都是数字。
date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/day-of-the-year
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 一年中的第几天
 * @param {string} date
 * @return {number}
 */
const dayOfYear = (date) => {
  const year = date.substr(0, 4);
  const mouth = date.substr(5, 2);
  const day = date.substr(8, 2);
  let sum = 0;
  const days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    days[1] = 29;
  }
  for (var i = 0; i < mouth - 1; i++) {
    sum = sum + days[i];
  }
  sum = sum + day * 1;
  return sum;
};

console.log(dayOfYear('2019-01-09')); // 9
```

`node index.js` 返回：

```js
9
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 246/246 cases passed (64 ms)
* Your runtime beats 76.92 % of javascript submissions
* Your memory usage beats 59.14 % of javascript submissions (33.8 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

不好意思数学不好，让小伙伴们失望了：

> 【题解区】暴力破解

```js
const dayOfYear = (date) => {
  const year = date.substr(0, 4);
  const mouth = date.substr(5, 2);
  const day = date.substr(8, 2);
  let sum = 0;
  const days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    days[1] = 29;
  }
  for (var i = 0; i < mouth - 1; i++) {
    sum = sum + days[i];
  }
  sum = sum + day * 1;
  return sum;
};
```

主要思路是：

1. 获取年份（`year`），月份（`month`），日期（`day`），这些是题目的参数 `date` 给到的。
2. 设置 `days` 数组统计正常的 12 个月：[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]。
3. 判断是否为闰年。闰年的规则是（能被 400 整除）或者（能被 4 整除但是不能被 100 整除）。
4. 然后计算即可。

Submit 提交：

```js
Accepted
* 246/246 cases passed (64 ms)
* Your runtime beats 76.92 % of javascript submissions
* Your memory usage beats 59.14 % of javascript submissions (33.8 MB)
```

好吧是我偷懒了~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
1313 - 解压缩编码列表（decompress-run-length-encoded-list）
===

> Create by **jsliang** on **2020-02-01 20:22:55**  
> Recently revised in **2020-02-01 20:35:13**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/decompress-run-length-encoded-list/
* **题目内容**：

```
给你一个以行程长度编码压缩的整数列表 nums 。

考虑每对相邻的两个元素
[a, b] = [nums[2*i], nums[2*i+1]]
（其中 i >= 0 ），
每一对都表示解压后有 a 个值为 b 的元素。

请你返回解压后的列表。

示例：

输入：nums = [1,2,3,4]
输出：[2,4,4,4]
解释：
第一对 [1,2] 代表着 2 的出现频次为 1，所以生成数组 [2]。
第二对 [3,4] 代表着 4 的出现频次为 3，所以生成数组 [4,4,4]。
最后将它们串联到一起 [2] + [4,4,4,4] = [2,4,4,4]。

提示：

2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decompress-run-length-encoded-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 解压缩编码列表
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 === 1) {
      result.push(...Array.from(Array(nums[i - 1]), () => nums[i]));
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2, 4, 4, 4]
```

`node index.js` 返回：

```js
[2, 4, 4, 4]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 52/52 cases passed (148 ms)
* Your runtime beats 5.08 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

首先，我们分析下题目：

* 第 奇数位 为需要生成的次数
* 第 偶数位 为对应需要生产的数字

那么就有：

> 暴力破解

```js
const decompressRLElist = (nums) => {
  const result = [];
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 === 1) {
      result.push(...Array.from(Array(nums[i - 1]), () => nums[i]));
    }
  }
  return result;
};
```

我们只判断奇数位，然后通过 `Array.from(i+1, () => i)` 的形式，生成 `n` 个 `nums[i]`。

Submit 提交：

```js
Accepted
* 52/52 cases passed (148 ms)
* Your runtime beats 5.08 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (37.1 MB)
```

再次收获一次空间 100% 打败的记录。

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
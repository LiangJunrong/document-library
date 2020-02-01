1287 - 有序数组中出现次数超过25%的元素（element-appearing-more-than-25-in-sorted-array）
===

> Create by **jsliang** on **2020-02-01 17:58:22**  
> Recently revised in **2020-02-01 18:08:48**

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
* **题目地址**：https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/
* **题目内容**：

```
给你一个非递减的 有序 整数数组，
已知这个数组中恰好有一个整数，
它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数

示例：

输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6
 

提示：

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 有序数组中出现次数超过25%的元素
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
  let maxNumber = arr[0],
      maxTime = 1,
      nowNumber = arr[0],
      nowTime = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === nowNumber) {
      nowTime++;
      if (nowTime > maxTime) {
        maxTime = nowTime;
        maxNumber = nowNumber;
      }
    } else {
      nowNumber = arr[i];
      nowTime = 1;
    }
  }
  return maxNumber;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
```

`node index.js` 返回：

```js
6
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 18/18 cases passed (68 ms)
* Your runtime beats 81.25 % of javascript submissions
* Your memory usage beats 84.04 % of javascript submissions (35.3 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，看完题目，难免怀疑下，会不会有多个元素超过 25%。

然后题目意思是：

```
给你一个非递减的 有序 整数数组，
已知这个数组中恰好有一个整数，
它的出现次数超过数组元素总数的 25%。
```

OK，那就假定：

1. 只有一个
2. 递增整数数组
3. 超过 25%

那么，开始解题：

> 暴力破解

```js
const findSpecialInteger = (arr) => {
  let maxNumber = arr[0],
      maxTime = 1,
      nowNumber = arr[0],
      nowTime = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === nowNumber) {
      nowTime++;
      if (nowTime > maxTime) {
        maxTime = nowTime;
        maxNumber = nowNumber;
      }
    } else {
      nowNumber = arr[i];
      nowTime = 1;
    }
  }
  return maxNumber;
};
```

Submit 提交：

```js
Accepted
* 18/18 cases passed (68 ms)
* Your runtime beats 81.25 % of javascript submissions
* Your memory usage beats 84.04 % of javascript submissions (35.3 MB)
```

enm...这和前一道题《1281 - 整数的各位积和之差》一样，感觉都是入门级别的。

所以这里就不多 bb 啦~

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
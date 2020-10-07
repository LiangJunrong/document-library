1122 - 数组的相对排序（relative-sort-array）
===

> Create by **jsliang** on **2020-01-31 13:23:43**  
> Recently revised in **2020-01-31 13:45:06**

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
* **涉及知识**：排序、数组
* **题目地址**：https://leetcode-cn.com/problems/relative-sort-array/
* **题目内容**：

```
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，
使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：

输入：
arr1 = [2,3,1,3,2,4,6,7,9,2,19], 
arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]

提示：

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/relative-sort-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 数组的相对排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  // 1. arr2 中出现的，按 arr2 顺序排序
  const appear = []; 
  for (let i = 0; i < arr2.length; i++) {
    appear.push(...arr1.filter(item => item === arr2[i]));
  }
  // 2. arr2 中未出现的，按升序排序
  const notAppearing = arr1.filter(item => !arr2.includes(item)).sort((a, b) => a - b);

  // 3. 通过 ... 组合两个数组
  return [...appear, ...notAppearing];
};

console.log(relativeSortArray(
  [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 7],
  [2, 1, 4, 3, 9, 6]
));
// [ 2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 7, 19 ]
```

`node index.js` 返回：

```js
[ 2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 7, 19 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 16/16 cases passed (68 ms)
* Your runtime beats 78.97 % of javascript submissions
* Your memory usage beats 58.12 % of javascript submissions (34.6 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

复读机 **jsliang**：

* 给定两个数组 `arr1` 和 `arr2`。
* `arr2` 中每个元素是唯一的。
* `arr2` 是 `arr1` 的子集。`arr2` 的所有元素在 `arr1` 中都有。
* 对 `arr1` 中的元素进行排序，使 `arr1` 中项的相对顺序和 `arr2` 中的相对顺序相同。未在 `arr2` 中出现过的元素需要按照升序放在 `arr1` 的末尾。

举例说明：

```
示例1：

输入：
arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
arr2: [2, 1, 4, 3, 9, 6]

输出：

[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
```

那么，开始破解：

> 暴力破解

```js
const relativeSortArray = (arr1, arr2) => {
  // 1. arr2 中出现的，按 arr2 顺序排序
  const appear = []; 
  for (let i = 0; i < arr2.length; i++) {
    appear.push(...arr1.filter(item => item === arr2[i]));
  }
  // 2. arr2 中未出现的，按升序排序
  const notAppearing = arr1.filter(item => !arr2.includes(item)).sort((a, b) => a - b);

  // 3. 通过 ... 组合两个数组
  return [...appear, ...notAppearing];
};
```

如上，通过简单的三步，我们就成功破解了这道题~

Submit 提交如下：

```js
Accepted
* 16/16 cases passed (68 ms)
* Your runtime beats 78.97 % of javascript submissions
* Your memory usage beats 58.12 % of javascript submissions (34.6 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

当然，剩下的就是看戏，磕着瓜子看看大佬秀操作：

> 【题解区】利用 sort

```js
const relativeSortArray = (arr1, arr2) => {
  return arr1.sort((a, b) => {
    let ia = arr2.indexOf(a);
    let ib = arr2.indexOf(b);
    if (ia == -1 && ib == -1) {
      return a - b;
    } else if (ia == -1) {
      return 1;
    } else if (ib == -1) {
      return -1;
    } else {
      return ia - ib;
    }
  });
};
```

Submit 提交：

```js
Accepted
* 16/16 cases passed (76 ms)
* Your runtime beats 41.38 % of javascript submissions
* Your memory usage beats 60.25 % of javascript submissions (34.6 MB)
```

其他的就不一一列举了，贴了也不一定会用~

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
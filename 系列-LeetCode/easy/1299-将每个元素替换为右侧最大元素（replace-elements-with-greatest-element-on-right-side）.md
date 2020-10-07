1299 - 将每个元素替换为右侧最大元素（replace-elements-with-greatest-element-on-right-side）
===

> Create by **jsliang** on **2020-02-01 19:05:34**  
> Recently revised in **2020-02-01 19:42:42**

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
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
* **题目内容**：

```
给你一个数组 arr ，
请你将每个元素用它右边最大的元素替换，
如果是最后一个元素，用 -1 替换。

完成所有替换操作后，请你返回这个数组。

示例：

输入：arr = [17,18,5,4,6,1]
输出：[18,6,6,6,1,-1]

提示：

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 将每个元素替换为右侧最大元素
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  const newArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    const index = newArr.indexOf(arr[i]);
    newArr.splice(index, 1);
    arr[i] = newArr[0];
  }
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [ 18, 6, 6, 6, 1, -1 ]
```

`node index.js` 返回：

```js
[ 18, 6, 6, 6, 1, -1 ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 15/15 cases passed (316 ms)
* Your runtime beats 32.42 % of javascript submissions
* Your memory usage beats 27.85 % of javascript submissions (41.1 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

仔细思考了这道题，一开始想了个笨法子（太笨就不展示了），觉得可能会超时。

于是琢磨了下：

> 暴力破解

```js
const replaceElements = (arr) => {
  const newArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    const index = newArr.indexOf(arr[i]);
    newArr.splice(index, 1);
    arr[i] = newArr[0];
  }
  arr[arr.length - 1] = -1;
  return arr;
};
```

我们执行了以下步骤：

1. 先对 `newArr` 进行 `arr` 的从大到小倒序排序。
2. 遍历 `arr`，先查找 `newArr` 中 `arr[i]` 这个元素并删除。
3. 设置 `arr[i]` 为当前数组最大的元素（即 `arr[0]`）。
4. 最后特意设置最后一个元素为 `-1`，返回 `arr` 即可。

Submit 提交：

```js
Accepted
* 15/15 cases passed (316 ms)
* Your runtime beats 32.42 % of javascript submissions
* Your memory usage beats 27.85 % of javascript submissions (41.1 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

官方总能让我意想不到：

> 逆序遍历

```js
const replaceElements = (arr) => {
  const result = Array.from(Array(arr.length), () => '');
  result[result.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = Math.max(result[i + 1], arr[i + 1]);
  }
  return result;
};
```

因为最后输出的数组是倒序的，所以我们通过倒序比较 `arr` 即可。

> 说，你的天地一号哪里买的！

Submit 提交：

```js
Accepted
* 15/15 cases passed (100 ms)
* Your runtime beats 68.49 % of javascript submissions
* Your memory usage beats 31.65 % of javascript submissions (40.3 MB)
```

如果小伙伴有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
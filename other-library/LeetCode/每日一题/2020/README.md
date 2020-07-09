LeetCode 2020 每日一题
===

> Create by **jsliang** on **2020-07-03 13:45:10**  
> Recently revised in **2020-07-09 11:29:59**  

有小伙伴好奇：

* **jsliang** 又拖更偷懒了！

其实，真不是。

1. 重写了书籍关于《算法与数据结构 - 数组》的部分。
2. 跟进了 LeetCode 官方的每日一题。

> 每日一题地址：https://leetcode-cn.com/circle/article/9EZfRE/?utm_campaign=daily_question&utm_medium=banner&utm_source=problemset&gio_link_id=noqw6arR

闲话不哆嗦，今天就分享一道 2 分钟能破解的题吧：

```
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，
找到矩阵中第 k 小的元素。

请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。

示例：

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
 

提示：
你可以假设 k 的值永远是有效的，1 ≤ k ≤ n2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

```js
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

};
```

它简单在哪呢？

**jsliang** 看了 2 分钟题目，然后花了 20 秒写出答案：

```js
const kthSmallest = (matrix, k) => matrix.flat().sort((a, b) => a - b)[k - 1];
```

这是一道中等难度的题目，但是破解的方法简单地不能再简单。

被震惊到的请留言，哈哈！

截至今天每日一题更新内容有：

* 0701-718-最长重复子数组
* 0702-378-有序矩阵中第K小的元素
* 0703-108-将有序数组转换为二叉搜索树
* 0706-63-不同路径II
* 0707-112-路径总和
* 0708-面试题16.11-跳水板
* 0709-面试题17.13-恢复空格

如果你也想每日打卡，这个就合适了，可以适当保持你的刷题状态。

> 又水了一篇文章

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
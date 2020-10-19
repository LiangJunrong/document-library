算法与数据结构
===

> Create by **jsliang** on **2020-09-01 21:07:27**  
> Recently revised in **2020-09-23 16:46:34**

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

1. 快速排序
2. 实现一个算法，来完成字符串相加，比如 `'111' + '2222' = '2333'`。(高精度算法)
3. 有一个 `'123456789101112131415....n+1'` 类似这样的序列，求出第 `m` 位的数字，例如 `m = 11 -> 输出 0`，`m = 12 -> 输出 1`
4. 有一个有序递增序列，求有多少个不同的数字。比如 `[1, 5, 7, 7, 8, 9, 9]`。里面总共有 5 个不同的数字：`[1, 5, 7, 8, 9]`
5. 红黑树和哈希表的对比
6. 哈希表如何解决冲突
7. 非递归实现树的后序遍历
8. [350-两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)
9. [611-有效三角形的个数](https://leetcode-cn.com/problems/valid-triangle-number/)
10. [659-分割数组为连续子序列](https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/)
11. 接雨水。给定数组 `[1, 8, 6, 2, 5, 4, 8, 3, 7]`，表示容器能容纳水的最大值。
12. 写一个数组去重。`O(n^2)` 及 `O(n)` 时间复杂度实现
13. 我现在有一个数组 `[1,2,3,4]`，请实现算法，得到这个数组的全排列的数组，如 `[2,1,3,4]`，`[2,1,4,3]`，你这个算法的时间复杂度是多少？
14. 我现在有一个背包，容量为 `m`，然后有 `n` 个货物，重量分别为 `w1,w2,w3...wn`，每个货物的价值是 `v1,v2,v3...vn`，`w` 和 `v` 没有任何关系，请求背包能装下的最大价值。
15. 二叉树的遍历方式和特点
16. 排序算法及其原理（手写）
17. [104-二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
18. [572-另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
19. [100-相同的树](https://leetcode-cn.com/problems/same-tree/)
20. [226-翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
21. [509-斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)
22. [88-合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)
23. [384-打乱数组](https://leetcode-cn.com/problems/shuffle-an-array/)
24. [56-合并区间](https://leetcode-cn.com/problems/merge-intervals/)

## 下划线转驼峰

实现一个方法，将传入对象的下划线命名方式全部换为驼峰式（考虑递归的场景）

```js
const obj = {
  my_name: 'jsliang',
  wo_de_jia: {
    zu_fang: '广州',
    jia: '河源',
    zu_ji: '茂名',
  },
};

/*
转换为：
{
  myName: 'jsliang',
  woDeJia: { jia: '河源', zuFang: '广州', zuJi: '茂名' },
}
*/

const getType = arg => Object.prototype.toString.call(arg).slice(8, -1);

const changeCamel = str => str.split('_').map((item, index) => index === 0 ? item : item.slice(0, 1).toUpperCase() + item.slice(1)).join('');

const change = (obj) => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (getType(obj[i]) === 'Object' && i.includes('_')) {
        const now = changeCamel(i);
        obj[now] = obj[i];
        delete obj[i];
        change(obj[now]);
      } else if (getType(obj[i]) === 'Object') {
        change(obj[i]);
      } else if (i.includes('_')) {
        const now = changeCamel(i);
        obj[now] = obj[i];
        delete obj[i];
      }
    }
  }

  return obj;
};

console.log(change(obj));
```

## 时间复杂度

| 排序 | 时间复杂度（good） | 时间复杂度（bad） | 空间复杂度 | 稳定性 |
| --- | --- | --- | --- | --- |
| 快速排序 | O(nlogn) | O(n^2) | O(logn)~O(n) | 不稳定 |
| 归并排序 | O(nlogn) | O(nlogn) | O(n) | 稳定 |
| 堆排序 | O(nlogn) | O(nlogn) | O(1) | 不稳定 |

从表格中我们可以看到，就时间复杂度而言，快排并没有很大优势。

然而为什么快排会成为最常用的排序手段，这是因为时间复杂度只能说明随着数据量的增加，算法时间代价增长的趋势，并不直接代表实际执行时间，实际运行时间还包括了很多常数参数的差别。

此外，在面对不同类型数据(比如有序数据、大量重复数据)时，表现也不同，综合来说，快排的时间效率是最高的。

在实际运用中, 并不只使用一种排序手段, 例如 V8 的 `Array.sort()` 就采取了当 `n<=10` 时, 采用**插入排序**, 当 `n>10` 时，采用三路快排的排序策略。

## 参考文献

### 算法

* [x] [排序算法](https://juejin.im/post/6844904116552990727#heading-51)【阅读建议：1h】

刷题：

* [ ] [LeetBook - 字节跳动](https://leetcode-cn.com/explore/interview/card/bytedance/)

学习：

* [ ] [动画详解常用排序算法（1）](https://mp.weixin.qq.com/s/XxmnKGLfstgbWjoj-eWddg)
* [ ] [模板不重要](https://mp.weixin.qq.com/s/d5Af7YwwrtdV_OqYzcWGSw)
* [ ] [更新！万字长文带你拿下九大排序的原理、Java 实现以及算法分析](https://mp.weixin.qq.com/s/vwzTA0UroV5nt_EWqhEspg)
* [ ] [动态规划](https://www.bilibili.com/video/BV1a4411y7uh?from=search&seid=9796558727922243523)
* [ ] [6k字 | 红黑树上红黑果，红黑树下你和我 —— 红黑树入门](https://juejin.im/post/6844904006175686669)
* [ ] [(1.8w字)负重前行，前端工程师如何系统练习数据结构和算法？](https://juejin.im/post/6844904061947346957)
* [ ] [Linked Lists in JavaScript (ES6 code)](https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3)
* [ ] [DS with JS — Linked Lists — II](https://medium.com/dev-blogs/ds-with-js-linked-lists-ii-3b387596e27e)
* [ ] [LeetCode List](https://zxi.mytechroad.com/blog/leetcode-list/)
* [ ] [JS中的算法与数据结构——链表(Linked-list)](https://www.jianshu.com/p/f254ec665e57)
* [ ] [前端笔试&面试爬坑系列---算法](https://juejin.im/post/5b72f0caf265da282809f3b5)
* [ ] [漫画：什么是红黑树？](https://juejin.im/post/5a27c6946fb9a04509096248)
* [ ] [前端你应该了解的数据结构与算法](https://juejin.im/post/5b331bc7f265da598451fd88)
* [ ] [数据结构和算法在前端领域的应用（前菜）](https://juejin.im/post/5d3dc8466fb9a07efc49d0a9)
* [ ] [数据结构与算法在前端领域的应用 - 第二篇](https://lucifer.ren/blog/2019/09/19/algorthimn-fe-2/)
* [ ] [JavaScript 数据结构与算法之美](https://github.com/biaochenxuying/blog/issues/43)
* [ ] [前端笔试&面试爬坑系列---算法](https://juejin.im/post/6844903656865677326)
* [ ] [漫画：什么是红黑树](https://juejin.im/post/6844903519632228365)

## 题目

* [ ] [一年半前端跳槽面试经验（头条、微信、shopee）](https://zhuanlan.zhihu.com/p/114028796)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
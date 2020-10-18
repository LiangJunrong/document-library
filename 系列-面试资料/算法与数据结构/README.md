算法与数据结构
===

> Create by **jsliang** on **2020-09-01 21:07:27**  
> Recently revised in **2020-09-23 16:46:34**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

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

1. 接雨水。给定数组 `[1, 8, 6, 2, 5, 4, 8, 3, 7]`，表示容器能容纳水的最大值。
2. 写一个数组去重。`O(n^2)` 及 `O(n)` 时间复杂度实现

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
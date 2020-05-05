labuladong 的算法小抄 - 笔记
===

> Create by **jsliang** on **2020-5-5 22:27:21**  
> Recently revised in **2020-5-5 22:49:07**

* [labuladong 的算法小抄](https://labuladong.gitbook.io/algo/)

## 笔记内容

## 数据结构

数据结构的存储方式只有两种：数组（顺序存储）和链表（链式存储）。

数组和链表的优缺点比较：

* **数组**：数组由于是紧凑连续存储，可以随机访问，通过索引快速找到元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(n)；而且如果想在数组中间插入或者删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(n)。
* **链表**：链表因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问；而且由于每个元素必须存储指向前后元素位置的指针，会消耗相对更多的存储空间。

数据结构的基本操作无非是增删查改。

数据结构的种类很多，但是它们的存在目的都是在不同的应用场景，尽可能高效地增删查改。

所谓框架，就是套路。不管增删查改，这些代码都是永远无法脱离的结构，你可以把这个结构作为大纲，根据具体问题在框架上添加代码就行了。

## 算法

需要明确的是：数据结构是工具，算法是通过核实的工具解决特定问题的方法。也就是说，学习算法之前，最起码得了解那些常用的数据结构，了解它们的特性和缺陷。

建议：先刷二叉树、先刷二叉树、先刷二叉树！

因为二叉树是最容易培养框架思维的，而且大部分算法技巧，本质上都是树的遍历问题。

对于一个理解二叉树的人来说，刷一道二叉树的题目花不了多长时间。

如果你对刷题无从下手或者有畏惧心理，不妨从二叉树下手，前 10 道也许有点难受；结合框架再做 20 道，也许你就有点自己的理解；刷完整个专题，再去做回溯、动态规划、分治专题，**你就会发现只要涉及递归的问题，都是树的问题**。

刷算法题建议从「树」分类开始刷，结合框架思维，把这几十道题刷完，对于树结构的理解应该就到位了。这时候去看回溯、动规、分治等算法专题，对思路的理解可能会更加深刻一些。

## 推荐数据

《算法 4》

学习就要带着目的性去学，大部分人学习算法不就是巩固计算机知识，对付面试题目吗？如果是这个目的，那就学习基本的数据结构和经典算法，明白它们的时间复杂度，然后去刷题就好了，何必和习题、证明过不去？

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
labuladong 的算法小抄 - 笔记
===

> Create by **jsliang** on **2020-5-5 22:27:21**  
> Recently revised in **2020-05-20 11:02:54**

* [labuladong 的算法小抄](https://labuladong.gitbook.io/algo/)

## 笔记内容

1. 思维导读（刷题思路、读书、算法学习路线等）
2. 数据结构
3. 动态规划
4. 回溯算法
5. 二分查找
6. 双指针
7. 滑动窗口
8. 高频面试系列

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

## 推荐书籍

《算法 4》

学习就要带着目的性去学，大部分人学习算法不就是巩固计算机知识，对付面试题目吗？如果是这个目的，那就学习基本的数据结构和经典算法，明白它们的时间复杂度，然后去刷题就好了，何必和习题、证明过不去？

## 动态规划

* [地址](https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/dong-tai-gui-hua-xiang-jie-jin-jie)

动态规划问题的一般形式就是求最值。

动态规划其实是运筹学的一种最优化方法，只不过在计算机问题上应用比较多，比如说让你求最长递增子序列、最小编辑距离等。

既然是要求最值，核心点在哪？

求解动态规划的核心问题就是穷举。因为要求最值，肯定要把所有可行的答案穷举出来，然后在其中找最值。

1. **首先**，动态规划的穷举有点特别，因为这类问题存在【重叠子问题】，如果穷举的话效率就会极其低下，所以需要【备忘录】或者【DP table】来优化穷举过程，避免不必要的计算。
2. **而且**，动态规划一定会具备【最优子结构】，才能通过子问题的最值得到原问题的最值。
3. **另外**，虽然动态规划的核心思想是穷举求最值，但是问题可以千变万化，穷举所有可行解其实并不是一件容易的事，只有列出争取的【状态转移方程】才能正确地穷举。

以上 **重叠子问题**、**最优子结构** 以及 **状态转移方程** 就是动态规划三要求。

* 明确【状态】 -> 定义 dp 数组/函数的含义 -> 明确【选择】 -> 明确 base case。

举例：

1. 斐波那契数列
2. 凑零钱

**千万不要看不起暴力解，动态规划问题最困难的就是写出状态转移方程**，即这个暴力解。

优化方法无非是用备忘录或者 DP table，再无奥妙可言。

**计算机解决问题其实没有任何奇技淫巧，它唯一的解决办法就是穷举**，穷举所有可能性。算法设计无非就是先思考“如何穷举”，然后再追求“如何聪明地穷举”。

最优子结构并不是动态规划独有的一种性质，能求最值的问题大部分都具有这个性质；但反过来，最优子结构性质作为动态规划问题的必要条件，一定是让你求最值的，以后碰到那种恶心人的最值题，思路往动态规划想就对了，这就是套路。

## 回溯

解决一个回溯问题，实际上就是一个决策树的遍历过程：

1. 路径：也就是已经做出的选择。
2. 选择列表：也就是你当前可以做的选择。
3. 结束条件：也就是到达决策树底层，无法再做选择的条件。

## 二分查找

二分查找框架

```js
const binarySearch = (nums, target) => {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = left + (left - left) / 2;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  
  return -1;
}
```

## 滑动窗口

```c++
int left = 0, right = 0;

while (right < s.size()) {
    // 增大窗口
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}
```

```c++
/* 滑动窗口算法框架 */
void slidingWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;

    int left = 0, right = 0;
    int valid = 0; 
    while (right < s.size()) {
        // c 是将移入窗口的字符
        char c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        /*** debug 输出的位置 ***/
        printf("window: [%d, %d)\n", left, right);
        /********************/

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            char d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```

## 双指针

双指针再分类两类，一类是【快慢指针】，一类是【左右指针】。

前者解决主要解决链表中的问题，比如典型的判定链表中是否包含环；

后者主要解决数组（或者字符串）中的问题，比如二分查找。

## BFS（广度优先搜索）

```c++
// 计算从起点 start 到终点 target 的最近距离
int BFS(Node start, Node target) {
    Queue<Node> q; // 核心数据结构
    Set<Node> visited; // 避免走回头路

    q.offer(start); // 将起点加入队列
    visited.add(start);
    int step = 0; // 记录扩散的步数

    while (q not empty) {
        int sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (int i = 0; i < sz; i++) {
            Node cur = q.poll();
            /* 划重点：这里判断是否到达终点 */
            if (cur is target)
                return step;
            /* 将 cur 的相邻节点加入队列 */
            for (Node x : cur.adj())
                if (x not in visited) {
                    q.offer(x);
                    visited.add(x);
                }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
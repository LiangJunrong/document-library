LRU 缓存淘汰策略
===

> Create by **jsliang** on **2020-09-23 17:45:30**  
> Recently revised in **2020-11-22 20:25:59**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 刷题](#chapter-four) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [x] [LRU 算法](https://zhuanlan.zhihu.com/p/149872100)【阅读建议：20min】
* [x] [前端进阶算法3：从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法](https://github.com/sisterAn/JavaScript-Algorithms/issues/9)【阅读建议：30min】

## <a name="chapter-three" id="chapter-three"></a>三 正文

> [返回目录](#chapter-one)

* **为什么需要浏览器缓存？**

通过从输出 URL 到页面呈现我们可以知道，浏览器如果每次都要请求加载页面，会相当费时间。

而如果我们将某些网页存储到浏览器缓存中，这样当我们打开一个网页的时候，就会去查询浏览器缓存，看是否有请求的文件。

如果有，那就拦截请求，返回缓存文件，并结束请求，而不会去服务器下载。

* **为什么需要浏览器缓存淘汰策略？**

使用过 360 等杀毒软件的人都知道，它会时不时提醒你浏览器有多少缓存可以清理了……

因为浏览器中的缓存是一种本地保存资源副本，它的大小是有限的，当我们请求次数过多的时候，缓存空间就会被塞满。

这个时候，就需要判断哪些缓存数据需要被保留，哪些数据需要被清理。

因此，浏览器缓存也有属于自己的策略：**浏览器缓存淘汰策略**。

最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。

* **什么是 LRU（最近最少使用）？**

LRU（Least recently used），即最近最少使用算法，该算法根据数据的历史访问记录来进行淘汰数据，其核心思想是 “如果数据最近被访问过，那么将来被访问的几率也更高”。

简单来说：**浏览器缓存空间很小，只能缓存 10 个网页，那么只会保存最近访问的 10 个网页**。

通用实现原理：

1. 新数据将被插入到链表表头
2. 访问缓存中的数据时，将该数据移动到链表表头
3. 当链表满时，将链表尾部的数据丢弃。

## <a name="chapter-four" id="chapter-four"></a>四 刷题

> [返回目录](#chapter-one)

话不多说，我们刷下题就懂了：

* [LeetCode - 146.LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)

```
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。

它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key)：
  如果关键字 (key) 存在于缓存中，
  则获取关键字的值（总是正数），否则返回 -1。

写入数据 put(key, value)：
  如果关键字已经存在，则变更其数据值；
  如果关键字不存在，则插入该组「关键字/值」。
  当缓存容量达到上限时，
  它应该在写入新数据之前删除最久未使用的数据值，
  从而为新的数据值留出空间。

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:

LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lru-cache
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

给定方法体：

```js
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

---

答案（详细看注释，更多不解释）：

```js
/**
 * @name LRU算法
 * @param {number} capacity 缓存容量
 */
const LRUCache = function(capacity) {
  // 设置哈希映射
  this.hash = {};

  // 设置 key 值列表
  this.keys = [];

  // 设置 length 长度
  this.capacity = capacity;

  // 读取数据：key - 关键字（输出 value 值，没有返回 -1）
  this.get = (key) => {

    // 查找当前 hash 是否有对应的映射
    if (this.hash[key]) {

      // 将这个键删除并添加到数组头部
      this.keys.splice(this.keys.indexOf(key), 1);
      this.keys.unshift(key);

      // 如果有返回对应值
      return this.hash[key];
    } else {
      // 如果没有返回 -1
      return -1;
    }
  };

  // 写入数据：key - 关键字；value - 值（不需要输出）
  this.put = (key, value) => {
    
    // 查找这个 key 是否存在于当前列表
    const index = this.keys.indexOf(key);

    // 如果存在,那就删除
    if (index > -1) {
      const outKey = this.keys.splice(index, 1);
      delete this.hash[outKey];
    } else if (index !== -1 || this.keys.length >= this.capacity) {
      // 如果不存在且当前数组长度超限，则推出最末尾的
      const outKey = this.keys.pop();
      delete this.hash[outKey];
    }

    // 最后插入键值对
    this.hash[key] = value;
    this.keys.unshift(key);
  };
};

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4
```

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

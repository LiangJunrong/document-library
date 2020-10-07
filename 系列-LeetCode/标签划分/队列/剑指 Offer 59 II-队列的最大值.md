剑指 Offer 59 II - 队列的最大值
===

> Create by **jsliang** on **2020-07-29 13:12:05**  
> Recently revised in **2020-07-29 13:38:58**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 题目](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题思路](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 统计分析](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题套路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 题目

> [返回目录](#chapter-one)

```
请定义一个队列并实现函数 max_value 得到队列里的最大值，
要求函数 max_value、push_back 和 pop_front
的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入: 
["MaxQueue","push_back","push_back",
"max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]

示例 2：
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

```js
var MaxQueue = function() {

};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```

根据上面的已知函数，小伙伴们可以先尝试破解本题，确定了自己的答案后再看下面代码。

## <a name="chapter-three" id="chapter-three"></a>三 解题思路

> [返回目录](#chapter-one)

题解：

```js
const MaxQueue = function() {
  this.queue = [];
  this.maxQueue = [];
  // 最大值
  this.max_value = () => {
    // 如果有长度，返回 maxQueue 队列头
    if (this.maxQueue.length) {
      return this.maxQueue[0];
    }
    return -1;
  };
  // 推入队列
  this.push_back = (value) => {
    this.queue.push(value); // queue 正常队列
    // 如果 maxQueue 的最尾项比当前输入值还小，那么将末尾的项推出来
    while (this.maxQueue.length && this.maxQueue[this.maxQueue.length - 1] < value) {
      this.maxQueue.pop();
    }
    // 将新值推入进来
    this.maxQueue.push(value);
  };
  // 推出队列
  this.pop_front = () => {
    // 如果没长度
    if (!this.queue.length) {
      return -1;
    }
    // 推出队列头
    const value = this.queue.shift();
    // 如果队列头的值和 maxQueue 的队列头一样
    // 那么就推出 maxQueue 的队列头
    if (value === this.maxQueue[0]) {
      this.maxQueue.shift();
    }
    // 返回最终的值
    return value;
  };
};

const queue = new MaxQueue();
queue.push_back(2);
queue.push_back(1);
console.log(queue.max_value()); // 2
console.log(queue.pop_front()); // 2
console.log(queue.max_value()); // 1
```

## <a name="chapter-four" id="chapter-four"></a>四 统计分析

> [返回目录](#chapter-one)

本题不需要统计分析。

## <a name="chapter-five" id="chapter-five"></a>五 套路分析

> [返回目录](#chapter-one)

本题暂未发现任何套路，如果有但是 **jsliang** 后面发现了的话，会在 GitHub 进行补充。

如果小伙伴有更好的思路想法，或者没看懂其中某种解法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
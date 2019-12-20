703 - 数据流中的第K大元素（kth-largest-element-in-a-stream）
===

> Create by **jsliang** on **2019-12-20 08:41:41**  
> Recently revised in **2019-12-20 09:00:16**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路一](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路二](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：堆
* **题目地址**：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
* **题目内容**：

```
设计一个找到数据流中第K大元素的类（class）。
注意是排序后的第 K 大元素，不是第 K 个不同的元素。

你的 KthLargest 类需要一个同时接收整数 k 和整数数组 nums 的构造器，
它包含数据流中的初始元素。

每次调用 KthLargest.add，
返回当前数据流中第 K 大的元素。

示例:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8

说明:
你可以假设 nums 的长度 ≥ k-1 且 k ≥ 1。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
var KthLargest = function (k, nums) {
  this.data = nums
  this.k = k
  let len = this.data.length
  let parent = Math.floor((len - 2) / 2)
  this.shiftDown = function (k) {
    while (k * 2 + 1 < this.data.length) {
      let j = k * 2 + 1
      if (k * 2 + 2 < this.data.length && this.data[j] > this.data[j + 1]) {
        j += 1
      }
      if (this.data[k] > this.data[j]) {
        let m = this.data[k]
        this.data[k] = this.data[j]
        this.data[j] = m
        k = j
      } else {
        break
      }
    }
  }
  this.shiftUp = function (k) {
    while (k > 0) {
      let parent = Math.floor((k - 1) / 2)
      if (this.data[parent] > this.data[k]) {
        let m = this.data[k]
        this.data[k] = this.data[parent]
        this.data[parent] = m
        k = parent
      } else {
        break
      }
    }
  }
  this.extracMin = function () {
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop()
    this.shiftDown(0)
  }
  for (parent; parent >= 0; parent--) {
    this.shiftDown(parent)
  }
  while (this.data.length > k) {
    this.extracMin()
  }
};
KthLargest.prototype.add = function (val) {
  if (this.data.length < this.k) {
    this.data.push(val)
    this.shiftUp(this.data.length - 1)
  } else {
    if (val > this.data[0]) {
      this.data[0] = val
      this.shiftDown(0)
    }
  }
  return this.data[0]
};
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 10/10 cases passed (132 ms)
* Your runtime beats 98.61 % of javascript submissions
* Your memory usage beats 20.59 % of javascript submissions (45 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路一

> [返回目录](#chapter-one)

**我的确是个菜鸡，但我想，总能有机会挑战一下 JavaScript 精髓**。

**以下代码均非本人实现**，但我想，总有一天（或许就是明天），就可以尝试挑战这些了。

对设计思想还是不那么熟悉：

> JavaScript 最小堆实现

```js
var KthLargest = function (k, nums) {
  this.data = nums
  this.k = k
  let len = this.data.length
  let parent = Math.floor((len - 2) / 2)
  this.shiftDown = function (k) {
    while (k * 2 + 1 < this.data.length) {
      let j = k * 2 + 1
      if (k * 2 + 2 < this.data.length && this.data[j] > this.data[j + 1]) {
        j += 1
      }
      if (this.data[k] > this.data[j]) {
        let m = this.data[k]
        this.data[k] = this.data[j]
        this.data[j] = m
        k = j
      } else {
        break
      }
    }
  }
  this.shiftUp = function (k) {
    while (k > 0) {
      let parent = Math.floor((k - 1) / 2)
      if (this.data[parent] > this.data[k]) {
        let m = this.data[k]
        this.data[k] = this.data[parent]
        this.data[parent] = m
        k = parent
      } else {
        break
      }
    }
  }
  this.extracMin = function () {
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop()
    this.shiftDown(0)
  }
  for (parent; parent >= 0; parent--) {
    this.shiftDown(parent)
  }
  while (this.data.length > k) {
    this.extracMin()
  }
};
KthLargest.prototype.add = function (val) {
  if (this.data.length < this.k) {
    this.data.push(val)
    this.shiftUp(this.data.length - 1)
  } else {
    if (val > this.data[0]) {
      this.data[0] = val
      this.shiftDown(0)
    }
  }
  return this.data[0]
};
```

Submit 提交：

```js
Accepted
* 10/10 cases passed (132 ms)
* Your runtime beats 98.61 % of javascript submissions
* Your memory usage beats 20.59 % of javascript submissions (45 MB)
```

## <a name="chapter-six" id="chapter-six"></a>六 解题思路二

> [返回目录](#chapter-one)

令人眼前发亮的操作：

> JS 基于二叉堆的优先队列

https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/solution/js-ji-yu-er-cha-dui-de-you-xian-dui-lie-by-kevinca/

```js
class PriorityQueue {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop() {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }

    return top;
  }

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const {
      data,
      compare
    } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const {
      data,
      compare
    } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k

  this.q = new PriorityQueue([])

  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i])
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.q.length < this.k) {
    this.q.push(val)
  } else if (this.q.peek() < val) {
    this.q.pop()
    this.q.push(val)
  }
  return this.q.peek()
};
```

Submit 提交：

```js
Accepted
* 10/10 cases passed (228 ms)
* Your runtime beats 64.58 % of javascript submissions
* Your memory usage beats 5.88 % of javascript submissions (45.6 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
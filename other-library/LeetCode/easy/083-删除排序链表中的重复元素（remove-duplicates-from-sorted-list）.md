083 - 删除排序链表中的重复元素（remove-duplicates-from-sorted-list）
===

> Create by **jsliang** on **2019-6-12 08:50:11**  
> Recently revised in **2019-6-12 08:50:14**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解题 - 转数组](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：链表
* **题目地址**：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
* **题目内容**：

```
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3
```

## <a name="chapter-three" id="chapter-three">三 解题代码</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

```js
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let removal = {
    val: -99, // 预防 [-1, 1, 1, 1, 3] 情况 
    next: null,
  };
  let follower = removal;
  while (head) {
    if (head.val != follower.val) {
      follower.next = head;
      head = head.next;
      follower = follower.next;
    } else {
      // 预防 [1, 1, 2, 3, 3] 情况
      if (head.next === null) {
        follower.next = null;
      }
      head = head.next;
    }
  }
  return removal.next;
};
```

## <a name="chapter-four" id="chapter-four">三 解题代码</a>

> [返回目录](#chapter-one)

* **执行测试**：

参数：`head`：

```js
let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      },
    }
  }
}
```

返回值： `return`：

```js
{ val: 1, next: { val: 2, next: { val: 3, next: null } } }
```

* **LeetCode Submit**：

```js
√ Accepted
  √ 165/165 cases passed (96 ms)
  √ Your runtime beats 93.22 % of javascript submissions
  √ Your memory usage beats 9.4 % of javascript submissions (36.4 MB)
```

* **知识点**：

1. 

* **解题思路**：

[图]

[分析]

* **进一步思考**：

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js

```

* **执行测试**：

1. 形参 1
2. 形参 2
3. `return`：

```js

```

* **LeetCode Submit**：

```js

```

* **知识点**：

1. 

* **解题思路**：

[图]

[分析]

* **进一步思考**：

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
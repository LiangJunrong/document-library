278 - 第一个错误的版本（first-bad-version）
===

> Create by **jsliang** on **2019-07-19 10:08:17**  
> Recently revised in **2019-09-18 13:50:07**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 知识点](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 解题思路](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 进一步思考](#chapter-eight) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：二分查找
* **题目地址**：https://leetcode-cn.com/problems/first-bad-version/
* **题目内容**：

```
你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

示例:

给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var solution = function (isBadVersion) {
  return function (n) {
    let i = 1,
        j = n;
    while (i <= j) {
      let mid = parseInt((j - i) / 2) + i;
      if (isBadVersion(mid)) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return i;
  };
};
```

## <a name="chapter-four" id="chapter-four">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
✔ Accepted
  ✔ 22/22 cases passed (60 ms)
  ✔ Your runtime beats 99.6 % of javascript submissions
  ✔ Your memory usage beats 40 % of javascript submissions (33.7 MB)
```

## <a name="chapter-five" id="chapter-five">六 知识点</a>

> [返回目录](#chapter-one)

1. `parseInt()`：`parseInt(string, radix)`，`string` 为字符串，`radix` 为介于 2-36 之间的数。使用者告诉这个函数 `string`（比如 11）是 `radix`（比如 2 ）进制的，函数将固定返回 `string` 以十进制时显示的数（3）。[`parseInt()` 详细介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

## <a name="chapter-six" id="chapter-six">七 解题思路</a>

> [返回目录](#chapter-one)

**三分天下，二分算法**。

**首先**，今天先回顾下二分法：

> [1, 2, 3, 4, 5]

假设有个数组如上所示，我们需要快速定位 4 的位置。

如果我们通过遍历，那么需要走的路是：1 -> 2 -> 3 -> 4。

那么使用二分法怎么查找呢？3 -> 4。

怎么理解呢？二分法，就是不停地比较目标和中间数：

1. 目标 4。先获取数组 `[1,2,3,4,5]` 的中间值，即 3。跟 4 进行比较，而 3 比 4 小，所以数组范围缩小为：`[3,4,5]`。
2. 目标 4。再对数组 `[3,4,5]` 进行中间值对比，即 4。跟 4 进行比较，刚好找到值，从而返回结果。

这样，小伙伴们应该清楚二分法了。

**然后**，咱们根据题意，结合二分法进行解析：

```js
var solution = function (isBadVersion) {
  return function (n) {
    let i = 1,
        j = n;
    while (i <= j) {
      let mid = parseInt((j - i) / 2) + i;
      if (isBadVersion(mid)) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return i;
  };
};
```

假设有 `[1, 2, 3, 4, 5]` 共 5 个版本，然后我们先取中，通过 `isBadVersion(3)` 判断，返回 `false`，即这个版本是没有错误的版本，所以数组缩短到 `[4, 5]`。

这时候，`i = 4, j = 5`，计算出 `mid = 4`，这时候 `isBadVersion(4)` 返回 `true`，所以数组变成 `[4, 4]`。

到此，`i === j`，所以还要再执行一次循环，从而得到结果：`i = 4, j = 3`，从而得到结果为 `4`。

**最后**，我们将 `4` 给返回出去即可。

## <a name="chapter-seven" id="chapter-seven">八 进一步思考</a>

> [返回目录](#chapter-one)

小伙伴可能还抱有幻想，我们直接遍历也是可行的啊：

```js
var solution = function (isBadVersion) {
	return function (n) {
		for (let i = 1; i < n; i++) {
			if (isBadVersion(i)) {
				return i;
			}
		}
		return n;
	};
};
```

抱歉，LeetCode 就是来打击你的，人家的版本提交了 `2126753390` 次，错误的在 `1702766719` 版本，然后毫不客气地告诉你：

```js
✘ Time Limit Exceeded
  ✘ 11/22 cases passed (N/A)
  ✘ testcase: '2126753390\n1702766719'
  ✘ answer: 
  ✘ expected_answer: 
  ✘ stdout:
```

**尊敬的 LeetCode 官方，请告诉我，哪家的版本有这么多了，从远古时代开始提交的么？！**

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
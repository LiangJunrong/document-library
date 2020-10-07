447 - 回旋镖的数量（number-of-boomerangs）
===

> Create by **jsliang** on **2019-07-29 19:45:23**  
> Recently revised in **2019-7-29 22:42:06**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 执行测试](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 LeetCode Submit](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 解题思路](#chapter-six) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/number-of-boomerangs/
* **题目内容**：

```
给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

示例:

输入:
[[0,0],[1,0],[2,0]]

输出:
2

解释:
两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
const dist = (i, j) => {
  return (i[0] - j[0]) * (i[0] - j[0]) + (i[1] - j[1]) * (i[1] - j[1]);
};

const judge = (i, j, k) => {
  let count = 0;
  if (dist(i, j) == dist(i, k)) {
    count += 2;
  }
  if (dist(j, i) == dist(j, k)) {
    count += 2;
  }
  if (dist(k, i) == dist(k, j)) {
    count += 2;
  }
  return count;
};

const numberOfBoomerangs = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        result += judge(points[i], points[j], points[k]);
      }
    }
  }
  return result;
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

1. `point`：`[[0,0],[1,0],[2,0]]`
2. `return`：

```js
2
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 31/31 cases passed (2048 ms)
  √ Your runtime beats 27.69 % of javascript submissions
  √ Your memory usage beats 93.75 % of javascript submissions (35 MB)
```

## <a name="chapter-six" id="chapter-six">六 解题思路</a>

> [返回目录](#chapter-one)

**目测第一眼，LeetCode 又丧心病狂啦！！！**

**首先**，个人猜测，对于题意，个人先解析一波：

* 回旋镖表示的为元组（i, j, k），咱不太理解，姑且认为 `x, y, z` 构成的三维地址。
* i 到 j 的距离 === i 到 k 的距离。
* `[[0,0],[1,0],[2,0]]` 对应的即是：`[[1,0],[0,0],[2,0]]` 和 `[[1,0],[2,0],[0,0]]`。

由于咱没有更多的数据支持，所以我们也无法确定，是元组可以随意组成任意组，然后差值相同？

一脸蒙圈~

**然后**，只能求助【评论】和【题解】的大佬看看了：

> Go 实现

```go
func dist(i,j []int) int {      // 两点间的距离
  return (i[0]-j[0])*(i[0]-j[0]) + (i[1]-j[1])*(i[1]-j[1])
}

func judge(i,j,k []int) int {   // 计算这三个点能构成几个“回旋镖”
  cnt := 0
  if dist(i,j) == dist(i,k) {
    cnt+=2
  }
  if dist(j,i) == dist(j,k) {
    cnt+=2
  }
  if dist(k,i) == dist(k,j) {
    cnt+=2
  }
  return cnt
}

func numberOfBoomerangs(points [][]int) int {   // 三层循环遍历每个三元组
  ans := 0
  for i:=0; i<len(points)-2; i++ {
    for j:=i+1; j<len(points)-1; j++ {
      for k:=j+1; k<len(points); k++ {
        ans += judge(points[i],points[j],points[k])
      }
    }
  }
  return ans
}
```

说实话我也不懂 Go 语言，但是我看到了，并且我懂一点后端语言，感觉可以理解，于是尝试转换成 JavaScript：

```js
const dist = (i, j) => {
  return (i[0] - j[0]) * (i[0] - j[0]) + (i[1] - j[1]) * (i[1] - j[1]);
};

const judge = (i, j, k) => {
  let count = 0;
  if (dist(i, j) == dist(i, k)) {
    count += 2;
  }
  if (dist(j, i) == dist(j, k)) {
    count += 2;
  }
  if (dist(k, i) == dist(k, j)) {
    count += 2;
  }
  return count;
};

const numberOfBoomerangs = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        result += judge(points[i], points[j], points[k]);
      }
    }
  }
  return result;
};
```

Submit 提交：

```js
√ Accepted
  √ 31/31 cases passed (2048 ms)
  √ Your runtime beats 27.69 % of javascript submissions
  √ Your memory usage beats 93.75 % of javascript submissions (35 MB)
```

还真的过了，所以我们就啃下它！

**接着**，**jsliang** 通过讲解上面代码，讲讲自己的理解：

> 1、计算两点之间的距离

```js
const dist = (i, j) => {
  return (i[0] - j[0]) * (i[0] - j[0]) + (i[1] - j[1]) * (i[1] - j[1]);
};
```

计算两个点的距离，就是它们对应坐标的差的平方相加。

即：

* x - [1, 2]
* y - [2, 3]
* dist(x, y) = (2 - 1)² + (3 - 2)²

> 2、计算这三个点能构成几个“回旋镖”

```js
const judge = (i, j, k) => {
  let count = 0;
  if (dist(i, j) == dist(i, k)) {
    count += 2;
  }
  if (dist(j, i) == dist(j, k)) {
    count += 2;
  }
  if (dist(k, i) == dist(k, j)) {
    count += 2;
  }
  return count;
};
```

正如题目所言，i 到 j 的距离等于 i 到 k 的距离。

同样：

* i - j === i - k
* j - i === j - k
* k - i === k - j

> 3、三层循环遍历每个三元组

```js
const numberOfBoomerangs = (points) => {
  let result = 0;
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        result += judge(points[i], points[j], points[k]);
      }
    }
  }
  return result;
};
```

三层遍历数组，获取到每种可能，通过 `result` 获取最终结果，并输出最终结果。

**最后**，我们解析了代码，虽然题意仍然不太清晰，但是我们可以了解到：

1. 算法中两点距离的计算
2. 构成一个立体物品的方法

相信后面我们会接触更多的这种题，从而逐渐明朗~

> 如果你有更好的理解，请留言~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
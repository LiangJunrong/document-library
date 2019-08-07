048 - 旋转图像（rotate-image）
===

> Create by **jsliang** on **2019-8-7 08:04:04**  
> Recently revised in **2019-8-7 08:36:03**

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

* **难度**：中等
* **涉及知识**：数组
* **题目地址**：https://leetcode-cn.com/problems/rotate-image/
* **题目内容**：

```
给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **解题代码**：

```js
var rotate = function(matrix) {
  const length = matrix.length;
  let temp = new Array(length);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (!temp[i]) {
        temp[i] = [matrix[i][j]];
      } else {
        temp[i].push(matrix[i][j]);
      }
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrix[i][j] = temp[length - 1 - j][i];
    }
  }
};
```

## <a name="chapter-four" id="chapter-four">四 执行测试</a>

> [返回目录](#chapter-one)

* `matrix`：

```js
[
  [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9,10,11,12],
  [13,14,15,16]
]
```

* `return`：

```js
[
  [13, 9, 5, 1],
  [14,10, 6, 2],
  [15,11, 7, 3],
  [16,12, 8, 4]
]
```

## <a name="chapter-five" id="chapter-five">五 LeetCode Submit</a>

> [返回目录](#chapter-one)

```js
√ Accepted
  √ 21/21 cases passed (80 ms)
  √ Your runtime beats 69.82 % of javascript submissions
  √ Your memory usage beats 32.14 % of javascript submissions (33.8 MB)
```

## <a name="chapter-six" id="chapter-six">六 知识点</a>

> [返回目录](#chapter-one)

1. `push()`：`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。[`push()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/Function/push.md)

## <a name="chapter-seven" id="chapter-seven">七 解题思路</a>

> [返回目录](#chapter-one)

**首先**，不知者无畏，像我这样的 *斜杠青年*，当然是怎么简单怎么来：

```js
var rotate = function(matrix) {
  const length = matrix.length;
  let temp = new Array(length);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (!temp[i]) {
        temp[i] = [matrix[i][j]];
      } else {
        temp[i].push(matrix[i][j]);
      }
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrix[i][j] = temp[length - 1 - j][i];
    }
  }
};
```

提交后查看：

```js
√ Accepted
  √ 21/21 cases passed (80 ms)
  √ Your runtime beats 69.82 % of javascript submissions
  √ Your memory usage beats 32.14 % of javascript submissions (33.8 MB)
```

嗯，不错不错。

**然后**，再看下题目的说明：

```js
说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。

请不要使用另一个矩阵来旋转图像。
```

好吧，臣妾是不是做错了 -_-|| 我这算起了一个新空间了吧（起了另一个矩阵）。

## <a name="chapter-eight" id="chapter-eight">八 进一步思考</a>

> [返回目录](#chapter-one)

既然自身不足，那么看看官方的解题：

> https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode/

```java
class Solution {
  public void rotate(int[][] matrix) {
    int n = matrix.length;

    // transpose matrix
    for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
        int tmp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
    // reverse each row
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n / 2; j++) {
        int tmp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = tmp;
      }
    }
  }
}
```

这本身是 Java 的题解，怕小伙伴们看不懂，咱们转换成 JavaScript：

```js
var rotate = function(matrix) {
  const length = matrix.length;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][length - j - 1];
      matrix[i][length - j - 1] = temp;
    }
  }

  return matrix;
};
```

这个什么意思呢？

假设初始数组为：

```js
[ [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9,10,11,12],
  [13,14,15,16] ]
```

第一个双重 `for()` 循环，遍历得到：

```js
[ [ 1, 5, 9, 13 ],
  [ 2, 6, 10, 14 ],
  [ 3, 7, 11, 15 ],
  [ 4, 8, 12, 16 ] ]
```

第二个双重 `for()` 循环，遍历得到：

```js
[ [ 13, 9, 5, 1 ],
  [ 14, 10, 6, 2 ],
  [ 15, 11, 7, 3 ],
  [ 16, 12, 8, 4 ] ]
```

即先转置矩阵，然后翻转每一行。

最后得到结果：

```js
√ Accepted
  √ 21/21 cases passed (72 ms)
  √ Your runtime beats 91.43 % of javascript submissions
  √ Your memory usage beats 59.18 % of javascript submissions (33.7 MB)
```

感觉真不太容易想出来，所以小伙伴们如果第一时间没有想到这种解题方式，不要气馁哈~

> 挑战自我：  
> 在不看官方题解和 **jsliang** 提示的情况下，能否讲讲下面代码为什么可行？

```js
var rotate = function(matrix) {
  let n = matrix.length;
  for (let i = 0; i < Math.floor((n + 1) / 2); i ++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      let temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
```

Submit：

```js
√ Accepted
  √ 21/21 cases passed (64 ms)
  √ Your runtime beats 98.75 % of javascript submissions
  √ Your memory usage beats 30.61 % of javascript submissions (33.8 MB)
```

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
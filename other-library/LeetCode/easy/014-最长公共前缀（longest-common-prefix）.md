014 - 最长公共前缀（longest-common-prefix）
===

> Create by **jsliang** on **2019-06-03 10:13:01**  
> Recently revised in **2019-06-03 10:13:05**

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
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/longest-common-prefix/
* **题目内容**：

```
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

说明:
所有输入只包含小写字母 a-z 。
```

## <a name="chapter-three" id="chapter-threed">三 解题</a>

> [返回目录](#chapter-one)

* **官方题解**：

解题千千万，官方独一家，上面是官方使用 Java 进行的题解。

小伙伴可以先自己在本地尝试解题，再看看官方解题，最后再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 暴力破解</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  } else if (strs.length == 1) {
    return strs[0];
  }
  let shortStrLength = strs[0].length;
  let shortStrPosition = 0;
  for (let i = 0; i < strs.length; i++){
    if (strs[i].length < shortStrLength) {
      shortStrLength = strs[i].length;
      shortStrPosition = i;
    }
  }
  let result = [];
  for (let i = 0; i < shortStrLength; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[shortStrPosition][i] != strs[j][i]) {
        return result.join('');
      }
      if (j === strs.length - 1) {
        result[i] = strs[shortStrPosition][i];
      }
    }
  }
  return result.join('');
};
```

* **执行测试 1**：

1. `strs`：`["flower","flow","flight"]`
2. `return`：

```js
"fl"
```

* **执行测试 2**：

1. `strs`：`["dog","racecar","car"]`
2. `return`：

```js
""
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 118/118 cases passed (92 ms)
  ✔ Your runtime beats 86.97 % of javascript submissions
  ✔ Your memory usage beats 36.33 % of javascript submissions (35.1 MB)
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

### <a name="chapter-three-three" id="chapter-three-three">3.3 解法 - 暴力破解</a>

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
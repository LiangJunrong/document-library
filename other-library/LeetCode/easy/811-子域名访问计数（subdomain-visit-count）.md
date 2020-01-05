811 - 子域名访问计数（subdomain-visit-count）
===

> Create by **jsliang** on **2020-1-5 19:22:25**  
> Recently revised in **2020-1-5 19:53:20**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：哈希表
* **题目地址**：https://leetcode-cn.com/problems/subdomain-visit-count/
* **题目内容**：

```
一个网站域名，如 "discuss.leetcode.com"，包含了多个子域名。

作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，
最低的一级为"discuss.leetcode.com"。

当我们访问域名"discuss.leetcode.com"时，
也同时访问了其父域名 "leetcode.com" 以及顶级域名 "com"。

给定一个带访问次数和域名的组合，
要求分别计算每个域名被访问的次数。

其格式为访问次数+空格+地址，
例如："9001 discuss.leetcode.com"。

接下来会给出一组访问次数和域名组合的列表 cpdomains 。
要求解析出所有域名的访问次数，
输出格式和输入格式相同，
不限定先后顺序。

示例 1:
输入: 
["9001 discuss.leetcode.com"]
输出: 
["9001 discuss.leetcode.com",
"9001 leetcode.com",
"9001 com"]
说明: 
例子中仅包含一个网站域名："discuss.leetcode.com"。
按照前文假设，子域名"leetcode.com"和"com"都会被访问，
所以它们都被访问了9001次。

示例 2
输入: 
["900 google.mail.com",
"50 yahoo.com",
"1 intel.mail.com",
"5 wiki.org"]
输出: 
["901 mail.com",
"50 yahoo.com",
"900 google.mail.com",
"5 wiki.org",
"5 org",
"1 intel.mail.com",
"951 com"]
说明: 
按照假设，会访问"google.mail.com" 900次，
"yahoo.com" 50次，
"intel.mail.com" 1次，
"wiki.org" 5次。
而对于父域名，
会访问"mail.com" 900+1 = 901次，
"com" 900 + 50 + 1 = 951次，和 "org" 5 次。

注意事项：

 cpdomains 的长度小于 100。
每个域名的长度小于100。
每个域名地址包含一个或两个"."符号。
输入中任意一个域名的访问次数都小于10000。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 子域名访问计数
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = cpdomains => {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const time = Number(cpdomains[i].split(' ')[0]); // 获取次数
    const domainName = cpdomains[i].split(' ')[1].split('.'); // 获取域名的分解，例如 ['discuss', 'leetcode', 'com']

    let tempStr = '';
    while (domainName.length) {
      // 设置 tempStr
      if (tempStr === '') {
        tempStr += domainName.pop();
      } else {
        tempStr = domainName.pop() + '.' + tempStr;
      }
      // 判断是添加还是累加
      if (map.get(tempStr)) {
        map.set(tempStr, map.get(tempStr) + time);
      } else {
        map.set(tempStr, time);
      }
    }
  }
  const result = [];
  for (let [key, value] of map) {
    result.push(value + ' ' + key);
  }
  return result;
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']));
// [ '9001 com', '9001 leetcode.com', '9001 discuss.leetcode.com' ]
console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org'
  ])
);
// [ '951 com',
//   '901 mail.com',
//   '900 google.mail.com',
//   '50 yahoo.com',
//   '1 intel.mail.com',
//   '5 org',
//   '5 wiki.org' ]
```

`node index.js` 返回：

```js
[ '9001 com', '9001 leetcode.com', '9001 discuss.leetcode.com' ]
[ '951 com',
  '901 mail.com',
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 org',
  '5 wiki.org' ]
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 52/52 cases passed (80 ms)
* Your runtime beats 98.85 % of javascript submissions
* Your memory usage beats 13.16 % of javascript submissions (39.2 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

**首先**，咱们先对一个进行拆分：

```js
const subdomainVisits = (cpdomains) => {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const tempArr = cpdomains[i].split(' ');
    const time = tempArr[0];
    const domainName = tempArr[1].split('.');
    // 获取根域名 - 初始化
    let tempStr = domainName.pop();
    map.set(tempStr, time);
    // 获取其他域名
    while (domainName.length) {
      tempStr = domainName.pop() + '.' + tempStr;
      map.set(tempStr, time);
    }
  }
  return map;
};

console.log(subdomainVisits(['9001 discuss.leetcode.co m']));
```

打印出来的是：

```js
Map {
  'com' => '9001',
  'leetcode.com' => '9001',
  'discuss.leetcode.com' => '9001' }
```

**然后**，我们再进行多数组的拆分：

```js
const subdomainVisits = cpdomains => {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const tempArr = cpdomains[i].split(' ');
    const time = Number(tempArr[0]);
    const domainName = tempArr[1].split('.');

    let tempStr = '';
    while (domainName.length) {
      if (tempStr === '') {
        tempStr += domainName.pop();
        if (map.get(tempStr)) {
          map.set(tempStr, map.get(tempStr) + time);
        } else {
          map.set(tempStr, time);
        }
      } else {
        tempStr = domainName.pop() + '.' + tempStr;
        if (map.get(tempStr)) {
          map.set(tempStr, map.get(tempStr) + time);
        } else {
          map.set(tempStr, time);
        }
      }
    }
  }
  const result = [];
  for (let [key, value] of map) {
    result.push(value + ' ' + key);
  }
  return result;
};
```

Submit 提交如下：

```js
Accepted
* 52/52 cases passed (88 ms)
* Your runtime beats 86.21 % of javascript submissions
* Your memory usage beats 7.89 % of javascript submissions (39.5 MB)
```

这样子肯定不好理解，稍微整理一下：

```js
const subdomainVisits = cpdomains => {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const time = Number(cpdomains[i].split(' ')[0]); // 获取次数
    const domainName = cpdomains[i].split(' ')[1].split('.'); // 获取域名的分解，例如 ['discuss', 'leetcode', 'com']

    let tempStr = '';
    while (domainName.length) {
      // 设置 tempStr
      if (tempStr === '') {
        tempStr += domainName.pop();
      } else {
        tempStr = domainName.pop() + '.' + tempStr;
      }
      // 判断是添加还是累加
      if (map.get(tempStr)) {
        map.set(tempStr, map.get(tempStr) + time);
      } else {
        map.set(tempStr, time);
      }
    }
  }
  const result = [];
  for (let [key, value] of map) {
    result.push(value + ' ' + key);
  }
  return result;
};
```

OK，搞定收工~

如果小伙伴们有更好的思路想法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
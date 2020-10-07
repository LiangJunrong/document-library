929 - 独特的电子邮件地址（unique-email-addresses）
===

> Create by **jsliang** on **2020-01-26 18:52:53**  
> Recently revised in **2020-01-26 19:24:24**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题及测试](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 LeetCode Submit](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 解题思路](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 进一步思考](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：字符串
* **题目地址**：https://leetcode-cn.com/problems/unique-email-addresses/
* **题目内容**：

```
每封电子邮件都由一个本地名称和一个域名组成，
以 @ 符号分隔。

例如，
在 alice@leetcode.com中，
alice 是本地名称，
而 leetcode.com 是域名。

除了小写字母，
这些电子邮件还可能包含 '.' 或 '+'。

如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（'.'），
则发往那里的邮件将会转发到本地名称中没有点的同一地址。

例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com”
会转发到同一电子邮件地址。
（请注意，此规则不适用于域名。）

如果在本地名称中添加加号（'+'），
则会忽略第一个加号后面的所有内容。

这允许过滤某些电子邮件，
例如 m.y+name@email.com 将转发到 my@email.com。
（同样，此规则不适用于域名。）

可以同时使用这两个规则。

给定电子邮件列表 emails，
我们会向列表中的每个地址发送一封电子邮件。

实际收到邮件的不同地址有多少？

示例：

输入：
[
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
]
输出：2
解释：实际收到邮件的是 "testemail@leetcode.com"
和 "testemail@lee.tcode.com"。

提示：

1 <= emails[i].length <= 100
1 <= emails.length <= 100
每封 emails[i] 都包含有且仅有一个 '@' 字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-email-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## <a name="chapter-three" id="chapter-three"></a>三 解题及测试

> [返回目录](#chapter-one)

小伙伴可以先自己在本地尝试解题，再回来看看 **jsliang** 的解题思路。

* **LeetCode 给定函数体**：

```js
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
};
```

根据上面的已知函数，尝试破解本题吧~

确定了自己的答案再看下面代码哈~

> index.js

```js
/**
 * @name 独特的电子邮件地址
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  const map = new Map();
  for (let i = 0; i < emails.length; i++) {
    const left = emails[i].split('@')[0].split('.').join('').split('+')[0],
          right = emails[i].split('@')[1];
    if (!map.has(`${left}@${right}`)) {
      map.set(`${left}@${right}`, 1);
    }
  }
  return map.size;
};

console.log(numUniqueEmails(
  [
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]
));
// 2

console.log(numUniqueEmails(
  [
    'test.email+alex@leetcode.com',
    'test.email.leet+alex@code.com',
  ]
));
// 2
```

`node index.js` 返回：

```js
2
2
```

## <a name="chapter-four" id="chapter-four"></a>四 LeetCode Submit

> [返回目录](#chapter-one)

```js
Accepted
* 184/184 cases passed (104 ms)
* Your runtime beats 43.09 % of javascript submissions
* Your memory usage beats 18.48 % of javascript submissions (43.7 MB)
```

## <a name="chapter-five" id="chapter-five"></a>五 解题思路

> [返回目录](#chapter-one)

想要在别人的地盘混好，首先要熟悉别人的规则：

1. 有邮件地址诸如 `jsliang@liangjunrong.com`
2. `@` 符号是关键的分割符号；
3. `@` 符号前面的 `.` 符号会被忽略；
4. `@` 符号前面如果有 `+` 符号，则 `+` 符号到 `@` 符号之间的字符串会被过滤掉；
5. 拿到给定的邮件地址列表，计算出一共有多少实际上是不同的地址~

解读完毕，立马出来答案：

> 暴力破解

```js
const numUniqueEmails = (emails) => {
  const map = new Map();
  for (let i = 0; i < emails.length; i++) {
    const left = emails[i].split('@')[0].split('.').join('').split('+')[0],
          right = emails[i].split('@')[1];
    if (!map.has(`${left}@${right}`)) {
      map.set(`${left}@${right}`, 1);
    }
  }
  return map.size;
};
```

1. 假设有邮件 `hello.jsliang+liangjunrong@heyuan.com`；
2. 首先：`emails[i].split('@')` 获取的是左右两部分，即：`hello.jsliang+liangjunrong` 和 `heyuan.com`；
3. 然后：`emails[i].split('@')[0].split('.').join('')` 将 `.` 符号去掉。
4. 最后：`emails[i].split('@')[0].split('.').join('').split('+')[0]` 获取的是 `+` 符号前面的字符串。

这样，就完成了这道题的破解，Submit 提交如下：

```js
Accepted
* 184/184 cases passed (104 ms)
* Your runtime beats 43.09 % of javascript submissions
* Your memory usage beats 18.48 % of javascript submissions (43.7 MB)
```

如果非要简化，就变成：

> 暴力破解【简化版】

```js
const numUniqueEmails = (emails) => {
  const map = new Map();
  for (let i = 0; i < emails.length; i++) {
    map.set(`${emails[i].split('@')[0].split('.').join('').split('+')[0]}@${emails[i].split('@')[1]}`, 1);
  }
  return map.size;
};
```

有的小伙伴说 **jsliang** 特喜欢用 `Map`，有没有不需要用 `Map` 的？

> 暴力破解【Set 去重】

```js
const numUniqueEmails = (emails) => {
  const result = [];
  for (let i = 0; i < emails.length; i++) {
    result.push(`${emails[i].split('@')[0].split('.').join('').split('+')[0]}@${emails[i].split('@')[1]}`);
  }
  return [...new Set(result)].length;
};
```

当然，仅仅如此肯定满足不了你的求知欲的话，那么咱们看看大佬的法子~

## <a name="chapter-six" id="chapter-six"></a>六 进一步思考

> [返回目录](#chapter-one)

俗话说，不会写正则的程序员，跟咸鱼没什么区别（是的，**jsliang** 就是条咸鱼）~

> 正则表达式

```js
const numUniqueEmails = (emails) => {
  return [...new Set(emails.map(item => {
    let list = item.split('@')
    list[0] = list[0].replace(/\./g, '').split('+')[0]
    return list.join('@')
  }))].length;
};
```

羡慕，我就不解读了，反正我第一时间不会想到用正则去搞，哈哈~

Submit 提交如下：

```js
Accepted
* 184/184 cases passed (92 ms)
* Your runtime beats 74.8 % of javascript submissions
* Your memory usage beats 64.13 % of javascript submissions (41.5 MB)
```

当然，如果小伙伴有更巧妙的方法，欢迎评论留言或者私聊 **jsliang**~

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-index-small.png)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
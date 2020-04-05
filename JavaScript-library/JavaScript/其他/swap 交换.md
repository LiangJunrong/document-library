swap 交换
===

> create by **jsliang** on **2020-4-5 17:27:33**  
> Recently revised in **2020-4-5 17:44:08**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 皈依佛门法](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 原生法](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 ES6 大法](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 加减大法](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 总结](#chapter-seven) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* 什么是 swap 交换？

就是交换两个变量的值，例如：

```js
let a = 1, b = 3;
// 交换 a/b，让 a = 3, b = 1
```

那么，这时候你会怎么操作呢？

## <a name="chapter-three" id="chapter-three">三 皈依佛门法</a>

> [返回目录](#chapter-one)

看完别吓到，不希望你理解：

> swap 皈依佛门法

```js
let a = 1, b = 3;

a = a ^ b;
b = b ^ a;
a = a ^ b;

console.log(a); // 3
console.log(b); // 1
```

当然，仅仅是交换数字可以成功。

## <a name="chapter-four" id="chapter-four">四 原生法</a>

> [返回目录](#chapter-one)

中规中矩，利用小三走向人生巅峰：

> swap 原生

```js
let a = 1, b = 3;

const temp = a;
a = b;
b = temp;

console.log(a); // 3
console.log(b); // 1
```

支持所有数据类型的交换。

## <a name="chapter-five" id="chapter-five">五 ES6 大法</a>

> [返回目录](#chapter-one)

高科技，够你吹吹水：

> swap ES6

```js
let a = 1, b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 1
```

支持所有数据类型的交换。

## <a name="chapter-six" id="chapter-six">六 加减大法</a>

> [返回目录](#chapter-one)

讲真我大学学编程的时候差点死在这个方法中：

```js
let a = 1, b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a); // 3
console.log(b); // 1
```

当然，仅仅是交换数字可以成功。

## <a name="chapter-seven" id="chapter-seven">七 总结</a>

> [返回目录](#chapter-one)

这些都是小内容，简单了解下还是可以的~

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

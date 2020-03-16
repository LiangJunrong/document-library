Bug 清单
===

> Create by **jsliang** on **2020-03-16 15:21:19**  
> Recently revised in **2020-03-16 15:36:16**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 HTML](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 CSS](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 JavaScript](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 其他](#chapter-six) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

记录一些自己或者身边同事产生的，有意思的 Bug。

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

暂未发现

## <a name="chapter-three" id="chapter-three"></a>三 HTML

> [返回目录](#chapter-one)

暂未发现

## <a name="chapter-four" id="chapter-four"></a>四 CSS

> [返回目录](#chapter-one)

### <a name="chapter-five-one" id="chapter-five-one"></a>5.1 数字比较

> [返回目录](#chapter-one)

* 发现时间：2020-03-16
* 发现背景：需要对两个数字进行比较，数字在输入框的时候是 `Number` 类型的，后面到了后端变成了 `String` 类型，然后页面进来直接出问题。

> 示例

```js
const flag1 = 101 > 99;
const flag2 = '101' > '99';
```

* 缘由：

JavaScript 字符串在进行大于（小于）比较时，会根据第一个不同字符的 ASCII 值码进行比较。

0-9 对应的 ASCII 为 49-58。

所以当你看到 `'9' > '89'` 的时候不要惊讶。

* 解决方式：`Number(x)` 进行强行转化。同时，注意 `Number('1/2')` 会被转换为 `NaN`，在此次 Bug 是符合预期的，`NaN > NaN` 或者 `NaN < NaN` 均为 `false`，在其他场景需留意。

## <a name="chapter-six" id="chapter-six"></a>六 其他

> [返回目录](#chapter-one)

尚未发现

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

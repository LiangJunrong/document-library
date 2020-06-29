Array - 数组组合排序
===

> Create by **jsliang** on **2020-06-19 10:10:14**  
> Recently revised in **2020-06-22 20:24:34**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 一维数组排列组合](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 多维数组排列组合](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 参考文献](#chapter-five) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

本文会介绍：

1. 一维数组排列组合
2. 多维数组排列组合

## <a name="chapter-three" id="chapter-three"></a>三 一维数组排列组合

> [返回目录](#chapter-one)

已知存在一个数字类型数组，该数组中的每个数字都不相同，例如：

* `[1, 2, 3]`
* `[2, 4, 6]`

求该数组中各个数字可能具有的组合，例如：

* `[1, 2, 3]`：`[ [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1] ]`
* `[2, 4, 6]`：`[ [2, 4, 6], [2, 6, 4], [4, 2, 6], [4, 6, 2], [6, 2, 4], [6, 4, 2] ]`

那么我们该怎么求解呢？看代码：

```js
const arrange = (arr) => {
  // 1. 设置结果集
  const result = [];
  
  // 2. 递归
  const ergodic = (res) => {
    // 2.1 循环数组 arr
    for (let i = 0; i < arr.length; i++) {
      // 2.1.1 判断已有的 res 数组中不存在当前元素
      // 并且 res 数组差一位就凑齐 arr 的长度了
      if (!res.includes(arr[i]) && res.length === arr.length - 1) {
        result.push([...res, arr[i]]);
        continue;
      }
      // 2.1.2 如果已有的 res 数组不包含当前元素
      // 则添加进来
      if (!res.includes(arr[i])) {
        ergodic([...res, arr[i]]);
      }
    }
  }
  ergodic([], 0);

  // 3. 返回最终结果
  return result;
};

console.log(arrange([2, 4, 6]));
// [ [2, 4, 6], [2, 6, 4], [4, 2, 6], [4, 6, 2], [6, 2, 4], [6, 4, 2] ]
```

我们通过递归的形式，就可以获取到一维数组的排列组合，这对小伙伴们来说，应该不是问题。

## <a name="chapter-four" id="chapter-four"></a>四 多维数组排列组合

> [返回目录](#chapter-one)

在上面，我们求解了一维数组的排列组合，假如我们需要二维甚至多维数组的排列组合，我们要怎么做呢？

下面 **jsliang** 逐步给你介绍下~

题目：

现在有一批手机，它有各种信息：

* 颜色：`['白色', '黑色', '金色']`
* 内存大小：`['16G', '32G', '64G']`
* 版本：`['联通', '移动', '电信']`

要求：编写一个算法，实现 颜色 + 内存大小 + 版本的组合，类似于：

* `['白色', '16G', '联通']`
* `['白色', '32G', '联通']`
* `['黑色', '16G', '电信']`
* ……

请输出所有的组合。

```js
const combine = (arr) => {
  
};

// 后端给出的数据
const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];

console.log(combine([colorList, sizeList, versionList]));
```

---

题解：

**首先**，我们需要知道的是，我们并不确定数组给出的长度，只知道里面是个二维数组，可能有颜色、内存大小、版本、优惠套餐等内容。

**然后**，我们据此可以先将基本代码列出来：

```js
const combine = (arr) => {
  // 1. 设置结果集
  const result = [];

  // 2. 遍历收集
  // do something
  
  // 3. 返回结果
  return result;
};

const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];

console.log(
  combine([
    colorList,
    sizeList,
    versionList,
  ])
);
```

思路最简单的是暴力无疑，如果我们知道 `arr` 中具体有多少长度，那么我们可以按照正常的思路编写：

```js
const combine = (arr) => {
  // 1. 设置结果集
  const result = [];

  // 2. 遍历收集
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      for (let k = 0; k < arr[2].length; k++) {
        result.push([arr[0][i], arr[1][j], arr[2][k]]);
      }
    }
  }
  
  // 3. 返回结果
  return result;
};

const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];

console.log(
  combine([
    colorList,
    sizeList,
    versionList,
  ])
);
```

这样，我们就通过简单的方法获取到了组合：

```js
[
  [ '白色', '16G', '联通' ], [ '白色', '16G', '移动' ], [ '白色', '16G', '电信' ],
  [ '白色', '32G', '联通' ], [ '白色', '32G', '移动' ], [ '白色', '32G', '电信' ],
  [ '白色', '64G', '联通' ], [ '白色', '64G', '移动' ], [ '白色', '64G', '电信' ],
  [ '黑色', '16G', '联通' ], [ '黑色', '16G', '移动' ], [ '黑色', '16G', '电信' ],
  [ '黑色', '32G', '联通' ], [ '黑色', '32G', '移动' ], [ '黑色', '32G', '电信' ],
  [ '黑色', '64G', '联通' ], [ '黑色', '64G', '移动' ], [ '黑色', '64G', '电信' ],
  [ '金色', '16G', '联通' ], [ '金色', '16G', '移动' ], [ '金色', '16G', '电信' ],
  [ '金色', '32G', '联通' ], [ '金色', '32G', '移动' ], [ '金色', '32G', '电信' ],
  [ '金色', '64G', '联通' ], [ '金色', '64G', '移动' ], [ '金色', '64G', '电信' ],
]
```

但是，如果我们不确定传入的字段有多少，二维数组的长度有多少呢？就好比：

```js
const combine = (arr) => {

};

const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];
const setMealList = ['套餐一', '套餐二', '套餐三'];

console.log(
  combine([
    colorList,
    sizeList,
    versionList,
    setMealList,
  ])
);
```

这时候我们就需要 4 次 `for()` 循环进行嵌套处理？

如果是 5 个，那就 5 次 `for()` 循环嵌套处理？

这无疑是令人细思极恐的，那么，有没有法子简化下操作呢？

有的，通过递归：

```js
const combine = (arr) => {
  // 1. 如果是 [] 或者 [colorList] 这种单个的，则直接返回
  if (arr.length < 2) {
    return arr[0];
  } else { // 2. 两两组合得到最终结果
    let tempResult = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        // 2.1 如果是单个 * 单个，则返回两者组合
        if (typeof arr[0][i] === 'string') {
          tempResult.push([arr[0][i], arr[1][j]]);
        } else {
          // 2.2 如果前面已经组合过了，通过 ... 解构数组
          tempResult.push([...arr[0][i], arr[1][j]]);
        }
      }
    }
    // 2.3 重组数组
    arr = [tempResult, ...arr.slice(2)];
    // 2.4 返回最终结果
    return combine(arr);
  }
};

const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];
const setMealList = ['套餐一', '套餐二', '套餐三'];

console.log(
  combine([
    colorList,
    sizeList,
    versionList,
    setMealList,
  ])
); 
```

输出：

```js
[
  [ '白色', '16G', '联通', '套餐一' ], [ '白色', '16G', '联通', '套餐二' ], [ '白色', '16G', '联通', '套餐三' ],
  [ '白色', '16G', '移动', '套餐一' ], [ '白色', '16G', '移动', '套餐二' ], [ '白色', '16G', '移动', '套餐三' ],
  [ '白色', '16G', '电信', '套餐一' ], [ '白色', '16G', '电信', '套餐二' ], [ '白色', '16G', '电信', '套餐三' ],
  [ '白色', '32G', '联通', '套餐一' ], [ '白色', '32G', '联通', '套餐二' ], [ '白色', '32G', '联通', '套餐三' ],
  [ '白色', '32G', '移动', '套餐一' ], [ '白色', '32G', '移动', '套餐二' ], [ '白色', '32G', '移动', '套餐三' ],
  [ '白色', '32G', '电信', '套餐一' ], [ '白色', '32G', '电信', '套餐二' ], [ '白色', '32G', '电信', '套餐三' ],
  [ '白色', '64G', '联通', '套餐一' ], [ '白色', '64G', '联通', '套餐二' ], [ '白色', '64G', '联通', '套餐三' ],
  [ '白色', '64G', '移动', '套餐一' ], [ '白色', '64G', '移动', '套餐二' ], [ '白色', '64G', '移动', '套餐三' ],
  [ '白色', '64G', '电信', '套餐一' ], [ '白色', '64G', '电信', '套餐二' ], [ '白色', '64G', '电信', '套餐三' ],
  [ '黑色', '16G', '联通', '套餐一' ], [ '黑色', '16G', '联通', '套餐二' ], [ '黑色', '16G', '联通', '套餐三' ],
  [ '黑色', '16G', '移动', '套餐一' ], [ '黑色', '16G', '移动', '套餐二' ], [ '黑色', '16G', '移动', '套餐三' ],
  [ '黑色', '16G', '电信', '套餐一' ], [ '黑色', '16G', '电信', '套餐二' ], [ '黑色', '16G', '电信', '套餐三' ],
  [ '黑色', '32G', '联通', '套餐一' ], [ '黑色', '32G', '联通', '套餐二' ], [ '黑色', '32G', '联通', '套餐三' ],
  [ '黑色', '32G', '移动', '套餐一' ], [ '黑色', '32G', '移动', '套餐二' ], [ '黑色', '32G', '移动', '套餐三' ],
  [ '黑色', '32G', '电信', '套餐一' ], [ '黑色', '32G', '电信', '套餐二' ], [ '黑色', '32G', '电信', '套餐三' ],
  [ '黑色', '64G', '联通', '套餐一' ], [ '黑色', '64G', '联通', '套餐二' ], [ '黑色', '64G', '联通', '套餐三' ],
  [ '黑色', '64G', '移动', '套餐一' ], [ '黑色', '64G', '移动', '套餐二' ], [ '黑色', '64G', '移动', '套餐三' ],
  [ '黑色', '64G', '电信', '套餐一' ], [ '黑色', '64G', '电信', '套餐二' ], [ '黑色', '64G', '电信', '套餐三' ],
  [ '金色', '16G', '联通', '套餐一' ], [ '金色', '16G', '联通', '套餐二' ], [ '金色', '16G', '联通', '套餐三' ],
  [ '金色', '16G', '移动', '套餐一' ], [ '金色', '16G', '移动', '套餐二' ], [ '金色', '16G', '移动', '套餐三' ],
  [ '金色', '16G', '电信', '套餐一' ], [ '金色', '16G', '电信', '套餐二' ], [ '金色', '16G', '电信', '套餐三' ],
  [ '金色', '32G', '联通', '套餐一' ], [ '金色', '32G', '联通', '套餐二' ], [ '金色', '32G', '联通', '套餐三' ],
  [ '金色', '32G', '移动', '套餐一' ], [ '金色', '32G', '移动', '套餐二' ], [ '金色', '32G', '移动', '套餐三' ],
  [ '金色', '32G', '电信', '套餐一' ], [ '金色', '32G', '电信', '套餐二' ], [ '金色', '32G', '电信', '套餐三' ],
  [ '金色', '64G', '联通', '套餐一' ], [ '金色', '64G', '联通', '套餐二' ], [ '金色', '64G', '联通', '套餐三' ],
  [ '金色', '64G', '移动', '套餐一' ], [ '金色', '64G', '移动', '套餐二' ], [ '金色', '64G', '移动', '套餐三' ],
  [ '金色', '64G', '电信', '套餐一' ], [ '金色', '64G', '电信', '套餐二' ], [ '金色', '64G', '电信', '套餐三' ] ]
```

以上，通过两两相组的形式，我们可以获取到最终的组合。

当然，**jsliang** 知道小伙伴们不会满足以此，找了一种更简单的写法：
 
> 推入数据的时候需要 `result.join(',').split(',')`，这点可以优化一下，这里就不逼逼了。

```js
const combine = (arr) => {
  const results = [];
  const ergodic = (index, result = []) => {
    for (let i = 0; i < arr[index].length; i++) {
      result[index] = arr[index][i];
      if (index != arr.length - 1) {
        ergodic(index + 1, result);
      } else {
        results.push(result.join(',').split(','));
      }
    }
  }
  ergodic(0, []);

  return results;
};

const colorList = ['白色', '黑色', '金色'];
const sizeList = ['16G', '32G', '64G'];
const versionList = ['联通', '移动', '电信'];
const setMealList = ['套餐一', '套餐二', '套餐三'];

console.log(
  combine([
    colorList,
    sizeList,
    versionList,
    setMealList,
  ])
);
```

## <a name="chapter-five" id="chapter-five"></a>五 参考文献

> [返回目录](#chapter-one)

* [【博客园】凌云之翼《多个数组的组合排序算法》](https://www.cnblogs.com/liugang-vip/p/5985210.html)
* [【简书】少苏菇凉《js数组排列组合(收录一种简单的方法)》](https://www.jianshu.com/p/b6e31d6139cc)
* [【微信公众号】程序员黑叔《又懒得加班了，带你去电商公司写商品中心》](https://mp.weixin.qq.com/s/vovEX2YoivRAf9ErgfI2qw)

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
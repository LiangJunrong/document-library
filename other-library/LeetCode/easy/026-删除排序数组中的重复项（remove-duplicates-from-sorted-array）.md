026 - 删除排序数组中的重复项（remove-duplicates-from-sorted-array）
===

> Create by **jsliang** on **2019-06-06 11:11:26**  
> Recently revised in **2019-09-18 10:05:22**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 解题](#chapter-three) |
| &emsp;[3.1 解法 - 双指针](#chapter-three-one) |
| &emsp;[3.2 解法 - 违规操作](#chapter-three-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

* **难度**：简单
* **涉及知识**：数组、双指针
* **题目地址**：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
* **题目内容**：

```
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
你不需要考虑数组中超出新长度后面的元素。

示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],
函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
你不需要考虑数组中超出新长度后面的元素。

说明:

为什么返回数值是整数，但输出的答案是数组呢?
请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

## <a name="chapter-three" id="chapter-three">三 解题</a>

> [返回目录](#chapter-one)

* **官方题解**：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-xiang-by-/

解题千千万，官方独一家，上面是官方使用 Java 进行的题解。

小伙伴可以先自己在本地尝试解题，再看看官方解题，最后再回来看看 **jsliang** 讲解下使用 JavaScript 的解题思路。

### <a name="chapter-three-one" id="chapter-three-one">3.1 解法 - 双指针</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};
```

* **执行测试**：

1. `nums`：`[1, 1, 2]`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 161/161 cases passed (124 ms)
  ✔ Your runtime beats 72.77 % of javascript submissions
  ✔ Your memory usage beats 15.24 % of javascript submissions (37.6 MB)
```

* **知识点**：

1. `splice()`：`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。[`splice()` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Array/splice.md)

* **解题思路**：

**首先**，这道题涉及到所谓的 **双指针** 了，什么是 **双指针** 呢？

* [《LeetBook（LeetCode详解）》 - 双指针](https://hk029.gitbooks.io/leetbook/twopoint.html)

双指针，顾名思义，就是利用两个指针去遍历数组，一般来说，遍历数组采用的是单指针（index) 去遍历，两个指针一般是在有序数组中使用，一个放首，一个放尾，同时向中间遍历，直到两个指针相交，完成遍历，时间复杂度也是O(n)。

啥意思咧？就好比我们的代码：

```js
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === nums[i + 1]) {
    nums.splice(i, 1);
    i--;
  }
}
```

在这里，我们是不是使用了数组的两个位置？`[i]` 以及 `[i + 1]`。

通过这两个指针的不断移动，直到把整个数组遍历一次，从而得到最终解。

**然后**，我们需要知道的是，由于代码中，我们使用了 `for()` + `splice()`，从而造成的耗时和空间会比其他代码大，因为 `splice()` 是 JavaScript 封装好的方法。

是不是觉得无法理解？那么我们稍微看一眼 `splice()` 的源码吧：

> 仅仅看看就行了，这里不做过多讲解，刚兴趣的小伙伴可以前往 [V8 引擎源码](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js)

```js
function ArraySplice(start, delete_count) {
  CHECK_OBJECT_COERCIBLE(this, "Array.prototype.splice");

  var num_arguments = arguments.length;
  var array = TO_OBJECT(this);
  var len = TO_LENGTH(array.length);
  var start_i = ComputeSpliceStartIndex(TO_INTEGER(start), len);
  var del_count = ComputeSpliceDeleteCount(delete_count, num_arguments, len, start_i);
  var deleted_elements = ArraySpeciesCreate(array, del_count);
  deleted_elements.length = del_count;
  var num_elements_to_add = num_arguments > 2 ? num_arguments - 2 : 0;

  if (del_count != num_elements_to_add && %object_is_sealed(array)) {
    throw %make_type_error(kArrayFunctionsOnSealed);
  } else if (del_count > 0 && %object_is_frozen(array)) {
    throw %make_type_error(kArrayFunctionsOnFrozen);
  }

  var changed_elements = del_count;
  if (num_elements_to_add != del_count) {
    // If the slice needs to do a actually move elements after the insertion
    // point, then include those in the estimate of changed elements.
    changed_elements += len - start_i - del_count;
  }
  if (UseSparseVariant(array, len, IS_ARRAY(array), changed_elements)) {
    %NormalizeElements(array);
    if (IS_ARRAY(deleted_elements)) %NormalizeElements(deleted_elements);
    SparseSlice(array, start_i, del_count, len, deleted_elements);
    SparseMove(array, start_i, del_count, len, num_elements_to_add);
  } else {
    SimpleSlice(array, start_i, del_count, len, deleted_elements);
    SimpleMove(array, start_i, del_count, len, num_elements_to_add);
  }

  // Insert the arguments into the resulting array in
  // place of the deleted elements.
  var i = start_i;
  var arguments_index = 2;
  var arguments_length = arguments.length;
  while (arguments_index < arguments_length) {
    array[i++] = arguments[arguments_index++];
  }
  array.length = len - del_count + num_elements_to_add;

  // Return the deleted elements.
  return deleted_elements;
}
```

如上，`splice()` 先执行删除操作，删除指定个数的元素，然后再插入 `elements`（元素或数组），他的每次删除都涉及大量元素的重新排列，而在插入元素时引入队列来管理。所以 `splice()` 的效率不高

**最后**，我们要做的就是返回数组的长度，就这样就 OK 了。

### <a name="chapter-three-two" id="chapter-three-two">3.2 解法 - 违规操作</a>

> [返回目录](#chapter-one)

* **解题代码**：

```js
var removeDuplicates = function(nums) {
  var a = [...new Set(nums)];
  for (var i = 0;i < a.length;i++) nums[i] = a[i];
  return a.length;
};
```

* **执行测试**：

1. `nums`：`[1, 1, 2]`
2. `return`：

```js
2
```

* **LeetCode Submit**：

```js
✔ Accepted
  ✔ 161/161 cases passed (112 ms)
  ✔ Your runtime beats 93.2 % of javascript submissions
  ✔ Your memory usage beats 45.6 % of javascript submissions (37.1 MB)
```

* **知识点**：

1. `Set`：`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。[`Set` 详细介绍](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Set/README.md)

* **解题思路**：

**首先**，**jsliang** 表示这种方法可能不符合题意，但是它又是可行的！所以不管怎么说，莽就对了~

**然后**，`Set` 对象会对值进行唯一操作，如果输入 `[1, 1, 2]`，那么这个 `Set` 会变成 `Set(2) {1, 2}`：`let a = new Set([1, 1, 2]);`。

**接着**，我们利用 ES6 的扩展运算符：`[...new Set(nums)]`，可以直接将 `Set` 类型转换成 `Array` 类型。

**最后**，循环遍历 `a`，将 `a` 的内容赋值到 `nums` 即可（注意，`nums` 后面还是会有一些乱七八糟的数据，不过它不影响我们的解题）。

---

**不折腾的前端，和咸鱼有什么区别！**

![图](../../../public-repertory/img/z-small-wechat-public-address.jpg)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

扫描上方二维码，关注 **jsliang** 的公众号，让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
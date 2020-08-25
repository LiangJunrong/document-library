标签划分 - 递归
===

> Create by **jsliang** on **2020-07-24 17:38:49**  
> Recently revised in **2020-08-25 10:39:37**

## 前提说明

### 前提说明：确定因素

递归一般需要确定 2 个因素：

* 递推关系：一个问题的结果与其子问题的结果之间的关系
* 基本情况：不需要进一步的递归调用的时候，放回答案的情况。就好比斐波那契数列，到了 1 和 2 的时候不需要进一步递归了。

### 前提说明：工作流程

解决递归问题的一般工作流程：

1. 定义递归函数；
2. 写下递归关系和基本情况；
3. 使用 memoization（记忆化）以消除重复计算问题(如果存在)。
4. 尽可能地实现 尾递归（tail recursion）函数，以优化空间复杂度。

### 前提说明：隐藏问题

当我们递归地解决问题时，似乎不需要使用任何栈。但实际上，我们使用的是由系统提供的隐式栈，也称为调用栈（Call Stack）。

所以，有时候我们就会爆栈，因为调用的次数过多了（斐波那契数列调用 50+ 次就有可能会卡爆）。

### 前提说明：模板

> 深度优先搜索

```js
/**
 * 当当前路径为目标值时返回 true
*/
const DFS = (curr, target, visited) => {
  // 1. 如果是目标值，返回 true
  if (curr === target) {
    return true;
  }
  // 2. 否则遍历所有临近节点 neighbor
  for (let i = 0; i < neighbor.length; i++) {
    // 3. 如果当前节点没有访问过
    if (neighbor[i] !== visited) {
      // 3.1 设置它访问过了
      visited.push(neighbor[i]);
      // 3.2 访问它！
      if (DFS(neighbor[i], target, visited)) {
        return true;
      }
    }
  }
  // 4. 如果都没有找到，返回 false
  return false;
};
```

> 递归树

```js
const recursion = (root) => {
  // 判断是否已经到底了
  if (!root) {
    return;
  }
  // 如果存在左节点和右节点，进行遍历
  if (root.left) {
    recursion(root.left);
  }
  if (root.right) {
    recursion(root.right);
  }
};
```

> 递归斐波那契数列

```js
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
```

> 递归斐波那契数列（记忆法）

```js
const fibonacci = (n, map = [1, 1, 2]) => {
  if (map[n]) {
    return map[n];
  }
  map[n] = fibonacci(n - 1, map) + fibonacci(n - 2, map);
  return map[n];
};
```

## 经典

* 【中等】[491-递增子序列](https://leetcode-cn.com/problems/increasing-subsequences/)

## 入门

* 【简单】面试题 16.11-跳水板
* 【简单】118-杨辉三角
* 【简单】119-杨辉三角 II
* 【中等】【入门】面试题 08.05-递归乘法

## 熟练

* 【中等】剑指 Offer 16-数值的整数次方
* 【中等】50-Pow(x, n)
* 【中等】779-第K个语法符号
* 【简单】面试题 17.12-BiNode

## 精通

* 【中等】698-划分为k个相等的子集

## 斐波那契数列

* 【简单】【入门】509-斐波那契数
* 【简单】【入门】剑指 Offer 10- I-斐波那契数列
* 【简单】【入门】1137-第 N 个泰波那契数
* 【简单】【入门】剑指 Offer 10- II-青蛙跳台阶问题

## 树

* 【简单】【入门】938-二叉搜索树的范围和
* 【简单】【入门】530-二叉搜索树的最小绝对差
* 【简单】【入门】783-二叉搜索树节点最小距离
* 【简单】【熟练】687-最长同值路径

## 链表

* 【简单】【入门】206-反转链表
* 【简单】【入门】剑指 Offer 24-反转链表
* 【中等】【入门】24-两两交换链表中的节点
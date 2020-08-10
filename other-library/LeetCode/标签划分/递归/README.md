标签划分 - 递归
===

> Create by **jsliang** on **2020-07-24 17:38:49**  
> Recently revised in **2020-08-10 14:53:41**

模板：

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

当我们递归地实现 DFS 时，似乎不需要使用任何栈。但实际上，我们使用的是由系统提供的隐式栈，也称为调用栈（Call Stack）。

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

## 入门

* 【简单】面试题 16.11-跳水板

## 熟练

* 【中等】779-第K个语法符号
* 【简单】面试题 17.12-BiNode

## 精通

* 【中等】剑指 Offer 16-数值的整数次方
* 【中等】50-Pow(x, n)
* 【中等】698-划分为k个相等的子集

## 斐波那契数列

* 【简单】【入门】509-斐波那契数
* 【简单】【入门】剑指 Offer 10- I-斐波那契数列
* 【简单】【入门】1137-第 N 个泰波那契数
* 【简单】【入门】剑指 Offer 10- II-青蛙跳台阶问题
* 【中等】【入门】面试题 08.05-递归乘法

## 树

* 【简单】【入门】938-二叉搜索树的范围和
* 【简单】【入门】530-二叉搜索树的最小绝对差
* 【简单】【入门】783-二叉搜索树节点最小距离
* 【简单】【熟练】687-最长同值路径

## 链表

* 【中等】【入门】24-两两交换链表中的节点
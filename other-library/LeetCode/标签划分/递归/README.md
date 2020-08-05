标签划分 - 递归
===

> Create by **jsliang** on **2020-07-24 17:38:49**  
> Recently revised in **2020-08-05 15:24:41**

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

## 入门

* 【简单】938-二叉搜索树的范围和
* 【简单】530-二叉搜索树的最小绝对差
* 【简单】783-二叉搜索树节点最小距离

## 熟练

* 【简单】面试题 17.12-BiNode
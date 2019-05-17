删除数组项目的技巧
===

> Create by **jsliang** on **2019-4-5 09:56:19**  
> Recently revised in **2019-4-6 10:34:11**

```js
/**
  * 这里使用了三种写法
  * 1. map + splice
  * 2. splice + findIndex
  * 3. filter
  */
// 1. map + splice 写法
deleteInfo(recycleItem) {
  this.todoInfos.map((item, index) => {
    if(item.id == recycleItem.id) {
      this.todoInfos.splice(index, 1);
    }
  })
},
// 2. splice + findIndex 写法
deleteInfo(recycleItem) {
  this.todoInfos.splice( this.todoInfos.findIndex( v => v.id === recycleItem.id), 1);
},
// 3. filter 写法
deleteInfo(recycleItem) {
  this.todoInfos = this.todoInfos.filter( (x) => {
    return x.id != recycleItem.id;
  })
}
```
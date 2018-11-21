微信小程序 之 奇技淫巧
===

> Create by **jsliang** on **2018-11-21 20:46:36**  
> Recently revised in **2018-11-21 22:16:12**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 功能列表](#chapter-three) |
| &emsp;<a name="catalog-chapter-three-one" id="catalog-chapter-three-one"></a>[3.1 通讯录](#chapter-three-one) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

&emsp;写文章无形中也会磨炼自己的表达能力。  
&emsp;这周（2018-11-19）在开发 **通讯录** 时，突然发现 **[微信小程序 bug 集中营](https://github.com/LiangJunrong/document-library/blob/master/other-library/WeChatApplet/WeChatAppletBug.md)** 这篇文章不能再继续写了，因为它变得 **臃肿**、**丑陋** 且 **难维护**，连我这个写作人都感慨：如果没有 `Ctrl + F`，我真心不想翻这篇文章。  
&emsp;所以，单独开一篇文章：**微信小程序功能清单**。然后嘛，为了能吸引小伙伴点进来瞅瞅，起个标新立异的标题吧：**微信小程序 之 奇技淫巧**。

<br>

# <a name="chapter-three" id="chapter-three">三 功能列表</a>

> [返回目录](#catalog-chapter-three)

&emsp;**看一遍？谁都可以！**  
&emsp;**敲一遍？天差地别！**

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 通讯录</a>

> [返回目录](#catalog-chapter-three-one)

<br>

&emsp;**功能实现思路**

* 数据存放位置：
```
contactsData: [
  { groupName: 'A', users: [] },
  { groupName: 'B', users: [] },
  // ...C 组之后省略不写，同 A、B 组一样
]
```
* 正常分页接口 1：`pagination/paginationWayOne`
* 拼音分页接口 2（上拉加载）：`pagination/paginationWayTwo`
* 拼音分页接口 3（下拉加载）：`pagination/paginationWayThree`
* 修改数据接口：`changeData/editData`
* 删除数据接口：`changeData/deleteData`

1. 首屏渲染。用户进入页面，加载 **正常分页接口 1**：`pagination/paginationWayOne?pageNo=1`，获取第一页数据，并判断分组，添加到 `contactsData`。
2. 正常上拉动作。用户在进入页面后，执行正常的上拉加载动作，则执行 **正常分页接口 1**：`pagination/paginationWayOne?pageNo=2`，在原有 `contactsData` 的情况下，将第二页的数据进行判断分析，分别添加到各分组中。
3. 点击拼音导航条。加载 **拼音分页接口 2（上拉加载）**： `pagination/paginationWayTwo?pinyin=L&pageNo=1`，如果该次接口返回数据，则将新数据同【L】组及其之后的【M】【N】组等（因为【L】组可能不满分页条数）的原数据进行比对：如果是原数据所不存在的，则将新的数据直接 `push` 插入到【L】组尾端；如果该数据已存在，则不理会。
4. 拼音导航条情况下，执行上拉加载动作。则执行 **拼音分页接口 2（上拉加载）**：`pagination/paginationWayTwo?pinyin=L&pageNo=2`，从而加载第二页，并与上一条分析一样，分析判断，然后插入数据。
5. 拼音导航条情况下，执行下拉刷新动作。执行接口 **拼音分页接口 3（下拉加载）**：`pagination/paginationWayThree?pinyin=L&pageNo=1`，从而获得该字母前一个字母的数据（后端会进行倒序查询输出，我们需要的仅仅是进行判断，然后 `unshift` 插入渲染）。
6. 用户进行修改操作。加载接口 `changeData/editData?userName=jsliang`，点击修改后，删除原有数据，判断接口返回的拼音：首先循环 `A-Z`，查看该数据应该存放到哪个组；然后在该字母组中，执行二分查找；最后插入该数据位置，并重新渲染数据新增部分。
7. 用户执行删除操作。加载接口 `changeData/deleteData?userName=jsliang`，直接删除该数据。

<br>

> 由于不能暴露公司代码，需要抽取进行单独编程。  
> 故以下代码尚未完善，敬请期待

&emsp;**☆———————华———————☆**  
&emsp;**☆———————丽———————☆**  
&emsp;**☆———————分———————☆**  
&emsp;**☆———————割———————☆**  
&emsp;**☆———————线———————☆**  

&emsp;话不多说，直接上手：

> *.wxml

```
<view class="pinyin-nav">
  <view wx:for="{{letters}}" wx:key="{{letters.index}}">
    <text class="pinyin-nav-byte" data-byte="{{item}}" bindtap="pingyinNav">{{item}}</text>
  </view>
</view>
```

> *.wxss

```
.pinyin-nav {
  font-size: 28rpx;
  line-height: 28rpx;
  position: fixed;
  right: 10rpx;
  top: 9%;
  height: 80%;
  text-align: center;
}
.pinyin-nav-byte {
  display: inline-block;
  width: 30rpx;
  border-radius: 20rpx;
  padding: 5rpx 5rpx;
  margin-top: 3rpx;
  color: #fff;
  background: rgb(129, 212, 238);
}
```

> *.js
```
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航字母
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    // 数据
    contactsData: [
      { groupName: 'A', users: [] },
      { groupName: 'B', users: [] },
      { groupName: 'C', users: [] },
      { groupName: 'D', users: [] },
      { groupName: 'E', users: [] },
      { groupName: 'F', users: [] },
      { groupName: 'G', users: [] },
      { groupName: 'H', users: [] },
      { groupName: 'I', users: [] },
      { groupName: 'J', users: [] },
      { groupName: 'K', users: [] },
      { groupName: 'L', users: [] },
      { groupName: 'M', users: [] },
      { groupName: 'N', users: [] },
      { groupName: 'O', users: [] },
      { groupName: 'P', users: [] },
      { groupName: 'Q', users: [] },
      { groupName: 'R', users: [] },
      { groupName: 'S', users: [] },
      { groupName: 'T', users: [] },
      { groupName: 'U', users: [] },
      { groupName: 'V', users: [] },
      { groupName: 'W', users: [] },
      { groupName: 'X', users: [] },
      { groupName: 'Y', users: [] },
      { groupName: 'Z', users: [] }
    ],
  },
  // 拼音导航
  pingyinNav(e) {
    console.log(e.currentTarget.dataset.byte);
  },
})
```

<br>

&emsp;在上面的代码中，**jsliang** 做了三件事：

1. 编写 `Wxml` 结构，由于只有一层 `view` 在循环的时候，在控制台看到的 `Wxml` 结构并不好看，所以循环的是第二层 `view`，这样就形成下面的效果：

```
<view>
  <view></view>
  <view></view>
  ...
</view>
```

2. 编写 `Wxss` 定位，**jsliang** 对 `Wxml` 进行了 `position: fixed` 的绝对定位，这样就可以将它固定在右侧。
3. 最后，在 `js` 中定义了遍历的数据（字母 `A-Z`）及点击字母的时候，将该字母传递过来并打印。

<br>

&emsp;在昨晚上面的基础环境搭建后，我们需要实现下拉、上拉的功能，这两个功能在微信小程序中有定义，这里就不做过多讲解：`onPullDownRefresh`、`onReachBottom`。下面我们重点讲解下点击字母滚动到对应页面：

> 代码片段

```
onLoad: function (options) {
  console.log("\n成员管理页：");
  
  // 设备信息
  wx.getSystemInfo({
    success: res => {
      console.log("\n设备信息为：");
      console.log(res);

      let equipmentOneRpx = 750 / res.windowWidth;
      console.log("换算信息：1rpx = " + equipmentOneRpx + "px");
      this.setData({
        equipmentOneRpx: equipmentOneRpx
      })
    },
  })
},
```

* [参考资料](https://blog.csdn.net/qq_41080490/article/details/80268298)

&emsp;我们在 `onLoad` 中获取到用户设备的信息，然后计算出 `1rpx` 等于多少 `px`。在 `iphone6` 中，`1rpx = 2px`。我们只需要将 `css` 中写的样式高度 / 比例，就能动态计算我们的高度。

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
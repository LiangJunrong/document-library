# 微信小程序 100 个坑
> create by **jsliang** on **2018-9-17 17:58:56**  
> Recently revised in **2018-9-17 21:07:40**

> 如果你觉得本文还不错，记得给个 star ， 你的 star 是我学习的动力！

<br>

## 一、前言
&emsp;微信小程序的教程，或许写出来是非常受欢迎的。但是，想想我带你们走了一条平坦路，之后你们碰到坑坑洼洼了，咋办？最后的锅，会不会到我背啊，可怕！  
&emsp;所以，在这里， jsliang 结合“日常躺坑”，先为你解决小程序的 100 个坑！虽然现在可能还不够，但是第一天我就碰到 4/5 个了，我想我可以帮你们躺完 100 个的！！！  
&emsp;现在的开发版本是：`"libVersion": "2.0.4"`  
&emsp;如果你开发的版本已经解决了这个 bug ，或者你觉得这个 bug 还有其他解决方法，请告诉我！万谢！！！  
&emsp;后来者开心无坑开发日，天祭无忘告 jsliang ！跪谢！！！

&emsp;目前已有4个坑。

<br>

## 二、内部组件坑
> 本坑来源于微信自带的开发文档：[小程序开发](https://developers.weixin.qq.com/miniprogram/dev/component/)

&emsp;清单：
1. 轮播图

### 2.1 swiper 轮播图
> 本组件目前已有4个坑，有兴趣的小伙伴可以详看。

摘选自该地址：[地址](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)。下面是原版代码：
> demo.wxml
```
<swiper indicator-dots="{{indicatorDots}}"
  autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
  <block wx:for="{{imgUrls}}">
    <swiper-item>
      <image src="{{item}}" class="slide-image" width="355" height="150"/>
    </swiper-item>
  </block>
</swiper>
<button bindtap="changeIndicatorDots"> indicator-dots </button>
<button bindtap="changeAutoplay"> autoplay </button>
<slider bindchange="intervalChange" show-value min="500" max="2000"/> interval
<slider bindchange="durationChange" show-value min="1000" max="10000"/> duration
```
> demo.js
```
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
```
<br>

&emsp;好的，上面就是微信官方文档的演示代码，那么我们开始填坑：
1. `demo.wxml` 中出现的 `<image src="{{item}}" class="slide-image" width="355" height="150"/>` 这行， `width` 和 `height` 的行内属性是忽悠老百姓的，它 **并没乱用** ！我们需要在 `slide-image` 这个 `class` 类中修改 `width` 和 `height`。
2. 绑定值。
![阮一峰](../../public-repertory/img/other-WechatApplet-bug-1.png)
&emsp;它的属性名和属性值是这么说的，然后，用的时候，首先你需要在 `demo.wxml` 中的 `swiper` 绑定这个属性名，然后在 `demo.js` 中设置其属性值。
3. 关于轮播图的地址跳转，在微信小程序的官网是没用提及的，也是 jsliang 去百度查看了下，才知道怎么设置（可能是我一开始就挑战的难度太高了么~），在下面 jsliang 贴出来代码~想知道怎么解决的可以去看看：首先，在 `data` 中设置 `link` ；然后，设置 `navigator` 导航遍历 `item.link` 。
4. 关于 `wx:key` 的 `warning` ，这里也是个小坑。[点我了解](https://www.sohu.com/a/207728111_99897596)

<br>

&emsp;下面给出 jsliang 的解决代码，如果不对，尽情指出：
> index.wxml
```
<view>
  <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}" indicator-color="#707071" indicator-active-color="#fff" circular="true">
    <block wx:for="{{imgUrls}}" wx:key="{{item.index}}">
      <swiper-item>
        <navigator url="{{item.link}}" hover-class="navigator-hover">
          <image src="{{item.url}}" class="slide-image" />
        </navigator>
      </swiper-item>
    </block>
  </swiper>
</view>
```

> index.wxss
```
.slide-image {
  width: 100%;
  height: 420rpx;
}
```

> index.js
```
Page({
  data: {
    imgUrls: [
      {
        link: '../index/index',
        url: '../../public/carousel1.png',
      },
      {
        link: '../demo/demo',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      },
      {
        link: '../logs/logs',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})
```

<br>

## 三、外部组件坑
> 本坑来源于开发中产品提出的需求，代码开发中碰到的 bug 。

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
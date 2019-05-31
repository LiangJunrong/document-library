Vue Demo Two - 创意网站
===

> Create by **jsliang** on **2019-1-23 12:56:37**  
> Recently revised in **2019-05-31 14:30:23**

该 Demo，可分为四大部分：

## 一 吐槽系统

* 功能

1. 用户可吐槽工作、生活、学习
2. 用户可查看吐槽详情
3. 用户可点赞吐槽
4. 用户可评论吐槽
5. 用户可回复吐槽评论
6. 用户可举报吐槽
7. 用户举报数超 50，管理员将审核，吐槽将可能因违规被删除

* 数据库设计

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | int | 主键，自动递增 |
| time | datetime | 时间 |
|  |  |  |
|  |  |  |

## 二 商城系统

1. 用户可以上传商品
2. 用户可以查看商品详情
3. 用户可以添加商品到购物车并购买
4. 用户可以评论商品
5. 用户可以点赞商品
6. 用户的商品评论违法被举报删除
7. 商品分为人气商品和新商品
8. 用户可以搜索商品
9. 商品违法被举报删除
10. 用户可以实施商品攻略战，以超过商品原价 10 倍的积分买断商品拥有权
11. 商品不能是正规商品

## 三 积分系统

1. 用户签到能领取积分
2. 用户评论被点赞能获得积分
3. 用户上传商品能获得积分
4. 用户上传的商品获得点赞可以领取积分
5. 用户文章、商品被举报删除可以获得成就
6. 用户商品被买断可以获得积分
7. 积分可用户商品购买以及商品拥有权购买
8. 积分可用于系统成就达成

## 四 用户信息

1. 用户信息来源于微信/QQ
2. 用户可有个人座右铭
3. 用户拥有文章发表权以及商品发表权

## 五 土豪系统

1. 积分累计到一定程度开启土豪系统
2. 土豪可以看到普通用户看不到的页面
3. 土豪可以 8 折垄断商品
4. 土豪可以花费积分购买排名
5. 土豪可以打赏其他用户
6. 土豪被举报将扣除全部积分

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
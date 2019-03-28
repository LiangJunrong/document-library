Git
===

> Create by **jsliang** on **2018-10-25 15:14:00**  
> Recently revised in **2019-3-28 08:13:27**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

一直以来，**jsliang** 对 Git 的操作，仅限于：`git add .`、`git commit -m "更新信息"`、`git push` 这三个，偶尔还会创建操作个分支。

但是，仅仅是这些是不够的。所以，跟随 **廖雪峰** 等大神的 Git 教程进行一波自我更新：

* [《Git 教程 - 廖雪峰》](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 什么是 Git

Git 是目前世界上最先进的分布式版本控制系统。

这么说也许你很懵逼，没关系，我们用毕业论文来讲讲：

![图](../../public-repertory/img/other-git-1.jpg)

如上图。写过毕业论文的小伙伴，应该记忆深刻：《毕业论文》《毕业论文完成版》《毕业论文最终版》《毕业论文最最终版》……

令人抓狂无比，当我们需要在 **最最最最终版** 找到之前文件中早早被删除的信息时，我们更加抓狂了：卧槽，我写到哪去了！

这时候，如果有个软件之类的东西帮我们记录就好了：

| 文件名 | 更新信息 | 时间 |
| --- | --- | --- |
| 毕业论文 | 第一版，整体内容搭建 | 2019-3-28 08:41:04 |
| 毕业论文完成版 | 第二版，完成了大部分内容，并进行了排版 | 2019-3-29 08:41:46 |
| 毕业论文最终版 | 第三版，对第二版进行了删减 | 2019-3-30 08:42:21 |
| 毕业论文最最终版 | 第四版，对第三版进行了新增 | 2019-3-31 08:42:42 |
| ... | ... | ... |
| 毕业论文最最最最终版 | 第六版，对整了下格式 | 2019-4-2 08:43:17 |

OK，这时候我们会发觉，我们要找到被删减的内容，只需要去第二版中查找就行了。

而 Git，就是目前较盛行的版本管理工具。

## 集中式与分布式

历史总是前进的，在 Git 之前，还是有其他的版本管理系统：

* VSS：最老的版本有锁，需要锁住才能编辑，提交时解锁，独占修改，小规模最好用，大规模最难用。
* CSV：代表协作版本系统或者并发版本系统同，是一种版本控制系统，提交失败时解决冲突比较麻烦。
* SVN：目标是想取代 CSV，相对于 CSV 采用了分支管理系统，配置成 HTTP 服务时比较简单，稳定。
* Git：相对于 SVN 多一个本地库。

## Git 命令

### git fetch

从一个或多个其他存储库中获取分支和/或标签(统称为“引用”)以及完成其历史所必需的对象。 远程跟踪分支已更新(Git术语叫做commit)，需要将这些更新取回本地，这时就要用到git fetch命令。

### git 取消忽略文件大小写的更改

在当前项目，输入 `git config core.ignorecase false` 即可关闭 git 忽略文件大小写的配置。

### git 删除文件夹

* 删除 `target` 文件夹：`git rm -r --cached target`
* 提交更改：`git commit -m "删除 target 目录"`
* 确认更改：`git push`

### git 覆盖上一次 commit 提交信息

`git commit -amend -m "New commit"`

### git 分支

* 创建分支：`git branch cheny`
* 切换到分支：`git checkout cheny`
* 添加修改代码到缓存：`git add .`
* 提交：`git commit -m "修改"`
* 提交到分支：`git push origin cheny`/`git push --set-upstream origin cheny`

## 配置 .gitignore

在我们使用Git的过程中，有时候喜欢建一些文件给自己查看使用而不是给大众使用，或者说像是 node_modules 这些文件不希望上传到代码仓库的，这时候就需要设置响应的忽略规则，来忽略这些文件的提交。

### 全局生效

定义全局 .gitignore 文件，将其放在任意位置即可生效

```bash
git config --global core.excludesfile ~/.gitignore
```

### 忽略规则

1. 忽略掉所有文件名是 test.html 的文件

```bash
test.html
```

2. 忽略掉 node_modules 文件夹

```bash
node_modules
```

3. 忽略掉所有生成的备份文件

```bash
*.*~
```

4. 忽略所有 .o 和 .a 文件

```bash
*.[oa]
```

5. 详细用法看文档：[详情](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/gitignore.html)

### VS Code 隐藏 node_modules

值得一提的就是，我们不仅要忽略它的上传，在 Visio Studio Code 这个编辑器中，如果我们也需要忽略它的话，就需要进行相应的设置，VS Code 隐藏工作区中的 node_modules 文件夹： 主菜单 -> 文件 -> 首选项 -> 用户设置：

```bash
"file.exclude": {
    "node_modules/": true
}
```

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
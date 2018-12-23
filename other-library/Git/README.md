Git 学习
===

> Create by **jsliang** on **2018-10-25 15:14:00**  
> Recently revised in **2018-12-23 20:45:24**

## 第一节 配置 .gitignore
> create by **jsliang** on **2018年9月4日10:45:43**  

&emsp;在我们使用Git的过程中，有时候喜欢建一些文件给自己查看使用而不是给大众使用，或者说像是 node_modules 这些文件不希望上传到代码仓库的，这时候就需要设置响应的忽略规则，来忽略这些文件的提交。

### 1.1 全局生效
&emsp;定义全局 .gitignore 文件，将其放在任意位置即可生效
```
    git config --global core.excludesfile ~/.gitignore
```

<br>

### 1.2 忽略规则
1. 忽略掉所有文件名是 test.html 的文件
```
test.html
```

2. 忽略掉 node_modules 文件夹
```
node_modules
```

3. 忽略掉所有生成的备份文件
```
*.*~
```

4. 忽略所有 .o 和 .a 文件
```
*.[oa]
```

5. 详细用法看文档：[详情](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/gitignore.html)

<br>

### 1.3 VS Code 隐藏 node_modules
&emsp;值得一提的就是，我们不仅要忽略它的上传，在VS Code 这个编辑器中，如果我们也需要忽略它的话，就需要进行相应的设置，VS Code 隐藏工作区中的 node_modules 文件夹： 主菜单 -> 文件 -> 首选项 -> 用户设置：
```
"file.exclude": {
    "node_modules/": true
}
```

<br>

## 第二节 git 命令

&emsp;这里讲解日常使用的 git 命令操作

<br>

### 2.1 git fetch
&emsp;从一个或多个其他存储库中获取分支和/或标签(统称为“引用”)以及完成其历史所必需的对象。 远程跟踪分支已更新(Git术语叫做commit)，需要将这些更新取回本地，这时就要用到git fetch命令。

<br>

### 2.2 git 取消忽略文件大小写的更改

&emsp;在当前项目，输入 `git config core.ignorecase false` 即可关闭 git 忽略文件大小写的配置。

<br>

### 2.3 git 删除文件夹

* 删除 `target` 文件夹：`git rm -r --cached target`
* 提交更改：`git commit -m "删除 target 目录"`
* 确认更改：`git push`

<br>

### 2.4 git 覆盖上一次 commit 提交信息

&emsp;`git commit -amend -m "New commit"`

<br>

### 2.4 git 分支

* 创建分支：`git branch cheny`
* 切换到分支：`git checkout cheny`
* 添加修改代码到缓存：`git add .`
* 提交：`git commit -m "修改"`
* 提交到分支：`git push origin cheny`/`git push --set-upstream origin cheny`

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
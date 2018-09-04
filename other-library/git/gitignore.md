# 配置gitignore
> create by **jsliang** on **2018年9月4日10:45:43**  

&emsp;在我们使用Git的过程中，有时候喜欢建一些文件给自己查看使用而不是给大众使用，或者说像是 node_modules 这些文件不希望上传到代码仓库的，这时候就需要设置响应的忽略规则，来忽略这些文件的提交。

## 1 全局生效
&emsp;定义全局 .gitignore 文件，将其放在任意位置即可生效
```
    git config --global core.excludesfile ~/.gitignore
```

<br>

## 2 忽略规则
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

## 3 VS Code 隐藏 node_modules
&emsp;值得一提的就是，我们不仅要忽略它的上传，在VS Code 这个编辑器中，如果我们也需要忽略它的话，就需要进行相应的设置，VS Code 隐藏工作区中的 node_modules 文件夹： 主菜单 -> 文件 -> 首选项 -> 用户设置：
```
"file.exclude": {
    "node_modules/": true
}
```
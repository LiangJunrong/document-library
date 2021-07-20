更多资料
===

> Create by **jsliang** on **2021-07-20 08:27:41**  
> Recently revised in **2021-07-20 08:58:40**

TODO:

1. 补充完善 shell.js 文章，资料在下面
2. 通过 canvas 开发小游戏
3. 通过 Next 打造小游戏说明文档
   1. 引用 Next
   2. 引用 React-Markdown
   3. 引用 gray-matter
4. 通过 pkg 打包小游戏

> 资料在笔记目录

## Shell.js

* [👏 nodejs写bash脚本终极方案！](https://juejin.cn/post/6979989936137043999)

### 删除文件/文件夹

删除文件/文件夹（举例 `node_modules`）

1. `cmd.exe`：`rd /s /q 'path'`
2. `PowerShell`：`rd -r 'path'`
3. `Mac`：`rm -rf 'path'`

### Git 常见操作

#### git commit 忽略 tslint

指令：`git commit -m "xxx" --no-verify`

#### git cherry-pick：迁移代码

对于多分支的代码库，将代码从一个分支转移到另一个分支。

指令：`git cherry-pick <commitHash>`

* [cherry-pick](http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

#### git reset：回退版本并保留内容

* `git reset --soft HEAD^`

> `HEAD^` 是指上一个版本，也可以写成 `HEAD~1`

#### git stash：暂存内容

* 暂存内容：`git stash`
* 签出内容：`git stash pop`

#### git --rebase：拉分支

* 拉取远程分支并合并到本地

1. `git fetch origin master`
2. `git merge origin/master`

* 拉取远程分支并基于该分支进行改动：`git pull --rebase origin master`

#### git worktree：同时修改多个版本

同一个 Git 仓库，需要同时修改多个分支，或者需要在 A 分支上参照 B 分支的内容进行修改。

当然这种情况可以用 `git clone` 拷贝一个新仓库，但是如果你的仓库有点大（几 G 那种），那还是有点嫌麻烦的。

于是就有了 `git worktree`，指令如下：

```shell
# 将 abc 分支切出到另一个目录 jsliang 中
# 注意：这个目录不能在主仓库中
git worktree add ../jsliang abc # git add [<选项>] <路径> [<提交>]

# 获取帮助
git worktree -h

# 查看每个工作树的详细信息
git worktree list

# 更完整的工作树信息
# git worktree list --porcelain

# 锁定内容，防止被自动删除
git worktree lock

# 解锁内容
git worktree unlock

# 迁移到新目录
git worktree move abc ../jsliang2

# 删除某条工作树
git worktree remove ../jsliang

# 清除工作树信息
git worktree prune
```

常用指令：

* 切出分支：`git worktree add ../jsliang abc`
* 常用操作：`git add .`、`git commit -m "xxx"`、`git push`
* 关闭分支：`git worktree prune`

* [Git worktree 作用及使用](http://einverne.github.io/post/2019/03/git-worktree.html)
* [git worktree 的使用](https://www.jianshu.com/p/ffeb38d27f64)
* [Git屠龙技：使用Git Worktree并行开发测试](https://zhuanlan.zhihu.com/p/92906230)


* [ ] Git 连接 GitHub
* [ ] 基础操作：`git add`、`git commit`、`git push`、`git pull`、`git fetch`、`git branch`
* [ ] 工作常用：
  * [ ] `git rebase`
  * [ ] `git cherry-pick`
  * [ ] `git revert`
  * [ ] `git stash`
  * [ ] `git alias`
  * [ ] `git worktree`
* TODO:

#### Git 设置代理

科学上网情况下，有时候 Git 并没有生效，克隆或者 `push` 操作一样卡慢，就需要设置 Git 代理。

* 设置代理

1. `git config --global http.proxy 代理地址`
2. `git config --global https.proxy 代理地址`

* 取消代理

1. `git config --global --unset http.proxy`
2. `git config --global --unset https.proxy`

* 查看已经设置的代理

1. `git config --global --get http.proxy`
1. `git config --global --get https.proxy`

我拿现在用的科学代理工具，就设置了 `git config --global http.proxy http://127.0.0.1:10809`，Git 流畅度提升了挺多。

参考文献

* [政企云前端团队：我在工作中是如何使用 Git 的](https://www.zoo.team/article/how-to-use-git)
* [SegmentFault：Git 屠龙技：使用 Git Worktree 并行开发测试](https://segmentfault.com/a/1190000038508752)
* [Git如何使用代理(VPN)](https://code.iamhefang.cn/content/how-to-make-git-auto-use-vpn.html)

### 关闭端口

在起一些神奇的服务时，会碰到端口被占用的场景，这时候就需要关闭端口：

* 查看端口占用情况：`netstat -ano|findstr "端口号"`

```
PS F:\xxx> netstat -ano|findstr "3001"
  TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       33396
  TCP    10.13.144.170:63001    183.2.199.241:443      ESTABLISHED     28228
  TCP    [::]:3001              [::]:0                 LISTENING       33396
```

* 终止 PID：`taskkill -F -PID PID号`

```
PS F:\xxx> taskkill -F -PID 33396
成功: 已终止 PID 为 33396 的进程。
```
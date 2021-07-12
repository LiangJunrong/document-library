Git
===

> Create by **jsliang** on **2021-06-16 13:15:49**  
> Recently revised in **2021-06-16 13:15:49**

需要写一套 Git 系列吗？编写的意义是：

* TODO:

如果需要编写，你希望有的内容是：

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

## Git 设置代理

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

## 参考文献

* [政企云前端团队：我在工作中是如何使用 Git 的](https://www.zoo.team/article/how-to-use-git)
* [SegmentFault：Git 屠龙技：使用 Git Worktree 并行开发测试](https://segmentfault.com/a/1190000038508752)
* [Git如何使用代理(VPN)](https://code.iamhefang.cn/content/how-to-make-git-auto-use-vpn.html)
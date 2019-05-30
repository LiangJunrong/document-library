GitHub Pages 学习
===

> create by **jsliang** on **2019-5-30 08:31:37**  
> Recently revised in **2019-05-30 20:42:08**

**小伙伴们如果觉得不错可以到 [jsliang 的文档库](https://github.com/LiangJunrong/document-library) 为 jsliang 点个 star，谢谢~**

什么是 GitHub Pages？

GitHub Pages 是一个通过 GitHub 项目/仓库 进行部署的，以 `用户名.github.io` 的形式生成用户的托管平台。

通过 GitHub Pages，用户只需要把自己的内容在本地编辑好，然后推送到 GitHub 仓库即可。

* [jsliang 的 GitHub Pages 仓库](https://github.com/LiangJunrong/LiangJunrong.github.io)
* [jsliang 的 GitHub Pages 页面](https://liangjunrong.github.io/)

GitHub Pages 的搭建非常简单，现在我们开始搭建：

* **步骤 1：新建仓库**

打开 [GitHub](https://github.com/) 页面，注册号用户后，新建仓库（New repository），在仓库名（Repository name）中输入 `用户名.github.io`，例如 **jsliang** 的就是：`LiangJunrong.github.io`，然后点击 Create repository 即可创建一个部署好的环境。

![图](../../../public-repertory/img/other-GitHub-Pages-1.png)

* **步骤 2：Clone 项目**

Clone 项目至电脑：

![图](../../../public-repertory/img/other-GitHub-Pages-2.png)

![图](../../../public-repertory/img/other-GitHub-Pages-3.png)

并新增 `README.md` 和 `index.html`：

![图](../../../public-repertory/img/other-GitHub-Pages-4.png)

> README.md

```
Hello Github Pages
===

这是我的 GitHub Pages 初始目录
```

> index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello Github Pages</title>
  <style>
    .container {
      margin-top: 300px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1 class="container">Hello Github Pages</h1>
</body>
</html>
```

* **步骤 3：上传项目到 GitHub**

上传我们的代码到 GitHub：

```
git add .
git commit -m "Github Pages"
git push
```

* **步骤 4：打开 `github.io`**

最后我们打开 `用户名.github.io`：

![图](../../../public-repertory/img/other-GitHub-Pages-5.png)

如上，完成 GitHub Pages 的搭建，现在我们已经拥有了一个免费部署静态页面的平台了。

> 不仅仅限于静态页面，我们还可以使用 Ajax 调用后端接口实现更加丰富的功能~

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
迁移 Vue v2.x 版本到 Vite
===

> Create by **jsliang** on **2023-01-28 08:36:31**  
> Recently revised in **2023-01-28 08:36:31**

人生无常，大肠包小肠~

在接近年底的时候，有一个 Vue 项目，需要从中抽取 2 个模块出来。

然后想着新建项目，Vue CLI 也是学，Vite 也是学，于是哼次哼次用上了 Vite，结果开始了一路的 bug 挨打之旅……

![图](./img/01.png)

## 前言

Hello 小伙伴们早上、中午、下午、晚上、深夜好，我是 **jsliang**。

本次「迁移 Vue v2.x 项目到 Vite」将分为 2 个部分：

1. 以一个简单项目，进行 Vite 快速入手
2. 在实例项目迁移，对比 Vue CLI 和 Vite 以及碰到的问题。

## 简单项目：通过 Vite 打包 lib 仓库

下面开始保姆级教学，从 0 到 1 构建 Vite 项目，并处理打包问题。

前面及步骤略简单，小伙伴可选择跳读

本小节的代码仓库：[all-for-one/039-迁移 Vue v2.x 项目到 Vite/](https://github.com/LiangJunrong/all-for-one/tree/master/039-%E8%BF%81%E7%A7%BB%20Vue%20v2.x%20%E9%A1%B9%E7%9B%AE%E5%88%B0%20Vite)

### 步骤一：创建项目

* 安装 PNPM：`npm i pnpm -g`
* 通过 PNPM 创建 Vite + Vue 项目：`pnpm create vite jsliang-plugin --template vue`
  * 创建 Vite 项目：`pnpm create vite`
  * 创建 Vite + Vue TypeScript 项目：`pnpm create vite jsliang-vue-plugin --template vue-ts`

### 步骤二：初始化并运行

* 安装 node_modules：`pnpm i`
* 运行项目：`pnpm run dev`

![图](./img/02.png)

如上图所示，打开 `http://127.0.0.1:5173/` 即可。

效果如下图：

![图](./img/03.png)

如果需要外部访问的话，需要在指令上加上 `--host`，即：

> package.json

```diff
"scripts": {
-  "dev": "vite",
+  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
},
```

### 步骤三：修改端口

一般 Vite + Vue 提供的端口是，像我这么靓的靓仔，肯定要 `8888`。

那就直接修改 `vite.config.js` 吧：

> vite.config.js

> 为避免代码臃肿，第一次提的时候会写全代码，后面会写改动位置

```diff
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
+  server: {
+    port: 8888,
+  },
})
```

这时候再启动 `pnpm run dev`，就能看到相应的端口有变更了。

### 步骤四：清场搞事

该做的事我们都做了，下面我们把 `src` 目录下所有代码删除，留下一个干净的 Vue 仓库。

并依据下图创建文件夹及其文件：

![图](./img/04.png)

我们执行 `pnpm run dev` 的时候，代码的调用思路如上图所示。

1. 先调用 `index.html`
2. 再走 `a/entry.js` 或者 `b/entry.js`
3. 接着走 `a/a.vue` 或者 `b/b.vue`
4. 最后走 `utils/c.js` 这个公共模块

### 步骤五：补充代码

下面我们补充代码，使其最终展示如下：

![图](./img/05.png)

**首先**，我们修改 `index.html`，使其提供了一个类 `jsliang`，其中有一个方法 `addPlugin` 提供注入 HTML 的能力。

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
    <script>
      class jsliang {
        addPlugin({ pluginName, pluginObj }) {
          const div = document.createElement('div');
          div.classList.add('container');
          div.innerHTML = `
            <div>插件 ${pluginName} 加载成功：</div>
          `;
          document.body.appendChild(div);
          document.body.appendChild(pluginObj());
        }
      }
      window.jsliang = new jsliang();
    </script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/components/a/entry.js"></script>
    <script type="module" src="/src/components/b/entry.js"></script>
  </body>
</html>
```

**然后**，我们这里引用了 2 个入口，即 `a/entry.js` 和 `b/entry.js`（因为是测试的，所以直接在 `pnpm run dev` 模式上测试）

> src/components/a/entry.js

```js
// 这里引用了 a.vue 的代码
import A from './a.vue';

(function() {
  console.log('jsliang 插件加载成功');

  window.jsliang && window.jsliang.addPlugin && window.jsliang.addPlugin({
    pluginName: 'jsliang',
    pluginObj: A.methods.renderDOM,
  });
})();
```

> src/components/a/a.vue

```vue
<template>
  <div id="container">
    Hello jsliang
  </div>
</template>

<script>
// 引用公共模块 C
import { c } from '../../utils/c';

export default {
  name: 'jsliang',
  mounted() {
    c();
  },
  methods: {
    renderDOM: () => {
      const div = document.createElement('div');
      div.innerHTML = 'Hello jsliang';
      return div;
    }
  }
}
</script>
```

> src/utils/c.js

```js
export const c = () => {
  console.log('c 模块加载');
};
```

最后，我们在 `src/components/b/entry.js` 和 `src/components/b/b.vue` 补上同 `a` 部分的代码即可。

> 这里就省略了，可以拷贝过去简单改改

### 步骤六：库模式和单入口单出口打包

我们需要完成的最终目标是：**多入口多出口打包**。

当前，我们执行 `pnpm run build`，产生的打包文件为：

![图](./img/06.png)

而实际上，我们需要的打包结构（打包成 JS 库）：

```
- dist
  - A
    - A.entry.xxx.js
    - c.xxx.js
  - B
    - B.entry.xxx.js
    - c.xxx.js
```

所以，就需要修改 `vite.config.js`：

> vite.config.js

```js
export default defineConfig({
  // ... 代码省略

  // 打包模式
  build: {
    // 库模式
    lib: {
      // 设置入口文件
      entry: 'src/components/a/entry.js',
      // 打包后的包名称
      name: 'A',
      // 打包后的文件名
      fileName: (format) => `A.entry.${format}.js`,
    }
  }
});
```

**除此之外**，顺带删除项目下 `public` 目录（包含里面的 `vite.svg`，避免打包时参和进来。

此时，我们再次执行 `pnpm run build`，打包内容如下：

![图](./img/07.png)

从而实现了单入口单出口打包。

### 步骤六：库模式和多仓库打包

其实上面步骤，我们发觉应该是同时走 2 个入口，然后打包出 2 个文件夹出来。

```
- dist
  - A
    - A.entry.xxx.js
    - c.xxx.js
  - B
    - B.entry.xxx.js
    - c.xxx.js
```

经过一番折腾，我们修改 Vite 配置如下：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 加载插件
  plugins: [vue()],
  // 端口设置
  server: {
    port: 8888,
  },
  // 打包模式
  build: {
    // 库模式
    lib: {
      // 设置入口文件
      entry: {
        'A': 'src/components/a/entry.js',
        'B': 'src/components/b/entry.js'
      },
      formats: ['es'],
      // 打包后的文件名
      fileName: (format, entryName) => `${entryName}/${entryName}.entry.${format}.js`,
    },
  }
});
```

此时打包内容如下：

![图](./img/08.png)

无疑，这一个打包结果，距离我们差的有点多。

主要问题，出在打包后，公共代码并没有分 2 个文件装到指定文件夹。

关于这个问题，厚颜无耻在 Vite 的 Discussions 上请教大佬：

* [Vite Discussions - vite lib multiple outputs](https://github.com/vitejs/vite/discussions/11843)

经小伙伴 `sapphi-red` 的提醒，我也是意识到这种还是需要依靠外挂。

> 在对 Vite 和 Rollup 不想深入了解的情况下，我们应该把关注点放在解决问题上

于是开始修改代码。

**步骤一**：改造 `package.json`：

```diff
"scripts": {
  "dev": "vite --host",
- "build": "vite build",
+  "build": "node build.js",
+  "A": "vite build --mode A",
+  "B": "vite build --mode B",
  "preview": "vite preview"
},
```

在这里，我们看到修改了下 `build` 指令，并且新增了 `A` 和 `B` 指令。

我们应当可以理解，此时我们只需要在 `pnpm run build` 指令操作时，在 `build.js` 上，执行 `A` 和 `B` 指令即可。

**步骤二**：改造 `vite.config.js`，让它能根据模式单独打包

> vite.config.js

```js
// 打包模式
build: {
 outDir: `dist/${mode}`,
 lib: {
   entry: {
     [mode]: mode === 'A'
       ? 'src/components/a/entry.js'
       : 'src/components/b/entry.js'
   },
   formats: ['es'],
   fileName: (format, entryName) => `${entryName}.entry.${format}.js`,
 },
}
```

这里代码很容易理解，就是打包的时候，区分模块进行单入口单出口的打包。

**第三步**：在项目文件夹上，新增 `build.js`，配合 `package.json` 中的 `pnpm run build` 指令：

> build.js

```js
import shell from 'shelljs';

shell.exec('pnpm run A');
shell.exec('pnpm run B');
```

这样，我们就搞定了单独打包：

![图](./img/09.png)

## 实例项目：迁移 Vue v2.x 项目到 Vite 新项目



## 参考文献

* [Vite Issue - Multiple entry points/output in library mode? #1736](https://github.com/vitejs/vite/discussions/1736)
* [Vite Discussions - vite lib multiple outputs](https://github.com/vitejs/vite/discussions/11843)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)
* [掘金](https://juejin.im/user/3403743728515246)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习斜杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

02 - 初识 TypeScript
===

> Create by **jsliang** on **2020-3-3 07:49:30**  
> Recently revised in **2020-3-3 08:14:27**

## 一 安装 TypeScript

1. 安装 Node.js
2. 安装 TypeScript：`npm i typescript -g`
3. 查看版本：`tsc -V`（Version 3.8.3）

## 二 正文

* 类型注解
* 接口
* 类

```ts
function gretter(person: string) {
  return 'Hello ' + person;
}

let user = 'jsliang';

console.log(gretter(user));
```

1. 编译文件：`tsc greeter.ts`
2. 报错提示：

```ts
// 参数类型错误
function gretter(person: string) {
  return 'Hello ' + person;
}

let user = [0, 1, 2];

console.log(gretter(user));

// greeter.ts:7:21 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

// 7 console.log(gretter(user));

// Found 1 error.
```

虽然编译报错了，但是 TypeScript 会如实打包。

```ts
// 参数个数不对
function gretter(person: string) {
  return 'Hello ' + person;
}

let user = 'jsliang';

console.log(gretter(user, 1));

// greeter.ts:7:27 - error TS2554: Expected 1 arguments, but got 2.

// 7 console.log(gretter(user, 1));

// Found 1 error.
```

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

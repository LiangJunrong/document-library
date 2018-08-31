# 设计模式手册 - 10 - 迭代器模式
> create by **jsliang** on **2018年8月30日15:47:00**  

## 第十章 迭代器模式
* 顺序访问一个集合
* 使用者无需知道集合的内部结构（封装）

### 9.1 代码演示
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HelloWorld</title>
</head>
<body>
    <p>jQuery each</p>
    <p>jQuery each</p>
    <p>jQuery each</p>
    
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
    <script>
        $(function() {
            var arr = [1, 2, 3];
            var nodeList = document.getElementsByTagName("p");
            var $p = $("p");

            // 要对这三个变量进行遍历，需要写三个遍历方法
            // 第一
            arr.forEach(function(item) {
                console.log(item);
                // 1
                // 2
                // 3
            })
            // 第二
            var i, length = nodeList.length;
            for(i = 0; i < length; i++) {
                console.log(nodeList[i]);
                // <p>jQuery each</p>
                // <p>jQuery each</p>
                // <p>jQuery each</p>
            }
            // 第三
            $p.each(function(key, p) {
                console.log(key, p);
                // 0 <p>jQuery each</p>
                // 1 <p>jQuery each</p>
                // 2 <p>jQuery each</p>
            })
        })
    </script>
</body>
</html>
```

<br>

### 10.2 UML类图
![图](../../public-repertory/img/js-design-pattern-chapter10-1.png)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
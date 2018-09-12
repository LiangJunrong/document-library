# Java Server Pages
> create by **jsliang** on **2018-9-12 11:37:01**  
> Recently revised in **2018-9-12 11:37:06**

<br>

## JSP
&emsp;JSP全名为Java Server Pages，中文名叫java服务器页面，其根本是一个简化的Servlet设计，它 [1]  是由Sun Microsystems公司倡导、许多公司参与一起建立的一种动态网页技术标准。JSP技术有点类似ASP技术，它是在传统的网页HTML（标准通用标记语言的子集）文件(*.htm,*.html)中插入Java程序段(Scriptlet)和JSP标记(tag)，从而形成JSP文件，后缀名为(*.jsp)。 用JSP开发的Web应用是跨平台的，既能在Linux下运行，也能在其他操作系统上运行。  
&emsp;由于最近工作可能涉及到 JSP 编写的页面，故在此简要学习下 JSP 语法。  
&emsp;本次学习主要参考有： [菜鸟教程](http://www.runoob.com/jsp)

<br>

### 一 JSP运行流程
1. 浏览器发送 HTTP 请求给服务器
2. 服务器根据请求调动 JSP 引擎，查找对应的 JSP 文件
3. JSP 引擎载入 JSP 文件，将其转为 Servlet (将 JSP 元素转化为 Java 代码)。
> Servlet（Server Applet）是Java Servlet的简称，称为小服务程序或服务连接器，用Java编写的服务器端程序，主要功能在于交互式地浏览和修改数据，生成动态Web内容。  
> 狭义的Servlet是指Java语言实现的一个接口，广义的Servlet是指任何实现了这个Servlet接口的类，一般情况下，人们将Servlet理解为后者。Servlet运行于支持Java的应用服务器中。从原理上讲，Servlet可以响应任何类型的请求，但绝大多数情况下Servlet只用来扩展基于HTTP协议的Web服务器。
4. JSP 引擎将 Servlet 编译成可执行类，将原始请求传递给 Servlet 引擎。
5. 服务器的对应组件会调用 Servlet 引擎，然后载入并执行 Servlet 类。在执行过程中， Servlet 产生 HTML 格式输出并将其内嵌于 HTTP response 中上交给 Web 服务器。
6. Web 服务器以 HTML 网页形式将 HTTP response 返回到浏览器中。

<br>

### 二 生命周期
* **编译阶段** ：servlet容器编译servlet源文件，生成servlet类

* **初始化阶段** ：加载与JSP对应的servlet类，创建其实例，并调用它的初始化方法

* **执行阶段** ：调用与JSP对应的servlet实例的服务方法

* **销毁阶段** ：调用与JSP对应的servlet实例的销毁方法，然后销毁servlet实例

<br>

### 三 初试JSP
* 输出：
```
<% 代码片段 %>
```
&emsp;例如：
```
<html>
<head><title>Hello World</title></head>
<body>
    Hello World!<br/>
    <%
    out.println("Your IP address is " + request.getRemoteAddr());
    %>
</body>
</html>
```
![图](../../public-repertory//img/other-jsp-readMe-1.jpg)

<br>

### JSP 语法
1. **声明**：
```
<%! 代码片段 %>
```
&emsp;示例：
```
<%! int i = 0; %> 
<%! int a, b, c; %> 
<%! Circle a = new Circle(2.0); %> 
```

2. **表达式**：
```
<%= 表达式 %>
```
&emsp;示例：
```
<%= (new java.util.Date()).toLocaleString()%>
```

3. **注释**：
```
<%-- 注释 --%>
<!-- 注释 -->
```
&emsp;上面两种注释中，一种是 JSP 注释，一种是 HTML 注释。

4. **指令**：
```
<%@ page ... %>
<%@ include ... %>
<%@ taglib ... %>
```

<br>

### 附 常见问题
1. 中文编码问题

&emsp;解决页面中出现的中文乱码，需引用下面代码：
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
```

2. 

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
## 第01章： node概述

### 一、node基础

**安装node**
在node官网下载node的最新版本：本套讲义使用的是:
* node:7.8.0
* npm:4.2.0

**什么是node**
node是JavaScript的运行环境，我们之前编写的JavaScript都是运行在浏览器中的，在后续的课程中，我们要将JavaScript运行在node中。

通过node，我们可以用JavaScript实现很多浏览器无法实现的功能：
* 我们可以在node的基础上创建一个web服务器，让互联网上的任意一台计算机访问我们的网页（web服务器演示，概述http协议请求和相应的过程）。
* 我们可以使用node操作本地文件和文件夹（文件操作演示）。
* 我们可以操作数据库，让我们的数据持久地存储在电脑中（演示任意一个网站的登录功能，说明用户和密码的信息都是存储在数据库中的）。

**什么是npm**
npm是node的包管理器，我们在安装node的时候，其实就已经同时安装了npm，安装完成之后，在命令行我们执行下列命令：
``` bash
node -v
npm -v
```
如果可以看到node和npm的版本号，说明node和npm安装成功。

npm可以下载第三方模块，前端的和后台的都能下载，只要模块存已经放在npm服务器上能下，使用npm install命令就可以下载，我们先用npm

``` bash
npm install jquery
```

可以看到在当前目录下会生成一个node_modules的文件件，里面就是我们用npm下载jQuery。

**package.json文件**

本节我们说说package.json文件的用法，我们先来创建一个项目（其实就是一个文件夹），通过npm init命令可以在当前目录下创建一个package.json文件，我们可以用package.json文件管理我们的项目依赖，例如我们的项目依赖jQuery，我们现在下载jQuery，命令与上一节稍有不同。

``` bash
npm install --save-dev jquery 
```

--save-dev的意思是将jQuery写入package.json中的依赖关系记录，以后我们在下载其他的依赖模块的时候，都用--save-dev,这样项目中所有的依赖模块都会记录在package.json中，当我们把这个项目拷贝到其他位置的时候，就不必拷贝庞大的node_modules目录，只需要把项目代码和package.json文件拷贝，然后在新的位置执行npm install：

``` bash
npm install
```

npm就会通过package.json文件找到所有的依赖模块，然后全部下载下来。

练习：
* 初始化package.json文件，
* 使用--save-dev写入依赖关系
* 通过npm install下载依赖

### 二、http-server模块

**下载和安装http-server模块**
这一节我们讲解用npm全局安装http-server模块，并用http-server搭建一个静态服务器，全局安装需要执行下面的命令：

``` bash
npm install -g http-server
```

**启动静态服务器**

全局安装http-server模块后，当前目录下的node_modules不会添加http-server模块，此模块会被安装到其他路径。并且我们可以在命令行工具中执行

``` bash
http-server
```
他可以把当前目录变成一个静态文件服务器目录，在该目录下放入静态文件，网络内的其他计算机就能通过浏览器访问这些文件了。

练习：
* 使用http-server搭建静态web服务器
* 不同计算机之间互相访问index页


### 三、使用node执行js文件

**执行demo01.js文件**

在上面的内容中，我们已经说了，node是JavaScript代码的执行环境，本节我们就来说说如何在node中执行JavaScript。

首先编辑js文件：demo01.js，文件中只有两行js代码
``` js
console.log("hello world");  //输出字符串
console.log(global);         //输出全局变量
```
在当前目录打开命令行工具，执行下面的命令：
``` bash
node demo01.js
```
执行成功后，会在命令行中输出"hello world";

**JavaScript脚本在浏览器运行与node中运行的区别**

在node中执行JavaScript与在浏览器中执行的JavaScript还是有区别的，我们先记住下面两点：

* node中的全局变量是global对象，浏览器中的全局变量是window对象，在node中，js不能使用window对象。
* window对象的弹出框方法：alert、prompt、confirm不能在node中使用。


### 四、总结
* 本章需要掌握node和npm的基本概念
* 可以使用npm下载第三方模块
* 可以使用node命令执行JavaScript脚本




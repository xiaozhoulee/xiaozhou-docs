## 第06章：webpack入门

在之前的课程中，我们已经讲解了vue的基本概念，但是在实际开发中，绝对不会将所有的组件都写到一个script标签中，我们会将组件拆分成一个个文件，将它们分成一个个模块，然后使用webpack将这些模块打包成应用程序。

### 一、使用webpack打包js文件
首先我们需要下载webpack：命令如下所示：
``` bash
npm install -g webpack
```

成功下载之后，我们还需要编写一个webpack的配置文件，webpack会根据配置文件实现完成js（或其他文件）的打包工作，操作步骤如下：

1. 创建一个项目目录:demo01。
2. 创建src目录，用来存储源文件,我们在src中添加main.js文件,代码如下所示：
``` js
alert("hello webpack")
```
3. 创建dist目录，用来存储打包后生成的文件
4. 编辑配置文件，如下所示：
``` js
module.exports = {
    entry:'./src/main.js',  //设置入口文件
    output:{
        filename:'./dist/build.js'  //设置输出位置和文件名
    }
}
```
5. 在命令行中执行webpack命令，就可以通过配置文件将src打包并输出到dist目录中。

经过上面的五个步骤，我们可以看到dist中的js文件多了很多代码，我们不必关注其内容，只需要知道他是根据src中的源文件生成的就可以。

我们再在demo01中创建一个html文件（index.html），引入dist中的js文件，代码如下：。
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script src="dist/build.js"></script>
</body>
</html>
```

运行这个html文件可以看到成功的执行了alert("hello webpack")。

在上面的例子中，我们通过webpack实现了js文件的输入和输出功能，但实际上webpack并没有做什么有意义的工作，在下面一节中我们会进一步讲解webpack的实际应用，本节我们再来考虑一个问题：如果在开发的过程中，每次修改js文件都要打包才能预览程序的效果，那样是不是会大幅度影响工作效率，答案是肯定的，所以我们要下载另一个工具来解决每次都要编译的问题。

``` bash
npm install -g webpack-dev-server
```

下载完成后，我们在命令行执行webpack-dev-server，会在当前目录启动一个静态文件服务器，但是这个静态文件服务器会根据webpack的配置文件编译和打包js文件，并且能做到实时编译，这样我们就不必每次修改js代码都要编译一次了。

这里需要做一个练习，使用webpack-dev-server启动服务器，然后修改js文件，查看是否实现实时编译。


### 二、配置文件
我们可以通过webpack完成以下工作：

* 将ES2015的模块化语法编译成浏览器可以识别的ES5语法
* 将vue的单文件组件（下一章讲解）编译和打包成ES5语法

要实现上面的功能，除了要有我们已经安装的webpack之外，还要安装很多其他的依赖模块，同时webpack的配置文件也要配置正确。我们把课程的主要精力放在模块化开发和组件化开发上，所以关于webpack的配置，还有项目所依赖的模块不做过多的讲解，这里我们使用两个现成的配置文件，案例（demo02）中的package.json和webpack.config.js文件，执行下面命令，通过package.json文件下载所有依赖模块。

``` bash
npm install 
```

等待所有模块下载完成，demo02中的webpack配置文件和所有依赖模块都已经就绪，我们还需要像demo01那样，新建src目录和dist目录，然后新建index.html文件，并在script标签中引入dist中的js文件，接下来就可以进入模块化开发的内容了。

### 三、ES2015模块化
ES2015为js添加了模块化的功能，如果如下所示：

* export:用于规定模块对外的接口
* import:用于引入外部模块

在模块化开发的过程中，每一个js文件都是一个模块，我们在js文件中定义的变量不再是全局标签，我们先来创建一个最简单的模块：count.js
``` js
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

export default {  
    add:add,
    sub:sub
}    
```

在main.js中引入这个count模块,然后通过count提供的方法来实现计算的功能。
``` js
import count from "./count.js"

let num1 = 30;
let num2 = 10;

let result1 = count.add(num1,num2);
let result2 = count.sub(num1,num2);

console.log(result1);
console.log(result2);

```

使用webpack-dev-server将两个文件编译并打包，然后在index.html中引入输出的build.js文件。在本地服务器中打开index.html可以看到，控制台成功地输出了40和20。

这几是我们第一个ES2015模块化的程序，在下一章，我们要用ES2015的模块化语法完成vue的组件化开发。


### 三、授课说明
* 本章内容占4课时。
* 课程涉及道npm相关知识需要复习
* 课程涉及道的ES2015语法，需要复习



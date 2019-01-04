# 第02章：fs模块

### 一、fs模块概述

fs模块是node的核心模块，我们不需要下载，只需要一行代码就可以引入fs模块，代码如下所示

``` js
const fs = require("fs");
```

通过fs模块，我们可以完成文件操作和目录操作，例如创建文件，读取文件，修改文件，创建目录，还有文件和目录的重命名等操作。

### 二、文件操作

**读取文件内容**

使用fs模块的readFile方法可以读取文件，我们首先需要创建一个待读取的目标文件file.txt，然后在文件中插入一段文字：“fs模块是node的核心模块”，然后我们用fs模块来读取这个文件，示例代码如下所示（demo01.js）

``` js
const fs = require("fs");
fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err){  //判断是否成功读取
        console.log(err);
    }else{
        console.log(data);
    }
})
```

在上面的代码中，我们可以看到readFile有三个参数，第一个参数是文件的路径，第二个参数是读取文件的编码，第三个参数是一个回调函数，如果成功读取，回调函数中的data就是读取的文件内容，如果读取失败，则输出错误信息。

**写入文件**

使用fs模块的writeFile方法可以在文件中写入内容，如果文件存在，则覆盖文件原内容，如果文件不存在，则创建新的文件，并写入内容，示例代码如下所示（demo02.js）

``` js
const fs = require("fs");
fs.writeFile("./test.txt","这是一个测试写入的文件",(err)=>{
    if(err){
        console.log(err);
    }
});
```

在上面的代码中，我们使用writeFile方法创建了一个test.txt文件，并在里面写入了一段文本。

**追加内容**

如果希望在文件中追加内容，而不是覆盖原内容，可以使用appendFile方法，示例代码如下所示（demo03.js）

``` js
const fs = require("fs");
fs.appendFile("./test.txt", "这里是追加的内容！", (err) => {
    if (err) {
        console.log(err);
    }
});
```

### 三、目录操作

**创建目录**

fs模块除了可以操作文件，还可以操作目录，首先我们来使用mkdir方法来创建一个目录（demo04.js）

``` js
const fs = require("fs");
fs.mkdir("./newdir",(err)=>{
    if(err){
        console.log(err);
    }
})
```

**目录重命名**

如果目录已经存在，我们可以使用rename方法讲一个目录重命名，代码如下所示（demo05.html）

``` js
const fs = require("fs");
fs.rename("./newdir","./otherdir",(err)=>{
    if(err){
        console.log(err);
    }
})
```

rename方法不但可以实现目录的重命名，还可以实现文件的重命名，只要路径书写正确，用法与上述代码完全相同。

**综合练习**

下面我们来做一个练习，用一个js文件创建10个目录，每个目录内都有一个文件，并且每个文件中都有一段文字，代码如下所示（demo06.js）

``` js
for(let i = 0;i<10;i++){
    fs.mkdir(`./dir${i}/`,(err)=>{
        if(err){
            console.log(err);
        }else{
            fs.writeFile(`./dir${i}/file${i}.md`,`这是第${i}个文件`,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
    })
}
```

### 四、授课说明

本章本章内容主要讲解fs模块的接口，内容难度较低，课后可以扩展练习可以实现批量修改文件目录和文件名。


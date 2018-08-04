## 第12章：vue-cli

### vue-cli概述

vue-cli是vue官方提供的一个官方命令行工具，它可用于快速搭建大型单页应用。vue-cli命令如下所示：

``` bash
# 全局安装vue-cli
npm install -g vue-cli

# 创建一个vue项目
vue init webpack <project-name>

# 进入项目目录
cd <project-name>

# 下载依赖
npm install

# 运行项目
npm run dev
```

运行项目之后，可以看到vue-cli为我们定制的一个应用首页，我们接下来就可以在这个项目目录中进行vue项目的开发工作了。

练习：学员使用vue-cli命令创建一个vue项目。

### 项目目录结构说明

创建项目之后，会发现项目中有很多文件和目录，这里一一对其进行说明。

* build
* config
* dist
* node_modules
* src
* static
* test
* .babelrc
* .editorconfig
* .eslintignore
* .eslintrc.js
* .gitignore
* .postcssrc.js
* index.html
* package-lock.json
* package.json
* README.md


### 项目命令

``` bash
# 上面已经说过的运行项目
npm run dev
npm run start

# 测试项目 
npm run unit
npm run e2e
npm run test

# 编码规范校验
npm run lint

# 构建项目
npm run build
```

### 修改首页








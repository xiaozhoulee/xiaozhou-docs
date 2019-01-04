# 第3章：表单与表格元素

### 一、无语义的html元素

本章重点讲解表单元素和表格元素，在讲解之前我们还要掌握两个没有语义的html元素。

在上一章我们讲解了常用的html元素，每一个元素都是有语义，本章我们来看下面两个没有语义的元素。

**span标签**

如代码（demo01.html）所示：

``` html
<h1>你好<span>world</span></h1>
<p>我最喜欢学习的科目是<span>html和css</span></p>
```
如上面的代码所示，span标签内一般直接放文本，可以用来单独设置文字的样式，关于文字的样式会在后续css课程中详细讲解。

**div标签**

如代码（demo02.html）所示：

``` html
<div>
    <h1>hello world</h1>
    <p>我最喜欢的科目是html和css</p>
</div>
```
如上面代码所示，div可以作为多个html标签的容器，可以利用div标签优化html文档的结构，让网页结构清晰，布局合理。在后续的课程中，我们会经常用到div标签。


### 二、表单元素
表单元素在网页中主要负责数据采集的功能，用户访问网站时，可以通过表单标签向网站传递数据。

**form标签**

``` html
<form></form>
```
form标签是表单的容器，为了实现采集数据的功能，其他表单标签应当放在form标签之内。关于form标签的更多功能会在前后台数据交互的课程中深入讲解，本章内容只对表单标签做初步的介绍。

**input标签(demo03.html)**

``` html
<input type="text">  <!-- 文本框 -->
<input type="password">  <!-- 密码输入框 -->
<input type="radio">  <!-- 单选框 -->
<input type="checkbox" >  <!-- 复选框 -->
<input type="button">  <!-- 按钮 -->
<input type="submit">  <!-- 提交按钮 -->
```

input标签通过type属性可以分为多个类别，常用的input上面的代码已经列出：

* type="text"：文本框，用于文本的输入。
* type="password"：密码输入框，用于密码的输入，与文本框的区别是，输入的内容不能被用户看到。
* type="radio":单选框，通过name控制类别，name想通的radio只能被选择一个。
* type="checkbox":复选框，用过name控制类别，但是可以选择多个。
* type="button":按钮，如果不做进一步处理，没有任何功能。
* type="submit":提交按钮，可以将表单数据提交至网站后台，关于数据传输，后续会深入讲解。
* label标签：在label标签的for属性指定了input标签的id后，当用户点击label标签，指定的input会获取焦点。

**下拉菜单**

示例代码如下(demo04.html)：
``` html
<form action="">
    <label>请选择性别</label>
    <select>
        <option>男</option>
        <option>女</option>
    </select>
</form>
```
select标签定义了网页中的下拉菜单，下拉菜单的选项用option标签。

### 三、表格元素

**最基本的表格标签**

最基本的表格有table、tr、td三个标签组成。
* table标签：是表格的容器
* tr标签：表示行
* td标签：表示单元格

可以通过设置table标签的属性改变表格的样式(后续会讲解通过css设置表格的样式)
* border属性：设置边框
* width属性：设置表格的宽度
示例代码如下(demo05.html):
``` html
<table border="1" width="100%">
    <tr>
        <td>小明</td>
        <td>2岁</td>
    </tr>
    <tr>
        <td>小红</td>
        <td>3岁</td>
    </tr>
</table>
```

**合并单元格**

* 通过colspan属性可以合并行，示例代码如下(demo06.html)：
colspan属性可以让单元格在同行占据两个单元格的位置。

``` html
<table border="1" width="100%">
    <tr>
        <td align="center" colspan="2">学生列表</td>
    </tr>
    <tr>
        <td>小明</td>
        <td>2岁</td>
    </tr>
    <tr>
        <td>小红</td>
        <td>3岁</td>
    </tr>
</table>
```

* 通过rowspan属性可以合并列,示例代码如下(demo07.html)：
rowspan属性可以让单元格在同一列占据3行的位置。

``` html
<table border="1" width="100%">
    <tr>
        <td rowspan="3">一班</td>
        <td>小明</td>
        <td>2岁</td>
    </tr>
    <tr>
        <td>小红</td>
        <td>3岁</td>
    </tr><tr>
        <td>小亮</td>
        <td>16岁</td>
    </tr>
    <tr>
        <td rowspan="3">二班</td>
        <td>张三</td>
        <td>2岁</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>17岁</td>
    </tr><tr>
        <td>王五</td>
        <td>18岁</td>
    </tr>
</table>
```

**表头和表体**

在表格中，可以用thead标签设置表头，tbody标签设置表体，在thead中，可以使用th作为表头的单元格，表头的单元格默认字体加粗，示例代码如下(demo08.html):。
``` html
<table border="1" width="100%">
    <thead>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>小明</td>
            <td>2岁</td>
        </tr>
        <tr>
            <td>小红</td>
            <td>3岁</td>
        </tr>
    </tbody>
</table>
```

**综合练习**

将本节的内容放在一个表格中，示例代码(demo09.html)

### 四、授课说明
* span标签和div标签让学员简单了解一下即可，后续用到的时候会更容易理解。
* 表单元素需要让学员了解表单的默认样式。
* 本章的难点是单元格合并，需要反复练习。

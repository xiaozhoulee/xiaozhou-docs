## 第01章：jQuery插件的原理（实践课）

### 一、案例目标

* 编写一个color插件，让jQuery代码可以调用color方法。
* color方法可以改变字体颜色。
* 单击按钮的时候，调用color方法改变h1标签的颜色。


### 二、思路解析

* 通过一个立即实行函数封装一个jQuery插件
* 将jQuery传递到插件中，插件中使用$代替jQuery.
* 通过fn为jQuery对象添加color方法。


### 三、开发过程

* 插件的代码如下所示

``` js
(function($){
    $.fn.color = function(col){
        this.css("color",col);
    }
})(jQuery)
```

* 调用插件的方法如下所示：

``` js
$("button").click(function(){
    $("h1").color("red");
})
```
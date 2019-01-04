# 第10章：无限层级菜单（实践课）

### 一、实践目标

根据json格式的数据格式，完成一个无限层级菜单，json数据格式如下所示：

``` json
{
    "menuData":[
        {
            "name":"",
            "link":"",
            "subMenu":[
                {
                    "name":"",
                    "link":"",
                    "subMenu":null
                },
                {
                    "name":"",
                    "link":"",
                    "subMenu":null
                },
            ]
        },
        {
            "name":"",
            "link":"",
            "ubMenu":null
        }
    ]
}
```

数据中,menuData属性对应的是以及菜单的数据，每一个元素都有三个属性

* name：菜单名称
* link：菜单链接
* subMenu：子菜单列表

如果有子菜单，那么subMenu会以同样的数据格式存储数据，如果没有子菜单，那么subMenu属性的值为null。

要求编写一个javascript程序，不管json数据有多少层级数据，都能正确地显示出来，效果如demo01.html展示的效果一样。


### 二、真实数据

``` json
{
    "menuData":[
        {
            "name":"书籍",
            "link":"#book",
            "subMenu":[
                {
                    "name":"《JavaScript高级程序设计》",
                    "link":"#js",
                    "subMenu":null
                },
                {
                    "name":"《html权威指南》",
                    "link":"#html",
                    "subMenu":null
                },
            ]
        },
        {
            "name":"电影",
            "link":"",
            "subMenu":[
                {
                    "name":"动作片",
                    "link":"#action",
                    "subMenu":null
                },
                {
                    "name":"喜剧片",
                    "link":"#comedy",
                    "subMenu":null
                },
                {
                    "name":"爱情片",
                    "link":"#love",
                    "subMenu":[
                        {
                            "name":"天使之城",
                            "link":"#love1",
                            "subMenu":null
                        },
                        {
                            "name":"恋恋笔记本",
                            "link":"#love2",
                            "subMenu":null
                        },
                    ]
                },
            ]
        }
    ]
}
```

### 三、代码实现

``` js
var $menu = $(".menu");   //获取存放菜单的容器
function createMenu(container,data){  //定义函数生成菜单
    var $ul = $("<ul>");              //创建ul标签
    data.map(function(val,ind){       //遍历数据
        var $menuItem = $("<li>");    //创建li标签，且每一条数据对应一个li（即一个标签）
        $menuItem.append(`<a href="${val.link}">${val.name}</a>`); //创建a标签，设置跳转链接的url，并插入到li中。
        if(val.subMenu){              //如果该菜单存在子菜单
            var $container = $("<div>");   //继续创建新的菜单容器
            createMenu($container,val.subMenu);  //递归，生成下一级菜单
            $menuItem.append($container);       //将下一级菜单插入到容器中
        }
        $ul.append($menuItem);                  //将每一个li插入到ul中
    })
    container.append($ul);                      //将ul插入到容器中
}

createMenu($menu,jsonData.menuData);
```


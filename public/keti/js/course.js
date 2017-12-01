/**
 * Created by songfy on 2016/3/9.
 */

//头部
var head_top = {
    lis : $('.nav li'),
    firstLi: $('.nav li:nth-child(2)'),
    hover:function(){
        head_top.lis.each(function(i){
            var index = i;
            $(this).hover(function(){
                head_top.lis.removeClass('current');
                head_top.firstLi.addClass('current');
                $(this).addClass('current');
            },function(){
                head_top.firstLi.addClass('current');
                $(this).removeClass('current');
                if(index == 0){
                    $(this).addClass('current');
                }
            });
        });
    },
    animate_change:function(){
        $('.login_page').animate({'top':'132px'},800,function(){
            $('.login_page').animate({'top':'110px'},200,function(){
                $('.login_page').animate({'top':'130px'},200,function(){
                    $('.login_page').animate({'top':'120px'},200,function(){
                        $('.login_page').animate({'top':'132px'},200);
                    })
                });
            })
        });
    },
    login:function(){
        $('.head .btn').bind('click',function(){
            head_top.animate_change();
        })
    },
    click:function(){
        head_top.lis.each(function(i){
            var index = i;
            $(this).click(function(){
                head_top.lis.removeClass('current');
                $(this).addClass('current');
            });
        });
    }
};
head_top.hover();
head_top.login();
$('.head_fixed .btn').bind('click',function(){
    head_top.animate_change();
});
head_top.click();



//分类
var fenLei = {
    school:['数学科学学院','计算机学院','音乐学院','文学院','外国语学院','体育学院','政治与公共管理学院','生命科学学院',
        '药学院','商学院','机械与汽车工程学院','美术学院','农学院','历史文化与旅游学院','物理科学与信息工程学院',
        '教育科学学院','建筑工程学院','环境与规划学院','化学化工学院','法学院','传媒技术学院','材料科学与工程学院'],
    major :[
        ['会计专业','数学师范类专业','信息与计算科学专业'],
        ['网络工程专业','软件工程专业','电子商务专业','信息管理与信息系统专业'],
        ['音乐学专业','音乐表演专业','舞蹈学专业'],
        ['汉语言文学','广播电视学','秘书学'],
        ['外国语学院专业1','外国语学院专业2','外国语学院专业3','外国语学院专业4'],
        ['体育学院专业1','体育学院专业2','体育学院专业3','体育学院专业4'],
        ['政管学院专业1','政管学院专业2'],
        ['生命学院专业1','生命学院专业2','生命学院专业3','生命学院专业4'],
        ['药学院专业1','药学院专业2','药学院专业3'],
        ['商学院专业1','商学院专业2'],
        ['汽车学院专业1','汽车学院专业2','汽车学院专业3','汽车学院专业4'],
        ['美术学院专业1','美术学院专业2','美术学院专业4'],
        ['农学院专业1','农学院专业2','农学院专业3','农学院专业4','农学院专业5'],
        ['历史学院专业1','历史学院专业2'],
        ['理工学院专业1','理工学院专业2','理工学院专业3','理工学院专业4'],
        ['教育学院专业1','教育学院专业2','教育学院专业3'],
        ['建工学院专业1','建工学院专业2'],
        ['环规学院专业1','环规学院专业2','环规学院专业3','环规学院专业4','环规学院专业5'],
        ['化工学院专业1','化工学院专业2','化工学院专业3'],
        ['法学院专业1','法学院专业2'],
        ['传媒学院专业1','传媒学院专业2','传媒学院专业3','传媒学院专业4'],
        ['材料学院专业1','材料学院专业2','材料学院专业3']
    ],
    subject:[
        [
            ['经济法','财政与金融','基础会计','统计学','财会教学论','财会会计','财务管理','审计学'],
            ['数学分析','几何学','代数学','概率论与数理统计','微分方程','离散数学'],
            ['程序设计和算法语言','数据库与数据结构','java']
        ],
        [
            ['网络工程1','网络工程2','网络工程3'],
            ['软件工程1','软件工程2'],
            ['电子商务1','电子商务2','电子商务3','电子商务4'],
            ['管理1','管理2','管理3']

        ],
        [
            ['钢琴','声乐','舞蹈','乐理','视唱练耳','中外音乐史','民族音乐','和声','曲式分析'],
            ['主科','乐理','视唱练耳','中外音乐史','民族音乐','和声','曲式分析','表演','乐队排练'],
            ['舞蹈1','舞蹈2','舞蹈3','舞蹈4']
        ],
        [
            ['现代汉语','古代汉语','语言学概论','中国古代文学','中国现代文学','中国当代文学','外国文学'],
            ['广播电视概论','新闻学','传播学','广播电视新闻事业史','新闻摄影','广播电视技术'],
            ['秘书学','管理学','经济学','社会学']

        ]
    ],
    init:function(){
        var HTML = '';
        for(var i in fenLei.school){
            HTML += '<li>'+fenLei.school[i]+'</li>';
        }
        $('.school_list').html(HTML);
        $('.school_list li').each(function(i){
            var index = i;
            $(this).bind('click',function(){
                $('.school_list li').removeClass('fcGreen');
                $(this).addClass('fcGreen');
                var HTML2 = '';
                for(var j in fenLei.major[index]){
                    if(index == 0){
                        HTML2 += '<li class="list_cell" data-code="'+(parseInt(j)+2)+'">'+fenLei.major[index][j]+'</li>';
                    }
                    else {
                        var d = 0;
                        for(var k = 0;k<index;k++){
                            d += fenLei.major[k].length;
                        }
                        console.log(d);
                        HTML2 += '<li data-code="'+(d+parseInt(j)+2)+'">'+fenLei.major[index][j]+'</li>';
                    }
                }
                $('.major_list').html(HTML2);
                $('.major_list li').each(function(i){
                    var index2 = i;
                    $(this).bind('click',function(){
                        $('.major_list li').removeClass('fcGreen');
                        $(this).addClass('fcGreen');
                        var code = $(this).attr('data-code');
                        kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs,kecheng_tab.con,kecheng_tab.zan,code);
                    })
                })
            })
        })
    }
};
fenLei.init();



//3.学校课程点击切换
var kecheng_tab = {
    lis : $('.kecheng_nav li'),
    firstLi: $('.kecheng_nav li:first-child'),
    index:0,
    pic:[
        ['image/kc0/kc1.jpg','image/kc0/kc2.jpg','image/kc0/kc3.jpg','image/kc0/kc4.jpg','image/kc0/kc5.jpg','image/kc0/kc6.jpg','image/kc0/kc7.jpg','image/kc0/kc8.jpg','image/kc0/kc9.jpg','image/kc0/kc10.jpg','image/kc0/kc11.jpg','image/kc0/kc12.jpg','image/kc0/kc13.jpg','image/kc0/kc14.jpg','image/kc0/kc15.jpg','image/kc0/kc16.jpg'],
        ['image/kc1/kc1.jpg','image/kc1/kc2.jpg','image/kc1/kc3.jpg','image/kc1/kc4.jpg','image/kc1/kc5.jpg','image/kc1/kc6.jpg','image/kc1/kc7.jpg','image/kc1/kc8.jpg','image/kc1/kc9.jpg','image/kc1/kc10.jpg','image/kc1/kc11.jpg','image/kc1/kc12.jpg','image/kc1/kc13.jpg','image/kc1/kc14.jpg','image/kc1/kc15.jpg','image/kc1/kc16.jpg'],
        ['image/kc2/kc1.jpg','image/kc2/kc2.jpg','image/kc2/kc3.jpg','image/kc2/kc4.jpg','image/kc2/kc5.jpg','image/kc2/kc6.jpg','image/kc2/kc7.jpg','image/kc2/kc8.jpg','image/kc2/kc9.jpg','image/kc2/kc10.jpg','image/kc2/kc11.jpg','image/kc2/kc12.jpg','image/kc2/kc13.jpg','image/kc2/kc14.jpg','image/kc2/kc15.jpg','image/kc2/kc16.jpg'],
        ['image/kc3/kc1.jpg','image/kc3/kc2.jpg','image/kc3/kc3.jpg','image/kc3/kc4.jpg','image/kc3/kc5.jpg','image/kc3/kc6.jpg','image/kc3/kc7.jpg','image/kc3/kc8.jpg','image/kc3/kc9.jpg','image/kc3/kc10.jpg','image/kc3/kc11.jpg','image/kc3/kc12.jpg','image/kc3/kc13.jpg','image/kc3/kc14.jpg','image/kc3/kc15.jpg','image/kc3/kc16.jpg'],
        ['image/kc4/kc1.jpg','image/kc4/kc2.jpg','image/kc4/kc3.jpg','image/kc4/kc4.jpg','image/kc4/kc5.jpg','image/kc4/kc6.jpg','image/kc4/kc7.jpg','image/kc4/kc8.jpg','image/kc4/kc9.jpg','image/kc4/kc10.jpg','image/kc4/kc11.jpg','image/kc4/kc12.jpg','image/kc4/kc13.jpg','image/kc4/kc14.jpg','image/kc4/kc15.jpg','image/kc4/kc16.jpg'],
        ['image/kc5/kc1.jpg','image/kc5/kc2.jpg','image/kc5/kc3.jpg','image/kc5/kc4.jpg','image/kc5/kc5.jpg','image/kc5/kc6.jpg','image/kc5/kc7.jpg','image/kc5/kc8.jpg','image/kc5/kc9.jpg','image/kc5/kc10.jpg','image/kc5/kc11.jpg','image/kc5/kc12.jpg','image/kc5/kc13.jpg','image/kc5/kc14.jpg','image/kc5/kc15.jpg','image/kc5/kc16.jpg'],
        ['image/kc0/kc1.jpg','image/kc0/kc2.jpg','image/kc0/kc3.jpg','image/kc0/kc4.jpg','image/kc0/kc5.jpg','image/kc0/kc6.jpg','image/kc0/kc7.jpg','image/kc0/kc8.jpg','image/kc0/kc9.jpg','image/kc0/kc10.jpg','image/kc0/kc11.jpg','image/kc0/kc12.jpg','image/kc0/kc13.jpg','image/kc0/kc14.jpg','image/kc0/kc15.jpg','image/kc0/kc16.jpg'],
        ['image/kc1/kc1.jpg','image/kc1/kc2.jpg','image/kc1/kc3.jpg','image/kc1/kc4.jpg','image/kc1/kc5.jpg','image/kc1/kc6.jpg','image/kc1/kc7.jpg','image/kc1/kc8.jpg','image/kc1/kc9.jpg','image/kc1/kc10.jpg','image/kc1/kc11.jpg','image/kc1/kc12.jpg','image/kc1/kc13.jpg','image/kc1/kc14.jpg','image/kc1/kc15.jpg','image/kc1/kc16.jpg'],
        ['image/kc2/kc1.jpg','image/kc2/kc2.jpg','image/kc2/kc3.jpg','image/kc2/kc4.jpg','image/kc2/kc5.jpg','image/kc2/kc6.jpg','image/kc2/kc7.jpg','image/kc2/kc8.jpg','image/kc2/kc9.jpg','image/kc2/kc10.jpg','image/kc2/kc11.jpg','image/kc2/kc12.jpg','image/kc2/kc13.jpg','image/kc2/kc14.jpg','image/kc2/kc15.jpg','image/kc2/kc16.jpg'],
        ['image/kc3/kc1.jpg','image/kc3/kc2.jpg','image/kc3/kc3.jpg','image/kc3/kc4.jpg','image/kc3/kc5.jpg','image/kc3/kc6.jpg','image/kc3/kc7.jpg','image/kc3/kc8.jpg','image/kc3/kc9.jpg','image/kc3/kc10.jpg','image/kc3/kc11.jpg','image/kc3/kc12.jpg','image/kc3/kc13.jpg','image/kc3/kc14.jpg','image/kc3/kc15.jpg','image/kc3/kc16.jpg'],
        ['image/kc4/kc1.jpg','image/kc4/kc2.jpg','image/kc4/kc3.jpg','image/kc4/kc4.jpg','image/kc4/kc5.jpg','image/kc4/kc6.jpg','image/kc4/kc7.jpg','image/kc4/kc8.jpg','image/kc4/kc9.jpg','image/kc4/kc10.jpg','image/kc4/kc11.jpg','image/kc4/kc12.jpg','image/kc4/kc13.jpg','image/kc4/kc14.jpg','image/kc4/kc15.jpg','image/kc4/kc16.jpg'],
        ['image/kc5/kc1.jpg','image/kc5/kc2.jpg','image/kc5/kc3.jpg','image/kc5/kc4.jpg','image/kc5/kc5.jpg','image/kc5/kc6.jpg','image/kc5/kc7.jpg','image/kc5/kc8.jpg','image/kc5/kc9.jpg','image/kc5/kc10.jpg','image/kc5/kc11.jpg','image/kc5/kc12.jpg','image/kc5/kc13.jpg','image/kc5/kc14.jpg','image/kc5/kc15.jpg','image/kc5/kc16.jpg']
    ],
    word:[
        ['Java教程','C语言基础','高等数学','数学分析','有机化学','建筑工程实例教程','管理与实务','会计学','ps基础','C语言基础','PPT详解','数学分析','大数据','建筑工程实例教程','快速入门韩语','会计学'],
        ['Java教程2','C语言基础2','高等数学2','数学分析2','有机化学2','建筑工程实例教程2','管理与实务2','会计学2','ps基础2','C语言基础2','PPT详解2','数学分析2','大数据2','建筑工程实例教程2','快速入门韩语2','会计学2'],
        ['Java教程3','C语言基础3','高等数学3','数学分析3','有机化学3','建筑工程实例教程3','管理与实务3','会计学3','ps基础3','C语言基础3','PPT详解3','数学分析3','大数据3','建筑工程实例教程3','快速入门韩语3','会计学3'],
        ['Java教程4','C语言基础4','高等数学4','数学分析4','有机化学4','建筑工程实例教程4','管理与实务4','会计学4','ps基础4','C语言基础4','PPT详解4','数学分析4','大数据4','建筑工程实例教程4','快速入门韩语4','会计学4'],
        ['Java教程5','C语言基础5','高等数学5','数学分析5','有机化学5','建筑工程实例教程5','管理与实务5','会计学5','ps基础5','C语言基础5','PPT详解5','数学分析5','大数据5','建筑工程实例教程5','快速入门韩语5','会计学5'],
        ['Java教程6','C语言基础6','高等数学6','数学分析6','有机化学6','建筑工程实例教程6','管理与实务6','会计学6','ps基础6','C语言基础6','PPT详解6','数学分析6','大数据6','建筑工程实例教程6','快速入门韩语6','会计学6'],
        ['Java教程','C语言基础','高等数学','数学分析','有机化学','建筑工程实例教程','管理与实务','会计学','ps基础','C语言基础','PPT详解','数学分析','大数据','建筑工程实例教程','快速入门韩语','会计学'],
        ['Java教程2','C语言基础2','高等数学2','数学分析2','有机化学2','建筑工程实例教程2','管理与实务2','会计学2','ps基础2','C语言基础2','PPT详解2','数学分析2','大数据2','建筑工程实例教程2','快速入门韩语2','会计学2'],
        ['Java教程3','C语言基础3','高等数学3','数学分析3','有机化学3','建筑工程实例教程3','管理与实务3','会计学3','ps基础3','C语言基础3','PPT详解3','数学分析3','大数据3','建筑工程实例教程3','快速入门韩语3','会计学3'],
        ['Java教程4','C语言基础4','高等数学4','数学分析4','有机化学4','建筑工程实例教程4','管理与实务4','会计学4','ps基础4','C语言基础4','PPT详解4','数学分析4','大数据4','建筑工程实例教程4','快速入门韩语4','会计学4'],
        ['Java教程5','C语言基础5','高等数学5','数学分析5','有机化学5','建筑工程实例教程5','管理与实务5','会计学5','ps基础5','C语言基础5','PPT详解5','数学分析5','大数据5','建筑工程实例教程5','快速入门韩语5','会计学5'],
        ['Java教程6','C语言基础6','高等数学6','数学分析6','有机化学6','建筑工程实例教程6','管理与实务6','会计学6','ps基础6','C语言基础6','PPT详解6','数学分析6','大数据6','建筑工程实例教程6','快速入门韩语6','会计学6']
    ],
    con:[
        ['通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档'],
        ['如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象'],
        ['javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言'],
        ['HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单'],
        ['进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言'],
        ['异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得'],
        ['通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档','通过四种常用方式举例说明了 JAVA 程序如何生成 XML 文档'],
        ['如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象','如何正确理解面向对象'],
        ['javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言','javaScript脚本语言'],
        ['HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单','HTML5+CSS3页面更丰富，代码更简单'],
        ['进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言','进入编程世界的必修课-C语言'],
        ['异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得','异常处理 + 集合框架 + 字符串操作 + 常用类使用 = Java中你必须懂得']
    ],
    zan:[
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56],
        [100,200,300,200,500,98,60,77,90,103,222,356,78,121,22,56]
    ],
    changePicWord:function(pic,word,hrefs,con,zan,index){
        var HTML = '';
        for(var i = 0;i<pic[index].length;i++){
            var m ;
            if(i<4){
                m = 0.3+i*0.2;
            }
            else if(i>8){
                m = 0.3+(i-8)*0.2
            }
            else{
                m = 0.3+(i-4)*0.2;
            }
            HTML +=  '<li class="tp" data-scroll-reveal="enter bottom over '+m+'s and move 100px">'+
                '<a href="course_detail.html">'+
                '<div class="pic">' +
                '<img src="'+pic[index][i]+'" />' +
                '<div  class="triangle">'+
                '<div class="shadow"></div>'+
                '</div>'+
                '</div>'+
                '<p class="title">'+word[index][i]+'</p>'+
                '<p class="con">'+con[index][i]+'</p>'+
                '<p class="zan">'+zan[index][i]+'</p>'+
                '</a>'+
                '</li>';

        }
        $('#container').html(HTML);
    },
    click:function(obj,current,bool){
        obj.each(function(i){
            $(this).bind('click',function(){
                if(bool){
                    kecheng_tab.index = $(this).attr('data-code');
                    console.log(kecheng_tab.index);
                }
                var data = $(this).attr('data-code');
                obj.removeClass(current);
                $(this).addClass(current);
                    kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs,kecheng_tab.con,kecheng_tab.zan,$(this).attr('data-code'));
            });
        });
    },
    click_prevNext:function(obj,bool){
        obj.bind('click', function () {
            if (bool) {
                if (kecheng_tab.index > 0) {
                    kecheng_tab.index--;
                }
                else{
                    kecheng_tab.index = 0;
                }
            }
            else {
                if (kecheng_tab.index < 4) {
                    kecheng_tab.index++;
                }
                else {
                    kecheng_tab.index = 4;
                }
            }
            $('.fenye span.number').removeClass('current');
            $('.fenye span.number').eq(kecheng_tab.index).addClass('current');
            kecheng_tab.changePicWord(kecheng_tab.pic, kecheng_tab.word, kecheng_tab.hrefs, kecheng_tab.con, kecheng_tab.zan, kecheng_tab.index);
        })
    }
};
kecheng_tab.click($('.new_hot'),'current');
kecheng_tab.click($('.fenye span.number'),'current',true);
kecheng_tab.click_prevNext($('.prev'),true);
kecheng_tab.click_prevNext($('.next'),false);
kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs,kecheng_tab.con,kecheng_tab.zan,0);
//4.课程列表动态
function load(){
    if (!(/msie [6|7|8]/i.test(navigator.userAgent))){
        (function(){
            window.scrollReveal = new scrollReveal({reset: true});
        })();
    }
}
load();

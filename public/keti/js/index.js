/**
 * Created by songfy on 2016/3/1.
 */
//1.头部切换
var head_top = {
    lis : $('.nav li'),
    firstLi: $('.nav li:first-child'),
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



//2.轮播图
new BoxesFx( document.getElementById( 'boxgallery' ) );



//3.学校课程点击切换
var kecheng_tab = {
    lis : $('.kecheng_nav li'),
    firstLi: $('.kecheng_nav li:first-child'),
    pic:[
        ['image/kc1.jpg','image/kc2.jpg','image/kc3.jpg','image/kc4.jpg','image/kc5.jpg','image/kc6.jpg','image/kc7.jpg','image/kc8.jpg'],
        ['image/kc9.jpg','image/kc10.jpg','image/kc11.jpg','image/kc12.jpg','image/kc13.jpg','image/kc14.jpg','image/kc15.jpg','image/kc16.jpg']
    ],
    word:[
        ['Java教程','C语言基础','高等数学','数学分析','有机化学','建筑工程实例教程','管理与实务','会计学'],
        ['ps基础','C语言基础','PPT详解','数学分析','大数据','建筑工程实例教程','快速入门韩语','会计学']
    ],
    hrefs:[
        ['course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html'],
        ['course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html','course_detail.html']
    ],
    changePicWord:function(pic,word,hrefs,index){
        var HTML = '';
        for(var i = 0;i<pic[index].length;i++){
            var m ;
            if(i<4){
                m = 0.3+i*0.2;
            }
            else{
                m = 0.3+(i-4)*0.2;
            }
                HTML +=  '<li class="tp" data-scroll-reveal="enter bottom over '+m+'s and move 100px">'+
                    '<a href="'+hrefs[index][i]+'">'+
                    '<div class="pic">' +
                    '<img src="'+pic[index][i]+'" />' +
                    '<div  class="triangle">'+
                    '<div class="shadow"></div>'+
                    '</div>'+
                    '</div>'+
                    '<p class="title">'+word[index][i]+'</p>'+
                    '</a>'+
                    '</li>';

        }
        $('#container').html(HTML);
    },
    click:function(){
        kecheng_tab.lis.each(function(i){
            var index = i;
            $(this).bind('click',function(){
                kecheng_tab.lis.removeClass('current');
                kecheng_tab.firstLi.removeClass('current');
                $(this).addClass('current');
                if(index<2){
                    kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs,index);
                }
                load();
            });
        })
    }
};
kecheng_tab.click();
kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs,0);



//4.课程列表动态
function load(){
    if (!(/msie [6|7|8]/i.test(navigator.userAgent))){
        (function(){
            window.scrollReveal = new scrollReveal({reset: true});
        })();
    }
}
load();



//5.学校老师
var teacher ={
    flag:false,
    index: 0,
    pic : [
        ['image/teacher1.jpg','image/teacher2.jpg','image/teacher3.jpg','image/teacher4.jpg'],
        ['image/teacher5.jpg','image/teacher1.jpg','image/teacher2.jpg','image/teacher6.jpg'],
        ['image/teacher7.jpg','image/teacher8.jpg','image/teacher9.jpg','image/teacher1.jpg']
    ],
    name : [
        ['邓超','李晨','郑爽','刘恺威'],
        ['范冰冰','邓超','李晨','刘诗诗'],
        ['杨幂','郑恺','黄致列','邓超']
    ],
    department: [
        ['数学科学学院信息与计算科学系','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系'],
        ['数学科学学院信息与计算科学系1','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系'],
        ['数学科学学院信息与计算科学系2','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系','数学科学学院信息与计算科学系']
    ],
    descript:[
        ['任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验'],
        ['任教java开发、数据库、数据分析,有着多年的教学经验1','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验'],
        ['任教java开发、数据库、数据分析,有着多年的教学经验2','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验','任教java开发、数据库、数据分析,有着多年的教学经验']
    ],
    change:function(pic,name,department,descript,index){
        var HTML = '';
        for(var i = 0;i <pic[index].length;i++){
            HTML = '<a href="teacher_detail.html" target="_blank">'+
                '<div class="pic" style="background-image: url('+pic[index][i]+')"></div>'+
                '<p class="name">'+name[index][i]+'</p>'+
                '</a>'+
                '<p class="describe ellipsis-1">'+department[index][i]+'</p>'+
                '<p class="subject ellipsis-2">'+descript[index][i]+'</p>';
            if(index % 2){
                $('.content .con2').eq(i).html(HTML);
            }
            else{
                $('.content .con1').eq(i).html(HTML);
            }

        }
    },
    click: function () {
        if(!teacher.flag){
            $('.content .con1').css({'box-shadow':'none','transform':'rotateY(180deg)','z-index':'-1'});
            $('.content .con2').css({'box-shadow':'0 0 10px #999','transform':'rotateY(0deg)','z-index':'2'});
            teacher.flag = true;
        }
        else{
            $('.content .con2').css({'box-shadow':'none','transform':'rotateY(180deg)','z-index':'-1'});
            $('.content .con1').css({'box-shadow':'0 0 10px #999','transform':'rotateY(0deg)','z-index':'2'});
            teacher.flag = false;
        }
        if (teacher.index > teacher.pic.length - 1) {
            teacher.index = -1;
        }
        teacher.index++;
        teacher.change(teacher.pic, teacher.name, teacher.department, teacher.descript, teacher.index);
    }
};
teacher.change(teacher.pic,teacher.name,teacher.department,teacher.descript,teacher.index);
$('.more').bind('click',function(){
    teacher.click();
});



//6.课程互动
var hudong = {
    pic:['css/imgs/tx-1.png','css/imgs/tx-2.png','css/imgs/tx-3.png','css/imgs/tx-4.png','css/imgs/tx-5.png'],
    questioner:['邓超','孙俪','孟老师','牛老师','范冰冰'],
    state:['提问','提问','回复','回复','提问'],
    teacher:['周老师','宋老师','刘亦菲','李晨','张老师'],
    link:['#','#','#','#','#'],
    course:['《java基础》','《数据库原理》','《C语言教程》','《数据结构》','《数据分析》'],
    con:['父类与子类之间的多态性，对父类的函数进行重新定义。如果在子类中定义某方法与其父类有相同的名称和参数，我们说该方法被重写 (Overriding)。在Java中，子类可继承父类中的方法，而不需要重新编写相同的方法。',
         '方法重载与重写的区别在哪里？',
         '方法重载：就是在同一个类中，方法的名字相同，但参数个数、参数的类型或返回值类型不同！',
         '方法重写：它是指子类和父类的关系，子类重写了父类的方法，但方法名、参数类型、参数个数必须相同！',
         '在使用重载时只能通过相同的方法名、不同的参数形式实现。不同的参数类型可以是不同的参数类型，不同的参数个数，不同的参数顺序（参数类型必须不一样）；'
    ],
    init:function(){
        var HTML = '';
        for(var i = 0;i<hudong.pic.length;i++){
            HTML += '<li class="hudong_list_cell">'+
                    '<div class="touxiang" style="background-image: url('+hudong.pic[i]+')"></div>'+
                    '<div class="hudong_body">'+
                    '<p class="nick">'+
                    '<span>'+hudong.questioner[i]+
                    '</span>'+hudong.state[i]+
                    '<span>'+hudong.teacher[i]+'</span>'+
                    '</p>'+
                    '<a href="'+hudong.link[i]+'"><p class="course">'+hudong.course[i]+'</p></a>'+
                    '<p class="con_body ellipsis-1">'+hudong.con[i]+'</p>'+
                    '</div>'+
                    '</li>'
        }
        $('.hudong_list').append(HTML);
    },
    t : 0,
    num:0,
    hudong_list : $('.hudong_list'),
    scroll: function () {
        var s = setInterval(function () {
            hudong.t++;
            hudong.hudong_list.css({'top':-hudong.t + "px"});
            if (hudong.t % 94 == 0) {
                clearInterval(s);
                hudong.init();
                setTimeout(function () {
                    hudong.scroll();
                }, 3000)
            }
        }, 20);
    },
};
hudong.init();
hudong.scroll();





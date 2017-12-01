/**
 * Created by songfy on 2016/3/15.
 */
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
$('.studay_btn').bind('click',function(){
    window.open('study_zhangjie.html');
})
/**
 * Created by songfy on 2016/3/30.
 */
var kecheng_tab = {
    lis : $('.kecheng_nav li'),
    firstLi: $('.kecheng_nav li:first-child'),
    pic:['image/kc1.jpg','image/kc2.jpg','image/kc3.jpg','image/kc4.jpg','image/kc5.jpg','image/kc6.jpg','image/kc7.jpg','image/kc8.jpg'],
    word:['Java教程','C语言基础','高等数学','数学分析','有机化学','建筑工程实例教程','管理与实务','会计学'],
    changePicWord:function(pic,word,hrefs){
        var HTML = '';
        for(var i = 0;i<pic.length;i++){
            var m ;
            if(i<4){
                m = 0.3+i*0.2;
            }
            else{
                m = 0.3+(i-4)*0.2;
            }
            HTML +=  '<li class="tp" data-scroll-reveal="enter bottom over '+m+'s and move 100px">'+
                '<a href="course_detail.html" target="_blank">'+
                '<div class="pic">' +
                '<img src="'+pic[i]+'" />' +
                '<div  class="triangle">'+
                '<div class="shadow"></div>'+
                '</div>'+
                '</div>'+
                '<p class="title">'+word[i]+'</p>'+
                '</a>'+
                '</li>';

        }
        $('#container').html(HTML);
    }
};
kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs);





var teacher = {
    pic: ['image/teacher1.jpg', 'image/teacher2.jpg', 'image/teacher3.jpg', 'image/teacher4.jpg','image/teacher5.jpg', 'image/teacher1.jpg',
        'image/teacher2.jpg', 'image/teacher6.jpg'],
    name:
        ['邓超', '李晨', '郑爽', '刘恺威','范冰冰', '邓超', '李晨', '刘诗诗'],
    change: function (pic, name) {
        console.log(pic.length);
        var HTML = '';
        for (var i = 0; i < pic.length; i++) {
            HTML +=  '<li>'+
                '<div class="con">'+
                '<a href="teacher_detail.html" target="_blank">' +
                '<div class="pic" style="background-image: url(' + pic[i] + ')"></div>' +
                '<p class="name">' + name[i] + '</p>' +
                '</a>' +
                '</div>'+
                '</li>';

        }
        $('.content').html(HTML);
    }
};
teacher.change(teacher.pic,teacher.name);



/**
 * Created by songfy on 2016/3/29.
 */
var kecheng_tab = {
    lis : $('.kecheng_nav li'),
    firstLi: $('.kecheng_nav li:first-child'),
    pic:['image/kc9.jpg','image/kc10.jpg','image/kc11.jpg','image/kc12.jpg','image/kc13.jpg','image/kc14.jpg','image/kc15.jpg','image/kc16.jpg'],
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
                    '<p class="title" style="border: none;">'+word[i]+'</p>'+
                    '</a>'+
                    '</li>';

        }
        $('#container').html(HTML);
    }
};
kecheng_tab.changePicWord(kecheng_tab.pic,kecheng_tab.word,kecheng_tab.hrefs);

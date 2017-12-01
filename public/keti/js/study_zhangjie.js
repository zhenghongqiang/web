/**
 * Created by songfy on 2016/3/16.
 */
var content_tab = {
    click_self:function(obj,active){
        obj.each(function(){
            $(this).bind('click',function(){
                obj.removeClass(active);
                $(this).addClass(active);
            })
        })
    },
    click_linkage:function(obj,obj2,active,active2){
        obj.each(function(i){
            var index = i, flag = false;
            $(this).bind('click',function(){
                $(this).addClass(active);
                //obj2.addClass(active2);
                if(!flag){
                    obj2.eq(index).removeClass(active2);
                    flag = true;
                }
                else{
                    $(this).removeClass(active);
                    obj2.eq(index).addClass(active2);
                    flag = false;
                }
            })
        })
    }
};
content_tab.click_self($('.nav_bar li'), 'active');
content_tab.click_linkage($('.content_body li .list_cell_head'),$('.content_body .list_cell_body'),'active','hide');


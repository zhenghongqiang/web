/**
 * Created by songfy on 2016/3/9.
 */

var head_top = {
    lis : $('.nav li'),
    firstLi: $('.nav li:nth-child(2)'),
    hover:function(){
        head_top.lis.each(function(i){
            var index = i;
            $(this).hover(function(){
                head_top.lis.removeClass('current');
                $(this).addClass('current');
            },function(){
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
                $('.login_page').animate({'top':'130px'},100,function(){
                    $('.login_page').animate({'top':'120px'},100,function(){
                        $('.login_page').animate({'top':'132px'},100);
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
//��¼
var login = {
    ipt:$('.ipt_row input'),
    row:$('.ipt_row'),
    icon:$('.input_icon'),
    focu:function(x,y,ipt,row,icon){
        ipt.focus(function(){
            $(this).val('').css({'color':'#666'});
            row.css({'border-color':'#7dabdf'});
            icon.css({'background-position': x+'px '+y+'px'});
        })
    },
    blur:function(x,y,ipt,row,icon){
        ipt.blur(function(){
            row.css({'border-color':'#bbb'});
            icon.css({'background-position': x+'px '+y+'px'});
        })
    },
    close:function(){
        $('.login_page .close').bind('click',function(){
            $('.login_page').animate({'top':'-290px'},800);
        })
    }
};
login.focu(-4,-190,login.ipt.eq(1),login.row.eq(1),login.icon.eq(1));
login.blur(-4,-150,login.ipt.eq(1),login.row.eq(1),login.icon.eq(1));
login.focu(-4,-112,login.ipt.eq(0),login.row.eq(0),login.icon.eq(0));
login.blur(-4,-72,login.ipt.eq(0),login.row.eq(0),login.icon.eq(0));
login.close();

//��¼��֤
var login_check = {
    name:$('#name'),
    psw:$('#psw'),
    user:{
        '2012201128':'111111',
        '2012201129':'222222',
        '2012201130':'333333',
        '2012201131':'444444',
        '2012201132':'555555',
        '2012201133':'666666',
        '2012201134':'777777'
    },
    btn_click:function(){
        var name = login_check.name;
        var psw = login_check.psw;
        var user = login_check.user;
        $('.login_body .btn').bind('click',function(){
            if(name.val().length == 0 || name.val() == '�û�������Ϊ��!'){
                name.val('�û�������Ϊ��!').css({'color':'red'});
            }
            else{
                if(user[name.val()]){
                    if(psw.val().length == 0 || psw.val() == '���벻��Ϊ��!'){
                        psw.val('���벻��Ϊ��!').attr({'type':'text'}).css({'color':'red'});
                    }
                    else{
                        psw.prop({'type':'password'});
                        if(user[name.val()] == psw.val()){
                            alert('ok');
                        }
                        else{
                            psw.val('�������!').css({'color':'red'}).attr({'type':'text'});
                        }
                    }
                }
                else{
                    name.val('�û����������').css({'color':'red'});
                }
            }
        })
    }
};
login_check.btn_click();

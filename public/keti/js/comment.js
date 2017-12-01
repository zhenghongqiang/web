/**
 * Created by songfy on 2016/3/18.
 */
// 文本框字数限定
var $txt = $('#txt'),$num = $('#num');
$txt.bind('input',function(){
   var l = $txt.val().length;
    var str = $txt.val();
    $num.text(l);
    if(l>300){
        $txt.val(str.substring(0,300));
        $num.text(300);
    }
});
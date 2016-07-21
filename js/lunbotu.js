  var startX,startY,endX,endY,intPos=0;
         function touchSatrtFunc(evt) {
             try {
                 var touch = evt.touches[0];
                 var x = Number(touch.pageX);//点击时的X坐标
                 startX = x;
             }
             catch (e) {}

         }

         function touchMoveFunc(evt) {
             try {
                 var touch = evt.touches[0];
                 var x = Number(touch.pageX);//移动后X的坐标
                 endX = x;
             }
             catch (e) {}
         }

         function touchEndFunc() {
             try {
                 if(startX > endX) {
                     console.log($("#img1").width());
                     if(intPos < 3) {
                         intPos++;
                         var $n = "#img" + intPos;
                         $($n).animate({
                             marginLeft: "-"+Number($("#img1").width())+"px"
                         });
                         console.log("向左");
                     }
                 }
                 else if(startX < endX) {
                     console.log("向右");
                     if(intPos > 0) {
                         var $n = "#img" + intPos;
                         $($n).animate({
                             marginLeft: 0 +"px"
                         });
                         intPos--;
                     }
                 }
             }
             catch (e) {
             }
         }
         function isTouchDevice() {
             try {
                 document.createEvent("TouchEvent");
                 document.addEventListener('touchstart', touchSatrtFunc, false);
                 document.addEventListener('touchmove', touchMoveFunc, false);
                 document.addEventListener('touchend', touchEndFunc, false);
             }
             catch (e) { }
         }
  isTouchDevice();
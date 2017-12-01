// Date.prototype.Format = function(fmt) {
//     var o = {
//         "M+": this.getMonth() + 1,
//         "d+": this.getDate(),
//         "h+": this.getHours(),
//         "m+": this.getMinutes(),
//         "s+": this.getSeconds(),
//         "q+": Math.floor((this.getMonth() + 3) / 3),
//         "S": this.getMilliseconds()
//     };
//     if (/(y+)/.test(fmt)) { 
//         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     };
//     for (var k in o) {
//         if(o.hasOwnProperty(k)){
//             if (new RegExp("(" + k + ")").test(fmt)) {
//                 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//             }
//         }
//     }
//     return fmt;
// };
var Common = {
    name : 'Js',
    format : function(fmt,time) {
        var time = time || new Date();
        var o = {
            "M+": time.getMonth() + 1,
            "d+": time.getDate(),
            "h+": time.getHours(),
            "m+": time.getMinutes(),
            "s+": time.getSeconds(),
            "q+": Math.floor((time.getMonth() + 3) / 3),
            "S": time.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) { 
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        };
        for (var k in o) {
            if(o.hasOwnProperty(k)){
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
        }
        return fmt;
    },
}



module.exports = Common;
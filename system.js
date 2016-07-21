/*
  zhq
  2015.8.21
*/
/*
  通过id获取元素对象
  参数id表示元素对象的id名称
  函数返回一个指定id号的元素对象
*/
function $$(id) {
	return document.getElementById(id);
}

var postMessageOrigin='http://localhost:63342';
/*
 开关控制元素的显示与隐藏
 参数e表示元素对象
 click方法用于显示隐藏功元素
*/

var sh = {
  click: function (e) {
    var status = e.style.display;
    if (status == '') {
      e.style.display = "none";
    }
    else {
      e.style.display = '';
    }
  }
}

//通用 设置属性和获取属性
var comm = {
  setAttr: function (e,strName,strValue) {
    e.setAttribute(strName,strValue);
  },
  getAttr: function (e,strName) {
    return e.getAttribute(strName);
  },
  remAttr: function (e, strName) {
    return e.removeAttribute(strName);
  }
};
//控制台输出
function cl(v){
  console.log(v);
}

// ajax交互工具
var ajx ={
  _GET: function (url) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function (d) {
        return d;
      }
    })
  },
  _POST: function (url,obj) {
    $.ajax({
      url: url,
      type: "POST",
      data:obj,
      dataType: "json",
      success: function (d) {
        return d;
      }
    })
  }
};

// 本地缓存
var _cook={
  setI: function (n,v) {
    window.localStorage.setItem(n,v);
  },
  getI: function (n) {
    return window.localStorage.getItem(n);
  }
}

//获取现在的时间
function now_date(){
  var now=new Date();
  var year=now.getFullYear();
  var month=now.getMonth();
  var day=now.getDate();
  var hour=now.getHours();
  var min=now.getMinutes();
  var s=now.getSeconds();
  var ruleDate=year+"/"+month+"/"+day+" "+hour+":"+min+":"+s;
  return ruleDate;
}



//生成指定长度的随机数
function RetRndNum(n) {
  var strRnd = "";
  for (var intI = 0; intI < n; intI++) {
    strRnd += Math.floor(Math.random() * 10);
  }
  return strRnd;
}

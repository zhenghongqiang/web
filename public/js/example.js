var x = 5;
var addX = function(val){
    return val + x;
}
module.exports.x = x;
module.exports.addX = addX;
var exports = module.exports;
exports.add = function(a,b){
	return a+b;
}


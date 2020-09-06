// 变量不要使用 name 不然会跟 dom中全局的 Window 对象的 name 重名
var uname = "Runoob";
var uname; //默认值为 undefined
var uname = "Runoob";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name: " + uname);
console.log("score1: " + score1);
console.log("score2: " + score2);
console.log("sum: " + sum);
// 类型断言
var str = '1';
var str2 = str;
console.log(str2);
var num = 2;
console.log(num);
// num = '12' //Error
// console.log(num)
//变量作用域
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("global_num", global_num);
console.log("static", Numbers.sval);
var obj = new Numbers();
console.log("obj", obj.num_val);

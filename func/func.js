// 函数跟go的大致相同
// 可选参数
function hello(name, other) {
    console.log(name + "hello");
    console.log(other);
}
hello("lili");
hello("lili", "hai");
// 默认参数
function multiply(width, height) {
    if (height === void 0) { height = 10; }
    console.log(width * height);
}
multiply(10);
multiply(10, 20);
// 剩余参数 不确定数量的参数
function add(one, two) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    var sum = one + two;
    for (var _a = 0, others_1 = others; _a < others_1.length; _a++) {
        var other = others_1[_a];
        sum += other;
        console.log(sum);
    }
}
add(1, 2, 3, 4);
// anonymousFunction
var anonymous = function () {
    console.log("匿名函数");
};
anonymous();
// 匿名函数自调
(function () {
    console.log("自调匿名函数");
})();
// 构造函数
var res = new Function("name", "say", "console.log(name + say)");
res("lisa", "hello");
// Lambda 函数 箭头函数
var sum = function (num) { return num + 10; };
console.log(sum(10));
// 单个参数 () 可选
var sum2 = function (x) { return x + 10; };
console.log(sum2(15));
// 无参数可设置为 () 
var sum3 = function () {
    console.log("无参数");
};
sum3();
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");

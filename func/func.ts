// 函数跟go的大致相同

// 可选参数
function hello(name: string, other?: string) {
    console.log(name + "hello")
    console.log(other)
}
hello("lili")
hello("lili", "hai")

// 默认参数
function multiply(width: number, height: number = 10) {
    console.log(width * height)
}
multiply(10)
multiply(10, 20)

// 剩余参数 不确定数量的参数
function add(one: number, two: number, ...others: number[]) {
    let sum = one + two
    for (let other of others) {
        sum += other
        console.log(sum)
    }

}
add(1, 2, 3, 4)

// anonymousFunction
let anonymous = function () {
    console.log("匿名函数")
}

anonymous();

// 匿名函数自调
(function () {
    console.log("自调匿名函数")
})();

// 构造函数

let res = new Function("name","say","console.log(name + say)");
res("lisa", "hello");

// Lambda 函数 箭头函数
let sum = (num: number) => num + 10;
console.log(sum(10))
// 单个参数 () 可选
let sum2 = x => x + 10;
console.log(sum2(15))
// 无参数可设置为 () 
let sum3 = () => {
    console.log("无参数")
};
sum3()

// 函数重载  方法名字相同，而参数不同，返回类型可以相同也可以不同
// 如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。
function disp(s1: string): void;
function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1, "xyz");
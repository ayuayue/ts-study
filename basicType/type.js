// // number
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
// console.log(binaryLiteral,octalLiteral,decLiteral,hexLiteral)
// // ---
// // string
function string() {
    var name = "Runoob";
    var years = 5;
    var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + name + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
    // console.log(name, years, words)
}
string();
// // ---
// // boolean
var flag = true;
// console.log(flag)
// // ----
// // array 
var arr = [1, 2];
console.log(arr);
// // 使用数组泛型
var arr1 = [1, 2];
console.log(arr1);
// // ---- 
// // slice 
var x;
x = ['Runoob', 1];
// x = [1, 'Runoob'] // error
// console.log(x)
// // ----
// // enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c)
// // ----
// // void 空值
function hello() {
    console.log("Hello World");
}
// hello()
// // ----
// // null -- 对象值缺失
// /*
//     表示什么都没有,标识一个空对象引用
//     typeof 检查 null 返回 object
// */
// // undefined -- 初始化一个未定义的值
// /*
//     标识一个没有设置值的变量,类似与go中没有初始化的map或slice
//     typeof 检查 undefined 返回undefined
//     null 和 undefined 是其他任何类型(包括 void)的子类型,有点像go的interface, 可以赋值给其他类型,在 typescript 启用严格的空校验时,null 和 undefined 只能赋值给 void 或者本身对应的类型
// */
// // 启用 --strictNullChecks, x 只能是定义的类型,如number
// let x1: number
// x1 = 1
// x1 = undefined // error
// x1 = null // error
// // 启用 --strictNullChecks , 如果可能出现 null undefined 使用 | 来支持多种类型
var x1;
x1 = 1;
x1 = undefined;
x1 = null;
// console.log(x1)
// // never -- never 其他类型(null undefined )的子类
// /*
//  *  标识从不会出现的值,声明未never 的变量只能被 never类型所赋值,通常表现为抛出异常或者无法执行到
//  * 终点(如无限循环)
// */
// let x2:never
// let y:number
// // x2 = 123 //error
// x2 = (() => { throw new Error('exception') })()
// console.log(x2)
// y = (()=>{throw new Error('exception')})()
// function error(message: string): never{
//     throw new Error(message)
// }
// function loop(): never{
//     while (true) {
//     }
// }
// // ------- javascript and typescript 没有 int 类型 -----
// // any 类型 -- 针对不明确的变量
// // 1. 变量的值会动态改变,如用户的输入
var x3 = 1;
x3 = 'I am Who am';
x3 = false;
console.log(x3);
// // 2. 允许再编译时可选择的包含或移除类型检查
// let x4: any = 4
// x4.ifItExists()
// x4.toFixed()
// // 3. 定义存储各种类型的数据的数组时
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
console.log(arrayList);
// // ----

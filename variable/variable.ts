// 变量不要使用 name 不然会跟 dom中全局的 Window 对象的 name 重名
var uname: string = "Runoob"

var uname: string //默认值为 undefined

var uname = "Runoob"

var score1: number = 50
var score2: number = 42.50
var sum = score1 + score2
console.log("name: " + uname)
console.log("score1: " + score1)
console.log("score2: " + score2)
console.log("sum: " + sum)

// 类型断言

var str = '1'
var str2: number = <number><any>str
console.log(str2)

var num = 2
console.log(num)
// num = '12' //Error
// console.log(num)

//变量作用域
var global_num = 12 // 全局变量
class Numbers { 
    num_val = 13 // 实例变量
    static sval = 10 // 静态变量

    storeNum(): void {
        var local_num = 14 // 局部变量
    }
}
console.log("global_num",global_num)
console.log("static",Numbers.sval)
var obj = new Numbers()
console.log("obj",obj.num_val)
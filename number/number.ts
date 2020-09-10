console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);

// 原型

function employee(id: number, name: string) {
    this.id = id
    this.name = name
    console.log(id, name)
}

let lisa = new employee(1, "lisa")
employee.prototype.email = "1401262639@qq.com"
console.log(lisa.email)

// number 对象的方法
// toExponential() 转为指数计数法
let num = 12345.12
console.log(num.toExponential())

// toFixed() 转为字符串,并对小数部分指定位数
let num2 = 12345.123
console.log(num2.toFixed())
console.log(num2.toFixed(2))

// toLocaleString() 数字转为字符串,使用本地数字格式顺序
let num3 = 12345.234
console.log(num3.toLocaleString())

// toPrecision() 把数字转为指定长度的字符串
let num4 = 12345.345
let tmp = num4.toPrecision()
console.log(num4.toPrecision())
console.log(typeof (tmp))

// toString() 使用指定的进制将数字转为字符串,默认十进制
let num5 = 10
console.log(num5.toString(2))

// 	valueOf() 返回一个 number 对象的原始值
let num6 = 100
let num7 = new Number(0)
console.log(num6.valueOf(), num7.valueOf())
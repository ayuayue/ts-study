/**
 * File: \array.ts
 * Project: array
 * Created Date: 2020-09-13
 * Author: caoayu
 * -----
 * Last Modified: 2020-09-13 4:41:16 pm
 * Modified By: the developer formerly known as caoayu at 1401262639@qq.com
 * -----
 * Copyright (c) 2020 caoayu
 * -----
 * HISTORY:
 */


// array object
let numArr: number[] = [1, 2, 3]
console.log(numArr)

let strArr = new Array(4) // 参数为数组的长度
strArr = ["h", "e", "l", "l", "o"]
console.log(strArr)

// 数组的解构
let [x, y, z] = numArr
console.log(x, y, z)

// 数组迭代
for (let i in numArr) {
    console.log(i, numArr[i])
}

// 二维数组
let multiNumArr: number[][] = [[123], [234]]
console.log(multiNumArr)

// 作为参数传递给函数
let hello = (paramArr: number[]) => {
    for (let j in paramArr) {
        console.log(j, paramArr[j]);
    }
};
hello(numArr)

// 作为函数的返回值
function world(): number[] {
    return [1, 2, 3]
}
console.log(world())

// 数组对象的方法
// concat() 连接多个数组并返回
console.log(numArr.concat(strArr))

// every() 检测数组的每个原生是否都满足条件,返回布尔值
// some() 同every   
console.log([1, 2, 3].every(function (element, index, array) {
    console.log(element, index, array)
    return element > 0
}))
// filter() 检测并过滤满足条件的元素 返回值仍然是数组
console.log([1, 2, 3].filter(function (element, index, array) {
    return element > 2
}))

// forEach() 每个元素都执行一次回调
numArr.forEach(function (element, index, array) {
    console.log(element, index, array)
})

// indexOf() 搜索数组中的元素的位置,与 string 对象的相同
// lastIndexOf() 最后一次出现的位置,与 string 对象的相同

// 	join() 将数组的所有元素连接到一个字符串上,默认是 ,
console.log(numArr.join('-'))

// map() 通过指定函数处理每个元素,并返回处理后的数组
console.log([1, -2, 3].map(Math.abs))

// pop() 返回删除的元素
console.log(numArr.pop())

// push() 返回长度
console.log(numArr.push(4), numArr)
console.log(numArr, "=====")
// reduce() 将数组元素计算为一个值,从左到右
console.log(numArr.reduce(function (first, second) {
    return first * second
}))
// 	reduceRight() 从右向左将元素计算为一个值
// typescript 的数组也是只能存储一种数据类型,通过 new Array("1","2") 会报错.["1",2]此种形式为元组,不是数组
// 在 go 中,数组中存储的只能是同一种数据类型的元素,切片也是,map亦是
console.log([1, '1', false])

// reverse() 反转数组元素
console.log(numArr.reverse())

// shift() 删除并返回第一个元素
console.log(numArr.shift(), numArr)

// slice() 取数组的一部分
console.log(strArr.slice(0, 3))

// sort() 对数组元素进行排序,会影响原数组
console.log(strArr.sort())

// splice() 从数组中添加或删除元素
console.log(numArr, "----")
console.log(numArr.splice(0, 0, 3))
console.log(numArr, "----")

// toString() 数组转为字符并返回
console.log(strArr.toString())

// unshift() 数组开头添加一个或多个运算并返回长度
console.log(numArr.unshift(1,2));
console.log(numArr);


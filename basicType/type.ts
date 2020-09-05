// number
let binaryLiteral: number = 0b1010; // 二进制

let octalLiteral: number = 0o744; // 八进制

let decLiteral: nubmer = 6 // 十进制

let hexLiteral: number = 0xf00d // 十六进制

// ---

// string
let name: string = "Runoob"

let years: number = 5

let words: string = '您好,今年是 $(name) 发布 $(year +1 ) 周年'

// ---

// boolean
let flag: boolean = true

// ----

// array 
let arr: number[] = [1, 2]

// 使用数组泛型
let arr: Array<number> = [1, 2]

// ---- 

// slice 
let x: [string, number] 
x = ['Runoob', 1]
x = [1, 'Runoob'] // error
console.log(x)

// ----

// enum
enum Color { Red, Green, Blue }
let c: Color = Color.Red
console.log(c)

// ----


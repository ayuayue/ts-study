// 联合类型
// 可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。

let union: string | number;
union = "12"
console.log(union);
union = 12;
console.log(union);

let hello = (word: string | number) => {
    return word
}
console.log(hello("word"));
console.log(hello(123));

// 联合类型数组
let unionArr :string[] | number[]
unionArr = [1,2,3]
console.log(unionArr);
unionArr = ['1','2','3']
console.log(unionArr);
// unionArr = [1, false]; // error






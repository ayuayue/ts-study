// 元组 元组中允许存储不同类型的元素，元组可以作为参数传递给函数
let tuple = [1,"2"]
console.log(tuple[1]);

// push 向元组最后添加元素
tuple.push("name")
console.log(tuple);

// pop 删除元组最后一个元素
console.log(tuple.pop());
console.log(tuple);

// 更新元组
tuple[1] = "hello"
console.log(tuple)

// 解构元组
let [x, y] = tuple
console.log(x,y)
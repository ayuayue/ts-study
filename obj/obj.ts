// obj 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等
let obj = {
    name: "ayu",
    age: 18,
    say: () => { }, // 如果想给对象增加一个方法,需要先定义一个类型模板
};
console.log(obj.name, obj.age);
obj.say = function () {
    return "i am obj";
}
console.log(obj.say());

/*
*鸭子类型(Duck Typing)
"当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。"
*/

interface IPoint {
    x: number
    y: number
}
function addPoint(p1: IPoint, p2: IPoint): IPoint {
    let x = p1.x + p2.x
    let y = p1.y + p2.y
    return { x: x, y: y }
}
let newPoint = addPoint({ x: 3, y: 5 }, { x: 2, y: 4 })
console.log(newPoint);

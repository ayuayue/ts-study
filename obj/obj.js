// obj 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等
var obj = {
    name: "ayu",
    age: 18,
    say: function () { }
};
console.log(obj.name, obj.age);
obj.say = function () {
    return "i am obj";
};
console.log(obj.say());
function addPoint(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoint({ x: 3, y: 5 }, { x: 2, y: 4 });
console.log(newPoint);

// 接口
// 实现 person
var lili = {
    name: "lili",
    age: 14,
    say: function () {
        return "i am lili";
    }
};
console.log(lili.name, lili.age, lili.say());
var uI = {
    name: "unionInterface",
    say: "string array"
};
console.log(uI.say);
uI = {
    name: "unionInterface array",
    say: ["string", "array"]
};
console.log(uI.say[0], uI.say[1]);
uI = {
    name: "unionInterface func",
    say: function () {
        return "func";
    }
};
console.log(uI.say);
;
var lisa = {
    type: "child",
    name: "lisa",
    age: 18,
    say: function () {
        return "extends";
    }
};
console.log(lisa.name, lisa.type);
var multiply = {
    act: "act",
    type: "act",
    name: "lisa",
    age: 18,
    say: function () {
        return "extends";
    }
};
console.log(multiply.act, multiply.type);

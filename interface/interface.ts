// 接口

interface person {
    name: string,
    age: number,
    say: () => string
}

// 实现 person
let lili: person = {
    name: "lili",
    age: 14,
    say: () => {
        return "i am lili";
    }
};
console.log(lili.name, lili.age, lili.say());

// 联合类型和接口 
interface unionInterface {
    name: string;
    say: string[] | string | (() => string);
}

let uI: unionInterface = {
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
    say: () => {
        return "func";
    }
};
console.log(uI.say);

// 接口和数组
// 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串。

// 接口继承
// 接口继承就是说接口可以通过其他接口来扩展自己。

// 单继承

interface litterPerson extends person {
    type: string;
};
let lisa: litterPerson = {
    type: "child",
    name: "lisa",
    age: 18,
    say: () => {
        return "extends"
    }
}
console.log(lisa.name, lisa.type);

// 多继承
interface action  extends person,litterPerson {
    act: string,
    type: string,
    
}
let multiply: action = {
    act: "act",
    type: "act",
    name: "lisa",
    age: 18,
    say: () => {
        return "extends"
    }
}
console.log(multiply.act, multiply.type);


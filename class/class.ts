// 类 类描述了所创建的对象共同的属性和方法。

class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }
    disp(): void {
        console.log("engine is "+this.engine);
        
    }
}

let car1 = new Car("engine1")
car1.disp();

/*
类的继承
TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）
*/

class wheels extends Car {
    say(): void {
        console.log("i am wheel and engine is " + this.engine);
    }
};
let w = new wheels("engine2");
w.say();

// 继承类的方法重写
class wc extends wheels {
    say(): void {
        console.log("i am wheels 's child class");
        
    }
    disp(): void {
        console.log("i edited car 's method ");
        
    }
}
let wc1 = new wc("engine3")
wc1.say();
wc1.disp();

/*
*static 关键字
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
*/

class st {
    static n: string;
    static say(): void {
        console.log(st.n);
    }
}
st.n = "st";
st.say();

/*
*instanceof 运算符
instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
*/

console.log(wc1 instanceof wc);
 
/*
*访问控制修饰符
TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。

public（默认） : 公有，可以在任何地方被访问。

protected : 受保护，可以被其自身以及其子类和父类访问。

private : 私有，只能被其定义所在的类访问。
*/

/*
*类和接口
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。
*/
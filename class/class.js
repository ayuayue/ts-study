// 类 类描述了所创建的对象共同的属性和方法。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("engine is " + this.engine);
    };
    return Car;
}());
var car1 = new Car("engine1");
car1.disp();
/*
类的继承
TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）
*/
var wheels = /** @class */ (function (_super) {
    __extends(wheels, _super);
    function wheels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wheels.prototype.say = function () {
        console.log("i am wheel and engine is " + this.engine);
    };
    return wheels;
}(Car));
;
var w = new wheels("engine2");
w.say();
// 继承类的方法重写
var wc = /** @class */ (function (_super) {
    __extends(wc, _super);
    function wc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    wc.prototype.say = function () {
        console.log("i am wheels 's child class");
    };
    wc.prototype.disp = function () {
        console.log("i edited car 's method ");
    };
    return wc;
}(wheels));
var wc1 = new wc("engine3");
wc1.say();
wc1.disp();
/*
*static 关键字
static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
*/
var st = /** @class */ (function () {
    function st() {
    }
    st.say = function () {
        console.log(st.n);
    };
    return st;
}());
st.n = "st";
st.say();
/*
*instanceof 运算符
instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
*/
console.log(wc1 instanceof wc);

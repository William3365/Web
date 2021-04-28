"use strict";
/*
类的定义
继承
修饰符:
    public
    private
    protected
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//es5定义类
/* function person(name) {
    this.name = name;
    this.run = function () {
        console.log(this.name);
    }
}
var p = new person("汤冯涛");
p.run(); */
//ts定义类
/* class person{
    //定义属性,自动省略public关键字
    name: string;
    //构造函数,实例化类时触发的方法
    constructor(name:string) {
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
    setName(name:string): void{
        this.name = name;
    }
}
//实例化类
var p = new person("汤冯涛");
alert(p.getName());

p.setName("冯涛");
alert(p.getName()); */
//ts中继承
/*
TypeScript 不支持继承多个类,但支持多重继承（A 继承 B，B 继承 C）
*/
/* class Person1{
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run1():string {
        return `${this.name}在运动`;
    }
}
 //继承关键字 extends、super
class web extends Person1{
    constructor(name: string) {
        super(name);
    }
}
var w = new web("梁音");
alert(w.run1); */
/* //静态方法
class Person2{
    public name: string;
    static age: number = 20;

    constructor(name:string) {
        this.name = name;
    }
//实例方法
    run() {
        alert(`${this.name}在运动`)
    }
    work() {
        alert(`${this.name}在工作`)
    }
//静态方法
    static print() {
        alert("静态方法");
    }
}
//调用实例方法
var p = new Person2("汤冯涛");
p.run();
//调用静态方法，静态方法只能调用静态变量
Person2.print();
alert(Person2.age); */
//多态
/*
父类定义一个方法不去实现，让继承的子类去实现，每个子类有不同的表现
*/
/* class Animal{

    name: string;

    constructor(name:string) {
        this.name = name;
    }

    eat() {
        console.log("吃");
    }
}

class Dog extends Animal{
    constructor(name:string) {
        super(name)
    }

    eat() {
        return this.name + "狗吃骨头";
    }
}

class Cat extends Animal{
    constructor(name: string) {
        super(name);
    }
    eat() {
        return this.name + "猫吃鱼";
    }
} */
/*
抽象类和抽象方法，用来定义标准
abstract关键字定义，不能实例化，必须在派生类中实现
抽象方法只能放进抽象类中
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
//子类必须实现抽象类中的抽象方法
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "狗吃骨头");
    };
    return Dog;
}(Animal));
var d = new Dog("梁音");
d.eat();

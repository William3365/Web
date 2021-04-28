/* 
    接口
    接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法.
    接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
    interface interface_name { 
    }

    属性类接口
    函数类型接口
    可索引接口
    类类型接口
    接口扩展
*/

//1、属性类型接口 
/* 
对批量方法进行约束
*/
/* interface fullName{
    fistName: string;
    secondName: string;
}
// 实现接口必须传入对象first和second
function printName(name:fullName) {
    console.log(name.fistName + "----"+ name.secondName);
}
var obj = { fistName: "tft" ,secondName:"ft"}
printName(obj);

function printInfo(info:fullName) {
    console.log(info.fistName + info.secondName);
}
var info = { fistName: "ly" ,secondName:"ly"}
printInfo(info); */

//2、接口：可选属性
/* interface FullName{
    firstName: string;
    secondName?: string;//可选属性接口
}
 
function getName(name: FullName) {
    console.log(name);
}
getName({ firstName: "汤冯涛"});//参数顺序可调 */

//3、函数类型接口，对方法传入参数和返回值进行约束
/* interface encrypt{

    (K: string, v: string): string;
}
var md:encrypt = function (k: string, v: string):string{
    return k + v;
}
console.log(md("name", "汤冯涛")); */

//4、可索引接口,对数组、对象进行约束
/* interface uArr{
    [index: number]: string;
}
var uarr:uArr = ["123", "123"];
console.log(arr[0]);

interface uObj{
    [indx: string]: string;
}
var uobj: uObj = { name: "汤冯涛"}; */

//5、类类型接口  对类的约束
/* interface uAnimal{
    name: string;

    jump(str: string): void; 
}

class tiger implements uAnimal{
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    jump() {
        console.log(this.name + "吃肉"); 
    }
}

var t = new tiger("老虎");
t.jump(); */

//6、接口扩展,接口继承接口
/* interface uAnimal{
    eat(): void;
}

interface uPerson extends uAnimal{
    work(): void;
}

class pig implements uPerson{
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    eat() {
        console.log(this.name + "吃肉"); 
    }

    work() {
        console.log(this.name + "工作");
    }
}

var p = new pig("汤冯涛");
p.work(); */

//---------------------------
/* 
泛型
泛型创建可重用组件，一个组件支持多种类型数据，解决 类 接口 方法的复用性问题，以继对不特定数据类型的支持
*/
/*     // "T代表泛型"
function getData<T>(value: T): T{
    return value;
}
    //传入参数和返回参数一致
getData<number>(123);
getData<string>("汤冯涛");
getData<boolean>(true); */

//泛型接口
interface uConfig{
   <T> (value: T): T;
}

var uData: uConfig = function<T> (value: T): T{
    return value;
}

uData<string>("汤冯涛");
uData<number>(123);
//不同写法
interface uConfig1 <T> {
   (value1: T): T;
 }
 
function uData1<T> (value1: T): T{
     return value1;
 }
 
var myData: uConfig1<string> = uData1;
 uData1("汤冯涛");
 uData1(123);
 
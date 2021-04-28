/**
 * 函数
 * 推荐用let代替var
 */

//函数定义
//ts
    //3 指定类型
function run3(): string{
        return "string"//在使用 return 语句时，函数会停止执行，并返回指定的值.一个函数只能有一个 return 语句。返回值的类型需要与函数定义的返回类型(return_type)一致
}
    //4 匿名函数指定类型
    /* 
    将匿名函数赋值给一个变量，这种表达式就成为匿名函数,一个没有函数名的函数
    匿名函数在程序运行时动态声明
    */
var run4 = function (): number{
    return  123;
}//匿名函数自调用在函数后使用 () 即可

alert(run3());
    //5 定义方法传参 
function getInfo(name: string, age: number): string{
    return `${name}---${age}`;
}
alert(getInfo("tft", 22));
    //6 匿名函数传参
var getInfo1 = function (name:string,age:number): string{
    return "hlhs";
}
alert(getInfo1("william", 17));

function jump(): void{
    console.log("没有返回值的方法")
}

//可选参数，es5形参和实参可以不一样，ts中必须一样，若不一样则配置可选参数
//可选参数age？ 
function getInfo2(name: string, age?: number):string {
    return "可选参数"
}
//剩余参数，三点运算符,接收形参传过来的值
function sum(...result: number[]): number{
    var sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum +=  result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4));

//重载
/* 
    重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
    每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表
    如果参数类型不同，则参数类型应设置为 any。
    参数数量不同你可以将不同的参数设置为可选

    参数数量不同、参数类型不同、参数类型顺序不同
*/
function css(config: any): any;
function css(name: string): string;
function css(name: string,age:number): void;
function css(age: number): number;
function css(str: any): any{
    if (typeof str == "string") {
        return str;
    } else {
        return "我是" + str;
    }
}

//箭头函数(Lambda 函数)
/* 箭头函数能保存函数创建时的this值，而不是调用时的值：
    箭头函数的this指向上下文 */
setTimeout(()=> {
    alert("run");
}, 1000);
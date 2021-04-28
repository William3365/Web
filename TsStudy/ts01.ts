//ts编译成es5，目录下自动生成.js文件
//目录下cmd tsc --init，修改json文件outdir
//终端-运行-ts监视
/**
 * 1 区分大小写
 * 2 分号可选
 * 3 兼容es5和es6语法
 */

/*
ts数据类型
    布尔 boolean
    数字 number
    字符串 string
    数组 array
    元组 tuple
    枚举 enum
    任意 any
    null
    undefined
    void
    never
*/

/* 
1、console.log用于输出普通信息
2、console.info 用于输出提示性信息
3、console.error用于输出错误信息
4、console.warn用于输出警示信息
5、console.debug用于输出调试信息
*/

//ts创建变量必须先指定数据类型
var flag: boolean = true
    //var [变量名] : [类型] = 值;
var num: number = 9;
var num1: number = 1.11;
console.log(num);

//也可以将var换成es6中的let
/* 一个字符系列，
    使用单引号（'）或双引号（"）来表示字符串类型。
    反引号（`）来定义多行文本和内嵌表达式
*/
var str: string = "this is ts";
let str1: string = "this is ts";
console.log(str);

//数组
var arr: number[] = [1, 2, 3];
let arr1: any[] = ["js", 123, true];
    //泛型
var arr2: Array<number> = [1, 2, 3];

//元组，属于数组的一种,指定数组类型
var arr3: [string, number, boolean] = ["ts", 1, true];
let arr4: [string, number, boolean] = ["ts", 1, true];

//枚举
enum Flag { success = 1, error = 0 };
var F: Flag = Flag.success;
console.log(F);
console.log(Flag.error);//如果不给赋值，默认打印索引值

//任意类型 
var nn: any = 123;
nn = "dasd";
nn = false;

var box: any = document.getElementById('bobo');
box.style.color = 'red';

//其他数据类型的子类型：null 
//undefined  声明变量的类型,未赋值
var mm: undefined ;//正确
console.log(mm)
var mm1: number ;//报错
console.log(mm)

var mm2: null;
mm2 = null;
//一个元素可能是number可能是null
var mm3: number | null | undefined;
mm3 = 123;
console.log(mm3);

//void,无类型，一般用于定义无返回值的方法
function swim(): void{
    console.log("swim");
}
swim();

//用于初始化变量为一个未定义的值
var a: undefined;
a = undefined;

//表示对象值缺失
var b = null;
b = null;

//never,其他类型，从不会出现的值。never声明的变量只能被never类型所赋值
var c: never;
/**
 * 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
 * <类型>值
 * 值 as 类型
 * 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。
 */
var str2 = "1";
var str3: number = <number><any>str2;
console.log(str2)
var str99 = "99";

var tft0: string = "汤冯涛";//string类型
var tft1: string;//有类型无初始值，默认变量值是undefined
var tft2 = 123;//有初始值无类型，默认任意类型
var tft3;//没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined
"use strict";
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
//ts创建变量必须先指定数据类型
var flag = true;
//var [变量名] : [类型] = 值;
var num = 9;
var num1 = 1.11;
console.log(num);
//也可以将var换成es6中的let
var str = "this is ts";
var str1 = "this is ts";
console.log(str);
//数组，3种
var arr = [1, 2, 3];
var arr1 = ["js", 123, true];
//泛型
var arr2 = [1, 2, 3];
//元组，属于数组的一种,指定数组类型
var arr3 = ["ts", 1, true];
var arr4 = ["ts", 1, true];
//枚举
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
;
var F = Flag.success;
console.log(F);
console.log(Flag.error); //如果不给赋值，默认打印索引值
//任意类型 
var nn = 123;
nn = "dasd";
nn = false;
var box = document.getElementById('bobo');
box.style.color = 'red';
//其他数据类型的子类型：null 
//undefined  声明变量的类型,未赋值
var mm; //正确
console.log(mm);
var mm1; //报错
console.log(mm);
var mm2;
mm2 = null;
//一个元素可能是number可能是null
var mm3;
mm3 = 123;
console.log(mm3);
//void,无类型，一般用于定义无返回值的方法
// function jump(): number{
//     console.log("swim");
//     return 123;
// }
// jump();
// function run() {//es5定义法
//     console.log("run");
// }
// run();
//正确
function swim() {
    console.log("swim");
}
swim();
//never,其他类型，从不会出现的值。never声明的变量只能被never类型所赋值
var a;
a = undefined;
var b = null;
b = null;
var c;
/**
 * 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
 * <类型>值
 * 值 as 类型
 * 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。
 */
var str2 = "1";
var str3 = str2;
console.log(str2);
var str99 = "99";

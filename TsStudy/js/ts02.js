"use strict";
/**
 * 函数
 * 推荐用let代替var
 */
//函数定义
//es5
//1 函数声明法
function run() {
    return "run";
}
//2 匿名函数
var run1 = function () {
    return "run1";
};
//ts
//3 指定类型
function run3() {
    return "string";
}
//4 匿名函数指定类型
var run4 = function () {
    return 123;
};
alert(run3()); //弹窗
//5 定义方法传参 
function getInfo(name, age) {
    return '${name}---${age}'; //有错误，下方调用方法时候，因该显示的是参数，这里无显示
}
alert(getInfo("tft", 22));
//6 匿名函数传参
var getInfo1 = function (name, age) {
    return "hlhs";
};
alert(getInfo1("william", 17));
function jump() {
    console.log("没有返回值的方法");
}
//可选参数，es5形参和实参可以不一样，ts中必须一样，若不一样则配置可选参数
//可选参数age？ 
function getInfo2(name, age) {
    return "可选参数";
}
//剩余参数，三点运算符,接收形参传过来的值
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4));
function css(str) {
    if (typeof str == "string") {
        return str;
    }
    else {
        return "我是" + str;
    }
}
//箭头函数
/* 箭头函数能保存函数创建时的this值，而不是调用时的值：
    箭头函数的this指向上下文 */
setTimeout(function () {
    alert("run");
}, 1000);

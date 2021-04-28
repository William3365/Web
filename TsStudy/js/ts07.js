"use strict";
/*
    装饰器
    1、一种特殊的类型声明，可以附加到类、方法、参数属性上用来扩展其功能
    2、普通装饰器，无法传参
       装饰器工厂，可传参
    3、类装饰器、属性装饰器、方法装饰器、参数装饰器
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//类装饰器，在类声明之前声明，应用于构造函数，可以用来监视、修改、替换类定义，传一个参数
// 装饰器
function logClass(params) {
    console.log(params);
}
var hlhs = /** @class */ (function () {
    function hlhs() {
    }
    hlhs.prototype.getData = function () {
    };
    hlhs = __decorate([
        logClass //引用装饰器
    ], hlhs);
    return hlhs;
}());
//装饰器工厂
function logClass1(params) {
    return function (target) {
        console.log(target);
    };
}
var hlhs1 = /** @class */ (function () {
    function hlhs1() {
    }
    hlhs1.prototype.getData = function () {
    };
    hlhs1 = __decorate([
        logClass1("参数")
    ], hlhs1);
    return hlhs1;
}());

"use strict";
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
var uData = function (value) {
    return value;
};
uData("汤冯涛");
uData(123);
function uData1(value1) {
    return value1;
}
var myData = uData1;
uData1("汤冯涛");
uData1(123);

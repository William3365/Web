/* 
    装饰器
    1、一种特殊的类型声明，可以附加到类、方法、参数属性上用来扩展其功能
    2、普通装饰器，无法传参
       装饰器工厂，可传参
    3、类装饰器、属性装饰器、方法装饰器、参数装饰器
*/

//类装饰器，在类声明之前声明，应用于构造函数，可以用来监视、修改、替换类定义，传一个参数

// 装饰器
/* function logClass(params: any) {
    console.log(params);
}
@logClass//引用装饰器
class hlhs{
    constructor() {
        
    }

    getData() {
        
    }
} */

//装饰器工厂
/* function logClass1(params: string) {
    return function (target: any) {
        console.log(target);//打印的是传递到target的hlhs1这个方法
        console.log(params);//打印的是传递到params的“参数”
        target.prototype.apiUrl = params;
    }
}

@logClass1("参数")
class hlhs1{
    constructor() {
        
    }

    getData() {
        
    }
}

var http: any = new hlhs1();
console.log(http.apiUrl); */

//-----类装饰器
/* 
构造函数重载demo

运行时会被当成函数调用，类的构造函数作为唯一参数
如果类装饰器返回一个值，会使用构造函数来替换类的声明
*/
/* 
function logClass(target: any) {
    console.log(target);
//在装饰器中重载构造函数 
    return class extends target{
        apiUrl:any = "我是修改后的apiUrl"；

        getData() {
           this.apiUrl = this.apiUrl + "--";
            console.log(this.apiUr);
        }
    }
    
}

@logClass
class hlhs{

    public apiUrl: string | undefined;
    
    constructor() {
        this.apiUrl = "我是构造函数里的apiUrl"
    }

    getData() {
        console.log(this.apiUrl);
    }
}

var h = new hlhs();
h.getData(); */

//------属性装饰器
/* 
    接收两个参数
    1、原型对象
    2、当前属性的名称
*/
/* 类装饰器 */
/* function logClass(params: string) {
    return function (target: any) {
        console.log(target);
        console.log(params);
    }
} */
/* 属性装饰器 */
/* function logProterty(params: any) {
    return function (target: any, name: any) {
        console.log(target);
        console.log(name);
        target[name] = params; 
    }
}

@logClass("花里胡哨")
class hlhs{
    @logProterty("汤冯涛")
    public apiUrl: string | undefined;
    
    constructor() {
        // this.apiUrl = "我是构造函数里的apiUrl"
    }

    getData() {
        console.log(this.apiUrl);
    }
}

var h = new hlhs();
h.getData(); */

//-----方法装饰器
/* 
    可以监视、修改、替换方法定义
    三个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
    2、成员的名字
    3、成员的属性描述符
*/
/* function logMethod(params: any) {
    return function (target: any, name: any,desc:any) {
        console.log(target);
        console.log(name);
        console.log(desc);

        target.apiUrl = "xxxxx";
        target.run = function () {
            console.log("run");
        }
    }
}

class hlhs{
    
    public apiUrl: string | undefined;
    
    constructor() {
        // this.apiUrl = "我是构造函数里的apiUrl"
    }
    @logMethod("汤冯涛")
    getData() {
        console.log(this.apiUrl);
    }
}

var h:any = new hlhs();
console.log(h.apiUrl);
h.run(); */

//-----参数装饰器
/* 

*/
"use strict";
//ts最核心的东西 面向对象的编程
//ts面向对象第一节
//类是对象具体事物的一个抽象 对象是类的具体表现
//如何定义一个类 
//以下我们模拟一个找小姐姐的类 
//我们需要知道小姐姐的 姓名啊 年龄啊 并且会说小哥哥好的小姐姐
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    Xiaojiejie.prototype.say = function () {
        console.log("小哥哥好");
    };
    return Xiaojiejie;
}());
var jiejie = new Xiaojiejie("志玲", 18);
console.log(jiejie);
jiejie.say();
